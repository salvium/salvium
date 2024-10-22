<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53" />
        <source>Invalid destination address</source>
        <translation>Indirizzo di destinazione non valido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60" />
        <source>Payment ID supplied: this is obsolete</source>
        <translation>ID pagamento fornito: obsoleto</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92" />
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Tentativo di salvare la transazione su file, ma il file specificato esiste. Uscita per non rischiare di sovrascrivere. File:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99" />
        <source>Failed to write transaction(s) to file</source>
        <translation>Impossibile scrivere le transazioni nel file</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139" />
        <source>daemon is busy. Please try again later.</source>
        <translation>il demone è occupato. Riprova più tardi.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nessuna connessione al demone. Assicurati che il demone sia in esecuzione.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146" />
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>la transazione %s è stata rifiutata dal demone con stato: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151" />
        <source>. Reason: </source>
        <translation>. Motivo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153" />
        <source>Unknown exception: </source>
        <translation>Eccezione sconosciuta: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156" />
        <source>Unhandled exception</source>
        <translation>Eccezione non gestita</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="229" />
        <source>Couldn't multisig sign data: </source>
        <translation>Impossibile firmare i dati multifirma: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="251" />
        <source>Couldn't sign multisig transaction: </source>
        <translation>Impossibile firmare la transazione multisig: </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75" />
        <source>This is a watch only wallet</source>
        <translation>Questo è un portafoglio solo per orologio</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85" />
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92" />
        <source>Failed to sign transaction</source>
        <translation>Impossibile firmare la transazione</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168" />
        <source>Claimed change does not go to a paid address</source>
        <translation>Il resto richiesto non viene inviato a un indirizzo a pagamento</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174" />
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Il resto richiesto è maggiore del pagamento all&amp;#39;indirizzo di cambio</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184" />
        <source>Change goes to more than one address</source>
        <translation>Il resto va a più di un indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197" />
        <source>sending %s to %s</source>
        <translation>invio di %s a %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203" />
        <source>with no destinations</source>
        <translation>senza destinazioni</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209" />
        <source>%s change to %s</source>
        <translation>%s cambia in %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212" />
        <source>no change</source>
        <translation>nessun cambiamento</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214" />
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>Caricate %lu transazioni, per %s, commissione %s, %s, %s, con dimensione minima dell&amp;#39;anello %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="561" />
        <source>failed to parse address</source>
        <translation>impossibile analizzare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="572" />
        <source>failed to parse secret spend key</source>
        <translation>impossibile analizzare la chiave di spesa segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="587" />
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Nessuna chiave di visualizzazione né chiave di spesa fornita, annullato</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="595" />
        <source>failed to parse secret view key</source>
        <translation>impossibile analizzare la chiave di visualizzazione segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="604" />
        <source>failed to verify secret spend key</source>
        <translation>Impossibile verificare la chiave di spesa segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="608" />
        <source>spend key does not match address</source>
        <translation>la chiave di spesa non corrisponde all&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="614" />
        <source>failed to verify secret view key</source>
        <translation>Impossibile verificare la chiave di visualizzazione segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="618" />
        <source>view key does not match address</source>
        <translation>la chiave di visualizzazione non corrisponde all&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="641" />
        <location filename="../src/wallet/api/wallet.cpp" line="658" />
        <source>failed to generate new wallet: </source>
        <translation>Impossibile generare un nuovo portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="706" />
        <source>Electrum seed is empty</source>
        <translation>Il seme di elettro è vuoto</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="715" />
        <source>Electrum-style word list failed verification</source>
        <translation>La verifica dell&amp;#39;elenco di parole in stile Electrum non è riuscita</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1071" />
        <source>Failed to load unsigned transactions</source>
        <translation>Impossibile caricare le transazioni non firmate</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1094" />
        <source>Failed to load transaction from file</source>
        <translation>Impossibile caricare la transazione dal file</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1110" />
        <source>Wallet is view only</source>
        <translation>Il portafoglio è solo visualizzabile</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118" />
        <source>failed to save file </source>
        <translation>impossibile salvare il file </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1134" />
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Le immagini chiave possono essere importate solo con un demone attendibile</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1147" />
        <source>Failed to import key images: </source>
        <translation>Impossibile importare le immagini chiave: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1158" />
        <location filename="../src/wallet/api/wallet.cpp" line="1188" />
        <source>Not supported on HW wallets.</source>
        <translation>Non supportato sui portafogli HW.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169" />
        <source>Failed to save file: </source>
        <translation>Impossibile salvare il file: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1176" />
        <source>Error exporting outputs: </source>
        <translation>Errore durante l&amp;#39;esportazione degli output: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1197" />
        <source>Failed to read file: </source>
        <translation>Impossibile leggere il file: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1209" />
        <source>Failed to import outputs: </source>
        <translation>Impossibile importare gli output: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1220" />
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>Impossibile eseguire la scansione delle transazioni: nessun ID di transazione fornito.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231" />
        <source>Invalid txid specified: </source>
        <translation>Txid non valido specificato: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1249" />
        <source>Failed to scan transaction: </source>
        <translation>Impossibile eseguire la scansione della transazione: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1281" />
        <source>Failed to get subaddress label: </source>
        <translation>Impossibile ottenere l&amp;#39;etichetta del sottoindirizzo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1294" />
        <source>Failed to set subaddress label: </source>
        <translation>Impossibile impostare l&amp;#39;etichetta del sottoindirizzo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1311" />
        <source>Failed to get multisig info: </source>
        <translation>Impossibile ottenere informazioni multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1328" />
        <source>Failed to make multisig: </source>
        <translation>Impossibile creare multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1342" />
        <source>Failed to exchange multisig keys: </source>
        <translation>Impossibile scambiare le chiavi multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1358" />
        <source>Failed to export multisig images: </source>
        <translation>Impossibile esportare le immagini multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1376" />
        <source>Failed to parse imported multisig images</source>
        <translation>Impossibile analizzare le immagini multisig importate</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1386" />
        <source>Failed to import multisig images: </source>
        <translation>Impossibile importare le immagini multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1400" />
        <source>Failed to check for partial multisig key images: </source>
        <translation>Impossibile verificare le immagini chiave multisig parziali: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1428" />
        <source>Failed to restore multisig transaction: </source>
        <translation>Impossibile ripristinare la transazione multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1477" />
        <source>Sending all requires one destination address</source>
        <translation>L&amp;#39;invio di tutto richiede un indirizzo di destinazione</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1481" />
        <source>Destinations and amounts are unequal</source>
        <translation>Le destinazioni e gli importi sono disuguali</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489" />
        <source>payment id has invalid format, expected 64 character hex string: </source>
        <translation>l&amp;#39;ID pagamento ha un formato non valido, prevista una stringa esadecimale di 64 caratteri: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1497" />
        <source>Invalid destination address</source>
        <translation>Indirizzo di destinazione non valido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1503" />
        <source>a single transaction cannot use more than one payment id</source>
        <translation>una singola transazione non può utilizzare più di un ID di pagamento</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1531" />
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>non è riuscito a impostare l&amp;#39;ID di pagamento, sebbene sia stato decodificato correttamente</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1556" />
        <location filename="../src/wallet/api/wallet.cpp" line="1647" />
        <source>daemon is busy. Please try again later.</source>
        <translation>il demone è occupato. Riprova più tardi.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1558" />
        <location filename="../src/wallet/api/wallet.cpp" line="1649" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nessuna connessione al demone. Assicurati che il demone sia in esecuzione.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1560" />
        <location filename="../src/wallet/api/wallet.cpp" line="1651" />
        <source>RPC error: </source>
        <translation>Errore RPC: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1562" />
        <source>failed to get outputs to mix: %s</source>
        <translation>Impossibile ottenere output da mixare: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1566" />
        <location filename="../src/wallet/api/wallet.cpp" line="1658" />
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>non abbastanza soldi da trasferire, disponibile solo %s, importo inviato %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1573" />
        <location filename="../src/wallet/api/wallet.cpp" line="1666" />
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>non abbastanza denaro da trasferire, saldo complessivo solo %s, importo inviato %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1580" />
        <location filename="../src/wallet/api/wallet.cpp" line="1674" />
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>non abbastanza soldi da trasferire, disponibile solo %s, importo della transazione %s = %s + %s (commissione)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1588" />
        <location filename="../src/wallet/api/wallet.cpp" line="1682" />
        <source>not enough outputs for specified ring size</source>
        <translation>non ci sono abbastanza uscite per la dimensione dell&amp;#39;anello specificata</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590" />
        <location filename="../src/wallet/api/wallet.cpp" line="1684" />
        <source>output amount</source>
        <translation>importo in uscita</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590" />
        <location filename="../src/wallet/api/wallet.cpp" line="1684" />
        <source>found outputs to use</source>
        <translation>trovati output da utilizzare</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1592" />
        <source>Please sweep unmixable outputs.</source>
        <translation>Si prega di spazzare gli output non miscelabili.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1595" />
        <location filename="../src/wallet/api/wallet.cpp" line="1688" />
        <source>transaction was not constructed</source>
        <translation>la transazione non è stata realizzata</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1598" />
        <location filename="../src/wallet/api/wallet.cpp" line="1691" />
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>la transazione %s è stata rifiutata dal demone con stato: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1603" />
        <source>destination amount is zero</source>
        <translation>l&amp;#39;importo di destinazione è zero</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1605" />
        <source>transaction has no destination</source>
        <translation>la transazione non ha destinazione</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1607" />
        <location filename="../src/wallet/api/wallet.cpp" line="1698" />
        <source>failed to find a suitable way to split transactions</source>
        <translation>non è riuscito a trovare un modo adatto per dividere le transazioni</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1609" />
        <location filename="../src/wallet/api/wallet.cpp" line="1700" />
        <source>unknown transfer error: </source>
        <translation>errore di trasferimento sconosciuto: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1611" />
        <location filename="../src/wallet/api/wallet.cpp" line="1702" />
        <source>internal error: </source>
        <translation>errore interno: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1613" />
        <location filename="../src/wallet/api/wallet.cpp" line="1704" />
        <source>unexpected error: </source>
        <translation>errore imprevisto: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1615" />
        <location filename="../src/wallet/api/wallet.cpp" line="1706" />
        <source>unknown error</source>
        <translation>errore sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653" />
        <source>failed to get outputs to mix</source>
        <translation>non è riuscito a ottenere output da mixare</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1696" />
        <source>one of destinations is zero</source>
        <translation>una delle destinazioni è zero</translation>
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
        <translation>Impossibile analizzare txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1836" />
        <source>no tx keys found for this txid</source>
        <translation>nessuna chiave tx trovata per questo txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1860" />
        <location filename="../src/wallet/api/wallet.cpp" line="1869" />
        <source>Failed to parse tx key</source>
        <translation>Impossibile analizzare la chiave tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1878" />
        <location filename="../src/wallet/api/wallet.cpp" line="1907" />
        <location filename="../src/wallet/api/wallet.cpp" line="1935" />
        <location filename="../src/wallet/api/wallet.cpp" line="2016" />
        <location filename="../src/wallet/api/wallet.cpp" line="2047" />
        <source>Failed to parse address</source>
        <translation>Impossibile analizzare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2021" />
        <source>Address must not be a subaddress</source>
        <translation>L&amp;#39;indirizzo non deve essere un sottoindirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2052" />
        <source>Address doesn't belong to the wallet</source>
        <translation>L&amp;#39;indirizzo non appartiene al portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2076" />
        <source>The wallet must be in multisig ready state</source>
        <translation>Il portafoglio deve essere in stato multisig ready</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2098" />
        <source>Given string is not a key</source>
        <translation>La stringa data non è una chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2361" />
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>La scansione ripetuta può essere utilizzata solo con un demone attendibile</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2419" />
        <source>Invalid output: </source>
        <translation>Output non valido: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2426" />
        <source>Failed to mark outputs as spent</source>
        <translation>Impossibile contrassegnare gli output come spesi</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2437" />
        <location filename="../src/wallet/api/wallet.cpp" line="2459" />
        <source>Failed to parse output amount</source>
        <translation>Impossibile analizzare l&amp;#39;importo in output</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2442" />
        <location filename="../src/wallet/api/wallet.cpp" line="2464" />
        <source>Failed to parse output offset</source>
        <translation>Impossibile analizzare l&amp;#39;offset di output</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2448" />
        <source>Failed to mark output as spent</source>
        <translation>Impossibile contrassegnare l&amp;#39;output come esaurito</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2470" />
        <source>Failed to mark output as unspent</source>
        <translation>Impossibile contrassegnare l&amp;#39;output come non speso</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2481" />
        <location filename="../src/wallet/api/wallet.cpp" line="2520" />
        <source>Failed to parse key image</source>
        <translation>Impossibile analizzare l&amp;#39;immagine chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2487" />
        <source>Failed to get ring</source>
        <translation>Impossibile ottenere l&amp;#39;anello</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2505" />
        <source>Failed to get rings</source>
        <translation>Impossibile ottenere gli anelli</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2526" />
        <source>Failed to set ring</source>
        <translation>Impossibile impostare l&amp;#39;anello</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316" />
        <source>Failed to parse address</source>
        <translation>Impossibile analizzare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323" />
        <source>Failed to parse key</source>
        <translation>Impossibile analizzare la chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="331" />
        <source>failed to verify key</source>
        <translation>Impossibile verificare la chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="341" />
        <source>key does not match address</source>
        <translation>la chiave non corrisponde all&amp;#39;indirizzo</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54" />
        <source>yes</source>
        <translation>SÌ</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68" />
        <source>no</source>
        <translation>NO</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92" />
        <source>Specify IP to bind RPC server</source>
        <translation>Specificare l&amp;#39;IP per associare il server RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93" />
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>Specificare l&amp;#39;indirizzo IPv6 per associare il server RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94" />
        <source>Specify IP to bind restricted RPC server</source>
        <translation>Specificare l&amp;#39;IP per associare il server RPC con restrizioni</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95" />
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>Specificare l&amp;#39;indirizzo IPv6 per associare il server RPC con restrizioni</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96" />
        <source>Allow IPv6 for RPC</source>
        <translation>Consenti IPv6 per RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97" />
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>Ignora il binding IPv4 non riuscito per RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98" />
        <source>Specify username[:password] required for RPC server</source>
        <translation>Specificare username[:password] richiesto per il server RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99" />
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Conferma che il valore rpc-bind-ip NON è un IP loopback (locale)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100" />
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Specificare un elenco di origini separate da virgole per consentire la condivisione di risorse tra origini</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101" />
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>Abilita SSL sulle connessioni RPC: abilitato|disabilitato|rilevamento automatico</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102" />
        <source>Path to a PEM format private key</source>
        <translation>Percorso verso una chiave privata in formato PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103" />
        <source>Path to a PEM format certificate</source>
        <translation>Percorso verso un certificato in formato PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104" />
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Percorso al file contenente i certificati in formato PEM concatenati per sostituire le CA di sistema.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105" />
        <source>List of certificate fingerprints to allow</source>
        <translation>Elenco delle impronte digitali dei certificati da consentire</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106" />
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>Consenti all&amp;#39;utente (tramite --rpc-ssl-certificates) di concatenare i certificati</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107" />
        <source>Allow any peer certificate</source>
        <translation>Consenti qualsiasi certificato peer</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108" />
        <source>Do not ban hosts on RPC errors</source>
        <translation>Non bannare gli host in caso di errori RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155" />
        <location filename="../src/rpc/rpc_args.cpp" line="183" />
        <location filename="../src/rpc/rpc_args.cpp" line="204" />
        <location filename="../src/rpc/rpc_args.cpp" line="221" />
        <source>Invalid IP address given for --</source>
        <translation>Indirizzo IP non valido fornito per --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163" />
        <location filename="../src/rpc/rpc_args.cpp" line="191" />
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> consente connessioni esterne in entrata non crittografate. Considerare invece il tunnel SSH o il proxy SSL. Sostituisci con --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242" />
        <source>Username specified with --</source>
        <translation>Nome utente specificato con --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242" />
        <source> cannot be empty</source>
        <translation> non può essere vuoto</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4933" />
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Il demone usa una versione principale RPC diversa (%u) rispetto al portafoglio (%u): %s. Aggiornane una o usa --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7068" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7622" />
        <source>Spending from address index %d
</source>
        <translation>Spesa dall&amp;#39;indice indirizzo %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7083" />
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>La tua transazione deve essere divisa in %llu transazioni. Ciò comporterà l&amp;#39;applicazione di una commissione di transazione a ciascuna transazione, per una commissione totale di %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7089" />
        <source>The transaction fee is %s</source>
        <translation>La commissione di transazione è %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7092" />
        <source>, of which %s is dust from change</source>
        <translation>, di cui %s è polvere derivante dal cambiamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093" />
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Un totale di %s di polvere modificata verrà inviato all&amp;#39;indirizzo della polvere</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7376" />
        <source>Not enough money in unlocked balance</source>
        <translation>Non ci sono abbastanza soldi nel saldo sbloccato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421" />
        <source>No address given</source>
        <translation>Nessun indirizzo fornito</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7487" />
        <source>missing lockedblocks parameter</source>
        <translation>parametro lockedblocks mancante</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497" />
        <source>bad locked_blocks parameter</source>
        <translation>parametro locked_blocks non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7793" />
        <source>failed to parse Payment ID</source>
        <translation>impossibile analizzare l&amp;#39;ID pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2273" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7816" />
        <source>failed to parse key image</source>
        <translation>impossibile analizzare l&amp;#39;immagine chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7854" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8084" />
        <source>No outputs found</source>
        <translation>Nessun output trovato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8089" />
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Vengono create più transazioni, cosa che non dovrebbe accadere</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7864" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8094" />
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>La transazione utilizza input multipli o nulli, cosa che non dovrebbe accadere</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8175" />
        <source>Money successfully sent, transaction: </source>
        <translation>Denaro inviato con successo, transazione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989" />
        <source>missing threshold amount</source>
        <translation>importo soglia mancante</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7995" />
        <source>invalid amount threshold</source>
        <translation>soglia importo non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8593" />
        <source>Claimed change does not go to a paid address</source>
        <translation>Il resto richiesto non viene inviato a un indirizzo a pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8598" />
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Il resto richiesto è maggiore del pagamento all&amp;#39;indirizzo di cambio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8607" />
        <source>Change goes to more than one address</source>
        <translation>Il resto va a più di un indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8629" />
        <source>sending %s to %s</source>
        <translation>invio di %s a %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8639" />
        <source> dummy output(s)</source>
        <translation> output fittizio(i)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8642" />
        <source>with no destinations</source>
        <translation>senza destinazioni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8651" />
        <source>no change</source>
        <translation>nessun cambiamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5750" />
        <source>Daemon is local, assuming trusted</source>
        <translation>Il demone è locale, presupponendo attendibilità</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5413" />
        <source>Password for new watch-only wallet</source>
        <translation>Password per il nuovo portafoglio solo per orologio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413" />
        <source>false</source>
        <translation>falso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="775" />
        <source>Commands: </source>
        <translation>Comandi: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="789" />
        <source>Unknown command: </source>
        <translation>Comando sconosciuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796" />
        <source>Command usage: </source>
        <translation>Utilizzo del comando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="799" />
        <source>Command description: </source>
        <translation>Descrizione del comando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="825" />
        <source>wallet is watch-only and has no spend key</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non ha una chiave di spesa</translation>
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
        <translation>comando non supportato dal portafoglio HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="933" />
        <source>wallet is watch-only and has no seed</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non ha seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="865" />
        <source>wallet is multisig but not yet finalized</source>
        <translation>il portafoglio è multisig ma non ancora finalizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="874" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="943" />
        <source>wallet is non-deterministic and has no seed</source>
        <translation>il portafoglio non è deterministico e non ha seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898" />
        <source>Failed to retrieve seed</source>
        <translation>Impossibile recuperare il seme</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928" />
        <source>wallet is multisig and has no seed</source>
        <translation>il portafoglio è multisig e non ha seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="953" />
        <source>Incorrect password</source>
        <translation>Password errata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1153" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1236" />
        <source>Your original password was incorrect.</source>
        <translation>La password originale era errata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="990" />
        <source>Error with wallet rewrite: </source>
        <translation>Errore con la riscrittura del portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10608" />
        <source>Random payment ID: </source>
        <translation>ID pagamento casuale: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1011" />
        <source>Current fee is %s %s per %s</source>
        <translation>La tariffa attuale è %s %s per %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603" />
        <source>Payment required, see the 'rpc_payment_info' command</source>
        <translation>Pagamento richiesto, vedere il comando &amp;#39;rpc_payment_info&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027" />
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Errore: impossibile stimare la dimensione dell&amp;#39;array del backlog: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1032" />
        <source>Error: bad estimated backlog array size</source>
        <translation>Errore: dimensione array backlog stimata errata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1044" />
        <source> (current)</source>
        <translation> (attuale)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1047" />
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u blocco (%u minuti) arretrato con priorità %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049" />
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u a %u blocca (%u a %u minuti) arretrati con priorità %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1052" />
        <source>No backlog at priority </source>
        <translation>Nessun arretrato in priorità </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1074" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1121" />
        <source>This wallet is already multisig</source>
        <translation>Questo portafoglio è già multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1079" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1126" />
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non può essere reso multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1132" />
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Questo portafoglio è già stato utilizzato in precedenza, utilizza un nuovo portafoglio per creare un portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1093" />
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>Invia queste informazioni multisig a tutti gli altri partecipanti, quindi usa make_multisig&lt;threshold&gt;&lt;info1&gt; [&lt;info2&gt; ...] con le informazioni multisig degli altri</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1094" />
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet's participants </source>
        <translation>Ciò include la chiave di visualizzazione PRIVATA, quindi deve essere divulgata solo ai partecipanti di quel portafoglio multisig </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1146" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890" />
        <source>Invalid threshold</source>
        <translation>Soglia non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1168" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1247" />
        <source>Another step is needed</source>
        <translation>È necessario un altro passo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180" />
        <source>Error creating multisig: </source>
        <translation>Errore durante la creazione di multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1187" />
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Errore durante la creazione di multisig: il nuovo portafoglio non è multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190" />
        <source> multisig address: </source>
        <translation> indirizzo multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1224" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1289" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357" />
        <source>This wallet is not multisig</source>
        <translation>Questo portafoglio non è multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229" />
        <source>This wallet is already finalized</source>
        <translation>Questo portafoglio è già finalizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259" />
        <source>Multisig address: </source>
        <translation>Indirizzo multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1294" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1362" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1458" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1576" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1658" />
        <source>This multisig wallet is not yet finalized</source>
        <translation>Questo portafoglio multisig non è ancora stato finalizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10983" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11140" />
        <source>failed to save file </source>
        <translation>impossibile salvare il file </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330" />
        <source>Error exporting multisig info: </source>
        <translation>Errore durante l&amp;#39;esportazione delle informazioni multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1334" />
        <source>Multisig info exported to </source>
        <translation>Informazioni multisig esportate in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10896" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10922" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173" />
        <source>failed to read file </source>
        <translation>impossibile leggere il file </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1406" />
        <source>Failed to import multisig info: </source>
        <translation>Impossibile importare le informazioni multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1417" />
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Impossibile aggiornare lo stato di spesa dopo l&amp;#39;importazione delle informazioni multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423" />
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run "rescan_spent"</source>
        <translation>Daemon non attendibile, lo stato di spent potrebbe essere errato. Utilizza un daemon attendibile ed esegui &amp;quot;rescan_spent&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1571" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653" />
        <source>This is not a multisig wallet</source>
        <translation>Questo non è un portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1503" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1512" />
        <source>Failed to sign multisig transaction</source>
        <translation>Impossibile firmare la transazione multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1519" />
        <source>Multisig error: </source>
        <translation>Errore multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524" />
        <source>Failed to sign multisig transaction: </source>
        <translation>Impossibile firmare la transazione multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1533" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1546" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8739" />
        <source>Transaction successfully signed to file </source>
        <translation>Transazione firmata con successo nel file </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547" />
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Può essere inoltrato alla rete con submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1608" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1679" />
        <source>Failed to load multisig transaction from file</source>
        <translation>Impossibile caricare la transazione multisig dal file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1684" />
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Transazione multisig firmata solo da %u firmatari, necessita di %u firme in più</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1623" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11383" />
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transazione inviata con successo, transazione </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11384" />
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>È possibile verificarne lo stato utilizzando il comando `show_transfers`.</translation>
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
        <translation>errore sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1700" />
        <source>Failed to export multisig transaction to file </source>
        <translation>Impossibile esportare la transazione multisig nel file </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1704" />
        <source>Saved exported multisig transaction file(s): </source>
        <translation>File di transazione multisig esportati e salvati: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1709" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2050" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6114" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6451" />
        <source>unexpected error: </source>
        <translation>errore imprevisto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1732" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1889" />
        <source>Invalid key image</source>
        <translation>Immagine chiave non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1738" />
        <source>Invalid txid</source>
        <translation>txid non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1765" />
        <source>Failed to get key image ring: </source>
        <translation>Impossibile ottenere l&amp;#39;anello dell&amp;#39;immagine chiave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780" />
        <source>File doesn't exist</source>
        <translation>Il file non esiste</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802" />
        <source>Invalid ring specification: </source>
        <translation>Specifica dell&amp;#39;anello non valida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1810" />
        <source>Invalid key image: </source>
        <translation>Immagine chiave non valida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1815" />
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>Tipo di suoneria non valido, relativo previsto o assoluto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1821" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1833" />
        <source>Error reading line: </source>
        <translation>Errore nella lettura della riga: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844" />
        <source>Invalid ring: </source>
        <translation>Anello non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1853" />
        <source>Invalid relative ring: </source>
        <translation>Anello relativo non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1865" />
        <source>Invalid absolute ring: </source>
        <translation>Anello assoluto non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874" />
        <source>Failed to set ring for key image: </source>
        <translation>Impossibile impostare l&amp;#39;anello per l&amp;#39;immagine chiave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874" />
        <source>Continuing.</source>
        <translation>Continua.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1904" />
        <source>Missing absolute or relative keyword</source>
        <translation>Parola chiave assoluta o relativa mancante</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1921" />
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>indice non valido: deve essere un intero senza segno strettamente positivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929" />
        <source>invalid index: indices wrap</source>
        <translation>indice non valido: gli indici vengono a capo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939" />
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>indice non valido: gli indici devono essere in ordine rigorosamente crescente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946" />
        <source>failed to set ring</source>
        <translation>non è riuscito a impostare l&amp;#39;anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1969" />
        <source>Invalid key image or txid</source>
        <translation>Immagine chiave o txid non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1978" />
        <source>failed to unset ring</source>
        <translation>Impossibile annullare l&amp;#39;impostazione dell&amp;#39;anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2001" />
        <source>RPC client ID: </source>
        <translation>ID client RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002" />
        <source>RPC client secret key: </source>
        <translation>Chiave segreta del client RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2005" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434" />
        <source>Failed to query daemon</source>
        <translation>Impossibile interrogare il demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2013" />
        <source>Using daemon: </source>
        <translation>Utilizzo del demone: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014" />
        <source>Payments required for node use, current credits: </source>
        <translation>Pagamenti richiesti per l&amp;#39;utilizzo del nodo, crediti correnti: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2015" />
        <source>Credits target: </source>
        <translation>Crediti target: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2018" />
        <source>Credits spent this session: </source>
        <translation>Crediti spesi in questa sessione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2020" />
        <source>Credit discrepancy this session: </source>
        <translation>Discrepanza di credito in questa sessione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <source>Difficulty: </source>
        <translation>Difficoltà: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <source>credits per hash found, </source>
        <translation>crediti per hash trovato, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>credits/hash</source>
        <translation>crediti/hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2030" />
        <source>Mining for payment at %.1f H/s</source>
        <translation>Estrazione per pagamento a %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2035" />
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>Tempo stimato fino all&amp;#39;estrazione del target di crediti %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039" />
        <source>Mining for payment</source>
        <translation>Estrazione per pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2042" />
        <source>Not mining</source>
        <translation>Non minerario</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2045" />
        <source>No payment needed for node use</source>
        <translation>Nessun pagamento richiesto per l&amp;#39;utilizzo del nodo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118" />
        <source>Bad argument: </source>
        <translation>Argomentazione sbagliata: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118" />
        <source>should be "add"</source>
        <translation>dovrebbe essere &amp;quot;aggiungere&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2127" />
        <source>Failed to open file</source>
        <translation>Impossibile aprire il file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211" />
        <source>Failed to save known rings: </source>
        <translation>Impossibile salvare gli anelli noti: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220" />
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>utilizzo: %s&lt;key_image&gt; |&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2265" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2277" />
        <source>Frozen: </source>
        <translation>Congelato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279" />
        <source>Not frozen: </source>
        <translation>Non congelato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293" />
        <source> bytes sent</source>
        <translation> byte inviati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294" />
        <source> bytes received</source>
        <translation> byte ricevuti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2306" />
        <source>No known public nodes</source>
        <translation>Nessun nodo pubblico noto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>address</source>
        <translation>indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>last_seen</source>
        <translation>ultimo_visto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2324" />
        <source>never</source>
        <translation>Mai</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2332" />
        <source>Error retrieving public node list: </source>
        <translation>Errore durante il recupero dell&amp;#39;elenco dei nodi pubblici: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2342" />
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium, come Bitcoin, è una criptovaluta. Cioè, è denaro digitale.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2346" />
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>Salvium protegge la tua privacy sulla blockchain e, mentre Salvium si impegna a migliorare costantemente,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2347" />
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>Nessuna tecnologia per la privacy può essere perfetta al 100%, Salvium compresa.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2348" />
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>Salvium non può proteggerti dai malware e potrebbe non essere efficace come speriamo contro avversari potenti.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2349" />
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>In futuro potrebbero essere scoperti dei difetti in Salvium e potrebbero essere sviluppati degli attacchi per sbirciare sotto alcuni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2350" />
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>degli strati di privacy forniti da Salvium. Siate prudenti e praticate la difesa in profondità.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439" />
        <source>Daemon does not require payment for RPC access</source>
        <translation>Il demone non richiede il pagamento per l&amp;#39;accesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447" />
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>Avvio del mining per l&amp;#39;accesso RPC: diff %llu, %f crediti/hash%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448" />
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>Esegui stop_mining_for_rpc per interrompere</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550" />
        <source>wallet is watch-only and cannot transfer</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non può essere trasferito</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7117" />
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>ATTENZIONE: questa è una misura di anello non predefinita, che potrebbe danneggiare la tua privacy. Si consiglia di utilizzare quella predefinita.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2595" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2611" />
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>la priorità deve essere 0, 1, 2, 3 o 4, oppure una delle seguenti: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2616" />
        <source>could not change default priority</source>
        <translation>non è stato possibile modificare la priorità predefinita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2702" />
        <source>invalid unit</source>
        <translation>unità non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2738" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800" />
        <source>invalid count: must be an unsigned integer</source>
        <translation>conteggio non valido: deve essere un intero senza segno</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2720" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756" />
        <source>invalid value</source>
        <translation>valore non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2834" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2952" />
        <source>Invalid height</source>
        <translation>Altezza non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2907" />
        <source>Invalid target</source>
        <translation>Destinazione non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2983" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3002" />
        <source>Invalid amount</source>
        <translation>Importo non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3072" />
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>argomento non valido: deve essere 1/sì o 0/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3340" />
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Avvia l&amp;#39;attività di mining nel demone (bg_mining e ignore_battery sono valori booleani opzionali).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3343" />
        <source>Stop mining in the daemon.</source>
        <translation>Interrompere l&amp;#39;attività di mining nel demone.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350" />
        <source>Save the current blockchain data.</source>
        <translation>Salva i dati correnti della blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353" />
        <source>Synchronize the transactions and balance.</source>
        <translation>Sincronizza le transazioni e il saldo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3357" />
        <source>Show the wallet's balance of the currently selected account.</source>
        <translation>Mostra il saldo del portafoglio dell&amp;#39;account attualmente selezionato.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3361" />
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent("T"|"F"), "frozen"|"locked"|"unlocked", RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation>Mostra i trasferimenti in entrata, tutti o filtrati per disponibilità e indice indirizzo. Formato di output: Importo, Speso(&amp;quot;T&amp;quot;|&amp;quot;F&amp;quot;), &amp;quot;congelato&amp;quot;|&amp;quot;bloccato&amp;quot;|&amp;quot;sbloccato&amp;quot;, RingCT, Indice globale, Hash transazione, Indice indirizzo, [Chiave pubblica, Immagine chiave] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3367" />
        <source>Show the payments for the given payment IDs.</source>
        <translation>Mostra i pagamenti per gli ID pagamento specificati.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3370" />
        <source>Show the blockchain height.</source>
        <translation>Mostra l&amp;#39;altezza della blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384" />
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Invia tutti gli output non miscelabili a te stesso con ring_size 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394" />
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Invia tutti gli output sbloccati al di sotto della soglia a un indirizzo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3398" />
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Invia un singolo output dell&amp;#39;immagine chiave specificata a un indirizzo senza modifiche.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3434" />
        <source>Sign a transaction from a file. If the parameter "export_raw" is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default "unsigned_salvium_tx" will be used.</source>
        <translation>Firma una transazione da un file. Se viene specificato il parametro &amp;quot;export_raw&amp;quot;, vengono esportati i dati esadecimali raw della transazione adatti al daemon RPC /sendrawtransaction. Utilizza il parametro&lt;filename&gt; per specificare il file da cui leggere. Se non specificato, verrà utilizzato il valore predefinito &amp;quot;unsigned_salvium_tx&amp;quot;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438" />
        <source>Submit a signed transaction from a file.</source>
        <translation>Invia una transazione firmata da un file.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3442" />
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Modifica i dettagli del registro corrente (il livello deve essere &amp;lt;0-4&amp;gt;).</translation>
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
        <translation>Se non vengono specificati argomenti, il portafoglio mostra tutti gli account esistenti insieme ai loro saldi. Se viene specificato l&amp;#39;argomento &amp;quot;new&amp;quot;, il portafoglio crea un nuovo account con la sua etichetta inizializzata dal testo dell&amp;#39;etichetta fornito (che può essere vuoto). Se viene specificato l&amp;#39;argomento &amp;quot;switch&amp;quot;, il portafoglio passa all&amp;#39;account specificato da&lt;index&gt; . Se viene specificato l&amp;#39;argomento &amp;quot;label&amp;quot;, il portafoglio imposta l&amp;#39;etichetta dell&amp;#39;account specificato da&lt;index&gt; al testo dell&amp;#39;etichetta fornito. Se viene specificato l&amp;#39;argomento &amp;quot;tag&amp;quot;, un tag&lt;tag_name&gt; è assegnato agli account specificati&lt;account_index_1&gt; ,&lt;account_index_2&gt; , .... Se viene specificato l&amp;#39;argomento &amp;quot;untag&amp;quot;, i tag assegnati agli account specificati&lt;account_index_1&gt; ,&lt;account_index_2&gt; ..., vengono rimossi. Se viene specificato l&amp;#39;argomento &amp;quot;tag_description&amp;quot;, il tag&lt;tag_name&gt; viene assegnato un testo arbitrario&lt;description&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3460" />
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Codifica un ID di pagamento in un indirizzo integrato per l&amp;#39;indirizzo pubblico del portafoglio corrente (nessun argomento utilizza un ID di pagamento casuale) o decodifica un indirizzo integrato in un indirizzo standard e un ID di pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3464" />
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Stampa tutte le voci presenti nella rubrica, aggiungendo/eliminando facoltativamente una voce.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3467" />
        <source>Save the wallet data.</source>
        <translation>Salva i dati del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470" />
        <source>Save a watch-only keys file.</source>
        <translation>Salva un file di chiavi di sola sorveglianza.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3473" />
        <source>Display the private view key.</source>
        <translation>Visualizza la chiave di visualizzazione privata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3476" />
        <source>Display the private spend key.</source>
        <translation>Visualizza la chiave di spesa privata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479" />
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Mostra il seme mnemonico in stile Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561" />
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Visualizza il seed mnemonico criptato in stile Electrum.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564" />
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Eseguire nuovamente la scansione della blockchain per individuare gli output spesi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568" />
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Ottieni la chiave di transazione (r) per un dato&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572" />
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Imposta la chiave di transazione (r) per un dato&lt;txid&gt; nel caso in cui la transazione sia stata effettuata tramite un altro dispositivo o un portafoglio di terze parti.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576" />
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Controlla l&amp;#39;importo che andrà a&lt;address&gt; In&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3580" />
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet's address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Genera una firma che attesti i fondi inviati a&lt;address&gt; In&lt;txid&gt; , facoltativamente con una stringa di sfida&lt;message&gt; , utilizzando la chiave segreta della transazione (quando&lt;address&gt; non è l&amp;#39;indirizzo del tuo portafoglio) o la chiave segreta di visualizzazione (altrimenti), che non rivela la chiave segreta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3584" />
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Controllare la prova dei fondi destinati a&lt;address&gt; In&lt;txid&gt; con la corda della sfida&lt;message&gt; se presente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3588" />
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Genera una firma che dimostri che hai generato&lt;txid&gt; utilizzando la chiave segreta di spesa, facoltativamente con una stringa di verifica&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3592" />
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Controllare una firma che dimostri che il firmatario ha generato&lt;txid&gt; , facoltativamente con una stringa di sfida&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3596" />
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If 'all' is specified, you prove the entire sum of all of your existing accounts' balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Genera una firma che dimostri che possiedi almeno questa quantità, facoltativamente con una stringa di verifica&lt;message&gt; . Se è specificato &amp;#39;all&amp;#39;, dimostri l&amp;#39;intera somma di tutti i saldi dei tuoi conti esistenti. Altrimenti, dimostri la riserva del più piccolo importo possibile sopra&lt;amount&gt; disponibile sul tuo conto corrente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602" />
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Controllare una firma che attesti che il proprietario di&lt;address&gt; contiene almeno questo, facoltativamente con una stringa di sfida&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3623" />
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Mostra gli output non spesi di un indirizzo specificato entro un intervallo di importi facoltativo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3631" />
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Imposta una nota di corda arbitraria per un&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3635" />
        <source>Get a string note for a txid.</source>
        <translation>Ottieni una nota di corda per un txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3639" />
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Imposta una descrizione arbitraria per il portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3643" />
        <source>Get the description of the wallet.</source>
        <translation>Ottieni la descrizione del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3646" />
        <source>Show the wallet's status.</source>
        <translation>Mostra lo stato del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3649" />
        <source>Show the wallet's information.</source>
        <translation>Mostra le informazioni del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3657" />
        <source>Verify a signature on the contents of a file.</source>
        <translation>Verificare una firma sul contenuto di un file.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3665" />
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importa un elenco di immagini chiave firmate e verificane lo stato di utilizzo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3673" />
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Tentativi di riconnessione del portafoglio HW.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677" />
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Esporta un set di output di proprietà di questo portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3681" />
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importa un set di output di proprietà di questo portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3685" />
        <source>Show information about a transfer to/from this address.</source>
        <translation>Mostra informazioni su un trasferimento da/per questo indirizzo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3688" />
        <source>Change the wallet's password.</source>
        <translation>Cambia la password del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3695" />
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Stampa le informazioni sulle commissioni correnti e sull&amp;#39;arretrato delle transazioni.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3697" />
        <source>Export data needed to create a multisig wallet</source>
        <translation>Esporta i dati necessari per creare un portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3700" />
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Trasforma questo portafoglio in un portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3708" />
        <source>Export multisig info for other participants</source>
        <translation>Esporta informazioni multisig per altri partecipanti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3712" />
        <source>Import multisig info from other participants</source>
        <translation>Importa informazioni multisig da altri partecipanti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3716" />
        <source>Sign a multisig transaction from a file</source>
        <translation>Firma una transazione multisig da un file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3720" />
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Invia una transazione multisig firmata da un file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3724" />
        <source>Export a signed multisig transaction to a file</source>
        <translation>Esportare una transazione multisig firmata in un file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3815" />
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, "absolute", list of rings</source>
        <translation>Stampa l&amp;#39;anello/gli anelli utilizzati per spendere una determinata immagine chiave o transazione (se la dimensione dell&amp;#39;anello è &amp;gt; 1) Formato di output: Immagine chiave, &amp;quot;assoluto&amp;quot;, elenco degli anelli</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3821" />
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Imposta l&amp;#39;anello utilizzato per una determinata immagine chiave, in modo che possa essere riutilizzato in una forcella</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3825" />
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>Annulla l&amp;#39;impostazione dell&amp;#39;anello utilizzato per una determinata immagine chiave o transazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3829" />
        <source>Save known rings to the shared rings database</source>
        <translation>Salva gli anelli noti nel database degli anelli condivisi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845" />
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>Congela un singolo output tramite l&amp;#39;immagine chiave in modo che non venga utilizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3849" />
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>Scongelare un singolo output tramite l&amp;#39;immagine chiave in modo che possa essere riutilizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3853" />
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>Controlla se un output dato è attualmente congelato dall&amp;#39;immagine chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3861" />
        <source>Prints simple network stats</source>
        <translation>Stampa statistiche di rete semplici</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3865" />
        <source>Lists known public nodes</source>
        <translation>Elenca i nodi pubblici noti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3869" />
        <source>Prints basic info about Salvium for first time users</source>
        <translation>Stampa informazioni di base su Salvium per gli utenti alle prime armi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3873" />
        <source>Returns version information</source>
        <translation>Restituisce informazioni sulla versione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3877" />
        <source>Get info about RPC payments to current node</source>
        <translation>Ottieni informazioni sui pagamenti RPC al nodo corrente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881" />
        <source>Start mining to pay for RPC access</source>
        <translation>Inizia a fare mining per pagare l&amp;#39;accesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3885" />
        <source>Stop mining to pay for RPC access</source>
        <translation>Interrompere l&amp;#39;attività di mining per pagare l&amp;#39;accesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3893" />
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Mostra la sezione di aiuto o la documentazione su un&lt;command&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984" />
        <source>needs an argument</source>
        <translation>ha bisogno di un argomento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998" />
        <source>set seed: needs an argument. available options: language</source>
        <translation>set seed: necessita di un argomento. opzioni disponibili: lingua</translation>
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
        <translation>0 o 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4011" />
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (più lento, nessuna ipotesi); optimize-coinbase (veloce, presuppone che l&amp;#39;intera coinbase venga pagata a un singolo indirizzo); no-coinbase (più veloce, presuppone che non riceviamo alcuna transazione coinbase), default (uguale a optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4012" />
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0, 1, 2, 3 o 4, oppure uno di </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4013" />
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (o mai|azione|decifrare)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4015" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4027" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040" />
        <source>unsigned integer</source>
        <translation>intero senza segno</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4017" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4029" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4030" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>amount</source>
        <translation>quantità</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4022" />
        <source>block height</source>
        <translation>altezza del blocco</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4026" />
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;major&gt;:&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4034" />
        <source>1/yes or 0/no</source>
        <translation>1/sì o 0/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4039" />
        <source>floating point &gt;= 0</source>
        <translation>virgola mobile &amp;gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044" />
        <source>set: unrecognized argument(s)</source>
        <translation>set: argomenti non riconosciuti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4102" />
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Nome del portafoglio non valido. Riprova o usa Ctrl-C per uscire.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4114" />
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Tentativo di generare o ripristinare il portafoglio, ma i file specificati esistono. Uscita per non rischiare di sovrascrivere.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4119" />
        <source>Wallet and key files found, loading...</source>
        <translation>Trovati file di portafoglio e chiave, caricamento in corso...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4125" />
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>File chiave trovato ma non file wallet. Rigenerazione in corso...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4131" />
        <source>Key file not found. Failed to open wallet: </source>
        <translation>File chiave non trovato. Impossibile aprire il portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4139" />
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Nessun portafoglio trovato con quel nome. Conferma la creazione di un nuovo portafoglio denominato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150" />
        <source>Generating new wallet...</source>
        <translation>Generazione di un nuovo portafoglio...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231" />
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>Non è possibile specificare più di uno tra --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4247" />
        <source>can't specify more than one of --generate-new-wallet="wallet_name", --wallet-file="wallet_name", --generate-from-view-key="wallet_name", --generate-from-spend-key="wallet_name", --generate-from-keys="wallet_name", --generate-from-multisig-keys="wallet_name", --generate-from-json="jsonfilename" and --generate-from-device="wallet_name"</source>
        <translation>non è possibile specificare più di uno tra --generate-new-wallet=&amp;quot;wallet_name&amp;quot;, --wallet-file=&amp;quot;wallet_name&amp;quot;, --generate-from-view-key=&amp;quot;wallet_name&amp;quot;, --generate-from-spend-key=&amp;quot;wallet_name&amp;quot;, --generate-from-keys=&amp;quot;wallet_name&amp;quot;, --generate-from-multisig-keys=&amp;quot;wallet_name&amp;quot;, --generate-from-json=&amp;quot;jsonfilename&amp;quot; e --generate-from-device=&amp;quot;wallet_name&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277" />
        <source>can't specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>non è possibile specificare sia --restore-deterministic-wallet che --restore-multisig-wallet e --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4283" />
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet utilizza --generate-new-wallet, non --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4285" />
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet utilizza --generate-new-wallet, non --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4299" />
        <source>specify a recovery parameter with the --electrum-seed="multisig seed here"</source>
        <translation>specificare un parametro di ripristino con --electrum-seed=&amp;quot;multisig seed here&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314" />
        <source>specify a recovery parameter with the --electrum-seed="words list here"</source>
        <translation>specificare un parametro di ripristino con --electrum-seed=&amp;quot;elenco parole qui&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328" />
        <source>Multisig seed failed verification</source>
        <translation>Verifica del seed multisig non riuscita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337" />
        <source>Electrum-style word list failed verification</source>
        <translation>La verifica dell&amp;#39;elenco di parole in stile Electrum non è riuscita</translation>
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
        <translation>Nessun dato fornito, annullato</translation>
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
        <translation>impossibile analizzare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4368" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4445" />
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Questo indirizzo è un sottoindirizzo che non può essere utilizzato qui.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4383" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4475" />
        <source>failed to parse view key secret key</source>
        <translation>impossibile analizzare la chiave di visualizzazione della chiave segreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4392" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4492" />
        <source>failed to verify view key secret key</source>
        <translation>Impossibile verificare la chiave di visualizzazione della chiave segreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4396" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4496" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4578" />
        <source>view key does not match standard address</source>
        <translation>la chiave di visualizzazione non corrisponde all&amp;#39;indirizzo standard</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4401" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4422" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4500" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4661" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4693" />
        <source>account creation failed</source>
        <translation>creazione account fallita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4418" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4460" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4603" />
        <source>failed to parse spend key secret key</source>
        <translation>impossibile analizzare la chiave segreta della chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4484" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4623" />
        <source>failed to verify spend key secret key</source>
        <translation>Impossibile verificare la chiave segreta della chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4488" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628" />
        <source>spend key does not match standard address</source>
        <translation>la chiave di spesa non corrisponde all&amp;#39;indirizzo standard</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4523" />
        <source>Error: expected M/N, but got: </source>
        <translation>Errore: previsto M/N, ma ottenuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4528" />
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Errore: previsto N &amp;gt; 1 e N &amp;lt;= M, ma ottenuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4533" />
        <source>Error: M/N is currently unsupported. </source>
        <translation>Errore: M/N non è attualmente supportato. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4536" />
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Generazione del portafoglio master da %u di chiavi del portafoglio multisig %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4565" />
        <source>failed to parse secret view key</source>
        <translation>impossibile analizzare la chiave di visualizzazione segreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4573" />
        <source>failed to verify secret view key</source>
        <translation>Impossibile verificare la chiave di visualizzazione segreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4616" />
        <source>Error: M/N is currently unsupported</source>
        <translation>Errore: M/N non è attualmente supportato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4668" />
        <source>No restore height is specified.</source>
        <translation>Non è specificata alcuna altezza di ripristino.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4669" />
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Supponendo che tu stia creando un nuovo account, il ripristino verrà effettuato a partire dall&amp;#39;altezza stimata della blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674" />
        <source>account creation aborted</source>
        <translation>creazione account annullata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4684" />
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>specificare un percorso del portafoglio con --generate-new-wallet (non --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4748" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4768" />
        <source>bad m_restore_height parameter: </source>
        <translation>parametro m_restore_height non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759" />
        <source>Restore height is: </source>
        <translation>L&amp;#39;altezza di ripristino è: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782" />
        <source>Restore height </source>
        <translation>Ripristinare l&amp;#39;altezza </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798" />
        <source>can't specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>non è possibile specificare --subaddress-lookahead e --wallet-file contemporaneamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802" />
        <source>failed to open account</source>
        <translation>non è riuscito ad aprire l&amp;#39;account</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5568" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5791" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8968" />
        <source>wallet is null</source>
        <translation>il portafoglio è nullo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841" />
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Impossibile inizializzare il database ad anello: le funzionalità di miglioramento della privacy saranno inattive</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4920" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4924" />
        <source>wallet failed to connect to daemon: </source>
        <translation>il portafoglio non è riuscito a connettersi al demone: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4925" />
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the 'set_daemon' command.</source>
        <translation>Il demone non è avviato oppure è stata passata la porta sbagliata. Assicurati che il demone sia in esecuzione o modifica l&amp;#39;indirizzo del demone usando il comando &amp;#39;set_daemon&amp;#39;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4954" />
        <source>List of available languages for your wallet's seed:</source>
        <translation>Elenco delle lingue disponibili per il seed del tuo portafoglio:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4955" />
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Se il display si blocca, esci alla cieca con ^C, quindi esegui di nuovo con --use-english-language-names</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4973" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4978" />
        <source>invalid language choice entered. Please try again.
</source>
        <translation>scelta lingua non valida inserita. Riprova.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4992" />
        <source>invalid password</source>
        <translation>password non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5040" />
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Stavi utilizzando una versione obsoleta del portafoglio. Utilizza il nuovo seed che ti forniamo.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5056" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5131" />
        <source>Generated new wallet: </source>
        <translation>Nuovo portafoglio generato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5059" />
        <source>View key: </source>
        <translation>Visualizza chiave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5136" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5244" />
        <source>failed to generate new wallet: </source>
        <translation>Impossibile generare un nuovo portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5175" />
        <source>Generated new wallet on hw device: </source>
        <translation>Generato nuovo portafoglio sul dispositivo hw: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5236" />
        <source>failed to generate new mutlisig wallet</source>
        <translation>Impossibile generare un nuovo portafoglio multiplo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5239" />
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Generato nuovo portafoglio multisig %u/%u: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5255" />
        <source>wallet file path not valid: </source>
        <translation>percorso file wallet non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5265" />
        <source>Key file not found. Failed to open wallet</source>
        <translation>File chiave non trovato. Impossibile aprire il portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5286" />
        <source>Opened watch-only wallet</source>
        <translation>Portafoglio aperto solo per orologio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5288" />
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>Aperto portafoglio multisig %u/%u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5290" />
        <source>Opened wallet</source>
        <translation>Portafoglio aperto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5308" />
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Stavi utilizzando una versione obsoleta del portafoglio. Procedi ad aggiornare il tuo portafoglio.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5323" />
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Stavi utilizzando una versione obsoleta del portafoglio. Il formato del tuo portafoglio è in fase di aggiornamento.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5331" />
        <source>failed to load wallet: </source>
        <translation>impossibile caricare il portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5350" />
        <source>Use "help &lt;command&gt;" to see a command's documentation.
</source>
        <translation>Usa &amp;quot;aiuto&amp;quot;&lt;command&gt; &amp;quot; per vedere la documentazione di un comando.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5372" />
        <source>failed to deinitialize wallet</source>
        <translation>impossibile deinizializzare il portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5395" />
        <source>Wallet data saved</source>
        <translation>Dati del portafoglio salvati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409" />
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>il portafoglio è multisig e non può salvare una versione solo per l&amp;#39;orologio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5417" />
        <source>failed to read wallet password</source>
        <translation>impossibile leggere la password del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5425" />
        <source>Watch only wallet saved as: </source>
        <translation>Guarda solo il portafoglio salvato come: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5429" />
        <source>Failed to save watch only wallet: </source>
        <translation>Impossibile salvare solo il portafoglio dell&amp;#39;orologio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5559" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6414" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11007" />
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>questo comando richiede un demone attendibile. Abilita con --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5608" />
        <source>Mining started in daemon</source>
        <translation>L&amp;#39;attività di mining è iniziata nel demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610" />
        <source>mining has NOT been started: </source>
        <translation>l&amp;#39;attività di mining NON è stata avviata: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5630" />
        <source>Mining stopped in daemon</source>
        <translation>L&amp;#39;attività di mining si è fermata nel demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632" />
        <source>mining has NOT been stopped: </source>
        <translation>l&amp;#39;attività mineraria NON è stata interrotta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5687" />
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Lunghezza array imprevista - Uscita da simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763" />
        <source>trusted</source>
        <translation>fidato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763" />
        <source>untrusted</source>
        <translation>non attendibile</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5779" />
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Questo non sembra essere un URL del demone valido.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5799" />
        <source>Blockchain saved</source>
        <translation>Blockchain salvata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5801" />
        <source>blockchain can't be saved: </source>
        <translation>la blockchain non può essere salvata: </translation>
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
        <translation>Altezza </translation>
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
        <translation>non sono io </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5925" />
        <source>spent </source>
        <translation>speso </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952" />
        <source>Enter password</source>
        <translation>Inserisci la password</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6048" />
        <source>Starting refresh...</source>
        <translation>Avvio aggiornamento...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6070" />
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>Nuovo trasferimento ricevuto da quando è stata avviata la nuova scansione. Le immagini chiave sono incomplete.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077" />
        <source>Refresh done, blocks received: </source>
        <translation>Aggiornamento eseguito, blocchi ricevuti: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6085" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6428" />
        <source>daemon is busy. Please try again later.</source>
        <translation>il demone è occupato. Riprova più tardi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4816" />
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>La chiave segreta del client RPC deve essere di 32 byte in formato esadecimale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5535" />
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>Abilitando il mining in background, il demone estrarrà quando è inattivo e non alimentato dalla batteria.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5657" />
        <source>Error checking daemon RPC access prices</source>
        <translation>Errore nel controllo dei prezzi di accesso RPC del demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5663" />
        <source>Error checking daemon RPC access prices: </source>
        <translation>Errore nel controllo dei prezzi di accesso RPC del demone: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5759" />
        <source>Failed to connect to daemon</source>
        <translation>Impossibile connettersi al demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771" />
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>I crediti/hash del demone RPC sono inferiori a quanto dichiarato. O questo demone sta barando o ha cambiato la sua configurazione di recente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772" />
        <source>Claimed: </source>
        <translation>Reclamato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5773" />
        <source>Actual: </source>
        <translation>Attuale: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6089" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6432" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nessuna connessione al demone. Assicurati che il demone sia in esecuzione.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6436" />
        <source>payment required.</source>
        <translation>pagamento richiesto.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6099" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6446" />
        <source>RPC error: </source>
        <translation>Errore RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6104" />
        <source>refresh error: </source>
        <translation>errore di aggiornamento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6109" />
        <source>internal error: </source>
        <translation>errore interno: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124" />
        <source>refresh failed: </source>
        <translation>aggiornamento non riuscito: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124" />
        <source>Blocks received: </source>
        <translation>Blocchi ricevuti: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6153" />
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Alcuni output di proprietà hanno immagini chiave parziali: è necessario import_multisig_info)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156" />
        <source>Currently selected account: [</source>
        <translation>Account attualmente selezionato: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156" />
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158" />
        <source>(No tag assigned)</source>
        <translation>(Nessun tag assegnato)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158" />
        <source>Tag: </source>
        <translation>Etichetta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6172" />
        <source>unlocked balance: </source>
        <translation>saldo sbloccato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177" />
        <source>Balance per address:</source>
        <translation>Saldo per indirizzo:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <source>Address</source>
        <translation>Indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Balance</source>
        <translation>Bilancia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Unlocked balance</source>
        <translation>Saldo sbloccato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <source>Outputs</source>
        <translation>Risultati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>Label</source>
        <translation>Etichetta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6186" />
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277" />
        <source>pubkey</source>
        <translation>pubkey</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277" />
        <source>key image</source>
        <translation>immagine chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>spent</source>
        <translation>speso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>unlocked</source>
        <translation>sbloccato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>ringct</source>
        <translation>anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>global index</source>
        <translation>indice globale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>tx id</source>
        <translation>ID di trasmissione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>addr index</source>
        <translation>indice indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6294" />
        <source>Used at heights: </source>
        <translation>Utilizzato in quota: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299" />
        <source>T</source>
        <translation>T</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299" />
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <source>locked</source>
        <translation>bloccato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <source>[frozen]</source>
        <translation>[congelato]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301" />
        <source>RingCT</source>
        <translation>TC ad anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301" />
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6314" />
        <source>No incoming transfers</source>
        <translation>Nessun trasferimento in entrata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318" />
        <source>No incoming available transfers</source>
        <translation>Nessun trasferimento disponibile in entrata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322" />
        <source>No incoming unavailable transfers</source>
        <translation>Nessun trasferimento in arrivo non disponibile</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>payment</source>
        <translation>pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>transaction</source>
        <translation>transazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>height</source>
        <translation>altezza</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>unlock time</source>
        <translation>tempo di sblocco</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6358" />
        <source>No payments with id </source>
        <translation>Nessun pagamento con ID </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6380" />
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>l&amp;#39;ID pagamento ha un formato non valido, è prevista una stringa esadecimale di 16 o 64 caratteri: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6504" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7509" />
        <source>failed to get blockchain height: </source>
        <translation>non è riuscito a ottenere l&amp;#39;altezza della blockchain: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441" />
        <source>failed to get spent status</source>
        <translation>non è riuscito a ottenere lo stato di spesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6513" />
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transazione %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6529" />
        <source>failed to find construction data for tx input</source>
        <translation>Impossibile trovare i dati di costruzione per l&amp;#39;input tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6553" />
        <source>failed to get output: </source>
        <translation>impossibile ottenere l&amp;#39;output: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6561" />
        <source>output key's originating block height shouldn't be higher than the blockchain height</source>
        <translation>l&amp;#39;altezza del blocco di origine della chiave di output non dovrebbe essere superiore all&amp;#39;altezza della blockchain</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6566" />
        <source>
Originating block heights: </source>
        <translation>
Altezze dei blocchi di origine: </translation>
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
Attenzione: alcuni tasti di input utilizzati provengono da </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594" />
        <source>the same transaction</source>
        <translation>la stessa transazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594" />
        <source>blocks that are temporally very close</source>
        <translation>blocchi che sono temporalmente molto vicini</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6748" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741" />
        <source>Ring size must not be 0</source>
        <translation>La misura dell&amp;#39;anello non deve essere 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6760" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7473" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7753" />
        <source>ring size %u is too small, minimum is %u</source>
        <translation>la misura dell&amp;#39;anello %u è troppo piccola, il minimo è %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6765" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758" />
        <source>ring size %u is too large, maximum is %u</source>
        <translation>la misura dell&amp;#39;anello %u è troppo grande, il massimo è %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772" />
        <source>wrong number of arguments</source>
        <translation>numero sbagliato di argomenti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6789" />
        <source>payment id failed to encode</source>
        <translation>l&amp;#39;ID di pagamento non è riuscito a codificare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6808" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7502" />
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Blocchi bloccati troppo alti, max 1000000 (˜4 anni)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6856" />
        <source>failed to parse short payment ID from URI</source>
        <translation>impossibile analizzare l&amp;#39;ID del pagamento breve dall&amp;#39;URI</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6881" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883" />
        <source>Invalid last argument: </source>
        <translation>Ultimo argomento non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6901" />
        <source>a single transaction cannot use more than one payment id</source>
        <translation>una singola transazione non può utilizzare più di un ID di pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917" />
        <source>failed to parse payment id, though it was detected</source>
        <translation>Impossibile analizzare l&amp;#39;ID del pagamento, anche se è stato rilevato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7004" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014" />
        <source>Is this okay anyway?</source>
        <translation>Va bene lo stesso?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7009" />
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>Attualmente c&amp;#39;è un arretrato di %u block a quel livello di tariffa. Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7323" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7631" />
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>Spazzare %s in %llu transazioni per una commissione totale di %s. Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7329" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7637" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7874" />
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>Spazzare %s per una tariffa totale di %s. Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7377" />
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by "rescan_spent".  Is this okay?</source>
        <translation>Vengono scartati %s degli output non mixabili che non possono essere spesi, operazione che può essere annullata con &amp;quot;rescan_spent&amp;quot;. Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7522" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7767" />
        <source>Failed to parse number of outputs</source>
        <translation>Impossibile analizzare il numero di output</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7527" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7772" />
        <source>Amount of outputs should be greater than 0</source>
        <translation>La quantità di output deve essere maggiore di 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7551" />
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>l&amp;#39;ID pagamento ha un formato non valido, prevista una stringa esadecimale di 16 o 64 caratteri: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6803" />
        <source>bad locked_blocks parameter:</source>
        <translation>parametro locked_blocks non valido:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7571" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7831" />
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>una singola transazione non può utilizzare più di un ID di pagamento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6923" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7580" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7799" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7839" />
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>non è riuscito a impostare l&amp;#39;ID di pagamento, sebbene sia stato decodificato correttamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1170" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249" />
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>Invia queste informazioni multisig a tutti gli altri partecipanti, quindi utilizza exchange_multisig_keys&lt;info1&gt; [&lt;info2&gt; ...] con le informazioni multisig degli altri</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1258" />
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation>Il portafoglio multisig è stato creato con successo. Tipo di portafoglio attuale: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264" />
        <source>Failed to perform multisig keys exchange: </source>
        <translation>Impossibile eseguire lo scambio di chiavi multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599" />
        <source>Failed to load multisig transaction from MMS</source>
        <translation>Impossibile caricare la transazione multisig da MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2139" />
        <source>Failed to mark output spent: </source>
        <translation>Impossibile contrassegnare l&amp;#39;output come esaurito: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2166" />
        <source>Failed to mark output unspent: </source>
        <translation>Impossibile contrassegnare l&amp;#39;output come non speso: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2190" />
        <source>Spent: </source>
        <translation>Speso: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192" />
        <source>Not spent: </source>
        <translation>Non speso: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2196" />
        <source>Failed to check whether output is spent: </source>
        <translation>Impossibile verificare se l&amp;#39;output è stato speso: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2385" />
        <source>Please confirm the transaction on the device</source>
        <translation>Si prega di confermare la transazione sul dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091" />
        <source>Device name not specified</source>
        <translation>Nome dispositivo non specificato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100" />
        <source>Device reconnect failed</source>
        <translation>Riconnessione del dispositivo non riuscita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105" />
        <source>Device reconnect failed: </source>
        <translation>Riconnessione del dispositivo non riuscita: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3619" />
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>Esporta in CSV i trasferimenti in entrata/uscita entro un intervallo di altezza facoltativo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627" />
        <source>Rescan the blockchain from scratch. If "hard" is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>Riscansiona la blockchain da zero. Se è specificato &amp;quot;hard&amp;quot;, perderai tutte le informazioni che non possono essere recuperate dalla blockchain stessa.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3661" />
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>Esportare un set firmato di immagini chiave in un&lt;filename&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3669" />
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>Sincronizza le immagini delle chiavi con il portafoglio hw.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3692" />
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>Genera un nuovo ID di pagamento casuale a dimensione intera (obsoleto). Questi saranno decriptati sulla blockchain, vedere integrated_address per gli ID di pagamento brevi crittografati.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3704" />
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>Esegue round di scambio chiavi multisig extra. Necessario per portafogli multisig M/N arbitrari</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3736" />
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>Inizializzare e configurare l&amp;#39;MMS per M/N = numero di firmatari richiesti/numero di firmatari autorizzati multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740" />
        <source>Display current MMS configuration</source>
        <translation>Visualizza la configurazione MMS corrente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3744" />
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>Imposta o modifica le informazioni del firmatario autorizzato (etichetta di una sola parola, indirizzo di trasporto, indirizzo Salvium) oppure elenca tutti i firmatari</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3748" />
        <source>List all messages</source>
        <translation>Elenca tutti i messaggi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3752" />
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using 'sync' processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>Valutare le prossime possibili azioni correlate a multisig in base allo stato del portafoglio ed eseguirle o offrirle per la scelta Utilizzando l&amp;#39;elaborazione &amp;quot;sync&amp;quot; dei messaggi in attesa con multisig, le informazioni di sincronizzazione possono essere forzate indipendentemente dallo stato del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757" />
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like "stale data" errors</source>
        <translation>Generazione forzata di informazioni di sincronizzazione multisig indipendentemente dallo stato del portafoglio, per recuperare da situazioni particolari come errori di &amp;quot;dati obsoleti&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3761" />
        <source>Initiate transfer with MMS support; arguments identical to normal 'transfer' command arguments, for info see there</source>
        <translation>Avvia il trasferimento con supporto MMS; argomenti identici agli argomenti del comando &amp;#39;transfer&amp;#39; normale, per informazioni vedere qui</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3765" />
        <source>Delete a single message by giving its id, or delete all messages by using 'all'</source>
        <translation>Elimina un singolo messaggio specificandone l&amp;#39;ID oppure elimina tutti i messaggi utilizzando &amp;quot;tutti&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3769" />
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>Invia un singolo messaggio specificandone l&amp;#39;ID oppure invia tutti i messaggi in attesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3773" />
        <source>Check right away for new messages to receive</source>
        <translation>Controlla subito se ci sono nuovi messaggi da ricevere</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3777" />
        <source>Write the content of a message to a file "mms_message_content"</source>
        <translation>Scrivere il contenuto di un messaggio in un file &amp;quot;mms_message_content&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3781" />
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>Invia un messaggio di una riga a un firmatario autorizzato, identificato dalla sua etichetta, o mostra eventuali note in attesa non lette</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785" />
        <source>Show detailed info about a single message</source>
        <translation>Mostra informazioni dettagliate su un singolo messaggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3789" />
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation>Opzioni disponibili: invio automatico &amp;lt;1|0&amp;gt; Specifica se inviare automaticamente i messaggi appena generati.
 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795" />
        <source>Send completed signer config to all other authorized signers</source>
        <translation>Invia la configurazione del firmatario completata a tutti gli altri firmatari autorizzati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3799" />
        <source>Start auto-config at the auto-config manager's wallet by issuing auto-config tokens and optionally set others' labels</source>
        <translation>Avvia la configurazione automatica nel portafoglio del gestore della configurazione automatica emettendo token di configurazione automatica e, facoltativamente, impostando le etichette degli altri</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3807" />
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>Elimina tutti i token di configurazione automatica e annulla un processo di configurazione automatica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3811" />
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>Avviare la configurazione automatica utilizzando il token ricevuto dal gestore della configurazione automatica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833" />
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>Contrassegna gli output come spesi in modo che non vengano mai selezionati come output falsi in un anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837" />
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>Contrassegna un output come non speso in modo che possa essere selezionato come output falso in un anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3841" />
        <source>Checks whether an output is marked as spent</source>
        <translation>Controlla se un output è contrassegnato come speso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4035" />
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;device_name[:device_spec]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4063" />
        <source>wrong number range, use: %s</source>
        <translation>intervallo numerico errato, utilizzare: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4168" />
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>NOTA: i seguenti %s possono essere utilizzati per recuperare l&amp;#39;accesso al tuo portafoglio. Annotali e conservali in un posto sicuro e protetto. Non conservarli nella tua e-mail o su servizi di archiviazione file al di fuori del tuo controllo immediato.
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
        <translation>25 parole</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4593" />
        <source>Secret spend key (%u of %u)</source>
        <translation>Chiave di spesa segreta (%u di %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4670" />
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>Utilizzare --restore-height o --restore-date se si desidera ripristinare un account già configurato da un&amp;#39;altezza specifica.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4672" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4760" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7119" />
        <source>Is this okay?</source>
        <translation>Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4783" />
        <source>Still apply restore height?</source>
        <translation>Vuoi ancora ripristinare l&amp;#39;altezza?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4964" />
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>Inserisci il numero corrispondente alla lingua che preferisci</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5967" />
        <source>Device requires attention</source>
        <translation>Il dispositivo richiede attenzione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5973" />
        <source>Enter device PIN</source>
        <translation>Inserisci il PIN del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5975" />
        <source>Failed to read device PIN</source>
        <translation>Impossibile leggere il PIN del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5985" />
        <source>Please enter the device passphrase on the device</source>
        <translation>Inserisci la passphrase del dispositivo sul dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5992" />
        <source>Enter device passphrase</source>
        <translation>Inserisci la passphrase del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5994" />
        <source>Failed to read device passphrase</source>
        <translation>Impossibile leggere la passphrase del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6018" />
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation>Il primo aggiornamento è terminato per il portafoglio basato su HW con denaro ricevuto. È necessario hw_key_images_sync. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5537" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020" />
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation>Vuoi farlo adesso? (S/Sì/N/No): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2366" />
        <source>Unknown command '%s', try 'help'</source>
        <translation>Comando sconosciuto &amp;#39;%s&amp;#39;, prova &amp;#39;help&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3040" />
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Timeout del blocco di inattività disabilitato su Windows</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3054" />
        <source>Invalid number of seconds</source>
        <translation>Numero di secondi non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116" />
        <source>Export format not specified</source>
        <translation>Formato di esportazione non specificato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3130" />
        <source>Export format not recognized.</source>
        <translation>Formato di esportazione non riconosciuto.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3482" />
        <source>Display the restore height</source>
        <translation>Visualizza l&amp;#39;altezza di ripristino</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3857" />
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>Blocca la console del portafoglio, richiedendo la password del portafoglio per continuare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4033" />
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>intero senza segno (secondi, 0 per disabilitare)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036" />
        <source>"binary" or "ascii"</source>
        <translation>&amp;quot;binario&amp;quot; o &amp;quot;ascii&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4824" />
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>Attenzione: utilizzo di un demone non attendibile su %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4825" />
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>L&amp;#39;utilizzo di un demone di terze parti può essere dannoso per la sicurezza e la privacy</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4828" />
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>L&amp;#39;utilizzo del tuo senza SSL espone il tuo traffico RPC al monitoraggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4829" />
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>Ti consigliamo vivamente di connetterti alla rete Salvium utilizzando il tuo demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4830" />
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>Se tu o qualcuno di cui ti fidi sta gestendo questo demone, puoi usare --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4837" />
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>Inoltre, un demone è anche meno sicuro quando viene eseguito in modalità bootstrap</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850" />
        <source>If you are new to Salvium, type "welcome" for a brief overview.</source>
        <translation>Se sei nuovo su Salvium, digita &amp;quot;welcome&amp;quot; per una breve panoramica.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5003" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5101" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5149" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5192" />
        <source>Error creating wallet: </source>
        <translation>Errore durante la creazione del portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477" />
        <source>Failed to query mining status: </source>
        <translation>Impossibile interrogare lo stato di mining: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5488" />
        <source>Failed to setup background mining: </source>
        <translation>Impossibile impostare il mining in background: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5464" />
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>Background mining abilitato. Grazie per il supporto alla rete Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5492" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5500" />
        <source>Background mining not enabled. Run "set setup-background-mining 1" to change.</source>
        <translation>Mining in background non abilitato. Esegui &amp;quot;set setup-background-mining 1&amp;quot; per modificare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5506" />
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>Utilizzo di un demone non attendibile, saltando il controllo di mining in background</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5534" />
        <source>The daemon is not set up to background mine.</source>
        <translation>Il demone non è impostato per il mining in background.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5541" />
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>Background mining non abilitato. Imposta setup-background-mining su 1 per modificare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5903" />
        <source>NOTE: This transaction is locked, see details with: show_transfer </source>
        <translation>NOTA: questa transazione è bloccata, vedere i dettagli con: show_transfer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6022" />
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>hw_key_images_sync ignorato. Esegui il comando manualmente prima di un trasferimento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6247" />
        <source>Invalid keyword: </source>
        <translation>Parola chiave non valida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6535" />
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
Inserisci %llu/%llu (%s): importo=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628" />
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>La transazione spende più di un output molto vecchio. La privacy sarebbe migliore se fossero inviati separatamente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6629" />
        <source>Spend them now anyway?</source>
        <translation>Li spendo comunque adesso?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6871" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8479" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9229" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9798" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9806" />
        <source>amount is wrong: </source>
        <translation>l&amp;#39;importo è sbagliato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6872" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8479" />
        <source>expected number from 0 to </source>
        <translation>numero previsto da 0 a </translation>
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
        <translation>transazione annullata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6981" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7595" />
        <source>No outputs found, or daemon is not ready</source>
        <translation>Nessun output trovato o il demone non è pronto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2343" />
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>A differenza di Bitcoin, le tue transazioni e il tuo saldo Salvium rimangono privati e non sono visibili al mondo per impostazione predefinita.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2344" />
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>Tuttavia, se lo desideri, hai la possibilità di renderli disponibili a determinate parti.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5895" />
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>NOTA: questa transazione utilizza un ID di pagamento crittografato: si consiglia di utilizzare invece dei sottoindirizzi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5900" />
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>ATTENZIONE: questa transazione utilizza un ID di pagamento non crittografato: questi sono obsoleti e ignorati. Utilizza invece i sottoindirizzi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014" />
        <source>Failed to check for backlog: </source>
        <translation>Impossibile verificare l&amp;#39;arretrato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7063" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7617" />
        <source>
Transaction </source>
        <translation>
Transazione </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7070" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7624" />
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>ATTENZIONE: vengono utilizzati contemporaneamente output di più indirizzi, il che potrebbe compromettere la tua privacy.
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
        <translation>Transazioni non firmate scritte correttamente su MMS</translation>
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
        <translation>Impossibile scrivere le transazioni nel file</translation>
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
        <translation>Transazione/i non firmate scritte correttamente nel file: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7161" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7674" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7909" />
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>Impossibile firmare a freddo la transazione con il portafoglio HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7308" />
        <source>No unmixable outputs found</source>
        <translation>Nessun output non miscelabile trovato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321" />
        <source>Sweeping </source>
        <translation>Spazzare </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8490" />
        <source>Failed to parse donation address: </source>
        <translation>Impossibile analizzare l&amp;#39;indirizzo della donazione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8506" />
        <source>Donating %s %s to %s.</source>
        <translation>Donazione di %s %s a %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8654" />
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>Caricate %lu transazioni, per %s, commissione %s, %s, %s, con dimensione minima dell&amp;#39;anello %lu, %s. %sVa bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>direction</source>
        <translation>direzione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>timestamp</source>
        <translation>marca temporale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>running balance</source>
        <translation>equilibrio in esecuzione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>hash</source>
        <translation>hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>payment ID</source>
        <translation>ID pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>fee</source>
        <translation>tassa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>destination</source>
        <translation>destinazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>index</source>
        <translation>indice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>note</source>
        <translation>nota</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9770" />
        <source>CSV exported to </source>
        <translation>CSV esportato in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9955" />
        <source>Rescan anyway?</source>
        <translation>Ripetere comunque la scansione?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9966" />
        <source>Warning: your restore height is higher than wallet restore height: </source>
        <translation>Attenzione: l&amp;#39;altezza di ripristino è superiore all&amp;#39;altezza di ripristino del portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9967" />
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>Ripetere comunque la scansione? (S/Sì/N/No): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9988" />
        <source>MMS received new message</source>
        <translation>MMS ha ricevuto un nuovo messaggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10157" />
        <source>locked due to inactivity</source>
        <translation>bloccato per inattività</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10559" />
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;index&gt;è fuori dai limiti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10835" />
        <source>Normal</source>
        <translation>Normale</translation>
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
        <translation>Tipo di rete: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1402" />
        <source>Multisig info imported. Number of outputs updated: </source>
        <translation>Informazioni multisig importate. Numero di output aggiornati: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1750" />
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>Immagine chiave non utilizzata o utilizzata con anello di misura 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334" />
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>La maggior parte di questi nodi sono probabilmente spie. Non dovresti usarli a meno che non ti connetta tramite Tor o I2P</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340" />
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>Benvenuti a Salvium, la nuova e migliorata criptovaluta privata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2352" />
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>Benvenuti a Salvium e alla privacy finanziaria conforme. Per maggiori informazioni, visita https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2471" />
        <source>invalid index: must be an unsigned integer</source>
        <translation>indice non valido: deve essere un intero senza segno</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2476" />
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt;è fuori dai limiti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514" />
        <source>Failed to generate QR code, input too large</source>
        <translation>Impossibile generare il codice QR, input troppo grande</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3167" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3186" />
        <source>Value not specified</source>
        <translation>Valore non specificato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3157" />
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>Attenzione: i formati deprecati utilizzano la serializzazione boost, che causa buffer overflow e crash. Carica i formati deprecati solo da fonti di cui ti fidi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3206" />
        <source>Important commands:</source>
        <translation>Comandi importanti:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3208" />
        <source>"welcome" - Show welcome message.</source>
        <translation>&amp;quot;welcome&amp;quot; - Mostra il messaggio di benvenuto.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3209" />
        <source>"help all" - Show the list of all available commands.</source>
        <translation>&amp;quot;help all&amp;quot; - Mostra l&amp;#39;elenco di tutti i comandi disponibili.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3210" />
        <source>"help &lt;command&gt;" - Show a command's documentation.</source>
        <translation>&amp;quot;aiuto&lt;command&gt; &amp;quot; - Mostra la documentazione di un comando.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3211" />
        <source>"apropos &lt;keyword&gt;" - Show commands related to a keyword.</source>
        <translation>&amp;quot;a proposito&lt;keyword&gt; &amp;quot; - Mostra i comandi correlati a una parola chiave.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213" />
        <source>"wallet_info" - Show wallet main address and other info.</source>
        <translation>&amp;quot;wallet_info&amp;quot; - Mostra l&amp;#39;indirizzo principale del portafoglio e altre informazioni.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3214" />
        <source>"balance" - Show balance.</source>
        <translation>&amp;quot;equilibrio&amp;quot; - Mostra equilibrio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3215" />
        <source>"address all" - Show all addresses.</source>
        <translation>&amp;quot;address all&amp;quot; - Mostra tutti gli indirizzi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3216" />
        <source>"address new" - Create new subaddress.</source>
        <translation>&amp;quot;nuovo indirizzo&amp;quot; - Crea un nuovo sottoindirizzo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3217" />
        <source>"transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]" - Send SAL to an address.</source>
        <translation>&amp;quot;trasferire&lt;address&gt;&lt;amount&gt; [&lt;asset_type&gt; ]&amp;quot; - Invia SAL a un indirizzo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218" />
        <source>"return_payment &lt;tx_hash&gt;" - Return a previously-received amount to sender.</source>
        <translation>&amp;quot;pagamento_di_ritorno&lt;tx_hash&gt; &amp;quot; - Restituire al mittente un importo ricevuto in precedenza.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3219" />
        <source>"burn &lt;amount&gt; &lt;asset_type&gt;" - destroy coins forever.</source>
        <translation>&amp;quot;bruciare&lt;amount&gt;&lt;asset_type&gt; &amp;quot; - distruggere le monete per sempre.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3220" />
        <source>"convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]" - convert between coin types.</source>
        <translation>&amp;quot;convertire&lt;amount&gt;&lt;source_asset&gt;&lt;dest_asset&gt; [&lt;slippage_limit&gt; ]&amp;quot; - converte tra i tipi di moneta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221" />
        <source>"stake &lt;amount&gt;" - stake SAL for 30 days to earn yield.</source>
        <translation>&amp;quot;palo&lt;amount&gt; &amp;quot; - punta SAL per 30 giorni per ottenere un rendimento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3222" />
        <source>"price_info" - Display current pricing information for supported assets.</source>
        <translation>&amp;quot;price_info&amp;quot; - Visualizza le informazioni sui prezzi correnti per le risorse supportate.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3223" />
        <source>"supply_info" - Display circulating supply information.</source>
        <translation>&amp;quot;supply_info&amp;quot; - Visualizza le informazioni sulla fornitura circolante.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3224" />
        <source>"yield_info" - Display current stats on Salvium staking / yield.</source>
        <translation>&amp;quot;yield_info&amp;quot; - Visualizza le statistiche attuali sullo staking/rendimento di Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3225" />
        <source>"show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]" - Show transactions.</source>
        <translation>&amp;quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|stacked|yield]&amp;quot; - Mostra le transazioni.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3226" />
        <source>"sweep_all &lt;address&gt;" - Send whole balance to another wallet.</source>
        <translation>&amp;quot;spazza_tutto&lt;address&gt; &amp;quot; - Invia l&amp;#39;intero saldo a un altro portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3227" />
        <source>"seed" - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>&amp;quot;seed&amp;quot; - Mostra le 25 parole segrete che possono essere utilizzate per recuperare questo portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3228" />
        <source>"refresh" - Synchronize wallet with the Salvium network.</source>
        <translation>&amp;quot;refresh&amp;quot; - Sincronizza il portafoglio con la rete Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3229" />
        <source>"status" - Check current status of wallet.</source>
        <translation>&amp;quot;status&amp;quot; - Controlla lo stato attuale del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3230" />
        <source>"version" - Check software version.</source>
        <translation>&amp;quot;versione&amp;quot; - Controlla la versione del software.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3231" />
        <source>"exit" - Exit wallet.</source>
        <translation>&amp;quot;exit&amp;quot; - Esci dal portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233" />
        <source>"donate &lt;amount&gt;" - Donate SAL to the development team.</source>
        <translation>&amp;quot;donare&lt;amount&gt; &amp;quot; - Dona SAL al team di sviluppo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263" />
        <source>No commands found mentioning keyword(s)</source>
        <translation>Nessun comando trovato che menziona parole chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3293" />
        <source>Invalid txid specified: </source>
        <translation>Txid non valido specificato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300" />
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>ATTENZIONE: questa operazione potrebbe rivelare i txid al nodo remoto e compromettere la tua privacy</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3302" />
        <source>You have canceled the operation</source>
        <translation>Hai annullato l&amp;#39;operazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3347" />
        <source>Set another daemon to connect to. If it's not yours, it'll probably spy on you.</source>
        <translation>Imposta un altro demone a cui connettersi. Se non è tuo, probabilmente ti spierà.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3373" />
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included). The "subtractfeefrom=" list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: "transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2". Let's say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use "subtractfeefrom=all" to spread the fee across all destinations.</source>
        <translation>Trasferire&lt;amount&gt; Di&lt;asset_type&gt; A&lt;address&gt; . Se il parametro &amp;quot;indice=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; è specificato, il portafoglio utilizza gli output ricevuti dagli indirizzi di quegli indici. Se omesso, il portafoglio sceglie casualmente gli indici degli indirizzi da utilizzare. In ogni caso, fa del suo meglio per non combinare gli output su più indirizzi.&lt;priority&gt; è la priorità della transazione. Maggiore è la priorità, maggiore è la commissione di transazione. I valori validi in ordine di priorità (dal più basso al più alto) sono: unimportant, normal, elevation, priority. Se omesso, viene utilizzato il valore predefinito (vedere il comando &amp;quot;set priority&amp;quot;).&lt;ring_size&gt; è il numero di input da includere per l&amp;#39;irrintracciabilità. È possibile effettuare più pagamenti contemporaneamente aggiungendo URI_2 o&lt;address_2&gt;&lt;amount_2&gt; eccetera (prima dell&amp;#39;ID di pagamento, se incluso). L&amp;#39;elenco &amp;quot;subtractfeefrom=&amp;quot; consente di scegliere da quali destinazioni finanziare la commissione di transazione anziché l&amp;#39;output del resto. La commissione verrà suddivisa in modo proporzionale tra le destinazioni scelte. Ad esempio, per effettuare 3 trasferimenti in cui la commissione viene prelevata dalla prima e dalla terza destinazione, si potrebbe fare: &amp;quot;transfer&lt;addr1&gt; 3&lt;addr2&gt; 0,5&lt;addr3&gt; 1 subtractfeefrom=0,2&amp;quot;. Supponiamo che la commissione di tx sia 0,1. Il saldo scenderebbe esattamente di 4,5 SAL incluse le commissioni, e addr1 e addr3 riceverebbero rispettivamente 2,925 e 0,975 SAL. Usa &amp;quot;subtractfeefrom=all&amp;quot; per distribuire la commissione su tutte le destinazioni.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381" />
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>Invia tutto il saldo sbloccato a un indirizzo e bloccalo per&lt;lockblocks&gt; (max. 1000000). Se il parametro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; o &amp;quot;index=all&amp;quot;, il portafoglio esegue lo sweep degli output ricevuti da quegli o tutti gli indici di indirizzo, rispettivamente. Se omesso, il portafoglio sceglie casualmente un indice di indirizzo da utilizzare.&lt;priority&gt; è la priorità dello sweep. Maggiore è la priorità, maggiore è la commissione di transazione. I valori validi in ordine di priorità (dal più basso al più alto) sono: unimportant, normal, elevation, priority. Se omesso, viene utilizzato il valore predefinito (vedere il comando &amp;quot;set priority&amp;quot;).&lt;ring_size&gt; è il numero di input da includere per la non tracciabilità.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3387" />
        <source>Send all unlocked balance to an address. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter "outputs=&lt;N&gt;" is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Invia tutto il saldo sbloccato a un indirizzo. Se il parametro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; o &amp;quot;index=all&amp;quot;, il portafoglio esegue lo sweep degli output ricevuti da quegli o da tutti gli indici di indirizzo, rispettivamente. Se omesso, il portafoglio sceglie casualmente un indice di indirizzo da utilizzare. Se il parametro &amp;quot;outputs=&lt;N&gt; &amp;quot; è specificato e N &amp;gt; 0, il portafoglio suddivide la transazione in N output pari.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3390" />
        <source>Send all unlocked balance from a given account to an address. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter "outputs=&lt;N&gt;" is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Invia tutto il saldo sbloccato da un dato account a un indirizzo. Se il parametro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; o &amp;quot;index=all&amp;quot;, il portafoglio esegue lo sweep degli output ricevuti da quegli o da tutti gli indici di indirizzo, rispettivamente. Se omesso, il portafoglio sceglie casualmente un indice di indirizzo da utilizzare. Se il parametro &amp;quot;outputs=&lt;N&gt; &amp;quot; è specificato e N &amp;gt; 0, il portafoglio suddivide la transazione in N output pari.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402" />
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>Restituisce i pagamenti ricevuti in TX&lt;tx_hash&gt; al mittente originale.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406" />
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>Distrugge PERMANENTEMENTE (brucia)&lt;amount&gt; Di&lt;asset_type&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410" />
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>convertiti&lt;amount&gt;&lt;source_asset&gt; in&lt;dest_asset&gt; , con facoltativo&lt;slippage_limit&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414" />
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>Serrature&lt;amount&gt; di SAL come quota per guadagnare rendimento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418" />
        <source>Displays the current exchange rate information for SAL &lt;--&gt; VSD conversions</source>
        <translation>Visualizza le informazioni sul tasso di cambio corrente per le conversioni SAL &amp;lt;--&amp;gt; VSD</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3422" />
        <source>Displays the current circulating supply information for SAL and VSD currencies</source>
        <translation>Visualizza le informazioni sulla fornitura circolante corrente per le valute SAL e VSD</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426" />
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>Visualizza le statistiche sui rendimenti degli ultimi&lt;NN&gt; blocchi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430" />
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>Donare&lt;amount&gt; al team di sviluppo (donate.salvium.io).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3456" />
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If "all" is specified, the wallet shows all the existing addresses in the currently selected account. If "new " is specified, the wallet creates a new address with the provided label text (which can be empty). If "mnew" is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If "label" is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If "one-off" is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>Se non vengono specificati argomenti o&lt;index&gt; è specificato, il portafoglio mostra l&amp;#39;indirizzo predefinito o specificato. Se è specificato &amp;quot;all&amp;quot;, il portafoglio mostra tutti gli indirizzi esistenti nell&amp;#39;account attualmente selezionato. Se è specificato &amp;quot;new&amp;quot;, il portafoglio crea un nuovo indirizzo con il testo dell&amp;#39;etichetta fornito (che può essere vuoto). Se è specificato &amp;quot;mnew&amp;quot;, il portafoglio crea tanti nuovi indirizzi quanti sono quelli specificati dall&amp;#39;argomento; l&amp;#39;etichetta predefinita è impostata per i nuovi indirizzi. Se è specificato &amp;quot;label&amp;quot;, il portafoglio imposta l&amp;#39;etichetta dell&amp;#39;indirizzo specificato da&lt;index&gt; al testo dell&amp;#39;etichetta fornito. Se viene specificato &amp;quot;one-off&amp;quot;, l&amp;#39;indirizzo per l&amp;#39;indice specificato viene generato e visualizzato, e ricordato dal portafoglio</translation>
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
        <translation>Opzioni disponibili: lingua seed Imposta la lingua seed del portafoglio. always-confirm-transfers &amp;lt;1|0&amp;gt; Se confermare le tx non suddivise. print-ring-members &amp;lt;1|0&amp;gt; Se stampare informazioni dettagliate sui membri dell&amp;#39;anello durante la conferma. store-tx-info &amp;lt;1|0&amp;gt; Se memorizzare le informazioni tx in uscita (indirizzo di destinazione, ID pagamento, chiave segreta tx) per riferimento futuro. auto-refresh &amp;lt;1|0&amp;gt; Se sincronizzare automaticamente i nuovi blocchi dal demone. refresh-type&lt;full|optimize-coinbase|no-coinbase|default&gt; Imposta il comportamento di aggiornamento del portafoglio. priority [0|1|2|3|4] Imposta la commissione su predefinita/non importante/normale/elevata/priorità. confirm-missing-payment-id &amp;lt;1|0&amp;gt; (obsoleto) ask-password &amp;lt;0|1|2 (o never|action|decrypt)&amp;gt; action: chiedi la password prima di molte azioni come il trasferimento, ecc. decrypt: uguale ad action, ma mantiene la chiave di spesa crittografata nella memoria quando non è necessaria unit&lt;sal|millisal|microsal&gt; Imposta l&amp;#39;unità (sotto)salvium predefinita. min-outputs-count [n] Prova a mantenere almeno un numero di output di valore pari almeno a min-outputs-value. min-outputs-value [n] Prova a mantenere almeno un numero di output min-outputs-count di almeno quel valore. merge-destinations &amp;lt;1|0&amp;gt; Se unire più pagamenti allo stesso indirizzo di destinazione. confirm-backlog &amp;lt;1|0&amp;gt; Se avvisare in caso di arretrato di transazioni. confirm-backlog-threshold [n] Imposta una soglia per confirm-backlog in modo che avvisi solo se l&amp;#39;arretrato di transazioni è maggiore di n blocchi. confirm-export-overwrite &amp;lt;1|0&amp;gt; Se avvisare se il file da esportare esiste già. refresh-from-block-height [n] Imposta l&amp;#39;altezza prima della quale ignorare i blocchi. auto-low-priority &amp;lt;1|0&amp;gt; Se utilizzare automaticamente il livello di commissione a bassa priorità quando è sicuro farlo. segregate-pre-fork-outputs &amp;lt;1|0&amp;gt; Imposta questo se intendi spendere output sia su Salvium che su un fork di riutilizzo delle chiavi. key-reuse-mitigation2 &amp;lt;1|0&amp;gt; Imposta questo se non sei sicuro se spenderai su un fork di riutilizzo delle chiavi Salvium in seguito. subaddress-lookahead&lt;major&gt; :&lt;minor&gt; Imposta le dimensioni di lookahead per la tabella hash del sottoindirizzo. segregation-height&lt;n&gt; Imposta l&amp;#39;altezza di una fork di riutilizzo chiave che vuoi usare, 0 per usare l&amp;#39;impostazione predefinita. ignore-fractional-outputs &amp;lt;1|0&amp;gt; Se ignorare gli output frazionari che comportano una perdita netta quando si spende a causa della commissione. ignore-outputs-above&lt;amount&gt; Ignora output di importo superiore a questa soglia quando spendi. Il valore 0 viene convertito nel valore massimo (18 milioni) che disabilita questo filtro. ignore-outputs-below&lt;amount&gt; Ignora gli output di importo inferiore a questa soglia quando spendi. track-uses &amp;lt;1|0&amp;gt; Se tenere traccia degli utilizzi degli output posseduti. setup-background-mining &amp;lt;1|0&amp;gt; Se abilitare il mining in background. Imposta questo per supportare la rete e per avere la possibilità di ricevere nuovi Salvium. device-name&lt;device_name[:device_spec]&gt; Nome dispositivo per portafoglio hardware. export-format &amp;lt;&amp;quot;binary&amp;quot;|&amp;quot;ascii&amp;quot;&amp;gt; Salva tutti i file esportati come binario (non possono essere copiati e incollati) o ascii (possono esserlo). persistent-rpc-client-id &amp;lt;1|0&amp;gt; Se continuare a utilizzare lo stesso ID client per il pagamento RPC durante i riavvii del portafoglio. auto-mine-for-rpc-payment-threshold&lt;float&gt; Se avviare automaticamente l&amp;#39;estrazione per il pagamento RPC se il demone lo richiede. credits-target&lt;unsigned int&gt; Il pagamento RPC accredita il saldo al target (0 per impostazione predefinita). show-wallet-name-when-locked &amp;lt;1|0&amp;gt; Imposta questo se desideri visualizzare il nome del portafoglio quando bloccato. enable-multisig-experimental &amp;lt;1|0&amp;gt; Imposta questo per consentire i comandi multisig. Multisig potrebbe essere attualmente sfruttabile se le parti non si fidano l&amp;#39;una dell&amp;#39;altra. inactivity-lock-timeout&lt;unsigned int&gt; Quanti secondi attendere prima di bloccare il portafoglio (0 per disabilitare). freeze-incoming-payments &amp;lt;1|0&amp;gt; Se bloccare automaticamente i pagamenti in entrata, in modo che non possano essere spesi per errore.</translation>
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
        <translation>Mostra i trasferimenti in entrata/uscita entro un intervallo di altezza facoltativo. Formato di output: In o Coinbase: Numero di blocco, &amp;quot;block&amp;quot;|&amp;quot;in&amp;quot;, Ora, Importo, Tipo di asset, Hash di transazione, ID di pagamento, Indice di sottoindirizzo, &amp;quot;-&amp;quot;, Nota Out: Numero di blocco, &amp;quot;out&amp;quot;, Ora, Importo*, Tipo di asset, Hash di transazione, ID di pagamento, Commissione, Destinazioni, Indirizzi di input**, &amp;quot;-&amp;quot;, Pool di note: &amp;quot;pool&amp;quot;, &amp;quot;in&amp;quot;, Ora, Importo, Tipo di asset, Hash di transazione, ID di pagamento, Indice di sottoindirizzo, &amp;quot;-&amp;quot;, Nota, Nota di doppia spesa In sospeso o non riuscito: &amp;quot;failed&amp;quot;|&amp;quot;pending&amp;quot;, &amp;quot;out&amp;quot;, Ora, Importo*, Hash di transazione, ID di pagamento, Commissione, Indirizzi di input**, &amp;quot;-&amp;quot;, Nota Staked o Burnt: Numero di blocco, &amp;quot;out&amp;quot;, Ora, Importo*, Tipo di asset, Hash di transazione, ID di pagamento, Commissione, Indirizzi di input**, &amp;quot;-&amp;quot;, Nota * Esclusi resto e commissione. ** Set di indici di indirizzo utilizzati come input in questo trasferimento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618" />
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [in|out|tutto|in sospeso|fallito|pool|coinbase|bruciato|puntato|rendimento] [indice=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [uscita=&lt;filepath&gt; ] [opzione=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653" />
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>Firma il contenuto di un file con il sottoindirizzo specificato (o l&amp;#39;indirizzo principale se non specificato)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3728" />
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>Interfaccia con MMS (Multisig Messaging System)&lt;subcommand&gt; è uno di: init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum Ottieni aiuto su un sottocomando con: help mms&lt;subcommand&gt; , o aiuto mms&lt;subcommand&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3803" />
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>Ottieni un checksum che consente ai firmatari di controllare facilmente la configurazione MMS identica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889" />
        <source>Show address as QR code</source>
        <translation>Mostra l&amp;#39;indirizzo come codice QR</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3897" />
        <source>Search all command descriptions for keyword(s)</source>
        <translation>Cerca tutte le descrizioni dei comandi per parola chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3901" />
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>Scansiona le transazioni fornite da&lt;txid&gt; (s), elaborandoli e ricercandone gli output</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014" />
        <source>sal, millisal, microsal</source>
        <translation>sale, millisale, microsale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032" />
        <source>1 or 0</source>
        <translation>1 o 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4257" />
        <source>Multisig is disabled.</source>
        <translation>Multisig è disabilitato.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4258" />
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can't be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>Multisig è una funzionalità sperimentale e potrebbe contenere dei bug. Le cose che potrebbero andare storte includono: i fondi inviati a un portafoglio multisig non possono essere spesi affatto, possono essere spesi solo con la partecipazione di un membro del gruppo malintenzionato o possono essere rubati da un membro del gruppo malintenzionato.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4260" />
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>Hai annullato il ripristino di un portafoglio multisig.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4915" />
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>il portafoglio non è riuscito a connettersi al demone perché è impostato sulla modalità offline</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4917" />
        <source>wallet failed to connect to daemon, because it is not up to date. </source>
        <translation>il portafoglio non è riuscito a connettersi al demone perché non è aggiornato. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4918" />
        <source>Please make sure you are running the latest wallet.</source>
        <translation>Assicurati di utilizzare il portafoglio più recente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4921" />
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the 'set_daemon' command.</source>
        <translation>Il demone non è aggiornato. Assicurati che il demone stia eseguendo la versione più recente o modifica l&amp;#39;indirizzo del demone usando il comando &amp;#39;set_daemon&amp;#39;.</translation>
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
        <translation>Il tuo portafoglio è stato generato! Per iniziare la sincronizzazione con il daemon, usa il comando &amp;quot;refresh&amp;quot;. Usa il comando &amp;quot;help&amp;quot; per vedere un elenco semplificato dei comandi disponibili. Usa il comando &amp;quot;help all&amp;quot; per vedere l&amp;#39;elenco di tutti i comandi disponibili. Usa &amp;quot;help&lt;command&gt; &amp;quot; per vedere la documentazione di un comando. Usa sempre il comando &amp;quot;exit&amp;quot; quando chiudi salvium-wallet-cli per salvare lo stato della sessione corrente. Altrimenti, potresti dover sincronizzare di nuovo il tuo portafoglio (le chiavi del tuo portafoglio NON sono a rischio in nessun caso).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5348" />
        <source>Use the "help" command to see a simplified list of available commands.
</source>
        <translation>Utilizzare il comando &amp;quot;help&amp;quot; per visualizzare un elenco semplificato dei comandi disponibili.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5349" />
        <source>Use "help all" to see the list of all available commands.
</source>
        <translation>Utilizzare &amp;quot;help all&amp;quot; per visualizzare l&amp;#39;elenco di tutti i comandi disponibili.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5536" />
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>Abilitando questa opzione, la rete che stai utilizzando viene supportata e ti rende idoneo a ricevere nuovi SAL</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703" />
        <source>Failed to parse address</source>
        <translation>Impossibile analizzare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5718" />
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got </source>
        <translation>Previsto attendibile, non attendibile o questo è probabilmente un nodo spia ottenuto </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5727" />
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>Questo non è un indirizzo Tor/I2P e non è un demone attendibile.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5728" />
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>Puoi usare il tuo nodo di fiducia, connetterti tramite Tor o I2P, oppure passare come &amp;quot;questo è probabilmente un nodo spia&amp;quot; e farti spiare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5733" />
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>Attenzione: connettendoti a un demone non locale senza SSL, gli avversari passivi saranno in grado di spiarti.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5836" />
        <source>stake returned </source>
        <translation>posta in gioco restituita </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5842" />
        <source>yield earned </source>
        <translation>rendimento guadagnato </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5853" />
        <source>burnt </source>
        <translation>bruciato </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5858" />
        <source>converting </source>
        <translation>conversione </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5863" />
        <source>staked </source>
        <translation>puntato </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5982" />
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>Il dispositivo chiede la passphrase. Vuoi inserire la passphrase sul dispositivo (Y) (o sull&amp;#39;host (N))?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005" />
        <source>The wallet's refresh-from-block-height setting is higher than the daemon's height: this may mean your wallet will skip over transactions</source>
        <translation>L&amp;#39;impostazione refresh-from-block-height del portafoglio è superiore all&amp;#39;altezza del demone: questo potrebbe significare che il tuo portafoglio salterà le transazioni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6155" />
        <source> (Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation> (Alcuni output di proprietà hanno immagini chiave mancanti: sono necessari export_outputs, import_outputs, export_key_images e import_key_images)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171" />
        <source>Asset: </source>
        <translation>Risorsa: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10353" />
        <source>, balance: </source>
        <translation>, bilancia: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6494" />
        <source>failed to connect to daemon</source>
        <translation>Impossibile connettersi al demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6595" />
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>, che può rompere l&amp;#39;anonimato delle firme ad anello. Assicurati che sia intenzionale!
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653" />
        <source>I locked your Salvium wallet to protect you while you were away
see "help set" to configure/disable</source>
        <translation>Ho bloccato il tuo portafoglio Salvium per proteggerti mentre eri via. Consulta &amp;quot;help set&amp;quot; per configurare/disattivare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6673" />
        <source>Locked due to inactivity.</source>
        <translation>Bloccato per inattività.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6674" />
        <source>The wallet password is required to unlock the console.</source>
        <translation>Per sbloccare la console è necessaria la password del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6681" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10838" />
        <source>Testnet</source>
        <translation>Rete di prova</translation>
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
        <translation>Rete principale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073" />
        <source>Burning %s %s.  </source>
        <translation>Masterizzazione di %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7075" />
        <source>Converting %s %s to %s.  </source>
        <translation>Conversione di %s %s in %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7077" />
        <source>Staking %s %s for yield accrual.  </source>
        <translation>Picchettamento di %s %s per accumulo di rendimento.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7079" />
        <source>Sending %s %s.  </source>
        <translation>Invio di %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7098" />
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>Questa transazione (inclusa la modifica di %s) verrà sbloccata in %llu blocchi, circa %s giorni (ipotizzando 2 minuti per blocco)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975" />
        <source>Invalid account</source>
        <translation>Account non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8006" />
        <source>return_payments are disabled</source>
        <translation>return_payments sono disabilitati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8042" />
        <source>incorrect TX type for txid </source>
        <translation>tipo TX non corretto per txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8048" />
        <source>invalid return_address_list for txid </source>
        <translation>return_address_list non valido per txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054" />
        <source>invalid return_address/return_pubkey for txid </source>
        <translation>return_address/return_pubkey non valido per txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8061" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8072" />
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid </source>
        <translation>l&amp;#39;immagine chiave non è disponibile (parziale / sconosciuta / esaurita / congelata) per txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8104" />
        <source>Returning %s for a total fee of %s.  Is this okay?</source>
        <translation>Restituzione di %s per una commissione totale di %s. Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8134" />
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>la firma a freddo dei TX di ritorno non è ancora implementata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8224" />
        <source>conversions are disabled until hard fork </source>
        <translation>le conversioni sono disabilitate fino all&amp;#39;hard fork </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8231" />
        <source>missing / extraneous argument(s)</source>
        <translation>argomenti mancanti/estranei</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8247" />
        <source>invalid slippage_limit value : expected 0.0-90.0, got </source>
        <translation>valore slippage_limit non valido: previsto 0,0-90,0, ottenuto </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8258" />
        <source>invalid argument(s): </source>
        <translation>argomenti non validi: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8264" />
        <source>out of range for slippage limit: </source>
        <translation>fuori portata per il limite di slittamento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8274" />
        <source>invalid destination asset_type</source>
        <translation>asset_type di destinazione non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8284" />
        <source>invalid source asset_type</source>
        <translation>tipo di risorsa sorgente non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8293" />
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>conversione non valida - asset_type non è cambiato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8318" />
        <source>This is a multisig wallet, staking is not currently supported</source>
        <translation>Questo è un portafoglio multisig, lo staking non è attualmente supportato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8356" />
        <source>%s
	SPOT:	%d
	MA:	%d</source>
        <translation>%s PUNTO: %d MA: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8380" />
        <source>SUPPLY INFO</source>
        <translation>INFORMAZIONI SULLA FORNITURA</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8391" />
        <source>	%6s : %21.8d</source>
        <translation>	%6s: %21.8d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8418" />
        <source>
STAKED FUNDS:</source>
        <translation>
FONDI IN GARANZIA:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8424" />
        <source>Height %d, txid %s, staked %s SAL, earned %s SAL</source>
        <translation>Altezza %d, txid %s, puntati %s SAL, guadagnati %s SAL</translation>
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
INFORMAZIONI SULLA RENDITA: Fornitura di monete bruciate negli ultimi %s: %d Totale monete bloccate: %d Rendimento maturato negli ultimi %s: %d Rendimento per SAL puntato: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8504" />
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>Donazione di %s %s al Salvium Team (donate.salvium.io o %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8855" />
        <source>Last argument is an address, but not a subaddress</source>
        <translation>L&amp;#39;ultimo argomento è un indirizzo, ma non un sottoindirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8909" />
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>Potrebbe essere perché il trasferimento è stato a un subindirizzo. Se è questo il caso, passa il subindirizzo per ultimo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9604" />
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>utilizzo: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|stacked|yield] [index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9663" />
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>utilizzo: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|stacked|yield] [indice=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [uscita=&lt;path&gt; ] [opzione=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>tx key</source>
        <translation>tasto tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10352" />
        <source>
Grand total:
  Asset: </source>
        <translation>
Totale generale: Attività: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Asset</source>
        <translation>Risorsa</translation>
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
        <translation>Ci si aspettava esattamente un argomento per la quantità di nuovi indirizzi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10467" />
        <source>failed to parse the amount of new addresses: </source>
        <translation>impossibile analizzare la quantità di nuovi indirizzi: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10472" />
        <source>the amount of new addresses must be lower or equal to </source>
        <translation>la quantità di nuovi indirizzi deve essere inferiore o uguale a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10487" />
        <source>Expected exactly two arguments for index</source>
        <translation>Sono previsti esattamente due argomenti per l&amp;#39;indice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10497" />
        <source>Address at %u %u: %s</source>
        <translation>Indirizzo a %u %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10630" />
        <source>Standard address: %s, payment ID: %s</source>
        <translation>Indirizzo standard: %s, ID pagamento: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10886" />
        <source>Invalid subaddress index format, and not a signature type: </source>
        <translation>Formato indice sottoindirizzo non valido e non tipo di firma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11511" />
        <source> (Y/Yes/N/No): </source>
        <translation> (S/Sì/N/No): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11517" />
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>ATTENZIONE: l&amp;#39;utilizzo dei meccanismi di configurazione automatica MMS non è affidabile</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11518" />
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers' info</source>
        <translation>Un gestore di auto-configurazione dannoso potrebbe inviarti informazioni sui tuoi portafogli invece delle informazioni di altri firmatari</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11519" />
        <source>If in doubt do not use auto-config or at least compare configs using the "mms config_checksum" command</source>
        <translation>In caso di dubbi non utilizzare la configurazione automatica o almeno confrontare le configurazioni utilizzando il comando &amp;quot;mms config_checksum&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11546" />
        <source>Choose processing:</source>
        <translation>Scegli l&amp;#39;elaborazione:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11555" />
        <source>Sign tx</source>
        <translation>Firma tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11563" />
        <source>Send the tx for submission to </source>
        <translation>Inviare la tx per l&amp;#39;invio a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11567" />
        <source>Send the tx for signing to </source>
        <translation>Inviare la tx per la firma a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11574" />
        <source>Submit tx</source>
        <translation>Invia tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11577" />
        <source>unknown</source>
        <translation>sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11583" />
        <source>Choice: </source>
        <translation>Scelta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11595" />
        <source>Wrong choice</source>
        <translation>Scelta sbagliata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>I/O</source>
        <translation>I/O</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>Authorized Signer</source>
        <translation>Firmatario autorizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Message Type</source>
        <translation>Tipo di messaggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Height</source>
        <translation>Altezza</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Message State</source>
        <translation>Stato del messaggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Since</source>
        <translation>Da</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11620" />
        <source> ago</source>
        <translation> fa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>Transport Address</source>
        <translation>Indirizzo di trasporto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627" />
        <source>Auto-Config Token</source>
        <translation>Token di configurazione automatica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627" />
        <source>Salvium Address</source>
        <translation>Indirizzo Salvium</translation>
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
        <translation>Messaggio </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683" />
        <source>In/out: </source>
        <translation>Dentro/fuori: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11685" />
        <source>State: </source>
        <translation>Stato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11685" />
        <source>%s since %s, %s ago</source>
        <translation>%s da %s, %s fa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11689" />
        <source>Sent: Never</source>
        <translation>Inviato: Mai</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11693" />
        <source>Sent: %s, %s ago</source>
        <translation>Inviato: %s, %s fa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11696" />
        <source>Authorized signer: </source>
        <translation>Firmatario autorizzato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11697" />
        <source>Content size: </source>
        <translation>Dimensione del contenuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11697" />
        <source> bytes</source>
        <translation> byte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11698" />
        <source>Content: </source>
        <translation>Contenuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11698" />
        <source>(binary data)</source>
        <translation>(dati binari)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11728" />
        <source>Send these messages now?</source>
        <translation>Inviare questi messaggi ora?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11738" />
        <source>Queued for sending.</source>
        <translation>In coda per l&amp;#39;invio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11758" />
        <source>Invalid message id</source>
        <translation>ID messaggio non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11767" />
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>utilizzo: mms init&lt;required_signers&gt; /&lt;authorized_signers&gt;&lt;own_label&gt;&lt;own_transport_address&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11773" />
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>L&amp;#39;MMS è già inizializzato. Reinizializzare eliminando tutte le informazioni e i messaggi del firmatario?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11788" />
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>Errore nel numero di firmatari richiesti e/o firmatari autorizzati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11805" />
        <source>The MMS is not active.</source>
        <translation>L&amp;#39;MMS non è attivo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11828" />
        <source>Invalid signer number </source>
        <translation>Numero firmatario non valido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11833" />
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>firmatario mms [&lt;number&gt; &lt;label&gt;[&lt;/label&gt;&lt;transport_address&gt; &lt;label&gt;[&lt;/label&gt;&lt;salvium_address&gt; &lt;label&gt;]]]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11852" />
        <source>Invalid Salvium address</source>
        <translation>Indirizzo Salvium non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11859" />
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>Lo stato del portafoglio non consente più di modificare gli indirizzi Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11871" />
        <source>Usage: mms list</source>
        <translation>Utilizzo: elenco mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11884" />
        <source>Usage: mms next [sync]</source>
        <translation>Utilizzo: mms next [sync]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11909" />
        <source>No next step: </source>
        <translation>Nessun passaggio successivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11919" />
        <source>prepare_multisig</source>
        <translation>preparare_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11925" />
        <source>make_multisig</source>
        <translation>crea_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11940" />
        <source>exchange_multisig_keys</source>
        <translation>scambia_chiavi_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11956" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="12080" />
        <source>export_multisig_info</source>
        <translation>esporta_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11965" />
        <source>import_multisig_info</source>
        <translation>importa_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11978" />
        <source>sign_multisig</source>
        <translation>segno_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11988" />
        <source>submit_multisig</source>
        <translation>invia_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11998" />
        <source>Send tx</source>
        <translation>Invia tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12009" />
        <source>Process signer config</source>
        <translation>Configurazione del firmatario del processo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12021" />
        <source>Replace current signer config with the one displayed above?</source>
        <translation>Sostituire la configurazione del firmatario corrente con quella visualizzata sopra?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12027" />
        <source>You can use the "mms delete" command to delete any unwanted message</source>
        <translation>Puoi usare il comando &amp;quot;mms delete&amp;quot; per eliminare qualsiasi messaggio indesiderato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12040" />
        <source>Process auto config data</source>
        <translation>Elaborare i dati di configurazione automatica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12054" />
        <source>Nothing ready to process</source>
        <translation>Niente pronto per l&amp;#39;elaborazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12073" />
        <source>Usage: mms sync</source>
        <translation>Utilizzo: sincronizzazione mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12097" />
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>Utilizzo: mms elimina (&lt;message_id&gt; | tutti)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12104" />
        <source>Delete all messages?</source>
        <translation>Eliminare tutti i messaggi?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12130" />
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>Utilizzo: invio mms [&lt;message_id&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12147" />
        <source>Usage: mms receive</source>
        <translation>Utilizzo: ricezione mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12164" />
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>Utilizzo: esportazione mms&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12175" />
        <source>Message content saved to: </source>
        <translation>Contenuto del messaggio salvato in: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12179" />
        <source>Failed to to save message content</source>
        <translation>Impossibile salvare il contenuto del messaggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12203" />
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>Utilizzo: nota mms [&lt;text&gt; &lt;label&gt;]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12210" />
        <source>No signer found with label </source>
        <translation>Nessun firmatario trovato con etichetta </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12232" />
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>Utilizzo: mms show&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12250" />
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>Utilizzo: set mms&lt;option_name&gt; [&lt;option_value&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12267" />
        <source>Wrong option value</source>
        <translation>Valore dell&amp;#39;opzione errato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12272" />
        <source>Auto-send is on</source>
        <translation>L&amp;#39;invio automatico è attivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12272" />
        <source>Auto-send is off</source>
        <translation>L&amp;#39;invio automatico è disattivato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12277" />
        <source>Unknown option</source>
        <translation>Opzione sconosciuta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12285" />
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>Utilizzo: aiuto mms [&lt;subcommand&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12301" />
        <source>Usage: mms send_signer_config</source>
        <translation>Utilizzo: mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12307" />
        <source>Signer config not yet complete</source>
        <translation>La configurazione del firmatario non è ancora completa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12322" />
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>Utilizzo: mms start_auto_config [ &lt;label&gt;...]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12327" />
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>Ci sono firmatari senza un set di etichette. Completa le etichette prima della configurazione automatica o specificale come parametri qui.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12333" />
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>La configurazione automatica è già in esecuzione. Annullare e riavviare?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12357" />
        <source>Usage: mms config_checksum</source>
        <translation>Utilizzo: mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12369" />
        <source>Usage: mms stop_auto_config</source>
        <translation>Utilizzo: mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12372" />
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>Eliminare tutti i token di configurazione automatica e interrompere la configurazione automatica?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12385" />
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>Utilizzo: mms auto_config&lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12392" />
        <source>Invalid auto-config token</source>
        <translation>Token di configurazione automatica non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12402" />
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>Configurazione automatica già in esecuzione. Annullare e riavviare?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12421" />
        <source>MMS not available in this wallet</source>
        <translation>MMS non disponibile in questo portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12445" />
        <source>The MMS is not active. Activate using the "mms init" command</source>
        <translation>L&amp;#39;MMS non è attivo. Attivare tramite il comando &amp;quot;mms init&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12526" />
        <source>Invalid MMS subcommand</source>
        <translation>Sottocomando MMS non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12531" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="12535" />
        <source>Error in MMS command: </source>
        <translation>Errore nel comando MMS: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10857" />
        <source>wallet is watch-only and cannot sign</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non può firmare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10862" />
        <source>This wallet is multisig and cannot sign</source>
        <translation>Questo portafoglio è multisig e non può firmare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10936" />
        <source>Bad signature from </source>
        <translation>Firma errata da </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10940" />
        <source>Good signature from </source>
        <translation>Buona firma da </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10956" />
        <source>wallet is watch-only and cannot export key images</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non può esportare immagini chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10994" />
        <source>Signed key images exported to </source>
        <translation>Immagini chiave firmate esportate in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11039" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11085" />
        <source>command only supported by HW wallet</source>
        <translation>comando supportato solo dal portafoglio HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11044" />
        <source>hw wallet does not support cold KI sync</source>
        <translation>hw wallet non supporta la sincronizzazione KI a freddo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11056" />
        <source>Please confirm the key image sync on the device</source>
        <translation>Si prega di confermare la sincronizzazione dell&amp;#39;immagine chiave sul dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11062" />
        <source>Key images synchronized to height </source>
        <translation>Immagini chiave sincronizzate all&amp;#39;altezza </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11065" />
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>In esecuzione un daemon non attendibile, non è possibile determinare quale output di transazione è stato speso. Utilizzare un daemon attendibile con --trusted-daemon ed eseguire rescan_spent</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11068" />
        <source> spent, </source>
        <translation> speso, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11068" />
        <source> unspent</source>
        <translation> non speso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11072" />
        <source>Failed to import key images</source>
        <translation>Impossibile importare le immagini chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11077" />
        <source>Failed to import key images: </source>
        <translation>Impossibile importare le immagini chiave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11094" />
        <source>Failed to reconnect device</source>
        <translation>Impossibile riconnettere il dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11099" />
        <source>Failed to reconnect device: </source>
        <translation>Impossibile riconnettere il dispositivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11151" />
        <source>Outputs exported to </source>
        <translation>Output esportati in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11306" />
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>Doppia spesa rilevata sulla rete: questa transazione potrebbe finire o meno per essere minata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11341" />
        <source>Transaction ID not found</source>
        <translation>ID transazione non trovato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11376" />
        <source>Transaction successfully saved to </source>
        <translation>Transazione salvata con successo su </translation>
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
        <translation>Impossibile salvare la transazione in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="408" />
        <source>true</source>
        <translation>VERO</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="461" />
        <source>failed to parse refresh type</source>
        <translation>impossibile analizzare il tipo di aggiornamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="881" />
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Inserisci la passphrase di offset del seed opzionale, lasciala vuota per vedere il seed grezzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4342" />
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Inserisci la passphrase offset del seed, vuota se non è presente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5342" />
        <source>You may want to remove the file "%s" and try again</source>
        <translation>Potresti voler rimuovere il file &amp;quot;%s&amp;quot; e riprovare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8685" />
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Questo è un portafoglio multisig, può firmare solo con sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8690" />
        <source>This is a watch only wallet</source>
        <translation>Questo è un portafoglio solo per orologio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8722" />
        <source>Failed to sign transaction</source>
        <translation>Impossibile firmare la transazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8728" />
        <source>Failed to sign transaction: </source>
        <translation>Impossibile firmare la transazione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8749" />
        <source>Transaction raw hex data exported to </source>
        <translation>Dati esadecimali grezzi della transazione esportati in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8770" />
        <source>Failed to load transaction from file</source>
        <translation>Impossibile caricare la transazione dal file</translation>
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
        <translation>impossibile analizzare txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8430" />
        <source>Height %d (matures %d), txid %s, staked %s SAL, %s SAL accrued so far</source>
        <translation>Altezza %d (scade %d), txid %s, puntato %s SAL, %s SAL maturati finora</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8828" />
        <source>Tx key: </source>
        <translation>Tasto Tx: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8833" />
        <source>no tx keys found for this txid</source>
        <translation>nessuna chiave tx trovata per questo txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8876" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8887" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8894" />
        <source>failed to parse tx_key</source>
        <translation>impossibile analizzare tx_key</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8903" />
        <source>Tx key successfully stored.</source>
        <translation>Chiave Tx memorizzata correttamente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8907" />
        <source>Failed to store tx key: </source>
        <translation>Impossibile memorizzare la chiave tx: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8943" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9155" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9244" />
        <source>signature file saved to: </source>
        <translation>file della firma salvato in: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8945" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9157" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9246" />
        <source>failed to save signature file</source>
        <translation>impossibile salvare il file della firma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8949" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9037" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9115" />
        <source>error: </source>
        <translation>errore: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8982" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8991" />
        <source>failed to parse tx key</source>
        <translation>impossibile analizzare la chiave tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9013" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9086" />
        <source>received</source>
        <translation>ricevuto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9013" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9086" />
        <source>in txid</source>
        <translation>nel txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9016" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9089" />
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>ATTENZIONE: questa transazione non è ancora inclusa nella blockchain!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9026" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9099" />
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>ATTENZIONE: impossibile determinare il numero di conferme!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9032" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9105" />
        <source>received nothing in txid</source>
        <translation>non ho ricevuto nulla in txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9186" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9280" />
        <source>failed to load signature file</source>
        <translation>impossibile caricare il file della firma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9083" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9193" />
        <source>Good signature</source>
        <translation>Buona firma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9110" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9195" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9295" />
        <source>Bad signature</source>
        <translation>Firma errata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9134" />
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non può generare la prova</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9218" />
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>La prova di riserva può essere generata solo da un portafoglio pieno</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9273" />
        <source>Address must not be a subaddress</source>
        <translation>L&amp;#39;indirizzo non deve essere un sottoindirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9400" />
        <source>bad min_height parameter:</source>
        <translation>parametro min_height non valido:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9412" />
        <source>bad max_height parameter:</source>
        <translation>parametro max_height non valido:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9434" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>block</source>
        <translation>bloccare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9434" />
        <source>in</source>
        <translation>In</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9525" />
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[Doppia spesa rilevata sulla rete: questa transazione potrebbe finire o meno per essere minata] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9813" />
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt;dovrebbe essere più piccolo di&lt;max_amount&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9839" />
        <source>There is no unspent output in the specified address</source>
        <translation>Non c&amp;#39;è alcun output non speso nell&amp;#39;indirizzo specificato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845" />
        <source>
Amount: </source>
        <translation>
Quantità: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845" />
        <source>, number of keys: </source>
        <translation>, numero di chiavi: </translation>
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
Altezza minima del blocco: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9856" />
        <source>
Max block height: </source>
        <translation>
Altezza massima del blocco: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9857" />
        <source>
Min amount found: </source>
        <translation>
Importo minimo trovato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9858" />
        <source>
Max amount found: </source>
        <translation>
Quantità massima trovata: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9859" />
        <source>
Total count: </source>
        <translation>
Conteggio totale: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9899" />
        <source>
Bin size: </source>
        <translation>
Ottienilo per te: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9900" />
        <source>
Outputs per *: </source>
        <translation>
Output per *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9902" />
        <source>count
  ^
</source>
        <translation>contare ^
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
        <translation>+--&amp;gt; altezza del blocco
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
        <translation>Attenzione: questa operazione comporterà la perdita di tutte le informazioni che non potranno essere recuperate dalla blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9954" />
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Ciò include indirizzi di destinazione, chiavi segrete di trasmissione, note di trasmissione, ecc.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9291" />
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Firma valida -- totale: %s, speso: %s, non speso: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094" />
        <source>First line is not an amount</source>
        <translation>La prima riga non è un importo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108" />
        <source>Invalid output: </source>
        <translation>Output non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2133" />
        <source>Invalid output key, and file doesn't exist</source>
        <translation>Chiave di output non valida e il file non esiste</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2156" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2183" />
        <source>Invalid output</source>
        <translation>Output non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2671" />
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>argomento non valido: deve essere 0/mai, 1/azione o 2/cifra/decifra</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3377" />
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included)</source>
        <translation>Trasferire&lt;amount&gt; A&lt;address&gt; e bloccarlo per&lt;lockblocks&gt; (max. 1000000). Se il parametro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; è specificato, il portafoglio utilizza gli output ricevuti dagli indirizzi di quegli indici. Se omesso, il portafoglio sceglie casualmente gli indici degli indirizzi da utilizzare. In ogni caso, fa del suo meglio per non combinare gli output su più indirizzi.&lt;priority&gt; è la priorità della transazione. Maggiore è la priorità, maggiore è la commissione di transazione. I valori validi in ordine di priorità (dal più basso al più alto) sono: unimportant, normal, elevation, priority. Se omesso, viene utilizzato il valore predefinito (vedere il comando &amp;quot;set priority&amp;quot;).&lt;ring_size&gt; è il numero di input da includere per l&amp;#39;irrintracciabilità. È possibile effettuare più pagamenti contemporaneamente aggiungendo URI_2 o&lt;address_2&gt;&lt;amount_2&gt; eccetera (prima dell&amp;#39;ID del pagamento, se incluso)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5946" />
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Password richiesta (%s) - utilizzare il comando di aggiornamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10114" />
        <source>Daemon requests payment at diff %llu, with %f credits/hash%s. Run start_mining_for_rpc to start mining to pay for RPC access, or use another daemon</source>
        <translation>Il demone richiede il pagamento a diff %llu, con %f crediti/hash%s. Esegui start_mining_for_rpc per iniziare il mining per pagare l&amp;#39;accesso RPC, oppure usa un altro demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10141" />
        <source>Error mining to daemon: </source>
        <translation>Errore durante l&amp;#39;estrazione sul demone: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10147" />
        <source>Failed to start mining for RPC payment</source>
        <translation>Impossibile avviare il mining per il pagamento RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10159" />
        <source>wallet</source>
        <translation>portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10161" />
        <source> (no daemon)</source>
        <translation> (nessun demone)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10163" />
        <source> (out of sync)</source>
        <translation> (fuori sincrono)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10214" />
        <source>(Untitled account)</source>
        <translation>(Account senza titolo)</translation>
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
        <translation>impossibile analizzare l&amp;#39;indice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10232" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10508" />
        <source>specify an index between 0 and </source>
        <translation>specificare un indice compreso tra 0 e </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10354" />
        <source>, unlocked balance: </source>
        <translation>, saldo sbloccato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10364" />
        <source>Untagged accounts:</source>
        <translation>Account non taggati:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10370" />
        <source>Tag %s is unregistered.</source>
        <translation>Il tag %s non è registrato.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10373" />
        <source>Accounts with tag: </source>
        <translation>Account con tag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10374" />
        <source>Tag's description: </source>
        <translation>Descrizione del tag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Account</source>
        <translation>Account</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10430" />
        <source>Primary address</source>
        <translation>Indirizzo principale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10430" />
        <source>(used)</source>
        <translation>(usato)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10451" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10477" />
        <source>(Untitled address)</source>
        <translation>(Indirizzo senza titolo)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10535" />
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt;è già fuori limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10540" />
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt;supera il limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10604" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10617" />
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Gli indirizzi integrati possono essere creati solo per l&amp;#39;account 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10609" />
        <source>Matching integrated address: </source>
        <translation>Indirizzo integrato corrispondente: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10636" />
        <source>Subaddress: </source>
        <translation>Sottoindirizzo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10636" />
        <source>Standard address: </source>
        <translation>Indirizzo standard: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10641" />
        <source>failed to parse payment ID or address</source>
        <translation>impossibile analizzare l&amp;#39;ID o l&amp;#39;indirizzo del pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10678" />
        <source>failed to parse index</source>
        <translation>impossibile analizzare l&amp;#39;indice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10686" />
        <source>Address book is empty.</source>
        <translation>La rubrica è vuota.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10692" />
        <source>Index: </source>
        <translation>Indice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10698" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10828" />
        <source>Address: </source>
        <translation>Indirizzo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10699" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10827" />
        <source>Description: </source>
        <translation>Descrizione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10784" />
        <source>no description found</source>
        <translation>nessuna descrizione trovata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10786" />
        <source>description found: </source>
        <translation>descrizione trovata: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6679" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10826" />
        <source>Filename: </source>
        <translation>Nome file: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10831" />
        <source>Watch only</source>
        <translation>Guarda solo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10833" />
        <source>%u/%u multisig%s</source>
        <translation>%u/%u multifirma%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8648" />
        <source>%s change to %s</source>
        <translation>%s cambia in %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9022" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9095" />
        <source>This transaction has %u confirmations</source>
        <translation>Questa transazione ha %u conferme</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61" />
        <source>Filename to save the certificate</source>
        <translation>Nome file in cui salvare il certificato</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62" />
        <source>Filename to save the private key</source>
        <translation>Nome file in cui salvare la chiave privata</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63" />
        <source>Passphrase with which to encrypt the private key</source>
        <translation>Passphrase con cui crittografare la chiave privata</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64" />
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>File contenente la passphrase con cui crittografare la chiave privata</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65" />
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>Richiedi una passphrase con cui crittografare la chiave privata</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143" />
        <source>Argument is needed: </source>
        <translation>È necessaria una discussione: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153" />
        <source>Failed to read passphrase</source>
        <translation>Impossibile leggere la passphrase</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188" />
        <source>Failed to create certificate</source>
        <translation>Impossibile creare il certificato</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206" />
        <source>Failed to write certificate: </source>
        <translation>Impossibile scrivere il certificato: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226" />
        <source>Failed to write private key: </source>
        <translation>Impossibile scrivere la chiave privata: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237" />
        <source>Failed to save certificate file</source>
        <translation>Impossibile salvare il file del certificato</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243" />
        <source>Failed to save private key file</source>
        <translation>Impossibile salvare il file della chiave privata</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69" />
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Nome file di base (i suffissi -1, -2, ecc. verranno aggiunti se necessario)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70" />
        <source>Give threshold and participants at once as M/N</source>
        <translation>Fornisci la soglia e i partecipanti contemporaneamente come M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71" />
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>Quanti partecipanti condivideranno parti del portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72" />
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Quanti firmatari sono necessari per firmare una transazione valida?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73" />
        <source>Create testnet multisig wallets</source>
        <translation>Crea portafogli multisig di testnet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74" />
        <source>Create stagenet multisig wallets</source>
        <translation>Crea portafogli multisig stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75" />
        <source>Create an address file for new wallets</source>
        <translation>Crea un file di indirizzi per i nuovi portafogli</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80" />
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Generazione di portafogli multisig %u %u/%u</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="137" />
        <source>Generated multisig wallets for address </source>
        <translation>Generati portafogli multisig per indirizzo </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="141" />
        <source>Error creating multisig wallets: </source>
        <translation>Errore durante la creazione dei portafogli multisig: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="166" />
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Questo programma genera un set di portafogli multisig: utilizzare questo schema più semplice solo se tutti i partecipanti si fidano l&amp;#39;uno dell&amp;#39;altro</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="185" />
        <source>Error: Can't specify more than one of --testnet and --stagenet</source>
        <translation>Errore: non è possibile specificare più di uno tra --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="192" />
        <source>Error: expected N/M, but got: </source>
        <translation>Errore: previsto N/M, ma ottenuto: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="200" />
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="209" />
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Errore: è possibile specificare --scheme o entrambi --threshold e --participants</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216" />
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Errore: previsto N &amp;gt; 1 e N &amp;lt;= M, ma ottenuto N==%u e M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225" />
        <source>Error: --filename-base is required</source>
        <translation>Errore: --filename-base è obbligatorio</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72" />
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>Utilizzare l&amp;#39;istanza PyBitmessage all&amp;#39;URL&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73" />
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>Specificare&lt;arg&gt; come nome utente:password per l&amp;#39;API PyBitmessage</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911" />
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>La configurazione automatica non può procedere perché i dati di configurazione automatica degli altri firmatari non sono completi</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936" />
        <source>The signer config is not complete.</source>
        <translation>La configurazione del firmatario non è completa.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988" />
        <source>Wallet can't go multisig because key sets from other signers are missing or not complete.</source>
        <translation>Il portafoglio non può essere multisig perché i set di chiavi degli altri firmatari sono mancanti o non completi.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030" />
        <source>Wallet can't start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>Il portafoglio non può avviare un altro round di scambio di chiavi perché i set di chiavi degli altri firmatari sono mancanti o non completi.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094" />
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>Sincronizzazione non eseguita perché i dati di sincronizzazione multisig degli altri firmatari sono mancanti o non completi.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208" />
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>Ci sono messaggi in attesa, ma nulla è pronto per essere elaborato in circostanze normali</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211" />
        <source>
Use "mms next sync" if you want to force processing of the waiting sync data</source>
        <translation>
Utilizzare &amp;quot;mms next sync&amp;quot; se si desidera forzare l&amp;#39;elaborazione dei dati di sincronizzazione in attesa</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215" />
        <source>
Use "mms note" to display the waiting notes</source>
        <translation>
Utilizzare &amp;quot;mms note&amp;quot; per visualizzare le note in attesa</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220" />
        <source>There are no messages waiting to be processed.</source>
        <translation>Non ci sono messaggi in attesa di elaborazione.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441" />
        <source>key set</source>
        <translation>set di chiavi</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443" />
        <source>additional key set</source>
        <translation>set di chiavi aggiuntivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445" />
        <source>multisig sync data</source>
        <translation>dati di sincronizzazione multisig</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447" />
        <source>partially signed tx</source>
        <translation>tx parzialmente firmato</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449" />
        <source>fully signed tx</source>
        <translation>tx completamente firmato</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451" />
        <source>note</source>
        <translation>nota</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453" />
        <source>signer config</source>
        <translation>configurazione del firmatario</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455" />
        <source>auto-config data</source>
        <translation>dati di configurazione automatica</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457" />
        <source>unknown message type</source>
        <translation>tipo di messaggio sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466" />
        <source>in</source>
        <translation>In</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468" />
        <source>out</source>
        <translation>fuori</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470" />
        <source>unknown message direction</source>
        <translation>direzione del messaggio sconosciuta</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479" />
        <source>ready to send</source>
        <translation>pronto per inviare</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481" />
        <source>sent</source>
        <translation>inviato</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483" />
        <source>waiting</source>
        <translation>in attesa</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485" />
        <source>processed</source>
        <translation>elaborato</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487" />
        <source>cancelled</source>
        <translation>annullato</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489" />
        <source>unknown message state</source>
        <translation>stato del messaggio sconosciuto</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="177" />
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Genera un nuovo portafoglio e salvalo su&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="178" />
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Genera un nuovo portafoglio dal dispositivo e salvalo su&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="179" />
        <source>Generate incoming-only wallet from view key</source>
        <translation>Genera un portafoglio solo in entrata dalla chiave di visualizzazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="180" />
        <source>Generate deterministic wallet from spend key</source>
        <translation>Genera un portafoglio deterministico dalla chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="181" />
        <source>Generate wallet from private keys</source>
        <translation>Genera portafoglio da chiavi private</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="182" />
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Genera un portafoglio master dalle chiavi del portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184" />
        <source>Language for mnemonic</source>
        <translation>Lingua per mnemonico</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="185" />
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Specificare il seed Electrum per il recupero/creazione del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="186" />
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Recupera il portafoglio utilizzando il seed mnemonico in stile Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="187" />
        <source>alias for --restore-deterministic-wallet</source>
        <translation>alias per --restore-deterministic-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="188" />
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Recupera il portafoglio multisig utilizzando il seed mnemonico in stile Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="189" />
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Genera chiavi di visualizzazione e spesa non deterministiche</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191" />
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>Ripristina dall&amp;#39;altezza stimata della blockchain alla data specificata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192" />
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>La transazione appena creata non verrà inoltrata alla rete Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="348" />
        <source>failed to read wallet password</source>
        <translation>impossibile leggere la password del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355" />
        <source>Enter a new password for the wallet</source>
        <translation>Inserisci una nuova password per il portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355" />
        <source>Wallet password</source>
        <translation>Password del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="433" />
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>argomento non valido: deve essere 0/1, vero/falso, sì/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="489" />
        <source>DNSSEC validation passed</source>
        <translation>Convalida DNSSEC superata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="493" />
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>ATTENZIONE: la convalida DNSSEC non è riuscita, questo indirizzo potrebbe non essere corretto!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="496" />
        <source>For URL: </source>
        <translation>Per URL: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="498" />
        <source> Salvium Address = </source>
        <translation> Indirizzo Salvium = </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="510" />
        <source>you have cancelled the transfer request</source>
        <translation>hai annullato la richiesta di trasferimento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="531" />
        <source>failed to parse index: </source>
        <translation>impossibile analizzare l&amp;#39;indice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="544" />
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>formato non valido per il lookahead del sottoindirizzo; deve essere&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="608" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nessuna connessione al demone. Assicurati che il demone sia in esecuzione.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="617" />
        <source>RPC error: </source>
        <translation>Errore RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="621" />
        <source>failed to get random outputs to mix: </source>
        <translation>non è riuscito a ottenere output casuali da mixare: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="628" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="636" />
        <source>Not enough money in unlocked balance</source>
        <translation>Non ci sono abbastanza soldi nel saldo sbloccato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="646" />
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>Non è stato possibile trovare un modo per creare transazioni. Questo è solitamente dovuto alla polvere che è così piccola che non può ripagarsi in commissioni, o al tentativo di inviare più denaro del saldo sbloccato, o al non lasciare abbastanza per le commissioni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="652" />
        <source>not enough outputs for specified ring size</source>
        <translation>non ci sono abbastanza uscite per la dimensione dell&amp;#39;anello specificata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655" />
        <source>output amount</source>
        <translation>importo in uscita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655" />
        <source>found outputs to use</source>
        <translation>trovati output da utilizzare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="657" />
        <source>Please use sweep_unmixable.</source>
        <translation>Si prega di utilizzare sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="661" />
        <source>transaction was not constructed</source>
        <translation>la transazione non è stata realizzata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669" />
        <source>Reason: </source>
        <translation>Motivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="688" />
        <source>failed to find a suitable way to split transactions</source>
        <translation>non è riuscito a trovare un modo adatto per dividere le transazioni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694" />
        <source>unknown transfer error: </source>
        <translation>errore di trasferimento sconosciuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699" />
        <source>Multisig error: </source>
        <translation>Errore multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="705" />
        <source>internal error: </source>
        <translation>errore interno: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="710" />
        <source>unexpected error: </source>
        <translation>errore imprevisto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714" />
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Si è verificato un errore, che potrebbe significare che il nodo sta tentando di farti riprovare a creare una transazione e di concentrarsi sugli output di tua proprietà. Oppure potrebbe trattarsi di un errore in buona fede. Potrebbe essere prudente disconnettersi da questo nodo e non provare a inviare una transazione immediatamente. In alternativa, connettiti a un altro nodo in modo che il nodo originale non possa correlare le informazioni.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726" />
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>Il file %s probabilmente memorizza le chiavi private del portafoglio! Usa un nome file diverso.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9309" />
        <source> seconds</source>
        <translation> secondi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9311" />
        <source> minutes</source>
        <translation> minuti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9313" />
        <source> hours</source>
        <translation> ore</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9315" />
        <source> days</source>
        <translation> giorni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9317" />
        <source> months</source>
        <translation> mesi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9318" />
        <source>a long time</source>
        <translation>un lungo periodo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11461" />
        <source>Unknown command: </source>
        <translation>Comando sconosciuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="190" />
        <source>Restore from specific blockchain height</source>
        <translation>Ripristina da un&amp;#39;altezza specifica della blockchain</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193" />
        <source>Create an address file for new wallets</source>
        <translation>Crea un file di indirizzi per i nuovi portafogli</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195" />
        <source>Display English language names</source>
        <translation>Visualizza i nomi in lingua inglese</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365" />
        <source>daemon is busy. Please try again later.</source>
        <translation>il demone è occupato. Riprova più tardi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="374" />
        <source>possibly lost connection to daemon</source>
        <translation>probabilmente è stata persa la connessione al demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="391" />
        <source>Error: </source>
        <translation>Errore: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="500" />
        <source>Is this OK?</source>
        <translation>Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="666" />
        <source>transaction %s was rejected by daemon</source>
        <translation>la transazione %s è stata rifiutata dal demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678" />
        <source>destination amount is zero</source>
        <translation>l&amp;#39;importo di destinazione è zero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="683" />
        <source>transaction has no destination</source>
        <translation>la transazione non ha destinazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="729" />
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>Il file %s esiste già. Vuoi sovrascriverlo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11436" />
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>Questo è il portafoglio Salvium della riga di comando. Deve connettersi a un demone Salvium per funzionare correttamente. ATTENZIONE: non riutilizzare le tue chiavi Salvium su un altro fork, A MENO CHE questo fork non abbia delle mitigazioni integrate per il riutilizzo delle chiavi. Ciò danneggerebbe la tua privacy.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11455" />
        <source>Failed to initialize wallet</source>
        <translation>Impossibile inizializzare il portafoglio</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="244" />
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Utilizzare l&amp;#39;istanza del demone in&lt;host&gt; :&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="245" />
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Utilizzare l&amp;#39;istanza del demone sull&amp;#39;host&lt;arg&gt; invece di localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251" />
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Utilizzare l&amp;#39;istanza del demone sulla porta&lt;arg&gt; invece di 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260" />
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Per testnet. Il demone deve essere avviato anche con il flag --testnet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="280" />
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>File contenente entropia extra per inizializzare il PRNG (qualsiasi dato, l&amp;#39;obiettivo è di avere 256 bit di entropia utili, il che in genere significa più di 256 bit di dati)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281" />
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>Consenti la comunicazione con un demone che utilizza una versione diversa</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375" />
        <source>can't specify daemon host or port more than once</source>
        <translation>non è possibile specificare l&amp;#39;host o la porta del demone più di una volta</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511" />
        <source>can't specify more than one of --password and --password-file</source>
        <translation>non è possibile specificare più di uno tra --password e --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="525" />
        <source>the password file specified could not be read</source>
        <translation>il file password specificato non può essere letto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="551" />
        <source>Failed to load file </source>
        <translation>Impossibile caricare il file </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="249" />
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Password del portafoglio (esc/virgolette se necessario)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="246" />
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt; :]&lt;port&gt; proxy SOCKS da utilizzare per le connessioni daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="247" />
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Abilita i comandi che si basano su un demone attendibile</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="248" />
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Disabilita i comandi che si basano su un demone attendibile</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252" />
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Specificare username[:password] per il client RPC demone</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253" />
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>Abilita SSL sulle connessioni RPC del demone: abilitato|disabilitato|rilevamento automatico</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="257" />
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>Elenco delle impronte digitali valide dei server RPC consentiti</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258" />
        <source>Allow any SSL certificate from the daemon</source>
        <translation>Consenti qualsiasi certificato SSL dal demone</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259" />
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>Consenti all&amp;#39;utente (tramite --daemon-ssl-ca-certificates) di concatenare i certificati</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261" />
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Per stagenet. Il demone deve essere lanciato anche con il flag --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263" />
        <source>Set shared ring database path</source>
        <translation>Imposta il percorso del database ad anello condiviso</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="274" />
        <source>Number of rounds for the key derivation function</source>
        <translation>Numero di round per la funzione di derivazione della chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="275" />
        <source>HW device to use</source>
        <translation>Dispositivo HW da utilizzare</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="276" />
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>Percorso di derivazione del portafoglio del dispositivo HW (ad esempio, SLIP-10)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="278" />
        <source>Do not use DNS</source>
        <translation>Non utilizzare DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="279" />
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>Non connettersi a un demone, né utilizzare DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="367" />
        <source>Invalid argument for </source>
        <translation>Argomento non valido per </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428" />
        <source>Enabling --</source>
        <translation>Abilitazione --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428" />
        <source> requires --</source>
        <translation> richiede --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="429" />
        <location filename="../src/wallet/wallet2.cpp" line="430" />
        <source> or --</source>
        <translation> O --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="430" />
        <source> or use of a .onion/.i2p domain</source>
        <translation> o utilizzo di un dominio .onion/.i2p</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="448" />
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon e --untrusted-daemon sono entrambi visibili, presupponendo che non siano attendibili</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="458" />
        <source>Daemon is local, assuming trusted</source>
        <translation>Il demone è locale, presupponendo attendibilità</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="468" />
        <source>failed to initialize the wallet</source>
        <translation>Impossibile inizializzare il portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532" />
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>nessuna password specificata; utilizzare --prompt-for-password per richiedere una password</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534" />
        <source>Enter a new password for the wallet</source>
        <translation>Inserisci una nuova password per il portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534" />
        <source>Wallet password</source>
        <translation>Password del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="557" />
        <source>Failed to parse JSON</source>
        <translation>Impossibile analizzare JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564" />
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Versione %u troppo nuova, possiamo solo capire fino a %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="580" />
        <source>failed to parse view key secret key</source>
        <translation>impossibile analizzare la chiave di visualizzazione della chiave segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="585" />
        <source>view secret key may not be all zeroes</source>
        <translation>la chiave segreta di visualizzazione potrebbe non essere composta da tutti zeri</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587" />
        <location filename="../src/wallet/wallet2.cpp" line="657" />
        <location filename="../src/wallet/wallet2.cpp" line="702" />
        <source>failed to verify view key secret key</source>
        <translation>Impossibile verificare la chiave di visualizzazione della chiave segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="598" />
        <source>failed to parse spend key secret key</source>
        <translation>impossibile analizzare la chiave segreta della chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="603" />
        <source>spend secret key may not be all zeroes</source>
        <translation>la chiave segreta di spesa potrebbe non essere composta da tutti zeri</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605" />
        <location filename="../src/wallet/wallet2.cpp" line="667" />
        <location filename="../src/wallet/wallet2.cpp" line="728" />
        <source>failed to verify spend key secret key</source>
        <translation>Impossibile verificare la chiave segreta della chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="617" />
        <source>Electrum-style word list failed verification</source>
        <translation>La verifica dell&amp;#39;elenco di parole in stile Electrum non è riuscita</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="637" />
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Deve essere specificato almeno uno tra un elenco di parole in stile Electrum, una chiave di visualizzazione privata o una chiave di spesa privata</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="641" />
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Sia l&amp;#39;elenco di parole in stile Electrum che le chiavi private sono specificate</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="651" />
        <source>invalid address</source>
        <translation>indirizzo non valido</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="660" />
        <source>view key does not match standard address</source>
        <translation>la chiave di visualizzazione non corrisponde all&amp;#39;indirizzo standard</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="670" />
        <source>spend key does not match standard address</source>
        <translation>la chiave di spesa non corrisponde all&amp;#39;indirizzo standard</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="678" />
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Impossibile generare portafogli deprecati da JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="714" />
        <source>failed to parse address: </source>
        <translation>impossibile analizzare l&amp;#39;indirizzo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="720" />
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>Per creare un portafoglio solo per l&amp;#39;orologio è necessario specificare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="737" />
        <source>failed to generate new wallet: </source>
        <translation>Impossibile generare un nuovo portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2172" />
        <source>Password is needed to compute key image for incoming SALs</source>
        <translation>La password è necessaria per calcolare l&amp;#39;immagine chiave per i SAL in arrivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2173" />
        <source>Invalid password: password is needed to compute key image for incoming SALs</source>
        <translation>Password non valida: la password è necessaria per calcolare l&amp;#39;immagine chiave per i SAL in arrivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3712" />
        <source>reorg exceeds maximum allowed depth, use 'set max-reorg-depth N' to allow it, reorg depth: </source>
        <translation>reorg supera la profondità massima consentita, utilizzare &amp;#39;set max-reorg-depth N&amp;#39; per consentirlo, profondità di reorg: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5600" />
        <location filename="../src/wallet/wallet2.cpp" line="6181" />
        <location filename="../src/wallet/wallet2.cpp" line="6670" />
        <source>Primary account</source>
        <translation>Account principale</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9041" />
        <source>Transaction sanity check failed</source>
        <translation>Controllo di integrità della transazione non riuscito</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11344" />
        <source>Incorrect number of transfers_indices on return_payment</source>
        <translation>Numero errato di transfers_indices su return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11346" />
        <source>cannot locate return_payment origin index in m_transfers</source>
        <translation>non è possibile individuare l&amp;#39;indice di origine del return_payment in m_transfers</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11374" />
        <source>at create_transactions_return(): incorrect number of additional TX pubkeys in origin TX for return_payment</source>
        <translation>in create_transactions_return(): numero errato di chiavi pubbliche TX aggiuntive nella TX di origine per return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11382" />
        <source>at create_transactions_return(): failed to generate_key_derivation</source>
        <translation>in create_transactions_return(): impossibile generare_derivazione_chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11427" />
        <source>Attempting to return change to ourself</source>
        <translation>Tentando di restituire il resto a noi stessi</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11432" />
        <source>Failed to identify change output</source>
        <translation>Impossibile identificare l&amp;#39;output della modifica</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11583" />
        <source>Transaction cannot pay for itself</source>
        <translation>La transazione non può ripagarsi da sola</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11679" />
        <source>Created transaction(s) failed sanity check</source>
        <translation>Le transazioni create non hanno superato il controllo di integrità</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12675" />
        <source>No funds received in this tx.</source>
        <translation>Nessun fondo ricevuto in questa transazione.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13587" />
        <source>failed to read file </source>
        <translation>impossibile leggere il file </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194" />
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Imposta le dimensioni del lookahead del sottoindirizzo su&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254" />
        <source>Path to a PEM format private key</source>
        <translation>Percorso verso una chiave privata in formato PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255" />
        <source>Path to a PEM format certificate</source>
        <translation>Percorso verso un certificato in formato PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256" />
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Percorso al file contenente i certificati in formato PEM concatenati per sostituire le CA di sistema.</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="219" />
        <source>Failed to create directory </source>
        <translation>Impossibile creare la directory </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="221" />
        <source>Failed to create directory %s: %s</source>
        <translation>Impossibile creare la directory %s: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232" />
        <source>Cannot specify --</source>
        <translation>Non è possibile specificare --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232" />
        <source> and --</source>
        <translation> E --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251" />
        <source>Failed to create file </source>
        <translation>Impossibile creare il file </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251" />
        <source>. Check permissions or remove file</source>
        <translation>. Controllare i permessi o rimuovere il file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="261" />
        <source>Error writing to file </source>
        <translation>Errore durante la scrittura nel file </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="264" />
        <source>RPC username/password is stored in file </source>
        <translation>Il nome utente/password RPC è memorizzato nel file </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="667" />
        <source>Tag %s is unregistered.</source>
        <translation>Il tag %s non è registrato.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="695" />
        <source>No matches for regex filter %s .</source>
        <translation>Nessuna corrispondenza per il filtro regex %s.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3588" />
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Transazione non possibile. Disponibile solo %s, importo transazione %s = %s + %s (commissione)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4596" />
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>Non è possibile specificare più di uno tra --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4615" />
        <source>Can't specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Non è possibile specificare più di uno tra --wallet-file e --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4621" />
        <source>--password-file is not allowed in combination with --wallet-dir</source>
        <translation>--password-file non è consentito in combinazione con --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4633" />
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>È necessario specificare --wallet-file o --generate-from-json o --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4637" />
        <source>Loading wallet...</source>
        <translation>Caricamento portafoglio...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4685" />
        <source>Initial refresh failed: </source>
        <translation>Aggiornamento iniziale non riuscito: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4690" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4722" />
        <source>Saving wallet...</source>
        <translation>Salvataggio del portafoglio...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4692" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4724" />
        <source>Successfully saved</source>
        <translation>Salvato con successo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4695" />
        <source>Successfully loaded</source>
        <translation>Caricato con successo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4699" />
        <source>Wallet initialization failed: </source>
        <translation>Inizializzazione del portafoglio non riuscita: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4705" />
        <source>Failed to initialize wallet RPC server</source>
        <translation>Impossibile inizializzare il server RPC del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4709" />
        <source>Starting wallet RPC server</source>
        <translation>Avvio del server RPC del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4716" />
        <source>Failed to run wallet: </source>
        <translation>Impossibile eseguire il portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4719" />
        <source>Stopped wallet RPC server</source>
        <translation>Arrestato il server RPC del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4728" />
        <source>Failed to save wallet: </source>
        <translation>Impossibile salvare il portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4802" />
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Questo è il portafoglio RPC Salvium. Deve connettersi a un demone Salvium per funzionare correttamente.</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="152" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11402" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4781" />
        <source>Wallet options</source>
        <translation>Opzioni del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73" />
        <source>Generate wallet from JSON format file</source>
        <translation>Genera portafoglio dal file in formato JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77" />
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Usa il portafoglio&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81" />
        <source>Set RPC client secret key for RPC payments</source>
        <translation>Imposta la chiave segreta del client RPC per i pagamenti RPC</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85" />
        <source>Wallet password file</source>
        <translation>File della password del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113" />
        <source>Max number of threads to use for a parallel job</source>
        <translation>Numero massimo di thread da utilizzare per un lavoro parallelo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114" />
        <source>Specify log file</source>
        <translation>Specificare il file di registro</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115" />
        <source>Config file</source>
        <translation>File di configurazione</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127" />
        <source>General options</source>
        <translation>Opzioni generali</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152" />
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Questo è il portafoglio Salvium della riga di comando. Deve connettersi a un demone Salvium per funzionare correttamente.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176" />
        <source>Can't find config file </source>
        <translation>Impossibile trovare il file di configurazione </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220" />
        <source>Logging to: </source>
        <translation>Accesso a: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222" />
        <source>Logging to %s</source>
        <translation>Accesso a %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226" />
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>ATTENZIONE: il limite di memoria bloccabile potrebbe non essere sufficientemente alto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228" />
        <source>see ulimit -l</source>
        <translation>vedere ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153" />
        <source>Usage:</source>
        <translation>Utilizzo:</translation>
    </message>
</context>
</TS>