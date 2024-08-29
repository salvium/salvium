<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="jp">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>宛先アドレスが無効です</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60"/>
        <source>Payment ID supplied: this is obsolete</source>
        <translation>指定された支払いID: これは古いものです</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>トランザクションをファイルに保存しようとしましたが、指定されたファイルが存在します。上書きのリスクを回避するために終了します。ファイル:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>トランザクションをファイルに書き込めませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>デーモンはビジー状態です。しばらくしてからもう一度お試しください。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>デーモンに接続されていません。デーモンが実行中であることを確認してください。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146"/>
        <source>transaction %s was rejected by daemon with status:</source>
        <translation>トランザクション %s はデーモンによってステータスで拒否されました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151"/>
        <source>. Reason:</source>
        <translation>。 理由：</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153"/>
        <source>Unknown exception:</source>
        <translation>不明な例外:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156"/>
        <source>Unhandled exception</source>
        <translation>未処理の例外</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="229"/>
        <source>Couldn&#39;t multisig sign data:</source>
        <translation>データをマルチ署名できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="251"/>
        <source>Couldn&#39;t sign multisig transaction:</source>
        <translation>マルチシグトランザクションに署名できませんでした:</translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>これは時計専用の財布です</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>トランザクションの署名に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>請求されたお釣りは支払済みアドレスに送られません</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>請求されたお釣りはお釣りのアドレスへの支払い額よりも大きい</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184"/>
        <source>Change goes to more than one address</source>
        <translation>変更は複数のアドレスに送られます</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>sending %s to %s</source>
        <translation>%s を %s に送信しています</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>with no destinations</source>
        <translation>目的地のない</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209"/>
        <source>%s change to %s</source>
        <translation>%s を %s に変更</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212"/>
        <source>no change</source>
        <translation>変化なし</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>%lu 件のトランザクションを、%s、手数料 %s、%s、%s、最小リング サイズ %lu でロードしました。%s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="561"/>
        <source>failed to parse address</source>
        <translation>アドレスの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="572"/>
        <source>failed to parse secret spend key</source>
        <translation>秘密支出キーの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="587"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>表示キーも支出キーも提供されていないため、キャンセルされました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="595"/>
        <source>failed to parse secret view key</source>
        <translation>シークレットビューキーの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="604"/>
        <source>failed to verify secret spend key</source>
        <translation>秘密支出キーの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="608"/>
        <source>spend key does not match address</source>
        <translation>支出キーがアドレスと一致しません</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="614"/>
        <source>failed to verify secret view key</source>
        <translation>シークレットビューキーの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="618"/>
        <source>view key does not match address</source>
        <translation>ビューキーがアドレスと一致しません</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="641"/>
        <location filename="../src/wallet/api/wallet.cpp" line="658"/>
        <source>failed to generate new wallet:</source>
        <translation>新しいウォレットの生成に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="706"/>
        <source>Electrum seed is empty</source>
        <translation>エレクトラムシードは空です</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="715"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Electrum スタイルの単語リストの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1071"/>
        <source>Failed to load unsigned transactions</source>
        <translation>署名されていないトランザクションの読み込みに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1094"/>
        <source>Failed to load transaction from file</source>
        <translation>ファイルからトランザクションをロードできませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1110"/>
        <source>Wallet is view only</source>
        <translation>ウォレットは表示のみです</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118"/>
        <source>failed to save file</source>
        <translation>ファイルの保存に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1134"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>キーイメージは信頼できるデーモンでのみインポートできます</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1147"/>
        <source>Failed to import key images:</source>
        <translation>キー画像のインポートに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1158"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1188"/>
        <source>Not supported on HW wallets.</source>
        <translation>HW ウォレットではサポートされていません。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169"/>
        <source>Failed to save file:</source>
        <translation>ファイルの保存に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1176"/>
        <source>Error exporting outputs:</source>
        <translation>出力のエクスポート中にエラーが発生しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1197"/>
        <source>Failed to read file:</source>
        <translation>ファイルの読み取りに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1209"/>
        <source>Failed to import outputs:</source>
        <translation>出力のインポートに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1220"/>
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>トランザクションのスキャンに失敗しました: トランザクション ID が提供されていません。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231"/>
        <source>Invalid txid specified:</source>
        <translation>無効な txid が指定されました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1249"/>
        <source>Failed to scan transaction:</source>
        <translation>トランザクションのスキャンに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1281"/>
        <source>Failed to get subaddress label:</source>
        <translation>サブアドレス ラベルの取得に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1294"/>
        <source>Failed to set subaddress label:</source>
        <translation>サブアドレス ラベルの設定に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1311"/>
        <source>Failed to get multisig info:</source>
        <translation>マルチシグ情報を取得できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1328"/>
        <source>Failed to make multisig:</source>
        <translation>マルチシグの作成に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1342"/>
        <source>Failed to exchange multisig keys:</source>
        <translation>マルチシグキーの交換に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1358"/>
        <source>Failed to export multisig images:</source>
        <translation>マルチシグイメージのエクスポートに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1376"/>
        <source>Failed to parse imported multisig images</source>
        <translation>インポートされたマルチシグイメージの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1386"/>
        <source>Failed to import multisig images:</source>
        <translation>マルチシグイメージのインポートに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1400"/>
        <source>Failed to check for partial multisig key images:</source>
        <translation>部分的なマルチシグキーイメージのチェックに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1428"/>
        <source>Failed to restore multisig transaction:</source>
        <translation>マルチシグトランザクションの復元に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1477"/>
        <source>Sending all requires one destination address</source>
        <translation>すべてを送信するには、1つの宛先アドレスが必要です</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1481"/>
        <source>Destinations and amounts are unequal</source>
        <translation>行き先と金額が不平等</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489"/>
        <source>payment id has invalid format, expected 64 character hex string:</source>
        <translation>支払い ID の形式が無効です。64 文字の 16 進文字列が必要です:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1497"/>
        <source>Invalid destination address</source>
        <translation>宛先アドレスが無効です</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1503"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>1回の取引で複数の支払いIDを使用することはできません</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1531"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>支払いIDの設定に失敗しましたが、正しくデコードされました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1556"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1647"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>デーモンはビジー状態です。しばらくしてからもう一度お試しください。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1558"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1649"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>デーモンに接続されていません。デーモンが実行中であることを確認してください。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1560"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1651"/>
        <source>RPC error:</source>
        <translation>RPC エラー:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1562"/>
        <source>failed to get outputs to mix: %s</source>
        <translation>出力をミックスできませんでした: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1566"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1658"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>送金するのに十分な金額がありません。利用可能な金額は %s のみ、送金金額は %s です。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1573"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1666"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>送金するのに十分な金額がありません。全体の残高は %s のみ、送金金額は %s です。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1580"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1674"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>送金するのに十分な金額がありません。%s のみ利用可能です。取引金額 %s = %s + %s (手数料)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1588"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1682"/>
        <source>not enough outputs for specified ring size</source>
        <translation>指定されたリングサイズに対して出力が足りません</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>output amount</source>
        <translation>出力量</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>found outputs to use</source>
        <translation>使用する出力が見つかりました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1592"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>混合できない出力をスイープしてください。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1595"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1688"/>
        <source>transaction was not constructed</source>
        <translation>トランザクションは構築されませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1598"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1691"/>
        <source>transaction %s was rejected by daemon with status:</source>
        <translation>トランザクション %s はデーモンによってステータスで拒否されました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1603"/>
        <source>destination amount is zero</source>
        <translation>目的地の金額はゼロです</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1605"/>
        <source>transaction has no destination</source>
        <translation>トランザクションに宛先がありません</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1607"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1698"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>取引を分割する適切な方法を見つけられなかった</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1609"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1700"/>
        <source>unknown transfer error:</source>
        <translation>不明な転送エラー:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1611"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1702"/>
        <source>internal error:</source>
        <translation>内部エラー:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1613"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1704"/>
        <source>unexpected error:</source>
        <translation>予期しないエラー:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1615"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1706"/>
        <source>unknown error</source>
        <translation>不明なエラー</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653"/>
        <source>failed to get outputs to mix</source>
        <translation>出力をミックスできませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1696"/>
        <source>one of destinations is zero</source>
        <translation>目的地の1つがゼロです</translation>
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
        <translation>txid の解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1836"/>
        <source>no tx keys found for this txid</source>
        <translation>この txid の tx キーが見つかりません</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1860"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1869"/>
        <source>Failed to parse tx key</source>
        <translation>txキーの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1878"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1907"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1935"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2016"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2047"/>
        <source>Failed to parse address</source>
        <translation>アドレスの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2021"/>
        <source>Address must not be a subaddress</source>
        <translation>アドレスはサブアドレスであってはなりません</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2052"/>
        <source>Address doesn&#39;t belong to the wallet</source>
        <translation>アドレスはウォレットに属していません</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2076"/>
        <source>The wallet must be in multisig ready state</source>
        <translation>ウォレットはマルチシグ準備状態である必要があります</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2098"/>
        <source>Given string is not a key</source>
        <translation>指定された文字列はキーではありません</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2361"/>
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>再スキャンは信頼できるデーモンでのみ使用できます</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2419"/>
        <source>Invalid output:</source>
        <translation>無効な出力:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2426"/>
        <source>Failed to mark outputs as spent</source>
        <translation>出力を使用済みとしてマークできませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2437"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2459"/>
        <source>Failed to parse output amount</source>
        <translation>出力量の解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2442"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2464"/>
        <source>Failed to parse output offset</source>
        <translation>出力オフセットの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2448"/>
        <source>Failed to mark output as spent</source>
        <translation>出力を使用済みとしてマークできませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2470"/>
        <source>Failed to mark output as unspent</source>
        <translation>出力を未使用としてマークできませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2481"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2520"/>
        <source>Failed to parse key image</source>
        <translation>キー画像の解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2487"/>
        <source>Failed to get ring</source>
        <translation>リングを取得できませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2505"/>
        <source>Failed to get rings</source>
        <translation>リングを取得できませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2526"/>
        <source>Failed to set ring</source>
        <translation>リングの設定に失敗しました</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316"/>
        <source>Failed to parse address</source>
        <translation>アドレスの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323"/>
        <source>Failed to parse key</source>
        <translation>キーの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="331"/>
        <source>failed to verify key</source>
        <translation>キーの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="341"/>
        <source>key does not match address</source>
        <translation>キーがアドレスと一致しません</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54"/>
        <source>yes</source>
        <translation>はい</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68"/>
        <source>no</source>
        <translation>いいえ</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92"/>
        <source>Specify IP to bind RPC server</source>
        <translation>RPCサーバーをバインドするIPを指定する</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93"/>
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>RPCサーバーをバインドするためのIPv6アドレスを指定します</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94"/>
        <source>Specify IP to bind restricted RPC server</source>
        <translation>制限されたRPCサーバーをバインドするIPを指定する</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95"/>
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>制限されたRPCサーバーをバインドするためのIPv6アドレスを指定します</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96"/>
        <source>Allow IPv6 for RPC</source>
        <translation>RPC に IPv6 を許可する</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97"/>
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>RPC の失敗した IPv4 バインドを無視する</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>RPCサーバーに必要なユーザー名[:パスワード]を指定します</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>rpc-bind-ip 値がループバック (ローカル) IP ではないことを確認する</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>クロスオリジンリソース共有を許可するには、コンマ区切りのオリジンリストを指定します。</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>RPC 接続で SSL を有効にする: 有効|無効|自動検出</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102"/>
        <source>Path to a PEM format private key</source>
        <translation>PEM形式の秘密鍵へのパス</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103"/>
        <source>Path to a PEM format certificate</source>
        <translation>PEM形式の証明書へのパス</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>システム CA を置き換える連結された PEM 形式の証明書を含むファイルへのパス。</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105"/>
        <source>List of certificate fingerprints to allow</source>
        <translation>許可する証明書のフィンガープリントのリスト</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106"/>
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>ユーザーに（--rpc-ssl-certificates経由で）チェーン証明書を許可する</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107"/>
        <source>Allow any peer certificate</source>
        <translation>任意のピア証明書を許可する</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108"/>
        <source>Do not ban hosts on RPC errors</source>
        <translation>RPCエラーでホストを禁止しない</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155"/>
        <location filename="../src/rpc/rpc_args.cpp" line="183"/>
        <location filename="../src/rpc/rpc_args.cpp" line="204"/>
        <location filename="../src/rpc/rpc_args.cpp" line="221"/>
        <source>Invalid IP address given for --</source>
        <translation>-- に無効な IP アドレスが指定されました</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163"/>
        <location filename="../src/rpc/rpc_args.cpp" line="191"/>
        <source>permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation>暗号化されていない外部接続の受信を許可します。代わりに SSH トンネルまたは SSL プロキシを検討してください。-- で上書きします。</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source>Username specified with --</source>
        <translation>--で指定されたユーザー名</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source>cannot be empty</source>
        <translation>空にすることはできません</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4933"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>デーモンはウォレット (%u) とは異なる RPC メジャー バージョン (%u) を使用します: %s。どちらかを更新するか、--allow-mismatched-daemon-version を使用してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7068"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7622"/>
        <source>Spending from address index %d
</source>
        <translation>アドレス インデックス %d からの支出
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7083"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>トランザクションを %llu 個のトランザクションに分割する必要があります。これにより、各トランザクションにトランザクション手数料が適用され、合計手数料は %s になります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7089"/>
        <source>The transaction fee is %s</source>
        <translation>取引手数料は%sです</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7092"/>
        <source>, of which %s is dust from change</source>
        <translation>、そのうち %s は変化による塵です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>ダスト変更の合計%sがダストアドレスに送信されます</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7376"/>
        <source>Not enough money in unlocked balance</source>
        <translation>ロック解除残高が不足しています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421"/>
        <source>No address given</source>
        <translation>住所は不明</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7487"/>
        <source>missing lockedblocks parameter</source>
        <translation>ロックブロックパラメータがありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497"/>
        <source>bad locked_blocks parameter</source>
        <translation>不正なlocked_blocksパラメータ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7793"/>
        <source>failed to parse Payment ID</source>
        <translation>支払いIDの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2273"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7816"/>
        <source>failed to parse key image</source>
        <translation>キーイメージの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7854"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8077"/>
        <source>No outputs found</source>
        <translation>出力が見つかりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8082"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>複数のトランザクションが作成されますが、これは発生しないはずです</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7864"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8087"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>トランザクションは複数の入力を使用するか、入力をまったく使用しませんが、これは発生するはずがありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8168"/>
        <source>Money successfully sent, transaction:</source>
        <translation>送金は正常に完了しました。取引:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989"/>
        <source>missing threshold amount</source>
        <translation>不足している閾値</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7995"/>
        <source>invalid amount threshold</source>
        <translation>無効な金額しきい値</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8579"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>請求されたお釣りは支払済みアドレスに送られません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8584"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>請求されたお釣りはお釣りのアドレスへの支払い額よりも大きい</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8593"/>
        <source>Change goes to more than one address</source>
        <translation>変更は複数のアドレスに送られます</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8615"/>
        <source>sending %s to %s</source>
        <translation>%s を %s に送信しています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8625"/>
        <source>dummy output(s)</source>
        <translation>ダミー出力</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8628"/>
        <source>with no destinations</source>
        <translation>目的地のない</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8637"/>
        <source>no change</source>
        <translation>変化なし</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5750"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>デーモンはローカルであり、信頼されていると仮定します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5413"/>
        <source>Password for new watch-only wallet</source>
        <translation>新しいウォッチ専用ウォレットのパスワード</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413"/>
        <source>FALSE</source>
        <translation>FALSE</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="775"/>
        <source>Commands:</source>
        <translation>コマンド:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="789"/>
        <source>Unknown command:</source>
        <translation>不明なコマンド:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796"/>
        <source>Command usage:</source>
        <translation>コマンドの使用方法:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="799"/>
        <source>Command description:</source>
        <translation>コマンドの説明:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="825"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>ウォレットはウォッチのみで、支出キーはありません</translation>
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
        <translation>コマンドはHWウォレットではサポートされていません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="933"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>ウォレットはウォッチのみでシードはありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="865"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>ウォレットはマルチシグですが、まだ完成していません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="874"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="943"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>ウォレットは非決定論的であり、シードはない</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898"/>
        <source>Failed to retrieve seed</source>
        <translation>シードを取得できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928"/>
        <source>wallet is multisig and has no seed</source>
        <translation>ウォレットはマルチシグであり、シードはありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="953"/>
        <source>Incorrect password</source>
        <translation>パスワードが間違っています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1153"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1236"/>
        <source>Your original password was incorrect.</source>
        <translation>元のパスワードが間違っていました。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="990"/>
        <source>Error with wallet rewrite:</source>
        <translation>ウォレットの書き換えエラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10594"/>
        <source>Random payment ID:</source>
        <translation>ランダム支払いID:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1011"/>
        <source>Current fee is %s %s per %s</source>
        <translation>現在の料金は %s %s / %s です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603"/>
        <source>Payment required, see the &#39;rpc_payment_info&#39; command</source>
        <translation>支払いが必要です。「rpc_payment_info」コマンドを参照してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027"/>
        <source>Error: failed to estimate backlog array size:</source>
        <translation>エラー: バックログ配列のサイズを推定できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1032"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>エラー: バックログ配列の推定サイズが不正です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1044"/>
        <source>(current)</source>
        <translation>（現在）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1047"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>優先度 %u%s の %u ブロック (%u 分) バックログ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>優先度 %u の %u から %u ブロック (%u から %u 分) のバックログ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1052"/>
        <source>No backlog at priority</source>
        <translation>優先バックログなし</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1074"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1121"/>
        <source>This wallet is already multisig</source>
        <translation>このウォレットはすでにマルチシグです</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1079"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1126"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>ウォレットはウォッチのみで、マルチシグにすることはできません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1132"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>このウォレットは以前に使用されました。新しいウォレットを使用してマルチシグウォレットを作成してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1093"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&#39; multisig info</source>
        <translation>このマルチシグ情報を他のすべての参加者に送信し、make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&#39; マルチシグ情報を使用します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1094"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet&#39;s participants</source>
        <translation>これにはプライベートビューキーが含まれるため、そのマルチシグウォレットの参加者にのみ開示する必要があります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1146"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890"/>
        <source>Invalid threshold</source>
        <translation>無効なしきい値</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1168"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1247"/>
        <source>Another step is needed</source>
        <translation>さらなるステップが必要</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180"/>
        <source>Error creating multisig:</source>
        <translation>マルチシグの作成中にエラーが発生しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1187"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>マルチシグ作成エラー: 新しいウォレットはマルチシグではありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190"/>
        <source>multisig address:</source>
        <translation>マルチシグアドレス:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1224"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1289"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357"/>
        <source>This wallet is not multisig</source>
        <translation>このウォレットはマルチシグではありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229"/>
        <source>This wallet is already finalized</source>
        <translation>このウォレットはすでに完成しています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259"/>
        <source>Multisig address:</source>
        <translation>マルチシグアドレス:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1294"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1458"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1658"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation>このマルチシグウォレットはまだ完成していません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10969"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11126"/>
        <source>failed to save file</source>
        <translation>ファイルの保存に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330"/>
        <source>Error exporting multisig info:</source>
        <translation>マルチシグ情報のエクスポート中にエラーが発生しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1334"/>
        <source>Multisig info exported to</source>
        <translation>マルチシグ情報がエクスポートされました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10882"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10908"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11159"/>
        <source>failed to read file</source>
        <translation>ファイルの読み取りに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1406"/>
        <source>Failed to import multisig info:</source>
        <translation>マルチシグ情報をインポートできませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1417"/>
        <source>Failed to update spent status after importing multisig info:</source>
        <translation>マルチシグ情報をインポートした後、使用済みステータスを更新できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>信頼されていないデーモン、使用済みステータスが正しくない可能性があります。信頼できるデーモンを使用して、「rescan_spent」を実行してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1571"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653"/>
        <source>This is not a multisig wallet</source>
        <translation>これはマルチシグウォレットではありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1503"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1512"/>
        <source>Failed to sign multisig transaction</source>
        <translation>マルチシグトランザクションの署名に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1519"/>
        <source>Multisig error:</source>
        <translation>マルチシグエラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524"/>
        <source>Failed to sign multisig transaction:</source>
        <translation>マルチシグトランザクションへの署名に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1533"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1546"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8725"/>
        <source>Transaction successfully signed to file</source>
        <translation>トランザクションはファイルに正常に署名されました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>submit_multisigでネットワークに中継される可能性がある</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1608"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1679"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>ファイルからマルチシグトランザクションを読み込めませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1684"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>マルチシグトランザクションは %u 人の署名者によってのみ署名されています。さらに %u 人の署名が必要です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1623"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11369"/>
        <source>Transaction successfully submitted, transaction</source>
        <translation>トランザクションが正常に送信されました。トランザクション</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11370"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>`show_transfers` コマンドを使用してステータスを確認できます。</translation>
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
        <translation>不明なエラー</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1700"/>
        <source>Failed to export multisig transaction to file</source>
        <translation>マルチシグトランザクションをファイルにエクスポートできませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1704"/>
        <source>Saved exported multisig transaction file(s):</source>
        <translation>保存されたエクスポートされたマルチシグトランザクションファイル:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1709"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2050"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6114"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6451"/>
        <source>unexpected error:</source>
        <translation>予期しないエラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1732"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1889"/>
        <source>Invalid key image</source>
        <translation>無効なキー画像</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1738"/>
        <source>Invalid txid</source>
        <translation>無効なtxid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1765"/>
        <source>Failed to get key image ring:</source>
        <translation>キーイメージリングを取得できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780"/>
        <source>File doesn&#39;t exist</source>
        <translation>ファイルが存在しません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802"/>
        <source>Invalid ring specification:</source>
        <translation>リングの指定が無効です:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1810"/>
        <source>Invalid key image:</source>
        <translation>無効なキー画像:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1815"/>
        <source>Invalid ring type, expected relative or abosolute:</source>
        <translation>リング タイプが無効です。相対または絶対が期待されます:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1821"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1833"/>
        <source>Error reading line:</source>
        <translation>行の読み取りエラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844"/>
        <source>Invalid ring:</source>
        <translation>無効なリング:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1853"/>
        <source>Invalid relative ring:</source>
        <translation>無効な相対リング:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1865"/>
        <source>Invalid absolute ring:</source>
        <translation>無効な絶対リング:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874"/>
        <source>Failed to set ring for key image:</source>
        <translation>キー画像のリングを設定できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874"/>
        <source>Continuing.</source>
        <translation>継続中。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1904"/>
        <source>Missing absolute or relative keyword</source>
        <translation>絶対キーワードまたは相対キーワードがありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1921"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>無効なインデックス: 厳密に正の符号なし整数である必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929"/>
        <source>invalid index: indices wrap</source>
        <translation>無効なインデックス: インデックスが折り返されています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>無効なインデックス: インデックスは厳密に昇順である必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946"/>
        <source>failed to set ring</source>
        <translation>リングの設定に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1969"/>
        <source>Invalid key image or txid</source>
        <translation>無効なキーイメージまたはtxid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1978"/>
        <source>failed to unset ring</source>
        <translation>リングの設定解除に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2001"/>
        <source>RPC client ID:</source>
        <translation>RPC クライアント ID:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002"/>
        <source>RPC client secret key:</source>
        <translation>RPC クライアント秘密キー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2005"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434"/>
        <source>Failed to query daemon</source>
        <translation>デーモンのクエリに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2013"/>
        <source>Using daemon:</source>
        <translation>デーモンの使用:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014"/>
        <source>Payments required for node use, current credits:</source>
        <translation>ノード使用に必要な支払い、現在のクレジット:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2015"/>
        <source>Credits target:</source>
        <translation>クレジット目標:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2018"/>
        <source>Credits spent this session:</source>
        <translation>このセッションで消費されたクレジット:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2020"/>
        <source>Credit discrepancy this session:</source>
        <translation>このセッションのクレジットの不一致:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>Difficulty:</source>
        <translation>困難：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>credits per hash found,</source>
        <translation>見つかったハッシュごとのクレジット、</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>credits/hash</source>
        <translation>クレジット/ハッシュ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2030"/>
        <source>Mining for payment at %.1f H/s</source>
        <translation>%.1f H/s で支払いのためのマイニング</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2035"/>
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>%u クレジットのターゲットを採掘するまでの推定時間: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039"/>
        <source>Mining for payment</source>
        <translation>支払いのための採掘</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2042"/>
        <source>Not mining</source>
        <translation>採掘していない</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2045"/>
        <source>No payment needed for node use</source>
        <translation>ノード使用には料金はかかりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118"/>
        <source>Bad argument:</source>
        <translation>悪い議論:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118"/>
        <source>should be &quot;add&quot;</source>
        <translation>「追加」する必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2127"/>
        <source>Failed to open file</source>
        <translation>ファイルを開けませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211"/>
        <source>Failed to save known rings:</source>
        <translation>既知のリングを保存できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220"/>
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>使用法: %s &lt;key_image&gt;|&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2265"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2277"/>
        <source>Frozen:</source>
        <translation>凍った：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279"/>
        <source>Not frozen:</source>
        <translation>凍結されていない:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293"/>
        <source>bytes sent</source>
        <translation>送信バイト数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294"/>
        <source>bytes received</source>
        <translation>受信バイト数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2306"/>
        <source>No known public nodes</source>
        <translation>既知の公開ノードはありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>address</source>
        <translation>住所</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>last_seen</source>
        <translation>最後に見た</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2324"/>
        <source>never</source>
        <translation>一度もない</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2332"/>
        <source>Error retrieving public node list:</source>
        <translation>パブリック ノード リストの取得中にエラーが発生しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2342"/>
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium は、ビットコインと同様に暗号通貨です。つまり、デジタルマネーです。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2346"/>
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>Salviumはブロックチェーン上であなたのプライバシーを保護し、常に改善に努めていますが、</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2347"/>
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>Salvium を含め、プライバシー テクノロジーは 100% 完璧ではありません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2348"/>
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>Salvium はマルウェアからユーザーを保護することはできませんし、強力な敵に対しては期待するほどの効果が得られない可能性もあります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2349"/>
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>将来、サルビウムの欠陥が発見され、その欠陥を覗き見るための攻撃が開発されるかもしれない。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2350"/>
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>Salvium が提供するプライバシーの層。安全を確保し、多層防御を実践しましょう。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439"/>
        <source>Daemon does not require payment for RPC access</source>
        <translation>デーモンはRPCアクセスに料金を支払わない</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447"/>
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>RPC アクセスのマイニングを開始: diff %llu、%f クレジット/ハッシュ%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448"/>
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>停止するにはstop_mining_for_rpcを実行します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>ウォレットは監視のみで、転送はできません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7117"/>
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>警告: これはデフォルトではないリング サイズであり、プライバシーが侵害される可能性があります。デフォルトを使用することをお勧めします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2595"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2611"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of:</source>
        <translation>優先度は 0、1、2、3、4 のいずれか、または次のいずれかである必要があります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2616"/>
        <source>could not change default priority</source>
        <translation>デフォルトの優先度を変更できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2702"/>
        <source>invalid unit</source>
        <translation>無効な単位</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2738"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>無効なカウント: 符号なし整数である必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2720"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756"/>
        <source>invalid value</source>
        <translation>無効な値</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2834"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2952"/>
        <source>Invalid height</source>
        <translation>高さが無効です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2907"/>
        <source>Invalid target</source>
        <translation>無効なターゲット</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2983"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3002"/>
        <source>Invalid amount</source>
        <translation>無効な金額</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3072"/>
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>無効な引数: 1/はいまたは 0/いいえのいずれかである必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3340"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>デーモンでマイニングを開始します (bg_mining と ignore_battery はオプションのブール値です)。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3343"/>
        <source>Stop mining in the daemon.</source>
        <translation>デーモンでのマイニングを停止します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350"/>
        <source>Save the current blockchain data.</source>
        <translation>現在のブロックチェーンデータを保存します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>取引と残高を同期します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3357"/>
        <source>Show the wallet&#39;s balance of the currently selected account.</source>
        <translation>現在選択されているアカウントのウォレット残高を表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3361"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent(&quot;T&quot;|&quot;F&quot;), &quot;frozen&quot;|&quot;locked&quot;|&quot;unlocked&quot;, RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image]</source>
        <translation>受信転送をすべて表示するか、可用性とアドレス インデックスでフィルタリングして表示します。

出力形式:
金額、使用済み (&quot;T&quot;|&quot;F&quot;)、&quot;凍結&quot;|&quot;ロック&quot;|&quot;ロック解除&quot;、RingCT、グローバル インデックス、トランザクション ハッシュ、アドレス インデックス、[公開キー、キー イメージ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3367"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>指定された支払い ID の支払いを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3370"/>
        <source>Show the blockchain height.</source>
        <translation>ブロックチェーンの高さを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>すべてのミックス不可能な出力をring_size 1で自分自身に送信する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>しきい値以下のすべてのロック解除された出力をアドレスに送信します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3398"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>指定されたキーイメージの単一の出力を変更せずにアドレスに送信します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>ファイルから署名されたトランザクションを送信します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3442"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>現在のログの詳細を変更します (レベルは &lt;0-4&gt; である必要があります)。</translation>
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
        <translation>引数が指定されていない場合、ウォレットは既存のすべてのアカウントとその残高を表示します。
「new」引数が指定されている場合、ウォレットは指定されたラベル テキスト (空の場合もあります) でラベルが初期化された新しいアカウントを作成します。
「switch」引数が指定されている場合、ウォレットは「index」で指定されたアカウントに切り替えます。
「label」引数が指定されている場合、ウォレットは「index」で指定されたアカウントのラベルを指定されたラベル テキストに設定します。
「tag」引数が指定されている場合、指定されたアカウント「account_index_1」、「account_index_2」、... にタグ「tag_name」が割り当てられます。
「untag」引数が指定されている場合、指定されたアカウント「account_index_1」、「account_index_2」に割り当てられたタグが削除されます。 ... は削除されます。
&quot;tag_description&quot; 引数が指定されている場合、タグ &lt;tag_name&gt; に任意のテキスト &lt;description&gt; が割り当てられます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3460"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>現在のウォレットの公開アドレスの統合アドレスに支払いIDをエンコードする（引数なしではランダムな支払いIDは使用されない）、または統合アドレスを標準アドレスと支払いIDにデコードする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3464"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>アドレス帳のすべてのエントリを印刷します。オプションでエントリを追加/削除することもできます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3467"/>
        <source>Save the wallet data.</source>
        <translation>ウォレットデータを保存します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470"/>
        <source>Save a watch-only keys file.</source>
        <translation>ウォッチ専用のキー ファイルを保存します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3473"/>
        <source>Display the private view key.</source>
        <translation>プライベートビューキーを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3476"/>
        <source>Display the private spend key.</source>
        <translation>プライベート支出キーを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Electrumスタイルの記憶シードを表示する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>暗号化された Electrum スタイルのニーモニック シードを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>ブロックチェーンを再スキャンして、使用済みの出力を探します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>指定された &lt;txid&gt; のトランザクション キー (r) を取得します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>トランザクションが他のデバイスまたはサードパーティのウォレットによって行われた場合に備えて、指定された &lt;txid&gt; のトランザクション キー (r) を設定します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>&lt;txid&gt; の &lt;address&gt; に送金される金額を確認します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3580"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet&#39;s address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>&lt;address&gt; がウォレットのアドレスでない場合はトランザクション秘密鍵、それ以外の場合は秘密鍵を公開しないビュー秘密鍵を使用して、&lt;txid&gt; の &lt;address&gt; に資金が送金されたことを証明する署名を生成します。オプションでチャレンジ文字列 &lt;message&gt; も生成します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3584"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>チャレンジ文字列 &lt;message&gt; がある場合は、&lt;txid&gt; の &lt;address&gt; に資金が送金されているかどうかの証明を確認します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3588"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>オプションでチャレンジ文字列 &lt;message&gt; を使用して、支出秘密キーを使用して &lt;txid&gt; を生成したことを証明する署名を生成します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3592"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>署名者が &lt;txid&gt; を生成したことを証明する署名をチェックします。オプションでチャレンジ文字列 &lt;message&gt; もチェックします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3596"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If &#39;all&#39; is specified, you prove the entire sum of all of your existing accounts&#39; balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>少なくともこの金額を所有していることを証明する署名を生成します。オプションでチャレンジ文字列 &lt;message&gt; も使用できます。
&#39;all&#39; が指定されている場合は、既存のすべてのアカウントの残高の合計を証明します。
それ以外の場合は、現在のアカウントで利用可能な &lt;amount&gt; を超える最小金額の準備金を証明します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>オプションでチャレンジ文字列 &lt;message&gt; を使用して、&lt;address&gt; の所有者が少なくともこれだけの情報を保有していることを証明する署名を確認します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3623"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>オプションの金額範囲内で指定されたアドレスの未使用出力を表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3631"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>&lt;txid&gt; に任意の文字列注釈を設定します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3635"/>
        <source>Get a string note for a txid.</source>
        <translation>txid の文字列メモを取得します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3639"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>ウォレットの任意の説明を設定します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3643"/>
        <source>Get the description of the wallet.</source>
        <translation>ウォレットの説明を取得します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3646"/>
        <source>Show the wallet&#39;s status.</source>
        <translation>ウォレットのステータスを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3649"/>
        <source>Show the wallet&#39;s information.</source>
        <translation>ウォレットの情報を表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3657"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>ファイルの内容の署名を検証します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3665"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>署名されたキーイメージのリストをインポートし、使用状況を確認します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3673"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation>HW ウォレットの再接続を試みます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>このウォレットが所有する出力のセットをエクスポートします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3681"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>このウォレットが所有する出力のセットをインポートします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3685"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>このアドレスへの送金またはこのアドレスからの送金に関する情報を表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3688"/>
        <source>Change the wallet&#39;s password.</source>
        <translation>ウォレットのパスワードを変更します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3695"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>現在の手数料と取引のバックログに関する情報を印刷します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3697"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>マルチシグウォレットの作成に必要なデータをエクスポートする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3700"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>このウォレットをマルチシグウォレットにする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3708"/>
        <source>Export multisig info for other participants</source>
        <translation>他の参加者のマルチシグ情報をエクスポートする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3712"/>
        <source>Import multisig info from other participants</source>
        <translation>他の参加者からのマルチシグ情報をインポートする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3716"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>ファイルからマルチシグトランザクションに署名する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3720"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>ファイルから署名されたマルチシグトランザクションを送信する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3724"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>署名されたマルチシグトランザクションをファイルにエクスポートする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3815"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, &quot;absolute&quot;, list of rings</source>
        <translation>指定されたキー イメージまたはトランザクションを使用するために使用されたリングを出力します (リング サイズが 1 より大きい場合)

出力形式:
キー イメージ、&quot;absolute&quot;、リングのリスト</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3821"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>特定のキーイメージに使用されるリングを設定し、フォークで再利用できるようにします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3825"/>
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>特定のキーイメージまたはトランザクションに使用されているリングの設定を解除します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3829"/>
        <source>Save known rings to the shared rings database</source>
        <translation>既知のリングを共有リングデータベースに保存する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845"/>
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>キーイメージで単一の出力をフリーズして使用されないようにする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3849"/>
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>単一の出力をキーイメージで解凍して、再度使用できるようにします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3853"/>
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>指定された出力が現在キーイメージによってフリーズされているかどうかを確認します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3861"/>
        <source>Prints simple network stats</source>
        <translation>シンプルなネットワーク統計を出力します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3865"/>
        <source>Lists known public nodes</source>
        <translation>既知の公開ノードを一覧表示します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3869"/>
        <source>Prints basic info about Salvium for first time users</source>
        <translation>初めてのユーザー向けにSalviumの基本情報を印刷します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3873"/>
        <source>Returns version information</source>
        <translation>バージョン情報を返します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3877"/>
        <source>Get info about RPC payments to current node</source>
        <translation>現在のノードへの RPC 支払いに関する情報を取得します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881"/>
        <source>Start mining to pay for RPC access</source>
        <translation>RPCアクセスの支払いのためにマイニングを開始</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3885"/>
        <source>Stop mining to pay for RPC access</source>
        <translation>RPCアクセス料金を払うための採掘をやめる</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3893"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>&lt;コマンド&gt;に関するヘルプセクションまたはドキュメントを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984"/>
        <source>needs an argument</source>
        <translation>議論が必要</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>シードを設定: 引数が必要です。使用可能なオプション: 言語</translation>
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
        <translation>または 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4011"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (最も遅い、仮定なし)、optimize-coinbase (速い、coinbase 全体が 1 つのアドレスに支払われると仮定)、no-coinbase (最も速い、coinbase トランザクションを受信しないと仮定)、default (optimize-coinbase と同じ)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4012"/>
        <source>0, 1, 2, 3, or 4, or one of</source>
        <translation>0、1、2、3、4、またはそのうちの1つ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4013"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (またはなし|アクション|復号化)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4015"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4027"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040"/>
        <source>unsigned integer</source>
        <translation>符号なし整数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4017"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4029"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4030"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>amount</source>
        <translation>額</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4022"/>
        <source>block height</source>
        <translation>ブロックの高さ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4026"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;メジャー&gt;:&lt;マイナー&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4034"/>
        <source>1/yes or 0/no</source>
        <translation>1/はいまたは0/いいえ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4039"/>
        <source>floating point &gt;= 0</source>
        <translation>浮動小数点数 >gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044"/>
        <source>set: unrecognized argument(s)</source>
        <translation>set: 認識されない引数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4102"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>ウォレット名が無効です。もう一度試すか、Ctrl + C キーを押して終了してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4114"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>ウォレットを生成または復元しようとしましたが、指定されたファイルが存在します。上書きのリスクを回避するために終了します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4119"/>
        <source>Wallet and key files found, loading...</source>
        <translation>ウォレットとキーファイルが見つかりました。読み込んでいます...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4125"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>キー ファイルは見つかりましたが、ウォレット ファイルは見つかりません。再生成しています...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4131"/>
        <source>Key file not found. Failed to open wallet:</source>
        <translation>キーファイルが見つかりません。ウォレットを開けませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4139"/>
        <source>No wallet found with that name. Confirm creation of new wallet named:</source>
        <translation>その名前のウォレットは見つかりません。次の名前の新しいウォレットの作成を確認してください:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150"/>
        <source>Generating new wallet...</source>
        <translation>新しいウォレットを生成しています...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231"/>
        <source>Can&#39;t specify more than one of --testnet and --stagenet</source>
        <translation>--testnet と --stagenet を複数指定することはできません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4247"/>
        <source>can&#39;t specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; and --generate-from-device=&quot;wallet_name&quot;</source>
        <translation>--generate-new-wallet=&quot;wallet_name&quot;、--wallet-file=&quot;wallet_name&quot;、--generate-from-view-key=&quot;wallet_name&quot;、--generate-from-spend-key=&quot;wallet_name&quot;、--generate-from-keys=&quot;wallet_name&quot;、--generate-from-multisig-keys=&quot;wallet_name&quot;、--generate-from-json=&quot;jsonfilename&quot;、および --generate-from-device=&quot;wallet_name&quot; のうち 1 つ以上を指定することはできません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277"/>
        <source>can&#39;t specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>--restore-deterministic-wallet または --restore-multisig-wallet と --non-deterministic の両方を指定することはできません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4283"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet は --wallet-file ではなく --generate-new-wallet を使用します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4285"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet は --wallet-file ではなく --generate-new-wallet を使用します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4299"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation>--electrum-seed=&quot;multisig seed here&quot; を使用してリカバリパラメータを指定します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>--electrum-seed=&quot;words list here&quot; を使用して回復パラメータを指定します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328"/>
        <source>Multisig seed failed verification</source>
        <translation>マルチシグシードの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Electrum スタイルの単語リストの検証に失敗しました</translation>
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
        <translation>データが提供されなかったためキャンセルされました</translation>
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
        <translation>アドレスの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4368"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4445"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>このアドレスはサブアドレスなので、ここでは使用できません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4383"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4475"/>
        <source>failed to parse view key secret key</source>
        <translation>ビューキーの秘密キーを解析できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4392"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4492"/>
        <source>failed to verify view key secret key</source>
        <translation>ビューキーの秘密キーの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4396"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4578"/>
        <source>view key does not match standard address</source>
        <translation>ビューキーが標準アドレスと一致しません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4401"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4422"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4500"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4661"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4693"/>
        <source>account creation failed</source>
        <translation>アカウント作成に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4418"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4460"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4603"/>
        <source>failed to parse spend key secret key</source>
        <translation>支出キーの秘密キーを解析できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4484"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4623"/>
        <source>failed to verify spend key secret key</source>
        <translation>支出キーの秘密キーの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4488"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628"/>
        <source>spend key does not match standard address</source>
        <translation>支出キーが標準アドレスと一致しません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4523"/>
        <source>Error: expected M/N, but got:</source>
        <translation>エラー: M/N を期待しましたが、次のようになりました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4528"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got:</source>
        <translation>エラー: N > 1 かつ N &lt;= M を期待しましたが、次のようになりました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4533"/>
        <source>Error: M/N is currently unsupported.</source>
        <translation>エラー: M/N は現在サポートされていません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4536"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>マルチシグウォレットキー %u 個のうち %u 個からマスターウォレットを生成しています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4565"/>
        <source>failed to parse secret view key</source>
        <translation>シークレットビューキーの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4573"/>
        <source>failed to verify secret view key</source>
        <translation>シークレットビューキーの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4616"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>エラー: M/N は現在サポートされていません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4668"/>
        <source>No restore height is specified.</source>
        <translation>復元高さが指定されていません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4669"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>新しいアカウントを作成していると仮定すると、復元は現在の推定ブロックチェーンの高さから実行されます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674"/>
        <source>account creation aborted</source>
        <translation>アカウント作成が中止されました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4684"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>--generate-new-wallet （--wallet-file ではない）でウォレットのパスを指定します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4748"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4768"/>
        <source>bad m_restore_height parameter:</source>
        <translation>不正な m_restore_height パラメータ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759"/>
        <source>Restore height is:</source>
        <translation>復元高さは次のとおりです:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782"/>
        <source>Restore height</source>
        <translation>高さを復元</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798"/>
        <source>can&#39;t specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>--subaddress-lookahead と --wallet-file を同時に指定することはできません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802"/>
        <source>failed to open account</source>
        <translation>アカウント開設に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5568"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5791"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8954"/>
        <source>wallet is null</source>
        <translation>ウォレットはnullです</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>リングデータベースの初期化に失敗しました: プライバシー強化機能は無効になります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4920"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4924"/>
        <source>wallet failed to connect to daemon:</source>
        <translation>ウォレットがデーモンに接続できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4925"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the &#39;set_daemon&#39; command.</source>
        <translation>デーモンが起動していないか、間違ったポートが渡されました。デーモンが実行中であることを確認するか、&#39;set_daemon&#39; コマンドを使用してデーモンのアドレスを変更してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4954"/>
        <source>List of available languages for your wallet&#39;s seed:</source>
        <translation>ウォレットのシードで利用可能な言語のリスト:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4955"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>ディスプレイがフリーズした場合は、^Cで終了し、--use-english-language-namesで再度実行してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4973"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4978"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>無効な言語選択が入力されました。もう一度お試しください。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4992"/>
        <source>invalid password</source>
        <translation>無効なパスワード</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5040"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>廃止されたバージョンのウォレットを使用していました。弊社が提供する新しいシードを使用してください。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5056"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5131"/>
        <source>Generated new wallet:</source>
        <translation>新しいウォレットが生成されました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5059"/>
        <source>View key:</source>
        <translation>表示キー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5136"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5244"/>
        <source>failed to generate new wallet:</source>
        <translation>新しいウォレットの生成に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5175"/>
        <source>Generated new wallet on hw device:</source>
        <translation>ハードウェアデバイスに新しいウォレットが生成されました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5236"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>新しいマルチシグウォレットを生成できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5239"/>
        <source>Generated new %u/%u multisig wallet:</source>
        <translation>新しい %u/%u マルチシグウォレットを生成しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5255"/>
        <source>wallet file path not valid:</source>
        <translation>ウォレットファイルパスが無効です:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5265"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation>キーファイルが見つかりません。ウォレットを開けませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5286"/>
        <source>Opened watch-only wallet</source>
        <translation>時計専用の財布を開封</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5288"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>%u/%u マルチシグウォレット%s を開設しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5290"/>
        <source>Opened wallet</source>
        <translation>開いた財布</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5308"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>廃止されたバージョンのウォレットを使用していました。ウォレットのアップグレードを続行してください。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5323"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>これまで使用していたウォレットのバージョンは廃止されました。ウォレットのファイル形式は現在アップグレード中です。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5331"/>
        <source>failed to load wallet:</source>
        <translation>ウォレットの読み込みに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5350"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command&#39;s documentation.
</source>
        <translation>コマンドのドキュメントを表示するには、「help &lt;command&gt;」を使用します。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5372"/>
        <source>failed to deinitialize wallet</source>
        <translation>ウォレットの初期化に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5395"/>
        <source>Wallet data saved</source>
        <translation>ウォレットデータが保存されました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>ウォレットはマルチシグであり、ウォッチ専用バージョンを保存できない</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5417"/>
        <source>failed to read wallet password</source>
        <translation>ウォレットのパスワードの読み取りに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5425"/>
        <source>Watch only wallet saved as:</source>
        <translation>ウォッチのみのウォレットは次のように保存されます:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5429"/>
        <source>Failed to save watch only wallet:</source>
        <translation>ウォッチのみのウォレットを保存できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5559"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6414"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10993"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>このコマンドには信頼できるデーモンが必要です。--trusted-daemon で有効にします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5608"/>
        <source>Mining started in daemon</source>
        <translation>デーモンで採掘開始</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610"/>
        <source>mining has NOT been started:</source>
        <translation>採掘はまだ開始されていません:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5630"/>
        <source>Mining stopped in daemon</source>
        <translation>デーモンでマイニングが停止しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632"/>
        <source>mining has NOT been stopped:</source>
        <translation>採掘は停止されていません:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5687"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>予期しない配列の長さ - simple_wallet::set_daemon() を終了しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763"/>
        <source>trusted</source>
        <translation>信頼できる</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763"/>
        <source>untrusted</source>
        <translation>信頼できない</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5779"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>これは有効なデーモン URL ではないようです。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5799"/>
        <source>Blockchain saved</source>
        <translation>ブロックチェーンが救われた</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5801"/>
        <source>blockchain can&#39;t be saved:</source>
        <translation>ブロックチェーンは保存できません:</translation>
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
        <translation>身長</translation>
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
        <translation>過ごした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952"/>
        <source>Enter password</source>
        <translation>パスワードを入力してください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6048"/>
        <source>Starting refresh...</source>
        <translation>更新を開始しています...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6070"/>
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>再スキャンが開始されてから新しい転送を受信しました。キー イメージが不完全です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077"/>
        <source>Refresh done, blocks received:</source>
        <translation>更新が完了し、ブロックを受信しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6085"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6428"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>デーモンはビジー状態です。しばらくしてからもう一度お試しください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4816"/>
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>RPCクライアントの秘密鍵は16進形式で32バイトである必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5535"/>
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>バックグラウンド マイニングを有効にすると、デーモンはアイドル状態でバッテリーが使用されていないときにマイニングを実行します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5657"/>
        <source>Error checking daemon RPC access prices</source>
        <translation>デーモン RPC アクセス価格のエラー チェック</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5663"/>
        <source>Error checking daemon RPC access prices:</source>
        <translation>デーモン RPC アクセス価格のチェック中にエラーが発生しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5759"/>
        <source>Failed to connect to daemon</source>
        <translation>デーモンへの接続に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771"/>
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>デーモン RPC クレジット/ハッシュは要求された値より少ないです。このデーモンは不正行為をしているか、最近設定を変更しました。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772"/>
        <source>Claimed:</source>
        <translation>主張:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5773"/>
        <source>Actual:</source>
        <translation>実際の：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6089"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6432"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>デーモンに接続されていません。デーモンが実行中であることを確認してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6436"/>
        <source>payment required.</source>
        <translation>支払いが必要です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6099"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6446"/>
        <source>RPC error:</source>
        <translation>RPC エラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6104"/>
        <source>refresh error:</source>
        <translation>更新エラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6109"/>
        <source>internal error:</source>
        <translation>内部エラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124"/>
        <source>refresh failed:</source>
        <translation>更新に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124"/>
        <source>Blocks received:</source>
        <translation>受信したブロック:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6153"/>
        <source>(Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation>(所有出力の一部には部分的なキー イメージがあります - import_multisig_info が必要です)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <source>Currently selected account: [</source>
        <translation>現在選択されているアカウント: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <source>]</source>
        <translation>]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158"/>
        <source>(No tag assigned)</source>
        <translation>(タグが割り当てられていません)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158"/>
        <source>Tag:</source>
        <translation>タグ：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6172"/>
        <source>unlocked balance:</source>
        <translation>ロック解除残高:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177"/>
        <source>Balance per address:</source>
        <translation>アドレスごとの残高:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <source>Address</source>
        <translation>住所</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Balance</source>
        <translation>バランス</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Unlocked balance</source>
        <translation>ロック解除された残高</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <source>Outputs</source>
        <translation>出力</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11612"/>
        <source>Label</source>
        <translation>ラベル</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6186"/>
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277"/>
        <source>pubkey</source>
        <translation>公開キー</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277"/>
        <source>key image</source>
        <translation>キー画像</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>spent</source>
        <translation>過ごした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>unlocked</source>
        <translation>ロック解除</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>ringct</source>
        <translation>リング</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>global index</source>
        <translation>グローバルインデックス</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>tx id</source>
        <translation>送信ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>addr index</source>
        <translation>アドレスインデックス</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6294"/>
        <source>Used at heights:</source>
        <translation>高所での使用:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <source>T</source>
        <translation>T</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <source>F</source>
        <translation>ふ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <source>locked</source>
        <translation>ロックされた</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <source>[frozen]</source>
        <translation>[凍った]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301"/>
        <source>RingCT</source>
        <translation>リングCT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6314"/>
        <source>No incoming transfers</source>
        <translation>転送の受信はありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318"/>
        <source>No incoming available transfers</source>
        <translation>利用可能な転送はありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322"/>
        <source>No incoming unavailable transfers</source>
        <translation>利用できない転送はありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>payment</source>
        <translation>支払い</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>transaction</source>
        <translation>取引</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>height</source>
        <translation>身長</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>unlock time</source>
        <translation>ロック解除時間</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6358"/>
        <source>No payments with id</source>
        <translation>IDによる支払いは不可</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6380"/>
        <source>payment ID has invalid format, expected 16 or 64 character hex string:</source>
        <translation>支払い ID の形式が無効です。16 文字または 64 文字の 16 進文字列が必要です:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6504"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7509"/>
        <source>failed to get blockchain height:</source>
        <translation>ブロックチェーンの高さを取得できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441"/>
        <source>failed to get spent status</source>
        <translation>使用済みステータスを取得できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6513"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
トランザクション %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6529"/>
        <source>failed to find construction data for tx input</source>
        <translation>tx入力の構築データが見つかりませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6553"/>
        <source>failed to get output:</source>
        <translation>出力を取得できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6561"/>
        <source>output key&#39;s originating block height shouldn&#39;t be higher than the blockchain height</source>
        <translation>出力キーの元のブロックの高さはブロックチェーンの高さより高くならない</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6566"/>
        <source>
Originating block heights:</source>
        <translation>
元のブロックの高さ:</translation>
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
警告: 使用されている入力キーの一部は</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594"/>
        <source>the same transaction</source>
        <translation>同じ取引</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594"/>
        <source>blocks that are temporally very close</source>
        <translation>時間的に非常に近いブロック</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6748"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741"/>
        <source>Ring size must not be 0</source>
        <translation>リングのサイズは0であってはなりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6760"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7473"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7753"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>リングのサイズ %u は小さすぎます。最小サイズは %u です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6765"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation>リングのサイズ %u は大きすぎます。最大値は %u です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772"/>
        <source>wrong number of arguments</source>
        <translation>引数の数が間違っています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6789"/>
        <source>payment id failed to encode</source>
        <translation>支払いIDのエンコードに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6808"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7502"/>
        <source>Locked blocks too high, max 1000000 (&tilde;4 yrs)</source>
        <translation>ロックされたブロックが多すぎます。最大 1000000 (4 年まで)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6856"/>
        <source>failed to parse short payment ID from URI</source>
        <translation>URI から短い支払い ID を解析できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6881"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883"/>
        <source>Invalid last argument:</source>
        <translation>最後の引数が無効です:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6901"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>1回の取引で複数の支払いIDを使用することはできません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation>支払いIDは検出されたものの、解析できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7004"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014"/>
        <source>Is this okay anyway?</source>
        <translation>それでも大丈夫でしょうか？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7009"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>現在、その料金レベルでは %u ブロックのバックログがあります。これでよろしいですか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7323"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7631"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>合計手数料 %s で %llu トランザクションの %s をスイープします。これでよろしいですか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7329"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7637"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7874"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>合計料金 %s で %s を掃除します。よろしいですか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7377"/>
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by &quot;rescan_spent&quot;.  Is this okay?</source>
        <translation>使用できない混合不可能な出力 %s を破棄しています。これは &quot;rescan_spent&quot; によって元に戻すことができます。これでよろしいですか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7522"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7767"/>
        <source>Failed to parse number of outputs</source>
        <translation>出力数を解析できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7527"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7772"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation>出力量は0より大きくなければなりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7551"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string:</source>
        <translation>支払い ID の形式が無効です。16 文字または 64 文字の 16 進文字列が必要です:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6803"/>
        <source>bad locked_blocks parameter:</source>
        <translation>不正なlocked_blocksパラメータ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7571"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7831"/>
        <source>a single transaction cannot use more than one payment id:</source>
        <translation>回の取引で複数の支払い ID を使用することはできません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7580"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7799"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7839"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>支払いIDの設定に失敗しましたが、正しくデコードされました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1170"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249"/>
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others&#39; multisig info</source>
        <translation>このマルチシグ情報を他のすべての参加者に送信し、 exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] を他のマルチシグ情報と共に使用します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1258"/>
        <source>Multisig wallet has been successfully created. Current wallet type:</source>
        <translation>マルチシグウォレットが正常に作成されました。現在のウォレットタイプ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264"/>
        <source>Failed to perform multisig keys exchange:</source>
        <translation>マルチシグキーの交換に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599"/>
        <source>Failed to load multisig transaction from MMS</source>
        <translation>MMS からマルチシグトランザクションをロードできませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2139"/>
        <source>Failed to mark output spent:</source>
        <translation>出力の使用済みをマークできませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2166"/>
        <source>Failed to mark output unspent:</source>
        <translation>出力を未使用としてマークできませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2190"/>
        <source>Spent:</source>
        <translation>過ごした：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192"/>
        <source>Not spent:</source>
        <translation>未使用:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2196"/>
        <source>Failed to check whether output is spent:</source>
        <translation>出力が使用されたかどうかの確認に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2385"/>
        <source>Please confirm the transaction on the device</source>
        <translation>デバイス上で取引を確認してください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091"/>
        <source>Device name not specified</source>
        <translation>デバイス名が指定されていません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100"/>
        <source>Device reconnect failed</source>
        <translation>デバイスの再接続に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105"/>
        <source>Device reconnect failed:</source>
        <translation>デバイスの再接続に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3619"/>
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>オプションの高さ範囲内での着信/発信転送を CSV にエクスポートします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627"/>
        <source>Rescan the blockchain from scratch. If &quot;hard&quot; is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>ブロックチェーンを最初から再スキャンします。「hard」が指定された場合、ブロックチェーン自体から回復できない情報はすべて失われます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3661"/>
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>署名されたキーイメージのセットを &lt;filename&gt; にエクスポートします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3669"/>
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>キーイメージをハードウェアウォレットと同期します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3692"/>
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>新しいランダムなフルサイズの支払い ID (廃止) を生成します。これらはブロックチェーン上で暗号化されません。暗号化された短い支払い ID については、integrated_address を参照してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3704"/>
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>追加のマルチシグキー交換ラウンドを実行します。任意のM/Nマルチシグウォレットに必要です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3736"/>
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>M/N = 必要な署名者数/承認された署名者数マルチシグ用にMMSを初期化して構成します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740"/>
        <source>Display current MMS configuration</source>
        <translation>現在のMMS設定を表示する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3744"/>
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>承認された署名者情報（単語ラベル、トランスポートアドレス、Salvium アドレス）を設定または変更するか、すべての署名者を一覧表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3748"/>
        <source>List all messages</source>
        <translation>すべてのメッセージを一覧表示する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3752"/>
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using &#39;sync&#39; processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>ウォレットの状態に応じて、次に実行可能なマルチシグ関連のアクションを評価し、実行または選択できるようにします
&#39;sync&#39;を使用すると、ウォレットの状態に関係なく、マルチシグ同期情報を含む待機メッセージの処理を強制できます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757"/>
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like &quot;stale data&quot; errors</source>
        <translation>「古いデータ」エラーなどの特殊な状況から回復するために、ウォレットの状態に関係なく、マルチシグ同期情報を強制的に生成します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3761"/>
        <source>Initiate transfer with MMS support; arguments identical to normal &#39;transfer&#39; command arguments, for info see there</source>
        <translation>MMS サポートで転送を開始します。引数は通常の「転送」コマンドの引数と同じです。詳細については、こちらを参照してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3765"/>
        <source>Delete a single message by giving its id, or delete all messages by using &#39;all&#39;</source>
        <translation>ID を指定して 1 つのメッセージを削除するか、&#39;all&#39; を使用してすべてのメッセージを削除します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3769"/>
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>IDを指定して単一のメッセージを送信するか、待機中のすべてのメッセージを送信します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3773"/>
        <source>Check right away for new messages to receive</source>
        <translation>受信する新しいメッセージをすぐに確認する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3777"/>
        <source>Write the content of a message to a file &quot;mms_message_content&quot;</source>
        <translation>メッセージの内容をファイル「mms_message_content」に書き込みます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3781"/>
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>ラベルで識別される承認された署名者に1行のメッセージを送信するか、待機中の未読のメモを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785"/>
        <source>Show detailed info about a single message</source>
        <translation>1つのメッセージに関する詳細情報を表示する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3789"/>
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
</source>
        <translation>使用可能なオプション:
 自動送信 &lt;1|0&gt;
 新しく生成されたメッセージをすぐに自動的に送信するかどうか。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795"/>
        <source>Send completed signer config to all other authorized signers</source>
        <translation>完了した署名者設定を他のすべての承認済み署名者に送信する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3799"/>
        <source>Start auto-config at the auto-config manager&#39;s wallet by issuing auto-config tokens and optionally set others&#39; labels</source>
        <translation>自動設定トークンを発行して自動設定マネージャーのウォレットで自動設定を開始し、必要に応じて他のラベルを設定します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3807"/>
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>自動構成トークンを削除し、自動構成プロセスを中止します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3811"/>
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>自動設定マネージャから受信したトークンを使用して自動設定を開始します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833"/>
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>出力を使用済みとしてマークして、リング内で偽の出力として選択されないようにする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837"/>
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>出力を未使用としてマークし、リング内の偽の出力として選択されるようにする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3841"/>
        <source>Checks whether an output is marked as spent</source>
        <translation>出力が使用済みとしてマークされているかどうかを確認します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4035"/>
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;デバイス名[:デバイス仕様]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4063"/>
        <source>wrong number range, use: %s</source>
        <translation>番号範囲が間違っています。%s を使用してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4168"/>
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>注意: 次の %s を使用すると、ウォレットへのアクセスを回復できます。これらを書き留めて、安全な場所に保管してください。直接管理できないメールやファイル ストレージ サービスには保存しないでください。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170"/>
        <source>string</source>
        <translation>弦</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170"/>
        <source>25 words</source>
        <translation>25語</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4593"/>
        <source>Secret spend key (%u of %u)</source>
        <translation>シークレット支出キー (%u / %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4670"/>
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>すでに設定されているアカウントを特定の高さから復元する場合は、--restore-height または --restore-date を使用します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4672"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4760"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7119"/>
        <source>Is this okay?</source>
        <translation>これでいいですか？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4783"/>
        <source>Still apply restore height?</source>
        <translation>復元高さをまだ適用しますか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4964"/>
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>選択した言語に対応する番号を入力してください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5967"/>
        <source>Device requires attention</source>
        <translation>デバイスに注意が必要です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5973"/>
        <source>Enter device PIN</source>
        <translation>デバイスのPINを入力してください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5975"/>
        <source>Failed to read device PIN</source>
        <translation>デバイスのPINの読み取りに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5985"/>
        <source>Please enter the device passphrase on the device</source>
        <translation>デバイスにデバイスパスフレーズを入力してください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5992"/>
        <source>Enter device passphrase</source>
        <translation>デバイスのパスフレーズを入力してください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5994"/>
        <source>Failed to read device passphrase</source>
        <translation>デバイスのパスフレーズの読み取りに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6018"/>
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed.</source>
        <translation>受け取ったお金で HW ベースのウォレットの最初の更新が完了しました。hw_key_images_sync が必要です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5537"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020"/>
        <source>Do you want to do it now? (Y/Yes/N/No):</source>
        <translation>今実行しますか? (Y/はい/N/いいえ):</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2366"/>
        <source>Unknown command &#39;%s&#39;, try &#39;help&#39;</source>
        <translation>不明なコマンド &#39;%s&#39;、&#39;help&#39; を試してください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3040"/>
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Windows で非アクティブ ロック タイムアウトが無効になっています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3054"/>
        <source>Invalid number of seconds</source>
        <translation>秒数が無効です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116"/>
        <source>Export format not specified</source>
        <translation>エクスポート形式が指定されていません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3130"/>
        <source>Export format not recognized.</source>
        <translation>エクスポート形式が認識されません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3482"/>
        <source>Display the restore height</source>
        <translation>復元高さを表示</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3857"/>
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>ウォレットコンソールをロックし、続行するにはウォレットパスワードが必要です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4033"/>
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>符号なし整数（秒、無効にする場合は 0）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036"/>
        <source>&quot;binary&quot; or &quot;ascii&quot;</source>
        <translation>&quot;binary&quot; または &quot;ascii&quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4824"/>
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>警告: %s で信頼できないデーモンを使用しています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4825"/>
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>サードパーティのデーモンを使用すると、セキュリティとプライバシーに悪影響を与える可能性があります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4828"/>
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>SSLなしで独自のものを使用すると、RPCトラフィックが監視対象になります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4829"/>
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>独自のデーモンを使用してSalviumネットワークに接続することを強くお勧めします</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4830"/>
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>あなたまたはあなたが信頼する誰かがこのデーモンを操作している場合は、--trusted-daemonを使用できます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4837"/>
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>さらに、デーモンはブートストラップモードで実行されている場合も安全性が低くなります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850"/>
        <source>If you are new to Salvium, type &quot;welcome&quot; for a brief overview.</source>
        <translation>Salvium を初めてご利用になる場合は、「welcome」と入力して簡単な概要をご覧ください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5003"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5101"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5149"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5192"/>
        <source>Error creating wallet:</source>
        <translation>ウォレットの作成中にエラーが発生しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477"/>
        <source>Failed to query mining status:</source>
        <translation>マイニングステータスの照会に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5488"/>
        <source>Failed to setup background mining:</source>
        <translation>バックグラウンドマイニングの設定に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5464"/>
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>バックグラウンドマイニングが有効になりました。Salvium ネットワークをサポートしていただきありがとうございます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5492"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5500"/>
        <source>Background mining not enabled. Run &quot;set setup-background-mining 1&quot; to change.</source>
        <translation>バックグラウンド マイニングが有効になっていません。変更するには、「set setup-background-mining 1」を実行してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5506"/>
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>信頼できないデーモンを使用して、バックグラウンドマイニングチェックをスキップする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5534"/>
        <source>The daemon is not set up to background mine.</source>
        <translation>デーモンはバックグラウンドで実行するように設定されていません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5541"/>
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>バックグラウンド マイニングが有効になっていません。変更するには、setup-background-mining を 1 に設定してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5903"/>
        <source>NOTE: This transaction is locked, see details with: show_transfer</source>
        <translation>注意: この取引はロックされています。詳細は show_transfer で確認してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6022"/>
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>hw_key_images_sync はスキップされました。転送前にコマンドを手動で実行してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6247"/>
        <source>Invalid keyword:</source>
        <translation>無効なキーワード:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6535"/>
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
%llu/%llu (%s) を入力してください: 量=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628"/>
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>トランザクションは複数の非常に古い出力を使用します。別々に送信するとプライバシーが向上します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6629"/>
        <source>Spend them now anyway?</source>
        <translation>とにかく今使ってみますか？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6871"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8465"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9215"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9784"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9792"/>
        <source>amount is wrong:</source>
        <translation>金額が間違っています:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6872"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8465"/>
        <source>expected number from 0 to</source>
        <translation>0から予想される数値</translation>
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
        <translation>取引はキャンセルされました。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6981"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7595"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>出力が見つからないか、デーモンの準備ができていません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2343"/>
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>Bitcoin とは異なり、Salvium の取引と残高は非公開のままであり、デフォルトでは世界に公開されません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2344"/>
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>ただし、必要に応じて、特定の当事者にそれらを公開することもできます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5895"/>
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>注意: この取引では暗号化された支払いIDを使用します。代わりにサブアドレスの使用を検討してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5900"/>
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>警告: このトランザクションでは暗号化されていない支払い ID が使用されています。これらは古いため無視されます。代わりにサブアドレスを使用してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014"/>
        <source>Failed to check for backlog:</source>
        <translation>バックログの確認に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7063"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7617"/>
        <source>
Transaction</source>
        <translation>
トランザクション</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7070"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7624"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>警告: 複数のアドレスの出力が一緒に使用されているため、プライバシーが侵害される可能性があります。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093"/>
        <source>.</source>
        <translation>。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7139"/>
        <source>Unsigned transaction(s) successfully written to MMS</source>
        <translation>署名されていないトランザクションが MMS に正常に書き込まれました</translation>
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
        <translation>トランザクションをファイルに書き込めませんでした</translation>
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
        <translation>署名されていないトランザクションがファイルに正常に書き込まれました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7161"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7674"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7909"/>
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>HW ウォレットでコールドサイントランザクションに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7308"/>
        <source>No unmixable outputs found</source>
        <translation>混合できない出力が見つかりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Sweeping</source>
        <translation>掃除</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8476"/>
        <source>Failed to parse donation address:</source>
        <translation>寄付アドレスの解析に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8492"/>
        <source>Donating %s %s to %s.</source>
        <translation>%s %s を %s に寄付します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8640"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>%lu 件のトランザクションを、%s、手数料 %s、%s、%s、最小リング サイズ %lu、%s で読み込みました。%sこれでよろしいですか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>direction</source>
        <translation>方向</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>timestamp</source>
        <translation>タイムスタンプ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>running balance</source>
        <translation>ランニングバランス</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>hash</source>
        <translation>ハッシュ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>payment ID</source>
        <translation>支払いID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>fee</source>
        <translation>手数料</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>destination</source>
        <translation>行き先</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>index</source>
        <translation>索引</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>note</source>
        <translation>注記</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9756"/>
        <source>CSV exported to</source>
        <translation>CSVをエクスポート</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9941"/>
        <source>Rescan anyway?</source>
        <translation>とにかく再スキャンしますか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9952"/>
        <source>Warning: your restore height is higher than wallet restore height:</source>
        <translation>警告: 復元の高さがウォレットの復元の高さよりも高くなっています:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9953"/>
        <source>Rescan anyway ? (Y/Yes/N/No):</source>
        <translation>それでも再スキャンしますか? (Y/はい/N/いいえ):</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9974"/>
        <source>MMS received new message</source>
        <translation>MMS に新しいメッセージが受信されました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10143"/>
        <source>locked due to inactivity</source>
        <translation>非アクティブのためロックされています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10545"/>
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;index&gt; は範囲外です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10821"/>
        <source>Normal</source>
        <translation>普通</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10822"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11670"/>
        <source>Type:</source>
        <translation>タイプ：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6680"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10823"/>
        <source>Network type:</source>
        <translation>ネットワークタイプ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1402"/>
        <source>Multisig info imported. Number of outputs updated:</source>
        <translation>マルチシグ情報がインポートされました。出力数が更新されました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1750"/>
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>キー画像は未使用、またはリングサイズ1で使用済み</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334"/>
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>これらのノードのほとんどはおそらくスパイです。TorまたはI2P経由で接続しない限り、使用しないでください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340"/>
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>新しく改良されたプライベート暗号通貨、Salvium へようこそ。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2352"/>
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>Salvium とコンプライアンス準拠の金融プライバシーへようこそ。詳細については、https://salvium.io をご覧ください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2471"/>
        <source>invalid index: must be an unsigned integer</source>
        <translation>無効なインデックス: 符号なし整数である必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2476"/>
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt; は範囲外です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514"/>
        <source>Failed to generate QR code, input too large</source>
        <translation>QRコードを生成できませんでした。入力が大きすぎます</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3167"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3186"/>
        <source>Value not specified</source>
        <translation>値が指定されていません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3157"/>
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>警告: 非推奨のフォーマットは、バッファ オーバーフローとクラッシュを引き起こす boost シリアル化を使用します。信頼できるソースからのみ非推奨のフォーマットを読み込んでください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3206"/>
        <source>Important commands:</source>
        <translation>重要なコマンド:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3208"/>
        <source>&quot;welcome&quot; - Show welcome message.</source>
        <translation>「ようこそ」 - ようこそメッセージを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3209"/>
        <source>&quot;help all&quot; - Show the list of all available commands.</source>
        <translation>&quot;help all&quot; - 使用可能なすべてのコマンドのリストを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3210"/>
        <source>&quot;help &lt;command&gt;&quot; - Show a command&#39;s documentation.</source>
        <translation>&quot;help &lt;command&gt;&quot; - コマンドのドキュメントを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3211"/>
        <source>&quot;apropos &lt;keyword&gt;&quot; - Show commands related to a keyword.</source>
        <translation>&quot;apropos &lt;keyword&gt;&quot; - キーワードに関連するコマンドを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213"/>
        <source>&quot;wallet_info&quot; - Show wallet main address and other info.</source>
        <translation>&quot;wallet_info&quot; - ウォレットのメインアドレスとその他の情報を表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3214"/>
        <source>&quot;balance&quot; - Show balance.</source>
        <translation>「バランス」 - バランスを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3215"/>
        <source>&quot;address all&quot; - Show all addresses.</source>
        <translation>「address all」 - すべてのアドレスを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3216"/>
        <source>&quot;address new&quot; - Create new subaddress.</source>
        <translation>「address new」 - 新しいサブアドレスを作成します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3217"/>
        <source>&quot;transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]&quot; - Send SAL to an address.</source>
        <translation>&quot;transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]&quot; - SAL をアドレスに送信します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218"/>
        <source>&quot;return_payment &lt;tx_hash&gt;&quot; - Return a previously-received amount to sender.</source>
        <translation>&quot;return_payment &lt;tx_hash&gt;&quot; - 以前に受け取った金額を送信者に返します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3219"/>
        <source>&quot;burn &lt;amount&gt; &lt;asset_type&gt;&quot; - destroy coins forever.</source>
        <translation>&quot;burn &lt;amount&gt; &lt;asset_type&gt;&quot; - コインを永久に破壊します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3220"/>
        <source>&quot;convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]&quot; - convert between coin types.</source>
        <translation>&quot;convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]&quot; - コインタイプを変換します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221"/>
        <source>&quot;stake &lt;amount&gt;&quot; - stake SAL for 30 days to earn yield.</source>
        <translation>&quot;stake &lt;amount&gt;&quot; - 利回りを得るために 30 日間 SAL をステークします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3222"/>
        <source>&quot;price_info&quot; - Display current pricing information for supported assets.</source>
        <translation>&quot;price_info&quot; - サポートされているアセットの現在の価格情報を表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3223"/>
        <source>&quot;supply_info&quot; - Display circulating supply information.</source>
        <translation>&quot;supply_info&quot; - 循環供給情報を表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3224"/>
        <source>&quot;yield_info&quot; - Display current stats on Salvium staking / yield.</source>
        <translation>&quot;yield_info&quot; - Salvium ステーキング/利回りの現在の統計を表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3225"/>
        <source>&quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&quot; - Show transactions.</source>
        <translation>&quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&quot; - トランザクションを表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3226"/>
        <source>&quot;sweep_all &lt;address&gt;&quot; - Send whole balance to another wallet.</source>
        <translation>&quot;sweep_all &lt;address&gt;&quot; - 残高全体を別のウォレットに送信します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3227"/>
        <source>&quot;seed&quot; - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>「seed」 - このウォレットを復元するために使用できる秘密の 25 個の単語を表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3228"/>
        <source>&quot;refresh&quot; - Synchronize wallet with the Salvium network.</source>
        <translation>「更新」 - ウォレットをSalviumネットワークと同期します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3229"/>
        <source>&quot;status&quot; - Check current status of wallet.</source>
        <translation>&quot;status&quot; - ウォレットの現在のステータスを確認します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3230"/>
        <source>&quot;version&quot; - Check software version.</source>
        <translation>「バージョン」 - ソフトウェアのバージョンを確認します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3231"/>
        <source>&quot;exit&quot; - Exit wallet.</source>
        <translation>「exit」 - ウォレットを終了します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233"/>
        <source>&quot;donate &lt;amount&gt;&quot; - Donate SAL to the development team.</source>
        <translation>&quot;donate &lt;amount&gt;&quot; - 開発チームに SAL を寄付します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263"/>
        <source>No commands found mentioning keyword(s)</source>
        <translation>キーワードを指定したコマンドが見つかりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3293"/>
        <source>Invalid txid specified:</source>
        <translation>無効な txid が指定されました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300"/>
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>警告: この操作により、txid がリモート ノードに公開され、プライバシーが侵害される可能性があります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3302"/>
        <source>You have canceled the operation</source>
        <translation>操作をキャンセルしました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3347"/>
        <source>Set another daemon to connect to. If it&#39;s not yours, it&#39;ll probably spy on you.</source>
        <translation>接続する別のデーモンを設定します。それが自分のデーモンでない場合は、おそらくあなたをスパイするでしょう。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3373"/>
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&#39;s included). The &quot;subtractfeefrom=&quot; list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: &quot;transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2&quot;. Let&#39;s say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use &quot;subtractfeefrom=all&quot; to spread the fee across all destinations.</source>
        <translation>&lt;asset_type&gt; の &lt;amount&gt; を &lt;address&gt; に転送します。パラメータ &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; が指定されている場合、ウォレットはそれらのインデックスのアドレスによって受信された出力を使用します。省略されている場合、ウォレットは使用するアドレス インデックスをランダムに選択します。いずれの場合も、複数のアドレスにまたがる出力を結合しないように最善を尽くします。 &lt;priority&gt; はトランザクションの優先度です。優先度が高いほど、トランザクション手数料が高くなります。優先度順 (最低から最高) の有効な値は、unimportant、normal、elevated、priority です。省略されている場合は、デフォルト値 (コマンド &quot;set priority&gt; を参照) が使用されます。 &lt;ring_size&gt; は追跡不可能にするために含める入力の数です。URI_2 または &lt;address_2&gt; &lt;amount_2&gt; を追加することで、一度に複数の支払いを行うことができます。など（支払い ID が含まれている場合は、その前）。「subtractfeefrom=」リストを使用すると、お釣りの出力の代わりに、どの送金先から送金手数料を賄うかを選択できます。手数料は、選択した送金先に均等に比例配分されます。たとえば、手数料が最初の送金先と 3 番目の送金先から取られる 3 回の送金を行うには、「transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2」とします。送金手数料が 0.1 だとします。手数料を含めて残高はちょうど 4.5 SAL 減少し、addr1 と addr3 はそれぞれ 2.925 と 0.975 SAL を受け取ります。手数料をすべての送金先に分散するには、「subtractfeefrom=all」を使用します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>ロックされていない残高をすべてアドレスに送信し、&lt;lockblocks&gt; の間ロックします (最大 1000000)。パラメータ &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; または &quot;index=all&quot; が指定されている場合、ウォレットはそれぞれそれらのアドレス インデックスまたはすべてのアドレス インデックスで受信した出力をスイープします。省略されている場合、ウォレットは使用するアドレス インデックスをランダムに選択します。&lt;priority&gt; はスイープの優先度です。優先度が高いほど、トランザクション手数料が高くなります。優先度順 (最低から最高) の有効な値は、unimportant、normal、elevated、priority です。省略されている場合は、デフォルト値 (コマンド &quot;set priority&quot; を参照) が使用されます。&lt;ring_size&gt; は追跡不可能にするために含める入力の数です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3387"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>すべてのロック解除された残高をアドレスに送信します。パラメータ「index=<N1>[,<N2>,...]」または「index=all」が指定されている場合、ウォレットはそれぞれそれらのアドレス インデックスまたはすべてのアドレス インデックスで受信した出力をスイープします。省略されている場合、ウォレットは使用するアドレス インデックスをランダムに選択します。パラメータ「outputs=<N>」が指定され、N > 0 の場合、ウォレットはトランザクションを N 個の均等な出力に分割します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3390"/>
        <source>Send all unlocked balance from a given account to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>指定されたアカウントのロック解除された残高をすべてアドレスに送信します。パラメータ「index=<N1>[,<N2>,...]」または「index=all」が指定されている場合、ウォレットはそれぞれそれらのアドレス インデックスまたはすべてのアドレス インデックスで受信した出力をスイープします。省略されている場合、ウォレットは使用するアドレス インデックスをランダムに選択します。パラメータ「outputs=<N>」が指定され、N > 0 の場合、ウォレットはトランザクションを N 個の均等な出力に分割します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402"/>
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>TX &lt;tx_hash&gt; で受け取った支払いを元の送信者に返します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406"/>
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>&lt;amount&gt; の &lt;asset_type&gt; を永久に破壊 (焼却) します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410"/>
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>オプションの &lt;slippage_limit&gt; を使用して、&lt;amount&gt; &lt;source_asset&gt; を &lt;dest_asset&gt; に変換します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414"/>
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>利回りを得るためにSALの&lt;量&gt;をステークとしてロックする</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418"/>
        <source>Displays the current exchange rate information for SAL &lt;--&gt; VSD conversions</source>
        <translation>SAL &lt;--&gt; VSD 変換の現在の為替レート情報を表示します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3422"/>
        <source>Displays the current circulating supply information for SAL and VSD currencies</source>
        <translation>SALおよびVSD通貨の現在の流通供給情報を表示します</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426"/>
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>過去 NN ブロックの利回りの統計を表示します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430"/>
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>開発チームに &lt;amount&gt; を寄付してください (donate.salvium.io)。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3434"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default &quot;unsigned_monero_tx&quot; will be used.</source>
        <translation>ファイルからトランザクションに署名します。パラメータ「export_raw」が指定されている場合、デーモン RPC /sendrawtransaction に適したトランザクションの生の 16 進データがエクスポートされます。
パラメータ「filename」を使用して、読み取り元のファイルを指定します。指定されていない場合は、デフォルトの「unsigned_monero_tx」が使用されます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3456"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;mnew&quot; is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If &quot;one-off&quot; is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>引数が指定されていないか、&lt;index&gt; が指定されている場合、ウォレットはデフォルトまたは指定されたアドレスを表示します。&quot;all&quot; が指定されている場合、ウォレットは現在選択されているアカウントの既存のアドレスをすべて表示します。&quot;new&quot; が指定されている場合、ウォレットは指定されたラベル テキスト (空でも可) で新しいアドレスを作成します。&quot;mnew&quot; が指定されている場合、ウォレットは引数で指定された数の新しいアドレスを作成し、新しいアドレスにはデフォルトのラベルが設定されます。&quot;label&quot; が指定されている場合、ウォレットは &lt;index&gt; で指定されたアドレスのラベルを指定されたラベル テキストに設定します。&quot;one-off&quot; が指定されている場合、指定されたインデックスのアドレスが生成されて表示され、ウォレットによって記憶されます。</translation>
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
        <translation>使用可能なオプション:
 seed language
 ウォレットのシード言語を設定します。
 always-confirm-transfers &lt;1|0&gt;
 分割されていないトランザクションを確認するかどうか。
 print-ring-members &lt;1|0&gt;
 確認中にリング メンバーに関する詳細情報を出力するかどうか。
 store-tx-info &lt;1|0&gt;
 送信トランザクション情報 (送信先アドレス、支払い ID、トランザクション シークレット キー) を将来の参照用に保存するかどうか。
 auto-refresh &lt;1|0&gt;
 デーモンからの新しいブロックを自動的に同期するかどうか。
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default&gt;
 ウォレットの更新動作を設定します。
 priority [0|1|2|3|4]
 手数料を default/unimportant/normal/elevated/priority に設定します。
 confirm-missing-payment-id &lt;1|0&gt; (廃止)
 ask-password &lt;0|1|2 (または never|action|decrypt)&gt;
 action: transfer などの多くのアクションの前にパスワードを尋ねます
 decrypt: action と同じですが、不要な場合はメモリ内に暗号化された消費キーを保持します
 unit &lt;sal|millisal|microsal&gt;
 デフォルトの salvium (サブ) 単位を設定します。
 min-outputs-count [n]
 min-outputs-value 以上の出力を少なくともその数だけ保持しようとします。
 min-outputs-value [n]
 min-outputs-count 以上の出力を少なくともその値だけ保持しようとします。
 merge-destinations &lt;1|0&gt;
 複数の支払いを同じ宛先アドレスにマージするかどうか。
 confirm-backlog &lt;1|0&gt;
 トランザクションのバックログがある場合に警告するかどうか。
 confirm-backlog-threshold [n]
 警告のみを行うための confirm-backlog のしきい値を設定しますトランザクション バックログが n ブロックより大きい場合。
 confirm-export-overwrite &lt;1|0&gt;
 エクスポートするファイルがすでに存在する場合に警告するかどうか。
 refresh-from-block-height [n]
 ブロックを無視する高さを設定します。
 auto-low-priority &lt;1|0&gt;
 安全な場合に低優先度料金レベルを自動的に使用するかどうか。
 segregate-pre-fork-outputs &lt;1|0&gt;
 出力を Salvium とキー再利用フォークの両方に使用する場合はこれを設定します。
 key-reuse-mitigation2 &lt;1|0&gt;
 後でキー再利用 Salvium フォークに使用するかどうかわからない場合はこれを設定します。
 subaddress-lookahead &lt;major&gt;:&lt;minor&gt;
 サブアドレス ハッシュ テーブルの先読みサイズを設定します。
 segregation-height &lt;n&gt;
 使用するキー再利用フォークの高さに設定します。デフォルトを使用する場合は 0 です。
 ignore-fractional-outputs &lt;1|0&gt;
 手数料により支出時に純損失となる小数出力を無視するかどうか。
 ignore-outputs-above &lt;amount&gt;
 支出時にこのしきい値を超える出力を無視します。値 0 は最大値 (1800 万) に変換され、このフィルターが無効になります。
 ignore-outputs-below &lt;amount&gt;
 支出時にこのしきい値を下回る出力を無視します。
 track-uses &lt;1|0&gt;
 所有出力の使用を追跡するかどうか。
 setup-background-mining &lt;1|0&gt;
 バックグラウンド マイニングを有効にするかどうか。ネットワークをサポートし、新しい Salvium を受け取るチャンスを得るためにこれを設定します。
 device-name &lt;device_name[:device_spec]&gt;
 ハードウェア ウォレットのデバイス名。
 export-format &lt;&quot;binary&quot;|&quot;ascii&quot;&gt;
 エクスポートされたすべてのファイルをバイナリ (コピーして貼り付けることはできません) または ASCII (コピーして貼り付けることができます) として保存します。
 persistent-rpc-client-id &lt;1|0&gt;
 ウォレットの再起動後も RPC 支払いに同じクライアント ID を使い続けるかどうか。
auto-mine-for-rpc-payment-threshold &lt;float&gt;
 デーモンが要求した場合に RPC 支払いのマイニングを自動的に開始するかどうか。
credits-target &lt;unsigned int&gt;
 RPC 支払いのクレジット残高 (デフォルトは 0)。
 show-wallet-name-when-locked &lt;1|0&gt;
ロック時にウォレット名を表示します。
 enable-multisig-experimental &lt;1|0&gt;
 マルチシグコマンドを許可するにはこれを設定します。現在、マルチシグは、当事者がお互いを信頼していない場合、悪用される可能性があります。
 inactivity-lock-timeout &lt;unsigned int&gt;
 ウォレットをロックするまでの待機秒数 (無効にするには 0)。
freeze-incoming-payments &lt;1|0&gt;
 誤って使用されないように、着信支払いを自動的に凍結するかどうか。</translation>
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
        <translation>オプションの高さ範囲内で着信/発信転送を表示します。

出力形式:
In または Coinbase: ブロック番号、「block」|「in」、時間、金額、資産タイプ、トランザクション ハッシュ、支払い ID、サブアドレス インデックス、「-」、注記
Out: ブロック番号、「out」、時間、金額*、資産タイプ、トランザクション ハッシュ、支払い ID、手数料、宛先、入力アドレス**、「-」、注記
プール: 「pool」、 「in」、時間、金額、資産タイプ、トランザクション ハッシュ、支払い ID、サブアドレス インデックス、「-」、注記、二重支払い注記
保留中または失敗: 「failed」|「pending」、 「out」、時間、金額*、トランザクション ハッシュ、支払い ID、手数料、入力アドレス**、 &quot;-&quot;、注記
ステークまたはバーン: ブロック番号、&quot;out&quot;、時間、金額*、資産タイプ、トランザクションハッシュ、支払い ID、手数料、入力アドレス**、&quot;-&quot;、注記

* お釣りと手数料は除きます。
** この転送で入力として使用されるアドレスインデックスのセット。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618"/>
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653"/>
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>指定されたサブアドレス（指定されていない場合はメインアドレス）でファイルの内容に署名します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3728"/>
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>MMS (マルチシグ メッセージング システム) とのインターフェイス
&lt;サブコマンド&gt; は次のいずれかです:
 init、info、signer、list、next、sync、transfer、delete、send、receive、export、note、show、set、help
 send_signer_config、start_auto_config、stop_auto_config、auto_config、config_checksum
サブコマンドに関するヘルプを取得するには、help mms &lt;サブコマンド&gt; または help mms &lt;サブコマンド&gt; を使用します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3803"/>
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>署名者がMMS構成が同一かどうかを簡単に確認できるチェックサムを取得します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889"/>
        <source>Show address as QR code</source>
        <translation>住所をQRコードで表示</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3897"/>
        <source>Search all command descriptions for keyword(s)</source>
        <translation>すべてのコマンドの説明をキーワードで検索</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3901"/>
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>&lt;txid&gt;で指定されたトランザクションをスキャンし、処理して出力を探します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014"/>
        <source>sal, millisal, microsal</source>
        <translation>サル、ミリサル、ミクロサル</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032"/>
        <source>1 or 0</source>
        <translation>1または0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4257"/>
        <source>Multisig is disabled.</source>
        <translation>マルチシグは無効です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4258"/>
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can&#39;t be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>マルチシグは実験的な機能であり、バグがある可能性があります。問題が発生する可能性のある状況としては、マルチシグ ウォレットに送信された資金がまったく使用できない、悪意のあるグループ メンバーの参加がある場合にのみ使用できる、または悪意のあるグループ メンバーによって盗まれる、などが挙げられます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4260"/>
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>マルチシグウォレットの復元をキャンセルしました。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4915"/>
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>ウォレットはオフラインモードに設定されているため、デーモンに接続できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4917"/>
        <source>wallet failed to connect to daemon, because it is not up to date.</source>
        <translation>ウォレットは最新ではないため、デーモンに接続できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4918"/>
        <source>Please make sure you are running the latest wallet.</source>
        <translation>最新のウォレットを実行していることを確認してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4921"/>
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the &#39;set_daemon&#39; command.</source>
        <translation>デーモンは最新ではありません。デーモンが最新バージョンを実行していることを確認するか、&#39;set_daemon&#39; コマンドを使用してデーモンのアドレスを変更してください。</translation>
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
        <translation>ウォレットが生成されました!
デーモンとの同期を開始するには、「refresh」コマンドを使用します。
使用可能なコマンドの簡略化されたリストを表示するには、「help」コマンドを使用します。
使用可能なすべてのコマンドのリストを表示するには、「help all」コマンドを使用します。
コマンドのドキュメントを表示するには、「help &lt;command&gt;」を使用します。
現在のセッションの状態を保存するために、salvium-wallet-cli を閉じるときは常に「exit」コマンドを使用してください。そうしないと、ウォレットを再度同期する必要がある場合があります (ウォレット キーはいずれの場合も危険にさらされません)。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5348"/>
        <source>Use the &quot;help&quot; command to see a simplified list of available commands.
</source>
        <translation>使用可能なコマンドの簡略化されたリストを表示するには、「help」コマンドを使用します。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5349"/>
        <source>Use &quot;help all&quot; to see the list of all available commands.
</source>
        <translation>使用可能なすべてのコマンドのリストを表示するには、「help all」を使用します。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5536"/>
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>これを有効にすると、使用しているネットワークがサポートされ、新しいSALを受け取る資格が得られます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703"/>
        <source>Failed to parse address</source>
        <translation>アドレスの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5718"/>
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got</source>
        <translation>信頼済み、信頼されていない、またはスパイノードである可能性があると予想されました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5727"/>
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>これは Tor/I2P アドレスではなく、信頼できるデーモンでもありません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5728"/>
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>独自の信頼できるノードを使用するか、Tor または I2P 経由で接続するか、またはおそらくスパイノードを渡してスパイされるかのいずれかです。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5733"/>
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>警告: SSL を使用せずに非ローカルデーモンに接続すると、受動的な敵があなたをスパイできるようになります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5836"/>
        <source>stake returned</source>
        <translation>返還されたステーク</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5842"/>
        <source>yield earned</source>
        <translation>獲得した収益</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5853"/>
        <source>burnt</source>
        <translation>焼けた</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5858"/>
        <source>converting</source>
        <translation>変換する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5863"/>
        <source>staked</source>
        <translation>賭けた</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5982"/>
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>デバイスがパスフレーズを要求します。デバイス (Y) (またはホスト (N)) でパスフレーズを入力しますか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005"/>
        <source>The wallet&#39;s refresh-from-block-height setting is higher than the daemon&#39;s height: this may mean your wallet will skip over transactions</source>
        <translation>ウォレットのブロック高さのリフレッシュ設定がデーモンの高さよりも高いため、ウォレットがトランザクションをスキップする可能性があります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6155"/>
        <source>(Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation>(所有出力の一部にキー イメージが欠落しています - export_outputs、import_outputs、export_key_images、import_key_images が必要です)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171"/>
        <source>Asset:</source>
        <translation>資産：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10339"/>
        <source>, balance:</source>
        <translation>、 バランス：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6494"/>
        <source>failed to connect to daemon</source>
        <translation>デーモンへの接続に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6595"/>
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>、これはリング署名の匿名性を破る可能性があります。これは意図的なものであることを確認してください!
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653"/>
        <source>I locked your Salvium wallet to protect you while you were away
see &quot;help set&quot; to configure/disable</source>
        <translation>あなたが留守の間、あなたを守るためにSalviumウォレットをロックしました
設定/無効化については「ヘルプ設定」をご覧ください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6673"/>
        <source>Locked due to inactivity.</source>
        <translation>非アクティブのためロックされています。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6674"/>
        <source>The wallet password is required to unlock the console.</source>
        <translation>コンソールのロックを解除するにはウォレットのパスワードが必要です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6681"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10824"/>
        <source>Testnet</source>
        <translation>テストネット</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10825"/>
        <source>Stagenet</source>
        <translation>ステージネット</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10825"/>
        <source>Mainnet</source>
        <translation>メインネット</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073"/>
        <source>Burning %s %s.</source>
        <translation>%s %s を書き込み中。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7075"/>
        <source>Converting %s %s to %s.</source>
        <translation>%s %s を %s に変換しています。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7077"/>
        <source>Staking %s %s for yield accrual.</source>
        <translation>利回り獲得のために %s %s をステーキングします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7079"/>
        <source>Sending %s %s.</source>
        <translation>%s %s を送信しています。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7098"/>
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>
このトランザクション (%s の変更を含む) は、%llu ブロック、約 %s 日でロック解除されます (ブロックあたり 2 分と想定)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975"/>
        <source>Invalid account</source>
        <translation>無効なアカウント</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8006"/>
        <source>return_payments are disabled</source>
        <translation>return_payments は無効です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8042"/>
        <source>incorrect TX type for txid</source>
        <translation>txid の TX タイプが正しくありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8048"/>
        <source>invalid return_address/return_pubkey for txid</source>
        <translation>txid の return_address/return_pubkey が無効です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8065"/>
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid</source>
        <translation>txid のキー イメージが利用できません (部分的 / 不明 / 使用済み / 凍結済み)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8097"/>
        <source>Returning %s for a total fee of %s.  Is this okay?</source>
        <translation>合計料金 %s で %s を返品します。よろしいですか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8127"/>
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>返送TXのコールド署名はまだ実装されていません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8217"/>
        <source>conversions are disabled until hard fork</source>
        <translation>ハードフォークまで変換は無効です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8224"/>
        <source>missing / extraneous argument(s)</source>
        <translation>欠落している/不要な引数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8240"/>
        <source>invalid slippage_limit value : expected 0.0-90.0, got</source>
        <translation>無効なslippage_limit値: 0.0-90.0が期待されましたが、</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8251"/>
        <source>invalid argument(s):</source>
        <translation>無効な引数:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8257"/>
        <source>out of range for slippage limit:</source>
        <translation>スリッページ制限の範囲外:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8267"/>
        <source>invalid destination asset_type</source>
        <translation>無効な宛先アセットタイプ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8277"/>
        <source>invalid source asset_type</source>
        <translation>無効なソースアセットタイプ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8286"/>
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>無効な変換 - asset_type は変更されていません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8343"/>
        <source>%s
	SPOT:	%d
	MA:	%d</source>
        <translation>%s
	スポット:	%d
	MA:	%d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8367"/>
        <source>SUPPLY INFO</source>
        <translation>供給情報</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8378"/>
        <source>	%6s : %21.8d</source>
        <translation>	%6秒: %21.8日</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8405"/>
        <source>
STAKED FUNDS:</source>
        <translation>
ステークされた資金:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8411"/>
        <source>Height %d, txid %s, staked %s SAL, earned %s SAL</source>
        <translation>高さ %d、txid %s、賭けた SAL %s、獲得した SAL %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8417"/>
        <source>Height %d, txid %s, staked %s SAL, %s SAL accrued so far</source>
        <translation>高さ %d、txid %s、ステークされた SAL %s、これまでに蓄積された SAL %s</translation>
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
利回り情報:
	過去 %s にバーンされた供給コイン: %d
	ロックされたコインの合計: %d
	過去 %s に発生した利回り: %d
	ステークされた SAL あたりの利回り: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8490"/>
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>%s %s を The Salvium Team (donate.salvium.io または %s) に寄付します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8841"/>
        <source>Last argument is an address, but not a subaddress</source>
        <translation>最後の引数はアドレスですが、サブアドレスではありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8895"/>
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>転送先がサブアドレスだったためかもしれません。その場合は、サブアドレスを最後に渡してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9590"/>
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>使用方法: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9649"/>
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>使用方法: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>tx key</source>
        <translation>送信キー</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10338"/>
        <source>
Grand total:
  Asset:</source>
        <translation>
合計:
 資産:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Asset</source>
        <translation>資産</translation>
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
        <translation>%15秒 %21秒 %21秒 %15秒</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10447"/>
        <source>Expected exactly one argument for the amount of new addresses</source>
        <translation>新しいアドレスの数を表す引数が 1 つだけ必要です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10453"/>
        <source>failed to parse the amount of new addresses:</source>
        <translation>新しいアドレスの数を解析できませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10458"/>
        <source>the amount of new addresses must be lower or equal to</source>
        <translation>新しいアドレスの数は以下である必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10473"/>
        <source>Expected exactly two arguments for index</source>
        <translation>インデックスには正確に 2 つの引数が必要です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10483"/>
        <source>Address at %u %u: %s</source>
        <translation>%u %u の住所: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10616"/>
        <source>Standard address: %s, payment ID: %s</source>
        <translation>標準アドレス: %s、支払い ID: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10872"/>
        <source>Invalid subaddress index format, and not a signature type:</source>
        <translation>サブアドレス インデックス形式が無効であり、署名タイプではありません:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11497"/>
        <source>(Y/Yes/N/No):</source>
        <translation>(はい/いいえ/いいえ):</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11503"/>
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>警告: MMS自動設定メカニズムの使用は信頼できないものではありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11504"/>
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers&#39; info</source>
        <translation>悪意のある自動設定マネージャーは、他の署名者の情報ではなく、自分のウォレットに関する情報を送信する可能性があります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11505"/>
        <source>If in doubt do not use auto-config or at least compare configs using the &quot;mms config_checksum&quot; command</source>
        <translation>疑わしい場合は自動設定を使用しないか、少なくとも「mms config_checksum」コマンドを使用して設定を比較してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11532"/>
        <source>Choose processing:</source>
        <translation>処理を選択してください:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11541"/>
        <source>Sign tx</source>
        <translation>署名tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11549"/>
        <source>Send the tx for submission to</source>
        <translation>送信用のtxを</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11553"/>
        <source>Send the tx for signing to</source>
        <translation>署名のためのtxを送信する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11560"/>
        <source>Submit tx</source>
        <translation>送信</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11563"/>
        <source>unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11569"/>
        <source>Choice:</source>
        <translation>選択：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11581"/>
        <source>Wrong choice</source>
        <translation>間違った選択</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>Id</source>
        <translation>識別子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>I/O</source>
        <translation>入出力</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>Authorized Signer</source>
        <translation>承認された署名者</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Message Type</source>
        <translation>メッセージタイプ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Height</source>
        <translation>身長</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Message State</source>
        <translation>メッセージの状態</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Since</source>
        <translation>以来</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11606"/>
        <source>ago</source>
        <translation>前</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11612"/>
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11612"/>
        <source>Transport Address</source>
        <translation>輸送先住所</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11613"/>
        <source>Auto-Config Token</source>
        <translation>自動設定トークン</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11613"/>
        <source>Salvium Address</source>
        <translation>サルビウム住所</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11617"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11625"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627"/>
        <source>&lt;not set&gt;</source>
        <translation>&lt;未設定&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11668"/>
        <source>Message</source>
        <translation>メッセージ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11669"/>
        <source>In/out:</source>
        <translation>入退出:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11671"/>
        <source>State:</source>
        <translation>州：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11671"/>
        <source>%s since %s, %s ago</source>
        <translation>%s から %s、%s 前</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11675"/>
        <source>Sent: Never</source>
        <translation>送信済み: なし</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11679"/>
        <source>Sent: %s, %s ago</source>
        <translation>送信日: %s、%s 前</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11682"/>
        <source>Authorized signer:</source>
        <translation>承認された署名者:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683"/>
        <source>Content size:</source>
        <translation>コンテンツサイズ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683"/>
        <source>bytes</source>
        <translation>バイト</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11684"/>
        <source>Content:</source>
        <translation>コンテンツ：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11684"/>
        <source>(binary data)</source>
        <translation>(バイナリデータ)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11714"/>
        <source>Send these messages now?</source>
        <translation>これらのメッセージを今すぐ送信しますか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11724"/>
        <source>Queued for sending.</source>
        <translation>送信待ちキューに追加されました。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11744"/>
        <source>Invalid message id</source>
        <translation>無効なメッセージ ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11753"/>
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>使用方法: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11759"/>
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>MMS はすでに初期化されています。署名者情報とメッセージをすべて削除して再度初期化しますか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11774"/>
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>必要な署名者数および/または承認された署名者の数に誤りがある</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11791"/>
        <source>The MMS is not active.</source>
        <translation>MMS はアクティブではありません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11814"/>
        <source>Invalid signer number</source>
        <translation>署名者番号が無効です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11819"/>
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>mms 署名者 [<number> &lt;label&gt; [<transport_address> [<salvium_address>]]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11838"/>
        <source>Invalid Salvium address</source>
        <translation>無効なSalviumアドレス</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11845"/>
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>ウォレットの状態により、Salvium アドレスの変更は許可されなくなりました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11857"/>
        <source>Usage: mms list</source>
        <translation>使用法: mms リスト</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11870"/>
        <source>Usage: mms next [sync]</source>
        <translation>使用方法: mms next [sync]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11895"/>
        <source>No next step:</source>
        <translation>次のステップはありません:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11905"/>
        <source>prepare_multisig</source>
        <translation>マルチシグを準備する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11911"/>
        <source>make_multisig</source>
        <translation>マルチシグを作る</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11926"/>
        <source>exchange_multisig_keys</source>
        <translation>マルチシグキーの交換</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11942"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12066"/>
        <source>export_multisig_info</source>
        <translation>エクスポート_マルチシグ情報</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11951"/>
        <source>import_multisig_info</source>
        <translation>インポート_マルチシグ情報</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11964"/>
        <source>sign_multisig</source>
        <translation>マルチシグ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11974"/>
        <source>submit_multisig</source>
        <translation>マルチシグを送信</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11984"/>
        <source>Send tx</source>
        <translation>送信</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11995"/>
        <source>Process signer config</source>
        <translation>プロセス署名者設定</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12007"/>
        <source>Replace current signer config with the one displayed above?</source>
        <translation>現在の署名者設定を上に表示されているものに置き換えますか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12013"/>
        <source>You can use the &quot;mms delete&quot; command to delete any unwanted message</source>
        <translation>不要なメッセージを削除するには、「mms delete」コマンドを使用します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12026"/>
        <source>Process auto config data</source>
        <translation>自動設定データを処理する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12040"/>
        <source>Nothing ready to process</source>
        <translation>処理する準備ができていません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12059"/>
        <source>Usage: mms sync</source>
        <translation>使用方法: mms 同期</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12083"/>
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>使用方法: mms delete (&lt;message_id&gt; | all)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12090"/>
        <source>Delete all messages?</source>
        <translation>すべてのメッセージを削除しますか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12116"/>
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>使用方法: mms send [&lt;message_id&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12133"/>
        <source>Usage: mms receive</source>
        <translation>使用法: mms 受信</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12150"/>
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>使用方法: mms export &lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12161"/>
        <source>Message content saved to:</source>
        <translation>メッセージの内容が保存されました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12165"/>
        <source>Failed to to save message content</source>
        <translation>メッセージの内容を保存できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12189"/>
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>使用方法: mms note [&lt;label&gt; &lt;text&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12196"/>
        <source>No signer found with label</source>
        <translation>ラベルの署名者が見つかりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12218"/>
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>使用方法: mms show &lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12236"/>
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>使用方法: mms set &lt;option_name&gt; [&lt;option_value&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12253"/>
        <source>Wrong option value</source>
        <translation>オプション値が間違っています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12258"/>
        <source>Auto-send is on</source>
        <translation>自動送信がオンになっています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12258"/>
        <source>Auto-send is off</source>
        <translation>自動送信はオフです</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12263"/>
        <source>Unknown option</source>
        <translation>不明なオプション</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12271"/>
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>使用方法: help mms [&lt;サブコマンド&gt;]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12287"/>
        <source>Usage: mms send_signer_config</source>
        <translation>使用方法: mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12293"/>
        <source>Signer config not yet complete</source>
        <translation>署名者の設定がまだ完了していません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12308"/>
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>使用方法: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12313"/>
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>ラベルが設定されていない署名者がいます。自動構成の前にラベルを完了するか、ここでパラメータとして指定してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12319"/>
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>自動構成はすでに実行されています。キャンセルして再起動しますか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12343"/>
        <source>Usage: mms config_checksum</source>
        <translation>使用法: mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12355"/>
        <source>Usage: mms stop_auto_config</source>
        <translation>使用方法: mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12358"/>
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>自動構成トークンを削除して自動構成を停止しますか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12371"/>
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>使用方法: mms auto_config &lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12378"/>
        <source>Invalid auto-config token</source>
        <translation>無効な自動設定トークン</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12388"/>
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>自動構成はすでに実行されています。キャンセルして再起動しますか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12407"/>
        <source>MMS not available in this wallet</source>
        <translation>このウォレットではMMSは利用できません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12431"/>
        <source>The MMS is not active. Activate using the &quot;mms init&quot; command</source>
        <translation>MMS がアクティブではありません。「mms init」コマンドを使用してアクティブ化してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12512"/>
        <source>Invalid MMS subcommand</source>
        <translation>無効な MMS サブコマンド</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12517"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12521"/>
        <source>Error in MMS command:</source>
        <translation>MMS コマンドのエラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10843"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>ウォレットは監視のみで署名はできません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10848"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>このウォレットはマルチシグなので署名できません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10922"/>
        <source>Bad signature from</source>
        <translation>不正な署名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10926"/>
        <source>Good signature from</source>
        <translation>良い署名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10942"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>ウォレットはウォッチのみで、キー画像をエクスポートすることはできません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10980"/>
        <source>Signed key images exported to</source>
        <translation>署名されたキーイメージをエクスポート</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11025"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11071"/>
        <source>command only supported by HW wallet</source>
        <translation>コマンドはHWウォレットでのみサポートされます</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11030"/>
        <source>hw wallet does not support cold KI sync</source>
        <translation>hwウォレットはコールドKI同期をサポートしていません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11042"/>
        <source>Please confirm the key image sync on the device</source>
        <translation>デバイス上のキー画像の同期を確認してください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11048"/>
        <source>Key images synchronized to height</source>
        <translation>高さに合わせてキー画像を同期</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11051"/>
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>信頼できないデーモンを実行しているため、どのトランザクション出力が使用されたかを判断できません。--trusted-daemon で信頼できるデーモンを使用し、rescan_spent を実行してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11054"/>
        <source>spent,</source>
        <translation>過ごした、</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11054"/>
        <source>unspent</source>
        <translation>未使用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11058"/>
        <source>Failed to import key images</source>
        <translation>キー画像のインポートに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11063"/>
        <source>Failed to import key images:</source>
        <translation>キー画像のインポートに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11080"/>
        <source>Failed to reconnect device</source>
        <translation>デバイスの再接続に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11085"/>
        <source>Failed to reconnect device:</source>
        <translation>デバイスの再接続に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11137"/>
        <source>Outputs exported to</source>
        <translation>出力は</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11292"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>ネットワーク上で二重支払いが見られました。このトランザクションは採掘されるかされないかのどちらかです。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11327"/>
        <source>Transaction ID not found</source>
        <translation>取引IDが見つかりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11362"/>
        <source>Transaction successfully saved to</source>
        <translation>取引が正常に保存されました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11364"/>
        <source>, txid</source>
        <translation>、txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11364"/>
        <source>Failed to save transaction to</source>
        <translation>取引を保存できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="408"/>
        <source>TRUE</source>
        <translation>TRUE</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="461"/>
        <source>failed to parse refresh type</source>
        <translation>更新タイプの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="881"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>オプションのシードオフセットパスフレーズを入力します。空にすると生のシードが表示されます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4342"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>シードオフセットパスフレーズを入力します。ない場合は空白にします。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5342"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>ファイル「%s」を削除してもう一度お試しください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8671"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>これはマルチシグウォレットであり、sign_multisigでのみ署名できます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8676"/>
        <source>This is a watch only wallet</source>
        <translation>これは時計専用の財布です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8708"/>
        <source>Failed to sign transaction</source>
        <translation>トランザクションの署名に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8714"/>
        <source>Failed to sign transaction:</source>
        <translation>トランザクションの署名に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8735"/>
        <source>Transaction raw hex data exported to</source>
        <translation>トランザクションの生の16進データがエクスポートされました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8756"/>
        <source>Failed to load transaction from file</source>
        <translation>ファイルからトランザクションをロードできませんでした</translation>
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
        <translation>txid の解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8814"/>
        <source>Tx key:</source>
        <translation>送信キー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8819"/>
        <source>no tx keys found for this txid</source>
        <translation>この txid の tx キーが見つかりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8862"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8873"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8880"/>
        <source>failed to parse tx_key</source>
        <translation>tx_key の解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8889"/>
        <source>Tx key successfully stored.</source>
        <translation>Tx キーが正常に保存されました。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8893"/>
        <source>Failed to store tx key:</source>
        <translation>tx キーの保存に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8929"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9230"/>
        <source>signature file saved to:</source>
        <translation>署名ファイルは次の場所に保存されます:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8931"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9143"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9232"/>
        <source>failed to save signature file</source>
        <translation>署名ファイルの保存に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8935"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9023"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9101"/>
        <source>error:</source>
        <translation>エラー：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8977"/>
        <source>failed to parse tx key</source>
        <translation>txキーの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8999"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072"/>
        <source>received</source>
        <translation>受け取った</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8999"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072"/>
        <source>in txid</source>
        <translation>txidで</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9002"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9075"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>警告: このトランザクションはまだブロックチェーンに含まれていません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9012"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9085"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>警告: 確認回数を決定できませんでした。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9018"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9091"/>
        <source>received nothing in txid</source>
        <translation>txid で何も受信されませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9058"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9172"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9266"/>
        <source>failed to load signature file</source>
        <translation>署名ファイルの読み込みに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9069"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9179"/>
        <source>Good signature</source>
        <translation>良い署名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9096"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9181"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9281"/>
        <source>Bad signature</source>
        <translation>署名が間違っている</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9120"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>ウォレットは監視のみであり、証明を生成することはできない</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9204"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>準備金証明はフルウォレットによってのみ生成できる</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9259"/>
        <source>Address must not be a subaddress</source>
        <translation>アドレスはサブアドレスであってはなりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9386"/>
        <source>bad min_height parameter:</source>
        <translation>不正な min_height パラメータ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9398"/>
        <source>bad max_height parameter:</source>
        <translation>不正な max_height パラメータ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9420"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>block</source>
        <translation>ブロック</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9420"/>
        <source>in</source>
        <translation>で</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9511"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined]</source>
        <translation>[ネットワーク上で二重支出が見られました: このトランザクションは最終的にマイニングされるかどうかはわかりません]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9799"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt; は &lt;max_amount&gt; より小さくする必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9825"/>
        <source>There is no unspent output in the specified address</source>
        <translation>指定されたアドレスには未使用の出力がありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9831"/>
        <source>
Amount:</source>
        <translation>
金額:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9831"/>
        <source>, number of keys:</source>
        <translation>、キーの数:</translation>
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
最小ブロック高さ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9842"/>
        <source>
Max block height:</source>
        <translation>
最大ブロック高さ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9843"/>
        <source>
Min amount found:</source>
        <translation>
見つかった最小量:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9844"/>
        <source>
Max amount found:</source>
        <translation>
見つかった最大量:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845"/>
        <source>
Total count:</source>
        <translation>
合計数:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9885"/>
        <source>
Bin size:</source>
        <translation>
ビンサイズ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9886"/>
        <source>
Outputs per *:</source>
        <translation>
出力数 *:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9888"/>
        <source>count
  ^
</source>
        <translation>カウント
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
        <translation>警告: これにより、ブロックチェーンから回復できない情報はすべて失われます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9940"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>これには、宛先アドレス、送信秘密鍵、送信メモなどが含まれます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9277"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>署名は良好です -- 合計: %s、使用済み: %s、未使用: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094"/>
        <source>First line is not an amount</source>
        <translation>最初の行は金額ではありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108"/>
        <source>Invalid output:</source>
        <translation>無効な出力:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2133"/>
        <source>Invalid output key, and file doesn&#39;t exist</source>
        <translation>出力キーが無効で、ファイルが存在しません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2156"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2183"/>
        <source>Invalid output</source>
        <translation>出力が無効です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2671"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>無効な引数: 0/なし、1/アクション、または 2/暗号化/復号化のいずれかである必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3377"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&#39;s included)</source>
        <translation>&lt;amount&gt; を &lt;address&gt; に転送し、&lt;lockblocks&gt; の間ロックします (最大 1000000)。パラメータ &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; が指定されている場合、ウォレットはそれらのインデックスのアドレスによって受信された出力を使用します。省略されている場合、ウォレットは使用するアドレス インデックスをランダムに選択します。いずれの場合も、複数のアドレスにまたがる出力を結合しないように最善を尽くします。 &lt;priority&gt; はトランザクションの優先度です。優先度が高いほど、トランザクション手数料が高くなります。優先度順 (最低から最高) の有効な値は、unimportant、normal、elevated、priority です。省略されている場合は、デフォルト値 (コマンド &quot;set priority&gt; を参照) が使用されます。 &lt;ring_size&gt; は追跡不可能にするために含める入力の数です。URI_2 または &lt;address_2&gt; を追加することで、一度に複数の支払いを行うことができます。 &lt;amount_2&gt; など（支払い ID が含まれている場合は、その前）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5946"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation>パスワードが必要です (%s) - 更新コマンドを使用してください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10100"/>
        <source>Daemon requests payment at diff %llu, with %f credits/hash%s. Run start_mining_for_rpc to start mining to pay for RPC access, or use another daemon</source>
        <translation>デーモンは diff %llu で %f クレジット/ハッシュ %s で支払いを要求しています。RPC アクセスの支払いのためにマイニングを開始するには、start_mining_for_rpc を実行するか、別のデーモンを使用してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10127"/>
        <source>Error mining to daemon:</source>
        <translation>デーモンへのマイニングエラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10133"/>
        <source>Failed to start mining for RPC payment</source>
        <translation>RPC支払いのマイニングを開始できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10145"/>
        <source>wallet</source>
        <translation>財布</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10147"/>
        <source>(no daemon)</source>
        <translation>(デーモンなし)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10149"/>
        <source>(out of sync)</source>
        <translation>(同期していない)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>(Untitled account)</source>
        <translation>(無題アカウント)</translation>
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
        <translation>インデックスの解析に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10218"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10494"/>
        <source>specify an index between 0 and</source>
        <translation>0から</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10340"/>
        <source>, unlocked balance:</source>
        <translation>、ロック解除残高:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10350"/>
        <source>Untagged accounts:</source>
        <translation>タグ付けされていないアカウント:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10356"/>
        <source>Tag %s is unregistered.</source>
        <translation>タグ %s は登録されていません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10359"/>
        <source>Accounts with tag:</source>
        <translation>タグの付いたアカウント:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10360"/>
        <source>Tag&#39;s description:</source>
        <translation>タグの説明:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Account</source>
        <translation>アカウント</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10416"/>
        <source>Primary address</source>
        <translation>主な住所</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10416"/>
        <source>(used)</source>
        <translation>（使用済み）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10437"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10463"/>
        <source>(Untitled address)</source>
        <translation>（無題のアドレス）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10521"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt; はすでに範囲外です</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10526"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt; が境界を超えています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10590"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10603"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>統合アドレスはアカウント0に対してのみ作成できます</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10595"/>
        <source>Matching integrated address:</source>
        <translation>一致する統合アドレス:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10622"/>
        <source>Subaddress:</source>
        <translation>サブアドレス:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10622"/>
        <source>Standard address:</source>
        <translation>標準アドレス:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10627"/>
        <source>failed to parse payment ID or address</source>
        <translation>支払いIDまたはアドレスを解析できませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10664"/>
        <source>failed to parse index</source>
        <translation>インデックスの解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10672"/>
        <source>Address book is empty.</source>
        <translation>アドレス帳が空です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10678"/>
        <source>Index:</source>
        <translation>索引：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10684"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10814"/>
        <source>Address:</source>
        <translation>住所：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10685"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10813"/>
        <source>Description:</source>
        <translation>説明：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10770"/>
        <source>no description found</source>
        <translation>説明が見つかりません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10772"/>
        <source>description found:</source>
        <translation>説明が見つかりました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6679"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10812"/>
        <source>Filename:</source>
        <translation>ファイル名：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10817"/>
        <source>Watch only</source>
        <translation>視聴のみ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10819"/>
        <source>%u/%u multisig%s</source>
        <translation>%u/%u マルチシグ%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8634"/>
        <source>%s change to %s</source>
        <translation>%s を %s に変更</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9008"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9081"/>
        <source>This transaction has %u confirmations</source>
        <translation>この取引には %u 件の確認があります</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61"/>
        <source>Filename to save the certificate</source>
        <translation>証明書を保存するファイル名</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62"/>
        <source>Filename to save the private key</source>
        <translation>秘密鍵を保存するファイル名</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63"/>
        <source>Passphrase with which to encrypt the private key</source>
        <translation>秘密鍵を暗号化するためのパスフレーズ</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64"/>
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>秘密鍵を暗号化するためのパスフレーズを含むファイル</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65"/>
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>秘密鍵を暗号化するためのパスフレーズの入力を求める</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143"/>
        <source>Argument is needed:</source>
        <translation>議論が必要です:</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153"/>
        <source>Failed to read passphrase</source>
        <translation>パスフレーズの読み取りに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188"/>
        <source>Failed to create certificate</source>
        <translation>証明書の作成に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206"/>
        <source>Failed to write certificate:</source>
        <translation>証明書の書き込みに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226"/>
        <source>Failed to write private key:</source>
        <translation>秘密鍵の書き込みに失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237"/>
        <source>Failed to save certificate file</source>
        <translation>証明書ファイルの保存に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243"/>
        <source>Failed to save private key file</source>
        <translation>秘密鍵ファイルの保存に失敗しました</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>基本ファイル名（必要に応じて -1、-2 などのサフィックスが追加されます）</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>閾値と参加者をM/Nとして一度に与える</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>マルチシグウォレットの一部を共有する参加者の数は</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>有効な取引に署名するために必要な署名者の数</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>Create testnet multisig wallets</source>
        <translation>テストネットマルチシグウォレットを作成する</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create stagenet multisig wallets</source>
        <translation>ステージネットマルチシグウォレットを作成する</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create an address file for new wallets</source>
        <translation>新しいウォレットのアドレスファイルを作成する</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>%u %u/%u マルチシグウォレットを生成しています</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="137"/>
        <source>Generated multisig wallets for address</source>
        <translation>アドレス用に生成されたマルチシグウォレット</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="141"/>
        <source>Error creating multisig wallets:</source>
        <translation>マルチシグウォレットの作成中にエラーが発生しました:</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="166"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>このプログラムは、マルチシグウォレットのセットを生成します。参加者全員がお互いを信頼している場合にのみ、このよりシンプルなスキームを使用してください。</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="185"/>
        <source>Error: Can&#39;t specify more than one of --testnet and --stagenet</source>
        <translation>エラー: --testnet と --stagenet を複数指定することはできません</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="192"/>
        <source>Error: expected N/M, but got:</source>
        <translation>エラー: N/M を期待しましたが、次のようになりました:</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="200"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="209"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>エラー: --scheme または --threshold と --participants の両方が指定されている可能性があります</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>エラー: N > 1 かつ N &lt;= M を期待しましたが、N==%u かつ M==%d でした</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225"/>
        <source>Error: --filename-base is required</source>
        <translation>エラー: --filename-base が必要です</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72"/>
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>URL &lt;arg&gt; で PyBitmessage インスタンスを使用します。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73"/>
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>PyBitmessage API のユーザー名:パスワードとして &lt;arg&gt; を指定します</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911"/>
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>他の署名者からの自動構成データが完了していないため、自動構成を続行できません</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936"/>
        <source>The signer config is not complete.</source>
        <translation>署名者の構成が完了していません。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988"/>
        <source>Wallet can&#39;t go multisig because key sets from other signers are missing or not complete.</source>
        <translation>他の署名者からのキーセットが欠落しているか不完全であるため、ウォレットはマルチシグを実行できません。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030"/>
        <source>Wallet can&#39;t start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>他の署名者からの鍵セットが欠落しているか不完全であるため、ウォレットは別の鍵交換ラウンドを開始できません。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094"/>
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>他の署名者からのマルチシグ同期データが欠落しているか不完全であるため、同期は実行されません。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208"/>
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>待機中のメッセージはありますが、通常の状況では処理できるものはありません</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211"/>
        <source>
Use &quot;mms next sync&quot; if you want to force processing of the waiting sync data</source>
        <translation>
待機中の同期データの処理を強制したい場合は、「mms next sync」を使用します</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215"/>
        <source>
Use &quot;mms note&quot; to display the waiting notes</source>
        <translation>
「mms note」を使用して待機中のメモを表示します</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220"/>
        <source>There are no messages waiting to be processed.</source>
        <translation>処理待ちのメッセージはありません。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441"/>
        <source>key set</source>
        <translation>キーセット</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443"/>
        <source>additional key set</source>
        <translation>追加キーセット</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445"/>
        <source>multisig sync data</source>
        <translation>マルチシグ同期データ</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447"/>
        <source>partially signed tx</source>
        <translation>部分的に署名された tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449"/>
        <source>fully signed tx</source>
        <translation>完全に署名されたtx</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451"/>
        <source>note</source>
        <translation>注記</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453"/>
        <source>signer config</source>
        <translation>署名者設定</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455"/>
        <source>auto-config data</source>
        <translation>自動設定データ</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457"/>
        <source>unknown message type</source>
        <translation>不明なメッセージタイプ</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466"/>
        <source>in</source>
        <translation>で</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468"/>
        <source>out</source>
        <translation>外</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470"/>
        <source>unknown message direction</source>
        <translation>不明なメッセージの方向</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479"/>
        <source>ready to send</source>
        <translation>送信準備完了</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481"/>
        <source>sent</source>
        <translation>送信済み</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483"/>
        <source>waiting</source>
        <translation>待っている</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485"/>
        <source>processed</source>
        <translation>処理された</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487"/>
        <source>cancelled</source>
        <translation>キャンセル</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489"/>
        <source>unknown message state</source>
        <translation>不明なメッセージ状態</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="177"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>新しいウォレットを生成し、&lt;arg&gt; に保存します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="178"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>デバイスから新しいウォレットを生成し、&lt;arg&gt; に保存します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="179"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>ビューキーから受信専用ウォレットを生成する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="180"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>支出キーから決定論的ウォレットを生成する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="181"/>
        <source>Generate wallet from private keys</source>
        <translation>秘密鍵からウォレットを生成する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="182"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>マルチシグウォレットキーからマスターウォレットを生成する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184"/>
        <source>Language for mnemonic</source>
        <translation>記憶のための言語</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="185"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>ウォレットの回復/作成のためのElectrumシードを指定する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="186"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Electrumスタイルのニーモニックシードを使用してウォレットを回復する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="187"/>
        <source>alias for --restore-deterministic-wallet</source>
        <translation>--restore-deterministic-wallet のエイリアス</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="188"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Electrumスタイルのニーモニックシードを使用してマルチシグウォレットを復元する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="189"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>非決定論的なビューと支出キーを生成する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191"/>
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>指定された日付のブロックチェーンの推定高さから復元</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192"/>
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>新しく作成されたトランザクションはSalviumネットワークに中継されません。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="348"/>
        <source>failed to read wallet password</source>
        <translation>ウォレットのパスワードの読み取りに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355"/>
        <source>Enter a new password for the wallet</source>
        <translation>ウォレットの新しいパスワードを入力してください</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355"/>
        <source>Wallet password</source>
        <translation>ウォレットパスワード</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="433"/>
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>無効な引数: 0/1、true/false、y/n、yes/no のいずれかである必要があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="489"/>
        <source>DNSSEC validation passed</source>
        <translation>DNSSEC検証に合格</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="493"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>警告: DNSSEC 検証に失敗しました。このアドレスが正しくない可能性があります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="496"/>
        <source>For URL:</source>
        <translation>URLの場合:</translation>
    </message>
    <message>
        <location filename="=../src/simplewallet/simplewallet.cpp" line="498"/>
        <source>Salvium Address </source>
        <translation>=サルビウムアドレス </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="510"/>
        <source>you have cancelled the transfer request</source>
        <translation>振替依頼をキャンセルしました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="531"/>
        <source>failed to parse index:</source>
        <translation>インデックスの解析に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="544"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>サブアドレス先読みの形式が無効です。&lt;major&gt;:&lt;minor&gt; である必要があります。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="608"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>デーモンに接続されていません。デーモンが実行中であることを確認してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="617"/>
        <source>RPC error:</source>
        <translation>RPC エラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="621"/>
        <source>failed to get random outputs to mix:</source>
        <translation>ランダム出力をミックスできませんでした:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="628"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="636"/>
        <source>Not enough money in unlocked balance</source>
        <translation>ロック解除残高が不足しています</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="646"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>トランザクションを作成する方法が見つかりませんでした。これは通常、手数料で支払うことができないほど小さいダスト、ロック解除された残高よりも多くのお金を送ろうとしている、または手数料に十分な金額が残っていないことが原因です。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="652"/>
        <source>not enough outputs for specified ring size</source>
        <translation>指定されたリングサイズに対して出力が足りません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655"/>
        <source>output amount</source>
        <translation>出力量</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655"/>
        <source>found outputs to use</source>
        <translation>使用する出力が見つかりました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="657"/>
        <source>Please use sweep_unmixable.</source>
        <translation>sweep_unmixableを使用してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="661"/>
        <source>transaction was not constructed</source>
        <translation>トランザクションは構築されませんでした</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669"/>
        <source>Reason:</source>
        <translation>理由：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="688"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>取引を分割する適切な方法を見つけられなかった</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694"/>
        <source>unknown transfer error:</source>
        <translation>不明な転送エラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699"/>
        <source>Multisig error:</source>
        <translation>マルチシグエラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="705"/>
        <source>internal error:</source>
        <translation>内部エラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="710"/>
        <source>unexpected error:</source>
        <translation>予期しないエラー:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>エラーが発生し、ノードがトランザクションの作成を再試行し、所有する出力に焦点を絞るように要求している可能性があります。または、正当なエラーである可能性もあります。このノードから切断し、すぐにトランザクションを送信しないようにするのが賢明です。または、元のノードが情報を関連付けることができないように、別のノードに接続します。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>ファイル %s にはウォレットの秘密鍵が保存されている可能性があります。別のファイル名を使用してください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9295"/>
        <source>seconds</source>
        <translation>秒</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9297"/>
        <source>minutes</source>
        <translation>分</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9299"/>
        <source>hours</source>
        <translation>時間</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9301"/>
        <source>days</source>
        <translation>日</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9303"/>
        <source>months</source>
        <translation>ヶ月</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9304"/>
        <source>a long time</source>
        <translation>長い間</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11447"/>
        <source>Unknown command:</source>
        <translation>不明なコマンド:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="190"/>
        <source>Restore from specific blockchain height</source>
        <translation>特定のブロックチェーンの高さから復元</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193"/>
        <source>Create an address file for new wallets</source>
        <translation>新しいウォレットのアドレスファイルを作成する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195"/>
        <source>Display English language names</source>
        <translation>英語名を表示する</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>デーモンはビジー状態です。しばらくしてからもう一度お試しください。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="374"/>
        <source>possibly lost connection to daemon</source>
        <translation>デーモンへの接続が失われた可能性があります</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="391"/>
        <source>Error:</source>
        <translation>エラー：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="500"/>
        <source>Is this OK?</source>
        <translation>これでいいですか？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="666"/>
        <source>transaction %s was rejected by daemon</source>
        <translation>トランザクション %s はデーモンによって拒否されました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678"/>
        <source>destination amount is zero</source>
        <translation>目的地の金額はゼロです</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="683"/>
        <source>transaction has no destination</source>
        <translation>トランザクションに宛先がありません</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="729"/>
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>ファイル %s は既に存在します。上書きしてもよろしいですか?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11422"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>これはコマンドラインの Salvium ウォレットです。正しく動作するには、Salvium デーモンに接続する必要があります。
警告: このフォークにキー再利用の緩和策が組み込まれていない限り、Salvium キーを別のフォークで再利用しないでください。これを行うと、プライバシーが侵害されます。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11441"/>
        <source>Failed to initialize wallet</source>
        <translation>ウォレットの初期化に失敗しました</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="244"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>&lt;host&gt;:&lt;port&gt; のデーモンインスタンスを使用します</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="245"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>localhost の代わりにホスト &lt;arg&gt; のデーモンインスタンスを使用する</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>18081 の代わりにポート &lt;arg&gt; のデーモンインスタンスを使用する</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>テストネットの場合、デーモンも --testnet フラグ付きで起動する必要があります。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="280"/>
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>PRNG を初期化するための追加のエントロピーを含むファイル (任意のデータ、256 ビットのエントロピーが有効になることを目標とし、通常は 256 ビットを超えるデータを意味します)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281"/>
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>異なるバージョンを使用するデーモンとの通信を許可する</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375"/>
        <source>can&#39;t specify daemon host or port more than once</source>
        <translation>デーモンホストまたはポートを複数回指定することはできません</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511"/>
        <source>can&#39;t specify more than one of --password and --password-file</source>
        <translation>--password と --password-file を複数指定することはできません</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="525"/>
        <source>the password file specified could not be read</source>
        <translation>指定されたパスワードファイルを読み取ることができませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="551"/>
        <source>Failed to load file</source>
        <translation>ファイルの読み込みに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="249"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>ウォレットのパスワード（必要に応じてエスケープ/引用符を使用）</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="246"/>
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt;:]&lt;port&gt; デーモン接続に使用するSOCKSプロキシ</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="247"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>信頼できるデーモンに依存するコマンドを有効にする</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="248"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>信頼できるデーモンに依存するコマンドを無効にする</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>デーモンRPCクライアントのユーザー名[:パスワード]を指定します</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253"/>
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>デーモン RPC 接続で SSL を有効にする: enabled|disabled|autodetect</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="257"/>
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>許可された RPC サーバーの有効なフィンガープリントのリスト</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258"/>
        <source>Allow any SSL certificate from the daemon</source>
        <translation>デーモンからのSSL証明書を許可する</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259"/>
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>ユーザーに（--daemon-ssl-ca-certificates経由で）チェーン証明書を許可する</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>stagenetの場合、デーモンは--stagenetフラグ付きで起動する必要があります。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263"/>
        <source>Set shared ring database path</source>
        <translation>共有リングデータベースパスを設定する</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="274"/>
        <source>Number of rounds for the key derivation function</source>
        <translation>鍵導出関数のラウンド数</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="275"/>
        <source>HW device to use</source>
        <translation>使用するHWデバイス</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="276"/>
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>HWデバイスウォレット導出パス（例：SLIP-10）</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="278"/>
        <source>Do not use DNS</source>
        <translation>DNSを使用しない</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="279"/>
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>デーモンに接続したりDNSを使用したりしないでください</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="367"/>
        <source>Invalid argument for</source>
        <translation>無効な引数</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428"/>
        <source>Enabling --</source>
        <translation>有効化 --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428"/>
        <source>requires --</source>
        <translation>必要 -</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="429"/>
        <location filename="../src/wallet/wallet2.cpp" line="430"/>
        <source>or --</source>
        <translation>または -</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="430"/>
        <source>or use of a .onion/.i2p domain</source>
        <translation>または.onion/.i2pドメインの使用</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="448"/>
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon と --untrusted-daemon の両方が見られ、信頼できないと想定されます</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="458"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>デーモンはローカルであり、信頼されていると仮定します</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="468"/>
        <source>failed to initialize the wallet</source>
        <translation>ウォレットの初期化に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>パスワードが指定されていません。パスワードの入力を求めるには --prompt-for-password を使用してください。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534"/>
        <source>Enter a new password for the wallet</source>
        <translation>ウォレットの新しいパスワードを入力してください</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534"/>
        <source>Wallet password</source>
        <translation>ウォレットパスワード</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="557"/>
        <source>Failed to parse JSON</source>
        <translation>JSON の解析に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>バージョン %u は新しすぎるため、%u までしか理解できません</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="580"/>
        <source>failed to parse view key secret key</source>
        <translation>ビューキーの秘密キーを解析できませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="585"/>
        <source>view secret key may not be all zeroes</source>
        <translation>表示秘密鍵はすべてゼロではない可能性があります</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587"/>
        <location filename="../src/wallet/wallet2.cpp" line="657"/>
        <location filename="../src/wallet/wallet2.cpp" line="702"/>
        <source>failed to verify view key secret key</source>
        <translation>ビューキーの秘密キーの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="598"/>
        <source>failed to parse spend key secret key</source>
        <translation>支出キーの秘密キーを解析できませんでした</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="603"/>
        <source>spend secret key may not be all zeroes</source>
        <translation>使用秘密鍵はすべてゼロではない可能性があります</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605"/>
        <location filename="../src/wallet/wallet2.cpp" line="667"/>
        <location filename="../src/wallet/wallet2.cpp" line="728"/>
        <source>failed to verify spend key secret key</source>
        <translation>支出キーの秘密キーの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="617"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Electrum スタイルの単語リストの検証に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="637"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Electrumスタイルの単語リスト、プライベートビューキー、プライベート支出キーのいずれかを少なくとも1つ指定する必要があります。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="641"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Electrum形式の単語リストと秘密鍵の両方が指定されている</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="651"/>
        <source>invalid address</source>
        <translation>無効なアドレス</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="660"/>
        <source>view key does not match standard address</source>
        <translation>ビューキーが標準アドレスと一致しません</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="670"/>
        <source>spend key does not match standard address</source>
        <translation>支出キーが標準アドレスと一致しません</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="678"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>JSON から非推奨のウォレットを生成できません</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="714"/>
        <source>failed to parse address:</source>
        <translation>アドレスの解析に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="720"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>ウォッチ専用ウォレットを作成するにはアドレスを指定する必要があります</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="737"/>
        <source>failed to generate new wallet:</source>
        <translation>新しいウォレットの生成に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2172"/>
        <source>Password is needed to compute key image for incoming SALs</source>
        <translation>受信SALのキーイメージを計算するにはパスワードが必要です</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2173"/>
        <source>Invalid password: password is needed to compute key image for incoming SALs</source>
        <translation>無効なパスワード: 受信 SAL のキー イメージを計算するにはパスワードが必要です</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3751"/>
        <source>reorg exceeds maximum allowed depth, use &#39;set max-reorg-depth N&#39; to allow it, reorg depth:</source>
        <translation>再編成が最大許容深度を超えています。許可するには「set max-reorg-depth N」を使用してください。再編成深度:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5639"/>
        <location filename="../src/wallet/wallet2.cpp" line="6220"/>
        <location filename="../src/wallet/wallet2.cpp" line="6709"/>
        <source>Primary account</source>
        <translation>プライマリアカウント</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9078"/>
        <source>Transaction sanity check failed</source>
        <translation>トランザクションの健全性チェックに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12641"/>
        <source>No funds received in this tx.</source>
        <translation>このトランザクションでは資金は受け取られていません。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13553"/>
        <source>failed to read file</source>
        <translation>ファイルの読み取りに失敗しました</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>サブアドレスの先読みサイズを &lt;major&gt;:&lt;minor&gt; に設定します。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254"/>
        <source>Path to a PEM format private key</source>
        <translation>PEM形式の秘密鍵へのパス</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255"/>
        <source>Path to a PEM format certificate</source>
        <translation>PEM形式の証明書へのパス</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>システム CA を置き換える連結された PEM 形式の証明書を含むファイルへのパス。</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="219"/>
        <source>Failed to create directory</source>
        <translation>ディレクトリの作成に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="221"/>
        <source>Failed to create directory %s: %s</source>
        <translation>ディレクトリ %s の作成に失敗しました: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232"/>
        <source>Cannot specify --</source>
        <translation>指定できません --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232"/>
        <source>and --</source>
        <translation>そして -</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251"/>
        <source>Failed to create file</source>
        <translation>ファイルの作成に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251"/>
        <source>. Check permissions or remove file</source>
        <translation>権限を確認するか、ファイルを削除してください</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="261"/>
        <source>Error writing to file</source>
        <translation>ファイルへの書き込みエラー</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="264"/>
        <source>RPC username/password is stored in file</source>
        <translation>RPCユーザー名/パスワードはファイルに保存されます</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="665"/>
        <source>Tag %s is unregistered.</source>
        <translation>タグ %s は登録されていません。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="693"/>
        <source>No matches for regex filter %s .</source>
        <translation>正規表現フィルター %s に一致するものはありません。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3586"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>取引できません。%s のみ利用可能です。取引金額 %s = %s + %s (手数料)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4594"/>
        <source>Can&#39;t specify more than one of --testnet and --stagenet</source>
        <translation>--testnet と --stagenet を複数指定することはできません</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4613"/>
        <source>Can&#39;t specify more than one of --wallet-file and --generate-from-json</source>
        <translation>--wallet-file と --generate-from-json を複数指定することはできません</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4619"/>
        <source>--password-file is not allowed in combination with --wallet-dir</source>
        <translation>--password-file は --wallet-dir と組み合わせて使用することはできません</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4631"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>--wallet-file または --generate-from-json または --wallet-dir を指定する必要があります</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4635"/>
        <source>Loading wallet...</source>
        <translation>ウォレットを読み込んでいます...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4683"/>
        <source>Initial refresh failed:</source>
        <translation>初期更新に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4688"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4720"/>
        <source>Saving wallet...</source>
        <translation>ウォレットを保存しています...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4690"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4722"/>
        <source>Successfully saved</source>
        <translation>保存に成功しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4693"/>
        <source>Successfully loaded</source>
        <translation>正常に読み込まれました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4697"/>
        <source>Wallet initialization failed:</source>
        <translation>ウォレットの初期化に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4703"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>ウォレット RPC サーバーの初期化に失敗しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4707"/>
        <source>Starting wallet RPC server</source>
        <translation>ウォレットRPCサーバーの起動</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4714"/>
        <source>Failed to run wallet:</source>
        <translation>ウォレットの実行に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4717"/>
        <source>Stopped wallet RPC server</source>
        <translation>ウォレットRPCサーバーを停止しました</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4726"/>
        <source>Failed to save wallet:</source>
        <translation>ウォレットの保存に失敗しました:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4800"/>
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>これは RPC Salvium ウォレットです。正しく動作するには Salvium デーモンに接続する必要があります。</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="152"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11388"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4779"/>
        <source>Wallet options</source>
        <translation>ウォレットオプション</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>JSON形式のファイルからウォレットを生成する</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>ウォレット&lt;arg&gt;を使用する</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81"/>
        <source>Set RPC client secret key for RPC payments</source>
        <translation>RPC 支払い用の RPC クライアント秘密鍵を設定する</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85"/>
        <source>Wallet password file</source>
        <translation>ウォレットパスワードファイル</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>並列ジョブに使用するスレッドの最大数</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114"/>
        <source>Specify log file</source>
        <translation>ログファイルを指定する</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115"/>
        <source>Config file</source>
        <translation>設定ファイル</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127"/>
        <source>General options</source>
        <translation>一般的なオプション</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>これはコマンドラインの Salvium ウォレットです。正しく動作するには Salvium デーモンに接続する必要があります。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176"/>
        <source>Can&#39;t find config file</source>
        <translation>設定ファイルが見つかりません</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220"/>
        <source>Logging to:</source>
        <translation>ログイン先:</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222"/>
        <source>Logging to %s</source>
        <translation>%s にログ記録中</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226"/>
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>警告: ロック可能なメモリ制限が十分でない可能性があります</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228"/>
        <source>see ulimit -l</source>
        <translation>ulimit -l を参照</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153"/>
        <source>Usage:</source>
        <translation>使用法：</translation>
    </message>
</context>
</TS>
