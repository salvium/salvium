#!/usr/bin/env python3
"""Exercise bodyless HTTP compatibility and JSON limits on the actual daemon."""
import requests


def check_http_request_bodies(base_url):
    # Miners poll the plain HTTP height endpoints without a JSON body.
    for endpoint in ('getheight', 'get_height', 'getinfo', 'get_info'):
        for method in ('GET', 'POST'):
            for body in ('', '{}'):
                response = requests.request(method, base_url + '/' + endpoint,
                    data=body, timeout=30)
                assert response.status_code == 200, (endpoint, method, body, response.status_code)
                result = response.json()
                assert result['status'] == 'OK' and result['height'] > 0, result

    # Preserve the same request defaults as an explicit empty object.
    empty = requests.post(base_url + '/get_transactions', data='', timeout=30)
    explicit = requests.post(base_url + '/get_transactions', data='{}', timeout=30)
    assert empty.status_code == explicit.status_code, (empty.status_code, explicit.status_code)
    assert empty.json() == explicit.json(), (empty.text, explicit.text)
    # Malformed JSON and JSON-RPC envelopes must not bypass the strict parser.
    for body in (' ', '{', '{"unused":1', '{}garbage', '{} {}'):
        response = requests.post(base_url + '/getheight', data=body, timeout=30)
        assert response.status_code == 400, (body, response.status_code)
    response = requests.post(base_url + '/json_rpc', data='', timeout=30)
    assert response.json()['error']['code'] == -32700, response.text
    assert requests.get(base_url + '/getheight', timeout=30).json()['status'] == 'OK'


def call(values):
    response = requests.post('http://127.0.0.1:18180/json_rpc', timeout=30,
        json={'jsonrpc': '2.0', 'id': 'budget-test', 'method': 'get_info',
              'params': {'unused': values}})
    response.raise_for_status()
    return response.json()


if __name__ == '__main__':
    check_http_request_bodies('http://127.0.0.1:18180')
    # Match the miner's alternating height and block-template requests.
    for _ in range(5):
        height = requests.get('http://127.0.0.1:18180/getheight', timeout=30).json()['height']
        template = requests.post('http://127.0.0.1:18180/json_rpc', timeout=30,
            json={'jsonrpc': '2.0', 'id': 1, 'method': 'getblocktemplate', 'params': {
                'wallet_address': 'SC11pP3tKp5e5UJwTeTNhXQpv4UsbpmvTDSKRn22X1gLVTfJKyfJMbG6apw15backjJxGgi8pVT1sJA5p1etwT232pL2xUbKUB',
                'reserve_size': 8}}).json()
        assert template['result']['status'] == 'OK', template
        assert template['result']['height'] == height, template
    # Three envelope strings consume part of the shared string budget.
    maximum = 65536 * 3
    accepted = call([''] * (maximum - 3))
    assert accepted['result']['status'] == 'OK', accepted
    rejected = call([''] * (maximum - 2))
    assert 'error' in rejected and rejected['error']['code'] == -32700, rejected
    # The daemon must continue serving valid requests after rejecting the input.
    assert call([])['result']['status'] == 'OK'
    print('RPC JSON allocation boundaries passed')
