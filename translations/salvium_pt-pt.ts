<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>Endereço de destino inválido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60"/>
        <source>Payment ID supplied: this is obsolete</source>
        <translation>ID de pagamento fornecido: obsoleto</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Tentativa de salvar a transação em arquivo, mas existem arquivos especificados. Saindo para não correr o risco de sobrescrever. Arquivo:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Falha ao gravar transações no arquivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon está ocupado. Por favor, tente novamente mais tarde.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nenhuma conexão com o daemon. Por favor, certifique-se de que o daemon esteja em execução.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>a transação %s foi rejeitada pelo daemon com status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151"/>
        <source>. Reason: </source>
        <translation>. Razão: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153"/>
        <source>Unknown exception: </source>
        <translation>Exceção desconhecida: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156"/>
        <source>Unhandled exception</source>
        <translation>Exceção não tratada</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="229"/>
        <source>Couldn't multisig sign data: </source>
        <translation>Não foi possível assinar dados multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="251"/>
        <source>Couldn't sign multisig transaction: </source>
        <translation>Não foi possível assinar a transação multisig: </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>Esta é uma carteira apenas para relógio</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>Falha ao assinar a transação</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>O troco reivindicado não vai para um endereço pago</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>O troco reivindicado é maior que o pagamento no endereço do troco</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184"/>
        <source>Change goes to more than one address</source>
        <translation>A mudança vai para mais de um endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>sending %s to %s</source>
        <translation>enviando %s para %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>with no destinations</source>
        <translation>sem destinos</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209"/>
        <source>%s change to %s</source>
        <translation>%s mudou para %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212"/>
        <source>no change</source>
        <translation>nenhuma mudança</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>%lu transações carregadas, para %s, taxa %s, %s, %s, com tamanho mínimo de anel %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="561"/>
        <source>failed to parse address</source>
        <translation>não foi possível analisar o endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="572"/>
        <source>failed to parse secret spend key</source>
        <translation>falha ao analisar a chave secreta de gastos</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="587"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Nenhuma chave de visualização nem chave de gasto fornecida, cancelada</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="595"/>
        <source>failed to parse secret view key</source>
        <translation>falha ao analisar a chave de visualização secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="604"/>
        <source>failed to verify secret spend key</source>
        <translation>não foi possível verificar a chave secreta de gastos</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="608"/>
        <source>spend key does not match address</source>
        <translation>chave de gasto não corresponde ao endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="614"/>
        <source>failed to verify secret view key</source>
        <translation>falha ao verificar a chave de visualização secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="618"/>
        <source>view key does not match address</source>
        <translation>chave de visualização não corresponde ao endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="641"/>
        <location filename="../src/wallet/api/wallet.cpp" line="658"/>
        <source>failed to generate new wallet: </source>
        <translation>falha ao gerar nova carteira: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="706"/>
        <source>Electrum seed is empty</source>
        <translation>A semente de electrum está vazia</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="715"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Lista de palavras no estilo Electrum falhou na verificação</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1071"/>
        <source>Failed to load unsigned transactions</source>
        <translation>Falha ao carregar transações não assinadas</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1094"/>
        <source>Failed to load transaction from file</source>
        <translation>Falha ao carregar a transação do arquivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1110"/>
        <source>Wallet is view only</source>
        <translation>A carteira é somente visualização</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118"/>
        <source>failed to save file </source>
        <translation>não foi possível salvar o arquivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1134"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>As imagens principais só podem ser importadas com um daemon confiável</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1147"/>
        <source>Failed to import key images: </source>
        <translation>Falha ao importar imagens principais: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1158"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1188"/>
        <source>Not supported on HW wallets.</source>
        <translation>Não suportado em carteiras HW.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169"/>
        <source>Failed to save file: </source>
        <translation>Falha ao salvar o arquivo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1176"/>
        <source>Error exporting outputs: </source>
        <translation>Erro ao exportar resultados: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1197"/>
        <source>Failed to read file: </source>
        <translation>Falha ao ler o arquivo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1209"/>
        <source>Failed to import outputs: </source>
        <translation>Falha ao importar resultados: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1220"/>
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>Falha ao verificar transações: nenhum ID de transação foi fornecido.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231"/>
        <source>Invalid txid specified: </source>
        <translation>Txid inválido especificado: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1249"/>
        <source>Failed to scan transaction: </source>
        <translation>Falha ao verificar a transação: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1281"/>
        <source>Failed to get subaddress label: </source>
        <translation>Falha ao obter rótulo de subendereço: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1294"/>
        <source>Failed to set subaddress label: </source>
        <translation>Falha ao definir rótulo de subendereço: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1311"/>
        <source>Failed to get multisig info: </source>
        <translation>Falha ao obter informações multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1328"/>
        <source>Failed to make multisig: </source>
        <translation>Falha ao criar multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1342"/>
        <source>Failed to exchange multisig keys: </source>
        <translation>Falha ao trocar chaves multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1358"/>
        <source>Failed to export multisig images: </source>
        <translation>Falha ao exportar imagens multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1376"/>
        <source>Failed to parse imported multisig images</source>
        <translation>Falha ao analisar imagens multisig importadas</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1386"/>
        <source>Failed to import multisig images: </source>
        <translation>Falha ao importar imagens multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1400"/>
        <source>Failed to check for partial multisig key images: </source>
        <translation>Falha ao verificar imagens de chave multisig parciais: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1428"/>
        <source>Failed to restore multisig transaction: </source>
        <translation>Falha ao restaurar a transação multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1477"/>
        <source>Sending all requires one destination address</source>
        <translation>Enviar tudo requer um endereço de destino</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1481"/>
        <source>Destinations and amounts are unequal</source>
        <translation>Destinos e valores são desiguais</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489"/>
        <source>payment id has invalid format, expected 64 character hex string: </source>
        <translation>o ID de pagamento tem formato inválido, sequência hexadecimal esperada de 64 caracteres: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1497"/>
        <source>Invalid destination address</source>
        <translation>Endereço de destino inválido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1503"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>uma única transação não pode usar mais de um ID de pagamento</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1531"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>falha ao configurar o ID de pagamento, embora tenha sido decodificado corretamente</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1556"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1647"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon está ocupado. Por favor, tente novamente mais tarde.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1558"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1649"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nenhuma conexão com o daemon. Por favor, certifique-se de que o daemon esteja em execução.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1560"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1651"/>
        <source>RPC error: </source>
        <translation>Erro de RPC: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1562"/>
        <source>failed to get outputs to mix: %s</source>
        <translation>falha ao misturar as saídas: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1566"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1658"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>não há dinheiro suficiente para transferir, disponível apenas %s, quantia enviada %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1573"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1666"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>não há dinheiro suficiente para transferir, saldo total apenas %s, quantia enviada %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1580"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1674"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>não há dinheiro suficiente para transferir, disponível apenas %s, valor da transação %s = %s + %s (taxa)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1588"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1682"/>
        <source>not enough outputs for specified ring size</source>
        <translation>saídas insuficientes para o tamanho de anel especificado</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>output amount</source>
        <translation>quantidade de saída</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>found outputs to use</source>
        <translation>encontrei saídas para usar</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1592"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>Varra as saídas não misturáveis.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1595"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1688"/>
        <source>transaction was not constructed</source>
        <translation>transação não foi construída</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1598"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1691"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>a transação %s foi rejeitada pelo daemon com status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1603"/>
        <source>destination amount is zero</source>
        <translation>o valor de destino é zero</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1605"/>
        <source>transaction has no destination</source>
        <translation>transação não tem destino</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1607"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1698"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>não conseguiu encontrar uma maneira adequada de dividir transações</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1609"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1700"/>
        <source>unknown transfer error: </source>
        <translation>erro de transferência desconhecido: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1611"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1702"/>
        <source>internal error: </source>
        <translation>erro interno: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1613"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1704"/>
        <source>unexpected error: </source>
        <translation>erro inesperado: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1615"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1706"/>
        <source>unknown error</source>
        <translation>erro desconhecido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653"/>
        <source>failed to get outputs to mix</source>
        <translation>não conseguiu misturar as saídas</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1696"/>
        <source>one of destinations is zero</source>
        <translation>um dos destinos é zero</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1816"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1852"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1900"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1928"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1956"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1977"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2498"/>
        <source>Failed to parse txid</source>
        <translation>Falha ao analisar txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1836"/>
        <source>no tx keys found for this txid</source>
        <translation>nenhuma chave tx encontrada para este txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1860"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1869"/>
        <source>Failed to parse tx key</source>
        <translation>Falha ao analisar a chave tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1878"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1907"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1935"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2016"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2047"/>
        <source>Failed to parse address</source>
        <translation>Falha ao analisar o endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2021"/>
        <source>Address must not be a subaddress</source>
        <translation>O endereço não deve ser um subendereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2052"/>
        <source>Address doesn't belong to the wallet</source>
        <translation>O endereço não pertence à carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2076"/>
        <source>The wallet must be in multisig ready state</source>
        <translation>A carteira deve estar pronta para multisig</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2098"/>
        <source>Given string is not a key</source>
        <translation>A string dada não é uma chave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2361"/>
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>A nova verificação gasta só pode ser usada com um daemon confiável</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2419"/>
        <source>Invalid output: </source>
        <translation>Saída inválida: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2426"/>
        <source>Failed to mark outputs as spent</source>
        <translation>Falha ao marcar as saídas como gastas</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2437"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2459"/>
        <source>Failed to parse output amount</source>
        <translation>Falha ao analisar o valor da saída</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2442"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2464"/>
        <source>Failed to parse output offset</source>
        <translation>Falha ao analisar o deslocamento de saída</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2448"/>
        <source>Failed to mark output as spent</source>
        <translation>Falha ao marcar a saída como gasta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2470"/>
        <source>Failed to mark output as unspent</source>
        <translation>Falha ao marcar a saída como não gasta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2481"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2520"/>
        <source>Failed to parse key image</source>
        <translation>Falha ao analisar a imagem principal</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2487"/>
        <source>Failed to get ring</source>
        <translation>Falha ao obter o anel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2505"/>
        <source>Failed to get rings</source>
        <translation>Falha ao obter anéis</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2526"/>
        <source>Failed to set ring</source>
        <translation>Falha ao definir o toque</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316"/>
        <source>Failed to parse address</source>
        <translation>Falha ao analisar o endereço</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323"/>
        <source>Failed to parse key</source>
        <translation>Falha ao analisar a chave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="331"/>
        <source>failed to verify key</source>
        <translation>não foi possível verificar a chave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="341"/>
        <source>key does not match address</source>
        <translation>chave não corresponde ao endereço</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54"/>
        <source>yes</source>
        <translation>sim</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68"/>
        <source>no</source>
        <translation>não</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92"/>
        <source>Specify IP to bind RPC server</source>
        <translation>Especifique o IP para vincular o servidor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93"/>
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>Especifique o endereço IPv6 para vincular o servidor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94"/>
        <source>Specify IP to bind restricted RPC server</source>
        <translation>Especifique o IP para vincular o servidor RPC restrito</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95"/>
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>Especifique o endereço IPv6 para vincular o servidor RPC restrito</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96"/>
        <source>Allow IPv6 for RPC</source>
        <translation>Permitir IPv6 para RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97"/>
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>Ignorar ligação IPv4 malsucedida para RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>Especifique o nome de usuário[:senha] necessário para o servidor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Confirme se o valor de rpc-bind-ip NÃO é um IP de loopback (local)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Especifique uma lista de origens separadas por vírgula para permitir o compartilhamento de recursos entre origens</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>Habilite SSL em conexões RPC: enabled|disabled|autodetect</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102"/>
        <source>Path to a PEM format private key</source>
        <translation>Caminho para uma chave privada no formato PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103"/>
        <source>Path to a PEM format certificate</source>
        <translation>Caminho para um certificado no formato PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Caminho para o arquivo que contém certificado(s) de formato PEM concatenado(s) para substituir CA(s) do sistema.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105"/>
        <source>List of certificate fingerprints to allow</source>
        <translation>Lista de impressões digitais de certificados a serem permitidas</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106"/>
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>Permitir certificados de cadeia de usuário (via --rpc-ssl-certificates)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107"/>
        <source>Allow any peer certificate</source>
        <translation>Permitir qualquer certificado de peer</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108"/>
        <source>Do not ban hosts on RPC errors</source>
        <translation>Não proíba hosts por erros de RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155"/>
        <location filename="../src/rpc/rpc_args.cpp" line="183"/>
        <location filename="../src/rpc/rpc_args.cpp" line="204"/>
        <location filename="../src/rpc/rpc_args.cpp" line="221"/>
        <source>Invalid IP address given for --</source>
        <translation>Endereço IP inválido fornecido para --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163"/>
        <location filename="../src/rpc/rpc_args.cpp" line="191"/>
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation>permite conexões externas não criptografadas de entrada. Considere o túnel SSH ou o proxy SSL. Substituir por -</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source>Username specified with --</source>
        <translation>Nome de usuário especificado com --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source> cannot be empty</source>
        <translation>não pode estar vazio</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4933"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>O Daemon usa uma versão principal RPC (%u) diferente da carteira (%u): %s. Atualize um deles ou use --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7068"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7622"/>
        <source>Spending from address index %d
</source>
        <translation>Gastos do índice de endereço %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7083"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Sua transação precisa ser dividida em %llu transações.  Isso resultará na aplicação de uma taxa de transação a cada transação, totalizando uma taxa de %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7089"/>
        <source>The transaction fee is %s</source>
        <translation>A taxa de transação é %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7092"/>
        <source>, of which %s is dust from change</source>
        <translation>, dos quais %s é poeira da mudança</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Um total de %s da troca de poeira será enviado para o endereço de poeira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7376"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Não há dinheiro suficiente no saldo desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421"/>
        <source>No address given</source>
        <translation>Nenhum endereço fornecido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7487"/>
        <source>missing lockedblocks parameter</source>
        <translation>parâmetro bloqueadoblocks ausente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497"/>
        <source>bad locked_blocks parameter</source>
        <translation>parâmetro bloqueado_blocks incorreto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7793"/>
        <source>failed to parse Payment ID</source>
        <translation>não foi possível analisar o ID de pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2273"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7816"/>
        <source>failed to parse key image</source>
        <translation>falha ao analisar a imagem principal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7854"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8077"/>
        <source>No outputs found</source>
        <translation>Nenhuma saída encontrada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8082"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Múltiplas transações são criadas, o que não deveria acontecer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7864"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8087"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>A transação usa múltiplas ou nenhuma entrada, o que não deveria acontecer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8168"/>
        <source>Money successfully sent, transaction: </source>
        <translation>Dinheiro enviado com sucesso, transação: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989"/>
        <source>missing threshold amount</source>
        <translation>valor limite ausente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7995"/>
        <source>invalid amount threshold</source>
        <translation>limite de valor inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8579"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>O troco reivindicado não vai para um endereço pago</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8584"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>O troco reivindicado é maior que o pagamento no endereço do troco</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8593"/>
        <source>Change goes to more than one address</source>
        <translation>A mudança vai para mais de um endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8615"/>
        <source>sending %s to %s</source>
        <translation>enviando %s para %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8625"/>
        <source> dummy output(s)</source>
        <translation>saída(s) fictícia(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8628"/>
        <source>with no destinations</source>
        <translation>sem destinos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8637"/>
        <source>no change</source>
        <translation>nenhuma mudança</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5750"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Daemon é local, assumindo que seja confiável</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5413"/>
        <source>Password for new watch-only wallet</source>
        <translation>Senha para nova carteira somente para relógio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413"/>
        <source>FALSE</source>
        <translation>FALSO</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="775"/>
        <source>Commands: </source>
        <translation>Comandos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="789"/>
        <source>Unknown command: </source>
        <translation>Comando desconhecido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796"/>
        <source>Command usage: </source>
        <translation>Uso do comando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="799"/>
        <source>Command description: </source>
        <translation>Descrição do comando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="825"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>a carteira é apenas para relógio e não possui chave de gastos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="851"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1069"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1116"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1219"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1284"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1352"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1448"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1566"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1648"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8666"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8744"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8790"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9110"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9194"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9677"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10833"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10935"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10988"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11096"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11145"/>
        <source>command not supported by HW wallet</source>
        <translation>comando não suportado pela carteira HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="933"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>carteira é somente para relógio e não tem seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="865"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>carteira é multisig, mas ainda não finalizada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="874"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="943"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>carteira não é determinística e não possui seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898"/>
        <source>Failed to retrieve seed</source>
        <translation>Falha ao recuperar a semente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928"/>
        <source>wallet is multisig and has no seed</source>
        <translation>carteira é multisig e não tem seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="953"/>
        <source>Incorrect password</source>
        <translation>Senha incorreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1153"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1236"/>
        <source>Your original password was incorrect.</source>
        <translation>Sua senha original estava incorreta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="990"/>
        <source>Error with wallet rewrite: </source>
        <translation>Erro ao reescrever a carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10594"/>
        <source>Random payment ID: </source>
        <translation>ID de pagamento aleatório: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1011"/>
        <source>Current fee is %s %s per %s</source>
        <translation>A taxa atual é de %s %s por %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603"/>
        <source>Payment required, see the 'rpc_payment_info' command</source>
        <translation>Pagamento necessário, consulte o comando 'rpc_payment_info'</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027"/>
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Erro: falha ao estimar o tamanho da matriz do backlog: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1032"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>Erro: tamanho estimado incorreto da matriz do backlog</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1044"/>
        <source> (current)</source>
        <translation>(atual)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1047"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u bloco (%u minutos) backlog com prioridade %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u a %u bloquear (%u a %u minutos) pendências com prioridade %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1052"/>
        <source>No backlog at priority </source>
        <translation>Sem atrasos na prioridade </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1074"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1121"/>
        <source>This wallet is already multisig</source>
        <translation>Esta carteira já é multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1079"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1126"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>a carteira é apenas para relógio e não pode ser multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1132"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Esta carteira já foi usada antes, use uma nova carteira para criar uma carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1093"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>Envie essas informações multisig para todos os outros participantes e use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] com informações multisig de outras pessoas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1094"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet's participants </source>
        <translation>Isso inclui a chave de visualização PRIVADA, portanto, precisa ser divulgada apenas aos participantes da carteira multisig. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1146"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890"/>
        <source>Invalid threshold</source>
        <translation>Limite inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1168"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1247"/>
        <source>Another step is needed</source>
        <translation>Outro passo é necessário</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180"/>
        <source>Error creating multisig: </source>
        <translation>Erro ao criar multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1187"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Erro ao criar multisig: a nova carteira não é multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190"/>
        <source> multisig address: </source>
        <translation>endereço multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1224"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1289"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357"/>
        <source>This wallet is not multisig</source>
        <translation>Esta carteira não é multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229"/>
        <source>This wallet is already finalized</source>
        <translation>Esta carteira já está finalizada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259"/>
        <source>Multisig address: </source>
        <translation>Endereço multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1294"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1458"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1658"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation>Esta carteira multisig ainda não está finalizada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10969"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11126"/>
        <source>failed to save file </source>
        <translation>não foi possível salvar o arquivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330"/>
        <source>Error exporting multisig info: </source>
        <translation>Erro ao exportar informações multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1334"/>
        <source>Multisig info exported to </source>
        <translation>Informações multisig exportadas para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10882"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10908"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11159"/>
        <source>failed to read file </source>
        <translation>não foi possível ler o arquivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1406"/>
        <source>Failed to import multisig info: </source>
        <translation>Falha ao importar informações multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1417"/>
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Falha ao atualizar o status gasto após importar informações multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>Daemon não confiável, o status gasto pode estar incorreto. Use um daemon confiável e execute &quot;rescan_spent&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1571"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653"/>
        <source>This is not a multisig wallet</source>
        <translation>Esta não é uma carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1503"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1512"/>
        <source>Failed to sign multisig transaction</source>
        <translation>Falha ao assinar transação multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1519"/>
        <source>Multisig error: </source>
        <translation>Erro multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524"/>
        <source>Failed to sign multisig transaction: </source>
        <translation>Falha ao assinar transação multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1533"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1546"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8725"/>
        <source>Transaction successfully signed to file </source>
        <translation>Transação assinada com sucesso no arquivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Pode ser retransmitido para a rede com submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1608"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1679"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>Falha ao carregar transação multisig do arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1684"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Transação multisig assinada por apenas %u assinantes, precisa de mais %u assinaturas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1623"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11369"/>
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transação enviada com sucesso, transação </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11370"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>Você pode verificar seu status usando o comando `show_transfers`.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1634"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1714"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6119"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6456"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7175"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7205"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7395"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7687"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7714"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7952"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8150"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8179"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8769"/>
        <source>unknown error</source>
        <translation>erro desconhecido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1700"/>
        <source>Failed to export multisig transaction to file </source>
        <translation>Falha ao exportar transação multisig para arquivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1704"/>
        <source>Saved exported multisig transaction file(s): </source>
        <translation>Arquivo(s) de transação multisig exportado(s) salvo(s): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1709"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2050"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6114"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6451"/>
        <source>unexpected error: </source>
        <translation>erro inesperado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1732"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1889"/>
        <source>Invalid key image</source>
        <translation>Imagem de chave inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1738"/>
        <source>Invalid txid</source>
        <translation>TXID inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1765"/>
        <source>Failed to get key image ring: </source>
        <translation>Falha ao obter o anel de imagem principal: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780"/>
        <source>File doesn't exist</source>
        <translation>O arquivo não existe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802"/>
        <source>Invalid ring specification: </source>
        <translation>Especificação de anel inválida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1810"/>
        <source>Invalid key image: </source>
        <translation>Imagem de chave inválida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1815"/>
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>Tipo de anel inválido, relativo ou absoluto esperado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1821"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1833"/>
        <source>Error reading line: </source>
        <translation>Erro ao ler a linha: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844"/>
        <source>Invalid ring: </source>
        <translation>Anel inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1853"/>
        <source>Invalid relative ring: </source>
        <translation>Anel relativo inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1865"/>
        <source>Invalid absolute ring: </source>
        <translation>Anel absoluto inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874"/>
        <source>Failed to set ring for key image: </source>
        <translation>Falha ao definir o anel para a imagem principal: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874"/>
        <source>Continuing.</source>
        <translation>Continuando.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1904"/>
        <source>Missing absolute or relative keyword</source>
        <translation>Palavra-chave absoluta ou relativa ausente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1921"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>índice inválido: deve ser um número inteiro sem sinal estritamente positivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929"/>
        <source>invalid index: indices wrap</source>
        <translation>índice inválido: quebra de índices</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>índice inválido: os índices devem estar em ordem estritamente crescente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946"/>
        <source>failed to set ring</source>
        <translation>não foi possível definir o anel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1969"/>
        <source>Invalid key image or txid</source>
        <translation>Imagem de chave ou txid inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1978"/>
        <source>failed to unset ring</source>
        <translation>falha ao desarmar o anel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2001"/>
        <source>RPC client ID: </source>
        <translation>ID do cliente RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002"/>
        <source>RPC client secret key: </source>
        <translation>Chave secreta do cliente RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2005"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434"/>
        <source>Failed to query daemon</source>
        <translation>Falha ao consultar o daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2013"/>
        <source>Using daemon: </source>
        <translation>Usando o daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014"/>
        <source>Payments required for node use, current credits: </source>
        <translation>Pagamentos necessários para uso do nó, créditos atuais: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2015"/>
        <source>Credits target: </source>
        <translation>Meta de créditos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2018"/>
        <source>Credits spent this session: </source>
        <translation>Créditos gastos nesta sessão: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2020"/>
        <source>Credit discrepancy this session: </source>
        <translation>Discrepância de crédito nesta sessão: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>Difficulty: </source>
        <translation>Dificuldade: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>credits per hash found, </source>
        <translation>créditos por hash encontrado, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>credits/hash</source>
        <translation>créditos/hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2030"/>
        <source>Mining for payment at %.1f H/s</source>
        <translation>Mineração para pagamento em %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2035"/>
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>Tempo estimado até %u créditos alvo serem minerados: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039"/>
        <source>Mining for payment</source>
        <translation>Mineração para pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2042"/>
        <source>Not mining</source>
        <translation>Não é mineração</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2045"/>
        <source>No payment needed for node use</source>
        <translation>Nenhum pagamento necessário para uso do nó</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118"/>
        <source>Bad argument: </source>
        <translation>Argumento ruim: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118"/>
        <source>should be &quot;add&quot;</source>
        <translation>deve ser &quot;adicionar&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2127"/>
        <source>Failed to open file</source>
        <translation>Falha ao abrir o arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211"/>
        <source>Failed to save known rings: </source>
        <translation>Falha ao salvar anéis conhecidos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220"/>
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>uso: %s &lt;key_image&gt;|&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2265"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2277"/>
        <source>Frozen: </source>
        <translation>Congelado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279"/>
        <source>Not frozen: </source>
        <translation>Não congelado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293"/>
        <source> bytes sent</source>
        <translation>bytes enviados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294"/>
        <source> bytes received</source>
        <translation>bytes recebidos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2306"/>
        <source>No known public nodes</source>
        <translation>Nenhum nó público conhecido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>address</source>
        <translation>endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>last_seen</source>
        <translation>último_visto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2324"/>
        <source>never</source>
        <translation>nunca</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2332"/>
        <source>Error retrieving public node list: </source>
        <translation>Erro ao recuperar a lista de nós públicos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2342"/>
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>O Salvium, assim como o Bitcoin, é uma criptomoeda. Ou seja, é dinheiro digital.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2346"/>
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>O Salvium protege sua privacidade no blockchain e, embora o Salvium se esforce para melhorar o tempo todo,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2347"/>
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>nenhuma tecnologia de privacidade pode ser 100% perfeita, incluindo o Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2348"/>
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>O Salvium não pode protegê-lo contra malware e pode não ser tão eficaz quanto esperamos contra adversários poderosos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2349"/>
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>Falhas no Salvium podem ser descobertas no futuro, e ataques podem ser desenvolvidos para espiar sob alguns</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2350"/>
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>das camadas de privacidade que o Salvium oferece. Esteja seguro e pratique a defesa em profundidade.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439"/>
        <source>Daemon does not require payment for RPC access</source>
        <translation>Daemon não exige pagamento para acesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447"/>
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>Iniciando mineração para acesso RPC: diff %llu, %f créditos/hash%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448"/>
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>Execute stop_mining_for_rpc para parar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>a carteira é apenas para assistir e não pode ser transferida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7117"/>
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>AVISO: este é um tamanho de anel não padrão, que pode prejudicar sua privacidade. O padrão é recomendado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2595"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2611"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>a prioridade deve ser 0, 1, 2, 3 ou 4 ou um dos seguintes: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2616"/>
        <source>could not change default priority</source>
        <translation>não foi possível alterar a prioridade padrão</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2702"/>
        <source>invalid unit</source>
        <translation>unidade inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2738"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>contagem inválida: deve ser um número inteiro sem sinal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2720"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756"/>
        <source>invalid value</source>
        <translation>valor inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2834"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2952"/>
        <source>Invalid height</source>
        <translation>Altura inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2907"/>
        <source>Invalid target</source>
        <translation>Destino inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2983"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3002"/>
        <source>Invalid amount</source>
        <translation>Valor inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3072"/>
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>argumento inválido: deve ser 1/sim ou 0/não</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3340"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Comece a minerar no daemon (bg_mining e ignore_battery são booleanos opcionais).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3343"/>
        <source>Stop mining in the daemon.</source>
        <translation>Pare de minerar no daemon.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350"/>
        <source>Save the current blockchain data.</source>
        <translation>Salve os dados atuais do blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>Sincronize as transações e o saldo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3357"/>
        <source>Show the wallet's balance of the currently selected account.</source>
        <translation>Mostra o saldo da carteira da conta atualmente selecionada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3361"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent(&quot;T&quot;|&quot;F&quot;), &quot;frozen&quot;|&quot;locked&quot;|&quot;unlocked&quot;, RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation>Mostrar as transferências recebidas, todas ou filtradas por disponibilidade e índice de endereço.

Formato de saída:
Valor, Gasto(&quot;T&quot;|&quot;F&quot;), &quot;congelado&quot;|&quot;bloqueado&quot;|&quot;desbloqueado&quot; , RingCT, Índice Global, Hash de Transação, Índice de Endereço, [Chave Pública, Imagem Chave] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3367"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>Mostre os pagamentos para os IDs de pagamento fornecidos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3370"/>
        <source>Show the blockchain height.</source>
        <translation>Mostre a altura do blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Envie todas as saídas não misturáveis ​​para você mesmo com ring_size 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Envie todas as saídas desbloqueadas abaixo do limite para um endereço.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3398"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Envie uma única saída da imagem chave fornecida para um endereço sem alteração.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>Envie uma transação assinada de um arquivo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3442"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Altere os detalhes do registro atual (o nível deve ser &lt;0-4&gt;).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3446"/>
        <source>If no arguments are specified, the wallet shows all the existing accounts along with their balances.
If the &quot;new&quot; argument is specified, the wallet creates a new account with its label initialized by the provided label text (which can be empty).
If the &quot;switch&quot; argument is specified, the wallet switches to the account specified by &lt;index&gt;.
If the &quot;label&quot; argument is specified, the wallet sets the label of the account specified by &lt;index&gt; to the provided label text.
If the &quot;tag&quot; argument is specified, a tag &lt;tag_name&gt; is assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt;, ....
If the &quot;untag&quot; argument is specified, the tags assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt; ..., are removed.
If the &quot;tag_description&quot; argument is specified, the tag &lt;tag_name&gt; is assigned an arbitrary text &lt;description&gt;.</source>
        <translation>Se nenhum argumento for especificado, a carteira mostra todas as contas existentes junto com seus saldos.
Se a &quot;nova&quot; for especificado, a carteira cria uma nova conta com seu rótulo inicializado pelo texto do rótulo fornecido (que pode estar vazio).
Se o argumento &quot;switch&quot; for especificado, a carteira muda para a conta especificada por &lt;index&gt;.
Se o &quot;rótulo&quot; argumento é especificado, a carteira define o rótulo da conta especificada por &lt;index&gt; ao texto do rótulo fornecido.
Se a &quot;tag&quot; for especificado, uma tag &lt;tag_name&gt; é atribuído às contas especificadas &lt;account_index_1&gt;, &lt;account_index_2&gt;, ....
Se a opção &quot;desmarcar&quot; for especificado, as tags atribuídas às contas especificadas &lt;account_index_1&gt;, &lt;account_index_2&gt; ..., são removidos.
Se a tag &quot;tag_description&quot; for especificado, a tag &lt;tag_name&gt; recebe um texto arbitrário &lt;descrição&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3460"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Codifique um ID de pagamento em um endereço integrado para o endereço público da carteira atual (nenhum argumento usa um ID de pagamento aleatório) ou decodifique um endereço integrado para endereço padrão e ID de pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3464"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Imprima todas as entradas do catálogo de endereços, opcionalmente adicionando/excluindo uma entrada dele.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3467"/>
        <source>Save the wallet data.</source>
        <translation>Salve os dados da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470"/>
        <source>Save a watch-only keys file.</source>
        <translation>Salve um arquivo de chaves somente para observação.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3473"/>
        <source>Display the private view key.</source>
        <translation>Exiba a chave de visualização privada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3476"/>
        <source>Display the private spend key.</source>
        <translation>Exiba a chave de gastos privada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Exibir a semente mnemônica do estilo Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Exibe a semente mnemônica criptografada do estilo Electrum.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Digitalize novamente o blockchain em busca de resultados gastos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Obtenha a chave de transação (r) para um determinado &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Defina a chave de transação (r) para um determinado &lt;txid&gt; caso o tx tenha sido feito por algum outro dispositivo ou carteira de terceiros.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Verifique o valor que vai para &lt;endereço&gt; em &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3580"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet's address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Gere uma assinatura comprovando que os fundos foram enviados para &lt;endereço&gt; em &lt;txid&gt;, opcionalmente com uma string de desafio &lt;message&gt;, usando a chave secreta da transação (quando &lt;address&gt; não é o endereço da sua carteira) ou a chave secreta de visualização (caso contrário), que não revela a chave secreta .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3584"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Verifique o comprovante de fundos indo para &lt;endereço&gt; em &lt;txid&gt; com a string de desafio &lt;message&gt; se houver.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3588"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Gere uma assinatura provando que você gerou &lt;txid&gt; usando a chave secreta de gastos, opcionalmente com uma string de desafio &lt;message&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3592"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Verifique uma assinatura que comprove que o signatário gerou &lt;txid&gt;, opcionalmente com uma string de desafio &lt;message&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3596"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If 'all' is specified, you prove the entire sum of all of your existing accounts' balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Gere uma assinatura provando que você possui pelo menos esse valor, opcionalmente com uma string de desafio &lt;message&gt;.
Se 'todos' for especificado, você prova a soma total de todos os saldos de suas contas existentes.
Caso contrário, você prova o reserva do menor valor possível acima de &lt;valor&gt; disponível em sua conta corrente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Verifique uma assinatura que comprove que o proprietário de &lt;address&gt; mantém pelo menos isso, opcionalmente com uma string de desafio &lt;message&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3623"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Mostre as saídas não gastas de um endereço especificado dentro de um intervalo de valores opcional.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3631"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Defina uma nota de string arbitrária para um &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3635"/>
        <source>Get a string note for a txid.</source>
        <translation>Obtenha uma nota de string para um txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3639"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Defina uma descrição arbitrária para a carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3643"/>
        <source>Get the description of the wallet.</source>
        <translation>Obtenha a descrição da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3646"/>
        <source>Show the wallet's status.</source>
        <translation>Mostre o status da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3649"/>
        <source>Show the wallet's information.</source>
        <translation>Mostre as informações da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3657"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>Verifique uma assinatura no conteúdo de um arquivo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3665"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importe uma lista de imagens-chave assinadas e verifique seu status de gasto.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3673"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Tentativas de reconectar a carteira HW.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Exporte um conjunto de resultados pertencentes a esta carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3681"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importe um conjunto de resultados pertencentes a esta carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3685"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>Mostrar informações sobre uma transferência de/para este endereço.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3688"/>
        <source>Change the wallet's password.</source>
        <translation>Altere a senha da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3695"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Imprima as informações sobre a taxa atual e o backlog de transações.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3697"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>Exporte os dados necessários para criar uma carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3700"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Transforme esta carteira em uma carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3708"/>
        <source>Export multisig info for other participants</source>
        <translation>Exporte informações multisig para outros participantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3712"/>
        <source>Import multisig info from other participants</source>
        <translation>Importe informações multisig de outros participantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3716"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>Assinar uma transação multisig a partir de um arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3720"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Envie uma transação multisig assinada de um arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3724"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>Exportar uma transação multisig assinada para um arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3815"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, &quot;absolute&quot;, list of rings</source>
        <translation>Imprima o(s) anel(es) usado(s) para gastar uma determinada imagem-chave ou transação (se o tamanho do anel for > 1)

Formato de saída:
Imagem-chave, &quot;absoluta&quot;, lista de anéis</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3821"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Defina o anel usado para uma determinada imagem chave, para que possa ser reutilizado em uma bifurcação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3825"/>
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>Desativa o anel usado para uma determinada imagem ou transação chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3829"/>
        <source>Save known rings to the shared rings database</source>
        <translation>Salvar anéis conhecidos no banco de dados de anéis compartilhados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845"/>
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>Congelar uma única saída por imagem principal para que ela não seja usada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3849"/>
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>Descongele uma única saída por imagem principal para que possa ser usada novamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3853"/>
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>Verifica se uma determinada saída está atualmente congelada por imagem chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3861"/>
        <source>Prints simple network stats</source>
        <translation>Imprime estatísticas de rede simples</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3865"/>
        <source>Lists known public nodes</source>
        <translation>Lista nós públicos conhecidos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3869"/>
        <source>Prints basic info about Salvium for first time users</source>
        <translation>Imprime informações básicas sobre Salvium para usuários iniciantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3873"/>
        <source>Returns version information</source>
        <translation>Retorna informações da versão</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3877"/>
        <source>Get info about RPC payments to current node</source>
        <translation>Obtenha informações sobre pagamentos RPC para o nó atual</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881"/>
        <source>Start mining to pay for RPC access</source>
        <translation>Comece a minerar para pagar pelo acesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3885"/>
        <source>Stop mining to pay for RPC access</source>
        <translation>Pare de minerar para pagar pelo acesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3893"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Mostre a seção de ajuda ou a documentação sobre um &lt;comando&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984"/>
        <source>needs an argument</source>
        <translation>precisa de um argumento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>definir semente: precisa de um argumento. opções disponíveis: idioma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4007"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4008"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4009"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4010"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4018"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4019"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4021"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4023"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4024"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4025"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4028"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4031"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4037"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4038"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4041"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4042"/>
        <source>0 or 1</source>
        <translation>0 ou 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4011"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>completo (mais lento, sem suposições); optimize-coinbase (rápido, assume que toda a coinbase é paga para um único endereço); no-coinbase (mais rápido, assume que não recebemos nenhuma transação coinbase), padrão (o mesmo que Optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4012"/>
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0, 1, 2, 3 ou 4, ou um de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4013"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (ou nunca|ação|descriptografar)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4015"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4027"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040"/>
        <source>unsigned integer</source>
        <translation>inteiro sem sinal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4017"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4029"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4030"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>amount</source>
        <translation>quantia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4022"/>
        <source>block height</source>
        <translation>altura do bloco</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4026"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;maior&gt;:&lt;menor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4034"/>
        <source>1/yes or 0/no</source>
        <translation>1/sim ou 0/não</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4039"/>
        <source>floating point &gt;= 0</source>
        <translation>ponto flutuante &gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044"/>
        <source>set: unrecognized argument(s)</source>
        <translation>conjunto: argumento(s) não reconhecido(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4102"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>O nome da carteira não é válido. Por favor, tente novamente ou use Ctrl-C para sair.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4114"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Tentativa de gerar ou restaurar carteira, mas existem arquivos especificados.  Saindo para não correr o risco de sobrescrever.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4119"/>
        <source>Wallet and key files found, loading...</source>
        <translation>Arquivos de carteira e chave encontrados, carregando...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4125"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Arquivo de chave encontrado, mas não arquivo de carteira. Regenerando...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4131"/>
        <source>Key file not found. Failed to open wallet: </source>
        <translation>Arquivo de chave não encontrado. Falha ao abrir carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4139"/>
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Nenhuma carteira encontrada com esse nome. Confirme a criação de uma nova carteira chamada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150"/>
        <source>Generating new wallet...</source>
        <translation>Gerando nova carteira...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231"/>
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>Não é possível especificar mais de um entre --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4247"/>
        <source>can't specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; and --generate-from-device=&quot;wallet_name&quot;</source>
        <translation>não é possível especificar mais de um entre --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate -from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot; nome do arquivo json&quot; e --generate-from-device=&quot;nome_da_carteira&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277"/>
        <source>can't specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>não é possível especificar --restore-deterministic-wallet ou --restore-multisig-wallet e --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4283"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet	 not --wallet-file</source>
        <translation>--restore-multisig-wallet uses --generate-new-wallet	 not --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4285"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet	 not --wallet-file</source>
        <translation>--restore-deterministic-wallet uses --generate-new-wallet	 not --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4299"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation>especifique um parâmetro de recuperação com --electrum-seed=&quot;multisig seed aqui&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>especifique um parâmetro de recuperação com a opção --electrum-seed=&quot;lista de palavras aqui&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328"/>
        <source>Multisig seed failed verification</source>
        <translation>Verificação de falha de semente multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Lista de palavras no estilo Electrum falhou na verificação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4357"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4377"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4413"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4434"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4454"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4469"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4518"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4543"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4559"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4598"/>
        <source>No data supplied, cancelled</source>
        <translation>Nenhum dado fornecido, cancelado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4363"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4440"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4549"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6889"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7562"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7823"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8918"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8986"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9050"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9254"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10646"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10915"/>
        <source>failed to parse address</source>
        <translation>não foi possível analisar o endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4368"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4445"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Este endereço é um subendereço que não pode ser usado aqui.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4383"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4475"/>
        <source>failed to parse view key secret key</source>
        <translation>falha ao analisar a chave secreta da chave de visualização</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4392"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4492"/>
        <source>failed to verify view key secret key</source>
        <translation>falha ao verificar a chave secreta da chave de visualização</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4396"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4578"/>
        <source>view key does not match standard address</source>
        <translation>a chave de visualização não corresponde ao endereço padrão</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4401"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4422"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4500"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4661"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4693"/>
        <source>account creation failed</source>
        <translation>falha na criação da conta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4418"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4460"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4603"/>
        <source>failed to parse spend key secret key</source>
        <translation>falha ao analisar a chave secreta da chave de gastos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4484"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4623"/>
        <source>failed to verify spend key secret key</source>
        <translation>falha ao verificar a chave secreta da chave de gastos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4488"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628"/>
        <source>spend key does not match standard address</source>
        <translation>a chave de gasto não corresponde ao endereço padrão</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4523"/>
        <source>Error: expected M/N, but got: </source>
        <translation>Erro: esperado M/N, mas obteve: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4528"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Erro: esperado N&gt; 1 e N &lt;= M, mas obteve: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4533"/>
        <source>Error: M/N is currently unsupported. </source>
        <translation>Erro: M/N não é compatível no momento. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4536"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Gerando carteira mestre a partir de %u de %u chaves de carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4565"/>
        <source>failed to parse secret view key</source>
        <translation>falha ao analisar a chave de visualização secreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4573"/>
        <source>failed to verify secret view key</source>
        <translation>falha ao verificar a chave de visualização secreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4616"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>Erro: M/N não é compatível no momento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4668"/>
        <source>No restore height is specified.</source>
        <translation>Nenhuma altura de restauração é especificada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4669"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Supondo que você esteja criando uma nova conta, a restauração será feita a partir da altura atual estimada do blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674"/>
        <source>account creation aborted</source>
        <translation>criação de conta abortada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4684"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>especifique um caminho de carteira com --generate-new-wallet (não --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4748"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4768"/>
        <source>bad m_restore_height parameter: </source>
        <translation>parâmetro m_restore_height incorreto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759"/>
        <source>Restore height is: </source>
        <translation>A altura de restauração é: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782"/>
        <source>Restore height </source>
        <translation>Restaurar altura </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798"/>
        <source>can't specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>não é possível especificar --subaddress-lookahead e --wallet-file ao mesmo tempo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802"/>
        <source>failed to open account</source>
        <translation>não consegui abrir conta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5568"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5791"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8954"/>
        <source>wallet is null</source>
        <translation>carteira é nula</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Falha ao inicializar o banco de dados do anel: os recursos de aprimoramento de privacidade estarão inativos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4920"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4924"/>
        <source>wallet failed to connect to daemon: </source>
        <translation>carteira não conseguiu se conectar ao daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4925"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the 'set_daemon' command.</source>
        <translation>O daemon não foi iniciado ou a porta errada foi passada. Certifique-se de que o daemon esteja em execução ou altere o endereço do daemon usando o comando 'set_daemon'.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4954"/>
        <source>List of available languages for your wallet's seed:</source>
        <translation>Lista de idiomas disponíveis para o seed da sua carteira:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4955"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Se a tela congelar, saia às cegas com ^C e execute novamente com --use-english-language-names</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4973"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4978"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>escolha de idioma inválida inserida. Tente novamente.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4992"/>
        <source>invalid password</source>
        <translation>senha inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5040"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Você estava usando uma versão obsoleta da carteira. Use a nova semente que fornecemos.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5056"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5131"/>
        <source>Generated new wallet: </source>
        <translation>Nova carteira gerada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5059"/>
        <source>View key: </source>
        <translation>Ver chave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5136"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5244"/>
        <source>failed to generate new wallet: </source>
        <translation>falha ao gerar nova carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5175"/>
        <source>Generated new wallet on hw device: </source>
        <translation>Nova carteira gerada no dispositivo hw: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5236"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>falha ao gerar nova carteira mutlisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5239"/>
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Nova carteira multisig %u/%u gerada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5255"/>
        <source>wallet file path not valid: </source>
        <translation>caminho do arquivo da carteira inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5265"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation>Arquivo de chave não encontrado. Falha ao abrir carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5286"/>
        <source>Opened watch-only wallet</source>
        <translation>Carteira aberta apenas para relógio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5288"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>Carteira multisig %u/%u aberta%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5290"/>
        <source>Opened wallet</source>
        <translation>Carteira aberta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5308"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Você estava usando uma versão obsoleta da carteira. Prossiga com o upgrade da sua carteira.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5323"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Você estava usando uma versão obsoleta da carteira. O formato de arquivo da sua carteira está sendo atualizado agora.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5331"/>
        <source>failed to load wallet: </source>
        <translation>falha ao carregar a carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5350"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command's documentation.
</source>
        <translation>Use &quot;ajuda &lt;comando&gt;&quot; para ver a documentação de um comando.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5372"/>
        <source>failed to deinitialize wallet</source>
        <translation>não foi possível desinicializar a carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5395"/>
        <source>Wallet data saved</source>
        <translation>Dados da carteira salvos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>a carteira é multisig e não pode salvar uma versão somente para assistir</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5417"/>
        <source>failed to read wallet password</source>
        <translation>não foi possível ler a senha da carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5425"/>
        <source>Watch only wallet saved as: </source>
        <translation>Assista apenas a carteira salva como: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5429"/>
        <source>Failed to save watch only wallet: </source>
        <translation>Falha ao salvar a carteira somente do relógio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5559"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6414"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10993"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>este comando requer um daemon confiável. Habilite com --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5608"/>
        <source>Mining started in daemon</source>
        <translation>A mineração começou no daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610"/>
        <source>mining has NOT been started: </source>
        <translation>a mineração NÃO foi iniciada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5630"/>
        <source>Mining stopped in daemon</source>
        <translation>Mineração parada no daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632"/>
        <source>mining has NOT been stopped: </source>
        <translation>a mineração NÃO foi interrompida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5687"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Comprimento inesperado da matriz - Saiu de simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763"/>
        <source>trusted</source>
        <translation>confiável</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763"/>
        <source>untrusted</source>
        <translation>não confiável</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5779"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Este não parece ser um URL de daemon válido.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5799"/>
        <source>Blockchain saved</source>
        <translation>Blockchain salvo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5801"/>
        <source>blockchain can't be saved: </source>
        <translation>blockchain não pode ser salvo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5834"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5840"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5851"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5856"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5861"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5867"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5923"/>
        <source>Height </source>
        <translation>Altura </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5835"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5841"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5852"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5857"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5862"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5868"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5924"/>
        <source>txid </source>
        <translation>txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5837"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5843"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5870"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5926"/>
        <source>idx </source>
        <translation>idx </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5925"/>
        <source>spent </source>
        <translation>gasto </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952"/>
        <source>Enter password</source>
        <translation>Digite a senha</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6048"/>
        <source>Starting refresh...</source>
        <translation>Iniciando atualização...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6070"/>
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>Nova transferência recebida desde que a nova verificação foi iniciada. As imagens principais estão incompletas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077"/>
        <source>Refresh done, blocks received: </source>
        <translation>Atualização concluída, blocos recebidos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6085"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6428"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon está ocupado. Por favor, tente novamente mais tarde.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4816"/>
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>A chave secreta do cliente RPC deve ter 32 bytes em formato hexadecimal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5535"/>
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>Com a mineração em segundo plano habilitada, o daemon irá minerar quando estiver ocioso e sem bateria.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5657"/>
        <source>Error checking daemon RPC access prices</source>
        <translation>Erro ao verificar os preços de acesso RPC do daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5663"/>
        <source>Error checking daemon RPC access prices: </source>
        <translation>Erro ao verificar os preços de acesso RPC do daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5759"/>
        <source>Failed to connect to daemon</source>
        <translation>Falha ao conectar ao daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771"/>
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>Os créditos/hash do Daemon RPC são menores do que o reivindicado. Ou este daemon está trapaceando ou mudou de configuração recentemente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772"/>
        <source>Claimed: </source>
        <translation>Reivindicado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5773"/>
        <source>Actual: </source>
        <translation>Real: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6089"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6432"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nenhuma conexão com o daemon. Por favor, certifique-se de que o daemon esteja em execução.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6436"/>
        <source>payment required.</source>
        <translation>pagamento necessário.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6099"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6446"/>
        <source>RPC error: </source>
        <translation>Erro de RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6104"/>
        <source>refresh error: </source>
        <translation>erro de atualização: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6109"/>
        <source>internal error: </source>
        <translation>erro interno: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124"/>
        <source>refresh failed: </source>
        <translation>falha na atualização: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124"/>
        <source>Blocks received: </source>
        <translation>Blocos recebidos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6153"/>
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation>(Algumas saídas próprias têm imagens de chave parciais - é necessário import_multisig_info)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <source>Currently selected account: [</source>
        <translation>Conta atualmente selecionada: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158"/>
        <source>(No tag assigned)</source>
        <translation>(Nenhuma tag atribuída)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158"/>
        <source>Tag: </source>
        <translation>Marcação: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6172"/>
        <source>unlocked balance: </source>
        <translation>saldo desbloqueado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177"/>
        <source>Balance per address:</source>
        <translation>Saldo por endereço:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <source>Address</source>
        <translation>Endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Balance</source>
        <translation>Equilíbrio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Unlocked balance</source>
        <translation>Saldo desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <source>Outputs</source>
        <translation>Resultados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11612"/>
        <source>Label</source>
        <translation>Rótulo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6186"/>
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277"/>
        <source>pubkey</source>
        <translation>chave pública</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277"/>
        <source>key image</source>
        <translation>imagem principal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>spent</source>
        <translation>gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>unlocked</source>
        <translation>desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>ringct</source>
        <translation>anel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>global index</source>
        <translation>índice global</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>tx id</source>
        <translation>id de transferência</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>addr index</source>
        <translation>índice de endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6294"/>
        <source>Used at heights: </source>
        <translation>Usado em altura: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <source>T</source>
        <translation>T</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <source>locked</source>
        <translation>bloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <source>[frozen]</source>
        <translation>[congelado]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301"/>
        <source>RingCT</source>
        <translation>AnelCT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6314"/>
        <source>No incoming transfers</source>
        <translation>Nenhuma transferência recebida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318"/>
        <source>No incoming available transfers</source>
        <translation>Nenhuma transferência de entrada disponível</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322"/>
        <source>No incoming unavailable transfers</source>
        <translation>Nenhuma transferência recebida indisponível</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>payment</source>
        <translation>pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>transaction</source>
        <translation>transação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>height</source>
        <translation>altura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>unlock time</source>
        <translation>tempo de desbloqueio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6358"/>
        <source>No payments with id </source>
        <translation>Nenhum pagamento com identificação </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6380"/>
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>O ID de pagamento tem formato inválido, sequência hexadecimal esperada de 16 ou 64 caracteres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6504"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7509"/>
        <source>failed to get blockchain height: </source>
        <translation>não conseguiu obter a altura do blockchain: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441"/>
        <source>failed to get spent status</source>
        <translation>não foi possível obter o status de gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6513"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transação %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6529"/>
        <source>failed to find construction data for tx input</source>
        <translation>não foi possível encontrar dados de construção para entrada tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6553"/>
        <source>failed to get output: </source>
        <translation>não foi possível obter a saída: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6561"/>
        <source>output key's originating block height shouldn't be higher than the blockchain height</source>
        <translation>a altura do bloco de origem da chave de saída não deve ser maior que a altura do blockchain</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6566"/>
        <source>
Originating block heights: </source>
        <translation>
Alturas dos blocos de origem: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6576"/>
        <source>
|</source>
        <translation>
|</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9890"/>
        <source>|
</source>
        <translation>|
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6593"/>
        <source>
Warning: Some input keys being spent are from </source>
        <translation>
Aviso: algumas chaves de entrada gastas são de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594"/>
        <source>the same transaction</source>
        <translation>a mesma transação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594"/>
        <source>blocks that are temporally very close</source>
        <translation>blocos que estão temporalmente muito próximos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6748"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741"/>
        <source>Ring size must not be 0</source>
        <translation>O tamanho do anel não deve ser 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6760"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7473"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7753"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>o tamanho do anel %u é muito pequeno, o mínimo é %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6765"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation>o tamanho do anel %u é muito grande, o máximo é %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772"/>
        <source>wrong number of arguments</source>
        <translation>número errado de argumentos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6789"/>
        <source>payment id failed to encode</source>
        <translation>ID de pagamento não foi codificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6808"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7502"/>
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Blocos bloqueados muito altos, máximo de 1.000.000 (	4 anos)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6856"/>
        <source>failed to parse short payment ID from URI</source>
        <translation>falha ao analisar o ID de pagamento curto do URI</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6881"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883"/>
        <source>Invalid last argument: </source>
        <translation>Último argumento inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6901"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>uma única transação não pode usar mais de um ID de pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation>falha ao analisar o ID de pagamento, embora tenha sido detectado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7004"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014"/>
        <source>Is this okay anyway?</source>
        <translation>Está tudo bem de qualquer maneira?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7009"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>Atualmente há uma carteira de blocos %u nesse nível de taxa. Está tudo bem?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7323"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7631"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>Varrendo %s em transações %llu por uma taxa total de %s.  Está tudo bem?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7329"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7637"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7874"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>Varrendo %s por uma taxa total de %s.  Está tudo bem?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7377"/>
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by &quot;rescan_spent&quot;.  Is this okay?</source>
        <translation>Descartando %s de resultados não misturáveis ​​que não podem ser gastos, o que pode ser desfeito por &quot;rescan_spent&quot;.  Está tudo bem?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7522"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7767"/>
        <source>Failed to parse number of outputs</source>
        <translation>Falha ao analisar o número de saídas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7527"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7772"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation>A quantidade de saídas deve ser maior que 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7551"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>o ID de pagamento tem formato inválido, sequência hexadecimal esperada de 16 ou 64 caracteres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6803"/>
        <source>bad locked_blocks parameter:</source>
        <translation>parâmetro bloqueado_blocks incorreto:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7571"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7831"/>
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>uma única transação não pode usar mais de um ID de pagamento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7580"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7799"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7839"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>falha ao configurar o ID de pagamento, embora tenha sido decodificado corretamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1170"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249"/>
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>Envie essas informações multisig para todos os outros participantes e use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] com informações multisig de outras pessoas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1258"/>
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation>A carteira Multisig foi criada com sucesso. Tipo de carteira atual: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264"/>
        <source>Failed to perform multisig keys exchange: </source>
        <translation>Falha ao realizar a troca de chaves multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599"/>
        <source>Failed to load multisig transaction from MMS</source>
        <translation>Falha ao carregar transação multisig do MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2139"/>
        <source>Failed to mark output spent: </source>
        <translation>Falha ao marcar a saída como gasta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2166"/>
        <source>Failed to mark output unspent: </source>
        <translation>Falha ao marcar a saída como não gasta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2190"/>
        <source>Spent: </source>
        <translation>Gasto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192"/>
        <source>Not spent: </source>
        <translation>Não gasto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2196"/>
        <source>Failed to check whether output is spent: </source>
        <translation>Falha ao verificar se a produção foi gasta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2385"/>
        <source>Please confirm the transaction on the device</source>
        <translation>Por favor, confirme a transação no dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091"/>
        <source>Device name not specified</source>
        <translation>Nome do dispositivo não especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100"/>
        <source>Device reconnect failed</source>
        <translation>Falha na reconexão do dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105"/>
        <source>Device reconnect failed: </source>
        <translation>Falha na reconexão do dispositivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3619"/>
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>Exporte para CSV as transferências de entrada/saída dentro de uma faixa de altura opcional.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627"/>
        <source>Rescan the blockchain from scratch. If &quot;hard&quot; is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>Digitalize novamente o blockchain do zero. Se &quot;difícil&quot; for especificado, você perderá qualquer informação que não possa ser recuperada do próprio blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3661"/>
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>Exporte um conjunto assinado de imagens-chave para um &lt;nome do arquivo&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3669"/>
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>Sincroniza imagens principais com a carteira hw.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3692"/>
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>Gere um novo ID de pagamento aleatório em tamanho real (obsoleto). Eles não serão criptografados no blockchain, consulte Integrated_address para obter IDs de pagamento curtos criptografados.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3704"/>
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>Executa rodadas extras de troca de chaves multisig. Necessário para carteiras multisig M/N arbitrárias</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3736"/>
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>Inicialize e configure o MMS para M/N = número de assinantes necessários/número de assinantes autorizados multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740"/>
        <source>Display current MMS configuration</source>
        <translation>Exibir a configuração atual do MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3744"/>
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>Defina ou modifique as informações do signatário autorizado (rótulo de palavra única, endereço de transporte, endereço Salvium) ou liste todos os signatários</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3748"/>
        <source>List all messages</source>
        <translation>Listar todas as mensagens</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3752"/>
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using 'sync' processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>Avalie as próximas ações possíveis relacionadas ao multisig de acordo com o estado da carteira e execute ou ofereça para escolha
Ao usar o processamento de 'sincronização' de mensagens em espera com informações de sincronização multisig podem ser forçadas independentemente do estado da carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757"/>
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like &quot;stale data&quot; errors</source>
        <translation>Forçar a geração de informações de sincronização multisig, independentemente do estado da carteira, para recuperação de situações especiais como &quot;dados obsoletos&quot; erros</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3761"/>
        <source>Initiate transfer with MMS support; arguments identical to normal 'transfer' command arguments, for info see there</source>
        <translation>Iniciar transferência com suporte MMS; argumentos idênticos aos argumentos normais do comando 'transferência', para informações veja lá</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3765"/>
        <source>Delete a single message by giving its id, or delete all messages by using 'all'</source>
        <translation>Exclua uma única mensagem fornecendo seu ID ou exclua todas as mensagens usando 'all'</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3769"/>
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>Envie uma única mensagem informando seu ID ou envie todas as mensagens em espera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3773"/>
        <source>Check right away for new messages to receive</source>
        <translation>Verifique imediatamente se há novas mensagens para receber</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3777"/>
        <source>Write the content of a message to a file &quot;mms_message_content&quot;</source>
        <translation>Grave o conteúdo de uma mensagem em um arquivo &quot;mms_message_content&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3781"/>
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>Envie uma mensagem de uma linha para um assinante autorizado, identificado por seu rótulo, ou mostre quaisquer notas não lidas em espera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785"/>
        <source>Show detailed info about a single message</source>
        <translation>Mostrar informações detalhadas sobre uma única mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3789"/>
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation>Opções disponíveis:
 envio automático &lt;1|0&gt;
 Se deseja enviar automaticamente mensagens recém-geradas imediatamente.
 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795"/>
        <source>Send completed signer config to all other authorized signers</source>
        <translation>Enviar configuração de assinante concluída para todos os outros assinantes autorizados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3799"/>
        <source>Start auto-config at the auto-config manager's wallet by issuing auto-config tokens and optionally set others' labels</source>
        <translation>Inicie a configuração automática na carteira do gerenciador de configuração automática emitindo tokens de configuração automática e, opcionalmente, defina rótulos de outros</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3807"/>
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>Exclua todos os tokens de configuração automática e interrompa um processo de configuração automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3811"/>
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>Inicie a configuração automática usando o token recebido do gerenciador de configuração automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833"/>
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>Marque as saídas como gastas para que nunca sejam selecionadas como saídas falsas em um anel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837"/>
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>Marca uma saída como não gasta para que ela possa ser selecionada como uma saída falsa em um anel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3841"/>
        <source>Checks whether an output is marked as spent</source>
        <translation>Verifica se uma saída está marcada como gasta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4035"/>
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;nome_do_dispositivo[:especificação_do_dispositivo]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4063"/>
        <source>wrong number range, use: %s</source>
        <translation>intervalo de números errado, use: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4168"/>
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>NOTA: os seguintes %s podem ser usados ​​para recuperar o acesso à sua carteira. Anote-os e guarde-os em algum lugar seguro e protegido. Não os armazene em seu e-mail ou em serviços de armazenamento de arquivos fora do seu controle imediato.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170"/>
        <source>string</source>
        <translation>corda</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170"/>
        <source>25 words</source>
        <translation>25 palavras</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4593"/>
        <source>Secret spend key (%u of %u)</source>
        <translation>Chave secreta de gastos (%u de %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4670"/>
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>Use --restore-height ou --restore-date se quiser restaurar uma conta já configurada de uma altura específica.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4672"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4760"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7119"/>
        <source>Is this okay?</source>
        <translation>Está tudo bem?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4783"/>
        <source>Still apply restore height?</source>
        <translation>Ainda aplica a altura de restauração?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4964"/>
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>Digite o número correspondente ao idioma de sua escolha</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5967"/>
        <source>Device requires attention</source>
        <translation>Dispositivo requer atenção</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5973"/>
        <source>Enter device PIN</source>
        <translation>Insira o PIN do dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5975"/>
        <source>Failed to read device PIN</source>
        <translation>Falha ao ler o PIN do dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5985"/>
        <source>Please enter the device passphrase on the device</source>
        <translation>Insira a senha do dispositivo no dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5992"/>
        <source>Enter device passphrase</source>
        <translation>Insira a senha do dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5994"/>
        <source>Failed to read device passphrase</source>
        <translation>Falha ao ler a senha do dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6018"/>
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation>A primeira atualização da carteira baseada em HW com dinheiro recebido foi concluída. hw_key_images_sync é necessário. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5537"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020"/>
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation>Você quer fazer isso agora? (S/Sim/N/Não): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2366"/>
        <source>Unknown command '%s', try 'help'</source>
        <translation>Comando desconhecido '%s', tente 'help'</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3040"/>
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Tempo limite de bloqueio de inatividade desativado no Windows</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3054"/>
        <source>Invalid number of seconds</source>
        <translation>Número de segundos inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116"/>
        <source>Export format not specified</source>
        <translation>Formato de exportação não especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3130"/>
        <source>Export format not recognized.</source>
        <translation>Formato de exportação não reconhecido.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3482"/>
        <source>Display the restore height</source>
        <translation>Exibir a altura de restauração</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3857"/>
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>Bloqueie o console da carteira, exigindo a senha da carteira para continuar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4033"/>
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>inteiro sem sinal (segundos, 0 para desabilitar)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036"/>
        <source>&quot;binary&quot; or &quot;ascii&quot;</source>
        <translation>&quot;binário&quot; ou &quot;ascii&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4824"/>
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>Aviso: usando um daemon não confiável em %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4825"/>
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>Usar um daemon de terceiros pode ser prejudicial à sua segurança e privacidade</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4828"/>
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>Usar o seu próprio sem SSL expõe seu tráfego RPC ao monitoramento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4829"/>
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>Você é fortemente encorajado a se conectar à rede Salvium usando seu próprio daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4830"/>
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>Se você ou alguém em quem você confia estiver operando este daemon, você pode usar --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4837"/>
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>Além disso, um daemon também é menos seguro quando executado no modo bootstrap</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850"/>
        <source>If you are new to Salvium, type &quot;welcome&quot; for a brief overview.</source>
        <translation>Se você é novo no Salvium, digite &quot;bem-vindo&quot; para uma breve visão geral.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5003"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5101"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5149"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5192"/>
        <source>Error creating wallet: </source>
        <translation>Erro ao criar carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477"/>
        <source>Failed to query mining status: </source>
        <translation>Falha ao consultar o status da mineração: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5488"/>
        <source>Failed to setup background mining: </source>
        <translation>Falha ao configurar a mineração em segundo plano: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5464"/>
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>Mineração em segundo plano habilitada. Obrigado por apoiar a rede Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5492"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5500"/>
        <source>Background mining not enabled. Run &quot;set setup-background-mining 1&quot; to change.</source>
        <translation>Mineração em segundo plano não habilitada. Execute &quot;set setup-background-mining 1&quot; para mudar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5506"/>
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>Usando um daemon não confiável, ignorando a verificação de mineração em segundo plano</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5534"/>
        <source>The daemon is not set up to background mine.</source>
        <translation>O daemon não está configurado para o meu em segundo plano.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5541"/>
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>Mineração em segundo plano não habilitada. Defina setup-background-mining como 1 para alterar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5903"/>
        <source>NOTE: This transaction is locked, see details with: show_transfer </source>
        <translation>NOTA: Esta transação está bloqueada, veja detalhes com: show_transfer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6022"/>
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>hw_key_images_sync ignorado. Execute o comando manualmente antes de uma transferência.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6247"/>
        <source>Invalid keyword: </source>
        <translation>Palavra-chave inválida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6535"/>
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
Insira %llu/%llu (%s): quantidade=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628"/>
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>A transação gasta mais de uma saída muito antiga. A privacidade seria melhor se fossem enviados separadamente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6629"/>
        <source>Spend them now anyway?</source>
        <translation>Gastá-los agora mesmo assim?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6871"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8465"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9215"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9784"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9792"/>
        <source>amount is wrong: </source>
        <translation>o valor está errado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6872"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8465"/>
        <source>expected number from 0 to </source>
        <translation>número esperado de 0 a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7025"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7034"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7126"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7338"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7601"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7646"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7882"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8105"/>
        <source>transaction cancelled.</source>
        <translation>transação cancelada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6981"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7595"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>Nenhuma saída encontrada ou o daemon não está pronto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2343"/>
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>Ao contrário do Bitcoin, suas transações e saldo do Salvium permanecem privados e não são visíveis para o mundo por padrão.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2344"/>
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>No entanto, você tem a opção de disponibilizá-los para partes selecionadas, se desejar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5895"/>
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>NOTA: esta transação usa um ID de pagamento criptografado: considere usar subendereços</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5900"/>
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>AVISO: esta transação utiliza um ID de pagamento não criptografado: estes são obsoletos e ignorados. Use subendereços.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014"/>
        <source>Failed to check for backlog: </source>
        <translation>Falha ao verificar pendências: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7063"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7617"/>
        <source>
Transaction </source>
        <translation>
Transação </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7070"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7624"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>AVISO: saídas de vários endereços estão sendo usadas juntas, o que pode comprometer sua privacidade.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093"/>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7139"/>
        <source>Unsigned transaction(s) successfully written to MMS</source>
        <translation>Transações não assinadas gravadas com sucesso no MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7147"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7184"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7350"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7658"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7695"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7893"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7931"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8116"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8158"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Falha ao gravar transações no arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7152"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7189"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7354"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7366"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7662"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7699"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7897"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7935"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8120"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8162"/>
        <source>Unsigned transaction(s) successfully written to file: </source>
        <translation>Transações não assinadas gravadas com sucesso no arquivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7161"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7674"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7909"/>
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>Falha ao assinar transação fria com carteira HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7308"/>
        <source>No unmixable outputs found</source>
        <translation>Nenhuma saída não misturável encontrada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Sweeping </source>
        <translation>Varrendo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8476"/>
        <source>Failed to parse donation address: </source>
        <translation>Falha ao analisar o endereço de doação: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8492"/>
        <source>Donating %s %s to %s.</source>
        <translation>Doando %s %s para %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8640"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>%lu transações carregadas, para %s, taxa %s, %s, %s, com tamanho mínimo de anel %lu, %s. %sTudo bem?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>direction</source>
        <translation>direção</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>timestamp</source>
        <translation>carimbo de data/hora</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>running balance</source>
        <translation>equilíbrio em execução</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>hash</source>
        <translation>hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>payment ID</source>
        <translation>ID de pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>fee</source>
        <translation>taxa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>destination</source>
        <translation>destino</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>index</source>
        <translation>índice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>note</source>
        <translation>observação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9756"/>
        <source>CSV exported to </source>
        <translation>CSV exportado para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9941"/>
        <source>Rescan anyway?</source>
        <translation>Digitalizar novamente mesmo assim?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9952"/>
        <source>Warning: your restore height is higher than wallet restore height: </source>
        <translation>Aviso: a altura de restauração é maior que a altura de restauração da carteira: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9953"/>
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>Digitalizar novamente mesmo assim? (S/Sim/N/Não): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9974"/>
        <source>MMS received new message</source>
        <translation>MMS recebeu nova mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10143"/>
        <source>locked due to inactivity</source>
        <translation>bloqueado por inatividade</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10545"/>
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;índice&gt; está fora dos limites</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10821"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10822"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11670"/>
        <source>Type: </source>
        <translation>Tipo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6680"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10823"/>
        <source>Network type: </source>
        <translation>Tipo de rede: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1402"/>
        <source>Multisig info imported. Number of outputs updated: </source>
        <translation>Informações multisig importadas. Número de saídas atualizadas: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1750"/>
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>Imagem principal não gasta ou gasta com tamanho de anel 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334"/>
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>A maioria desses nós são provavelmente espiões. Você não deve usá-los a menos que esteja conectado via Tor ou I2P</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340"/>
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>Bem-vindo ao Salvium, a nova e melhorada criptomoeda privada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2352"/>
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>Bem-vindo ao Salvium e à privacidade financeira compatível. Para mais informações consulte https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2471"/>
        <source>invalid index: must be an unsigned integer</source>
        <translation>índice inválido: deve ser um número inteiro sem sinal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2476"/>
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt; está fora dos limites</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514"/>
        <source>Failed to generate QR code, input too large</source>
        <translation>Falha ao gerar o código QR, entrada muito grande</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3167"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3186"/>
        <source>Value not specified</source>
        <translation>Valor não especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3157"/>
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>Aviso: formatos obsoletos usam serialização boost, que tem buffer overflows e crashers. Carregue apenas formatos obsoletos de fontes confiáveis.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3206"/>
        <source>Important commands:</source>
        <translation>Comandos importantes:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3208"/>
        <source>&quot;welcome&quot; - Show welcome message.</source>
        <translation>&quot;bem-vindo&quot; - Mostrar mensagem de boas-vindas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3209"/>
        <source>&quot;help all&quot; - Show the list of all available commands.</source>
        <translation>&quot;ajudar a todos&quot; - Mostrar a lista de todos os comandos disponíveis.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3210"/>
        <source>&quot;help &lt;command&gt;&quot; - Show a command's documentation.</source>
        <translation>&quot;ajuda &lt;comando&gt;&quot; - Mostrar a documentação de um comando.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3211"/>
        <source>&quot;apropos &lt;keyword&gt;&quot; - Show commands related to a keyword.</source>
        <translation>&quot;a propósito &lt;palavra-chave&gt;&quot; - Mostrar comandos relacionados a uma palavra-chave.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213"/>
        <source>&quot;wallet_info&quot; - Show wallet main address and other info.</source>
        <translation>&quot;informações_da_carteira&quot; - Mostrar endereço principal da carteira e outras informações.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3214"/>
        <source>&quot;balance&quot; - Show balance.</source>
        <translation>&quot;equilíbrio&quot; - Mostrar equilíbrio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3215"/>
        <source>&quot;address all&quot; - Show all addresses.</source>
        <translation>&quot;endereçar todos&quot; - Mostrar todos os endereços.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3216"/>
        <source>&quot;address new&quot; - Create new subaddress.</source>
        <translation>&quot;endereço novo&quot; - Crie um novo subendereço.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3217"/>
        <source>&quot;transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]&quot; - Send SAL to an address.</source>
        <translation>&quot;transferir &lt;endereço&gt; &lt;quantidade&gt; [&lt;tipo_de_ativo&gt;]&quot; - Envie SAL para um endereço.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218"/>
        <source>&quot;return_payment &lt;tx_hash&gt;&quot; - Return a previously-received amount to sender.</source>
        <translation>&quot;return_payment &lt;tx_hash&gt;&quot; - Devolva um valor recebido anteriormente ao remetente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3219"/>
        <source>&quot;burn &lt;amount&gt; &lt;asset_type&gt;&quot; - destroy coins forever.</source>
        <translation>&quot;queimar &lt;quantidade&gt; &lt;tipo_de_ativo&gt;&quot; - destrua moedas para sempre.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3220"/>
        <source>&quot;convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]&quot; - convert between coin types.</source>
        <translation>&quot;converter &lt;quantidade&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]&quot; - converter entre tipos de moedas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221"/>
        <source>&quot;stake &lt;amount&gt;&quot; - stake SAL for 30 days to earn yield.</source>
        <translation>&quot;participação &lt;quantia&gt;&quot; - apostar SAL por 30 dias para obter rendimento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3222"/>
        <source>&quot;price_info&quot; - Display current pricing information for supported assets.</source>
        <translation>&quot;informações_preço&quot; - Exibir informações de preços atuais para ativos suportados.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3223"/>
        <source>&quot;supply_info&quot; - Display circulating supply information.</source>
        <translation>&quot;informações_de_fornecimento&quot; - Exibir informações de fornecimento circulante.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3224"/>
        <source>&quot;yield_info&quot; - Display current stats on Salvium staking / yield.</source>
        <translation>&quot;info_rendimento&quot; - Exibir estatísticas atuais sobre piquetagem / rendimento de Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3225"/>
        <source>&quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&quot; - Show transactions.</source>
        <translation>&quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&quot; - Mostrar transações.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3226"/>
        <source>&quot;sweep_all &lt;address&gt;&quot; - Send whole balance to another wallet.</source>
        <translation>&quot;varrer_todos &lt;endereço&gt;&quot; - Envie todo o saldo para outra carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3227"/>
        <source>&quot;seed&quot; - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>&quot;semente&quot; - Mostrar 25 palavras secretas que podem ser usadas para recuperar esta carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3228"/>
        <source>&quot;refresh&quot; - Synchronize wallet with the Salvium network.</source>
        <translation>&quot;atualizar&quot; - Sincronize a carteira com a rede Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3229"/>
        <source>&quot;status&quot; - Check current status of wallet.</source>
        <translation>&quot;estado&quot; - Verifique o status atual da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3230"/>
        <source>&quot;version&quot; - Check software version.</source>
        <translation>&quot;versão&quot; - Verifique a versão do software.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3231"/>
        <source>&quot;exit&quot; - Exit wallet.</source>
        <translation>&quot;saída&quot; - Sair da carteira.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233"/>
        <source>&quot;donate &lt;amount&gt;&quot; - Donate SAL to the development team.</source>
        <translation>&quot;doar &lt;valor&gt;&quot; - Doe SAL para a equipe de desenvolvimento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263"/>
        <source>No commands found mentioning keyword(s)</source>
        <translation>Nenhum comando encontrado mencionando palavras-chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3293"/>
        <source>Invalid txid specified: </source>
        <translation>Txid inválido especificado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300"/>
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>AVISO: esta operação pode revelar os txids para o nó remoto e afetar sua privacidade</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3302"/>
        <source>You have canceled the operation</source>
        <translation>Você cancelou a operação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3347"/>
        <source>Set another daemon to connect to. If it's not yours, it'll probably spy on you.</source>
        <translation>Defina outro daemon para conectar-se. Se não for seu, provavelmente irá espionar você.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3373"/>
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included). The &quot;subtractfeefrom=&quot; list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: &quot;transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2&quot;. Let's say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use &quot;subtractfeefrom=all&quot; to spread the fee across all destinations.</source>
        <translation>Transferir &lt;valor&gt; de &lt;asset_type&gt; para &lt;endereço&gt;. Se o parâmetro &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; é especificado, a carteira usa saídas recebidas pelos endereços desses índices. Se omitido, a carteira escolhe aleatoriamente os índices de endereço a serem usados. Em qualquer caso, ele faz o possível para não combinar saídas em vários endereços. &lt;prioridade&gt; é a prioridade da transação. Quanto maior a prioridade, maior será a taxa de transação. Os valores válidos em ordem de prioridade (do menor para o maior) são: sem importância, normal, elevado, prioridade. Se omitido, o valor padrão (veja o comando &quot;definir prioridade&quot;) será usado. &lt;tamanho_do_anel&gt; é o número de insumos a serem incluídos para não rastreabilidade. Vários pagamentos podem ser feitos de uma vez adicionando URI_2 ou &lt;address_2&gt; &lt;quantidade_2&gt; etc. (antes do ID de pagamento, se estiver incluído). A opção &quot;subtractfeefrom=&quot; A lista permite que você escolha de quais destinos financiar a taxa de transferência em vez da saída de alteração. A taxa será dividida proporcionalmente entre os destinos escolhidos. Por exemplo, para fazer 3 transferências onde a taxa é cobrada do primeiro e terceiro destinos, pode-se fazer: &quot;transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0,5 &lt;addr3&gt; 1 subtrair taxa de = 0,2&quot;. Digamos que a taxa de transferência seja 0,1. O saldo cairia exatamente 4,5 SAL incluindo taxas e addr1 &amp; addr3 receberia 2.925 &amp; 0,975 SAL, respectivamente. Use &quot;subtractfeefrom=all&quot; para distribuir a taxa por todos os destinos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>Envie todo o saldo desbloqueado para um endereço e bloqueie-o para &lt;lockblocks&gt; (máx. 1.000.000). Se o parâmetro &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; ou &quot;índice=todos&quot; é especificado, a carteira varre as saídas recebidas por esses ou por todos os índices de endereço, respectivamente. Se omitido, a carteira escolhe aleatoriamente um índice de endereço a ser usado. &lt;prioridade&gt; é a prioridade da varredura. Quanto maior a prioridade, maior será a taxa de transação. Os valores válidos em ordem de prioridade (do menor para o maior) são: sem importância, normal, elevado, prioridade. Se omitido, o valor padrão (veja o comando &quot;definir prioridade&quot;) será usado. &lt;tamanho_do_anel&gt; é o número de insumos a serem incluídos para não rastreabilidade.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3387"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Envie todo o saldo desbloqueado para um endereço. Se o parâmetro &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; ou &quot;índice=todos&quot; é especificado, a carteira varre as saídas recebidas por esses ou por todos os índices de endereço, respectivamente. Se omitido, a carteira escolhe aleatoriamente um índice de endereço a ser usado. Se o parâmetro &quot;outputs=&lt;N&gt;&quot; é especificado e N &gt; 0, a carteira divide a transação em N saídas pares.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3390"/>
        <source>Send all unlocked balance from a given account to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Envie todo o saldo desbloqueado de uma determinada conta para um endereço. Se o parâmetro &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; ou &quot;índice=todos&quot; é especificado, a carteira varre as saídas recebidas por esses ou por todos os índices de endereço, respectivamente. Se omitido, a carteira escolhe aleatoriamente um índice de endereço a ser usado. Se o parâmetro &quot;outputs=&lt;N&gt;&quot; é especificado e N &gt; 0, a carteira divide a transação em N saídas pares.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402"/>
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>Retorna o(s) pagamento(s) recebido(s) em TX &lt;tx_hash&gt; ao remetente original.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406"/>
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>Destrói (queima) PERMANENTEMENTE &lt;quantidade&gt; de &lt;asset_type&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410"/>
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>Converte &lt;quantidade&gt; &lt;source_asset&gt; em &lt;dest_asset&gt;, com &lt;slippage_limit&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414"/>
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>Bloqueios &lt;quantidade&gt; do SAL como participação para obter rendimento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418"/>
        <source>Displays the current exchange rate information for SAL &lt;--&gt; VSD conversions</source>
        <translation>Exibe as informações da taxa de câmbio atual para SAL &lt;--&gt; Conversões VSD</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3422"/>
        <source>Displays the current circulating supply information for SAL and VSD currencies</source>
        <translation>Exibe as informações atuais de fornecimento em circulação para moedas SAL e VSD</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426"/>
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>Exibe as estatísticas dos retornos de rendimento nos últimos &lt;NN&gt; blocos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430"/>
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>Doe &lt;valor&gt; para a equipe de desenvolvimento (donate.salvium.io).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3434"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default &quot;unsigned_monero_tx&quot; will be used.</source>
        <translation>Assine uma transação de um arquivo. Se o parâmetro &quot;export_raw&quot; for especificado, os dados hexadecimais brutos da transação adequados para o daemon RPC /sendrawtransaction serão exportados.
Use o parâmetro &lt;filename&gt; para especificar o arquivo a ser lido. Se não for especificado, o padrão &quot;unsigned_monero_tx&quot; será usado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3456"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;mnew&quot; is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If &quot;one-off&quot; is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>Se nenhum argumento for especificado ou &lt;index&gt; é especificado, a carteira mostra o endereço padrão ou especificado. Se &quot;todos&quot; é especificado, a carteira mostra todos os endereços existentes na conta atualmente selecionada. Se &quot;novo&quot; é especificado, a carteira cria um novo endereço com o texto do rótulo fornecido (que pode estar vazio). Se &quot;sou novo&quot; é especificado, a carteira cria tantos novos endereços quanto especificado pelo argumento; o rótulo padrão é definido para os novos endereços. Se &quot;rótulo&quot; é especificado, a carteira define o rótulo do endereço especificado por &lt;index&gt; ao texto do rótulo fornecido. Se &quot;único&quot; é especificado, o endereço do índice especificado é gerado e exibido e lembrado pela carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3486"/>
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
 export-format &lt;&quot;binary&quot;|&quot;ascii&quot;&gt;
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
        <translation>Opções disponíveis:
 idioma seed
 Defina o idioma seed da carteira.
 always-confirm-transfers &lt;1|0&gt;
 Se deseja confirmar txes não divididos.
 print-ring-members &lt;1|0&gt;\ n Se devem ser impressas informações detalhadas sobre os membros do anel durante a confirmação.
 store-tx-info &lt;1|0&gt;
 Se devem ser armazenadas informações de tx de saída (endereço de destino, ID de pagamento, chave secreta de tx) para referência futura.
 auto-refresh &lt;1|0&gt;
 Se deseja sincronizar automaticamente novos blocos do daemon.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
 Defina o comportamento de atualização da carteira.
 prioridade [0|1|2|3|4]
 Defina a taxa como padrão/sem importância/normal/elevada/prioridade.
 confirm-missing-payment-id &lt;1|0&gt; (obsoleto)
 ask-password &lt;0|1|2 (ou never|action|decrypt)&gt;
 action: pergunta a senha antes de muitas ações como transferência, etc.
 decrypt: o mesmo que action, mas mantém a chave de gasto criptografada na memória quando não é necessária
 unit &lt;sal|millisal|microsal&gt;
 Defina a (sub)unidade padrão de salvium.
 min-outputs-count [n]
 Tente manter pelo menos isso muitas saídas de valor pelo menos min-outputs-value.
 min-outputs-value [n]
 Tente manter pelo menos min-outputs-count saídas com pelo menos esse valor.
 merge-destinations &lt;1| 0&gt;
 Se vários pagamentos devem ser mesclados no mesmo endereço de destino.
 confirm-backlog &lt;1|0&gt;
 Se deve ser avisado se houver atraso de transação.
 confirm-backlog-threshold [n]
 Definir um limite para confirm-backlog avisar apenas se o backlog da transação for maior que n blocos.
 confirm-export-overwrite &lt;1|0&gt;
 Se deve avisar se o arquivo a ser exportado já existe.
 update- from-block-height [n]
 Defina a altura antes da qual ignorar os blocos.
 auto-low-priority &lt;1|0&gt;
 Se deve usar automaticamente o nível de taxa de baixa prioridade quando for seguro fazê-lo. 
 segregate-pre-fork-outputs &lt;1|0&gt;
 Defina isto se você pretende gastar saídas no Salvium E em uma bifurcação de reutilização de chave.
 key-reuse-mitigation2 &lt;1|0&gt;
 Defina isso se você não tiver certeza se gastará em uma chave reutilizando o fork do Salvium mais tarde.
 subaddress-lookahead &lt;major&gt;:&lt;minor&gt;
 Defina os tamanhos de lookahead para a tabela hash de subendereços.
 segregation-height &lt;n&gt;
 Defina a altura de uma bifurcação de reutilização de chave que você deseja usar, 0 para usar o padrão.
 ignore-fractional-outputs &lt;1|0&gt;
 Se deve ignorar saídas fracionárias que resultam em perda líquida quando gastos devido a taxas.
 ignore-outputs-above &lt;amount&gt;
 Ignore resultados de valor acima deste limite ao gastar. O valor 0 é convertido para o valor máximo (18 milhões), o que desativa esse filtro.
 ignore-outputs-below &lt;amount&gt;
 Ignore resultados de valor abaixo desse limite ao gastar.
 track-uses &lt;1|0&gt;
 Se deve ser monitorado o uso de saídas próprias.
 setup-background-mining &lt;1|0&gt;
 Se deve ser habilitada a mineração em segundo plano. Defina isto para suportar a rede e ter a chance de receber o novo Salvium.
 device-name &lt;device_name[:device_spec]&gt;
 Nome do dispositivo para carteira de hardware.
 export-format &lt;&quot;binary&quot;| &quot;ascii&quot;&gt;
 Salve todos os arquivos exportados como binários (não pode ser copiado e colado) ou ascii (pode ser).
 persistente-rpc-client-id &lt;1|0&gt;
 Se deve continuar usando o mesmo ID de cliente para pagamento RPC durante reinicializações de carteira.
auto-mine-for-rpc-payment-threshold &lt;float&gt;
 Se deve iniciar automaticamente a mineração para pagamento RPC se o daemon exigir.
credits-target &lt;unsigned int&gt;
 O saldo de créditos de pagamento RPC para o destino (0 por padrão).
 show-wallet-name-when-locked &lt;1|0&gt;
 Defina isto se desejar exibir o nome da carteira quando bloqueada.\ n enable-multisig-experimental &lt;1|0&gt;
 Defina isto para permitir comandos multisig. Atualmente, o Multisig pode ser explorável se as partes não confiarem umas nas outras.
 inactivity-lock-timeout &lt;unsigned int&gt;
 Quantos segundos esperar antes de bloquear a carteira (0 para desativar).
freeze-incoming-payments &lt; 1|0&gt;
 Se os pagamentos recebidos serão congelados automaticamente, para que não possam ser gastos erroneamente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3607"/>
        <source>Show the incoming/outgoing transfers within an optional height range.

Output format:
In or Coinbase:    Block Number, &quot;block&quot;|&quot;in&quot;,              Time, Amount, Asset Type, Transaction Hash, Payment ID, Subaddress Index,                     &quot;-&quot;, Note
Out:               Block Number, &quot;out&quot;,                     Time, Amount*, Asset Type, Transaction Hash, Payment ID, Fee, Destinations, Input addresses**, &quot;-&quot;, Note
Pool:                            &quot;pool&quot;, &quot;in&quot;,              Time, Amount, Asset Type, Transaction Hash, Payment Id, Subaddress Index,                     &quot;-&quot;, Note, Double Spend Note
Pending or Failed:               &quot;failed&quot;|&quot;pending&quot;, &quot;out&quot;, Time, Amount*, Transaction Hash, Payment ID, Fee, Input addresses**,               &quot;-&quot;, Note
Staked or Burnt:   Block Number, &quot;out&quot;,                     Time, Amount*, Asset Type, Transaction Hash, Payment ID, Fee, Input addresses**,               &quot;-&quot;, Note

* Excluding change and fee.
** Set of address indices used as inputs in this transfer.</source>
        <translation>Mostre as transferências de entrada/saída dentro de um intervalo de altura opcional.

Formato de saída:
In ou Coinbase: Número do bloco, &quot;bloco&quot;|&quot;em&quot;,          Hora, valor, tipo de ativo, hash de transação, ID de pagamento, índice de subendereço,                 &quot;-&quot;, Nota
Saída:           Número do bloco, &quot;saída&quot;, Hora, Valor*, Tipo de ativo, Hash de transação, ID de pagamento, Taxa, Destinos, Endereços de entrada**, &quot;-&quot;, Nota
Pool: &quot;pool&quot;, &quot;entrada&quot; ,          Hora, valor, tipo de ativo, hash de transação, ID de pagamento, índice de subendereço,                 &quot;-&quot;, Nota, Nota de gasto duplo
Pendente ou com falha: &quot;com falha&quot;|&quot;pendente&quot;, &quot;saída&quot;, Tempo, Valor*, Hash de transação, ID de pagamento, Taxa, Endereços de entrada**, &quot;-&quot;, Nota
Staked ou Burnt: Número do bloco, &quot;saída&quot;, Tempo, Valor*, Tipo de ativo, Hash de transação, ID de pagamento, Taxa, Endereços de entrada**, &quot;-&quot;, Nota
\ n* Excluindo alterações e taxas.
** Conjunto de índices de endereço usados ​​como entradas nesta transferência.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618"/>
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653"/>
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>Assine o conteúdo de um arquivo com o subendereço fornecido (ou o endereço principal, se não for especificado)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3728"/>
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>Interface com o MMS (Sistema de Mensagens Multisig)
&lt;subcomando&gt; é um dos seguintes:
 init, info, signer, list, next, sincronizar, transferir, excluir, enviar, receber, exportar, anotar, mostrar, definir, ajudar
 send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Obtenha ajuda sobre um subcomando com: help mms &lt;subcommand&gt; ou help mms &lt;subcommand&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3803"/>
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>Obtenha uma soma de verificação que permite aos assinantes verificar facilmente configurações MMS idênticas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889"/>
        <source>Show address as QR code</source>
        <translation>Mostrar endereço como código QR</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3897"/>
        <source>Search all command descriptions for keyword(s)</source>
        <translation>Pesquise todas as descrições de comandos por palavras-chave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3901"/>
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>Digitalize as transações fornecidas por &lt;txid&gt;(s), processando-as e procurando resultados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014"/>
        <source>sal, millisal, microsal</source>
        <translation>sal, milisal, microsal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032"/>
        <source>1 or 0</source>
        <translation>1 ou 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4257"/>
        <source>Multisig is disabled.</source>
        <translation>Multisig está desabilitado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4258"/>
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can't be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>Multisig é um recurso experimental e pode conter bugs. As coisas que podem dar errado incluem: os fundos enviados para uma carteira multisig não podem ser gastos, só podem ser gastos com a participação de um membro mal-intencionado do grupo ou podem ser roubados por um membro mal-intencionado do grupo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4260"/>
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>Você cancelou a restauração de uma carteira multisig.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4915"/>
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>a carteira não conseguiu se conectar ao daemon porque está definida para o modo offline</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4917"/>
        <source>wallet failed to connect to daemon, because it is not up to date. </source>
        <translation>A carteira não conseguiu se conectar ao daemon porque não está atualizada. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4918"/>
        <source>Please make sure you are running the latest wallet.</source>
        <translation>Certifique-se de estar executando a carteira mais recente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4921"/>
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the 'set_daemon' command.</source>
        <translation>Daemon não está atualizado. Certifique-se de que o daemon esteja executando a versão mais recente ou altere o endereço do daemon usando o comando 'set_daemon'.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5076"/>
        <source>Your wallet has been generated!
To start synchronizing with the daemon, use the &quot;refresh&quot; command.
Use the &quot;help&quot; command to see a simplified list of available commands.
Use &quot;help all&quot; command to see the list of all available commands.
Use &quot;help &lt;command&gt;&quot; to see a command's documentation.
Always use the &quot;exit&quot; command when closing salvium-wallet-cli to save 
your current session's state. Otherwise, you might need to synchronize 
your wallet again (your wallet keys are NOT at risk in any case).
</source>
        <translation>Sua carteira foi gerada!
Para iniciar a sincronização com o daemon, use o botão &quot;atualizar&quot; comando.
Use o comando &quot;ajuda&quot; comando para ver uma lista simplificada de comandos disponíveis.
Use &quot;help all&quot; comando para ver a lista de todos os comandos disponíveis.
Use &quot;help &lt;command&gt;&quot; para ver a documentação de um comando.
Sempre use a opção &quot;exit&quot; comando ao fechar o salvium-wallet-cli para salvar 
o estado da sua sessão atual. Caso contrário, talvez seja necessário sincronizar 
sua carteira novamente (as chaves de sua carteira NÃO correm risco em nenhum caso).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5348"/>
        <source>Use the &quot;help&quot; command to see a simplified list of available commands.
</source>
        <translation>Use a opção &quot;ajuda&quot; comando para ver uma lista simplificada de comandos disponíveis.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5349"/>
        <source>Use &quot;help all&quot; to see the list of all available commands.
</source>
        <translation>Use &quot;ajudar todos&quot; para ver a lista de todos os comandos disponíveis.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5536"/>
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>Ativar isso oferece suporte à rede que você está usando e torna você elegível para receber novas SALs</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703"/>
        <source>Failed to parse address</source>
        <translation>Falha ao analisar o endereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5718"/>
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got </source>
        <translation>Esperado um nó confiável, não confiável ou este-provavelmente-é-um-espião obtido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5727"/>
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>Este não é um endereço Tor/I2P e não é um daemon confiável.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5728"/>
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>Use seu próprio nó confiável, conecte-se via Tor ou I2P ou passe este-provavelmente-um-nó espião e seja espionado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5733"/>
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>Aviso: conectando-se a um daemon não local sem SSL, adversários passivos poderão espionar você.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5836"/>
        <source>stake returned </source>
        <translation>aposta devolvida </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5842"/>
        <source>yield earned </source>
        <translation>rendimento obtido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5853"/>
        <source>burnt </source>
        <translation>queimado </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5858"/>
        <source>converting </source>
        <translation>convertendo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5863"/>
        <source>staked </source>
        <translation>apostado </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5982"/>
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>O dispositivo solicita a senha. Você deseja inserir a senha no dispositivo (Y) (ou no host (N))?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005"/>
        <source>The wallet's refresh-from-block-height setting is higher than the daemon's height: this may mean your wallet will skip over transactions</source>
        <translation>A configuração de atualização da altura do bloco da carteira é maior que a altura do daemon: isso pode significar que sua carteira irá pular transações</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6155"/>
        <source> (Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation>(Algumas saídas próprias têm imagens principais ausentes - são necessárias export_outputs, import_outputs, export_key_images e import_key_images)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171"/>
        <source>Asset: </source>
        <translation>Ativo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10339"/>
        <source>, balance: </source>
        <translation>, equilíbrio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6494"/>
        <source>failed to connect to daemon</source>
        <translation>falha ao conectar ao daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6595"/>
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>, o que pode quebrar o anonimato das assinaturas de ringue. Certifique-se de que isso seja intencional!
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653"/>
        <source>I locked your Salvium wallet to protect you while you were away
see &quot;help set&quot; to configure/disable</source>
        <translation>Tranquei sua carteira Salvium para protegê-lo enquanto você estava ausente
consulte &quot;conjunto de ajuda&quot; configurar/desabilitar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6673"/>
        <source>Locked due to inactivity.</source>
        <translation>Bloqueado por inatividade.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6674"/>
        <source>The wallet password is required to unlock the console.</source>
        <translation>A senha da carteira é necessária para desbloquear o console.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6681"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10824"/>
        <source>Testnet</source>
        <translation>Rede de teste</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10825"/>
        <source>Stagenet</source>
        <translation>Stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10825"/>
        <source>Mainnet</source>
        <translation>Rede principal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073"/>
        <source>Burning %s %s.  </source>
        <translation>Queimando %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7075"/>
        <source>Converting %s %s to %s.  </source>
        <translation>Convertendo %s %s em %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7077"/>
        <source>Staking %s %s for yield accrual.  </source>
        <translation>Staking de %s %s para acumulação de rendimento.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7079"/>
        <source>Sending %s %s.  </source>
        <translation>Enviando %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7098"/>
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>.
Esta transação (incluindo %s troco) será desbloqueada em %llu blocos, aproximadamente %s dias (assumindo 2 minutos por bloco)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975"/>
        <source>Invalid account</source>
        <translation>Conta inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8006"/>
        <source>return_payments are disabled</source>
        <translation>return_payments estão desativados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8042"/>
        <source>incorrect TX type for txid </source>
        <translation>tipo TX incorreto para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8048"/>
        <source>invalid return_address/return_pubkey for txid </source>
        <translation>return_address/return_pubkey inválido para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8065"/>
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid </source>
        <translation>a imagem principal não está disponível (parcial/desconhecida/gasta/congelada) para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8097"/>
        <source>Returning %s for a total fee of %s.  Is this okay?</source>
        <translation>Devolvendo %s por uma taxa total de %s.  Está tudo bem?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8127"/>
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>assinatura a frio de TXs de retorno ainda não implementada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8217"/>
        <source>conversions are disabled until hard fork </source>
        <translation>as conversões são desativadas até o hard fork </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8224"/>
        <source>missing / extraneous argument(s)</source>
        <translation>argumento(s) ausente(s)/externo(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8240"/>
        <source>invalid slippage_limit value : expected 0.0-90.0, got </source>
        <translation>valor slippage_limit inválido: esperado 0,0-90,0, obtido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8251"/>
        <source>invalid argument(s): </source>
        <translation>argumentos inválidos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8257"/>
        <source>out of range for slippage limit: </source>
        <translation>fora da faixa do limite de deslizamento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8267"/>
        <source>invalid destination asset_type</source>
        <translation>destino inválido asset_type</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8277"/>
        <source>invalid source asset_type</source>
        <translation>asset_type de origem inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8286"/>
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>conversão inválida – asset_type permanece inalterado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8343"/>
        <source>%s
	SPOT:	%d
	MA:	%d</source>
        <translation>%s
	SPOT:	%d
	MA:	%d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8367"/>
        <source>SUPPLY INFO</source>
        <translation>INFORMAÇÕES DE FORNECIMENTO</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8378"/>
        <source>	%6s : %21.8d</source>
        <translation>	%6s:%21,8d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8405"/>
        <source>
STAKED FUNDS:</source>
        <translation>
Fundos apostados:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8411"/>
        <source>Height %d, txid %s, staked %s SAL, earned %s SAL</source>
        <translation>Altura %d, txid %s, apostado %s SAL, ganho %s SAL</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8417"/>
        <source>Height %d, txid %s, staked %s SAL, %s SAL accrued so far</source>
        <translation>Altura %d, txid %s, %s SAL apostado, %s SAL acumulado até agora</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8425"/>
        <source>
YIELD INFO:
	Supply coins burnt over last %s: %d
	Total coins locked: %d
	Yield accrued over last %s: %d
	Yield per SAL staked: %d</source>
        <translation>
INFORMAÇÕES DE RENDIMENTO:
	Moedas de fornecimento queimadas nos últimos %s: %d
	Total de moedas bloqueadas: %d
	Rendimento acumulado nos últimos %s: %d
	Rendimento por SAL apostado: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8490"/>
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>Doando %s %s para a equipe Salvium (donate.salvium.io ou %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8841"/>
        <source>Last argument is an address, but not a subaddress</source>
        <translation>O último argumento é um endereço, mas não um subendereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8895"/>
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>Pode ser porque a transferência foi para um subendereço. Se for este o caso, passe o subendereço por último</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9590"/>
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>uso: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9649"/>
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>uso: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [saída=&lt;caminho&gt;] [opção=&lt;com_chaves&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>tx key</source>
        <translation>chave tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10338"/>
        <source>
Grand total:
  Asset: </source>
        <translation>
Total geral:
 Ativo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Asset</source>
        <translation>Ativo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376"/>
        <source> %c%8u %6s %21s %21s %21s %21s</source>
        <translation>%c%8u %6s %21s %21s %21s %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10390"/>
        <source>------------------------------------------------------------------------------------</source>
        <translation>-------------------------------------------------- ----------------------------------</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10392"/>
        <source>%15s   %21s %21s  %15s</source>
        <translation>%15s %21s %21s %15s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10447"/>
        <source>Expected exactly one argument for the amount of new addresses</source>
        <translation>Esperava exatamente um argumento para a quantidade de novos endereços</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10453"/>
        <source>failed to parse the amount of new addresses: </source>
        <translation>não conseguiu analisar a quantidade de novos endereços: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10458"/>
        <source>the amount of new addresses must be lower or equal to </source>
        <translation>a quantidade de novos endereços deve ser menor ou igual a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10473"/>
        <source>Expected exactly two arguments for index</source>
        <translation>Esperava exatamente dois argumentos para o índice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10483"/>
        <source>Address at %u %u: %s</source>
        <translation>Endereço em %u %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10616"/>
        <source>Standard address: %s, payment ID: %s</source>
        <translation>Endereço padrão: %s, ID de pagamento: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10872"/>
        <source>Invalid subaddress index format, and not a signature type: </source>
        <translation>Formato de índice de subendereço inválido e não um tipo de assinatura: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11497"/>
        <source> (Y/Yes/N/No): </source>
        <translation>(S/Sim/N/Não): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11503"/>
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>AVISO: O uso de mecanismos de configuração automática de MMS não é confiável</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11504"/>
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers' info</source>
        <translation>Um gerenciador de configuração automática malicioso pode enviar informações sobre suas próprias carteiras em vez de informações de outros assinantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11505"/>
        <source>If in doubt do not use auto-config or at least compare configs using the &quot;mms config_checksum&quot; command</source>
        <translation>Em caso de dúvida, não use a configuração automática ou pelo menos compare as configurações usando o comando &quot;mms config_checksum&quot; comando</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11532"/>
        <source>Choose processing:</source>
        <translation>Escolha o processamento:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11541"/>
        <source>Sign tx</source>
        <translation>Assinar tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11549"/>
        <source>Send the tx for submission to </source>
        <translation>Envie o tx para envio para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11553"/>
        <source>Send the tx for signing to </source>
        <translation>Envie o tx para assinatura para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11560"/>
        <source>Submit tx</source>
        <translation>Enviar tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11563"/>
        <source>unknown</source>
        <translation>desconhecido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11569"/>
        <source>Choice: </source>
        <translation>Escolha: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11581"/>
        <source>Wrong choice</source>
        <translation>Escolha errada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>Id</source>
        <translation>Eu ia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>I/O</source>
        <translation>E/S</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>Authorized Signer</source>
        <translation>Signatário Autorizado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Message Type</source>
        <translation>Tipo de mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Height</source>
        <translation>Altura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Message State</source>
        <translation>Estado da mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Since</source>
        <translation>Desde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11606"/>
        <source> ago</source>
        <translation>atrás</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11612"/>
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11612"/>
        <source>Transport Address</source>
        <translation>Endereço de transporte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11613"/>
        <source>Auto-Config Token</source>
        <translation>Token de configuração automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11613"/>
        <source>Salvium Address</source>
        <translation>Endereço Sálvio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11617"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11625"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627"/>
        <source>&lt;not set&gt;</source>
        <translation>&lt;não definido&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11668"/>
        <source>Message </source>
        <translation>Mensagem </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11669"/>
        <source>In/out: </source>
        <translation>Entrada/saída: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11671"/>
        <source>State: </source>
        <translation>Estado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11671"/>
        <source>%s since %s, %s ago</source>
        <translation>%s desde %s, %s atrás</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11675"/>
        <source>Sent: Never</source>
        <translation>Enviado: Nunca</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11679"/>
        <source>Sent: %s, %s ago</source>
        <translation>Enviado: %s, %s atrás</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11682"/>
        <source>Authorized signer: </source>
        <translation>Signatário autorizado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683"/>
        <source>Content size: </source>
        <translation>Tamanho do conteúdo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683"/>
        <source> bytes</source>
        <translation>bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11684"/>
        <source>Content: </source>
        <translation>Contente: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11684"/>
        <source>(binary data)</source>
        <translation>(dados binários)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11714"/>
        <source>Send these messages now?</source>
        <translation>Enviar essas mensagens agora?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11724"/>
        <source>Queued for sending.</source>
        <translation>Na fila para envio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11744"/>
        <source>Invalid message id</source>
        <translation>ID de mensagem inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11753"/>
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>uso: inicialização mms &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;rótulo_próprio&gt; &lt;próprio_endereço_de_transporte&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11759"/>
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>O MMS já está inicializado. Reinicializar excluindo todas as informações e mensagens do assinante?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11774"/>
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>Erro no número de assinantes necessários e/ou assinantes autorizados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11791"/>
        <source>The MMS is not active.</source>
        <translation>O MMS não está ativo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11814"/>
        <source>Invalid signer number </source>
        <translation>Número de assinante inválido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11819"/>
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>assinante mms [&lt;número&gt; &lt;rótulo&gt; [&lt;endereço_transporte&gt; [&lt;salvium_address&gt;]]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11838"/>
        <source>Invalid Salvium address</source>
        <translation>Endereço Salvium inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11845"/>
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>O estado da carteira não permite mais alterar endereços do Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11857"/>
        <source>Usage: mms list</source>
        <translation>Uso: lista mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11870"/>
        <source>Usage: mms next [sync]</source>
        <translation>Uso: mms próximo [sincronização]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11895"/>
        <source>No next step: </source>
        <translation>Nenhuma próxima etapa: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11905"/>
        <source>prepare_multisig</source>
        <translation>prepare_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11911"/>
        <source>make_multisig</source>
        <translation>make_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11926"/>
        <source>exchange_multisig_keys</source>
        <translation>exchange_multisig_keys</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11942"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12066"/>
        <source>export_multisig_info</source>
        <translation>export_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11951"/>
        <source>import_multisig_info</source>
        <translation>import_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11964"/>
        <source>sign_multisig</source>
        <translation>sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11974"/>
        <source>submit_multisig</source>
        <translation>submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11984"/>
        <source>Send tx</source>
        <translation>Enviar mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11995"/>
        <source>Process signer config</source>
        <translation>Configuração do assinante do processo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12007"/>
        <source>Replace current signer config with the one displayed above?</source>
        <translation>Substituir a configuração do signatário atual pela exibida acima?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12013"/>
        <source>You can use the &quot;mms delete&quot; command to delete any unwanted message</source>
        <translation>Você pode usar a opção &quot;excluir mms&quot; comando para excluir qualquer mensagem indesejada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12026"/>
        <source>Process auto config data</source>
        <translation>Processar dados de configuração automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12040"/>
        <source>Nothing ready to process</source>
        <translation>Nada pronto para processar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12059"/>
        <source>Usage: mms sync</source>
        <translation>Uso: sincronização mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12083"/>
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>Uso: exclusão de mms (&lt;message_id&gt; | all)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12090"/>
        <source>Delete all messages?</source>
        <translation>Excluir todas as mensagens?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12116"/>
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>Uso: envio de mms [&lt;message_id&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12133"/>
        <source>Usage: mms receive</source>
        <translation>Uso: recebimento de mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12150"/>
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>Uso: exportação mms &lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12161"/>
        <source>Message content saved to: </source>
        <translation>Conteúdo da mensagem salvo em: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12165"/>
        <source>Failed to to save message content</source>
        <translation>Falha ao salvar o conteúdo da mensagem</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12189"/>
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>Uso: nota mms [&lt;label&gt; &lt;texto&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12196"/>
        <source>No signer found with label </source>
        <translation>Nenhum assinante encontrado com o rótulo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12218"/>
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>Uso: mms show &lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12236"/>
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>Uso: conjunto mms &lt;option_name&gt; [&lt;valor_opção&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12253"/>
        <source>Wrong option value</source>
        <translation>Valor da opção errado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12258"/>
        <source>Auto-send is on</source>
        <translation>O envio automático está ativado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12258"/>
        <source>Auto-send is off</source>
        <translation>O envio automático está desativado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12263"/>
        <source>Unknown option</source>
        <translation>Opção desconhecida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12271"/>
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>Uso: help mms [&lt;subcomando&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12287"/>
        <source>Usage: mms send_signer_config</source>
        <translation>Uso: mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12293"/>
        <source>Signer config not yet complete</source>
        <translation>A configuração do signatário ainda não foi concluída</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12308"/>
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>Uso: mms start_auto_config [&lt;label&gt; &lt;rótulo&gt; ...]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12313"/>
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>Existem signatários sem um conjunto de rótulos. Preencha os rótulos antes da configuração automática ou especifique-os como parâmetros aqui.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12319"/>
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>A configuração automática já está em execução. Cancelar e reiniciar?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12343"/>
        <source>Usage: mms config_checksum</source>
        <translation>Uso: mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12355"/>
        <source>Usage: mms stop_auto_config</source>
        <translation>Uso: mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12358"/>
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>Excluir todos os tokens de configuração automática e interromper a configuração automática?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12371"/>
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>Uso: mms auto_config &lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12378"/>
        <source>Invalid auto-config token</source>
        <translation>Token de configuração automática inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12388"/>
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>A configuração automática já está em execução. Cancelar e reiniciar?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12407"/>
        <source>MMS not available in this wallet</source>
        <translation>MMS não disponível nesta carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12431"/>
        <source>The MMS is not active. Activate using the &quot;mms init&quot; command</source>
        <translation>O MMS não está ativo. Ative usando o botão &quot;mms init&quot; comando</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12512"/>
        <source>Invalid MMS subcommand</source>
        <translation>Subcomando MMS inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12517"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12521"/>
        <source>Error in MMS command: </source>
        <translation>Erro no comando MMS: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10843"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>carteira é apenas para relógio e não pode assinar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10848"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>Esta carteira é multisig e não pode assinar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10922"/>
        <source>Bad signature from </source>
        <translation>Assinatura incorreta de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10926"/>
        <source>Good signature from </source>
        <translation>Boa assinatura de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10942"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>a carteira é apenas para visualização e não pode exportar imagens importantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10980"/>
        <source>Signed key images exported to </source>
        <translation>Imagens-chave assinadas exportadas para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11025"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11071"/>
        <source>command only supported by HW wallet</source>
        <translation>comando suportado apenas pela carteira HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11030"/>
        <source>hw wallet does not support cold KI sync</source>
        <translation>carteira hw não suporta sincronização fria de KI</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11042"/>
        <source>Please confirm the key image sync on the device</source>
        <translation>Por favor, confirme a sincronização da imagem principal no dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11048"/>
        <source>Key images synchronized to height </source>
        <translation>Imagens principais sincronizadas com a altura </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11051"/>
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>A execução de um daemon não confiável não pode determinar qual saída de transação é gasta. Use um daemon confiável com --trusted-daemon e execute rescan_spent</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11054"/>
        <source> spent, </source>
        <translation>gasto, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11054"/>
        <source> unspent</source>
        <translation>não gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11058"/>
        <source>Failed to import key images</source>
        <translation>Falha ao importar imagens principais</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11063"/>
        <source>Failed to import key images: </source>
        <translation>Falha ao importar imagens principais: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11080"/>
        <source>Failed to reconnect device</source>
        <translation>Falha ao reconectar o dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11085"/>
        <source>Failed to reconnect device: </source>
        <translation>Falha ao reconectar o dispositivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11137"/>
        <source>Outputs exported to </source>
        <translation>Saídas exportadas para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11292"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>Gasto duplo visto na rede: essa transação pode ou não acabar minada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11327"/>
        <source>Transaction ID not found</source>
        <translation>ID da transação não encontrado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11362"/>
        <source>Transaction successfully saved to </source>
        <translation>Transação salva com sucesso em </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11364"/>
        <source>, txid </source>
        <translation>, txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11364"/>
        <source>Failed to save transaction to </source>
        <translation>Falha ao salvar a transação em </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="408"/>
        <source>TRUE</source>
        <translation>verdadeiro</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="461"/>
        <source>failed to parse refresh type</source>
        <translation>falha ao analisar o tipo de atualização</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="881"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Insira a senha de deslocamento de seed opcional, vazia para ver o seed bruto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4342"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Insira a senha de deslocamento inicial, vazia se não houver</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5342"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>Você pode querer remover o arquivo &quot;%s&quot; e tente novamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8671"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Esta é uma carteira multisig, só pode assinar com sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8676"/>
        <source>This is a watch only wallet</source>
        <translation>Esta é uma carteira apenas para relógio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8708"/>
        <source>Failed to sign transaction</source>
        <translation>Falha ao assinar a transação</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8714"/>
        <source>Failed to sign transaction: </source>
        <translation>Falha ao assinar a transação: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8735"/>
        <source>Transaction raw hex data exported to </source>
        <translation>Dados hexadecimais brutos de transação exportados para </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8756"/>
        <source>Failed to load transaction from file</source>
        <translation>Falha ao carregar a transação do arquivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8024"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8801"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8852"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8911"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8960"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9042"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9127"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9162"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10702"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10730"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11189"/>
        <source>failed to parse txid</source>
        <translation>falha ao analisar txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8814"/>
        <source>Tx key: </source>
        <translation>Chave Tx: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8819"/>
        <source>no tx keys found for this txid</source>
        <translation>nenhuma chave tx encontrada para este txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8862"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8873"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8880"/>
        <source>failed to parse tx_key</source>
        <translation>falha ao analisar tx_key</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8889"/>
        <source>Tx key successfully stored.</source>
        <translation>Chave Tx armazenada com sucesso.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8893"/>
        <source>Failed to store tx key: </source>
        <translation>Falha ao armazenar a chave tx: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8929"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9230"/>
        <source>signature file saved to: </source>
        <translation>arquivo de assinatura salvo em: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8931"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9143"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9232"/>
        <source>failed to save signature file</source>
        <translation>falha ao salvar o arquivo de assinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8935"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9023"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9101"/>
        <source>error: </source>
        <translation>erro: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8977"/>
        <source>failed to parse tx key</source>
        <translation>falha ao analisar a chave tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8999"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072"/>
        <source>received</source>
        <translation>recebido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8999"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072"/>
        <source>in txid</source>
        <translation>em txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9002"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9075"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>AVISO: esta transação ainda não está incluída na blockchain!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9012"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9085"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>AVISO: não foi possível determinar o número de confirmações!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9018"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9091"/>
        <source>received nothing in txid</source>
        <translation>não recebi nada no txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9058"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9172"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9266"/>
        <source>failed to load signature file</source>
        <translation>falha ao carregar o arquivo de assinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9069"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9179"/>
        <source>Good signature</source>
        <translation>Boa assinatura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9096"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9181"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9281"/>
        <source>Bad signature</source>
        <translation>Assinatura incorreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9120"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>carteira é apenas para relógio e não pode gerar a prova</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9204"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>O comprovante de reserva só pode ser gerado por uma carteira cheia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9259"/>
        <source>Address must not be a subaddress</source>
        <translation>O endereço não deve ser um subendereço</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9386"/>
        <source>bad min_height parameter:</source>
        <translation>parâmetro min_height incorreto:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9398"/>
        <source>bad max_height parameter:</source>
        <translation>parâmetro max_height incorreto:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9420"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>block</source>
        <translation>bloquear</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9420"/>
        <source>in</source>
        <translation>em</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9511"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[Gasto duplo visto na rede: esta transação pode ou não acabar sendo minerada] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9799"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt; deve ser menor que &lt;max_amount&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9825"/>
        <source>There is no unspent output in the specified address</source>
        <translation>Não há saída não gasta no endereço especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9831"/>
        <source>
Amount: </source>
        <translation>
Valor: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9831"/>
        <source>, number of keys: </source>
        <translation>, número de chaves: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9836"/>
        <source> </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9841"/>
        <source>
Min block height: </source>
        <translation>
Altura mínima do bloco: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9842"/>
        <source>
Max block height: </source>
        <translation>
Altura máxima do bloco: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9843"/>
        <source>
Min amount found: </source>
        <translation>
Valor mínimo encontrado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9844"/>
        <source>
Max amount found: </source>
        <translation>
Valor máximo encontrado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845"/>
        <source>
Total count: </source>
        <translation>
Contagem total: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9885"/>
        <source>
Bin size: </source>
        <translation>
Tamanho do compartimento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9886"/>
        <source>
Outputs per *: </source>
        <translation>
Saídas por *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9888"/>
        <source>count
  ^
</source>
        <translation>contar
 ^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9890"/>
        <source>  |</source>
        <translation>  |</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9892"/>
        <source>  +</source>
        <translation>  +</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9892"/>
        <source>+--&gt; block height
</source>
        <translation>+--&gt; altura do bloco
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9893"/>
        <source>   ^</source>
        <translation>  ^</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9893"/>
        <source>^
</source>
        <translation>^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9894"/>
        <source>  </source>
        <translation>  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9939"/>
        <source>Warning: this will lose any information which can not be recovered from the blockchain.</source>
        <translation>Aviso: isso perderá qualquer informação que não possa ser recuperada do blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9940"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Isso inclui endereços de destino, chaves secretas de transferência, notas de transferência, etc.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9277"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Boa assinatura – total: %s, gasto: %s, não gasto: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094"/>
        <source>First line is not an amount</source>
        <translation>A primeira linha não é um valor</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108"/>
        <source>Invalid output: </source>
        <translation>Saída inválida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2133"/>
        <source>Invalid output key, and file doesn't exist</source>
        <translation>Chave de saída inválida e o arquivo não existe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2156"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2183"/>
        <source>Invalid output</source>
        <translation>Saída inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2671"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>argumento inválido: deve ser 0/nunca, 1/ação ou 2/criptografar/descriptografar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3377"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included)</source>
        <translation>Transferir &lt;valor&gt; para &lt;endereço&gt; e bloqueie-o para &lt;lockblocks&gt; (máx. 1.000.000). Se o parâmetro &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; é especificado, a carteira usa saídas recebidas pelos endereços desses índices. Se omitido, a carteira escolhe aleatoriamente os índices de endereço a serem usados. Em qualquer caso, ele faz o possível para não combinar saídas em vários endereços. &lt;prioridade&gt; é a prioridade da transação. Quanto maior a prioridade, maior será a taxa de transação. Os valores válidos em ordem de prioridade (do menor para o maior) são: sem importância, normal, elevado, prioridade. Se omitido, o valor padrão (veja o comando &quot;definir prioridade&quot;) será usado. &lt;tamanho_do_anel&gt; é o número de insumos a serem incluídos para não rastreabilidade. Vários pagamentos podem ser feitos de uma vez adicionando URI_2 ou &lt;address_2&gt; &lt;quantidade_2&gt; etc. (antes do ID de pagamento, se estiver incluído)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5946"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Senha necessária (%s) - use o comando de atualização</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10100"/>
        <source>Daemon requests payment at diff %llu, with %f credits/hash%s. Run start_mining_for_rpc to start mining to pay for RPC access, or use another daemon</source>
        <translation>Daemon solicita pagamento em diff %llu, com %f créditos/hash%s. Execute start_mining_for_rpc para iniciar a mineração e pagar pelo acesso RPC ou use outro daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10127"/>
        <source>Error mining to daemon: </source>
        <translation>Erro ao minerar para daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10133"/>
        <source>Failed to start mining for RPC payment</source>
        <translation>Falha ao iniciar a mineração para pagamento RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10145"/>
        <source>wallet</source>
        <translation>carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10147"/>
        <source> (no daemon)</source>
        <translation>(sem daemon)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10149"/>
        <source> (out of sync)</source>
        <translation>(fora de sincronia)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>(Untitled account)</source>
        <translation>(Conta sem título)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10213"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10231"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10256"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10279"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10479"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10489"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10512"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10540"/>
        <source>failed to parse index: </source>
        <translation>falha ao analisar o índice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10218"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10494"/>
        <source>specify an index between 0 and </source>
        <translation>especifique um índice entre 0 e </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10340"/>
        <source>, unlocked balance: </source>
        <translation>, saldo desbloqueado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10350"/>
        <source>Untagged accounts:</source>
        <translation>Contas não marcadas:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10356"/>
        <source>Tag %s is unregistered.</source>
        <translation>A tag %s não está registrada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10359"/>
        <source>Accounts with tag: </source>
        <translation>Contas com tag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10360"/>
        <source>Tag's description: </source>
        <translation>Descrição da etiqueta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Account</source>
        <translation>Conta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10416"/>
        <source>Primary address</source>
        <translation>Endereço principal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10416"/>
        <source>(used)</source>
        <translation>(usado)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10437"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10463"/>
        <source>(Untitled address)</source>
        <translation>(Endereço sem título)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10521"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt; já está fora do limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10526"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt; excede o limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10590"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10603"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Endereços integrados só podem ser criados para a conta 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10595"/>
        <source>Matching integrated address: </source>
        <translation>Endereço integrado correspondente: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10622"/>
        <source>Subaddress: </source>
        <translation>Subendereço: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10622"/>
        <source>Standard address: </source>
        <translation>Endereço padrão: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10627"/>
        <source>failed to parse payment ID or address</source>
        <translation>falha ao analisar o ID ou endereço de pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10664"/>
        <source>failed to parse index</source>
        <translation>falha ao analisar o índice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10672"/>
        <source>Address book is empty.</source>
        <translation>O catálogo de endereços está vazio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10678"/>
        <source>Index: </source>
        <translation>Índice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10684"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10814"/>
        <source>Address: </source>
        <translation>Endereço: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10685"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10813"/>
        <source>Description: </source>
        <translation>Descrição: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10770"/>
        <source>no description found</source>
        <translation>nenhuma descrição encontrada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10772"/>
        <source>description found: </source>
        <translation>descrição encontrada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6679"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10812"/>
        <source>Filename: </source>
        <translation>Nome do arquivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10817"/>
        <source>Watch only</source>
        <translation>Assistir apenas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10819"/>
        <source>%u/%u multisig%s</source>
        <translation>%u/%u multisig%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8634"/>
        <source>%s change to %s</source>
        <translation>%s mudou para %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9008"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9081"/>
        <source>This transaction has %u confirmations</source>
        <translation>Esta transação tem %u confirmações</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61"/>
        <source>Filename to save the certificate</source>
        <translation>Nome do arquivo para salvar o certificado</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62"/>
        <source>Filename to save the private key</source>
        <translation>Nome do arquivo para salvar a chave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63"/>
        <source>Passphrase with which to encrypt the private key</source>
        <translation>Senha com a qual criptografar a chave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64"/>
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>Arquivo contendo a senha com a qual criptografar a chave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65"/>
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>Solicitar uma senha para criptografar a chave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143"/>
        <source>Argument is needed: </source>
        <translation>Argumento é necessário: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153"/>
        <source>Failed to read passphrase</source>
        <translation>Falha ao ler a senha</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188"/>
        <source>Failed to create certificate</source>
        <translation>Falha ao criar certificado</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206"/>
        <source>Failed to write certificate: </source>
        <translation>Falha ao escrever o certificado: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226"/>
        <source>Failed to write private key: </source>
        <translation>Falha ao gravar a chave privada: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237"/>
        <source>Failed to save certificate file</source>
        <translation>Falha ao salvar o arquivo do certificado</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243"/>
        <source>Failed to save private key file</source>
        <translation>Falha ao salvar o arquivo de chave privada</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Nome do arquivo base (os sufixos -1, -2, etc. serão anexados conforme necessário)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>Forneça limite e participantes de uma só vez como M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>Quantos participantes compartilharão partes da carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Quantos assinantes são necessários para assinar uma transação válida</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>Create testnet multisig wallets</source>
        <translation>Crie carteiras multisig testnet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create stagenet multisig wallets</source>
        <translation>Crie carteiras multisig stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create an address file for new wallets</source>
        <translation>Crie um arquivo de endereço para novas carteiras</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Gerando carteiras multisig %u %u/%u</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="137"/>
        <source>Generated multisig wallets for address </source>
        <translation>Carteiras multisig geradas para endereço </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="141"/>
        <source>Error creating multisig wallets: </source>
        <translation>Erro ao criar carteiras multisig: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="166"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Este programa gera um conjunto de carteiras multisig - use este esquema mais simples apenas se todos os participantes confiarem uns nos outros</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="185"/>
        <source>Error: Can't specify more than one of --testnet and --stagenet</source>
        <translation>Erro: não é possível especificar mais de um entre --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="192"/>
        <source>Error: expected N/M, but got: </source>
        <translation>Erro: esperado N/M, mas obteve: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="200"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="209"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Erro: --scheme ou ambos --threshold e --participants podem ser fornecidos</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Erro: esperado N&gt; 1 e N &lt;= M, mas obtive N==%u e M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225"/>
        <source>Error: --filename-base is required</source>
        <translation>Erro: --filename-base é obrigatório</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72"/>
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>Use a instância PyBitmessage na URL &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73"/>
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>Especifique &lt;arg&gt; como nome de usuário: senha para API PyBitmessage</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911"/>
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>A configuração automática não pode prosseguir porque os dados de configuração automática de outros assinantes não estão completos</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936"/>
        <source>The signer config is not complete.</source>
        <translation>A configuração do assinante não está completa.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988"/>
        <source>Wallet can't go multisig because key sets from other signers are missing or not complete.</source>
        <translation>A carteira não pode ser multisig porque os conjuntos de chaves de outros signatários estão faltando ou não estão completos.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030"/>
        <source>Wallet can't start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>A Wallet não pode iniciar outra rodada de troca de chaves porque os conjuntos de chaves de outros signatários estão faltando ou não estão completos.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094"/>
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>A sincronização não foi realizada porque os dados de sincronização multisig de outros assinantes estão ausentes ou não foram concluídos.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208"/>
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>Há mensagens em espera, mas nada está pronto para ser processado em circunstâncias normais</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211"/>
        <source>
Use &quot;mms next sync&quot; if you want to force processing of the waiting sync data</source>
        <translation>
Use &quot;próxima sincronização mms&quot; se você quiser forçar o processamento dos dados de sincronização em espera</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215"/>
        <source>
Use &quot;mms note&quot; to display the waiting notes</source>
        <translation>
Use &quot;nota mms&quot; para exibir as notas de espera</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220"/>
        <source>There are no messages waiting to be processed.</source>
        <translation>Não há mensagens esperando para serem processadas.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441"/>
        <source>key set</source>
        <translation>conjunto de chaves</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443"/>
        <source>additional key set</source>
        <translation>conjunto de chaves adicional</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445"/>
        <source>multisig sync data</source>
        <translation>dados de sincronização multisig</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447"/>
        <source>partially signed tx</source>
        <translation>tx parcialmente assinado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449"/>
        <source>fully signed tx</source>
        <translation>tx totalmente assinado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451"/>
        <source>note</source>
        <translation>observação</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453"/>
        <source>signer config</source>
        <translation>configuração do assinante</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455"/>
        <source>auto-config data</source>
        <translation>dados de configuração automática</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457"/>
        <source>unknown message type</source>
        <translation>tipo de mensagem desconhecido</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466"/>
        <source>in</source>
        <translation>em</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468"/>
        <source>out</source>
        <translation>fora</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470"/>
        <source>unknown message direction</source>
        <translation>direção da mensagem desconhecida</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479"/>
        <source>ready to send</source>
        <translation>pronto para enviar</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481"/>
        <source>sent</source>
        <translation>enviado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483"/>
        <source>waiting</source>
        <translation>esperando</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485"/>
        <source>processed</source>
        <translation>processado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487"/>
        <source>cancelled</source>
        <translation>cancelado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489"/>
        <source>unknown message state</source>
        <translation>estado de mensagem desconhecido</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="177"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Gere uma nova carteira e salve-a em &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="178"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Gere uma nova carteira a partir do dispositivo e salve-a em &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="179"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>Gere carteira somente de entrada a partir da chave de visualização</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="180"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>Gere carteira determinística a partir da chave de gastos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="181"/>
        <source>Generate wallet from private keys</source>
        <translation>Gere carteira a partir de chaves privadas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="182"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Gere uma carteira mestra a partir de chaves de carteira multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184"/>
        <source>Language for mnemonic</source>
        <translation>Linguagem para mnemônico</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="185"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Especifique a semente Electrum para recuperação/criação de carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="186"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Recupere carteira usando semente mnemônica estilo Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="187"/>
        <source>alias for --restore-deterministic-wallet</source>
        <translation>alias para --restore-deterministic-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="188"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Recupere carteira multisig usando semente mnemônica estilo Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="189"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Gere visão não determinística e chaves de gastos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191"/>
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>Restaurar da altura estimada do blockchain na data especificada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192"/>
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>A transação recém-criada não será retransmitida para a rede Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="348"/>
        <source>failed to read wallet password</source>
        <translation>não foi possível ler a senha da carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355"/>
        <source>Enter a new password for the wallet</source>
        <translation>Digite uma nova senha para a carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355"/>
        <source>Wallet password</source>
        <translation>Senha da carteira</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="433"/>
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>argumento inválido: deve ser 0/1, verdadeiro/falso, s/n, sim/não</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="489"/>
        <source>DNSSEC validation passed</source>
        <translation>Validação DNSSEC aprovada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="493"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>AVISO: A validação DNSSEC não foi bem sucedida, este endereço pode não estar correto!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="496"/>
        <source>For URL: </source>
        <translation>Para URL: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="498"/>
        <source> Salvium Address = </source>
        <translation>Endereço Sálvio = </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="510"/>
        <source>you have cancelled the transfer request</source>
        <translation>você cancelou a solicitação de transferência</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="531"/>
        <source>failed to parse index: </source>
        <translation>falha ao analisar o índice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="544"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>formato inválido para lookahead de subendereço; deve ser &lt;maior&gt;:&lt;menor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="608"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nenhuma conexão com o daemon. Por favor, certifique-se de que o daemon esteja em execução.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="617"/>
        <source>RPC error: </source>
        <translation>Erro de RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="621"/>
        <source>failed to get random outputs to mix: </source>
        <translation>não foi possível misturar saídas aleatórias: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="628"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="636"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Não há dinheiro suficiente no saldo desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="646"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>Falha ao encontrar uma maneira de criar transações. Isso geralmente ocorre devido ao pó, que é tão pequeno que não consegue se pagar em taxas, ou à tentativa de enviar mais dinheiro do que o saldo desbloqueado, ou não deixando o suficiente para as taxas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="652"/>
        <source>not enough outputs for specified ring size</source>
        <translation>saídas insuficientes para o tamanho de anel especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655"/>
        <source>output amount</source>
        <translation>quantidade de saída</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655"/>
        <source>found outputs to use</source>
        <translation>encontrei saídas para usar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="657"/>
        <source>Please use sweep_unmixable.</source>
        <translation>Por favor use sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="661"/>
        <source>transaction was not constructed</source>
        <translation>transação não foi construída</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669"/>
        <source>Reason: </source>
        <translation>Razão: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="688"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>não conseguiu encontrar uma maneira adequada de dividir transações</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694"/>
        <source>unknown transfer error: </source>
        <translation>erro de transferência desconhecido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699"/>
        <source>Multisig error: </source>
        <translation>Erro multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="705"/>
        <source>internal error: </source>
        <translation>erro interno: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="710"/>
        <source>unexpected error: </source>
        <translation>erro inesperado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Ocorreu um erro, o que pode significar que o nó pode estar tentando fazer com que você tente criar uma transação novamente e identifique quais saídas você possui. Ou pode ser um erro de boa-fé. Pode ser prudente desconectar-se deste nó e não tentar enviar uma transação imediatamente. Alternativamente, conecte-se a outro nó para que o nó original não possa correlacionar informações.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>O arquivo %s provavelmente armazena chaves privadas da carteira! Use um nome de arquivo diferente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9295"/>
        <source> seconds</source>
        <translation>segundos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9297"/>
        <source> minutes</source>
        <translation>minutos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9299"/>
        <source> hours</source>
        <translation>horas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9301"/>
        <source> days</source>
        <translation>dias</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9303"/>
        <source> months</source>
        <translation>meses</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9304"/>
        <source>a long time</source>
        <translation>muito tempo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11447"/>
        <source>Unknown command: </source>
        <translation>Comando desconhecido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="190"/>
        <source>Restore from specific blockchain height</source>
        <translation>Restaurar da altura específica do blockchain</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193"/>
        <source>Create an address file for new wallets</source>
        <translation>Crie um arquivo de endereço para novas carteiras</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195"/>
        <source>Display English language names</source>
        <translation>Exibir nomes em inglês</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon está ocupado. Por favor, tente novamente mais tarde.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="374"/>
        <source>possibly lost connection to daemon</source>
        <translation>possivelmente perdeu conexão com o daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="391"/>
        <source>Error: </source>
        <translation>Erro: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="500"/>
        <source>Is this OK?</source>
        <translation>Está tudo bem?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="666"/>
        <source>transaction %s was rejected by daemon</source>
        <translation>a transação %s foi rejeitada pelo daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678"/>
        <source>destination amount is zero</source>
        <translation>o valor de destino é zero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="683"/>
        <source>transaction has no destination</source>
        <translation>transação não tem destino</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="729"/>
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>O arquivo %s já existe. Tem certeza de sobrescrevê-lo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11422"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>Esta é a carteira Salvium de linha de comando. Ele precisa se conectar a um daemon Salvium para funcionar corretamente.
AVISO: Não reutilize suas chaves Salvium em outro fork, A MENOS que este fork tenha mitigações de reutilização de chaves integradas. Fazer isso prejudicará sua privacidade.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11441"/>
        <source>Failed to initialize wallet</source>
        <translation>Falha ao inicializar a carteira</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="244"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Use a instância do daemon em &lt;host&gt;:&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="245"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Use a instância do daemon no host &lt;arg&gt; em vez de localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Use a instância do daemon na porta &lt;arg&gt; em vez de 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Para rede de teste. O Daemon também deve ser iniciado com o sinalizador --testnet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="280"/>
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>Arquivo contendo entropia extra para inicializar o PRNG (quaisquer dados, vise 256 bits de entropia para serem úteis, o que normalmente significa mais de 256 bits de dados)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281"/>
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>Permitir a comunicação com um daemon que usa uma versão diferente</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375"/>
        <source>can't specify daemon host or port more than once</source>
        <translation>não é possível especificar o host ou a porta do daemon mais de uma vez</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511"/>
        <source>can't specify more than one of --password and --password-file</source>
        <translation>não é possível especificar mais de um entre --password e --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="525"/>
        <source>the password file specified could not be read</source>
        <translation>o arquivo de senha especificado não pôde ser lido</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="551"/>
        <source>Failed to load file </source>
        <translation>Falha ao carregar o arquivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="249"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Senha da carteira (escape/citação conforme necessário)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="246"/>
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt;:]&lt;porta&gt; proxy de meias para usar em conexões daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="247"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Habilite comandos que dependem de um daemon confiável</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="248"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Desative comandos que dependem de um daemon confiável</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Especifique o nome de usuário[:senha] para o cliente RPC daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253"/>
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>Habilite SSL em conexões RPC do daemon: enabled|disabled|autodetect</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="257"/>
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>Lista de impressões digitais válidas de servidores RPC permitidos</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258"/>
        <source>Allow any SSL certificate from the daemon</source>
        <translation>Permitir qualquer certificado SSL do daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259"/>
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>Permitir certificados de cadeia de usuário (via --daemon-ssl-ca-certificates)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Para stagenet. O Daemon também deve ser iniciado com a flag --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263"/>
        <source>Set shared ring database path</source>
        <translation>Definir caminho do banco de dados de anel compartilhado</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="274"/>
        <source>Number of rounds for the key derivation function</source>
        <translation>Número de rodadas para a função de derivação de chave</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="275"/>
        <source>HW device to use</source>
        <translation>Dispositivo HW a ser usado</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="276"/>
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>Caminho de derivação da carteira do dispositivo HW (por exemplo, SLIP-10)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="278"/>
        <source>Do not use DNS</source>
        <translation>Não use DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="279"/>
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>Não conecte a um daemon, nem use DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="367"/>
        <source>Invalid argument for </source>
        <translation>Argumento inválido para </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428"/>
        <source>Enabling --</source>
        <translation>Habilitando -</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428"/>
        <source> requires --</source>
        <translation>requer -</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="429"/>
        <location filename="../src/wallet/wallet2.cpp" line="430"/>
        <source> or --</source>
        <translation>ou --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="430"/>
        <source> or use of a .onion/.i2p domain</source>
        <translation>ou uso de um domínio .onion/.i2p</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="448"/>
        <source>#NAME?</source>
        <translation>#NOME?</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="458"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Daemon é local, assumindo que seja confiável</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="468"/>
        <source>failed to initialize the wallet</source>
        <translation>falha ao inicializar a carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>nenhuma senha especificada; use --prompt-for-password para solicitar uma senha</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534"/>
        <source>Enter a new password for the wallet</source>
        <translation>Digite uma nova senha para a carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534"/>
        <source>Wallet password</source>
        <translation>Senha da carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="557"/>
        <source>Failed to parse JSON</source>
        <translation>Falha ao analisar JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Versão %u muito nova, só podemos grok até %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="580"/>
        <source>failed to parse view key secret key</source>
        <translation>falha ao analisar a chave secreta da chave de visualização</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="585"/>
        <source>view secret key may not be all zeroes</source>
        <translation>ver a chave secreta pode não ser toda zero</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587"/>
        <location filename="../src/wallet/wallet2.cpp" line="657"/>
        <location filename="../src/wallet/wallet2.cpp" line="702"/>
        <source>failed to verify view key secret key</source>
        <translation>falha ao verificar a chave secreta da chave de visualização</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="598"/>
        <source>failed to parse spend key secret key</source>
        <translation>falha ao analisar a chave secreta da chave de gastos</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="603"/>
        <source>spend secret key may not be all zeroes</source>
        <translation>gastar chave secreta pode não ser só zeros</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605"/>
        <location filename="../src/wallet/wallet2.cpp" line="667"/>
        <location filename="../src/wallet/wallet2.cpp" line="728"/>
        <source>failed to verify spend key secret key</source>
        <translation>falha ao verificar a chave secreta da chave de gastos</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="617"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Lista de palavras no estilo Electrum falhou na verificação</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="637"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Pelo menos uma lista de palavras no estilo Electrum, chave de visualização privada ou chave de gasto privada deve ser especificada</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="641"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Lista de palavras no estilo Electrum e chaves privadas especificadas</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="651"/>
        <source>invalid address</source>
        <translation>endereço inválido</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="660"/>
        <source>view key does not match standard address</source>
        <translation>a chave de visualização não corresponde ao endereço padrão</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="670"/>
        <source>spend key does not match standard address</source>
        <translation>a chave de gasto não corresponde ao endereço padrão</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="678"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Não é possível gerar carteiras obsoletas a partir de JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="714"/>
        <source>failed to parse address: </source>
        <translation>falha ao analisar o endereço: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="720"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>O endereço deve ser especificado para criar uma carteira somente para observação</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="737"/>
        <source>failed to generate new wallet: </source>
        <translation>falha ao gerar nova carteira: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2172"/>
        <source>Password is needed to compute key image for incoming SALs</source>
        <translation>A senha é necessária para calcular a imagem principal das SALs recebidas</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2173"/>
        <source>Invalid password: password is needed to compute key image for incoming SALs</source>
        <translation>Senha inválida: a senha é necessária para calcular a imagem chave para SALs recebidas</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3752"/>
        <source>reorg exceeds maximum allowed depth, use 'set max-reorg-depth N' to allow it, reorg depth: </source>
        <translation>reorg excede a profundidade máxima permitida, use 'set max-reorg-profundidade N' para permitir isso, profundidade de reorg: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5640"/>
        <location filename="../src/wallet/wallet2.cpp" line="6221"/>
        <location filename="../src/wallet/wallet2.cpp" line="6710"/>
        <source>Primary account</source>
        <translation>Conta principal</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9079"/>
        <source>Transaction sanity check failed</source>
        <translation>Falha na verificação de integridade da transação</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12642"/>
        <source>No funds received in this tx.</source>
        <translation>Nenhum dinheiro recebido neste tx.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13554"/>
        <source>failed to read file </source>
        <translation>não foi possível ler o arquivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Defina os tamanhos de lookahead do subendereço como &lt;major&gt;:&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254"/>
        <source>Path to a PEM format private key</source>
        <translation>Caminho para uma chave privada no formato PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255"/>
        <source>Path to a PEM format certificate</source>
        <translation>Caminho para um certificado no formato PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Caminho para o arquivo que contém certificado(s) de formato PEM concatenado(s) para substituir CA(s) do sistema.</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="219"/>
        <source>Failed to create directory </source>
        <translation>Falha ao criar diretório </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="221"/>
        <source>Failed to create directory %s: %s</source>
        <translation>Falha ao criar o diretório %s: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232"/>
        <source>Cannot specify --</source>
        <translation>Não é possível especificar --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232"/>
        <source> and --</source>
        <translation>e --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251"/>
        <source>Failed to create file </source>
        <translation>Falha ao criar arquivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251"/>
        <source>. Check permissions or remove file</source>
        <translation>. Verifique as permissões ou remova o arquivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="261"/>
        <source>Error writing to file </source>
        <translation>Erro ao gravar no arquivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="264"/>
        <source>RPC username/password is stored in file </source>
        <translation>O nome de usuário/senha RPC é armazenado no arquivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="665"/>
        <source>Tag %s is unregistered.</source>
        <translation>A tag %s não está registrada.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="693"/>
        <source>No matches for regex filter %s .</source>
        <translation>Nenhuma correspondência para o filtro regex %s .</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3586"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>A transação não é possível. Disponível apenas %s, valor da transação %s = %s + %s (taxa)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4594"/>
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>Não é possível especificar mais de um entre --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4613"/>
        <source>Can't specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Não é possível especificar mais de um entre --wallet-file e --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4619"/>
        <source>#NAME?</source>
        <translation>#NOME?</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4631"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>Deve especificar --wallet-file ou --generate-from-json ou --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4635"/>
        <source>Loading wallet...</source>
        <translation>Carregando carteira...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4683"/>
        <source>Initial refresh failed: </source>
        <translation>Falha na atualização inicial: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4688"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4720"/>
        <source>Saving wallet...</source>
        <translation>Salvando carteira...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4690"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4722"/>
        <source>Successfully saved</source>
        <translation>Salvo com sucesso</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4693"/>
        <source>Successfully loaded</source>
        <translation>Carregado com sucesso</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4697"/>
        <source>Wallet initialization failed: </source>
        <translation>Falha na inicialização da carteira: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4703"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>Falha ao inicializar o servidor RPC da carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4707"/>
        <source>Starting wallet RPC server</source>
        <translation>Iniciando servidor RPC de carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4714"/>
        <source>Failed to run wallet: </source>
        <translation>Falha ao executar a carteira: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4717"/>
        <source>Stopped wallet RPC server</source>
        <translation>Servidor RPC de carteira interrompido</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4726"/>
        <source>Failed to save wallet: </source>
        <translation>Falha ao salvar carteira: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4800"/>
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Esta é a carteira RPC Salvium. Ele precisa se conectar a um daemon Salvium para funcionar corretamente.</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="152"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11388"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4779"/>
        <source>Wallet options</source>
        <translation>Opções de carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>Gere carteira a partir de arquivo no formato JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Usar carteira &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81"/>
        <source>Set RPC client secret key for RPC payments</source>
        <translation>Definir chave secreta do cliente RPC para pagamentos RPC</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85"/>
        <source>Wallet password file</source>
        <translation>Arquivo de senha da carteira</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>Número máximo de threads a serem usados ​​para um trabalho paralelo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114"/>
        <source>Specify log file</source>
        <translation>Especifique o arquivo de log</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115"/>
        <source>Config file</source>
        <translation>Arquivo de configuração</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127"/>
        <source>General options</source>
        <translation>Opções gerais</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Esta é a carteira Salvium de linha de comando. Ele precisa se conectar a um daemon Salvium para funcionar corretamente.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176"/>
        <source>Can't find config file </source>
        <translation>Não é possível encontrar o arquivo de configuração </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220"/>
        <source>Logging to: </source>
        <translation>Registrando em: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222"/>
        <source>Logging to %s</source>
        <translation>Registrando em %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226"/>
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>AVISO: você pode não ter um limite de memória bloqueável alto o suficiente</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228"/>
        <source>see ulimit -l</source>
        <translation>veja ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153"/>
        <source>Usage:</source>
        <translation>Uso:</translation>
    </message>
</context>
</TS>
