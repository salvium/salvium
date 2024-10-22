<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53" />
        <source>Invalid destination address</source>
        <translation>Ungültige Zieladresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60" />
        <source>Payment ID supplied: this is obsolete</source>
        <translation>Angegebene Zahlungs-ID: Diese ist veraltet.</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92" />
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Versuch, die Transaktion in einer Datei zu speichern, aber die angegebene(n) Datei(en) sind vorhanden. Beenden, um ein Überschreiben zu vermeiden. Datei:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99" />
        <source>Failed to write transaction(s) to file</source>
        <translation>Das Schreiben der Transaktion(en) in die Datei ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139" />
        <source>daemon is busy. Please try again later.</source>
        <translation>Daemon ist beschäftigt. Bitte versuchen Sie es später erneut.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>keine Verbindung zum Daemon. Bitte stellen Sie sicher, dass der Daemon läuft.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146" />
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>Transaktion %s wurde vom Daemon mit dem Status abgelehnt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151" />
        <source>. Reason: </source>
        <translation>. Grund: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153" />
        <source>Unknown exception: </source>
        <translation>Unbekannte Ausnahme: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156" />
        <source>Unhandled exception</source>
        <translation>Nicht behandelte Ausnahme</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="229" />
        <source>Couldn't multisig sign data: </source>
        <translation>Daten konnten nicht mehrfach signiert werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="251" />
        <source>Couldn't sign multisig transaction: </source>
        <translation>Multisig-Transaktion konnte nicht signiert werden: </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75" />
        <source>This is a watch only wallet</source>
        <translation>Dies ist eine reine Uhren-Brieftasche</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85" />
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92" />
        <source>Failed to sign transaction</source>
        <translation>Die Transaktion konnte nicht unterzeichnet werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168" />
        <source>Claimed change does not go to a paid address</source>
        <translation>Beanspruchtes Wechselgeld geht nicht an eine bezahlte Adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174" />
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Der geforderte Betrag des Wechselgelds ist höher als die Zahlung an die Wechselgeldadresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184" />
        <source>Change goes to more than one address</source>
        <translation>Änderung geht an mehrere Adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197" />
        <source>sending %s to %s</source>
        <translation>%s wird an %s gesendet</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203" />
        <source>with no destinations</source>
        <translation>ohne Ziele</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209" />
        <source>%s change to %s</source>
        <translation>%s ändern in %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212" />
        <source>no change</source>
        <translation>keine Änderung</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214" />
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>%lu Transaktionen geladen, für %s, Gebühr %s, %s, %s, mit minimaler Ringgröße %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="561" />
        <source>failed to parse address</source>
        <translation>Adresse konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="572" />
        <source>failed to parse secret spend key</source>
        <translation>Der geheime Ausgabenschlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="587" />
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Weder Ansichtsschlüssel noch Ausgabeschlüssel angegeben, abgebrochen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="595" />
        <source>failed to parse secret view key</source>
        <translation>Der geheime Ansichtsschlüssel konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="604" />
        <source>failed to verify secret spend key</source>
        <translation>Geheimer Ausgabenschlüssel konnte nicht verifiziert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="608" />
        <source>spend key does not match address</source>
        <translation>Der Ausgabenschlüssel stimmt nicht mit der Adresse überein</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="614" />
        <source>failed to verify secret view key</source>
        <translation>Fehler beim Überprüfen des geheimen Ansichtsschlüssels</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="618" />
        <source>view key does not match address</source>
        <translation>Ansichtsschlüssel stimmt nicht mit Adresse überein</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="641" />
        <location filename="../src/wallet/api/wallet.cpp" line="658" />
        <source>failed to generate new wallet: </source>
        <translation>Das Generieren des neuen Wallets ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="706" />
        <source>Electrum seed is empty</source>
        <translation>Der Electrum-Seed ist leer</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="715" />
        <source>Electrum-style word list failed verification</source>
        <translation>Überprüfung der Wortliste im Electrum-Stil fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1071" />
        <source>Failed to load unsigned transactions</source>
        <translation>Nicht signierte Transaktionen konnten nicht geladen werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1094" />
        <source>Failed to load transaction from file</source>
        <translation>Die Transaktion konnte nicht aus der Datei geladen werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1110" />
        <source>Wallet is view only</source>
        <translation>Wallet ist nur zur Ansicht verfügbar</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118" />
        <source>failed to save file </source>
        <translation>Datei konnte nicht gespeichert werden </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1134" />
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Schlüsselbilder können nur mit einem vertrauenswürdigen Daemon importiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1147" />
        <source>Failed to import key images: </source>
        <translation>Schlüsselbilder konnten nicht importiert werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1158" />
        <location filename="../src/wallet/api/wallet.cpp" line="1188" />
        <source>Not supported on HW wallets.</source>
        <translation>Wird auf HW-Wallets nicht unterstützt.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169" />
        <source>Failed to save file: </source>
        <translation>Datei konnte nicht gespeichert werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1176" />
        <source>Error exporting outputs: </source>
        <translation>Fehler beim Exportieren der Ausgaben: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1197" />
        <source>Failed to read file: </source>
        <translation>Datei konnte nicht gelesen werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1209" />
        <source>Failed to import outputs: </source>
        <translation>Der Import der Ausgaben ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1220" />
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>Das Scannen der Transaktionen ist fehlgeschlagen: Es wurden keine Transaktions-IDs angegeben.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231" />
        <source>Invalid txid specified: </source>
        <translation>Ungültige txid angegeben: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1249" />
        <source>Failed to scan transaction: </source>
        <translation>Scannen der Transaktion fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1281" />
        <source>Failed to get subaddress label: </source>
        <translation>Das Unteradressenetikett konnte nicht abgerufen werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1294" />
        <source>Failed to set subaddress label: </source>
        <translation>Unteradressenbezeichnung konnte nicht festgelegt werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1311" />
        <source>Failed to get multisig info: </source>
        <translation>Multisig-Informationen konnten nicht abgerufen werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1328" />
        <source>Failed to make multisig: </source>
        <translation>Erstellen der Mehrfachsignatur fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1342" />
        <source>Failed to exchange multisig keys: </source>
        <translation>Der Austausch der Multisig-Schlüssel ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1358" />
        <source>Failed to export multisig images: </source>
        <translation>Multisig-Bilder konnten nicht exportiert werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1376" />
        <source>Failed to parse imported multisig images</source>
        <translation>Das Parsen importierter Multisig-Bilder ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1386" />
        <source>Failed to import multisig images: </source>
        <translation>Multisig-Bilder konnten nicht importiert werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1400" />
        <source>Failed to check for partial multisig key images: </source>
        <translation>Die Suche nach teilweisen Multisig-Schlüsselbildern ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1428" />
        <source>Failed to restore multisig transaction: </source>
        <translation>Die Wiederherstellung der Multisig-Transaktion ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1477" />
        <source>Sending all requires one destination address</source>
        <translation>Für den Versand aller Sendungen ist eine Zieladresse erforderlich</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1481" />
        <source>Destinations and amounts are unequal</source>
        <translation>Ziele und Beträge sind ungleich</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489" />
        <source>payment id has invalid format, expected 64 character hex string: </source>
        <translation>Zahlungs-ID hat ungültiges Format, erwartet wird eine 64 Zeichen lange Hex-Zeichenfolge: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1497" />
        <source>Invalid destination address</source>
        <translation>Ungültige Zieladresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1503" />
        <source>a single transaction cannot use more than one payment id</source>
        <translation>Für eine einzelne Transaktion kann nicht mehr als eine Zahlungs-ID verwendet werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1531" />
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>Zahlungs-ID konnte nicht eingerichtet werden, obwohl sie korrekt dekodiert wurde</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1556" />
        <location filename="../src/wallet/api/wallet.cpp" line="1647" />
        <source>daemon is busy. Please try again later.</source>
        <translation>Daemon ist beschäftigt. Bitte versuchen Sie es später erneut.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1558" />
        <location filename="../src/wallet/api/wallet.cpp" line="1649" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>keine Verbindung zum Daemon. Bitte stellen Sie sicher, dass der Daemon läuft.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1560" />
        <location filename="../src/wallet/api/wallet.cpp" line="1651" />
        <source>RPC error: </source>
        <translation>RPC-Fehler: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1562" />
        <source>failed to get outputs to mix: %s</source>
        <translation>Fehler beim Abrufen der Ausgaben zum Mischen: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1566" />
        <location filename="../src/wallet/api/wallet.cpp" line="1658" />
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>nicht genug Geld zum Überweisen, nur %s verfügbar, gesendeter Betrag %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1573" />
        <location filename="../src/wallet/api/wallet.cpp" line="1666" />
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>nicht genug Geld zum Überweisen, Gesamtsaldo nur %s, gesendeter Betrag %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1580" />
        <location filename="../src/wallet/api/wallet.cpp" line="1674" />
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>nicht genug Geld zum Überweisen, nur %s verfügbar, Transaktionsbetrag %s = %s + %s (Gebühr)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1588" />
        <location filename="../src/wallet/api/wallet.cpp" line="1682" />
        <source>not enough outputs for specified ring size</source>
        <translation>nicht genügend Ausgänge für die angegebene Ringgröße</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590" />
        <location filename="../src/wallet/api/wallet.cpp" line="1684" />
        <source>output amount</source>
        <translation>Ausgabemenge</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590" />
        <location filename="../src/wallet/api/wallet.cpp" line="1684" />
        <source>found outputs to use</source>
        <translation>gefundene zu verwendende Ausgaben</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1592" />
        <source>Please sweep unmixable outputs.</source>
        <translation>Bitte fegen Sie nicht mischbare Ausgänge.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1595" />
        <location filename="../src/wallet/api/wallet.cpp" line="1688" />
        <source>transaction was not constructed</source>
        <translation>Transaktion wurde nicht konstruiert</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1598" />
        <location filename="../src/wallet/api/wallet.cpp" line="1691" />
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>Transaktion %s wurde vom Daemon mit dem Status abgelehnt: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1603" />
        <source>destination amount is zero</source>
        <translation>Der Zielbetrag ist Null</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1605" />
        <source>transaction has no destination</source>
        <translation>Transaktion hat kein Ziel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1607" />
        <location filename="../src/wallet/api/wallet.cpp" line="1698" />
        <source>failed to find a suitable way to split transactions</source>
        <translation>Es wurde kein geeigneter Weg gefunden, Transaktionen aufzuteilen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1609" />
        <location filename="../src/wallet/api/wallet.cpp" line="1700" />
        <source>unknown transfer error: </source>
        <translation>unbekannter Übertragungsfehler: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1611" />
        <location filename="../src/wallet/api/wallet.cpp" line="1702" />
        <source>internal error: </source>
        <translation>interner Fehler: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1613" />
        <location filename="../src/wallet/api/wallet.cpp" line="1704" />
        <source>unexpected error: </source>
        <translation>unerwarteter Fehler: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1615" />
        <location filename="../src/wallet/api/wallet.cpp" line="1706" />
        <source>unknown error</source>
        <translation>unbekannter Fehler</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653" />
        <source>failed to get outputs to mix</source>
        <translation>Es ist nicht gelungen, die Ausgänge zu mischen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1696" />
        <source>one of destinations is zero</source>
        <translation>eines der Ziele ist Null</translation>
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
        <translation>Txid konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1836" />
        <source>no tx keys found for this txid</source>
        <translation>Für diese TXID wurden keine TX-Schlüssel gefunden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1860" />
        <location filename="../src/wallet/api/wallet.cpp" line="1869" />
        <source>Failed to parse tx key</source>
        <translation>TX-Schlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1878" />
        <location filename="../src/wallet/api/wallet.cpp" line="1907" />
        <location filename="../src/wallet/api/wallet.cpp" line="1935" />
        <location filename="../src/wallet/api/wallet.cpp" line="2016" />
        <location filename="../src/wallet/api/wallet.cpp" line="2047" />
        <source>Failed to parse address</source>
        <translation>Adresse konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2021" />
        <source>Address must not be a subaddress</source>
        <translation>Die Adresse darf keine Unteradresse sein</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2052" />
        <source>Address doesn't belong to the wallet</source>
        <translation>Die Adresse gehört nicht zur Wallet</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2076" />
        <source>The wallet must be in multisig ready state</source>
        <translation>Die Brieftasche muss im Multisig-Ready-Zustand sein</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2098" />
        <source>Given string is not a key</source>
        <translation>Die angegebene Zeichenfolge ist kein Schlüssel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2361" />
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>Rescan spent kann nur mit einem vertrauenswürdigen Daemon verwendet werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2419" />
        <source>Invalid output: </source>
        <translation>Ungültige Ausgabe: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2426" />
        <source>Failed to mark outputs as spent</source>
        <translation>Ausgaben konnten nicht als ausgegeben markiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2437" />
        <location filename="../src/wallet/api/wallet.cpp" line="2459" />
        <source>Failed to parse output amount</source>
        <translation>Ausgabebetrag konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2442" />
        <location filename="../src/wallet/api/wallet.cpp" line="2464" />
        <source>Failed to parse output offset</source>
        <translation>Ausgabe-Offset konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2448" />
        <source>Failed to mark output as spent</source>
        <translation>Ausgabe konnte nicht als ausgegeben markiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2470" />
        <source>Failed to mark output as unspent</source>
        <translation>Ausgabe konnte nicht als nicht ausgegeben markiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2481" />
        <location filename="../src/wallet/api/wallet.cpp" line="2520" />
        <source>Failed to parse key image</source>
        <translation>Das Schlüsselbild konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2487" />
        <source>Failed to get ring</source>
        <translation>Ring konnte nicht erhalten werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2505" />
        <source>Failed to get rings</source>
        <translation>Ringe konnten nicht erhalten werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2526" />
        <source>Failed to set ring</source>
        <translation>Klingelton konnte nicht eingestellt werden</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316" />
        <source>Failed to parse address</source>
        <translation>Adresse konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323" />
        <source>Failed to parse key</source>
        <translation>Schlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="331" />
        <source>failed to verify key</source>
        <translation>Schlüssel konnte nicht verifiziert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="341" />
        <source>key does not match address</source>
        <translation>Schlüssel stimmt nicht mit Adresse überein</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54" />
        <source>yes</source>
        <translation>Ja</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68" />
        <source>no</source>
        <translation>NEIN</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92" />
        <source>Specify IP to bind RPC server</source>
        <translation>IP zum Binden des RPC-Servers angeben</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93" />
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>IPv6-Adresse zum Binden des RPC-Servers angeben</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94" />
        <source>Specify IP to bind restricted RPC server</source>
        <translation>IP angeben, um eingeschränkten RPC-Server zu binden</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95" />
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>IPv6-Adresse zum Binden des eingeschränkten RPC-Servers angeben</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96" />
        <source>Allow IPv6 for RPC</source>
        <translation>IPv6 für RPC zulassen</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97" />
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>Nicht erfolgreiche IPv4-Bindung für RPC ignorieren</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98" />
        <source>Specify username[:password] required for RPC server</source>
        <translation>Geben Sie den für den RPC-Server erforderlichen Benutzernamen[:Passwort] an</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99" />
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Bestätigen Sie, dass der RPC-Bind-IP-Wert KEINE Loopback-IP (lokale IP) ist.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100" />
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Geben Sie eine durch Kommas getrennte Liste von Ursprüngen an, um die gemeinsame Nutzung von Ressourcen zwischen verschiedenen Ursprüngen zu ermöglichen.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101" />
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>SSL für RPC-Verbindungen aktivieren: aktiviert|deaktiviert|automatische Erkennung</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102" />
        <source>Path to a PEM format private key</source>
        <translation>Pfad zu einem privaten Schlüssel im PEM-Format</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103" />
        <source>Path to a PEM format certificate</source>
        <translation>Pfad zu einem Zertifikat im PEM-Format</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104" />
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Pfad zur Datei, die zusammengesetzte Zertifikate im PEM-Format enthält, um die System-CA(s) zu ersetzen.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105" />
        <source>List of certificate fingerprints to allow</source>
        <translation>Liste der zuzulassenden Zertifikatfingerabdrücke</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106" />
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>Erlaube Benutzern (über --rpc-ssl-certificates) Kettenzertifikate</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107" />
        <source>Allow any peer certificate</source>
        <translation>Alle Peer-Zertifikate zulassen</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108" />
        <source>Do not ban hosts on RPC errors</source>
        <translation>Sperren Sie Hosts nicht aufgrund von RPC-Fehlern.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155" />
        <location filename="../src/rpc/rpc_args.cpp" line="183" />
        <location filename="../src/rpc/rpc_args.cpp" line="204" />
        <location filename="../src/rpc/rpc_args.cpp" line="221" />
        <source>Invalid IP address given for --</source>
        <translation>Ungültige IP-Adresse angegeben für --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163" />
        <location filename="../src/rpc/rpc_args.cpp" line="191" />
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> erlaubt eingehende unverschlüsselte externe Verbindungen. Erwägen Sie stattdessen einen SSH-Tunnel oder einen SSL-Proxy. Überschreiben mit --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242" />
        <source>Username specified with --</source>
        <translation>Benutzername angegeben mit --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242" />
        <source> cannot be empty</source>
        <translation> darf nicht leer sein</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4933" />
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Daemon verwendet eine andere RPC-Hauptversion (%u) als die Wallet (%u): %s. Aktualisieren Sie entweder eine davon oder verwenden Sie --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7068" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7622" />
        <source>Spending from address index %d
</source>
        <translation>Ausgaben vom Adressindex %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7083" />
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Ihre Transaktion muss in %llu Transaktionen aufgeteilt werden. Dies führt dazu, dass für jede Transaktion eine Transaktionsgebühr erhoben wird, was eine Gesamtgebühr von %s ergibt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7089" />
        <source>The transaction fee is %s</source>
        <translation>Die Transaktionsgebühr beträgt %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7092" />
        <source>, of which %s is dust from change</source>
        <translation>, davon %s ist Staub vom Wechselgeld</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093" />
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Insgesamt werden %s aus der Staubänderung an die Staubadresse gesendet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7376" />
        <source>Not enough money in unlocked balance</source>
        <translation>Nicht genug Geld im freigeschalteten Guthaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421" />
        <source>No address given</source>
        <translation>Keine Adresse angegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7487" />
        <source>missing lockedblocks parameter</source>
        <translation>fehlender Parameter „lockedblocks“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497" />
        <source>bad locked_blocks parameter</source>
        <translation>fehlerhafter Parameter „locked_blocks“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7793" />
        <source>failed to parse Payment ID</source>
        <translation>Zahlungs-ID konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2273" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7816" />
        <source>failed to parse key image</source>
        <translation>Das Schlüsselbild konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7854" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8084" />
        <source>No outputs found</source>
        <translation>Keine Ausgaben gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8089" />
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Es werden mehrere Transaktionen erstellt, was nicht passieren sollte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7864" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8094" />
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>Die Transaktion verwendet mehrere oder keine Eingaben, was nicht passieren sollte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8175" />
        <source>Money successfully sent, transaction: </source>
        <translation>Geld erfolgreich gesendet, Transaktion: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989" />
        <source>missing threshold amount</source>
        <translation>fehlender Schwellenbetrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7995" />
        <source>invalid amount threshold</source>
        <translation>Ungültiger Betragsgrenzwert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8593" />
        <source>Claimed change does not go to a paid address</source>
        <translation>Beanspruchtes Wechselgeld geht nicht an eine bezahlte Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8598" />
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Der geforderte Betrag des Wechselgelds ist höher als die Zahlung an die Wechselgeldadresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8607" />
        <source>Change goes to more than one address</source>
        <translation>Änderung geht an mehrere Adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8629" />
        <source>sending %s to %s</source>
        <translation>%s wird an %s gesendet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8639" />
        <source> dummy output(s)</source>
        <translation> Dummy-Ausgabe(n)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8642" />
        <source>with no destinations</source>
        <translation>ohne Ziele</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8651" />
        <source>no change</source>
        <translation>keine Änderung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5750" />
        <source>Daemon is local, assuming trusted</source>
        <translation>Der Daemon ist lokal und wird als vertrauenswürdig vorausgesetzt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5413" />
        <source>Password for new watch-only wallet</source>
        <translation>Passwort für neues Watch-Only-Wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413" />
        <source>false</source>
        <translation>FALSCH</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="775" />
        <source>Commands: </source>
        <translation>Befehle: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="789" />
        <source>Unknown command: </source>
        <translation>Unbekannter Befehl: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796" />
        <source>Command usage: </source>
        <translation>Befehlsverwendung: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="799" />
        <source>Command description: </source>
        <translation>Befehlsbeschreibung: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="825" />
        <source>wallet is watch-only and has no spend key</source>
        <translation>Die Wallet ist nur zum Ansehen verfügbar und hat keinen Ausgabeschlüssel.</translation>
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
        <translation>Befehl wird von HW Wallet nicht unterstützt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="933" />
        <source>wallet is watch-only and has no seed</source>
        <translation>Wallet ist nur zum Ansehen und hat keinen Seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="865" />
        <source>wallet is multisig but not yet finalized</source>
        <translation>Wallet ist multisig, aber noch nicht finalisiert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="874" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="943" />
        <source>wallet is non-deterministic and has no seed</source>
        <translation>Wallet ist nicht deterministisch und hat keinen Seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898" />
        <source>Failed to retrieve seed</source>
        <translation>Seed konnte nicht abgerufen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928" />
        <source>wallet is multisig and has no seed</source>
        <translation>Wallet ist Multisig und hat keinen Seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="953" />
        <source>Incorrect password</source>
        <translation>Falsches Passwort</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1153" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1236" />
        <source>Your original password was incorrect.</source>
        <translation>Ihr ursprüngliches Passwort war falsch.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="990" />
        <source>Error with wallet rewrite: </source>
        <translation>Fehler beim Umschreiben der Brieftasche: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10608" />
        <source>Random payment ID: </source>
        <translation>Zufällige Zahlungs-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1011" />
        <source>Current fee is %s %s per %s</source>
        <translation>Die aktuelle Gebühr beträgt %s %s pro %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603" />
        <source>Payment required, see the 'rpc_payment_info' command</source>
        <translation>Zahlung erforderlich, siehe Befehl „rpc_payment_info“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027" />
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Fehler: Fehler beim Schätzen der Backlog-Array-Größe: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1032" />
        <source>Error: bad estimated backlog array size</source>
        <translation>Fehler: Falsch geschätzte Backlog-Array-Größe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1044" />
        <source> (current)</source>
        <translation> (aktuell)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1047" />
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u Block (%u Minuten) Rückstand bei Priorität %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049" />
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u bis %u Block (%u bis %u Minuten) Rückstand bei Priorität %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1052" />
        <source>No backlog at priority </source>
        <translation>Kein Rückstand bei Priorität </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1074" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1121" />
        <source>This wallet is already multisig</source>
        <translation>Diese Wallet ist bereits multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1079" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1126" />
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>Wallet ist nur zum Ansehen verfügbar und kann nicht mit mehreren Signaturen versehen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1132" />
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Dieses Wallet wurde bereits verwendet. Bitte verwenden Sie ein neues Wallet, um ein Multisig-Wallet zu erstellen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1093" />
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>Senden Sie diese Multisig-Informationen an alle anderen Teilnehmer und verwenden Sie dann make_multisig&lt;threshold&gt;&lt;info1&gt; [&lt;info2&gt; ...] mit den Multisig-Informationen anderer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1094" />
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet's participants </source>
        <translation>Dies beinhaltet den PRIVATEN Ansichtsschlüssel und muss daher nur den Teilnehmern dieser Multisig-Wallet offengelegt werden. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1146" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890" />
        <source>Invalid threshold</source>
        <translation>Ungültiger Schwellenwert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1168" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1247" />
        <source>Another step is needed</source>
        <translation>Ein weiterer Schritt ist nötig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180" />
        <source>Error creating multisig: </source>
        <translation>Fehler beim Erstellen von Multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1187" />
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Fehler beim Erstellen von Multisig: Neues Wallet ist nicht Multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190" />
        <source> multisig address: </source>
        <translation> Multisig-Adresse: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1224" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1289" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357" />
        <source>This wallet is not multisig</source>
        <translation>Diese Brieftasche ist nicht multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229" />
        <source>This wallet is already finalized</source>
        <translation>Dieses Wallet ist bereits fertig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259" />
        <source>Multisig address: </source>
        <translation>Multisig-Adresse: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1294" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1362" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1458" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1576" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1658" />
        <source>This multisig wallet is not yet finalized</source>
        <translation>Dieses Multisig-Wallet ist noch nicht fertiggestellt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10983" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11140" />
        <source>failed to save file </source>
        <translation>Datei konnte nicht gespeichert werden </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330" />
        <source>Error exporting multisig info: </source>
        <translation>Fehler beim Exportieren der Multisig-Informationen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1334" />
        <source>Multisig info exported to </source>
        <translation>Multisig-Informationen exportiert nach </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10896" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10922" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173" />
        <source>failed to read file </source>
        <translation>Fehler beim Lesen der Datei </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1406" />
        <source>Failed to import multisig info: </source>
        <translation>Multisig-Informationen konnten nicht importiert werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1417" />
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Aktualisierung des Ausgabestatus nach dem Importieren der Multisig-Informationen fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423" />
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run "rescan_spent"</source>
        <translation>Nicht vertrauenswürdiger Daemon, der ausgegebene Status ist möglicherweise falsch. Verwenden Sie einen vertrauenswürdigen Daemon und führen Sie „rescan_spent“ aus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1571" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653" />
        <source>This is not a multisig wallet</source>
        <translation>Dies ist keine Multisig-Wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1503" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1512" />
        <source>Failed to sign multisig transaction</source>
        <translation>Signieren der Multisig-Transaktion fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1519" />
        <source>Multisig error: </source>
        <translation>Multisig-Fehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524" />
        <source>Failed to sign multisig transaction: </source>
        <translation>Signieren der Multisig-Transaktion fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1533" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1546" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8739" />
        <source>Transaction successfully signed to file </source>
        <translation>Transaktion erfolgreich in Datei signiert </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547" />
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Es kann mit submit_multisig an das Netzwerk weitergeleitet werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1608" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1679" />
        <source>Failed to load multisig transaction from file</source>
        <translation>Multisig-Transaktion konnte nicht aus der Datei geladen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1684" />
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Multisig-Transaktion nur von %u Unterzeichnern unterzeichnet, benötigt %u weitere Unterschriften</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1623" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11383" />
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transaktion erfolgreich übermittelt, Transaktion </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11384" />
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>Sie können den Status mit dem Befehl „show_transfers“ überprüfen.</translation>
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
        <translation>unbekannter Fehler</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1700" />
        <source>Failed to export multisig transaction to file </source>
        <translation>Multisig-Transaktion konnte nicht in Datei exportiert werden </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1704" />
        <source>Saved exported multisig transaction file(s): </source>
        <translation>Gespeicherte exportierte Multisig-Transaktionsdatei(en): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1709" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2050" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6114" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6451" />
        <source>unexpected error: </source>
        <translation>unerwarteter Fehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1732" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1889" />
        <source>Invalid key image</source>
        <translation>Ungültiges Schlüsselbild</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1738" />
        <source>Invalid txid</source>
        <translation>Ungültige txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1765" />
        <source>Failed to get key image ring: </source>
        <translation>Schlüsselbildring konnte nicht abgerufen werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780" />
        <source>File doesn't exist</source>
        <translation>Die Datei existiert nicht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802" />
        <source>Invalid ring specification: </source>
        <translation>Ungültige Ringspezifikation: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1810" />
        <source>Invalid key image: </source>
        <translation>Ungültiges Schlüsselbild: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1815" />
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>Ungültiger Ringtyp, relativ oder absolut erwartet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1821" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1833" />
        <source>Error reading line: </source>
        <translation>Fehler beim Lesen der Zeile: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844" />
        <source>Invalid ring: </source>
        <translation>Ungültiger Ring: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1853" />
        <source>Invalid relative ring: </source>
        <translation>Ungültiger relativer Ring: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1865" />
        <source>Invalid absolute ring: </source>
        <translation>Ungültiger absoluter Ring: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874" />
        <source>Failed to set ring for key image: </source>
        <translation>Ring für Schlüsselbild konnte nicht eingestellt werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874" />
        <source>Continuing.</source>
        <translation>Weiter geht‘s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1904" />
        <source>Missing absolute or relative keyword</source>
        <translation>Fehlendes absolutes oder relatives Schlüsselwort</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1921" />
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>ungültiger Index: muss eine strikt positive Ganzzahl ohne Vorzeichen sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929" />
        <source>invalid index: indices wrap</source>
        <translation>ungültiger Index: Indizes werden umbrochen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939" />
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>ungültiger Index: Indizes sollten streng aufsteigend sortiert sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946" />
        <source>failed to set ring</source>
        <translation>Klingelton konnte nicht eingestellt werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1969" />
        <source>Invalid key image or txid</source>
        <translation>Ungültiges Schlüsselbild oder ungültige TXID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1978" />
        <source>failed to unset ring</source>
        <translation>Klingelton konnte nicht deaktiviert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2001" />
        <source>RPC client ID: </source>
        <translation>RPC-Client-ID: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002" />
        <source>RPC client secret key: </source>
        <translation>Geheimer RPC-Clientschlüssel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2005" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434" />
        <source>Failed to query daemon</source>
        <translation>Daemon konnte nicht abgefragt werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2013" />
        <source>Using daemon: </source>
        <translation>Daemon verwenden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014" />
        <source>Payments required for node use, current credits: </source>
        <translation>Erforderliche Zahlungen für die Knotennutzung, aktuelle Guthaben: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2015" />
        <source>Credits target: </source>
        <translation>Credits-Ziel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2018" />
        <source>Credits spent this session: </source>
        <translation>In dieser Sitzung ausgegebene Credits: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2020" />
        <source>Credit discrepancy this session: </source>
        <translation>Kreditdiskrepanze in dieser Sitzung: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <source>Difficulty: </source>
        <translation>Schwierigkeit: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <source>credits per hash found, </source>
        <translation>Credits pro gefundenem Hash, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>credits/hash</source>
        <translation>Kredite/Hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2030" />
        <source>Mining for payment at %.1f H/s</source>
        <translation>Mining zur Bezahlung bei %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2035" />
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>Geschätzte Zeit bis zum Abbau des %u Credits-Ziels: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039" />
        <source>Mining for payment</source>
        <translation>Mining als Zahlungsmittel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2042" />
        <source>Not mining</source>
        <translation>Kein Bergbau</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2045" />
        <source>No payment needed for node use</source>
        <translation>Für die Knotennutzung ist keine Zahlung erforderlich</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118" />
        <source>Bad argument: </source>
        <translation>Schlechtes Argument: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118" />
        <source>should be "add"</source>
        <translation>sollte &amp;quot;Hinzufügen&amp;quot; sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2127" />
        <source>Failed to open file</source>
        <translation>Datei konnte nicht geöffnet werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211" />
        <source>Failed to save known rings: </source>
        <translation>Bekannte Ringe konnten nicht gespeichert werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220" />
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>Nutzung: %s&lt;key_image&gt; |&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2265" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2277" />
        <source>Frozen: </source>
        <translation>Gefroren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279" />
        <source>Not frozen: </source>
        <translation>Nicht gefroren: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293" />
        <source> bytes sent</source>
        <translation> gesendete Bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294" />
        <source> bytes received</source>
        <translation> Empfangene Bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2306" />
        <source>No known public nodes</source>
        <translation>Keine bekannten öffentlichen Knoten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>last_seen</source>
        <translation>zuletzt gesehen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2324" />
        <source>never</source>
        <translation>niemals</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2332" />
        <source>Error retrieving public node list: </source>
        <translation>Fehler beim Abrufen der öffentlichen Knotenliste: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2342" />
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium ist wie Bitcoin eine Kryptowährung. Das heißt, es ist digitales Geld.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2346" />
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>Salvium schützt Ihre Privatsphäre auf der Blockchain, und während Salvium ständig bestrebt ist, sich zu verbessern,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2347" />
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>Keine Datenschutztechnologie kann 100 % perfekt sein, auch Salvium nicht.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2348" />
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>Salvium kann Sie nicht vor Malware schützen und ist gegen mächtige Gegner möglicherweise nicht so wirksam wie erhofft.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2349" />
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>In Zukunft könnten Schwachstellen in Salvium entdeckt werden und Angriffe könnten entwickelt werden, um unter einige</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2350" />
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>der Datenschutzebenen, die Salvium bietet. Gehen Sie auf Nummer sicher und üben Sie eine mehrstufige Verteidigung.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439" />
        <source>Daemon does not require payment for RPC access</source>
        <translation>Daemon erfordert keine Zahlung für den RPC-Zugriff</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447" />
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>Mining für RPC-Zugriff wird gestartet: diff %llu, %f Credits/Hash%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448" />
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>Führen Sie stop_mining_for_rpc aus, um zu stoppen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550" />
        <source>wallet is watch-only and cannot transfer</source>
        <translation>Wallet ist nur zum Ansehen und kann nicht übertragen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7117" />
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>ACHTUNG: Dies ist keine Standardringgröße, die Ihre Privatsphäre verletzen kann. Die Standardgröße wird empfohlen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2595" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2611" />
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>Die Priorität muss entweder 0, 1, 2, 3 oder 4 oder eine der folgenden sein: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2616" />
        <source>could not change default priority</source>
        <translation>Die Standardpriorität konnte nicht geändert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2702" />
        <source>invalid unit</source>
        <translation>ungültige Einheit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2738" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800" />
        <source>invalid count: must be an unsigned integer</source>
        <translation>ungültige Anzahl: muss eine vorzeichenlose Ganzzahl sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2720" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756" />
        <source>invalid value</source>
        <translation>ungültiger Wert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2834" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2952" />
        <source>Invalid height</source>
        <translation>Ungültige Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2907" />
        <source>Invalid target</source>
        <translation>Ungültiges Ziel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2983" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3002" />
        <source>Invalid amount</source>
        <translation>Ungültiger Betrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3072" />
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>ungültiges Argument: muss entweder 1/ja oder 0/nein sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3340" />
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Beginnen Sie mit dem Mining im Daemon (bg_mining und ignore_battery sind optionale Boolesche Werte).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3343" />
        <source>Stop mining in the daemon.</source>
        <translation>Stoppen Sie das Mining im Daemon.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350" />
        <source>Save the current blockchain data.</source>
        <translation>Speichern Sie die aktuellen Blockchain-Daten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353" />
        <source>Synchronize the transactions and balance.</source>
        <translation>Synchronisieren Sie die Transaktionen und den Saldo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3357" />
        <source>Show the wallet's balance of the currently selected account.</source>
        <translation>Zeigt den Kontostand des aktuell ausgewählten Wallet-Kontos an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3361" />
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent("T"|"F"), "frozen"|"locked"|"unlocked", RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation>Zeigt alle eingehenden Überweisungen an, alle oder gefiltert nach Verfügbarkeit und Adressindex. Ausgabeformat: Betrag, Ausgegeben(&amp;quot;T&amp;quot;|&amp;quot;F&amp;quot;), &amp;quot;eingefroren&amp;quot;|&amp;quot;gesperrt&amp;quot;|&amp;quot;entsperrt&amp;quot;, RingCT, Globaler Index, Transaktions-Hash, Adressindex, [Öffentlicher Schlüssel, Schlüsselbild] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3367" />
        <source>Show the payments for the given payment IDs.</source>
        <translation>Zeigt die Zahlungen für die angegebenen Zahlungs-IDs an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3370" />
        <source>Show the blockchain height.</source>
        <translation>Zeigt die Blockchain-Höhe an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384" />
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Senden Sie alle nicht mischbaren Ausgaben an sich selbst mit Ringgröße 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394" />
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Senden Sie alle entsperrten Ausgaben unterhalb des Schwellenwerts an eine Adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3398" />
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Senden Sie eine einzelne Ausgabe des angegebenen Schlüsselbildes unverändert an eine Adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3434" />
        <source>Sign a transaction from a file. If the parameter "export_raw" is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default "unsigned_salvium_tx" will be used.</source>
        <translation>Signieren Sie eine Transaktion aus einer Datei. Wenn der Parameter &amp;quot;export_raw&amp;quot; angegeben ist, werden Transaktions-Hexadezimaldaten exportiert, die für den Daemon RPC /sendrawtransaction geeignet sind. Verwenden Sie den Parameter&lt;filename&gt; um die Datei anzugeben, aus der gelesen werden soll. Wenn nicht angegeben, wird der Standardwert „unsigned_salvium_tx“ verwendet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438" />
        <source>Submit a signed transaction from a file.</source>
        <translation>Senden Sie eine signierte Transaktion aus einer Datei.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3442" />
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Ändern Sie die aktuellen Protokolldetails (die Ebene muss &amp;lt;0-4&amp;gt; sein).</translation>
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
        <translation>Wenn keine Argumente angegeben werden, zeigt das Wallet alle vorhandenen Konten mit ihren Salden an. Wenn das Argument „new“ angegeben wird, erstellt das Wallet ein neues Konto, dessen Bezeichnung durch den angegebenen Bezeichnungstext (der leer sein kann) initialisiert wird. Wenn das Argument „switch“ angegeben wird, wechselt das Wallet zu dem Konto, das durch&lt;index&gt; . Wenn das Argument &amp;quot;label&amp;quot; angegeben ist, setzt das Wallet das Label des Kontos, das durch&lt;index&gt; zum angegebenen Beschriftungstext. Wenn das Argument &amp;quot;tag&amp;quot; angegeben ist, wird ein Tag&lt;tag_name&gt; wird den angegebenen Konten zugewiesen&lt;account_index_1&gt; ,&lt;account_index_2&gt; , .... Wenn das Argument „untag“ angegeben ist, werden die Tags, die den angegebenen Konten zugewiesen sind,&lt;account_index_1&gt; ,&lt;account_index_2&gt; ..., werden entfernt. Wenn das Argument &amp;quot;tag_description&amp;quot; angegeben ist, wird das Tag&lt;tag_name&gt; wird ein beliebiger Text zugewiesen&lt;description&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3460" />
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Kodieren Sie eine Zahlungs-ID in eine integrierte Adresse für die aktuelle öffentliche Adresse der Brieftasche (kein Argument verwendet eine zufällige Zahlungs-ID) oder dekodieren Sie eine integrierte Adresse in eine Standardadresse und Zahlungs-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3464" />
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Drucken Sie alle Einträge im Adressbuch und fügen Sie optional einen Eintrag hinzu bzw. löschen Sie ihn daraus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3467" />
        <source>Save the wallet data.</source>
        <translation>Speichern Sie die Wallet-Daten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470" />
        <source>Save a watch-only keys file.</source>
        <translation>Speichern Sie eine schreibgeschützte Schlüsseldatei.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3473" />
        <source>Display the private view key.</source>
        <translation>Zeigen Sie den privaten Ansichtsschlüssel an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3476" />
        <source>Display the private spend key.</source>
        <translation>Zeigen Sie den privaten Ausgabenschlüssel an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479" />
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Zeigen Sie den Mnemonik-Seed im Electrum-Stil an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561" />
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Zeigen Sie den verschlüsselten Mnemonik-Seed im Electrum-Stil an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564" />
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Scannen Sie die Blockchain erneut nach ausgegebenen Ausgaben.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568" />
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Holen Sie sich den Transaktionsschlüssel (r) für eine bestimmte&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572" />
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Setzen Sie den Transaktionsschlüssel (r) für eine bestimmte&lt;txid&gt; falls die Transaktion von einem anderen Gerät oder einer Drittanbieter-Wallet getätigt wurde.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576" />
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Überprüfen Sie den Betrag, der&lt;address&gt; In&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3580" />
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet's address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Erstellen Sie eine Signatur, die bestätigt, dass Gelder an&lt;address&gt; In&lt;txid&gt; , optional mit einem Challenge-String&lt;message&gt; , entweder mit dem geheimen Transaktionsschlüssel (wenn&lt;address&gt; ist nicht die Adresse Ihres Wallets) oder die Option „Geheimen Schlüssel anzeigen“ (sonst), die den geheimen Schlüssel nicht preisgibt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3584" />
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Überprüfen Sie den Nachweis für die Mittelzuflüsse an&lt;address&gt; In&lt;txid&gt; mit der Challenge-Zeichenfolge&lt;message&gt; wenn überhaupt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3588" />
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Generieren Sie eine Signatur, die beweist, dass Sie&lt;txid&gt; unter Verwendung des geheimen Spend-Schlüssels, optional mit einem Challenge-String&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3592" />
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Überprüfen Sie eine Signatur, die beweist, dass der Unterzeichner&lt;txid&gt; , optional mit einem Challenge-String&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3596" />
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If 'all' is specified, you prove the entire sum of all of your existing accounts' balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Generieren Sie eine Signatur, die beweist, dass Sie mindestens so viel besitzen, optional mit einer Challenge-Zeichenfolge&lt;message&gt; . Wenn Sie „alle“ angeben, weisen Sie die gesamte Summe aller Ihrer bestehenden Kontensalden nach. Andernfalls weisen Sie die Reserve in Höhe des kleinstmöglichen Betrags nach, der über&lt;amount&gt; auf Ihrem Girokonto verfügbar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602" />
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Überprüfen Sie eine Signatur, die beweist, dass der Besitzer von&lt;address&gt; hält mindestens so viel, optional mit einer Challenge-Zeichenfolge&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3623" />
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Zeigt die nicht ausgegebenen Ausgaben einer angegebenen Adresse innerhalb eines optionalen Betragsbereichs an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3631" />
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Stellen Sie eine beliebige Saitennote für eine&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3635" />
        <source>Get a string note for a txid.</source>
        <translation>Holen Sie sich eine String-Notiz für eine txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3639" />
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Legen Sie eine beliebige Beschreibung für die Brieftasche fest.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3643" />
        <source>Get the description of the wallet.</source>
        <translation>Holen Sie sich die Beschreibung der Brieftasche.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3646" />
        <source>Show the wallet's status.</source>
        <translation>Zeigt den Status der Brieftasche an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3649" />
        <source>Show the wallet's information.</source>
        <translation>Zeigen Sie die Informationen der Brieftasche an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3657" />
        <source>Verify a signature on the contents of a file.</source>
        <translation>Überprüfen Sie eine Signatur anhand des Inhalts einer Datei.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3665" />
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importieren Sie eine Liste signierter Schlüsselbilder und überprüfen Sie deren Ausgabestatus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3673" />
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Versuche, die Verbindung zum HW-Wallet wiederherzustellen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677" />
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Exportieren Sie eine Reihe von Ausgaben, die diesem Wallet gehören.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3681" />
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importieren Sie eine Reihe von Ausgaben, die diesem Wallet gehören.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3685" />
        <source>Show information about a transfer to/from this address.</source>
        <translation>Informationen zu einer Überweisung von/zu dieser Adresse anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3688" />
        <source>Change the wallet's password.</source>
        <translation>Ändern Sie das Passwort der Brieftasche.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3695" />
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Drucken Sie sich die Informationen zum aktuellen Gebühren- und Transaktionsbestand aus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3697" />
        <source>Export data needed to create a multisig wallet</source>
        <translation>Exportieren Sie die zum Erstellen einer Multisig-Wallet erforderlichen Daten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3700" />
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Machen Sie aus dieser Wallet eine Multisig-Wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3708" />
        <source>Export multisig info for other participants</source>
        <translation>Multisig-Informationen für andere Teilnehmer exportieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3712" />
        <source>Import multisig info from other participants</source>
        <translation>Multisig-Informationen von anderen Teilnehmern importieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3716" />
        <source>Sign a multisig transaction from a file</source>
        <translation>Signieren Sie eine Multisig-Transaktion aus einer Datei</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3720" />
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Senden Sie eine signierte Multisig-Transaktion aus einer Datei</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3724" />
        <source>Export a signed multisig transaction to a file</source>
        <translation>Exportieren einer signierten Multisig-Transaktion in eine Datei</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3815" />
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, "absolute", list of rings</source>
        <translation>Drucken Sie den/die Ring(e), der/die zum Ausgeben eines bestimmten Schlüsselbilds oder einer bestimmten Transaktion verwendet wurde/n (wenn die Ringgröße &amp;gt; 1 ist). Ausgabeformat: Schlüsselbild, „absolut“, Liste der Ringe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3821" />
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Legen Sie den Ring fest, der für ein bestimmtes Schlüsselbild verwendet wird, sodass es in einem Fork wiederverwendet werden kann.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3825" />
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>Hebt die Deaktivierung des für ein bestimmtes Schlüsselbild oder eine bestimmte Transaktion verwendeten Rings auf</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3829" />
        <source>Save known rings to the shared rings database</source>
        <translation>Bekannte Ringe in der gemeinsamen Ringdatenbank speichern</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845" />
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>Frieren Sie eine einzelne Ausgabe nach Schlüsselbild ein, damit sie nicht verwendet wird</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3849" />
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>Tauen Sie eine einzelne Ausgabe nach Schlüsselbild auf, damit sie erneut verwendet werden kann</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3853" />
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>Überprüft, ob eine gegebene Ausgabe aktuell durch das Schlüsselbild eingefroren ist.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3861" />
        <source>Prints simple network stats</source>
        <translation>Druckt einfache Netzwerkstatistiken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3865" />
        <source>Lists known public nodes</source>
        <translation>Listet bekannte öffentliche Knoten auf</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3869" />
        <source>Prints basic info about Salvium for first time users</source>
        <translation>Druckt grundlegende Informationen zu Salvium für Erstbenutzer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3873" />
        <source>Returns version information</source>
        <translation>Gibt Versionsinformationen zurück</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3877" />
        <source>Get info about RPC payments to current node</source>
        <translation>Erhalten Sie Informationen zu RPC-Zahlungen an den aktuellen Knoten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881" />
        <source>Start mining to pay for RPC access</source>
        <translation>Beginnen Sie mit dem Mining, um für den RPC-Zugriff zu bezahlen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3885" />
        <source>Stop mining to pay for RPC access</source>
        <translation>Stoppen Sie das Mining, um für den RPC-Zugriff zu bezahlen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3893" />
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Zeigen Sie den Hilfebereich oder die Dokumentation zu einem&lt;command&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984" />
        <source>needs an argument</source>
        <translation>braucht ein Argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998" />
        <source>set seed: needs an argument. available options: language</source>
        <translation>Seed festlegen: benötigt ein Argument. Verfügbare Optionen: Sprache</translation>
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
        <translation>0 oder 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4011" />
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (am langsamsten, keine Annahmen); optimize-coinbase (schnell, nimmt an, dass die gesamte Coinbase an eine einzige Adresse gezahlt wird); no-coinbase (am schnellsten, nimmt an, dass wir keine Coinbase-Transaktion erhalten), default (dasselbe wie optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4012" />
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0, 1, 2, 3 oder 4 oder eine der </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4013" />
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (oder nie|Aktion|entschlüsseln)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4015" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4027" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040" />
        <source>unsigned integer</source>
        <translation>vorzeichenlose Ganzzahl</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4017" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4029" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4030" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>amount</source>
        <translation>Menge</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4022" />
        <source>block height</source>
        <translation>Blockhöhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4026" />
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;major&gt;:&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4034" />
        <source>1/yes or 0/no</source>
        <translation>1/ja oder 0/nein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4039" />
        <source>floating point &gt;= 0</source>
        <translation>Gleitkommazahl &amp;gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044" />
        <source>set: unrecognized argument(s)</source>
        <translation>set: nicht erkannte(s) Argument(e)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4102" />
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Wallet-Name ungültig. Bitte versuchen Sie es erneut oder drücken Sie Strg+C zum Beenden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4114" />
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Es wird versucht, eine Brieftasche zu erstellen oder wiederherzustellen, aber die angegebenen Dateien sind bereits vorhanden. Der Vorgang wird beendet, um ein Überschreiben zu vermeiden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4119" />
        <source>Wallet and key files found, loading...</source>
        <translation>Wallet- und Schlüsseldateien gefunden, wird geladen...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4125" />
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Schlüsseldatei gefunden, aber keine Wallet-Datei. Wird neu generiert...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4131" />
        <source>Key file not found. Failed to open wallet: </source>
        <translation>Schlüsseldatei nicht gefunden. Wallet konnte nicht geöffnet werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4139" />
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Es wurde kein Wallet mit diesem Namen gefunden. Bestätigen Sie die Erstellung eines neuen Wallets mit dem Namen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150" />
        <source>Generating new wallet...</source>
        <translation>Neues Wallet wird erstellt...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231" />
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>Es kann nicht mehr als eines von --testnet und --stagenet angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4247" />
        <source>can't specify more than one of --generate-new-wallet="wallet_name", --wallet-file="wallet_name", --generate-from-view-key="wallet_name", --generate-from-spend-key="wallet_name", --generate-from-keys="wallet_name", --generate-from-multisig-keys="wallet_name", --generate-from-json="jsonfilename" and --generate-from-device="wallet_name"</source>
        <translation>kann nicht mehr als eines der folgenden Elemente angeben: --generate-new-wallet=&amp;quot;wallet_name&amp;quot;, --wallet-file=&amp;quot;wallet_name&amp;quot;, --generate-from-view-key=&amp;quot;wallet_name&amp;quot;, --generate-from-spend-key=&amp;quot;wallet_name&amp;quot;, --generate-from-keys=&amp;quot;wallet_name&amp;quot;, --generate-from-multisig-keys=&amp;quot;wallet_name&amp;quot;, --generate-from-json=&amp;quot;jsonfilename&amp;quot; und --generate-from-device=&amp;quot;wallet_name&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277" />
        <source>can't specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>kann nicht gleichzeitig --restore-deterministic-wallet oder --restore-multisig-wallet und --non-deterministic angeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4283" />
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet verwendet --generate-new-wallet, nicht --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4285" />
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet verwendet --generate-new-wallet, nicht --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4299" />
        <source>specify a recovery parameter with the --electrum-seed="multisig seed here"</source>
        <translation>Geben Sie einen Wiederherstellungsparameter mit --electrum-seed=&amp;quot;multisig seed here&amp;quot; an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314" />
        <source>specify a recovery parameter with the --electrum-seed="words list here"</source>
        <translation>Geben Sie einen Wiederherstellungsparameter mit --electrum-seed=&amp;quot;Wörterliste hier&amp;quot; an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328" />
        <source>Multisig seed failed verification</source>
        <translation>Multisig-Seed-Verifizierung fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337" />
        <source>Electrum-style word list failed verification</source>
        <translation>Überprüfung der Wortliste im Electrum-Stil fehlgeschlagen</translation>
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
        <translation>Keine Daten angegeben, abgebrochen</translation>
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
        <translation>Adresse konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4368" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4445" />
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Bei dieser Adresse handelt es sich um eine Subadresse, die hier nicht verwendet werden kann.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4383" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4475" />
        <source>failed to parse view key secret key</source>
        <translation>Der Ansichtsschlüssel konnte nicht analysiert werden. Geheimer Schlüssel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4392" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4492" />
        <source>failed to verify view key secret key</source>
        <translation>Überprüfung des Ansichtsschlüssels und des geheimen Schlüssels fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4396" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4496" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4578" />
        <source>view key does not match standard address</source>
        <translation>Ansichtsschlüssel stimmt nicht mit der Standardadresse überein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4401" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4422" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4500" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4661" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4693" />
        <source>account creation failed</source>
        <translation>Kontoerstellung ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4418" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4460" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4603" />
        <source>failed to parse spend key secret key</source>
        <translation>Der geheime Schlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4484" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4623" />
        <source>failed to verify spend key secret key</source>
        <translation>Fehler beim Überprüfen des geheimen Ausgabeschlüssels</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4488" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628" />
        <source>spend key does not match standard address</source>
        <translation>Der Ausgabenschlüssel stimmt nicht mit der Standardadresse überein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4523" />
        <source>Error: expected M/N, but got: </source>
        <translation>Fehler: M/N erwartet, aber erhalten: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4528" />
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Fehler: Erwartet wurde N &amp;gt; 1 und N &amp;lt;= M, aber erhalten: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4533" />
        <source>Error: M/N is currently unsupported. </source>
        <translation>Fehler: M/N wird derzeit nicht unterstützt. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4536" />
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Generieren einer Master-Wallet aus %u von %u Multisig-Wallet-Schlüsseln</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4565" />
        <source>failed to parse secret view key</source>
        <translation>Der geheime Ansichtsschlüssel konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4573" />
        <source>failed to verify secret view key</source>
        <translation>Fehler beim Überprüfen des geheimen Ansichtsschlüssels</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4616" />
        <source>Error: M/N is currently unsupported</source>
        <translation>Fehler: M/N wird derzeit nicht unterstützt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4668" />
        <source>No restore height is specified.</source>
        <translation>Es ist keine Wiederherstellungshöhe angegeben.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4669" />
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Vorausgesetzt, Sie erstellen ein neues Konto, erfolgt die Wiederherstellung anhand der aktuell geschätzten Blockchain-Höhe.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674" />
        <source>account creation aborted</source>
        <translation>Kontoerstellung abgebrochen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4684" />
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>Geben Sie einen Wallet-Pfad mit --generate-new-wallet an (nicht mit --wallet-file).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4748" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4768" />
        <source>bad m_restore_height parameter: </source>
        <translation>ungültiger m_restore_height-Parameter: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759" />
        <source>Restore height is: </source>
        <translation>Die Wiederherstellungshöhe beträgt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782" />
        <source>Restore height </source>
        <translation>Höhe wiederherstellen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798" />
        <source>can't specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>--subaddress-lookahead und --wallet-file können nicht gleichzeitig angegeben werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802" />
        <source>failed to open account</source>
        <translation>Kontoeröffnung fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5568" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5791" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8968" />
        <source>wallet is null</source>
        <translation>Wallet ist null</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841" />
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Initialisierung der Ringdatenbank fehlgeschlagen: Datenschutzfördernde Funktionen werden inaktiv sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4920" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4924" />
        <source>wallet failed to connect to daemon: </source>
        <translation>Wallet konnte keine Verbindung zum Daemon herstellen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4925" />
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the 'set_daemon' command.</source>
        <translation>Der Daemon wurde entweder nicht gestartet oder es wurde ein falscher Port angegeben. Stellen Sie sicher, dass der Daemon läuft, oder ändern Sie die Daemon-Adresse mit dem Befehl „set_daemon“.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4954" />
        <source>List of available languages for your wallet's seed:</source>
        <translation>Liste der verfügbaren Sprachen für den Seed Ihres Wallets:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4955" />
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Wenn Ihr Bildschirm einfriert, beenden Sie das Programm blind mit ^C und führen Sie es dann erneut mit --use-english-language-names aus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4973" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4978" />
        <source>invalid language choice entered. Please try again.
</source>
        <translation>Ungültige Sprachauswahl eingegeben. Bitte versuchen Sie es erneut.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4992" />
        <source>invalid password</source>
        <translation>ungültiges Passwort</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5040" />
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Sie haben eine veraltete Version des Wallets verwendet. Bitte verwenden Sie den neuen Seed, den wir bereitstellen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5056" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5131" />
        <source>Generated new wallet: </source>
        <translation>Neues Wallet generiert: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5059" />
        <source>View key: </source>
        <translation>Legende anzeigen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5136" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5244" />
        <source>failed to generate new wallet: </source>
        <translation>Das Generieren des neuen Wallets ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5175" />
        <source>Generated new wallet on hw device: </source>
        <translation>Neues Wallet auf dem HW-Gerät generiert: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5236" />
        <source>failed to generate new mutlisig wallet</source>
        <translation>konnte kein neues Multilisig-Wallet generieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5239" />
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Neues %u/%u Multisig-Wallet generiert: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5255" />
        <source>wallet file path not valid: </source>
        <translation>Wallet-Dateipfad ungültig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5265" />
        <source>Key file not found. Failed to open wallet</source>
        <translation>Schlüsseldatei nicht gefunden. Wallet konnte nicht geöffnet werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5286" />
        <source>Opened watch-only wallet</source>
        <translation>Geöffnete Nur-Uhr-Wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5288" />
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>%u/%u Multisig-Wallet%s geöffnet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5290" />
        <source>Opened wallet</source>
        <translation>Geöffnete Brieftasche</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5308" />
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Sie haben eine veraltete Version des Wallets verwendet. Bitte fahren Sie mit dem Upgrade Ihres Wallets fort.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5323" />
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Sie haben eine veraltete Version der Brieftasche verwendet. Das Dateiformat Ihrer Brieftasche wird jetzt aktualisiert.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5331" />
        <source>failed to load wallet: </source>
        <translation>Wallet konnte nicht geladen werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5350" />
        <source>Use "help &lt;command&gt;" to see a command's documentation.
</source>
        <translation>Verwenden Sie „Hilfe&lt;command&gt; &amp;quot;, um die Dokumentation eines Befehls anzuzeigen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5372" />
        <source>failed to deinitialize wallet</source>
        <translation>Deinitialisierung der Brieftasche ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5395" />
        <source>Wallet data saved</source>
        <translation>Wallet-Daten gespeichert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409" />
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>Wallet ist Multisig und kann keine Watch-Only-Version speichern</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5417" />
        <source>failed to read wallet password</source>
        <translation>Das Lesen des Wallet-Passworts ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5425" />
        <source>Watch only wallet saved as: </source>
        <translation>Nur die Uhr-Wallet speichern als: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5429" />
        <source>Failed to save watch only wallet: </source>
        <translation>Das Speichern der Nur-Uhr-Wallet ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5559" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6414" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11007" />
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>Dieser Befehl erfordert einen vertrauenswürdigen Daemon. Aktivieren Sie ihn mit --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5608" />
        <source>Mining started in daemon</source>
        <translation>Mining im Daemon gestartet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610" />
        <source>mining has NOT been started: </source>
        <translation>Der Bergbau wurde NICHT begonnen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5630" />
        <source>Mining stopped in daemon</source>
        <translation>Mining im Daemon gestoppt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632" />
        <source>mining has NOT been stopped: </source>
        <translation>Der Bergbau wurde NICHT gestoppt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5687" />
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Unerwartete Arraylänge – simple_wallet::set_daemon() beendet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763" />
        <source>trusted</source>
        <translation>vertrauenswürdig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763" />
        <source>untrusted</source>
        <translation>nicht vertrauenswürdig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5779" />
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Dies scheint keine gültige Daemon-URL zu sein.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5799" />
        <source>Blockchain saved</source>
        <translation>Blockchain gespeichert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5801" />
        <source>blockchain can't be saved: </source>
        <translation>Blockchain kann nicht gespeichert werden: </translation>
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
        <translation>Höhe </translation>
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
        <translation>ausgegeben </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952" />
        <source>Enter password</source>
        <translation>Passwort eingeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6048" />
        <source>Starting refresh...</source>
        <translation>Aktualisierung wird gestartet...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6070" />
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>Seit dem Start des erneuten Scans wurde eine neue Übertragung empfangen. Schlüsselbilder sind unvollständig.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077" />
        <source>Refresh done, blocks received: </source>
        <translation>Aktualisierung abgeschlossen, Blöcke empfangen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6085" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6428" />
        <source>daemon is busy. Please try again later.</source>
        <translation>Daemon ist beschäftigt. Bitte versuchen Sie es später erneut.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4816" />
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>Der geheime RPC-Clientschlüssel sollte 32 Byte lang und im Hexadezimalformat sein.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5535" />
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>Wenn das Hintergrund-Mining aktiviert ist, führt der Daemon das Mining im Leerlauf und nicht im Akkubetrieb durch.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5657" />
        <source>Error checking daemon RPC access prices</source>
        <translation>Fehler beim Prüfen der RPC-Zugriffspreise des Daemons</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5663" />
        <source>Error checking daemon RPC access prices: </source>
        <translation>Fehler beim Prüfen der RPC-Zugriffspreise des Daemons: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5759" />
        <source>Failed to connect to daemon</source>
        <translation>Verbindung zum Daemon konnte nicht hergestellt werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771" />
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>Daemon RPC Credits/Hash ist geringer als angegeben. Entweder betrügt dieser Daemon oder er hat vor Kurzem sein Setup geändert.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772" />
        <source>Claimed: </source>
        <translation>Behauptet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5773" />
        <source>Actual: </source>
        <translation>Tatsächlich: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6089" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6432" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>keine Verbindung zum Daemon. Bitte stellen Sie sicher, dass der Daemon läuft.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6436" />
        <source>payment required.</source>
        <translation>Zahlung erforderlich.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6099" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6446" />
        <source>RPC error: </source>
        <translation>RPC-Fehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6104" />
        <source>refresh error: </source>
        <translation>Aktualisierungsfehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6109" />
        <source>internal error: </source>
        <translation>interner Fehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124" />
        <source>refresh failed: </source>
        <translation>Aktualisierung fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124" />
        <source>Blocks received: </source>
        <translation>Erhaltene Blöcke: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6153" />
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Einige eigene Ausgaben haben teilweise Schlüsselbilder – import_multisig_info erforderlich)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156" />
        <source>Currently selected account: [</source>
        <translation>Aktuell ausgewähltes Konto: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156" />
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158" />
        <source>(No tag assigned)</source>
        <translation>(Kein Tag zugewiesen)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158" />
        <source>Tag: </source>
        <translation>Etikett: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6172" />
        <source>unlocked balance: </source>
        <translation>freigeschaltetes Guthaben: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177" />
        <source>Balance per address:</source>
        <translation>Saldo pro Adresse:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <source>Address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Balance</source>
        <translation>Gleichgewicht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Unlocked balance</source>
        <translation>Freigegebenes Guthaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <source>Outputs</source>
        <translation>Ausgaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>Label</source>
        <translation>Etikett</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6186" />
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277" />
        <source>pubkey</source>
        <translation>Pubkey</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277" />
        <source>key image</source>
        <translation>Schlüsselbild</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>spent</source>
        <translation>ausgegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>unlocked</source>
        <translation>entsperrt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>ringct</source>
        <translation>ringct</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>global index</source>
        <translation>globaler Index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>tx id</source>
        <translation>TX-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>addr index</source>
        <translation>Adressindex</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6294" />
        <source>Used at heights: </source>
        <translation>Einsatz in der Höhe: </translation>
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
        <translation>gesperrt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <source>[frozen]</source>
        <translation>[gefroren]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301" />
        <source>RingCT</source>
        <translation>RingCT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301" />
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6314" />
        <source>No incoming transfers</source>
        <translation>Keine eingehenden Überweisungen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318" />
        <source>No incoming available transfers</source>
        <translation>Keine eingehenden verfügbaren Überweisungen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322" />
        <source>No incoming unavailable transfers</source>
        <translation>Keine eingehenden, nicht verfügbaren Überweisungen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>payment</source>
        <translation>Zahlung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>transaction</source>
        <translation>Transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>height</source>
        <translation>Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>unlock time</source>
        <translation>Entsperrzeit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6358" />
        <source>No payments with id </source>
        <translation>Keine Zahlungen mit Ausweis </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6380" />
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>Die Zahlungs-ID hat ein ungültiges Format. Es wird eine Hexadezimalzeichenfolge mit 16 oder 64 Zeichen erwartet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6504" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7509" />
        <source>failed to get blockchain height: </source>
        <translation>Blockchain-Höhe konnte nicht ermittelt werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441" />
        <source>failed to get spent status</source>
        <translation>Der Status „Ausgegeben“ konnte nicht abgerufen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6513" />
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transaktion %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6529" />
        <source>failed to find construction data for tx input</source>
        <translation>Konstruktionsdaten für TX-Eingabe konnten nicht gefunden werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6553" />
        <source>failed to get output: </source>
        <translation>Ausgabe konnte nicht abgerufen werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6561" />
        <source>output key's originating block height shouldn't be higher than the blockchain height</source>
        <translation>Die ursprüngliche Blockhöhe des Ausgabeschlüssels sollte nicht höher sein als die Blockchain-Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6566" />
        <source>
Originating block heights: </source>
        <translation>
Ursprungsblockhöhen: </translation>
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
Achtung: Einige der ausgegebenen Eingabetasten stammen von </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594" />
        <source>the same transaction</source>
        <translation>die gleiche Transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594" />
        <source>blocks that are temporally very close</source>
        <translation>Blöcke, die zeitlich sehr nahe beieinander liegen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6748" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741" />
        <source>Ring size must not be 0</source>
        <translation>Ringgröße darf nicht 0 sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6760" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7473" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7753" />
        <source>ring size %u is too small, minimum is %u</source>
        <translation>Ringgröße %u ist zu klein, Minimum ist %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6765" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758" />
        <source>ring size %u is too large, maximum is %u</source>
        <translation>Ringgröße %u ist zu groß, das Maximum beträgt %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772" />
        <source>wrong number of arguments</source>
        <translation>falsche Anzahl von Argumenten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6789" />
        <source>payment id failed to encode</source>
        <translation>Zahlungs-ID konnte nicht kodiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6808" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7502" />
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Gesperrte Blöcke zu hoch, max. 1.000.000 (˜4 Jahre)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6856" />
        <source>failed to parse short payment ID from URI</source>
        <translation>Kurze Zahlungs-ID aus URI konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6881" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883" />
        <source>Invalid last argument: </source>
        <translation>Ungültiges letztes Argument: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6901" />
        <source>a single transaction cannot use more than one payment id</source>
        <translation>Für eine einzelne Transaktion kann nicht mehr als eine Zahlungs-ID verwendet werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917" />
        <source>failed to parse payment id, though it was detected</source>
        <translation>Die Zahlungs-ID konnte nicht analysiert werden, obwohl sie erkannt wurde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7004" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014" />
        <source>Is this okay anyway?</source>
        <translation>Ist das überhaupt okay?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7009" />
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>Derzeit besteht bei dieser Gebührenstufe ein Rückstand von %u Blöcken. Ist das in Ordnung?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7323" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7631" />
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>%s in %llu-Transaktionen werden mit einer Gesamtgebühr von %s abgerechnet. Ist das okay?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7329" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7637" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7874" />
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>Das Abbuchen von %s kostet insgesamt %s. Ist das okay?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7377" />
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by "rescan_spent".  Is this okay?</source>
        <translation>%s nicht mischbarer Ausgaben werden verworfen, die nicht ausgegeben werden können. Dies kann durch „rescan_spent“ rückgängig gemacht werden. Ist das in Ordnung?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7522" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7767" />
        <source>Failed to parse number of outputs</source>
        <translation>Die Anzahl der Ausgaben konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7527" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7772" />
        <source>Amount of outputs should be greater than 0</source>
        <translation>Die Anzahl der Ausgaben sollte größer als 0 sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7551" />
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>Die Zahlungs-ID hat ein ungültiges Format. Es wird eine Hexadezimalzeichenfolge mit 16 oder 64 Zeichen erwartet: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6803" />
        <source>bad locked_blocks parameter:</source>
        <translation>fehlerhafter Parameter „locked_blocks“:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7571" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7831" />
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>Für eine einzelne Transaktion kann nicht mehr als eine Zahlungs-ID verwendet werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6923" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7580" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7799" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7839" />
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>Zahlungs-ID konnte nicht eingerichtet werden, obwohl sie korrekt dekodiert wurde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1170" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249" />
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>Senden Sie diese Multisig-Informationen an alle anderen Teilnehmer und verwenden Sie dann exchange_multisig_keys&lt;info1&gt; [&lt;info2&gt; ...] mit den Multisig-Informationen anderer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1258" />
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation>Das Multisig-Wallet wurde erfolgreich erstellt. Aktueller Wallet-Typ: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264" />
        <source>Failed to perform multisig keys exchange: </source>
        <translation>Der Austausch der Multisig-Schlüssel ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599" />
        <source>Failed to load multisig transaction from MMS</source>
        <translation>Multisig-Transaktion konnte nicht von MMS geladen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2139" />
        <source>Failed to mark output spent: </source>
        <translation>Ausgabe konnte nicht als ausgegeben markiert werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2166" />
        <source>Failed to mark output unspent: </source>
        <translation>Ausgabe konnte nicht als nicht ausgegeben markiert werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2190" />
        <source>Spent: </source>
        <translation>Ausgegeben: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192" />
        <source>Not spent: </source>
        <translation>Nicht ausgegeben: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2196" />
        <source>Failed to check whether output is spent: </source>
        <translation>Überprüfen, ob die Ausgabe ausgegeben wurde, ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2385" />
        <source>Please confirm the transaction on the device</source>
        <translation>Bitte bestätigen Sie die Transaktion auf dem Gerät</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091" />
        <source>Device name not specified</source>
        <translation>Gerätename nicht angegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100" />
        <source>Device reconnect failed</source>
        <translation>Wiederverbindung des Geräts fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105" />
        <source>Device reconnect failed: </source>
        <translation>Wiederverbindung des Geräts fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3619" />
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>Exportieren Sie die eingehenden/ausgehenden Überweisungen innerhalb eines optionalen Höhenbereichs nach CSV.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627" />
        <source>Rescan the blockchain from scratch. If "hard" is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>Scannen Sie die Blockchain von Grund auf neu. Wenn „hard“ angegeben ist, gehen alle Informationen verloren, die nicht aus der Blockchain selbst wiederhergestellt werden können.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3661" />
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>Exportieren Sie einen signierten Satz von Schlüsselbildern in ein&lt;filename&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3669" />
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>Synchronisiert Schlüsselbilder mit der HW-Wallet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3692" />
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>Generieren Sie eine neue zufällige Zahlungs-ID in voller Größe (veraltet). Diese werden in der Blockchain unverschlüsselt sein, siehe integrated_address für verschlüsselte kurze Zahlungs-IDs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3704" />
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>Führt zusätzliche Multisig-Schlüsselaustauschrunden aus. Wird für beliebige M/N-Multisig-Wallets benötigt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3736" />
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>Initialisieren und konfigurieren Sie das MMS für M/N = Anzahl der erforderlichen Unterzeichner/Anzahl der autorisierten Unterzeichner Multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740" />
        <source>Display current MMS configuration</source>
        <translation>Aktuelle MMS-Konfiguration anzeigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3744" />
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>Festlegen oder Ändern der Informationen autorisierter Unterzeichner (Bezeichnung mit einem Wort, Transportadresse, Salvium-Adresse) oder Auflisten aller Unterzeichner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3748" />
        <source>List all messages</source>
        <translation>Alle Nachrichten auflisten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3752" />
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using 'sync' processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>Bewerten Sie die nächsten möglichen Multisig-bezogenen Aktionen entsprechend dem Wallet-Status und führen Sie sie aus oder bieten Sie sie zur Auswahl an. Durch die Verwendung von „Sync“ kann die Verarbeitung wartender Nachrichten mit Multisig-Sync-Informationen unabhängig vom Wallet-Status erzwungen werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757" />
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like "stale data" errors</source>
        <translation>Erzwingen Sie die Generierung von Multisig-Sync-Informationen unabhängig vom Wallet-Status, um Sondersituationen wie „veraltete Daten“-Fehler zu beheben.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3761" />
        <source>Initiate transfer with MMS support; arguments identical to normal 'transfer' command arguments, for info see there</source>
        <translation>Übertragung mit MMS-Unterstützung einleiten; Argumente identisch mit normalen &amp;#39;transfer&amp;#39;-Befehlsargumenten, weitere Informationen finden Sie dort</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3765" />
        <source>Delete a single message by giving its id, or delete all messages by using 'all'</source>
        <translation>Löschen Sie eine einzelne Nachricht, indem Sie ihre ID angeben, oder löschen Sie alle Nachrichten, indem Sie „all“ eingeben.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3769" />
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>Senden Sie eine einzelne Nachricht, indem Sie ihre ID angeben, oder senden Sie alle wartenden Nachrichten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3773" />
        <source>Check right away for new messages to receive</source>
        <translation>Prüfen Sie sofort, ob neue Nachrichten eingegangen sind</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3777" />
        <source>Write the content of a message to a file "mms_message_content"</source>
        <translation>Den Inhalt einer Nachricht in die Datei „mms_message_content“ schreiben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3781" />
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>Senden Sie eine einzeilige Nachricht an einen autorisierten Unterzeichner, der durch sein Label identifiziert wird, oder zeigen Sie alle wartenden ungelesenen Notizen an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785" />
        <source>Show detailed info about a single message</source>
        <translation>Detaillierte Informationen zu einer einzelnen Nachricht anzeigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3789" />
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation>Verfügbare Optionen: Auto-Senden &amp;lt;1|0&amp;gt; Ob neu generierte Nachrichten sofort automatisch gesendet werden sollen.
 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795" />
        <source>Send completed signer config to all other authorized signers</source>
        <translation>Senden Sie die abgeschlossene Unterzeichnerkonfiguration an alle anderen autorisierten Unterzeichner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3799" />
        <source>Start auto-config at the auto-config manager's wallet by issuing auto-config tokens and optionally set others' labels</source>
        <translation>Starten Sie die Autokonfiguration im Wallet des Autokonfigurationsmanagers, indem Sie Autokonfigurationstoken ausgeben und optional die Labels anderer festlegen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3807" />
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>Löschen Sie alle Auto-Config-Token und brechen Sie einen Auto-Config-Prozess ab</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3811" />
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>Starten Sie die Autokonfiguration mit dem vom Autokonfigurationsmanager erhaltenen Token</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833" />
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>Markieren Sie Ausgaben als ausgegeben, damit sie nie als falsche Ausgaben in einem Ring ausgewählt werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837" />
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>Markiert einen Ausgang als ungenutzt, sodass er in einem Ring als Fake-Ausgang ausgewählt werden kann.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3841" />
        <source>Checks whether an output is marked as spent</source>
        <translation>Überprüft, ob eine Ausgabe als ausgegeben markiert ist</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4035" />
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;device_name[:device_spec]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4063" />
        <source>wrong number range, use: %s</source>
        <translation>falscher Nummernbereich, verwenden Sie: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4168" />
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>HINWEIS: Die folgenden %s können verwendet werden, um den Zugriff auf Ihr Wallet wiederherzustellen. Notieren Sie sie und bewahren Sie sie an einem sicheren Ort auf. Bitte speichern Sie sie nicht in Ihrer E-Mail oder auf Dateispeicherdiensten außerhalb Ihrer unmittelbaren Kontrolle.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170" />
        <source>string</source>
        <translation>Schnur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170" />
        <source>25 words</source>
        <translation>25 Wörter</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4593" />
        <source>Secret spend key (%u of %u)</source>
        <translation>Geheimer Ausgabenschlüssel (%u von %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4670" />
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>Verwenden Sie --restore-height oder --restore-date, wenn Sie ein bereits eingerichtetes Konto von einer bestimmten Höhe aus wiederherstellen möchten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4672" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4760" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7119" />
        <source>Is this okay?</source>
        <translation>Ist das okay?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4783" />
        <source>Still apply restore height?</source>
        <translation>Immer noch Höhe wiederherstellen anwenden?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4964" />
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>Geben Sie die Nummer ein, die der Sprache Ihrer Wahl entspricht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5967" />
        <source>Device requires attention</source>
        <translation>Das Gerät erfordert Aufmerksamkeit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5973" />
        <source>Enter device PIN</source>
        <translation>Geräte-PIN eingeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5975" />
        <source>Failed to read device PIN</source>
        <translation>Die Geräte-PIN konnte nicht gelesen werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5985" />
        <source>Please enter the device passphrase on the device</source>
        <translation>Bitte geben Sie die Gerätepassphrase auf dem Gerät ein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5992" />
        <source>Enter device passphrase</source>
        <translation>Geben Sie die Gerätepassphrase ein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5994" />
        <source>Failed to read device passphrase</source>
        <translation>Das Lesen der Gerätepassphrase ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6018" />
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation>Die erste Aktualisierung für das HW-basierte Wallet mit dem eingegangenen Geld ist abgeschlossen. hw_key_images_sync wird benötigt. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5537" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020" />
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation>Möchten Sie es jetzt tun? (J/Ja/N/Nein): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2366" />
        <source>Unknown command '%s', try 'help'</source>
        <translation>Unbekannter Befehl „%s“, versuchen Sie „help“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3040" />
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Timeout für Inaktivitätssperre unter Windows deaktiviert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3054" />
        <source>Invalid number of seconds</source>
        <translation>Ungültige Anzahl von Sekunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116" />
        <source>Export format not specified</source>
        <translation>Exportformat nicht angegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3130" />
        <source>Export format not recognized.</source>
        <translation>Exportformat nicht erkannt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3482" />
        <source>Display the restore height</source>
        <translation>Anzeige der Wiederherstellungshöhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3857" />
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>Sperren Sie die Wallet-Konsole. Zum Fortfahren ist die Eingabe des Wallet-Passworts erforderlich.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4033" />
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>vorzeichenlose Ganzzahl (Sekunden, 0 zum Deaktivieren)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036" />
        <source>"binary" or "ascii"</source>
        <translation>&amp;quot;binär&amp;quot; oder &amp;quot;ascii&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4824" />
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>Warnung: Verwendung eines nicht vertrauenswürdigen Daemons bei %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4825" />
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>Die Verwendung eines Drittanbieter-Daemons kann sich nachteilig auf Ihre Sicherheit und Privatsphäre auswirken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4828" />
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>Wenn Sie Ihr eigenes System ohne SSL verwenden, wird Ihr RPC-Verkehr überwacht.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4829" />
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>Es wird dringend empfohlen, die Verbindung zum Salvium-Netzwerk mithilfe Ihres eigenen Daemons herzustellen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4830" />
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>Wenn Sie oder jemand, dem Sie vertrauen, diesen Daemon betreiben, können Sie --trusted-daemon verwenden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4837" />
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>Darüber hinaus ist ein Daemon auch weniger sicher, wenn er im Bootstrap-Modus ausgeführt wird</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850" />
        <source>If you are new to Salvium, type "welcome" for a brief overview.</source>
        <translation>Wenn Sie Salvium noch nicht kennen, geben Sie „Willkommen“ ein, um einen kurzen Überblick zu erhalten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5003" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5101" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5149" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5192" />
        <source>Error creating wallet: </source>
        <translation>Fehler beim Erstellen der Brieftasche: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477" />
        <source>Failed to query mining status: </source>
        <translation>Abfrage des Mining-Status fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5488" />
        <source>Failed to setup background mining: </source>
        <translation>Das Einrichten des Hintergrund-Minings ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5464" />
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>Hintergrund-Mining aktiviert. Vielen Dank für die Unterstützung des Salvium-Netzwerks.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5492" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5500" />
        <source>Background mining not enabled. Run "set setup-background-mining 1" to change.</source>
        <translation>Hintergrund-Mining nicht aktiviert. Führen Sie „set setup-background-mining 1“ aus, um dies zu ändern.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5506" />
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>Verwendung eines nicht vertrauenswürdigen Daemons, Überspringen der Hintergrund-Mining-Prüfung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5534" />
        <source>The daemon is not set up to background mine.</source>
        <translation>Der Daemon ist nicht für das Mining im Hintergrund eingerichtet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5541" />
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>Background Mining ist nicht aktiviert. Um dies zu ändern, setzen Sie setup-background-mining auf 1.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5903" />
        <source>NOTE: This transaction is locked, see details with: show_transfer </source>
        <translation>HINWEIS: Diese Transaktion ist gesperrt, siehe Details mit: show_transfer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6022" />
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>hw_key_images_sync übersprungen. Führen Sie den Befehl vor einer Übertragung manuell aus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6247" />
        <source>Invalid keyword: </source>
        <translation>Ungültiges Schlüsselwort: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6535" />
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
Geben Sie %llu/%llu (%s) ein: Betrag=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628" />
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>Bei einer Transaktion wird mehr als eine sehr alte Ausgabe ausgegeben. Der Datenschutz wäre besser, wenn sie separat gesendet würden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6629" />
        <source>Spend them now anyway?</source>
        <translation>Trotzdem jetzt ausgeben?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6871" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8479" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9229" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9798" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9806" />
        <source>amount is wrong: </source>
        <translation>Betrag ist falsch: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6872" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8479" />
        <source>expected number from 0 to </source>
        <translation>erwartete Zahl von 0 bis </translation>
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
        <translation>Transaktion abgebrochen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6981" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7595" />
        <source>No outputs found, or daemon is not ready</source>
        <translation>Keine Ausgaben gefunden oder Daemon ist nicht bereit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2343" />
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>Anders als bei Bitcoin bleiben Ihre Salvium-Transaktionen und Ihr Salvium-Guthaben privat und sind standardmäßig nicht für die Welt sichtbar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2344" />
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>Sie haben jedoch die Möglichkeit, diese bei Bedarf ausgewählten Parteien zur Verfügung zu stellen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5895" />
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>HINWEIS: Diese Transaktion verwendet eine verschlüsselte Zahlungs-ID. Erwägen Sie stattdessen die Verwendung von Unteradressen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5900" />
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>ACHTUNG: Diese Transaktion verwendet eine unverschlüsselte Zahlungs-ID. Diese ist veraltet und wird ignoriert. Verwenden Sie stattdessen Unteradressen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014" />
        <source>Failed to check for backlog: </source>
        <translation>Überprüfung auf Rückstand fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7063" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7617" />
        <source>
Transaction </source>
        <translation>
Transaktion </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7070" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7624" />
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>WARNUNG: Ausgaben mehrerer Adressen werden zusammen verwendet, was möglicherweise Ihre Privatsphäre gefährden kann.
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
        <translation>Nicht signierte Transaktion(en) erfolgreich in MMS geschrieben</translation>
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
        <translation>Das Schreiben der Transaktion(en) in die Datei ist fehlgeschlagen</translation>
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
        <translation>Nicht signierte Transaktion(en) erfolgreich in Datei geschrieben: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7161" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7674" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7909" />
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>Cold Signing der Transaktion mit HW Wallet fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7308" />
        <source>No unmixable outputs found</source>
        <translation>Keine nicht mischbaren Ausgänge gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321" />
        <source>Sweeping </source>
        <translation>Fegen </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8490" />
        <source>Failed to parse donation address: </source>
        <translation>Die Spendenadresse konnte nicht analysiert werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8506" />
        <source>Donating %s %s to %s.</source>
        <translation>Spende %s %s an %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8654" />
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>%lu Transaktionen geladen, für %s, Gebühr %s, %s, %s, mit minimaler Ringgröße %lu, %s. %sIst das okay?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>direction</source>
        <translation>Richtung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>timestamp</source>
        <translation>Zeitstempel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>running balance</source>
        <translation>laufender Saldo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>hash</source>
        <translation>Hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>payment ID</source>
        <translation>Zahlungs-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>fee</source>
        <translation>Gebühr</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>destination</source>
        <translation>Ziel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>index</source>
        <translation>Index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>note</source>
        <translation>Notiz</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9770" />
        <source>CSV exported to </source>
        <translation>CSV exportiert nach </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9955" />
        <source>Rescan anyway?</source>
        <translation>Trotzdem erneut scannen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9966" />
        <source>Warning: your restore height is higher than wallet restore height: </source>
        <translation>Achtung: Ihre Wiederherstellungshöhe ist höher als die Wiederherstellungshöhe der Brieftasche: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9967" />
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>Trotzdem erneut scannen? (J/Ja/N/Nein): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9988" />
        <source>MMS received new message</source>
        <translation>MMS neue Nachricht erhalten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10157" />
        <source>locked due to inactivity</source>
        <translation>gesperrt wegen Inaktivität</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10559" />
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;index&gt;ist außerhalb der Grenzen</translation>
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
        <translation>Typ: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6680" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10837" />
        <source>Network type: </source>
        <translation>Netzwerktyp: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1402" />
        <source>Multisig info imported. Number of outputs updated: </source>
        <translation>Multisig-Informationen importiert. Anzahl der Ausgaben aktualisiert: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1750" />
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>Schlüsselbild entweder nicht ausgegeben oder mit Ringgröße 1 ausgegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334" />
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>Die meisten dieser Knoten sind wahrscheinlich Spione. Sie sollten sie nicht verwenden, es sei denn, Sie verbinden sich über Tor oder I2P</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340" />
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>Willkommen bei Salvium, der neuen und verbesserten privaten Kryptowährung.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2352" />
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>Willkommen bei Salvium und konformer finanzieller Privatsphäre. Weitere Informationen finden Sie unter https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2471" />
        <source>invalid index: must be an unsigned integer</source>
        <translation>ungültiger Index: muss eine vorzeichenlose Ganzzahl sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2476" />
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt;ist außerhalb der Grenzen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514" />
        <source>Failed to generate QR code, input too large</source>
        <translation>QR-Code konnte nicht generiert werden, Eingabe zu groß</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3167" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3186" />
        <source>Value not specified</source>
        <translation>Wert nicht angegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3157" />
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>Achtung: Veraltete Formate verwenden Boost-Serialisierung, die zu Pufferüberläufen und Abstürzen führt. Laden Sie nur veraltete Formate aus Quellen, denen Sie vertrauen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3206" />
        <source>Important commands:</source>
        <translation>Wichtige Befehle:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3208" />
        <source>"welcome" - Show welcome message.</source>
        <translation>„Willkommen“ – Willkommensnachricht anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3209" />
        <source>"help all" - Show the list of all available commands.</source>
        <translation>„help all“ – Zeigt die Liste aller verfügbaren Befehle an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3210" />
        <source>"help &lt;command&gt;" - Show a command's documentation.</source>
        <translation>&amp;quot;helfen&lt;command&gt; &amp;quot; - Dokumentation eines Befehls anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3211" />
        <source>"apropos &lt;keyword&gt;" - Show commands related to a keyword.</source>
        <translation>&amp;quot;apropos&lt;keyword&gt; &amp;quot; - Befehle anzeigen, die mit einem Schlüsselwort in Zusammenhang stehen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213" />
        <source>"wallet_info" - Show wallet main address and other info.</source>
        <translation>„wallet_info“ – Zeigt die Hauptadresse des Wallets und andere Informationen an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3214" />
        <source>"balance" - Show balance.</source>
        <translation>„Balance“ – Balance anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3215" />
        <source>"address all" - Show all addresses.</source>
        <translation>„alle Adressen“ – Alle Adressen anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3216" />
        <source>"address new" - Create new subaddress.</source>
        <translation>„Adresse neu“ - Neue Unteradresse anlegen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3217" />
        <source>"transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]" - Send SAL to an address.</source>
        <translation>&amp;quot;überweisen&lt;address&gt;&lt;amount&gt; [&lt;asset_type&gt; ]&amp;quot; - Senden Sie SAL an eine Adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218" />
        <source>"return_payment &lt;tx_hash&gt;" - Return a previously-received amount to sender.</source>
        <translation>&amp;quot;Rückzahlung&lt;tx_hash&gt; &amp;quot; - Einen zuvor erhaltenen Betrag an den Absender zurücksenden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3219" />
        <source>"burn &lt;amount&gt; &lt;asset_type&gt;" - destroy coins forever.</source>
        <translation>&amp;quot;brennen&lt;amount&gt;&lt;asset_type&gt; &amp;quot; - Münzen für immer zerstören.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3220" />
        <source>"convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]" - convert between coin types.</source>
        <translation>&amp;quot;konvertieren&lt;amount&gt;&lt;source_asset&gt;&lt;dest_asset&gt; [&lt;slippage_limit&gt; ]&amp;quot; - zwischen Münztypen umrechnen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221" />
        <source>"stake &lt;amount&gt;" - stake SAL for 30 days to earn yield.</source>
        <translation>&amp;quot;Einsatz&lt;amount&gt; „ – Setzen Sie SAL 30 Tage lang ein, um Rendite zu erzielen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3222" />
        <source>"price_info" - Display current pricing information for supported assets.</source>
        <translation>„price_info“ – Zeigt aktuelle Preisinformationen für unterstützte Assets an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3223" />
        <source>"supply_info" - Display circulating supply information.</source>
        <translation>„supply_info“ – Informationen zum Umlaufangebot anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3224" />
        <source>"yield_info" - Display current stats on Salvium staking / yield.</source>
        <translation>„yield_info“ – Zeigt aktuelle Statistiken zum Salvium-Staking/-Ertrag an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3225" />
        <source>"show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]" - Show transactions.</source>
        <translation>„show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]“ – Transaktionen anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3226" />
        <source>"sweep_all &lt;address&gt;" - Send whole balance to another wallet.</source>
        <translation>&amp;quot;alles fegen&lt;address&gt; &amp;quot; – Senden Sie den gesamten Kontostand an ein anderes Wallet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3227" />
        <source>"seed" - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>„Seed“ – Zeigt 25 geheime Wörter an, mit denen dieses Wallet wiederhergestellt werden kann.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3228" />
        <source>"refresh" - Synchronize wallet with the Salvium network.</source>
        <translation>„Aktualisieren“ – Wallet mit dem Salvium-Netzwerk synchronisieren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3229" />
        <source>"status" - Check current status of wallet.</source>
        <translation>„Status“ – Überprüfen Sie den aktuellen Status der Brieftasche.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3230" />
        <source>"version" - Check software version.</source>
        <translation>„Version“ – Softwareversion prüfen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3231" />
        <source>"exit" - Exit wallet.</source>
        <translation>„exit“ – Brieftasche verlassen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233" />
        <source>"donate &lt;amount&gt;" - Donate SAL to the development team.</source>
        <translation>&amp;quot;spenden&lt;amount&gt; &amp;quot; – Spenden Sie SAL an das Entwicklungsteam.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263" />
        <source>No commands found mentioning keyword(s)</source>
        <translation>Keine Befehle gefunden, die Schlüsselwörter erwähnen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3293" />
        <source>Invalid txid specified: </source>
        <translation>Ungültige txid angegeben: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300" />
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>ACHTUNG: Dieser Vorgang kann die txids dem Remote-Knoten offenbaren und Ihre Privatsphäre beeinträchtigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3302" />
        <source>You have canceled the operation</source>
        <translation>Sie haben den Vorgang abgebrochen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3347" />
        <source>Set another daemon to connect to. If it's not yours, it'll probably spy on you.</source>
        <translation>Richten Sie einen anderen Daemon ein, mit dem eine Verbindung hergestellt werden soll. Wenn es nicht Ihrer ist, wird er Sie wahrscheinlich ausspionieren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3373" />
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included). The "subtractfeefrom=" list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: "transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2". Let's say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use "subtractfeefrom=all" to spread the fee across all destinations.</source>
        <translation>Überweisen&lt;amount&gt; von&lt;asset_type&gt; Zu&lt;address&gt; . Wenn der Parameter &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; angegeben ist, verwendet das Wallet Ausgaben, die von Adressen dieser Indizes empfangen wurden. Wenn es weggelassen wird, wählt das Wallet die zu verwendenden Adressindizes nach dem Zufallsprinzip aus. In jedem Fall versucht es, Ausgaben mehrerer Adressen möglichst nicht zu kombinieren.&lt;priority&gt; ist die Priorität der Transaktion. Je höher die Priorität, desto höher die Transaktionsgebühr. Gültige Werte in Prioritätsreihenfolge (von niedrig nach hoch) sind: unwichtig, normal, erhöht, Priorität. Wenn nicht angegeben, wird der Standardwert (siehe Befehl „Priorität festlegen“) verwendet.&lt;ring_size&gt; ist die Anzahl der Eingaben, die zur Nichtnachverfolgbarkeit einbezogen werden sollen. Mehrere Zahlungen können gleichzeitig vorgenommen werden, indem URI_2 oder&lt;address_2&gt;&lt;amount_2&gt; usw. (vor der Zahlungs-ID, falls diese enthalten ist). Die Liste „subtractfeefrom=“ ermöglicht es Ihnen, auszuwählen, von welchen Zielen die Überweisungsgebühr statt des Wechselgelds bezahlt werden soll. Die Gebühr wird proportional gleichmäßig auf die ausgewählten Ziele aufgeteilt. Um beispielsweise 3 Überweisungen zu tätigen, bei denen die Gebühr vom ersten und dritten Ziel abgezogen wird, könnte man Folgendes tun: „transfer&lt;addr1&gt; 3&lt;addr2&gt; 0,5&lt;addr3&gt; 1 subtractfeefrom=0,2&amp;quot;. Angenommen, die Tx-Gebühr beträgt 0,1. Der Saldo würde einschließlich Gebühren um genau 4,5 SAL sinken, und addr1 und addr3 würden jeweils 2,925 und 0,975 SAL erhalten. Verwenden Sie &amp;quot;subtractfeefrom=all&amp;quot;, um die Gebühr auf alle Ziele zu verteilen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381" />
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>Senden Sie das gesamte freigeschaltete Guthaben an eine Adresse und sperren Sie es für&lt;lockblocks&gt; (max. 1000000). Wenn der Parameter &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; oder &amp;quot;index=all&amp;quot; angegeben ist, durchsucht das Wallet die von diesen bzw. allen Adressindizes empfangenen Ausgaben. Wenn diese Option weggelassen wird, wählt das Wallet nach dem Zufallsprinzip einen zu verwendenden Adressindex aus.&lt;priority&gt; ist die Priorität des Sweeps. Je höher die Priorität, desto höher die Transaktionsgebühr. Gültige Werte in Prioritätsreihenfolge (von niedrig nach hoch) sind: unwichtig, normal, erhöht, Priorität. Wenn nicht angegeben, wird der Standardwert (siehe Befehl „Priorität festlegen“) verwendet.&lt;ring_size&gt; ist die Anzahl der Eingaben, die zur Nicht-Rückverfolgbarkeit einbezogen werden sollen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3387" />
        <source>Send all unlocked balance to an address. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter "outputs=&lt;N&gt;" is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Senden Sie alle freigeschalteten Guthaben an eine Adresse. Wenn der Parameter &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; oder &amp;quot;index=all&amp;quot; angegeben ist, durchsucht das Wallet die von diesen bzw. allen Adressindizes empfangenen Ausgaben. Wenn dieser Parameter weggelassen wird, wählt das Wallet nach dem Zufallsprinzip einen zu verwendenden Adressindex aus. Wenn der Parameter &amp;quot;outputs=&lt;N&gt; &amp;quot; angegeben ist und N &amp;gt; 0, teilt Wallet die Transaktion in N gleichmäßige Ausgaben auf.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3390" />
        <source>Send all unlocked balance from a given account to an address. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter "outputs=&lt;N&gt;" is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Senden Sie den gesamten freigeschalteten Saldo eines bestimmten Kontos an eine Adresse. Wenn der Parameter &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; oder &amp;quot;index=all&amp;quot; angegeben ist, durchsucht das Wallet die von diesen bzw. allen Adressindizes empfangenen Ausgaben. Wenn dieser Parameter weggelassen wird, wählt das Wallet nach dem Zufallsprinzip einen zu verwendenden Adressindex aus. Wenn der Parameter &amp;quot;outputs=&lt;N&gt; &amp;quot; angegeben ist und N &amp;gt; 0, teilt Wallet die Transaktion in N gleichmäßige Ausgaben auf.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402" />
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>Gibt die in TX eingegangene(n) Zahlung(en) zurück&lt;tx_hash&gt; an den ursprünglichen Absender.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406" />
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>zerstört (verbrennt) DAUERHAFT&lt;amount&gt; von&lt;asset_type&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410" />
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>Konvertiert&lt;amount&gt;&lt;source_asset&gt; hinein&lt;dest_asset&gt; , mit optionalem&lt;slippage_limit&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414" />
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>Schlösser&lt;amount&gt; von SAL als Beteiligung, um Rendite zu erzielen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418" />
        <source>Displays the current exchange rate information for SAL &lt;--&gt; VSD conversions</source>
        <translation>Zeigt die aktuellen Wechselkursinformationen für SAL &amp;lt;--&amp;gt; VSD-Konvertierungen an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3422" />
        <source>Displays the current circulating supply information for SAL and VSD currencies</source>
        <translation>Zeigt die aktuellen Umlaufinformationen für SAL- und VSD-Währungen an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426" />
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>Zeigt die Statistiken für die Renditen der letzten&lt;NN&gt; Blöcke</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430" />
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>Spenden&lt;amount&gt; an das Entwicklungsteam (donate.salvium.io).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3456" />
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If "all" is specified, the wallet shows all the existing addresses in the currently selected account. If "new " is specified, the wallet creates a new address with the provided label text (which can be empty). If "mnew" is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If "label" is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If "one-off" is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>Wenn keine Argumente angegeben werden oder&lt;index&gt; angegeben ist, zeigt das Wallet die Standardadresse oder die angegebene Adresse an. Wenn „all“ angegeben ist, zeigt das Wallet alle vorhandenen Adressen im aktuell ausgewählten Konto an. Wenn „new“ angegeben ist, erstellt das Wallet eine neue Adresse mit dem angegebenen Beschriftungstext (der leer sein kann). Wenn „mnew“ angegeben ist, erstellt das Wallet so viele neue Adressen, wie durch das Argument angegeben; die Standardbeschriftung wird für die neuen Adressen festgelegt. Wenn „label“ angegeben ist, legt das Wallet die Beschriftung der Adresse fest, die durch&lt;index&gt; zum angegebenen Beschriftungstext. Wenn „one-off“ angegeben ist, wird die Adresse für den angegebenen Index generiert und angezeigt und von der Brieftasche gespeichert.</translation>
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
        <translation>Verfügbare Optionen: Seed-Sprache: Legen Sie die Seed-Sprache des Wallets fest. always-confirm-transfers &amp;lt;1|0&amp;gt; Gibt an, ob nicht aufgeteilte Transaktionen bestätigt werden sollen. print-ring-members &amp;lt;1|0&amp;gt; Gibt an, ob bei der Bestätigung ausführliche Informationen über die Ringmitglieder ausgedruckt werden sollen. store-tx-info &amp;lt;1|0&amp;gt; Gibt an, ob Informationen zu ausgehenden Transaktionen (Zieladresse, Zahlungs-ID, geheimer Transaktionsschlüssel) zur späteren Bezugnahme gespeichert werden sollen. auto-refresh &amp;lt;1|0&amp;gt; Gibt an, ob neue Blöcke automatisch vom Daemon synchronisiert werden sollen. refresh-type&lt;full|optimize-coinbase|no-coinbase|default&gt; Legen Sie das Aktualisierungsverhalten des Wallets fest. Priorität [0|1|2|3|4] Legen Sie die Gebühr auf Standard/unwichtig/normal/erhöht/Priorität fest. Bestätigung der fehlenden Zahlungs-ID &amp;lt;1|0&amp;gt; (veraltet) Passwort fragen &amp;lt;0|1|2 (oder nie|Aktion|Entschlüsseln)&amp;gt; Aktion: Fragen Sie vor vielen Aktionen wie Überweisungen usw. nach dem Passwort. Entschlüsseln: dasselbe wie Aktion, aber der Ausgabeschlüssel bleibt verschlüsselt im Speicher, wenn er nicht benötigt wird. Einheit&lt;sal|millisal|microsal&gt; Legen Sie die Standard-Salvium(unter-)einheit fest. min-outputs-count [n] Versuchen Sie, mindestens so viele Ausgaben mit dem Wert min-outputs-value beizubehalten. min-outputs-value [n] Versuchen Sie, mindestens min-outputs-count Ausgaben mit mindestens diesem Wert beizubehalten. merge-destinations &amp;lt;1|0&amp;gt; Ob mehrere Zahlungen an die gleiche Zieladresse zusammengeführt werden sollen. confirm-backlog &amp;lt;1|0&amp;gt; Ob bei einem Transaktionsrückstand gewarnt werden soll. confirm-backlog-threshold [n] Legen Sie einen Schwellenwert für confirm-backlog fest, um nur zu warnen, wenn der Transaktionsrückstand größer als n Blöcke ist. confirm-export-overwrite &amp;lt;1|0&amp;gt; Ob gewarnt werden soll, wenn die zu exportierende Datei bereits existiert. refresh-from-block-height [n] Legen Sie die Höhe fest, vor der Blöcke ignoriert werden sollen. auto-low-priority &amp;lt;1|0&amp;gt; Ob automatisch die niedrige Gebührenstufe verwendet werden soll, wenn dies sicher ist. segregate-pre-fork-outputs &amp;lt;1|0&amp;gt; Legen Sie dies fest, wenn Sie Ausgaben sowohl für Salvium als auch für einen Fork mit Schlüsselwiederverwendung ausgeben möchten. key-reuse-mitigation2 &amp;lt;1|0&amp;gt; Legen Sie dies fest, wenn Sie nicht sicher sind, ob Sie später für einen Fork mit Schlüsselwiederverwendung von Salvium ausgeben möchten. subaddress-lookahead&lt;major&gt; :&lt;minor&gt; Legen Sie die Lookahead-Größen für die Subadressen-Hash-Tabelle fest. Trennungshöhe&lt;n&gt; Stellen Sie die Höhe einer Schlüsselwiederverwendungsgabel ein, die Sie verwenden möchten, 0, um die Standardeinstellung zu verwenden. ignore-fractional-outputs &amp;lt;1|0&amp;gt; Gibt an, ob Teilausgaben ignoriert werden sollen, die bei Ausgaben aufgrund von Gebühren zu einem Nettoverlust führen. ignore-outputs-above&lt;amount&gt; Ignoriere Ausgaben über diesem Schwellenwert beim Ausgeben. Der Wert 0 wird in den Maximalwert (18 Millionen) übersetzt, wodurch dieser Filter deaktiviert wird. ignore-outputs-below&lt;amount&gt; Beim Ausgeben Ausgaben unter diesem Schwellenwert ignorieren. track-uses &amp;lt;1|0&amp;gt; Gibt an, ob die Verwendungen der eigenen Ausgaben nachverfolgt werden sollen. setup-background-mining &amp;lt;1|0&amp;gt; Gibt an, ob Background Mining aktiviert werden soll. Legen Sie dies fest, um das Netzwerk zu unterstützen und die Chance zu erhalten, neues Salvium zu erhalten. device-name&lt;device_name[:device_spec]&gt; Gerätename für Hardware-Wallet. export-format &amp;lt;&amp;quot;binary&amp;quot;|&amp;quot;ascii&amp;quot;&amp;gt; Speichert alle exportierten Dateien als Binärdatei (kann nicht kopiert und eingefügt werden) oder ASCII-Datei (kann). persistent-rpc-client-id &amp;lt;1|0&amp;gt; Gibt an, ob bei Wallet-Neustarts die gleiche Client-ID für RPC-Zahlungen weiter verwendet werden soll. auto-mine-for-rpc-payment-threshold&lt;float&gt; Ob automatisch mit dem Mining für RPC-Zahlungen begonnen werden soll, wenn der Daemon dies erfordert. Credits-Ziel&lt;unsigned int&gt; Der RPC-Zahlungssaldo wird dem Ziel gutgeschrieben (0 ist Standard). show-wallet-name-when-locked &amp;lt;1|0&amp;gt; Stellen Sie dies ein, wenn Sie den Wallet-Namen im gesperrten Zustand anzeigen möchten. enable-multisig-experimental &amp;lt;1|0&amp;gt; Stellen Sie dies ein, um Multisig-Befehle zuzulassen. Multisig kann derzeit ausgenutzt werden, wenn sich die Parteien nicht gegenseitig vertrauen. inactivity-lock-timeout&lt;unsigned int&gt; Wie viele Sekunden gewartet werden soll, bevor die Brieftasche gesperrt wird (0 zum Deaktivieren). freeze-incoming-payments &amp;lt;1|0&amp;gt; Gibt an, ob eingehende Zahlungen automatisch eingefroren werden sollen, damit sie nicht irrtümlich ausgegeben werden können.</translation>
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
        <translation>Zeigt die eingehenden/ausgehenden Überweisungen innerhalb eines optionalen Höhenbereichs an. Ausgabeformat: In oder Coinbase: Blocknummer, „Block“|„In“, Zeit, Betrag, Vermögenstyp, Transaktions-Hash, Zahlungs-ID, Unteradressindex, „-“, Hinweis Out: Blocknummer, „Out“, Zeit, Betrag*, Vermögenstyp, Transaktions-Hash, Zahlungs-ID, Gebühr, Ziele, Eingabeadressen**, „-“, Hinweis Pool: „Pool“, „In“, Zeit, Betrag, Vermögenstyp, Transaktions-Hash, Zahlungs-ID, Unteradressindex, „-“, Hinweis, Doppelausgabe Hinweis Ausstehend oder fehlgeschlagen: „fehlgeschlagen“|„ausstehend“, „Out“, Zeit, Betrag*, Transaktions-Hash, Zahlungs-ID, Gebühr, Eingabeadressen**, „-“, Hinweis Staked oder Burnt: Blocknummer, „Out“, Zeit, Betrag*, Vermögenstyp, Transaktions-Hash, Zahlungs-ID, Gebühr, Eingabeadressen**, „-“, Hinweis * Ohne Wechselgeld und Gebühr. ** Satz von Adressindizes, die als Eingaben in dieser Überweisung verwendet werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618" />
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [ein|aus|alle|ausstehend|fehlgeschlagen|Pool|Coinbase|verbrannt|eingesetzt|Ertrag] [Index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [Ausgabe=&lt;filepath&gt; ] [Option=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653" />
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>Signieren Sie den Inhalt einer Datei mit der angegebenen Unteradresse (oder der Hauptadresse, wenn diese nicht angegeben ist).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3728" />
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>Schnittstelle zum MMS (Multisig Messaging System)&lt;subcommand&gt; ist eines von: init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum Hilfe zu einem Unterbefehl erhalten Sie mit: help mms&lt;subcommand&gt; oder Hilfe-MMS&lt;subcommand&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3803" />
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>Erhalten Sie eine Prüfsumme, mit der Unterzeichner problemlos prüfen können, ob die MMS-Konfiguration identisch ist</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889" />
        <source>Show address as QR code</source>
        <translation>Adresse als QR-Code anzeigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3897" />
        <source>Search all command descriptions for keyword(s)</source>
        <translation>Durchsuchen Sie alle Befehlsbeschreibungen nach Schlüsselwort(en)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3901" />
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>Scannen Sie die Transaktionen von&lt;txid&gt; (s), sie zu verarbeiten und nach Ergebnissen zu suchen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014" />
        <source>sal, millisal, microsal</source>
        <translation>Sal, Millisal, Mikrosal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032" />
        <source>1 or 0</source>
        <translation>1 oder 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4257" />
        <source>Multisig is disabled.</source>
        <translation>Multisig ist deaktiviert.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4258" />
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can't be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>Multisig ist eine experimentelle Funktion und kann Fehler enthalten. Folgende Dinge können schiefgehen: An ein Multisig-Wallet gesendete Gelder können überhaupt nicht ausgegeben werden, können nur mit Beteiligung eines böswilligen Gruppenmitglieds ausgegeben werden oder können von einem böswilligen Gruppenmitglied gestohlen werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4260" />
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>Sie haben die Wiederherstellung eines Multisig-Wallets abgebrochen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4915" />
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>Wallet konnte keine Verbindung zum Daemon herstellen, da es auf Offline-Modus eingestellt ist</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4917" />
        <source>wallet failed to connect to daemon, because it is not up to date. </source>
        <translation>Die Verbindung des Wallets zum Daemon ist fehlgeschlagen, da es nicht auf dem neuesten Stand ist. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4918" />
        <source>Please make sure you are running the latest wallet.</source>
        <translation>Bitte stellen Sie sicher, dass Sie die neueste Brieftasche verwenden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4921" />
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the 'set_daemon' command.</source>
        <translation>Daemon ist nicht auf dem neuesten Stand. Bitte stellen Sie sicher, dass der Daemon die neueste Version ausführt, oder ändern Sie die Daemon-Adresse mit dem Befehl „set_daemon“.</translation>
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
        <translation>Ihre Brieftasche wurde generiert! Um die Synchronisierung mit dem Daemon zu starten, verwenden Sie den Befehl „refresh“. Verwenden Sie den Befehl „help“, um eine vereinfachte Liste der verfügbaren Befehle anzuzeigen. Verwenden Sie den Befehl „help all“, um die Liste aller verfügbaren Befehle anzuzeigen. Verwenden Sie „help&lt;command&gt; &amp;quot;, um die Dokumentation eines Befehls anzuzeigen. Verwenden Sie beim Schließen von salvium-wallet-cli immer den Befehl „exit“, um den Status Ihrer aktuellen Sitzung zu speichern. Andernfalls müssen Sie Ihre Brieftasche möglicherweise erneut synchronisieren (Ihre Brieftaschenschlüssel sind in keinem Fall gefährdet).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5348" />
        <source>Use the "help" command to see a simplified list of available commands.
</source>
        <translation>Verwenden Sie den Befehl „Hilfe“, um eine vereinfachte Liste der verfügbaren Befehle anzuzeigen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5349" />
        <source>Use "help all" to see the list of all available commands.
</source>
        <translation>Verwenden Sie „help all“, um die Liste aller verfügbaren Befehle anzuzeigen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5536" />
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>Durch die Aktivierung wird das von Ihnen verwendete Netzwerk unterstützt und Sie sind berechtigt, neue SALs zu erhalten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703" />
        <source>Failed to parse address</source>
        <translation>Adresse konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5718" />
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got </source>
        <translation>Erwartet vertrauenswürdig, nicht vertrauenswürdig oder dies ist wahrscheinlich ein Spionageknoten. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5727" />
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>Dies ist keine Tor/I2P-Adresse und kein vertrauenswürdiger Daemon.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5728" />
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>Verwenden Sie entweder Ihren eigenen vertrauenswürdigen Knoten, stellen Sie eine Verbindung über Tor oder I2P her oder übergeben Sie „Dies ist wahrscheinlich ein Spionageknoten“ und lassen Sie sich ausspionieren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5733" />
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>Warnung: Wenn Sie eine Verbindung zu einem nicht lokalen Daemon ohne SSL herstellen, können passive Gegner Sie ausspionieren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5836" />
        <source>stake returned </source>
        <translation>Einsatz zurückgegeben </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5842" />
        <source>yield earned </source>
        <translation>Erwirtschafteter Ertrag </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5853" />
        <source>burnt </source>
        <translation>verbrannt </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5858" />
        <source>converting </source>
        <translation>Konvertieren </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5863" />
        <source>staked </source>
        <translation>abgesteckt </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5982" />
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>Das Gerät fordert eine Passphrase an. Möchten Sie die Passphrase auf dem Gerät (J) (oder auf dem Host (N)) eingeben?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005" />
        <source>The wallet's refresh-from-block-height setting is higher than the daemon's height: this may mean your wallet will skip over transactions</source>
        <translation>Die Einstellung für die Aktualisierung von Blockhöhe des Wallets ist höher als die Höhe des Daemons: Dies kann bedeuten, dass Ihr Wallet Transaktionen überspringt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6155" />
        <source> (Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation> (Bei einigen eigenen Ausgaben fehlen Schlüsselbilder – export_outputs, import_outputs, export_key_images und import_key_images werden benötigt)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171" />
        <source>Asset: </source>
        <translation>Vermögenswert: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10353" />
        <source>, balance: </source>
        <translation>, Gleichgewicht: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6494" />
        <source>failed to connect to daemon</source>
        <translation>Verbindung zum Daemon konnte nicht hergestellt werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6595" />
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>, was die Anonymität von Ringsignaturen brechen kann. Stellen Sie sicher, dass dies beabsichtigt ist!
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653" />
        <source>I locked your Salvium wallet to protect you while you were away
see "help set" to configure/disable</source>
        <translation>Ich habe Ihr Salvium-Wallet zu Ihrem Schutz während Ihrer Abwesenheit gesperrt. Informationen zum Konfigurieren/Deaktivieren finden Sie unter „Hilfe-Set“.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6673" />
        <source>Locked due to inactivity.</source>
        <translation>Wegen Inaktivität gesperrt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6674" />
        <source>The wallet password is required to unlock the console.</source>
        <translation>Zum Entsperren der Konsole ist das Wallet-Passwort erforderlich.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6681" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10838" />
        <source>Testnet</source>
        <translation>Testnetz</translation>
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
        <translation>Mainnet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073" />
        <source>Burning %s %s.  </source>
        <translation>Brennen %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7075" />
        <source>Converting %s %s to %s.  </source>
        <translation>Konvertierung von %s %s in %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7077" />
        <source>Staking %s %s for yield accrual.  </source>
        <translation>Staking von %s %s zur Ertragssteigerung.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7079" />
        <source>Sending %s %s.  </source>
        <translation>Senden von %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7098" />
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>. Diese Transaktion (einschließlich %s Wechselgeld) wird in %llu Blöcken freigeschaltet, ungefähr in %s Tagen (bei angenommenen 2 Minuten pro Block).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975" />
        <source>Invalid account</source>
        <translation>Ungültiges Konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8006" />
        <source>return_payments are disabled</source>
        <translation>return_payments sind deaktiviert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8042" />
        <source>incorrect TX type for txid </source>
        <translation>falscher TX-Typ für txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8048" />
        <source>invalid return_address_list for txid </source>
        <translation>ungültige return_address_list für txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054" />
        <source>invalid return_address/return_pubkey for txid </source>
        <translation>ungültige return_address/return_pubkey für txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8061" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8072" />
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid </source>
        <translation>Schlüsselbild ist für txid nicht verfügbar (teilweise / unbekannt / ausgegeben / eingefroren) </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8104" />
        <source>Returning %s for a total fee of %s.  Is this okay?</source>
        <translation>Rückgabe von %s für eine Gesamtgebühr von %s. Ist das okay?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8134" />
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>Kaltsignierung von Return-TXs noch nicht implementiert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8224" />
        <source>conversions are disabled until hard fork </source>
        <translation>Konvertierungen sind bis zum Hard Fork deaktiviert </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8231" />
        <source>missing / extraneous argument(s)</source>
        <translation>fehlende/unwichtige Argumente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8247" />
        <source>invalid slippage_limit value : expected 0.0-90.0, got </source>
        <translation>ungültiger Slippage_Limit-Wert: erwartet 0,0-90,0, erhalten </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8258" />
        <source>invalid argument(s): </source>
        <translation>ungültige(s) Argument(e): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8264" />
        <source>out of range for slippage limit: </source>
        <translation>außerhalb des Bereichs für die Schlupfgrenze: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8274" />
        <source>invalid destination asset_type</source>
        <translation>ungültiger Ziel-Asset-Typ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8284" />
        <source>invalid source asset_type</source>
        <translation>ungültiger Quell-Asset-Typ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8293" />
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>ungültige Konvertierung – asset_type ist unverändert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8318" />
        <source>This is a multisig wallet, staking is not currently supported</source>
        <translation>Dies ist eine Multisig-Wallet, Staking wird derzeit nicht unterstützt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8356" />
        <source>%s
	SPOT:	%d
	MA:	%d</source>
        <translation>%s SPOT: %d MA: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8380" />
        <source>SUPPLY INFO</source>
        <translation>LIEFERINFORMATIONEN</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8391" />
        <source>	%6s : %21.8d</source>
        <translation>	%6s : %21.8d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8418" />
        <source>
STAKED FUNDS:</source>
        <translation>
EINGESETZTE FONDS:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8424" />
        <source>Height %d, txid %s, staked %s SAL, earned %s SAL</source>
        <translation>Höhe %d, txid %s, eingesetzte %s SAL, verdiente %s SAL</translation>
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
ERTRAGSINFO: In den letzten %s verbrannte Vorratsmünzen: %d Gesamtzahl gesperrter Münzen: %d In den letzten %s aufgelaufener Ertrag: %d Ertrag pro eingesetztem SAL: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8504" />
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>Spende %s %s an das Salvium-Team (donate.salvium.io oder %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8855" />
        <source>Last argument is an address, but not a subaddress</source>
        <translation>Letztes Argument ist eine Adresse, aber keine Unteradresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8909" />
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>Es könnte daran liegen, dass die Überweisung an eine Unteradresse erfolgte. Wenn dies der Fall ist, geben Sie die Unteradresse zuletzt weiter.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9604" />
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>Verwendung: show_transfers [ein|aus|alle|ausstehend|fehlgeschlagen|Pool|Coinbase|verbrannt|eingesetzt|Ertrag] [Index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9663" />
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>Verwendung: export_transfers [ein|aus|alle|ausstehend|fehlgeschlagen|Pool|Coinbase|verbrannt|eingesetzt|Ertrag] [Index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [Ausgabe=&lt;path&gt; ] [Option=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>tx key</source>
        <translation>TX-Schlüssel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10352" />
        <source>
Grand total:
  Asset: </source>
        <translation>
Gesamtsumme: Vermögen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Asset</source>
        <translation>Vermögenswert</translation>
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
        <translation>Erwartet genau ein Argument für die Anzahl der neuen Adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10467" />
        <source>failed to parse the amount of new addresses: </source>
        <translation>Die Anzahl der neuen Adressen konnte nicht analysiert werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10472" />
        <source>the amount of new addresses must be lower or equal to </source>
        <translation>Die Anzahl der neuen Adressen muss kleiner oder gleich sein </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10487" />
        <source>Expected exactly two arguments for index</source>
        <translation>Es wurden genau zwei Argumente für den Index erwartet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10497" />
        <source>Address at %u %u: %s</source>
        <translation>Adresse bei %u %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10630" />
        <source>Standard address: %s, payment ID: %s</source>
        <translation>Standardadresse: %s, Zahlungs-ID: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10886" />
        <source>Invalid subaddress index format, and not a signature type: </source>
        <translation>Ungültiges Subadressenindexformat und kein Signaturtyp: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11511" />
        <source> (Y/Yes/N/No): </source>
        <translation> (J/Ja/N/Nein): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11517" />
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>ACHTUNG: Die Verwendung von MMS-Autokonfigurationsmechanismen ist nicht vertrauenswürdig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11518" />
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers' info</source>
        <translation>Ein bösartiger Auto-Config-Manager könnte Ihnen Informationen über Ihre eigenen Wallets senden, anstatt die Informationen anderer Unterzeichner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11519" />
        <source>If in doubt do not use auto-config or at least compare configs using the "mms config_checksum" command</source>
        <translation>Im Zweifelsfall verwenden Sie keine Auto-Config oder vergleichen Sie die Konfigurationen zumindest mit dem Befehl „mms config_checksum“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11546" />
        <source>Choose processing:</source>
        <translation>Verarbeitung wählen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11555" />
        <source>Sign tx</source>
        <translation>Unterschreiben Sie tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11563" />
        <source>Send the tx for submission to </source>
        <translation>Senden Sie die Tx zur Einreichung an </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11567" />
        <source>Send the tx for signing to </source>
        <translation>Senden Sie die Tx zur Unterzeichnung an </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11574" />
        <source>Submit tx</source>
        <translation>Senden Sie eine Nachricht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11577" />
        <source>unknown</source>
        <translation>unbekannt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11583" />
        <source>Choice: </source>
        <translation>Auswahl: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11595" />
        <source>Wrong choice</source>
        <translation>Falsche Wahl</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>Id</source>
        <translation>Ausweis</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>I/O</source>
        <translation>E/A</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>Authorized Signer</source>
        <translation>Autorisierter Unterzeichner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Message Type</source>
        <translation>Nachrichtentyp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Height</source>
        <translation>Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Message State</source>
        <translation>Nachrichtenstatus</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Since</source>
        <translation>Seit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11620" />
        <source> ago</source>
        <translation> vor</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>Transport Address</source>
        <translation>Transportadresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627" />
        <source>Auto-Config Token</source>
        <translation>Auto-Konfigurationstoken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627" />
        <source>Salvium Address</source>
        <translation>Salvium-Adresse</translation>
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
        <translation>Nachricht </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683" />
        <source>In/out: </source>
        <translation>Ein/Aus: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11685" />
        <source>State: </source>
        <translation>Zustand: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11685" />
        <source>%s since %s, %s ago</source>
        <translation>%s seit %s, vor %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11689" />
        <source>Sent: Never</source>
        <translation>Gesendet: Nie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11693" />
        <source>Sent: %s, %s ago</source>
        <translation>Gesendet: vor %s, %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11696" />
        <source>Authorized signer: </source>
        <translation>Zeichnungsberechtigter: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11697" />
        <source>Content size: </source>
        <translation>Inhaltsgröße: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11697" />
        <source> bytes</source>
        <translation> Bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11698" />
        <source>Content: </source>
        <translation>Inhalt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11698" />
        <source>(binary data)</source>
        <translation>(Binärdaten)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11728" />
        <source>Send these messages now?</source>
        <translation>Diese Nachrichten jetzt senden?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11738" />
        <source>Queued for sending.</source>
        <translation>Zum Senden in die Warteschlange gestellt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11758" />
        <source>Invalid message id</source>
        <translation>Ungültige Nachrichten-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11767" />
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>Verwendung: mms init&lt;required_signers&gt; /&lt;authorized_signers&gt;&lt;own_label&gt;&lt;own_transport_address&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11773" />
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>Das MMS ist bereits initialisiert. Durch Löschen aller Unterzeichnerinformationen und Nachrichten erneut initialisieren?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11788" />
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>Fehler bei der Anzahl der erforderlichen Unterzeichner und/oder autorisierten Unterzeichner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11805" />
        <source>The MMS is not active.</source>
        <translation>Die MMS ist nicht aktiv.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11828" />
        <source>Invalid signer number </source>
        <translation>Ungültige Unterzeichnernummer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11833" />
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>MMS-Unterzeichner [&lt;number&gt; &lt;label&gt;[&lt;/label&gt;&lt;transport_address&gt; &lt;label&gt;[&lt;/label&gt;&lt;salvium_address&gt; &lt;label&gt;]]]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11852" />
        <source>Invalid Salvium address</source>
        <translation>Ungültige Salvium-Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11859" />
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>Der Wallet-Status erlaubt keine Änderung der Salvium-Adressen mehr</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11871" />
        <source>Usage: mms list</source>
        <translation>Verwendung: MMS-Liste</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11884" />
        <source>Usage: mms next [sync]</source>
        <translation>Verwendung: mms next [sync]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11909" />
        <source>No next step: </source>
        <translation>Kein nächster Schritt: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11919" />
        <source>prepare_multisig</source>
        <translation>bereiten_multisig vor</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11925" />
        <source>make_multisig</source>
        <translation>Erstellen Sie Multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11940" />
        <source>exchange_multisig_keys</source>
        <translation>Austausch_Multisig_Schlüssel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11956" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="12080" />
        <source>export_multisig_info</source>
        <translation>export_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11965" />
        <source>import_multisig_info</source>
        <translation>importiere_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11978" />
        <source>sign_multisig</source>
        <translation>sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11988" />
        <source>submit_multisig</source>
        <translation>Submit_Multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11998" />
        <source>Send tx</source>
        <translation>Senden Sie eine Nachricht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12009" />
        <source>Process signer config</source>
        <translation>Konfiguration des Prozesssignierers</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12021" />
        <source>Replace current signer config with the one displayed above?</source>
        <translation>Aktuelle Signerkonfiguration durch die oben angezeigte ersetzen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12027" />
        <source>You can use the "mms delete" command to delete any unwanted message</source>
        <translation>Mit dem Befehl „mms delete“ können Sie unerwünschte Nachrichten löschen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12040" />
        <source>Process auto config data</source>
        <translation>Autokonfigurationsdaten verarbeiten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12054" />
        <source>Nothing ready to process</source>
        <translation>Nichts zur Verarbeitung bereit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12073" />
        <source>Usage: mms sync</source>
        <translation>Verwendung: MMS-Synchronisierung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12097" />
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>Verwendung: mms löschen (&lt;message_id&gt; | alle)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12104" />
        <source>Delete all messages?</source>
        <translation>Alle Nachrichten löschen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12130" />
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>Verwendung: mms senden [&lt;message_id&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12147" />
        <source>Usage: mms receive</source>
        <translation>Verwendung: MMS empfangen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12164" />
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>Verwendung: MMS-Export&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12175" />
        <source>Message content saved to: </source>
        <translation>Nachrichteninhalt gespeichert unter: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12179" />
        <source>Failed to to save message content</source>
        <translation>Nachrichteninhalt konnte nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12203" />
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>Verwendung: MMS-Hinweis [&lt;text&gt; &lt;label&gt;]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12210" />
        <source>No signer found with label </source>
        <translation>Kein Unterzeichner mit Label gefunden </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12232" />
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>Verwendung: MMS-Show&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12250" />
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>Verwendung: MMS-Set&lt;option_name&gt; [&lt;option_value&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12267" />
        <source>Wrong option value</source>
        <translation>Falscher Optionswert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12272" />
        <source>Auto-send is on</source>
        <translation>Automatisches Senden ist aktiviert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12272" />
        <source>Auto-send is off</source>
        <translation>Automatisches Senden ist deaktiviert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12277" />
        <source>Unknown option</source>
        <translation>Unbekannte Option</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12285" />
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>Verwendung: Hilfe mms [&lt;subcommand&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12301" />
        <source>Usage: mms send_signer_config</source>
        <translation>Verwendung: mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12307" />
        <source>Signer config not yet complete</source>
        <translation>Signer-Konfiguration noch nicht abgeschlossen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12322" />
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>Verwendung: mms start_auto_config [ &lt;label&gt;...]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12327" />
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>Es gibt Unterzeichner ohne festgelegtes Label. Vervollständigen Sie die Labels vor der automatischen Konfiguration oder geben Sie sie hier als Parameter an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12333" />
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>Die automatische Konfiguration läuft bereits. Abbrechen und neu starten?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12357" />
        <source>Usage: mms config_checksum</source>
        <translation>Verwendung: mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12369" />
        <source>Usage: mms stop_auto_config</source>
        <translation>Verwendung: mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12372" />
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>Alle Autokonfigurationstoken löschen und die Autokonfiguration stoppen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12385" />
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>Verwendung: mms auto_config&lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12392" />
        <source>Invalid auto-config token</source>
        <translation>Ungültiges Auto-Config-Token</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12402" />
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>Auto-Konfiguration läuft bereits. Abbrechen und neu starten?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12421" />
        <source>MMS not available in this wallet</source>
        <translation>MMS ist in diesem Wallet nicht verfügbar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12445" />
        <source>The MMS is not active. Activate using the "mms init" command</source>
        <translation>Das MMS ist nicht aktiv. Aktivieren Sie es mit dem Befehl „mms init“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12526" />
        <source>Invalid MMS subcommand</source>
        <translation>Ungültiger MMS-Unterbefehl</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12531" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="12535" />
        <source>Error in MMS command: </source>
        <translation>Fehler im MMS-Befehl: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10857" />
        <source>wallet is watch-only and cannot sign</source>
        <translation>Wallet ist nur zum Ansehen verfügbar und kann nicht signieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10862" />
        <source>This wallet is multisig and cannot sign</source>
        <translation>Diese Brieftasche ist multisig und kann nicht signieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10936" />
        <source>Bad signature from </source>
        <translation>Ungültige Signatur von </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10940" />
        <source>Good signature from </source>
        <translation>Gute Unterschrift von </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10956" />
        <source>wallet is watch-only and cannot export key images</source>
        <translation>Wallet ist nur zum Ansehen und kann keine Schlüsselbilder exportieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10994" />
        <source>Signed key images exported to </source>
        <translation>Signierte Schlüsselbilder exportiert nach </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11039" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11085" />
        <source>command only supported by HW wallet</source>
        <translation>Befehl wird nur von HW Wallet unterstützt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11044" />
        <source>hw wallet does not support cold KI sync</source>
        <translation>hw wallet unterstützt keine kalte KI-Synchronisierung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11056" />
        <source>Please confirm the key image sync on the device</source>
        <translation>Bitte bestätigen Sie die Schlüsselbildsynchronisierung auf dem Gerät</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11062" />
        <source>Key images synchronized to height </source>
        <translation>Schlüsselbilder mit der Höhe synchronisiert </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11065" />
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>Beim Ausführen eines nicht vertrauenswürdigen Daemons kann nicht ermittelt werden, welche Transaktionsausgabe ausgegeben wird. Verwenden Sie einen vertrauenswürdigen Daemon mit --trusted-daemon und führen Sie rescan_spent aus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11068" />
        <source> spent, </source>
        <translation> ausgegeben, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11068" />
        <source> unspent</source>
        <translation> unverbraucht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11072" />
        <source>Failed to import key images</source>
        <translation>Schlüsselbilder konnten nicht importiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11077" />
        <source>Failed to import key images: </source>
        <translation>Schlüsselbilder konnten nicht importiert werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11094" />
        <source>Failed to reconnect device</source>
        <translation>Das Gerät konnte nicht erneut verbunden werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11099" />
        <source>Failed to reconnect device: </source>
        <translation>Das Gerät konnte nicht erneut verbunden werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11151" />
        <source>Outputs exported to </source>
        <translation>Ausgaben exportiert nach </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11306" />
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>Doppelte Ausgaben im Netzwerk: Diese Transaktion wird möglicherweise abgebaut, muss aber nicht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11341" />
        <source>Transaction ID not found</source>
        <translation>Transaktions-ID nicht gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11376" />
        <source>Transaction successfully saved to </source>
        <translation>Transaktion erfolgreich gespeichert in </translation>
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
        <translation>Die Transaktion konnte nicht gespeichert werden in </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="408" />
        <source>true</source>
        <translation>WAHR</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="461" />
        <source>failed to parse refresh type</source>
        <translation>Der Aktualisierungstyp konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="881" />
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Geben Sie optional die Seed-Offset-Passphrase ein. Leeren Sie das Feld, um den Roh-Seed anzuzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4342" />
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Geben Sie die Seed-Offset-Passphrase ein. Leeren Sie diese, wenn keine vorhanden ist.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5342" />
        <source>You may want to remove the file "%s" and try again</source>
        <translation>Möglicherweise möchten Sie die Datei &amp;quot;%s&amp;quot; entfernen und es erneut versuchen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8685" />
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Dies ist eine Multisig-Wallet, sie kann nur mit sign_multisig signieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8690" />
        <source>This is a watch only wallet</source>
        <translation>Dies ist eine reine Uhren-Brieftasche</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8722" />
        <source>Failed to sign transaction</source>
        <translation>Die Transaktion konnte nicht unterzeichnet werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8728" />
        <source>Failed to sign transaction: </source>
        <translation>Signieren der Transaktion fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8749" />
        <source>Transaction raw hex data exported to </source>
        <translation>Rohe Hex-Daten der Transaktion exportiert nach </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8770" />
        <source>Failed to load transaction from file</source>
        <translation>Die Transaktion konnte nicht aus der Datei geladen werden.</translation>
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
        <translation>txid konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8430" />
        <source>Height %d (matures %d), txid %s, staked %s SAL, %s SAL accrued so far</source>
        <translation>Höhe %d (reift %d), txid %s, eingesetztes %s SAL, %s SAL bisher aufgelaufen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8828" />
        <source>Tx key: </source>
        <translation>Tx-Schlüssel: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8833" />
        <source>no tx keys found for this txid</source>
        <translation>Für diese TXID wurden keine TX-Schlüssel gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8876" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8887" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8894" />
        <source>failed to parse tx_key</source>
        <translation>tx_key konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8903" />
        <source>Tx key successfully stored.</source>
        <translation>Tx-Schlüssel erfolgreich gespeichert.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8907" />
        <source>Failed to store tx key: </source>
        <translation>TX-Schlüssel konnte nicht gespeichert werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8943" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9155" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9244" />
        <source>signature file saved to: </source>
        <translation>Signaturdatei gespeichert unter: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8945" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9157" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9246" />
        <source>failed to save signature file</source>
        <translation>Signaturdatei konnte nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8949" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9037" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9115" />
        <source>error: </source>
        <translation>Fehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8982" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8991" />
        <source>failed to parse tx key</source>
        <translation>TX-Schlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9013" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9086" />
        <source>received</source>
        <translation>erhalten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9013" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9086" />
        <source>in txid</source>
        <translation>in txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9016" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9089" />
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>ACHTUNG: Diese Transaktion ist noch nicht in der Blockchain enthalten!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9026" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9099" />
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>ACHTUNG: Anzahl der Bestätigungen konnte nicht ermittelt werden!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9032" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9105" />
        <source>received nothing in txid</source>
        <translation>nichts in txid erhalten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9186" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9280" />
        <source>failed to load signature file</source>
        <translation>Signaturdatei konnte nicht geladen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9083" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9193" />
        <source>Good signature</source>
        <translation>Gute Signatur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9110" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9195" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9295" />
        <source>Bad signature</source>
        <translation>Ungültige Signatur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9134" />
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>Wallet ist nur zum Ansehen verfügbar und kann den Nachweis nicht erbringen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9218" />
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>Der Reservenachweis kann nur durch eine volle Brieftasche generiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9273" />
        <source>Address must not be a subaddress</source>
        <translation>Die Adresse darf keine Unteradresse sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9400" />
        <source>bad min_height parameter:</source>
        <translation>ungültiger min_height-Parameter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9412" />
        <source>bad max_height parameter:</source>
        <translation>ungültiger max_height-Parameter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9434" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>block</source>
        <translation>Block</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9434" />
        <source>in</source>
        <translation>In</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9525" />
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[Doppelte Ausgabe im Netzwerk festgestellt: Diese Transaktion wird möglicherweise abgebaut, muss aber nicht] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9813" />
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt;sollte kleiner sein als&lt;max_amount&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9839" />
        <source>There is no unspent output in the specified address</source>
        <translation>Es gibt keine nicht ausgegebene Ausgabe an der angegebenen Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845" />
        <source>
Amount: </source>
        <translation>
Menge: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845" />
        <source>, number of keys: </source>
        <translation>, Anzahl der Schlüssel: </translation>
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
Minimale Blockhöhe: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9856" />
        <source>
Max block height: </source>
        <translation>
Maximale Blockhöhe: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9857" />
        <source>
Min amount found: </source>
        <translation>
Mindestmenge gefunden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9858" />
        <source>
Max amount found: </source>
        <translation>
Maximal gefundene Menge: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9859" />
        <source>
Total count: </source>
        <translation>
Gesamtzahl: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9899" />
        <source>
Bin size: </source>
        <translation>
Holen Sie es sich für Sie: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9900" />
        <source>
Outputs per *: </source>
        <translation>
Ausgänge pro *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9902" />
        <source>count
  ^
</source>
        <translation>zählen
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
        <translation>+--&amp;gt; Blockhöhe
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
        <translation>Achtung: Dadurch gehen alle Informationen verloren, die nicht aus der Blockchain wiederhergestellt werden können.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9954" />
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Dazu gehören Zieladressen, geheime TX-Schlüssel, TX-Notizen usw.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9291" />
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Gute Signatur – Gesamt: %s, ausgegeben: %s, nicht ausgegeben: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094" />
        <source>First line is not an amount</source>
        <translation>Die erste Zeile ist kein Betrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108" />
        <source>Invalid output: </source>
        <translation>Ungültige Ausgabe: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2133" />
        <source>Invalid output key, and file doesn't exist</source>
        <translation>Ungültiger Ausgabeschlüssel und Datei existiert nicht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2156" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2183" />
        <source>Invalid output</source>
        <translation>Ungültige Ausgabe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2671" />
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>ungültiges Argument: muss entweder 0/nie, 1/Aktion oder 2/verschlüsseln/entschlüsseln sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3377" />
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included)</source>
        <translation>Überweisen&lt;amount&gt; Zu&lt;address&gt; und sperren Sie es für&lt;lockblocks&gt; (max. 1000000). Wenn der Parameter &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; angegeben ist, verwendet das Wallet Ausgaben, die von Adressen dieser Indizes empfangen wurden. Wenn es weggelassen wird, wählt das Wallet die zu verwendenden Adressindizes nach dem Zufallsprinzip aus. In jedem Fall versucht es, Ausgaben mehrerer Adressen möglichst nicht zu kombinieren.&lt;priority&gt; ist die Priorität der Transaktion. Je höher die Priorität, desto höher die Transaktionsgebühr. Gültige Werte in Prioritätsreihenfolge (von niedrig nach hoch) sind: unwichtig, normal, erhöht, Priorität. Wenn nicht angegeben, wird der Standardwert (siehe Befehl „Priorität festlegen“) verwendet.&lt;ring_size&gt; ist die Anzahl der Eingaben, die zur Nichtnachverfolgbarkeit einbezogen werden sollen. Mehrere Zahlungen können gleichzeitig vorgenommen werden, indem URI_2 oder&lt;address_2&gt;&lt;amount_2&gt; usw. (vor der Zahlungs-ID, sofern diese enthalten ist)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5946" />
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Passwort erforderlich (%s) – verwenden Sie den Aktualisierungsbefehl</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10114" />
        <source>Daemon requests payment at diff %llu, with %f credits/hash%s. Run start_mining_for_rpc to start mining to pay for RPC access, or use another daemon</source>
        <translation>Daemon fordert Zahlung bei diff %llu mit %f Credits/Hash%s an. Führen Sie start_mining_for_rpc aus, um mit dem Mining zu beginnen und für den RPC-Zugriff zu bezahlen, oder verwenden Sie einen anderen Daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10141" />
        <source>Error mining to daemon: </source>
        <translation>Fehler beim Mining zum Daemon: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10147" />
        <source>Failed to start mining for RPC payment</source>
        <translation>Mining für RPC-Zahlung konnte nicht gestartet werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10159" />
        <source>wallet</source>
        <translation>Geldbörse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10161" />
        <source> (no daemon)</source>
        <translation> (kein Daemon)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10163" />
        <source> (out of sync)</source>
        <translation> (nicht synchron)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10214" />
        <source>(Untitled account)</source>
        <translation>(Konto ohne Titel)</translation>
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
        <translation>Index konnte nicht analysiert werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10232" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10508" />
        <source>specify an index between 0 and </source>
        <translation>Geben Sie einen Index zwischen 0 und </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10354" />
        <source>, unlocked balance: </source>
        <translation>, freigeschaltetes Guthaben: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10364" />
        <source>Untagged accounts:</source>
        <translation>Nicht markierte Konten:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10370" />
        <source>Tag %s is unregistered.</source>
        <translation>Tag %s ist nicht registriert.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10373" />
        <source>Accounts with tag: </source>
        <translation>Konten mit Tag: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10374" />
        <source>Tag's description: </source>
        <translation>Beschreibung des Tags: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Account</source>
        <translation>Konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10430" />
        <source>Primary address</source>
        <translation>Primäre Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10430" />
        <source>(used)</source>
        <translation>(gebraucht)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10451" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10477" />
        <source>(Untitled address)</source>
        <translation>(Adresse ohne Titel)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10535" />
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt;ist bereits außerhalb der Grenzen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10540" />
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt;überschreitet die Grenze</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10604" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10617" />
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Integrierte Adressen können nur für Konto 0 angelegt werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10609" />
        <source>Matching integrated address: </source>
        <translation>Passende integrierte Adresse: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10636" />
        <source>Subaddress: </source>
        <translation>Unteradresse: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10636" />
        <source>Standard address: </source>
        <translation>Standardadresse: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10641" />
        <source>failed to parse payment ID or address</source>
        <translation>Zahlungs-ID oder Adresse konnten nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10678" />
        <source>failed to parse index</source>
        <translation>Index konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10686" />
        <source>Address book is empty.</source>
        <translation>Das Adressbuch ist leer.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10692" />
        <source>Index: </source>
        <translation>Index: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10698" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10828" />
        <source>Address: </source>
        <translation>Adresse: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10699" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10827" />
        <source>Description: </source>
        <translation>Beschreibung: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10784" />
        <source>no description found</source>
        <translation>Keine Beschreibung gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10786" />
        <source>description found: </source>
        <translation>Beschreibung gefunden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6679" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10826" />
        <source>Filename: </source>
        <translation>Dateiname: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10831" />
        <source>Watch only</source>
        <translation>Nur ansehen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10833" />
        <source>%u/%u multisig%s</source>
        <translation>%u/%u Mehrfachsignatur%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8648" />
        <source>%s change to %s</source>
        <translation>%s ändern in %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9022" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9095" />
        <source>This transaction has %u confirmations</source>
        <translation>Diese Transaktion hat %u Bestätigungen</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61" />
        <source>Filename to save the certificate</source>
        <translation>Dateiname zum Speichern des Zertifikats</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62" />
        <source>Filename to save the private key</source>
        <translation>Dateiname zum Speichern des privaten Schlüssels</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63" />
        <source>Passphrase with which to encrypt the private key</source>
        <translation>Passphrase, mit der der private Schlüssel verschlüsselt wird</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64" />
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>Datei mit der Passphrase, mit der der private Schlüssel verschlüsselt wird</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65" />
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>Eingabeaufforderung für eine Passphrase zum Verschlüsseln des privaten Schlüssels</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143" />
        <source>Argument is needed: </source>
        <translation>Argument ist erforderlich: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153" />
        <source>Failed to read passphrase</source>
        <translation>Passphrase konnte nicht gelesen werden</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188" />
        <source>Failed to create certificate</source>
        <translation>Zertifikat konnte nicht erstellt werden</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206" />
        <source>Failed to write certificate: </source>
        <translation>Schreiben des Zertifikats fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226" />
        <source>Failed to write private key: </source>
        <translation>Schreiben des privaten Schlüssels fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237" />
        <source>Failed to save certificate file</source>
        <translation>Zertifikatsdatei konnte nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243" />
        <source>Failed to save private key file</source>
        <translation>Die private Schlüsseldatei konnte nicht gespeichert werden.</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69" />
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Basisdateiname (Suffixe -1, -2 usw. werden nach Bedarf angehängt)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70" />
        <source>Give threshold and participants at once as M/N</source>
        <translation>Geben Sie Schwellenwert und Teilnehmer gleichzeitig als M/N an</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71" />
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>Wie viele Teilnehmer werden Teile der Multisig-Wallet teilen?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72" />
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Wie viele Unterzeichner sind erforderlich, um eine gültige Transaktion zu unterzeichnen?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73" />
        <source>Create testnet multisig wallets</source>
        <translation>Erstellen Sie Testnet-Multisig-Wallets</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74" />
        <source>Create stagenet multisig wallets</source>
        <translation>Erstellen Sie Stagenet-Multisig-Wallets</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75" />
        <source>Create an address file for new wallets</source>
        <translation>Erstellen Sie eine Adressdatei für neue Geldbörsen</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80" />
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Generieren von %u %u/%u Multisig-Wallets</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="137" />
        <source>Generated multisig wallets for address </source>
        <translation>Generierte Multisig-Wallets für Adressen </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="141" />
        <source>Error creating multisig wallets: </source>
        <translation>Fehler beim Erstellen von Multisig-Wallets: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="166" />
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Dieses Programm generiert eine Reihe von Multisig-Wallets - verwenden Sie dieses einfachere Schema nur, wenn alle Teilnehmer einander vertrauen</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="185" />
        <source>Error: Can't specify more than one of --testnet and --stagenet</source>
        <translation>Fehler: Es kann nicht mehr als eines von --testnet und --stagenet angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="192" />
        <source>Error: expected N/M, but got: </source>
        <translation>Fehler: N/M erwartet, aber erhalten: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="200" />
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="209" />
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Fehler: Es können entweder --scheme oder --threshold und --participants beide angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216" />
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Fehler: Erwartet wurde N &amp;gt; 1 und N &amp;lt;= M, aber erhalten wurde N==%u und M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225" />
        <source>Error: --filename-base is required</source>
        <translation>Fehler: --filename-base ist erforderlich</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72" />
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>PyBitmessage-Instanz unter URL verwenden&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73" />
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>Angeben&lt;arg&gt; als Benutzername:Passwort für die PyBitmessage API</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911" />
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>Die automatische Konfiguration kann nicht fortgesetzt werden, da die automatischen Konfigurationsdaten anderer Unterzeichner nicht vollständig sind</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936" />
        <source>The signer config is not complete.</source>
        <translation>Die Signerkonfiguration ist nicht vollständig.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988" />
        <source>Wallet can't go multisig because key sets from other signers are missing or not complete.</source>
        <translation>Wallet kann nicht auf Multisig umstellen, da Schlüsselsätze von anderen Unterzeichnern fehlen oder unvollständig sind.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030" />
        <source>Wallet can't start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>Wallet kann keine weitere Schlüsselaustauschrunde starten, da Schlüsselsätze anderer Unterzeichner fehlen oder unvollständig sind.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094" />
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>Die Synchronisierung wurde nicht durchgeführt, da Multisig-Synchronisierungsdaten von anderen Unterzeichnern fehlen oder unvollständig sind.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208" />
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>Es liegen wartende Nachrichten vor, aber unter normalen Umständen ist nichts zur Verarbeitung bereit</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211" />
        <source>
Use "mms next sync" if you want to force processing of the waiting sync data</source>
        <translation>
Verwenden Sie &amp;quot;mms next sync&amp;quot;, wenn Sie die Verarbeitung der wartenden Synchronisierungsdaten erzwingen möchten</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215" />
        <source>
Use "mms note" to display the waiting notes</source>
        <translation>
Verwenden Sie &amp;quot;MMS-Notiz&amp;quot;, um die Wartenotizen anzuzeigen</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220" />
        <source>There are no messages waiting to be processed.</source>
        <translation>Es liegen keine Nachrichten vor, die auf die Verarbeitung warten.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441" />
        <source>key set</source>
        <translation>Schlüsselsatz</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443" />
        <source>additional key set</source>
        <translation>zusätzlicher Schlüsselsatz</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445" />
        <source>multisig sync data</source>
        <translation>Multisig-Synchronisationsdaten</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447" />
        <source>partially signed tx</source>
        <translation>teilweise signierte tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449" />
        <source>fully signed tx</source>
        <translation>vollständig signierte tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451" />
        <source>note</source>
        <translation>Notiz</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453" />
        <source>signer config</source>
        <translation>Unterzeichnerkonfiguration</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455" />
        <source>auto-config data</source>
        <translation>Auto-Konfigurationsdaten</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457" />
        <source>unknown message type</source>
        <translation>Unbekannter Nachrichtentyp</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466" />
        <source>in</source>
        <translation>In</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468" />
        <source>out</source>
        <translation>aus</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470" />
        <source>unknown message direction</source>
        <translation>unbekannte Nachrichtenrichtung</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479" />
        <source>ready to send</source>
        <translation>versandfertig</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481" />
        <source>sent</source>
        <translation>gesendet</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483" />
        <source>waiting</source>
        <translation>Warten</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485" />
        <source>processed</source>
        <translation>verarbeitet</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487" />
        <source>cancelled</source>
        <translation>abgesagt</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489" />
        <source>unknown message state</source>
        <translation>Unbekannter Nachrichtenstatus</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="177" />
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Erstellen Sie ein neues Wallet und speichern Sie es unter&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="178" />
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Erstellen Sie eine neue Brieftasche vom Gerät und speichern Sie sie unter&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="179" />
        <source>Generate incoming-only wallet from view key</source>
        <translation>Nur eingehende Brieftasche aus Ansichtsschlüssel generieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="180" />
        <source>Generate deterministic wallet from spend key</source>
        <translation>Deterministisches Wallet aus dem Ausgabeschlüssel generieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="181" />
        <source>Generate wallet from private keys</source>
        <translation>Wallet aus privaten Schlüsseln generieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="182" />
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Generieren Sie eine Master-Wallet aus Multisig-Wallet-Schlüsseln</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184" />
        <source>Language for mnemonic</source>
        <translation>Sprache für Mnemotechnik</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="185" />
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Geben Sie den Electrum-Seed für die Wiederherstellung/Erstellung des Wallets an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="186" />
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Wiederherstellen der Brieftasche mithilfe des Mnemonik-Seeds im Electrum-Stil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="187" />
        <source>alias for --restore-deterministic-wallet</source>
        <translation>Alias für --restore-deterministic-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="188" />
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Stellen Sie das Multisig-Wallet mithilfe des mnemonischen Seeds im Electrum-Stil wieder her</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="189" />
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Nichtdeterministische Ansichts- und Ausgabeschlüssel generieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191" />
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>Wiederherstellung von der geschätzten Blockchain-Höhe am angegebenen Datum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192" />
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>Die neu erstellte Transaktion wird nicht an das Salvium-Netzwerk weitergeleitet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="348" />
        <source>failed to read wallet password</source>
        <translation>Das Lesen des Wallet-Passworts ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355" />
        <source>Enter a new password for the wallet</source>
        <translation>Geben Sie ein neues Passwort für die Brieftasche ein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355" />
        <source>Wallet password</source>
        <translation>Wallet-Passwort</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="433" />
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>ungültiges Argument: muss entweder 0/1, wahr/falsch, j/n, ja/nein sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="489" />
        <source>DNSSEC validation passed</source>
        <translation>DNSSEC-Validierung bestanden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="493" />
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>ACHTUNG: Die DNSSEC-Validierung war nicht erfolgreich, diese Adresse ist möglicherweise nicht korrekt!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="496" />
        <source>For URL: </source>
        <translation>Für URL: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="498" />
        <source> Salvium Address = </source>
        <translation> Salvium-Adresse = </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="510" />
        <source>you have cancelled the transfer request</source>
        <translation>Sie haben die Überweisungsanfrage storniert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="531" />
        <source>failed to parse index: </source>
        <translation>Index konnte nicht analysiert werden: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="544" />
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>ungültiges Format für Subadressen-Lookahead; muss&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="608" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>keine Verbindung zum Daemon. Bitte stellen Sie sicher, dass der Daemon läuft.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="617" />
        <source>RPC error: </source>
        <translation>RPC-Fehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="621" />
        <source>failed to get random outputs to mix: </source>
        <translation>Fehler beim Mischen der zufälligen Ausgaben: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="628" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="636" />
        <source>Not enough money in unlocked balance</source>
        <translation>Nicht genug Geld im freigeschalteten Guthaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="646" />
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>Es konnte keine Möglichkeit gefunden werden, Transaktionen zu erstellen. Dies liegt normalerweise daran, dass Staub so klein ist, dass er sich nicht durch Gebühren bezahlt machen kann, oder daran, dass versucht wird, mehr Geld zu senden als das freigeschaltete Guthaben, oder dass nicht genug Geld für Gebühren übrig bleibt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="652" />
        <source>not enough outputs for specified ring size</source>
        <translation>nicht genügend Ausgänge für die angegebene Ringgröße</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655" />
        <source>output amount</source>
        <translation>Ausgabemenge</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655" />
        <source>found outputs to use</source>
        <translation>gefundene zu verwendende Ausgaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="657" />
        <source>Please use sweep_unmixable.</source>
        <translation>Bitte verwenden Sie sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="661" />
        <source>transaction was not constructed</source>
        <translation>Transaktion wurde nicht konstruiert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669" />
        <source>Reason: </source>
        <translation>Grund: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="688" />
        <source>failed to find a suitable way to split transactions</source>
        <translation>Es wurde kein geeigneter Weg gefunden, Transaktionen aufzuteilen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694" />
        <source>unknown transfer error: </source>
        <translation>unbekannter Übertragungsfehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699" />
        <source>Multisig error: </source>
        <translation>Multisig-Fehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="705" />
        <source>internal error: </source>
        <translation>interner Fehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="710" />
        <source>unexpected error: </source>
        <translation>unerwarteter Fehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714" />
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Es ist ein Fehler aufgetreten. Dies könnte bedeuten, dass der Knoten versucht, Sie dazu zu bringen, eine Transaktion erneut zu erstellen und sich auf die Ausgaben zu konzentrieren, die Ihnen gehören. Oder es könnte sich um einen echten Fehler handeln. Es kann ratsam sein, die Verbindung zu diesem Knoten zu trennen und nicht sofort zu versuchen, eine Transaktion zu senden. Alternativ können Sie eine Verbindung zu einem anderen Knoten herstellen, damit der ursprüngliche Knoten keine Informationen korrelieren kann.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726" />
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>In der Datei %s sind wahrscheinlich private Wallet-Schlüssel gespeichert! Verwenden Sie einen anderen Dateinamen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9309" />
        <source> seconds</source>
        <translation> Sekunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9311" />
        <source> minutes</source>
        <translation> Minuten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9313" />
        <source> hours</source>
        <translation> Std.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9315" />
        <source> days</source>
        <translation> Tage</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9317" />
        <source> months</source>
        <translation> Monate</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9318" />
        <source>a long time</source>
        <translation>lange</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11461" />
        <source>Unknown command: </source>
        <translation>Unbekannter Befehl: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="190" />
        <source>Restore from specific blockchain height</source>
        <translation>Wiederherstellen von einer bestimmten Blockchain-Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193" />
        <source>Create an address file for new wallets</source>
        <translation>Erstellen Sie eine Adressdatei für neue Geldbörsen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195" />
        <source>Display English language names</source>
        <translation>Englischsprachige Namen anzeigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365" />
        <source>daemon is busy. Please try again later.</source>
        <translation>Daemon ist beschäftigt. Bitte versuchen Sie es später erneut.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="374" />
        <source>possibly lost connection to daemon</source>
        <translation>möglicherweise Verbindung zum Daemon verloren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="391" />
        <source>Error: </source>
        <translation>Fehler: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="500" />
        <source>Is this OK?</source>
        <translation>Ist das in Ordnung?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="666" />
        <source>transaction %s was rejected by daemon</source>
        <translation>Transaktion %s wurde vom Daemon abgelehnt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678" />
        <source>destination amount is zero</source>
        <translation>Der Zielbetrag ist Null</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="683" />
        <source>transaction has no destination</source>
        <translation>Transaktion hat kein Ziel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="729" />
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>Die Datei %s ist bereits vorhanden. Möchten Sie sie wirklich überschreiben?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11436" />
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>Dies ist die Salvium-Brieftasche für die Befehlszeile. Sie muss mit einem Salvium-Daemon verbunden werden, um richtig zu funktionieren. WARNUNG: Verwenden Sie Ihre Salvium-Schlüssel nicht erneut für einen anderen Fork, AUSSER dieser Fork verfügt über integrierte Maßnahmen zur Verhinderung der Schlüsselwiederverwendung. Andernfalls wird Ihre Privatsphäre gefährdet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11455" />
        <source>Failed to initialize wallet</source>
        <translation>Initialisierung der Brieftasche fehlgeschlagen</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="244" />
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Verwenden Sie die Daemon-Instanz unter&lt;host&gt; :&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="245" />
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Daemon-Instanz auf dem Host verwenden&lt;arg&gt; anstelle von localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251" />
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Daemon-Instanz am Port verwenden&lt;arg&gt; statt 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260" />
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Für Testnetz. Der Daemon muss auch mit dem Flag --testnet gestartet werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="280" />
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>Datei mit zusätzlicher Entropie zur Initialisierung des PRNG (beliebige Daten, 256 Bit Entropie sind sinnvoll, was normalerweise mehr als 256 Bit Daten bedeutet)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281" />
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>Erlaubt die Kommunikation mit einem Daemon, der eine andere Version verwendet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375" />
        <source>can't specify daemon host or port more than once</source>
        <translation>Daemon-Host oder Port können nicht mehr als einmal angegeben werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511" />
        <source>can't specify more than one of --password and --password-file</source>
        <translation>kann nicht mehr als eines von --password und --password-file angeben</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="525" />
        <source>the password file specified could not be read</source>
        <translation>die angegebene Passwortdatei konnte nicht gelesen werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="551" />
        <source>Failed to load file </source>
        <translation>Datei konnte nicht geladen werden </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="249" />
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Wallet-Passwort (Escape/Anführungszeichen nach Bedarf)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="246" />
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt; :]&lt;port&gt; Für Daemon-Verbindungen zu verwendender Socks-Proxy</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="247" />
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Aktivieren Sie Befehle, die auf einem vertrauenswürdigen Daemon basieren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="248" />
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Deaktivieren Sie Befehle, die auf einem vertrauenswürdigen Daemon basieren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252" />
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Geben Sie den Benutzernamen[:Passwort] für den Daemon-RPC-Client an</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253" />
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>SSL für Daemon-RPC-Verbindungen aktivieren: aktiviert|deaktiviert|automatische Erkennung</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="257" />
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>Liste gültiger Fingerabdrücke zulässiger RPC-Server</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258" />
        <source>Allow any SSL certificate from the daemon</source>
        <translation>Alle SSL-Zertifikate vom Daemon zulassen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259" />
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>Erlaube Benutzern (über --daemon-ssl-ca-certificates) Kettenzertifikate</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261" />
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Für Stagenet. Der Daemon muss auch mit dem Flag --stagenet gestartet werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263" />
        <source>Set shared ring database path</source>
        <translation>Legen Sie den gemeinsamen Ringdatenbankpfad fest</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="274" />
        <source>Number of rounds for the key derivation function</source>
        <translation>Anzahl der Runden für die Schlüsselableitungsfunktion</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="275" />
        <source>HW device to use</source>
        <translation>Zu verwendendes HW-Gerät</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="276" />
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>HW-Geräte-Wallet-Ableitungspfad (z. B. SLIP-10)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="278" />
        <source>Do not use DNS</source>
        <translation>Kein DNS verwenden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="279" />
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>Stellen Sie keine Verbindung zu einem Daemon her und verwenden Sie kein DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="367" />
        <source>Invalid argument for </source>
        <translation>Ungültiges Argument für </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428" />
        <source>Enabling --</source>
        <translation>Aktivieren --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428" />
        <source> requires --</source>
        <translation> erfordert --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="429" />
        <location filename="../src/wallet/wallet2.cpp" line="430" />
        <source> or --</source>
        <translation> oder --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="430" />
        <source> or use of a .onion/.i2p domain</source>
        <translation> oder Verwendung einer .onion/.i2p-Domäne</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="448" />
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon und --untrusted-daemon werden beide angezeigt, vorausgesetzt, nicht vertrauenswürdig</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="458" />
        <source>Daemon is local, assuming trusted</source>
        <translation>Der Daemon ist lokal und wird als vertrauenswürdig vorausgesetzt</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="468" />
        <source>failed to initialize the wallet</source>
        <translation>Initialisierung der Brieftasche fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532" />
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>kein Passwort angegeben; verwenden Sie --prompt-for-password, um zur Eingabe eines Passworts aufzufordern</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534" />
        <source>Enter a new password for the wallet</source>
        <translation>Geben Sie ein neues Passwort für die Brieftasche ein</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534" />
        <source>Wallet password</source>
        <translation>Wallet-Passwort</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="557" />
        <source>Failed to parse JSON</source>
        <translation>JSON konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564" />
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Version %u zu neu, wir können nur bis %u kapieren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="580" />
        <source>failed to parse view key secret key</source>
        <translation>Der Ansichtsschlüssel konnte nicht analysiert werden. Geheimer Schlüssel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="585" />
        <source>view secret key may not be all zeroes</source>
        <translation>Der geheime Schlüssel darf nicht nur aus Nullen bestehen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587" />
        <location filename="../src/wallet/wallet2.cpp" line="657" />
        <location filename="../src/wallet/wallet2.cpp" line="702" />
        <source>failed to verify view key secret key</source>
        <translation>Überprüfung des Ansichtsschlüssels und des geheimen Schlüssels fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="598" />
        <source>failed to parse spend key secret key</source>
        <translation>Der geheime Schlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="603" />
        <source>spend secret key may not be all zeroes</source>
        <translation>Der geheime Schlüssel darf nicht nur aus Nullen bestehen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605" />
        <location filename="../src/wallet/wallet2.cpp" line="667" />
        <location filename="../src/wallet/wallet2.cpp" line="728" />
        <source>failed to verify spend key secret key</source>
        <translation>Fehler beim Überprüfen des geheimen Ausgabeschlüssels</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="617" />
        <source>Electrum-style word list failed verification</source>
        <translation>Überprüfung der Wortliste im Electrum-Stil fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="637" />
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Es muss mindestens eine Wortliste im Electrum-Stil, ein privater Ansichtsschlüssel oder ein privater Ausgabeschlüssel angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="641" />
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Sowohl die Wortliste im Electrum-Stil als auch die privaten Schlüssel wurden angegeben</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="651" />
        <source>invalid address</source>
        <translation>ungültige Adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="660" />
        <source>view key does not match standard address</source>
        <translation>Ansichtsschlüssel stimmt nicht mit der Standardadresse überein</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="670" />
        <source>spend key does not match standard address</source>
        <translation>Der Ausgabenschlüssel stimmt nicht mit der Standardadresse überein</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="678" />
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Veraltete Wallets können nicht aus JSON generiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="714" />
        <source>failed to parse address: </source>
        <translation>Adresse konnte nicht analysiert werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="720" />
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>Um eine Nur-Beobachten-Wallet zu erstellen, muss die Adresse angegeben werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="737" />
        <source>failed to generate new wallet: </source>
        <translation>Das Generieren des neuen Wallets ist fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2172" />
        <source>Password is needed to compute key image for incoming SALs</source>
        <translation>Zum Berechnen des Schlüsselbilds für eingehende SALs ist ein Passwort erforderlich</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2173" />
        <source>Invalid password: password is needed to compute key image for incoming SALs</source>
        <translation>Ungültiges Passwort: Das Passwort wird benötigt, um das Schlüsselbild für eingehende SALs zu berechnen.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3712" />
        <source>reorg exceeds maximum allowed depth, use 'set max-reorg-depth N' to allow it, reorg depth: </source>
        <translation>Reorg überschreitet die maximal zulässige Tiefe. Verwenden Sie „set max-reorg-depth N“, um dies zuzulassen. Reorg-Tiefe: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5600" />
        <location filename="../src/wallet/wallet2.cpp" line="6181" />
        <location filename="../src/wallet/wallet2.cpp" line="6670" />
        <source>Primary account</source>
        <translation>Primäres Konto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9041" />
        <source>Transaction sanity check failed</source>
        <translation>Die Transaktions-Sinnlichkeitsprüfung ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11344" />
        <source>Incorrect number of transfers_indices on return_payment</source>
        <translation>Falsche Anzahl von Transferindizes bei der Rückzahlung</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11346" />
        <source>cannot locate return_payment origin index in m_transfers</source>
        <translation>Der Index für den Ursprung der Rückzahlung kann in m_transfers nicht gefunden werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11374" />
        <source>at create_transactions_return(): incorrect number of additional TX pubkeys in origin TX for return_payment</source>
        <translation>bei create_transactions_return(): falsche Anzahl zusätzlicher TX-Pubkeys im Ursprungs-TX für return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11382" />
        <source>at create_transactions_return(): failed to generate_key_derivation</source>
        <translation>bei create_transactions_return(): generate_key_derivation ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11427" />
        <source>Attempting to return change to ourself</source>
        <translation>Der Versuch, uns selbst die Veränderung zurückzugeben</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11432" />
        <source>Failed to identify change output</source>
        <translation>Die Änderungsausgabe konnte nicht identifiziert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11583" />
        <source>Transaction cannot pay for itself</source>
        <translation>Transaktion kann sich nicht selbst finanzieren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11679" />
        <source>Created transaction(s) failed sanity check</source>
        <translation>Die Plausibilitätsprüfung der erstellten Transaktion(en) ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12675" />
        <source>No funds received in this tx.</source>
        <translation>In dieser Transaktion wurden keine Gelder erhalten.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13587" />
        <source>failed to read file </source>
        <translation>Fehler beim Lesen der Datei </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194" />
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Stellen Sie die Subadressen-Lookahead-Größen ein auf&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254" />
        <source>Path to a PEM format private key</source>
        <translation>Pfad zu einem privaten Schlüssel im PEM-Format</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255" />
        <source>Path to a PEM format certificate</source>
        <translation>Pfad zu einem Zertifikat im PEM-Format</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256" />
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Pfad zur Datei, die zusammengesetzte Zertifikate im PEM-Format enthält, um die System-CA(s) zu ersetzen.</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="219" />
        <source>Failed to create directory </source>
        <translation>Verzeichnis konnte nicht erstellt werden </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="221" />
        <source>Failed to create directory %s: %s</source>
        <translation>Verzeichnis %s konnte nicht erstellt werden: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232" />
        <source>Cannot specify --</source>
        <translation>Kann nicht angeben --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232" />
        <source> and --</source>
        <translation> Und --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251" />
        <source>Failed to create file </source>
        <translation>Datei konnte nicht erstellt werden </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251" />
        <source>. Check permissions or remove file</source>
        <translation>. Überprüfen Sie die Berechtigungen oder entfernen Sie die Datei</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="261" />
        <source>Error writing to file </source>
        <translation>Fehler beim Schreiben in die Datei </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="264" />
        <source>RPC username/password is stored in file </source>
        <translation>RPC-Benutzername/Passwort werden in der Datei gespeichert </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="667" />
        <source>Tag %s is unregistered.</source>
        <translation>Tag %s ist nicht registriert.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="695" />
        <source>No matches for regex filter %s .</source>
        <translation>Keine Übereinstimmungen für den Regex-Filter %s.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3588" />
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Transaktion nicht möglich. Nur %s verfügbar, Transaktionsbetrag %s = %s + %s (Gebühr)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4596" />
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>Es kann nicht mehr als eines von --testnet und --stagenet angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4615" />
        <source>Can't specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Es kann nicht mehr als eines von --wallet-file und --generate-from-json angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4621" />
        <source>--password-file is not allowed in combination with --wallet-dir</source>
        <translation>--password-file ist in Kombination mit --wallet-dir nicht zulässig.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4633" />
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>Muss --wallet-file oder --generate-from-json oder --wallet-dir angeben</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4637" />
        <source>Loading wallet...</source>
        <translation>Brieftasche wird geladen …</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4685" />
        <source>Initial refresh failed: </source>
        <translation>Erste Aktualisierung fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4690" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4722" />
        <source>Saving wallet...</source>
        <translation>Geldbeutel schonen...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4692" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4724" />
        <source>Successfully saved</source>
        <translation>Erfolgreich gespeichert</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4695" />
        <source>Successfully loaded</source>
        <translation>Erfolgreich geladen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4699" />
        <source>Wallet initialization failed: </source>
        <translation>Wallet-Initialisierung fehlgeschlagen: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4705" />
        <source>Failed to initialize wallet RPC server</source>
        <translation>Initialisierung des Wallet-RPC-Servers fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4709" />
        <source>Starting wallet RPC server</source>
        <translation>Wallet-RPC-Server wird gestartet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4716" />
        <source>Failed to run wallet: </source>
        <translation>Wallet konnte nicht ausgeführt werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4719" />
        <source>Stopped wallet RPC server</source>
        <translation>Wallet-RPC-Server gestoppt</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4728" />
        <source>Failed to save wallet: </source>
        <translation>Brieftasche konnte nicht gespeichert werden: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4802" />
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Dies ist die RPC Salvium-Wallet. Sie muss mit einem Salvium-Daemon verbunden werden, um richtig zu funktionieren.</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="152" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11402" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4781" />
        <source>Wallet options</source>
        <translation>Wallet-Optionen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73" />
        <source>Generate wallet from JSON format file</source>
        <translation>Wallet aus Datei im JSON-Format generieren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77" />
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Wallet verwenden&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81" />
        <source>Set RPC client secret key for RPC payments</source>
        <translation>Legen Sie den geheimen RPC-Clientschlüssel für RPC-Zahlungen fest</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85" />
        <source>Wallet password file</source>
        <translation>Wallet-Passwortdatei</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113" />
        <source>Max number of threads to use for a parallel job</source>
        <translation>Maximale Anzahl von Threads für einen parallelen Job</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114" />
        <source>Specify log file</source>
        <translation>Protokolldatei angeben</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115" />
        <source>Config file</source>
        <translation>Konfigurationsdatei</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127" />
        <source>General options</source>
        <translation>Allgemeine Optionen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152" />
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Dies ist die Salvium-Brieftasche für die Befehlszeile. Sie muss mit einem Salvium-Daemon verbunden werden, um ordnungsgemäß zu funktionieren.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176" />
        <source>Can't find config file </source>
        <translation>Konfigurationsdatei kann nicht gefunden werden </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220" />
        <source>Logging to: </source>
        <translation>Protokollierung bei: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222" />
        <source>Logging to %s</source>
        <translation>Anmeldung bei %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226" />
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>ACHTUNG: Möglicherweise ist Ihr sperrbarer Speichergrenzwert nicht hoch genug</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228" />
        <source>see ulimit -l</source>
        <translation>siehe ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153" />
        <source>Usage:</source>
        <translation>Verwendung:</translation>
    </message>
</context>
</TS>