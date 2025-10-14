<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="nl">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>Ongeldig bestemmingsadres</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60"/>
        <source>Payment ID supplied: this is obsolete</source>
        <translation>Betalings-ID verstrekt: dit is verouderd</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Proberen transactie op te slaan in bestand, maar opgegeven bestand(en) bestaan. Afsluiten om overschrijven te voorkomen. Bestand:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Het is niet gelukt om transactie(s) naar bestand te schrijven</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon is bezig. Probeer het later opnieuw.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>geen verbinding met daemon. Zorg ervoor dat daemon draait.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>transactie %s is afgewezen door daemon met status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151"/>
        <source>. Reason: </source>
        <translation>. Reden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153"/>
        <source>Unknown exception: </source>
        <translation>Onbekende uitzondering: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156"/>
        <source>Unhandled exception</source>
        <translation>Niet-afgehandelde uitzondering</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="241"/>
        <source>Couldn&apos;t multisig sign data: </source>
        <translation>Kan gegevens niet multisigneren: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="263"/>
        <source>Couldn&apos;t sign multisig transaction: </source>
        <translation>Multisig-transactie kon niet worden ondertekend: </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>Dit is een portemonnee voor alleen horloges</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>Transactie kon niet worden ondertekend</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Geclaimd wisselgeld gaat niet naar een betaald adres</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Geclaimde wisselgeld is groter dan betaling aan het wisselgeldadres</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184"/>
        <source>Change goes to more than one address</source>
        <translation>Wijziging gaat naar meer dan één adres</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>sending %s to %s</source>
        <translation>%s naar %s sturen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>with no destinations</source>
        <translation>zonder bestemmingen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209"/>
        <source>%s change to %s</source>
        <translation>%s veranderen naar %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212"/>
        <source>no change</source>
        <translation>geen verandering</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>Geladen %lu transacties, voor %s, vergoeding %s, %s, %s, met min. ringmaat %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="596"/>
        <source>failed to parse address</source>
        <translation>kon adres niet parseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="607"/>
        <source>failed to parse secret spend key</source>
        <translation>kon geheime uitgavesleutel niet parseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="622"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Noch kijksleutel noch bestedingssleutel geleverd, geannuleerd</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="630"/>
        <source>failed to parse secret view key</source>
        <translation>kon geheime weergavesleutel niet parseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="639"/>
        <source>failed to verify secret spend key</source>
        <translation>kon geheime uitgavesleutel niet verifiëren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="643"/>
        <source>spend key does not match address</source>
        <translation>spend key komt niet overeen met adres</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="649"/>
        <source>failed to verify secret view key</source>
        <translation>kon geheime weergavesleutel niet verifiëren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="653"/>
        <source>view key does not match address</source>
        <translation>weergavesleutel komt niet overeen met adres</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="676"/>
        <location filename="../src/wallet/api/wallet.cpp" line="693"/>
        <source>failed to generate new wallet: </source>
        <translation>kon geen nieuwe portemonnee genereren: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="741"/>
        <source>Electrum seed is empty</source>
        <translation>Electrum zaad is leeg</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="750"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Woordenlijst in Electrum-stijl is niet geverifieerd</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118"/>
        <source>Failed to load unsigned transactions</source>
        <translation>Het laden van niet-ondertekende transacties is mislukt</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1143"/>
        <source>Failed to load transaction from file</source>
        <translation>Transactie uit bestand laden mislukt</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1159"/>
        <source>Wallet is view only</source>
        <translation>Portemonnee is alleen zichtbaar</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169"/>
        <source>failed to save file </source>
        <translation>bestand kon niet worden opgeslagen </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1187"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Sleutelafbeeldingen kunnen alleen worden geïmporteerd met een vertrouwde daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1200"/>
        <source>Failed to import key images: </source>
        <translation>Het importeren van sleutelafbeeldingen is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1213"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1245"/>
        <source>Not supported on HW wallets.</source>
        <translation>Niet ondersteund op HW-wallets.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1224"/>
        <source>Failed to save file: </source>
        <translation>Het bestand kon niet worden opgeslagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231"/>
        <source>Error exporting outputs: </source>
        <translation>Fout bij het exporteren van uitvoer: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1254"/>
        <source>Failed to read file: </source>
        <translation>Het bestand kon niet worden gelezen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1266"/>
        <source>Failed to import outputs: </source>
        <translation>Importeren van uitvoer is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1279"/>
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>Transacties scannen mislukt: geen transactie-ID&amp;#39;s opgegeven.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1290"/>
        <source>Invalid txid specified: </source>
        <translation>Ongeldige txid opgegeven: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1308"/>
        <source>Failed to scan transaction: </source>
        <translation>Transactie scannen mislukt: </translation>
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
        <translation>Het is niet gelukt om het subadreslabel op te halen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1437"/>
        <source>Failed to set subaddress label: </source>
        <translation>Het is niet gelukt om het subadreslabel in te stellen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1462"/>
        <source>Failed to get multisig info: </source>
        <translation>Het is niet gelukt om multisig-info op te halen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1482"/>
        <source>Failed to make multisig: </source>
        <translation>Multisig maken is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1496"/>
        <source>Failed to exchange multisig keys: </source>
        <translation>Uitwisselen van multisig-sleutels is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1512"/>
        <source>Failed to export multisig images: </source>
        <translation>Het exporteren van multisig-afbeeldingen is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1530"/>
        <source>Failed to parse imported multisig images</source>
        <translation>Het parseren van geïmporteerde multisig-afbeeldingen is mislukt</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1540"/>
        <source>Failed to import multisig images: </source>
        <translation>Het importeren van multisig-afbeeldingen is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1554"/>
        <source>Failed to check for partial multisig key images: </source>
        <translation>Controleren op gedeeltelijke multisig-sleutelafbeeldingen is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1582"/>
        <source>Failed to restore multisig transaction: </source>
        <translation>Multisig-transactie kan niet worden hersteld: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1664"/>
        <source>Sending all requires one destination address</source>
        <translation>Voor het verzenden van alles is één bestemmingsadres nodig</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1668"/>
        <source>Destinations and amounts are unequal</source>
        <translation>Bestemmingen en bedragen zijn ongelijk</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1676"/>
        <source>payment id has invalid format, expected 64 character hex string: </source>
        <translation>betalings-id heeft ongeldige indeling, verwacht 64 hexadecimale tekens: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>Invalid destination address</source>
        <translation>Ongeldig bestemmingsadres</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1690"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>één enkele transactie kan niet meer dan één betalings-ID gebruiken</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1718"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>kon de betalings-id niet instellen, hoewel deze correct werd gedecodeerd</translation>
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
        <translation>daemon is bezig. Probeer het later opnieuw.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1777"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1871"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>geen verbinding met daemon. Zorg ervoor dat daemon draait.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1779"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1873"/>
        <source>RPC error: </source>
        <translation>RPC-fout: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1781"/>
        <source>failed to get outputs to mix: %s</source>
        <translation>kon de uitvoer niet mixen: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1785"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1880"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>niet genoeg geld om over te maken, alleen beschikbaar %s, verzonden bedrag %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1792"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1888"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>niet genoeg geld om over te maken, totaal saldo slechts %s, verzonden bedrag %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1799"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1896"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>niet genoeg geld om over te maken, alleen beschikbaar %s, transactiebedrag %s = %s + %s (kosten)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1807"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1904"/>
        <source>not enough outputs for specified ring size</source>
        <translation>niet genoeg uitgangen voor de opgegeven ringmaat</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1809"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1906"/>
        <source>output amount</source>
        <translation>uitvoerbedrag</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1809"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1906"/>
        <source>found outputs to use</source>
        <translation>gevonden uitvoer om te gebruiken</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1811"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>Verwijder niet-mengbare outputs.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1814"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1910"/>
        <source>transaction was not constructed</source>
        <translation>transactie is niet geconstrueerd</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1817"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1913"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>transactie %s is afgewezen door daemon met status: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1822"/>
        <source>destination amount is zero</source>
        <translation>bestemmingsbedrag is nul</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1824"/>
        <source>transaction has no destination</source>
        <translation>transactie heeft geen bestemming</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1826"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1920"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>kon geen geschikte manier vinden om transacties te splitsen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1828"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1922"/>
        <source>unknown transfer error: </source>
        <translation>onbekende overdrachtsfout: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1830"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1924"/>
        <source>internal error: </source>
        <translation>interne fout: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1832"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1926"/>
        <source>unexpected error: </source>
        <translation>onverwachte fout: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1834"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1928"/>
        <source>unknown error</source>
        <translation>onbekende fout</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1875"/>
        <source>failed to get outputs to mix</source>
        <translation>kon de outputs niet mixen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1918"/>
        <source>one of destinations is zero</source>
        <translation>een van de bestemmingen is nul</translation>
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
        <translation>Het parseren van txid is mislukt</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2069"/>
        <source>no tx keys found for this txid</source>
        <translation>geen tx-sleutels gevonden voor deze txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2093"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2102"/>
        <source>Failed to parse tx key</source>
        <translation>Het parseren van de tx-sleutel is mislukt</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2111"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2143"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2171"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2258"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2292"/>
        <source>Failed to parse address</source>
        <translation>Het is niet gelukt om het adres te parseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2263"/>
        <source>Address must not be a subaddress</source>
        <translation>Adres mag geen subadres zijn</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2297"/>
        <source>Address doesn&apos;t belong to the wallet</source>
        <translation>Adres hoort niet bij de portemonnee</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2321"/>
        <source>The wallet must be in multisig ready state</source>
        <translation>De portemonnee moet in de multisig-ready-status staan</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2343"/>
        <source>Given string is not a key</source>
        <translation>Gegeven string is geen sleutel</translation>
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
        <translation>Rescan spend kan alleen worden gebruikt met een vertrouwde daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2692"/>
        <source>Invalid output: </source>
        <translation>Ongeldige uitvoer: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2699"/>
        <source>Failed to mark outputs as spent</source>
        <translation>Het is niet gelukt om de outputs als uitgegeven te markeren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2710"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2732"/>
        <source>Failed to parse output amount</source>
        <translation>Het is niet gelukt om het uitvoerbedrag te parseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2715"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2737"/>
        <source>Failed to parse output offset</source>
        <translation>Het parseren van de uitvoeroffset is mislukt</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2721"/>
        <source>Failed to mark output as spent</source>
        <translation>Het is niet gelukt om de output als uitgegeven te markeren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2743"/>
        <source>Failed to mark output as unspent</source>
        <translation>Het is niet gelukt om de output als niet-besteed te markeren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2754"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2793"/>
        <source>Failed to parse key image</source>
        <translation>Het is niet gelukt om de sleutelafbeelding te parseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2760"/>
        <source>Failed to get ring</source>
        <translation>Ring kon niet worden ontvangen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2778"/>
        <source>Failed to get rings</source>
        <translation>Ringen niet ontvangen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2799"/>
        <source>Failed to set ring</source>
        <translation>Het is niet gelukt om de ring in te stellen</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="351"/>
        <source>Failed to parse address</source>
        <translation>Het is niet gelukt om het adres te parseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="358"/>
        <source>Failed to parse key</source>
        <translation>Het is niet gelukt om de sleutel te parseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="366"/>
        <source>failed to verify key</source>
        <translation>sleutel kon niet worden geverifieerd</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="376"/>
        <source>key does not match address</source>
        <translation>sleutel komt niet overeen met adres</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54"/>
        <source>yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68"/>
        <source>no</source>
        <translation>Nee</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92"/>
        <source>Specify IP to bind RPC server</source>
        <translation>Geef IP op om RPC-server te binden</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93"/>
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>Geef een IPv6-adres op om de RPC-server te binden</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94"/>
        <source>Specify IP to bind restricted RPC server</source>
        <translation>Geef een IP op om een beperkte RPC-server te binden</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95"/>
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>Geef een IPv6-adres op om een beperkte RPC-server te binden</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96"/>
        <source>Allow IPv6 for RPC</source>
        <translation>IPv6 toestaan voor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97"/>
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>Negeer mislukte IPv4-binding voor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>Geef gebruikersnaam[:wachtwoord] op die vereist is voor de RPC-server</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Bevestig dat de rpc-bind-ip-waarde GEEN loopback (lokaal) IP is</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Geef een door komma&amp;#39;s gescheiden lijst met bronnen op om het delen van bronnen tussen bronnen mogelijk te maken</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>SSL inschakelen op RPC-verbindingen: ingeschakeld|uitgeschakeld|automatisch detecteren</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102"/>
        <source>Path to a PEM format private key</source>
        <translation>Pad naar een PEM-formaat privésleutel</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103"/>
        <source>Path to a PEM format certificate</source>
        <translation>Pad naar een certificaat in PEM-formaat</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Pad naar bestand met aaneengeschakelde PEM-formaatcertificaten ter vervanging van systeem-CA&amp;#39;s.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105"/>
        <source>List of certificate fingerprints to allow</source>
        <translation>Lijst met certificaatvingerafdrukken om toe te staan</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106"/>
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>Sta gebruikers toe (via --rpc-ssl-certificates) certificaten te ketenen</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107"/>
        <source>Allow any peer certificate</source>
        <translation>Sta elk peer-certificaat toe</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108"/>
        <source>Do not ban hosts on RPC errors</source>
        <translation>Verbied hosts niet op basis van RPC-fouten</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155"/>
        <location filename="../src/rpc/rpc_args.cpp" line="183"/>
        <location filename="../src/rpc/rpc_args.cpp" line="204"/>
        <location filename="../src/rpc/rpc_args.cpp" line="221"/>
        <source>Invalid IP address given for --</source>
        <translation>Ongeldig IP-adres opgegeven voor --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163"/>
        <location filename="../src/rpc/rpc_args.cpp" line="191"/>
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> staat inkomende ongecodeerde externe verbindingen toe. Overweeg in plaats daarvan een SSH-tunnel of SSL-proxy. Overschrijf met --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source>Username specified with --</source>
        <translation>Gebruikersnaam opgegeven met --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source> cannot be empty</source>
        <translation> kan niet leeg zijn</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5202"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Daemon gebruikt een andere RPC-hoofdversie (%u) dan de wallet (%u): %s. Werk er een bij of gebruik --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7452"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8016"/>
        <source>Spending from address index %d
</source>
        <translation>Uitgaven van adresindex %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7469"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Uw transactie moet worden gesplitst in %llu transacties. Dit resulteert in een transactiekost die wordt toegepast op elke transactie, voor een totale kost van %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7475"/>
        <source>The transaction fee is %s</source>
        <translation>De transactiekosten bedragen %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478"/>
        <source>, of which %s is dust from change</source>
        <translation>, waarvan %s stof is van verandering</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7479"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>In totaal worden %s van de stofverandering naar het stofadres verzonden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7768"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Niet genoeg geld in ontgrendeld saldo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7813"/>
        <source>No address given</source>
        <translation>Geen adres opgegeven</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7879"/>
        <source>missing lockedblocks parameter</source>
        <translation>ontbrekende lockedblocks-parameter</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7889"/>
        <source>bad locked_blocks parameter</source>
        <translation>slechte locked_blocks-parameter</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8188"/>
        <source>failed to parse Payment ID</source>
        <translation>kon betalings-ID niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2320"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2368"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8211"/>
        <source>failed to parse key image</source>
        <translation>kon sleutelafbeelding niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8489"/>
        <source>No outputs found</source>
        <translation>Geen resultaten gevonden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8254"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8494"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Er worden meerdere transacties aangemaakt, wat eigenlijk niet de bedoeling is</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8259"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>De transactie gebruikt meerdere of geen invoergegevens, wat niet de bedoeling is</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8309"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8336"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8591"/>
        <source>Money successfully sent, transaction: </source>
        <translation>Geld succesvol verzonden, transactie: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8387"/>
        <source>missing threshold amount</source>
        <translation>ontbrekend drempelbedrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8393"/>
        <source>invalid amount threshold</source>
        <translation>ongeldige bedragdrempel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9076"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Geclaimd wisselgeld gaat niet naar een betaald adres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9081"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Geclaimde wisselgeld is groter dan betaling aan het wisseladres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9090"/>
        <source>Change goes to more than one address</source>
        <translation>Wijziging gaat naar meer dan één adres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9112"/>
        <source>sending %s to %s</source>
        <translation>%s naar %s sturen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9122"/>
        <source> dummy output(s)</source>
        <translation> dummy-uitvoer(en)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9125"/>
        <source>with no destinations</source>
        <translation>zonder bestemmingen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9134"/>
        <source>no change</source>
        <translation>geen verandering</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6052"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Daemon is lokaal, ervan uitgaande dat het vertrouwd is</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703"/>
        <source>Password for new watch-only wallet</source>
        <translation>Wachtwoord voor nieuwe horloge-alleen-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="435"/>
        <source>false</source>
        <translation>vals</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="832"/>
        <source>Commands: </source>
        <translation>Opdrachten: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="846"/>
        <source>Unknown command: </source>
        <translation>Onbekende opdracht: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="853"/>
        <source>Command usage: </source>
        <translation>Gebruik van commando&amp;#39;s: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856"/>
        <source>Command description: </source>
        <translation>Beschrijving van de opdracht: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="917"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>portemonnee is alleen voor horloges en heeft geen uitgavesleutel</translation>
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
        <translation>opdracht niet ondersteund door HW-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="949"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>portemonnee is alleen voor horloges en heeft geen zaad</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="959"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>portemonnee is multisig maar nog niet afgerond</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1038"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>portemonnee is niet-deterministisch en heeft geen zaad</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="992"/>
        <source>Failed to retrieve seed</source>
        <translation>Het ophalen van zaad is mislukt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1022"/>
        <source>wallet is multisig and has no seed</source>
        <translation>portemonnee is multisig en heeft geen seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1048"/>
        <source>Incorrect password</source>
        <translation>Onjuist wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1070"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330"/>
        <source>Your original password was incorrect.</source>
        <translation>Uw oorspronkelijke wachtwoord was onjuist.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085"/>
        <source>Error with wallet rewrite: </source>
        <translation>Fout bij het herschrijven van de portemonnee: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11145"/>
        <source>Random payment ID: </source>
        <translation>Willekeurige betalings-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1106"/>
        <source>Current fee is %s %s per %s</source>
        <translation>Huidige vergoeding is %s %s per %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="518"/>
        <source>failed to parse background sync type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="660"/>
        <source>Payment required, see the &apos;rpc_payment_info&apos; command</source>
        <translation>Betaling vereist, zie de opdracht &amp;#39;rpc_payment_info&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1122"/>
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Fout: het is niet gelukt om de grootte van de backlog-array te schatten: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1127"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>Fout: onjuiste geschatte backlog-arraygrootte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1139"/>
        <source> (current)</source>
        <translation> (huidig)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1142"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u blok (%u minuten) achterstand op prioriteit %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1144"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u tot %u blok (%u tot %u minuten) achterstand op prioriteit %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1147"/>
        <source>No backlog at priority </source>
        <translation>Geen achterstand bij prioriteit </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1169"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1217"/>
        <source>This wallet is already multisig</source>
        <translation>Deze portemonnee is al multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1174"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1222"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>wallet is alleen voor horloges en kan niet multisig worden gemaakt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1181"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1228"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Deze wallet is al eerder gebruikt, gebruik een nieuwe wallet om een multisig wallet aan te maken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1189"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation>Stuur deze multisig-info naar alle andere deelnemers en gebruik vervolgens make_multisig&lt;threshold&gt;&lt;info1&gt; [&lt;info2&gt; ...] met de multisig-info van anderen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet&apos;s participants </source>
        <translation>Dit omvat de PRIVATE view-sleutel, die dus alleen aan de deelnemers van die multisig-wallet hoeft te worden bekendgemaakt </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1242"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3006"/>
        <source>Invalid threshold</source>
        <translation>Ongeldige drempelwaarde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1262"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1339"/>
        <source>Another step is needed</source>
        <translation>Er is nog een stap nodig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1274"/>
        <source>Error creating multisig: </source>
        <translation>Fout bij het aanmaken van multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1281"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Fout bij het aanmaken van multisig: nieuwe wallet is geen multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1284"/>
        <source> multisig address: </source>
        <translation> multisig-adres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1318"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1380"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1448"/>
        <source>This wallet is not multisig</source>
        <translation>Deze portemonnee is niet multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1323"/>
        <source>This wallet is already finalized</source>
        <translation>Deze portemonnee is al gefinaliseerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1350"/>
        <source>Multisig address: </source>
        <translation>Multisig-adres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1553"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1669"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1751"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation>Deze multisig-wallet is nog niet definitief</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1413"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11536"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11695"/>
        <source>failed to save file </source>
        <translation>bestand kon niet worden opgeslagen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1421"/>
        <source>Error exporting multisig info: </source>
        <translation>Fout bij exporteren van multisig-info: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1425"/>
        <source>Multisig info exported to </source>
        <translation>Multisig-info geëxporteerd naar </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1476"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11448"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11474"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11729"/>
        <source>failed to read file </source>
        <translation>kon bestand niet lezen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1497"/>
        <source>Failed to import multisig info: </source>
        <translation>Het importeren van multisig-info is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1508"/>
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Het is niet gelukt om de uitgavenstatus bij te werken na het importeren van multisig-info: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1514"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>Niet-vertrouwde daemon, de status van de uitgaven is mogelijk onjuist. Gebruik een vertrouwde daemon en voer &amp;quot;rescan_spent&amp;quot; uit.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1548"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1664"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1746"/>
        <source>This is not a multisig wallet</source>
        <translation>Dit is geen multisig-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1607"/>
        <source>Failed to sign multisig transaction</source>
        <translation>Het is niet gelukt om een multisig-transactie te ondertekenen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614"/>
        <source>Multisig error: </source>
        <translation>Multisig-fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1619"/>
        <source>Failed to sign multisig transaction: </source>
        <translation>Ondertekening van multisig-transactie mislukt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1626"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1639"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9226"/>
        <source>Transaction successfully signed to file </source>
        <translation>Transactie succesvol ondertekend voor bestand </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1640"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Het kan worden doorgegeven aan het netwerk met submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1701"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1772"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>Multisig-transactie uit bestand laden mislukt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1707"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1777"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Multisig-transactie ondertekend door slechts %u ondertekenaars, heeft %u meer handtekeningen nodig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1716"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11939"/>
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transactie succesvol verzonden, transactie </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1717"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11940"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>U kunt de status controleren met de opdracht `show_transfers`.</translation>
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
        <translation>onbekende fout</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1793"/>
        <source>Failed to export multisig transaction to file </source>
        <translation>Het is niet gelukt om een multisig-transactie naar een bestand te exporteren </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1797"/>
        <source>Saved exported multisig transaction file(s): </source>
        <translation>Opgeslagen geëxporteerde multisig-transactiebestand(en): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2143"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6431"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772"/>
        <source>unexpected error: </source>
        <translation>onverwachte fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1825"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1982"/>
        <source>Invalid key image</source>
        <translation>Ongeldige sleutelafbeelding</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1831"/>
        <source>Invalid txid</source>
        <translation>Ongeldige txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1858"/>
        <source>Failed to get key image ring: </source>
        <translation>Het is niet gelukt om de sleutelafbeeldingsring te verkrijgen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1873"/>
        <source>File doesn&apos;t exist</source>
        <translation>Bestand bestaat niet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1895"/>
        <source>Invalid ring specification: </source>
        <translation>Ongeldige ringspecificatie: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1903"/>
        <source>Invalid key image: </source>
        <translation>Ongeldige sleutelafbeelding: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1908"/>
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>Ongeldig ringtype, verwacht relatief of absoluut: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1926"/>
        <source>Error reading line: </source>
        <translation>Fout bij het lezen van regel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1937"/>
        <source>Invalid ring: </source>
        <translation>Ongeldige ring: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946"/>
        <source>Invalid relative ring: </source>
        <translation>Ongeldige relatieve ring: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1958"/>
        <source>Invalid absolute ring: </source>
        <translation>Ongeldige absolute ring: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1967"/>
        <source>Failed to set ring for key image: </source>
        <translation>Het is niet gelukt om de ring voor de sleutelafbeelding in te stellen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1967"/>
        <source>Continuing.</source>
        <translation>Verder.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1997"/>
        <source>Missing absolute or relative keyword</source>
        <translation>Absoluut of relatief trefwoord ontbreekt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2007"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>ongeldige index: moet een strikt positief ongetekend geheel getal zijn</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>invalid index: indices wrap</source>
        <translation>ongeldige index: indices wrap</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2032"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>ongeldige index: indices moeten strikt in oplopende volgorde staan</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039"/>
        <source>failed to set ring</source>
        <translation>kon de ring niet instellen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2062"/>
        <source>Invalid key image or txid</source>
        <translation>Ongeldige sleutelafbeelding of txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2071"/>
        <source>failed to unset ring</source>
        <translation>kon de ring niet uitzetten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094"/>
        <source>RPC client ID: </source>
        <translation>RPC-client-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2095"/>
        <source>RPC client secret key: </source>
        <translation>Geheime sleutel van RPC-client: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2098"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2529"/>
        <source>Failed to query daemon</source>
        <translation>Het is niet gelukt om de daemon te bevragen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2106"/>
        <source>Using daemon: </source>
        <translation>Daemon gebruiken: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2107"/>
        <source>Payments required for node use, current credits: </source>
        <translation>Betalingen vereist voor nodegebruik, huidige credits: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108"/>
        <source>Credits target: </source>
        <translation>Doelstelling voor credits: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2111"/>
        <source>Credits spent this session: </source>
        <translation>Credits besteed deze sessie: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2113"/>
        <source>Credit discrepancy this session: </source>
        <translation>Credit discrepantie deze sessie: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2115"/>
        <source>Difficulty: </source>
        <translation>Moeilijkheidsgraad: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2115"/>
        <source>credits per hash found, </source>
        <translation>credits per gevonden hash, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2115"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2413"/>
        <source>credits/hash</source>
        <translation>kredieten/hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2123"/>
        <source>Mining for payment at %.1f H/s</source>
        <translation>Mining voor betaling bij %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2128"/>
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>Geschatte tijd totdat %u credits target gedolven is: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2132"/>
        <source>Mining for payment</source>
        <translation>Mijnen voor betaling</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2135"/>
        <source>Not mining</source>
        <translation>Niet mijnen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2138"/>
        <source>No payment needed for node use</source>
        <translation>Geen betaling vereist voor nodegebruik</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211"/>
        <source>Bad argument: </source>
        <translation>Slecht argument: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211"/>
        <source>should be &quot;add&quot;</source>
        <translation>moet &amp;quot;toevoegen&amp;quot; zijn</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220"/>
        <source>Failed to open file</source>
        <translation>Het openen van het bestand is mislukt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2304"/>
        <source>Failed to save known rings: </source>
        <translation>Het opslaan van bekende ringen is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2314"/>
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>gebruik: %s&lt;key_image&gt; |&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2360"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2372"/>
        <source>Frozen: </source>
        <translation>Bevroren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2374"/>
        <source>Not frozen: </source>
        <translation>Niet bevroren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2388"/>
        <source> bytes sent</source>
        <translation> verzonden bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2389"/>
        <source> bytes received</source>
        <translation> bytes ontvangen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2401"/>
        <source>No known public nodes</source>
        <translation>Geen bekende openbare knooppunten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2413"/>
        <source>address</source>
        <translation>adres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2413"/>
        <source>last_seen</source>
        <translation>laatst_gezien</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2419"/>
        <source>never</source>
        <translation>nooit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2427"/>
        <source>Error retrieving public node list: </source>
        <translation>Fout bij het ophalen van de openbare knooppuntlijst: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2437"/>
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium is, net als Bitcoin, een cryptocurrency. Dat wil zeggen, het is digitaal geld.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2441"/>
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>Salvium beschermt uw privacy op de blockchain, en hoewel Salvium ernaar streeft om voortdurend te verbeteren,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2442"/>
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>Geen enkele privacytechnologie kan 100% perfect zijn, ook Salvium niet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2443"/>
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>Salvium kan u niet beschermen tegen malware en is mogelijk niet zo effectief als we hopen tegen krachtige tegenstanders.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2444"/>
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>In de toekomst kunnen er gebreken in Salvium worden ontdekt en kunnen er aanvallen worden ontwikkeld om onder sommige</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2445"/>
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>van de lagen van privacy die Salvium biedt. Wees veilig en oefen verdediging in de diepte.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2534"/>
        <source>Daemon does not require payment for RPC access</source>
        <translation>Daemon vereist geen betaling voor RPC-toegang</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2542"/>
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>Beginnen met minen voor RPC-toegang: diff %llu, %f credits/hash%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2543"/>
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>Voer stop_mining_for_rpc uit om te stoppen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2589"/>
        <source>invalid derive type: must be &apos;carrot&apos; or &apos;precarrot&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2666"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>portemonnee is alleen voor horloges en kan niet worden overgedragen</translation>
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
        <translation>WAARSCHUWING: dit is een niet-standaard ringmaat, die uw privacy kan schaden. Standaard wordt aanbevolen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2688"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2711"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2727"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>prioriteit moet 0, 1, 2, 3 of 4 zijn, of een van de volgende: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2732"/>
        <source>could not change default priority</source>
        <translation>kon standaardprioriteit niet wijzigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2818"/>
        <source>invalid unit</source>
        <translation>ongeldige eenheid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2854"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2916"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>ongeldige telling: moet een ongetekend geheel getal zijn</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2836"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2872"/>
        <source>invalid value</source>
        <translation>ongeldige waarde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2950"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3068"/>
        <source>Invalid height</source>
        <translation>Ongeldige hoogte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3023"/>
        <source>Invalid target</source>
        <translation>Ongeldig doel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3099"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3118"/>
        <source>Invalid amount</source>
        <translation>Ongeldig bedrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3239"/>
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>ongeldig argument: moet 1/ja of 0/nee zijn</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3528"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Begin met minen in de daemon (bg_mining en ignore_battery zijn optionele Booleans).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3531"/>
        <source>Stop mining in the daemon.</source>
        <translation>Stop met minen in de daemon.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3538"/>
        <source>Save the current blockchain data.</source>
        <translation>Sla de huidige blockchaingegevens op.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3541"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>Synchroniseer de transacties en het saldo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3545"/>
        <source>Show the wallet&apos;s balance of the currently selected account.</source>
        <translation>Toon het saldo van de portemonnee van de momenteel geselecteerde rekening.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3549"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent(&quot;T&quot;|&quot;F&quot;), &quot;frozen&quot;|&quot;locked&quot;|&quot;unlocked&quot;, RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation>Toon de binnenkomende overschrijvingen, allemaal of gefilterd op beschikbaarheid en adresindex. Uitvoerformaat: Bedrag, Uitgegeven(&amp;quot;T&amp;quot;|&amp;quot;F&amp;quot;), &amp;quot;bevroren&amp;quot;|&amp;quot;vergrendeld&amp;quot;|&amp;quot;ontgrendeld&amp;quot;, RingCT, Globale index, Transactiehash, Adresindex, [Openbare sleutel, Sleutelafbeelding] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3555"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>Toon de betalingen voor de opgegeven betalings-ID&amp;#39;s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3558"/>
        <source>Show the blockchain height.</source>
        <translation>Toon de hoogte van de blockchain.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Stuur alle niet-mengbare uitvoer naar uzelf met ring_size 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3582"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Stuur alle ontgrendelde uitgangen onder de drempelwaarde naar een adres.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3586"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Stuur één enkele uitvoer van de gegeven sleutelafbeelding naar een adres zonder wijziging.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3626"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default &quot;unsigned_salvium_tx&quot; will be used.</source>
        <translation>Onderteken een transactie vanuit een bestand. Als de parameter &amp;quot;export_raw&amp;quot; is opgegeven, worden transactie raw hex-gegevens die geschikt zijn voor de daemon RPC /sendrawtransaction geëxporteerd. Gebruik de parameter&lt;filename&gt; om het bestand te specificeren waaruit gelezen moet worden. Indien niet gespecificeerd, zal de standaard &amp;quot;unsigned_salvium_tx&amp;quot; worden gebruikt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3630"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>Dien een ondertekende transactie in vanuit een bestand.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3634"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Wijzig de huidige logdetails (niveau moet &amp;lt;0-4&amp;gt; zijn).</translation>
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
        <translation>Als er geen argumenten worden opgegeven, toont de wallet alle bestaande accounts met hun saldo&amp;#39;s. Als het argument &amp;quot;new&amp;quot; wordt opgegeven, maakt de wallet een nieuw account aan met het label geïnitialiseerd door de opgegeven labeltekst (die leeg kan zijn). Als het argument &amp;quot;switch&amp;quot; wordt opgegeven, schakelt de wallet over naar het account dat is opgegeven door&lt;index&gt; Als het &amp;quot;label&amp;quot;-argument is opgegeven, stelt de portemonnee het label in van de account die is opgegeven door&lt;index&gt; naar de opgegeven labeltekst. Als het &amp;quot;tag&amp;quot;-argument is opgegeven, wordt een tag&lt;tag_name&gt; wordt toegewezen aan de opgegeven rekeningen&lt;account_index_1&gt; ,&lt;account_index_2&gt; , .... Als het &amp;quot;untag&amp;quot;-argument is opgegeven, worden de tags toegewezen aan de opgegeven accounts&lt;account_index_1&gt; ,&lt;account_index_2&gt; ..., worden verwijderd. Als het &amp;quot;tag_description&amp;quot;-argument is opgegeven, wordt de tag&lt;tag_name&gt; krijgt een willekeurige tekst toegewezen&lt;description&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3652"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Codeer een betalings-ID in een geïntegreerd adres voor het huidige openbare adres van de portemonnee (geen enkel argument gebruikt een willekeurige betalings-ID), of decodeer een geïntegreerd adres naar een standaardadres en betalings-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3656"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Alle vermeldingen in het adresboek afdrukken en eventueel vermeldingen toevoegen/verwijderen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3659"/>
        <source>Save the wallet data.</source>
        <translation>Sla de portemonneegegevens op.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3662"/>
        <source>Save a watch-only keys file.</source>
        <translation>Sla een bestand op met alleen kijksleutels.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3668"/>
        <source>Display the private view key.</source>
        <translation>Geef de persoonlijke weergavesleutel weer.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3671"/>
        <source>Display the private spend key.</source>
        <translation>Geef de sleutel voor privé-uitgaven weer.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3674"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Toon de mnemonische seed in Electrum-stijl</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3760"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Geef de gecodeerde mnemonische seed in Electrum-stijl weer.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3763"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Scan de blockchain opnieuw op uitgegeven outputs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3767"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Ontvang de transactiesleutel (r) voor een gegeven&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3771"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Stel de transactiesleutel (r) in voor een gegeven&lt;txid&gt; in het geval dat de transactie is gedaan door een ander apparaat of een wallet van een derde partij.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3775"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Controleer het bedrag dat naar&lt;address&gt; in&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3779"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet&apos;s address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Genereer een handtekening die bewijst dat de fondsen zijn verzonden naar&lt;address&gt; in&lt;txid&gt; , eventueel met een uitdagingsstring&lt;message&gt; , met behulp van de geheime sleutel van de transactie (wanneer&lt;address&gt; is niet het adres van uw portemonnee) of de geheime sleutel weergeven (anders), waarbij de geheime sleutel niet wordt vrijgegeven.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3783"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Controleer het bewijs voor fondsen die naar&lt;address&gt; in&lt;txid&gt; met de uitdagingsstring&lt;message&gt; indien van toepassing.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3787"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Genereer een handtekening die bewijst dat u&lt;txid&gt; met behulp van de geheime sleutel voor uitgaven, optioneel met een uitdagingsreeks&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3791"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Controleer een handtekening die bewijst dat de ondertekenaar&lt;txid&gt; , eventueel met een uitdagingsstring&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If &apos;all&apos; is specified, you prove the entire sum of all of your existing accounts&apos; balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Genereer een handtekening die bewijst dat u ten minste dit bedrag bezit, eventueel met een uitdagende string&lt;message&gt; . Als &amp;#39;all&amp;#39; is gespecificeerd, bewijst u de volledige som van alle saldi van uw bestaande rekeningen. Anders bewijst u de reserve van het kleinst mogelijke bedrag hierboven&lt;amount&gt; beschikbaar op uw betaalrekening.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3801"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Controleer een handtekening die bewijst dat de eigenaar van&lt;address&gt; bevat ten minste dit, optioneel met een uitdagingsreeks&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3822"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Toon de niet-besteedde uitvoer van een opgegeven adres binnen een optioneel bedragbereik.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3830"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Stel een willekeurige snaarnoot in voor een&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3834"/>
        <source>Get a string note for a txid.</source>
        <translation>Zoek een snaarnoot voor een txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3838"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Geef een willekeurige beschrijving op voor de portemonnee.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3842"/>
        <source>Get the description of the wallet.</source>
        <translation>Bekijk de beschrijving van de portemonnee.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845"/>
        <source>Show the wallet&apos;s status.</source>
        <translation>Toon de status van de portemonnee.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3848"/>
        <source>Show the wallet&apos;s information.</source>
        <translation>Toon de informatie van de portemonnee.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3856"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>Controleer een handtekening op de inhoud van een bestand.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3864"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importeer een lijst met ondertekende sleutelafbeeldingen en controleer de bestedingsstatus ervan.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3872"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Probeert de HW-wallet opnieuw te verbinden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3876"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Exporteer een set uitvoergegevens die eigendom zijn van deze portemonnee.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3880"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importeer een set uitvoergegevens die eigendom zijn van deze portemonnee.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3884"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>Toon informatie over een transfer van/naar dit adres.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3887"/>
        <source>Change the wallet&apos;s password.</source>
        <translation>Wijzig het wachtwoord van de portemonnee.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3894"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Print de informatie over de huidige vergoeding en het transactieoverzicht.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3896"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>Exporteer gegevens die nodig zijn om een multisig-wallet te maken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3899"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Verander deze wallet in een multisig wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3907"/>
        <source>Export multisig info for other participants</source>
        <translation>Exporteer multisig-info voor andere deelnemers</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3911"/>
        <source>Import multisig info from other participants</source>
        <translation>Importeer multisig-info van andere deelnemers</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3915"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>Een multisig-transactie ondertekenen vanuit een bestand</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3919"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Een ondertekende multisig-transactie vanuit een bestand indienen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3923"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>Exporteer een ondertekende multisig-transactie naar een bestand</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, &quot;absolute&quot;, list of rings</source>
        <translation>Print de ring(en) die gebruikt zijn om een bepaalde sleutelafbeelding of transactie uit te geven (als de ringmaat &amp;gt; 1 is) Uitvoerformaat: Sleutelafbeelding, &amp;quot;absoluut&amp;quot;, lijst met ringen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Stel de ring in die voor een bepaalde sleutelafbeelding wordt gebruikt, zodat deze opnieuw kan worden gebruikt in een vork</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4024"/>
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>Schakelt de ring uit die wordt gebruikt voor een bepaalde sleutelafbeelding of transactie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4028"/>
        <source>Save known rings to the shared rings database</source>
        <translation>Bekende ringen opslaan in de gedeelde ringendatabase</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044"/>
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>Bevries een enkele uitvoer per sleutelafbeelding, zodat deze niet wordt gebruikt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4048"/>
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>Ontdooi een enkele uitvoer per sleutelafbeelding, zodat deze opnieuw kan worden gebruikt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4052"/>
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>Controleert of een bepaalde uitvoer momenteel bevroren is door de sleutelafbeelding</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4060"/>
        <source>Prints simple network stats</source>
        <translation>Drukt eenvoudige netwerkstatistieken af</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4064"/>
        <source>Lists known public nodes</source>
        <translation>Geeft een lijst van bekende openbare knooppunten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4068"/>
        <source>Prints basic info about Salvium for first time users</source>
        <translation>Print basisinformatie over Salvium voor nieuwe gebruikers</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4072"/>
        <source>Returns version information</source>
        <translation>Geeft versie-informatie terug</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4076"/>
        <source>Get info about RPC payments to current node</source>
        <translation>Ontvang informatie over RPC-betalingen aan de huidige node</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4080"/>
        <source>Start mining to pay for RPC access</source>
        <translation>Begin met minen om te betalen voor RPC-toegang</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4084"/>
        <source>Stop mining to pay for RPC access</source>
        <translation>Stop met minen om te betalen voor RPC-toegang</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4092"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Toon de helpsectie of de documentatie over een&lt;command&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4186"/>
        <source>needs an argument</source>
        <translation>heeft een argument nodig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4200"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>set seed: heeft een argument nodig. Beschikbare opties: taal</translation>
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
        <translation>0 of 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4213"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>volledig (langzaamst, geen aannames); optimize-coinbase (snel, gaat ervan uit dat de hele coinbase aan één adres wordt betaald); no-coinbase (snelst, gaat ervan uit dat we geen coinbase-transactie ontvangen), standaard (hetzelfde als optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4214"/>
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0, 1, 2, 3 of 4, of een van </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4215"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (of nooit|actie|decoderen)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4217"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4218"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4222"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4229"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4243"/>
        <source>unsigned integer</source>
        <translation>ongetekend geheel getal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4219"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4232"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>amount</source>
        <translation>hoeveelheid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4224"/>
        <source>block height</source>
        <translation>blok hoogte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4228"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;major&gt;:&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4237"/>
        <source>1/yes or 0/no</source>
        <translation>1/ja of 0/nee</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4242"/>
        <source>floating point &gt;= 0</source>
        <translation>drijvende komma &amp;gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4248"/>
        <source>set: unrecognized argument(s)</source>
        <translation>set: niet-herkende argument(en)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4306"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Walletnaam is niet geldig. Probeer het opnieuw of gebruik Ctrl-C om te stoppen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4318"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Poging om wallet te genereren of te herstellen, maar opgegeven bestand(en) bestaan. Afsluiten om overschrijven te voorkomen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4323"/>
        <source>Wallet and key files found, loading...</source>
        <translation>Portemonnee- en sleutelbestanden gevonden, laden...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4329"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Sleutelbestand gevonden, maar geen walletbestand. Regenereren...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4335"/>
        <source>Key file not found. Failed to open wallet: </source>
        <translation>Sleutelbestand niet gevonden. Portemonnee kon niet worden geopend: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4343"/>
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Geen wallet gevonden met die naam. Bevestig het aanmaken van een nieuwe wallet met de naam: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4354"/>
        <source>Generating new wallet...</source>
        <translation>Nieuwe portemonnee genereren...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4435"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Kan niet meer dan één van --testnet en --stagenet specificeren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4481"/>
        <source>can&apos;t specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>kan niet zowel --restore-deterministic-wallet of --restore-multisig-wallet als --non-deterministic specificeren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4487"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet gebruikt --generate-new-wallet, niet --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4489"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet gebruikt --generate-new-wallet, niet --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4503"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation>geef een herstelparameter op met --electrum-seed=&amp;quot;multisig seed hier&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4518"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>geef een herstelparameter op met --electrum-seed=&amp;quot;woordenlijst hier&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4532"/>
        <source>Multisig seed failed verification</source>
        <translation>Multisig-seed is niet geverifieerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4541"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Woordenlijst in Electrum-stijl is niet geverifieerd</translation>
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
        <translation>Geen gegevens verstrekt, geannuleerd</translation>
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
        <translation>kon adres niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4572"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Dit adres is een subadres dat hier niet gebruikt kan worden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4587"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4648"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4742"/>
        <source>failed to parse view key secret key</source>
        <translation>kon de geheime sleutel van de weergavesleutel niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4596"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759"/>
        <source>failed to verify view key secret key</source>
        <translation>kon de geheime sleutel van de weergavesleutel niet verifiëren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4600"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4763"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4845"/>
        <source>view key does not match standard address</source>
        <translation>weergavesleutel komt niet overeen met standaardadres</translation>
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
        <translation>account aanmaken mislukt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4685"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4727"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4870"/>
        <source>failed to parse spend key secret key</source>
        <translation>kon de geheime sleutel van de uitgavesleutel niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4751"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4890"/>
        <source>failed to verify spend key secret key</source>
        <translation>kon de geheime sleutel van de uitgavesleutel niet verifiëren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4755"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4895"/>
        <source>spend key does not match standard address</source>
        <translation>spend key komt niet overeen met standaard adres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4790"/>
        <source>Error: expected M/N, but got: </source>
        <translation>Fout: verwachtte M/N, maar kreeg: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4795"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Fout: verwachtte N &amp;gt; 1 en N &amp;lt;= M, maar kreeg: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4800"/>
        <source>Error: M/N is currently unsupported. </source>
        <translation>Fout: M/N wordt momenteel niet ondersteund. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4803"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Genereren van master wallet van %u van %u multisig wallet-sleutels</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4832"/>
        <source>failed to parse secret view key</source>
        <translation>kon geheime weergavesleutel niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4840"/>
        <source>failed to verify secret view key</source>
        <translation>kon geheime weergavesleutel niet verifiëren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4883"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>Fout: M/N wordt momenteel niet ondersteund</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4935"/>
        <source>No restore height is specified.</source>
        <translation>Er is geen herstelhoogte opgegeven.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4936"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Ervan uitgaande dat u een nieuw account aanmaakt, wordt het herstel uitgevoerd vanaf de huidige geschatte blockchainhoogte.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4941"/>
        <source>account creation aborted</source>
        <translation>account aanmaken afgebroken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4951"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>geef een wallet-pad op met --generate-new-wallet (niet --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5015"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5035"/>
        <source>bad m_restore_height parameter: </source>
        <translation>slechte m_restore_height parameter: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4979"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5026"/>
        <source>Restore height is: </source>
        <translation>Herstel hoogte is: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5049"/>
        <source>Restore height </source>
        <translation>Hoogte herstellen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065"/>
        <source>can&apos;t specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>kan niet tegelijkertijd --subaddress-lookahead en --wallet-file opgeven</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5069"/>
        <source>failed to open account</source>
        <translation>kon geen account openen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5074"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5866"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9461"/>
        <source>wallet is null</source>
        <translation>portemonnee is nul</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5108"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Initialiseren van ringdatabase mislukt: privacyverbeterende functies zijn inactief</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5189"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5193"/>
        <source>wallet failed to connect to daemon: </source>
        <translation>portemonnee kon geen verbinding maken met daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5194"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation>Daemon is niet gestart of de verkeerde poort is doorgegeven. Controleer of daemon draait of wijzig het daemonadres met de opdracht &amp;#39;set_daemon&amp;#39;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5223"/>
        <source>List of available languages for your wallet&apos;s seed:</source>
        <translation>Lijst met beschikbare talen voor de seed van uw portemonnee:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5224"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Als uw beeldscherm vastloopt, sluit u blind af met ^C en voert u het programma opnieuw uit met --use-english-language-names</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5242"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5247"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>Ongeldige taalkeuze ingevoerd. Probeer het opnieuw.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5264"/>
        <source>invalid password</source>
        <translation>ongeldig wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5312"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>U gebruikte een verouderde versie van de wallet. Gebruik de nieuwe seed die wij u bieden.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5340"/>
        <source>View key: </source>
        <translation>Weergave sleutel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5346"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5421"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5465"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5529"/>
        <source>failed to generate new wallet: </source>
        <translation>kon geen nieuwe portemonnee genereren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460"/>
        <source>Generated new wallet on hw device: </source>
        <translation>Nieuwe portemonnee gegenereerd op hardwareapparaat: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5521"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>kon geen nieuwe mutlisig wallet genereren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5524"/>
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Nieuwe %u/%u multisig wallet gegenereerd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5540"/>
        <source>wallet file path not valid: </source>
        <translation>wallet-bestandspad niet geldig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5550"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation>Sleutelbestand niet gevonden. Portemonnee openen mislukt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5570"/>
        <source>Opened watch-only wallet</source>
        <translation>Geopende portemonnee voor alleen horloge</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5572"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>%u/%u multisig wallet%s geopend</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5598"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>U gebruikte een verouderde versie van de wallet. Ga door met het upgraden van uw wallet.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5613"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>U gebruikte een verouderde versie van de wallet. Uw wallet-bestandsformaat wordt nu geüpgraded.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621"/>
        <source>failed to load wallet: </source>
        <translation>portemonnee kon niet worden geladen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5640"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
</source>
        <translation>Gebruik &amp;quot;help&amp;quot;&lt;command&gt; &amp;quot;om de documentatie van een opdracht te bekijken.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5662"/>
        <source>failed to deinitialize wallet</source>
        <translation>kon portemonnee niet deïnitialiseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5685"/>
        <source>Wallet data saved</source>
        <translation>Portemonneegegevens opgeslagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5699"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>wallet is multisig en kan geen watch-only versie opslaan</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5707"/>
        <source>failed to read wallet password</source>
        <translation>kon het wachtwoord van de portemonnee niet lezen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5715"/>
        <source>Watch only wallet saved as: </source>
        <translation>Bekijk alleen de portemonnee opgeslagen als: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5719"/>
        <source>Failed to save watch only wallet: </source>
        <translation>Het is niet gelukt om alleen de horloge-portemonnee op te slaan: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5857"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6735"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11561"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>deze opdracht vereist een vertrouwde daemon. Inschakelen met --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5910"/>
        <source>Mining started in daemon</source>
        <translation>Mining begon in daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5912"/>
        <source>mining has NOT been started: </source>
        <translation>mijnbouw is NIET gestart: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5932"/>
        <source>Mining stopped in daemon</source>
        <translation>Mining gestopt in daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5934"/>
        <source>mining has NOT been stopped: </source>
        <translation>De mijnbouw is NIET gestopt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5989"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Onverwachte arraylengte - Simple_wallet::set_daemon() verlaten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6065"/>
        <source>trusted</source>
        <translation>vertrouwd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6065"/>
        <source>untrusted</source>
        <translation>niet vertrouwd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6081"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Dit lijkt geen geldige daemon-URL te zijn.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6101"/>
        <source>Blockchain saved</source>
        <translation>Blockchain gered</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6103"/>
        <source>blockchain can&apos;t be saved: </source>
        <translation>blockchain kan niet worden gered: </translation>
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
        <translation>Hoogte </translation>
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
        <translation>ik weet het niet </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6242"/>
        <source>spent </source>
        <translation>besteed </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6269"/>
        <source>Enter password</source>
        <translation>Voer wachtwoord in</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6365"/>
        <source>Starting refresh...</source>
        <translation>Vernieuwen wordt gestart...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6387"/>
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>Nieuwe overdracht ontvangen sinds rescan is gestart. Sleutelafbeeldingen zijn onvolledig.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6394"/>
        <source>Refresh done, blocks received: </source>
        <translation>Vernieuwing voltooid, blokken ontvangen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6402"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6749"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon is bezig. Probeer het later opnieuw.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5083"/>
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>De geheime sleutel van de RPC-client moet 32 bytes lang zijn in hex-formaat</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5833"/>
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>Als achtergrondmining is ingeschakeld, zal de daemon minen wanneer deze inactief is en niet op de batterij is aangesloten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5959"/>
        <source>Error checking daemon RPC access prices</source>
        <translation>Fout bij het controleren van daemon RPC-toegangsprijzen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5965"/>
        <source>Error checking daemon RPC access prices: </source>
        <translation>Fout bij het controleren van daemon RPC-toegangsprijzen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6061"/>
        <source>Failed to connect to daemon</source>
        <translation>Kan geen verbinding maken met daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6073"/>
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>Daemon RPC credits/hash is minder dan werd beweerd. Ofwel is deze daemon aan het valsspelen, ofwel heeft hij onlangs zijn setup veranderd.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6074"/>
        <source>Claimed: </source>
        <translation>Beweerd: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6075"/>
        <source>Actual: </source>
        <translation>Actueel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6753"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>geen verbinding met daemon. Zorg ervoor dat daemon draait.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6410"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6757"/>
        <source>payment required.</source>
        <translation>Betaling vereist.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6416"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6767"/>
        <source>RPC error: </source>
        <translation>RPC-fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6421"/>
        <source>refresh error: </source>
        <translation>vernieuwingsfout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6426"/>
        <source>internal error: </source>
        <translation>interne fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441"/>
        <source>refresh failed: </source>
        <translation>vernieuwen mislukt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441"/>
        <source>Blocks received: </source>
        <translation>Ontvangen blokken: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6470"/>
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Sommige eigen uitvoer bevat gedeeltelijke sleutelafbeeldingen - import_multisig_info is vereist)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6473"/>
        <source>Currently selected account: [</source>
        <translation>Momenteel geselecteerde account: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6473"/>
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6475"/>
        <source>(No tag assigned)</source>
        <translation>(Geen tag toegewezen)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6475"/>
        <source>Tag: </source>
        <translation>Label: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6490"/>
        <source>unlocked balance: </source>
        <translation>ontgrendeld saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6495"/>
        <source>Balance per address:</source>
        <translation>Saldo per adres:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <source>Address</source>
        <translation>Adres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Balance</source>
        <translation>Evenwicht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Unlocked balance</source>
        <translation>Ontgrendeld saldo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <source>Outputs</source>
        <translation>Uitgangen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12183"/>
        <source>Label</source>
        <translation>Label</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6597"/>
        <source>pubkey</source>
        <translation>pubkey</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6597"/>
        <source>key image</source>
        <translation>sleutelbeeld</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>spent</source>
        <translation>besteed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6620"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>unlocked</source>
        <translation>ontgrendeld</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>ringct</source>
        <translation>ringct</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>global index</source>
        <translation>wereldwijde index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>tx id</source>
        <translation>tx-id</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>addr index</source>
        <translation>adres index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6614"/>
        <source>Used at heights: </source>
        <translation>Gebruikt op hoogte: </translation>
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
        <translation>vergrendeld</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6620"/>
        <source>[frozen]</source>
        <translation>[bevroren]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6621"/>
        <source>RingCT</source>
        <translation>RingCT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6621"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6634"/>
        <source>No incoming transfers</source>
        <translation>Geen inkomende overschrijvingen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6638"/>
        <source>No incoming available transfers</source>
        <translation>Geen binnenkomende beschikbare transfers</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6642"/>
        <source>No incoming unavailable transfers</source>
        <translation>Geen binnenkomende niet-beschikbare transfers</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>payment</source>
        <translation>betaling</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>transaction</source>
        <translation>transactie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>height</source>
        <translation>hoogte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>unlock time</source>
        <translation>ontgrendel tijd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6678"/>
        <source>No payments with id </source>
        <translation>Geen betalingen met id </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6700"/>
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>Betalings-ID heeft ongeldig formaat, verwacht 16 of 64 hexadecimale tekens: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6726"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6825"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7901"/>
        <source>failed to get blockchain height: </source>
        <translation>kon blockchainhoogte niet verkrijgen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6762"/>
        <source>failed to get spent status</source>
        <translation>kon de status &amp;#39;uitgegeven&amp;#39; niet krijgen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6836"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transactie %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6852"/>
        <source>failed to find construction data for tx input</source>
        <translation>kon geen constructiegegevens vinden voor tx-invoer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6876"/>
        <source>failed to get output: </source>
        <translation>kon de uitvoer niet ophalen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6884"/>
        <source>output key&apos;s originating block height shouldn&apos;t be higher than the blockchain height</source>
        <translation>De oorspronkelijke blokhoogte van de uitvoersleutel mag niet hoger zijn dan de blockchainhoogte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6889"/>
        <source>
Originating block heights: </source>
        <translation>
Oorspronkelijke blokhoogtes: </translation>
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
Waarschuwing: Sommige invoersleutels die worden uitgegeven, zijn afkomstig van </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917"/>
        <source>the same transaction</source>
        <translation>dezelfde transactie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917"/>
        <source>blocks that are temporally very close</source>
        <translation>blokken die tijdelijk heel dicht bij elkaar liggen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7103"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7853"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8136"/>
        <source>Ring size must not be 0</source>
        <translation>Ringmaat mag niet 0 zijn</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7115"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7865"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8148"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>ringmaat %u is te klein, minimum is %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7120"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7870"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8153"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation>ringmaat %u is te groot, maximum is %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7127"/>
        <source>wrong number of arguments</source>
        <translation>verkeerd aantal argumenten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7144"/>
        <source>payment id failed to encode</source>
        <translation>betalings-id kon niet worden gecodeerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7163"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7894"/>
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Geblokkeerde blokken te hoog, max 1000000 (˜4 jaar)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7211"/>
        <source>failed to parse short payment ID from URI</source>
        <translation>kon korte betalings-ID niet uit URI parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7236"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7238"/>
        <source>Invalid last argument: </source>
        <translation>Ongeldig laatste argument: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7256"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>één enkele transactie kan niet meer dan één betalings-ID gebruiken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7272"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation>kon de betalings-id niet parseren, hoewel deze wel werd gedetecteerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7388"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7398"/>
        <source>Is this okay anyway?</source>
        <translation>Is dit wel oké?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7393"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>Er is momenteel een %u block backlog op dat tariefniveau. Is dit oké?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7715"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8025"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>%s vegen in %llu transacties voor een totaalbedrag van %s. Is dit oké?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7721"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8031"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8269"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>%s vegen voor een totaalbedrag van %s. Is dit oké?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7769"/>
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by &quot;rescan_spent&quot;.  Is this okay?</source>
        <translation>%s van niet-mengbare outputs die niet kunnen worden uitgegeven, worden weggegooid. Dit kan ongedaan worden gemaakt door &amp;quot;rescan_spent&amp;quot;. Is dit oké?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8162"/>
        <source>Failed to parse number of outputs</source>
        <translation>Het is niet gelukt om het aantal uitvoerresultaten te parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7919"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8167"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation>Het aantal uitgangen moet groter zijn dan 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7945"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>betalings-id heeft ongeldige indeling, verwacht 16 of 64 hexadecimale tekens: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7158"/>
        <source>bad locked_blocks parameter:</source>
        <translation>slechte locked_blocks parameter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8226"/>
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>één enkele transactie kan niet meer dan één betalings-ID gebruiken: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7974"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8194"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8234"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>kon de betalings-id niet instellen, hoewel deze correct werd gedecodeerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1341"/>
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation>Stuur deze multisig-info naar alle andere deelnemers en gebruik vervolgens exchange_multisig_keys&lt;info1&gt; [&lt;info2&gt; ...] met de multisig-info van anderen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1349"/>
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation>Multisig wallet is succesvol aangemaakt. Huidig wallet type: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1355"/>
        <source>Failed to perform multisig keys exchange: </source>
        <translation>Uitwisseling van multisig-sleutels is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1692"/>
        <source>Failed to load multisig transaction from MMS</source>
        <translation>Multisig-transactie van MMS kan niet worden geladen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2232"/>
        <source>Failed to mark output spent: </source>
        <translation>Het is niet gelukt om de output als uitgegeven te markeren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2259"/>
        <source>Failed to mark output unspent: </source>
        <translation>Het is niet gelukt om de output als niet-besteed te markeren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2283"/>
        <source>Spent: </source>
        <translation>Uitgegeven: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2285"/>
        <source>Not spent: </source>
        <translation>Niet besteed: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2289"/>
        <source>Failed to check whether output is spent: </source>
        <translation>Het is niet gelukt om te controleren of de output is uitgegeven: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2480"/>
        <source>Please confirm the transaction on the device</source>
        <translation>Bevestig de transactie op het apparaat</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3258"/>
        <source>Device name not specified</source>
        <translation>Apparaatnaam niet opgegeven</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3267"/>
        <source>Device reconnect failed</source>
        <translation>Apparaat opnieuw verbinden mislukt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3272"/>
        <source>Device reconnect failed: </source>
        <translation>Opnieuw verbinden met apparaat mislukt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3818"/>
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>Exporteer de inkomende/uitgaande overschrijvingen binnen een optioneel hoogtebereik naar CSV.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3826"/>
        <source>Rescan the blockchain from scratch. If &quot;hard&quot; is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>Scan de blockchain opnieuw vanaf nul. Als &amp;quot;hard&amp;quot; is gespecificeerd, verliest u alle informatie die niet kan worden hersteld van de blockchain zelf.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3860"/>
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>Exporteer een ondertekende set sleutelafbeeldingen naar een&lt;filename&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3868"/>
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>Synchroniseert sleutelafbeeldingen met de hw-wallet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3891"/>
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>Genereer een nieuwe willekeurige full size payment id (verouderd). Deze zullen ongecodeerd zijn op de blockchain, zie integrated_address voor gecodeerde short payment id&amp;#39;s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3903"/>
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>Voert extra multisig-sleuteluitwisselingsrondes uit. Nodig voor willekeurige M/N multisig-wallets</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3935"/>
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>Initialiseer en configureer de MMS voor M/N = aantal vereiste ondertekenaars/aantal geautoriseerde ondertekenaars multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3939"/>
        <source>Display current MMS configuration</source>
        <translation>Huidige MMS-configuratie weergeven</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3943"/>
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>Stel de informatie van de geautoriseerde ondertekenaar in of wijzig deze (label van één woord, transportadres, Salvium-adres) of geef een lijst van alle ondertekenaars weer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3947"/>
        <source>List all messages</source>
        <translation>Alle berichten weergeven</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3951"/>
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using &apos;sync&apos; processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>Evalueer de volgende mogelijke multisig-gerelateerde actie(s) op basis van de status van de portemonnee en voer deze uit of bied een keuze aan. Door &amp;#39;sync&amp;#39; te gebruiken, kan de verwerking van wachtende berichten met multisig-synchronisatie-info worden afgedwongen, ongeacht de status van de portemonnee.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3956"/>
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like &quot;stale data&quot; errors</source>
        <translation>Forceer het genereren van multisig-synchronisatie-info, ongeacht de status van de wallet, om te herstellen van speciale situaties zoals &amp;#39;verouderde data&amp;#39;-fouten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3960"/>
        <source>Initiate transfer with MMS support; arguments identical to normal &apos;transfer&apos; command arguments, for info see there</source>
        <translation>Start overdracht met MMS-ondersteuning; argumenten identiek aan normale &amp;#39;overdracht&amp;#39;-opdrachtargumenten, voor info zie daar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3964"/>
        <source>Delete a single message by giving its id, or delete all messages by using &apos;all&apos;</source>
        <translation>Verwijder een enkel bericht door de id ervan op te geven, of verwijder alle berichten door &amp;#39;alles&amp;#39; te gebruiken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3968"/>
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>Stuur één bericht door de id ervan op te geven, of stuur alle wachtende berichten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3972"/>
        <source>Check right away for new messages to receive</source>
        <translation>Controleer direct of er nieuwe berichten zijn om te ontvangen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3976"/>
        <source>Write the content of a message to a file &quot;mms_message_content&quot;</source>
        <translation>Schrijf de inhoud van een bericht naar een bestand &amp;quot;mms_message_content&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3980"/>
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>Stuur een bericht van één regel naar een geautoriseerde ondertekenaar, herkenbaar aan het label, of toon eventuele ongelezen notities die nog in behandeling zijn</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984"/>
        <source>Show detailed info about a single message</source>
        <translation>Gedetailleerde informatie over een enkel bericht weergeven</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3988"/>
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation>Beschikbare opties: automatisch verzenden &amp;lt;1|0&amp;gt; Of nieuw gegenereerde berichten direct automatisch moeten worden verzonden.
 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3994"/>
        <source>Send completed signer config to all other authorized signers</source>
        <translation>Stuur de voltooide ondertekenaarsconfiguratie naar alle andere geautoriseerde ondertekenaars</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998"/>
        <source>Start auto-config at the auto-config manager&apos;s wallet by issuing auto-config tokens and optionally set others&apos; labels</source>
        <translation>Start auto-config in de wallet van de auto-config manager door auto-config tokens uit te geven en optioneel de labels van anderen in te stellen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4006"/>
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>Verwijder alle auto-configuratietokens en breek een auto-configuratieproces af</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4010"/>
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>Start auto-config met behulp van het token dat u van de auto-config manager hebt ontvangen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032"/>
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>Markeer output(s) als uitgegeven, zodat ze nooit als nep-outputs in een ring worden geselecteerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036"/>
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>Markeert een output als niet-besteed, zodat deze kan worden geselecteerd als een nep-output in een ring</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040"/>
        <source>Checks whether an output is marked as spent</source>
        <translation>Controleert of een uitvoer als besteed is gemarkeerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4238"/>
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;device_name[:device_spec]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4267"/>
        <source>wrong number range, use: %s</source>
        <translation>verkeerd nummerbereik, gebruik: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4372"/>
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>OPMERKING: de volgende %s kunnen worden gebruikt om toegang tot uw wallet te herstellen. Schrijf ze op en bewaar ze ergens veilig en beveiligd. Bewaar ze niet in uw e-mail of op bestandsopslagservices buiten uw directe controle.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4374"/>
        <source>string</source>
        <translation>snaar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4374"/>
        <source>25 words</source>
        <translation>25 woorden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4860"/>
        <source>Secret spend key (%u of %u)</source>
        <translation>Geheime uitgavesleutel (%u van %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4937"/>
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>Gebruik --restore-height of --restore-date als u een reeds ingesteld account vanaf een specifieke hoogte wilt herstellen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4939"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5027"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7505"/>
        <source>Is this okay?</source>
        <translation>Is dit oké?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5050"/>
        <source>Still apply restore height?</source>
        <translation>Nog steeds de hoogte herstellen toepassen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5233"/>
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>Voer het nummer in dat overeenkomt met de taal van uw keuze</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6284"/>
        <source>Device requires attention</source>
        <translation>Apparaat vereist aandacht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6290"/>
        <source>Enter device PIN</source>
        <translation>Voer de pincode van het apparaat in</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6292"/>
        <source>Failed to read device PIN</source>
        <translation>Het is niet gelukt om de pincode van het apparaat te lezen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6302"/>
        <source>Please enter the device passphrase on the device</source>
        <translation>Voer de wachtwoordzin van het apparaat in op het apparaat</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6309"/>
        <source>Enter device passphrase</source>
        <translation>Voer de wachtwoordzin van het apparaat in</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6311"/>
        <source>Failed to read device passphrase</source>
        <translation>Het is niet gelukt om het wachtwoord van het apparaat te lezen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6335"/>
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation>De eerste vernieuwing is voltooid voor de HW-gebaseerde portemonnee met ontvangen geld. hw_key_images_sync is vereist. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5835"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6337"/>
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation>Wil je het nu doen? (J/Ja/N/Nee): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2461"/>
        <source>Unknown command &apos;%s&apos;, try &apos;help&apos;</source>
        <translation>Onbekend commando &amp;#39;%s&amp;#39;, probeer &amp;#39;help&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3207"/>
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Time-out voor inactiviteitsvergrendeling uitgeschakeld op Windows</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221"/>
        <source>Invalid number of seconds</source>
        <translation>Ongeldig aantal seconden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3283"/>
        <source>Export format not specified</source>
        <translation>Exportformaat niet gespecificeerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3297"/>
        <source>Export format not recognized.</source>
        <translation>Exportformaat niet herkend.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677"/>
        <source>Display the restore height</source>
        <translation>De herstelhoogte weergeven</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4056"/>
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>Vergrendel de portemonneeconsole, waarbij het portemonneewachtwoord vereist is om door te gaan</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4236"/>
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>ongetekend geheel getal (seconden, 0 om uit te schakelen)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4239"/>
        <source>&quot;binary&quot; or &quot;ascii&quot;</source>
        <translation>&amp;quot;binair&amp;quot; of &amp;quot;ascii&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5091"/>
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>Waarschuwing: gebruik van een niet-vertrouwde daemon op %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5092"/>
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>Het gebruik van een daemon van derden kan schadelijk zijn voor uw veiligheid en privacy</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5095"/>
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>Als u uw eigen SSL gebruikt, wordt uw RPC-verkeer blootgesteld aan monitoring</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5096"/>
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>U wordt ten zeerste aangemoedigd om verbinding te maken met het Salvium-netwerk met behulp van uw eigen daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5097"/>
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>Als u of iemand die u vertrouwt deze daemon beheert, kunt u --trusted-daemon gebruiken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5104"/>
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>Bovendien is een daemon ook minder veilig wanneer deze in bootstrap-modus draait</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5117"/>
        <source>If you are new to Salvium, type &quot;welcome&quot; for a brief overview.</source>
        <translation>Bent u nieuw bij Salvium? Typ dan &amp;#39;welkom&amp;#39; voor een kort overzicht.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5275"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5383"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5434"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477"/>
        <source>Error creating wallet: </source>
        <translation>Fout bij het aanmaken van de portemonnee: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5735"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771"/>
        <source>Failed to query mining status: </source>
        <translation>Het opvragen van de miningstatus is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5754"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5782"/>
        <source>Failed to setup background mining: </source>
        <translation>Het instellen van achtergrondmining is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5758"/>
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>Achtergrondmining ingeschakeld. Bedankt voor uw steun aan het Salvium-netwerk.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5786"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5798"/>
        <source>Background mining not enabled. Run &quot;set setup-background-mining 1&quot; to change.</source>
        <translation>Achtergrondmining niet ingeschakeld. Voer &amp;quot;set setup-background-mining 1&amp;quot; uit om te wijzigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5804"/>
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>Een niet-vertrouwde daemon gebruiken, achtergrondminingcontrole overslaan</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5832"/>
        <source>The daemon is not set up to background mine.</source>
        <translation>De daemon is niet ingesteld om mijn computer op de achtergrond te plaatsen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5839"/>
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>Achtergrondmining niet ingeschakeld. Stel setup-background-mining in op 1 om te wijzigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6220"/>
        <source>NOTE: This transaction is locked, see details with: show_transfer </source>
        <translation>LET OP: Deze transactie is geblokkeerd, zie details met: show_transfer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6339"/>
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>hw_key_images_sync overgeslagen. Voer de opdracht handmatig uit vóór een overdracht.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6567"/>
        <source>Invalid keyword: </source>
        <translation>Ongeldig trefwoord: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6858"/>
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
Invoer %llu/%llu (%s): bedrag=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6951"/>
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>Transactie besteedt meer dan één zeer oude output. Privacy zou beter zijn als ze apart werden verzonden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6952"/>
        <source>Spend them now anyway?</source>
        <translation>Toch maar uitgeven?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7226"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8959"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9724"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10293"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10301"/>
        <source>amount is wrong: </source>
        <translation>bedrag is fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7227"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8959"/>
        <source>expected number from 0 to </source>
        <translation>verwacht getal van 0 tot </translation>
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
        <translation>Transactie geannuleerd.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7365"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>Geen uitvoer gevonden, of daemon is niet gereed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2438"/>
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>In tegenstelling tot Bitcoin blijven uw Salvium-transacties en saldo standaard privé en niet zichtbaar voor de wereld.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439"/>
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>U kunt er echter voor kiezen om deze beschikbaar te stellen aan bepaalde partijen, als u dat wilt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6212"/>
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>OPMERKING: deze transactie maakt gebruik van een gecodeerde betalings-ID: overweeg om in plaats daarvan subadressen te gebruiken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6217"/>
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>WAARSCHUWING: deze transactie gebruikt een ongecodeerde betalings-ID: deze zijn verouderd en worden genegeerd. Gebruik in plaats daarvan subadressen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7398"/>
        <source>Failed to check for backlog: </source>
        <translation>Controleren op achterstand mislukt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7447"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8011"/>
        <source>
Transaction </source>
        <translation>
Transactie </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7454"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8018"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>WAARSCHUWING: De uitvoer van meerdere adressen wordt samen gebruikt, wat mogelijk uw privacy in gevaar kan brengen.
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
        <translation>Ongetekende transactie(s) succesvol naar MMS geschreven</translation>
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
        <translation>Het is niet gelukt om transactie(s) naar bestand te schrijven</translation>
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
        <translation>Ongetekende transactie(s) succesvol naar bestand geschreven: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7547"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8068"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8304"/>
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>Het is niet gelukt om een transactie koud te ondertekenen met een HW-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7700"/>
        <source>No unmixable outputs found</source>
        <translation>Geen niet-mengbare uitgangen gevonden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7713"/>
        <source>Sweeping </source>
        <translation>Vegen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8972"/>
        <source>Failed to parse donation address: </source>
        <translation>Het is niet gelukt om het donatieadres te parseren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8988"/>
        <source>Donating %s %s to %s.</source>
        <translation>%s %s doneren aan %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9137"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>%lu transacties geladen, voor %s, vergoeding %s, %s, %s, met minimale ringmaat %lu, %s. %sIs dit oké?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>direction</source>
        <translation>richting</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>timestamp</source>
        <translation>tijdstempel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>running balance</source>
        <translation>lopende balans</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>hash</source>
        <translation>hasj</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>payment ID</source>
        <translation>Betalings-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>fee</source>
        <translation>tarief</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>destination</source>
        <translation>bestemming</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>index</source>
        <translation>index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>note</source>
        <translation>opmerking</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10265"/>
        <source>CSV exported to </source>
        <translation>CSV geëxporteerd naar </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10452"/>
        <source>Rescan anyway?</source>
        <translation>Toch opnieuw scannen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10463"/>
        <source>Warning: your restore height is higher than wallet restore height: </source>
        <translation>Waarschuwing: uw herstelhoogte is hoger dan de herstelhoogte van uw portemonnee: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10464"/>
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>Toch opnieuw scannen? (J/Ja/N/Nee): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10485"/>
        <source>MMS received new message</source>
        <translation>MMS heeft een nieuw bericht ontvangen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10654"/>
        <source>locked due to inactivity</source>
        <translation>vergrendeld vanwege inactiviteit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11096"/>
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;index&gt;is buiten de grenzen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11386"/>
        <source>Normal</source>
        <translation>Normaal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11387"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12241"/>
        <source>Type: </source>
        <translation>Type: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7020"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11388"/>
        <source>Network type: </source>
        <translation>Netwerktype: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1493"/>
        <source>Multisig info imported. Number of outputs updated: </source>
        <translation>Multisig info geïmporteerd. Aantal outputs bijgewerkt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1843"/>
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>Sleutelafbeelding niet uitgegeven, of uitgegeven met ringmaat 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2429"/>
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>De meeste van deze nodes zijn waarschijnlijk spionnen. Je zou ze niet moeten gebruiken tenzij je verbinding maakt via Tor of I2P</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2435"/>
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>Welkom bij Salvium, de nieuwe en verbeterde privécryptocurrency.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447"/>
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>Welkom bij Salvium en compliant financiële privacy. Voor meer informatie zie https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2567"/>
        <source>invalid index: must be an unsigned integer</source>
        <translation>ongeldige index: moet een ongetekend geheel getal zijn</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572"/>
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt;is buiten de grenzen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2630"/>
        <source>Failed to generate QR code, input too large</source>
        <translation>QR-code kan niet worden gegenereerd, invoer te groot</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3312"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3334"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3372"/>
        <source>Value not specified</source>
        <translation>Waarde niet gespecificeerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3324"/>
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>Waarschuwing: verouderde formaten gebruiken boost serialisatie, wat buffer overflows en crashers met zich meebrengt. Laad alleen verouderde formaten van bronnen die u vertrouwt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3392"/>
        <source>Important commands:</source>
        <translation>Belangrijke opdrachten:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394"/>
        <source>&quot;welcome&quot; - Show welcome message.</source>
        <translation>&amp;quot;welkom&amp;quot; - Toon welkomstbericht.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <source>&quot;help all&quot; - Show the list of all available commands.</source>
        <translation>&amp;quot;help all&amp;quot; - Toont de lijst met alle beschikbare opdrachten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3396"/>
        <source>&quot;help &lt;command&gt;&quot; - Show a command&apos;s documentation.</source>
        <translation>&amp;quot;hulp&lt;command&gt; &amp;quot; - Toon de documentatie van een opdracht.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3397"/>
        <source>&quot;apropos &lt;keyword&gt;&quot; - Show commands related to a keyword.</source>
        <translation>&amp;quot;ter zake&lt;keyword&gt; &amp;quot; - Toon opdrachten die gerelateerd zijn aan een trefwoord.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3399"/>
        <source>&quot;wallet_info&quot; - Show wallet main address and other info.</source>
        <translation>&amp;quot;wallet_info&amp;quot; - Toont het hoofdadres van de portemonnee en andere informatie.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3400"/>
        <source>&quot;balance&quot; - Show balance.</source>
        <translation>&amp;quot;saldo&amp;quot; - Toon saldo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3401"/>
        <source>&quot;address all&quot; - Show all addresses.</source>
        <translation>&amp;quot;adres alles&amp;quot; - Toon alle adressen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402"/>
        <source>&quot;address new&quot; - Create new subaddress.</source>
        <translation>&amp;quot;address new&amp;quot; - Nieuw subadres maken.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3403"/>
        <source>&quot;transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]&quot; - Send SAL to an address.</source>
        <translation>&amp;quot;overdracht&lt;address&gt;&lt;amount&gt; [&lt;asset_type&gt; ]&amp;quot; - Stuur SAL naar een adres.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3404"/>
        <source>&quot;return_payment &lt;tx_hash&gt;&quot; - Return a previously-received amount to sender.</source>
        <translation>&amp;quot;retour_betaling&lt;tx_hash&gt; &amp;quot; - Een eerder ontvangen bedrag terugsturen naar de afzender.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3405"/>
        <source>&quot;burn &lt;amount&gt; &lt;asset_type&gt;&quot; - destroy coins forever.</source>
        <translation>&amp;quot;brandwond&lt;amount&gt;&lt;asset_type&gt; &amp;quot;- munten voorgoed vernietigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406"/>
        <source>&quot;convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]&quot; - convert between coin types.</source>
        <translation>&amp;quot;overzetten&lt;amount&gt;&lt;source_asset&gt;&lt;dest_asset&gt; [&lt;slippage_limit&gt; ]&amp;quot; - converteren tussen muntsoorten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3407"/>
        <source>&quot;stake &lt;amount&gt;&quot; - stake SAL for 30 days to earn yield.</source>
        <translation>&amp;quot;inzet&lt;amount&gt; &amp;quot;- SAL 30 dagen inzetten om rendement te verdienen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3409"/>
        <source>&quot;price_info&quot; - Display current pricing information for supported assets.</source>
        <translation>&amp;quot;price_info&amp;quot; - Geeft actuele prijsinformatie weer voor ondersteunde activa.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410"/>
        <source>&quot;supply_info&quot; - Display circulating supply information.</source>
        <translation>&amp;quot;supply_info&amp;quot; - Geeft circulerende leveringsinformatie weer.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3411"/>
        <source>&quot;yield_info&quot; - Display current stats on Salvium staking / yield.</source>
        <translation>&amp;quot;yield_info&amp;quot; - Geeft de huidige statistieken over Salvium staking / yield weer.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3412"/>
        <source>&quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&quot; - Show transactions.</source>
        <translation>&amp;quot;show_transfers [in|uit|in behandeling|mislukt|pool|coinbase|verbrand|gestaked|opbrengst]&amp;quot; - Transacties weergeven.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3413"/>
        <source>&quot;sweep_all &lt;address&gt;&quot; - Send whole balance to another wallet.</source>
        <translation>&amp;quot;alles_opvegen&lt;address&gt; &amp;quot; - Stuur het hele saldo naar een andere wallet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414"/>
        <source>&quot;seed&quot; - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>&amp;quot;seed&amp;quot; - Toon 25 geheime woorden die gebruikt kunnen worden om deze wallet te herstellen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3415"/>
        <source>&quot;refresh&quot; - Synchronize wallet with the Salvium network.</source>
        <translation>&amp;quot;refresh&amp;quot; - Synchroniseer de portemonnee met het Salvium-netwerk.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3416"/>
        <source>&quot;status&quot; - Check current status of wallet.</source>
        <translation>&amp;quot;status&amp;quot; - Controleer de huidige status van de portemonnee.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3417"/>
        <source>&quot;version&quot; - Check software version.</source>
        <translation>&amp;quot;versie&amp;quot; - Controleer de softwareversie.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418"/>
        <source>&quot;exit&quot; - Exit wallet.</source>
        <translation>&amp;quot;exit&amp;quot; - Portemonnee verlaten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3420"/>
        <source>&quot;donate &lt;amount&gt;&quot; - Donate SAL to the development team.</source>
        <translation>&amp;quot;doneren&lt;amount&gt; &amp;quot; - Doneer SAL aan het ontwikkelingsteam.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3450"/>
        <source>No commands found mentioning keyword(s)</source>
        <translation>Geen opdrachten gevonden die trefwoord(en) vermelden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3481"/>
        <source>Invalid txid specified: </source>
        <translation>Ongeldige txid opgegeven: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3488"/>
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>WAARSCHUWING: deze bewerking kan de txids aan het externe knooppunt onthullen en uw privacy aantasten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3490"/>
        <source>You have canceled the operation</source>
        <translation>U heeft de bewerking geannuleerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3535"/>
        <source>Set another daemon to connect to. If it&apos;s not yours, it&apos;ll probably spy on you.</source>
        <translation>Stel een andere daemon in om verbinding mee te maken. Als het niet de jouwe is, zal het je waarschijnlijk bespioneren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561"/>
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included). The &quot;subtractfeefrom=&quot; list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: &quot;transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2&quot;. Let&apos;s say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use &quot;subtractfeefrom=all&quot; to spread the fee across all destinations.</source>
        <translation>Overdracht&lt;amount&gt; van&lt;asset_type&gt; naar&lt;address&gt; . Als de parameter &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; is opgegeven, gebruikt de wallet outputs die zijn ontvangen door adressen van die indices. Als dit wordt weggelaten, kiest de wallet willekeurig de adresindices die moeten worden gebruikt. In ieder geval probeert de wallet outputs van meerdere adressen niet te combineren.&lt;priority&gt; is de prioriteit van de transactie. Hoe hoger de prioriteit, hoe hoger de transactiekosten. Geldige waarden in volgorde van prioriteit (van laag naar hoog) zijn: onbelangrijk, normaal, verhoogd, prioriteit. Als deze waarde wordt weggelaten, wordt de standaardwaarde (zie de opdracht &amp;quot;prioriteit instellen&amp;quot;) gebruikt.&lt;ring_size&gt; is het aantal invoergegevens dat moet worden opgenomen voor ontraceerbaarheid. Meerdere betalingen kunnen in één keer worden gedaan door URI_2 of&lt;address_2&gt;&lt;amount_2&gt; etcetera (vóór de betalings-ID, als deze is opgenomen). Met de lijst &amp;quot;subtractfeefrom=&amp;quot; kunt u kiezen van welke bestemmingen u de tx-kosten wilt financieren in plaats van de wisselgelduitvoer. De kosten worden evenredig verdeeld over de gekozen bestemmingen. Om bijvoorbeeld 3 overschrijvingen te doen waarbij de kosten van de eerste en derde bestemming worden genomen, kunt u het volgende doen: &amp;quot;transfer&lt;addr1&gt; 3&lt;addr2&gt; 0,5&lt;addr3&gt; 1 subtractfeefrom=0,2&amp;quot;. Stel dat de tx-vergoeding 0,1 is. Het saldo zou met precies 4,5 SAL dalen inclusief vergoedingen, en addr1 en addr3 zouden respectievelijk 2,925 en 0,975 SAL ontvangen. Gebruik &amp;quot;subtractfeefrom=all&amp;quot; om de vergoeding over alle bestemmingen te verdelen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3569"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>Stuur al het ontgrendelde saldo naar een adres en blokkeer het voor&lt;lockblocks&gt; (max. 1000000). Als de parameter &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; of &amp;quot;index=all&amp;quot; is opgegeven, veegt de wallet de uitvoer die respectievelijk door die of alle adresindices is ontvangen. Als dit wordt weggelaten, kiest de wallet willekeurig een adresindex die moet worden gebruikt.&lt;priority&gt; is de prioriteit van de sweep. Hoe hoger de prioriteit, hoe hoger de transactiekosten. Geldige waarden in prioriteitsvolgorde (van laag naar hoog) zijn: onbelangrijk, normaal, verhoogd, prioriteit. Als dit wordt weggelaten, wordt de standaardwaarde (zie de opdracht &amp;quot;set priority&amp;quot;) gebruikt.&lt;ring_size&gt; is het aantal invoergegevens dat moet worden opgenomen voor niet-traceerbaarheid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3575"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Stuur alle ontgrendelde saldi naar een adres. Als de parameter &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; of &amp;quot;index=all&amp;quot; is opgegeven, veegt de wallet de uitvoer die respectievelijk door die of alle adresindices is ontvangen. Als dit wordt weggelaten, kiest de wallet willekeurig een adresindex die moet worden gebruikt. Als de parameter &amp;quot;outputs=&lt;N&gt; &amp;quot; is opgegeven en N &amp;gt; 0, dan splitst de wallet de transactie in N even uitvoerwaarden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3578"/>
        <source>Send all unlocked balance from a given account to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Stuur alle ontgrendelde saldi van een bepaalde rekening naar een adres. Als de parameter &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; of &amp;quot;index=all&amp;quot; is opgegeven, veegt de wallet de uitvoer die respectievelijk door die of alle adresindices is ontvangen. Als dit wordt weggelaten, kiest de wallet willekeurig een adresindex die moet worden gebruikt. Als de parameter &amp;quot;outputs=&lt;N&gt; &amp;quot; is opgegeven en N &amp;gt; 0, dan splitst de wallet de transactie in N even uitvoerwaarden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3590"/>
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>Retourneert de in TX ontvangen betaling(en)&lt;tx_hash&gt; naar de oorspronkelijke afzender.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3594"/>
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>vernietigt (verbrandt) permanent&lt;amount&gt; van&lt;asset_type&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3598"/>
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>Bekeerlingen&lt;amount&gt;&lt;source_asset&gt; naar binnen&lt;dest_asset&gt; , met optionele&lt;slippage_limit&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602"/>
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>Sloten&lt;amount&gt; van SAL als belang om rendement te behalen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618"/>
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>Geeft de statistieken weer voor rendementen over de laatste&lt;NN&gt; blokken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3622"/>
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>Doneren&lt;amount&gt; aan het ontwikkelingsteam (donate.salvium.io).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3648"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;mnew&quot; is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If &quot;one-off&quot; is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>Als er geen argumenten zijn opgegeven of&lt;index&gt; is opgegeven, toont de wallet het standaardadres of het opgegeven adres. Als &amp;quot;all&amp;quot; is opgegeven, toont de wallet alle bestaande adressen in het momenteel geselecteerde account. Als &amp;quot;new&amp;quot; is opgegeven, creëert de wallet een nieuw adres met de opgegeven labeltekst (die leeg kan zijn). Als &amp;quot;mnew&amp;quot; is opgegeven, creëert de wallet zoveel nieuwe adressen als opgegeven door het argument; het standaardlabel wordt ingesteld voor de nieuwe adressen. Als &amp;quot;label&amp;quot; is opgegeven, stelt de wallet het label in van het adres dat is opgegeven door&lt;index&gt; naar de opgegeven labeltekst. Als &amp;quot;one-off&amp;quot; is opgegeven, wordt het adres voor de opgegeven index gegenereerd en weergegeven, en onthouden door de wallet</translation>
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
        <translation>Toon de inkomende/uitgaande overschrijvingen binnen een optioneel hoogtebereik. Uitvoerformaat: In of Coinbase: Bloknummer, &amp;quot;blok&amp;quot;|&amp;quot;in&amp;quot;, Tijd, Bedrag, Activatype, Transactiehash, Betalings-ID, Subadresindex, &amp;quot;-&amp;quot;, Opmerking Uit: Bloknummer, &amp;quot;uit&amp;quot;, Tijd, Bedrag*, Activatype, Transactiehash, Betalings-ID, Kosten, Bestemmingen, Invoeradressen**, &amp;quot;-&amp;quot;, Opmerking Pool: &amp;quot;pool&amp;quot;, &amp;quot;in&amp;quot;, Tijd, Bedrag, Activatype, Transactiehash, Betalings-ID, Subadresindex, &amp;quot;-&amp;quot;, Opmerking, Dubbele uitgaven Opmerking in behandeling of mislukt: &amp;quot;mislukt&amp;quot;|&amp;quot;in behandeling&amp;quot;, &amp;quot;uit&amp;quot;, Tijd, Bedrag*, Transactiehash, Betalings-ID, Kosten, Invoeradressen**, &amp;quot;-&amp;quot;, Opmerking Staked of Burnt: Bloknummer, &amp;quot;uit&amp;quot;, Tijd, Bedrag*, Activatype, Transactiehash, Betalings-ID, Kosten, Invoeradressen**, &amp;quot;-&amp;quot;, Opmerking * Exclusief wisselgeld en kosten. ** Set adresindexen gebruikt als invoer in deze overschrijving.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3817"/>
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [in|uit|alle|in behandeling|mislukt|pool|coinbase|verbrand|gestaked|opbrengst] [index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [uitvoer=&lt;filepath&gt; ] [optie=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3852"/>
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>Onderteken de inhoud van een bestand met het opgegeven subadres (of het hoofdadres als dit niet is opgegeven)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3927"/>
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>Interface met het MMS (Multisig Messaging System)&lt;subcommand&gt; is een van: init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum Krijg hulp over een subopdracht met: help mms&lt;subcommand&gt; , of help mms&lt;subcommand&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4002"/>
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>Krijg een controlesom waarmee ondertekenaars eenvoudig kunnen controleren op identieke MMS-configuratie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4088"/>
        <source>Show address as QR code</source>
        <translation>Adres weergeven als QR-code</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4096"/>
        <source>Search all command descriptions for keyword(s)</source>
        <translation>Zoek in alle opdrachtbeschrijvingen naar trefwoord(en)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4100"/>
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>Scan de transacties die door&lt;txid&gt; (s), deze verwerken en zoeken naar uitkomsten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4216"/>
        <source>sal, millisal, microsal</source>
        <translation>zout, millisaal, microsal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4235"/>
        <source>1 or 0</source>
        <translation>1 of 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4461"/>
        <source>Multisig is disabled.</source>
        <translation>Multisig is uitgeschakeld.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4462"/>
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can&apos;t be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>Multisig is een experimentele functie en kan bugs bevatten. Dingen die fout kunnen gaan zijn: fondsen die naar een multisig wallet worden gestuurd, kunnen helemaal niet worden uitgegeven, kunnen alleen worden uitgegeven met de deelname van een kwaadaardig groepslid, of kunnen worden gestolen door een kwaadaardig groepslid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4464"/>
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>U hebt het herstellen van een multisig-wallet geannuleerd.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5184"/>
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>wallet kon geen verbinding maken met daemon, omdat deze in de offline modus staat</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5186"/>
        <source>wallet failed to connect to daemon, because it is not up to date. </source>
        <translation>De portemonnee kan geen verbinding maken met de daemon, omdat deze niet up-to-date is. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5187"/>
        <source>Please make sure you are running the latest wallet.</source>
        <translation>Zorg ervoor dat u de nieuwste wallet gebruikt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5190"/>
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation>Daemon is niet up-to-date. Controleer of de daemon de nieuwste versie draait of wijzig het daemon-adres met de opdracht &amp;#39;set_daemon&amp;#39;.</translation>
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
        <translation>Uw wallet is gegenereerd! Om te beginnen met synchroniseren met de daemon, gebruikt u de opdracht &amp;quot;refresh&amp;quot;. Gebruik de opdracht &amp;quot;help&amp;quot; om een vereenvoudigde lijst met beschikbare opdrachten te zien. Gebruik de opdracht &amp;quot;help all&amp;quot; om de lijst met alle beschikbare opdrachten te zien. Gebruik &amp;quot;help&lt;command&gt; &amp;quot; om de documentatie van een opdracht te bekijken. Gebruik altijd de opdracht &amp;quot;exit&amp;quot; wanneer u salvium-wallet-cli sluit om de status van uw huidige sessie op te slaan. Anders moet u uw portemonnee mogelijk opnieuw synchroniseren (uw portemonneesleutels lopen in geen geval risico).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5638"/>
        <source>Use the &quot;help&quot; command to see a simplified list of available commands.
</source>
        <translation>Gebruik de opdracht &amp;quot;help&amp;quot; om een vereenvoudigde lijst met beschikbare opdrachten te bekijken.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5639"/>
        <source>Use &quot;help all&quot; to see the list of all available commands.
</source>
        <translation>Gebruik &amp;quot;help all&amp;quot; om de lijst met alle beschikbare opdrachten te bekijken.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5834"/>
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>Als u dit inschakelt, wordt het netwerk dat u gebruikt ondersteund en komt u in aanmerking voor het ontvangen van nieuwe SAL&amp;#39;s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005"/>
        <source>Failed to parse address</source>
        <translation>Het is niet gelukt om het adres te parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020"/>
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got </source>
        <translation>Verwachte vertrouwde, niet-vertrouwde of dit-is-waarschijnlijk-een-spion-knooppunt kreeg </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6029"/>
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>Dit is geen Tor/I2P-adres en ook geen vertrouwde daemon.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6030"/>
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>Gebruik uw eigen vertrouwde knooppunt, maak verbinding via Tor of I2P, of geef aan dat dit waarschijnlijk een spionageknooppunt is en laat u bespioneren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6035"/>
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>Waarschuwing: als u verbinding maakt met een niet-lokale daemon zonder SSL, kunnen passieve tegenstanders u bespioneren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6138"/>
        <source>stake returned </source>
        <translation>inzet teruggegeven </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6144"/>
        <source>yield earned </source>
        <translation>verdiende opbrengst </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6161"/>
        <source>burnt </source>
        <translation>verbrand </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6167"/>
        <source>converting </source>
        <translation>omzetten </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6173"/>
        <source>staked </source>
        <translation>ingezet </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>Apparaat vraagt om wachtwoordzin. Wilt u de wachtwoordzin op apparaat (Y) (of op de host (N)) invoeren?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322"/>
        <source>The wallet&apos;s refresh-from-block-height setting is higher than the daemon&apos;s height: this may mean your wallet will skip over transactions</source>
        <translation>De refresh-from-block-height-instelling van de wallet is hoger dan de hoogte van de daemon: dit kan betekenen dat uw wallet transacties overslaat</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6472"/>
        <source> (Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation> (Bij sommige eigen uitvoer ontbreken de sleutelafbeeldingen - export_outputs, import_outputs, export_key_images en import_key_images zijn nodig)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6489"/>
        <source>Asset: </source>
        <translation>Bezit: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6489"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10855"/>
        <source>, balance: </source>
        <translation>, evenwicht: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6815"/>
        <source>failed to connect to daemon</source>
        <translation>kon geen verbinding maken met daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6918"/>
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>, wat de anonimiteit van ringhandtekeningen kan doorbreken. Zorg ervoor dat dit opzettelijk is!
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6976"/>
        <source>I locked your Salvium wallet to protect you while you were away
see &quot;help set&quot; to configure/disable</source>
        <translation>Ik heb je Salvium-portemonnee vergrendeld om je te beschermen terwijl je weg was. Zie &amp;#39;help instellen&amp;#39; om te configureren/uitschakelen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7006"/>
        <source>Locked due to inactivity.</source>
        <translation>Vergrendeld vanwege inactiviteit.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7010"/>
        <source>The wallet password is required to unlock the console.</source>
        <translation>Het wachtwoord van de portemonnee is vereist om de console te ontgrendelen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7021"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11389"/>
        <source>Testnet</source>
        <translation>Testnet</translation>
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
        <translation>Hoofdnet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7457"/>
        <source>Burning %s %s.  </source>
        <translation>Branden %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7459"/>
        <source>Converting %s %s to %s.  </source>
        <translation>%s %s naar %s converteren.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461"/>
        <source>Staking %s %s for yield accrual.  </source>
        <translation>%s %s inzetten voor opbrengstopbouw.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7465"/>
        <source>Sending %s %s.  </source>
        <translation>%s %s verzenden.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7484"/>
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>. Deze transactie (inclusief %s verandering) wordt ontgrendeld in %llu blokken, ongeveer %s dagen (uitgaande van 2 minuten per blok)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8372"/>
        <source>Invalid account</source>
        <translation>Ongeldig account</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8404"/>
        <source>return_payments are disabled</source>
        <translation>return_payments zijn uitgeschakeld</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8440"/>
        <source>incorrect TX type for txid </source>
        <translation>onjuist TX-type voor txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8446"/>
        <source>invalid return_address_list for txid </source>
        <translation>ongeldige retouradreslijst voor txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8452"/>
        <source>invalid return_address/return_pubkey for txid </source>
        <translation>ongeldige return_address/return_pubkey voor txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8459"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8477"/>
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid </source>
        <translation>sleutelafbeelding is niet beschikbaar (gedeeltelijk / onbekend / verbruikt / bevroren) voor txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8550"/>
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>koude ondertekening van retourzendingen nog niet geïmplementeerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8646"/>
        <source>conversions are disabled until hard fork </source>
        <translation>conversies zijn uitgeschakeld tot een harde vork </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8653"/>
        <source>missing / extraneous argument(s)</source>
        <translation>ontbrekende / vreemde argument(en)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8669"/>
        <source>invalid slippage_limit value : expected 0.0-90.0, got </source>
        <translation>ongeldige slippage_limit-waarde: verwacht 0,0-90,0, gekregen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8680"/>
        <source>invalid argument(s): </source>
        <translation>ongeldige argument(en): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8686"/>
        <source>out of range for slippage limit: </source>
        <translation>buiten bereik voor sliplimiet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8696"/>
        <source>invalid destination asset_type</source>
        <translation>ongeldige bestemming asset_type</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8706"/>
        <source>invalid source asset_type</source>
        <translation>ongeldige bron asset_type</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8715"/>
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>ongeldige conversie - asset_type is ongewijzigd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8743"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8772"/>
        <source>This is a multisig wallet, staking is not currently supported</source>
        <translation>Dit is een multisig wallet, staking wordt momenteel niet ondersteund</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8820"/>
        <source>%s
	SPOT:	%d
	MA:	%d</source>
        <translation>%s SPOT: %d MA: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8844"/>
        <source>SUPPLY INFO</source>
        <translation>LEVERINGSINFORMATIE</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8855"/>
        <source>	%6s : %21.8d</source>
        <translation>	%6s: %21,8d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8892"/>
        <source>
STAKED FUNDS:</source>
        <translation>
INGESCHAKELDE FONDSEN:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8986"/>
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>Doneer %s %s aan The Salvium Team (donate.salvium.io of %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9346"/>
        <source>Last argument is an address, but not a subaddress</source>
        <translation>Het laatste argument is een adres, maar geen subadres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9400"/>
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>Het kan zijn dat de overdracht naar een subadres is gegaan. Als dit het geval is, geef dan het subadres als laatste door</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10099"/>
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>gebruik: show_transfers [in|uit|alle|in behandeling|mislukt|pool|coinbase|verbrand|gestaked|opbrengst] [index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10158"/>
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>gebruik: export_transfers [in|uit|alle|in behandeling|mislukt|pool|coinbase|verbrand|gestaked|opbrengst] [index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [uitvoer=&lt;path&gt; ] [optie=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>tx key</source>
        <translation>tx-sleutel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10854"/>
        <source>
Grand total:
  Asset: </source>
        <translation>
Totaalbedrag: Activa: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Asset</source>
        <translation>Bezit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10996"/>
        <source>Expected exactly one argument for the amount of new addresses</source>
        <translation>Verwacht precies één argument voor het aantal nieuwe adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11002"/>
        <source>failed to parse the amount of new addresses: </source>
        <translation>kon het aantal nieuwe adressen niet parseren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11007"/>
        <source>the amount of new addresses must be lower or equal to </source>
        <translation>het aantal nieuwe adressen moet lager of gelijk zijn aan </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11023"/>
        <source>Expected exactly two arguments for index</source>
        <translation>Verwacht precies twee argumenten voor index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11033"/>
        <source>Address at %u %u: %s</source>
        <translation>Adres op %u %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11167"/>
        <source>Standard address: %s, payment ID: %s</source>
        <translation>Standaardadres: %s, betalings-ID: %s</translation>
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
        <translation>Ongeldige subadresindexindeling en geen handtekeningtype: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12068"/>
        <source> (Y/Yes/N/No): </source>
        <translation> (J/Ja/N/Nee): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12074"/>
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>WAARSCHUWING: Het gebruik van MMS-autoconfiguratiemechanismen is niet betrouwbaar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12075"/>
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers&apos; info</source>
        <translation>Een kwaadaardige auto-configuratiemanager kan u informatie over uw eigen wallets sturen in plaats van de informatie van andere ondertekenaars</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12076"/>
        <source>If in doubt do not use auto-config or at least compare configs using the &quot;mms config_checksum&quot; command</source>
        <translation>Als u twijfelt, gebruik dan geen auto-config of vergelijk de configuraties op zijn minst met behulp van de opdracht &amp;quot;mms config_checksum&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12103"/>
        <source>Choose processing:</source>
        <translation>Kies verwerking:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12112"/>
        <source>Sign tx</source>
        <translation>Teken tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12120"/>
        <source>Send the tx for submission to </source>
        <translation>Stuur de tx voor indiening naar </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12124"/>
        <source>Send the tx for signing to </source>
        <translation>Stuur de tx voor ondertekening naar </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12131"/>
        <source>Submit tx</source>
        <translation>Verzenden tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12134"/>
        <source>unknown</source>
        <translation>onbekend</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12140"/>
        <source>Choice: </source>
        <translation>Keuze: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12152"/>
        <source>Wrong choice</source>
        <translation>Verkeerde keuze</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12159"/>
        <source>Id</source>
        <translation>Identiteitsbewijs</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12159"/>
        <source>I/O</source>
        <translation>IO</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12159"/>
        <source>Authorized Signer</source>
        <translation>Geautoriseerde ondertekenaar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Message Type</source>
        <translation>Berichttype</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Height</source>
        <translation>Hoogte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Message State</source>
        <translation>Berichtstatus</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Since</source>
        <translation>Sinds</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12177"/>
        <source> ago</source>
        <translation> geleden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12183"/>
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12183"/>
        <source>Transport Address</source>
        <translation>Transportadres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12184"/>
        <source>Auto-Config Token</source>
        <translation>Auto-configuratietoken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12184"/>
        <source>Salvium Address</source>
        <translation>Salvium-adres</translation>
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
        <translation>Bericht </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12240"/>
        <source>In/out: </source>
        <translation>In/uit: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12242"/>
        <source>State: </source>
        <translation>Staat: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12242"/>
        <source>%s since %s, %s ago</source>
        <translation>%s sinds %s, %s geleden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12246"/>
        <source>Sent: Never</source>
        <translation>Verzonden: Nooit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12250"/>
        <source>Sent: %s, %s ago</source>
        <translation>Verzonden: %s, %s geleden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12253"/>
        <source>Authorized signer: </source>
        <translation>Bevoegde ondertekenaar: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12254"/>
        <source>Content size: </source>
        <translation>Inhoudsgrootte: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12254"/>
        <source> bytes</source>
        <translation> bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12255"/>
        <source>Content: </source>
        <translation>Inhoud: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12255"/>
        <source>(binary data)</source>
        <translation>(binaire gegevens)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12285"/>
        <source>Send these messages now?</source>
        <translation>Deze berichten nu versturen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12295"/>
        <source>Queued for sending.</source>
        <translation>In de wachtrij voor verzending.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12315"/>
        <source>Invalid message id</source>
        <translation>Ongeldige bericht-id</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12324"/>
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>gebruik: mms init&lt;required_signers&gt; /&lt;authorized_signers&gt;&lt;own_label&gt;&lt;own_transport_address&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12330"/>
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>De MMS is al geïnitialiseerd. Opnieuw initialiseren door alle ondertekenaarsinfo en berichten te verwijderen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12345"/>
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>Fout in het aantal vereiste ondertekenaars en/of geautoriseerde ondertekenaars</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12362"/>
        <source>The MMS is not active.</source>
        <translation>De MMS is niet actief.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12385"/>
        <source>Invalid signer number </source>
        <translation>Ongeldig ondertekenaarsnummer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12390"/>
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>mms ondertekenaar [&lt;number&gt; &lt;label&gt;[&lt;/label&gt;&lt;transport_address&gt; &lt;label&gt;[&lt;/label&gt;&lt;salvium_address&gt; &lt;label&gt;]]]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12409"/>
        <source>Invalid Salvium address</source>
        <translation>Ongeldig Salvium-adres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12416"/>
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>De portemonnee-status staat het niet meer toe om Salvium-adressen te wijzigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12428"/>
        <source>Usage: mms list</source>
        <translation>Gebruik: mms lijst</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12441"/>
        <source>Usage: mms next [sync]</source>
        <translation>Gebruik: mms volgende [sync]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12466"/>
        <source>No next step: </source>
        <translation>Geen volgende stap: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12476"/>
        <source>prepare_multisig</source>
        <translation>multisig_voorbereiden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12482"/>
        <source>make_multisig</source>
        <translation>maak_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12497"/>
        <source>exchange_multisig_keys</source>
        <translation>uitwisseling_multisig_sleutels</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12513"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12637"/>
        <source>export_multisig_info</source>
        <translation>export_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12522"/>
        <source>import_multisig_info</source>
        <translation>importeer_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12535"/>
        <source>sign_multisig</source>
        <translation>teken_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12545"/>
        <source>submit_multisig</source>
        <translation>indienen_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12555"/>
        <source>Send tx</source>
        <translation>Stuur tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12566"/>
        <source>Process signer config</source>
        <translation>Proces ondertekenaar configuratie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12578"/>
        <source>Replace current signer config with the one displayed above?</source>
        <translation>Huidige ondertekenaarsconfiguratie vervangen door de hierboven weergegeven configuratie?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12584"/>
        <source>You can use the &quot;mms delete&quot; command to delete any unwanted message</source>
        <translation>U kunt de opdracht &amp;quot;mms delete&amp;quot; gebruiken om ongewenste berichten te verwijderen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12597"/>
        <source>Process auto config data</source>
        <translation>Verwerk autoconfiguratiegegevens</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12611"/>
        <source>Nothing ready to process</source>
        <translation>Niets klaar om te verwerken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12630"/>
        <source>Usage: mms sync</source>
        <translation>Gebruik: mms-synchronisatie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12654"/>
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>Gebruik: mms verwijderen (&lt;message_id&gt; | alle)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12661"/>
        <source>Delete all messages?</source>
        <translation>Alle berichten verwijderen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12687"/>
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>Gebruik: mms verzenden [&lt;message_id&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12704"/>
        <source>Usage: mms receive</source>
        <translation>Gebruik: mms ontvangen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12721"/>
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>Gebruik: mms-export&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12732"/>
        <source>Message content saved to: </source>
        <translation>Berichtinhoud opgeslagen in: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12736"/>
        <source>Failed to to save message content</source>
        <translation>Het is niet gelukt om de inhoud van het bericht op te slaan</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12760"/>
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>Gebruik: mms-notitie [&lt;text&gt; &lt;label&gt;]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12767"/>
        <source>No signer found with label </source>
        <translation>Geen ondertekenaar gevonden met label </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12789"/>
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>Gebruik: mms tonen&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12807"/>
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>Gebruik: mms ingesteld&lt;option_name&gt; [&lt;option_value&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12824"/>
        <source>Wrong option value</source>
        <translation>Verkeerde optiewaarde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12829"/>
        <source>Auto-send is on</source>
        <translation>Automatisch verzenden is ingeschakeld</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12829"/>
        <source>Auto-send is off</source>
        <translation>Automatisch verzenden is uitgeschakeld</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12834"/>
        <source>Unknown option</source>
        <translation>Onbekende optie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12842"/>
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>Gebruik: help mms [&lt;subcommand&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12858"/>
        <source>Usage: mms send_signer_config</source>
        <translation>Gebruik: mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12864"/>
        <source>Signer config not yet complete</source>
        <translation>Ondertekenaarconfiguratie nog niet voltooid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12879"/>
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>Gebruik: mms start_auto_config [ &lt;label&gt;...]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12884"/>
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>Er zijn ondertekenaars zonder een labelset. Vul labels in vóór auto-config of specificeer ze hier als parameters.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12890"/>
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>Auto-config is al actief. Annuleren en opnieuw opstarten?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12914"/>
        <source>Usage: mms config_checksum</source>
        <translation>Gebruik: mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12926"/>
        <source>Usage: mms stop_auto_config</source>
        <translation>Gebruik: mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12929"/>
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>Alle auto-config-tokens verwijderen en auto-config stoppen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12942"/>
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>Gebruik: mms auto_config&lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12949"/>
        <source>Invalid auto-config token</source>
        <translation>Ongeldige auto-configuratietoken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12959"/>
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>Auto-config is al actief. Annuleren en opnieuw opstarten?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12978"/>
        <source>MMS not available in this wallet</source>
        <translation>MMS niet beschikbaar in deze wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13002"/>
        <source>The MMS is not active. Activate using the &quot;mms init&quot; command</source>
        <translation>De MMS is niet actief. Activeer met de opdracht &amp;quot;mms init&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13083"/>
        <source>Invalid MMS subcommand</source>
        <translation>Ongeldige MMS-subopdracht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13088"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13092"/>
        <source>Error in MMS command: </source>
        <translation>Fout in MMS-opdracht: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11409"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>portemonnee is alleen voor horloges en kan niet ondertekenen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11414"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>Deze portemonnee is multisig en kan niet ondertekenen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11488"/>
        <source>Bad signature from </source>
        <translation>Slechte handtekening van </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11492"/>
        <source>Good signature from </source>
        <translation>Goede handtekening van </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11509"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>portemonnee is alleen voor horloges en kan geen sleutelafbeeldingen exporteren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11547"/>
        <source>Signed key images exported to </source>
        <translation>Gesigneerde sleutelafbeeldingen geëxporteerd naar </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11593"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11639"/>
        <source>command only supported by HW wallet</source>
        <translation>opdracht alleen ondersteund door HW-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11598"/>
        <source>hw wallet does not support cold KI sync</source>
        <translation>hw wallet ondersteunt geen koude KI-synchronisatie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11610"/>
        <source>Please confirm the key image sync on the device</source>
        <translation>Bevestig de synchronisatie van de sleutelafbeelding op het apparaat</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11616"/>
        <source>Key images synchronized to height </source>
        <translation>Sleutelbeelden gesynchroniseerd met hoogte </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11619"/>
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>Niet-vertrouwde daemon uitvoeren, kan niet bepalen welke transactie-uitvoer is uitgegeven. Gebruik een vertrouwde daemon met --trusted-daemon en voer rescan_spent uit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11622"/>
        <source> spent, </source>
        <translation> besteed, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11622"/>
        <source> unspent</source>
        <translation> niet besteed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626"/>
        <source>Failed to import key images</source>
        <translation>Het importeren van sleutelafbeeldingen is mislukt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11631"/>
        <source>Failed to import key images: </source>
        <translation>Het importeren van sleutelafbeeldingen is mislukt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11648"/>
        <source>Failed to reconnect device</source>
        <translation>Apparaat opnieuw verbinden is mislukt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11653"/>
        <source>Failed to reconnect device: </source>
        <translation>Het apparaat kon niet opnieuw worden verbonden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11706"/>
        <source>Outputs exported to </source>
        <translation>Uitvoer geëxporteerd naar </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11862"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>Dubbele uitgave gezien op het netwerk: deze transactie wordt mogelijk wel of niet gemined</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11897"/>
        <source>Transaction ID not found</source>
        <translation>Transactie-ID niet gevonden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11932"/>
        <source>Transaction successfully saved to </source>
        <translation>Transactie succesvol opgeslagen in </translation>
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
        <translation>Transactie kon niet worden opgeslagen in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="430"/>
        <source>true</source>
        <translation>WAAR</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="483"/>
        <source>failed to parse refresh type</source>
        <translation>kon het vernieuwingstype niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Voer een optionele wachtwoordzin voor de seed-offset in, leeg om de ruwe seed te zien</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4546"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Voer de wachtwoordzin voor de seed-offset in, leeg als er geen wachtwoord is</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>U kunt het bestand &amp;quot;%s&amp;quot; verwijderen en het opnieuw proberen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9171"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Dit is een multisig-wallet, deze kan alleen ondertekenen met sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9176"/>
        <source>This is a watch only wallet</source>
        <translation>Dit is een portemonnee voor alleen horloges</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9209"/>
        <source>Failed to sign transaction</source>
        <translation>Transactie kon niet worden ondertekend</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9215"/>
        <source>Failed to sign transaction: </source>
        <translation>Transactie kon niet worden ondertekend: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9236"/>
        <source>Transaction raw hex data exported to </source>
        <translation>Transactie ruwe hex-gegevens geëxporteerd naar </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9257"/>
        <source>Failed to load transaction from file</source>
        <translation>Transactie uit bestand laden mislukt</translation>
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
        <translation>kon txid niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9317"/>
        <source>Tx key: </source>
        <translation>Tx-sleutel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9322"/>
        <source>no tx keys found for this txid</source>
        <translation>geen tx-sleutels gevonden voor deze txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9367"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9378"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9385"/>
        <source>failed to parse tx_key</source>
        <translation>kon tx_key niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9394"/>
        <source>Tx key successfully stored.</source>
        <translation>Tx-sleutel succesvol opgeslagen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9398"/>
        <source>Failed to store tx key: </source>
        <translation>Het is niet gelukt om de tx-sleutel op te slaan: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9436"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9649"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9739"/>
        <source>signature file saved to: </source>
        <translation>handtekeningbestand opgeslagen in: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9438"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9651"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9741"/>
        <source>failed to save signature file</source>
        <translation>kon handtekeningbestand niet opslaan</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9442"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9530"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9608"/>
        <source>error: </source>
        <translation>fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9475"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9484"/>
        <source>failed to parse tx key</source>
        <translation>kon de tx-sleutel niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9506"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9579"/>
        <source>received</source>
        <translation>ontvangen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9506"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9579"/>
        <source>in txid</source>
        <translation>in txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9509"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9582"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>WAARSCHUWING: deze transactie is nog niet opgenomen in de blockchain!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9519"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9592"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>WAARSCHUWING: het aantal bevestigingen kon niet worden bepaald!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9525"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9598"/>
        <source>received nothing in txid</source>
        <translation>niets ontvangen in txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9565"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9680"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9775"/>
        <source>failed to load signature file</source>
        <translation>kon handtekeningbestand niet laden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9687"/>
        <source>Good signature</source>
        <translation>Goede handtekening</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9603"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9689"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9790"/>
        <source>Bad signature</source>
        <translation>Slechte handtekening</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9628"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>portemonnee is alleen voor horloges en kan geen bewijs genereren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9713"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>Het reservebewijs kan alleen worden gegenereerd door een volle portemonnee</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9768"/>
        <source>Address must not be a subaddress</source>
        <translation>Adres mag geen subadres zijn</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9895"/>
        <source>bad min_height parameter:</source>
        <translation>slechte min_height parameter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9907"/>
        <source>bad max_height parameter:</source>
        <translation>slechte max_height parameter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9929"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>block</source>
        <translation>blok</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9929"/>
        <source>in</source>
        <translation>in</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10020"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[Dubbele uitgave gezien op het netwerk: deze transactie wordt mogelijk wel of niet gemined] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10308"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt;moet kleiner zijn dan&lt;max_amount&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10334"/>
        <source>There is no unspent output in the specified address</source>
        <translation>Er is geen niet-besteedde uitvoer in het opgegeven adres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10340"/>
        <source>
Amount: </source>
        <translation>
Hoeveelheid: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10340"/>
        <source>, number of keys: </source>
        <translation>, aantal toetsen: </translation>
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
Minimale blokhoogte: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10351"/>
        <source>
Max block height: </source>
        <translation>
Maximale blokhoogte: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10352"/>
        <source>
Min amount found: </source>
        <translation>
Min. gevonden bedrag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10353"/>
        <source>
Max amount found: </source>
        <translation>
Maximaal gevonden bedrag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10354"/>
        <source>
Total count: </source>
        <translation>
Totaal aantal: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10394"/>
        <source>
Bin size: </source>
        <translation>
Haal het voor je: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10395"/>
        <source>
Outputs per *: </source>
        <translation>
Uitvoer per *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10397"/>
        <source>count
  ^
</source>
        <translation>tellen ^
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
        <translation>+--&amp;gt; blokhoogte
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
        <translation>Let op: hierdoor gaat alle informatie verloren die niet uit de blockchain kan worden hersteld.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10451"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Dit omvat bestemmingsadressen, geheime tx-sleutels, tx-notities, enz.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9786"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Goede handtekening -- totaal: %s, uitgegeven: %s, niet uitgegeven: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2187"/>
        <source>First line is not an amount</source>
        <translation>De eerste regel is geen bedrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2201"/>
        <source>Invalid output: </source>
        <translation>Ongeldige uitvoer: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226"/>
        <source>Invalid output key, and file doesn&apos;t exist</source>
        <translation>Ongeldige uitvoersleutel en bestand bestaat niet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2276"/>
        <source>Invalid output</source>
        <translation>Ongeldige uitvoer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2787"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>ongeldig argument: moet 0/nooit, 1/actie of 2/encrypt/decrypt zijn</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3565"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation>Overdracht&lt;amount&gt; naar&lt;address&gt; en vergrendel het voor&lt;lockblocks&gt; (max. 1000000). Als de parameter &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; is opgegeven, gebruikt de wallet outputs die zijn ontvangen door adressen van die indices. Als dit wordt weggelaten, kiest de wallet willekeurig de adresindices die moeten worden gebruikt. In ieder geval probeert de wallet outputs van meerdere adressen niet te combineren.&lt;priority&gt; is de prioriteit van de transactie. Hoe hoger de prioriteit, hoe hoger de transactiekosten. Geldige waarden in volgorde van prioriteit (van laag naar hoog) zijn: onbelangrijk, normaal, verhoogd, prioriteit. Als deze waarde wordt weggelaten, wordt de standaardwaarde (zie de opdracht &amp;quot;prioriteit instellen&amp;quot;) gebruikt.&lt;ring_size&gt; is het aantal invoergegevens dat moet worden opgenomen voor ontraceerbaarheid. Meerdere betalingen kunnen in één keer worden gedaan door URI_2 of&lt;address_2&gt;&lt;amount_2&gt; enzovoort (vóór de betalings-ID, indien deze is opgenomen)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6263"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Wachtwoord vereist (%s) - gebruik de refresh-opdracht</translation>
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
        <translation>Daemon vraagt betaling op diff %llu, met %f credits/hash%s. Voer start_mining_for_rpc uit om te beginnen met minen om te betalen voor RPC-toegang, of gebruik een andere daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10638"/>
        <source>Error mining to daemon: </source>
        <translation>Fout bij het minen naar daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10644"/>
        <source>Failed to start mining for RPC payment</source>
        <translation>Het is niet gelukt om te beginnen met minen voor RPC-betaling</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10656"/>
        <source>wallet</source>
        <translation>portemonnee</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10658"/>
        <source> (no daemon)</source>
        <translation> (geen daemon)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10660"/>
        <source> (out of sync)</source>
        <translation> (niet synchroon)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10712"/>
        <source>(Untitled account)</source>
        <translation>(Naamloos account)</translation>
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
        <translation>kon index niet parseren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10730"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11045"/>
        <source>specify an index between 0 and </source>
        <translation>geef een index op tussen 0 en </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10856"/>
        <source>, unlocked balance: </source>
        <translation>, ontgrendeld saldo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10866"/>
        <source>Untagged accounts:</source>
        <translation>Niet-getagde accounts:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10872"/>
        <source>Tag %s is unregistered.</source>
        <translation>Tag %s is niet geregistreerd.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10875"/>
        <source>Accounts with tag: </source>
        <translation>Accounts met tag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10876"/>
        <source>Tag&apos;s description: </source>
        <translation>Beschrijving van de tag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Account</source>
        <translation>Rekening</translation>
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
        <translation>Primair adres</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10937"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10943"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10949"/>
        <source>(used)</source>
        <translation>(gebruikt)</translation>
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
        <translation>(Naamloos adres)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11072"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt;is al buiten de grenzen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11077"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt;overschrijdt de grens</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11154"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Geïntegreerde adressen kunnen alleen worden aangemaakt voor account 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11146"/>
        <source>Matching integrated address: </source>
        <translation>Overeenkomend geïntegreerd adres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173"/>
        <source>Subaddress: </source>
        <translation>Subadres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173"/>
        <source>Standard address: </source>
        <translation>Standaardadres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11178"/>
        <source>failed to parse payment ID or address</source>
        <translation>kon betalings-ID of adres niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11217"/>
        <source>failed to parse index</source>
        <translation>kon index niet parseren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11225"/>
        <source>Address book is empty.</source>
        <translation>Adresboek is leeg.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11231"/>
        <source>Index: </source>
        <translation>Index: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11237"/>
        <source>Address: </source>
        <translation>Adres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11238"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11374"/>
        <source>Description: </source>
        <translation>Beschrijving: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11331"/>
        <source>no description found</source>
        <translation>geen beschrijving gevonden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11333"/>
        <source>description found: </source>
        <translation>beschrijving gevonden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7019"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11373"/>
        <source>Filename: </source>
        <translation>Bestandsnaam: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11380"/>
        <source>Watch only</source>
        <translation>Alleen kijken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11382"/>
        <source>%u/%u multisig%s</source>
        <translation>%u/%u multisign%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9131"/>
        <source>%s change to %s</source>
        <translation>%s veranderen naar %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9515"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9588"/>
        <source>This transaction has %u confirmations</source>
        <translation>Deze transactie heeft %u bevestigingen</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61"/>
        <source>Filename to save the certificate</source>
        <translation>Bestandsnaam om het certificaat op te slaan</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62"/>
        <source>Filename to save the private key</source>
        <translation>Bestandsnaam om de privésleutel op te slaan</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63"/>
        <source>Passphrase with which to encrypt the private key</source>
        <translation>Wachtwoordzin waarmee de privésleutel wordt gecodeerd</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64"/>
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>Bestand met de wachtwoordzin waarmee de privésleutel moet worden gecodeerd</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65"/>
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>Vraag om een wachtwoordzin waarmee de privésleutel moet worden gecodeerd</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143"/>
        <source>Argument is needed: </source>
        <translation>Argument is nodig: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153"/>
        <source>Failed to read passphrase</source>
        <translation>Het is niet gelukt om de wachtwoordzin te lezen</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188"/>
        <source>Failed to create certificate</source>
        <translation>Certificaat aanmaken mislukt</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206"/>
        <source>Failed to write certificate: </source>
        <translation>Certificaat schrijven mislukt: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226"/>
        <source>Failed to write private key: </source>
        <translation>Het is niet gelukt om de privésleutel te schrijven: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237"/>
        <source>Failed to save certificate file</source>
        <translation>Certificaatbestand kan niet worden opgeslagen</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243"/>
        <source>Failed to save private key file</source>
        <translation>Het is niet gelukt om het privé-sleutelbestand op te slaan</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Basisbestandsnaam (-1, -2, enz. achtervoegsels worden indien nodig toegevoegd)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>Geef drempel en deelnemers tegelijk als M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>Hoeveel deelnemers delen delen van de multisig-wallet?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Hoeveel ondertekenaars zijn er nodig om een geldige transactie te ondertekenen?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>Create testnet multisig wallets</source>
        <translation>Testnet multisig wallets aanmaken</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create stagenet multisig wallets</source>
        <translation>Maak stagenet multisig wallets</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create an address file for new wallets</source>
        <translation>Maak een adresbestand voor nieuwe wallets</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>%u %u/%u multisig wallets genereren</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="136"/>
        <source>Generated multisig wallets for address </source>
        <translation>Gegenereerde multisig wallets voor adres </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="140"/>
        <source>Error creating multisig wallets: </source>
        <translation>Fout bij het aanmaken van multisig wallets: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="165"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Dit programma genereert een set multisig wallets - gebruik dit eenvoudigere schema alleen als alle deelnemers elkaar vertrouwen</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="184"/>
        <source>Error: Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Fout: Kan niet meer dan één van --testnet en --stagenet opgeven</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="191"/>
        <source>Error: expected N/M, but got: </source>
        <translation>Fout: verwachtte N/M, maar kreeg: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="199"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="208"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Fout: ofwel --scheme ofwel beide van --threshold en --participants kunnen worden opgegeven</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="215"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Fout: verwachtte N &amp;gt; 1 en N &amp;lt;= M, maar kreeg N==%u en M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="224"/>
        <source>Error: --filename-base is required</source>
        <translation>Fout: --filename-base is vereist</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72"/>
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>Gebruik PyBitmessage-instantie op URL&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73"/>
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>Specificeren&lt;arg&gt; als gebruikersnaam:wachtwoord voor PyBitmessage API</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911"/>
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>Auto-configuratie kan niet doorgaan omdat de auto-configuratiegegevens van andere ondertekenaars niet compleet zijn</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936"/>
        <source>The signer config is not complete.</source>
        <translation>De ondertekenaarsconfiguratie is niet compleet.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988"/>
        <source>Wallet can&apos;t go multisig because key sets from other signers are missing or not complete.</source>
        <translation>Wallet kan niet multisig worden omdat sleutelsets van andere ondertekenaars ontbreken of niet compleet zijn.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030"/>
        <source>Wallet can&apos;t start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>Wallet kan geen nieuwe sleuteluitwisselingsronde starten omdat sleutelsets van andere ondertekenaars ontbreken of niet compleet zijn.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094"/>
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>Synchronisatie is niet voltooid omdat multisig-synchronisatiegegevens van andere ondertekenaars ontbreken of niet voltooid zijn.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208"/>
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>Er zijn wachtende berichten, maar er is niets klaar om onder normale omstandigheden te verwerken</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211"/>
        <source>
Use &quot;mms next sync&quot; if you want to force processing of the waiting sync data</source>
        <translation>
Gebruik &amp;quot;mms volgende synchronisatie&amp;quot; als u de verwerking van de wachtende synchronisatiegegevens wilt forceren</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215"/>
        <source>
Use &quot;mms note&quot; to display the waiting notes</source>
        <translation>
Gebruik &amp;quot;mms note&amp;quot; om de wachtnotities weer te geven</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220"/>
        <source>There are no messages waiting to be processed.</source>
        <translation>Er zijn geen berichten die verwerkt moeten worden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441"/>
        <source>key set</source>
        <translation>sleutelset</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443"/>
        <source>additional key set</source>
        <translation>extra sleutelset</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445"/>
        <source>multisig sync data</source>
        <translation>multisig synchronisatiegegevens</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447"/>
        <source>partially signed tx</source>
        <translation>gedeeltelijk ondertekend tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449"/>
        <source>fully signed tx</source>
        <translation>volledig ondertekend tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451"/>
        <source>note</source>
        <translation>opmerking</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453"/>
        <source>signer config</source>
        <translation>ondertekenaar configuratie</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455"/>
        <source>auto-config data</source>
        <translation>auto-configuratie gegevens</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457"/>
        <source>unknown message type</source>
        <translation>onbekend berichttype</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466"/>
        <source>in</source>
        <translation>in</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468"/>
        <source>out</source>
        <translation>uit</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470"/>
        <source>unknown message direction</source>
        <translation>onbekende berichtrichting</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479"/>
        <source>ready to send</source>
        <translation>klaar om te verzenden</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481"/>
        <source>sent</source>
        <translation>verstuurd</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483"/>
        <source>waiting</source>
        <translation>wachten</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485"/>
        <source>processed</source>
        <translation>verwerkt</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487"/>
        <source>cancelled</source>
        <translation>geannuleerd</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489"/>
        <source>unknown message state</source>
        <translation>onbekende berichtstatus</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Genereer een nieuwe portemonnee en sla deze op&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Genereer een nieuwe portemonnee van het apparaat en sla deze op&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>Genereer een alleen-inkomende portemonnee van de weergavesleutel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195"/>
        <source>Generate full view-only wallet from view key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="196"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>Genereer deterministische portemonnee vanuit de uitgavesleutel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="197"/>
        <source>Generate wallet from private keys</source>
        <translation>Genereer een portemonnee met privésleutels</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="198"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Genereer een master wallet van multisig wallet-sleutels</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="200"/>
        <source>Language for mnemonic</source>
        <translation>Taal voor mnemonisch</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="201"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Geef Electrum-seed op voor het herstellen/maken van wallets</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="202"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Herstel portemonnee met behulp van Electrum-stijl mnemonische seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="203"/>
        <source>alias for --restore-deterministic-wallet</source>
        <translation>alias voor --restore-deterministic-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="204"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Herstel multisig wallet met behulp van Electrum-stijl mnemonische seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="205"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Genereer niet-deterministische weergave- en uitgavesleutels</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="207"/>
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>Herstel vanaf de geschatte blockchainhoogte op de opgegeven datum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="208"/>
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>De nieuw gecreëerde transactie wordt niet doorgegeven aan het Salvium-netwerk</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="372"/>
        <source>Enter a new password for the wallet</source>
        <translation>Voer een nieuw wachtwoord in voor de portemonnee</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="372"/>
        <source>Wallet password</source>
        <translation>Portemonnee wachtwoord</translation>
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
        <translation>ongeldig argument: moet 0/1, waar/onwaar, j/n, ja/nee zijn</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="546"/>
        <source>DNSSEC validation passed</source>
        <translation>DNSSEC-validatie geslaagd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="550"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>WAARSCHUWING: DNSSEC-validatie is mislukt, dit adres is mogelijk niet correct!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="553"/>
        <source>For URL: </source>
        <translation>Voor URL: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="555"/>
        <source> Salvium Address = </source>
        <translation> Salvium-adres = </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="567"/>
        <source>you have cancelled the transfer request</source>
        <translation>je hebt het overdrachtsverzoek geannuleerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="588"/>
        <source>failed to parse index: </source>
        <translation>kon index niet parseren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="601"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>ongeldige indeling voor subadres-lookahead; moet zijn&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="665"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>geen verbinding met daemon. Zorg ervoor dat daemon draait.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="674"/>
        <source>RPC error: </source>
        <translation>RPC-fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678"/>
        <source>failed to get random outputs to mix: </source>
        <translation>kon geen willekeurige uitvoer mixen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="685"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="693"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Niet genoeg geld in ontgrendeld saldo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="703"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>Er is geen manier gevonden om transacties te creëren. Dit komt meestal door stof dat zo klein is dat het zichzelf niet kan terugverdienen in kosten, of door te proberen meer geld te sturen dan het ontgrendelde saldo, of door niet genoeg over te laten voor kosten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="709"/>
        <source>not enough outputs for specified ring size</source>
        <translation>niet genoeg uitgangen voor de opgegeven ringmaat</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="712"/>
        <source>output amount</source>
        <translation>uitvoerbedrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="712"/>
        <source>found outputs to use</source>
        <translation>gevonden uitvoer om te gebruiken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714"/>
        <source>Please use sweep_unmixable.</source>
        <translation>Gebruik sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="718"/>
        <source>transaction was not constructed</source>
        <translation>transactie is niet geconstrueerd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726"/>
        <source>Reason: </source>
        <translation>Reden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="745"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>kon geen geschikte manier vinden om transacties te splitsen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="751"/>
        <source>unknown transfer error: </source>
        <translation>onbekende overdrachtsfout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="756"/>
        <source>Multisig error: </source>
        <translation>Multisig-fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="762"/>
        <source>internal error: </source>
        <translation>interne fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="767"/>
        <source>unexpected error: </source>
        <translation>onverwachte fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="771"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Er is een fout opgetreden, wat kan betekenen dat de node u probeert te laten proberen een transactie opnieuw te maken en zich te richten op welke outputs u bezit. Of het kan een bona fide fout zijn. Het kan verstandig zijn om de verbinding met deze node te verbreken en niet direct te proberen een transactie te verzenden. U kunt ook verbinding maken met een andere node, zodat de oorspronkelijke node geen informatie kan correleren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="783"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>Bestand %s slaat waarschijnlijk de persoonlijke sleutels van de portemonnee op! Gebruik een andere bestandsnaam.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9804"/>
        <source> seconds</source>
        <translation> seconden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9806"/>
        <source> minutes</source>
        <translation> notulen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9808"/>
        <source> hours</source>
        <translation> uren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9810"/>
        <source> days</source>
        <translation> dagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9812"/>
        <source> months</source>
        <translation> maanden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9813"/>
        <source>a long time</source>
        <translation>een lange tijd</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12018"/>
        <source>Unknown command: </source>
        <translation>Onbekende opdracht: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="206"/>
        <source>Restore from specific blockchain height</source>
        <translation>Herstellen vanaf een specifieke blockchainhoogte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="209"/>
        <source>Create an address file for new wallets</source>
        <translation>Maak een adresbestand voor nieuwe wallets</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="211"/>
        <source>Display English language names</source>
        <translation>Engelse namen weergeven</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365"/>
        <source>failed to read password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="387"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>daemon is bezig. Probeer het later opnieuw.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="396"/>
        <source>possibly lost connection to daemon</source>
        <translation>mogelijk verbinding met daemon verloren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413"/>
        <source>Error: </source>
        <translation>Fout: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="557"/>
        <source>Is this OK?</source>
        <translation>Is dit oké?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="723"/>
        <source>transaction %s was rejected by daemon</source>
        <translation>transactie %s is afgewezen door daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="735"/>
        <source>destination amount is zero</source>
        <translation>bestemmingsbedrag is nul</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="740"/>
        <source>transaction has no destination</source>
        <translation>transactie heeft geen bestemming</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="786"/>
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>Bestand %s bestaat al. Weet u zeker dat u het wilt overschrijven?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11993"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>Dit is de command line Salvium wallet. Deze moet verbinding maken met een Salvium daemon om correct te werken. WAARSCHUWING: Gebruik uw Salvium-sleutels niet opnieuw op een andere fork, TENZIJ deze fork ingebouwde key reuse mitigations heeft. Dit schaadt uw privacy.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12012"/>
        <source>Failed to initialize wallet</source>
        <translation>Initialiseren van portemonnee mislukt</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Gebruik daemon-instantie op&lt;host&gt; :&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Gebruik daemon-instantie op host&lt;arg&gt; in plaats van localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Gebruik daemon-instantie op poort&lt;arg&gt; in plaats van 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="267"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Voor testnet. Daemon moet ook worden gestart met --testnet-vlag</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="287"/>
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>Bestand met extra entropie om de PRNG te initialiseren (alle gegevens, streef naar 256 bits entropie om bruikbaar te zijn, wat doorgaans meer dan 256 bits aan gegevens betekent)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="288"/>
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>Communicatie toestaan met een daemon die een andere versie gebruikt</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="382"/>
        <source>can&apos;t specify daemon host or port more than once</source>
        <translation>kan daemonhost of poort niet meer dan één keer specificeren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="518"/>
        <source>can&apos;t specify more than one of --password and --password-file</source>
        <translation>kan niet meer dan één van --password en --password-file specificeren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532"/>
        <source>the password file specified could not be read</source>
        <translation>het opgegeven wachtwoordbestand kon niet worden gelezen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="558"/>
        <source>Failed to load file </source>
        <translation>Het laden van het bestand is mislukt </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Portemonnee-wachtwoord (escape/quote indien nodig)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253"/>
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt; :]&lt;port&gt; sokken proxy voor gebruik voor daemonverbindingen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Schakel opdrachten in die afhankelijk zijn van een vertrouwde daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Schakel opdrachten uit die afhankelijk zijn van een vertrouwde daemon</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Geef gebruikersnaam[:wachtwoord] op voor daemon RPC-client</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260"/>
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>SSL inschakelen op daemon RPC-verbindingen: ingeschakeld|uitgeschakeld|automatisch detecteren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="264"/>
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>Lijst met geldige vingerafdrukken van toegestane RPC-servers</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="265"/>
        <source>Allow any SSL certificate from the daemon</source>
        <translation>Sta elk SSL-certificaat van de daemon toe</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="266"/>
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>Sta gebruikers toe (via --daemon-ssl-ca-certificates) om certificaten te ketenen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="268"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Voor stagenet. Daemon moet ook worden gestart met --stagenet-vlag</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="270"/>
        <source>Set shared ring database path</source>
        <translation>Gedeeld ringdatabasepad instellen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281"/>
        <source>Number of rounds for the key derivation function</source>
        <translation>Aantal rondes voor de sleutelafleidingsfunctie</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="282"/>
        <source>HW device to use</source>
        <translation>Te gebruiken HW-apparaat</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="283"/>
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>HW-apparaat-wallet-afleidingspad (bijv. SLIP-10)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="285"/>
        <source>Do not use DNS</source>
        <translation>Gebruik geen DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="286"/>
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>Maak geen verbinding met een daemon en gebruik geen DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="374"/>
        <source>Invalid argument for </source>
        <translation>Ongeldig argument voor </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="435"/>
        <source>Enabling --</source>
        <translation>Inschakelen --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="435"/>
        <source> requires --</source>
        <translation> vereist --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="436"/>
        <location filename="../src/wallet/wallet2.cpp" line="437"/>
        <source> or --</source>
        <translation> of --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="437"/>
        <source> or use of a .onion/.i2p domain</source>
        <translation> of gebruik van een .onion/.i2p domein</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="455"/>
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon en --untrusted-daemon worden beide gezien, ervan uitgaande dat niet-vertrouwd</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="465"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Daemon is lokaal, ervan uitgaande dat het vertrouwd is</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="475"/>
        <source>failed to initialize the wallet</source>
        <translation>kon de portemonnee niet initialiseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="539"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>geen wachtwoord opgegeven; gebruik --prompt-for-password om om een wachtwoord te vragen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="541"/>
        <source>Enter a new password for the wallet</source>
        <translation>Voer een nieuw wachtwoord in voor de portemonnee</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="541"/>
        <source>Wallet password</source>
        <translation>Portemonnee wachtwoord</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564"/>
        <source>Failed to parse JSON</source>
        <translation>JSON kon niet worden geparseerd</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="571"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Versie %u is te nieuw, we kunnen alleen tot %u groeien</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587"/>
        <source>failed to parse view key secret key</source>
        <translation>kon de geheime sleutel van de weergavesleutel niet parseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="592"/>
        <source>view secret key may not be all zeroes</source>
        <translation>Bekijk geheime sleutel mag niet alleen uit nullen bestaan</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="594"/>
        <location filename="../src/wallet/wallet2.cpp" line="664"/>
        <location filename="../src/wallet/wallet2.cpp" line="709"/>
        <source>failed to verify view key secret key</source>
        <translation>kon de geheime sleutel van de weergavesleutel niet verifiëren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605"/>
        <source>failed to parse spend key secret key</source>
        <translation>kon de geheime sleutel van de uitgavesleutel niet parseren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="610"/>
        <source>spend secret key may not be all zeroes</source>
        <translation>De geheime sleutel voor uitgaven mag niet alleen uit nullen bestaan</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="612"/>
        <location filename="../src/wallet/wallet2.cpp" line="674"/>
        <location filename="../src/wallet/wallet2.cpp" line="735"/>
        <source>failed to verify spend key secret key</source>
        <translation>kon de geheime sleutel van de uitgavesleutel niet verifiëren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="624"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Woordenlijst in Electrum-stijl is niet geverifieerd</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="644"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Er moet minimaal één van de volgende opties worden opgegeven: een woordenlijst in Electrum-stijl, een privéweergavesleutel of een privéuitgavesleutel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="648"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Zowel de woordenlijst in Electrum-stijl als de privésleutel(s) zijn gespecificeerd</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="658"/>
        <source>invalid address</source>
        <translation>ongeldig adres</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="667"/>
        <source>view key does not match standard address</source>
        <translation>weergavesleutel komt niet overeen met standaardadres</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="677"/>
        <source>spend key does not match standard address</source>
        <translation>spend key komt niet overeen met standaard adres</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="685"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Kan geen verouderde wallets genereren vanuit JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="721"/>
        <source>failed to parse address: </source>
        <translation>adres kon niet worden geparseerd: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="727"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>Adres moet worden opgegeven om een watch-only wallet aan te maken</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="744"/>
        <source>failed to generate new wallet: </source>
        <translation>kon geen nieuwe portemonnee genereren: </translation>
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
        <translation>reorg overschrijdt de maximaal toegestane diepte, gebruik &amp;#39;set max-reorg-depth N&amp;#39; om dit toe te staan, reorgdiepte: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5614"/>
        <location filename="../src/wallet/wallet2.cpp" line="6195"/>
        <location filename="../src/wallet/wallet2.cpp" line="6654"/>
        <source>Primary account</source>
        <translation>Primaire account</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9362"/>
        <source>Transaction sanity check failed</source>
        <translation>Transactiecontrole mislukt</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11782"/>
        <source>Incorrect number of transfers_indices on return_payment</source>
        <translation>Onjuist aantal transfers_indices bij return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11784"/>
        <location filename="../src/wallet/wallet2.cpp" line="11797"/>
        <source>cannot locate return_payment origin index in m_transfers</source>
        <translation>kan de index van de oorsprong van return_payment niet vinden in m_transfers</translation>
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
        <translation>bij create_transactions_return(): onjuist aantal extra TX-pubkeys in oorspronkelijke TX voor return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11933"/>
        <source>at create_transactions_return(): failed to generate_key_derivation</source>
        <translation>bij create_transactions_return(): het is niet gelukt om de sleutelafleiding te genereren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11960"/>
        <location filename="../src/wallet/wallet2.cpp" line="11976"/>
        <source>Attempting to return change to ourself</source>
        <translation>Proberen verandering terug te geven aan onszelf</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11965"/>
        <location filename="../src/wallet/wallet2.cpp" line="11981"/>
        <source>Failed to identify change output</source>
        <translation>Kan de wijzigingsuitvoer niet identificeren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12168"/>
        <source>Transaction cannot pay for itself</source>
        <translation>Transactie kan zichzelf niet terugbetalen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12264"/>
        <source>Created transaction(s) failed sanity check</source>
        <translation>Aangemaakte transactie(s) zijn niet geslaagd voor sanity check</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13226"/>
        <source>No funds received in this tx.</source>
        <translation>Geen fondsen ontvangen in deze TX.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="14118"/>
        <source>failed to read file </source>
        <translation>kon bestand niet lezen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="210"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Stel de subadres-lookahead-groottes in op&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261"/>
        <source>Path to a PEM format private key</source>
        <translation>Pad naar een PEM-formaat privésleutel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="262"/>
        <source>Path to a PEM format certificate</source>
        <translation>Pad naar een certificaat in PEM-formaat</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Pad naar bestand met aaneengeschakelde PEM-formaatcertificaten ter vervanging van systeem-CA&amp;#39;s.</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="271"/>
        <source>Failed to create directory </source>
        <translation>Het is niet gelukt om de directory aan te maken </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="273"/>
        <source>Failed to create directory %s: %s</source>
        <translation>Het is niet gelukt om de map %s aan te maken: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="284"/>
        <source>Cannot specify --</source>
        <translation>Kan niet specificeren --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="284"/>
        <source> and --</source>
        <translation> En --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="303"/>
        <source>Failed to create file </source>
        <translation>Het is niet gelukt om het bestand te maken </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="303"/>
        <source>. Check permissions or remove file</source>
        <translation>Controleer de rechten of verwijder het bestand</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="313"/>
        <source>Error writing to file </source>
        <translation>Fout bij het schrijven naar bestand </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="316"/>
        <source>RPC username/password is stored in file </source>
        <translation>RPC-gebruikersnaam/wachtwoord wordt opgeslagen in bestand </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="757"/>
        <source>Tag %s is unregistered.</source>
        <translation>Tag %s is niet geregistreerd.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="785"/>
        <source>No matches for regex filter %s .</source>
        <translation>Geen overeenkomsten voor regex-filter %s.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3870"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Transactie niet mogelijk. Alleen beschikbaar %s, transactiebedrag %s = %s + %s (kosten)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4959"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Kan niet meer dan één van --testnet en --stagenet specificeren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4978"/>
        <source>Can&apos;t specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Kan niet meer dan één van --wallet-file en --generate-from-json specificeren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4984"/>
        <source>--password-file is not allowed in combination with --wallet-dir</source>
        <translation>--password-file is niet toegestaan in combinatie met --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4996"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>Moet --wallet-file of --generate-from-json of --wallet-dir specificeren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5000"/>
        <source>Loading wallet...</source>
        <translation>Portemonnee laden...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5048"/>
        <source>Initial refresh failed: </source>
        <translation>Eerste vernieuwing mislukt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5053"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5085"/>
        <source>Saving wallet...</source>
        <translation>Portemonnee sparen...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5055"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5087"/>
        <source>Successfully saved</source>
        <translation>Succesvol opgeslagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5058"/>
        <source>Successfully loaded</source>
        <translation>Succesvol geladen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5062"/>
        <source>Wallet initialization failed: </source>
        <translation>Initialisatie van portemonnee mislukt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5068"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>Initialiseren van wallet RPC-server mislukt</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5072"/>
        <source>Starting wallet RPC server</source>
        <translation>Starten van wallet RPC-server</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5079"/>
        <source>Failed to run wallet: </source>
        <translation>Portemonnee kan niet worden uitgevoerd: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5082"/>
        <source>Stopped wallet RPC server</source>
        <translation>Gestopte wallet RPC-server</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5091"/>
        <source>Failed to save wallet: </source>
        <translation>Portemonnee kan niet worden opgeslagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5169"/>
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Dit is de RPC Salvium wallet. Deze moet verbinding maken met een Salvium daemon om correct te werken.</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="151"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11958"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5144"/>
        <source>Wallet options</source>
        <translation>Portemonnee-opties</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>Genereer een portemonnee vanuit een JSON-formaatbestand</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Gebruik portemonnee&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81"/>
        <source>Set RPC client secret key for RPC payments</source>
        <translation>Stel de geheime RPC-clientsleutel in voor RPC-betalingen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85"/>
        <source>Wallet password file</source>
        <translation>Wachtwoordbestand voor portemonnee</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>Maximaal aantal threads dat voor een parallelle taak kan worden gebruikt</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114"/>
        <source>Specify log file</source>
        <translation>Logbestand specificeren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115"/>
        <source>Config file</source>
        <translation>Configuratiebestand</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127"/>
        <source>General options</source>
        <translation>Algemene opties</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Dit is de command line Salvium wallet. Deze moet verbinding maken met een Salvium daemon om correct te werken.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176"/>
        <source>Can&apos;t find config file </source>
        <translation>Kan configuratiebestand niet vinden </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220"/>
        <source>Logging to: </source>
        <translation>Inloggen op: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222"/>
        <source>Logging to %s</source>
        <translation>Inloggen op %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226"/>
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>WAARSCHUWING: Mogelijk beschikt u niet over een voldoende hoge limiet voor vergrendelbaar geheugen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228"/>
        <source>see ulimit -l</source>
        <translation>zie ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153"/>
        <source>Usage:</source>
        <translation>Gebruik:</translation>
    </message>
</context>
</TS>
