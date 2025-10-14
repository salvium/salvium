<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>Indirizzo di destinazione non valido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60"/>
        <source>Payment ID supplied: this is obsolete</source>
        <translation>ID pagamento fornito: obsoleto</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Tentativo di salvare la transazione su file, ma il file specificato esiste. Uscita per non rischiare di sovrascrivere. File:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Impossibile scrivere le transazioni nel file</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>il demone è occupato. Riprova più tardi.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nessuna connessione al demone. Assicurati che il demone sia in esecuzione.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>la transazione %s è stata rifiutata dal demone con stato: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151"/>
        <source>. Reason: </source>
        <translation>. Motivo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153"/>
        <source>Unknown exception: </source>
        <translation>Eccezione sconosciuta: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156"/>
        <source>Unhandled exception</source>
        <translation>Eccezione non gestita</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="241"/>
        <source>Couldn&apos;t multisig sign data: </source>
        <translation>Impossibile firmare i dati multifirma: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="263"/>
        <source>Couldn&apos;t sign multisig transaction: </source>
        <translation>Impossibile firmare la transazione multisig: </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>Questo è un portafoglio solo per orologio</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>Impossibile firmare la transazione</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Il resto richiesto non viene inviato a un indirizzo a pagamento</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Il resto richiesto è maggiore del pagamento all&amp;#39;indirizzo di cambio</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184"/>
        <source>Change goes to more than one address</source>
        <translation>Il resto va a più di un indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>sending %s to %s</source>
        <translation>invio di %s a %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>with no destinations</source>
        <translation>senza destinazioni</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209"/>
        <source>%s change to %s</source>
        <translation>%s cambia in %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212"/>
        <source>no change</source>
        <translation>nessun cambiamento</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>Caricate %lu transazioni, per %s, commissione %s, %s, %s, con dimensione minima dell&amp;#39;anello %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="596"/>
        <source>failed to parse address</source>
        <translation>impossibile analizzare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="607"/>
        <source>failed to parse secret spend key</source>
        <translation>impossibile analizzare la chiave di spesa segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="622"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Nessuna chiave di visualizzazione né chiave di spesa fornita, annullato</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="630"/>
        <source>failed to parse secret view key</source>
        <translation>impossibile analizzare la chiave di visualizzazione segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="639"/>
        <source>failed to verify secret spend key</source>
        <translation>Impossibile verificare la chiave di spesa segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="643"/>
        <source>spend key does not match address</source>
        <translation>la chiave di spesa non corrisponde all&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="649"/>
        <source>failed to verify secret view key</source>
        <translation>Impossibile verificare la chiave di visualizzazione segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="653"/>
        <source>view key does not match address</source>
        <translation>la chiave di visualizzazione non corrisponde all&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="676"/>
        <location filename="../src/wallet/api/wallet.cpp" line="693"/>
        <source>failed to generate new wallet: </source>
        <translation>Impossibile generare un nuovo portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="741"/>
        <source>Electrum seed is empty</source>
        <translation>Il seme di elettro è vuoto</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="750"/>
        <source>Electrum-style word list failed verification</source>
        <translation>La verifica dell&amp;#39;elenco di parole in stile Electrum non è riuscita</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118"/>
        <source>Failed to load unsigned transactions</source>
        <translation>Impossibile caricare le transazioni non firmate</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1143"/>
        <source>Failed to load transaction from file</source>
        <translation>Impossibile caricare la transazione dal file</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1159"/>
        <source>Wallet is view only</source>
        <translation>Il portafoglio è solo visualizzabile</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169"/>
        <source>failed to save file </source>
        <translation>impossibile salvare il file </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1187"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Le immagini chiave possono essere importate solo con un demone attendibile</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1200"/>
        <source>Failed to import key images: </source>
        <translation>Impossibile importare le immagini chiave: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1213"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1245"/>
        <source>Not supported on HW wallets.</source>
        <translation>Non supportato sui portafogli HW.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1224"/>
        <source>Failed to save file: </source>
        <translation>Impossibile salvare il file: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231"/>
        <source>Error exporting outputs: </source>
        <translation>Errore durante l&amp;#39;esportazione degli output: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1254"/>
        <source>Failed to read file: </source>
        <translation>Impossibile leggere il file: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1266"/>
        <source>Failed to import outputs: </source>
        <translation>Impossibile importare gli output: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1279"/>
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>Impossibile eseguire la scansione delle transazioni: nessun ID di transazione fornito.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1290"/>
        <source>Invalid txid specified: </source>
        <translation>Txid non valido specificato: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1308"/>
        <source>Failed to scan transaction: </source>
        <translation>Impossibile eseguire la scansione della transazione: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1327"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1353"/>
        <source>Unknown background sync type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1340"/>
        <source>Failed to setup background sync: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1368"/>
        <source>Failed to start background sync: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1385"/>
        <source>Failed to stop background sync: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1422"/>
        <source>Failed to get subaddress label: </source>
        <translation>Impossibile ottenere l&amp;#39;etichetta del sottoindirizzo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1437"/>
        <source>Failed to set subaddress label: </source>
        <translation>Impossibile impostare l&amp;#39;etichetta del sottoindirizzo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1462"/>
        <source>Failed to get multisig info: </source>
        <translation>Impossibile ottenere informazioni multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1482"/>
        <source>Failed to make multisig: </source>
        <translation>Impossibile creare multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1496"/>
        <source>Failed to exchange multisig keys: </source>
        <translation>Impossibile scambiare le chiavi multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1512"/>
        <source>Failed to export multisig images: </source>
        <translation>Impossibile esportare le immagini multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1530"/>
        <source>Failed to parse imported multisig images</source>
        <translation>Impossibile analizzare le immagini multisig importate</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1540"/>
        <source>Failed to import multisig images: </source>
        <translation>Impossibile importare le immagini multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1554"/>
        <source>Failed to check for partial multisig key images: </source>
        <translation>Impossibile verificare le immagini chiave multisig parziali: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1582"/>
        <source>Failed to restore multisig transaction: </source>
        <translation>Impossibile ripristinare la transazione multisig: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1664"/>
        <source>Sending all requires one destination address</source>
        <translation>L&amp;#39;invio di tutto richiede un indirizzo di destinazione</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1668"/>
        <source>Destinations and amounts are unequal</source>
        <translation>Le destinazioni e gli importi sono disuguali</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1676"/>
        <source>payment id has invalid format, expected 64 character hex string: </source>
        <translation>l&amp;#39;ID pagamento ha un formato non valido, prevista una stringa esadecimale di 64 caratteri: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>Invalid destination address</source>
        <translation>Indirizzo di destinazione non valido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1690"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>una singola transazione non può utilizzare più di un ID di pagamento</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1718"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>non è riuscito a impostare l&amp;#39;ID di pagamento, sebbene sia stato decodificato correttamente</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1759"/>
        <source>Subaddress index %u has insufficient funds (%s) to pay for audit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1775"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1869"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>il demone è occupato. Riprova più tardi.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1777"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1871"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nessuna connessione al demone. Assicurati che il demone sia in esecuzione.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1779"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1873"/>
        <source>RPC error: </source>
        <translation>Errore RPC: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1781"/>
        <source>failed to get outputs to mix: %s</source>
        <translation>Impossibile ottenere output da mixare: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1785"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1880"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>non abbastanza soldi da trasferire, disponibile solo %s, importo inviato %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1792"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1888"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>non abbastanza denaro da trasferire, saldo complessivo solo %s, importo inviato %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1799"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1896"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>non abbastanza soldi da trasferire, disponibile solo %s, importo della transazione %s = %s + %s (commissione)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1807"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1904"/>
        <source>not enough outputs for specified ring size</source>
        <translation>non ci sono abbastanza uscite per la dimensione dell&amp;#39;anello specificata</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1809"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1906"/>
        <source>output amount</source>
        <translation>importo in uscita</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1809"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1906"/>
        <source>found outputs to use</source>
        <translation>trovati output da utilizzare</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1811"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>Si prega di spazzare gli output non miscelabili.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1814"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1910"/>
        <source>transaction was not constructed</source>
        <translation>la transazione non è stata realizzata</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1817"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1913"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>la transazione %s è stata rifiutata dal demone con stato: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1822"/>
        <source>destination amount is zero</source>
        <translation>l&amp;#39;importo di destinazione è zero</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1824"/>
        <source>transaction has no destination</source>
        <translation>la transazione non ha destinazione</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1826"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1920"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>non è riuscito a trovare un modo adatto per dividere le transazioni</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1828"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1922"/>
        <source>unknown transfer error: </source>
        <translation>errore di trasferimento sconosciuto: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1830"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1924"/>
        <source>internal error: </source>
        <translation>errore interno: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1832"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1926"/>
        <source>unexpected error: </source>
        <translation>errore imprevisto: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1834"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1928"/>
        <source>unknown error</source>
        <translation>errore sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1875"/>
        <source>failed to get outputs to mix</source>
        <translation>non è riuscito a ottenere output da mixare</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1918"/>
        <source>one of destinations is zero</source>
        <translation>una delle destinazioni è zero</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2049"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2085"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2136"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2164"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2195"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2216"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2771"/>
        <source>Failed to parse txid</source>
        <translation>Impossibile analizzare txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2069"/>
        <source>no tx keys found for this txid</source>
        <translation>nessuna chiave tx trovata per questo txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2093"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2102"/>
        <source>Failed to parse tx key</source>
        <translation>Impossibile analizzare la chiave tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2111"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2143"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2171"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2258"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2292"/>
        <source>Failed to parse address</source>
        <translation>Impossibile analizzare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2263"/>
        <source>Address must not be a subaddress</source>
        <translation>L&amp;#39;indirizzo non deve essere un sottoindirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2297"/>
        <source>Address doesn&apos;t belong to the wallet</source>
        <translation>L&amp;#39;indirizzo non appartiene al portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2321"/>
        <source>The wallet must be in multisig ready state</source>
        <translation>Il portafoglio deve essere in stato multisig ready</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2343"/>
        <source>Given string is not a key</source>
        <translation>La stringa data non è una chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2601"/>
        <source>Background wallets </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2607"/>
        <source> while background syncing. Stop background syncing first.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2634"/>
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>La scansione ripetuta può essere utilizzata solo con un demone attendibile</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2692"/>
        <source>Invalid output: </source>
        <translation>Output non valido: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2699"/>
        <source>Failed to mark outputs as spent</source>
        <translation>Impossibile contrassegnare gli output come spesi</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2710"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2732"/>
        <source>Failed to parse output amount</source>
        <translation>Impossibile analizzare l&amp;#39;importo in output</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2715"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2737"/>
        <source>Failed to parse output offset</source>
        <translation>Impossibile analizzare l&amp;#39;offset di output</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2721"/>
        <source>Failed to mark output as spent</source>
        <translation>Impossibile contrassegnare l&amp;#39;output come esaurito</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2743"/>
        <source>Failed to mark output as unspent</source>
        <translation>Impossibile contrassegnare l&amp;#39;output come non speso</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2754"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2793"/>
        <source>Failed to parse key image</source>
        <translation>Impossibile analizzare l&amp;#39;immagine chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2760"/>
        <source>Failed to get ring</source>
        <translation>Impossibile ottenere l&amp;#39;anello</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2778"/>
        <source>Failed to get rings</source>
        <translation>Impossibile ottenere gli anelli</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2799"/>
        <source>Failed to set ring</source>
        <translation>Impossibile impostare l&amp;#39;anello</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="351"/>
        <source>Failed to parse address</source>
        <translation>Impossibile analizzare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="358"/>
        <source>Failed to parse key</source>
        <translation>Impossibile analizzare la chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="366"/>
        <source>failed to verify key</source>
        <translation>Impossibile verificare la chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="376"/>
        <source>key does not match address</source>
        <translation>la chiave non corrisponde all&amp;#39;indirizzo</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54"/>
        <source>yes</source>
        <translation>SÌ</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68"/>
        <source>no</source>
        <translation>NO</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92"/>
        <source>Specify IP to bind RPC server</source>
        <translation>Specificare l&amp;#39;IP per associare il server RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93"/>
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>Specificare l&amp;#39;indirizzo IPv6 per associare il server RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94"/>
        <source>Specify IP to bind restricted RPC server</source>
        <translation>Specificare l&amp;#39;IP per associare il server RPC con restrizioni</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95"/>
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>Specificare l&amp;#39;indirizzo IPv6 per associare il server RPC con restrizioni</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96"/>
        <source>Allow IPv6 for RPC</source>
        <translation>Consenti IPv6 per RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97"/>
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>Ignora il binding IPv4 non riuscito per RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>Specificare username[:password] richiesto per il server RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Conferma che il valore rpc-bind-ip NON è un IP loopback (locale)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Specificare un elenco di origini separate da virgole per consentire la condivisione di risorse tra origini</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>Abilita SSL sulle connessioni RPC: abilitato|disabilitato|rilevamento automatico</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102"/>
        <source>Path to a PEM format private key</source>
        <translation>Percorso verso una chiave privata in formato PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103"/>
        <source>Path to a PEM format certificate</source>
        <translation>Percorso verso un certificato in formato PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Percorso al file contenente i certificati in formato PEM concatenati per sostituire le CA di sistema.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105"/>
        <source>List of certificate fingerprints to allow</source>
        <translation>Elenco delle impronte digitali dei certificati da consentire</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106"/>
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>Consenti all&amp;#39;utente (tramite --rpc-ssl-certificates) di concatenare i certificati</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107"/>
        <source>Allow any peer certificate</source>
        <translation>Consenti qualsiasi certificato peer</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108"/>
        <source>Do not ban hosts on RPC errors</source>
        <translation>Non bannare gli host in caso di errori RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155"/>
        <location filename="../src/rpc/rpc_args.cpp" line="183"/>
        <location filename="../src/rpc/rpc_args.cpp" line="204"/>
        <location filename="../src/rpc/rpc_args.cpp" line="221"/>
        <source>Invalid IP address given for --</source>
        <translation>Indirizzo IP non valido fornito per --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163"/>
        <location filename="../src/rpc/rpc_args.cpp" line="191"/>
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> consente connessioni esterne in entrata non crittografate. Considerare invece il tunnel SSH o il proxy SSL. Sostituisci con --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source>Username specified with --</source>
        <translation>Nome utente specificato con --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source> cannot be empty</source>
        <translation> non può essere vuoto</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5202"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Il demone usa una versione principale RPC diversa (%u) rispetto al portafoglio (%u): %s. Aggiornane una o usa --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7452"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8016"/>
        <source>Spending from address index %d
</source>
        <translation>Spesa dall&amp;#39;indice indirizzo %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7469"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>La tua transazione deve essere divisa in %llu transazioni. Ciò comporterà l&amp;#39;applicazione di una commissione di transazione a ciascuna transazione, per una commissione totale di %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7475"/>
        <source>The transaction fee is %s</source>
        <translation>La commissione di transazione è %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478"/>
        <source>, of which %s is dust from change</source>
        <translation>, di cui %s è polvere derivante dal cambiamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7479"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Un totale di %s di polvere modificata verrà inviato all&amp;#39;indirizzo della polvere</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7768"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Non ci sono abbastanza soldi nel saldo sbloccato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7813"/>
        <source>No address given</source>
        <translation>Nessun indirizzo fornito</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7879"/>
        <source>missing lockedblocks parameter</source>
        <translation>parametro lockedblocks mancante</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7889"/>
        <source>bad locked_blocks parameter</source>
        <translation>parametro locked_blocks non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8188"/>
        <source>failed to parse Payment ID</source>
        <translation>impossibile analizzare l&amp;#39;ID pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2320"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2368"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8211"/>
        <source>failed to parse key image</source>
        <translation>impossibile analizzare l&amp;#39;immagine chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8489"/>
        <source>No outputs found</source>
        <translation>Nessun output trovato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8254"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8494"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Vengono create più transazioni, cosa che non dovrebbe accadere</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8259"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>La transazione utilizza input multipli o nulli, cosa che non dovrebbe accadere</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8309"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8336"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8591"/>
        <source>Money successfully sent, transaction: </source>
        <translation>Denaro inviato con successo, transazione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8387"/>
        <source>missing threshold amount</source>
        <translation>importo soglia mancante</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8393"/>
        <source>invalid amount threshold</source>
        <translation>soglia importo non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9076"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Il resto richiesto non viene inviato a un indirizzo a pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9081"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Il resto richiesto è maggiore del pagamento all&amp;#39;indirizzo di cambio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9090"/>
        <source>Change goes to more than one address</source>
        <translation>Il resto va a più di un indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9112"/>
        <source>sending %s to %s</source>
        <translation>invio di %s a %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9122"/>
        <source> dummy output(s)</source>
        <translation> output fittizio(i)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9125"/>
        <source>with no destinations</source>
        <translation>senza destinazioni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9134"/>
        <source>no change</source>
        <translation>nessun cambiamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6052"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Il demone è locale, presupponendo attendibilità</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703"/>
        <source>Password for new watch-only wallet</source>
        <translation>Password per il nuovo portafoglio solo per orologio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="435"/>
        <source>false</source>
        <translation>falso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="832"/>
        <source>Commands: </source>
        <translation>Comandi: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="846"/>
        <source>Unknown command: </source>
        <translation>Comando sconosciuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="853"/>
        <source>Command usage: </source>
        <translation>Utilizzo del comando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856"/>
        <source>Command description: </source>
        <translation>Descrizione del comando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="917"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non ha una chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="944"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1017"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1164"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1212"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1313"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1375"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1443"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1543"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1659"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1741"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3154"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9166"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9245"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9293"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9618"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9703"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10186"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11399"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11501"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11555"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11664"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11714"/>
        <source>command not supported by HW wallet</source>
        <translation>comando non supportato dal portafoglio HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="949"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non ha seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="959"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>il portafoglio è multisig ma non ancora finalizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1038"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>il portafoglio non è deterministico e non ha seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="992"/>
        <source>Failed to retrieve seed</source>
        <translation>Impossibile recuperare il seme</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1022"/>
        <source>wallet is multisig and has no seed</source>
        <translation>il portafoglio è multisig e non ha seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1048"/>
        <source>Incorrect password</source>
        <translation>Password errata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1070"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330"/>
        <source>Your original password was incorrect.</source>
        <translation>La password originale era errata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085"/>
        <source>Error with wallet rewrite: </source>
        <translation>Errore con la riscrittura del portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11145"/>
        <source>Random payment ID: </source>
        <translation>ID pagamento casuale: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1106"/>
        <source>Current fee is %s %s per %s</source>
        <translation>La tariffa attuale è %s %s per %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="518"/>
        <source>failed to parse background sync type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="660"/>
        <source>Payment required, see the &apos;rpc_payment_info&apos; command</source>
        <translation>Pagamento richiesto, vedere il comando &amp;#39;rpc_payment_info&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1122"/>
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Errore: impossibile stimare la dimensione dell&amp;#39;array del backlog: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1127"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>Errore: dimensione array backlog stimata errata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1139"/>
        <source> (current)</source>
        <translation> (attuale)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1142"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u blocco (%u minuti) arretrato con priorità %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1144"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u a %u blocca (%u a %u minuti) arretrati con priorità %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1147"/>
        <source>No backlog at priority </source>
        <translation>Nessun arretrato in priorità </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1169"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1217"/>
        <source>This wallet is already multisig</source>
        <translation>Questo portafoglio è già multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1174"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1222"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non può essere reso multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1181"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1228"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Questo portafoglio è già stato utilizzato in precedenza, utilizza un nuovo portafoglio per creare un portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1189"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation>Invia queste informazioni multisig a tutti gli altri partecipanti, quindi usa make_multisig&lt;threshold&gt;&lt;info1&gt; [&lt;info2&gt; ...] con le informazioni multisig degli altri</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet&apos;s participants </source>
        <translation>Ciò include la chiave di visualizzazione PRIVATA, quindi deve essere divulgata solo ai partecipanti di quel portafoglio multisig </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1242"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3006"/>
        <source>Invalid threshold</source>
        <translation>Soglia non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1262"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1339"/>
        <source>Another step is needed</source>
        <translation>È necessario un altro passo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1274"/>
        <source>Error creating multisig: </source>
        <translation>Errore durante la creazione di multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1281"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Errore durante la creazione di multisig: il nuovo portafoglio non è multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1284"/>
        <source> multisig address: </source>
        <translation> indirizzo multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1318"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1380"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1448"/>
        <source>This wallet is not multisig</source>
        <translation>Questo portafoglio non è multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1323"/>
        <source>This wallet is already finalized</source>
        <translation>Questo portafoglio è già finalizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1350"/>
        <source>Multisig address: </source>
        <translation>Indirizzo multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1553"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1669"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1751"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation>Questo portafoglio multisig non è ancora stato finalizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1413"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11536"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11695"/>
        <source>failed to save file </source>
        <translation>impossibile salvare il file </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1421"/>
        <source>Error exporting multisig info: </source>
        <translation>Errore durante l&amp;#39;esportazione delle informazioni multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1425"/>
        <source>Multisig info exported to </source>
        <translation>Informazioni multisig esportate in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1476"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11448"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11474"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11729"/>
        <source>failed to read file </source>
        <translation>impossibile leggere il file </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1497"/>
        <source>Failed to import multisig info: </source>
        <translation>Impossibile importare le informazioni multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1508"/>
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Impossibile aggiornare lo stato di spesa dopo l&amp;#39;importazione delle informazioni multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1514"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>Daemon non attendibile, lo stato di spent potrebbe essere errato. Utilizza un daemon attendibile ed esegui &amp;quot;rescan_spent&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1548"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1664"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1746"/>
        <source>This is not a multisig wallet</source>
        <translation>Questo non è un portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1607"/>
        <source>Failed to sign multisig transaction</source>
        <translation>Impossibile firmare la transazione multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614"/>
        <source>Multisig error: </source>
        <translation>Errore multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1619"/>
        <source>Failed to sign multisig transaction: </source>
        <translation>Impossibile firmare la transazione multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1626"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1639"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9226"/>
        <source>Transaction successfully signed to file </source>
        <translation>Transazione firmata con successo nel file </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1640"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Può essere inoltrato alla rete con submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1701"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1772"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>Impossibile caricare la transazione multisig dal file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1707"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1777"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Transazione multisig firmata solo da %u firmatari, necessita di %u firme in più</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1716"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11939"/>
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transazione inviata con successo, transazione </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1717"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11940"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>È possibile verificarne lo stato utilizzando il comando `show_transfers`.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1727"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1807"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6436"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6777"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7561"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7591"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7787"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8081"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8108"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8318"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8347"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8573"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8602"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9270"/>
        <source>unknown error</source>
        <translation>errore sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1793"/>
        <source>Failed to export multisig transaction to file </source>
        <translation>Impossibile esportare la transazione multisig nel file </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1797"/>
        <source>Saved exported multisig transaction file(s): </source>
        <translation>File di transazione multisig esportati e salvati: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2143"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6431"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772"/>
        <source>unexpected error: </source>
        <translation>errore imprevisto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1825"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1982"/>
        <source>Invalid key image</source>
        <translation>Immagine chiave non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1831"/>
        <source>Invalid txid</source>
        <translation>txid non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1858"/>
        <source>Failed to get key image ring: </source>
        <translation>Impossibile ottenere l&amp;#39;anello dell&amp;#39;immagine chiave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1873"/>
        <source>File doesn&apos;t exist</source>
        <translation>Il file non esiste</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1895"/>
        <source>Invalid ring specification: </source>
        <translation>Specifica dell&amp;#39;anello non valida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1903"/>
        <source>Invalid key image: </source>
        <translation>Immagine chiave non valida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1908"/>
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>Tipo di suoneria non valido, relativo previsto o assoluto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1926"/>
        <source>Error reading line: </source>
        <translation>Errore nella lettura della riga: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1937"/>
        <source>Invalid ring: </source>
        <translation>Anello non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946"/>
        <source>Invalid relative ring: </source>
        <translation>Anello relativo non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1958"/>
        <source>Invalid absolute ring: </source>
        <translation>Anello assoluto non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1967"/>
        <source>Failed to set ring for key image: </source>
        <translation>Impossibile impostare l&amp;#39;anello per l&amp;#39;immagine chiave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1967"/>
        <source>Continuing.</source>
        <translation>Continua.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1997"/>
        <source>Missing absolute or relative keyword</source>
        <translation>Parola chiave assoluta o relativa mancante</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2007"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>indice non valido: deve essere un intero senza segno strettamente positivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>invalid index: indices wrap</source>
        <translation>indice non valido: gli indici vengono a capo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2032"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>indice non valido: gli indici devono essere in ordine rigorosamente crescente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039"/>
        <source>failed to set ring</source>
        <translation>non è riuscito a impostare l&amp;#39;anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2062"/>
        <source>Invalid key image or txid</source>
        <translation>Immagine chiave o txid non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2071"/>
        <source>failed to unset ring</source>
        <translation>Impossibile annullare l&amp;#39;impostazione dell&amp;#39;anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094"/>
        <source>RPC client ID: </source>
        <translation>ID client RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2095"/>
        <source>RPC client secret key: </source>
        <translation>Chiave segreta del client RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2098"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2529"/>
        <source>Failed to query daemon</source>
        <translation>Impossibile interrogare il demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2106"/>
        <source>Using daemon: </source>
        <translation>Utilizzo del demone: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2107"/>
        <source>Payments required for node use, current credits: </source>
        <translation>Pagamenti richiesti per l&amp;#39;utilizzo del nodo, crediti correnti: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108"/>
        <source>Credits target: </source>
        <translation>Crediti target: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2111"/>
        <source>Credits spent this session: </source>
        <translation>Crediti spesi in questa sessione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2113"/>
        <source>Credit discrepancy this session: </source>
        <translation>Discrepanza di credito in questa sessione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2115"/>
        <source>Difficulty: </source>
        <translation>Difficoltà: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2115"/>
        <source>credits per hash found, </source>
        <translation>crediti per hash trovato, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2115"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2413"/>
        <source>credits/hash</source>
        <translation>crediti/hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2123"/>
        <source>Mining for payment at %.1f H/s</source>
        <translation>Estrazione per pagamento a %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2128"/>
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>Tempo stimato fino all&amp;#39;estrazione del target di crediti %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2132"/>
        <source>Mining for payment</source>
        <translation>Estrazione per pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2135"/>
        <source>Not mining</source>
        <translation>Non minerario</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2138"/>
        <source>No payment needed for node use</source>
        <translation>Nessun pagamento richiesto per l&amp;#39;utilizzo del nodo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211"/>
        <source>Bad argument: </source>
        <translation>Argomentazione sbagliata: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211"/>
        <source>should be &quot;add&quot;</source>
        <translation>dovrebbe essere &amp;quot;aggiungere&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220"/>
        <source>Failed to open file</source>
        <translation>Impossibile aprire il file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2304"/>
        <source>Failed to save known rings: </source>
        <translation>Impossibile salvare gli anelli noti: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2314"/>
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>utilizzo: %s&lt;key_image&gt; |&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2360"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2372"/>
        <source>Frozen: </source>
        <translation>Congelato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2374"/>
        <source>Not frozen: </source>
        <translation>Non congelato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2388"/>
        <source> bytes sent</source>
        <translation> byte inviati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2389"/>
        <source> bytes received</source>
        <translation> byte ricevuti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2401"/>
        <source>No known public nodes</source>
        <translation>Nessun nodo pubblico noto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2413"/>
        <source>address</source>
        <translation>indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2413"/>
        <source>last_seen</source>
        <translation>ultimo_visto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2419"/>
        <source>never</source>
        <translation>Mai</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2427"/>
        <source>Error retrieving public node list: </source>
        <translation>Errore durante il recupero dell&amp;#39;elenco dei nodi pubblici: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2437"/>
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium, come Bitcoin, è una criptovaluta. Cioè, è denaro digitale.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2441"/>
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>Salvium protegge la tua privacy sulla blockchain e, mentre Salvium si impegna a migliorare costantemente,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2442"/>
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>Nessuna tecnologia per la privacy può essere perfetta al 100%, Salvium compresa.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2443"/>
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>Salvium non può proteggerti dai malware e potrebbe non essere efficace come speriamo contro avversari potenti.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2444"/>
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>In futuro potrebbero essere scoperti dei difetti in Salvium e potrebbero essere sviluppati degli attacchi per sbirciare sotto alcuni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2445"/>
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>degli strati di privacy forniti da Salvium. Siate prudenti e praticate la difesa in profondità.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2534"/>
        <source>Daemon does not require payment for RPC access</source>
        <translation>Il demone non richiede il pagamento per l&amp;#39;accesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2542"/>
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>Avvio del mining per l&amp;#39;accesso RPC: diff %llu, %f crediti/hash%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2543"/>
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>Esegui stop_mining_for_rpc per interrompere</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2589"/>
        <source>invalid derive type: must be &apos;carrot&apos; or &apos;precarrot&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2666"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non può essere trasferito</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3144"/>
        <source>background sync not implemented for multisig wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3149"/>
        <source>background sync not implemented for watch only wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3161"/>
        <source>invalid option</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3185"/>
        <source>Error setting background sync type: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3408"/>
        <source>&quot;audit&quot; - audit your wallet main address (or subaddress(es) if specified).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3606"/>
        <source>Sends your wallet balance (or a single address or subaddress(es)) to audit (only available during AUDIT hard forks)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3610"/>
        <source>Displays the current exchange rate information for SAL &lt;--&gt; SAL1 conversions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3614"/>
        <source>Displays the current circulating supply information for SAL and SAL1 currencies</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3665"/>
        <source>Display the Carrot private keys.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3681"/>
        <source>Available options:
 seed language
   Set the wallet&apos;s seed language.
 always-confirm-transfers &lt;1|0&gt;
   Whether to confirm unsplit txes.
 print-ring-members &lt;1|0&gt;
   Whether to print detailed information about ring members during confirmation.
 store-tx-info &lt;1|0&gt;
   Whether to store outgoing tx info (destination address, payment ID, tx secret key) for future reference.
 auto-refresh &lt;1|0&gt;
   Whether to automatically synchronize new blocks from the daemon.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
   Set the wallet&apos;s refresh behaviour.
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
   Whether to automatically use the low priority fee level when it&apos;s safe to do so.
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
 background-sync &lt;off|reuse-wallet-password|custom-background-password&gt;
   Set this to enable scanning in the background with just the view key while the wallet is locked.
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
   Whether to have incoming payments automatically frozen, so they cannot be spent erroneously.
send-change-back-to-subaddress &lt;1|0&gt;
   Whether to have change from transactions sent back subaddresses (1) or to main address (0) (ignored for AUDIT commands).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4234"/>
        <source>off (default); reuse-wallet-password (reuse the wallet password to encrypt the background cache); custom-background-password (use a custom background password to encrypt the background cache)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4451"/>
        <source>can&apos;t specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-svb-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; and --generate-from-device=&quot;wallet_name&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4633"/>
        <source>This address is not a Carrot address, and cannot be used here.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5328"/>
        <source>Generated new legacy (CN) wallet: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5337"/>
        <source>Generated new Carrot wallet: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5413"/>
        <source>Generated new legacy wallet: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5416"/>
        <source>Generated new carrot wallet: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5574"/>
        <source>Opened background wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5576"/>
        <source>Opened legacy (CN) wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5580"/>
        <source>Opened Carrot wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6150"/>
        <source>audit returned </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6179"/>
        <source>audited </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6506"/>
        <source>%8u %8s %21s %21s %7u %21s</source>
        <translation type="unfinished">%8u %6s %21s %21s %7u %21s {8u?} {8s?} {21s?} {21s?} {7u?} {21s?}</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7009"/>
        <source>The background password is required to unlock the console.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014"/>
        <source>
Syncing in the background while locked...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7308"/>
        <source>failed to find audit hard fork</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7331"/>
        <source>Subaddress index %u has insufficient funds (%s) to pay for audit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7463"/>
        <source>Auditing %s %s.  </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7503"/>
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>ATTENZIONE: questa è una misura di anello non predefinita, che potrebbe danneggiare la tua privacy. Si consiglia di utilizzare quella predefinita.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2688"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2711"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2727"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>la priorità deve essere 0, 1, 2, 3 o 4, oppure una delle seguenti: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2732"/>
        <source>could not change default priority</source>
        <translation>non è stato possibile modificare la priorità predefinita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2818"/>
        <source>invalid unit</source>
        <translation>unità non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2854"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2916"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>conteggio non valido: deve essere un intero senza segno</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2836"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2872"/>
        <source>invalid value</source>
        <translation>valore non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2950"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3068"/>
        <source>Invalid height</source>
        <translation>Altezza non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3023"/>
        <source>Invalid target</source>
        <translation>Destinazione non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3099"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3118"/>
        <source>Invalid amount</source>
        <translation>Importo non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3239"/>
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>argomento non valido: deve essere 1/sì o 0/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3528"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Avvia l&amp;#39;attività di mining nel demone (bg_mining e ignore_battery sono valori booleani opzionali).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3531"/>
        <source>Stop mining in the daemon.</source>
        <translation>Interrompere l&amp;#39;attività di mining nel demone.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3538"/>
        <source>Save the current blockchain data.</source>
        <translation>Salva i dati correnti della blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3541"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>Sincronizza le transazioni e il saldo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3545"/>
        <source>Show the wallet&apos;s balance of the currently selected account.</source>
        <translation>Mostra il saldo del portafoglio dell&amp;#39;account attualmente selezionato.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3549"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent(&quot;T&quot;|&quot;F&quot;), &quot;frozen&quot;|&quot;locked&quot;|&quot;unlocked&quot;, RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation>Mostra i trasferimenti in entrata, tutti o filtrati per disponibilità e indice indirizzo. Formato di output: Importo, Speso(&amp;quot;T&amp;quot;|&amp;quot;F&amp;quot;), &amp;quot;congelato&amp;quot;|&amp;quot;bloccato&amp;quot;|&amp;quot;sbloccato&amp;quot;, RingCT, Indice globale, Hash transazione, Indice indirizzo, [Chiave pubblica, Immagine chiave] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3555"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>Mostra i pagamenti per gli ID pagamento specificati.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3558"/>
        <source>Show the blockchain height.</source>
        <translation>Mostra l&amp;#39;altezza della blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Invia tutti gli output non miscelabili a te stesso con ring_size 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3582"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Invia tutti gli output sbloccati al di sotto della soglia a un indirizzo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3586"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Invia un singolo output dell&amp;#39;immagine chiave specificata a un indirizzo senza modifiche.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3626"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default &quot;unsigned_salvium_tx&quot; will be used.</source>
        <translation>Firma una transazione da un file. Se viene specificato il parametro &amp;quot;export_raw&amp;quot;, vengono esportati i dati esadecimali raw della transazione adatti al daemon RPC /sendrawtransaction. Utilizza il parametro&lt;filename&gt; per specificare il file da cui leggere. Se non specificato, verrà utilizzato il valore predefinito &amp;quot;unsigned_salvium_tx&amp;quot;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3630"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>Invia una transazione firmata da un file.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3634"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Modifica i dettagli del registro corrente (il livello deve essere &amp;lt;0-4&amp;gt;).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3638"/>
        <source>If no arguments are specified, the wallet shows all the existing accounts along with their balances.
If the &quot;new&quot; argument is specified, the wallet creates a new account with its label initialized by the provided label text (which can be empty).
If the &quot;switch&quot; argument is specified, the wallet switches to the account specified by &lt;index&gt;.
If the &quot;label&quot; argument is specified, the wallet sets the label of the account specified by &lt;index&gt; to the provided label text.
If the &quot;tag&quot; argument is specified, a tag &lt;tag_name&gt; is assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt;, ....
If the &quot;untag&quot; argument is specified, the tags assigned to the specified accounts &lt;account_index_1&gt;, &lt;account_index_2&gt; ..., are removed.
If the &quot;tag_description&quot; argument is specified, the tag &lt;tag_name&gt; is assigned an arbitrary text &lt;description&gt;.</source>
        <translation>Se non vengono specificati argomenti, il portafoglio mostra tutti gli account esistenti insieme ai loro saldi. Se viene specificato l&amp;#39;argomento &amp;quot;new&amp;quot;, il portafoglio crea un nuovo account con la sua etichetta inizializzata dal testo dell&amp;#39;etichetta fornito (che può essere vuoto). Se viene specificato l&amp;#39;argomento &amp;quot;switch&amp;quot;, il portafoglio passa all&amp;#39;account specificato da&lt;index&gt; . Se viene specificato l&amp;#39;argomento &amp;quot;label&amp;quot;, il portafoglio imposta l&amp;#39;etichetta dell&amp;#39;account specificato da&lt;index&gt; al testo dell&amp;#39;etichetta fornito. Se viene specificato l&amp;#39;argomento &amp;quot;tag&amp;quot;, un tag&lt;tag_name&gt; è assegnato agli account specificati&lt;account_index_1&gt; ,&lt;account_index_2&gt; , .... Se viene specificato l&amp;#39;argomento &amp;quot;untag&amp;quot;, i tag assegnati agli account specificati&lt;account_index_1&gt; ,&lt;account_index_2&gt; ..., vengono rimossi. Se viene specificato l&amp;#39;argomento &amp;quot;tag_description&amp;quot;, il tag&lt;tag_name&gt; viene assegnato un testo arbitrario&lt;description&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3652"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Codifica un ID di pagamento in un indirizzo integrato per l&amp;#39;indirizzo pubblico del portafoglio corrente (nessun argomento utilizza un ID di pagamento casuale) o decodifica un indirizzo integrato in un indirizzo standard e un ID di pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3656"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Stampa tutte le voci presenti nella rubrica, aggiungendo/eliminando facoltativamente una voce.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3659"/>
        <source>Save the wallet data.</source>
        <translation>Salva i dati del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3662"/>
        <source>Save a watch-only keys file.</source>
        <translation>Salva un file di chiavi di sola sorveglianza.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3668"/>
        <source>Display the private view key.</source>
        <translation>Visualizza la chiave di visualizzazione privata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3671"/>
        <source>Display the private spend key.</source>
        <translation>Visualizza la chiave di spesa privata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3674"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Mostra il seme mnemonico in stile Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3760"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Visualizza il seed mnemonico criptato in stile Electrum.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3763"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Eseguire nuovamente la scansione della blockchain per individuare gli output spesi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3767"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Ottieni la chiave di transazione (r) per un dato&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3771"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Imposta la chiave di transazione (r) per un dato&lt;txid&gt; nel caso in cui la transazione sia stata effettuata tramite un altro dispositivo o un portafoglio di terze parti.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3775"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Controlla l&amp;#39;importo che andrà a&lt;address&gt; In&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3779"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet&apos;s address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Genera una firma che attesti i fondi inviati a&lt;address&gt; In&lt;txid&gt; , facoltativamente con una stringa di sfida&lt;message&gt; , utilizzando la chiave segreta della transazione (quando&lt;address&gt; non è l&amp;#39;indirizzo del tuo portafoglio) o la chiave segreta di visualizzazione (altrimenti), che non rivela la chiave segreta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3783"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Controllare la prova dei fondi destinati a&lt;address&gt; In&lt;txid&gt; con la corda della sfida&lt;message&gt; se presente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3787"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Genera una firma che dimostri che hai generato&lt;txid&gt; utilizzando la chiave segreta di spesa, facoltativamente con una stringa di verifica&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3791"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Controllare una firma che dimostri che il firmatario ha generato&lt;txid&gt; , facoltativamente con una stringa di sfida&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If &apos;all&apos; is specified, you prove the entire sum of all of your existing accounts&apos; balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Genera una firma che dimostri che possiedi almeno questa quantità, facoltativamente con una stringa di verifica&lt;message&gt; . Se è specificato &amp;#39;all&amp;#39;, dimostri l&amp;#39;intera somma di tutti i saldi dei tuoi conti esistenti. Altrimenti, dimostri la riserva del più piccolo importo possibile sopra&lt;amount&gt; disponibile sul tuo conto corrente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3801"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Controllare una firma che attesti che il proprietario di&lt;address&gt; contiene almeno questo, facoltativamente con una stringa di sfida&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3822"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Mostra gli output non spesi di un indirizzo specificato entro un intervallo di importi facoltativo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3830"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Imposta una nota di corda arbitraria per un&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3834"/>
        <source>Get a string note for a txid.</source>
        <translation>Ottieni una nota di corda per un txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3838"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Imposta una descrizione arbitraria per il portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3842"/>
        <source>Get the description of the wallet.</source>
        <translation>Ottieni la descrizione del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845"/>
        <source>Show the wallet&apos;s status.</source>
        <translation>Mostra lo stato del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3848"/>
        <source>Show the wallet&apos;s information.</source>
        <translation>Mostra le informazioni del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3856"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>Verificare una firma sul contenuto di un file.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3864"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importa un elenco di immagini chiave firmate e verificane lo stato di utilizzo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3872"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Tentativi di riconnessione del portafoglio HW.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3876"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Esporta un set di output di proprietà di questo portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3880"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importa un set di output di proprietà di questo portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3884"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>Mostra informazioni su un trasferimento da/per questo indirizzo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3887"/>
        <source>Change the wallet&apos;s password.</source>
        <translation>Cambia la password del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3894"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Stampa le informazioni sulle commissioni correnti e sull&amp;#39;arretrato delle transazioni.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3896"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>Esporta i dati necessari per creare un portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3899"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Trasforma questo portafoglio in un portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3907"/>
        <source>Export multisig info for other participants</source>
        <translation>Esporta informazioni multisig per altri partecipanti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3911"/>
        <source>Import multisig info from other participants</source>
        <translation>Importa informazioni multisig da altri partecipanti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3915"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>Firma una transazione multisig da un file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3919"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Invia una transazione multisig firmata da un file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3923"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>Esportare una transazione multisig firmata in un file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, &quot;absolute&quot;, list of rings</source>
        <translation>Stampa l&amp;#39;anello/gli anelli utilizzati per spendere una determinata immagine chiave o transazione (se la dimensione dell&amp;#39;anello è &amp;gt; 1) Formato di output: Immagine chiave, &amp;quot;assoluto&amp;quot;, elenco degli anelli</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Imposta l&amp;#39;anello utilizzato per una determinata immagine chiave, in modo che possa essere riutilizzato in una forcella</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4024"/>
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>Annulla l&amp;#39;impostazione dell&amp;#39;anello utilizzato per una determinata immagine chiave o transazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4028"/>
        <source>Save known rings to the shared rings database</source>
        <translation>Salva gli anelli noti nel database degli anelli condivisi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044"/>
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>Congela un singolo output tramite l&amp;#39;immagine chiave in modo che non venga utilizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4048"/>
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>Scongelare un singolo output tramite l&amp;#39;immagine chiave in modo che possa essere riutilizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4052"/>
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>Controlla se un output dato è attualmente congelato dall&amp;#39;immagine chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4060"/>
        <source>Prints simple network stats</source>
        <translation>Stampa statistiche di rete semplici</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4064"/>
        <source>Lists known public nodes</source>
        <translation>Elenca i nodi pubblici noti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4068"/>
        <source>Prints basic info about Salvium for first time users</source>
        <translation>Stampa informazioni di base su Salvium per gli utenti alle prime armi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4072"/>
        <source>Returns version information</source>
        <translation>Restituisce informazioni sulla versione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4076"/>
        <source>Get info about RPC payments to current node</source>
        <translation>Ottieni informazioni sui pagamenti RPC al nodo corrente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4080"/>
        <source>Start mining to pay for RPC access</source>
        <translation>Inizia a fare mining per pagare l&amp;#39;accesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4084"/>
        <source>Stop mining to pay for RPC access</source>
        <translation>Interrompere l&amp;#39;attività di mining per pagare l&amp;#39;accesso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4092"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Mostra la sezione di aiuto o la documentazione su un&lt;command&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4186"/>
        <source>needs an argument</source>
        <translation>ha bisogno di un argomento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4200"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>set seed: necessita di un argomento. opzioni disponibili: lingua</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4209"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4210"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4211"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4212"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4220"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4221"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4223"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4225"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4226"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4227"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4230"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4233"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4240"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4241"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4244"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4245"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4246"/>
        <source>0 or 1</source>
        <translation>0 o 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4213"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (più lento, nessuna ipotesi); optimize-coinbase (veloce, presuppone che l&amp;#39;intera coinbase venga pagata a un singolo indirizzo); no-coinbase (più veloce, presuppone che non riceviamo alcuna transazione coinbase), default (uguale a optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4214"/>
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0, 1, 2, 3 o 4, oppure uno di </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4215"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (o mai|azione|decifrare)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4217"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4218"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4222"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4229"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4243"/>
        <source>unsigned integer</source>
        <translation>intero senza segno</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4219"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4232"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>amount</source>
        <translation>quantità</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4224"/>
        <source>block height</source>
        <translation>altezza del blocco</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4228"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;major&gt;:&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4237"/>
        <source>1/yes or 0/no</source>
        <translation>1/sì o 0/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4242"/>
        <source>floating point &gt;= 0</source>
        <translation>virgola mobile &amp;gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4248"/>
        <source>set: unrecognized argument(s)</source>
        <translation>set: argomenti non riconosciuti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4306"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Nome del portafoglio non valido. Riprova o usa Ctrl-C per uscire.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4318"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Tentativo di generare o ripristinare il portafoglio, ma i file specificati esistono. Uscita per non rischiare di sovrascrivere.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4323"/>
        <source>Wallet and key files found, loading...</source>
        <translation>Trovati file di portafoglio e chiave, caricamento in corso...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4329"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>File chiave trovato ma non file wallet. Rigenerazione in corso...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4335"/>
        <source>Key file not found. Failed to open wallet: </source>
        <translation>File chiave non trovato. Impossibile aprire il portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4343"/>
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Nessun portafoglio trovato con quel nome. Conferma la creazione di un nuovo portafoglio denominato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4354"/>
        <source>Generating new wallet...</source>
        <translation>Generazione di un nuovo portafoglio...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4435"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Non è possibile specificare più di uno tra --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4481"/>
        <source>can&apos;t specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>non è possibile specificare sia --restore-deterministic-wallet che --restore-multisig-wallet e --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4487"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet utilizza --generate-new-wallet, non --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4489"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet utilizza --generate-new-wallet, non --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4503"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation>specificare un parametro di ripristino con --electrum-seed=&amp;quot;multisig seed here&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4518"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>specificare un parametro di ripristino con --electrum-seed=&amp;quot;elenco parole qui&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4532"/>
        <source>Multisig seed failed verification</source>
        <translation>Verifica del seed multisig non riuscita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4541"/>
        <source>Electrum-style word list failed verification</source>
        <translation>La verifica dell&amp;#39;elenco di parole in stile Electrum non è riuscita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4561"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4581"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4617"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4642"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4680"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4701"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4721"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4736"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4785"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4810"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4826"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4865"/>
        <source>No data supplied, cancelled</source>
        <translation>Nessun dato fornito, annullato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4567"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4623"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4707"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4816"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7244"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7956"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8218"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9425"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9493"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9557"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9763"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11199"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11481"/>
        <source>failed to parse address</source>
        <translation>impossibile analizzare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4572"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Questo indirizzo è un sottoindirizzo che non può essere utilizzato qui.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4587"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4648"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4742"/>
        <source>failed to parse view key secret key</source>
        <translation>impossibile analizzare la chiave di visualizzazione della chiave segreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4596"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759"/>
        <source>failed to verify view key secret key</source>
        <translation>Impossibile verificare la chiave di visualizzazione della chiave segreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4600"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4763"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4845"/>
        <source>view key does not match standard address</source>
        <translation>la chiave di visualizzazione non corrisponde all&amp;#39;indirizzo standard</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4605"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4668"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4689"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4767"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4901"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4928"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4960"/>
        <source>account creation failed</source>
        <translation>creazione account fallita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4685"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4727"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4870"/>
        <source>failed to parse spend key secret key</source>
        <translation>impossibile analizzare la chiave segreta della chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4751"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4890"/>
        <source>failed to verify spend key secret key</source>
        <translation>Impossibile verificare la chiave segreta della chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4755"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4895"/>
        <source>spend key does not match standard address</source>
        <translation>la chiave di spesa non corrisponde all&amp;#39;indirizzo standard</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4790"/>
        <source>Error: expected M/N, but got: </source>
        <translation>Errore: previsto M/N, ma ottenuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4795"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Errore: previsto N &amp;gt; 1 e N &amp;lt;= M, ma ottenuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4800"/>
        <source>Error: M/N is currently unsupported. </source>
        <translation>Errore: M/N non è attualmente supportato. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4803"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Generazione del portafoglio master da %u di chiavi del portafoglio multisig %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4832"/>
        <source>failed to parse secret view key</source>
        <translation>impossibile analizzare la chiave di visualizzazione segreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4840"/>
        <source>failed to verify secret view key</source>
        <translation>Impossibile verificare la chiave di visualizzazione segreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4883"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>Errore: M/N non è attualmente supportato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4935"/>
        <source>No restore height is specified.</source>
        <translation>Non è specificata alcuna altezza di ripristino.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4936"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Supponendo che tu stia creando un nuovo account, il ripristino verrà effettuato a partire dall&amp;#39;altezza stimata della blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4941"/>
        <source>account creation aborted</source>
        <translation>creazione account annullata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4951"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>specificare un percorso del portafoglio con --generate-new-wallet (non --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5015"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5035"/>
        <source>bad m_restore_height parameter: </source>
        <translation>parametro m_restore_height non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4979"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5026"/>
        <source>Restore height is: </source>
        <translation>L&amp;#39;altezza di ripristino è: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5049"/>
        <source>Restore height </source>
        <translation>Ripristinare l&amp;#39;altezza </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065"/>
        <source>can&apos;t specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>non è possibile specificare --subaddress-lookahead e --wallet-file contemporaneamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5069"/>
        <source>failed to open account</source>
        <translation>non è riuscito ad aprire l&amp;#39;account</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5074"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5866"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9461"/>
        <source>wallet is null</source>
        <translation>il portafoglio è nullo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5108"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Impossibile inizializzare il database ad anello: le funzionalità di miglioramento della privacy saranno inattive</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5189"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5193"/>
        <source>wallet failed to connect to daemon: </source>
        <translation>il portafoglio non è riuscito a connettersi al demone: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5194"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation>Il demone non è avviato oppure è stata passata la porta sbagliata. Assicurati che il demone sia in esecuzione o modifica l&amp;#39;indirizzo del demone usando il comando &amp;#39;set_daemon&amp;#39;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5223"/>
        <source>List of available languages for your wallet&apos;s seed:</source>
        <translation>Elenco delle lingue disponibili per il seed del tuo portafoglio:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5224"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Se il display si blocca, esci alla cieca con ^C, quindi esegui di nuovo con --use-english-language-names</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5242"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5247"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>scelta lingua non valida inserita. Riprova.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5264"/>
        <source>invalid password</source>
        <translation>password non valida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5312"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Stavi utilizzando una versione obsoleta del portafoglio. Utilizza il nuovo seed che ti forniamo.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5340"/>
        <source>View key: </source>
        <translation>Visualizza chiave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5346"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5421"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5465"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5529"/>
        <source>failed to generate new wallet: </source>
        <translation>Impossibile generare un nuovo portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460"/>
        <source>Generated new wallet on hw device: </source>
        <translation>Generato nuovo portafoglio sul dispositivo hw: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5521"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>Impossibile generare un nuovo portafoglio multiplo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5524"/>
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Generato nuovo portafoglio multisig %u/%u: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5540"/>
        <source>wallet file path not valid: </source>
        <translation>percorso file wallet non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5550"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation>File chiave non trovato. Impossibile aprire il portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5570"/>
        <source>Opened watch-only wallet</source>
        <translation>Portafoglio aperto solo per orologio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5572"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>Aperto portafoglio multisig %u/%u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5598"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Stavi utilizzando una versione obsoleta del portafoglio. Procedi ad aggiornare il tuo portafoglio.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5613"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Stavi utilizzando una versione obsoleta del portafoglio. Il formato del tuo portafoglio è in fase di aggiornamento.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621"/>
        <source>failed to load wallet: </source>
        <translation>impossibile caricare il portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5640"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
</source>
        <translation>Usa &amp;quot;aiuto&amp;quot;&lt;command&gt; &amp;quot; per vedere la documentazione di un comando.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5662"/>
        <source>failed to deinitialize wallet</source>
        <translation>impossibile deinizializzare il portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5685"/>
        <source>Wallet data saved</source>
        <translation>Dati del portafoglio salvati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5699"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>il portafoglio è multisig e non può salvare una versione solo per l&amp;#39;orologio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5707"/>
        <source>failed to read wallet password</source>
        <translation>impossibile leggere la password del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5715"/>
        <source>Watch only wallet saved as: </source>
        <translation>Guarda solo il portafoglio salvato come: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5719"/>
        <source>Failed to save watch only wallet: </source>
        <translation>Impossibile salvare solo il portafoglio dell&amp;#39;orologio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5857"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6735"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11561"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>questo comando richiede un demone attendibile. Abilita con --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5910"/>
        <source>Mining started in daemon</source>
        <translation>L&amp;#39;attività di mining è iniziata nel demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5912"/>
        <source>mining has NOT been started: </source>
        <translation>l&amp;#39;attività di mining NON è stata avviata: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5932"/>
        <source>Mining stopped in daemon</source>
        <translation>L&amp;#39;attività di mining si è fermata nel demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5934"/>
        <source>mining has NOT been stopped: </source>
        <translation>l&amp;#39;attività mineraria NON è stata interrotta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5989"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Lunghezza array imprevista - Uscita da simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6065"/>
        <source>trusted</source>
        <translation>fidato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6065"/>
        <source>untrusted</source>
        <translation>non attendibile</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6081"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Questo non sembra essere un URL del demone valido.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6101"/>
        <source>Blockchain saved</source>
        <translation>Blockchain salvata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6103"/>
        <source>blockchain can&apos;t be saved: </source>
        <translation>la blockchain non può essere salvata: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6136"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6142"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6148"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6159"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6165"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6184"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6240"/>
        <source>Height </source>
        <translation>Altezza </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6137"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6143"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6149"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6160"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6166"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6172"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6185"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6241"/>
        <source>txid </source>
        <translation>txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6139"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6145"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6151"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6162"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6168"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6174"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6180"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6187"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6243"/>
        <source>idx </source>
        <translation>non sono io </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6242"/>
        <source>spent </source>
        <translation>speso </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6269"/>
        <source>Enter password</source>
        <translation>Inserisci la password</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6365"/>
        <source>Starting refresh...</source>
        <translation>Avvio aggiornamento...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6387"/>
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>Nuovo trasferimento ricevuto da quando è stata avviata la nuova scansione. Le immagini chiave sono incomplete.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6394"/>
        <source>Refresh done, blocks received: </source>
        <translation>Aggiornamento eseguito, blocchi ricevuti: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6402"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6749"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>il demone è occupato. Riprova più tardi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5083"/>
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>La chiave segreta del client RPC deve essere di 32 byte in formato esadecimale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5833"/>
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>Abilitando il mining in background, il demone estrarrà quando è inattivo e non alimentato dalla batteria.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5959"/>
        <source>Error checking daemon RPC access prices</source>
        <translation>Errore nel controllo dei prezzi di accesso RPC del demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5965"/>
        <source>Error checking daemon RPC access prices: </source>
        <translation>Errore nel controllo dei prezzi di accesso RPC del demone: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6061"/>
        <source>Failed to connect to daemon</source>
        <translation>Impossibile connettersi al demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6073"/>
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>I crediti/hash del demone RPC sono inferiori a quanto dichiarato. O questo demone sta barando o ha cambiato la sua configurazione di recente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6074"/>
        <source>Claimed: </source>
        <translation>Reclamato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6075"/>
        <source>Actual: </source>
        <translation>Attuale: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6753"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nessuna connessione al demone. Assicurati che il demone sia in esecuzione.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6410"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6757"/>
        <source>payment required.</source>
        <translation>pagamento richiesto.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6416"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6767"/>
        <source>RPC error: </source>
        <translation>Errore RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6421"/>
        <source>refresh error: </source>
        <translation>errore di aggiornamento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6426"/>
        <source>internal error: </source>
        <translation>errore interno: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441"/>
        <source>refresh failed: </source>
        <translation>aggiornamento non riuscito: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441"/>
        <source>Blocks received: </source>
        <translation>Blocchi ricevuti: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6470"/>
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Alcuni output di proprietà hanno immagini chiave parziali: è necessario import_multisig_info)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6473"/>
        <source>Currently selected account: [</source>
        <translation>Account attualmente selezionato: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6473"/>
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6475"/>
        <source>(No tag assigned)</source>
        <translation>(Nessun tag assegnato)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6475"/>
        <source>Tag: </source>
        <translation>Etichetta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6490"/>
        <source>unlocked balance: </source>
        <translation>saldo sbloccato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6495"/>
        <source>Balance per address:</source>
        <translation>Saldo per indirizzo:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <source>Address</source>
        <translation>Indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Balance</source>
        <translation>Bilancia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Unlocked balance</source>
        <translation>Saldo sbloccato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <source>Outputs</source>
        <translation>Risultati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12183"/>
        <source>Label</source>
        <translation>Etichetta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6597"/>
        <source>pubkey</source>
        <translation>pubkey</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6597"/>
        <source>key image</source>
        <translation>immagine chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>spent</source>
        <translation>speso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6620"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>unlocked</source>
        <translation>sbloccato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>ringct</source>
        <translation>anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>global index</source>
        <translation>indice globale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>tx id</source>
        <translation>ID di trasmissione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>addr index</source>
        <translation>indice indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6614"/>
        <source>Used at heights: </source>
        <translation>Utilizzato in quota: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6619"/>
        <source>T</source>
        <translation>T</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6619"/>
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6620"/>
        <source>locked</source>
        <translation>bloccato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6620"/>
        <source>[frozen]</source>
        <translation>[congelato]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6621"/>
        <source>RingCT</source>
        <translation>TC ad anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6621"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6634"/>
        <source>No incoming transfers</source>
        <translation>Nessun trasferimento in entrata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6638"/>
        <source>No incoming available transfers</source>
        <translation>Nessun trasferimento disponibile in entrata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6642"/>
        <source>No incoming unavailable transfers</source>
        <translation>Nessun trasferimento in arrivo non disponibile</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>payment</source>
        <translation>pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>transaction</source>
        <translation>transazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>height</source>
        <translation>altezza</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>unlock time</source>
        <translation>tempo di sblocco</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6678"/>
        <source>No payments with id </source>
        <translation>Nessun pagamento con ID </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6700"/>
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>l&amp;#39;ID pagamento ha un formato non valido, è prevista una stringa esadecimale di 16 o 64 caratteri: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6726"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6825"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7901"/>
        <source>failed to get blockchain height: </source>
        <translation>non è riuscito a ottenere l&amp;#39;altezza della blockchain: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6762"/>
        <source>failed to get spent status</source>
        <translation>non è riuscito a ottenere lo stato di spesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6836"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transazione %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6852"/>
        <source>failed to find construction data for tx input</source>
        <translation>Impossibile trovare i dati di costruzione per l&amp;#39;input tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6876"/>
        <source>failed to get output: </source>
        <translation>impossibile ottenere l&amp;#39;output: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6884"/>
        <source>output key&apos;s originating block height shouldn&apos;t be higher than the blockchain height</source>
        <translation>l&amp;#39;altezza del blocco di origine della chiave di output non dovrebbe essere superiore all&amp;#39;altezza della blockchain</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6889"/>
        <source>
Originating block heights: </source>
        <translation>
Altezze dei blocchi di origine: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6899"/>
        <source>
|</source>
        <translation>
|</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6899"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10399"/>
        <source>|
</source>
        <translation>|
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6916"/>
        <source>
Warning: Some input keys being spent are from </source>
        <translation>
Attenzione: alcuni tasti di input utilizzati provengono da </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917"/>
        <source>the same transaction</source>
        <translation>la stessa transazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917"/>
        <source>blocks that are temporally very close</source>
        <translation>blocchi che sono temporalmente molto vicini</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7103"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7853"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8136"/>
        <source>Ring size must not be 0</source>
        <translation>La misura dell&amp;#39;anello non deve essere 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7115"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7865"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8148"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>la misura dell&amp;#39;anello %u è troppo piccola, il minimo è %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7120"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7870"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8153"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation>la misura dell&amp;#39;anello %u è troppo grande, il massimo è %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7127"/>
        <source>wrong number of arguments</source>
        <translation>numero sbagliato di argomenti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7144"/>
        <source>payment id failed to encode</source>
        <translation>l&amp;#39;ID di pagamento non è riuscito a codificare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7163"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7894"/>
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Blocchi bloccati troppo alti, max 1000000 (˜4 anni)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7211"/>
        <source>failed to parse short payment ID from URI</source>
        <translation>impossibile analizzare l&amp;#39;ID del pagamento breve dall&amp;#39;URI</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7236"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7238"/>
        <source>Invalid last argument: </source>
        <translation>Ultimo argomento non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7256"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>una singola transazione non può utilizzare più di un ID di pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7272"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation>Impossibile analizzare l&amp;#39;ID del pagamento, anche se è stato rilevato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7388"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7398"/>
        <source>Is this okay anyway?</source>
        <translation>Va bene lo stesso?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7393"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>Attualmente c&amp;#39;è un arretrato di %u block a quel livello di tariffa. Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7715"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8025"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>Spazzare %s in %llu transazioni per una commissione totale di %s. Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7721"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8031"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8269"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>Spazzare %s per una tariffa totale di %s. Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7769"/>
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by &quot;rescan_spent&quot;.  Is this okay?</source>
        <translation>Vengono scartati %s degli output non mixabili che non possono essere spesi, operazione che può essere annullata con &amp;quot;rescan_spent&amp;quot;. Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8162"/>
        <source>Failed to parse number of outputs</source>
        <translation>Impossibile analizzare il numero di output</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7919"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8167"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation>La quantità di output deve essere maggiore di 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7945"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>l&amp;#39;ID pagamento ha un formato non valido, prevista una stringa esadecimale di 16 o 64 caratteri: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7158"/>
        <source>bad locked_blocks parameter:</source>
        <translation>parametro locked_blocks non valido:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8226"/>
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>una singola transazione non può utilizzare più di un ID di pagamento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7974"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8194"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8234"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>non è riuscito a impostare l&amp;#39;ID di pagamento, sebbene sia stato decodificato correttamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1341"/>
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation>Invia queste informazioni multisig a tutti gli altri partecipanti, quindi utilizza exchange_multisig_keys&lt;info1&gt; [&lt;info2&gt; ...] con le informazioni multisig degli altri</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1349"/>
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation>Il portafoglio multisig è stato creato con successo. Tipo di portafoglio attuale: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1355"/>
        <source>Failed to perform multisig keys exchange: </source>
        <translation>Impossibile eseguire lo scambio di chiavi multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1692"/>
        <source>Failed to load multisig transaction from MMS</source>
        <translation>Impossibile caricare la transazione multisig da MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2232"/>
        <source>Failed to mark output spent: </source>
        <translation>Impossibile contrassegnare l&amp;#39;output come esaurito: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2259"/>
        <source>Failed to mark output unspent: </source>
        <translation>Impossibile contrassegnare l&amp;#39;output come non speso: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2283"/>
        <source>Spent: </source>
        <translation>Speso: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2285"/>
        <source>Not spent: </source>
        <translation>Non speso: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2289"/>
        <source>Failed to check whether output is spent: </source>
        <translation>Impossibile verificare se l&amp;#39;output è stato speso: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2480"/>
        <source>Please confirm the transaction on the device</source>
        <translation>Si prega di confermare la transazione sul dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3258"/>
        <source>Device name not specified</source>
        <translation>Nome dispositivo non specificato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3267"/>
        <source>Device reconnect failed</source>
        <translation>Riconnessione del dispositivo non riuscita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3272"/>
        <source>Device reconnect failed: </source>
        <translation>Riconnessione del dispositivo non riuscita: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3818"/>
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>Esporta in CSV i trasferimenti in entrata/uscita entro un intervallo di altezza facoltativo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3826"/>
        <source>Rescan the blockchain from scratch. If &quot;hard&quot; is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>Riscansiona la blockchain da zero. Se è specificato &amp;quot;hard&amp;quot;, perderai tutte le informazioni che non possono essere recuperate dalla blockchain stessa.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3860"/>
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>Esportare un set firmato di immagini chiave in un&lt;filename&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3868"/>
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>Sincronizza le immagini delle chiavi con il portafoglio hw.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3891"/>
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>Genera un nuovo ID di pagamento casuale a dimensione intera (obsoleto). Questi saranno decriptati sulla blockchain, vedere integrated_address per gli ID di pagamento brevi crittografati.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3903"/>
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>Esegue round di scambio chiavi multisig extra. Necessario per portafogli multisig M/N arbitrari</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3935"/>
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>Inizializzare e configurare l&amp;#39;MMS per M/N = numero di firmatari richiesti/numero di firmatari autorizzati multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3939"/>
        <source>Display current MMS configuration</source>
        <translation>Visualizza la configurazione MMS corrente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3943"/>
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>Imposta o modifica le informazioni del firmatario autorizzato (etichetta di una sola parola, indirizzo di trasporto, indirizzo Salvium) oppure elenca tutti i firmatari</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3947"/>
        <source>List all messages</source>
        <translation>Elenca tutti i messaggi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3951"/>
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using &apos;sync&apos; processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>Valutare le prossime possibili azioni correlate a multisig in base allo stato del portafoglio ed eseguirle o offrirle per la scelta Utilizzando l&amp;#39;elaborazione &amp;quot;sync&amp;quot; dei messaggi in attesa con multisig, le informazioni di sincronizzazione possono essere forzate indipendentemente dallo stato del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3956"/>
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like &quot;stale data&quot; errors</source>
        <translation>Generazione forzata di informazioni di sincronizzazione multisig indipendentemente dallo stato del portafoglio, per recuperare da situazioni particolari come errori di &amp;quot;dati obsoleti&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3960"/>
        <source>Initiate transfer with MMS support; arguments identical to normal &apos;transfer&apos; command arguments, for info see there</source>
        <translation>Avvia il trasferimento con supporto MMS; argomenti identici agli argomenti del comando &amp;#39;transfer&amp;#39; normale, per informazioni vedere qui</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3964"/>
        <source>Delete a single message by giving its id, or delete all messages by using &apos;all&apos;</source>
        <translation>Elimina un singolo messaggio specificandone l&amp;#39;ID oppure elimina tutti i messaggi utilizzando &amp;quot;tutti&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3968"/>
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>Invia un singolo messaggio specificandone l&amp;#39;ID oppure invia tutti i messaggi in attesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3972"/>
        <source>Check right away for new messages to receive</source>
        <translation>Controlla subito se ci sono nuovi messaggi da ricevere</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3976"/>
        <source>Write the content of a message to a file &quot;mms_message_content&quot;</source>
        <translation>Scrivere il contenuto di un messaggio in un file &amp;quot;mms_message_content&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3980"/>
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>Invia un messaggio di una riga a un firmatario autorizzato, identificato dalla sua etichetta, o mostra eventuali note in attesa non lette</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984"/>
        <source>Show detailed info about a single message</source>
        <translation>Mostra informazioni dettagliate su un singolo messaggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3988"/>
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation>Opzioni disponibili: invio automatico &amp;lt;1|0&amp;gt; Specifica se inviare automaticamente i messaggi appena generati.
 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3994"/>
        <source>Send completed signer config to all other authorized signers</source>
        <translation>Invia la configurazione del firmatario completata a tutti gli altri firmatari autorizzati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998"/>
        <source>Start auto-config at the auto-config manager&apos;s wallet by issuing auto-config tokens and optionally set others&apos; labels</source>
        <translation>Avvia la configurazione automatica nel portafoglio del gestore della configurazione automatica emettendo token di configurazione automatica e, facoltativamente, impostando le etichette degli altri</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4006"/>
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>Elimina tutti i token di configurazione automatica e annulla un processo di configurazione automatica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4010"/>
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>Avviare la configurazione automatica utilizzando il token ricevuto dal gestore della configurazione automatica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032"/>
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>Contrassegna gli output come spesi in modo che non vengano mai selezionati come output falsi in un anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036"/>
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>Contrassegna un output come non speso in modo che possa essere selezionato come output falso in un anello</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040"/>
        <source>Checks whether an output is marked as spent</source>
        <translation>Controlla se un output è contrassegnato come speso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4238"/>
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;device_name[:device_spec]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4267"/>
        <source>wrong number range, use: %s</source>
        <translation>intervallo numerico errato, utilizzare: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4372"/>
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>NOTA: i seguenti %s possono essere utilizzati per recuperare l&amp;#39;accesso al tuo portafoglio. Annotali e conservali in un posto sicuro e protetto. Non conservarli nella tua e-mail o su servizi di archiviazione file al di fuori del tuo controllo immediato.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4374"/>
        <source>string</source>
        <translation>corda</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4374"/>
        <source>25 words</source>
        <translation>25 parole</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4860"/>
        <source>Secret spend key (%u of %u)</source>
        <translation>Chiave di spesa segreta (%u di %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4937"/>
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>Utilizzare --restore-height o --restore-date se si desidera ripristinare un account già configurato da un&amp;#39;altezza specifica.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4939"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5027"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7505"/>
        <source>Is this okay?</source>
        <translation>Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5050"/>
        <source>Still apply restore height?</source>
        <translation>Vuoi ancora ripristinare l&amp;#39;altezza?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5233"/>
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>Inserisci il numero corrispondente alla lingua che preferisci</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6284"/>
        <source>Device requires attention</source>
        <translation>Il dispositivo richiede attenzione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6290"/>
        <source>Enter device PIN</source>
        <translation>Inserisci il PIN del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6292"/>
        <source>Failed to read device PIN</source>
        <translation>Impossibile leggere il PIN del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6302"/>
        <source>Please enter the device passphrase on the device</source>
        <translation>Inserisci la passphrase del dispositivo sul dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6309"/>
        <source>Enter device passphrase</source>
        <translation>Inserisci la passphrase del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6311"/>
        <source>Failed to read device passphrase</source>
        <translation>Impossibile leggere la passphrase del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6335"/>
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation>Il primo aggiornamento è terminato per il portafoglio basato su HW con denaro ricevuto. È necessario hw_key_images_sync. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5835"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6337"/>
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation>Vuoi farlo adesso? (S/Sì/N/No): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2461"/>
        <source>Unknown command &apos;%s&apos;, try &apos;help&apos;</source>
        <translation>Comando sconosciuto &amp;#39;%s&amp;#39;, prova &amp;#39;help&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3207"/>
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Timeout del blocco di inattività disabilitato su Windows</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221"/>
        <source>Invalid number of seconds</source>
        <translation>Numero di secondi non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3283"/>
        <source>Export format not specified</source>
        <translation>Formato di esportazione non specificato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3297"/>
        <source>Export format not recognized.</source>
        <translation>Formato di esportazione non riconosciuto.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677"/>
        <source>Display the restore height</source>
        <translation>Visualizza l&amp;#39;altezza di ripristino</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4056"/>
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>Blocca la console del portafoglio, richiedendo la password del portafoglio per continuare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4236"/>
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>intero senza segno (secondi, 0 per disabilitare)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4239"/>
        <source>&quot;binary&quot; or &quot;ascii&quot;</source>
        <translation>&amp;quot;binario&amp;quot; o &amp;quot;ascii&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5091"/>
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>Attenzione: utilizzo di un demone non attendibile su %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5092"/>
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>L&amp;#39;utilizzo di un demone di terze parti può essere dannoso per la sicurezza e la privacy</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5095"/>
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>L&amp;#39;utilizzo del tuo senza SSL espone il tuo traffico RPC al monitoraggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5096"/>
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>Ti consigliamo vivamente di connetterti alla rete Salvium utilizzando il tuo demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5097"/>
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>Se tu o qualcuno di cui ti fidi sta gestendo questo demone, puoi usare --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5104"/>
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>Inoltre, un demone è anche meno sicuro quando viene eseguito in modalità bootstrap</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5117"/>
        <source>If you are new to Salvium, type &quot;welcome&quot; for a brief overview.</source>
        <translation>Se sei nuovo su Salvium, digita &amp;quot;welcome&amp;quot; per una breve panoramica.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5275"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5383"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5434"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477"/>
        <source>Error creating wallet: </source>
        <translation>Errore durante la creazione del portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5735"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771"/>
        <source>Failed to query mining status: </source>
        <translation>Impossibile interrogare lo stato di mining: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5754"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5782"/>
        <source>Failed to setup background mining: </source>
        <translation>Impossibile impostare il mining in background: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5758"/>
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>Background mining abilitato. Grazie per il supporto alla rete Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5786"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5798"/>
        <source>Background mining not enabled. Run &quot;set setup-background-mining 1&quot; to change.</source>
        <translation>Mining in background non abilitato. Esegui &amp;quot;set setup-background-mining 1&amp;quot; per modificare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5804"/>
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>Utilizzo di un demone non attendibile, saltando il controllo di mining in background</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5832"/>
        <source>The daemon is not set up to background mine.</source>
        <translation>Il demone non è impostato per il mining in background.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5839"/>
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>Background mining non abilitato. Imposta setup-background-mining su 1 per modificare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6220"/>
        <source>NOTE: This transaction is locked, see details with: show_transfer </source>
        <translation>NOTA: questa transazione è bloccata, vedere i dettagli con: show_transfer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6339"/>
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>hw_key_images_sync ignorato. Esegui il comando manualmente prima di un trasferimento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6567"/>
        <source>Invalid keyword: </source>
        <translation>Parola chiave non valida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6858"/>
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
Inserisci %llu/%llu (%s): importo=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6951"/>
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>La transazione spende più di un output molto vecchio. La privacy sarebbe migliore se fossero inviati separatamente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6952"/>
        <source>Spend them now anyway?</source>
        <translation>Li spendo comunque adesso?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7226"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8959"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9724"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10293"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10301"/>
        <source>amount is wrong: </source>
        <translation>l&amp;#39;importo è sbagliato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7227"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8959"/>
        <source>expected number from 0 to </source>
        <translation>numero previsto da 0 a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7409"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7418"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7512"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7730"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7995"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8040"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8277"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8528"/>
        <source>transaction cancelled.</source>
        <translation>transazione annullata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7365"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>Nessun output trovato o il demone non è pronto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2438"/>
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>A differenza di Bitcoin, le tue transazioni e il tuo saldo Salvium rimangono privati e non sono visibili al mondo per impostazione predefinita.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439"/>
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>Tuttavia, se lo desideri, hai la possibilità di renderli disponibili a determinate parti.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6212"/>
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>NOTA: questa transazione utilizza un ID di pagamento crittografato: si consiglia di utilizzare invece dei sottoindirizzi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6217"/>
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>ATTENZIONE: questa transazione utilizza un ID di pagamento non crittografato: questi sono obsoleti e ignorati. Utilizza invece i sottoindirizzi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7398"/>
        <source>Failed to check for backlog: </source>
        <translation>Impossibile verificare l&amp;#39;arretrato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7447"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8011"/>
        <source>
Transaction </source>
        <translation>
Transazione </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7454"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8018"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>ATTENZIONE: vengono utilizzati contemporaneamente output di più indirizzi, il che potrebbe compromettere la tua privacy.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7479"/>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7525"/>
        <source>Unsigned transaction(s) successfully written to MMS</source>
        <translation>Transazioni non firmate scritte correttamente su MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7533"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7570"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7742"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7754"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8052"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8089"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8288"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8326"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8539"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8581"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Impossibile scrivere le transazioni nel file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7538"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7575"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7746"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8056"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8093"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8292"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8330"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8543"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8585"/>
        <source>Unsigned transaction(s) successfully written to file: </source>
        <translation>Transazione/i non firmate scritte correttamente nel file: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7547"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8068"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8304"/>
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>Impossibile firmare a freddo la transazione con il portafoglio HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7700"/>
        <source>No unmixable outputs found</source>
        <translation>Nessun output non miscelabile trovato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7713"/>
        <source>Sweeping </source>
        <translation>Spazzare </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8972"/>
        <source>Failed to parse donation address: </source>
        <translation>Impossibile analizzare l&amp;#39;indirizzo della donazione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8988"/>
        <source>Donating %s %s to %s.</source>
        <translation>Donazione di %s %s a %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9137"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>Caricate %lu transazioni, per %s, commissione %s, %s, %s, con dimensione minima dell&amp;#39;anello %lu, %s. %sVa bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>direction</source>
        <translation>direzione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>timestamp</source>
        <translation>marca temporale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>running balance</source>
        <translation>equilibrio in esecuzione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>hash</source>
        <translation>hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>payment ID</source>
        <translation>ID pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>fee</source>
        <translation>tassa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>destination</source>
        <translation>destinazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>index</source>
        <translation>indice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>note</source>
        <translation>nota</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10265"/>
        <source>CSV exported to </source>
        <translation>CSV esportato in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10452"/>
        <source>Rescan anyway?</source>
        <translation>Ripetere comunque la scansione?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10463"/>
        <source>Warning: your restore height is higher than wallet restore height: </source>
        <translation>Attenzione: l&amp;#39;altezza di ripristino è superiore all&amp;#39;altezza di ripristino del portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10464"/>
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>Ripetere comunque la scansione? (S/Sì/N/No): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10485"/>
        <source>MMS received new message</source>
        <translation>MMS ha ricevuto un nuovo messaggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10654"/>
        <source>locked due to inactivity</source>
        <translation>bloccato per inattività</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11096"/>
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;index&gt;è fuori dai limiti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11386"/>
        <source>Normal</source>
        <translation>Normale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11387"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12241"/>
        <source>Type: </source>
        <translation>Tipo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7020"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11388"/>
        <source>Network type: </source>
        <translation>Tipo di rete: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1493"/>
        <source>Multisig info imported. Number of outputs updated: </source>
        <translation>Informazioni multisig importate. Numero di output aggiornati: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1843"/>
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>Immagine chiave non utilizzata o utilizzata con anello di misura 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2429"/>
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>La maggior parte di questi nodi sono probabilmente spie. Non dovresti usarli a meno che non ti connetta tramite Tor o I2P</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2435"/>
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>Benvenuti a Salvium, la nuova e migliorata criptovaluta privata.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447"/>
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>Benvenuti a Salvium e alla privacy finanziaria conforme. Per maggiori informazioni, visita https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2567"/>
        <source>invalid index: must be an unsigned integer</source>
        <translation>indice non valido: deve essere un intero senza segno</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572"/>
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt;è fuori dai limiti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2630"/>
        <source>Failed to generate QR code, input too large</source>
        <translation>Impossibile generare il codice QR, input troppo grande</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3312"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3334"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3372"/>
        <source>Value not specified</source>
        <translation>Valore non specificato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3324"/>
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>Attenzione: i formati deprecati utilizzano la serializzazione boost, che causa buffer overflow e crash. Carica i formati deprecati solo da fonti di cui ti fidi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3392"/>
        <source>Important commands:</source>
        <translation>Comandi importanti:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394"/>
        <source>&quot;welcome&quot; - Show welcome message.</source>
        <translation>&amp;quot;welcome&amp;quot; - Mostra il messaggio di benvenuto.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <source>&quot;help all&quot; - Show the list of all available commands.</source>
        <translation>&amp;quot;help all&amp;quot; - Mostra l&amp;#39;elenco di tutti i comandi disponibili.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3396"/>
        <source>&quot;help &lt;command&gt;&quot; - Show a command&apos;s documentation.</source>
        <translation>&amp;quot;aiuto&lt;command&gt; &amp;quot; - Mostra la documentazione di un comando.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3397"/>
        <source>&quot;apropos &lt;keyword&gt;&quot; - Show commands related to a keyword.</source>
        <translation>&amp;quot;a proposito&lt;keyword&gt; &amp;quot; - Mostra i comandi correlati a una parola chiave.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3399"/>
        <source>&quot;wallet_info&quot; - Show wallet main address and other info.</source>
        <translation>&amp;quot;wallet_info&amp;quot; - Mostra l&amp;#39;indirizzo principale del portafoglio e altre informazioni.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3400"/>
        <source>&quot;balance&quot; - Show balance.</source>
        <translation>&amp;quot;equilibrio&amp;quot; - Mostra equilibrio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3401"/>
        <source>&quot;address all&quot; - Show all addresses.</source>
        <translation>&amp;quot;address all&amp;quot; - Mostra tutti gli indirizzi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402"/>
        <source>&quot;address new&quot; - Create new subaddress.</source>
        <translation>&amp;quot;nuovo indirizzo&amp;quot; - Crea un nuovo sottoindirizzo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3403"/>
        <source>&quot;transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]&quot; - Send SAL to an address.</source>
        <translation>&amp;quot;trasferire&lt;address&gt;&lt;amount&gt; [&lt;asset_type&gt; ]&amp;quot; - Invia SAL a un indirizzo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3404"/>
        <source>&quot;return_payment &lt;tx_hash&gt;&quot; - Return a previously-received amount to sender.</source>
        <translation>&amp;quot;pagamento_di_ritorno&lt;tx_hash&gt; &amp;quot; - Restituire al mittente un importo ricevuto in precedenza.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3405"/>
        <source>&quot;burn &lt;amount&gt; &lt;asset_type&gt;&quot; - destroy coins forever.</source>
        <translation>&amp;quot;bruciare&lt;amount&gt;&lt;asset_type&gt; &amp;quot; - distruggere le monete per sempre.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406"/>
        <source>&quot;convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]&quot; - convert between coin types.</source>
        <translation>&amp;quot;convertire&lt;amount&gt;&lt;source_asset&gt;&lt;dest_asset&gt; [&lt;slippage_limit&gt; ]&amp;quot; - converte tra i tipi di moneta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3407"/>
        <source>&quot;stake &lt;amount&gt;&quot; - stake SAL for 30 days to earn yield.</source>
        <translation>&amp;quot;palo&lt;amount&gt; &amp;quot; - punta SAL per 30 giorni per ottenere un rendimento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3409"/>
        <source>&quot;price_info&quot; - Display current pricing information for supported assets.</source>
        <translation>&amp;quot;price_info&amp;quot; - Visualizza le informazioni sui prezzi correnti per le risorse supportate.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410"/>
        <source>&quot;supply_info&quot; - Display circulating supply information.</source>
        <translation>&amp;quot;supply_info&amp;quot; - Visualizza le informazioni sulla fornitura circolante.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3411"/>
        <source>&quot;yield_info&quot; - Display current stats on Salvium staking / yield.</source>
        <translation>&amp;quot;yield_info&amp;quot; - Visualizza le statistiche attuali sullo staking/rendimento di Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3412"/>
        <source>&quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&quot; - Show transactions.</source>
        <translation>&amp;quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|stacked|yield]&amp;quot; - Mostra le transazioni.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3413"/>
        <source>&quot;sweep_all &lt;address&gt;&quot; - Send whole balance to another wallet.</source>
        <translation>&amp;quot;spazza_tutto&lt;address&gt; &amp;quot; - Invia l&amp;#39;intero saldo a un altro portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414"/>
        <source>&quot;seed&quot; - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>&amp;quot;seed&amp;quot; - Mostra le 25 parole segrete che possono essere utilizzate per recuperare questo portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3415"/>
        <source>&quot;refresh&quot; - Synchronize wallet with the Salvium network.</source>
        <translation>&amp;quot;refresh&amp;quot; - Sincronizza il portafoglio con la rete Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3416"/>
        <source>&quot;status&quot; - Check current status of wallet.</source>
        <translation>&amp;quot;status&amp;quot; - Controlla lo stato attuale del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3417"/>
        <source>&quot;version&quot; - Check software version.</source>
        <translation>&amp;quot;versione&amp;quot; - Controlla la versione del software.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418"/>
        <source>&quot;exit&quot; - Exit wallet.</source>
        <translation>&amp;quot;exit&amp;quot; - Esci dal portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3420"/>
        <source>&quot;donate &lt;amount&gt;&quot; - Donate SAL to the development team.</source>
        <translation>&amp;quot;donare&lt;amount&gt; &amp;quot; - Dona SAL al team di sviluppo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3450"/>
        <source>No commands found mentioning keyword(s)</source>
        <translation>Nessun comando trovato che menziona parole chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3481"/>
        <source>Invalid txid specified: </source>
        <translation>Txid non valido specificato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3488"/>
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>ATTENZIONE: questa operazione potrebbe rivelare i txid al nodo remoto e compromettere la tua privacy</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3490"/>
        <source>You have canceled the operation</source>
        <translation>Hai annullato l&amp;#39;operazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3535"/>
        <source>Set another daemon to connect to. If it&apos;s not yours, it&apos;ll probably spy on you.</source>
        <translation>Imposta un altro demone a cui connettersi. Se non è tuo, probabilmente ti spierà.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561"/>
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included). The &quot;subtractfeefrom=&quot; list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: &quot;transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2&quot;. Let&apos;s say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use &quot;subtractfeefrom=all&quot; to spread the fee across all destinations.</source>
        <translation>Trasferire&lt;amount&gt; Di&lt;asset_type&gt; A&lt;address&gt; . Se il parametro &amp;quot;indice=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; è specificato, il portafoglio utilizza gli output ricevuti dagli indirizzi di quegli indici. Se omesso, il portafoglio sceglie casualmente gli indici degli indirizzi da utilizzare. In ogni caso, fa del suo meglio per non combinare gli output su più indirizzi.&lt;priority&gt; è la priorità della transazione. Maggiore è la priorità, maggiore è la commissione di transazione. I valori validi in ordine di priorità (dal più basso al più alto) sono: unimportant, normal, elevation, priority. Se omesso, viene utilizzato il valore predefinito (vedere il comando &amp;quot;set priority&amp;quot;).&lt;ring_size&gt; è il numero di input da includere per l&amp;#39;irrintracciabilità. È possibile effettuare più pagamenti contemporaneamente aggiungendo URI_2 o&lt;address_2&gt;&lt;amount_2&gt; eccetera (prima dell&amp;#39;ID di pagamento, se incluso). L&amp;#39;elenco &amp;quot;subtractfeefrom=&amp;quot; consente di scegliere da quali destinazioni finanziare la commissione di transazione anziché l&amp;#39;output del resto. La commissione verrà suddivisa in modo proporzionale tra le destinazioni scelte. Ad esempio, per effettuare 3 trasferimenti in cui la commissione viene prelevata dalla prima e dalla terza destinazione, si potrebbe fare: &amp;quot;transfer&lt;addr1&gt; 3&lt;addr2&gt; 0,5&lt;addr3&gt; 1 subtractfeefrom=0,2&amp;quot;. Supponiamo che la commissione di tx sia 0,1. Il saldo scenderebbe esattamente di 4,5 SAL incluse le commissioni, e addr1 e addr3 riceverebbero rispettivamente 2,925 e 0,975 SAL. Usa &amp;quot;subtractfeefrom=all&amp;quot; per distribuire la commissione su tutte le destinazioni.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3569"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>Invia tutto il saldo sbloccato a un indirizzo e bloccalo per&lt;lockblocks&gt; (max. 1000000). Se il parametro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; o &amp;quot;index=all&amp;quot;, il portafoglio esegue lo sweep degli output ricevuti da quegli o tutti gli indici di indirizzo, rispettivamente. Se omesso, il portafoglio sceglie casualmente un indice di indirizzo da utilizzare.&lt;priority&gt; è la priorità dello sweep. Maggiore è la priorità, maggiore è la commissione di transazione. I valori validi in ordine di priorità (dal più basso al più alto) sono: unimportant, normal, elevation, priority. Se omesso, viene utilizzato il valore predefinito (vedere il comando &amp;quot;set priority&amp;quot;).&lt;ring_size&gt; è il numero di input da includere per la non tracciabilità.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3575"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Invia tutto il saldo sbloccato a un indirizzo. Se il parametro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; o &amp;quot;index=all&amp;quot;, il portafoglio esegue lo sweep degli output ricevuti da quegli o da tutti gli indici di indirizzo, rispettivamente. Se omesso, il portafoglio sceglie casualmente un indice di indirizzo da utilizzare. Se il parametro &amp;quot;outputs=&lt;N&gt; &amp;quot; è specificato e N &amp;gt; 0, il portafoglio suddivide la transazione in N output pari.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3578"/>
        <source>Send all unlocked balance from a given account to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Invia tutto il saldo sbloccato da un dato account a un indirizzo. Se il parametro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; o &amp;quot;index=all&amp;quot;, il portafoglio esegue lo sweep degli output ricevuti da quegli o da tutti gli indici di indirizzo, rispettivamente. Se omesso, il portafoglio sceglie casualmente un indice di indirizzo da utilizzare. Se il parametro &amp;quot;outputs=&lt;N&gt; &amp;quot; è specificato e N &amp;gt; 0, il portafoglio suddivide la transazione in N output pari.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3590"/>
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>Restituisce i pagamenti ricevuti in TX&lt;tx_hash&gt; al mittente originale.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3594"/>
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>Distrugge PERMANENTEMENTE (brucia)&lt;amount&gt; Di&lt;asset_type&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3598"/>
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>convertiti&lt;amount&gt;&lt;source_asset&gt; in&lt;dest_asset&gt; , con facoltativo&lt;slippage_limit&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602"/>
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>Serrature&lt;amount&gt; di SAL come quota per guadagnare rendimento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618"/>
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>Visualizza le statistiche sui rendimenti degli ultimi&lt;NN&gt; blocchi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3622"/>
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>Donare&lt;amount&gt; al team di sviluppo (donate.salvium.io).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3648"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;mnew&quot; is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If &quot;one-off&quot; is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>Se non vengono specificati argomenti o&lt;index&gt; è specificato, il portafoglio mostra l&amp;#39;indirizzo predefinito o specificato. Se è specificato &amp;quot;all&amp;quot;, il portafoglio mostra tutti gli indirizzi esistenti nell&amp;#39;account attualmente selezionato. Se è specificato &amp;quot;new&amp;quot;, il portafoglio crea un nuovo indirizzo con il testo dell&amp;#39;etichetta fornito (che può essere vuoto). Se è specificato &amp;quot;mnew&amp;quot;, il portafoglio crea tanti nuovi indirizzi quanti sono quelli specificati dall&amp;#39;argomento; l&amp;#39;etichetta predefinita è impostata per i nuovi indirizzi. Se è specificato &amp;quot;label&amp;quot;, il portafoglio imposta l&amp;#39;etichetta dell&amp;#39;indirizzo specificato da&lt;index&gt; al testo dell&amp;#39;etichetta fornito. Se viene specificato &amp;quot;one-off&amp;quot;, l&amp;#39;indirizzo per l&amp;#39;indice specificato viene generato e visualizzato, e ricordato dal portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3806"/>
        <source>Show the incoming/outgoing transfers within an optional height range.

Output format:
In or Coinbase:    Block Number, &quot;block&quot;|&quot;in&quot;,              Time, Amount, Asset Type, Transaction Hash, Payment ID, Subaddress Index,                     &quot;-&quot;, Note
Out:               Block Number, &quot;out&quot;,                     Time, Amount*, Asset Type, Transaction Hash, Payment ID, Fee, Destinations, Input addresses**, &quot;-&quot;, Note
Pool:                            &quot;pool&quot;, &quot;in&quot;,              Time, Amount, Asset Type, Transaction Hash, Payment Id, Subaddress Index,                     &quot;-&quot;, Note, Double Spend Note
Pending or Failed:               &quot;failed&quot;|&quot;pending&quot;, &quot;out&quot;, Time, Amount*, Transaction Hash, Payment ID, Fee, Input addresses**,               &quot;-&quot;, Note
Staked or Burnt:   Block Number, &quot;out&quot;,                     Time, Amount*, Asset Type, Transaction Hash, Payment ID, Fee, Input addresses**,               &quot;-&quot;, Note

* Excluding change and fee.
** Set of address indices used as inputs in this transfer.</source>
        <translation>Mostra i trasferimenti in entrata/uscita entro un intervallo di altezza facoltativo. Formato di output: In o Coinbase: Numero di blocco, &amp;quot;block&amp;quot;|&amp;quot;in&amp;quot;, Ora, Importo, Tipo di asset, Hash di transazione, ID di pagamento, Indice di sottoindirizzo, &amp;quot;-&amp;quot;, Nota Out: Numero di blocco, &amp;quot;out&amp;quot;, Ora, Importo*, Tipo di asset, Hash di transazione, ID di pagamento, Commissione, Destinazioni, Indirizzi di input**, &amp;quot;-&amp;quot;, Pool di note: &amp;quot;pool&amp;quot;, &amp;quot;in&amp;quot;, Ora, Importo, Tipo di asset, Hash di transazione, ID di pagamento, Indice di sottoindirizzo, &amp;quot;-&amp;quot;, Nota, Nota di doppia spesa In sospeso o non riuscito: &amp;quot;failed&amp;quot;|&amp;quot;pending&amp;quot;, &amp;quot;out&amp;quot;, Ora, Importo*, Hash di transazione, ID di pagamento, Commissione, Indirizzi di input**, &amp;quot;-&amp;quot;, Nota Staked o Burnt: Numero di blocco, &amp;quot;out&amp;quot;, Ora, Importo*, Tipo di asset, Hash di transazione, ID di pagamento, Commissione, Indirizzi di input**, &amp;quot;-&amp;quot;, Nota * Esclusi resto e commissione. ** Set di indici di indirizzo utilizzati come input in questo trasferimento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3817"/>
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [in|out|tutto|in sospeso|fallito|pool|coinbase|bruciato|puntato|rendimento] [indice=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [uscita=&lt;filepath&gt; ] [opzione=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3852"/>
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>Firma il contenuto di un file con il sottoindirizzo specificato (o l&amp;#39;indirizzo principale se non specificato)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3927"/>
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>Interfaccia con MMS (Multisig Messaging System)&lt;subcommand&gt; è uno di: init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum Ottieni aiuto su un sottocomando con: help mms&lt;subcommand&gt; , o aiuto mms&lt;subcommand&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4002"/>
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>Ottieni un checksum che consente ai firmatari di controllare facilmente la configurazione MMS identica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4088"/>
        <source>Show address as QR code</source>
        <translation>Mostra l&amp;#39;indirizzo come codice QR</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4096"/>
        <source>Search all command descriptions for keyword(s)</source>
        <translation>Cerca tutte le descrizioni dei comandi per parola chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4100"/>
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>Scansiona le transazioni fornite da&lt;txid&gt; (s), elaborandoli e ricercandone gli output</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4216"/>
        <source>sal, millisal, microsal</source>
        <translation>sale, millisale, microsale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4235"/>
        <source>1 or 0</source>
        <translation>1 o 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4461"/>
        <source>Multisig is disabled.</source>
        <translation>Multisig è disabilitato.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4462"/>
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can&apos;t be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>Multisig è una funzionalità sperimentale e potrebbe contenere dei bug. Le cose che potrebbero andare storte includono: i fondi inviati a un portafoglio multisig non possono essere spesi affatto, possono essere spesi solo con la partecipazione di un membro del gruppo malintenzionato o possono essere rubati da un membro del gruppo malintenzionato.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4464"/>
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>Hai annullato il ripristino di un portafoglio multisig.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5184"/>
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>il portafoglio non è riuscito a connettersi al demone perché è impostato sulla modalità offline</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5186"/>
        <source>wallet failed to connect to daemon, because it is not up to date. </source>
        <translation>il portafoglio non è riuscito a connettersi al demone perché non è aggiornato. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5187"/>
        <source>Please make sure you are running the latest wallet.</source>
        <translation>Assicurati di utilizzare il portafoglio più recente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5190"/>
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation>Il demone non è aggiornato. Assicurati che il demone stia eseguendo la versione più recente o modifica l&amp;#39;indirizzo del demone usando il comando &amp;#39;set_daemon&amp;#39;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5357"/>
        <source>Your wallet has been generated!
To start synchronizing with the daemon, use the &quot;refresh&quot; command.
Use the &quot;help&quot; command to see a simplified list of available commands.
Use &quot;help all&quot; command to see the list of all available commands.
Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
Always use the &quot;exit&quot; command when closing salvium-wallet-cli to save 
your current session&apos;s state. Otherwise, you might need to synchronize 
your wallet again (your wallet keys are NOT at risk in any case).
</source>
        <translation>Il tuo portafoglio è stato generato! Per iniziare la sincronizzazione con il daemon, usa il comando &amp;quot;refresh&amp;quot;. Usa il comando &amp;quot;help&amp;quot; per vedere un elenco semplificato dei comandi disponibili. Usa il comando &amp;quot;help all&amp;quot; per vedere l&amp;#39;elenco di tutti i comandi disponibili. Usa &amp;quot;help&lt;command&gt; &amp;quot; per vedere la documentazione di un comando. Usa sempre il comando &amp;quot;exit&amp;quot; quando chiudi salvium-wallet-cli per salvare lo stato della sessione corrente. Altrimenti, potresti dover sincronizzare di nuovo il tuo portafoglio (le chiavi del tuo portafoglio NON sono a rischio in nessun caso).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5638"/>
        <source>Use the &quot;help&quot; command to see a simplified list of available commands.
</source>
        <translation>Utilizzare il comando &amp;quot;help&amp;quot; per visualizzare un elenco semplificato dei comandi disponibili.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5639"/>
        <source>Use &quot;help all&quot; to see the list of all available commands.
</source>
        <translation>Utilizzare &amp;quot;help all&amp;quot; per visualizzare l&amp;#39;elenco di tutti i comandi disponibili.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5834"/>
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>Abilitando questa opzione, la rete che stai utilizzando viene supportata e ti rende idoneo a ricevere nuovi SAL</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005"/>
        <source>Failed to parse address</source>
        <translation>Impossibile analizzare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020"/>
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got </source>
        <translation>Previsto attendibile, non attendibile o questo è probabilmente un nodo spia ottenuto </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6029"/>
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>Questo non è un indirizzo Tor/I2P e non è un demone attendibile.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6030"/>
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>Puoi usare il tuo nodo di fiducia, connetterti tramite Tor o I2P, oppure passare come &amp;quot;questo è probabilmente un nodo spia&amp;quot; e farti spiare.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6035"/>
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>Attenzione: connettendoti a un demone non locale senza SSL, gli avversari passivi saranno in grado di spiarti.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6138"/>
        <source>stake returned </source>
        <translation>posta in gioco restituita </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6144"/>
        <source>yield earned </source>
        <translation>rendimento guadagnato </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6161"/>
        <source>burnt </source>
        <translation>bruciato </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6167"/>
        <source>converting </source>
        <translation>conversione </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6173"/>
        <source>staked </source>
        <translation>puntato </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>Il dispositivo chiede la passphrase. Vuoi inserire la passphrase sul dispositivo (Y) (o sull&amp;#39;host (N))?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322"/>
        <source>The wallet&apos;s refresh-from-block-height setting is higher than the daemon&apos;s height: this may mean your wallet will skip over transactions</source>
        <translation>L&amp;#39;impostazione refresh-from-block-height del portafoglio è superiore all&amp;#39;altezza del demone: questo potrebbe significare che il tuo portafoglio salterà le transazioni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6472"/>
        <source> (Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation> (Alcuni output di proprietà hanno immagini chiave mancanti: sono necessari export_outputs, import_outputs, export_key_images e import_key_images)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6489"/>
        <source>Asset: </source>
        <translation>Risorsa: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6489"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10855"/>
        <source>, balance: </source>
        <translation>, bilancia: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6815"/>
        <source>failed to connect to daemon</source>
        <translation>Impossibile connettersi al demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6918"/>
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>, che può rompere l&amp;#39;anonimato delle firme ad anello. Assicurati che sia intenzionale!
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6976"/>
        <source>I locked your Salvium wallet to protect you while you were away
see &quot;help set&quot; to configure/disable</source>
        <translation>Ho bloccato il tuo portafoglio Salvium per proteggerti mentre eri via. Consulta &amp;quot;help set&amp;quot; per configurare/disattivare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7006"/>
        <source>Locked due to inactivity.</source>
        <translation>Bloccato per inattività.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7010"/>
        <source>The wallet password is required to unlock the console.</source>
        <translation>Per sbloccare la console è necessaria la password del portafoglio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7021"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11389"/>
        <source>Testnet</source>
        <translation>Rete di prova</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7022"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11390"/>
        <source>Stagenet</source>
        <translation>Stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7022"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11390"/>
        <source>Mainnet</source>
        <translation>Rete principale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7457"/>
        <source>Burning %s %s.  </source>
        <translation>Masterizzazione di %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7459"/>
        <source>Converting %s %s to %s.  </source>
        <translation>Conversione di %s %s in %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461"/>
        <source>Staking %s %s for yield accrual.  </source>
        <translation>Picchettamento di %s %s per accumulo di rendimento.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7465"/>
        <source>Sending %s %s.  </source>
        <translation>Invio di %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7484"/>
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>Questa transazione (inclusa la modifica di %s) verrà sbloccata in %llu blocchi, circa %s giorni (ipotizzando 2 minuti per blocco)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8372"/>
        <source>Invalid account</source>
        <translation>Account non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8404"/>
        <source>return_payments are disabled</source>
        <translation>return_payments sono disabilitati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8440"/>
        <source>incorrect TX type for txid </source>
        <translation>tipo TX non corretto per txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8446"/>
        <source>invalid return_address_list for txid </source>
        <translation>return_address_list non valido per txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8452"/>
        <source>invalid return_address/return_pubkey for txid </source>
        <translation>return_address/return_pubkey non valido per txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8459"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8477"/>
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid </source>
        <translation>l&amp;#39;immagine chiave non è disponibile (parziale / sconosciuta / esaurita / congelata) per txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8550"/>
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>la firma a freddo dei TX di ritorno non è ancora implementata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8646"/>
        <source>conversions are disabled until hard fork </source>
        <translation>le conversioni sono disabilitate fino all&amp;#39;hard fork </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8653"/>
        <source>missing / extraneous argument(s)</source>
        <translation>argomenti mancanti/estranei</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8669"/>
        <source>invalid slippage_limit value : expected 0.0-90.0, got </source>
        <translation>valore slippage_limit non valido: previsto 0,0-90,0, ottenuto </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8680"/>
        <source>invalid argument(s): </source>
        <translation>argomenti non validi: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8686"/>
        <source>out of range for slippage limit: </source>
        <translation>fuori portata per il limite di slittamento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8696"/>
        <source>invalid destination asset_type</source>
        <translation>asset_type di destinazione non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8706"/>
        <source>invalid source asset_type</source>
        <translation>tipo di risorsa sorgente non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8715"/>
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>conversione non valida - asset_type non è cambiato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8743"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8772"/>
        <source>This is a multisig wallet, staking is not currently supported</source>
        <translation>Questo è un portafoglio multisig, lo staking non è attualmente supportato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8820"/>
        <source>%s
	SPOT:	%d
	MA:	%d</source>
        <translation>%s PUNTO: %d MA: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8844"/>
        <source>SUPPLY INFO</source>
        <translation>INFORMAZIONI SULLA FORNITURA</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8855"/>
        <source>	%6s : %21.8d</source>
        <translation>	%6s: %21.8d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8892"/>
        <source>
STAKED FUNDS:</source>
        <translation>
FONDI IN GARANZIA:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8986"/>
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>Donazione di %s %s al Salvium Team (donate.salvium.io o %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9346"/>
        <source>Last argument is an address, but not a subaddress</source>
        <translation>L&amp;#39;ultimo argomento è un indirizzo, ma non un sottoindirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9400"/>
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>Potrebbe essere perché il trasferimento è stato a un subindirizzo. Se è questo il caso, passa il subindirizzo per ultimo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10099"/>
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>utilizzo: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|stacked|yield] [index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10158"/>
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>utilizzo: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|stacked|yield] [indice=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [uscita=&lt;path&gt; ] [opzione=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>tx key</source>
        <translation>tasto tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10854"/>
        <source>
Grand total:
  Asset: </source>
        <translation>
Totale generale: Attività: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Asset</source>
        <translation>Risorsa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10996"/>
        <source>Expected exactly one argument for the amount of new addresses</source>
        <translation>Ci si aspettava esattamente un argomento per la quantità di nuovi indirizzi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11002"/>
        <source>failed to parse the amount of new addresses: </source>
        <translation>impossibile analizzare la quantità di nuovi indirizzi: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11007"/>
        <source>the amount of new addresses must be lower or equal to </source>
        <translation>la quantità di nuovi indirizzi deve essere inferiore o uguale a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11023"/>
        <source>Expected exactly two arguments for index</source>
        <translation>Sono previsti esattamente due argomenti per l&amp;#39;indice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11033"/>
        <source>Address at %u %u: %s</source>
        <translation>Indirizzo a %u %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11167"/>
        <source>Standard address: %s, payment ID: %s</source>
        <translation>Indirizzo standard: %s, ID pagamento: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11375"/>
        <source>CN Address: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11376"/>
        <source>Carrot Address: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11384"/>
        <source>Background wallet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11438"/>
        <source>Invalid subaddress index format, and not a signature type: </source>
        <translation>Formato indice sottoindirizzo non valido e non tipo di firma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12068"/>
        <source> (Y/Yes/N/No): </source>
        <translation> (S/Sì/N/No): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12074"/>
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>ATTENZIONE: l&amp;#39;utilizzo dei meccanismi di configurazione automatica MMS non è affidabile</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12075"/>
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers&apos; info</source>
        <translation>Un gestore di auto-configurazione dannoso potrebbe inviarti informazioni sui tuoi portafogli invece delle informazioni di altri firmatari</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12076"/>
        <source>If in doubt do not use auto-config or at least compare configs using the &quot;mms config_checksum&quot; command</source>
        <translation>In caso di dubbi non utilizzare la configurazione automatica o almeno confrontare le configurazioni utilizzando il comando &amp;quot;mms config_checksum&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12103"/>
        <source>Choose processing:</source>
        <translation>Scegli l&amp;#39;elaborazione:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12112"/>
        <source>Sign tx</source>
        <translation>Firma tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12120"/>
        <source>Send the tx for submission to </source>
        <translation>Inviare la tx per l&amp;#39;invio a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12124"/>
        <source>Send the tx for signing to </source>
        <translation>Inviare la tx per la firma a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12131"/>
        <source>Submit tx</source>
        <translation>Invia tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12134"/>
        <source>unknown</source>
        <translation>sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12140"/>
        <source>Choice: </source>
        <translation>Scelta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12152"/>
        <source>Wrong choice</source>
        <translation>Scelta sbagliata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12159"/>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12159"/>
        <source>I/O</source>
        <translation>I/O</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12159"/>
        <source>Authorized Signer</source>
        <translation>Firmatario autorizzato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Message Type</source>
        <translation>Tipo di messaggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Height</source>
        <translation>Altezza</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Message State</source>
        <translation>Stato del messaggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Since</source>
        <translation>Da</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12177"/>
        <source> ago</source>
        <translation> fa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12183"/>
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12183"/>
        <source>Transport Address</source>
        <translation>Indirizzo di trasporto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12184"/>
        <source>Auto-Config Token</source>
        <translation>Token di configurazione automatica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12184"/>
        <source>Salvium Address</source>
        <translation>Indirizzo Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12188"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12196"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12198"/>
        <source>&lt;not set&gt;</source>
        <translation>&lt;not set&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12239"/>
        <source>Message </source>
        <translation>Messaggio </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12240"/>
        <source>In/out: </source>
        <translation>Dentro/fuori: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12242"/>
        <source>State: </source>
        <translation>Stato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12242"/>
        <source>%s since %s, %s ago</source>
        <translation>%s da %s, %s fa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12246"/>
        <source>Sent: Never</source>
        <translation>Inviato: Mai</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12250"/>
        <source>Sent: %s, %s ago</source>
        <translation>Inviato: %s, %s fa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12253"/>
        <source>Authorized signer: </source>
        <translation>Firmatario autorizzato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12254"/>
        <source>Content size: </source>
        <translation>Dimensione del contenuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12254"/>
        <source> bytes</source>
        <translation> byte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12255"/>
        <source>Content: </source>
        <translation>Contenuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12255"/>
        <source>(binary data)</source>
        <translation>(dati binari)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12285"/>
        <source>Send these messages now?</source>
        <translation>Inviare questi messaggi ora?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12295"/>
        <source>Queued for sending.</source>
        <translation>In coda per l&amp;#39;invio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12315"/>
        <source>Invalid message id</source>
        <translation>ID messaggio non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12324"/>
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>utilizzo: mms init&lt;required_signers&gt; /&lt;authorized_signers&gt;&lt;own_label&gt;&lt;own_transport_address&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12330"/>
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>L&amp;#39;MMS è già inizializzato. Reinizializzare eliminando tutte le informazioni e i messaggi del firmatario?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12345"/>
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>Errore nel numero di firmatari richiesti e/o firmatari autorizzati</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12362"/>
        <source>The MMS is not active.</source>
        <translation>L&amp;#39;MMS non è attivo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12385"/>
        <source>Invalid signer number </source>
        <translation>Numero firmatario non valido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12390"/>
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>firmatario mms [&lt;number&gt; &lt;label&gt;[&lt;/label&gt;&lt;transport_address&gt; &lt;label&gt;[&lt;/label&gt;&lt;salvium_address&gt; &lt;label&gt;]]]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12409"/>
        <source>Invalid Salvium address</source>
        <translation>Indirizzo Salvium non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12416"/>
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>Lo stato del portafoglio non consente più di modificare gli indirizzi Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12428"/>
        <source>Usage: mms list</source>
        <translation>Utilizzo: elenco mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12441"/>
        <source>Usage: mms next [sync]</source>
        <translation>Utilizzo: mms next [sync]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12466"/>
        <source>No next step: </source>
        <translation>Nessun passaggio successivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12476"/>
        <source>prepare_multisig</source>
        <translation>preparare_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12482"/>
        <source>make_multisig</source>
        <translation>crea_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12497"/>
        <source>exchange_multisig_keys</source>
        <translation>scambia_chiavi_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12513"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12637"/>
        <source>export_multisig_info</source>
        <translation>esporta_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12522"/>
        <source>import_multisig_info</source>
        <translation>importa_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12535"/>
        <source>sign_multisig</source>
        <translation>segno_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12545"/>
        <source>submit_multisig</source>
        <translation>invia_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12555"/>
        <source>Send tx</source>
        <translation>Invia tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12566"/>
        <source>Process signer config</source>
        <translation>Configurazione del firmatario del processo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12578"/>
        <source>Replace current signer config with the one displayed above?</source>
        <translation>Sostituire la configurazione del firmatario corrente con quella visualizzata sopra?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12584"/>
        <source>You can use the &quot;mms delete&quot; command to delete any unwanted message</source>
        <translation>Puoi usare il comando &amp;quot;mms delete&amp;quot; per eliminare qualsiasi messaggio indesiderato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12597"/>
        <source>Process auto config data</source>
        <translation>Elaborare i dati di configurazione automatica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12611"/>
        <source>Nothing ready to process</source>
        <translation>Niente pronto per l&amp;#39;elaborazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12630"/>
        <source>Usage: mms sync</source>
        <translation>Utilizzo: sincronizzazione mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12654"/>
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>Utilizzo: mms elimina (&lt;message_id&gt; | tutti)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12661"/>
        <source>Delete all messages?</source>
        <translation>Eliminare tutti i messaggi?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12687"/>
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>Utilizzo: invio mms [&lt;message_id&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12704"/>
        <source>Usage: mms receive</source>
        <translation>Utilizzo: ricezione mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12721"/>
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>Utilizzo: esportazione mms&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12732"/>
        <source>Message content saved to: </source>
        <translation>Contenuto del messaggio salvato in: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12736"/>
        <source>Failed to to save message content</source>
        <translation>Impossibile salvare il contenuto del messaggio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12760"/>
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>Utilizzo: nota mms [&lt;text&gt; &lt;label&gt;]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12767"/>
        <source>No signer found with label </source>
        <translation>Nessun firmatario trovato con etichetta </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12789"/>
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>Utilizzo: mms show&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12807"/>
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>Utilizzo: set mms&lt;option_name&gt; [&lt;option_value&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12824"/>
        <source>Wrong option value</source>
        <translation>Valore dell&amp;#39;opzione errato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12829"/>
        <source>Auto-send is on</source>
        <translation>L&amp;#39;invio automatico è attivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12829"/>
        <source>Auto-send is off</source>
        <translation>L&amp;#39;invio automatico è disattivato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12834"/>
        <source>Unknown option</source>
        <translation>Opzione sconosciuta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12842"/>
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>Utilizzo: aiuto mms [&lt;subcommand&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12858"/>
        <source>Usage: mms send_signer_config</source>
        <translation>Utilizzo: mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12864"/>
        <source>Signer config not yet complete</source>
        <translation>La configurazione del firmatario non è ancora completa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12879"/>
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>Utilizzo: mms start_auto_config [ &lt;label&gt;...]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12884"/>
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>Ci sono firmatari senza un set di etichette. Completa le etichette prima della configurazione automatica o specificale come parametri qui.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12890"/>
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>La configurazione automatica è già in esecuzione. Annullare e riavviare?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12914"/>
        <source>Usage: mms config_checksum</source>
        <translation>Utilizzo: mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12926"/>
        <source>Usage: mms stop_auto_config</source>
        <translation>Utilizzo: mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12929"/>
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>Eliminare tutti i token di configurazione automatica e interrompere la configurazione automatica?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12942"/>
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>Utilizzo: mms auto_config&lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12949"/>
        <source>Invalid auto-config token</source>
        <translation>Token di configurazione automatica non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12959"/>
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>Configurazione automatica già in esecuzione. Annullare e riavviare?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12978"/>
        <source>MMS not available in this wallet</source>
        <translation>MMS non disponibile in questo portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13002"/>
        <source>The MMS is not active. Activate using the &quot;mms init&quot; command</source>
        <translation>L&amp;#39;MMS non è attivo. Attivare tramite il comando &amp;quot;mms init&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13083"/>
        <source>Invalid MMS subcommand</source>
        <translation>Sottocomando MMS non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13088"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13092"/>
        <source>Error in MMS command: </source>
        <translation>Errore nel comando MMS: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11409"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non può firmare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11414"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>Questo portafoglio è multisig e non può firmare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11488"/>
        <source>Bad signature from </source>
        <translation>Firma errata da </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11492"/>
        <source>Good signature from </source>
        <translation>Buona firma da </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11509"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non può esportare immagini chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11547"/>
        <source>Signed key images exported to </source>
        <translation>Immagini chiave firmate esportate in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11593"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11639"/>
        <source>command only supported by HW wallet</source>
        <translation>comando supportato solo dal portafoglio HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11598"/>
        <source>hw wallet does not support cold KI sync</source>
        <translation>hw wallet non supporta la sincronizzazione KI a freddo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11610"/>
        <source>Please confirm the key image sync on the device</source>
        <translation>Si prega di confermare la sincronizzazione dell&amp;#39;immagine chiave sul dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11616"/>
        <source>Key images synchronized to height </source>
        <translation>Immagini chiave sincronizzate all&amp;#39;altezza </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11619"/>
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>In esecuzione un daemon non attendibile, non è possibile determinare quale output di transazione è stato speso. Utilizzare un daemon attendibile con --trusted-daemon ed eseguire rescan_spent</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11622"/>
        <source> spent, </source>
        <translation> speso, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11622"/>
        <source> unspent</source>
        <translation> non speso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626"/>
        <source>Failed to import key images</source>
        <translation>Impossibile importare le immagini chiave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11631"/>
        <source>Failed to import key images: </source>
        <translation>Impossibile importare le immagini chiave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11648"/>
        <source>Failed to reconnect device</source>
        <translation>Impossibile riconnettere il dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11653"/>
        <source>Failed to reconnect device: </source>
        <translation>Impossibile riconnettere il dispositivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11706"/>
        <source>Outputs exported to </source>
        <translation>Output esportati in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11862"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>Doppia spesa rilevata sulla rete: questa transazione potrebbe finire o meno per essere minata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11897"/>
        <source>Transaction ID not found</source>
        <translation>ID transazione non trovato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11932"/>
        <source>Transaction successfully saved to </source>
        <translation>Transazione salvata con successo su </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11932"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11934"/>
        <source>, txid </source>
        <translation>, txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11934"/>
        <source>Failed to save transaction to </source>
        <translation>Impossibile salvare la transazione in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="430"/>
        <source>true</source>
        <translation>VERO</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="483"/>
        <source>failed to parse refresh type</source>
        <translation>impossibile analizzare il tipo di aggiornamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Inserisci la passphrase di offset del seed opzionale, lasciala vuota per vedere il seed grezzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4546"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Inserisci la passphrase offset del seed, vuota se non è presente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>Potresti voler rimuovere il file &amp;quot;%s&amp;quot; e riprovare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9171"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Questo è un portafoglio multisig, può firmare solo con sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9176"/>
        <source>This is a watch only wallet</source>
        <translation>Questo è un portafoglio solo per orologio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9209"/>
        <source>Failed to sign transaction</source>
        <translation>Impossibile firmare la transazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9215"/>
        <source>Failed to sign transaction: </source>
        <translation>Impossibile firmare la transazione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9236"/>
        <source>Transaction raw hex data exported to </source>
        <translation>Dati esadecimali grezzi della transazione esportati in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9257"/>
        <source>Failed to load transaction from file</source>
        <translation>Impossibile caricare la transazione dal file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8422"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9304"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9357"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9418"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9467"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9549"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9635"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9670"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11257"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11287"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11759"/>
        <source>failed to parse txid</source>
        <translation>impossibile analizzare txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9317"/>
        <source>Tx key: </source>
        <translation>Tasto Tx: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9322"/>
        <source>no tx keys found for this txid</source>
        <translation>nessuna chiave tx trovata per questo txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9367"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9378"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9385"/>
        <source>failed to parse tx_key</source>
        <translation>impossibile analizzare tx_key</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9394"/>
        <source>Tx key successfully stored.</source>
        <translation>Chiave Tx memorizzata correttamente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9398"/>
        <source>Failed to store tx key: </source>
        <translation>Impossibile memorizzare la chiave tx: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9436"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9649"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9739"/>
        <source>signature file saved to: </source>
        <translation>file della firma salvato in: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9438"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9651"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9741"/>
        <source>failed to save signature file</source>
        <translation>impossibile salvare il file della firma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9442"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9530"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9608"/>
        <source>error: </source>
        <translation>errore: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9475"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9484"/>
        <source>failed to parse tx key</source>
        <translation>impossibile analizzare la chiave tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9506"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9579"/>
        <source>received</source>
        <translation>ricevuto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9506"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9579"/>
        <source>in txid</source>
        <translation>nel txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9509"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9582"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>ATTENZIONE: questa transazione non è ancora inclusa nella blockchain!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9519"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9592"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>ATTENZIONE: impossibile determinare il numero di conferme!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9525"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9598"/>
        <source>received nothing in txid</source>
        <translation>non ho ricevuto nulla in txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9565"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9680"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9775"/>
        <source>failed to load signature file</source>
        <translation>impossibile caricare il file della firma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9687"/>
        <source>Good signature</source>
        <translation>Buona firma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9603"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9689"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9790"/>
        <source>Bad signature</source>
        <translation>Firma errata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9628"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>il portafoglio è solo per l&amp;#39;orologio e non può generare la prova</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9713"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>La prova di riserva può essere generata solo da un portafoglio pieno</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9768"/>
        <source>Address must not be a subaddress</source>
        <translation>L&amp;#39;indirizzo non deve essere un sottoindirizzo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9895"/>
        <source>bad min_height parameter:</source>
        <translation>parametro min_height non valido:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9907"/>
        <source>bad max_height parameter:</source>
        <translation>parametro max_height non valido:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9929"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>block</source>
        <translation>bloccare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9929"/>
        <source>in</source>
        <translation>In</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10020"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[Doppia spesa rilevata sulla rete: questa transazione potrebbe finire o meno per essere minata] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10308"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt;dovrebbe essere più piccolo di&lt;max_amount&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10334"/>
        <source>There is no unspent output in the specified address</source>
        <translation>Non c&amp;#39;è alcun output non speso nell&amp;#39;indirizzo specificato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10340"/>
        <source>
Amount: </source>
        <translation>
Quantità: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10340"/>
        <source>, number of keys: </source>
        <translation>, numero di chiavi: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10345"/>
        <source> </source>
        <translation> </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10350"/>
        <source>
Min block height: </source>
        <translation>
Altezza minima del blocco: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10351"/>
        <source>
Max block height: </source>
        <translation>
Altezza massima del blocco: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10352"/>
        <source>
Min amount found: </source>
        <translation>
Importo minimo trovato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10353"/>
        <source>
Max amount found: </source>
        <translation>
Quantità massima trovata: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10354"/>
        <source>
Total count: </source>
        <translation>
Conteggio totale: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10394"/>
        <source>
Bin size: </source>
        <translation>
Ottienilo per te: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10395"/>
        <source>
Outputs per *: </source>
        <translation>
Output per *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10397"/>
        <source>count
  ^
</source>
        <translation>contare ^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10399"/>
        <source>  |</source>
        <translation>  |</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10401"/>
        <source>  +</source>
        <translation>  +</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10401"/>
        <source>+--&gt; block height
</source>
        <translation>+--&amp;gt; altezza del blocco
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10402"/>
        <source>   ^</source>
        <translation>   ^</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10402"/>
        <source>^
</source>
        <translation>^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10403"/>
        <source>  </source>
        <translation>  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10450"/>
        <source>Warning: this will lose any information which can not be recovered from the blockchain.</source>
        <translation>Attenzione: questa operazione comporterà la perdita di tutte le informazioni che non potranno essere recuperate dalla blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10451"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Ciò include indirizzi di destinazione, chiavi segrete di trasmissione, note di trasmissione, ecc.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9786"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Firma valida -- totale: %s, speso: %s, non speso: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2187"/>
        <source>First line is not an amount</source>
        <translation>La prima riga non è un importo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2201"/>
        <source>Invalid output: </source>
        <translation>Output non valido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226"/>
        <source>Invalid output key, and file doesn&apos;t exist</source>
        <translation>Chiave di output non valida e il file non esiste</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2276"/>
        <source>Invalid output</source>
        <translation>Output non valido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2787"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>argomento non valido: deve essere 0/mai, 1/azione o 2/cifra/decifra</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3565"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation>Trasferire&lt;amount&gt; A&lt;address&gt; e bloccarlo per&lt;lockblocks&gt; (max. 1000000). Se il parametro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; è specificato, il portafoglio utilizza gli output ricevuti dagli indirizzi di quegli indici. Se omesso, il portafoglio sceglie casualmente gli indici degli indirizzi da utilizzare. In ogni caso, fa del suo meglio per non combinare gli output su più indirizzi.&lt;priority&gt; è la priorità della transazione. Maggiore è la priorità, maggiore è la commissione di transazione. I valori validi in ordine di priorità (dal più basso al più alto) sono: unimportant, normal, elevation, priority. Se omesso, viene utilizzato il valore predefinito (vedere il comando &amp;quot;set priority&amp;quot;).&lt;ring_size&gt; è il numero di input da includere per l&amp;#39;irrintracciabilità. È possibile effettuare più pagamenti contemporaneamente aggiungendo URI_2 o&lt;address_2&gt;&lt;amount_2&gt; eccetera (prima dell&amp;#39;ID del pagamento, se incluso)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6263"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Password richiesta (%s) - utilizzare il comando di aggiornamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8466"/>
        <source>Only SAL1 may be returned for txid </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8499"/>
        <source>The transaction uses incorrect number of inputs, which is not supposed to happen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8511"/>
        <source>amount overflow detected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8520"/>
        <source>Returning %s %s for a total fee of %s %s.  Is this okay?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8756"/>
        <source>Audit command is not available at this time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8899"/>
        <source>Height %d, txid %s, staked %s %s, earned %s %s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8907"/>
        <source>Height %d (matures %d), txid %s, staked %s %s, %s %s accrued so far</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8918"/>
        <source>
YIELD INFO:
	Supply coins burnt over last %s: %d
	Total coins locked: %d
	Yield accrued over last %s: %d
	Yield per coin staked: %d</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10611"/>
        <source>Daemon requests payment at diff %llu, with %f credits/hash%s. Run start_mining_for_rpc to start mining to pay for RPC access, or use another daemon</source>
        <translation>Il demone richiede il pagamento a diff %llu, con %f crediti/hash%s. Esegui start_mining_for_rpc per iniziare il mining per pagare l&amp;#39;accesso RPC, oppure usa un altro demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10638"/>
        <source>Error mining to daemon: </source>
        <translation>Errore durante l&amp;#39;estrazione sul demone: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10644"/>
        <source>Failed to start mining for RPC payment</source>
        <translation>Impossibile avviare il mining per il pagamento RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10656"/>
        <source>wallet</source>
        <translation>portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10658"/>
        <source> (no daemon)</source>
        <translation> (nessun demone)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10660"/>
        <source> (out of sync)</source>
        <translation> (fuori sincrono)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10712"/>
        <source>(Untitled account)</source>
        <translation>(Account senza titolo)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10725"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10744"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10770"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10794"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11029"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11040"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11063"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11091"/>
        <source>failed to parse index: </source>
        <translation>impossibile analizzare l&amp;#39;indice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10730"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11045"/>
        <source>specify an index between 0 and </source>
        <translation>specificare un indice compreso tra 0 e </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10856"/>
        <source>, unlocked balance: </source>
        <translation>, saldo sbloccato: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10866"/>
        <source>Untagged accounts:</source>
        <translation>Account non taggati:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10872"/>
        <source>Tag %s is unregistered.</source>
        <translation>Il tag %s non è registrato.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10875"/>
        <source>Accounts with tag: </source>
        <translation>Account con tag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10876"/>
        <source>Tag&apos;s description: </source>
        <translation>Descrizione del tag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Account</source>
        <translation>Account</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10892"/>
        <source> %c%8u %8s %21s %21s %6s %21s</source>
        <translation type="unfinished"> %c%8u %6s %21s %21s %21s %21s {8u?} {8s?} {21s?} {21s?} {6s?} {21s?} {21s or 6s?} {21s or 6s?} {21s or 6s?}</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10906"/>
        <source>------------------------------------------------------------------------------------------------------</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10908"/>
        <source>%18s  %21s %21s %6s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10933"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10939"/>
        <source>%8u %96s %21s %6s</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10936"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10942"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10948"/>
        <source>Primary address</source>
        <translation>Indirizzo principale</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10937"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10943"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10949"/>
        <source>(used)</source>
        <translation>(usato)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10945"/>
        <source>%8u CN     %96s %21s %6s
         Carrot %96s
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10964"/>
        <source>   INDEX TYPE   ADDRESS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10972"/>
        <source>   INDEX ADDRESS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10985"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11012"/>
        <source>(Untitled address)</source>
        <translation>(Indirizzo senza titolo)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11072"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt;è già fuori limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11077"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt;supera il limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11154"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Gli indirizzi integrati possono essere creati solo per l&amp;#39;account 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11146"/>
        <source>Matching integrated address: </source>
        <translation>Indirizzo integrato corrispondente: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173"/>
        <source>Subaddress: </source>
        <translation>Sottoindirizzo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173"/>
        <source>Standard address: </source>
        <translation>Indirizzo standard: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11178"/>
        <source>failed to parse payment ID or address</source>
        <translation>impossibile analizzare l&amp;#39;ID o l&amp;#39;indirizzo del pagamento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11217"/>
        <source>failed to parse index</source>
        <translation>impossibile analizzare l&amp;#39;indice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11225"/>
        <source>Address book is empty.</source>
        <translation>La rubrica è vuota.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11231"/>
        <source>Index: </source>
        <translation>Indice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11237"/>
        <source>Address: </source>
        <translation>Indirizzo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11238"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11374"/>
        <source>Description: </source>
        <translation>Descrizione: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11331"/>
        <source>no description found</source>
        <translation>nessuna descrizione trovata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11333"/>
        <source>description found: </source>
        <translation>descrizione trovata: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7019"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11373"/>
        <source>Filename: </source>
        <translation>Nome file: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11380"/>
        <source>Watch only</source>
        <translation>Guarda solo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11382"/>
        <source>%u/%u multisig%s</source>
        <translation>%u/%u multifirma%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9131"/>
        <source>%s change to %s</source>
        <translation>%s cambia in %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9515"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9588"/>
        <source>This transaction has %u confirmations</source>
        <translation>Questa transazione ha %u conferme</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61"/>
        <source>Filename to save the certificate</source>
        <translation>Nome file in cui salvare il certificato</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62"/>
        <source>Filename to save the private key</source>
        <translation>Nome file in cui salvare la chiave privata</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63"/>
        <source>Passphrase with which to encrypt the private key</source>
        <translation>Passphrase con cui crittografare la chiave privata</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64"/>
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>File contenente la passphrase con cui crittografare la chiave privata</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65"/>
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>Richiedi una passphrase con cui crittografare la chiave privata</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143"/>
        <source>Argument is needed: </source>
        <translation>È necessaria una discussione: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153"/>
        <source>Failed to read passphrase</source>
        <translation>Impossibile leggere la passphrase</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188"/>
        <source>Failed to create certificate</source>
        <translation>Impossibile creare il certificato</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206"/>
        <source>Failed to write certificate: </source>
        <translation>Impossibile scrivere il certificato: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226"/>
        <source>Failed to write private key: </source>
        <translation>Impossibile scrivere la chiave privata: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237"/>
        <source>Failed to save certificate file</source>
        <translation>Impossibile salvare il file del certificato</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243"/>
        <source>Failed to save private key file</source>
        <translation>Impossibile salvare il file della chiave privata</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Nome file di base (i suffissi -1, -2, ecc. verranno aggiunti se necessario)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>Fornisci la soglia e i partecipanti contemporaneamente come M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>Quanti partecipanti condivideranno parti del portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Quanti firmatari sono necessari per firmare una transazione valida?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>Create testnet multisig wallets</source>
        <translation>Crea portafogli multisig di testnet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create stagenet multisig wallets</source>
        <translation>Crea portafogli multisig stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create an address file for new wallets</source>
        <translation>Crea un file di indirizzi per i nuovi portafogli</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Generazione di portafogli multisig %u %u/%u</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="136"/>
        <source>Generated multisig wallets for address </source>
        <translation>Generati portafogli multisig per indirizzo </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="140"/>
        <source>Error creating multisig wallets: </source>
        <translation>Errore durante la creazione dei portafogli multisig: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="165"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Questo programma genera un set di portafogli multisig: utilizzare questo schema più semplice solo se tutti i partecipanti si fidano l&amp;#39;uno dell&amp;#39;altro</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="184"/>
        <source>Error: Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Errore: non è possibile specificare più di uno tra --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="191"/>
        <source>Error: expected N/M, but got: </source>
        <translation>Errore: previsto N/M, ma ottenuto: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="199"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="208"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Errore: è possibile specificare --scheme o entrambi --threshold e --participants</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="215"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Errore: previsto N &amp;gt; 1 e N &amp;lt;= M, ma ottenuto N==%u e M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="224"/>
        <source>Error: --filename-base is required</source>
        <translation>Errore: --filename-base è obbligatorio</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72"/>
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>Utilizzare l&amp;#39;istanza PyBitmessage all&amp;#39;URL&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73"/>
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>Specificare&lt;arg&gt; come nome utente:password per l&amp;#39;API PyBitmessage</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911"/>
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>La configurazione automatica non può procedere perché i dati di configurazione automatica degli altri firmatari non sono completi</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936"/>
        <source>The signer config is not complete.</source>
        <translation>La configurazione del firmatario non è completa.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988"/>
        <source>Wallet can&apos;t go multisig because key sets from other signers are missing or not complete.</source>
        <translation>Il portafoglio non può essere multisig perché i set di chiavi degli altri firmatari sono mancanti o non completi.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030"/>
        <source>Wallet can&apos;t start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>Il portafoglio non può avviare un altro round di scambio di chiavi perché i set di chiavi degli altri firmatari sono mancanti o non completi.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094"/>
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>Sincronizzazione non eseguita perché i dati di sincronizzazione multisig degli altri firmatari sono mancanti o non completi.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208"/>
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>Ci sono messaggi in attesa, ma nulla è pronto per essere elaborato in circostanze normali</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211"/>
        <source>
Use &quot;mms next sync&quot; if you want to force processing of the waiting sync data</source>
        <translation>
Utilizzare &amp;quot;mms next sync&amp;quot; se si desidera forzare l&amp;#39;elaborazione dei dati di sincronizzazione in attesa</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215"/>
        <source>
Use &quot;mms note&quot; to display the waiting notes</source>
        <translation>
Utilizzare &amp;quot;mms note&amp;quot; per visualizzare le note in attesa</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220"/>
        <source>There are no messages waiting to be processed.</source>
        <translation>Non ci sono messaggi in attesa di elaborazione.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441"/>
        <source>key set</source>
        <translation>set di chiavi</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443"/>
        <source>additional key set</source>
        <translation>set di chiavi aggiuntivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445"/>
        <source>multisig sync data</source>
        <translation>dati di sincronizzazione multisig</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447"/>
        <source>partially signed tx</source>
        <translation>tx parzialmente firmato</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449"/>
        <source>fully signed tx</source>
        <translation>tx completamente firmato</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451"/>
        <source>note</source>
        <translation>nota</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453"/>
        <source>signer config</source>
        <translation>configurazione del firmatario</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455"/>
        <source>auto-config data</source>
        <translation>dati di configurazione automatica</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457"/>
        <source>unknown message type</source>
        <translation>tipo di messaggio sconosciuto</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466"/>
        <source>in</source>
        <translation>In</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468"/>
        <source>out</source>
        <translation>fuori</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470"/>
        <source>unknown message direction</source>
        <translation>direzione del messaggio sconosciuta</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479"/>
        <source>ready to send</source>
        <translation>pronto per inviare</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481"/>
        <source>sent</source>
        <translation>inviato</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483"/>
        <source>waiting</source>
        <translation>in attesa</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485"/>
        <source>processed</source>
        <translation>elaborato</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487"/>
        <source>cancelled</source>
        <translation>annullato</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489"/>
        <source>unknown message state</source>
        <translation>stato del messaggio sconosciuto</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Genera un nuovo portafoglio e salvalo su&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Genera un nuovo portafoglio dal dispositivo e salvalo su&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>Genera un portafoglio solo in entrata dalla chiave di visualizzazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195"/>
        <source>Generate full view-only wallet from view key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="196"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>Genera un portafoglio deterministico dalla chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="197"/>
        <source>Generate wallet from private keys</source>
        <translation>Genera portafoglio da chiavi private</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="198"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Genera un portafoglio master dalle chiavi del portafoglio multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="200"/>
        <source>Language for mnemonic</source>
        <translation>Lingua per mnemonico</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="201"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Specificare il seed Electrum per il recupero/creazione del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="202"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Recupera il portafoglio utilizzando il seed mnemonico in stile Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="203"/>
        <source>alias for --restore-deterministic-wallet</source>
        <translation>alias per --restore-deterministic-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="204"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Recupera il portafoglio multisig utilizzando il seed mnemonico in stile Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="205"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Genera chiavi di visualizzazione e spesa non deterministiche</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="207"/>
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>Ripristina dall&amp;#39;altezza stimata della blockchain alla data specificata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="208"/>
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>La transazione appena creata non verrà inoltrata alla rete Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="372"/>
        <source>Enter a new password for the wallet</source>
        <translation>Inserisci una nuova password per il portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="372"/>
        <source>Wallet password</source>
        <translation>Password del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="377"/>
        <source>Enter a custom password for the background sync cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="377"/>
        <source>Background sync cache password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="455"/>
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>argomento non valido: deve essere 0/1, vero/falso, sì/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="546"/>
        <source>DNSSEC validation passed</source>
        <translation>Convalida DNSSEC superata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="550"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>ATTENZIONE: la convalida DNSSEC non è riuscita, questo indirizzo potrebbe non essere corretto!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="553"/>
        <source>For URL: </source>
        <translation>Per URL: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="555"/>
        <source> Salvium Address = </source>
        <translation> Indirizzo Salvium = </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="567"/>
        <source>you have cancelled the transfer request</source>
        <translation>hai annullato la richiesta di trasferimento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="588"/>
        <source>failed to parse index: </source>
        <translation>impossibile analizzare l&amp;#39;indice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="601"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>formato non valido per il lookahead del sottoindirizzo; deve essere&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="665"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>nessuna connessione al demone. Assicurati che il demone sia in esecuzione.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="674"/>
        <source>RPC error: </source>
        <translation>Errore RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678"/>
        <source>failed to get random outputs to mix: </source>
        <translation>non è riuscito a ottenere output casuali da mixare: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="685"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="693"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Non ci sono abbastanza soldi nel saldo sbloccato</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="703"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>Non è stato possibile trovare un modo per creare transazioni. Questo è solitamente dovuto alla polvere che è così piccola che non può ripagarsi in commissioni, o al tentativo di inviare più denaro del saldo sbloccato, o al non lasciare abbastanza per le commissioni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="709"/>
        <source>not enough outputs for specified ring size</source>
        <translation>non ci sono abbastanza uscite per la dimensione dell&amp;#39;anello specificata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="712"/>
        <source>output amount</source>
        <translation>importo in uscita</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="712"/>
        <source>found outputs to use</source>
        <translation>trovati output da utilizzare</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714"/>
        <source>Please use sweep_unmixable.</source>
        <translation>Si prega di utilizzare sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="718"/>
        <source>transaction was not constructed</source>
        <translation>la transazione non è stata realizzata</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726"/>
        <source>Reason: </source>
        <translation>Motivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="745"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>non è riuscito a trovare un modo adatto per dividere le transazioni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="751"/>
        <source>unknown transfer error: </source>
        <translation>errore di trasferimento sconosciuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="756"/>
        <source>Multisig error: </source>
        <translation>Errore multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="762"/>
        <source>internal error: </source>
        <translation>errore interno: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="767"/>
        <source>unexpected error: </source>
        <translation>errore imprevisto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="771"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Si è verificato un errore, che potrebbe significare che il nodo sta tentando di farti riprovare a creare una transazione e di concentrarsi sugli output di tua proprietà. Oppure potrebbe trattarsi di un errore in buona fede. Potrebbe essere prudente disconnettersi da questo nodo e non provare a inviare una transazione immediatamente. In alternativa, connettiti a un altro nodo in modo che il nodo originale non possa correlare le informazioni.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="783"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>Il file %s probabilmente memorizza le chiavi private del portafoglio! Usa un nome file diverso.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9804"/>
        <source> seconds</source>
        <translation> secondi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9806"/>
        <source> minutes</source>
        <translation> minuti</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9808"/>
        <source> hours</source>
        <translation> ore</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9810"/>
        <source> days</source>
        <translation> giorni</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9812"/>
        <source> months</source>
        <translation> mesi</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9813"/>
        <source>a long time</source>
        <translation>un lungo periodo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12018"/>
        <source>Unknown command: </source>
        <translation>Comando sconosciuto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="206"/>
        <source>Restore from specific blockchain height</source>
        <translation>Ripristina da un&amp;#39;altezza specifica della blockchain</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="209"/>
        <source>Create an address file for new wallets</source>
        <translation>Crea un file di indirizzi per i nuovi portafogli</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="211"/>
        <source>Display English language names</source>
        <translation>Visualizza i nomi in lingua inglese</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365"/>
        <source>failed to read password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="387"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>il demone è occupato. Riprova più tardi.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="396"/>
        <source>possibly lost connection to daemon</source>
        <translation>probabilmente è stata persa la connessione al demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413"/>
        <source>Error: </source>
        <translation>Errore: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="557"/>
        <source>Is this OK?</source>
        <translation>Va bene?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="723"/>
        <source>transaction %s was rejected by daemon</source>
        <translation>la transazione %s è stata rifiutata dal demone</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="735"/>
        <source>destination amount is zero</source>
        <translation>l&amp;#39;importo di destinazione è zero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="740"/>
        <source>transaction has no destination</source>
        <translation>la transazione non ha destinazione</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="786"/>
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>Il file %s esiste già. Vuoi sovrascriverlo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11993"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>Questo è il portafoglio Salvium della riga di comando. Deve connettersi a un demone Salvium per funzionare correttamente. ATTENZIONE: non riutilizzare le tue chiavi Salvium su un altro fork, A MENO CHE questo fork non abbia delle mitigazioni integrate per il riutilizzo delle chiavi. Ciò danneggerebbe la tua privacy.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12012"/>
        <source>Failed to initialize wallet</source>
        <translation>Impossibile inizializzare il portafoglio</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Utilizzare l&amp;#39;istanza del demone in&lt;host&gt; :&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Utilizzare l&amp;#39;istanza del demone sull&amp;#39;host&lt;arg&gt; invece di localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Utilizzare l&amp;#39;istanza del demone sulla porta&lt;arg&gt; invece di 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="267"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Per testnet. Il demone deve essere avviato anche con il flag --testnet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="287"/>
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>File contenente entropia extra per inizializzare il PRNG (qualsiasi dato, l&amp;#39;obiettivo è di avere 256 bit di entropia utili, il che in genere significa più di 256 bit di dati)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="288"/>
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>Consenti la comunicazione con un demone che utilizza una versione diversa</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="382"/>
        <source>can&apos;t specify daemon host or port more than once</source>
        <translation>non è possibile specificare l&amp;#39;host o la porta del demone più di una volta</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="518"/>
        <source>can&apos;t specify more than one of --password and --password-file</source>
        <translation>non è possibile specificare più di uno tra --password e --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532"/>
        <source>the password file specified could not be read</source>
        <translation>il file password specificato non può essere letto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="558"/>
        <source>Failed to load file </source>
        <translation>Impossibile caricare il file </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Password del portafoglio (esc/virgolette se necessario)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253"/>
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt; :]&lt;port&gt; proxy SOCKS da utilizzare per le connessioni daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Abilita i comandi che si basano su un demone attendibile</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Disabilita i comandi che si basano su un demone attendibile</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Specificare username[:password] per il client RPC demone</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260"/>
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>Abilita SSL sulle connessioni RPC del demone: abilitato|disabilitato|rilevamento automatico</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="264"/>
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>Elenco delle impronte digitali valide dei server RPC consentiti</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="265"/>
        <source>Allow any SSL certificate from the daemon</source>
        <translation>Consenti qualsiasi certificato SSL dal demone</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="266"/>
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>Consenti all&amp;#39;utente (tramite --daemon-ssl-ca-certificates) di concatenare i certificati</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="268"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Per stagenet. Il demone deve essere lanciato anche con il flag --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="270"/>
        <source>Set shared ring database path</source>
        <translation>Imposta il percorso del database ad anello condiviso</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281"/>
        <source>Number of rounds for the key derivation function</source>
        <translation>Numero di round per la funzione di derivazione della chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="282"/>
        <source>HW device to use</source>
        <translation>Dispositivo HW da utilizzare</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="283"/>
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>Percorso di derivazione del portafoglio del dispositivo HW (ad esempio, SLIP-10)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="285"/>
        <source>Do not use DNS</source>
        <translation>Non utilizzare DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="286"/>
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>Non connettersi a un demone, né utilizzare DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="374"/>
        <source>Invalid argument for </source>
        <translation>Argomento non valido per </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="435"/>
        <source>Enabling --</source>
        <translation>Abilitazione --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="435"/>
        <source> requires --</source>
        <translation> richiede --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="436"/>
        <location filename="../src/wallet/wallet2.cpp" line="437"/>
        <source> or --</source>
        <translation> O --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="437"/>
        <source> or use of a .onion/.i2p domain</source>
        <translation> o utilizzo di un dominio .onion/.i2p</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="455"/>
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon e --untrusted-daemon sono entrambi visibili, presupponendo che non siano attendibili</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="465"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Il demone è locale, presupponendo attendibilità</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="475"/>
        <source>failed to initialize the wallet</source>
        <translation>Impossibile inizializzare il portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="539"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>nessuna password specificata; utilizzare --prompt-for-password per richiedere una password</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="541"/>
        <source>Enter a new password for the wallet</source>
        <translation>Inserisci una nuova password per il portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="541"/>
        <source>Wallet password</source>
        <translation>Password del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564"/>
        <source>Failed to parse JSON</source>
        <translation>Impossibile analizzare JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="571"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Versione %u troppo nuova, possiamo solo capire fino a %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587"/>
        <source>failed to parse view key secret key</source>
        <translation>impossibile analizzare la chiave di visualizzazione della chiave segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="592"/>
        <source>view secret key may not be all zeroes</source>
        <translation>la chiave segreta di visualizzazione potrebbe non essere composta da tutti zeri</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="594"/>
        <location filename="../src/wallet/wallet2.cpp" line="664"/>
        <location filename="../src/wallet/wallet2.cpp" line="709"/>
        <source>failed to verify view key secret key</source>
        <translation>Impossibile verificare la chiave di visualizzazione della chiave segreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605"/>
        <source>failed to parse spend key secret key</source>
        <translation>impossibile analizzare la chiave segreta della chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="610"/>
        <source>spend secret key may not be all zeroes</source>
        <translation>la chiave segreta di spesa potrebbe non essere composta da tutti zeri</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="612"/>
        <location filename="../src/wallet/wallet2.cpp" line="674"/>
        <location filename="../src/wallet/wallet2.cpp" line="735"/>
        <source>failed to verify spend key secret key</source>
        <translation>Impossibile verificare la chiave segreta della chiave di spesa</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="624"/>
        <source>Electrum-style word list failed verification</source>
        <translation>La verifica dell&amp;#39;elenco di parole in stile Electrum non è riuscita</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="644"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Deve essere specificato almeno uno tra un elenco di parole in stile Electrum, una chiave di visualizzazione privata o una chiave di spesa privata</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="648"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Sia l&amp;#39;elenco di parole in stile Electrum che le chiavi private sono specificate</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="658"/>
        <source>invalid address</source>
        <translation>indirizzo non valido</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="667"/>
        <source>view key does not match standard address</source>
        <translation>la chiave di visualizzazione non corrisponde all&amp;#39;indirizzo standard</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="677"/>
        <source>spend key does not match standard address</source>
        <translation>la chiave di spesa non corrisponde all&amp;#39;indirizzo standard</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="685"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Impossibile generare portafogli deprecati da JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="721"/>
        <source>failed to parse address: </source>
        <translation>impossibile analizzare l&amp;#39;indirizzo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="727"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>Per creare un portafoglio solo per l&amp;#39;orologio è necessario specificare l&amp;#39;indirizzo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="744"/>
        <source>failed to generate new wallet: </source>
        <translation>Impossibile generare un nuovo portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2449"/>
        <source>No password provided. Password is needed to compute key image for incoming enotes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2451"/>
        <source>Invalid password. Password is needed to compute key image for incoming enotes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3485"/>
        <source>reorg exceeds maximum allowed depth, use &apos;set max-reorg-depth N&apos; to allow it, reorg depth: </source>
        <translation>reorg supera la profondità massima consentita, utilizzare &amp;#39;set max-reorg-depth N&amp;#39; per consentirlo, profondità di reorg: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5614"/>
        <location filename="../src/wallet/wallet2.cpp" line="6195"/>
        <location filename="../src/wallet/wallet2.cpp" line="6654"/>
        <source>Primary account</source>
        <translation>Account principale</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9362"/>
        <source>Transaction sanity check failed</source>
        <translation>Controllo di integrità della transazione non riuscito</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11782"/>
        <source>Incorrect number of transfers_indices on return_payment</source>
        <translation>Numero errato di transfers_indices su return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11784"/>
        <location filename="../src/wallet/wallet2.cpp" line="11797"/>
        <source>cannot locate return_payment origin index in m_transfers</source>
        <translation>non è possibile individuare l&amp;#39;indice di origine del return_payment in m_transfers</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11799"/>
        <source>TX hashes do not match for inputs to return_payment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11800"/>
        <source>TX asset_type values do not match for inputs to return_payment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11925"/>
        <source>at create_transactions_return(): incorrect number of additional TX pubkeys in origin TX for return_payment</source>
        <translation>in create_transactions_return(): numero errato di chiavi pubbliche TX aggiuntive nella TX di origine per return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11933"/>
        <source>at create_transactions_return(): failed to generate_key_derivation</source>
        <translation>in create_transactions_return(): impossibile generare_derivazione_chiave</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11960"/>
        <location filename="../src/wallet/wallet2.cpp" line="11976"/>
        <source>Attempting to return change to ourself</source>
        <translation>Tentando di restituire il resto a noi stessi</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11965"/>
        <location filename="../src/wallet/wallet2.cpp" line="11981"/>
        <source>Failed to identify change output</source>
        <translation>Impossibile identificare l&amp;#39;output della modifica</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12168"/>
        <source>Transaction cannot pay for itself</source>
        <translation>La transazione non può ripagarsi da sola</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12264"/>
        <source>Created transaction(s) failed sanity check</source>
        <translation>Le transazioni create non hanno superato il controllo di integrità</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13226"/>
        <source>No funds received in this tx.</source>
        <translation>Nessun fondo ricevuto in questa transazione.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="14118"/>
        <source>failed to read file </source>
        <translation>impossibile leggere il file </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="210"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Imposta le dimensioni del lookahead del sottoindirizzo su&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261"/>
        <source>Path to a PEM format private key</source>
        <translation>Percorso verso una chiave privata in formato PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="262"/>
        <source>Path to a PEM format certificate</source>
        <translation>Percorso verso un certificato in formato PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Percorso al file contenente i certificati in formato PEM concatenati per sostituire le CA di sistema.</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="271"/>
        <source>Failed to create directory </source>
        <translation>Impossibile creare la directory </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="273"/>
        <source>Failed to create directory %s: %s</source>
        <translation>Impossibile creare la directory %s: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="284"/>
        <source>Cannot specify --</source>
        <translation>Non è possibile specificare --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="284"/>
        <source> and --</source>
        <translation> E --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="303"/>
        <source>Failed to create file </source>
        <translation>Impossibile creare il file </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="303"/>
        <source>. Check permissions or remove file</source>
        <translation>. Controllare i permessi o rimuovere il file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="313"/>
        <source>Error writing to file </source>
        <translation>Errore durante la scrittura nel file </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="316"/>
        <source>RPC username/password is stored in file </source>
        <translation>Il nome utente/password RPC è memorizzato nel file </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="757"/>
        <source>Tag %s is unregistered.</source>
        <translation>Il tag %s non è registrato.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="785"/>
        <source>No matches for regex filter %s .</source>
        <translation>Nessuna corrispondenza per il filtro regex %s.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3870"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Transazione non possibile. Disponibile solo %s, importo transazione %s = %s + %s (commissione)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4959"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Non è possibile specificare più di uno tra --testnet e --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4978"/>
        <source>Can&apos;t specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Non è possibile specificare più di uno tra --wallet-file e --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4984"/>
        <source>--password-file is not allowed in combination with --wallet-dir</source>
        <translation>--password-file non è consentito in combinazione con --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4996"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>È necessario specificare --wallet-file o --generate-from-json o --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5000"/>
        <source>Loading wallet...</source>
        <translation>Caricamento portafoglio...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5048"/>
        <source>Initial refresh failed: </source>
        <translation>Aggiornamento iniziale non riuscito: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5053"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5085"/>
        <source>Saving wallet...</source>
        <translation>Salvataggio del portafoglio...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5055"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5087"/>
        <source>Successfully saved</source>
        <translation>Salvato con successo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5058"/>
        <source>Successfully loaded</source>
        <translation>Caricato con successo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5062"/>
        <source>Wallet initialization failed: </source>
        <translation>Inizializzazione del portafoglio non riuscita: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5068"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>Impossibile inizializzare il server RPC del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5072"/>
        <source>Starting wallet RPC server</source>
        <translation>Avvio del server RPC del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5079"/>
        <source>Failed to run wallet: </source>
        <translation>Impossibile eseguire il portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5082"/>
        <source>Stopped wallet RPC server</source>
        <translation>Arrestato il server RPC del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5091"/>
        <source>Failed to save wallet: </source>
        <translation>Impossibile salvare il portafoglio: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5169"/>
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Questo è il portafoglio RPC Salvium. Deve connettersi a un demone Salvium per funzionare correttamente.</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="151"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11958"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5144"/>
        <source>Wallet options</source>
        <translation>Opzioni del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>Genera portafoglio dal file in formato JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Usa il portafoglio&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81"/>
        <source>Set RPC client secret key for RPC payments</source>
        <translation>Imposta la chiave segreta del client RPC per i pagamenti RPC</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85"/>
        <source>Wallet password file</source>
        <translation>File della password del portafoglio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>Numero massimo di thread da utilizzare per un lavoro parallelo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114"/>
        <source>Specify log file</source>
        <translation>Specificare il file di registro</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115"/>
        <source>Config file</source>
        <translation>File di configurazione</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127"/>
        <source>General options</source>
        <translation>Opzioni generali</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Questo è il portafoglio Salvium della riga di comando. Deve connettersi a un demone Salvium per funzionare correttamente.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176"/>
        <source>Can&apos;t find config file </source>
        <translation>Impossibile trovare il file di configurazione </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220"/>
        <source>Logging to: </source>
        <translation>Accesso a: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222"/>
        <source>Logging to %s</source>
        <translation>Accesso a %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226"/>
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>ATTENZIONE: il limite di memoria bloccabile potrebbe non essere sufficientemente alto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228"/>
        <source>see ulimit -l</source>
        <translation>vedere ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153"/>
        <source>Usage:</source>
        <translation>Utilizzo:</translation>
    </message>
</context>
</TS>
