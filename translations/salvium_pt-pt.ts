<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt-pt">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53" />
        <source>Invalid destination address</source>
        <translation>Endereço de destino inválido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60" />
        <source>Payment ID supplied: this is obsolete</source>
        <translation>ID de pagamento fornecido: isso está obsoleto</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92" />
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Tentando salvar transação em arquivo, mas existem arquivos especificados. Saindo para não correr o risco de sobrescrever. Arquivo:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99" />
        <source>Failed to write transaction(s) to file</source>
        <translation>Falha ao gravar transação(ões) no arquivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139" />
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon está ocupado. Por favor, tente novamente mais tarde.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>sem conexão com o daemon. Por favor, certifique-se de que o daemon esteja em execução.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146" />
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>a transação %s foi rejeitada pelo daemon com status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151" />
        <source>. Reason: </source>
        <translation>. Razão: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153" />
        <source>Unknown exception: </source>
        <translation>Exceção desconhecida: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156" />
        <source>Unhandled exception</source>
        <translation>Exceção não tratada</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="229" />
        <source>Couldn't multisig sign data: </source>
        <translation>Não foi possível assinar dados multiassinados: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="251" />
        <source>Couldn't sign multisig transaction: </source>
        <translation>Não foi possível assinar a transação multisig: </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75" />
        <source>This is a watch only wallet</source>
        <translation>Esta é uma carteira somente para relógio</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85" />
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92" />
        <source>Failed to sign transaction</source>
        <translation>Falha ao assinar a transação</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168" />
        <source>Claimed change does not go to a paid address</source>
        <translation>O troco reivindicado não vai para um endereço pago</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174" />
        <source>Claimed change is larger than payment to the change address</source>
        <translation>O troco reivindicado é maior que o pagamento para o endereço do troco</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184" />
        <source>Change goes to more than one address</source>
        <translation>A mudança vai para mais de um endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197" />
        <source>sending %s to %s</source>
        <translation>enviando %s para %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203" />
        <source>with no destinations</source>
        <translation>sem destinos</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209" />
        <source>%s change to %s</source>
        <translation>%s mudar para %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212" />
        <source>no change</source>
        <translation>nenhuma mudança</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214" />
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>Transações %lu carregadas, para %s, taxa %s, %s, %s, com tamanho mínimo de anel %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="561" />
        <source>failed to parse address</source>
        <translation>falha ao analisar endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="572" />
        <source>failed to parse secret spend key</source>
        <translation>falha ao analisar chave de gasto secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="587" />
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Nem a chave de visualização nem a chave de gasto foram fornecidas, canceladas</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="595" />
        <source>failed to parse secret view key</source>
        <translation>falha ao analisar a chave de visualização secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="604" />
        <source>failed to verify secret spend key</source>
        <translation>falha ao verificar a chave secreta de gastos</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="608" />
        <source>spend key does not match address</source>
        <translation>a chave de gasto não corresponde ao endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="614" />
        <source>failed to verify secret view key</source>
        <translation>falha ao verificar a chave de visualização secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="618" />
        <source>view key does not match address</source>
        <translation>a chave de visualização não corresponde ao endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="641" />
        <location filename="../src/wallet/api/wallet.cpp" line="658" />
        <source>failed to generate new wallet: </source>
        <translation>falha ao gerar nova carteira: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="706" />
        <source>Electrum seed is empty</source>
        <translation>A semente de electrum está vazia</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="715" />
        <source>Electrum-style word list failed verification</source>
        <translation>A lista de palavras no estilo Electrum falhou na verificação</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1071" />
        <source>Failed to load unsigned transactions</source>
        <translation>Falha ao carregar transações não assinadas</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1094" />
        <source>Failed to load transaction from file</source>
        <translation>Falha ao carregar transação do arquivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1110" />
        <source>Wallet is view only</source>
        <translation>A carteira é somente para visualização</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118" />
        <source>failed to save file </source>
        <translation>falha ao salvar o arquivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1134" />
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>As imagens principais só podem ser importadas com um daemon confiável</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1147" />
        <source>Failed to import key images: </source>
        <translation>Falha ao importar imagens principais: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1158" />
        <location filename="../src/wallet/api/wallet.cpp" line="1188" />
        <source>Not supported on HW wallets.</source>
        <translation>Não suportado em carteiras HW.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169" />
        <source>Failed to save file: </source>
        <translation>Falha ao salvar o arquivo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1176" />
        <source>Error exporting outputs: </source>
        <translation>Erro ao exportar saídas: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1197" />
        <source>Failed to read file: </source>
        <translation>Falha ao ler o arquivo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1209" />
        <source>Failed to import outputs: </source>
        <translation>Falha ao importar saídas: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1220" />
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>Falha ao escanear transações: nenhum ID de transação fornecido.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231" />
        <source>Invalid txid specified: </source>
        <translation>Txid inválido especificado: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1249" />
        <source>Failed to scan transaction: </source>
        <translation>Falha ao escanear transação: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1281" />
        <source>Failed to get subaddress label: </source>
        <translation>Falha ao obter o rótulo do subendereço: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1294" />
        <source>Failed to set subaddress label: </source>
        <translation>Falha ao definir o rótulo do subendereço: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1311" />
        <source>Failed to get multisig info: </source>
        <translation>Falha ao obter informações multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1328" />
        <source>Failed to make multisig: </source>
        <translation>Falha ao fazer multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1342" />
        <source>Failed to exchange multisig keys: </source>
        <translation>Falha ao trocar chaves multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1358" />
        <source>Failed to export multisig images: </source>
        <translation>Falha ao exportar imagens multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1376" />
        <source>Failed to parse imported multisig images</source>
        <translation>Falha ao analisar imagens multisig importadas</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1386" />
        <source>Failed to import multisig images: </source>
        <translation>Falha ao importar imagens multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1400" />
        <source>Failed to check for partial multisig key images: </source>
        <translation>Falha ao verificar imagens parciais de chaves multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1428" />
        <source>Failed to restore multisig transaction: </source>
        <translation>Falha ao restaurar transação multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1477" />
        <source>Sending all requires one destination address</source>
        <translation>O envio de todos requer um endereço de destino</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1481" />
        <source>Destinations and amounts are unequal</source>
        <translation>Destinos e quantidades são desiguais</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489" />
        <source>payment id has invalid format, expected 64 character hex string: </source>
        <translation>o id de pagamento tem formato inválido, string hexadecimal esperada de 64 caracteres: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1497" />
        <source>Invalid destination address</source>
        <translation>Endereço de destino inválido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1503" />
        <source>a single transaction cannot use more than one payment id</source>
        <translation>uma única transação não pode usar mais de um ID de pagamento</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1531" />
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>falha ao configurar o ID de pagamento, embora tenha sido decodificado corretamente</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1556" />
        <location filename="../src/wallet/api/wallet.cpp" line="1647" />
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon está ocupado. Por favor, tente novamente mais tarde.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1558" />
        <location filename="../src/wallet/api/wallet.cpp" line="1649" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>sem conexão com o daemon. Por favor, certifique-se de que o daemon esteja em execução.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1560" />
        <location filename="../src/wallet/api/wallet.cpp" line="1651" />
        <source>RPC error: </source>
        <translation>Erro RPC: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1562" />
        <source>failed to get outputs to mix: %s</source>
        <translation>falha ao obter saídas para mixagem: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1566" />
        <location filename="../src/wallet/api/wallet.cpp" line="1658" />
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>dinheiro insuficiente para transferir, disponível apenas %s, valor enviado %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1573" />
        <location filename="../src/wallet/api/wallet.cpp" line="1666" />
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>dinheiro insuficiente para transferir, saldo total apenas %s, valor enviado %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1580" />
        <location filename="../src/wallet/api/wallet.cpp" line="1674" />
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>dinheiro insuficiente para transferir, disponível apenas %s, valor da transação %s = %s + %s (taxa)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1588" />
        <location filename="../src/wallet/api/wallet.cpp" line="1682" />
        <source>not enough outputs for specified ring size</source>
        <translation>não há saídas suficientes para o tamanho do anel especificado</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590" />
        <location filename="../src/wallet/api/wallet.cpp" line="1684" />
        <source>output amount</source>
        <translation>quantidade de saída</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590" />
        <location filename="../src/wallet/api/wallet.cpp" line="1684" />
        <source>found outputs to use</source>
        <translation>saídas encontradas para usar</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1592" />
        <source>Please sweep unmixable outputs.</source>
        <translation>Por favor, varra as saídas não misturáveis.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1595" />
        <location filename="../src/wallet/api/wallet.cpp" line="1688" />
        <source>transaction was not constructed</source>
        <translation>a transação não foi construída</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1598" />
        <location filename="../src/wallet/api/wallet.cpp" line="1691" />
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>a transação %s foi rejeitada pelo daemon com status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1603" />
        <source>destination amount is zero</source>
        <translation>o valor do destino é zero</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1605" />
        <source>transaction has no destination</source>
        <translation>transação não tem destino</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1607" />
        <location filename="../src/wallet/api/wallet.cpp" line="1698" />
        <source>failed to find a suitable way to split transactions</source>
        <translation>não conseguiu encontrar uma maneira adequada de dividir as transações</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1609" />
        <location filename="../src/wallet/api/wallet.cpp" line="1700" />
        <source>unknown transfer error: </source>
        <translation>erro de transferência desconhecido: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1611" />
        <location filename="../src/wallet/api/wallet.cpp" line="1702" />
        <source>internal error: </source>
        <translation>erro interno: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1613" />
        <location filename="../src/wallet/api/wallet.cpp" line="1704" />
        <source>unexpected error: </source>
        <translation>erro inesperado: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1615" />
        <location filename="../src/wallet/api/wallet.cpp" line="1706" />
        <source>unknown error</source>
        <translation>erro desconhecido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653" />
        <source>failed to get outputs to mix</source>
        <translation>falha ao obter saídas para mixar</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1696" />
        <source>one of destinations is zero</source>
        <translation>um dos destinos é zero</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1816" />
        <location filename="../src/wallet/api/wallet.cpp" line="1852" />
        <location filename="../src/wallet/api/wallet.cpp" line="1900" />
        <location filename="../src/wallet/api/wallet.cpp" line="1928" />
        <location filename="../src/wallet/api/wallet.cpp" line="1956" />
        <location filename="../src/wallet/api/wallet.cpp" line="1977" />
        <location filename="../src/wallet/api/wallet.cpp" line="2498" />
        <source>Failed to parse txid</source>
        <translation>Falha ao analisar txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1836" />
        <source>no tx keys found for this txid</source>
        <translation>nenhuma chave tx encontrada para este txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1860" />
        <location filename="../src/wallet/api/wallet.cpp" line="1869" />
        <source>Failed to parse tx key</source>
        <translation>Falha ao analisar a chave tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1878" />
        <location filename="../src/wallet/api/wallet.cpp" line="1907" />
        <location filename="../src/wallet/api/wallet.cpp" line="1935" />
        <location filename="../src/wallet/api/wallet.cpp" line="2016" />
        <location filename="../src/wallet/api/wallet.cpp" line="2047" />
        <source>Failed to parse address</source>
        <translation>Falha ao analisar endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2021" />
        <source>Address must not be a subaddress</source>
        <translation>O endereço não deve ser um subendereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2052" />
        <source>Address doesn't belong to the wallet</source>
        <translation>O endereço não pertence à carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2076" />
        <source>The wallet must be in multisig ready state</source>
        <translation>A carteira deve estar em estado multisig pronto</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2098" />
        <source>Given string is not a key</source>
        <translation>A sequência fornecida não é uma chave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2361" />
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>O rescan gasto só pode ser usado com um daemon confiável</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2419" />
        <source>Invalid output: </source>
        <translation>Saída inválida: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2426" />
        <source>Failed to mark outputs as spent</source>
        <translation>Falha ao marcar saídas como gastas</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2437" />
        <location filename="../src/wallet/api/wallet.cpp" line="2459" />
        <source>Failed to parse output amount</source>
        <translation>Falha ao analisar o valor de saída</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2442" />
        <location filename="../src/wallet/api/wallet.cpp" line="2464" />
        <source>Failed to parse output offset</source>
        <translation>Falha ao analisar o deslocamento de saída</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2448" />
        <source>Failed to mark output as spent</source>
        <translation>Falha ao marcar a saída como gasta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2470" />
        <source>Failed to mark output as unspent</source>
        <translation>Falha ao marcar a saída como não gasta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2481" />
        <location filename="../src/wallet/api/wallet.cpp" line="2520" />
        <source>Failed to parse key image</source>
        <translation>Falha ao analisar a imagem da chave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2487" />
        <source>Failed to get ring</source>
        <translation>Falha ao obter o anel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2505" />
        <source>Failed to get rings</source>
        <translation>Falha ao obter anéis</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2526" />
        <source>Failed to set ring</source>
        <translation>Falha ao definir o anel</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316" />
        <source>Failed to parse address</source>
        <translation>Falha ao analisar endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323" />
        <source>Failed to parse key</source>
        <translation>Falha ao analisar a chave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="331" />
        <source>failed to verify key</source>
        <translation>falha ao verificar a chave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="341" />
        <source>key does not match address</source>
        <translation>a chave não corresponde ao endereço</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54" />
        <source>yes</source>
        <translation>sim</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68" />
        <source>no</source>
        <translation>não</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92" />
        <source>Specify IP to bind RPC server</source>
        <translation>Especificar IP para vincular o servidor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93" />
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>Especificar endereço IPv6 para vincular servidor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94" />
        <source>Specify IP to bind restricted RPC server</source>
        <translation>Especificar IP para vincular servidor RPC restrito</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95" />
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>Especificar endereço IPv6 para vincular servidor RPC restrito</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96" />
        <source>Allow IPv6 for RPC</source>
        <translation>Permitir IPv6 para RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97" />
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>Ignorar ligação IPv4 malsucedida para RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98" />
        <source>Specify username[:password] required for RPC server</source>
        <translation>Especifique nome de usuário[:senha] necessário para o servidor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99" />
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Confirme que o valor rpc-bind-ip NÃO é um IP de loopback (local)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100" />
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Especifique uma lista de origens separadas por vírgulas para permitir o compartilhamento de recursos entre origens</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101" />
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>Habilitar SSL em conexões RPC: habilitado|desabilitado|autodetectar</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102" />
        <source>Path to a PEM format private key</source>
        <translation>Caminho para uma chave privada no formato PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103" />
        <source>Path to a PEM format certificate</source>
        <translation>Caminho para um certificado de formato PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104" />
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Caminho para o arquivo que contém certificados em formato PEM concatenados para substituir CAs do sistema.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105" />
        <source>List of certificate fingerprints to allow</source>
        <translation>Lista de impressões digitais de certificados a serem permitidas</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106" />
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>Permitir que o usuário (via --rpc-ssl-certificates) encadeie certificados</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107" />
        <source>Allow any peer certificate</source>
        <translation>Permitir qualquer certificado de par</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108" />
        <source>Do not ban hosts on RPC errors</source>
        <translation>Não banir hosts em erros de RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155" />
        <location filename="../src/rpc/rpc_args.cpp" line="183" />
        <location filename="../src/rpc/rpc_args.cpp" line="204" />
        <location filename="../src/rpc/rpc_args.cpp" line="221" />
        <source>Invalid IP address given for --</source>
        <translation>Endereço IP inválido fornecido para --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163" />
        <location filename="../src/rpc/rpc_args.cpp" line="191" />
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> permite conexões externas não criptografadas de entrada. Considere o túnel SSH ou o proxy SSL em vez disso. Substitua por --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242" />
        <source>Username specified with --</source>
        <translation>Nome de usuário especificado com --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242" />
        <source> cannot be empty</source>
        <translation> não pode estar vazio</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4933" />
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>O daemon usa uma versão principal de RPC diferente (%u) da carteira (%u): %s. Atualize uma delas ou use --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7068" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7622" />
        <source>Spending from address index %d
</source>
        <translation>Gastos do índice de endereço %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7083" />
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Sua transação precisa ser dividida em %llu transações. Isso resultará em uma taxa de transação sendo aplicada a cada transação, para uma taxa total de %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7089" />
        <source>The transaction fee is %s</source>
        <translation>A taxa de transação é %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7092" />
        <source>, of which %s is dust from change</source>
        <translation>, dos quais %s são poeira da mudança</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093" />
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Um total de %s da mudança de poeira será enviado para o endereço de poeira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7376" />
        <source>Not enough money in unlocked balance</source>
        <translation>Não há dinheiro suficiente no saldo desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421" />
        <source>No address given</source>
        <translation>Nenhum endereço fornecido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7487" />
        <source>missing lockedblocks parameter</source>
        <translation>parâmetro bloqueados ausente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497" />
        <source>bad locked_blocks parameter</source>
        <translation>parâmetro bloqueado_blocos inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7793" />
        <source>failed to parse Payment ID</source>
        <translation>falha ao analisar o ID do pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2273" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7816" />
        <source>failed to parse key image</source>
        <translation>falha ao analisar a imagem da chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7854" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8084" />
        <source>No outputs found</source>
        <translation>Nenhuma saída encontrada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8089" />
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Várias transações são criadas, o que não deveria acontecer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7864" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8094" />
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>A transação usa múltiplas entradas ou nenhuma entrada, o que não deveria acontecer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8175" />
        <source>Money successfully sent, transaction: </source>
        <translation>Dinheiro enviado com sucesso, transação: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989" />
        <source>missing threshold amount</source>
        <translation>valor limite ausente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7995" />
        <source>invalid amount threshold</source>
        <translation>limite de valor inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8593" />
        <source>Claimed change does not go to a paid address</source>
        <translation>O troco reivindicado não vai para um endereço pago</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8598" />
        <source>Claimed change is larger than payment to the change address</source>
        <translation>O troco reivindicado é maior que o pagamento para o endereço do troco</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8607" />
        <source>Change goes to more than one address</source>
        <translation>A mudança vai para mais de um endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8629" />
        <source>sending %s to %s</source>
        <translation>enviando %s para %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8639" />
        <source> dummy output(s)</source>
        <translation> saída(s) fictícia(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8642" />
        <source>with no destinations</source>
        <translation>sem destinos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8651" />
        <source>no change</source>
        <translation>nenhuma mudança</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5750" />
        <source>Daemon is local, assuming trusted</source>
        <translation>O daemon é local, assumindo que é confiável</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5413" />
        <source>Password for new watch-only wallet</source>
        <translation>Senha para nova carteira somente para relógios</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413" />
        <source>false</source>
        <translation>falso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="775" />
        <source>Commands: </source>
        <translation>Comandos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="789" />
        <source>Unknown command: </source>
        <translation>Comando desconhecido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796" />
        <source>Command usage: </source>
        <translation>Uso do comando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="799" />
        <source>Command description: </source>
        <translation>Descrição do comando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="825" />
        <source>wallet is watch-only and has no spend key</source>
        <translation>a carteira é somente para relógio e não tem chave de gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="851" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="923" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1069" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1116" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1219" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1284" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1352" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1448" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1566" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1648" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8680" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8758" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8804" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9124" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9208" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10847" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10949" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11002" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11110" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11159" />
        <source>command not supported by HW wallet</source>
        <translation>comando não suportado pela carteira HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="933" />
        <source>wallet is watch-only and has no seed</source>
        <translation>a carteira é somente para relógio e não tem semente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="865" />
        <source>wallet is multisig but not yet finalized</source>
        <translation>a carteira é multisig mas ainda não finalizada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="874" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="943" />
        <source>wallet is non-deterministic and has no seed</source>
        <translation>a carteira não é determinística e não tem semente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898" />
        <source>Failed to retrieve seed</source>
        <translation>Falha ao recuperar a semente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928" />
        <source>wallet is multisig and has no seed</source>
        <translation>a carteira é multisig e não tem seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="953" />
        <source>Incorrect password</source>
        <translation>Senha incorreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1153" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1236" />
        <source>Your original password was incorrect.</source>
        <translation>Sua senha original estava incorreta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="990" />
        <source>Error with wallet rewrite: </source>
        <translation>Erro ao reescrever a carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10608" />
        <source>Random payment ID: </source>
        <translation>ID de pagamento aleatório: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1011" />
        <source>Current fee is %s %s per %s</source>
        <translation>A taxa atual é de %s %s por %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603" />
        <source>Payment required, see the 'rpc_payment_info' command</source>
        <translation>Pagamento necessário, veja o comando &amp;#39;rpc_payment_info&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027" />
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Erro: falha ao estimar o tamanho da matriz de backlog: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1032" />
        <source>Error: bad estimated backlog array size</source>
        <translation>Erro: tamanho estimado incorreto do array de backlog</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1044" />
        <source> (current)</source>
        <translation> (atual)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1047" />
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u bloco (%u minutos) backlog na prioridade %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049" />
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u para %u bloco (%u para %u minutos) backlog na prioridade %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1052" />
        <source>No backlog at priority </source>
        <translation>Sem pendências na prioridade </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1074" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1121" />
        <source>This wallet is already multisig</source>
        <translation>Esta carteira já é multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1079" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1126" />
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>a carteira é somente para relógio e não pode ser tornada multiassinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1132" />
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Esta carteira já foi usada antes, use uma nova carteira para criar uma carteira multiassinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1093" />
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>Envie essas informações multisig para todos os outros participantes e use make_multisig&lt;threshold&gt;&lt;info1&gt; [&lt;info2&gt; ...] com informações multisig de outros</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1094" />
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet's participants </source>
        <translation>Isso inclui a chave de visualização PRIVATE, portanto, precisa ser divulgada apenas para os participantes dessa carteira multisig </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1146" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890" />
        <source>Invalid threshold</source>
        <translation>Limite inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1168" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1247" />
        <source>Another step is needed</source>
        <translation>Mais um passo é necessário</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180" />
        <source>Error creating multisig: </source>
        <translation>Erro ao criar multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1187" />
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Erro ao criar multisig: a nova carteira não é multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190" />
        <source> multisig address: </source>
        <translation> endereço multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1224" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1289" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357" />
        <source>This wallet is not multisig</source>
        <translation>Esta carteira não é multiassinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229" />
        <source>This wallet is already finalized</source>
        <translation>Esta carteira já está finalizada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259" />
        <source>Multisig address: </source>
        <translation>Endereço multiassinatura: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1294" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1362" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1458" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1576" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1658" />
        <source>This multisig wallet is not yet finalized</source>
        <translation>Esta carteira multisig ainda não foi finalizada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10983" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11140" />
        <source>failed to save file </source>
        <translation>falha ao salvar o arquivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330" />
        <source>Error exporting multisig info: </source>
        <translation>Erro ao exportar informações multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1334" />
        <source>Multisig info exported to </source>
        <translation>Informações multisig exportadas para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10896" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10922" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173" />
        <source>failed to read file </source>
        <translation>falha ao ler o arquivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1406" />
        <source>Failed to import multisig info: </source>
        <translation>Falha ao importar informações multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1417" />
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Falha ao atualizar o status gasto após importar informações multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423" />
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run "rescan_spent"</source>
        <translation>Daemon não confiável, o status gasto pode estar incorreto. Use um daemon confiável e execute &amp;quot;rescan_spent&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1571" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653" />
        <source>This is not a multisig wallet</source>
        <translation>Esta não é uma carteira multiassinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1503" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1512" />
        <source>Failed to sign multisig transaction</source>
        <translation>Falha ao assinar transação multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1519" />
        <source>Multisig error: </source>
        <translation>Erro multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524" />
        <source>Failed to sign multisig transaction: </source>
        <translation>Falha ao assinar transação multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1533" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1546" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8739" />
        <source>Transaction successfully signed to file </source>
        <translation>Transação assinada com sucesso para arquivar </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547" />
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Pode ser retransmitido para a rede com submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1608" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1679" />
        <source>Failed to load multisig transaction from file</source>
        <translation>Falha ao carregar transação multisig do arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1684" />
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Transação multiassinada assinada por apenas %u signatários, precisa de mais %u assinaturas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1623" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11383" />
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transação enviada com sucesso, transação </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11384" />
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>Você pode verificar seu status usando o comando `show_transfers`.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1634" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1714" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6119" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6456" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7175" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7205" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7395" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7687" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7714" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7923" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7952" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8157" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8186" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8783" />
        <source>unknown error</source>
        <translation>erro desconhecido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1700" />
        <source>Failed to export multisig transaction to file </source>
        <translation>Falha ao exportar transação multisig para arquivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1704" />
        <source>Saved exported multisig transaction file(s): </source>
        <translation>Arquivo(s) de transação multisig exportado(s) salvo(s): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1709" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2050" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6114" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6451" />
        <source>unexpected error: </source>
        <translation>erro inesperado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1732" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1889" />
        <source>Invalid key image</source>
        <translation>Imagem de chave inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1738" />
        <source>Invalid txid</source>
        <translation>txid inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1765" />
        <source>Failed to get key image ring: </source>
        <translation>Falha ao obter o anel de imagem da chave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780" />
        <source>File doesn't exist</source>
        <translation>O arquivo não existe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802" />
        <source>Invalid ring specification: </source>
        <translation>Especificação de anel inválida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1810" />
        <source>Invalid key image: </source>
        <translation>Imagem de chave inválida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1815" />
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>Tipo de anel inválido, esperado relativo ou absoluto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1821" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1833" />
        <source>Error reading line: </source>
        <translation>Erro ao ler a linha: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844" />
        <source>Invalid ring: </source>
        <translation>Anel inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1853" />
        <source>Invalid relative ring: </source>
        <translation>Anel relativo inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1865" />
        <source>Invalid absolute ring: </source>
        <translation>Anel absoluto inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874" />
        <source>Failed to set ring for key image: </source>
        <translation>Falha ao definir o anel para a imagem da chave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874" />
        <source>Continuing.</source>
        <translation>Continuando.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1904" />
        <source>Missing absolute or relative keyword</source>
        <translation>Palavra-chave absoluta ou relativa ausente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1921" />
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>índice inválido: deve ser um inteiro estritamente positivo sem sinal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929" />
        <source>invalid index: indices wrap</source>
        <translation>índice inválido: índices wrap</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939" />
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>índice inválido: os índices devem estar em ordem estritamente crescente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946" />
        <source>failed to set ring</source>
        <translation>falha ao definir o anel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1969" />
        <source>Invalid key image or txid</source>
        <translation>Imagem de chave ou txid inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1978" />
        <source>failed to unset ring</source>
        <translation>falha ao desfazer o anel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2001" />
        <source>RPC client ID: </source>
        <translation>ID do cliente RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002" />
        <source>RPC client secret key: </source>
        <translation>Chave secreta do cliente RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2005" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434" />
        <source>Failed to query daemon</source>
        <translation>Falha ao consultar o daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2013" />
        <source>Using daemon: </source>
        <translation>Usando daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014" />
        <source>Payments required for node use, current credits: </source>
        <translation>Pagamentos necessários para uso do nó, créditos atuais: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2015" />
        <source>Credits target: </source>
        <translation>Créditos alvo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2018" />
        <source>Credits spent this session: </source>
        <translation>Créditos gastos nesta sessão: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2020" />
        <source>Credit discrepancy this session: </source>
        <translation>Discrepância de crédito nesta sessão: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <source>Difficulty: </source>
        <translation>Dificuldade: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <source>credits per hash found, </source>
        <translation>créditos por hash encontrado, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>credits/hash</source>
        <translation>créditos/hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2030" />
        <source>Mining for payment at %.1f H/s</source>
        <translation>Mineração para pagamento em %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2035" />
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>Tempo estimado até que %u créditos alvo sejam minerados: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039" />
        <source>Mining for payment</source>
        <translation>Mineração para pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2042" />
        <source>Not mining</source>
        <translation>Não mineração</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2045" />
        <source>No payment needed for node use</source>
        <translation>Nenhum pagamento necessário para uso do nó</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118" />
        <source>Bad argument: </source>
        <translation>Mau argumento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118" />
        <source>should be "add"</source>
        <translation>deveria ser &amp;quot;adicionar&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2127" />
        <source>Failed to open file</source>
        <translation>Falha ao abrir o arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211" />
        <source>Failed to save known rings: </source>
        <translation>Falha ao salvar anéis conhecidos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220" />
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>uso: %s&lt;key_image&gt; |&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2265" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2277" />
        <source>Frozen: </source>
        <translation>Congelado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279" />
        <source>Not frozen: </source>
        <translation>Não congelado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293" />
        <source> bytes sent</source>
        <translation> bytes enviados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294" />
        <source> bytes received</source>
        <translation> bytes recebidos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2306" />
        <source>No known public nodes</source>
        <translation>Nenhum nó público conhecido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>address</source>
        <translation>endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>last_seen</source>
        <translation>visto_pela_última vez</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2324" />
        <source>never</source>
        <translation>nunca</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2332" />
        <source>Error retrieving public node list: </source>
        <translation>Erro ao recuperar lista de nós públicos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2342" />
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium, assim como Bitcoin, é uma criptomoeda. Ou seja, é dinheiro digital.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2346" />
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>A Salvium protege sua privacidade no blockchain e, embora a Salvium se esforce para melhorar o tempo todo,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2347" />
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>nenhuma tecnologia de privacidade pode ser 100% perfeita, incluindo o Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2348" />
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>O Salvium não pode proteger você contra malware e pode não ser tão eficaz quanto esperamos contra adversários poderosos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2349" />
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>Falhas no Salvium podem ser descobertas no futuro, e ataques podem ser desenvolvidos para espiar por baixo de alguns</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2350" />
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>das camadas de privacidade que o Salvium fornece. Esteja seguro e pratique a defesa em profundidade.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439" />
        <source>Daemon does not require payment for RPC access</source>
        <translation>O Daemon não exige pagamento para acesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447" />
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>Iniciando mineração para acesso RPC: diff %llu, %f créditos/hash%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448" />
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>Execute stop_mining_for_rpc para parar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550" />
        <source>wallet is watch-only and cannot transfer</source>
        <translation>a carteira é somente para assistir e não pode ser transferida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7117" />
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>AVISO: este é um tamanho de anel não padrão, o que pode prejudicar sua privacidade. O padrão é recomendado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2595" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2611" />
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>a prioridade deve ser 0, 1, 2, 3 ou 4, ou um dos seguintes: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2616" />
        <source>could not change default priority</source>
        <translation>não foi possível alterar a prioridade padrão</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2702" />
        <source>invalid unit</source>
        <translation>unidade inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2738" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800" />
        <source>invalid count: must be an unsigned integer</source>
        <translation>contagem inválida: deve ser um inteiro sem sinal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2720" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756" />
        <source>invalid value</source>
        <translation>valor inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2834" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2952" />
        <source>Invalid height</source>
        <translation>Altura inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2907" />
        <source>Invalid target</source>
        <translation>Alvo inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2983" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3002" />
        <source>Invalid amount</source>
        <translation>Quantidade inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3072" />
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>argumento inválido: deve ser 1/sim ou 0/não</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3340" />
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Comece a minerar no daemon (bg_mining e ignore_battery são booleanos opcionais).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3343" />
        <source>Stop mining in the daemon.</source>
        <translation>Pare de minerar no daemon.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350" />
        <source>Save the current blockchain data.</source>
        <translation>Salve os dados atuais do blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353" />
        <source>Synchronize the transactions and balance.</source>
        <translation>Sincronize as transações e o saldo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3357" />
        <source>Show the wallet's balance of the currently selected account.</source>
        <translation>Exibe o saldo da carteira da conta selecionada no momento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3361" />
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent("T"|"F"), "frozen"|"locked"|"unlocked", RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation>Exibe as transferências de entrada, todas ou filtradas por disponibilidade e índice de endereço. Formato de saída: Quantidade, Gasto(&amp;quot;T&amp;quot;|&amp;quot;F&amp;quot;), &amp;quot;congelado&amp;quot;|&amp;quot;bloqueado&amp;quot;|&amp;quot;desbloqueado&amp;quot;, RingCT, Índice global, Hash de transação, Índice de endereço, [Chave pública, Imagem de chave] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3367" />
        <source>Show the payments for the given payment IDs.</source>
        <translation>Mostrar os pagamentos para os IDs de pagamento fornecidos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3370" />
        <source>Show the blockchain height.</source>
        <translation>Mostrar a altura do blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384" />
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Envie todas as saídas não mixáveis para você mesmo com ring_size 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394" />
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Envie todas as saídas desbloqueadas abaixo do limite para um endereço.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3398" />
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Envie uma única saída da imagem de chave fornecida para um endereço sem alterações.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3434" />
        <source>Sign a transaction from a file. If the parameter "export_raw" is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default "unsigned_salvium_tx" will be used.</source>
        <translation>Assine uma transação de um arquivo. Se o parâmetro &amp;quot;export_raw&amp;quot; for especificado, os dados hexadecimais brutos da transação adequados para o daemon RPC /sendrawtransaction serão exportados. Use o parâmetro&lt;filename&gt; para especificar o arquivo para ler. Se não for especificado, o padrão &amp;quot;unsigned_salvium_tx&amp;quot; será usado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438" />
        <source>Submit a signed transaction from a file.</source>
        <translation>Envie uma transação assinada de um arquivo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3442" />
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Altera os detalhes do log atual (o nível deve ser &amp;lt;0-4&amp;gt;).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3446" />
        <source>If no arguments are specified, the wallet shows all the existing accounts along with their balances.
If the "new" argument is specified, the wallet creates a new account with its label initialized by the provided label text (which can be empty).
If the "switch" argument is specified, the wallet switches to the account specified by &lt;index&gt;.
If the "label" argument is specified, the wallet sets the label of the account specified by &lt;index&gt; to the provided label text.
If the "tag" argument is specified, a tag &lt;tag_name&gt; is assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt;, ....
If the "untag" argument is specified, the tags assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt; ..., are removed.
If the "tag_description" argument is specified, the tag &lt;tag_name&gt; is assigned an arbitrary text &lt;description&gt;.</source>
        <translation>Se nenhum argumento for especificado, a carteira mostra todas as contas existentes junto com seus saldos. Se o argumento &amp;quot;new&amp;quot; for especificado, a carteira cria uma nova conta com seu rótulo inicializado pelo texto do rótulo fornecido (que pode estar vazio). Se o argumento &amp;quot;switch&amp;quot; for especificado, a carteira alterna para a conta especificada por&lt;index&gt; . Se o argumento &amp;quot;label&amp;quot; for especificado, a carteira define o rótulo da conta especificada por&lt;index&gt; para o texto do rótulo fornecido. Se o argumento &amp;quot;tag&amp;quot; for especificado, uma tag&lt;tag_name&gt; é atribuído às contas especificadas&lt;account_index_1&gt; ,&lt;account_index_2&gt; , .... Se o argumento &amp;quot;untag&amp;quot; for especificado, as tags atribuídas às contas especificadas&lt;account_index_1&gt; ,&lt;account_index_2&gt; ..., são removidos. Se o argumento &amp;quot;tag_description&amp;quot; for especificado, a tag&lt;tag_name&gt; é atribuído um texto arbitrário&lt;description&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3460" />
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Codifique um ID de pagamento em um endereço integrado para o endereço público da carteira atual (nenhum argumento usa um ID de pagamento aleatório) ou decodifique um endereço integrado para um endereço padrão e ID de pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3464" />
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Imprima todas as entradas no catálogo de endereços, opcionalmente adicionando/excluindo uma entrada dele/dela.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3467" />
        <source>Save the wallet data.</source>
        <translation>Salve os dados da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470" />
        <source>Save a watch-only keys file.</source>
        <translation>Salve um arquivo de chaves somente para observação.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3473" />
        <source>Display the private view key.</source>
        <translation>Exibir a chave de visualização privada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3476" />
        <source>Display the private spend key.</source>
        <translation>Exibir a chave de gasto privada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479" />
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Exibir a semente mnemônica no estilo Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561" />
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Exibe a semente mnemônica criptografada no estilo Electrum.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564" />
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Examine novamente o blockchain em busca de saídas gastas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568" />
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Obter a chave de transação (r) para um dado&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572" />
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Defina a chave de transação (r) para um determinado&lt;txid&gt; caso a transação tenha sido feita por algum outro dispositivo ou carteira de terceiros.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576" />
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Verifique o valor que vai para&lt;address&gt; em&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3580" />
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet's address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Gerar uma assinatura comprovando os fundos enviados para&lt;address&gt; em&lt;txid&gt; , opcionalmente com uma string de desafio&lt;message&gt; , usando a chave secreta da transação (quando&lt;address&gt; não é o endereço da sua carteira) ou a chave secreta da visualização (caso contrário), que não revela a chave secreta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3584" />
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Verifique a prova de fundos destinados a&lt;address&gt; em&lt;txid&gt; com a corda do desafio&lt;message&gt; se houver.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3588" />
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Gere uma assinatura comprovando que você gerou&lt;txid&gt; usando a chave secreta spend, opcionalmente com uma string de desafio&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3592" />
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Verifique uma assinatura que comprove que o signatário gerou&lt;txid&gt; , opcionalmente com uma string de desafio&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3596" />
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If 'all' is specified, you prove the entire sum of all of your existing accounts' balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Gere uma assinatura provando que você possui pelo menos essa quantia, opcionalmente com uma string de desafio&lt;message&gt; . Se &amp;#39;all&amp;#39; for especificado, você prova a soma total de todos os saldos de suas contas existentes. Caso contrário, você prova a reserva do menor valor possível acima&lt;amount&gt; disponível na sua conta corrente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602" />
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Verifique uma assinatura que comprove que o proprietário de&lt;address&gt; contém pelo menos isso, opcionalmente com uma string de desafio&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3623" />
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Exibe as saídas não gastas de um endereço especificado dentro de um intervalo de valor opcional.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3631" />
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Defina uma nota de string arbitrária para um&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3635" />
        <source>Get a string note for a txid.</source>
        <translation>Obtenha uma nota de string para um txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3639" />
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Defina uma descrição arbitrária para a carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3643" />
        <source>Get the description of the wallet.</source>
        <translation>Veja a descrição da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3646" />
        <source>Show the wallet's status.</source>
        <translation>Mostrar o status da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3649" />
        <source>Show the wallet's information.</source>
        <translation>Mostrar as informações da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3657" />
        <source>Verify a signature on the contents of a file.</source>
        <translation>Verifique uma assinatura no conteúdo de um arquivo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3665" />
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importe uma lista de imagens de chaves assinadas e verifique seu status gasto.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3673" />
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Tenta reconectar a carteira HW.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677" />
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Exporte um conjunto de saídas de propriedade desta carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3681" />
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importe um conjunto de saídas de propriedade desta carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3685" />
        <source>Show information about a transfer to/from this address.</source>
        <translation>Mostrar informações sobre uma transferência de/para este endereço.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3688" />
        <source>Change the wallet's password.</source>
        <translation>Altere a senha da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3695" />
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Imprima as informações sobre a taxa atual e o backlog de transações.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3697" />
        <source>Export data needed to create a multisig wallet</source>
        <translation>Exportar dados necessários para criar uma carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3700" />
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Transforme esta carteira em uma carteira multiassinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3708" />
        <source>Export multisig info for other participants</source>
        <translation>Exportar informações multisig para outros participantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3712" />
        <source>Import multisig info from other participants</source>
        <translation>Importar informações multisig de outros participantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3716" />
        <source>Sign a multisig transaction from a file</source>
        <translation>Assinar uma transação multisig de um arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3720" />
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Enviar uma transação multisig assinada de um arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3724" />
        <source>Export a signed multisig transaction to a file</source>
        <translation>Exportar uma transação multisig assinada para um arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3815" />
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, "absolute", list of rings</source>
        <translation>Imprima o(s) anel(ais) usado(s) para gastar uma determinada imagem de chave ou transação (se o tamanho do anel for &amp;gt; 1) Formato de saída: Imagem de chave, &amp;quot;absoluto&amp;quot;, lista de anéis</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3821" />
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Defina o anel usado para uma determinada imagem de chave, para que possa ser reutilizado em um fork</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3825" />
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>Desconfigura o anel usado para uma determinada imagem de chave ou transação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3829" />
        <source>Save known rings to the shared rings database</source>
        <translation>Salvar anéis conhecidos no banco de dados de anéis compartilhados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845" />
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>Congele uma única saída por imagem-chave para que ela não seja usada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3849" />
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>Descongele uma única saída por imagem-chave para que ela possa ser usada novamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3853" />
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>Verifica se uma determinada saída está congelada no momento pela imagem da chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3861" />
        <source>Prints simple network stats</source>
        <translation>Imprime estatísticas de rede simples</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3865" />
        <source>Lists known public nodes</source>
        <translation>Lista nós públicos conhecidos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3869" />
        <source>Prints basic info about Salvium for first time users</source>
        <translation>Imprime informações básicas sobre Salvium para usuários iniciantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3873" />
        <source>Returns version information</source>
        <translation>Retorna informações da versão</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3877" />
        <source>Get info about RPC payments to current node</source>
        <translation>Obtenha informações sobre pagamentos RPC para o nó atual</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881" />
        <source>Start mining to pay for RPC access</source>
        <translation>Comece a minerar para pagar pelo acesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3885" />
        <source>Stop mining to pay for RPC access</source>
        <translation>Pare de minerar para pagar pelo acesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3893" />
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Mostrar a seção de ajuda ou a documentação sobre um&lt;command&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984" />
        <source>needs an argument</source>
        <translation>precisa de um argumento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998" />
        <source>set seed: needs an argument. available options: language</source>
        <translation>set seed: precisa de um argumento. opções disponíveis: idioma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4007" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4008" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4009" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4010" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4018" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4019" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4021" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4023" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4024" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4025" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4028" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4031" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4037" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4038" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4041" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4042" />
        <source>0 or 1</source>
        <translation>0 ou 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4011" />
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (mais lento, sem suposições); optimize-coinbase (rápido, assume que toda a coinbase é paga para um único endereço); no-coinbase (mais rápido, assume que não recebemos nenhuma transação coinbase), default (o mesmo que optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4012" />
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0, 1, 2, 3 ou 4, ou um dos </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4013" />
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (ou nunca|ação|decifrar)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4015" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4027" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040" />
        <source>unsigned integer</source>
        <translation>inteiro sem sinal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4017" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4029" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4030" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>amount</source>
        <translation>quantia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4022" />
        <source>block height</source>
        <translation>altura do bloco</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4026" />
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;major&gt;:&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4034" />
        <source>1/yes or 0/no</source>
        <translation>1/sim ou 0/não</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4039" />
        <source>floating point &gt;= 0</source>
        <translation>ponto flutuante &amp;gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044" />
        <source>set: unrecognized argument(s)</source>
        <translation>conjunto: argumento(s) não reconhecido(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4102" />
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Nome da carteira inválido. Tente novamente ou use Ctrl-C para sair.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4114" />
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Tentando gerar ou restaurar carteira, mas existem arquivos especificados. Saindo para não correr o risco de sobrescrever.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4119" />
        <source>Wallet and key files found, loading...</source>
        <translation>Arquivos de carteira e chave encontrados, carregando...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4125" />
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Arquivo de chave encontrado, mas não arquivo de carteira. Regenerando...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4131" />
        <source>Key file not found. Failed to open wallet: </source>
        <translation>Arquivo de chave não encontrado. Falha ao abrir carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4139" />
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Nenhuma carteira encontrada com esse nome. Confirme a criação de uma nova carteira chamada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150" />
        <source>Generating new wallet...</source>
        <translation>Gerando nova carteira...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231" />
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>Não é possível especificar mais de um de --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4247" />
        <source>can't specify more than one of --generate-new-wallet="wallet_name", --wallet-file="wallet_name", --generate-from-view-key="wallet_name", --generate-from-spend-key="wallet_name", --generate-from-keys="wallet_name", --generate-from-multisig-keys="wallet_name", --generate-from-json="jsonfilename" and --generate-from-device="wallet_name"</source>
        <translation>não é possível especificar mais de um dos seguintes: --generate-new-wallet=&amp;quot;nome_da_carteira&amp;quot;, --wallet-file=&amp;quot;nome_da_carteira&amp;quot;, --generate-from-view-key=&amp;quot;nome_da_carteira&amp;quot;, --generate-from-spend-key=&amp;quot;nome_da_carteira&amp;quot;, --generate-from-keys=&amp;quot;nome_da_carteira&amp;quot;, --generate-from-multisig-keys=&amp;quot;nome_da_carteira&amp;quot;, --generate-from-json=&amp;quot;nome_do_arquivo_json&amp;quot; e --generate-from-device=&amp;quot;nome_da_carteira&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277" />
        <source>can't specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>não é possível especificar --restore-deterministic-wallet ou --restore-multisig-wallet e --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4283" />
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet usa --generate-new-wallet, não --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4285" />
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet usa --generate-new-wallet, não --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4299" />
        <source>specify a recovery parameter with the --electrum-seed="multisig seed here"</source>
        <translation>especifique um parâmetro de recuperação com --electrum-seed=&amp;quot;multisig seed here&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314" />
        <source>specify a recovery parameter with the --electrum-seed="words list here"</source>
        <translation>especifique um parâmetro de recuperação com --electrum-seed=&amp;quot;lista de palavras aqui&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328" />
        <source>Multisig seed failed verification</source>
        <translation>Falha na verificação da semente multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337" />
        <source>Electrum-style word list failed verification</source>
        <translation>A lista de palavras no estilo Electrum falhou na verificação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4357" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4377" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4413" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4434" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4454" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4469" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4518" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4543" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4559" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4598" />
        <source>No data supplied, cancelled</source>
        <translation>Nenhum dado fornecido, cancelado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4363" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4440" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4549" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6889" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7562" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7823" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8932" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9000" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9064" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9268" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10660" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10929" />
        <source>failed to parse address</source>
        <translation>falha ao analisar endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4368" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4445" />
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Este endereço é um subendereço que não pode ser usado aqui.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4383" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4475" />
        <source>failed to parse view key secret key</source>
        <translation>falha ao analisar a chave de visualização da chave secreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4392" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4492" />
        <source>failed to verify view key secret key</source>
        <translation>falha ao verificar a chave de visualização da chave secreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4396" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4496" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4578" />
        <source>view key does not match standard address</source>
        <translation>a chave de visualização não corresponde ao endereço padrão</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4401" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4422" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4500" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4661" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4693" />
        <source>account creation failed</source>
        <translation>falha na criação da conta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4418" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4460" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4603" />
        <source>failed to parse spend key secret key</source>
        <translation>falha ao analisar a chave secreta da chave de gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4484" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4623" />
        <source>failed to verify spend key secret key</source>
        <translation>falha ao verificar a chave secreta da chave de gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4488" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628" />
        <source>spend key does not match standard address</source>
        <translation>a chave de gasto não corresponde ao endereço padrão</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4523" />
        <source>Error: expected M/N, but got: </source>
        <translation>Erro: esperava M/N, mas obteve: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4528" />
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Erro: esperava-se N &amp;gt; 1 e N &amp;lt;= M, mas obteve-se: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4533" />
        <source>Error: M/N is currently unsupported. </source>
        <translation>Erro: M/N não é suportado no momento. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4536" />
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Gerando carteira mestre a partir de %u de %u chaves de carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4565" />
        <source>failed to parse secret view key</source>
        <translation>falha ao analisar a chave de visualização secreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4573" />
        <source>failed to verify secret view key</source>
        <translation>falha ao verificar a chave de visualização secreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4616" />
        <source>Error: M/N is currently unsupported</source>
        <translation>Erro: M/N não é suportado no momento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4668" />
        <source>No restore height is specified.</source>
        <translation>Nenhuma altura de restauração foi especificada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4669" />
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Supondo que você esteja criando uma nova conta, a restauração será feita a partir da altura estimada atual do blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674" />
        <source>account creation aborted</source>
        <translation>criação de conta abortada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4684" />
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>especifique um caminho de carteira com --generate-new-wallet (não --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4748" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4768" />
        <source>bad m_restore_height parameter: </source>
        <translation>parâmetro m_restore_height inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759" />
        <source>Restore height is: </source>
        <translation>A altura da restauração é: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782" />
        <source>Restore height </source>
        <translation>Restaurar altura </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798" />
        <source>can't specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>não é possível especificar --subaddress-lookahead e --wallet-file ao mesmo tempo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802" />
        <source>failed to open account</source>
        <translation>falha ao abrir conta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5568" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5791" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8968" />
        <source>wallet is null</source>
        <translation>carteira é nula</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841" />
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Falha ao inicializar o banco de dados do anel: os recursos de aprimoramento de privacidade ficarão inativos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4920" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4924" />
        <source>wallet failed to connect to daemon: </source>
        <translation>carteira falhou ao conectar ao daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4925" />
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the 'set_daemon' command.</source>
        <translation>O daemon não foi iniciado ou a porta errada foi passada. Certifique-se de que o daemon esteja em execução ou altere o endereço do daemon usando o comando &amp;#39;set_daemon&amp;#39;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4954" />
        <source>List of available languages for your wallet's seed:</source>
        <translation>Lista de idiomas disponíveis para a seed da sua carteira:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4955" />
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Se a tela congelar, saia às cegas com ^C e execute novamente com --use-english-language-names</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4973" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4978" />
        <source>invalid language choice entered. Please try again.
</source>
        <translation>escolha de idioma inválida inserida. Por favor, tente novamente.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4992" />
        <source>invalid password</source>
        <translation>senha inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5040" />
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Você estava usando uma versão descontinuada da carteira. Por favor, use a nova semente que fornecemos.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5056" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5131" />
        <source>Generated new wallet: </source>
        <translation>Nova carteira gerada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5059" />
        <source>View key: </source>
        <translation>Chave de visualização: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5136" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5244" />
        <source>failed to generate new wallet: </source>
        <translation>falha ao gerar nova carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5175" />
        <source>Generated new wallet on hw device: </source>
        <translation>Nova carteira gerada no dispositivo hw: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5236" />
        <source>failed to generate new mutlisig wallet</source>
        <translation>falha ao gerar nova carteira mutlisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5239" />
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Nova carteira multisig %u/%u gerada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5255" />
        <source>wallet file path not valid: </source>
        <translation>caminho do arquivo da carteira não é válido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5265" />
        <source>Key file not found. Failed to open wallet</source>
        <translation>Arquivo de chave não encontrado. Falha ao abrir carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5286" />
        <source>Opened watch-only wallet</source>
        <translation>Carteira aberta somente para relógio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5288" />
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>Abriu %u/%u carteira multisig%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5290" />
        <source>Opened wallet</source>
        <translation>carteira aberta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5308" />
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Você estava usando uma versão descontinuada da carteira. Por favor, prossiga para atualizar sua carteira.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5323" />
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Você estava usando uma versão obsoleta da carteira. O formato do arquivo da sua carteira está sendo atualizado agora.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5331" />
        <source>failed to load wallet: </source>
        <translation>falha ao carregar a carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5350" />
        <source>Use "help &lt;command&gt;" to see a command's documentation.
</source>
        <translation>Use &amp;quot;ajuda&lt;command&gt; &amp;quot; para ver a documentação de um comando.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5372" />
        <source>failed to deinitialize wallet</source>
        <translation>falha ao desinicializar carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5395" />
        <source>Wallet data saved</source>
        <translation>Dados da carteira salvos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409" />
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>a carteira é multiassinada e não pode salvar uma versão somente para assistir</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5417" />
        <source>failed to read wallet password</source>
        <translation>falha ao ler a senha da carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5425" />
        <source>Watch only wallet saved as: </source>
        <translation>Assistir somente carteira salva como: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5429" />
        <source>Failed to save watch only wallet: </source>
        <translation>Falha ao salvar a carteira somente do relógio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5559" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6414" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11007" />
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>este comando requer um daemon confiável. Habilite com --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5608" />
        <source>Mining started in daemon</source>
        <translation>Mineração iniciada no daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610" />
        <source>mining has NOT been started: </source>
        <translation>a mineração NÃO foi iniciada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5630" />
        <source>Mining stopped in daemon</source>
        <translation>Mineração parada no daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632" />
        <source>mining has NOT been stopped: </source>
        <translation>a mineração NÃO foi interrompida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5687" />
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Comprimento de array inesperado - Saiu simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763" />
        <source>trusted</source>
        <translation>confiável</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763" />
        <source>untrusted</source>
        <translation>não confiável</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5779" />
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Esta não parece ser uma URL de daemon válida.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5799" />
        <source>Blockchain saved</source>
        <translation>Blockchain salvo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5801" />
        <source>blockchain can't be saved: </source>
        <translation>blockchain não pode ser salvo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5834" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5840" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5851" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5856" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5861" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5867" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5923" />
        <source>Height </source>
        <translation>Altura </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5835" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5841" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5852" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5857" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5862" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5868" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5924" />
        <source>txid </source>
        <translation>txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5837" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5843" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5870" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5926" />
        <source>idx </source>
        <translation>idx </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5925" />
        <source>spent </source>
        <translation>gasto </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952" />
        <source>Enter password</source>
        <translation>Digite a senha</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6048" />
        <source>Starting refresh...</source>
        <translation>Iniciando atualização...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6070" />
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>Nova transferência recebida desde que a nova varredura foi iniciada. As imagens-chave estão incompletas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077" />
        <source>Refresh done, blocks received: </source>
        <translation>Atualização concluída, blocos recebidos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6085" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6428" />
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon está ocupado. Por favor, tente novamente mais tarde.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4816" />
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>A chave secreta do cliente RPC deve ter 32 bytes em formato hexadecimal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5535" />
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>Com a mineração em segundo plano habilitada, o daemon minerará quando estiver ocioso e sem bateria.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5657" />
        <source>Error checking daemon RPC access prices</source>
        <translation>Erro ao verificar preços de acesso RPC do daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5663" />
        <source>Error checking daemon RPC access prices: </source>
        <translation>Erro ao verificar preços de acesso RPC do daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5759" />
        <source>Failed to connect to daemon</source>
        <translation>Falha ao conectar ao daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771" />
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>Os créditos/hash do Daemon RPC são menores do que o reivindicado. Ou este daemon está trapaceando, ou ele mudou sua configuração recentemente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772" />
        <source>Claimed: </source>
        <translation>Reivindicado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5773" />
        <source>Actual: </source>
        <translation>Real: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6089" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6432" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>sem conexão com o daemon. Por favor, certifique-se de que o daemon esteja em execução.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6436" />
        <source>payment required.</source>
        <translation>pagamento necessário.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6099" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6446" />
        <source>RPC error: </source>
        <translation>Erro RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6104" />
        <source>refresh error: </source>
        <translation>erro de atualização: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6109" />
        <source>internal error: </source>
        <translation>erro interno: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124" />
        <source>refresh failed: </source>
        <translation>atualização falhou: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124" />
        <source>Blocks received: </source>
        <translation>Blocos recebidos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6153" />
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Algumas saídas próprias têm imagens de chaves parciais - import_multisig_info necessário)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156" />
        <source>Currently selected account: [</source>
        <translation>Conta selecionada atualmente: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156" />
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158" />
        <source>(No tag assigned)</source>
        <translation>(Nenhuma tag atribuída)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158" />
        <source>Tag: </source>
        <translation>Marcação: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6172" />
        <source>unlocked balance: </source>
        <translation>saldo desbloqueado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177" />
        <source>Balance per address:</source>
        <translation>Saldo por endereço:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <source>Address</source>
        <translation>Endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Balance</source>
        <translation>Equilíbrio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Unlocked balance</source>
        <translation>Saldo desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <source>Outputs</source>
        <translation>Saídas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>Label</source>
        <translation>Rótulo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6186" />
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277" />
        <source>pubkey</source>
        <translation>chave pública</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277" />
        <source>key image</source>
        <translation>imagem chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>spent</source>
        <translation>gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>unlocked</source>
        <translation>desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>ringct</source>
        <translation>anel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>global index</source>
        <translation>índice global</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>tx id</source>
        <translation>identificação do tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>addr index</source>
        <translation>índice de endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6294" />
        <source>Used at heights: </source>
        <translation>Usado em alturas: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299" />
        <source>T</source>
        <translation>E</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299" />
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <source>locked</source>
        <translation>trancado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <source>[frozen]</source>
        <translation>[congelado]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301" />
        <source>RingCT</source>
        <translation>Anel CT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301" />
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6314" />
        <source>No incoming transfers</source>
        <translation>Nenhuma transferência de entrada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318" />
        <source>No incoming available transfers</source>
        <translation>Nenhuma transferência de entrada disponível</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322" />
        <source>No incoming unavailable transfers</source>
        <translation>Nenhuma transferência de entrada indisponível</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>payment</source>
        <translation>pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>transaction</source>
        <translation>transação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>height</source>
        <translation>altura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>unlock time</source>
        <translation>tempo de desbloqueio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6358" />
        <source>No payments with id </source>
        <translation>Nenhum pagamento com id </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6380" />
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>ID de pagamento tem formato inválido, sequência hexadecimal esperada de 16 ou 64 caracteres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6504" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7509" />
        <source>failed to get blockchain height: </source>
        <translation>falha ao obter altura do blockchain: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441" />
        <source>failed to get spent status</source>
        <translation>falha ao obter status gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6513" />
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transação %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6529" />
        <source>failed to find construction data for tx input</source>
        <translation>falha ao encontrar dados de construção para entrada tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6553" />
        <source>failed to get output: </source>
        <translation>falha ao obter saída: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6561" />
        <source>output key's originating block height shouldn't be higher than the blockchain height</source>
        <translation>a altura do bloco de origem da chave de saída não deve ser maior que a altura do blockchain</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6566" />
        <source>
Originating block heights: </source>
        <translation>
Alturas dos blocos de origem: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6576" />
        <source>
|</source>
        <translation>
|</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6576" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9904" />
        <source>|
</source>
        <translation>|
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6593" />
        <source>
Warning: Some input keys being spent are from </source>
        <translation>
Aviso: Algumas teclas de entrada que estão sendo gastas são de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594" />
        <source>the same transaction</source>
        <translation>a mesma transação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594" />
        <source>blocks that are temporally very close</source>
        <translation>blocos que estão temporalmente muito próximos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6748" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741" />
        <source>Ring size must not be 0</source>
        <translation>O tamanho do anel não deve ser 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6760" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7473" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7753" />
        <source>ring size %u is too small, minimum is %u</source>
        <translation>tamanho do anel %u é muito pequeno, o mínimo é %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6765" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758" />
        <source>ring size %u is too large, maximum is %u</source>
        <translation>tamanho do anel %u é muito grande, o máximo é %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772" />
        <source>wrong number of arguments</source>
        <translation>número errado de argumentos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6789" />
        <source>payment id failed to encode</source>
        <translation>falha na codificação do ID de pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6808" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7502" />
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Blocos bloqueados muito altos, máx. 1.000.000 (˜4 anos)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6856" />
        <source>failed to parse short payment ID from URI</source>
        <translation>falha ao analisar ID de pagamento curto do URI</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6881" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883" />
        <source>Invalid last argument: </source>
        <translation>Último argumento inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6901" />
        <source>a single transaction cannot use more than one payment id</source>
        <translation>uma única transação não pode usar mais de um ID de pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917" />
        <source>failed to parse payment id, though it was detected</source>
        <translation>falha ao analisar o ID do pagamento, embora tenha sido detectado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7004" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014" />
        <source>Is this okay anyway?</source>
        <translation>Isso está certo mesmo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7009" />
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>Atualmente, há um backlog de bloco %u nesse nível de taxa. Isso está certo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7323" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7631" />
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>Varrendo %s em transações %llu por uma taxa total de %s. Isso está certo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7329" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7637" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7874" />
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>Varrendo %s por uma taxa total de %s. Isso está certo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7377" />
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by "rescan_spent".  Is this okay?</source>
        <translation>Descartando %s de saídas não misturáveis que não podem ser gastas, o que pode ser desfeito por &amp;quot;rescan_spent&amp;quot;. Isso está certo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7522" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7767" />
        <source>Failed to parse number of outputs</source>
        <translation>Falha ao analisar o número de saídas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7527" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7772" />
        <source>Amount of outputs should be greater than 0</source>
        <translation>A quantidade de saídas deve ser maior que 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7551" />
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>o id de pagamento tem formato inválido, string hexadecimal esperada de 16 ou 64 caracteres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6803" />
        <source>bad locked_blocks parameter:</source>
        <translation>parâmetro bloqueado_blocos inválido:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7571" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7831" />
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>uma única transação não pode usar mais de um ID de pagamento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6923" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7580" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7799" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7839" />
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>falha ao configurar o ID de pagamento, embora tenha sido decodificado corretamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1170" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249" />
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>Envie essas informações multisig para todos os outros participantes e use exchange_multisig_keys&lt;info1&gt; [&lt;info2&gt; ...] com informações multisig de outros</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1258" />
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation>A carteira Multisig foi criada com sucesso. Tipo de carteira atual: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264" />
        <source>Failed to perform multisig keys exchange: </source>
        <translation>Falha ao executar troca de chaves multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599" />
        <source>Failed to load multisig transaction from MMS</source>
        <translation>Falha ao carregar transação multisig do MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2139" />
        <source>Failed to mark output spent: </source>
        <translation>Falha ao marcar saída gasta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2166" />
        <source>Failed to mark output unspent: </source>
        <translation>Falha ao marcar saída não gasta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2190" />
        <source>Spent: </source>
        <translation>Gasto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192" />
        <source>Not spent: </source>
        <translation>Não gasto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2196" />
        <source>Failed to check whether output is spent: </source>
        <translation>Falha ao verificar se a saída foi gasta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2385" />
        <source>Please confirm the transaction on the device</source>
        <translation>Por favor confirme a transação no dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091" />
        <source>Device name not specified</source>
        <translation>Nome do dispositivo não especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100" />
        <source>Device reconnect failed</source>
        <translation>Falha na reconexão do dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105" />
        <source>Device reconnect failed: </source>
        <translation>Falha na reconexão do dispositivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3619" />
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>Exporte para CSV as transferências de entrada/saída dentro de um intervalo de altura opcional.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627" />
        <source>Rescan the blockchain from scratch. If "hard" is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>Reescaneie o blockchain do zero. Se &amp;quot;hard&amp;quot; for especificado, você perderá qualquer informação que não possa ser recuperada do próprio blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3661" />
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>Exportar um conjunto assinado de imagens-chave para um&lt;filename&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3669" />
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>Sincroniza imagens-chave com a carteira hw.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3692" />
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>Gere um novo id de pagamento aleatório de tamanho completo (obsoleto). Eles não serão criptografados no blockchain, veja integrated_address para ids de pagamento curtos criptografados.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3704" />
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>Executa rodadas extras de troca de chaves multisig. Necessário para carteiras multisig M/N arbitrárias</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3736" />
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>Inicializar e configurar o MMS para M/N = número de assinantes necessários/número de assinantes autorizados multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740" />
        <source>Display current MMS configuration</source>
        <translation>Exibir configuração MMS atual</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3744" />
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>Defina ou modifique as informações do signatário autorizado (etiqueta de palavra única, endereço de transporte, endereço Salvium) ou liste todos os signatários</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3748" />
        <source>List all messages</source>
        <translation>Listar todas as mensagens</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3752" />
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using 'sync' processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>Avalie as próximas ações possíveis relacionadas a multisig de acordo com o estado da carteira e execute ou ofereça para escolha. Ao usar o processamento de &amp;#39;sincronização&amp;#39; de mensagens em espera com informações de sincronização multisig, elas podem ser forçadas independentemente do estado da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757" />
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like "stale data" errors</source>
        <translation>Forçar a geração de informações de sincronização multisig independentemente do estado da carteira, para recuperar de situações especiais, como erros de &amp;quot;dados desatualizados&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3761" />
        <source>Initiate transfer with MMS support; arguments identical to normal 'transfer' command arguments, for info see there</source>
        <translation>Iniciar transferência com suporte MMS; argumentos idênticos aos argumentos normais do comando &amp;#39;transfer&amp;#39;, para obter informações, consulte aqui</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3765" />
        <source>Delete a single message by giving its id, or delete all messages by using 'all'</source>
        <translation>Exclua uma única mensagem informando seu id ou exclua todas as mensagens usando &amp;#39;all&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3769" />
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>Envie uma única mensagem informando seu id ou envie todas as mensagens em espera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3773" />
        <source>Check right away for new messages to receive</source>
        <translation>Verifique imediatamente se há novas mensagens para receber</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3777" />
        <source>Write the content of a message to a file "mms_message_content"</source>
        <translation>Escrever o conteúdo de uma mensagem em um arquivo &amp;quot;mms_message_content&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3781" />
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>Enviar uma mensagem de uma linha para um signatário autorizado, identificado por seu rótulo, ou mostrar quaisquer notas não lidas em espera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785" />
        <source>Show detailed info about a single message</source>
        <translation>Mostrar informações detalhadas sobre uma única mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3789" />
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation>Opções disponíveis: envio automático &amp;lt;1|0&amp;gt; Se deseja enviar automaticamente as mensagens recém-geradas imediatamente.
 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795" />
        <source>Send completed signer config to all other authorized signers</source>
        <translation>Enviar configuração de signatário concluída para todos os outros signatários autorizados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3799" />
        <source>Start auto-config at the auto-config manager's wallet by issuing auto-config tokens and optionally set others' labels</source>
        <translation>Inicie a configuração automática na carteira do gerenciador de configuração automática emitindo tokens de configuração automática e, opcionalmente, defina os rótulos de outros</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3807" />
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>Exclua todos os tokens de configuração automática e aborte um processo de configuração automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3811" />
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>Inicie a configuração automática usando o token recebido do gerenciador de configuração automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833" />
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>Marque as saídas como gastas para que nunca sejam selecionadas como saídas falsas em um anel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837" />
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>Marca uma saída como não gasta para que ela possa ser selecionada como uma saída falsa em um anel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3841" />
        <source>Checks whether an output is marked as spent</source>
        <translation>Verifica se uma saída está marcada como gasta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4035" />
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;device_name[:device_spec]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4063" />
        <source>wrong number range, use: %s</source>
        <translation>intervalo de números incorreto, use: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4168" />
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>OBSERVAÇÃO: os %s a seguir podem ser usados para recuperar o acesso à sua carteira. Anote-os e armazene-os em algum lugar seguro e protegido. Não os armazene em seu e-mail ou em serviços de armazenamento de arquivos fora do seu controle imediato.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170" />
        <source>string</source>
        <translation>corda</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170" />
        <source>25 words</source>
        <translation>25 palavras</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4593" />
        <source>Secret spend key (%u of %u)</source>
        <translation>Chave de gasto secreta (%u de %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4670" />
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>Use --restore-height ou --restore-date se quiser restaurar uma conta já configurada de uma altura específica.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4672" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4760" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7119" />
        <source>Is this okay?</source>
        <translation>Está tudo bem?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4783" />
        <source>Still apply restore height?</source>
        <translation>Ainda aplica a restauração de altura?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4964" />
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>Digite o número correspondente ao idioma de sua escolha</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5967" />
        <source>Device requires attention</source>
        <translation>O dispositivo requer atenção</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5973" />
        <source>Enter device PIN</source>
        <translation>Insira o PIN do dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5975" />
        <source>Failed to read device PIN</source>
        <translation>Falha ao ler o PIN do dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5985" />
        <source>Please enter the device passphrase on the device</source>
        <translation>Por favor, digite a senha do dispositivo no dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5992" />
        <source>Enter device passphrase</source>
        <translation>Digite a senha do dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5994" />
        <source>Failed to read device passphrase</source>
        <translation>Falha ao ler a senha do dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6018" />
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation>A primeira atualização foi concluída para a carteira baseada em HW com o dinheiro recebido. hw_key_images_sync é necessário. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5537" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020" />
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation>Você quer fazer isso agora? (S/Sim/N/Não): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2366" />
        <source>Unknown command '%s', try 'help'</source>
        <translation>Comando desconhecido &amp;#39;%s&amp;#39;, tente &amp;#39;help&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3040" />
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Tempo limite de bloqueio de inatividade desabilitado no Windows</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3054" />
        <source>Invalid number of seconds</source>
        <translation>Número inválido de segundos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116" />
        <source>Export format not specified</source>
        <translation>Formato de exportação não especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3130" />
        <source>Export format not recognized.</source>
        <translation>Formato de exportação não reconhecido.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3482" />
        <source>Display the restore height</source>
        <translation>Exibir a altura da restauração</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3857" />
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>Bloqueie o console da carteira, exigindo a senha da carteira para continuar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4033" />
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>inteiro sem sinal (segundos, 0 para desabilitar)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036" />
        <source>"binary" or "ascii"</source>
        <translation>&amp;quot;binário&amp;quot; ou &amp;quot;ascii&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4824" />
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>Aviso: usando um daemon não confiável em %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4825" />
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>Usar um daemon de terceiros pode ser prejudicial à sua segurança e privacidade</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4828" />
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>Usar o seu próprio sem SSL expõe seu tráfego RPC ao monitoramento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4829" />
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>É altamente recomendável que você se conecte à rede Salvium usando seu próprio daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4830" />
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>Se você ou alguém em quem você confia estiver operando este daemon, você pode usar --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4837" />
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>Além disso, um daemon também é menos seguro quando executado no modo bootstrap</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850" />
        <source>If you are new to Salvium, type "welcome" for a brief overview.</source>
        <translation>Se você é novo no Salvium, digite &amp;quot;bem-vindo&amp;quot; para uma breve visão geral.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5003" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5101" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5149" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5192" />
        <source>Error creating wallet: </source>
        <translation>Erro ao criar carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477" />
        <source>Failed to query mining status: </source>
        <translation>Falha ao consultar o status da mineração: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5488" />
        <source>Failed to setup background mining: </source>
        <translation>Falha ao configurar a mineração em segundo plano: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5464" />
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>Mineração em segundo plano habilitada. Obrigado por apoiar a rede Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5492" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5500" />
        <source>Background mining not enabled. Run "set setup-background-mining 1" to change.</source>
        <translation>Mineração em segundo plano não habilitada. Execute &amp;quot;set setup-background-mining 1&amp;quot; para alterar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5506" />
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>Usando um daemon não confiável, ignorando a verificação de mineração em segundo plano</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5534" />
        <source>The daemon is not set up to background mine.</source>
        <translation>O daemon não está configurado para minerar em segundo plano.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5541" />
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>Mineração em segundo plano não habilitada. Defina setup-background-mining como 1 para alterar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5903" />
        <source>NOTE: This transaction is locked, see details with: show_transfer </source>
        <translation>NOTA: Esta transação está bloqueada, veja os detalhes em: show_transfer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6022" />
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>hw_key_images_sync pulado. Execute o comando manualmente antes de uma transferência.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6247" />
        <source>Invalid keyword: </source>
        <translation>Palavra-chave inválida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6535" />
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
Entrada %llu/%llu (%s): quantidade=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628" />
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>A transação gasta mais de uma saída muito antiga. A privacidade seria melhor se fossem enviadas separadamente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6629" />
        <source>Spend them now anyway?</source>
        <translation>Gastá-los agora mesmo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6871" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8479" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9229" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9798" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9806" />
        <source>amount is wrong: </source>
        <translation>o valor está errado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6872" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8479" />
        <source>expected number from 0 to </source>
        <translation>número esperado de 0 a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7025" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7034" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7126" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7338" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7601" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7646" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7882" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8112" />
        <source>transaction cancelled.</source>
        <translation>transação cancelada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6981" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7595" />
        <source>No outputs found, or daemon is not ready</source>
        <translation>Nenhuma saída encontrada ou o daemon não está pronto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2343" />
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>Ao contrário do Bitcoin, suas transações e saldo no Salvium permanecem privados e não são visíveis para o mundo por padrão.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2344" />
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>No entanto, você tem a opção de disponibilizá-los para partes selecionadas, se desejar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5895" />
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>NOTA: esta transação usa um ID de pagamento criptografado: considere usar subendereços em vez disso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5900" />
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>AVISO: esta transação usa um ID de pagamento não criptografado: eles são obsoletos e ignorados. Use subendereços em vez disso.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014" />
        <source>Failed to check for backlog: </source>
        <translation>Falha ao verificar pendências: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7063" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7617" />
        <source>
Transaction </source>
        <translation>
Transação </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7070" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7624" />
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>AVISO: Saídas de vários endereços estão sendo usadas juntas, o que pode comprometer sua privacidade.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093" />
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7139" />
        <source>Unsigned transaction(s) successfully written to MMS</source>
        <translation>Transações não assinadas gravadas com sucesso no MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7147" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7184" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7350" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7362" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7658" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7695" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7893" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7931" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8123" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8165" />
        <source>Failed to write transaction(s) to file</source>
        <translation>Falha ao gravar transação(ões) no arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7152" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7189" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7354" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7366" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7662" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7699" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7897" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7935" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8127" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8169" />
        <source>Unsigned transaction(s) successfully written to file: </source>
        <translation>Transações não assinadas gravadas com sucesso no arquivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7161" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7674" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7909" />
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>Falha ao assinar transação fria com carteira HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7308" />
        <source>No unmixable outputs found</source>
        <translation>Nenhuma saída não mixável encontrada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321" />
        <source>Sweeping </source>
        <translation>Varrendo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8490" />
        <source>Failed to parse donation address: </source>
        <translation>Falha ao analisar o endereço de doação: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8506" />
        <source>Donating %s %s to %s.</source>
        <translation>Doando %s %s para %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8654" />
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>Transações %lu carregadas, para %s, taxa %s, %s, %s, com tamanho mínimo de anel %lu, %s. %sIsso está correto?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>direction</source>
        <translation>direção</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>timestamp</source>
        <translation>carimbo de data/hora</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>running balance</source>
        <translation>equilíbrio de corrida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>hash</source>
        <translation>haxixe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>payment ID</source>
        <translation>ID de pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>fee</source>
        <translation>taxa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>destination</source>
        <translation>destino</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>index</source>
        <translation>índice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>note</source>
        <translation>observação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9770" />
        <source>CSV exported to </source>
        <translation>CSV exportado para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9955" />
        <source>Rescan anyway?</source>
        <translation>Redigitalizar mesmo assim?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9966" />
        <source>Warning: your restore height is higher than wallet restore height: </source>
        <translation>Aviso: a altura da sua restauração é maior que a altura da restauração da carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9967" />
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>Redigitalizar mesmo assim? (S/Sim/N/Não): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9988" />
        <source>MMS received new message</source>
        <translation>MMS recebeu nova mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10157" />
        <source>locked due to inactivity</source>
        <translation>bloqueado devido à inatividade</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10559" />
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;index&gt;está fora dos limites</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10835" />
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10836" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11684" />
        <source>Type: </source>
        <translation>Tipo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6680" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10837" />
        <source>Network type: </source>
        <translation>Tipo de rede: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1402" />
        <source>Multisig info imported. Number of outputs updated: </source>
        <translation>Informações multisig importadas. Número de saídas atualizadas: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1750" />
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>Imagem chave não gasta ou gasta com anel tamanho 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334" />
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>A maioria desses nós provavelmente são espiões. Você não deve usá-los a menos que esteja se conectando via Tor ou I2P</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340" />
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>Bem-vindo ao Salvium, a nova e aprimorada criptomoeda privada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2352" />
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>Bem-vindo à Salvium e à privacidade financeira compatível. Para mais informações, consulte https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2471" />
        <source>invalid index: must be an unsigned integer</source>
        <translation>índice inválido: deve ser um inteiro sem sinal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2476" />
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt;está fora dos limites</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514" />
        <source>Failed to generate QR code, input too large</source>
        <translation>Falha ao gerar código QR, entrada muito grande</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3167" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3186" />
        <source>Value not specified</source>
        <translation>Valor não especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3157" />
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>Aviso: formatos obsoletos usam serialização boost, que tem estouros de buffer e crashers. Carregue apenas formatos obsoletos de fontes confiáveis.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3206" />
        <source>Important commands:</source>
        <translation>Comandos importantes:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3208" />
        <source>"welcome" - Show welcome message.</source>
        <translation>&amp;quot;bem-vindo&amp;quot; - Mostrar mensagem de boas-vindas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3209" />
        <source>"help all" - Show the list of all available commands.</source>
        <translation>&amp;quot;help all&amp;quot; - Mostra a lista de todos os comandos disponíveis.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3210" />
        <source>"help &lt;command&gt;" - Show a command's documentation.</source>
        <translation>&amp;quot;ajuda&lt;command&gt; &amp;quot; - Mostrar a documentação de um comando.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3211" />
        <source>"apropos &lt;keyword&gt;" - Show commands related to a keyword.</source>
        <translation>&amp;quot;a propósito&lt;keyword&gt; &amp;quot; - Mostrar comandos relacionados a uma palavra-chave.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213" />
        <source>"wallet_info" - Show wallet main address and other info.</source>
        <translation>&amp;quot;wallet_info&amp;quot; - Mostra o endereço principal da carteira e outras informações.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3214" />
        <source>"balance" - Show balance.</source>
        <translation>&amp;quot;balance&amp;quot; - Mostrar equilíbrio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3215" />
        <source>"address all" - Show all addresses.</source>
        <translation>&amp;quot;address all&amp;quot; - Mostrar todos os endereços.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3216" />
        <source>"address new" - Create new subaddress.</source>
        <translation>&amp;quot;address new&amp;quot; - Cria um novo subendereço.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3217" />
        <source>"transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]" - Send SAL to an address.</source>
        <translation>&amp;quot;transferir&lt;address&gt;&lt;amount&gt; [&lt;asset_type&gt; ]&amp;quot; - Enviar SAL para um endereço.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218" />
        <source>"return_payment &lt;tx_hash&gt;" - Return a previously-received amount to sender.</source>
        <translation>&amp;quot;retorno_pagamento&lt;tx_hash&gt; &amp;quot; - Devolver ao remetente um valor recebido anteriormente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3219" />
        <source>"burn &lt;amount&gt; &lt;asset_type&gt;" - destroy coins forever.</source>
        <translation>&amp;quot;queimar&lt;amount&gt;&lt;asset_type&gt; &amp;quot; - destruir moedas para sempre.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3220" />
        <source>"convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]" - convert between coin types.</source>
        <translation>&amp;quot;converter&lt;amount&gt;&lt;source_asset&gt;&lt;dest_asset&gt; [&lt;slippage_limit&gt; ]&amp;quot; - converter entre tipos de moedas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221" />
        <source>"stake &lt;amount&gt;" - stake SAL for 30 days to earn yield.</source>
        <translation>&amp;quot;estaca&lt;amount&gt; &amp;quot; - aposte SAL por 30 dias para obter rendimento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3222" />
        <source>"price_info" - Display current pricing information for supported assets.</source>
        <translation>&amp;quot;price_info&amp;quot; - Exibe informações de preços atuais para ativos suportados.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3223" />
        <source>"supply_info" - Display circulating supply information.</source>
        <translation>&amp;quot;supply_info&amp;quot; - Exibe informações de fornecimento circulante.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3224" />
        <source>"yield_info" - Display current stats on Salvium staking / yield.</source>
        <translation>&amp;quot;yield_info&amp;quot; - Exibe estatísticas atuais sobre staking/rendimento de Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3225" />
        <source>"show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]" - Show transactions.</source>
        <translation>&amp;quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&amp;quot; - Mostrar transações.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3226" />
        <source>"sweep_all &lt;address&gt;" - Send whole balance to another wallet.</source>
        <translation>&amp;quot;varrer_tudo&lt;address&gt; &amp;quot; - Envie todo o saldo para outra carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3227" />
        <source>"seed" - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>&amp;quot;seed&amp;quot; - Mostra 25 palavras secretas que podem ser usadas para recuperar esta carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3228" />
        <source>"refresh" - Synchronize wallet with the Salvium network.</source>
        <translation>&amp;quot;refresh&amp;quot; - Sincroniza a carteira com a rede Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3229" />
        <source>"status" - Check current status of wallet.</source>
        <translation>&amp;quot;status&amp;quot; - Verifica o status atual da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3230" />
        <source>"version" - Check software version.</source>
        <translation>&amp;quot;versão&amp;quot; - Verifique a versão do software.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3231" />
        <source>"exit" - Exit wallet.</source>
        <translation>&amp;quot;exit&amp;quot; - Sair da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233" />
        <source>"donate &lt;amount&gt;" - Donate SAL to the development team.</source>
        <translation>&amp;quot;doar&lt;amount&gt; &amp;quot; - Doe SAL para a equipe de desenvolvimento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263" />
        <source>No commands found mentioning keyword(s)</source>
        <translation>Nenhum comando encontrado mencionando palavra(s)-chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3293" />
        <source>Invalid txid specified: </source>
        <translation>Txid inválido especificado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300" />
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>AVISO: esta operação pode revelar os txids para o nó remoto e afetar sua privacidade</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3302" />
        <source>You have canceled the operation</source>
        <translation>Você cancelou a operação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3347" />
        <source>Set another daemon to connect to. If it's not yours, it'll probably spy on you.</source>
        <translation>Defina outro daemon para se conectar. Se não for o seu, ele provavelmente vai espionar você.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3373" />
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included). The "subtractfeefrom=" list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: "transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2". Let's say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use "subtractfeefrom=all" to spread the fee across all destinations.</source>
        <translation>Transferir&lt;amount&gt; de&lt;asset_type&gt; para&lt;address&gt; . Se o parâmetro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; for especificado, a carteira usa saídas recebidas por endereços desses índices. Se omitido, a carteira escolhe aleatoriamente índices de endereço a serem usados. Em qualquer caso, ela tenta o seu melhor para não combinar saídas em vários endereços.&lt;priority&gt; é a prioridade da transação. Quanto maior a prioridade, maior a taxa de transação. Os valores válidos em ordem de prioridade (do menor para o maior) são: unimportant, normal, elevated, priority. Se omitido, o valor padrão (veja o comando &amp;quot;set priority&amp;quot;) é usado.&lt;ring_size&gt; é o número de entradas a serem incluídas para não rastreabilidade. Vários pagamentos podem ser feitos de uma vez adicionando URI_2 ou&lt;address_2&gt;&lt;amount_2&gt; etc. (antes do ID do pagamento, se estiver incluído). A lista &amp;quot;subtractfeefrom=&amp;quot; permite que você escolha de quais destinos financiar a taxa de tx em vez da saída de troco. A taxa será dividida entre os destinos escolhidos proporcionalmente igualmente. Por exemplo, para fazer 3 transferências onde a taxa é retirada do primeiro e terceiro destinos, pode-se fazer: &amp;quot;transfer&lt;addr1&gt; 3&lt;addr2&gt; 0,5&lt;addr3&gt; 1 subtractfeefrom=0,2&amp;quot;. Digamos que a taxa de tx seja 0,1. O saldo cairia em exatamente 4,5 SAL incluindo taxas, e addr1 e addr3 receberiam 2,925 e 0,975 SAL, respectivamente. Use &amp;quot;subtractfeefrom=all&amp;quot; para distribuir a taxa entre todos os destinos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381" />
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>Envie todo o saldo desbloqueado para um endereço e bloqueie-o para&lt;lockblocks&gt; (máx. 1000000). Se o parâmetro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; ou &amp;quot;index=all&amp;quot; for especificado, a carteira varre as saídas recebidas por esses ou todos os índices de endereço, respectivamente. Se omitido, a carteira escolhe aleatoriamente um índice de endereço para ser usado.&lt;priority&gt; é a prioridade da varredura. Quanto maior a prioridade, maior a taxa de transação. Os valores válidos em ordem de prioridade (do menor para o maior) são: unimportant, normal, elevated, priority. Se omitido, o valor padrão (veja o comando &amp;quot;set priority&amp;quot;) é usado.&lt;ring_size&gt; é o número de entradas a serem incluídas para não rastreabilidade.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3387" />
        <source>Send all unlocked balance to an address. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter "outputs=&lt;N&gt;" is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Envie todo o saldo desbloqueado para um endereço. Se o parâmetro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; ou &amp;quot;index=all&amp;quot; for especificado, a carteira varre as saídas recebidas por esses ou todos os índices de endereço, respectivamente. Se omitido, a carteira escolhe aleatoriamente um índice de endereço a ser usado. Se o parâmetro &amp;quot;outputs=&lt;N&gt; &amp;quot; é especificado e N &amp;gt; 0, a carteira divide a transação em N saídas pares.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3390" />
        <source>Send all unlocked balance from a given account to an address. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter "outputs=&lt;N&gt;" is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Envie todo o saldo desbloqueado de uma conta dada para um endereço. Se o parâmetro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; ou &amp;quot;index=all&amp;quot; for especificado, a carteira varre as saídas recebidas por esses ou todos os índices de endereço, respectivamente. Se omitido, a carteira escolhe aleatoriamente um índice de endereço a ser usado. Se o parâmetro &amp;quot;outputs=&lt;N&gt; &amp;quot; é especificado e N &amp;gt; 0, a carteira divide a transação em N saídas pares.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402" />
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>Retorna o(s) pagamento(s) recebido(s) no TX&lt;tx_hash&gt; para o remetente original.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406" />
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>DESTRÓI (QUEIMA) PERMANENTEMENTE&lt;amount&gt; de&lt;asset_type&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410" />
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>Converte&lt;amount&gt;&lt;source_asset&gt; em&lt;dest_asset&gt; , com opcional&lt;slippage_limit&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414" />
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>Fechaduras&lt;amount&gt; de SAL como participação para obter rendimento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418" />
        <source>Displays the current exchange rate information for SAL &lt;--&gt; VSD conversions</source>
        <translation>Exibe as informações atuais da taxa de câmbio para conversões SAL &amp;lt;--&amp;gt; VSD</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3422" />
        <source>Displays the current circulating supply information for SAL and VSD currencies</source>
        <translation>Exibe as informações atuais de fornecimento circulante para moedas SAL e VSD</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426" />
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>Exibe as estatísticas de retornos de rendimento nos últimos&lt;NN&gt; blocos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430" />
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>Doar&lt;amount&gt; para a equipe de desenvolvimento (donate.salvium.io).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3456" />
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If "all" is specified, the wallet shows all the existing addresses in the currently selected account. If "new " is specified, the wallet creates a new address with the provided label text (which can be empty). If "mnew" is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If "label" is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If "one-off" is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>Se nenhum argumento for especificado ou&lt;index&gt; for especificado, a carteira mostra o endereço padrão ou especificado. Se &amp;quot;all&amp;quot; for especificado, a carteira mostra todos os endereços existentes na conta selecionada no momento. Se &amp;quot;new &amp;quot; for especificado, a carteira cria um novo endereço com o texto do rótulo fornecido (que pode estar vazio). Se &amp;quot;mnew&amp;quot; for especificado, a carteira cria tantos endereços novos quantos forem especificados pelo argumento; o rótulo padrão é definido para os novos endereços. Se &amp;quot;label&amp;quot; for especificado, a carteira define o rótulo do endereço especificado por&lt;index&gt; para o texto do rótulo fornecido. Se &amp;quot;one-off&amp;quot; for especificado, o endereço para o índice especificado será gerado e exibido, e lembrado pela carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3486" />
        <source>Available options:
 seed language
   Set the wallet's seed language.
 always-confirm-transfers &lt;1|0&gt;
   Whether to confirm unsplit txes.
 print-ring-members &lt;1|0&gt;
   Whether to print detailed information about ring members during confirmation.
 store-tx-info &lt;1|0&gt;
   Whether to store outgoing tx info (destination address, payment ID, tx secret key) for future reference.
 auto-refresh &lt;1|0&gt;
   Whether to automatically synchronize new blocks from the daemon.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
   Set the wallet's refresh behaviour.
 priority [0|1|2|3|4]
   Set the fee to default/unimportant/normal/elevated/priority.
 confirm-missing-payment-id &lt;1|0&gt; (obsolete)
 ask-password &lt;0|1|2   (or never|action|decrypt)&gt;
   action: ask the password before many actions such as transfer, etc
   decrypt: same as action, but keeps the spend key encrypted in memory when not needed
 unit &lt;sal|millisal|microsal&gt;
   Set the default salvium (sub-)unit.
 min-outputs-count [n]
   Try to keep at least that many outputs of value at least min-outputs-value.
 min-outputs-value [n]
   Try to keep at least min-outputs-count outputs of at least that value.
 merge-destinations &lt;1|0&gt;
   Whether to merge multiple payments to the same destination address.
 confirm-backlog &lt;1|0&gt;
   Whether to warn if there is transaction backlog.
 confirm-backlog-threshold [n]
   Set a threshold for confirm-backlog to only warn if the transaction backlog is greater than n blocks.
 confirm-export-overwrite &lt;1|0&gt;
   Whether to warn if the file to be exported already exists.
 refresh-from-block-height [n]
   Set the height before which to ignore blocks.
 auto-low-priority &lt;1|0&gt;
   Whether to automatically use the low priority fee level when it's safe to do so.
 segregate-pre-fork-outputs &lt;1|0&gt;
   Set this if you intend to spend outputs on both Salvium AND a key reusing fork.
 key-reuse-mitigation2 &lt;1|0&gt;
   Set this if you are not sure whether you will spend on a key reusing Salvium fork later.
 subaddress-lookahead &lt;major&gt;:&lt;minor&gt;
   Set the lookahead sizes for the subaddress hash table.
 segregation-height &lt;n&gt;
   Set to the height of a key reusing fork you want to use, 0 to use default.
 ignore-fractional-outputs &lt;1|0&gt;
   Whether to ignore fractional outputs that result in net loss when spending due to fee.
 ignore-outputs-above &lt;amount&gt;
   Ignore outputs of amount above this threshold when spending. Value 0 is translated to the maximum value (18 million) which disables this filter.
 ignore-outputs-below &lt;amount&gt;
   Ignore outputs of amount below this threshold when spending.
 track-uses &lt;1|0&gt;
   Whether to keep track of owned outputs uses.
 setup-background-mining &lt;1|0&gt;
   Whether to enable background mining. Set this to support the network and to get a chance to receive new Salvium.
 device-name &lt;device_name[:device_spec]&gt;
   Device name for hardware wallet.
 export-format &lt;"binary"|"ascii"&gt;
   Save all exported files as binary (cannot be copied and pasted) or ascii (can be).
 persistent-rpc-client-id &lt;1|0&gt;
   Whether to keep using the same client id for RPC payment over wallet restarts.
auto-mine-for-rpc-payment-threshold &lt;float&gt;
   Whether to automatically start mining for RPC payment if the daemon requires it.
credits-target &lt;unsigned int&gt;
  The RPC payment credits balance to target (0 for default).
 show-wallet-name-when-locked &lt;1|0&gt;
   Set this if you would like to display the wallet name when locked.
 enable-multisig-experimental &lt;1|0&gt;
   Set this to allow multisig commands. Multisig may currently be exploitable if parties do not trust each other.
 inactivity-lock-timeout &lt;unsigned int&gt;
   How many seconds to wait before locking the wallet (0 to disable).
freeze-incoming-payments &lt;1|0&gt;
   Whether to have incoming payments automatically frozen, so they cannot be spent erroneously.</source>
        <translation>Opções disponíveis: seed language Define o idioma seed da carteira. always-confirm-transfers &amp;lt;1|0&amp;gt; Se deve confirmar transações não divididas. print-ring-members &amp;lt;1|0&amp;gt; Se deve imprimir informações detalhadas sobre os membros do ring durante a confirmação. store-tx-info &amp;lt;1|0&amp;gt; Se deve armazenar informações de transações de saída (endereço de destino, ID de pagamento, chave secreta de transações) para referência futura. auto-refresh &amp;lt;1|0&amp;gt; Se deve sincronizar automaticamente novos blocos do daemon. refresh-type&lt;full|optimize-coinbase|no-coinbase|default&gt; Defina o comportamento de atualização da carteira. prioridade [0|1|2|3|4] Defina a taxa como padrão/sem importância/normal/elevada/prioridade. confirm-missing-payment-id &amp;lt;1|0&amp;gt; (obsoleto) ask-password &amp;lt;0|1|2 (ou nunca|ação|descriptografar)&amp;gt; ação: solicitar a senha antes de muitas ações, como transferência, etc. descriptografar: o mesmo que ação, mas mantém a chave de gasto criptografada na memória quando não é necessária unidade&lt;sal|millisal|microsal&gt; Defina a (sub-)unidade de salvium padrão. min-outputs-count [n] Tente manter pelo menos essa quantidade de saídas de valor pelo menos min-outputs-value. min-outputs-value [n] Tente manter pelo menos min-outputs-count saídas de pelo menos esse valor. merge-destinations &amp;lt;1|0&amp;gt; Se deve mesclar vários pagamentos para o mesmo endereço de destino. confirm-backlog &amp;lt;1|0&amp;gt; Se deve avisar se há um backlog de transações. confirm-backlog-threshold [n] Defina um limite para confirm-backlog para avisar somente se o backlog de transações for maior que n blocos. confirm-export-overwrite &amp;lt;1|0&amp;gt; Se deve avisar se o arquivo a ser exportado já existe. refresh-from-block-height [n] Defina a altura antes da qual os blocos devem ser ignorados. auto-low-priority &amp;lt;1|0&amp;gt; Se deve usar automaticamente o nível de taxa de baixa prioridade quando for seguro fazê-lo. segregate-pre-fork-outputs &amp;lt;1|0&amp;gt; Defina isso se você pretende gastar saídas em Salvium E em um fork de reutilização de chaves. key-reuse-mitigation2 &amp;lt;1|0&amp;gt; Defina isso se você não tiver certeza se gastará em um fork de reutilização de chaves Salvium mais tarde. subaddress-lookahead&lt;major&gt; :&lt;minor&gt; Defina os tamanhos de lookahead para a tabela de hash de subendereço. segregation-height&lt;n&gt; Defina a altura de uma bifurcação de reutilização de chave que você deseja usar, 0 para usar o padrão. ignore-fractional-outputs &amp;lt;1|0&amp;gt; Se deve ignorar saídas fracionárias que resultam em perda líquida ao gastar devido à taxa. ignore-outputs-above&lt;amount&gt; Ignore saídas de valor acima deste limite ao gastar. O valor 0 é traduzido para o valor máximo (18 milhões) que desabilita este filtro. ignore-outputs-below&lt;amount&gt; Ignore saídas de valor abaixo deste limite ao gastar. track-uses &amp;lt;1|0&amp;gt; Se deve manter o controle dos usos de saídas próprias. setup-background-mining &amp;lt;1|0&amp;gt; Se deve habilitar a mineração em segundo plano. Defina isso para dar suporte à rede e ter uma chance de receber novo Salvium. device-name&lt;device_name[:device_spec]&gt; Nome do dispositivo para carteira de hardware. export-format &amp;lt;&amp;quot;binary&amp;quot;|&amp;quot;ascii&amp;quot;&amp;gt; Salva todos os arquivos exportados como binários (não pode ser copiado e colado) ou ascii (pode ser). persistent-rpc-client-id &amp;lt;1|0&amp;gt; Se deve continuar usando o mesmo ID de cliente para pagamento RPC em reinicializações de carteira. auto-mine-for-rpc-payment-threshold&lt;float&gt; Se deve iniciar automaticamente a mineração para pagamento RPC se o daemon exigir. credits-target&lt;unsigned int&gt; O saldo de créditos de pagamento RPC para o alvo (0 para padrão). show-wallet-name-when-locked &amp;lt;1|0&amp;gt; Defina isso se você gostaria de exibir o nome da carteira quando bloqueada. enable-multisig-experimental &amp;lt;1|0&amp;gt; Defina isso para permitir comandos multisig. O multisig pode ser explorado atualmente se as partes não confiarem umas nas outras. inactivity-lock-timeout&lt;unsigned int&gt; Quantos segundos esperar antes de bloquear a carteira (0 para desabilitar). freeze-incoming-payments &amp;lt;1|0&amp;gt; Se os pagamentos recebidos devem ser congelados automaticamente, para que não possam ser gastos erroneamente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3607" />
        <source>Show the incoming/outgoing transfers within an optional height range.

Output format:
In or Coinbase:    Block Number, "block"|"in",              Time, Amount, Asset Type, Transaction Hash, Payment ID, Subaddress Index,                     "-", Note
Out:               Block Number, "out",                     Time, Amount*, Asset Type, Transaction Hash, Payment ID, Fee, Destinations, Input addresses**, "-", Note
Pool:                            "pool", "in",              Time, Amount, Asset Type, Transaction Hash, Payment Id, Subaddress Index,                     "-", Note, Double Spend Note
Pending or Failed:               "failed"|"pending", "out", Time, Amount*, Transaction Hash, Payment ID, Fee, Input addresses**,               "-", Note
Staked or Burnt:   Block Number, "out",                     Time, Amount*, Asset Type, Transaction Hash, Payment ID, Fee, Input addresses**,               "-", Note

* Excluding change and fee.
** Set of address indices used as inputs in this transfer.</source>
        <translation>Exiba as transferências de entrada/saída dentro de um intervalo de altura opcional. Formato de saída: In ou Coinbase: Número do bloco, &amp;quot;block&amp;quot;|&amp;quot;in&amp;quot;, Hora, Valor, Tipo de ativo, Hash da transação, ID do pagamento, Índice do subendereço, &amp;quot;-&amp;quot;, Nota Out: Número do bloco, &amp;quot;out&amp;quot;, Hora, Valor*, Tipo de ativo, Hash da transação, ID do pagamento, Taxa, Destinos, Endereços de entrada**, &amp;quot;-&amp;quot;, Pool de notas: &amp;quot;pool&amp;quot;, &amp;quot;in&amp;quot;, Hora, Valor, Tipo de ativo, Hash da transação, ID do pagamento, Índice do subendereço, &amp;quot;-&amp;quot;, Nota, Gasto duplo Nota Pendente ou com falha: &amp;quot;failed&amp;quot;|&amp;quot;pending&amp;quot;, &amp;quot;out&amp;quot;, Hora, Valor*, Hash da transação, ID do pagamento, Taxa, Endereços de entrada**, &amp;quot;-&amp;quot;, Nota Staked ou Burnt: Número do bloco, &amp;quot;out&amp;quot;, Hora, Valor*, Tipo de ativo, Hash da transação, ID do pagamento, Taxa, Endereços de entrada**, &amp;quot;-&amp;quot;, Nota * Excluindo troco e taxa. ** Conjunto de índices de endereço usados como entradas nesta transferência.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618" />
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [entrada|saída|tudo|pendente|falha|pool|coinbase|queimado|apostado|rendimento] [índice=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [saída=&lt;filepath&gt; ] [opção=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653" />
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>Assinar o conteúdo de um arquivo com o subendereço fornecido (ou o endereço principal, se não for especificado)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3728" />
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>Interface com o MMS (Multisig Messaging System)&lt;subcommand&gt; é um dos seguintes: init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum Obtenha ajuda sobre um subcomando com: help mms&lt;subcommand&gt; , ou ajude mms&lt;subcommand&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3803" />
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>Obtenha uma soma de verificação que permita aos signatários verificar facilmente se há uma configuração MMS idêntica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889" />
        <source>Show address as QR code</source>
        <translation>Mostrar endereço como código QR</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3897" />
        <source>Search all command descriptions for keyword(s)</source>
        <translation>Pesquisar todas as descrições de comando por palavra(s)-chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3901" />
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>Escaneie as transações fornecidas por&lt;txid&gt; (s), processando-os e procurando saídas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014" />
        <source>sal, millisal, microsal</source>
        <translation>sal, milisal, microsal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032" />
        <source>1 or 0</source>
        <translation>1 ou 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4257" />
        <source>Multisig is disabled.</source>
        <translation>Multisig está desabilitado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4258" />
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can't be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>Multisig é um recurso experimental e pode ter bugs. Coisas que podem dar errado incluem: fundos enviados para uma carteira multisig não podem ser gastos, só podem ser gastos com a participação de um membro malicioso do grupo ou podem ser roubados por um membro malicioso do grupo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4260" />
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>Você cancelou a restauração de uma carteira multiassinatura.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4915" />
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>a carteira não conseguiu se conectar ao daemon porque está definida para o modo offline</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4917" />
        <source>wallet failed to connect to daemon, because it is not up to date. </source>
        <translation>a carteira falhou ao se conectar ao daemon porque não está atualizada. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4918" />
        <source>Please make sure you are running the latest wallet.</source>
        <translation>Certifique-se de que você está executando a carteira mais recente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4921" />
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the 'set_daemon' command.</source>
        <translation>O daemon não está atualizado. Certifique-se de que o daemon esteja executando a versão mais recente ou altere o endereço do daemon usando o comando &amp;#39;set_daemon&amp;#39;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5076" />
        <source>Your wallet has been generated!
To start synchronizing with the daemon, use the "refresh" command.
Use the "help" command to see a simplified list of available commands.
Use "help all" command to see the list of all available commands.
Use "help &lt;command&gt;" to see a command's documentation.
Always use the "exit" command when closing salvium-wallet-cli to save 
your current session's state. Otherwise, you might need to synchronize 
your wallet again (your wallet keys are NOT at risk in any case).
</source>
        <translation>Sua carteira foi gerada! Para começar a sincronizar com o daemon, use o comando &amp;quot;refresh&amp;quot;. Use o comando &amp;quot;help&amp;quot; para ver uma lista simplificada de comandos disponíveis. Use o comando &amp;quot;help all&amp;quot; para ver a lista de todos os comandos disponíveis. Use &amp;quot;help&lt;command&gt; &amp;quot; para ver a documentação de um comando. Sempre use o comando &amp;quot;exit&amp;quot; ao fechar o salvium-wallet-cli para salvar o estado da sua sessão atual. Caso contrário, você pode precisar sincronizar sua carteira novamente (as chaves da sua carteira NÃO estão em risco em nenhum caso).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5348" />
        <source>Use the "help" command to see a simplified list of available commands.
</source>
        <translation>Use o comando &amp;quot;help&amp;quot; para ver uma lista simplificada dos comandos disponíveis.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5349" />
        <source>Use "help all" to see the list of all available commands.
</source>
        <translation>Use &amp;quot;help all&amp;quot; para ver a lista de todos os comandos disponíveis.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5536" />
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>Habilitar isso dá suporte à rede que você está usando e o torna elegível para receber novos SALs</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703" />
        <source>Failed to parse address</source>
        <translation>Falha ao analisar endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5718" />
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got </source>
        <translation>Esperado confiável, não confiável ou provavelmente um nó espião obtido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5727" />
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>Este não é um endereço Tor/I2P e não é um daemon confiável.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5728" />
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>Use seu próprio nó confiável, conecte-se via Tor ou I2P, ou passe por &amp;quot;este-provavelmente-é-um-nó-espião&amp;quot; e seja espionado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5733" />
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>Aviso: ao conectar-se a um daemon não local sem SSL, adversários passivos poderão espionar você.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5836" />
        <source>stake returned </source>
        <translation>aposta devolvida </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5842" />
        <source>yield earned </source>
        <translation>rendimento obtido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5853" />
        <source>burnt </source>
        <translation>queimado </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5858" />
        <source>converting </source>
        <translation>convertendo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5863" />
        <source>staked </source>
        <translation>apostado </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5982" />
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>O dispositivo pede a senha. Você quer digitar a senha no dispositivo (Y) (ou no host (N))?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005" />
        <source>The wallet's refresh-from-block-height setting is higher than the daemon's height: this may mean your wallet will skip over transactions</source>
        <translation>A configuração de atualização da altura do bloco da carteira é maior que a altura do daemon: isso pode significar que sua carteira pulará as transações</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6155" />
        <source> (Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation> (Algumas saídas próprias não têm imagens-chave - export_outputs, import_outputs, export_key_images e import_key_images necessárias)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171" />
        <source>Asset: </source>
        <translation>Ativo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10353" />
        <source>, balance: </source>
        <translation>, equilíbrio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6494" />
        <source>failed to connect to daemon</source>
        <translation>falha ao conectar ao daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6595" />
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>, que pode quebrar o anonimato das assinaturas de anel. Certifique-se de que isso seja intencional!
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653" />
        <source>I locked your Salvium wallet to protect you while you were away
see "help set" to configure/disable</source>
        <translation>Bloqueei sua carteira Salvium para protegê-lo enquanto você estava fora. Veja &amp;quot;ajuda definida&amp;quot; para configurar/desabilitar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6673" />
        <source>Locked due to inactivity.</source>
        <translation>Bloqueado devido à inatividade.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6674" />
        <source>The wallet password is required to unlock the console.</source>
        <translation>A senha da carteira é necessária para desbloquear o console.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6681" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10838" />
        <source>Testnet</source>
        <translation>Rede de teste</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10839" />
        <source>Stagenet</source>
        <translation>Stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10839" />
        <source>Mainnet</source>
        <translation>Rede principal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073" />
        <source>Burning %s %s.  </source>
        <translation>Queimando %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7075" />
        <source>Converting %s %s to %s.  </source>
        <translation>Convertendo %s %s para %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7077" />
        <source>Staking %s %s for yield accrual.  </source>
        <translation>Apostando %s %s para acúmulo de rendimento.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7079" />
        <source>Sending %s %s.  </source>
        <translation>Enviando %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7098" />
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>. Esta transação (incluindo %s alteração) será desbloqueada em %llu blocos, aproximadamente %s dias (assumindo 2 minutos por bloco)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975" />
        <source>Invalid account</source>
        <translation>Conta inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8006" />
        <source>return_payments are disabled</source>
        <translation>return_payments estão desabilitados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8042" />
        <source>incorrect TX type for txid </source>
        <translation>tipo TX incorreto para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8048" />
        <source>invalid return_address_list for txid </source>
        <translation>return_address_list inválido para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054" />
        <source>invalid return_address/return_pubkey for txid </source>
        <translation>return_address/return_pubkey inválido para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8061" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8072" />
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid </source>
        <translation>imagem chave não está disponível (parcial / desconhecida / gasta / congelada) para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8104" />
        <source>Returning %s for a total fee of %s.  Is this okay?</source>
        <translation>Retornando %s por uma taxa total de %s. Isso está certo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8134" />
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>assinatura fria de TXs de retorno ainda não implementada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8224" />
        <source>conversions are disabled until hard fork </source>
        <translation>as conversões são desabilitadas até que ocorra o hard fork </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8231" />
        <source>missing / extraneous argument(s)</source>
        <translation>argumento(s) ausente(s) / estranho(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8247" />
        <source>invalid slippage_limit value : expected 0.0-90.0, got </source>
        <translation>valor slippage_limit inválido: esperado 0,0-90,0, obtido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8258" />
        <source>invalid argument(s): </source>
        <translation>argumento(s) inválido(s): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8264" />
        <source>out of range for slippage limit: </source>
        <translation>fora do intervalo para limite de deslizamento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8274" />
        <source>invalid destination asset_type</source>
        <translation>tipo de ativo de destino inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8284" />
        <source>invalid source asset_type</source>
        <translation>asset_type de origem inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8293" />
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>conversão inválida - asset_type não foi alterado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8318" />
        <source>This is a multisig wallet, staking is not currently supported</source>
        <translation>Esta é uma carteira multiassinatura, o staking não é suportado no momento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8356" />
        <source>%s
	SPOT:	%d
	MA:	%d</source>
        <translation>%s LOCAL: %d MA: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8380" />
        <source>SUPPLY INFO</source>
        <translation>INFORMAÇÕES DE FORNECIMENTO</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8391" />
        <source>	%6s : %21.8d</source>
        <translation>	%6s: %21,8d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8418" />
        <source>
STAKED FUNDS:</source>
        <translation>
FUNDOS APOSTADOS:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8424" />
        <source>Height %d, txid %s, staked %s SAL, earned %s SAL</source>
        <translation>Altura %d, txid %s, SAL apostado %s, SAL ganho %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8439" />
        <source>
YIELD INFO:
	Supply coins burnt over last %s: %d
	Total coins locked: %d
	Yield accrued over last %s: %d
	Yield per SAL staked: %d</source>
        <translation>
INFORMAÇÕES SOBRE RENDIMENTO: Moedas de suprimento queimadas nos últimos %s: %d Total de moedas bloqueadas: %d Rendimento acumulado nos últimos %s: %d Rendimento por SAL apostado: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8504" />
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>Doando %s %s para a Equipe Salvium (donate.salvium.io ou %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8855" />
        <source>Last argument is an address, but not a subaddress</source>
        <translation>O último argumento é um endereço, mas não um subendereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8909" />
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>Pode ser porque a transferência foi para um subendereço. Se for esse o caso, passe o subendereço por último</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9604" />
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>uso: show_transfers [entrada|saída|tudo|pendente|falha|pool|coinbase|queimado|apostado|rendimento] [índice=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9663" />
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>uso: export_transfers [entrada|saída|tudo|pendente|falha|pool|coinbase|queimado|apostado|rendimento] [índice=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [saída=&lt;path&gt; ] [opção=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>tx key</source>
        <translation>chave tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10352" />
        <source>
Grand total:
  Asset: </source>
        <translation>
Total geral: Ativo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Asset</source>
        <translation>Ativo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10390" />
        <source> %c%8u %6s %21s %21s %21s %21s</source>
        <translation> %c%8u %6s %21s %21s %21s %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10404" />
        <source>------------------------------------------------------------------------------------</source>
        <translation>-------------------------------------------------- ----------------------------------</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10406" />
        <source>%15s   %21s %21s  %15s</source>
        <translation>%15s %21s %21s %15s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10461" />
        <source>Expected exactly one argument for the amount of new addresses</source>
        <translation>Esperava exatamente um argumento para a quantidade de novos endereços</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10467" />
        <source>failed to parse the amount of new addresses: </source>
        <translation>falha ao analisar a quantidade de novos endereços: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10472" />
        <source>the amount of new addresses must be lower or equal to </source>
        <translation>a quantidade de novos endereços deve ser menor ou igual a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10487" />
        <source>Expected exactly two arguments for index</source>
        <translation>Esperava exatamente dois argumentos para o índice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10497" />
        <source>Address at %u %u: %s</source>
        <translation>Endereço em %u %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10630" />
        <source>Standard address: %s, payment ID: %s</source>
        <translation>Endereço padrão: %s, ID de pagamento: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10886" />
        <source>Invalid subaddress index format, and not a signature type: </source>
        <translation>Formato de índice de subendereço inválido e não é um tipo de assinatura: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11511" />
        <source> (Y/Yes/N/No): </source>
        <translation> (S/Sim/N/Não): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11517" />
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>AVISO: O uso de mecanismos de configuração automática de MMS não é confiável</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11518" />
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers' info</source>
        <translation>Um gerenciador de configuração automática malicioso pode enviar a você informações sobre suas próprias carteiras em vez das informações de outros signatários</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11519" />
        <source>If in doubt do not use auto-config or at least compare configs using the "mms config_checksum" command</source>
        <translation>Em caso de dúvida, não use a configuração automática ou pelo menos compare as configurações usando o comando &amp;quot;mms config_checksum&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11546" />
        <source>Choose processing:</source>
        <translation>Escolha o processamento:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11555" />
        <source>Sign tx</source>
        <translation>Assinar tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11563" />
        <source>Send the tx for submission to </source>
        <translation>Envie o tx para envio para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11567" />
        <source>Send the tx for signing to </source>
        <translation>Envie a tx para assinatura para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11574" />
        <source>Submit tx</source>
        <translation>Enviar tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11577" />
        <source>unknown</source>
        <translation>desconhecido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11583" />
        <source>Choice: </source>
        <translation>Escolha: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11595" />
        <source>Wrong choice</source>
        <translation>Escolha errada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>Id</source>
        <translation>Eu ia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>I/O</source>
        <translation>E/S</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>Authorized Signer</source>
        <translation>Signatário autorizado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Message Type</source>
        <translation>Tipo de mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Height</source>
        <translation>Altura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Message State</source>
        <translation>Estado da mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Since</source>
        <translation>Desde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11620" />
        <source> ago</source>
        <translation> atrás</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>Transport Address</source>
        <translation>Endereço de transporte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627" />
        <source>Auto-Config Token</source>
        <translation>Token de configuração automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627" />
        <source>Salvium Address</source>
        <translation>Endereço Sálvio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11631" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11639" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11641" />
        <source>&lt;not set&gt;</source>
        <translation>&lt;not set&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11682" />
        <source>Message </source>
        <translation>Mensagem </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683" />
        <source>In/out: </source>
        <translation>Entrada/saída: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11685" />
        <source>State: </source>
        <translation>Estado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11685" />
        <source>%s since %s, %s ago</source>
        <translation>%s desde %s, %s atrás</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11689" />
        <source>Sent: Never</source>
        <translation>Enviado: Nunca</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11693" />
        <source>Sent: %s, %s ago</source>
        <translation>Enviado: %s, %s atrás</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11696" />
        <source>Authorized signer: </source>
        <translation>Signatário autorizado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11697" />
        <source>Content size: </source>
        <translation>Tamanho do conteúdo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11697" />
        <source> bytes</source>
        <translation> bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11698" />
        <source>Content: </source>
        <translation>Contente: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11698" />
        <source>(binary data)</source>
        <translation>(dados binários)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11728" />
        <source>Send these messages now?</source>
        <translation>Enviar essas mensagens agora?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11738" />
        <source>Queued for sending.</source>
        <translation>Na fila para envio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11758" />
        <source>Invalid message id</source>
        <translation>ID de mensagem inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11767" />
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>uso: mms init&lt;required_signers&gt; /&lt;authorized_signers&gt;&lt;own_label&gt;&lt;own_transport_address&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11773" />
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>O MMS já foi inicializado. Reinicializar excluindo todas as informações e mensagens do signatário?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11788" />
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>Erro no número de signatários obrigatórios e/ou signatários autorizados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11805" />
        <source>The MMS is not active.</source>
        <translation>O MMS não está ativo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11828" />
        <source>Invalid signer number </source>
        <translation>Número de signatário inválido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11833" />
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>assinante mms [&lt;number&gt; &lt;label&gt;[&lt;/label&gt;&lt;transport_address&gt; &lt;label&gt;[&lt;/label&gt;&lt;salvium_address&gt; &lt;label&gt;]]]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11852" />
        <source>Invalid Salvium address</source>
        <translation>Endereço Salvium inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11859" />
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>O estado da carteira não permite mais a alteração de endereços Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11871" />
        <source>Usage: mms list</source>
        <translation>Uso: lista mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11884" />
        <source>Usage: mms next [sync]</source>
        <translation>Uso: mms next [sincronizar]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11909" />
        <source>No next step: </source>
        <translation>Nenhum próximo passo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11919" />
        <source>prepare_multisig</source>
        <translation>preparar_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11925" />
        <source>make_multisig</source>
        <translation>fazer_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11940" />
        <source>exchange_multisig_keys</source>
        <translation>troca_chaves_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11956" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="12080" />
        <source>export_multisig_info</source>
        <translation>exportar_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11965" />
        <source>import_multisig_info</source>
        <translation>importar_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11978" />
        <source>sign_multisig</source>
        <translation>sinal_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11988" />
        <source>submit_multisig</source>
        <translation>enviar_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11998" />
        <source>Send tx</source>
        <translation>Enviar tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12009" />
        <source>Process signer config</source>
        <translation>Configuração do signatário do processo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12021" />
        <source>Replace current signer config with the one displayed above?</source>
        <translation>Substituir a configuração atual do signatário pela exibida acima?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12027" />
        <source>You can use the "mms delete" command to delete any unwanted message</source>
        <translation>Você pode usar o comando &amp;quot;mms delete&amp;quot; para excluir qualquer mensagem indesejada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12040" />
        <source>Process auto config data</source>
        <translation>Processar dados de configuração automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12054" />
        <source>Nothing ready to process</source>
        <translation>Nada pronto para processar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12073" />
        <source>Usage: mms sync</source>
        <translation>Uso: sincronização mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12097" />
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>Uso: mms delete (&lt;message_id&gt; | todos)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12104" />
        <source>Delete all messages?</source>
        <translation>Excluir todas as mensagens?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12130" />
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>Uso: mms enviar [&lt;message_id&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12147" />
        <source>Usage: mms receive</source>
        <translation>Uso: mms receber</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12164" />
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>Uso: exportação mms&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12175" />
        <source>Message content saved to: </source>
        <translation>Conteúdo da mensagem salvo em: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12179" />
        <source>Failed to to save message content</source>
        <translation>Falha ao salvar o conteúdo da mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12203" />
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>Uso: nota mms [&lt;text&gt; &lt;label&gt;]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12210" />
        <source>No signer found with label </source>
        <translation>Nenhum signatário encontrado com rótulo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12232" />
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>Uso: mms show&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12250" />
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>Uso: conjunto mms&lt;option_name&gt; [&lt;option_value&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12267" />
        <source>Wrong option value</source>
        <translation>Valor de opção errado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12272" />
        <source>Auto-send is on</source>
        <translation>O envio automático está ativado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12272" />
        <source>Auto-send is off</source>
        <translation>O envio automático está desativado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12277" />
        <source>Unknown option</source>
        <translation>Opção desconhecida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12285" />
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>Uso: ajuda mms [&lt;subcommand&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12301" />
        <source>Usage: mms send_signer_config</source>
        <translation>Uso: mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12307" />
        <source>Signer config not yet complete</source>
        <translation>A configuração do signatário ainda não está completa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12322" />
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>Uso: mms start_auto_config [ &lt;label&gt;...]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12327" />
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>Há signatários sem um conjunto de rótulos. Complete os rótulos antes da configuração automática ou especifique-os como parâmetros aqui.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12333" />
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>A configuração automática já está em execução. Cancelar e reiniciar?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12357" />
        <source>Usage: mms config_checksum</source>
        <translation>Uso: mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12369" />
        <source>Usage: mms stop_auto_config</source>
        <translation>Uso: mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12372" />
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>Excluir todos os tokens de configuração automática e parar a configuração automática?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12385" />
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>Uso: mms auto_config&lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12392" />
        <source>Invalid auto-config token</source>
        <translation>Token de configuração automática inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12402" />
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>Auto-config já em execução. Cancelar e reiniciar?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12421" />
        <source>MMS not available in this wallet</source>
        <translation>MMS não disponível nesta carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12445" />
        <source>The MMS is not active. Activate using the "mms init" command</source>
        <translation>O MMS não está ativo. Ative usando o comando &amp;quot;mms init&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12526" />
        <source>Invalid MMS subcommand</source>
        <translation>Subcomando MMS inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12531" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="12535" />
        <source>Error in MMS command: </source>
        <translation>Erro no comando MMS: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10857" />
        <source>wallet is watch-only and cannot sign</source>
        <translation>a carteira é somente para relógio e não pode assinar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10862" />
        <source>This wallet is multisig and cannot sign</source>
        <translation>Esta carteira é multisig e não pode assinar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10936" />
        <source>Bad signature from </source>
        <translation>Assinatura ruim de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10940" />
        <source>Good signature from </source>
        <translation>Boa assinatura de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10956" />
        <source>wallet is watch-only and cannot export key images</source>
        <translation>a carteira é somente para observação e não pode exportar imagens-chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10994" />
        <source>Signed key images exported to </source>
        <translation>Imagens de chaves assinadas exportadas para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11039" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11085" />
        <source>command only supported by HW wallet</source>
        <translation>comando suportado apenas pela carteira HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11044" />
        <source>hw wallet does not support cold KI sync</source>
        <translation>a carteira hw não suporta sincronização KI fria</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11056" />
        <source>Please confirm the key image sync on the device</source>
        <translation>Por favor, confirme a sincronização da imagem principal no dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11062" />
        <source>Key images synchronized to height </source>
        <translation>Imagens-chave sincronizadas com a altura </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11065" />
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>Executando daemon não confiável, não é possível determinar qual saída de transação é gasta. Use um daemon confiável com --trusted-daemon e execute rescan_spent</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11068" />
        <source> spent, </source>
        <translation> gasto, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11068" />
        <source> unspent</source>
        <translation> não gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11072" />
        <source>Failed to import key images</source>
        <translation>Falha ao importar imagens-chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11077" />
        <source>Failed to import key images: </source>
        <translation>Falha ao importar imagens principais: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11094" />
        <source>Failed to reconnect device</source>
        <translation>Falha ao reconectar o dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11099" />
        <source>Failed to reconnect device: </source>
        <translation>Falha ao reconectar o dispositivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11151" />
        <source>Outputs exported to </source>
        <translation>Saídas exportadas para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11306" />
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>Gasto duplo visto na rede: esta transação pode ou não acabar sendo minerada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11341" />
        <source>Transaction ID not found</source>
        <translation>ID da transação não encontrado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11376" />
        <source>Transaction successfully saved to </source>
        <translation>Transação salva com sucesso em </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11376" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11378" />
        <source>, txid </source>
        <translation>, txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11378" />
        <source>Failed to save transaction to </source>
        <translation>Falha ao salvar transação para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="408" />
        <source>true</source>
        <translation>verdadeiro</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="461" />
        <source>failed to parse refresh type</source>
        <translation>falha ao analisar o tipo de atualização</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="881" />
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Insira a senha de deslocamento de semente opcional, em branco para ver a semente bruta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4342" />
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Insira a senha de deslocamento da semente, vazia se nenhuma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5342" />
        <source>You may want to remove the file "%s" and try again</source>
        <translation>Você pode querer remover o arquivo &amp;quot;%s&amp;quot; e tentar novamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8685" />
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Esta é uma carteira multisig, ela só pode assinar com sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8690" />
        <source>This is a watch only wallet</source>
        <translation>Esta é uma carteira somente para relógio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8722" />
        <source>Failed to sign transaction</source>
        <translation>Falha ao assinar a transação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8728" />
        <source>Failed to sign transaction: </source>
        <translation>Falha ao assinar a transação: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8749" />
        <source>Transaction raw hex data exported to </source>
        <translation>Dados hexadecimais brutos da transação exportados para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8770" />
        <source>Failed to load transaction from file</source>
        <translation>Falha ao carregar transação do arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8024" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8815" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8866" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8925" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8974" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9056" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9141" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9176" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10716" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10744" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11203" />
        <source>failed to parse txid</source>
        <translation>falha ao analisar txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8430" />
        <source>Height %d (matures %d), txid %s, staked %s SAL, %s SAL accrued so far</source>
        <translation>Altura %d (amadurece %d), txid %s, SAL apostado %s, SAL acumulado %s até agora</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8828" />
        <source>Tx key: </source>
        <translation>Chave Tx: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8833" />
        <source>no tx keys found for this txid</source>
        <translation>nenhuma chave tx encontrada para este txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8876" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8887" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8894" />
        <source>failed to parse tx_key</source>
        <translation>falha ao analisar tx_key</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8903" />
        <source>Tx key successfully stored.</source>
        <translation>Chave Tx armazenada com sucesso.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8907" />
        <source>Failed to store tx key: </source>
        <translation>Falha ao armazenar a chave tx: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8943" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9155" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9244" />
        <source>signature file saved to: </source>
        <translation>arquivo de assinatura salvo em: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8945" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9157" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9246" />
        <source>failed to save signature file</source>
        <translation>falha ao salvar arquivo de assinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8949" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9037" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9115" />
        <source>error: </source>
        <translation>erro: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8982" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8991" />
        <source>failed to parse tx key</source>
        <translation>falha ao analisar a chave tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9013" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9086" />
        <source>received</source>
        <translation>recebido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9013" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9086" />
        <source>in txid</source>
        <translation>em txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9016" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9089" />
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>AVISO: esta transação ainda não está incluída no blockchain!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9026" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9099" />
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>AVISO: falha ao determinar o número de confirmações!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9032" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9105" />
        <source>received nothing in txid</source>
        <translation>não recebi nada em txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9186" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9280" />
        <source>failed to load signature file</source>
        <translation>falha ao carregar arquivo de assinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9083" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9193" />
        <source>Good signature</source>
        <translation>Boa assinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9110" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9195" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9295" />
        <source>Bad signature</source>
        <translation>Assinatura ruim</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9134" />
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>a carteira é somente para assistir e não pode gerar a prova</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9218" />
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>A prova de reserva só pode ser gerada por uma carteira cheia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9273" />
        <source>Address must not be a subaddress</source>
        <translation>O endereço não deve ser um subendereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9400" />
        <source>bad min_height parameter:</source>
        <translation>parâmetro min_height inválido:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9412" />
        <source>bad max_height parameter:</source>
        <translation>parâmetro max_height inválido:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9434" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>block</source>
        <translation>bloquear</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9434" />
        <source>in</source>
        <translation>em</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9525" />
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[Gasto duplo visto na rede: esta transação pode ou não acabar sendo minerada] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9813" />
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt;deve ser menor que&lt;max_amount&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9839" />
        <source>There is no unspent output in the specified address</source>
        <translation>Não há saída não gasta no endereço especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845" />
        <source>
Amount: </source>
        <translation>
Quantia: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845" />
        <source>, number of keys: </source>
        <translation>, número de chaves: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9850" />
        <source> </source>
        <translation> </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9855" />
        <source>
Min block height: </source>
        <translation>
Altura mínima do bloco: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9856" />
        <source>
Max block height: </source>
        <translation>
Altura máxima do bloco: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9857" />
        <source>
Min amount found: </source>
        <translation>
Quantidade mínima encontrada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9858" />
        <source>
Max amount found: </source>
        <translation>
Quantidade máxima encontrada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9859" />
        <source>
Total count: </source>
        <translation>
Contagem total: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9899" />
        <source>
Bin size: </source>
        <translation>
Pegue para você: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9900" />
        <source>
Outputs per *: </source>
        <translation>
Saídas por *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9902" />
        <source>count
  ^
</source>
        <translation>contar ^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9904" />
        <source>  |</source>
        <translation>  |</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9906" />
        <source>  +</source>
        <translation>  +</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9906" />
        <source>+--&gt; block height
</source>
        <translation>+--&amp;gt; altura do bloco
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9907" />
        <source>   ^</source>
        <translation>   ^</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9907" />
        <source>^
</source>
        <translation>^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9908" />
        <source>  </source>
        <translation>  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9953" />
        <source>Warning: this will lose any information which can not be recovered from the blockchain.</source>
        <translation>Aviso: isso perderá qualquer informação que não possa ser recuperada do blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9954" />
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Isso inclui endereços de destino, chaves secretas de tx, notas de tx, etc.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9291" />
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Boa assinatura -- total: %s, gasto: %s, não gasto: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094" />
        <source>First line is not an amount</source>
        <translation>A primeira linha não é um valor</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108" />
        <source>Invalid output: </source>
        <translation>Saída inválida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2133" />
        <source>Invalid output key, and file doesn't exist</source>
        <translation>Chave de saída inválida e o arquivo não existe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2156" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2183" />
        <source>Invalid output</source>
        <translation>Saída inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2671" />
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>argumento inválido: deve ser 0/nunca, 1/ação ou 2/criptografar/descriptografar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3377" />
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included)</source>
        <translation>Transferir&lt;amount&gt; para&lt;address&gt; e bloqueie-o para&lt;lockblocks&gt; (máx. 1000000). Se o parâmetro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; for especificado, a carteira usa saídas recebidas por endereços desses índices. Se omitido, a carteira escolhe aleatoriamente índices de endereço a serem usados. Em qualquer caso, ela tenta o seu melhor para não combinar saídas em vários endereços.&lt;priority&gt; é a prioridade da transação. Quanto maior a prioridade, maior a taxa de transação. Os valores válidos em ordem de prioridade (do menor para o maior) são: unimportant, normal, elevated, priority. Se omitido, o valor padrão (veja o comando &amp;quot;set priority&amp;quot;) é usado.&lt;ring_size&gt; é o número de entradas a serem incluídas para não rastreabilidade. Vários pagamentos podem ser feitos de uma vez adicionando URI_2 ou&lt;address_2&gt;&lt;amount_2&gt; etc. (antes do ID do pagamento, se estiver incluído)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5946" />
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Senha necessária (%s) - use o comando refresh</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10114" />
        <source>Daemon requests payment at diff %llu, with %f credits/hash%s. Run start_mining_for_rpc to start mining to pay for RPC access, or use another daemon</source>
        <translation>O daemon solicita pagamento no diff %llu, com %f créditos/hash%s. Execute start_mining_for_rpc para começar a minerar para pagar pelo acesso RPC, ou use outro daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10141" />
        <source>Error mining to daemon: </source>
        <translation>Erro ao minerar para daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10147" />
        <source>Failed to start mining for RPC payment</source>
        <translation>Falha ao iniciar a mineração para pagamento RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10159" />
        <source>wallet</source>
        <translation>carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10161" />
        <source> (no daemon)</source>
        <translation> (sem daemon)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10163" />
        <source> (out of sync)</source>
        <translation> (fora de sincronia)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10214" />
        <source>(Untitled account)</source>
        <translation>(Conta sem título)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10227" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10245" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10270" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10293" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10493" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10503" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10526" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10554" />
        <source>failed to parse index: </source>
        <translation>falha ao analisar índice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10232" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10508" />
        <source>specify an index between 0 and </source>
        <translation>especifique um índice entre 0 e </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10354" />
        <source>, unlocked balance: </source>
        <translation>, saldo desbloqueado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10364" />
        <source>Untagged accounts:</source>
        <translation>Contas não marcadas:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10370" />
        <source>Tag %s is unregistered.</source>
        <translation>A tag %s não está registrada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10373" />
        <source>Accounts with tag: </source>
        <translation>Contas com tag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10374" />
        <source>Tag's description: </source>
        <translation>Descrição da tag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Account</source>
        <translation>Conta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10430" />
        <source>Primary address</source>
        <translation>Endereço principal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10430" />
        <source>(used)</source>
        <translation>(usado)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10451" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10477" />
        <source>(Untitled address)</source>
        <translation>(Endereço sem título)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10535" />
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt;já está fora dos limites</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10540" />
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt;excede o limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10604" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10617" />
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Endereços integrados só podem ser criados para a conta 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10609" />
        <source>Matching integrated address: </source>
        <translation>Endereço integrado correspondente: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10636" />
        <source>Subaddress: </source>
        <translation>Subendereço: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10636" />
        <source>Standard address: </source>
        <translation>Endereço padrão: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10641" />
        <source>failed to parse payment ID or address</source>
        <translation>falha ao analisar o ID ou endereço do pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10678" />
        <source>failed to parse index</source>
        <translation>falha ao analisar o índice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10686" />
        <source>Address book is empty.</source>
        <translation>O catálogo de endereços está vazio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10692" />
        <source>Index: </source>
        <translation>Índice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10698" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10828" />
        <source>Address: </source>
        <translation>Endereço: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10699" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10827" />
        <source>Description: </source>
        <translation>Descrição: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10784" />
        <source>no description found</source>
        <translation>nenhuma descrição encontrada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10786" />
        <source>description found: </source>
        <translation>descrição encontrada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6679" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10826" />
        <source>Filename: </source>
        <translation>Nome do arquivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10831" />
        <source>Watch only</source>
        <translation>Assistir apenas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10833" />
        <source>%u/%u multisig%s</source>
        <translation>%u/%u multiassinaturas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8648" />
        <source>%s change to %s</source>
        <translation>%s mudar para %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9022" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9095" />
        <source>This transaction has %u confirmations</source>
        <translation>Esta transação tem %u confirmações</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61" />
        <source>Filename to save the certificate</source>
        <translation>Nome do arquivo para salvar o certificado</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62" />
        <source>Filename to save the private key</source>
        <translation>Nome do arquivo para salvar a chave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63" />
        <source>Passphrase with which to encrypt the private key</source>
        <translation>Senha com a qual criptografar a chave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64" />
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>Arquivo contendo a senha com a qual criptografar a chave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65" />
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>Solicitar uma senha para criptografar a chave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143" />
        <source>Argument is needed: </source>
        <translation>É necessário argumento: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153" />
        <source>Failed to read passphrase</source>
        <translation>Falha ao ler a senha</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188" />
        <source>Failed to create certificate</source>
        <translation>Falha ao criar certificado</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206" />
        <source>Failed to write certificate: </source>
        <translation>Falha ao gravar o certificado: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226" />
        <source>Failed to write private key: </source>
        <translation>Falha ao escrever a chave privada: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237" />
        <source>Failed to save certificate file</source>
        <translation>Falha ao salvar o arquivo do certificado</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243" />
        <source>Failed to save private key file</source>
        <translation>Falha ao salvar o arquivo de chave privada</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69" />
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Nome do arquivo base (-1, -2, etc. sufixos serão acrescentados conforme necessário)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70" />
        <source>Give threshold and participants at once as M/N</source>
        <translation>Dê o limite e os participantes de uma vez como M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71" />
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>Quantos participantes compartilharão partes da carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72" />
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Quantos signatários são necessários para assinar uma transação válida</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73" />
        <source>Create testnet multisig wallets</source>
        <translation>Crie carteiras multisig de testnet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74" />
        <source>Create stagenet multisig wallets</source>
        <translation>Crie carteiras multisig stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75" />
        <source>Create an address file for new wallets</source>
        <translation>Crie um arquivo de endereço para novas carteiras</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80" />
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Gerando carteiras multisig %u %u/%u</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="137" />
        <source>Generated multisig wallets for address </source>
        <translation>Carteiras multisig geradas para endereço </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="141" />
        <source>Error creating multisig wallets: </source>
        <translation>Erro ao criar carteiras multiassinatura: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="166" />
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Este programa gera um conjunto de carteiras multisig - use este esquema mais simples somente se todos os participantes confiarem uns nos outros</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="185" />
        <source>Error: Can't specify more than one of --testnet and --stagenet</source>
        <translation>Erro: Não é possível especificar mais de um de --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="192" />
        <source>Error: expected N/M, but got: </source>
        <translation>Erro: esperava N/M, mas obteve: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="200" />
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="209" />
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Erro: --scheme ou ambos --threshold e --participants podem ser fornecidos</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216" />
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Erro: esperava-se N &amp;gt; 1 e N &amp;lt;= M, mas obteve-se N==%u e M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225" />
        <source>Error: --filename-base is required</source>
        <translation>Erro: --filename-base é obrigatório</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72" />
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>Use a instância PyBitmessage na URL&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73" />
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>Especificar&lt;arg&gt; como nome de usuário:senha para API PyBitmessage</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911" />
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>A configuração automática não pode prosseguir porque os dados de configuração automática de outros signatários não estão completos</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936" />
        <source>The signer config is not complete.</source>
        <translation>A configuração do signatário não está completa.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988" />
        <source>Wallet can't go multisig because key sets from other signers are missing or not complete.</source>
        <translation>A carteira não pode ser multiassinada porque os conjuntos de chaves de outros signatários estão ausentes ou incompletos.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030" />
        <source>Wallet can't start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>A carteira não pode iniciar outra rodada de troca de chaves porque os conjuntos de chaves de outros signatários estão faltando ou não estão completos.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094" />
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>A sincronização não foi realizada porque os dados de sincronização multisig de outros signatários estão ausentes ou não estão completos.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208" />
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>Há mensagens em espera, mas nada está pronto para ser processado em circunstâncias normais</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211" />
        <source>
Use "mms next sync" if you want to force processing of the waiting sync data</source>
        <translation>
Use &amp;quot;mms next sync&amp;quot; se quiser forçar o processamento dos dados de sincronização em espera</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215" />
        <source>
Use "mms note" to display the waiting notes</source>
        <translation>
Use &amp;quot;mms note&amp;quot; para exibir as notas de espera</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220" />
        <source>There are no messages waiting to be processed.</source>
        <translation>Não há mensagens aguardando processamento.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441" />
        <source>key set</source>
        <translation>conjunto de chaves</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443" />
        <source>additional key set</source>
        <translation>conjunto de chaves adicional</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445" />
        <source>multisig sync data</source>
        <translation>sincronização de dados multisig</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447" />
        <source>partially signed tx</source>
        <translation>tx parcialmente assinado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449" />
        <source>fully signed tx</source>
        <translation>tx totalmente assinado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451" />
        <source>note</source>
        <translation>observação</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453" />
        <source>signer config</source>
        <translation>configuração do signatário</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455" />
        <source>auto-config data</source>
        <translation>dados de configuração automática</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457" />
        <source>unknown message type</source>
        <translation>tipo de mensagem desconhecido</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466" />
        <source>in</source>
        <translation>em</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468" />
        <source>out</source>
        <translation>fora</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470" />
        <source>unknown message direction</source>
        <translation>direção da mensagem desconhecida</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479" />
        <source>ready to send</source>
        <translation>pronto para enviar</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481" />
        <source>sent</source>
        <translation>enviado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483" />
        <source>waiting</source>
        <translation>esperando</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485" />
        <source>processed</source>
        <translation>processado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487" />
        <source>cancelled</source>
        <translation>cancelado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489" />
        <source>unknown message state</source>
        <translation>estado de mensagem desconhecido</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="177" />
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Gere uma nova carteira e salve-a em&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="178" />
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Gere uma nova carteira a partir do dispositivo e salve-a em&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="179" />
        <source>Generate incoming-only wallet from view key</source>
        <translation>Gerar carteira somente para entrada a partir da chave de visualização</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="180" />
        <source>Generate deterministic wallet from spend key</source>
        <translation>Gerar carteira determinística a partir da chave de gastos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="181" />
        <source>Generate wallet from private keys</source>
        <translation>Gerar carteira a partir de chaves privadas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="182" />
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Gerar uma carteira mestre a partir de chaves de carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184" />
        <source>Language for mnemonic</source>
        <translation>Linguagem para mnemônico</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="185" />
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Especifique a semente Electrum para recuperação/criação de carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="186" />
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Recuperar carteira usando semente mnemônica estilo Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="187" />
        <source>alias for --restore-deterministic-wallet</source>
        <translation>alias para --restore-deterministic-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="188" />
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Recuperar carteira multisig usando semente mnemônica estilo Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="189" />
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Gerar chaves de visualização e gastos não determinísticas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191" />
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>Restaurar a partir da altura estimada do blockchain na data especificada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192" />
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>A transação recém-criada não será retransmitida para a rede Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="348" />
        <source>failed to read wallet password</source>
        <translation>falha ao ler a senha da carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355" />
        <source>Enter a new password for the wallet</source>
        <translation>Digite uma nova senha para a carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355" />
        <source>Wallet password</source>
        <translation>Senha da carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="433" />
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>argumento inválido: deve ser 0/1, verdadeiro/falso, s/n, sim/não</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="489" />
        <source>DNSSEC validation passed</source>
        <translation>Validação DNSSEC aprovada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="493" />
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>AVISO: A validação do DNSSEC não foi bem-sucedida, este endereço pode não estar correto!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="496" />
        <source>For URL: </source>
        <translation>Para URL: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="498" />
        <source> Salvium Address = </source>
        <translation> Endereço Sálvio = </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="510" />
        <source>you have cancelled the transfer request</source>
        <translation>você cancelou a solicitação de transferência</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="531" />
        <source>failed to parse index: </source>
        <translation>falha ao analisar índice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="544" />
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>formato inválido para lookahead de subendereço; deve ser&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="608" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>sem conexão com o daemon. Por favor, certifique-se de que o daemon esteja em execução.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="617" />
        <source>RPC error: </source>
        <translation>Erro RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="621" />
        <source>failed to get random outputs to mix: </source>
        <translation>falha ao obter saídas aleatórias para misturar: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="628" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="636" />
        <source>Not enough money in unlocked balance</source>
        <translation>Não há dinheiro suficiente no saldo desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="646" />
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>Falha ao encontrar uma maneira de criar transações. Isso geralmente ocorre devido à poeira, que é tão pequena que não pode pagar por si mesma em taxas, ou tentar enviar mais dinheiro do que o saldo desbloqueado, ou não deixar o suficiente para taxas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="652" />
        <source>not enough outputs for specified ring size</source>
        <translation>não há saídas suficientes para o tamanho do anel especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655" />
        <source>output amount</source>
        <translation>quantidade de saída</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655" />
        <source>found outputs to use</source>
        <translation>saídas encontradas para usar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="657" />
        <source>Please use sweep_unmixable.</source>
        <translation>Por favor, use sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="661" />
        <source>transaction was not constructed</source>
        <translation>a transação não foi construída</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669" />
        <source>Reason: </source>
        <translation>Razão: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="688" />
        <source>failed to find a suitable way to split transactions</source>
        <translation>não conseguiu encontrar uma maneira adequada de dividir as transações</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694" />
        <source>unknown transfer error: </source>
        <translation>erro de transferência desconhecido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699" />
        <source>Multisig error: </source>
        <translation>Erro multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="705" />
        <source>internal error: </source>
        <translation>erro interno: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="710" />
        <source>unexpected error: </source>
        <translation>erro inesperado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714" />
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Houve um erro, o que pode significar que o nó pode estar tentando fazer com que você tente criar uma transação novamente e se concentre em quais saídas você possui. Ou pode ser um erro genuíno. Pode ser prudente desconectar-se deste nó e não tentar enviar uma transação imediatamente. Como alternativa, conecte-se a outro nó para que o nó original não possa correlacionar informações.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726" />
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>O arquivo %s provavelmente armazena chaves privadas da carteira! Use um nome de arquivo diferente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9309" />
        <source> seconds</source>
        <translation> segundos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9311" />
        <source> minutes</source>
        <translation> minutos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9313" />
        <source> hours</source>
        <translation> horas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9315" />
        <source> days</source>
        <translation> dias</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9317" />
        <source> months</source>
        <translation> meses</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9318" />
        <source>a long time</source>
        <translation>muito tempo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11461" />
        <source>Unknown command: </source>
        <translation>Comando desconhecido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="190" />
        <source>Restore from specific blockchain height</source>
        <translation>Restaurar de uma altura específica do blockchain</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193" />
        <source>Create an address file for new wallets</source>
        <translation>Crie um arquivo de endereço para novas carteiras</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195" />
        <source>Display English language names</source>
        <translation>Exibir nomes em inglês</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365" />
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon está ocupado. Por favor, tente novamente mais tarde.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="374" />
        <source>possibly lost connection to daemon</source>
        <translation>possivelmente conexão perdida com o daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="391" />
        <source>Error: </source>
        <translation>Erro: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="500" />
        <source>Is this OK?</source>
        <translation>Isso está OK?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="666" />
        <source>transaction %s was rejected by daemon</source>
        <translation>a transação %s foi rejeitada pelo daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678" />
        <source>destination amount is zero</source>
        <translation>o valor do destino é zero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="683" />
        <source>transaction has no destination</source>
        <translation>transação não tem destino</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="729" />
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>O arquivo %s já existe. Tem certeza de que deseja sobrescrevê-lo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11436" />
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>Esta é a carteira Salvium de linha de comando. Ela precisa se conectar a um daemon Salvium para funcionar corretamente. AVISO: Não reutilize suas chaves Salvium em outro fork, A MENOS que este fork tenha mitigações de reutilização de chaves incorporadas. Fazer isso prejudicará sua privacidade.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11455" />
        <source>Failed to initialize wallet</source>
        <translation>Falha ao inicializar a carteira</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="244" />
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Use a instância do daemon em&lt;host&gt; :&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="245" />
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Usar instância do daemon no host&lt;arg&gt; em vez de localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251" />
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Usar instância do daemon na porta&lt;arg&gt; em vez de 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260" />
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Para testnet. O daemon também deve ser iniciado com o sinalizador --testnet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="280" />
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>Arquivo contendo entropia extra para inicializar o PRNG (quaisquer dados, busque 256 bits de entropia para ser útil, o que normalmente significa mais de 256 bits de dados)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281" />
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>Permitir comunicação com um daemon que usa uma versão diferente</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375" />
        <source>can't specify daemon host or port more than once</source>
        <translation>não é possível especificar o host ou a porta do daemon mais de uma vez</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511" />
        <source>can't specify more than one of --password and --password-file</source>
        <translation>não é possível especificar mais de um de --password e --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="525" />
        <source>the password file specified could not be read</source>
        <translation>o arquivo de senha especificado não pôde ser lido</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="551" />
        <source>Failed to load file </source>
        <translation>Falha ao carregar o arquivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="249" />
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Senha da carteira (escape/aspas conforme necessário)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="246" />
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt; :]&lt;port&gt; proxy socks para usar em conexões daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="247" />
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Habilitar comandos que dependem de um daemon confiável</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="248" />
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Desabilitar comandos que dependem de um daemon confiável</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252" />
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Especifique username[:password] para o cliente daemon RPC</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253" />
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>Habilitar SSL em conexões RPC do daemon: habilitado|desabilitado|autodetectar</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="257" />
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>Lista de impressões digitais válidas de servidores RPC permitidos</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258" />
        <source>Allow any SSL certificate from the daemon</source>
        <translation>Permitir qualquer certificado SSL do daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259" />
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>Permitir que o usuário (via --daemon-ssl-ca-certificates) encadeie certificados</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261" />
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Para stagenet. O daemon também deve ser iniciado com o sinalizador --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263" />
        <source>Set shared ring database path</source>
        <translation>Definir caminho do banco de dados de anel compartilhado</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="274" />
        <source>Number of rounds for the key derivation function</source>
        <translation>Número de rodadas para a função de derivação de chave</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="275" />
        <source>HW device to use</source>
        <translation>Dispositivo HW para usar</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="276" />
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>Caminho de derivação da carteira do dispositivo HW (por exemplo, SLIP-10)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="278" />
        <source>Do not use DNS</source>
        <translation>Não use DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="279" />
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>Não se conecte a um daemon nem use DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="367" />
        <source>Invalid argument for </source>
        <translation>Argumento inválido para </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428" />
        <source>Enabling --</source>
        <translation>Habilitando --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428" />
        <source> requires --</source>
        <translation> requer --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="429" />
        <location filename="../src/wallet/wallet2.cpp" line="430" />
        <source> or --</source>
        <translation> ou --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="430" />
        <source> or use of a .onion/.i2p domain</source>
        <translation> ou uso de um domínio .onion/.i2p</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="448" />
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon e --untrusted-daemon são vistos, assumindo que não são confiáveis</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="458" />
        <source>Daemon is local, assuming trusted</source>
        <translation>O daemon é local, assumindo que é confiável</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="468" />
        <source>failed to initialize the wallet</source>
        <translation>falha ao inicializar a carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532" />
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>nenhuma senha especificada; use --prompt-for-password para solicitar uma senha</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534" />
        <source>Enter a new password for the wallet</source>
        <translation>Digite uma nova senha para a carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534" />
        <source>Wallet password</source>
        <translation>Senha da carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="557" />
        <source>Failed to parse JSON</source>
        <translation>Falha ao analisar JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564" />
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Versão %u muito nova, só podemos grok até %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="580" />
        <source>failed to parse view key secret key</source>
        <translation>falha ao analisar a chave de visualização da chave secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="585" />
        <source>view secret key may not be all zeroes</source>
        <translation>a chave secreta da visualização pode não ser toda zero</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587" />
        <location filename="../src/wallet/wallet2.cpp" line="657" />
        <location filename="../src/wallet/wallet2.cpp" line="702" />
        <source>failed to verify view key secret key</source>
        <translation>falha ao verificar a chave de visualização da chave secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="598" />
        <source>failed to parse spend key secret key</source>
        <translation>falha ao analisar a chave secreta da chave de gasto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="603" />
        <source>spend secret key may not be all zeroes</source>
        <translation>gastar chave secreta pode não ser tudo zeros</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605" />
        <location filename="../src/wallet/wallet2.cpp" line="667" />
        <location filename="../src/wallet/wallet2.cpp" line="728" />
        <source>failed to verify spend key secret key</source>
        <translation>falha ao verificar a chave secreta da chave de gasto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="617" />
        <source>Electrum-style word list failed verification</source>
        <translation>A lista de palavras no estilo Electrum falhou na verificação</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="637" />
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Pelo menos uma lista de palavras no estilo Electrum, uma chave de exibição privada ou uma chave de gasto privada deve ser especificada</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="641" />
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Lista de palavras no estilo Electrum e chaves privadas especificadas</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="651" />
        <source>invalid address</source>
        <translation>endereço inválido</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="660" />
        <source>view key does not match standard address</source>
        <translation>a chave de visualização não corresponde ao endereço padrão</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="670" />
        <source>spend key does not match standard address</source>
        <translation>a chave de gasto não corresponde ao endereço padrão</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="678" />
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Não é possível gerar carteiras obsoletas a partir de JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="714" />
        <source>failed to parse address: </source>
        <translation>falha ao analisar endereço: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="720" />
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>O endereço deve ser especificado para criar uma carteira somente para observação</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="737" />
        <source>failed to generate new wallet: </source>
        <translation>falha ao gerar nova carteira: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2172" />
        <source>Password is needed to compute key image for incoming SALs</source>
        <translation>A senha é necessária para calcular a imagem da chave para SALs de entrada</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2173" />
        <source>Invalid password: password is needed to compute key image for incoming SALs</source>
        <translation>Senha inválida: a senha é necessária para calcular a imagem da chave para SALs de entrada</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3712" />
        <source>reorg exceeds maximum allowed depth, use 'set max-reorg-depth N' to allow it, reorg depth: </source>
        <translation>reorg excede a profundidade máxima permitida, use &amp;#39;set max-reorg-depth N&amp;#39; para permitir, profundidade de reorg: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5600" />
        <location filename="../src/wallet/wallet2.cpp" line="6181" />
        <location filename="../src/wallet/wallet2.cpp" line="6670" />
        <source>Primary account</source>
        <translation>Conta primária</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9041" />
        <source>Transaction sanity check failed</source>
        <translation>Falha na verificação de integridade da transação</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11344" />
        <source>Incorrect number of transfers_indices on return_payment</source>
        <translation>Número incorreto de índices de transferência em return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11346" />
        <source>cannot locate return_payment origin index in m_transfers</source>
        <translation>não é possível localizar o índice de origem return_payment em m_transfers</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11374" />
        <source>at create_transactions_return(): incorrect number of additional TX pubkeys in origin TX for return_payment</source>
        <translation>em create_transactions_return(): número incorreto de chaves públicas TX adicionais no TX de origem para return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11382" />
        <source>at create_transactions_return(): failed to generate_key_derivation</source>
        <translation>em create_transactions_return(): falha ao gerar_derivação_de_chave</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11427" />
        <source>Attempting to return change to ourself</source>
        <translation>Tentando devolver a mudança para nós mesmos</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11432" />
        <source>Failed to identify change output</source>
        <translation>Falha ao identificar a saída da alteração</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11583" />
        <source>Transaction cannot pay for itself</source>
        <translation>A transação não pode se pagar</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11679" />
        <source>Created transaction(s) failed sanity check</source>
        <translation>A(s) transação(ões) criada(s) falhou(aram) na verificação de integridade</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12675" />
        <source>No funds received in this tx.</source>
        <translation>Nenhum fundo recebido nesta transação.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13587" />
        <source>failed to read file </source>
        <translation>falha ao ler o arquivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194" />
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Defina os tamanhos de lookahead do subendereço para&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254" />
        <source>Path to a PEM format private key</source>
        <translation>Caminho para uma chave privada no formato PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255" />
        <source>Path to a PEM format certificate</source>
        <translation>Caminho para um certificado de formato PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256" />
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Caminho para o arquivo que contém certificados em formato PEM concatenados para substituir CA(s) do sistema.</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="219" />
        <source>Failed to create directory </source>
        <translation>Falha ao criar diretório </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="221" />
        <source>Failed to create directory %s: %s</source>
        <translation>Falha ao criar diretório %s: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232" />
        <source>Cannot specify --</source>
        <translation>Não é possível especificar --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232" />
        <source> and --</source>
        <translation> e --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251" />
        <source>Failed to create file </source>
        <translation>Falha ao criar arquivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251" />
        <source>. Check permissions or remove file</source>
        <translation>. Verifique as permissões ou remova o arquivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="261" />
        <source>Error writing to file </source>
        <translation>Erro ao gravar no arquivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="264" />
        <source>RPC username/password is stored in file </source>
        <translation>O nome de usuário/senha do RPC é armazenado no arquivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="667" />
        <source>Tag %s is unregistered.</source>
        <translation>A tag %s não está registrada.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="695" />
        <source>No matches for regex filter %s .</source>
        <translation>Nenhuma correspondência para o filtro regex %s.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3588" />
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Transação não possível. Disponível apenas %s, valor da transação %s = %s + %s (taxa)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4596" />
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>Não é possível especificar mais de um de --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4615" />
        <source>Can't specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Não é possível especificar mais de um de --wallet-file e --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4621" />
        <source>--password-file is not allowed in combination with --wallet-dir</source>
        <translation>--password-file não é permitido em combinação com --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4633" />
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>Deve especificar --wallet-file ou --generate-from-json ou --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4637" />
        <source>Loading wallet...</source>
        <translation>Carregando carteira...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4685" />
        <source>Initial refresh failed: </source>
        <translation>A atualização inicial falhou: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4690" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4722" />
        <source>Saving wallet...</source>
        <translation>Economizando carteira...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4692" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4724" />
        <source>Successfully saved</source>
        <translation>Salvo com sucesso</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4695" />
        <source>Successfully loaded</source>
        <translation>Carregado com sucesso</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4699" />
        <source>Wallet initialization failed: </source>
        <translation>Falha na inicialização da carteira: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4705" />
        <source>Failed to initialize wallet RPC server</source>
        <translation>Falha ao inicializar o servidor RPC da carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4709" />
        <source>Starting wallet RPC server</source>
        <translation>Iniciando servidor RPC de carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4716" />
        <source>Failed to run wallet: </source>
        <translation>Falha ao executar a carteira: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4719" />
        <source>Stopped wallet RPC server</source>
        <translation>Servidor RPC de carteira interrompido</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4728" />
        <source>Failed to save wallet: </source>
        <translation>Falha ao salvar a carteira: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4802" />
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Esta é a carteira RPC Salvium. Ela precisa se conectar a um daemon Salvium para funcionar corretamente.</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="152" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11402" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4781" />
        <source>Wallet options</source>
        <translation>Opções de carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73" />
        <source>Generate wallet from JSON format file</source>
        <translation>Gerar carteira a partir de arquivo no formato JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77" />
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Usar carteira&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81" />
        <source>Set RPC client secret key for RPC payments</source>
        <translation>Definir chave secreta do cliente RPC para pagamentos RPC</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85" />
        <source>Wallet password file</source>
        <translation>Arquivo de senha da carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113" />
        <source>Max number of threads to use for a parallel job</source>
        <translation>Número máximo de threads a serem usados para um trabalho paralelo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114" />
        <source>Specify log file</source>
        <translation>Especificar arquivo de log</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115" />
        <source>Config file</source>
        <translation>Arquivo de configuração</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127" />
        <source>General options</source>
        <translation>Opções gerais</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152" />
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Esta é a carteira Salvium de linha de comando. Ela precisa se conectar a um daemon Salvium para funcionar corretamente.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176" />
        <source>Can't find config file </source>
        <translation>Não é possível encontrar o arquivo de configuração </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220" />
        <source>Logging to: </source>
        <translation>Efetuando login em: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222" />
        <source>Logging to %s</source>
        <translation>Efetuando login em %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226" />
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>AVISO: Você pode não ter um limite de memória bloqueável alto o suficiente</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228" />
        <source>see ulimit -l</source>
        <translation>veja ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153" />
        <source>Usage:</source>
        <translation>Uso:</translation>
    </message>
</context>
</TS>