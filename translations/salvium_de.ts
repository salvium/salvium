<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>Ungültige Zieladresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60"/>
        <source>Payment ID supplied: this is obsolete</source>
        <translation>Angegebene Zahlungs-ID: Diese ist veraltet.</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Versuch, die Transaktion in einer Datei zu speichern, aber die angegebene(n) Datei(en) sind bereits vorhanden. Beenden, um ein Überschreiben zu vermeiden. Datei:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Die Transaktion(en) konnten nicht in die Datei geschrieben werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>Daemon ist beschäftigt. Bitte versuchen Sie es später erneut.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>keine Verbindung zum Daemon. Bitte stellen Sie sicher, dass der Daemon läuft.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146"/>
        <source>transaction %s was rejected by daemon with status:</source>
        <translation>Transaktion %s wurde vom Daemon mit dem Status abgelehnt:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151"/>
        <source>. Reason:</source>
        <translation>. Grund:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153"/>
        <source>Unknown exception:</source>
        <translation>Unbekannte Ausnahme:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156"/>
        <source>Unhandled exception</source>
        <translation>Nicht behandelte Ausnahme</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="229"/>
        <source>Couldn&#39;t multisig sign data:</source>
        <translation>Daten konnten nicht mit mehreren Signaturen signiert werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="251"/>
        <source>Couldn&#39;t sign multisig transaction:</source>
        <translation>Multisig-Transaktion konnte nicht signiert werden:</translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>Dies ist eine reine Uhren-Brieftasche</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>Die Transaktion konnte nicht unterzeichnet werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Beanspruchtes Wechselgeld geht nicht an eine bezahlte Adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Der geforderte Betrag des Wechselgelds ist höher als die Zahlung an die Wechselgeldadresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184"/>
        <source>Change goes to more than one address</source>
        <translation>Änderung geht an mehrere Adressen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>sending %s to %s</source>
        <translation>%s wird an %s gesendet</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>with no destinations</source>
        <translation>ohne Ziele</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209"/>
        <source>%s change to %s</source>
        <translation>%s ändern in %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212"/>
        <source>no change</source>
        <translation>keine Änderung</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>%lu Transaktionen geladen, für %s, Gebühr %s, %s, %s, mit minimaler Ringgröße %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="561"/>
        <source>failed to parse address</source>
        <translation>Adresse konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="572"/>
        <source>failed to parse secret spend key</source>
        <translation>Der geheime Ausgabenschlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="587"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Weder Ansichtsschlüssel noch Ausgabeschlüssel angegeben, abgebrochen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="595"/>
        <source>failed to parse secret view key</source>
        <translation>Der geheime Ansichtsschlüssel konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="604"/>
        <source>failed to verify secret spend key</source>
        <translation>Geheimer Ausgabenschlüssel konnte nicht verifiziert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="608"/>
        <source>spend key does not match address</source>
        <translation>Der Ausgabenschlüssel stimmt nicht mit der Adresse überein</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="614"/>
        <source>failed to verify secret view key</source>
        <translation>Fehler beim Überprüfen des geheimen Ansichtsschlüssels</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="618"/>
        <source>view key does not match address</source>
        <translation>Ansichtsschlüssel stimmt nicht mit Adresse überein</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="641"/>
        <location filename="../src/wallet/api/wallet.cpp" line="658"/>
        <source>failed to generate new wallet:</source>
        <translation>Das Generieren des neuen Wallets ist fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="706"/>
        <source>Electrum seed is empty</source>
        <translation>Der Electrum-Seed ist leer</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="715"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Überprüfung der Wortliste im Electrum-Stil fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1071"/>
        <source>Failed to load unsigned transactions</source>
        <translation>Nicht signierte Transaktionen konnten nicht geladen werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1094"/>
        <source>Failed to load transaction from file</source>
        <translation>Die Transaktion konnte nicht aus der Datei geladen werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1110"/>
        <source>Wallet is view only</source>
        <translation>Wallet ist nur zur Ansicht verfügbar</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118"/>
        <source>failed to save file</source>
        <translation>Datei konnte nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1134"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Schlüsselbilder können nur mit einem vertrauenswürdigen Daemon importiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1147"/>
        <source>Failed to import key images:</source>
        <translation>Schlüsselbilder konnten nicht importiert werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1158"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1188"/>
        <source>Not supported on HW wallets.</source>
        <translation>Wird auf HW-Wallets nicht unterstützt.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169"/>
        <source>Failed to save file:</source>
        <translation>Datei konnte nicht gespeichert werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1176"/>
        <source>Error exporting outputs:</source>
        <translation>Fehler beim Exportieren der Ausgaben:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1197"/>
        <source>Failed to read file:</source>
        <translation>Datei konnte nicht gelesen werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1209"/>
        <source>Failed to import outputs:</source>
        <translation>Der Import der Ausgaben ist fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1220"/>
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>Das Scannen der Transaktionen ist fehlgeschlagen: Es wurden keine Transaktions-IDs angegeben.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231"/>
        <source>Invalid txid specified:</source>
        <translation>Ungültige txid angegeben:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1249"/>
        <source>Failed to scan transaction:</source>
        <translation>Scannen der Transaktion fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1281"/>
        <source>Failed to get subaddress label:</source>
        <translation>Das Unteradressenetikett konnte nicht abgerufen werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1294"/>
        <source>Failed to set subaddress label:</source>
        <translation>Unteradressenbezeichnung konnte nicht festgelegt werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1311"/>
        <source>Failed to get multisig info:</source>
        <translation>Multisig-Informationen konnten nicht abgerufen werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1328"/>
        <source>Failed to make multisig:</source>
        <translation>Erstellen der Mehrfachsignatur fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1342"/>
        <source>Failed to exchange multisig keys:</source>
        <translation>Der Austausch der Multisig-Schlüssel ist fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1358"/>
        <source>Failed to export multisig images:</source>
        <translation>Multisig-Bilder konnten nicht exportiert werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1376"/>
        <source>Failed to parse imported multisig images</source>
        <translation>Das Parsen importierter Multisig-Bilder ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1386"/>
        <source>Failed to import multisig images:</source>
        <translation>Multisig-Bilder konnten nicht importiert werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1400"/>
        <source>Failed to check for partial multisig key images:</source>
        <translation>Die Suche nach teilweisen Multisig-Schlüsselbildern ist fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1428"/>
        <source>Failed to restore multisig transaction:</source>
        <translation>Multisig-Transaktion konnte nicht wiederhergestellt werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1477"/>
        <source>Sending all requires one destination address</source>
        <translation>Für den Versand aller Sendungen ist eine Zieladresse erforderlich</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1481"/>
        <source>Destinations and amounts are unequal</source>
        <translation>Ziele und Beträge sind ungleich</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489"/>
        <source>payment id has invalid format, expected 64 character hex string:</source>
        <translation>Die Zahlungs-ID hat ein ungültiges Format. Es wird eine 64 Zeichen lange Hex-Zeichenfolge erwartet:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1497"/>
        <source>Invalid destination address</source>
        <translation>Ungültige Zieladresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1503"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>Für eine einzelne Transaktion kann nicht mehr als eine Zahlungs-ID verwendet werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1531"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>Zahlungs-ID konnte nicht eingerichtet werden, obwohl sie korrekt dekodiert wurde</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1556"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1647"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>Daemon ist beschäftigt. Bitte versuchen Sie es später erneut.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1558"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1649"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>keine Verbindung zum Daemon. Bitte stellen Sie sicher, dass der Daemon läuft.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1560"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1651"/>
        <source>RPC error:</source>
        <translation>RPC-Fehler:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1562"/>
        <source>failed to get outputs to mix: %s</source>
        <translation>Fehler beim Abrufen der Ausgaben zum Mischen: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1566"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1658"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>nicht genug Geld zum Überweisen, nur %s verfügbar, gesendeter Betrag %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1573"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1666"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>nicht genug Geld zum Überweisen, Gesamtsaldo nur %s, gesendeter Betrag %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1580"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1674"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>nicht genug Geld zum Überweisen, nur %s verfügbar, Transaktionsbetrag %s = %s + %s (Gebühr)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1588"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1682"/>
        <source>not enough outputs for specified ring size</source>
        <translation>nicht genügend Ausgänge für die angegebene Ringgröße</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>output amount</source>
        <translation>Ausgabemenge</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>found outputs to use</source>
        <translation>gefundene zu verwendende Ausgaben</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1592"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>Bitte fegen Sie nicht mischbare Ausgänge.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1595"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1688"/>
        <source>transaction was not constructed</source>
        <translation>Transaktion wurde nicht konstruiert</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1598"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1691"/>
        <source>transaction %s was rejected by daemon with status:</source>
        <translation>Transaktion %s wurde vom Daemon mit dem Status abgelehnt:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1603"/>
        <source>destination amount is zero</source>
        <translation>Der Zielbetrag ist Null</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1605"/>
        <source>transaction has no destination</source>
        <translation>Transaktion hat kein Ziel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1607"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1698"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>Es wurde keine geeignete Möglichkeit gefunden, Transaktionen aufzuteilen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1609"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1700"/>
        <source>unknown transfer error:</source>
        <translation>unbekannter Übertragungsfehler:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1611"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1702"/>
        <source>internal error:</source>
        <translation>interner Fehler:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1613"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1704"/>
        <source>unexpected error:</source>
        <translation>unerwarteter Fehler:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1615"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1706"/>
        <source>unknown error</source>
        <translation>unbekannter Fehler</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653"/>
        <source>failed to get outputs to mix</source>
        <translation>Es ist nicht gelungen, die Ausgänge zu mischen</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1696"/>
        <source>one of destinations is zero</source>
        <translation>eines der Ziele ist Null</translation>
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
        <translation>Txid konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1836"/>
        <source>no tx keys found for this txid</source>
        <translation>Für diese TXID wurden keine TX-Schlüssel gefunden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1860"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1869"/>
        <source>Failed to parse tx key</source>
        <translation>TX-Schlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1878"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1907"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1935"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2016"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2047"/>
        <source>Failed to parse address</source>
        <translation>Adresse konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2021"/>
        <source>Address must not be a subaddress</source>
        <translation>Die Adresse darf keine Unteradresse sein</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2052"/>
        <source>Address doesn&#39;t belong to the wallet</source>
        <translation>Die Adresse gehört nicht zur Brieftasche</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2076"/>
        <source>The wallet must be in multisig ready state</source>
        <translation>Die Brieftasche muss im Multisig-Ready-Zustand sein</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2098"/>
        <source>Given string is not a key</source>
        <translation>Die angegebene Zeichenfolge ist kein Schlüssel</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2361"/>
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>Rescan Spend kann nur mit einem vertrauenswürdigen Daemon verwendet werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2419"/>
        <source>Invalid output:</source>
        <translation>Ungültige Ausgabe:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2426"/>
        <source>Failed to mark outputs as spent</source>
        <translation>Ausgaben konnten nicht als ausgegeben markiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2437"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2459"/>
        <source>Failed to parse output amount</source>
        <translation>Ausgabebetrag konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2442"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2464"/>
        <source>Failed to parse output offset</source>
        <translation>Ausgabe-Offset konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2448"/>
        <source>Failed to mark output as spent</source>
        <translation>Ausgabe konnte nicht als ausgegeben markiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2470"/>
        <source>Failed to mark output as unspent</source>
        <translation>Ausgabe konnte nicht als ungenutzt markiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2481"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2520"/>
        <source>Failed to parse key image</source>
        <translation>Das Schlüsselbild konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2487"/>
        <source>Failed to get ring</source>
        <translation>Ring konnte nicht erhalten werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2505"/>
        <source>Failed to get rings</source>
        <translation>Ringe konnten nicht erhalten werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2526"/>
        <source>Failed to set ring</source>
        <translation>Klingelton konnte nicht eingestellt werden</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316"/>
        <source>Failed to parse address</source>
        <translation>Adresse konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323"/>
        <source>Failed to parse key</source>
        <translation>Schlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="331"/>
        <source>failed to verify key</source>
        <translation>Schlüssel konnte nicht verifiziert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="341"/>
        <source>key does not match address</source>
        <translation>Schlüssel stimmt nicht mit Adresse überein</translation>
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
        <translation>NEIN</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92"/>
        <source>Specify IP to bind RPC server</source>
        <translation>IP zum Binden des RPC-Servers angeben</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93"/>
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>IPv6-Adresse zum Binden des RPC-Servers angeben</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94"/>
        <source>Specify IP to bind restricted RPC server</source>
        <translation>IP angeben, um eingeschränkten RPC-Server zu binden</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95"/>
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>IPv6-Adresse zum Binden des eingeschränkten RPC-Servers angeben</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96"/>
        <source>Allow IPv6 for RPC</source>
        <translation>IPv6 für RPC zulassen</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97"/>
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>Nicht erfolgreiche IPv4-Bindung für RPC ignorieren</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>Geben Sie den für den RPC-Server erforderlichen Benutzernamen[:Passwort] an</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Bestätigen Sie, dass der RPC-Bind-IP-Wert KEINE Loopback-IP (lokale IP) ist.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Geben Sie eine durch Kommas getrennte Liste von Ursprüngen an, um die gemeinsame Nutzung von Ressourcen zwischen verschiedenen Ursprüngen zu ermöglichen.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>SSL für RPC-Verbindungen aktivieren: aktiviert|deaktiviert|automatische Erkennung</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102"/>
        <source>Path to a PEM format private key</source>
        <translation>Pfad zu einem privaten Schlüssel im PEM-Format</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103"/>
        <source>Path to a PEM format certificate</source>
        <translation>Pfad zu einem Zertifikat im PEM-Format</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Pfad zur Datei, die zusammengesetzte Zertifikate im PEM-Format enthält, um die System-CA(s) zu ersetzen.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105"/>
        <source>List of certificate fingerprints to allow</source>
        <translation>Liste der zuzulassenden Zertifikatfingerabdrücke</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106"/>
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>Erlaube dem Benutzer (über --rpc-ssl-certificates) Kettenzertifikate</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107"/>
        <source>Allow any peer certificate</source>
        <translation>Alle Peer-Zertifikate zulassen</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108"/>
        <source>Do not ban hosts on RPC errors</source>
        <translation>Sperren Sie Hosts nicht aufgrund von RPC-Fehlern.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155"/>
        <location filename="../src/rpc/rpc_args.cpp" line="183"/>
        <location filename="../src/rpc/rpc_args.cpp" line="204"/>
        <location filename="../src/rpc/rpc_args.cpp" line="221"/>
        <source>Invalid IP address given for --</source>
        <translation>Ungültige IP-Adresse angegeben für --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163"/>
        <location filename="../src/rpc/rpc_args.cpp" line="191"/>
        <source>permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation>erlaubt eingehende unverschlüsselte externe Verbindungen. Erwägen Sie stattdessen einen SSH-Tunnel oder einen SSL-Proxy. Überschreiben mit --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source>Username specified with --</source>
        <translation>Benutzername angegeben mit --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source>cannot be empty</source>
        <translation>darf nicht leer sein</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4933"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Daemon verwendet eine andere RPC-Hauptversion (%u) als die Wallet (%u): %s. Aktualisieren Sie entweder eine davon oder verwenden Sie --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7068"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7622"/>
        <source>Spending from address index %d
</source>
        <translation>Ausgaben vom Adressindex %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7083"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Ihre Transaktion muss in %llu Transaktionen aufgeteilt werden. Dies führt dazu, dass für jede Transaktion eine Transaktionsgebühr erhoben wird, was eine Gesamtgebühr von %s ergibt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7089"/>
        <source>The transaction fee is %s</source>
        <translation>Die Transaktionsgebühr beträgt %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7092"/>
        <source>, of which %s is dust from change</source>
        <translation>, davon %s ist Staub vom Wechselgeld</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Insgesamt werden %s aus der Staubänderung an die Staubadresse gesendet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7376"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Nicht genug Geld im freigeschalteten Guthaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421"/>
        <source>No address given</source>
        <translation>Keine Adresse angegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7487"/>
        <source>missing lockedblocks parameter</source>
        <translation>fehlender Parameter „lockedblocks“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497"/>
        <source>bad locked_blocks parameter</source>
        <translation>falscher Parameter „locked_blocks“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7793"/>
        <source>failed to parse Payment ID</source>
        <translation>Die Zahlungs-ID konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2273"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7816"/>
        <source>failed to parse key image</source>
        <translation>Das Schlüsselbild konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7854"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8077"/>
        <source>No outputs found</source>
        <translation>Keine Ausgaben gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8082"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Es werden mehrere Transaktionen erstellt, was nicht passieren sollte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7864"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8087"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>Die Transaktion verwendet mehrere oder keine Eingaben, was nicht passieren sollte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8168"/>
        <source>Money successfully sent, transaction:</source>
        <translation>Geld erfolgreich gesendet, Transaktion:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989"/>
        <source>missing threshold amount</source>
        <translation>fehlender Schwellenbetrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7995"/>
        <source>invalid amount threshold</source>
        <translation>Ungültiger Betragsgrenzwert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8579"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Beanspruchtes Wechselgeld geht nicht an eine bezahlte Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8584"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Der geforderte Betrag des Wechselgelds ist höher als die Zahlung an die Wechselgeldadresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8593"/>
        <source>Change goes to more than one address</source>
        <translation>Änderung geht an mehrere Adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8615"/>
        <source>sending %s to %s</source>
        <translation>%s wird an %s gesendet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8625"/>
        <source>dummy output(s)</source>
        <translation>Dummy-Ausgabe(n)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8628"/>
        <source>with no destinations</source>
        <translation>ohne Ziele</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8637"/>
        <source>no change</source>
        <translation>keine Änderung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5750"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Der Daemon ist lokal und wird als vertrauenswürdig vorausgesetzt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5413"/>
        <source>Password for new watch-only wallet</source>
        <translation>Passwort für neues Watch-Only-Wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413"/>
        <source>FALSE</source>
        <translation>FALSE</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="775"/>
        <source>Commands:</source>
        <translation>Befehle:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="789"/>
        <source>Unknown command:</source>
        <translation>Unbekannter Befehl:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796"/>
        <source>Command usage:</source>
        <translation>Befehlsverwendung:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="799"/>
        <source>Command description:</source>
        <translation>Befehlsbeschreibung:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="825"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>Die Wallet ist nur zum Ansehen verfügbar und hat keinen Ausgabeschlüssel.</translation>
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
        <translation>Befehl wird von HW Wallet nicht unterstützt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="933"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>Wallet ist nur zum Ansehen und hat keinen Seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="865"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>Wallet ist multisig, aber noch nicht finalisiert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="874"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="943"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>Wallet ist nicht deterministisch und hat keinen Seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898"/>
        <source>Failed to retrieve seed</source>
        <translation>Seed konnte nicht abgerufen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928"/>
        <source>wallet is multisig and has no seed</source>
        <translation>Wallet ist Multisig und hat keinen Seed</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="953"/>
        <source>Incorrect password</source>
        <translation>Falsches Passwort</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1153"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1236"/>
        <source>Your original password was incorrect.</source>
        <translation>Ihr ursprüngliches Passwort war falsch.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="990"/>
        <source>Error with wallet rewrite:</source>
        <translation>Fehler beim Umschreiben der Brieftasche:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10594"/>
        <source>Random payment ID:</source>
        <translation>Zufällige Zahlungs-ID:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1011"/>
        <source>Current fee is %s %s per %s</source>
        <translation>Die aktuelle Gebühr beträgt %s %s pro %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603"/>
        <source>Payment required, see the &#39;rpc_payment_info&#39; command</source>
        <translation>Zahlung erforderlich, siehe Befehl &#39;rpc_payment_info&#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027"/>
        <source>Error: failed to estimate backlog array size:</source>
        <translation>Fehler: Fehler beim Schätzen der Backlog-Array-Größe:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1032"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>Fehler: Falsch geschätzte Backlog-Array-Größe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1044"/>
        <source>(current)</source>
        <translation>(aktuell)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1047"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u Block (%u Minuten) Rückstand bei Priorität %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u bis %u Block (%u bis %u Minuten) Rückstand bei Priorität %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1052"/>
        <source>No backlog at priority</source>
        <translation>Kein Rückstand bei Priorität</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1074"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1121"/>
        <source>This wallet is already multisig</source>
        <translation>Diese Wallet ist bereits multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1079"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1126"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>Wallet ist nur zum Ansehen verfügbar und kann nicht mit mehreren Signaturen versehen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1132"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Dieses Wallet wurde bereits verwendet. Bitte verwenden Sie ein neues Wallet, um ein Multisig-Wallet zu erstellen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1093"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&#39; multisig info</source>
        <translation>Senden Sie diese Multisig-Informationen an alle anderen Teilnehmer und verwenden Sie dann make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] mit den Multisig-Informationen anderer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1094"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet&#39;s participants</source>
        <translation>Dies beinhaltet den PRIVATEN Ansichtsschlüssel und muss daher nur den Teilnehmern dieser Multisig-Wallet offengelegt werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1146"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890"/>
        <source>Invalid threshold</source>
        <translation>Ungültiger Schwellenwert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1168"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1247"/>
        <source>Another step is needed</source>
        <translation>Ein weiterer Schritt ist nötig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180"/>
        <source>Error creating multisig:</source>
        <translation>Fehler beim Erstellen von Multisig:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1187"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Fehler beim Erstellen von Multisig: Neues Wallet ist nicht Multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190"/>
        <source>multisig address:</source>
        <translation>Multisig-Adresse:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1224"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1289"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357"/>
        <source>This wallet is not multisig</source>
        <translation>Diese Brieftasche ist nicht multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229"/>
        <source>This wallet is already finalized</source>
        <translation>Dieses Wallet ist bereits fertiggestellt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259"/>
        <source>Multisig address:</source>
        <translation>Multisig-Adresse:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1294"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1458"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1658"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation>Dieses Multisig-Wallet ist noch nicht fertiggestellt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10969"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11126"/>
        <source>failed to save file</source>
        <translation>Datei konnte nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330"/>
        <source>Error exporting multisig info:</source>
        <translation>Fehler beim Exportieren der Multisig-Informationen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1334"/>
        <source>Multisig info exported to</source>
        <translation>Multisig-Informationen exportiert nach</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10882"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10908"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11159"/>
        <source>failed to read file</source>
        <translation>Fehler beim Lesen der Datei</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1406"/>
        <source>Failed to import multisig info:</source>
        <translation>Multisig-Informationen konnten nicht importiert werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1417"/>
        <source>Failed to update spent status after importing multisig info:</source>
        <translation>Aktualisierung des Ausgabestatus nach dem Importieren der Multisig-Informationen fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>Nicht vertrauenswürdiger Daemon, der ausgegebene Status ist möglicherweise falsch. Verwenden Sie einen vertrauenswürdigen Daemon und führen Sie „rescan_spent“ aus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1571"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653"/>
        <source>This is not a multisig wallet</source>
        <translation>Dies ist keine Multisig-Wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1503"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1512"/>
        <source>Failed to sign multisig transaction</source>
        <translation>Signieren der Multisig-Transaktion fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1519"/>
        <source>Multisig error:</source>
        <translation>Multisig-Fehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524"/>
        <source>Failed to sign multisig transaction:</source>
        <translation>Signieren der Multisig-Transaktion fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1533"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1546"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8725"/>
        <source>Transaction successfully signed to file</source>
        <translation>Transaktion erfolgreich in Datei signiert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Es kann mit submit_multisig an das Netzwerk weitergeleitet werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1608"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1679"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>Multisig-Transaktion konnte nicht aus der Datei geladen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1684"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Multisig-Transaktion nur von %u Unterzeichnern unterzeichnet, benötigt %u weitere Unterschriften</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1623"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11369"/>
        <source>Transaction successfully submitted, transaction</source>
        <translation>Transaktion erfolgreich übermittelt, Transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11370"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>Sie können den Status mit dem Befehl „show_transfers“ überprüfen.</translation>
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
        <translation>unbekannter Fehler</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1700"/>
        <source>Failed to export multisig transaction to file</source>
        <translation>Multisig-Transaktion konnte nicht in Datei exportiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1704"/>
        <source>Saved exported multisig transaction file(s):</source>
        <translation>Gespeicherte exportierte Multisig-Transaktionsdatei(en):</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1709"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2050"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6114"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6451"/>
        <source>unexpected error:</source>
        <translation>unerwarteter Fehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1732"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1889"/>
        <source>Invalid key image</source>
        <translation>Ungültiges Schlüsselbild</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1738"/>
        <source>Invalid txid</source>
        <translation>Ungültige txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1765"/>
        <source>Failed to get key image ring:</source>
        <translation>Schlüsselbildring konnte nicht abgerufen werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780"/>
        <source>File doesn&#39;t exist</source>
        <translation>Die Datei existiert nicht.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802"/>
        <source>Invalid ring specification:</source>
        <translation>Ungültige Ringspezifikation:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1810"/>
        <source>Invalid key image:</source>
        <translation>Ungültiges Schlüsselbild:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1815"/>
        <source>Invalid ring type, expected relative or abosolute:</source>
        <translation>Ungültiger Ringtyp, relativ oder absolut erwartet:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1821"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1833"/>
        <source>Error reading line:</source>
        <translation>Fehler beim Lesen der Zeile:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844"/>
        <source>Invalid ring:</source>
        <translation>Ungültiger Ring:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1853"/>
        <source>Invalid relative ring:</source>
        <translation>Ungültiger relativer Ring:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1865"/>
        <source>Invalid absolute ring:</source>
        <translation>Ungültiger absoluter Ring:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874"/>
        <source>Failed to set ring for key image:</source>
        <translation>Ring für Schlüsselbild konnte nicht eingestellt werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874"/>
        <source>Continuing.</source>
        <translation>Weiter geht‘s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1904"/>
        <source>Missing absolute or relative keyword</source>
        <translation>Fehlendes absolutes oder relatives Schlüsselwort</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1921"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>ungültiger Index: muss eine strikt positive Ganzzahl ohne Vorzeichen sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929"/>
        <source>invalid index: indices wrap</source>
        <translation>ungültiger Index: Indizes werden umbrochen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>ungültiger Index: Indizes sollten streng aufsteigend sortiert sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946"/>
        <source>failed to set ring</source>
        <translation>Klingelton konnte nicht eingestellt werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1969"/>
        <source>Invalid key image or txid</source>
        <translation>Ungültiges Schlüsselbild oder ungültige TXID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1978"/>
        <source>failed to unset ring</source>
        <translation>Klingelton konnte nicht deaktiviert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2001"/>
        <source>RPC client ID:</source>
        <translation>RPC-Client-ID:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002"/>
        <source>RPC client secret key:</source>
        <translation>Geheimer RPC-Clientschlüssel:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2005"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434"/>
        <source>Failed to query daemon</source>
        <translation>Daemon konnte nicht abgefragt werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2013"/>
        <source>Using daemon:</source>
        <translation>Daemon verwenden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014"/>
        <source>Payments required for node use, current credits:</source>
        <translation>Erforderliche Zahlungen für die Knotennutzung, aktuelle Guthaben:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2015"/>
        <source>Credits target:</source>
        <translation>Credits-Ziel:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2018"/>
        <source>Credits spent this session:</source>
        <translation>In dieser Sitzung ausgegebene Credits:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2020"/>
        <source>Credit discrepancy this session:</source>
        <translation>Kreditdiskrepanze in dieser Sitzung:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>Difficulty:</source>
        <translation>Schwierigkeit:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>credits per hash found,</source>
        <translation>Credits pro gefundenem Hash,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>credits/hash</source>
        <translation>Kredite/Hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2030"/>
        <source>Mining for payment at %.1f H/s</source>
        <translation>Mining zur Bezahlung bei %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2035"/>
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>Geschätzte Zeit bis zum Abbau des %u Credits-Ziels: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039"/>
        <source>Mining for payment</source>
        <translation>Mining als Zahlungsmittel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2042"/>
        <source>Not mining</source>
        <translation>Kein Bergbau</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2045"/>
        <source>No payment needed for node use</source>
        <translation>Für die Knotennutzung ist keine Zahlung erforderlich</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118"/>
        <source>Bad argument:</source>
        <translation>Schlechtes Argument:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118"/>
        <source>should be &quot;add&quot;</source>
        <translation>sollte „Hinzufügen“ sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2127"/>
        <source>Failed to open file</source>
        <translation>Datei konnte nicht geöffnet werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211"/>
        <source>Failed to save known rings:</source>
        <translation>Bekannte Ringe konnten nicht gespeichert werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220"/>
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>Verwendung: %s &lt;key_image&gt;|&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2265"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2277"/>
        <source>Frozen:</source>
        <translation>Gefroren:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279"/>
        <source>Not frozen:</source>
        <translation>Nicht gefroren:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293"/>
        <source>bytes sent</source>
        <translation>gesendete Bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294"/>
        <source>bytes received</source>
        <translation>Empfangene Bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2306"/>
        <source>No known public nodes</source>
        <translation>Keine bekannten öffentlichen Knoten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>last_seen</source>
        <translation>zuletzt gesehen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2324"/>
        <source>never</source>
        <translation>niemals</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2332"/>
        <source>Error retrieving public node list:</source>
        <translation>Fehler beim Abrufen der öffentlichen Knotenliste:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2342"/>
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium ist wie Bitcoin eine Kryptowährung. Das heißt, es ist digitales Geld.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2346"/>
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>Salvium schützt Ihre Privatsphäre auf der Blockchain, und während Salvium ständig bestrebt ist, sich zu verbessern,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2347"/>
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>Keine Datenschutztechnologie kann 100 % perfekt sein, auch Salvium nicht.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2348"/>
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>Salvium kann Sie nicht vor Malware schützen und ist gegen mächtige Gegner möglicherweise nicht so wirksam wie erhofft.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2349"/>
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>In Zukunft könnten Schwachstellen in Salvium entdeckt werden und Angriffe könnten entwickelt werden, um unter einige</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2350"/>
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>der Datenschutzebenen, die Salvium bietet. Gehen Sie auf Nummer sicher und üben Sie eine mehrstufige Verteidigung.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439"/>
        <source>Daemon does not require payment for RPC access</source>
        <translation>Daemon erfordert keine Zahlung für den RPC-Zugriff</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447"/>
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>Mining für RPC-Zugriff wird gestartet: diff %llu, %f Credits/Hash%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448"/>
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>Führen Sie stop_mining_for_rpc aus, um zu stoppen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>Wallet ist nur zum Ansehen und kann nicht übertragen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7117"/>
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>ACHTUNG: Dies ist keine Standardringgröße, die Ihre Privatsphäre verletzen kann. Die Standardgröße wird empfohlen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2595"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2611"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of:</source>
        <translation>Die Priorität muss entweder 0, 1, 2, 3 oder 4 oder eine der folgenden sein:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2616"/>
        <source>could not change default priority</source>
        <translation>Die Standardpriorität konnte nicht geändert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2702"/>
        <source>invalid unit</source>
        <translation>ungültige Einheit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2738"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>ungültige Anzahl: muss eine vorzeichenlose Ganzzahl sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2720"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756"/>
        <source>invalid value</source>
        <translation>ungültiger Wert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2834"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2952"/>
        <source>Invalid height</source>
        <translation>Ungültige Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2907"/>
        <source>Invalid target</source>
        <translation>Ungültiges Ziel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2983"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3002"/>
        <source>Invalid amount</source>
        <translation>Ungültiger Betrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3072"/>
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>ungültiges Argument: muss entweder 1/ja oder 0/nein sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3340"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Beginnen Sie mit dem Mining im Daemon (bg_mining und ignore_battery sind optionale Boolesche Werte).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3343"/>
        <source>Stop mining in the daemon.</source>
        <translation>Stoppen Sie das Mining im Daemon.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350"/>
        <source>Save the current blockchain data.</source>
        <translation>Speichern Sie die aktuellen Blockchain-Daten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>Synchronisieren Sie die Transaktionen und den Saldo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3357"/>
        <source>Show the wallet&#39;s balance of the currently selected account.</source>
        <translation>Zeigt den Kontostand des aktuell ausgewählten Wallet-Kontos an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3361"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent(&quot;T&quot;|&quot;F&quot;), &quot;frozen&quot;|&quot;locked&quot;|&quot;unlocked&quot;, RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image]</source>
        <translation>Zeigt alle eingehenden Überweisungen an oder filtert sie nach Verfügbarkeit und Adressindex.

Ausgabeformat:
Betrag, Ausgegeben(&quot;T&quot;|&quot;F&quot;), &quot;eingefroren&quot;|&quot;gesperrt&quot;|&quot;entsperrt&quot;, RingCT, Globaler Index, Transaktions-Hash, Adressindex, [Öffentlicher Schlüssel, Schlüsselbild]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3367"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>Zeigt die Zahlungen für die angegebenen Zahlungs-IDs an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3370"/>
        <source>Show the blockchain height.</source>
        <translation>Zeigt die Blockchain-Höhe an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Senden Sie alle nicht mischbaren Ausgaben an sich selbst mit Ringgröße 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Senden Sie alle entsperrten Ausgaben unterhalb des Schwellenwerts an eine Adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3398"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Senden Sie eine einzelne Ausgabe des angegebenen Schlüsselbildes unverändert an eine Adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>Senden Sie eine signierte Transaktion aus einer Datei.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3442"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Ändern Sie die aktuellen Protokolldetails (die Ebene muss &lt;0–4&gt; sein).</translation>
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
        <translation>Wenn keine Argumente angegeben werden, zeigt das Wallet alle vorhandenen Konten mit ihren Salden an.
Wenn das Argument „new“ angegeben wird, erstellt das Wallet ein neues Konto, dessen Bezeichnung mit dem angegebenen Bezeichnungstext (der leer sein kann) initialisiert wird.
Wenn das Argument „switch“ angegeben wird, wechselt das Wallet zu dem durch &lt;index&gt; angegebenen Konto.
Wenn das Argument „label“ angegeben wird, setzt das Wallet die Bezeichnung des durch &lt;index&gt; angegebenen Kontos auf den angegebenen Bezeichnungstext.
Wenn das Argument „tag“ angegeben wird, wird den angegebenen Konten &lt;account_index_1&gt;, &lt;account_index_2&gt;, … ein Tag &lt;tag_name&gt; zugewiesen.
Wenn das Argument „untag“ angegeben wird, werden die den angegebenen Konten &lt;account_index_1&gt;, &lt;account_index_2&gt; zugewiesenen Tags ..., werden entfernt.
Wenn das Argument &quot;tag_description&quot; angegeben ist, wird dem Tag &lt;tag_name&gt; ein beliebiger Text &lt;description&gt; zugewiesen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3460"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Kodieren Sie eine Zahlungs-ID in eine integrierte Adresse für die aktuelle öffentliche Adresse der Brieftasche (kein Argument verwendet eine zufällige Zahlungs-ID) oder dekodieren Sie eine integrierte Adresse in eine Standardadresse und Zahlungs-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3464"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Drucken Sie alle Einträge im Adressbuch und fügen Sie optional einen Eintrag hinzu bzw. löschen Sie ihn daraus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3467"/>
        <source>Save the wallet data.</source>
        <translation>Speichern Sie die Wallet-Daten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470"/>
        <source>Save a watch-only keys file.</source>
        <translation>Speichern Sie eine schreibgeschützte Schlüsseldatei.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3473"/>
        <source>Display the private view key.</source>
        <translation>Zeigen Sie den privaten Ansichtsschlüssel an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3476"/>
        <source>Display the private spend key.</source>
        <translation>Zeigen Sie den privaten Ausgabenschlüssel an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Zeigen Sie den Mnemonik-Seed im Electrum-Stil an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Zeigen Sie den verschlüsselten Mnemonik-Seed im Electrum-Stil an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Scannen Sie die Blockchain erneut nach ausgegebenen Ausgaben.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Holen Sie sich den Transaktionsschlüssel (r) für eine gegebene &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Legen Sie den Transaktionsschlüssel (r) für eine bestimmte &lt;txid&gt; fest, falls die Transaktion von einem anderen Gerät oder einer Drittanbieter-Wallet durchgeführt wurde.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Überprüfen Sie den an &lt;Adresse&gt; gehenden Betrag in &lt;txid&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3580"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet&#39;s address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Generieren Sie eine Signatur, die beweist, dass Geldmittel an &lt;address&gt; in &lt;txid&gt; gesendet wurden, optional mit einer Challenge-Zeichenfolge &lt;message&gt;. Verwenden Sie dazu entweder den geheimen Transaktionsschlüssel (wenn &lt;address&gt; nicht die Adresse Ihres Wallets ist) oder den geheimen Ansichtsschlüssel (andernfalls), der den geheimen Schlüssel nicht preisgibt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3584"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Überprüfen Sie den Nachweis für an &lt;address&gt; in &lt;txid&gt; überwiesene Gelder mit der Challenge-Zeichenfolge &lt;message&gt; (sofern vorhanden).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3588"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Generieren Sie eine Signatur, die beweist, dass Sie &lt;txid&gt; unter Verwendung des geheimen Spend-Schlüssels generiert haben, optional mit einer Challenge-Zeichenfolge &lt;message&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3592"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Überprüfen Sie eine Signatur, die beweist, dass der Unterzeichner &lt;txid&gt; generiert hat, optional mit einer Challenge-Zeichenfolge &lt;message&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3596"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If &#39;all&#39; is specified, you prove the entire sum of all of your existing accounts&#39; balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Generieren Sie eine Signatur, die beweist, dass Sie mindestens diesen Betrag besitzen, optional mit einer Challenge-Zeichenfolge &lt;Nachricht&gt;.
Wenn &#39;alles&#39; angegeben ist, beweisen Sie die gesamte Summe aller Guthaben Ihrer bestehenden Konten.
Andernfalls beweisen Sie die Reserve in Höhe des kleinstmöglichen Betrags über &lt;Betrag&gt;, der auf Ihrem Girokonto verfügbar ist.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Überprüfen Sie eine Signatur, die beweist, dass der Besitzer von &lt;Adresse&gt; mindestens so viel besitzt, optional mit einer Challenge-Zeichenfolge &lt;Nachricht&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3623"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Zeigt die nicht ausgegebenen Ausgaben einer angegebenen Adresse innerhalb eines optionalen Betragsbereichs an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3631"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Legen Sie eine beliebige Zeichenfolge für eine &lt;txid&gt; fest.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3635"/>
        <source>Get a string note for a txid.</source>
        <translation>Holen Sie sich eine String-Notiz für eine txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3639"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Legen Sie eine beliebige Beschreibung für die Brieftasche fest.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3643"/>
        <source>Get the description of the wallet.</source>
        <translation>Holen Sie sich die Beschreibung der Brieftasche.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3646"/>
        <source>Show the wallet&#39;s status.</source>
        <translation>Zeigt den Status der Brieftasche an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3649"/>
        <source>Show the wallet&#39;s information.</source>
        <translation>Zeigen Sie die Informationen der Brieftasche an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3657"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>Überprüfen Sie eine Signatur anhand des Inhalts einer Datei.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3665"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importieren Sie eine Liste signierter Schlüsselbilder und überprüfen Sie deren Ausgabestatus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3673"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Versuche, die Verbindung zum HW-Wallet wiederherzustellen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Exportieren Sie eine Reihe von Ausgaben, die diesem Wallet gehören.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3681"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importieren Sie eine Reihe von Ausgaben, die diesem Wallet gehören.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3685"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>Informationen zu einer Überweisung von/zu dieser Adresse anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3688"/>
        <source>Change the wallet&#39;s password.</source>
        <translation>Ändern Sie das Passwort der Brieftasche.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3695"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Drucken Sie sich die Informationen zum aktuellen Gebühren- und Transaktionsbestand aus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3697"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>Exportieren Sie die zum Erstellen einer Multisig-Wallet erforderlichen Daten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3700"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Machen Sie aus dieser Wallet eine Multisig-Wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3708"/>
        <source>Export multisig info for other participants</source>
        <translation>Multisig-Informationen für andere Teilnehmer exportieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3712"/>
        <source>Import multisig info from other participants</source>
        <translation>Multisig-Informationen von anderen Teilnehmern importieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3716"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>Signieren Sie eine Multisig-Transaktion aus einer Datei</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3720"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Senden Sie eine signierte Multisig-Transaktion aus einer Datei</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3724"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>Exportieren einer signierten Multisig-Transaktion in eine Datei</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3815"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, &quot;absolute&quot;, list of rings</source>
        <translation>Drucken Sie die Ringe, die zum Ausgeben eines bestimmten Schlüsselbilds oder einer bestimmten Transaktion verwendet wurden (wenn die Ringgröße &gt; 1 ist)

Ausgabeformat:
Schlüsselbild, „absolut“, Liste der Ringe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3821"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Legen Sie den Ring fest, der für ein bestimmtes Schlüsselbild verwendet wird, sodass es in einem Fork wiederverwendet werden kann.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3825"/>
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>Hebt die Deaktivierung des für ein bestimmtes Schlüsselbild oder eine bestimmte Transaktion verwendeten Rings auf</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3829"/>
        <source>Save known rings to the shared rings database</source>
        <translation>Bekannte Ringe in der gemeinsamen Ringdatenbank speichern</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845"/>
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>Frieren Sie eine einzelne Ausgabe nach Schlüsselbild ein, damit sie nicht verwendet wird</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3849"/>
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>Tauen Sie eine einzelne Ausgabe nach Schlüsselbild auf, damit sie erneut verwendet werden kann</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3853"/>
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>Überprüft, ob eine gegebene Ausgabe aktuell durch das Schlüsselbild eingefroren ist.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3861"/>
        <source>Prints simple network stats</source>
        <translation>Druckt einfache Netzwerkstatistiken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3865"/>
        <source>Lists known public nodes</source>
        <translation>Listet bekannte öffentliche Knoten auf</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3869"/>
        <source>Prints basic info about Salvium for first time users</source>
        <translation>Druckt grundlegende Informationen zu Salvium für Erstbenutzer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3873"/>
        <source>Returns version information</source>
        <translation>Gibt Versionsinformationen zurück</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3877"/>
        <source>Get info about RPC payments to current node</source>
        <translation>Erhalten Sie Informationen zu RPC-Zahlungen an den aktuellen Knoten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881"/>
        <source>Start mining to pay for RPC access</source>
        <translation>Beginnen Sie mit dem Mining, um für den RPC-Zugriff zu bezahlen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3885"/>
        <source>Stop mining to pay for RPC access</source>
        <translation>Stoppen Sie das Mining, um für den RPC-Zugriff zu bezahlen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3893"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Zeigt den Hilfebereich oder die Dokumentation zu einem &lt;Befehl&gt; an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984"/>
        <source>needs an argument</source>
        <translation>braucht ein Argument</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>Seed festlegen: benötigt ein Argument. Verfügbare Optionen: Sprache</translation>
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
        <translation>0 oder 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4011"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (am langsamsten, keine Annahmen); optimize-coinbase (schnell, nimmt an, dass die gesamte Coinbase an eine einzige Adresse gezahlt wird); no-coinbase (am schnellsten, nimmt an, dass wir keine Coinbase-Transaktion erhalten), default (dasselbe wie optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4012"/>
        <source>0, 1, 2, 3, or 4, or one of</source>
        <translation>0, 1, 2, 3 oder 4 oder eine der</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4013"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (oder nie|Aktion|entschlüsseln)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4015"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4027"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040"/>
        <source>unsigned integer</source>
        <translation>vorzeichenlose Ganzzahl</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4017"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4029"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4030"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>amount</source>
        <translation>Menge</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4022"/>
        <source>block height</source>
        <translation>Blockhöhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4026"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;Hauptfach&gt;:&lt;Nebenfach&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4034"/>
        <source>1/yes or 0/no</source>
        <translation>1/ja oder 0/nein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4039"/>
        <source>floating point &gt;= 0</source>
        <translation>Gleitkommazahl &gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044"/>
        <source>set: unrecognized argument(s)</source>
        <translation>gesetzt: nicht erkannte(s) Argument(e)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4102"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Wallet-Name ungültig. Bitte versuchen Sie es erneut oder drücken Sie Strg+C zum Beenden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4114"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Es wird versucht, eine Brieftasche zu erstellen oder wiederherzustellen, aber die angegebenen Dateien sind bereits vorhanden. Der Vorgang wird beendet, um ein Überschreiben zu vermeiden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4119"/>
        <source>Wallet and key files found, loading...</source>
        <translation>Wallet- und Schlüsseldateien gefunden, wird geladen...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4125"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Schlüsseldatei gefunden, aber keine Wallet-Datei. Wird neu generiert...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4131"/>
        <source>Key file not found. Failed to open wallet:</source>
        <translation>Schlüsseldatei nicht gefunden. Wallet konnte nicht geöffnet werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4139"/>
        <source>No wallet found with that name. Confirm creation of new wallet named:</source>
        <translation>Es wurde kein Wallet mit diesem Namen gefunden. Bestätigen Sie die Erstellung eines neuen Wallets mit dem Namen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150"/>
        <source>Generating new wallet...</source>
        <translation>Neues Wallet wird erstellt...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231"/>
        <source>Can&#39;t specify more than one of --testnet and --stagenet</source>
        <translation>Es kann nicht mehr als eines von --testnet und --stagenet angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4247"/>
        <source>can&#39;t specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; and --generate-from-device=&quot;wallet_name&quot;</source>
        <translation>kann nicht mehr als eines der folgenden Elemente angeben: --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; und --generate-from-device=&quot;wallet_name&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277"/>
        <source>can&#39;t specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>kann nicht sowohl --restore-deterministic-wallet oder --restore-multisig-wallet als auch --non-deterministic angeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4283"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet verwendet --generate-new-wallet, nicht --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4285"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet verwendet --generate-new-wallet, nicht --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4299"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation>Geben Sie einen Wiederherstellungsparameter mit --electrum-seed=&quot;multisig seed here&quot; an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>Geben Sie mit --electrum-seed=&quot;Wörterliste hier&quot; einen Wiederherstellungsparameter an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328"/>
        <source>Multisig seed failed verification</source>
        <translation>Multisig-Seed-Verifizierung fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Überprüfung der Wortliste im Electrum-Stil fehlgeschlagen</translation>
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
        <translation>Keine Daten angegeben, abgebrochen</translation>
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
        <translation>Adresse konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4368"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4445"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Bei dieser Adresse handelt es sich um eine Subadresse, die hier nicht verwendet werden kann.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4383"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4475"/>
        <source>failed to parse view key secret key</source>
        <translation>Der Ansichtsschlüssel konnte nicht analysiert werden. Geheimer Schlüssel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4392"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4492"/>
        <source>failed to verify view key secret key</source>
        <translation>Überprüfung des Ansichtsschlüssels und des geheimen Schlüssels fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4396"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4578"/>
        <source>view key does not match standard address</source>
        <translation>Ansichtsschlüssel stimmt nicht mit der Standardadresse überein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4401"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4422"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4500"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4661"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4693"/>
        <source>account creation failed</source>
        <translation>Kontoerstellung ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4418"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4460"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4603"/>
        <source>failed to parse spend key secret key</source>
        <translation>Der geheime Schlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4484"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4623"/>
        <source>failed to verify spend key secret key</source>
        <translation>Fehler beim Überprüfen des geheimen Ausgabeschlüssels</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4488"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628"/>
        <source>spend key does not match standard address</source>
        <translation>Der Ausgabenschlüssel stimmt nicht mit der Standardadresse überein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4523"/>
        <source>Error: expected M/N, but got:</source>
        <translation>Fehler: M/N erwartet, aber erhalten:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4528"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got:</source>
        <translation>Fehler: Erwartet wurden N &gt; 1 und N &lt;= M, aber erhalten:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4533"/>
        <source>Error: M/N is currently unsupported.</source>
        <translation>Fehler: M/N wird derzeit nicht unterstützt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4536"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Generieren einer Master-Wallet aus %u von %u Multisig-Wallet-Schlüsseln</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4565"/>
        <source>failed to parse secret view key</source>
        <translation>Der geheime Ansichtsschlüssel konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4573"/>
        <source>failed to verify secret view key</source>
        <translation>Fehler beim Überprüfen des geheimen Ansichtsschlüssels</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4616"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>Fehler: M/N wird derzeit nicht unterstützt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4668"/>
        <source>No restore height is specified.</source>
        <translation>Es ist keine Wiederherstellungshöhe angegeben.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4669"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Vorausgesetzt, Sie erstellen ein neues Konto, erfolgt die Wiederherstellung anhand der aktuell geschätzten Blockchain-Höhe.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674"/>
        <source>account creation aborted</source>
        <translation>Kontoerstellung abgebrochen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4684"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>Geben Sie einen Wallet-Pfad mit --generate-new-wallet an (nicht mit --wallet-file).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4748"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4768"/>
        <source>bad m_restore_height parameter:</source>
        <translation>ungültiger m_restore_height-Parameter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759"/>
        <source>Restore height is:</source>
        <translation>Die Wiederherstellungshöhe beträgt:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782"/>
        <source>Restore height</source>
        <translation>Höhe wiederherstellen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798"/>
        <source>can&#39;t specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>--subaddress-lookahead und --wallet-file können nicht gleichzeitig angegeben werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802"/>
        <source>failed to open account</source>
        <translation>Kontoeröffnung fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5568"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5791"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8954"/>
        <source>wallet is null</source>
        <translation>Wallet ist null</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Initialisierung der Ringdatenbank fehlgeschlagen: Datenschutzverbessernde Funktionen werden inaktiv sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4920"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4924"/>
        <source>wallet failed to connect to daemon:</source>
        <translation>Wallet konnte keine Verbindung zum Daemon herstellen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4925"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the &#39;set_daemon&#39; command.</source>
        <translation>Der Daemon wurde entweder nicht gestartet oder es wurde ein falscher Port übergeben. Stellen Sie sicher, dass der Daemon läuft, oder ändern Sie die Daemon-Adresse mit dem Befehl „set_daemon“.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4954"/>
        <source>List of available languages for your wallet&#39;s seed:</source>
        <translation>Liste der verfügbaren Sprachen für den Seed Ihres Wallets:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4955"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Wenn Ihr Bildschirm einfriert, beenden Sie das Programm blind mit ^C und führen Sie es dann erneut mit --use-english-language-names aus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4973"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4978"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>ungültige Sprachauswahl eingegeben. Bitte versuchen Sie es erneut.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4992"/>
        <source>invalid password</source>
        <translation>ungültiges Passwort</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5040"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Sie haben eine veraltete Version des Wallets verwendet. Bitte verwenden Sie den neuen Seed, den wir bereitstellen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5056"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5131"/>
        <source>Generated new wallet:</source>
        <translation>Neues Wallet generiert:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5059"/>
        <source>View key:</source>
        <translation>Legende anzeigen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5136"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5244"/>
        <source>failed to generate new wallet:</source>
        <translation>Das Generieren des neuen Wallets ist fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5175"/>
        <source>Generated new wallet on hw device:</source>
        <translation>Neues Wallet auf dem HW-Gerät generiert:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5236"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>Das Generieren einer neuen Multilisig-Wallet ist fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5239"/>
        <source>Generated new %u/%u multisig wallet:</source>
        <translation>Neues %u/%u Multisig-Wallet generiert:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5255"/>
        <source>wallet file path not valid:</source>
        <translation>Wallet-Dateipfad ungültig:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5265"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation>Schlüsseldatei nicht gefunden. Wallet konnte nicht geöffnet werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5286"/>
        <source>Opened watch-only wallet</source>
        <translation>Geöffnete Nur-Uhr-Wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5288"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>%u/%u Multisig-Wallet%s geöffnet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5290"/>
        <source>Opened wallet</source>
        <translation>Geöffnete Brieftasche</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5308"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Sie haben eine veraltete Version des Wallets verwendet. Bitte fahren Sie mit dem Upgrade Ihres Wallets fort.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5323"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Sie haben eine veraltete Version des Wallets verwendet. Ihr Wallet-Dateiformat wird jetzt aktualisiert.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5331"/>
        <source>failed to load wallet:</source>
        <translation>Wallet konnte nicht geladen werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5350"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command&#39;s documentation.
</source>
        <translation>Verwenden Sie „Hilfe &lt;Befehl&gt;“, um die Dokumentation eines Befehls anzuzeigen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5372"/>
        <source>failed to deinitialize wallet</source>
        <translation>Deinitialisierung der Brieftasche ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5395"/>
        <source>Wallet data saved</source>
        <translation>Wallet-Daten gespeichert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>Wallet ist Multisig und kann keine Watch-Only-Version speichern</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5417"/>
        <source>failed to read wallet password</source>
        <translation>Das Lesen des Wallet-Passworts ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5425"/>
        <source>Watch only wallet saved as:</source>
        <translation>Nur die Uhr-Wallet speichern als:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5429"/>
        <source>Failed to save watch only wallet:</source>
        <translation>Das Speichern der Nur-Uhr-Wallet ist fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5559"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6414"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10993"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>Dieser Befehl erfordert einen vertrauenswürdigen Daemon. Aktivieren Sie ihn mit --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5608"/>
        <source>Mining started in daemon</source>
        <translation>Mining im Daemon gestartet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610"/>
        <source>mining has NOT been started:</source>
        <translation>Der Bergbau wurde NICHT begonnen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5630"/>
        <source>Mining stopped in daemon</source>
        <translation>Mining im Daemon gestoppt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632"/>
        <source>mining has NOT been stopped:</source>
        <translation>Der Bergbau wurde NICHT gestoppt:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5687"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Unerwartete Arraylänge – simple_wallet::set_daemon() beendet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763"/>
        <source>trusted</source>
        <translation>vertrauenswürdig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763"/>
        <source>untrusted</source>
        <translation>nicht vertrauenswürdig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5779"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Dies scheint keine gültige Daemon-URL zu sein.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5799"/>
        <source>Blockchain saved</source>
        <translation>Blockchain gespeichert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5801"/>
        <source>blockchain can&#39;t be saved:</source>
        <translation>Blockchain kann nicht gespeichert werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5834"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5840"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5851"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5856"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5861"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5867"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5923"/>
        <source>Height</source>
        <translation>Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5835"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5841"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5852"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5857"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5862"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5868"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5924"/>
        <source>txid</source>
        <translation>txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5837"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5843"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5870"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5926"/>
        <source>idx</source>
        <translation>idx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5925"/>
        <source>spent</source>
        <translation>ausgegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952"/>
        <source>Enter password</source>
        <translation>Passwort eingeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6048"/>
        <source>Starting refresh...</source>
        <translation>Aktualisierung wird gestartet...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6070"/>
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>Seit dem Start des erneuten Scans wurde eine neue Übertragung empfangen. Schlüsselbilder sind unvollständig.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077"/>
        <source>Refresh done, blocks received:</source>
        <translation>Aktualisierung abgeschlossen, Blöcke empfangen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6085"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6428"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>Daemon ist beschäftigt. Bitte versuchen Sie es später erneut.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4816"/>
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>Der geheime RPC-Clientschlüssel sollte 32 Byte lang und im Hexadezimalformat sein.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5535"/>
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>Wenn das Hintergrund-Mining aktiviert ist, führt der Daemon das Mining im Leerlauf und nicht im Akkubetrieb durch.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5657"/>
        <source>Error checking daemon RPC access prices</source>
        <translation>Fehler beim Prüfen der RPC-Zugriffspreise des Daemons</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5663"/>
        <source>Error checking daemon RPC access prices:</source>
        <translation>Fehler beim Prüfen der RPC-Zugriffspreise des Daemons:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5759"/>
        <source>Failed to connect to daemon</source>
        <translation>Verbindung zum Daemon konnte nicht hergestellt werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771"/>
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>Daemon RPC Credits/Hash ist geringer als angegeben. Entweder betrügt dieser Daemon oder er hat vor Kurzem sein Setup geändert.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772"/>
        <source>Claimed:</source>
        <translation>Behauptet:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5773"/>
        <source>Actual:</source>
        <translation>Tatsächlich:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6089"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6432"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>keine Verbindung zum Daemon. Bitte stellen Sie sicher, dass der Daemon läuft.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6436"/>
        <source>payment required.</source>
        <translation>Zahlung erforderlich.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6099"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6446"/>
        <source>RPC error:</source>
        <translation>RPC-Fehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6104"/>
        <source>refresh error:</source>
        <translation>Aktualisierungsfehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6109"/>
        <source>internal error:</source>
        <translation>interner Fehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124"/>
        <source>refresh failed:</source>
        <translation>Aktualisierung fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124"/>
        <source>Blocks received:</source>
        <translation>Erhaltene Blöcke:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6153"/>
        <source>(Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation>(Einige eigene Ausgaben haben teilweise Schlüsselbilder – import_multisig_info erforderlich)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <source>Currently selected account: [</source>
        <translation>Aktuell ausgewähltes Konto: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <source>]</source>
        <translation>]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158"/>
        <source>(No tag assigned)</source>
        <translation>(Kein Tag zugewiesen)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158"/>
        <source>Tag:</source>
        <translation>Etikett:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6172"/>
        <source>unlocked balance:</source>
        <translation>freigeschaltetes Guthaben:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177"/>
        <source>Balance per address:</source>
        <translation>Saldo pro Adresse:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <source>Address</source>
        <translation>Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Balance</source>
        <translation>Gleichgewicht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Unlocked balance</source>
        <translation>Freigegebenes Guthaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <source>Outputs</source>
        <translation>Ausgaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11612"/>
        <source>Label</source>
        <translation>Etikett</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6186"/>
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277"/>
        <source>pubkey</source>
        <translation>pubkey</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277"/>
        <source>key image</source>
        <translation>Schlüsselbild</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>spent</source>
        <translation>ausgegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>unlocked</source>
        <translation>entsperrt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>ringct</source>
        <translation>ringct</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>global index</source>
        <translation>globaler Index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>tx id</source>
        <translation>TX-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>addr index</source>
        <translation>Adressindex</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6294"/>
        <source>Used at heights:</source>
        <translation>Einsatz in der Höhe:</translation>
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
        <translation>gesperrt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <source>[frozen]</source>
        <translation>[gefroren]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301"/>
        <source>RingCT</source>
        <translation>RingCT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6314"/>
        <source>No incoming transfers</source>
        <translation>Keine eingehenden Überweisungen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318"/>
        <source>No incoming available transfers</source>
        <translation>Keine eingehenden verfügbaren Überweisungen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322"/>
        <source>No incoming unavailable transfers</source>
        <translation>Keine eingehenden, nicht verfügbaren Überweisungen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>payment</source>
        <translation>Zahlung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>transaction</source>
        <translation>Transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>height</source>
        <translation>Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>unlock time</source>
        <translation>Entsperrzeit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6358"/>
        <source>No payments with id</source>
        <translation>Keine Zahlungen mit Ausweis</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6380"/>
        <source>payment ID has invalid format, expected 16 or 64 character hex string:</source>
        <translation>Die Zahlungs-ID hat ein ungültiges Format. Es wird eine Hexadezimalzeichenfolge mit 16 oder 64 Zeichen erwartet:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6504"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7509"/>
        <source>failed to get blockchain height:</source>
        <translation>Blockchain-Höhe konnte nicht ermittelt werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441"/>
        <source>failed to get spent status</source>
        <translation>Der Status „Ausgegeben“ konnte nicht abgerufen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6513"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transaktion %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6529"/>
        <source>failed to find construction data for tx input</source>
        <translation>Konstruktionsdaten für TX-Eingabe konnten nicht gefunden werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6553"/>
        <source>failed to get output:</source>
        <translation>Ausgabe konnte nicht abgerufen werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6561"/>
        <source>output key&#39;s originating block height shouldn&#39;t be higher than the blockchain height</source>
        <translation>Die ursprüngliche Blockhöhe des Ausgabeschlüssels sollte nicht höher sein als die Blockchain-Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6566"/>
        <source>
Originating block heights:</source>
        <translation>
Ursprüngliche Blockhöhen:</translation>
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
Warning: Some input keys being spent are from</source>
        <translation>
Warnung: Einige der verwendeten Eingabetasten stammen von</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594"/>
        <source>the same transaction</source>
        <translation>die gleiche Transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594"/>
        <source>blocks that are temporally very close</source>
        <translation>Blöcke, die zeitlich sehr nahe beieinander liegen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6748"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741"/>
        <source>Ring size must not be 0</source>
        <translation>Ringgröße darf nicht 0 sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6760"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7473"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7753"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>Ringgröße %u ist zu klein, Minimum ist %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6765"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation>Ringgröße %u ist zu groß, das Maximum beträgt %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772"/>
        <source>wrong number of arguments</source>
        <translation>falsche Anzahl von Argumenten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6789"/>
        <source>payment id failed to encode</source>
        <translation>Zahlungs-ID konnte nicht kodiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6808"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7502"/>
        <source>Locked blocks too high, max 1000000 (~4 yrs)</source>
        <translation>Gesperrte Blöcke zu hoch, max. 1.000.000 (~4 Jahre)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6856"/>
        <source>failed to parse short payment ID from URI</source>
        <translation>Kurze Zahlungs-ID aus URI konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6881"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883"/>
        <source>Invalid last argument:</source>
        <translation>Ungültiges letztes Argument:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6901"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>Für eine einzelne Transaktion kann nicht mehr als eine Zahlungs-ID verwendet werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation>Die Zahlungs-ID konnte nicht analysiert werden, obwohl sie erkannt wurde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7004"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014"/>
        <source>Is this okay anyway?</source>
        <translation>Ist das überhaupt okay?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7009"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>Derzeit besteht bei dieser Gebührenstufe ein Rückstand von %u Blöcken. Ist das in Ordnung?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7323"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7631"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>%s in %llu-Transaktionen werden mit einer Gesamtgebühr von %s abgerechnet. Ist das in Ordnung?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7329"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7637"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7874"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>Das Sweeping beträgt insgesamt %s. Ist das in Ordnung?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7377"/>
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by &quot;rescan_spent&quot;.  Is this okay?</source>
        <translation>%s nicht mischbarer Ausgaben werden verworfen, die nicht ausgegeben werden können. Dies kann durch „rescan_spent“ rückgängig gemacht werden. Ist das in Ordnung?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7522"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7767"/>
        <source>Failed to parse number of outputs</source>
        <translation>Die Anzahl der Ausgaben konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7527"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7772"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation>Die Anzahl der Ausgaben sollte größer als 0 sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7551"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string:</source>
        <translation>Die Zahlungs-ID hat ein ungültiges Format. Es wird eine Hexadezimalzeichenfolge mit 16 oder 64 Zeichen erwartet:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6803"/>
        <source>bad locked_blocks parameter:</source>
        <translation>fehlerhafter Parameter „locked_blocks“:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7571"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7831"/>
        <source>a single transaction cannot use more than one payment id:</source>
        <translation>Für eine einzelne Transaktion kann nicht mehr als eine Zahlungs-ID verwendet werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7580"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7799"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7839"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>Zahlungs-ID konnte nicht eingerichtet werden, obwohl sie korrekt dekodiert wurde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1170"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249"/>
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others&#39; multisig info</source>
        <translation>Senden Sie diese Multisig-Informationen an alle anderen Teilnehmer und verwenden Sie dann exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] mit den Multisig-Informationen anderer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1258"/>
        <source>Multisig wallet has been successfully created. Current wallet type:</source>
        <translation>Das Multisig-Wallet wurde erfolgreich erstellt. Aktueller Wallet-Typ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264"/>
        <source>Failed to perform multisig keys exchange:</source>
        <translation>Der Austausch der Multisig-Schlüssel ist fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599"/>
        <source>Failed to load multisig transaction from MMS</source>
        <translation>Multisig-Transaktion konnte nicht von MMS geladen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2139"/>
        <source>Failed to mark output spent:</source>
        <translation>Ausgabe konnte nicht als ausgegeben markiert werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2166"/>
        <source>Failed to mark output unspent:</source>
        <translation>Ausgabe konnte nicht als nicht ausgegeben markiert werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2190"/>
        <source>Spent:</source>
        <translation>Ausgegeben:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192"/>
        <source>Not spent:</source>
        <translation>Nicht ausgegeben:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2196"/>
        <source>Failed to check whether output is spent:</source>
        <translation>Überprüfen, ob die Ausgabe ausgegeben wurde, ist fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2385"/>
        <source>Please confirm the transaction on the device</source>
        <translation>Bitte bestätigen Sie die Transaktion auf dem Gerät</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091"/>
        <source>Device name not specified</source>
        <translation>Gerätename nicht angegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100"/>
        <source>Device reconnect failed</source>
        <translation>Wiederverbindung des Geräts fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105"/>
        <source>Device reconnect failed:</source>
        <translation>Wiederverbindung des Geräts fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3619"/>
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>Exportieren Sie die eingehenden/ausgehenden Überweisungen innerhalb eines optionalen Höhenbereichs nach CSV.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627"/>
        <source>Rescan the blockchain from scratch. If &quot;hard&quot; is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>Scannen Sie die Blockchain von Grund auf neu. Wenn „hard“ angegeben ist, gehen alle Informationen verloren, die nicht aus der Blockchain selbst wiederhergestellt werden können.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3661"/>
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>Exportieren Sie einen signierten Satz Schlüsselbilder in einen &lt;Dateinamen&gt;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3669"/>
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>Synchronisiert Schlüsselbilder mit der HW-Wallet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3692"/>
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>Generieren Sie eine neue zufällige Zahlungs-ID in voller Größe (veraltet). Diese werden in der Blockchain unverschlüsselt sein, siehe integrated_address für verschlüsselte kurze Zahlungs-IDs.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3704"/>
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>Führt zusätzliche Multisig-Schlüsselaustauschrunden aus. Wird für beliebige M/N-Multisig-Wallets benötigt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3736"/>
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>Initialisieren und konfigurieren Sie das MMS für M/N = Anzahl der erforderlichen Unterzeichner/Anzahl der autorisierten Unterzeichner Multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740"/>
        <source>Display current MMS configuration</source>
        <translation>Aktuelle MMS-Konfiguration anzeigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3744"/>
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>Festlegen oder Ändern der Informationen autorisierter Unterzeichner (Bezeichnung mit einem Wort, Transportadresse, Salvium-Adresse) oder Auflisten aller Unterzeichner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3748"/>
        <source>List all messages</source>
        <translation>Alle Nachrichten auflisten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3752"/>
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using &#39;sync&#39; processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>Bewerten Sie die nächsten möglichen Multisig-bezogenen Aktionen entsprechend dem Wallet-Status und führen Sie sie aus oder bieten Sie sie zur Auswahl an. Durch die Verwendung von „Sync“ kann die Verarbeitung wartender Nachrichten mit Multisig-Sync-Informationen unabhängig vom Wallet-Status erzwungen werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757"/>
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like &quot;stale data&quot; errors</source>
        <translation>Erzwingen Sie die Generierung von Multisig-Sync-Informationen unabhängig vom Wallet-Status, um Sondersituationen wie „veraltete Daten“-Fehler zu beheben.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3761"/>
        <source>Initiate transfer with MMS support; arguments identical to normal &#39;transfer&#39; command arguments, for info see there</source>
        <translation>Übertragung mit MMS-Unterstützung einleiten; Argumente identisch mit normalen Argumenten des Befehls „Übertragung“, weitere Informationen finden Sie dort</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3765"/>
        <source>Delete a single message by giving its id, or delete all messages by using &#39;all&#39;</source>
        <translation>Löschen Sie eine einzelne Nachricht, indem Sie ihre ID angeben, oder löschen Sie alle Nachrichten, indem Sie „alle“ verwenden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3769"/>
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>Senden Sie eine einzelne Nachricht, indem Sie ihre ID angeben, oder senden Sie alle wartenden Nachrichten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3773"/>
        <source>Check right away for new messages to receive</source>
        <translation>Prüfen Sie sofort, ob neue Nachrichten eingegangen sind</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3777"/>
        <source>Write the content of a message to a file &quot;mms_message_content&quot;</source>
        <translation>Schreiben Sie den Inhalt einer Nachricht in eine Datei „mms_message_content“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3781"/>
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>Senden Sie eine einzeilige Nachricht an einen autorisierten Unterzeichner, der durch sein Label identifiziert wird, oder zeigen Sie alle wartenden ungelesenen Notizen an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785"/>
        <source>Show detailed info about a single message</source>
        <translation>Detaillierte Informationen zu einer einzelnen Nachricht anzeigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3789"/>
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
</source>
        <translation>Verfügbare Optionen:
 Automatisch senden &lt;1|0&gt;
 Gibt an, ob neu erstellte Nachrichten sofort automatisch gesendet werden sollen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795"/>
        <source>Send completed signer config to all other authorized signers</source>
        <translation>Senden Sie die abgeschlossene Unterzeichnerkonfiguration an alle anderen autorisierten Unterzeichner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3799"/>
        <source>Start auto-config at the auto-config manager&#39;s wallet by issuing auto-config tokens and optionally set others&#39; labels</source>
        <translation>Starten Sie die Autokonfiguration im Wallet des Autokonfigurationsmanagers, indem Sie Autokonfigurationstoken ausgeben und optional andere Labels festlegen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3807"/>
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>Löschen Sie alle Auto-Konfigurationstoken und brechen Sie einen Auto-Konfigurationsprozess ab</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3811"/>
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>Starten Sie die Autokonfiguration mit dem vom Autokonfigurationsmanager erhaltenen Token</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833"/>
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>Markieren Sie die Ausgabe(n) als ausgegeben, damit sie nie als falsche Ausgaben in einem Ring ausgewählt werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837"/>
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>Markiert einen Ausgang als ungenutzt, sodass er in einem Ring als Fake-Ausgang ausgewählt werden kann.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3841"/>
        <source>Checks whether an output is marked as spent</source>
        <translation>Überprüft, ob eine Ausgabe als ausgegeben markiert ist</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4035"/>
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;Gerätename[:Gerätespezifikation]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4063"/>
        <source>wrong number range, use: %s</source>
        <translation>falscher Nummernbereich, verwenden Sie: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4168"/>
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>HINWEIS: Die folgenden %s können verwendet werden, um den Zugriff auf Ihr Wallet wiederherzustellen. Notieren Sie sie und bewahren Sie sie an einem sicheren Ort auf. Bitte speichern Sie sie nicht in Ihrer E-Mail oder auf Dateispeicherdiensten außerhalb Ihrer unmittelbaren Kontrolle.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170"/>
        <source>string</source>
        <translation>Schnur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170"/>
        <source>25 words</source>
        <translation>25 Wörter</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4593"/>
        <source>Secret spend key (%u of %u)</source>
        <translation>Geheimer Ausgabenschlüssel (%u von %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4670"/>
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>Verwenden Sie --restore-height oder --restore-date, wenn Sie ein bereits eingerichtetes Konto von einer bestimmten Höhe aus wiederherstellen möchten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4672"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4760"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7119"/>
        <source>Is this okay?</source>
        <translation>Ist das okay?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4783"/>
        <source>Still apply restore height?</source>
        <translation>Immer noch Höhe wiederherstellen anwenden?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4964"/>
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>Geben Sie die Nummer ein, die der Sprache Ihrer Wahl entspricht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5967"/>
        <source>Device requires attention</source>
        <translation>Das Gerät erfordert Aufmerksamkeit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5973"/>
        <source>Enter device PIN</source>
        <translation>Geräte-PIN eingeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5975"/>
        <source>Failed to read device PIN</source>
        <translation>Die Geräte-PIN konnte nicht gelesen werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5985"/>
        <source>Please enter the device passphrase on the device</source>
        <translation>Bitte geben Sie die Gerätepassphrase auf dem Gerät ein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5992"/>
        <source>Enter device passphrase</source>
        <translation>Geben Sie die Gerätepassphrase ein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5994"/>
        <source>Failed to read device passphrase</source>
        <translation>Das Lesen der Gerätepassphrase ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6018"/>
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed.</source>
        <translation>Die erste Aktualisierung für das HW-basierte Wallet mit dem eingegangenen Geld ist abgeschlossen. hw_key_images_sync wird benötigt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5537"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020"/>
        <source>Do you want to do it now? (Y/Yes/N/No):</source>
        <translation>Möchten Sie es jetzt tun? (J/Ja/N/Nein):</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2366"/>
        <source>Unknown command &#39;%s&#39;, try &#39;help&#39;</source>
        <translation>Unbekannter Befehl &#39;%s&#39;, versuchen Sie &#39;Hilfe&#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3040"/>
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Timeout für Inaktivitätssperre unter Windows deaktiviert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3054"/>
        <source>Invalid number of seconds</source>
        <translation>Ungültige Anzahl von Sekunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116"/>
        <source>Export format not specified</source>
        <translation>Exportformat nicht angegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3130"/>
        <source>Export format not recognized.</source>
        <translation>Exportformat nicht erkannt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3482"/>
        <source>Display the restore height</source>
        <translation>Anzeige der Wiederherstellungshöhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3857"/>
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>Sperren Sie die Wallet-Konsole. Zum Fortfahren ist die Eingabe des Wallet-Passworts erforderlich.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4033"/>
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>vorzeichenlose Ganzzahl (Sekunden, 0 zum Deaktivieren)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036"/>
        <source>&quot;binary&quot; or &quot;ascii&quot;</source>
        <translation>„binär“ oder „ascii“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4824"/>
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>Warnung: Verwendung eines nicht vertrauenswürdigen Daemons bei %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4825"/>
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>Die Verwendung eines Drittanbieter-Daemons kann sich nachteilig auf Ihre Sicherheit und Privatsphäre auswirken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4828"/>
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>Wenn Sie Ihr eigenes System ohne SSL verwenden, wird Ihr RPC-Verkehr überwacht.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4829"/>
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>Es wird dringend empfohlen, die Verbindung zum Salvium-Netzwerk mithilfe Ihres eigenen Daemons herzustellen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4830"/>
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>Wenn Sie oder jemand, dem Sie vertrauen, diesen Daemon betreiben, können Sie --trusted-daemon verwenden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4837"/>
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>Darüber hinaus ist ein Daemon auch weniger sicher, wenn er im Bootstrap-Modus ausgeführt wird</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850"/>
        <source>If you are new to Salvium, type &quot;welcome&quot; for a brief overview.</source>
        <translation>Wenn Sie Salvium noch nicht kennen, geben Sie „Willkommen“ ein, um einen kurzen Überblick zu erhalten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5003"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5101"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5149"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5192"/>
        <source>Error creating wallet:</source>
        <translation>Fehler beim Erstellen der Brieftasche:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477"/>
        <source>Failed to query mining status:</source>
        <translation>Abfrage des Mining-Status fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5488"/>
        <source>Failed to setup background mining:</source>
        <translation>Das Einrichten des Hintergrund-Minings ist fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5464"/>
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>Hintergrund-Mining aktiviert. Vielen Dank für die Unterstützung des Salvium-Netzwerks.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5492"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5500"/>
        <source>Background mining not enabled. Run &quot;set setup-background-mining 1&quot; to change.</source>
        <translation>Background Mining ist nicht aktiviert. Führen Sie „set setup-background-mining 1“ aus, um dies zu ändern.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5506"/>
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>Verwendung eines nicht vertrauenswürdigen Daemons, Überspringen der Hintergrund-Mining-Prüfung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5534"/>
        <source>The daemon is not set up to background mine.</source>
        <translation>Der Daemon ist nicht für das Mining im Hintergrund eingerichtet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5541"/>
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>Background Mining ist nicht aktiviert. Um dies zu ändern, setzen Sie setup-background-mining auf 1.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5903"/>
        <source>NOTE: This transaction is locked, see details with: show_transfer</source>
        <translation>HINWEIS: Diese Transaktion ist gesperrt, siehe Details mit: show_transfer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6022"/>
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>hw_key_images_sync übersprungen. Führen Sie den Befehl vor einer Übertragung manuell aus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6247"/>
        <source>Invalid keyword:</source>
        <translation>Ungültiges Schlüsselwort:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6535"/>
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
Geben Sie %llu/%llu (%s) ein: Betrag=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628"/>
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>Bei einer Transaktion wird mehr als eine sehr alte Ausgabe ausgegeben. Der Datenschutz wäre besser, wenn sie separat gesendet würden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6629"/>
        <source>Spend them now anyway?</source>
        <translation>Trotzdem jetzt ausgeben?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6871"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8465"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9215"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9784"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9792"/>
        <source>amount is wrong:</source>
        <translation>Betrag ist falsch:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6872"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8465"/>
        <source>expected number from 0 to</source>
        <translation>erwartete Zahl von 0 bis</translation>
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
        <translation>Transaktion abgebrochen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6981"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7595"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>Keine Ausgaben gefunden oder Daemon ist nicht bereit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2343"/>
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>Anders als bei Bitcoin bleiben Ihre Salvium-Transaktionen und Ihr Salvium-Guthaben privat und sind standardmäßig nicht für die Welt sichtbar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2344"/>
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>Sie haben jedoch die Möglichkeit, diese bei Bedarf ausgewählten Parteien zur Verfügung zu stellen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5895"/>
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>HINWEIS: Diese Transaktion verwendet eine verschlüsselte Zahlungs-ID. Erwägen Sie stattdessen die Verwendung von Unteradressen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5900"/>
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>ACHTUNG: Diese Transaktion verwendet eine unverschlüsselte Zahlungs-ID. Diese ist veraltet und wird ignoriert. Verwenden Sie stattdessen Unteradressen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014"/>
        <source>Failed to check for backlog:</source>
        <translation>Fehler bei der Überprüfung auf Rückstand:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7063"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7617"/>
        <source>
Transaction</source>
        <translation>
Transaktion</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7070"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7624"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>ACHTUNG: Ausgaben mehrerer Adressen werden zusammen verwendet, was möglicherweise Ihre Privatsphäre gefährden könnte.
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
        <translation>Nicht signierte Transaktion(en) erfolgreich in MMS geschrieben</translation>
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
        <translation>Die Transaktion(en) konnten nicht in die Datei geschrieben werden</translation>
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
        <source>Unsigned transaction(s) successfully written to file:</source>
        <translation>Nicht signierte Transaktion(en) erfolgreich in Datei geschrieben:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7161"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7674"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7909"/>
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>Cold Signing der Transaktion mit HW Wallet fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7308"/>
        <source>No unmixable outputs found</source>
        <translation>Keine nicht mischbaren Ausgänge gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Sweeping</source>
        <translation>Fegen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8476"/>
        <source>Failed to parse donation address:</source>
        <translation>Die Spendenadresse konnte nicht analysiert werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8492"/>
        <source>Donating %s %s to %s.</source>
        <translation>Spende %s %s an %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8640"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>%lu Transaktionen geladen, für %s, Gebühr %s, %s, %s, mit minimaler Ringgröße %lu, %s. %sIst das okay?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>direction</source>
        <translation>Richtung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>timestamp</source>
        <translation>Zeitstempel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>running balance</source>
        <translation>laufender Saldo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>hash</source>
        <translation>Hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>payment ID</source>
        <translation>Zahlungs-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>fee</source>
        <translation>Gebühr</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>destination</source>
        <translation>Ziel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>index</source>
        <translation>Index</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>note</source>
        <translation>Notiz</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9756"/>
        <source>CSV exported to</source>
        <translation>CSV exportiert nach</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9941"/>
        <source>Rescan anyway?</source>
        <translation>Trotzdem erneut scannen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9952"/>
        <source>Warning: your restore height is higher than wallet restore height:</source>
        <translation>Achtung: Ihre Wiederherstellungshöhe ist höher als die Wiederherstellungshöhe der Brieftasche:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9953"/>
        <source>Rescan anyway ? (Y/Yes/N/No):</source>
        <translation>Trotzdem erneut scannen? (J/Ja/N/Nein):</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9974"/>
        <source>MMS received new message</source>
        <translation>MMS neue Nachricht erhalten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10143"/>
        <source>locked due to inactivity</source>
        <translation>gesperrt wegen Inaktivität</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10545"/>
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;index&gt; liegt außerhalb der Grenzen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10821"/>
        <source>Normal</source>
        <translation>Normal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10822"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11670"/>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6680"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10823"/>
        <source>Network type:</source>
        <translation>Netzwerktyp:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1402"/>
        <source>Multisig info imported. Number of outputs updated:</source>
        <translation>Multisig-Informationen importiert. Anzahl der Ausgaben aktualisiert:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1750"/>
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>Schlüsselbild entweder nicht ausgegeben oder mit Ringgröße 1 ausgegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334"/>
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>Die meisten dieser Knoten sind wahrscheinlich Spione. Sie sollten sie nicht verwenden, es sei denn, Sie verbinden sich über Tor oder I2P</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340"/>
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>Willkommen bei Salvium, der neuen und verbesserten privaten Kryptowährung.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2352"/>
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>Willkommen bei Salvium und konformer finanzieller Privatsphäre. Weitere Informationen finden Sie unter https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2471"/>
        <source>invalid index: must be an unsigned integer</source>
        <translation>ungültiger Index: muss eine vorzeichenlose Ganzzahl sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2476"/>
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt; liegt außerhalb der Grenzen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514"/>
        <source>Failed to generate QR code, input too large</source>
        <translation>QR-Code konnte nicht generiert werden, Eingabe zu groß</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3167"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3186"/>
        <source>Value not specified</source>
        <translation>Wert nicht angegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3157"/>
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>Achtung: Veraltete Formate verwenden Boost-Serialisierung, die zu Pufferüberläufen und Abstürzen führt. Laden Sie nur veraltete Formate aus Quellen, denen Sie vertrauen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3206"/>
        <source>Important commands:</source>
        <translation>Wichtige Befehle:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3208"/>
        <source>&quot;welcome&quot; - Show welcome message.</source>
        <translation>„Willkommen“ – Willkommensnachricht anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3209"/>
        <source>&quot;help all&quot; - Show the list of all available commands.</source>
        <translation>„Hilfe für alle“ – Zeigt die Liste aller verfügbaren Befehle an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3210"/>
        <source>&quot;help &lt;command&gt;&quot; - Show a command&#39;s documentation.</source>
        <translation>„Hilfe &lt;Befehl&gt;“ – Zeigt die Dokumentation eines Befehls an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3211"/>
        <source>&quot;apropos &lt;keyword&gt;&quot; - Show commands related to a keyword.</source>
        <translation>„apropos &lt;Schlüsselwort&gt;“ – Befehle anzeigen, die sich auf ein Schlüsselwort beziehen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213"/>
        <source>&quot;wallet_info&quot; - Show wallet main address and other info.</source>
        <translation>„wallet_info“ – Zeigt die Hauptadresse des Wallets und andere Informationen an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3214"/>
        <source>&quot;balance&quot; - Show balance.</source>
        <translation>„Balance“ – Guthaben anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3215"/>
        <source>&quot;address all&quot; - Show all addresses.</source>
        <translation>„alle adressieren“ - Alle Adressen anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3216"/>
        <source>&quot;address new&quot; - Create new subaddress.</source>
        <translation>"Adresse neu" - Neue Unteradresse anlegen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3217"/>
        <source>&quot;transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]&quot; - Send SAL to an address.</source>
        <translation>„Überweisung &lt;Adresse&gt; &lt;Betrag&gt; [&lt;Asset_Type&gt;]“ – Senden Sie SAL an eine Adresse.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218"/>
        <source>&quot;return_payment &lt;tx_hash&gt;&quot; - Return a previously-received amount to sender.</source>
        <translation>„return_payment &lt;tx_hash&gt;“ – Einen zuvor erhaltenen Betrag an den Absender zurücksenden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3219"/>
        <source>&quot;burn &lt;amount&gt; &lt;asset_type&gt;&quot; - destroy coins forever.</source>
        <translation>„burn &lt;amount&gt; &lt;asset_type&gt;“ – Münzen für immer zerstören.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3220"/>
        <source>&quot;convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]&quot; - convert between coin types.</source>
        <translation>&quot;convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]&quot; - zwischen Münztypen konvertieren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221"/>
        <source>&quot;stake &lt;amount&gt;&quot; - stake SAL for 30 days to earn yield.</source>
        <translation>„Einsatz &lt;Betrag&gt;“ – Setzen Sie SAL 30 Tage lang ein, um Rendite zu erzielen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3222"/>
        <source>&quot;price_info&quot; - Display current pricing information for supported assets.</source>
        <translation>„price_info“ – Zeigt aktuelle Preisinformationen für unterstützte Assets an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3223"/>
        <source>&quot;supply_info&quot; - Display circulating supply information.</source>
        <translation>„supply_info“ – Informationen zum Umlaufangebot anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3224"/>
        <source>&quot;yield_info&quot; - Display current stats on Salvium staking / yield.</source>
        <translation>„yield_info“ – Zeigt aktuelle Statistiken zum Salvium-Staking/-Ertrag an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3225"/>
        <source>&quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&quot; - Show transactions.</source>
        <translation>„show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]“ – Transaktionen anzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3226"/>
        <source>&quot;sweep_all &lt;address&gt;&quot; - Send whole balance to another wallet.</source>
        <translation>„sweep_all &lt;Adresse&gt;“ – Senden Sie den gesamten Kontostand an eine andere Brieftasche.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3227"/>
        <source>&quot;seed&quot; - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>„Seed“ – Zeigt 25 geheime Wörter an, mit denen diese Brieftasche wiederhergestellt werden kann.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3228"/>
        <source>&quot;refresh&quot; - Synchronize wallet with the Salvium network.</source>
        <translation>„Aktualisieren“ – Wallet mit dem Salvium-Netzwerk synchronisieren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3229"/>
        <source>&quot;status&quot; - Check current status of wallet.</source>
        <translation>„Status“ – Überprüfen Sie den aktuellen Status der Brieftasche.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3230"/>
        <source>&quot;version&quot; - Check software version.</source>
        <translation>„Version“ – Überprüfen Sie die Softwareversion.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3231"/>
        <source>&quot;exit&quot; - Exit wallet.</source>
        <translation>„exit“ – Brieftasche verlassen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233"/>
        <source>&quot;donate &lt;amount&gt;&quot; - Donate SAL to the development team.</source>
        <translation>„&lt;Betrag&gt; spenden“ – Spenden Sie SAL an das Entwicklungsteam.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263"/>
        <source>No commands found mentioning keyword(s)</source>
        <translation>Keine Befehle gefunden, die Schlüsselwörter erwähnen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3293"/>
        <source>Invalid txid specified:</source>
        <translation>Ungültige txid angegeben:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300"/>
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>ACHTUNG: Dieser Vorgang kann die txids dem Remote-Knoten offenbaren und Ihre Privatsphäre beeinträchtigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3302"/>
        <source>You have canceled the operation</source>
        <translation>Sie haben den Vorgang abgebrochen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3347"/>
        <source>Set another daemon to connect to. If it&#39;s not yours, it&#39;ll probably spy on you.</source>
        <translation>Richten Sie einen anderen Daemon ein, mit dem eine Verbindung hergestellt werden soll. Wenn es nicht Ihrer ist, wird er Sie wahrscheinlich ausspionieren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3373"/>
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&#39;s included). The &quot;subtractfeefrom=&quot; list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: &quot;transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2&quot;. Let&#39;s say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use &quot;subtractfeefrom=all&quot; to spread the fee across all destinations.</source>
        <translation>Überweisen Sie &lt;Betrag&gt; von &lt;Asset_Type&gt; an &lt;Adresse&gt;. Wenn der Parameter &quot;Index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; angegeben ist, verwendet das Wallet Ausgaben, die von Adressen dieser Indizes empfangen werden. Wenn er weggelassen wird, wählt das Wallet die zu verwendenden Adressindizes nach dem Zufallsprinzip aus. In jedem Fall versucht es, Ausgaben mehrerer Adressen möglichst nicht zu kombinieren. &lt;Priorität&gt; ist die Priorität der Transaktion. Je höher die Priorität, desto höher die Transaktionsgebühr. Gültige Werte in Prioritätsreihenfolge (von niedrigster bis höchster) sind: unwichtig, normal, erhöht, Priorität. Wenn er weggelassen wird, wird der Standardwert (siehe Befehl &quot;Priorität festlegen&quot;) verwendet. &lt;Ringgröße&gt; ist die Anzahl der Eingaben, die zur Unauffindbarkeit einbezogen werden sollen. Mehrere Zahlungen können gleichzeitig getätigt werden, indem URI_2 oder &lt;Adresse_2&gt; hinzugefügt werden. &lt;amount_2&gt; usw. (vor der Zahlungs-ID, falls diese enthalten ist). Die Liste &quot;subtractfeefrom=&quot; ermöglicht Ihnen die Auswahl der Ziele, von denen die Transaktionsgebühr statt des Wechselgelds bezahlt werden soll. Die Gebühr wird proportional gleichmäßig auf die ausgewählten Ziele aufgeteilt. Um beispielsweise 3 Überweisungen zu tätigen, bei denen die Gebühr vom ersten und dritten Ziel abgezogen wird, könnte man Folgendes tun: &quot;transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0,5 &lt;addr3&gt; 1 subtractfeefrom=0,2&quot;. Nehmen wir an, die Transaktionsgebühr beträgt 0,1. Der Saldo würde einschließlich Gebühren um genau 4,5 SAL sinken, und addr1 &amp; addr3 würden jeweils 2,925 &amp; 0,975 SAL erhalten. Verwenden Sie &quot;subtractfeefrom=all&quot;, um die Gebühr auf alle Ziele zu verteilen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>Senden Sie den gesamten nicht freigegebenen Kontostand an eine Adresse und sperren Sie ihn für &lt;lockblocks&gt; (max. 1000000). Wenn der Parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; oder &quot;index=all&quot; angegeben ist, durchsucht das Wallet die von diesen bzw. allen Adressindizes empfangenen Ausgaben. Wenn dieser Parameter weggelassen wird, wählt das Wallet nach dem Zufallsprinzip einen zu verwendenden Adressindex aus. &lt;priority&gt; ist die Priorität des Durchlaufs. Je höher die Priorität, desto höher die Transaktionsgebühr. Gültige Werte in Prioritätsreihenfolge (von niedrig nach hoch) sind: unimportant, normal, elevated, priority. Wenn dieser Parameter weggelassen wird, wird der Standardwert (siehe Befehl &quot;set priority&quot;) verwendet. &lt;ring_size&gt; ist die Anzahl der Eingaben, die zur Unauffindbarkeit einbezogen werden sollen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3387"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Senden Sie den gesamten nicht freigegebenen Saldo an eine Adresse. Wenn der Parameter „index=&lt;N1&gt;[,&lt;N2&gt;,...]“ oder „index=all“ angegeben ist, durchsucht das Wallet die von diesen bzw. allen Adressindizes empfangenen Ausgaben. Wenn dieser Parameter weggelassen wird, wählt das Wallet nach dem Zufallsprinzip einen zu verwendenden Adressindex aus. Wenn der Parameter „outputs=&lt;N&gt;“ angegeben ist und N > 0 ist, teilt das Wallet die Transaktion in N gleichmäßige Ausgaben auf.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3390"/>
        <source>Send all unlocked balance from a given account to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Senden Sie den gesamten nicht freigegebenen Kontostand eines bestimmten Kontos an eine Adresse. Wenn der Parameter „index=&lt;N1&gt;[,&lt;N2&gt;,...]“ oder „index=all“ angegeben ist, durchsucht das Wallet die von diesen bzw. allen Adressindizes empfangenen Ausgaben. Wenn dieser Parameter weggelassen wird, wählt das Wallet nach dem Zufallsprinzip einen zu verwendenden Adressindex aus. Wenn der Parameter „outputs=&lt;N&gt;“ angegeben ist und N > 0 ist, teilt das Wallet die Transaktion in N gleichmäßige Ausgaben auf.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402"/>
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>Gibt die in TX &lt;tx_hash&gt; erhaltene(n) Zahlung(en) an den ursprünglichen Absender zurück.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406"/>
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>Zerstört (verbrennt) DAUERHAFT &lt;Menge&gt; von &lt;Asset_Type&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410"/>
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>Wandelt &lt;Betrag&gt; &lt;Quellvermögen&gt; in &lt;Zielvermögen&gt; um, mit optionalem &lt;Slippage_Limit&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414"/>
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>Sperrt &lt;Betrag&gt; an SAL als Anteil, um Rendite zu erzielen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418"/>
        <source>Displays the current exchange rate information for SAL &lt;--&gt; VSD conversions</source>
        <translation>Zeigt die aktuellen Wechselkursinformationen für SAL &lt;--&gt; VSD-Konvertierungen an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3422"/>
        <source>Displays the current circulating supply information for SAL and VSD currencies</source>
        <translation>Zeigt die aktuellen Umlaufinformationen für SAL- und VSD-Währungen an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426"/>
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>Zeigt die Statistiken für Renditen der letzten &lt;NN&gt; Blöcke an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430"/>
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>Spenden Sie &lt;Betrag&gt; an das Entwicklungsteam (donate.salvium.io).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3434"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default &quot;unsigned_monero_tx&quot; will be used.</source>
        <translation>Signieren Sie eine Transaktion aus einer Datei. Wenn der Parameter „export_raw“ angegeben ist, werden für den Daemon RPC /sendrawtransaction geeignete rohe Hex-Transaktionsdaten exportiert.
Verwenden Sie den Parameter „filename“ um die Datei anzugeben, aus der gelesen werden soll. Wenn nicht angegeben, wird der Standardwert „unsigned_monero_tx“ verwendet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3456"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;mnew&quot; is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If &quot;one-off&quot; is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>Wenn keine Argumente angegeben sind oder &lt;index&gt; angegeben ist, zeigt das Wallet die Standard- oder angegebene Adresse an. Wenn &quot;all&quot; angegeben ist, zeigt das Wallet alle vorhandenen Adressen im aktuell ausgewählten Konto an. Wenn &quot;new&quot; angegeben ist, erstellt das Wallet eine neue Adresse mit dem angegebenen Beschriftungstext (der leer sein kann). Wenn &quot;mnew&quot; angegeben ist, erstellt das Wallet so viele neue Adressen, wie durch das Argument angegeben sind; die Standardbeschriftung wird für die neuen Adressen festgelegt. Wenn &quot;label&quot; angegeben ist, setzt das Wallet die Beschriftung der durch &lt;index&gt; angegebenen Adresse auf den angegebenen Beschriftungstext. Wenn &quot;one-off&quot; angegeben ist, wird die Adresse für den angegebenen Index generiert und angezeigt und vom Wallet gespeichert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3486"/>
        <source>Available options:
 seed language
   Set the wallet&#39;s seed language.
 always-confirm-transfers &lt;1|0&gt;
   Whether to confirm unsplit txes.
 print-ring-members &lt;1|0&gt;
   Whether to print detailed information about ring members during confirmation.
 store-tx-info &lt;1|0&gt;
   Whether to store outgoing tx info (destination address, payment ID, tx secret key) for future reference.
 auto-refresh &lt;1|0&gt;
   Whether to automatically synchronize new blocks from the daemon.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
   Set the wallet&#39;s refresh behaviour.
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
   Whether to automatically use the low priority fee level when it&#39;s safe to do so.
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
        <translation>Verfügbare Optionen:
 Seed-Sprache
 Legen Sie die Seed-Sprache des Wallets fest.
 always-confirm-transfers &lt;1|0&gt;
 Ob nicht aufgeteilte Transaktionen bestätigt werden sollen.
 print-ring-members &lt;1|0&gt;
 Ob bei der Bestätigung detaillierte Informationen über die Ringmitglieder ausgedruckt werden sollen.
 store-tx-info &lt;1|0&gt;
 Ob Informationen zu ausgehenden Transaktionen (Zieladresse, Zahlungs-ID, geheimer Transaktionsschlüssel) zur späteren Bezugnahme gespeichert werden sollen.
 auto-refresh &lt;1|0&gt;
 Ob neue Blöcke automatisch vom Daemon synchronisiert werden sollen.
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
 Legen Sie das Aktualisierungsverhalten des Wallets fest.
 priority [0|1|2|3|4]
 Legen Sie die Gebühr auf Standard/unwichtig/normal/erhöht/Priorität fest.
 confirm-missing-payment-id &lt;1|0&gt; (veraltet)
 ask-password &lt;0|1|2 (oder never|action|decrypt)&gt;
 action: fragt das Passwort vor vielen Aktionen wie Überweisungen etc.
 decrypt: dasselbe wie action, aber hält den Ausgabeschlüssel verschlüsselt im Speicher, wenn er nicht benötigt wird.
 unit &lt;sal|millisal|microsal&gt;
 Setzt die Standard-Salvium-(Unter-)Einheit.
 min-outputs-count [n]
 Versucht, mindestens so viele Ausgaben mit dem Wert min-outputs-value zu behalten.
 min-outputs-value [n]
 Versucht, mindestens min-outputs-count Ausgaben mit mindestens diesem Wert zu behalten.
 merge-destinations &lt;1|0&gt;
 Gibt an, ob mehrere Zahlungen an dieselbe Zieladresse zusammengeführt werden sollen.
 confirm-backlog &lt;1|0&gt;
 Gibt an, ob bei einem Transaktionsrückstand gewarnt werden soll.
 confirm-backlog-threshold [n]
 Setzt einen Schwellenwert für „confirm-backlog“ auf nur warnen, wenn der Transaktionsrückstand größer als n Blöcke ist.
 confirm-export-overwrite &lt;1|0&gt;
 Ob gewarnt werden soll, wenn die zu exportierende Datei bereits existiert.
 refresh-from-block-height [n]
 Legen Sie die Höhe fest, vor der Blöcke ignoriert werden sollen.
 auto-low-priority &lt;1|0&gt;
 Ob automatisch die niedrige Prioritätsgebührstufe verwendet werden soll, wenn dies sicher ist.
 segregate-pre-fork-outputs &lt;1|0&gt;
 Legen Sie dies fest, wenn Sie Ausgaben sowohl für Salvium ALS AUCH für einen Fork zur Schlüsselwiederverwendung ausgeben möchten.
 key-reuse-mitigation2 &lt;1|0&gt;
 Legen Sie dies fest, wenn Sie nicht sicher sind, ob Sie später für einen Fork zur Schlüsselwiederverwendung von Salvium ausgeben werden.
 subaddress-lookahead &lt;major&gt;:&lt;minor&gt;
 Legen Sie die Lookahead-Größen für die Hash-Tabelle der Subadresse fest.
 segregation-height &lt;n&gt;
 Auf die Höhe eines Schlüsselwiederverwendungs-Forks einstellen, den Sie verwenden möchten, 0, um den Standard zu verwenden.
 ignore-fractional-outputs &lt;1|0&gt;
 Ob Teilausgaben ignoriert werden sollen, die aufgrund von Gebühren zu einem Nettoverlust beim Ausgeben führen.
 ignore-outputs-above &lt;amount&gt;
 Ausgaben mit Beträgen über diesem Schwellenwert beim Ausgeben ignorieren. Der Wert 0 wird in den Maximalwert (18 Millionen) übersetzt, wodurch dieser Filter deaktiviert wird.
 ignore-outputs-below &lt;amount&gt;
 Ausgaben mit Beträgen unter diesem Schwellenwert beim Ausgeben ignorieren.
 track-uses &lt;1|0&gt;
 Ob die Verwendung eigener Ausgaben verfolgt werden soll.
 setup-background-mining &lt;1|0&gt;
 Ob Hintergrund-Mining aktiviert werden soll. Legen Sie dies fest, um das Netzwerk zu unterstützen und die Chance zu bekommen, neues Salvium zu erhalten.
 Gerätename &lt;Gerätename[:Gerätespez]&gt;
 Gerätename für Hardware-Wallet.
 Exportformat &lt;&quot;Binär&quot;|&quot;ASCII&quot;&gt;
 Alle exportierten Dateien als Binärdatei (kann nicht kopiert und eingefügt werden) oder ASCII-Datei (kann kopiert und eingefügt werden) speichern.
 persistente RPC-Client-ID &lt;1|0&gt;
 Ob die gleiche Client-ID für RPC-Zahlungen auch bei Neustarts des Wallets verwendet werden soll.
auto-mine-for-rpc-payment-threshold &lt;float&gt;
 Ob automatisch mit dem Mining für RPC-Zahlungen begonnen werden soll, wenn der Daemon dies erfordert.
Credits-Ziel &lt;unsigned int&gt;
 Der Saldo der RPC-Zahlung wird dem Ziel gutgeschrieben (0 als Standard).
 show-wallet-name-when-locked &lt;1|0&gt;
 Legen Sie dies fest, wenn Sie möchten den Wallet-Namen anzeigen, wenn es gesperrt ist.
 enable-multisig-experimental &lt;1|0&gt;
 Stellen Sie dies ein, um Multisig-Befehle zuzulassen. Multisig kann derzeit ausgenutzt werden, wenn die Parteien einander nicht vertrauen.
 inactivity-lock-timeout &lt;unsigned int&gt;
 Wie viele Sekunden gewartet werden soll, bevor das Wallet gesperrt wird (0 zum Deaktivieren).
freeze-incoming-payments &lt;1|0&gt;
 Ob eingehende Zahlungen automatisch eingefroren werden sollen, damit sie nicht irrtümlich ausgegeben werden können.</translation>
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
        <translation>Zeigt die eingehenden/ausgehenden Überweisungen innerhalb eines optionalen Höhenbereichs.

Ausgabeformat:
In oder Coinbase: Blocknummer, &quot;Block&quot;|&quot;in&quot;, Zeit, Betrag, Vermögenswerttyp, Transaktions-Hash, Zahlungs-ID, Subadressenindex, &quot;-&quot;, Hinweis
Out: Blocknummer, &quot;out&quot;, Zeit, Betrag*, Vermögenswerttyp, Transaktions-Hash, Zahlungs-ID, Gebühr, Ziele, Eingabeadressen**, &quot;-&quot;, Hinweis
Pool: &quot;Pool&quot;, &quot;in&quot;, Zeit, Betrag, Vermögenswerttyp, Transaktions-Hash, Zahlungs-ID, Subadressenindex, &quot;-&quot;, Hinweis, Hinweis zu doppelter Ausgabe
Ausstehend oder Fehlgeschlagen: &quot;fehlgeschlagen&quot;|&quot;ausstehend&quot;, &quot;out&quot;, Zeit, Betrag*, Transaktions-Hash, Zahlungs-ID, Gebühr, Eingabeadressen**, &quot;-&quot;, Hinweis
Eingesetzt oder Gebrannt: Blocknummer, „out“, Zeit, Betrag*, Vermögenswerttyp, Transaktions-Hash, Zahlungs-ID, Gebühr, Eingabeadressen**, „-“, Hinweis

* Ohne Wechselgeld und Gebühr.
** Satz von Adressindizes, die als Eingaben für diese Übertragung verwendet werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618"/>
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [ein|aus|alle|ausstehend|fehlgeschlagen|Pool|Coinbase|verbrannt|eingesetzt|Ertrag] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [Ausgabe=&lt;Dateipfad&gt;] [Option=&lt;mit_Schlüsseln&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653"/>
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>Signieren Sie den Inhalt einer Datei mit der angegebenen Unteradresse (oder der Hauptadresse, wenn diese nicht angegeben ist).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3728"/>
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>Schnittstelle mit dem MMS (Multisig Messaging System)
&lt;Unterbefehl&gt; ist einer von:
 init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
 send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Hilfe zu einem Unterbefehl erhalten Sie mit: help mms &lt;Unterbefehl&gt;, oder help mms &lt;Unterbefehl&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3803"/>
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>Erhalten Sie eine Prüfsumme, mit der Unterzeichner problemlos prüfen können, ob die MMS-Konfiguration identisch ist</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889"/>
        <source>Show address as QR code</source>
        <translation>Adresse als QR-Code anzeigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3897"/>
        <source>Search all command descriptions for keyword(s)</source>
        <translation>Durchsuchen Sie alle Befehlsbeschreibungen nach Schlüsselwort(en)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3901"/>
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>Scannen Sie die von &lt;txid&gt;(s) angegebenen Transaktionen, verarbeiten Sie sie und suchen Sie nach Ausgaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014"/>
        <source>sal, millisal, microsal</source>
        <translation>Sal, Millisal, Mikrosal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032"/>
        <source>1 or 0</source>
        <translation>1 oder 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4257"/>
        <source>Multisig is disabled.</source>
        <translation>Multisig ist deaktiviert.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4258"/>
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can&#39;t be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>Multisig ist eine experimentelle Funktion und kann Fehler enthalten. Folgende Dinge könnten schiefgehen: An ein Multisig-Wallet gesendete Gelder können überhaupt nicht ausgegeben werden, können nur mit Beteiligung eines böswilligen Gruppenmitglieds ausgegeben werden oder können von einem böswilligen Gruppenmitglied gestohlen werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4260"/>
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>Sie haben die Wiederherstellung eines Multisig-Wallets abgebrochen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4915"/>
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>Die Verbindung zum Wallet zum Daemon ist fehlgeschlagen, da es auf Offline-Modus eingestellt ist.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4917"/>
        <source>wallet failed to connect to daemon, because it is not up to date.</source>
        <translation>Die Verbindung des Wallets zum Daemon ist fehlgeschlagen, da es nicht auf dem neuesten Stand ist.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4918"/>
        <source>Please make sure you are running the latest wallet.</source>
        <translation>Bitte stellen Sie sicher, dass Sie die neueste Brieftasche verwenden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4921"/>
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the &#39;set_daemon&#39; command.</source>
        <translation>Daemon ist nicht auf dem neuesten Stand. Bitte stellen Sie sicher, dass der Daemon die neueste Version ausführt, oder ändern Sie die Daemon-Adresse mit dem Befehl „set_daemon“.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5076"/>
        <source>Your wallet has been generated!
To start synchronizing with the daemon, use the &quot;refresh&quot; command.
Use the &quot;help&quot; command to see a simplified list of available commands.
Use &quot;help all&quot; command to see the list of all available commands.
Use &quot;help &lt;command&gt;&quot; to see a command&#39;s documentation.
Always use the &quot;exit&quot; command when closing salvium-wallet-cli to save 
your current session&#39;s state. Otherwise, you might need to synchronize 
your wallet again (your wallet keys are NOT at risk in any case).
</source>
        <translation>Ihre Brieftasche wurde generiert!
Um die Synchronisierung mit dem Daemon zu starten, verwenden Sie den Befehl „refresh“.
Verwenden Sie den Befehl „help“, um eine vereinfachte Liste der verfügbaren Befehle anzuzeigen.
Verwenden Sie den Befehl „help all“, um die Liste aller verfügbaren Befehle anzuzeigen.
Verwenden Sie „help &lt;command&gt;“, um die Dokumentation eines Befehls anzuzeigen.
Verwenden Sie beim Schließen von salvium-wallet-cli immer den Befehl „exit“, um den Status Ihrer aktuellen Sitzung zu speichern. Andernfalls müssen Sie Ihre Brieftasche möglicherweise erneut synchronisieren (Ihre Brieftaschenschlüssel sind in keinem Fall gefährdet).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5348"/>
        <source>Use the &quot;help&quot; command to see a simplified list of available commands.
</source>
        <translation>Verwenden Sie den Befehl „Hilfe“, um eine vereinfachte Liste der verfügbaren Befehle anzuzeigen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5349"/>
        <source>Use &quot;help all&quot; to see the list of all available commands.
</source>
        <translation>Verwenden Sie „help all“, um die Liste aller verfügbaren Befehle anzuzeigen.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5536"/>
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>Durch die Aktivierung wird das von Ihnen verwendete Netzwerk unterstützt und Sie sind berechtigt, neue SALs zu erhalten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703"/>
        <source>Failed to parse address</source>
        <translation>Adresse konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5718"/>
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got</source>
        <translation>Erwartet vertrauenswürdig, nicht vertrauenswürdig oder dies ist wahrscheinlich ein Spionageknoten.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5727"/>
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>Dies ist keine Tor/I2P-Adresse und kein vertrauenswürdiger Daemon.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5728"/>
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>Verwenden Sie entweder Ihren eigenen vertrauenswürdigen Knoten, stellen Sie eine Verbindung über Tor oder I2P her oder übergeben Sie „Dies ist wahrscheinlich ein Spionageknoten“ und lassen Sie sich ausspionieren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5733"/>
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>Warnung: Wenn Sie eine Verbindung zu einem nicht lokalen Daemon ohne SSL herstellen, können passive Gegner Sie ausspionieren.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5836"/>
        <source>stake returned</source>
        <translation>Einsatz zurückgegeben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5842"/>
        <source>yield earned</source>
        <translation>Erwirtschafteter Ertrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5853"/>
        <source>burnt</source>
        <translation>verbrannt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5858"/>
        <source>converting</source>
        <translation>Konvertieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5863"/>
        <source>staked</source>
        <translation>abgesteckt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5982"/>
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>Das Gerät fordert eine Passphrase an. Möchten Sie die Passphrase auf dem Gerät (J) (oder auf dem Host (N)) eingeben?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005"/>
        <source>The wallet&#39;s refresh-from-block-height setting is higher than the daemon&#39;s height: this may mean your wallet will skip over transactions</source>
        <translation>Die Einstellung für die Aktualisierung von Blockhöhe des Wallets ist höher als die Höhe des Daemons: Dies kann bedeuten, dass Ihr Wallet Transaktionen überspringt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6155"/>
        <source>(Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation>(Bei einigen eigenen Ausgaben fehlen Schlüsselbilder – export_outputs, import_outputs, export_key_images und import_key_images werden benötigt)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171"/>
        <source>Asset:</source>
        <translation>Vermögenswert:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10339"/>
        <source>, balance:</source>
        <translation>, Gleichgewicht:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6494"/>
        <source>failed to connect to daemon</source>
        <translation>Verbindung zum Daemon konnte nicht hergestellt werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6595"/>
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>, was die Anonymität von Ringsignaturen brechen kann. Stellen Sie sicher, dass dies beabsichtigt ist!
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653"/>
        <source>I locked your Salvium wallet to protect you while you were away
see &quot;help set&quot; to configure/disable</source>
        <translation>Ich habe Ihr Salvium-Wallet gesperrt, um Sie während Ihrer Abwesenheit zu schützen. Weitere Informationen zum Konfigurieren/Deaktivieren finden Sie unter „Hilfe-Set“.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6673"/>
        <source>Locked due to inactivity.</source>
        <translation>Wegen Inaktivität gesperrt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6674"/>
        <source>The wallet password is required to unlock the console.</source>
        <translation>Zum Entsperren der Konsole ist das Wallet-Passwort erforderlich.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6681"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10824"/>
        <source>Testnet</source>
        <translation>Testnetz</translation>
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
        <translation>Hauptnetz</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073"/>
        <source>Burning %s %s.</source>
        <translation>Brennen %s %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7075"/>
        <source>Converting %s %s to %s.</source>
        <translation>Konvertierung von %s %s in %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7077"/>
        <source>Staking %s %s for yield accrual.</source>
        <translation>Staking von %s %s zur Ertragsakkumulation.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7079"/>
        <source>Sending %s %s.</source>
        <translation>%s %s werden gesendet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7098"/>
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>.
Diese Transaktion (einschließlich %s Wechselgeld) wird in %llu Blöcken freigeschaltet, ungefähr in %s Tagen (bei angenommenen 2 Minuten pro Block).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975"/>
        <source>Invalid account</source>
        <translation>Ungültiges Konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8006"/>
        <source>return_payments are disabled</source>
        <translation>return_payments sind deaktiviert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8042"/>
        <source>incorrect TX type for txid</source>
        <translation>falscher TX-Typ für txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8048"/>
        <source>invalid return_address/return_pubkey for txid</source>
        <translation>ungültige return_address/return_pubkey für txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8065"/>
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid</source>
        <translation>Schlüsselbild ist für txid nicht verfügbar (teilweise / unbekannt / ausgegeben / eingefroren)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8097"/>
        <source>Returning %s for a total fee of %s.  Is this okay?</source>
        <translation>Rückgabe von %s für eine Gesamtgebühr von %s. Ist das okay?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8127"/>
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>Kaltsignierung von Return-TXs noch nicht implementiert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8217"/>
        <source>conversions are disabled until hard fork</source>
        <translation>Konvertierungen sind bis zum Hard Fork deaktiviert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8224"/>
        <source>missing / extraneous argument(s)</source>
        <translation>fehlende/unwichtige Argumente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8240"/>
        <source>invalid slippage_limit value : expected 0.0-90.0, got</source>
        <translation>ungültiger Slippage_Limit-Wert: erwartet 0,0-90,0, erhalten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8251"/>
        <source>invalid argument(s):</source>
        <translation>ungültige(s) Argument(e):</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8257"/>
        <source>out of range for slippage limit:</source>
        <translation>außerhalb des Bereichs für die Schlupfgrenze:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8267"/>
        <source>invalid destination asset_type</source>
        <translation>ungültiger Ziel-Asset-Typ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8277"/>
        <source>invalid source asset_type</source>
        <translation>ungültiger Quell-Asset-Typ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8286"/>
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>ungültige Konvertierung – asset_type ist unverändert</translation>
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
        <translation>LIEFERINFORMATIONEN</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8378"/>
        <source>	%6s : %21.8d</source>
        <translation>	%6s : %21.8d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8405"/>
        <source>
STAKED FUNDS:</source>
        <translation>
Eingesetzte Mittel:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8411"/>
        <source>Height %d, txid %s, staked %s SAL, earned %s SAL</source>
        <translation>Höhe %d, txid %s, eingesetzte %s SAL, verdiente %s SAL</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8417"/>
        <source>Height %d, txid %s, staked %s SAL, %s SAL accrued so far</source>
        <translation>Höhe %d, txid %s, %s SAL eingesetzt, %s SAL bisher angesammelt</translation>
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
ERTRAGSINFO:
	In den letzten %s verbrannte Vorratsmünzen: %d
	Insgesamt gesperrte Münzen: %d
	In den letzten %s aufgelaufener Ertrag: %d
	Ertrag pro eingesetztem SAL: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8490"/>
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>Spende %s %s an das Salvium-Team (donate.salvium.io oder %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8841"/>
        <source>Last argument is an address, but not a subaddress</source>
        <translation>Letztes Argument ist eine Adresse, aber keine Unteradresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8895"/>
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>Es könnte daran liegen, dass die Überweisung an eine Unteradresse erfolgte. Wenn dies der Fall ist, geben Sie die Unteradresse zuletzt weiter.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9590"/>
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>Verwendung: show_transfers [ein|aus|alle|ausstehend|fehlgeschlagen|Pool|Coinbase|verbrannt|eingesetzt|Ertrag] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9649"/>
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>Verwendung: export_transfers [ein|aus|alle|ausstehend|fehlgeschlagen|Pool|Coinbase|verbrannt|eingesetzt|Ertrag] [Index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_Höhe&gt; [&lt;max_Höhe&gt;]] [Ausgabe=&lt;Pfad&gt;] [Option=&lt;mit_Schlüsseln&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>tx key</source>
        <translation>TX-Schlüssel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10338"/>
        <source>
Grand total:
  Asset:</source>
        <translation>
Gesamtsumme:
 Vermögen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Asset</source>
        <translation>Vermögenswert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376"/>
        <source>%c%8u %6s %21s %21s %21s %21s</source>
        <translation>%c%8u %6s %21s %21s %21s %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10390"/>
        <source>------------------------------------------------------------------------------------</source>
        <translation>------------------------------------------------------------------------------------</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10392"/>
        <source>%15s   %21s %21s  %15s</source>
        <translation>%15s %21s %21s %15s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10447"/>
        <source>Expected exactly one argument for the amount of new addresses</source>
        <translation>Erwartet genau ein Argument für die Anzahl der neuen Adressen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10453"/>
        <source>failed to parse the amount of new addresses:</source>
        <translation>Die Anzahl der neuen Adressen konnte nicht analysiert werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10458"/>
        <source>the amount of new addresses must be lower or equal to</source>
        <translation>Die Anzahl der neuen Adressen muss kleiner oder gleich sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10473"/>
        <source>Expected exactly two arguments for index</source>
        <translation>Es wurden genau zwei Argumente für den Index erwartet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10483"/>
        <source>Address at %u %u: %s</source>
        <translation>Adresse bei %u %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10616"/>
        <source>Standard address: %s, payment ID: %s</source>
        <translation>Standardadresse: %s, Zahlungs-ID: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10872"/>
        <source>Invalid subaddress index format, and not a signature type:</source>
        <translation>Ungültiges Subadressenindexformat und kein Signaturtyp:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11497"/>
        <source>(Y/Yes/N/No):</source>
        <translation>(J/Ja/N/Nein):</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11503"/>
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>ACHTUNG: Die Verwendung von MMS-Autokonfigurationsmechanismen ist nicht vertrauenswürdig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11504"/>
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers&#39; info</source>
        <translation>Ein bösartiger Auto-Config-Manager könnte Ihnen Informationen über Ihre eigenen Wallets senden, anstatt die Informationen anderer Unterzeichner.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11505"/>
        <source>If in doubt do not use auto-config or at least compare configs using the &quot;mms config_checksum&quot; command</source>
        <translation>Im Zweifelsfall verwenden Sie keine automatische Konfiguration oder vergleichen Sie die Konfigurationen zumindest mit dem Befehl „mms config_checksum“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11532"/>
        <source>Choose processing:</source>
        <translation>Verarbeitung wählen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11541"/>
        <source>Sign tx</source>
        <translation>Unterschreiben Sie tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11549"/>
        <source>Send the tx for submission to</source>
        <translation>Senden Sie die Tx zur Einreichung an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11553"/>
        <source>Send the tx for signing to</source>
        <translation>Senden Sie die Tx zur Unterzeichnung an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11560"/>
        <source>Submit tx</source>
        <translation>Senden Sie eine Nachricht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11563"/>
        <source>unknown</source>
        <translation>unbekannt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11569"/>
        <source>Choice:</source>
        <translation>Auswahl:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11581"/>
        <source>Wrong choice</source>
        <translation>Falsche Wahl</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>Id</source>
        <translation>Ausweis</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>I/O</source>
        <translation>E/A</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>Authorized Signer</source>
        <translation>Autorisierter Unterzeichner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Message Type</source>
        <translation>Nachrichtentyp</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Height</source>
        <translation>Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Message State</source>
        <translation>Nachrichtenstatus</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Since</source>
        <translation>Seit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11606"/>
        <source>ago</source>
        <translation>vor</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11612"/>
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11612"/>
        <source>Transport Address</source>
        <translation>Transportadresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11613"/>
        <source>Auto-Config Token</source>
        <translation>Auto-Konfigurationstoken</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11613"/>
        <source>Salvium Address</source>
        <translation>Salvium-Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11617"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11625"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627"/>
        <source>&lt;not set&gt;</source>
        <translation>&lt;nicht festgelegt&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11668"/>
        <source>Message</source>
        <translation>Nachricht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11669"/>
        <source>In/out:</source>
        <translation>Ein/Aus:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11671"/>
        <source>State:</source>
        <translation>Zustand:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11671"/>
        <source>%s since %s, %s ago</source>
        <translation>%s seit %s, vor %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11675"/>
        <source>Sent: Never</source>
        <translation>Gesendet: Nie</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11679"/>
        <source>Sent: %s, %s ago</source>
        <translation>Gesendet: vor %s, %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11682"/>
        <source>Authorized signer:</source>
        <translation>Zeichnungsberechtigter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683"/>
        <source>Content size:</source>
        <translation>Inhaltsgröße:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683"/>
        <source>bytes</source>
        <translation>Bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11684"/>
        <source>Content:</source>
        <translation>Inhalt:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11684"/>
        <source>(binary data)</source>
        <translation>(Binärdaten)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11714"/>
        <source>Send these messages now?</source>
        <translation>Diese Nachrichten jetzt senden?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11724"/>
        <source>Queued for sending.</source>
        <translation>Zum Senden in die Warteschlange gestellt.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11744"/>
        <source>Invalid message id</source>
        <translation>Ungültige Nachrichten-ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11753"/>
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>Verwendung: mms-Init &lt;erforderliche_Unterzeichner&gt;/&lt;autorisierte_Unterzeichner&gt; &lt;eigenes_Label&gt; &lt;eigene_Transportadresse&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11759"/>
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>Das MMS ist bereits initialisiert. Durch Löschen aller Unterzeichnerinformationen und Nachrichten erneut initialisieren?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11774"/>
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>Fehler bei der Anzahl der erforderlichen Unterzeichner und/oder autorisierten Unterzeichner</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11791"/>
        <source>The MMS is not active.</source>
        <translation>Die MMS ist nicht aktiv.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11814"/>
        <source>Invalid signer number</source>
        <translation>Ungültige Unterzeichnernummer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11819"/>
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>MMS-Unterzeichner [&lt;Nummer&gt; &lt;Bezeichnung&gt; [&lt;Transportadresse&gt; [&lt;Salviumadresse&gt;]]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11838"/>
        <source>Invalid Salvium address</source>
        <translation>Ungültige Salvium-Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11845"/>
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>Der Wallet-Status erlaubt keine Änderung der Salvium-Adressen mehr</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11857"/>
        <source>Usage: mms list</source>
        <translation>Verwendung: MMS-Liste</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11870"/>
        <source>Usage: mms next [sync]</source>
        <translation>Verwendung: mms next [sync]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11895"/>
        <source>No next step:</source>
        <translation>Kein nächster Schritt:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11905"/>
        <source>prepare_multisig</source>
        <translation>bereiten_multisig vor</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11911"/>
        <source>make_multisig</source>
        <translation>Erstellen Sie Multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11926"/>
        <source>exchange_multisig_keys</source>
        <translation>Austausch_Multisig_Schlüssel</translation>
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
        <translation>importiere_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11964"/>
        <source>sign_multisig</source>
        <translation>sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11974"/>
        <source>submit_multisig</source>
        <translation>Submit_Multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11984"/>
        <source>Send tx</source>
        <translation>Senden Sie tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11995"/>
        <source>Process signer config</source>
        <translation>Konfiguration des Prozesssignaturgebers</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12007"/>
        <source>Replace current signer config with the one displayed above?</source>
        <translation>Aktuelle Signerkonfiguration durch die oben angezeigte ersetzen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12013"/>
        <source>You can use the &quot;mms delete&quot; command to delete any unwanted message</source>
        <translation>Mit dem Befehl „mms delete“ können Sie alle unerwünschten Nachrichten löschen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12026"/>
        <source>Process auto config data</source>
        <translation>Autokonfigurationsdaten verarbeiten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12040"/>
        <source>Nothing ready to process</source>
        <translation>Nichts zur Verarbeitung bereit</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12059"/>
        <source>Usage: mms sync</source>
        <translation>Verwendung: MMS-Synchronisierung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12083"/>
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>Verwendung: MMS löschen (&lt;message_id&gt; | alle)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12090"/>
        <source>Delete all messages?</source>
        <translation>Alle Nachrichten löschen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12116"/>
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>Verwendung: mms senden [&lt;message_id&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12133"/>
        <source>Usage: mms receive</source>
        <translation>Verwendung: MMS empfangen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12150"/>
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>Verwendung: MMS-Export &lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12161"/>
        <source>Message content saved to:</source>
        <translation>Nachrichteninhalt gespeichert unter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12165"/>
        <source>Failed to to save message content</source>
        <translation>Nachrichteninhalt konnte nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12189"/>
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>Verwendung: MMS-Notiz [&lt;label&gt; &lt;text&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12196"/>
        <source>No signer found with label</source>
        <translation>Kein Unterzeichner mit Label gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12218"/>
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>Verwendung: mms show &lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12236"/>
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>Verwendung: mms set &lt;Optionsname&gt; [&lt;Optionswert&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12253"/>
        <source>Wrong option value</source>
        <translation>Falscher Optionswert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12258"/>
        <source>Auto-send is on</source>
        <translation>Automatisches Senden ist aktiviert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12258"/>
        <source>Auto-send is off</source>
        <translation>Automatisches Senden ist deaktiviert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12263"/>
        <source>Unknown option</source>
        <translation>Unbekannte Option</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12271"/>
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>Verwendung: help mms [&lt;Unterbefehl&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12287"/>
        <source>Usage: mms send_signer_config</source>
        <translation>Verwendung: mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12293"/>
        <source>Signer config not yet complete</source>
        <translation>Signer-Konfiguration noch nicht abgeschlossen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12308"/>
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>Verwendung: mms start_auto_config [&lt;label&gt; &lt;label&gt; …]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12313"/>
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>Es gibt Unterzeichner ohne festgelegtes Label. Vervollständigen Sie die Labels vor der automatischen Konfiguration oder geben Sie sie hier als Parameter an.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12319"/>
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>Die automatische Konfiguration wird bereits ausgeführt. Abbrechen und neu starten?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12343"/>
        <source>Usage: mms config_checksum</source>
        <translation>Verwendung: mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12355"/>
        <source>Usage: mms stop_auto_config</source>
        <translation>Verwendung: mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12358"/>
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>Alle Autokonfigurationstoken löschen und die Autokonfiguration stoppen?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12371"/>
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>Verwendung: mms auto_config &lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12378"/>
        <source>Invalid auto-config token</source>
        <translation>Ungültiges Auto-Config-Token</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12388"/>
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>Die automatische Konfiguration wird bereits ausgeführt. Abbrechen und neu starten?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12407"/>
        <source>MMS not available in this wallet</source>
        <translation>MMS ist in diesem Wallet nicht verfügbar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12431"/>
        <source>The MMS is not active. Activate using the &quot;mms init&quot; command</source>
        <translation>Das MMS ist nicht aktiv. Aktivieren Sie es mit dem Befehl „mms init“</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12512"/>
        <source>Invalid MMS subcommand</source>
        <translation>Ungültiger MMS-Unterbefehl</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12517"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12521"/>
        <source>Error in MMS command:</source>
        <translation>Fehler im MMS-Befehl:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10843"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>Wallet ist nur zum Ansehen und kann nicht signieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10848"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>Diese Brieftasche ist multisig und kann nicht signieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10922"/>
        <source>Bad signature from</source>
        <translation>Ungültige Signatur von</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10926"/>
        <source>Good signature from</source>
        <translation>Gute Unterschrift von</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10942"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>Wallet ist nur zum Ansehen und kann keine Schlüsselbilder exportieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10980"/>
        <source>Signed key images exported to</source>
        <translation>Signierte Schlüsselbilder exportiert nach</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11025"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11071"/>
        <source>command only supported by HW wallet</source>
        <translation>Befehl wird nur von HW Wallet unterstützt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11030"/>
        <source>hw wallet does not support cold KI sync</source>
        <translation>hw wallet unterstützt keine kalte KI-Synchronisierung</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11042"/>
        <source>Please confirm the key image sync on the device</source>
        <translation>Bitte bestätigen Sie die Schlüsselbildsynchronisierung auf dem Gerät</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11048"/>
        <source>Key images synchronized to height</source>
        <translation>Schlüsselbilder mit der Höhe synchronisiert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11051"/>
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>Beim Ausführen eines nicht vertrauenswürdigen Daemons kann nicht ermittelt werden, welche Transaktionsausgabe ausgegeben wird. Verwenden Sie einen vertrauenswürdigen Daemon mit --trusted-daemon und führen Sie rescan_spent aus.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11054"/>
        <source>spent,</source>
        <translation>ausgegeben,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11054"/>
        <source>unspent</source>
        <translation>unverbraucht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11058"/>
        <source>Failed to import key images</source>
        <translation>Schlüsselbilder konnten nicht importiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11063"/>
        <source>Failed to import key images:</source>
        <translation>Schlüsselbilder konnten nicht importiert werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11080"/>
        <source>Failed to reconnect device</source>
        <translation>Das Gerät konnte nicht erneut verbunden werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11085"/>
        <source>Failed to reconnect device:</source>
        <translation>Das Gerät konnte nicht erneut verbunden werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11137"/>
        <source>Outputs exported to</source>
        <translation>Ausgaben exportiert nach</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11292"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>Doppelte Ausgaben im Netzwerk: Diese Transaktion wird möglicherweise abgebaut, muss aber nicht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11327"/>
        <source>Transaction ID not found</source>
        <translation>Transaktions-ID nicht gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11362"/>
        <source>Transaction successfully saved to</source>
        <translation>Transaktion erfolgreich gespeichert in</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11364"/>
        <source>, txid</source>
        <translation>, txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11364"/>
        <source>Failed to save transaction to</source>
        <translation>Die Transaktion konnte nicht gespeichert werden in</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="408"/>
        <source>TRUE</source>
        <translation>TRUE</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="461"/>
        <source>failed to parse refresh type</source>
        <translation>Der Aktualisierungstyp konnte nicht analysiert werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="881"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Geben Sie optional die Seed-Offset-Passphrase ein. Leeren Sie das Feld, um den Roh-Seed anzuzeigen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4342"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Geben Sie die Seed-Offset-Passphrase ein. Leeren Sie diese, wenn keine vorhanden ist.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5342"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>Möglicherweise möchten Sie die Datei „%s“ entfernen und es erneut versuchen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8671"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Dies ist eine Multisig-Wallet, sie kann nur mit sign_multisig signieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8676"/>
        <source>This is a watch only wallet</source>
        <translation>Dies ist eine reine Uhren-Brieftasche</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8708"/>
        <source>Failed to sign transaction</source>
        <translation>Die Transaktion konnte nicht unterzeichnet werden.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8714"/>
        <source>Failed to sign transaction:</source>
        <translation>Signieren der Transaktion fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8735"/>
        <source>Transaction raw hex data exported to</source>
        <translation>Rohe Hex-Daten der Transaktion exportiert nach</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8756"/>
        <source>Failed to load transaction from file</source>
        <translation>Die Transaktion konnte nicht aus der Datei geladen werden.</translation>
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
        <translation>txid konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8814"/>
        <source>Tx key:</source>
        <translation>Tx-Schlüssel:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8819"/>
        <source>no tx keys found for this txid</source>
        <translation>Für diese TXID wurden keine TX-Schlüssel gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8862"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8873"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8880"/>
        <source>failed to parse tx_key</source>
        <translation>tx_key konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8889"/>
        <source>Tx key successfully stored.</source>
        <translation>Tx-Schlüssel erfolgreich gespeichert.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8893"/>
        <source>Failed to store tx key:</source>
        <translation>Speichern des TX-Schlüssels fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8929"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9230"/>
        <source>signature file saved to:</source>
        <translation>Signaturdatei gespeichert unter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8931"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9143"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9232"/>
        <source>failed to save signature file</source>
        <translation>Signaturdatei konnte nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8935"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9023"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9101"/>
        <source>error:</source>
        <translation>Fehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8977"/>
        <source>failed to parse tx key</source>
        <translation>TX-Schlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8999"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072"/>
        <source>received</source>
        <translation>erhalten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8999"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072"/>
        <source>in txid</source>
        <translation>in txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9002"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9075"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>ACHTUNG: Diese Transaktion ist noch nicht in der Blockchain enthalten!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9012"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9085"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>ACHTUNG: Anzahl der Bestätigungen konnte nicht ermittelt werden!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9018"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9091"/>
        <source>received nothing in txid</source>
        <translation>nichts in txid erhalten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9058"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9172"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9266"/>
        <source>failed to load signature file</source>
        <translation>Signaturdatei konnte nicht geladen werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9069"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9179"/>
        <source>Good signature</source>
        <translation>Gute Signatur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9096"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9181"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9281"/>
        <source>Bad signature</source>
        <translation>Ungültige Signatur</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9120"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>Wallet ist nur zum Ansehen verfügbar und kann den Nachweis nicht erbringen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9204"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>Der Reservenachweis kann nur durch eine volle Brieftasche generiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9259"/>
        <source>Address must not be a subaddress</source>
        <translation>Die Adresse darf keine Unteradresse sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9386"/>
        <source>bad min_height parameter:</source>
        <translation>ungültiger min_height-Parameter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9398"/>
        <source>bad max_height parameter:</source>
        <translation>ungültiger max_height-Parameter:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9420"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>block</source>
        <translation>Block</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9420"/>
        <source>in</source>
        <translation>In</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9511"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined]</source>
        <translation>[Doppelte Ausgabe im Netzwerk festgestellt: Diese Transaktion wird möglicherweise abgebaut, muss aber nicht]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9799"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt; sollte kleiner sein als &lt;max_amount&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9825"/>
        <source>There is no unspent output in the specified address</source>
        <translation>Es gibt keine nicht ausgegebene Ausgabe an der angegebenen Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9831"/>
        <source>
Amount:</source>
        <translation>
Betrag:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9831"/>
        <source>, number of keys:</source>
        <translation>, Anzahl der Schlüssel:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9836"/>
        <source></source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9841"/>
        <source>
Min block height:</source>
        <translation>
Mindestblockhöhe:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9842"/>
        <source>
Max block height:</source>
        <translation>
Maximale Blockhöhe:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9843"/>
        <source>
Min amount found:</source>
        <translation>
Mindestmenge gefunden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9844"/>
        <source>
Max amount found:</source>
        <translation>
Maximal gefundene Menge:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845"/>
        <source>
Total count:</source>
        <translation>
Gesamtzahl:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9885"/>
        <source>
Bin size:</source>
        <translation>
Behältergröße:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9886"/>
        <source>
Outputs per *:</source>
        <translation>
Ausgaben pro *:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9888"/>
        <source>count
  ^
</source>
        <translation>Anzahl
 ^
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9890"/>
        <source>|</source>
        <translation>|</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9892"/>
        <source>+</source>
        <translation>+</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9892"/>
        <source>+--&gt; block height
</source>
        <translation>+--&gt; block height
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9893"/>
        <source>^</source>
        <translation>^</translation>
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
        <source></source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9939"/>
        <source>Warning: this will lose any information which can not be recovered from the blockchain.</source>
        <translation>Achtung: Dadurch gehen alle Informationen verloren, die nicht aus der Blockchain wiederhergestellt werden können.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9940"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Dazu gehören Zieladressen, geheime TX-Schlüssel, TX-Notizen usw.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9277"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Gute Signatur – Gesamt: %s, ausgegeben: %s, nicht ausgegeben: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094"/>
        <source>First line is not an amount</source>
        <translation>Die erste Zeile ist kein Betrag</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108"/>
        <source>Invalid output:</source>
        <translation>Ungültige Ausgabe:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2133"/>
        <source>Invalid output key, and file doesn&#39;t exist</source>
        <translation>Ungültiger Ausgabeschlüssel und Datei existiert nicht</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2156"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2183"/>
        <source>Invalid output</source>
        <translation>Ungültige Ausgabe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2671"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>ungültiges Argument: muss entweder 0/nie, 1/Aktion oder 2/verschlüsseln/entschlüsseln sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3377"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&#39;s included)</source>
        <translation>Überweisen Sie &lt;amount&gt; an &lt;address&gt; und sperren Sie es für &lt;lockblocks&gt; (max. 1000000). Wenn der Parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; angegeben ist, verwendet das Wallet Ausgaben, die von Adressen dieser Indizes empfangen werden. Wenn er weggelassen wird, wählt das Wallet die zu verwendenden Adressindizes nach dem Zufallsprinzip aus. In jedem Fall versucht es, Ausgaben mehrerer Adressen möglichst nicht zu kombinieren. &lt;priority&gt; ist die Priorität der Transaktion. Je höher die Priorität, desto höher die Transaktionsgebühr. Gültige Werte in Prioritätsreihenfolge (von niedrig nach hoch) sind: unimportant, normal, elevated, priority. Wenn er weggelassen wird, wird der Standardwert (siehe Befehl &quot;set priority&quot;) verwendet. &lt;ring_size&gt; ist die Anzahl der Eingaben, die zur Unauffindbarkeit einbezogen werden sollen. Mehrere Zahlungen können auf einmal vorgenommen werden, indem URI_2 oder &lt;address_2&gt; &lt;amount_2&gt; usw. hinzugefügt werden (vor der Zahlungs-ID, falls diese enthalten ist).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5946"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Passwort erforderlich (%s) – verwenden Sie den Aktualisierungsbefehl</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10100"/>
        <source>Daemon requests payment at diff %llu, with %f credits/hash%s. Run start_mining_for_rpc to start mining to pay for RPC access, or use another daemon</source>
        <translation>Daemon fordert Zahlung bei diff %llu mit %f Credits/Hash%s an. Führen Sie start_mining_for_rpc aus, um mit dem Mining zu beginnen und für den RPC-Zugriff zu bezahlen, oder verwenden Sie einen anderen Daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10127"/>
        <source>Error mining to daemon:</source>
        <translation>Fehler beim Mining zum Daemon:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10133"/>
        <source>Failed to start mining for RPC payment</source>
        <translation>Mining für RPC-Zahlung konnte nicht gestartet werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10145"/>
        <source>wallet</source>
        <translation>Geldbörse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10147"/>
        <source>(no daemon)</source>
        <translation>(kein Daemon)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10149"/>
        <source>(out of sync)</source>
        <translation>(nicht synchron)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>(Untitled account)</source>
        <translation>(Konto ohne Titel)</translation>
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
        <source>failed to parse index:</source>
        <translation>Index konnte nicht analysiert werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10218"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10494"/>
        <source>specify an index between 0 and</source>
        <translation>Geben Sie einen Index zwischen 0 und</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10340"/>
        <source>, unlocked balance:</source>
        <translation>, freigeschaltetes Guthaben:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10350"/>
        <source>Untagged accounts:</source>
        <translation>Nicht markierte Konten:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10356"/>
        <source>Tag %s is unregistered.</source>
        <translation>Tag %s ist nicht registriert.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10359"/>
        <source>Accounts with tag:</source>
        <translation>Konten mit Tag:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10360"/>
        <source>Tag&#39;s description:</source>
        <translation>Beschreibung des Tags:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Account</source>
        <translation>Konto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10416"/>
        <source>Primary address</source>
        <translation>Primäre Adresse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10416"/>
        <source>(used)</source>
        <translation>(gebraucht)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10437"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10463"/>
        <source>(Untitled address)</source>
        <translation>(Adresse ohne Titel)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10521"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt; liegt bereits außerhalb der Grenzen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10526"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt; überschreitet die Grenze</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10590"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10603"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Integrierte Adressen können nur für Konto 0 angelegt werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10595"/>
        <source>Matching integrated address:</source>
        <translation>Passende integrierte Adresse:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10622"/>
        <source>Subaddress:</source>
        <translation>Unteradresse:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10622"/>
        <source>Standard address:</source>
        <translation>Standardadresse:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10627"/>
        <source>failed to parse payment ID or address</source>
        <translation>Zahlungs-ID oder Adresse konnten nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10664"/>
        <source>failed to parse index</source>
        <translation>Index konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10672"/>
        <source>Address book is empty.</source>
        <translation>Das Adressbuch ist leer.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10678"/>
        <source>Index:</source>
        <translation>Index:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10684"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10814"/>
        <source>Address:</source>
        <translation>Adresse:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10685"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10813"/>
        <source>Description:</source>
        <translation>Beschreibung:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10770"/>
        <source>no description found</source>
        <translation>Keine Beschreibung gefunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10772"/>
        <source>description found:</source>
        <translation>Beschreibung gefunden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6679"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10812"/>
        <source>Filename:</source>
        <translation>Dateiname:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10817"/>
        <source>Watch only</source>
        <translation>Nur ansehen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10819"/>
        <source>%u/%u multisig%s</source>
        <translation>%u/%u Mehrfachsignatur%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8634"/>
        <source>%s change to %s</source>
        <translation>%s ändern in %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9008"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9081"/>
        <source>This transaction has %u confirmations</source>
        <translation>Diese Transaktion hat %u Bestätigungen</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61"/>
        <source>Filename to save the certificate</source>
        <translation>Dateiname zum Speichern des Zertifikats</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62"/>
        <source>Filename to save the private key</source>
        <translation>Dateiname zum Speichern des privaten Schlüssels</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63"/>
        <source>Passphrase with which to encrypt the private key</source>
        <translation>Passphrase, mit der der private Schlüssel verschlüsselt wird</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64"/>
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>Datei mit der Passphrase, mit der der private Schlüssel verschlüsselt wird</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65"/>
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>Eingabeaufforderung für eine Passphrase zum Verschlüsseln des privaten Schlüssels</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143"/>
        <source>Argument is needed:</source>
        <translation>Argument ist erforderlich:</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153"/>
        <source>Failed to read passphrase</source>
        <translation>Passphrase konnte nicht gelesen werden</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188"/>
        <source>Failed to create certificate</source>
        <translation>Zertifikat konnte nicht erstellt werden</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206"/>
        <source>Failed to write certificate:</source>
        <translation>Schreiben des Zertifikats fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226"/>
        <source>Failed to write private key:</source>
        <translation>Schreiben des privaten Schlüssels fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237"/>
        <source>Failed to save certificate file</source>
        <translation>Zertifikatsdatei konnte nicht gespeichert werden</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243"/>
        <source>Failed to save private key file</source>
        <translation>Die private Schlüsseldatei konnte nicht gespeichert werden.</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Basisdateiname (Suffixe -1, -2 usw. werden nach Bedarf angehängt)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>Geben Sie Schwellenwert und Teilnehmer gleichzeitig als M/N an</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>Wie viele Teilnehmer werden Teile der Multisig-Wallet teilen</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Wie viele Unterzeichner sind erforderlich, um eine gültige Transaktion zu unterzeichnen?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>Create testnet multisig wallets</source>
        <translation>Erstellen Sie Testnet-Multisig-Wallets</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create stagenet multisig wallets</source>
        <translation>Erstellen Sie Stagenet-Multisig-Wallets</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create an address file for new wallets</source>
        <translation>Erstellen Sie eine Adressdatei für neue Geldbörsen</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Generieren von %u %u/%u Multisig-Wallets</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="137"/>
        <source>Generated multisig wallets for address</source>
        <translation>Generierte Multisig-Wallets für Adressen</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="141"/>
        <source>Error creating multisig wallets:</source>
        <translation>Fehler beim Erstellen von Multisig-Wallets:</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="166"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Dieses Programm generiert eine Reihe von Multisig-Wallets - verwenden Sie dieses einfachere Schema nur, wenn alle Teilnehmer einander vertrauen</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="185"/>
        <source>Error: Can&#39;t specify more than one of --testnet and --stagenet</source>
        <translation>Fehler: Es kann nicht mehr als eines von --testnet und --stagenet angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="192"/>
        <source>Error: expected N/M, but got:</source>
        <translation>Fehler: N/M erwartet, aber erhalten:</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="200"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="209"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Fehler: Es können entweder --scheme oder --threshold und --participants beide angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Fehler: erwartet N &gt; 1 und N &lt;= M, aber erhalten N==%u und M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225"/>
        <source>Error: --filename-base is required</source>
        <translation>Fehler: --filename-base ist erforderlich</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72"/>
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>Verwenden Sie die PyBitmessage-Instanz unter der URL &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73"/>
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>Geben Sie &lt;arg&gt; als Benutzername:Passwort für die PyBitmessage-API an</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911"/>
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>Die automatische Konfiguration kann nicht fortgesetzt werden, da die automatischen Konfigurationsdaten anderer Unterzeichner nicht vollständig sind</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936"/>
        <source>The signer config is not complete.</source>
        <translation>Die Signerkonfiguration ist nicht vollständig.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988"/>
        <source>Wallet can&#39;t go multisig because key sets from other signers are missing or not complete.</source>
        <translation>Die Wallet kann nicht auf Multisig umstellen, da Schlüsselsätze von anderen Unterzeichnern fehlen oder unvollständig sind.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030"/>
        <source>Wallet can&#39;t start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>Wallet kann keine weitere Schlüsselaustauschrunde starten, da Schlüsselsätze anderer Unterzeichner fehlen oder unvollständig sind.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094"/>
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>Die Synchronisierung wurde nicht durchgeführt, da Multisig-Synchronisierungsdaten von anderen Unterzeichnern fehlen oder unvollständig sind.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208"/>
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>Es liegen wartende Nachrichten vor, aber unter normalen Umständen ist nichts zur Verarbeitung bereit</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211"/>
        <source>
Use &quot;mms next sync&quot; if you want to force processing of the waiting sync data</source>
        <translation>
Verwenden Sie „mms next sync“, wenn Sie die Verarbeitung der wartenden Synchronisierungsdaten erzwingen möchten</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215"/>
        <source>
Use &quot;mms note&quot; to display the waiting notes</source>
        <translation>
Verwenden Sie „MMS-Notiz“, um die Wartenotizen anzuzeigen</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220"/>
        <source>There are no messages waiting to be processed.</source>
        <translation>Es liegen keine Nachrichten vor, die auf die Verarbeitung warten.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441"/>
        <source>key set</source>
        <translation>Schlüsselsatz</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443"/>
        <source>additional key set</source>
        <translation>zusätzlicher Schlüsselsatz</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445"/>
        <source>multisig sync data</source>
        <translation>Multisig-Synchronisationsdaten</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447"/>
        <source>partially signed tx</source>
        <translation>teilweise signierte tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449"/>
        <source>fully signed tx</source>
        <translation>vollständig signierte tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451"/>
        <source>note</source>
        <translation>Notiz</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453"/>
        <source>signer config</source>
        <translation>Unterzeichnerkonfiguration</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455"/>
        <source>auto-config data</source>
        <translation>Auto-Konfigurationsdaten</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457"/>
        <source>unknown message type</source>
        <translation>Unbekannter Nachrichtentyp</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466"/>
        <source>in</source>
        <translation>In</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468"/>
        <source>out</source>
        <translation>aus</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470"/>
        <source>unknown message direction</source>
        <translation>unbekannte Nachrichtenrichtung</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479"/>
        <source>ready to send</source>
        <translation>versandfertig</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481"/>
        <source>sent</source>
        <translation>gesendet</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483"/>
        <source>waiting</source>
        <translation>Warten</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485"/>
        <source>processed</source>
        <translation>verarbeitet</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487"/>
        <source>cancelled</source>
        <translation>abgesagt</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489"/>
        <source>unknown message state</source>
        <translation>Unbekannter Nachrichtenstatus</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="177"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Neues Wallet erstellen und unter &lt;arg&gt; speichern.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="178"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Erstellen Sie ein neues Wallet vom Gerät und speichern Sie es unter &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="179"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>Nur eingehende Brieftasche aus Ansichtsschlüssel generieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="180"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>Deterministisches Wallet aus dem Ausgabeschlüssel generieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="181"/>
        <source>Generate wallet from private keys</source>
        <translation>Wallet aus privaten Schlüsseln generieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="182"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Generieren Sie eine Master-Wallet aus Multisig-Wallet-Schlüsseln</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184"/>
        <source>Language for mnemonic</source>
        <translation>Sprache für Mnemotechnik</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="185"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Geben Sie den Electrum-Seed für die Wiederherstellung/Erstellung des Wallets an</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="186"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Wiederherstellen der Brieftasche mithilfe des Mnemonik-Seeds im Electrum-Stil</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="187"/>
        <source>alias for --restore-deterministic-wallet</source>
        <translation>Alias für --restore-deterministic-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="188"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Stellen Sie das Multisig-Wallet mithilfe des mnemonischen Seeds im Electrum-Stil wieder her</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="189"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Nichtdeterministische Ansichts- und Ausgabeschlüssel generieren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191"/>
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>Wiederherstellung von der geschätzten Blockchain-Höhe am angegebenen Datum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192"/>
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>Die neu erstellte Transaktion wird nicht an das Salvium-Netzwerk weitergeleitet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="348"/>
        <source>failed to read wallet password</source>
        <translation>Das Lesen des Wallet-Passworts ist fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355"/>
        <source>Enter a new password for the wallet</source>
        <translation>Geben Sie ein neues Passwort für die Brieftasche ein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355"/>
        <source>Wallet password</source>
        <translation>Wallet-Passwort</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="433"/>
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>ungültiges Argument: muss entweder 0/1, wahr/falsch, j/n, ja/nein sein</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="489"/>
        <source>DNSSEC validation passed</source>
        <translation>DNSSEC-Validierung bestanden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="493"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>ACHTUNG: Die DNSSEC-Validierung war nicht erfolgreich, diese Adresse ist möglicherweise nicht korrekt!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="496"/>
        <source>For URL:</source>
        <translation>Für URL:</translation>
    </message>
    <message>
        <location filename="=../src/simplewallet/simplewallet.cpp" line="498"/>
        <source>Salvium Address </source>
        <translation>=Salvium-Adresse </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="510"/>
        <source>you have cancelled the transfer request</source>
        <translation>Sie haben die Überweisungsanfrage storniert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="531"/>
        <source>failed to parse index:</source>
        <translation>Index konnte nicht analysiert werden:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="544"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>ungültiges Format für Subadressen-Lookahead; muss &lt;major&gt;:&lt;minor&gt; sein;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="608"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>keine Verbindung zum Daemon. Bitte stellen Sie sicher, dass der Daemon läuft.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="617"/>
        <source>RPC error:</source>
        <translation>RPC-Fehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="621"/>
        <source>failed to get random outputs to mix:</source>
        <translation>Fehler beim Mischen der zufälligen Ausgaben:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="628"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="636"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Nicht genug Geld im freigeschalteten Guthaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="646"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>Es konnte keine Möglichkeit gefunden werden, Transaktionen zu erstellen. Dies liegt normalerweise daran, dass Staub so klein ist, dass er sich nicht durch Gebühren bezahlt machen kann, oder daran, dass versucht wird, mehr Geld zu senden als das freigeschaltete Guthaben, oder dass nicht genug Geld für Gebühren übrig bleibt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="652"/>
        <source>not enough outputs for specified ring size</source>
        <translation>nicht genügend Ausgänge für die angegebene Ringgröße</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655"/>
        <source>output amount</source>
        <translation>Ausgabemenge</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655"/>
        <source>found outputs to use</source>
        <translation>gefundene zu verwendende Ausgaben</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="657"/>
        <source>Please use sweep_unmixable.</source>
        <translation>Bitte verwenden Sie sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="661"/>
        <source>transaction was not constructed</source>
        <translation>Transaktion wurde nicht konstruiert</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669"/>
        <source>Reason:</source>
        <translation>Grund:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="688"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>Es wurde keine geeignete Möglichkeit gefunden, Transaktionen aufzuteilen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694"/>
        <source>unknown transfer error:</source>
        <translation>unbekannter Übertragungsfehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699"/>
        <source>Multisig error:</source>
        <translation>Multisig-Fehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="705"/>
        <source>internal error:</source>
        <translation>interner Fehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="710"/>
        <source>unexpected error:</source>
        <translation>unerwarteter Fehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Es ist ein Fehler aufgetreten. Dies könnte bedeuten, dass der Knoten versucht, Sie dazu zu bringen, eine Transaktion erneut zu erstellen und sich auf die Ausgaben zu konzentrieren, die Ihnen gehören. Oder es könnte sich um einen echten Fehler handeln. Es kann ratsam sein, die Verbindung zu diesem Knoten zu trennen und nicht sofort zu versuchen, eine Transaktion zu senden. Alternativ können Sie eine Verbindung zu einem anderen Knoten herstellen, damit der ursprüngliche Knoten keine Informationen korrelieren kann.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>In der Datei %s sind wahrscheinlich private Wallet-Schlüssel gespeichert! Verwenden Sie einen anderen Dateinamen.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9295"/>
        <source>seconds</source>
        <translation>Sekunden</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9297"/>
        <source>minutes</source>
        <translation>Minuten</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9299"/>
        <source>hours</source>
        <translation>Std.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9301"/>
        <source>days</source>
        <translation>Tage</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9303"/>
        <source>months</source>
        <translation>Monate</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9304"/>
        <source>a long time</source>
        <translation>lange</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11447"/>
        <source>Unknown command:</source>
        <translation>Unbekannter Befehl:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="190"/>
        <source>Restore from specific blockchain height</source>
        <translation>Wiederherstellen von einer bestimmten Blockchain-Höhe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193"/>
        <source>Create an address file for new wallets</source>
        <translation>Erstellen Sie eine Adressdatei für neue Geldbörsen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195"/>
        <source>Display English language names</source>
        <translation>Englischsprachige Namen anzeigen</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>Daemon ist beschäftigt. Bitte versuchen Sie es später erneut.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="374"/>
        <source>possibly lost connection to daemon</source>
        <translation>möglicherweise Verbindung zum Daemon verloren</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="391"/>
        <source>Error:</source>
        <translation>Fehler:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="500"/>
        <source>Is this OK?</source>
        <translation>Ist das in Ordnung?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="666"/>
        <source>transaction %s was rejected by daemon</source>
        <translation>Transaktion %s wurde vom Daemon abgelehnt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678"/>
        <source>destination amount is zero</source>
        <translation>Der Zielbetrag ist Null</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="683"/>
        <source>transaction has no destination</source>
        <translation>Transaktion hat kein Ziel</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="729"/>
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>Die Datei %s ist bereits vorhanden. Möchten Sie sie wirklich überschreiben?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11422"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>Dies ist die Salvium-Brieftasche für die Befehlszeile. Sie muss mit einem Salvium-Daemon verbunden werden, um richtig zu funktionieren.
WARNUNG: Verwenden Sie Ihre Salvium-Schlüssel nicht erneut für einen anderen Fork, AUSSER dieser Fork verfügt über integrierte Maßnahmen zur Verhinderung der Schlüsselwiederverwendung. Andernfalls wird Ihre Privatsphäre gefährdet.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11441"/>
        <source>Failed to initialize wallet</source>
        <translation>Initialisierung der Brieftasche fehlgeschlagen</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="244"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Daemon-Instanz unter &lt;Host&gt;:&lt;Port&gt; verwenden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="245"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Daemon-Instanz auf Host &lt;arg&gt; statt auf localhost verwenden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Daemon-Instanz am Port &lt;arg&gt; statt an 18081 verwenden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Für Testnetz. Der Daemon muss auch mit dem Flag --testnet gestartet werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="280"/>
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>Datei mit zusätzlicher Entropie zur Initialisierung des PRNG (beliebige Daten, 256 Bit Entropie sind sinnvoll, was normalerweise mehr als 256 Bit Daten bedeutet)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281"/>
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>Erlaubt die Kommunikation mit einem Daemon, der eine andere Version verwendet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375"/>
        <source>can&#39;t specify daemon host or port more than once</source>
        <translation>Daemon-Host oder -Port können nicht mehr als einmal angegeben werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511"/>
        <source>can&#39;t specify more than one of --password and --password-file</source>
        <translation>kann nicht mehr als eines von --password und --password-file angeben</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="525"/>
        <source>the password file specified could not be read</source>
        <translation>die angegebene Passwortdatei konnte nicht gelesen werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="551"/>
        <source>Failed to load file</source>
        <translation>Datei konnte nicht geladen werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="249"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Wallet-Passwort (Escape/Anführungszeichen nach Bedarf)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="246"/>
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt;:]&lt;port&gt; für Daemon-Verbindungen zu verwendender Socks-Proxy</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="247"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Aktivieren Sie Befehle, die auf einem vertrauenswürdigen Daemon basieren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="248"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Deaktivieren Sie Befehle, die auf einem vertrauenswürdigen Daemon basieren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Geben Sie den Benutzernamen[:Passwort] für den Daemon-RPC-Client an</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253"/>
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>SSL für Daemon-RPC-Verbindungen aktivieren: aktiviert|deaktiviert|automatische Erkennung</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="257"/>
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>Liste gültiger Fingerabdrücke zulässiger RPC-Server</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258"/>
        <source>Allow any SSL certificate from the daemon</source>
        <translation>Alle SSL-Zertifikate vom Daemon zulassen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259"/>
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>Erlaube Benutzern (über --daemon-ssl-ca-certificates) Kettenzertifikate</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Für Stagenet. Der Daemon muss auch mit dem Flag --stagenet gestartet werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263"/>
        <source>Set shared ring database path</source>
        <translation>Legen Sie den gemeinsamen Ringdatenbankpfad fest</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="274"/>
        <source>Number of rounds for the key derivation function</source>
        <translation>Anzahl der Runden für die Schlüsselableitungsfunktion</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="275"/>
        <source>HW device to use</source>
        <translation>Zu verwendendes HW-Gerät</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="276"/>
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>HW-Geräte-Wallet-Ableitungspfad (z. B. SLIP-10)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="278"/>
        <source>Do not use DNS</source>
        <translation>Kein DNS verwenden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="279"/>
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>Stellen Sie keine Verbindung zu einem Daemon her und verwenden Sie kein DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="367"/>
        <source>Invalid argument for</source>
        <translation>Ungültiges Argument für</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428"/>
        <source>Enabling --</source>
        <translation>Aktivieren --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428"/>
        <source>requires --</source>
        <translation>erfordert --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="429"/>
        <location filename="../src/wallet/wallet2.cpp" line="430"/>
        <source>or --</source>
        <translation>oder --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="430"/>
        <source>or use of a .onion/.i2p domain</source>
        <translation>oder Verwendung einer .onion/.i2p-Domäne</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="448"/>
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon und --untrusted-daemon werden beide angezeigt, vorausgesetzt, nicht vertrauenswürdig</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="458"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Der Daemon ist lokal und wird als vertrauenswürdig vorausgesetzt</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="468"/>
        <source>failed to initialize the wallet</source>
        <translation>Initialisierung der Brieftasche fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>kein Passwort angegeben; verwenden Sie --prompt-for-password, um zur Eingabe eines Passworts aufzufordern</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534"/>
        <source>Enter a new password for the wallet</source>
        <translation>Geben Sie ein neues Passwort für die Brieftasche ein</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534"/>
        <source>Wallet password</source>
        <translation>Wallet-Passwort</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="557"/>
        <source>Failed to parse JSON</source>
        <translation>JSON konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Version %u zu neu, wir können nur bis %u kapieren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="580"/>
        <source>failed to parse view key secret key</source>
        <translation>Der Ansichtsschlüssel konnte nicht analysiert werden. Geheimer Schlüssel</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="585"/>
        <source>view secret key may not be all zeroes</source>
        <translation>Der geheime Schlüssel darf nicht nur aus Nullen bestehen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587"/>
        <location filename="../src/wallet/wallet2.cpp" line="657"/>
        <location filename="../src/wallet/wallet2.cpp" line="702"/>
        <source>failed to verify view key secret key</source>
        <translation>Überprüfung des Ansichtsschlüssels und des geheimen Schlüssels fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="598"/>
        <source>failed to parse spend key secret key</source>
        <translation>Der geheime Schlüssel konnte nicht analysiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="603"/>
        <source>spend secret key may not be all zeroes</source>
        <translation>Der geheime Schlüssel darf nicht nur aus Nullen bestehen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605"/>
        <location filename="../src/wallet/wallet2.cpp" line="667"/>
        <location filename="../src/wallet/wallet2.cpp" line="728"/>
        <source>failed to verify spend key secret key</source>
        <translation>Fehler beim Überprüfen des geheimen Ausgabeschlüssels</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="617"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Überprüfung der Wortliste im Electrum-Stil fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="637"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Es muss mindestens eine Wortliste im Electrum-Stil, ein privater Ansichtsschlüssel oder ein privater Ausgabeschlüssel angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="641"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Sowohl die Wortliste im Electrum-Stil als auch die privaten Schlüssel wurden angegeben</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="651"/>
        <source>invalid address</source>
        <translation>ungültige Adresse</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="660"/>
        <source>view key does not match standard address</source>
        <translation>Ansichtsschlüssel stimmt nicht mit der Standardadresse überein</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="670"/>
        <source>spend key does not match standard address</source>
        <translation>Der Ausgabenschlüssel stimmt nicht mit der Standardadresse überein</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="678"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Veraltete Wallets können nicht aus JSON generiert werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="714"/>
        <source>failed to parse address:</source>
        <translation>Adresse konnte nicht analysiert werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="720"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>Um eine Nur-Beobachten-Wallet zu erstellen, muss die Adresse angegeben werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="737"/>
        <source>failed to generate new wallet:</source>
        <translation>Das Generieren des neuen Wallets ist fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2172"/>
        <source>Password is needed to compute key image for incoming SALs</source>
        <translation>Zum Berechnen des Schlüsselbilds für eingehende SALs ist ein Passwort erforderlich</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2173"/>
        <source>Invalid password: password is needed to compute key image for incoming SALs</source>
        <translation>Ungültiges Passwort: Das Passwort wird benötigt, um das Schlüsselbild für eingehende SALs zu berechnen.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3751"/>
        <source>reorg exceeds maximum allowed depth, use &#39;set max-reorg-depth N&#39; to allow it, reorg depth:</source>
        <translation>Reorg überschreitet die maximal zulässige Tiefe. Verwenden Sie „set max-reorg-depth N“, um dies zuzulassen. Reorg-Tiefe:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5639"/>
        <location filename="../src/wallet/wallet2.cpp" line="6220"/>
        <location filename="../src/wallet/wallet2.cpp" line="6709"/>
        <source>Primary account</source>
        <translation>Primäres Konto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9078"/>
        <source>Transaction sanity check failed</source>
        <translation>Die Überprüfung der Transaktionsintegrität ist fehlgeschlagen.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12641"/>
        <source>No funds received in this tx.</source>
        <translation>In dieser Transaktion wurden keine Gelder erhalten.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13553"/>
        <source>failed to read file</source>
        <translation>Fehler beim Lesen der Datei</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Stellen Sie die Lookahead-Größen für Subadressen auf &lt;major&gt;:&lt;minor&gt; ein.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254"/>
        <source>Path to a PEM format private key</source>
        <translation>Pfad zu einem privaten Schlüssel im PEM-Format</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255"/>
        <source>Path to a PEM format certificate</source>
        <translation>Pfad zu einem Zertifikat im PEM-Format</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Pfad zur Datei, die zusammengesetzte Zertifikate im PEM-Format enthält, um die System-CA(s) zu ersetzen.</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="219"/>
        <source>Failed to create directory</source>
        <translation>Verzeichnis konnte nicht erstellt werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="221"/>
        <source>Failed to create directory %s: %s</source>
        <translation>Verzeichnis %s konnte nicht erstellt werden: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232"/>
        <source>Cannot specify --</source>
        <translation>Kann nicht angeben --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232"/>
        <source>and --</source>
        <translation>Und --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251"/>
        <source>Failed to create file</source>
        <translation>Datei konnte nicht erstellt werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251"/>
        <source>. Check permissions or remove file</source>
        <translation>. Berechtigungen prüfen oder Datei entfernen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="261"/>
        <source>Error writing to file</source>
        <translation>Fehler beim Schreiben in die Datei</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="264"/>
        <source>RPC username/password is stored in file</source>
        <translation>RPC-Benutzername/Passwort werden in der Datei gespeichert</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="665"/>
        <source>Tag %s is unregistered.</source>
        <translation>Tag %s ist nicht registriert.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="693"/>
        <source>No matches for regex filter %s .</source>
        <translation>Keine Übereinstimmungen für den Regex-Filter %s.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3586"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Transaktion nicht möglich. Nur %s verfügbar, Transaktionsbetrag %s = %s + %s (Gebühr)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4594"/>
        <source>Can&#39;t specify more than one of --testnet and --stagenet</source>
        <translation>Es kann nicht mehr als eines von --testnet und --stagenet angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4613"/>
        <source>Can&#39;t specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Es kann nicht mehr als eines von --wallet-file und --generate-from-json angegeben werden.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4619"/>
        <source>--password-file is not allowed in combination with --wallet-dir</source>
        <translation>--password-file ist in Kombination mit --wallet-dir nicht zulässig.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4631"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>Muss --wallet-file oder --generate-from-json oder --wallet-dir angeben</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4635"/>
        <source>Loading wallet...</source>
        <translation>Brieftasche wird geladen …</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4683"/>
        <source>Initial refresh failed:</source>
        <translation>Erste Aktualisierung fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4688"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4720"/>
        <source>Saving wallet...</source>
        <translation>Geldbeutel schonen...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4690"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4722"/>
        <source>Successfully saved</source>
        <translation>Erfolgreich gespeichert</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4693"/>
        <source>Successfully loaded</source>
        <translation>Erfolgreich geladen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4697"/>
        <source>Wallet initialization failed:</source>
        <translation>Wallet-Initialisierung fehlgeschlagen:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4703"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>Initialisierung des Wallet-RPC-Servers fehlgeschlagen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4707"/>
        <source>Starting wallet RPC server</source>
        <translation>Wallet-RPC-Server wird gestartet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4714"/>
        <source>Failed to run wallet:</source>
        <translation>Wallet konnte nicht ausgeführt werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4717"/>
        <source>Stopped wallet RPC server</source>
        <translation>Wallet-RPC-Server gestoppt</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4726"/>
        <source>Failed to save wallet:</source>
        <translation>Brieftasche konnte nicht gespeichert werden:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4800"/>
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Dies ist die RPC Salvium-Wallet. Sie muss mit einem Salvium-Daemon verbunden werden, um richtig zu funktionieren.</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="152"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11388"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4779"/>
        <source>Wallet options</source>
        <translation>Wallet-Optionen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>Wallet aus Datei im JSON-Format generieren</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Brieftasche verwenden &lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81"/>
        <source>Set RPC client secret key for RPC payments</source>
        <translation>Legen Sie den geheimen RPC-Clientschlüssel für RPC-Zahlungen fest</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85"/>
        <source>Wallet password file</source>
        <translation>Wallet-Passwortdatei</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>Maximale Anzahl von Threads für einen parallelen Job</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114"/>
        <source>Specify log file</source>
        <translation>Protokolldatei angeben</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115"/>
        <source>Config file</source>
        <translation>Konfigurationsdatei</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127"/>
        <source>General options</source>
        <translation>Allgemeine Optionen</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Dies ist die Salvium-Brieftasche für die Befehlszeile. Sie muss mit einem Salvium-Daemon verbunden werden, um ordnungsgemäß zu funktionieren.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176"/>
        <source>Can&#39;t find config file</source>
        <translation>Konfigurationsdatei kann nicht gefunden werden</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220"/>
        <source>Logging to:</source>
        <translation>Protokollierung bei:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222"/>
        <source>Logging to %s</source>
        <translation>Anmeldung bei %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226"/>
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>ACHTUNG: Möglicherweise ist Ihr sperrbarer Speichergrenzwert nicht hoch genug</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228"/>
        <source>see ulimit -l</source>
        <translation>siehe ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153"/>
        <source>Usage:</source>
        <translation>Verwendung:</translation>
    </message>
</context>
</TS>
