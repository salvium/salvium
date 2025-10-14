<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="ru">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>Неверный адрес назначения</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60"/>
        <source>Payment ID supplied: this is obsolete</source>
        <translation>Предоставленный идентификатор платежа: устарел</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Попытка сохранить транзакцию в файл, но указанные файлы существуют. Выход, чтобы не рисковать перезаписью. Файл:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>Не удалось записать транзакцию(и) в файл</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>Демон занят. Попробуйте еще раз позже.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>нет подключения к демону. Убедитесь, что демон запущен.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>транзакция %s была отклонена демоном со статусом: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151"/>
        <source>. Reason: </source>
        <translation>. Причина: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153"/>
        <source>Unknown exception: </source>
        <translation>Неизвестное исключение: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156"/>
        <source>Unhandled exception</source>
        <translation>Необработанное исключение</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="241"/>
        <source>Couldn&apos;t multisig sign data: </source>
        <translation>Не удалось подписать данные с помощью мультиподписи: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="263"/>
        <source>Couldn&apos;t sign multisig transaction: </source>
        <translation>Не удалось подписать транзакцию с мультиподписью: </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>Это кошелек только для часов.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>Не удалось подписать транзакцию</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Заявленная сдача не поступает на оплаченный адрес</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Заявленная сумма сдачи больше, чем сумма платежа на адрес сдачи</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184"/>
        <source>Change goes to more than one address</source>
        <translation>Сдача поступает на несколько адресов</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>sending %s to %s</source>
        <translation>отправка %s в %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>with no destinations</source>
        <translation>без пунктов назначения</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209"/>
        <source>%s change to %s</source>
        <translation>%s изменить на %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212"/>
        <source>no change</source>
        <translation>без изменений</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>Загружено %lu транзакций, для %s, комиссия %s, %s, %s, с минимальным размером кольца %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="596"/>
        <source>failed to parse address</source>
        <translation>не удалось проанализировать адрес</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="607"/>
        <source>failed to parse secret spend key</source>
        <translation>не удалось проанализировать секретный ключ расходов</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="622"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Ни ключ просмотра, ни ключ расходования не предоставлены, отменено</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="630"/>
        <source>failed to parse secret view key</source>
        <translation>не удалось проанализировать секретный ключ представления</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="639"/>
        <source>failed to verify secret spend key</source>
        <translation>не удалось проверить секретный ключ расходов</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="643"/>
        <source>spend key does not match address</source>
        <translation>ключ траты не соответствует адресу</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="649"/>
        <source>failed to verify secret view key</source>
        <translation>не удалось проверить секретный ключ просмотра</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="653"/>
        <source>view key does not match address</source>
        <translation>ключ просмотра не соответствует адресу</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="676"/>
        <location filename="../src/wallet/api/wallet.cpp" line="693"/>
        <source>failed to generate new wallet: </source>
        <translation>не удалось создать новый кошелек: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="741"/>
        <source>Electrum seed is empty</source>
        <translation>Семя Электрума пусто</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="750"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Список слов в стиле Electrum не прошел проверку</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118"/>
        <source>Failed to load unsigned transactions</source>
        <translation>Не удалось загрузить неподписанные транзакции</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1143"/>
        <source>Failed to load transaction from file</source>
        <translation>Не удалось загрузить транзакцию из файла</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1159"/>
        <source>Wallet is view only</source>
        <translation>Кошелек доступен только для просмотра</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169"/>
        <source>failed to save file </source>
        <translation>не удалось сохранить файл </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1187"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Ключевые образы можно импортировать только с помощью доверенного демона.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1200"/>
        <source>Failed to import key images: </source>
        <translation>Не удалось импортировать ключевые изображения: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1213"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1245"/>
        <source>Not supported on HW wallets.</source>
        <translation>Не поддерживается на кошельках HW.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1224"/>
        <source>Failed to save file: </source>
        <translation>Не удалось сохранить файл: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231"/>
        <source>Error exporting outputs: </source>
        <translation>Ошибка экспорта выходных данных: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1254"/>
        <source>Failed to read file: </source>
        <translation>Не удалось прочитать файл: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1266"/>
        <source>Failed to import outputs: </source>
        <translation>Не удалось импортировать выходные данные: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1279"/>
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>Не удалось отсканировать транзакции: не предоставлены идентификаторы транзакций.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1290"/>
        <source>Invalid txid specified: </source>
        <translation>Указан неверный txid: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1308"/>
        <source>Failed to scan transaction: </source>
        <translation>Не удалось отсканировать транзакцию: </translation>
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
        <translation>Не удалось получить метку подадреса: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1437"/>
        <source>Failed to set subaddress label: </source>
        <translation>Не удалось установить метку подадреса: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1462"/>
        <source>Failed to get multisig info: </source>
        <translation>Не удалось получить информацию о мультиподписи: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1482"/>
        <source>Failed to make multisig: </source>
        <translation>Не удалось создать мультиподпись: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1496"/>
        <source>Failed to exchange multisig keys: </source>
        <translation>Не удалось обменяться ключами мультиподписи: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1512"/>
        <source>Failed to export multisig images: </source>
        <translation>Не удалось экспортировать изображения с несколькими подписями: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1530"/>
        <source>Failed to parse imported multisig images</source>
        <translation>Не удалось проанализировать импортированные мультисигнатурные изображения</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1540"/>
        <source>Failed to import multisig images: </source>
        <translation>Не удалось импортировать изображения с мультиподписью: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1554"/>
        <source>Failed to check for partial multisig key images: </source>
        <translation>Не удалось проверить наличие частичных мультиподписных ключей: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1582"/>
        <source>Failed to restore multisig transaction: </source>
        <translation>Не удалось восстановить мультиподписную транзакцию: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1664"/>
        <source>Sending all requires one destination address</source>
        <translation>Для отправки всех сообщений требуется один адрес назначения.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1668"/>
        <source>Destinations and amounts are unequal</source>
        <translation>Направления и суммы неравны</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1676"/>
        <source>payment id has invalid format, expected 64 character hex string: </source>
        <translation>идентификатор платежа имеет неверный формат, ожидается 64-символьная шестнадцатеричная строка: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>Invalid destination address</source>
        <translation>Неверный адрес назначения</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1690"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>одна транзакция не может использовать более одного идентификатора платежа</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1718"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>не удалось настроить идентификатор платежа, хотя он был декодирован правильно</translation>
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
        <translation>Демон занят. Попробуйте еще раз позже.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1777"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1871"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>нет подключения к демону. Убедитесь, что демон запущен.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1779"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1873"/>
        <source>RPC error: </source>
        <translation>Ошибка RPC: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1781"/>
        <source>failed to get outputs to mix: %s</source>
        <translation>не удалось смешать выходы: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1785"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1880"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>недостаточно денег для перевода, доступно только %s, отправленная сумма %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1792"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1888"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>недостаточно денег для перевода, общий баланс только %s, отправленная сумма %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1799"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1896"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>недостаточно денег для перевода, доступно только %s, сумма транзакции %s = %s + %s (комиссия)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1807"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1904"/>
        <source>not enough outputs for specified ring size</source>
        <translation>недостаточно выходов для указанного размера кольца</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1809"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1906"/>
        <source>output amount</source>
        <translation>выходная сумма</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1809"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1906"/>
        <source>found outputs to use</source>
        <translation>найдены выходы для использования</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1811"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>Пожалуйста, подметите несмешиваемые выходы.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1814"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1910"/>
        <source>transaction was not constructed</source>
        <translation>транзакция не была построена</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1817"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1913"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>транзакция %s была отклонена демоном со статусом: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1822"/>
        <source>destination amount is zero</source>
        <translation>сумма назначения равна нулю</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1824"/>
        <source>transaction has no destination</source>
        <translation>транзакция не имеет назначения</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1826"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1920"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>не удалось найти подходящий способ разделения транзакций</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1828"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1922"/>
        <source>unknown transfer error: </source>
        <translation>неизвестная ошибка передачи: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1830"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1924"/>
        <source>internal error: </source>
        <translation>внутренняя ошибка: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1832"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1926"/>
        <source>unexpected error: </source>
        <translation>непредвиденная ошибка: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1834"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1928"/>
        <source>unknown error</source>
        <translation>неизвестная ошибка</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1875"/>
        <source>failed to get outputs to mix</source>
        <translation>не удалось смешать выходы</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1918"/>
        <source>one of destinations is zero</source>
        <translation>один из пунктов назначения равен нулю</translation>
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
        <translation>Не удалось проанализировать txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2069"/>
        <source>no tx keys found for this txid</source>
        <translation>для этого txid не найдено ключей tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2093"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2102"/>
        <source>Failed to parse tx key</source>
        <translation>Не удалось проанализировать ключ tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2111"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2143"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2171"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2258"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2292"/>
        <source>Failed to parse address</source>
        <translation>Не удалось проанализировать адрес</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2263"/>
        <source>Address must not be a subaddress</source>
        <translation>Адрес не должен быть подадресом</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2297"/>
        <source>Address doesn&apos;t belong to the wallet</source>
        <translation>Адрес не принадлежит кошельку</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2321"/>
        <source>The wallet must be in multisig ready state</source>
        <translation>Кошелек должен быть в состоянии готовности к мультиподписи.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2343"/>
        <source>Given string is not a key</source>
        <translation>Данная строка не является ключом</translation>
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
        <translation>Повторное сканирование может быть использовано только с доверенным демоном</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2692"/>
        <source>Invalid output: </source>
        <translation>Неверный вывод: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2699"/>
        <source>Failed to mark outputs as spent</source>
        <translation>Не удалось отметить результаты как потраченные</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2710"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2732"/>
        <source>Failed to parse output amount</source>
        <translation>Не удалось проанализировать выходную сумму</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2715"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2737"/>
        <source>Failed to parse output offset</source>
        <translation>Не удалось проанализировать смещение вывода</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2721"/>
        <source>Failed to mark output as spent</source>
        <translation>Не удалось отметить вывод как потраченный</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2743"/>
        <source>Failed to mark output as unspent</source>
        <translation>Не удалось отметить вывод как неизрасходованный</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2754"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2793"/>
        <source>Failed to parse key image</source>
        <translation>Не удалось проанализировать ключевое изображение</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2760"/>
        <source>Failed to get ring</source>
        <translation>Не удалось получить кольцо</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2778"/>
        <source>Failed to get rings</source>
        <translation>Не удалось получить кольца</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2799"/>
        <source>Failed to set ring</source>
        <translation>Не удалось установить кольцо</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="351"/>
        <source>Failed to parse address</source>
        <translation>Не удалось проанализировать адрес</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="358"/>
        <source>Failed to parse key</source>
        <translation>Не удалось проанализировать ключ</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="366"/>
        <source>failed to verify key</source>
        <translation>не удалось проверить ключ</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="376"/>
        <source>key does not match address</source>
        <translation>ключ не соответствует адресу</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54"/>
        <source>yes</source>
        <translation>да</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68"/>
        <source>no</source>
        <translation>нет</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92"/>
        <source>Specify IP to bind RPC server</source>
        <translation>Укажите IP для привязки RPC-сервера</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93"/>
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>Укажите адрес IPv6 для привязки RPC-сервера</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94"/>
        <source>Specify IP to bind restricted RPC server</source>
        <translation>Укажите IP для привязки ограниченного RPC-сервера</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95"/>
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>Укажите адрес IPv6 для привязки ограниченного сервера RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96"/>
        <source>Allow IPv6 for RPC</source>
        <translation>Разрешить IPv6 для RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97"/>
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>Игнорировать неудачную привязку IPv4 для RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>Укажите имя пользователя[:пароль], необходимые для сервера RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Убедитесь, что значение rpc-bind-ip НЕ является петлевым (локальным) IP-адресом</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Укажите список источников, разделенных запятыми, чтобы разрешить кросс-источниковый обмен ресурсами.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>Включить SSL для RPC-подключений: включено|отключено|автоопределение</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102"/>
        <source>Path to a PEM format private key</source>
        <translation>Путь к закрытому ключу в формате PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103"/>
        <source>Path to a PEM format certificate</source>
        <translation>Путь к сертификату формата PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Путь к файлу, содержащему объединенные сертификаты формата PEM для замены системных центров сертификации.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105"/>
        <source>List of certificate fingerprints to allow</source>
        <translation>Список разрешенных отпечатков пальцев сертификатов</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106"/>
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>Разрешить пользователю (через --rpc-ssl-certificates) цепочку сертификатов</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107"/>
        <source>Allow any peer certificate</source>
        <translation>Разрешить любой одноранговый сертификат</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108"/>
        <source>Do not ban hosts on RPC errors</source>
        <translation>Не банить хосты из-за ошибок RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155"/>
        <location filename="../src/rpc/rpc_args.cpp" line="183"/>
        <location filename="../src/rpc/rpc_args.cpp" line="204"/>
        <location filename="../src/rpc/rpc_args.cpp" line="221"/>
        <source>Invalid IP address given for --</source>
        <translation>Указан неверный IP-адрес для --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163"/>
        <location filename="../src/rpc/rpc_args.cpp" line="191"/>
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> разрешает входящие незашифрованные внешние соединения. Рассмотрите вместо этого туннель SSH или прокси SSL. Переопределить с помощью --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source>Username specified with --</source>
        <translation>Имя пользователя указано с помощью --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source> cannot be empty</source>
        <translation> не может быть пустым</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5202"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Демон использует другую основную версию RPC (%u), чем кошелек (%u): %s. Либо обновите одну из них, либо используйте --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7452"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8016"/>
        <source>Spending from address index %d
</source>
        <translation>Расходы с индекса адреса %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7469"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Ваша транзакция должна быть разделена на %llu транзакций. Это приведет к тому, что к каждой транзакции будет применена комиссия за транзакцию, общая сумма составит %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7475"/>
        <source>The transaction fee is %s</source>
        <translation>Комиссия за транзакцию составляет %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478"/>
        <source>, of which %s is dust from change</source>
        <translation>, из которых %s — это пыль от изменения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7479"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Всего %s от изменения пыли будет отправлено на адрес пыли</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7768"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Недостаточно денег на разблокированном балансе</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7813"/>
        <source>No address given</source>
        <translation>Адрес не указан</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7879"/>
        <source>missing lockedblocks parameter</source>
        <translation>отсутствует параметр lockedblocks</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7889"/>
        <source>bad locked_blocks parameter</source>
        <translation>плохой параметр locked_blocks</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8188"/>
        <source>failed to parse Payment ID</source>
        <translation>не удалось проанализировать идентификатор платежа</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2320"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2368"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8211"/>
        <source>failed to parse key image</source>
        <translation>не удалось проанализировать ключевое изображение</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8489"/>
        <source>No outputs found</source>
        <translation>Выходы не найдены</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8254"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8494"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Создается несколько транзакций, чего не должно происходить.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8259"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>Транзакция использует несколько входов или не использует ни одного, чего не должно быть.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8309"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8336"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8591"/>
        <source>Money successfully sent, transaction: </source>
        <translation>Деньги успешно отправлены, транзакция: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8387"/>
        <source>missing threshold amount</source>
        <translation>отсутствует пороговая сумма</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8393"/>
        <source>invalid amount threshold</source>
        <translation>недействительный порог суммы</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9076"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>Заявленная сдача не поступает на оплаченный адрес</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9081"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>Заявленная сумма сдачи больше, чем сумма платежа на адрес сдачи</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9090"/>
        <source>Change goes to more than one address</source>
        <translation>Сдача поступает на несколько адресов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9112"/>
        <source>sending %s to %s</source>
        <translation>отправка %s в %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9122"/>
        <source> dummy output(s)</source>
        <translation> фиктивный выход(ы)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9125"/>
        <source>with no destinations</source>
        <translation>без пунктов назначения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9134"/>
        <source>no change</source>
        <translation>без изменений</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6052"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Демон локальный, предполагается, что он доверенный</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703"/>
        <source>Password for new watch-only wallet</source>
        <translation>Пароль для нового кошелька, предназначенного только для просмотра</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="435"/>
        <source>false</source>
        <translation>ЛОЖЬ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="832"/>
        <source>Commands: </source>
        <translation>Команды: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="846"/>
        <source>Unknown command: </source>
        <translation>Неизвестная команда: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="853"/>
        <source>Command usage: </source>
        <translation>Использование команды: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856"/>
        <source>Command description: </source>
        <translation>Описание команды: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="917"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>кошелек предназначен только для просмотра и не имеет ключа траты</translation>
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
        <translation>команда не поддерживается HW-кошельком</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="949"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>кошелек предназначен только для просмотра и не имеет сид-фразы</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="959"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>кошелек мультиподписной, но еще не завершен</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1038"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>кошелек недетерминирован и не имеет seed-фразы</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="992"/>
        <source>Failed to retrieve seed</source>
        <translation>Не удалось получить семя</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1022"/>
        <source>wallet is multisig and has no seed</source>
        <translation>кошелек мультиподписной и не имеет seed-фразы</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1048"/>
        <source>Incorrect password</source>
        <translation>Неправильный пароль</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1070"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330"/>
        <source>Your original password was incorrect.</source>
        <translation>Ваш исходный пароль был неверным.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085"/>
        <source>Error with wallet rewrite: </source>
        <translation>Ошибка при перезаписи кошелька: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11145"/>
        <source>Random payment ID: </source>
        <translation>Случайный идентификатор платежа: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1106"/>
        <source>Current fee is %s %s per %s</source>
        <translation>Текущая плата составляет %s %s за %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="518"/>
        <source>failed to parse background sync type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="660"/>
        <source>Payment required, see the &apos;rpc_payment_info&apos; command</source>
        <translation>Требуется оплата, см. команду «rpc_payment_info»</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1122"/>
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Ошибка: не удалось оценить размер массива отставания: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1127"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>Ошибка: неверная оценка размера массива отставания</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1139"/>
        <source> (current)</source>
        <translation> (текущий)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1142"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u блок (%u минут) задержка с приоритетом %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1144"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u до %u блока (%u до %u минут) задержка с приоритетом %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1147"/>
        <source>No backlog at priority </source>
        <translation>Отсутствие отставания в приоритете </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1169"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1217"/>
        <source>This wallet is already multisig</source>
        <translation>Этот кошелек уже мультиподписан</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1174"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1222"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>кошелек предназначен только для просмотра и не может быть сделан мультиподписным</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1181"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1228"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Этот кошелек уже использовался ранее. Пожалуйста, используйте новый кошелек для создания кошелька с мультиподписью.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1189"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation>Отправьте эту информацию multisig всем остальным участникам, затем используйте make_multisig&lt;threshold&gt;&lt;info1&gt; [&lt;info2&gt; ...] с чужой мультиподписной информацией</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet&apos;s participants </source>
        <translation>Сюда входит ЧАСТНЫЙ ключ просмотра, поэтому его необходимо раскрывать только участникам этого кошелька с мультиподписью. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1242"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3006"/>
        <source>Invalid threshold</source>
        <translation>Неверный порог</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1262"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1339"/>
        <source>Another step is needed</source>
        <translation>Нужен еще один шаг</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1274"/>
        <source>Error creating multisig: </source>
        <translation>Ошибка создания мультиподписи: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1281"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Ошибка создания мультиподписи: новый кошелек не мультиподписной</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1284"/>
        <source> multisig address: </source>
        <translation> мультиподписной адрес: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1318"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1380"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1448"/>
        <source>This wallet is not multisig</source>
        <translation>Этот кошелек не является мультиподписным</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1323"/>
        <source>This wallet is already finalized</source>
        <translation>Этот кошелек уже завершен</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1350"/>
        <source>Multisig address: </source>
        <translation>Мультиподписной адрес: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1553"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1669"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1751"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation>Этот кошелек с мультиподписью еще не завершен</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1413"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11536"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11695"/>
        <source>failed to save file </source>
        <translation>не удалось сохранить файл </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1421"/>
        <source>Error exporting multisig info: </source>
        <translation>Ошибка экспорта мультиподписной информации: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1425"/>
        <source>Multisig info exported to </source>
        <translation>Информация о мультиподписях экспортируется в </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1476"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11448"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11474"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11729"/>
        <source>failed to read file </source>
        <translation>не удалось прочитать файл </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1497"/>
        <source>Failed to import multisig info: </source>
        <translation>Не удалось импортировать информацию о мультиподписях: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1508"/>
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>Не удалось обновить статус расходов после импорта информации о мультиподписи: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1514"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>Ненадежный демон, статус потраченных средств может быть неверным. Используйте надежный демон и запустите &amp;quot;rescan_spent&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1548"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1664"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1746"/>
        <source>This is not a multisig wallet</source>
        <translation>Это не мультиподписной кошелек</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1607"/>
        <source>Failed to sign multisig transaction</source>
        <translation>Не удалось подписать мультиподписную транзакцию</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614"/>
        <source>Multisig error: </source>
        <translation>Ошибка мультиподписи: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1619"/>
        <source>Failed to sign multisig transaction: </source>
        <translation>Не удалось подписать транзакцию с мультиподписью: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1626"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1639"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9226"/>
        <source>Transaction successfully signed to file </source>
        <translation>Транзакция успешно подписана в файл </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1640"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Его можно передать в сеть с помощью submit_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1701"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1772"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>Не удалось загрузить мультиподписную транзакцию из файла</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1707"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1777"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Транзакция с несколькими подписями подписана только %u подписчиками, требуется еще %u подписей</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1716"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11939"/>
        <source>Transaction successfully submitted, transaction </source>
        <translation>Транзакция успешно отправлена, транзакция </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1717"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11940"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>Вы можете проверить его статус с помощью команды `show_transfers`.</translation>
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
        <translation>неизвестная ошибка</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1793"/>
        <source>Failed to export multisig transaction to file </source>
        <translation>Не удалось экспортировать мультиподписную транзакцию в файл </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1797"/>
        <source>Saved exported multisig transaction file(s): </source>
        <translation>Сохраненные экспортированные файлы транзакций с мультиподписью: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2143"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6431"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772"/>
        <source>unexpected error: </source>
        <translation>непредвиденная ошибка: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1825"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1982"/>
        <source>Invalid key image</source>
        <translation>Неверное изображение ключа</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1831"/>
        <source>Invalid txid</source>
        <translation>Неверный txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1858"/>
        <source>Failed to get key image ring: </source>
        <translation>Не удалось получить кольцо с изображением ключа: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1873"/>
        <source>File doesn&apos;t exist</source>
        <translation>Файл не существует</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1895"/>
        <source>Invalid ring specification: </source>
        <translation>Неверная спецификация кольца: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1903"/>
        <source>Invalid key image: </source>
        <translation>Неверное изображение ключа: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1908"/>
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>Неверный тип кольца, ожидается относительный или абсолютный: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1926"/>
        <source>Error reading line: </source>
        <translation>Ошибка чтения строки: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1937"/>
        <source>Invalid ring: </source>
        <translation>Неверный звонок: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946"/>
        <source>Invalid relative ring: </source>
        <translation>Неверное относительное кольцо: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1958"/>
        <source>Invalid absolute ring: </source>
        <translation>Неверное абсолютное кольцо: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1967"/>
        <source>Failed to set ring for key image: </source>
        <translation>Не удалось установить кольцо для изображения ключа: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1967"/>
        <source>Continuing.</source>
        <translation>Продолжение.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1997"/>
        <source>Missing absolute or relative keyword</source>
        <translation>Отсутствует абсолютное или относительное ключевое слово</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2007"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>недопустимый индекс: должен быть строго положительным целым числом без знака</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>invalid index: indices wrap</source>
        <translation>недействительный индекс: перенос индексов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2032"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>неверный индекс: индексы должны быть в строго возрастающем порядке</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039"/>
        <source>failed to set ring</source>
        <translation>не удалось установить кольцо</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2062"/>
        <source>Invalid key image or txid</source>
        <translation>Неверный образ ключа или txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2071"/>
        <source>failed to unset ring</source>
        <translation>не удалось снять кольцо</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094"/>
        <source>RPC client ID: </source>
        <translation>Идентификатор клиента RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2095"/>
        <source>RPC client secret key: </source>
        <translation>Секретный ключ клиента RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2098"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2529"/>
        <source>Failed to query daemon</source>
        <translation>Не удалось запросить демон</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2106"/>
        <source>Using daemon: </source>
        <translation>Использование демона: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2107"/>
        <source>Payments required for node use, current credits: </source>
        <translation>Платежи, необходимые для использования узла, текущие кредиты: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108"/>
        <source>Credits target: </source>
        <translation>Целевые кредиты: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2111"/>
        <source>Credits spent this session: </source>
        <translation>Кредиты, потраченные на эту сессию: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2113"/>
        <source>Credit discrepancy this session: </source>
        <translation>Кредитное расхождение в этом сеансе: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2115"/>
        <source>Difficulty: </source>
        <translation>Уровень сложности: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2115"/>
        <source>credits per hash found, </source>
        <translation>кредиты за найденный хэш, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2115"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2413"/>
        <source>credits/hash</source>
        <translation>кредиты/хэш</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2123"/>
        <source>Mining for payment at %.1f H/s</source>
        <translation>Майнинг за оплату %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2128"/>
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>Расчетное время до добычи %u кредитов: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2132"/>
        <source>Mining for payment</source>
        <translation>Майнинг за плату</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2135"/>
        <source>Not mining</source>
        <translation>Не майнинг</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2138"/>
        <source>No payment needed for node use</source>
        <translation>Плата за использование узла не требуется</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211"/>
        <source>Bad argument: </source>
        <translation>Плохой аргумент: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211"/>
        <source>should be &quot;add&quot;</source>
        <translation>должно быть &amp;quot;добавить&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220"/>
        <source>Failed to open file</source>
        <translation>Не удалось открыть файл</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2304"/>
        <source>Failed to save known rings: </source>
        <translation>Не удалось сохранить известные кольца: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2314"/>
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>использование: %s&lt;key_image&gt; |&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2360"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2372"/>
        <source>Frozen: </source>
        <translation>Замороженные: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2374"/>
        <source>Not frozen: </source>
        <translation>Не заморожено: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2388"/>
        <source> bytes sent</source>
        <translation> отправлено байтов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2389"/>
        <source> bytes received</source>
        <translation> байты получены</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2401"/>
        <source>No known public nodes</source>
        <translation>Нет известных публичных узлов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2413"/>
        <source>address</source>
        <translation>адрес</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2413"/>
        <source>last_seen</source>
        <translation>последний_виден</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2419"/>
        <source>never</source>
        <translation>никогда</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2427"/>
        <source>Error retrieving public node list: </source>
        <translation>Ошибка при получении списка публичных узлов: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2437"/>
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium, как и Bitcoin, является криптовалютой. То есть это цифровые деньги.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2441"/>
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>Salvium защищает вашу конфиденциальность на блокчейне, и хотя Salvium постоянно стремится к совершенствованию,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2442"/>
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>Ни одна технология обеспечения конфиденциальности не может быть на 100% идеальной, включая Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2443"/>
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>Salvium не может защитить вас от вредоносных программ и может оказаться не столь эффективным, как мы надеемся, против могущественных противников.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2444"/>
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>В будущем могут быть обнаружены недостатки в Salvium, и могут быть разработаны атаки, позволяющие заглянуть под некоторые</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2445"/>
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>слоев конфиденциальности, которые предоставляет Salvium. Будьте в безопасности и практикуйте глубокую защиту.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2534"/>
        <source>Daemon does not require payment for RPC access</source>
        <translation>Демон не требует оплаты за доступ к RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2542"/>
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>Запуск майнинга для доступа RPC: diff %llu, %f credits/hash%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2543"/>
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>Запустите stop_mining_for_rpc, чтобы остановить</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2589"/>
        <source>invalid derive type: must be &apos;carrot&apos; or &apos;precarrot&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2666"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>кошелек предназначен только для просмотра и не может переводить</translation>
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
        <translation>ВНИМАНИЕ: это нестандартный размер кольца, который может нарушить вашу конфиденциальность. Рекомендуется использовать значение по умолчанию.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2688"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2711"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2727"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>Приоритет должен быть 0, 1, 2, 3 или 4, или одним из: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2732"/>
        <source>could not change default priority</source>
        <translation>не удалось изменить приоритет по умолчанию</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2818"/>
        <source>invalid unit</source>
        <translation>недействительная единица</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2854"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2916"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>неверное количество: должно быть целым числом без знака</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2836"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2872"/>
        <source>invalid value</source>
        <translation>недопустимое значение</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2950"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3068"/>
        <source>Invalid height</source>
        <translation>Неверный рост</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3023"/>
        <source>Invalid target</source>
        <translation>Неверная цель</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3099"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3118"/>
        <source>Invalid amount</source>
        <translation>Неверная сумма</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3239"/>
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>недопустимый аргумент: должен быть либо 1/да, либо 0/нет</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3528"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Запустите майнинг в демоне (bg_mining и ignore_battery — необязательные логические значения).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3531"/>
        <source>Stop mining in the daemon.</source>
        <translation>Остановите майнинг в демоне.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3538"/>
        <source>Save the current blockchain data.</source>
        <translation>Сохраните текущие данные блокчейна.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3541"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>Синхронизируйте транзакции и баланс.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3545"/>
        <source>Show the wallet&apos;s balance of the currently selected account.</source>
        <translation>Показать баланс кошелька текущего выбранного счета.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3549"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent(&quot;T&quot;|&quot;F&quot;), &quot;frozen&quot;|&quot;locked&quot;|&quot;unlocked&quot;, RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation>Показать входящие переводы, все или отфильтрованные по доступности и индексу адреса. Формат вывода: Сумма, Потрачено(&amp;quot;T&amp;quot;|&amp;quot;F&amp;quot;), &amp;quot;заморожено&amp;quot;|&amp;quot;заблокировано&amp;quot;|&amp;quot;разблокировано&amp;quot;, RingCT, Глобальный индекс, Хэш транзакции, Индекс адреса, [Открытый ключ, Изображение ключа] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3555"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>Показывать платежи по указанным идентификаторам платежей.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3558"/>
        <source>Show the blockchain height.</source>
        <translation>Покажите высоту блокчейна.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Отправьте все несмешанные выходы себе с помощью ring_size 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3582"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Отправлять все разблокированные выходы ниже порогового значения на адрес.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3586"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Отправить один вывод указанного ключевого изображения по адресу без изменений.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3626"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default &quot;unsigned_salvium_tx&quot; will be used.</source>
        <translation>Подписать транзакцию из файла. Если указан параметр &amp;quot;export_raw&amp;quot;, экспортируются необработанные шестнадцатеричные данные транзакции, подходящие для демона RPC /sendrawtransaction. Используйте параметр&lt;filename&gt; для указания файла для чтения. Если не указано, будет использовано значение по умолчанию &amp;quot;unsigned_salvium_tx&amp;quot;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3630"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>Отправьте подписанную транзакцию из файла.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3634"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Измените текущую детализацию журнала (уровень должен быть &amp;lt;0-4&amp;gt;).</translation>
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
        <translation>Если аргументы не указаны, кошелек показывает все существующие счета вместе с их балансами. Если указан аргумент &amp;quot;new&amp;quot;, кошелек создает новый счет с его меткой, инициализированной предоставленным текстом метки (который может быть пустым). Если указан аргумент &amp;quot;switch&amp;quot;, кошелек переключается на счет, указанный&lt;index&gt; . Если указан аргумент «label», кошелек устанавливает метку учетной записи, указанной&lt;index&gt; к предоставленному тексту метки. Если указан аргумент &amp;quot;тег&amp;quot;, тег&lt;tag_name&gt; назначается указанным счетам&lt;account_index_1&gt; ,&lt;account_index_2&gt; , .... Если указан аргумент &amp;quot;untag&amp;quot;, теги, назначенные указанным учетным записям&lt;account_index_1&gt; ,&lt;account_index_2&gt; ..., удаляются. Если указан аргумент &amp;quot;tag_description&amp;quot;, тег&lt;tag_name&gt; назначается произвольный текст&lt;description&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3652"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Кодирует идентификатор платежа в интегрированный адрес для текущего публичного адреса кошелька (без аргументов использует случайный идентификатор платежа) или декодирует интегрированный адрес в стандартный адрес и идентификатор платежа</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3656"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Распечатать все записи в адресной книге, при желании добавить/удалить запись в/из нее.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3659"/>
        <source>Save the wallet data.</source>
        <translation>Сохраните данные кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3662"/>
        <source>Save a watch-only keys file.</source>
        <translation>Сохраните файл ключей, доступный только для просмотра.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3668"/>
        <source>Display the private view key.</source>
        <translation>Отобразить закрытый ключ просмотра.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3671"/>
        <source>Display the private spend key.</source>
        <translation>Отобразить закрытый ключ расходов.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3674"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Отобразить мнемоническое семя в стиле Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3760"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Отобразить зашифрованное мнемоническое семя в стиле Electrum.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3763"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Повторно просканируйте блокчейн на предмет потраченных выходов.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3767"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Получить ключ транзакции (r) для заданного&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3771"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Установите ключ транзакции (r) для заданного&lt;txid&gt; в случае, если транзакция была сделана с другого устройства или стороннего кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3775"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Проверьте сумму, которая будет&lt;address&gt; в&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3779"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet&apos;s address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Сгенерируйте подпись, подтверждающую отправку средств&lt;address&gt; в&lt;txid&gt; , опционально со строкой вызова&lt;message&gt; , используя либо секретный ключ транзакции (когда&lt;address&gt; не является адресом вашего кошелька) или просмотреть секретный ключ (в противном случае), что не раскрывает секретный ключ.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3783"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Проверьте подтверждение поступивших средств&lt;address&gt; в&lt;txid&gt; с вызовом строки&lt;message&gt; если таковые имеются.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3787"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Создайте подпись, подтверждающую, что вы ее создали&lt;txid&gt; с использованием секретного ключа траты, опционально со строкой проверки&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3791"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Проверьте подпись, подтверждающую, что подписавший сгенерировал&lt;txid&gt; , опционально со строкой вызова&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If &apos;all&apos; is specified, you prove the entire sum of all of your existing accounts&apos; balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Создайте подпись, подтверждающую, что вы владеете как минимум этой суммой, при желании с контрольной строкой&lt;message&gt; . Если указано «все», вы подтверждаете всю сумму остатков всех ваших существующих счетов. В противном случае вы подтверждаете резерв минимально возможной суммы выше&lt;amount&gt; доступны в вашем текущем аккаунте.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3801"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Проверьте подпись, подтверждающую, что владелец&lt;address&gt; вмещает как минимум столько же, опционально со строкой вызова&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3822"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Показывать неизрасходованные выходы указанного адреса в пределах необязательного диапазона сумм.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3830"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Установите произвольную ноту струны для&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3834"/>
        <source>Get a string note for a txid.</source>
        <translation>Получите строковую заметку для txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3838"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Задайте произвольное описание для кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3842"/>
        <source>Get the description of the wallet.</source>
        <translation>Получите описание кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845"/>
        <source>Show the wallet&apos;s status.</source>
        <translation>Показать статус кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3848"/>
        <source>Show the wallet&apos;s information.</source>
        <translation>Показать информацию о кошельке.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3856"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>Проверьте подпись на содержимом файла.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3864"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Импортируйте список подписанных образов ключей и проверьте их статус расходования.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3872"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Попытки повторно подключить HW-кошелек.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3876"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Экспортировать набор выходов, принадлежащих этому кошельку.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3880"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Импортируйте набор выходов, принадлежащих этому кошельку.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3884"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>Показать информацию о переводе на/с этого адреса.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3887"/>
        <source>Change the wallet&apos;s password.</source>
        <translation>Измените пароль кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3894"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Распечатайте информацию о текущей комиссии и невыполненных транзакциях.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3896"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>Экспорт данных, необходимых для создания кошелька с мультиподписью</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3899"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Превратите этот кошелек в кошелек с мультиподписью</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3907"/>
        <source>Export multisig info for other participants</source>
        <translation>Экспортировать мультиподписную информацию для других участников</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3911"/>
        <source>Import multisig info from other participants</source>
        <translation>Импорт мультиподписной информации от других участников</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3915"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>Подписать мультиподписную транзакцию из файла</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3919"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Отправить подписанную мультиподписную транзакцию из файла</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3923"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>Экспортировать подписанную мультиподписную транзакцию в файл</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, &quot;absolute&quot;, list of rings</source>
        <translation>Распечатать кольцо(я), использованное для траты данного образа ключа или транзакции (если размер кольца &amp;gt; 1) Формат вывода: Образ ключа, «абсолютный», список колец</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Установите кольцо, используемое для данного образа ключа, чтобы его можно было повторно использовать в форке</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4024"/>
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>Отменяет установку кольца, используемого для данного образа ключа или транзакции.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4028"/>
        <source>Save known rings to the shared rings database</source>
        <translation>Сохранение известных колец в общей базе данных колец</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044"/>
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>Заморозить один вывод по ключевому изображению, чтобы он не использовался</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4048"/>
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>Разморозьте один выходной файл по ключевому изображению, чтобы его можно было использовать снова</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4052"/>
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>Проверяет, заморожен ли в данный момент заданный вывод ключевым изображением</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4060"/>
        <source>Prints simple network stats</source>
        <translation>Распечатывает простую сетевую статистику</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4064"/>
        <source>Lists known public nodes</source>
        <translation>Список известных публичных узлов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4068"/>
        <source>Prints basic info about Salvium for first time users</source>
        <translation>Распечатывает основную информацию о Salvium для новых пользователей</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4072"/>
        <source>Returns version information</source>
        <translation>Возвращает информацию о версии</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4076"/>
        <source>Get info about RPC payments to current node</source>
        <translation>Получить информацию о платежах RPC на текущий узел</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4080"/>
        <source>Start mining to pay for RPC access</source>
        <translation>Начните майнинг, чтобы оплатить доступ RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4084"/>
        <source>Stop mining to pay for RPC access</source>
        <translation>Остановите майнинг, чтобы заплатить за доступ RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4092"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Показать раздел справки или документацию по&lt;command&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4186"/>
        <source>needs an argument</source>
        <translation>нужен аргумент</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4200"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>установить семя: требуется аргумент. доступные параметры: язык</translation>
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
        <translation>0 или 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4213"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full (самый медленный, без предположений); optimize-coinbase (быстрый, предполагает, что вся coinbase выплачивается на один адрес); no-coinbase (самый быстрый, предполагает, что мы не получаем ни одной транзакции coinbase), default (то же, что optimize-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4214"/>
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0, 1, 2, 3 или 4, или одно из </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4215"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (или никогда|действие|расшифровка)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4217"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4218"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4222"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4229"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4243"/>
        <source>unsigned integer</source>
        <translation>беззнаковое целое число</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4219"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4232"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>amount</source>
        <translation>количество</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4224"/>
        <source>block height</source>
        <translation>высота блока</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4228"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;major&gt;:&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4237"/>
        <source>1/yes or 0/no</source>
        <translation>1/да или 0/нет</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4242"/>
        <source>floating point &gt;= 0</source>
        <translation>с плавающей точкой &amp;gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4248"/>
        <source>set: unrecognized argument(s)</source>
        <translation>набор: нераспознанные аргументы</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4306"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>Имя кошелька недействительно. Попробуйте еще раз или используйте Ctrl-C для выхода.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4318"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Попытка создать или восстановить кошелек, но указанные файлы существуют. Выход, чтобы не рисковать перезаписью.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4323"/>
        <source>Wallet and key files found, loading...</source>
        <translation>Файлы кошелька и ключа найдены, загрузка...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4329"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Файл ключа найден, но не файл кошелька. Регенерация...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4335"/>
        <source>Key file not found. Failed to open wallet: </source>
        <translation>Файл ключа не найден. Не удалось открыть кошелек: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4343"/>
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>Кошелек с таким именем не найден. Подтвердите создание нового кошелька с именем: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4354"/>
        <source>Generating new wallet...</source>
        <translation>Создание нового кошелька...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4435"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Нельзя указать более одного из параметров --testnet и --stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4481"/>
        <source>can&apos;t specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>нельзя указать одновременно --restore-deterministic-wallet или --restore-multisig-wallet и --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4487"/>
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet использует --generate-new-wallet, а не --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4489"/>
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet использует --generate-new-wallet, а не --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4503"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;multisig seed here&quot;</source>
        <translation>укажите параметр восстановления с помощью --electrum-seed=&amp;quot;multisig seed here&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4518"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>укажите параметр восстановления с помощью --electrum-seed=&amp;quot;список слов здесь&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4532"/>
        <source>Multisig seed failed verification</source>
        <translation>Multisig seed не прошел проверку</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4541"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Список слов в стиле Electrum не прошел проверку</translation>
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
        <translation>Данные не предоставлены, отменено</translation>
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
        <translation>не удалось проанализировать адрес</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4572"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Этот адрес является подадресом, который здесь использовать нельзя.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4587"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4648"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4742"/>
        <source>failed to parse view key secret key</source>
        <translation>не удалось проанализировать секретный ключ ключа представления</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4596"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759"/>
        <source>failed to verify view key secret key</source>
        <translation>не удалось проверить просмотр ключа секретный ключ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4600"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4763"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4845"/>
        <source>view key does not match standard address</source>
        <translation>ключ просмотра не соответствует стандартному адресу</translation>
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
        <translation>создание учетной записи не удалось</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4685"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4727"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4870"/>
        <source>failed to parse spend key secret key</source>
        <translation>не удалось проанализировать секретный ключ траты</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4751"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4890"/>
        <source>failed to verify spend key secret key</source>
        <translation>не удалось проверить секретный ключ траты</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4755"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4895"/>
        <source>spend key does not match standard address</source>
        <translation>ключ траты не соответствует стандартному адресу</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4790"/>
        <source>Error: expected M/N, but got: </source>
        <translation>Ошибка: ожидался M/N, но получено: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4795"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Ошибка: ожидалось N &amp;gt; 1 и N &amp;lt;= M, но получено: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4800"/>
        <source>Error: M/N is currently unsupported. </source>
        <translation>Ошибка: M/N в настоящее время не поддерживается. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4803"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Генерация главного кошелька из %u из %u ключей кошелька с мультиподписью</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4832"/>
        <source>failed to parse secret view key</source>
        <translation>не удалось проанализировать секретный ключ представления</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4840"/>
        <source>failed to verify secret view key</source>
        <translation>не удалось проверить секретный ключ просмотра</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4883"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>Ошибка: M/N в настоящее время не поддерживается</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4935"/>
        <source>No restore height is specified.</source>
        <translation>Высота восстановления не указана.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4936"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Если вы создаете новую учетную запись, восстановление будет выполнено с текущей расчетной высоты блокчейна.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4941"/>
        <source>account creation aborted</source>
        <translation>создание учетной записи отменено</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4951"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>укажите путь к кошельку с помощью --generate-new-wallet (не --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5015"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5035"/>
        <source>bad m_restore_height parameter: </source>
        <translation>Неправильный параметр m_restore_height: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4979"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5026"/>
        <source>Restore height is: </source>
        <translation>Высота восстановления: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5049"/>
        <source>Restore height </source>
        <translation>Восстановить высоту </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065"/>
        <source>can&apos;t specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>нельзя указать --subaddress-lookahead и --wallet-file одновременно</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5069"/>
        <source>failed to open account</source>
        <translation>не удалось открыть счет</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5074"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5866"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9461"/>
        <source>wallet is null</source>
        <translation>кошелек нулевой</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5108"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Не удалось инициализировать базу данных кольца: функции повышения конфиденциальности будут неактивны</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5189"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5193"/>
        <source>wallet failed to connect to daemon: </source>
        <translation>Кошелек не смог подключиться к демону: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5194"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation>Демон либо не запущен, либо передан неправильный порт. Убедитесь, что демон запущен, или измените адрес демона с помощью команды &amp;#39;set_daemon&amp;#39;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5223"/>
        <source>List of available languages for your wallet&apos;s seed:</source>
        <translation>Список доступных языков для фразы вашего кошелька:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5224"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Если дисплей завис, выйдите вслепую с помощью ^C, а затем запустите снова с помощью --use-english-language-names</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5242"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5247"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>Введен неверный выбор языка. Попробуйте еще раз.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5264"/>
        <source>invalid password</source>
        <translation>неверный пароль</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5312"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Вы использовали устаревшую версию кошелька. Пожалуйста, используйте новую фразу, которую мы вам предоставим.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5340"/>
        <source>View key: </source>
        <translation>Посмотреть ключ: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5346"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5421"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5465"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5529"/>
        <source>failed to generate new wallet: </source>
        <translation>не удалось создать новый кошелек: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460"/>
        <source>Generated new wallet on hw device: </source>
        <translation>Сгенерирован новый кошелек на аппаратном устройстве: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5521"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>не удалось сгенерировать новый кошелек mullisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5524"/>
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Сгенерирован новый мультиподписной кошелек %u/%u: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5540"/>
        <source>wallet file path not valid: </source>
        <translation>Неверный путь к файлу кошелька: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5550"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation>Файл ключа не найден. Не удалось открыть кошелек</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5570"/>
        <source>Opened watch-only wallet</source>
        <translation>Открытый кошелек только для часов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5572"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>Открыт %u/%u мультиподписной кошелек%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5598"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Вы использовали устаревшую версию кошелька. Пожалуйста, обновите свой кошелек.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5613"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Вы использовали устаревшую версию кошелька. Формат файла вашего кошелька сейчас обновляется.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621"/>
        <source>failed to load wallet: </source>
        <translation>не удалось загрузить кошелек: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5640"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command&apos;s documentation.
</source>
        <translation>Используйте &amp;quot;помощь&amp;quot;&lt;command&gt; &amp;quot; чтобы просмотреть документацию команды.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5662"/>
        <source>failed to deinitialize wallet</source>
        <translation>не удалось деинициализировать кошелек</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5685"/>
        <source>Wallet data saved</source>
        <translation>Данные кошелька сохранены</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5699"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>кошелек является мультиподписным и не может сохранить версию только для просмотра</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5707"/>
        <source>failed to read wallet password</source>
        <translation>не удалось прочитать пароль кошелька</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5715"/>
        <source>Watch only wallet saved as: </source>
        <translation>Только просмотр кошелька сохранен как: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5719"/>
        <source>Failed to save watch only wallet: </source>
        <translation>Не удалось сохранить кошелек только для часов: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5857"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6735"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11561"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>Эта команда требует доверенный демон. Включить с помощью --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5910"/>
        <source>Mining started in daemon</source>
        <translation>Майнинг начался в daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5912"/>
        <source>mining has NOT been started: </source>
        <translation>добыча НЕ начата: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5932"/>
        <source>Mining stopped in daemon</source>
        <translation>Майнинг остановлен в daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5934"/>
        <source>mining has NOT been stopped: </source>
        <translation>добыча НЕ была остановлена: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5989"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Неожиданная длина массива - Вышел simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6065"/>
        <source>trusted</source>
        <translation>доверенный</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6065"/>
        <source>untrusted</source>
        <translation>ненадежный</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6081"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Похоже, это недействительный URL-адрес демона.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6101"/>
        <source>Blockchain saved</source>
        <translation>Блокчейн сохранен</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6103"/>
        <source>blockchain can&apos;t be saved: </source>
        <translation>Блокчейн не может быть сохранен: </translation>
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
        <translation>Высота </translation>
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
        <translation>idx </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6242"/>
        <source>spent </source>
        <translation>потраченный </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6269"/>
        <source>Enter password</source>
        <translation>Введите пароль</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6365"/>
        <source>Starting refresh...</source>
        <translation>Начинаем обновление...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6387"/>
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>Получен новый перевод с момента начала повторного сканирования. Ключевые изображения неполные.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6394"/>
        <source>Refresh done, blocks received: </source>
        <translation>Обновление выполнено, блоки получены: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6402"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6749"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>Демон занят. Попробуйте еще раз позже.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5083"/>
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>Секретный ключ клиента RPC должен быть 32-байтовым в шестнадцатеричном формате.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5833"/>
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>При включенном фоновом майнинге демон будет майнить в режиме ожидания и не при работе от батареи.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5959"/>
        <source>Error checking daemon RPC access prices</source>
        <translation>Ошибка проверки цен доступа демона RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5965"/>
        <source>Error checking daemon RPC access prices: </source>
        <translation>Ошибка проверки цен доступа RPC демона: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6061"/>
        <source>Failed to connect to daemon</source>
        <translation>Не удалось подключиться к демону</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6073"/>
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>Daemon RPC credits/hash меньше, чем было заявлено. Либо этот демон жульничает, либо он недавно изменил свои настройки.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6074"/>
        <source>Claimed: </source>
        <translation>Заявлено: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6075"/>
        <source>Actual: </source>
        <translation>Действительный: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6753"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>нет подключения к демону. Убедитесь, что демон запущен.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6410"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6757"/>
        <source>payment required.</source>
        <translation>требуется оплата.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6416"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6767"/>
        <source>RPC error: </source>
        <translation>Ошибка RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6421"/>
        <source>refresh error: </source>
        <translation>ошибка обновления: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6426"/>
        <source>internal error: </source>
        <translation>внутренняя ошибка: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441"/>
        <source>refresh failed: </source>
        <translation>обновление не удалось: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441"/>
        <source>Blocks received: </source>
        <translation>Получено блоков: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6470"/>
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Некоторые собственные выходы имеют частичные ключевые изображения - требуется import_multisig_info)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6473"/>
        <source>Currently selected account: [</source>
        <translation>Текущая выбранная учетная запись: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6473"/>
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6475"/>
        <source>(No tag assigned)</source>
        <translation>(Тег не назначен)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6475"/>
        <source>Tag: </source>
        <translation>Ярлык: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6490"/>
        <source>unlocked balance: </source>
        <translation>разблокированный баланс: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6495"/>
        <source>Balance per address:</source>
        <translation>Баланс по адресу:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <source>Address</source>
        <translation>Адрес</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Balance</source>
        <translation>Баланс</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Unlocked balance</source>
        <translation>Разблокированный баланс</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <source>Outputs</source>
        <translation>Выходы</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12183"/>
        <source>Label</source>
        <translation>Этикетка</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6597"/>
        <source>pubkey</source>
        <translation>pubkey</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6597"/>
        <source>key image</source>
        <translation>ключевое изображение</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>spent</source>
        <translation>потраченный</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6620"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>unlocked</source>
        <translation>разблокирован</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>ringct</source>
        <translation>рингкт</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>global index</source>
        <translation>глобальный индекс</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <source>tx id</source>
        <translation>идентификатор передачи</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6598"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>addr index</source>
        <translation>индекс адреса</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6614"/>
        <source>Used at heights: </source>
        <translation>Используется на высоте: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6619"/>
        <source>T</source>
        <translation>Т</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6619"/>
        <source>F</source>
        <translation>Ф</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6620"/>
        <source>locked</source>
        <translation>заперт</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6620"/>
        <source>[frozen]</source>
        <translation>[замороженный]</translation>
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
        <translation>Нет входящих переводов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6638"/>
        <source>No incoming available transfers</source>
        <translation>Нет входящих доступных переводов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6642"/>
        <source>No incoming unavailable transfers</source>
        <translation>Нет входящих недоступных переводов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>payment</source>
        <translation>оплата</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>transaction</source>
        <translation>сделка</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>height</source>
        <translation>высота</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6666"/>
        <source>unlock time</source>
        <translation>время разблокировки</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6678"/>
        <source>No payments with id </source>
        <translation>Никаких платежей с идентификатором </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6700"/>
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>Идентификатор платежа имеет неверный формат, ожидается шестнадцатеричная строка из 16 или 64 символов: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6726"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6825"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7901"/>
        <source>failed to get blockchain height: </source>
        <translation>не удалось получить высоту блокчейна: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6762"/>
        <source>failed to get spent status</source>
        <translation>не удалось получить статус потрачено</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6836"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Транзакция %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6852"/>
        <source>failed to find construction data for tx input</source>
        <translation>не удалось найти данные по конструкции для ввода tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6876"/>
        <source>failed to get output: </source>
        <translation>не удалось получить вывод: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6884"/>
        <source>output key&apos;s originating block height shouldn&apos;t be higher than the blockchain height</source>
        <translation>Исходная высота блока выходного ключа не должна превышать высоту блокчейна.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6889"/>
        <source>
Originating block heights: </source>
        <translation>
Исходная высота блока: </translation>
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
Предупреждение: некоторые из ключей ввода, которые тратятся, взяты из </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917"/>
        <source>the same transaction</source>
        <translation>та же транзакция</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917"/>
        <source>blocks that are temporally very close</source>
        <translation>блоки, которые временно очень близки</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7103"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7853"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8136"/>
        <source>Ring size must not be 0</source>
        <translation>Размер кольца не должен быть 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7115"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7865"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8148"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>размер кольца %u слишком мал, минимальный размер %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7120"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7870"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8153"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation>размер кольца %u слишком большой, максимальный размер %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7127"/>
        <source>wrong number of arguments</source>
        <translation>неправильное количество аргументов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7144"/>
        <source>payment id failed to encode</source>
        <translation>идентификатор платежа не удалось закодировать</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7163"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7894"/>
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Слишком много заблокированных блоков, максимум 1000000 (~4 года)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7211"/>
        <source>failed to parse short payment ID from URI</source>
        <translation>не удалось проанализировать короткий идентификатор платежа из URI</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7236"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7238"/>
        <source>Invalid last argument: </source>
        <translation>Неверный последний аргумент: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7256"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>одна транзакция не может использовать более одного идентификатора платежа</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7272"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation>не удалось проанализировать идентификатор платежа, хотя он был обнаружен</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7388"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7398"/>
        <source>Is this okay anyway?</source>
        <translation>Это вообще нормально?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7393"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>В настоящее время на этом уровне платы есть задержка блоков %u. Это нормально?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7715"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8025"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>Вывод %s в %llu транзакциях на общую сумму %s. Это нормально?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7721"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8031"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8269"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>Уборка %s за общую плату %s. Это нормально?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7769"/>
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by &quot;rescan_spent&quot;.  Is this okay?</source>
        <translation>Отбрасывание %s несмешиваемых выходов, которые нельзя потратить, что можно отменить с помощью &amp;quot;rescan_spent&amp;quot;. Это нормально?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8162"/>
        <source>Failed to parse number of outputs</source>
        <translation>Не удалось проанализировать количество выходов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7919"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8167"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation>Количество выходов должно быть больше 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7945"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>идентификатор платежа имеет неверный формат, ожидается шестнадцатеричная строка из 16 или 64 символов: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7158"/>
        <source>bad locked_blocks parameter:</source>
        <translation>Неправильный параметр locked_blocks:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8226"/>
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>одна транзакция не может использовать более одного идентификатора платежа: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7974"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8194"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8234"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>не удалось настроить идентификатор платежа, хотя он был декодирован правильно</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1341"/>
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others&apos; multisig info</source>
        <translation>Отправьте эту информацию о мультиподписи всем остальным участникам, а затем используйте exchange_multisig_keys&lt;info1&gt; [&lt;info2&gt; ...] с чужой мультиподписной информацией</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1349"/>
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation>Кошелек Multisig успешно создан. Текущий тип кошелька: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1355"/>
        <source>Failed to perform multisig keys exchange: </source>
        <translation>Не удалось выполнить обмен ключами мультиподписи: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1692"/>
        <source>Failed to load multisig transaction from MMS</source>
        <translation>Не удалось загрузить многоподписную транзакцию из MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2232"/>
        <source>Failed to mark output spent: </source>
        <translation>Не удалось отметить потраченные выходные данные: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2259"/>
        <source>Failed to mark output unspent: </source>
        <translation>Не удалось отметить вывод как неизрасходованный: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2283"/>
        <source>Spent: </source>
        <translation>Потраченный: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2285"/>
        <source>Not spent: </source>
        <translation>Не потрачено: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2289"/>
        <source>Failed to check whether output is spent: </source>
        <translation>Не удалось проверить, израсходованы ли выходные данные: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2480"/>
        <source>Please confirm the transaction on the device</source>
        <translation>Пожалуйста, подтвердите транзакцию на устройстве.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3258"/>
        <source>Device name not specified</source>
        <translation>Имя устройства не указано</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3267"/>
        <source>Device reconnect failed</source>
        <translation>Повторное подключение устройства не удалось</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3272"/>
        <source>Device reconnect failed: </source>
        <translation>Повторное подключение устройства не удалось: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3818"/>
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>Экспортируйте в CSV входящие/исходящие переводы в произвольном диапазоне высот.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3826"/>
        <source>Rescan the blockchain from scratch. If &quot;hard&quot; is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>Повторное сканирование блокчейна с нуля. Если указано «hard», вы потеряете всю информацию, которую невозможно восстановить из самого блокчейна.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3860"/>
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>Экспортируйте подписанный набор ключевых изображений в&lt;filename&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3868"/>
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>Синхронизирует ключевые образы с аппаратным кошельком.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3891"/>
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>Сгенерировать новый случайный полный идентификатор платежа (устаревший). Они будут не зашифрованы в блокчейне, см. integrated_address для зашифрованных коротких идентификаторов платежей.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3903"/>
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>Выполняет дополнительные раунды обмена ключами multisig. Требуется для произвольных кошельков M/N multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3935"/>
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>Инициализируйте и настройте MMS для M/N = количество требуемых подписантов/количество уполномоченных подписантов multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3939"/>
        <source>Display current MMS configuration</source>
        <translation>Отображение текущей конфигурации MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3943"/>
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>Установить или изменить информацию об уполномоченном подписанте (однословная метка, адрес транспортировки, адрес Salvium) или составить список всех подписантов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3947"/>
        <source>List all messages</source>
        <translation>Список всех сообщений</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3951"/>
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using &apos;sync&apos; processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>Оценить следующее возможное действие(я), связанное с multisig, в соответствии с состоянием кошелька и выполнить или предложить на выбор. Используя «синхронную» обработку ожидающих сообщений с multisig, можно принудительно выполнить синхронизацию информации независимо от состояния кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3956"/>
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like &quot;stale data&quot; errors</source>
        <translation>Принудительная генерация информации синхронизации мультиподписей независимо от состояния кошелька для восстановления после особых ситуаций, таких как ошибки «устаревших данных»</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3960"/>
        <source>Initiate transfer with MMS support; arguments identical to normal &apos;transfer&apos; command arguments, for info see there</source>
        <translation>Инициировать передачу с поддержкой MMS; аргументы идентичны аргументам обычной команды «передача», информацию см. здесь</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3964"/>
        <source>Delete a single message by giving its id, or delete all messages by using &apos;all&apos;</source>
        <translation>Удалите одно сообщение, указав его идентификатор, или удалите все сообщения, используя «all»</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3968"/>
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>Отправьте одно сообщение, указав его идентификатор, или отправьте все ожидающие сообщения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3972"/>
        <source>Check right away for new messages to receive</source>
        <translation>Сразу же проверьте наличие новых сообщений.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3976"/>
        <source>Write the content of a message to a file &quot;mms_message_content&quot;</source>
        <translation>Записать содержимое сообщения в файл &amp;quot;mms_message_content&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3980"/>
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>Отправьте однострочное сообщение уполномоченному подписанту, идентифицированному по его метке, или покажите все ожидающие непрочитанные заметки</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984"/>
        <source>Show detailed info about a single message</source>
        <translation>Показать подробную информацию об одном сообщении</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3988"/>
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation>Доступные параметры: автоотправка &amp;lt;1|0&amp;gt; Следует ли автоматически отправлять вновь созданные сообщения немедленно.
 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3994"/>
        <source>Send completed signer config to all other authorized signers</source>
        <translation>Отправьте заполненную конфигурацию подписанта всем остальным уполномоченным подписантам.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998"/>
        <source>Start auto-config at the auto-config manager&apos;s wallet by issuing auto-config tokens and optionally set others&apos; labels</source>
        <translation>Запустите автоконфигурацию в кошельке менеджера автоконфигурации, выпустив токены автоконфигурации и, при необходимости, установив чужие метки.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4006"/>
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>Удалите все токены автоконфигурации и прервите процесс автоконфигурации.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4010"/>
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>Запустите автоконфигурацию, используя токен, полученный от менеджера автоконфигурации.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032"/>
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>Отметьте выход(ы) как потраченные, чтобы они никогда не были выбраны как поддельные выходы в кольце</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036"/>
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>Отмечает выход как неизрасходованный, поэтому он может быть выбран как поддельный выход в кольце.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040"/>
        <source>Checks whether an output is marked as spent</source>
        <translation>Проверяет, отмечен ли выход как потраченный</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4238"/>
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;device_name[:device_spec]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4267"/>
        <source>wrong number range, use: %s</source>
        <translation>неверный диапазон номеров, используйте: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4372"/>
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>ПРИМЕЧАНИЕ: следующие %s могут быть использованы для восстановления доступа к вашему кошельку. Запишите их и сохраните в надежном и безопасном месте. Пожалуйста, не храните их в своей электронной почте или в службах хранения файлов вне вашего непосредственного контроля.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4374"/>
        <source>string</source>
        <translation>нить</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4374"/>
        <source>25 words</source>
        <translation>25 слов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4860"/>
        <source>Secret spend key (%u of %u)</source>
        <translation>Секретный ключ траты (%u из %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4937"/>
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>Используйте --restore-height или --restore-date, если вы хотите восстановить уже настроенную учетную запись с определенной высоты.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4939"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5027"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7505"/>
        <source>Is this okay?</source>
        <translation>Это нормально?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5050"/>
        <source>Still apply restore height?</source>
        <translation>Все еще применять восстановление высоты?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5233"/>
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>Введите номер, соответствующий выбранному вами языку.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6284"/>
        <source>Device requires attention</source>
        <translation>Устройство требует внимания</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6290"/>
        <source>Enter device PIN</source>
        <translation>Введите PIN-код устройства</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6292"/>
        <source>Failed to read device PIN</source>
        <translation>Не удалось прочитать PIN-код устройства.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6302"/>
        <source>Please enter the device passphrase on the device</source>
        <translation>Введите парольную фразу на устройстве.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6309"/>
        <source>Enter device passphrase</source>
        <translation>Введите пароль устройства</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6311"/>
        <source>Failed to read device passphrase</source>
        <translation>Не удалось прочитать парольную фразу устройства.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6335"/>
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation>Первое обновление завершено для кошелька на базе HW с полученными деньгами. Требуется hw_key_images_sync. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5835"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6337"/>
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation>Вы хотите сделать это сейчас? (Д/Да/Нет/Нет): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2461"/>
        <source>Unknown command &apos;%s&apos;, try &apos;help&apos;</source>
        <translation>Неизвестная команда &amp;#39;%s&amp;#39;, попробуйте &amp;#39;help&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3207"/>
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Тайм-аут блокировки бездействия отключен в Windows</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221"/>
        <source>Invalid number of seconds</source>
        <translation>Неверное количество секунд</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3283"/>
        <source>Export format not specified</source>
        <translation>Формат экспорта не указан</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3297"/>
        <source>Export format not recognized.</source>
        <translation>Формат экспорта не распознан.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677"/>
        <source>Display the restore height</source>
        <translation>Отображение высоты восстановления</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4056"/>
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>Заблокируйте консоль кошелька, для продолжения потребуется ввести пароль кошелька</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4236"/>
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>беззнаковое целое число (секунды, 0 для отключения)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4239"/>
        <source>&quot;binary&quot; or &quot;ascii&quot;</source>
        <translation>«двоичный» или «ascii»</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5091"/>
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>Предупреждение: использование ненадежного демона на %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5092"/>
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>Использование стороннего демона может нанести ущерб вашей безопасности и конфиденциальности.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5095"/>
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>Использование собственного протокола без SSL подвергает ваш RPC-трафик мониторингу</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5096"/>
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>Вам настоятельно рекомендуется подключиться к сети Salvium, используя собственный демон.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5097"/>
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>Если вы или кто-то, кому вы доверяете, используете этот демон, вы можете использовать --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5104"/>
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>Более того, демон также менее безопасен при работе в режиме самозагрузки.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5117"/>
        <source>If you are new to Salvium, type &quot;welcome&quot; for a brief overview.</source>
        <translation>Если вы новичок в Salvium, введите «добро пожаловать», чтобы получить краткий обзор.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5275"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5383"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5434"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477"/>
        <source>Error creating wallet: </source>
        <translation>Ошибка создания кошелька: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5735"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771"/>
        <source>Failed to query mining status: </source>
        <translation>Не удалось запросить статус майнинга: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5754"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5782"/>
        <source>Failed to setup background mining: </source>
        <translation>Не удалось настроить фоновый майнинг: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5758"/>
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>Фоновый майнинг включен. Спасибо за поддержку сети Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5786"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5798"/>
        <source>Background mining not enabled. Run &quot;set setup-background-mining 1&quot; to change.</source>
        <translation>Фоновый майнинг не включен. Запустите &amp;quot;set setup-background-mining 1&amp;quot; для изменения.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5804"/>
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>Использование ненадежного демона, пропуск проверки фонового майнинга</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5832"/>
        <source>The daemon is not set up to background mine.</source>
        <translation>Демон не настроен на фоновый режим.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5839"/>
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>Фоновый майнинг не включен. Установите setup-background-mining на 1 для изменения.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6220"/>
        <source>NOTE: This transaction is locked, see details with: show_transfer </source>
        <translation>ПРИМЕЧАНИЕ: эта транзакция заблокирована, подробности смотрите на странице: show_transfer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6339"/>
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>hw_key_images_sync пропущен. Запустите команду вручную перед передачей.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6567"/>
        <source>Invalid keyword: </source>
        <translation>Недопустимое ключевое слово: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6858"/>
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
Ввод %llu/%llu (%s): сумма=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6951"/>
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>Транзакция тратит больше одного очень старого выхода. Конфиденциальность была бы лучше, если бы они отправлялись отдельно.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6952"/>
        <source>Spend them now anyway?</source>
        <translation>Тратить их сейчас в любом случае?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7226"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8959"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9724"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10293"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10301"/>
        <source>amount is wrong: </source>
        <translation>Сумма неверна: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7227"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8959"/>
        <source>expected number from 0 to </source>
        <translation>ожидаемое число от 0 до </translation>
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
        <translation>транзакция отменена.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7365"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>Выходные данные не найдены, или демон не готов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2438"/>
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>В отличие от Bitcoin, ваши транзакции и баланс Salvium остаются конфиденциальными и по умолчанию не видны миру.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439"/>
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>Однако при желании вы можете предоставить их определенным лицам.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6212"/>
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>ПРИМЕЧАНИЕ: эта транзакция использует зашифрованный идентификатор платежа: рассмотрите возможность использования вместо этого подадресов.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6217"/>
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>ВНИМАНИЕ: эта транзакция использует незашифрованный идентификатор платежа: они устарели и игнорируются. Вместо этого используйте подадреса.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7398"/>
        <source>Failed to check for backlog: </source>
        <translation>Не удалось проверить наличие отставания: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7447"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8011"/>
        <source>
Transaction </source>
        <translation>
Сделка </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7454"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8018"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>ВНИМАНИЕ: выходные данные нескольких адресов используются вместе, что может поставить под угрозу вашу конфиденциальность.
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
        <translation>Неподписанные транзакции успешно записаны в MMS</translation>
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
        <translation>Не удалось записать транзакцию(и) в файл</translation>
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
        <translation>Неподписанные транзакции успешно записаны в файл: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7547"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8068"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8304"/>
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>Не удалось выполнить холодную подпись транзакции с помощью кошелька HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7700"/>
        <source>No unmixable outputs found</source>
        <translation>Несмешиваемых выходов не найдено</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7713"/>
        <source>Sweeping </source>
        <translation>Подметание </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8972"/>
        <source>Failed to parse donation address: </source>
        <translation>Не удалось проанализировать адрес пожертвования: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8988"/>
        <source>Donating %s %s to %s.</source>
        <translation>Пожертвование %s %s %s для %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9137"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>Загружено %lu транзакций, для %s, комиссия %s, %s, %s, с минимальным размером кольца %lu, %s. %sЭто нормально?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>direction</source>
        <translation>направление</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>timestamp</source>
        <translation>временная метка</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>running balance</source>
        <translation>текущий баланс</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>hash</source>
        <translation>хэш</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>payment ID</source>
        <translation>идентификатор платежа</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>fee</source>
        <translation>платеж</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>destination</source>
        <translation>место назначения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>index</source>
        <translation>индекс</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>note</source>
        <translation>примечание</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10265"/>
        <source>CSV exported to </source>
        <translation>CSV экспортирован в </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10452"/>
        <source>Rescan anyway?</source>
        <translation>Все равно пересканировать?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10463"/>
        <source>Warning: your restore height is higher than wallet restore height: </source>
        <translation>Внимание: высота восстановления вашего кошелька выше высоты восстановления кошелька: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10464"/>
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>Повторить сканирование в любом случае? (Д/Да/Нет/Нет): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10485"/>
        <source>MMS received new message</source>
        <translation>MMS получил новое сообщение</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10654"/>
        <source>locked due to inactivity</source>
        <translation>заблокирован из-за бездействия</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11096"/>
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;index&gt;находится вне границ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11386"/>
        <source>Normal</source>
        <translation>Нормальный</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11387"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12241"/>
        <source>Type: </source>
        <translation>Тип: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7020"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11388"/>
        <source>Network type: </source>
        <translation>Тип сети: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1493"/>
        <source>Multisig info imported. Number of outputs updated: </source>
        <translation>Импортирована информация о мультисигнатах. Количество обновленных выходов: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1843"/>
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>Ключевое изображение либо не потрачено, либо потрачено с размером кольца 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2429"/>
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>Большинство из этих узлов, вероятно, шпионы. Вам не следует их использовать, если вы не подключены через Tor или I2P</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2435"/>
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>Добро пожаловать в Salvium — новую и улучшенную частную криптовалюту.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447"/>
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>Добро пожаловать в Salvium и финансовую конфиденциальность, соответствующую требованиям. Для получения дополнительной информации посетите https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2567"/>
        <source>invalid index: must be an unsigned integer</source>
        <translation>недопустимый индекс: должно быть целым числом без знака</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572"/>
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt;находится вне границ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2630"/>
        <source>Failed to generate QR code, input too large</source>
        <translation>Не удалось сгенерировать QR-код, введен слишком большой текст</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3312"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3334"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3372"/>
        <source>Value not specified</source>
        <translation>Значение не указано</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3324"/>
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>Предупреждение: устаревшие форматы используют сериализацию boost, которая приводит к переполнению буфера и сбоям. Загружайте устаревшие форматы только из источников, которым доверяете.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3392"/>
        <source>Important commands:</source>
        <translation>Важные команды:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394"/>
        <source>&quot;welcome&quot; - Show welcome message.</source>
        <translation>«welcome» — показать приветственное сообщение.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3395"/>
        <source>&quot;help all&quot; - Show the list of all available commands.</source>
        <translation>«help all» — показать список всех доступных команд.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3396"/>
        <source>&quot;help &lt;command&gt;&quot; - Show a command&apos;s documentation.</source>
        <translation>&amp;quot;помощь&lt;command&gt; &amp;quot; - Показать документацию команды.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3397"/>
        <source>&quot;apropos &lt;keyword&gt;&quot; - Show commands related to a keyword.</source>
        <translation>&amp;quot;кстати&lt;keyword&gt; &amp;quot; - Показать команды, связанные с ключевым словом.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3399"/>
        <source>&quot;wallet_info&quot; - Show wallet main address and other info.</source>
        <translation>&amp;quot;wallet_info&amp;quot; - Показать основной адрес кошелька и другую информацию.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3400"/>
        <source>&quot;balance&quot; - Show balance.</source>
        <translation>&amp;quot;balance&amp;quot; - Показать баланс.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3401"/>
        <source>&quot;address all&quot; - Show all addresses.</source>
        <translation>«address all» — показать все адреса.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402"/>
        <source>&quot;address new&quot; - Create new subaddress.</source>
        <translation>«address new» — создать новый подадрес.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3403"/>
        <source>&quot;transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]&quot; - Send SAL to an address.</source>
        <translation>&amp;quot;передача&lt;address&gt;&lt;amount&gt; [&lt;asset_type&gt; ]&amp;quot; - Отправить SAL на адрес.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3404"/>
        <source>&quot;return_payment &lt;tx_hash&gt;&quot; - Return a previously-received amount to sender.</source>
        <translation>&amp;quot;возврат_платежа&lt;tx_hash&gt; &amp;quot; - Вернуть ранее полученную сумму отправителю.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3405"/>
        <source>&quot;burn &lt;amount&gt; &lt;asset_type&gt;&quot; - destroy coins forever.</source>
        <translation>&amp;quot;гореть&lt;amount&gt;&lt;asset_type&gt; &amp;quot; - уничтожить монеты навсегда.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406"/>
        <source>&quot;convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]&quot; - convert between coin types.</source>
        <translation>&amp;quot;преобразовать&lt;amount&gt;&lt;source_asset&gt;&lt;dest_asset&gt; [&lt;slippage_limit&gt; ]&amp;quot; - конвертация между типами монет.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3407"/>
        <source>&quot;stake &lt;amount&gt;&quot; - stake SAL for 30 days to earn yield.</source>
        <translation>&amp;quot;ставка&lt;amount&gt; &amp;quot; - сделайте ставку SAL на 30 дней, чтобы получить доход.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3409"/>
        <source>&quot;price_info&quot; - Display current pricing information for supported assets.</source>
        <translation>«price_info» — отображение текущей информации о ценах на поддерживаемые активы.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410"/>
        <source>&quot;supply_info&quot; - Display circulating supply information.</source>
        <translation>&amp;quot;supply_info&amp;quot; - Отображение информации о текущих поставках.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3411"/>
        <source>&quot;yield_info&quot; - Display current stats on Salvium staking / yield.</source>
        <translation>&amp;quot;yield_info&amp;quot; - Отображение текущей статистики по стейкингу/урожайности Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3412"/>
        <source>&quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&quot; - Show transactions.</source>
        <translation>&amp;quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&amp;quot; - Показать транзакции.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3413"/>
        <source>&quot;sweep_all &lt;address&gt;&quot; - Send whole balance to another wallet.</source>
        <translation>&amp;quot;sweep_all&lt;address&gt; &amp;quot; - Отправьте весь баланс на другой кошелек.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414"/>
        <source>&quot;seed&quot; - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>«seed» — показать 25 секретных слов, которые можно использовать для восстановления этого кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3415"/>
        <source>&quot;refresh&quot; - Synchronize wallet with the Salvium network.</source>
        <translation>«refresh» — синхронизация кошелька с сетью Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3416"/>
        <source>&quot;status&quot; - Check current status of wallet.</source>
        <translation>&amp;quot;status&amp;quot; - Проверить текущий статус кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3417"/>
        <source>&quot;version&quot; - Check software version.</source>
        <translation>«версия» — проверка версии программного обеспечения.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418"/>
        <source>&quot;exit&quot; - Exit wallet.</source>
        <translation>«выход» — выход из кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3420"/>
        <source>&quot;donate &lt;amount&gt;&quot; - Donate SAL to the development team.</source>
        <translation>&amp;quot;пожертвовать&lt;amount&gt; &amp;quot; - Пожертвуйте SAL команде разработчиков.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3450"/>
        <source>No commands found mentioning keyword(s)</source>
        <translation>Не найдено ни одной команды, упоминающей ключевые слова.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3481"/>
        <source>Invalid txid specified: </source>
        <translation>Указан неверный txid: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3488"/>
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>ВНИМАНИЕ: эта операция может раскрыть идентификаторы txid удаленному узлу и повлиять на вашу конфиденциальность.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3490"/>
        <source>You have canceled the operation</source>
        <translation>Вы отменили операцию</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3535"/>
        <source>Set another daemon to connect to. If it&apos;s not yours, it&apos;ll probably spy on you.</source>
        <translation>Установите другой демон для подключения. Если он не ваш, он, вероятно, будет шпионить за вами.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561"/>
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included). The &quot;subtractfeefrom=&quot; list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: &quot;transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2&quot;. Let&apos;s say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use &quot;subtractfeefrom=all&quot; to spread the fee across all destinations.</source>
        <translation>Передача&lt;amount&gt; из&lt;asset_type&gt; к&lt;address&gt; . Если параметр &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; указан, кошелек использует выходные данные, полученные по адресам этих индексов. Если этот параметр опущен, кошелек случайным образом выбирает индексы адресов для использования. В любом случае он старается не объединять выходные данные по нескольким адресам.&lt;priority&gt; приоритет транзакции. Чем выше приоритет, тем выше комиссия за транзакцию. Допустимые значения в порядке приоритета (от самого низкого к самому высокому): неважный, нормальный, повышенный, приоритетный. Если не указано, используется значение по умолчанию (см. команду &amp;quot;set priority&amp;quot;).&lt;ring_size&gt; количество входов, которые нужно включить для невозможности отслеживания. Несколько платежей можно сделать одновременно, добавив URI_2 или&lt;address_2&gt;&lt;amount_2&gt; и т. д. (перед идентификатором платежа, если он включен). Список &amp;quot;subtractfeefrom=&amp;quot; позволяет вам выбрать, из каких пунктов назначения финансировать комиссию за транзакцию вместо сдачи. Комиссия будет разделена между выбранными пунктами назначения пропорционально поровну. Например, чтобы сделать 3 перевода, где комиссия взимается из первого и третьего пунктов назначения, можно сделать: &amp;quot;transfer&lt;addr1&gt; 3&lt;addr2&gt; 0,5&lt;addr3&gt; 1 subtractfeefrom=0,2&amp;quot;. Допустим, комиссия за транзакцию составляет 0,1. Баланс снизится ровно на 4,5 SAL, включая комиссии, а addr1 и addr3 получат 2,925 и 0,975 SAL соответственно. Используйте &amp;quot;subtractfeefrom=all&amp;quot;, чтобы распределить комиссию по всем направлениям.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3569"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>Отправьте весь разблокированный баланс на адрес и заблокируйте его на&lt;lockblocks&gt; (макс. 1000000). Если параметр &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; или &amp;quot;index=all&amp;quot; указан, кошелек подметает выходные данные, полученные по этим или всем индексам адресов соответственно. Если этот параметр опущен, кошелек случайным образом выбирает индекс адреса для использования.&lt;priority&gt; приоритет очистки. Чем выше приоритет, тем выше комиссия за транзакцию. Допустимые значения в порядке приоритета (от самого низкого к самому высокому): неважный, нормальный, повышенный, приоритетный. Если не указано, используется значение по умолчанию (см. команду &amp;quot;set priority&amp;quot;).&lt;ring_size&gt; количество входных данных, которые необходимо включить для обеспечения невозможности отслеживания.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3575"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Отправить весь разблокированный баланс на адрес. Если параметр &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; или &amp;quot;index=all&amp;quot; указан, кошелек подметает выходные данные, полученные по этим или всем индексам адресов соответственно. Если этот параметр опущен, кошелек случайным образом выбирает индекс адреса для использования. Если параметр &amp;quot;outputs=&lt;N&gt; &amp;quot; указано и N &amp;gt; 0, кошелек разделяет транзакцию на N четных выходов.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3578"/>
        <source>Send all unlocked balance from a given account to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Отправить весь разблокированный баланс с указанного счета на адрес. Если параметр &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; или &amp;quot;index=all&amp;quot; указан, кошелек подметает выходные данные, полученные по этим или всем индексам адресов соответственно. Если этот параметр опущен, кошелек случайным образом выбирает индекс адреса для использования. Если параметр &amp;quot;outputs=&lt;N&gt; &amp;quot; указано и N &amp;gt; 0, кошелек разделяет транзакцию на N четных выходов.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3590"/>
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>Возвращает платеж(и), полученные в Техасе&lt;tx_hash&gt; первоначальному отправителю.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3594"/>
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>НАВСЕГДА уничтожает (сжигает)&lt;amount&gt; из&lt;asset_type&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3598"/>
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>Преобразует&lt;amount&gt;&lt;source_asset&gt; в&lt;dest_asset&gt; , с дополнительными опциями&lt;slippage_limit&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602"/>
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>Замки&lt;amount&gt; SAL в качестве доли с целью получения дохода</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618"/>
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>Отображает статистику доходности за последний год&lt;NN&gt; блоки</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3622"/>
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>Пожертвовать&lt;amount&gt; команде разработчиков (donate.salvium.io).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3648"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;mnew&quot; is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If &quot;one-off&quot; is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>Если аргументы не указаны или&lt;index&gt; указан, кошелек показывает адрес по умолчанию или указанный адрес. Если указано &amp;quot;all&amp;quot;, кошелек показывает все существующие адреса в выбранной учетной записи. Если указано &amp;quot;new&amp;quot;, кошелек создает новый адрес с предоставленным текстом метки (который может быть пустым). Если указано &amp;quot;mnew&amp;quot;, кошелек создает столько новых адресов, сколько указано аргументом; для новых адресов устанавливается метка по умолчанию. Если указано &amp;quot;label&amp;quot;, кошелек устанавливает метку адреса, указанного&lt;index&gt; на предоставленный текст метки. Если указано &amp;quot;одноразовое&amp;quot;, адрес для указанного индекса генерируется и отображается, и запоминается кошельком</translation>
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
        <translation>Показывать входящие/исходящие переводы в пределах необязательного диапазона высоты. Формат вывода: In или Coinbase: Номер блока, &amp;quot;block&amp;quot;|&amp;quot;in&amp;quot;, Время, Сумма, Тип актива, Хэш транзакции, Идентификатор платежа, Индекс подадреса, &amp;quot;-&amp;quot;, Примечание Out: Номер блока, &amp;quot;out&amp;quot;, Время, Сумма*, Тип актива, Хэш транзакции, Идентификатор платежа, Комиссия, Назначения, Адреса ввода**, &amp;quot;-&amp;quot;, Примечание Pool: &amp;quot;pool&amp;quot;, &amp;quot;in&amp;quot;, Время, Сумма, Тип актива, Хэш транзакции, Идентификатор платежа, Индекс подадреса, &amp;quot;-&amp;quot;, Примечание, Double Spend Note Ожидание или неудача: &amp;quot;failed&amp;quot;|&amp;quot;pending&amp;quot;, &amp;quot;out&amp;quot;, Время, Сумма*, Хэш транзакции, Идентификатор платежа, Комиссия, Адреса ввода**, &amp;quot;-&amp;quot;, Примечание Staked или Burnt: Номер блока, &amp;quot;out&amp;quot;, Время, Сумма*, Тип актива, Хэш транзакции, Идентификатор платежа, Комиссия, Адреса ввода**, &amp;quot;-&amp;quot;, Примечание * Без учета сдачи и комиссии. ** Набор адресных индексов, используемых в качестве входных данных в этой передаче.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3817"/>
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [выход=&lt;filepath&gt; ] [опция=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3852"/>
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>Подписать содержимое файла с указанным подадресом (или основным адресом, если он не указан)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3927"/>
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>Интерфейс с MMS (система многоподписных сообщений)&lt;subcommand&gt; является одним из: init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum Получить справку о подкоманде с помощью: help mms&lt;subcommand&gt; , или помощь ммс&lt;subcommand&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4002"/>
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>Получите контрольную сумму, которая позволит подписывающим лицам легко проверить идентичность конфигурации MMS.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4088"/>
        <source>Show address as QR code</source>
        <translation>Показать адрес как QR-код</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4096"/>
        <source>Search all command descriptions for keyword(s)</source>
        <translation>Поиск по ключевым словам во всех описаниях команд</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4100"/>
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>Сканирование транзакций, указанных&lt;txid&gt; (ы), обрабатывая их и ищу выходы</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4216"/>
        <source>sal, millisal, microsal</source>
        <translation>саль, миллисал, микросал</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4235"/>
        <source>1 or 0</source>
        <translation>1 или 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4461"/>
        <source>Multisig is disabled.</source>
        <translation>Мультиподпись отключена.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4462"/>
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can&apos;t be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>Multisig — экспериментальная функция, и она может содержать ошибки. Что может пойти не так: средства, отправленные на multisig-кошелек, вообще не могут быть потрачены, могут быть потрачены только при участии злонамеренного члена группы или могут быть украдены злонамеренным членом группы.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4464"/>
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>Вы отменили восстановление кошелька с мультиподписью.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5184"/>
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>Кошелек не смог подключиться к демону, так как он находится в автономном режиме</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5186"/>
        <source>wallet failed to connect to daemon, because it is not up to date. </source>
        <translation>Кошелек не смог подключиться к демону, так как он не обновлен. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5187"/>
        <source>Please make sure you are running the latest wallet.</source>
        <translation>Убедитесь, что вы используете последнюю версию кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5190"/>
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the &apos;set_daemon&apos; command.</source>
        <translation>Демон не обновлен. Убедитесь, что демон работает в последней версии, или измените адрес демона с помощью команды &amp;#39;set_daemon&amp;#39;.</translation>
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
        <translation>Ваш кошелек создан! Чтобы начать синхронизацию с демоном, используйте команду &amp;quot;refresh&amp;quot;. Используйте команду &amp;quot;help&amp;quot;, чтобы увидеть упрощенный список доступных команд. Используйте команду &amp;quot;help all&amp;quot;, чтобы увидеть список всех доступных команд. Используйте команду &amp;quot;help&lt;command&gt; &amp;quot;, чтобы просмотреть документацию команды. Всегда используйте команду &amp;quot;exit&amp;quot; при закрытии salvium-wallet-cli, чтобы сохранить состояние текущего сеанса. В противном случае вам может потребоваться снова синхронизировать ваш кошелек (ваши ключи кошелька в любом случае НЕ подвергаются риску).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5638"/>
        <source>Use the &quot;help&quot; command to see a simplified list of available commands.
</source>
        <translation>Используйте команду «help», чтобы увидеть упрощенный список доступных команд.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5639"/>
        <source>Use &quot;help all&quot; to see the list of all available commands.
</source>
        <translation>Используйте «help all», чтобы увидеть список всех доступных команд.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5834"/>
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>Включение этого параметра поддерживает сеть, которую вы используете, и дает вам право на получение новых лицензий SAL.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005"/>
        <source>Failed to parse address</source>
        <translation>Не удалось проанализировать адрес</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020"/>
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got </source>
        <translation>Ожидается доверенный, ненадежный или это-вероятно-шпионский-узел. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6029"/>
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>Это не адрес Tor/I2P и не доверенный демон.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6030"/>
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>Либо используйте свой собственный доверенный узел, подключитесь через Tor или I2P, либо передайте «это, вероятно, шпионский узел» и станьте объектом слежки.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6035"/>
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>Предупреждение: при подключении к нелокальному демону без SSL пассивные злоумышленники смогут шпионить за вами.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6138"/>
        <source>stake returned </source>
        <translation>ставка возвращена </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6144"/>
        <source>yield earned </source>
        <translation>доходность заработанная </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6161"/>
        <source>burnt </source>
        <translation>сгорел </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6167"/>
        <source>converting </source>
        <translation>конвертация </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6173"/>
        <source>staked </source>
        <translation>поставленный на карту </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>Устройство запрашивает парольную фразу. Вы хотите ввести парольную фразу на устройстве (Y) (или на хосте (N))?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322"/>
        <source>The wallet&apos;s refresh-from-block-height setting is higher than the daemon&apos;s height: this may mean your wallet will skip over transactions</source>
        <translation>Настройка refresh-from-block-height кошелька выше, чем высота демона: это может означать, что ваш кошелек будет пропускать транзакции.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6472"/>
        <source> (Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation> (В некоторых собственных выходах отсутствуют ключевые изображения — требуются export_outputs, import_outputs, export_key_images и import_key_images)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6489"/>
        <source>Asset: </source>
        <translation>Объект: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6489"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10855"/>
        <source>, balance: </source>
        <translation>, баланс: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6815"/>
        <source>failed to connect to daemon</source>
        <translation>не удалось подключиться к демону</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6918"/>
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>, что может нарушить анонимность кольцевых подписей. Убедитесь, что это сделано намеренно!
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6976"/>
        <source>I locked your Salvium wallet to protect you while you were away
see &quot;help set&quot; to configure/disable</source>
        <translation>Я заблокировал ваш кошелек Salvium, чтобы защитить вас, пока вас не было. Чтобы настроить/отключить, см. «набор справки».</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7006"/>
        <source>Locked due to inactivity.</source>
        <translation>Заблокировано из-за бездействия.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7010"/>
        <source>The wallet password is required to unlock the console.</source>
        <translation>Для разблокировки консоли требуется пароль кошелька.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7021"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11389"/>
        <source>Testnet</source>
        <translation>Тестовая сеть</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7022"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11390"/>
        <source>Stagenet</source>
        <translation>Стаджинет</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7022"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11390"/>
        <source>Mainnet</source>
        <translation>Основная сеть</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7457"/>
        <source>Burning %s %s.  </source>
        <translation>Горит %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7459"/>
        <source>Converting %s %s to %s.  </source>
        <translation>Преобразование %s %s в %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461"/>
        <source>Staking %s %s for yield accrual.  </source>
        <translation>Ставка %s %s для начисления доходности.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7465"/>
        <source>Sending %s %s.  </source>
        <translation>Отправка %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7484"/>
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>. Эта транзакция (включая %s изменения) будет разблокирована через %llu блоков, примерно %s дней (предполагая, что 2 минуты на блок)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8372"/>
        <source>Invalid account</source>
        <translation>Недействительный аккаунт</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8404"/>
        <source>return_payments are disabled</source>
        <translation>возврат платежей отключен</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8440"/>
        <source>incorrect TX type for txid </source>
        <translation>неверный тип TX для txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8446"/>
        <source>invalid return_address_list for txid </source>
        <translation>неверный return_address_list для txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8452"/>
        <source>invalid return_address/return_pubkey for txid </source>
        <translation>неверный return_address/return_pubkey для txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8459"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8477"/>
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid </source>
        <translation>Изображение ключа недоступно (частично / неизвестно / потрачено / заморожено) для txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8550"/>
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>Холодное подписание ответных TX еще не реализовано</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8646"/>
        <source>conversions are disabled until hard fork </source>
        <translation>преобразования отключены до хардфорка </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8653"/>
        <source>missing / extraneous argument(s)</source>
        <translation>отсутствующие / посторонние аргументы</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8669"/>
        <source>invalid slippage_limit value : expected 0.0-90.0, got </source>
        <translation>недопустимое значение slippage_limit: ожидалось 0,0-90,0, получено </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8680"/>
        <source>invalid argument(s): </source>
        <translation>недопустимый(е) аргумент(ы): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8686"/>
        <source>out of range for slippage limit: </source>
        <translation>вне диапазона для предела проскальзывания: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8696"/>
        <source>invalid destination asset_type</source>
        <translation>недопустимый тип_ресурса назначения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8706"/>
        <source>invalid source asset_type</source>
        <translation>неверный исходный asset_type</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8715"/>
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>недействительное преобразование - asset_type не изменился</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8743"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8772"/>
        <source>This is a multisig wallet, staking is not currently supported</source>
        <translation>Это кошелек с мультиподписью, стейкинг в настоящее время не поддерживается.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8820"/>
        <source>%s
	SPOT:	%d
	MA:	%d</source>
        <translation>%s СПОТ: %d МА: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8844"/>
        <source>SUPPLY INFO</source>
        <translation>ИНФОРМАЦИЯ О ПОСТАВКЕ</translation>
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
ИНВЕСТИЦИОННЫЕ ФОНДЫ:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8986"/>
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>Пожертвование %s %s команде Salvium (donate.salvium.io или %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9346"/>
        <source>Last argument is an address, but not a subaddress</source>
        <translation>Последний аргумент — это адрес, но не подадрес.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9400"/>
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>Это могло произойти из-за того, что перевод был на подадрес. Если это так, передайте подадрес в последнюю очередь</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10099"/>
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>использование: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10158"/>
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>использование: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [выход=&lt;path&gt; ] [опция=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>tx key</source>
        <translation>ключ передачи</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10854"/>
        <source>
Grand total:
  Asset: </source>
        <translation>
Всего: Актив: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Asset</source>
        <translation>Объект</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10996"/>
        <source>Expected exactly one argument for the amount of new addresses</source>
        <translation>Ожидается ровно один аргумент для количества новых адресов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11002"/>
        <source>failed to parse the amount of new addresses: </source>
        <translation>не удалось проанализировать количество новых адресов: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11007"/>
        <source>the amount of new addresses must be lower or equal to </source>
        <translation>количество новых адресов должно быть меньше или равно </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11023"/>
        <source>Expected exactly two arguments for index</source>
        <translation>Ожидалось ровно два аргумента для индекса</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11033"/>
        <source>Address at %u %u: %s</source>
        <translation>Адрес в %u %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11167"/>
        <source>Standard address: %s, payment ID: %s</source>
        <translation>Стандартный адрес: %s, идентификатор платежа: %s</translation>
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
        <translation>Неверный формат индекса подадреса, а не тип подписи: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12068"/>
        <source> (Y/Yes/N/No): </source>
        <translation> (Д/Да/Нет/Нет): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12074"/>
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>ВНИМАНИЕ: Использование механизмов автонастройки MMS не является безнадежным</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12075"/>
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers&apos; info</source>
        <translation>Вредоносный менеджер автоконфигурации может отправлять вам информацию о ваших кошельках вместо информации других подписантов</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12076"/>
        <source>If in doubt do not use auto-config or at least compare configs using the &quot;mms config_checksum&quot; command</source>
        <translation>Если вы сомневаетесь, не используйте автонастройку или хотя бы сравните конфигурации с помощью команды «mms config_checksum».</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12103"/>
        <source>Choose processing:</source>
        <translation>Выберите обработку:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12112"/>
        <source>Sign tx</source>
        <translation>Подписать TX</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12120"/>
        <source>Send the tx for submission to </source>
        <translation>Отправьте tx для отправки по адресу </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12124"/>
        <source>Send the tx for signing to </source>
        <translation>Отправьте tx для подписания на </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12131"/>
        <source>Submit tx</source>
        <translation>Отправить tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12134"/>
        <source>unknown</source>
        <translation>неизвестный</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12140"/>
        <source>Choice: </source>
        <translation>Выбор: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12152"/>
        <source>Wrong choice</source>
        <translation>Неправильный выбор</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12159"/>
        <source>Id</source>
        <translation>Идентификатор</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12159"/>
        <source>I/O</source>
        <translation>ввод/вывод</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12159"/>
        <source>Authorized Signer</source>
        <translation>Уполномоченный подписчик</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Message Type</source>
        <translation>Тип сообщения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Height</source>
        <translation>Высота</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>R</source>
        <translation>Р</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Message State</source>
        <translation>Состояние сообщения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12160"/>
        <source>Since</source>
        <translation>С</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12177"/>
        <source> ago</source>
        <translation> назад</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12183"/>
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12183"/>
        <source>Transport Address</source>
        <translation>Транспортный адрес</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12184"/>
        <source>Auto-Config Token</source>
        <translation>Автоконфигурационный токен</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12184"/>
        <source>Salvium Address</source>
        <translation>Адрес Сальвиума</translation>
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
        <translation>Сообщение </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12240"/>
        <source>In/out: </source>
        <translation>Вход/выход: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12242"/>
        <source>State: </source>
        <translation>Состояние: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12242"/>
        <source>%s since %s, %s ago</source>
        <translation>%s с %s, %s назад</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12246"/>
        <source>Sent: Never</source>
        <translation>Отправлено: Никогда</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12250"/>
        <source>Sent: %s, %s ago</source>
        <translation>Отправлено: %s, %s назад</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12253"/>
        <source>Authorized signer: </source>
        <translation>Уполномоченное лицо с правом подписи: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12254"/>
        <source>Content size: </source>
        <translation>Размер контента: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12254"/>
        <source> bytes</source>
        <translation> байты</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12255"/>
        <source>Content: </source>
        <translation>Содержание: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12255"/>
        <source>(binary data)</source>
        <translation>(двоичные данные)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12285"/>
        <source>Send these messages now?</source>
        <translation>Отправить эти сообщения сейчас?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12295"/>
        <source>Queued for sending.</source>
        <translation>Поставлено в очередь на отправку.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12315"/>
        <source>Invalid message id</source>
        <translation>Неверный идентификатор сообщения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12324"/>
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>использование: mms init&lt;required_signers&gt; /&lt;authorized_signers&gt;&lt;own_label&gt;&lt;own_transport_address&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12330"/>
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>MMS уже инициализирован. Повторно инициализировать, удалив всю информацию о подписчике и сообщения?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12345"/>
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>Ошибка в количестве требуемых подписей и/или уполномоченных подписей</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12362"/>
        <source>The MMS is not active.</source>
        <translation>MMS не активен.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12385"/>
        <source>Invalid signer number </source>
        <translation>Неверный номер подписчика </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12390"/>
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>подписчик mms [&lt;number&gt; &lt;label&gt;[&lt;/label&gt;&lt;transport_address&gt; &lt;label&gt;[&lt;/label&gt;&lt;salvium_address&gt; &lt;label&gt;]]]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12409"/>
        <source>Invalid Salvium address</source>
        <translation>Неверный адрес Сальвиума</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12416"/>
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>Состояние кошелька больше не позволяет менять адреса Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12428"/>
        <source>Usage: mms list</source>
        <translation>Использование: список mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12441"/>
        <source>Usage: mms next [sync]</source>
        <translation>Использование: mms next [синхронизация]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12466"/>
        <source>No next step: </source>
        <translation>Нет следующего шага: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12476"/>
        <source>prepare_multisig</source>
        <translation>подготовить_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12482"/>
        <source>make_multisig</source>
        <translation>make_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12497"/>
        <source>exchange_multisig_keys</source>
        <translation>exchange_multisig_keys</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12513"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12637"/>
        <source>export_multisig_info</source>
        <translation>экспорт_мультисиг_информация</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12522"/>
        <source>import_multisig_info</source>
        <translation>import_multisig_info</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12535"/>
        <source>sign_multisig</source>
        <translation>sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12545"/>
        <source>submit_multisig</source>
        <translation>отправить_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12555"/>
        <source>Send tx</source>
        <translation>Отправить тх</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12566"/>
        <source>Process signer config</source>
        <translation>Конфигурация процесса подписанта</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12578"/>
        <source>Replace current signer config with the one displayed above?</source>
        <translation>Заменить текущую конфигурацию подписывающего лица на ту, что показана выше?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12584"/>
        <source>You can use the &quot;mms delete&quot; command to delete any unwanted message</source>
        <translation>Вы можете использовать команду «mms delete» для удаления любого нежелательного сообщения.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12597"/>
        <source>Process auto config data</source>
        <translation>Обработка данных автоматической конфигурации</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12611"/>
        <source>Nothing ready to process</source>
        <translation>Ничего не готово к обработке</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12630"/>
        <source>Usage: mms sync</source>
        <translation>Использование: синхронизация mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12654"/>
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>Использование: mms удалить (&lt;message_id&gt; | все)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12661"/>
        <source>Delete all messages?</source>
        <translation>Удалить все сообщения?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12687"/>
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>Использование: mms-отправка [&lt;message_id&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12704"/>
        <source>Usage: mms receive</source>
        <translation>Использование: получение mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12721"/>
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>Использование: экспорт mms&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12732"/>
        <source>Message content saved to: </source>
        <translation>Содержимое сообщения сохранено в: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12736"/>
        <source>Failed to to save message content</source>
        <translation>Не удалось сохранить содержимое сообщения.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12760"/>
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>Использование: mms-заметка [&lt;text&gt; &lt;label&gt;]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12767"/>
        <source>No signer found with label </source>
        <translation>Подписавший с меткой не найден </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12789"/>
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>Использование: mms-шоу&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12807"/>
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>Использование: набор mms&lt;option_name&gt; [&lt;option_value&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12824"/>
        <source>Wrong option value</source>
        <translation>Неправильное значение параметра</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12829"/>
        <source>Auto-send is on</source>
        <translation>Автоотправка включена</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12829"/>
        <source>Auto-send is off</source>
        <translation>Автоотправка отключена</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12834"/>
        <source>Unknown option</source>
        <translation>Неизвестный вариант</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12842"/>
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>Использование: помощь mms [&lt;subcommand&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12858"/>
        <source>Usage: mms send_signer_config</source>
        <translation>Использование: mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12864"/>
        <source>Signer config not yet complete</source>
        <translation>Конфигурация подписчика еще не завершена</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12879"/>
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>Использование: mms start_auto_config [ &lt;label&gt;...]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12884"/>
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>Есть подписанты без набора меток. Заполните метки перед автонастройкой или укажите их как параметры здесь.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12890"/>
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>Автоконфигурация уже запущена. Отменить и перезапустить?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12914"/>
        <source>Usage: mms config_checksum</source>
        <translation>Использование: mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12926"/>
        <source>Usage: mms stop_auto_config</source>
        <translation>Использование: mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12929"/>
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>Удалить все токены автоконфигурации и остановить автоконфигурацию?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12942"/>
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>Использование: mms auto_config&lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12949"/>
        <source>Invalid auto-config token</source>
        <translation>Неверный токен автоконфигурации</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12959"/>
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>Автоконфигурация уже запущена. Отменить и перезапустить?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12978"/>
        <source>MMS not available in this wallet</source>
        <translation>MMS недоступен в этом кошельке</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13002"/>
        <source>The MMS is not active. Activate using the &quot;mms init&quot; command</source>
        <translation>MMS не активен. Активируйте с помощью команды &amp;quot;mms init&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13083"/>
        <source>Invalid MMS subcommand</source>
        <translation>Неверная подкоманда MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13088"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="13092"/>
        <source>Error in MMS command: </source>
        <translation>Ошибка в команде MMS: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11409"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>кошелек предназначен только для просмотра и не может подписывать</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11414"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>Этот кошелек является мультиподписным и не может подписывать</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11488"/>
        <source>Bad signature from </source>
        <translation>Плохая подпись от </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11492"/>
        <source>Good signature from </source>
        <translation>Хорошая подпись от </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11509"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>кошелек предназначен только для просмотра и не может экспортировать ключевые изображения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11547"/>
        <source>Signed key images exported to </source>
        <translation>Подписанные ключевые изображения экспортированы в </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11593"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11639"/>
        <source>command only supported by HW wallet</source>
        <translation>команда поддерживается только кошельком HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11598"/>
        <source>hw wallet does not support cold KI sync</source>
        <translation>кошелек hw не поддерживает холодную синхронизацию KI</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11610"/>
        <source>Please confirm the key image sync on the device</source>
        <translation>Подтвердите синхронизацию изображения ключа на устройстве.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11616"/>
        <source>Key images synchronized to height </source>
        <translation>Ключевые изображения синхронизированы по высоте </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11619"/>
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>Запуск ненадежного демона, невозможно определить, какой выход транзакции потрачен. Используйте доверенный демон с --trusted-daemon и запустите rescan_spent</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11622"/>
        <source> spent, </source>
        <translation> потраченный, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11622"/>
        <source> unspent</source>
        <translation> неизрасходованный</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626"/>
        <source>Failed to import key images</source>
        <translation>Не удалось импортировать ключевые изображения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11631"/>
        <source>Failed to import key images: </source>
        <translation>Не удалось импортировать ключевые изображения: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11648"/>
        <source>Failed to reconnect device</source>
        <translation>Не удалось повторно подключить устройство.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11653"/>
        <source>Failed to reconnect device: </source>
        <translation>Не удалось повторно подключить устройство: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11706"/>
        <source>Outputs exported to </source>
        <translation>Выходные данные экспортируются в </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11862"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>В сети замечена двойная трата: эта транзакция может быть взломана, а может и нет</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11897"/>
        <source>Transaction ID not found</source>
        <translation>Идентификатор транзакции не найден</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11932"/>
        <source>Transaction successfully saved to </source>
        <translation>Транзакция успешно сохранена в </translation>
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
        <translation>Не удалось сохранить транзакцию в </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="430"/>
        <source>true</source>
        <translation>истинный</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="483"/>
        <source>failed to parse refresh type</source>
        <translation>не удалось проанализировать тип обновления</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Введите необязательную парольную фразу смещения начального значения. Оставьте пустым, чтобы увидеть исходное начальное значение.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4546"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Введите парольную фразу смещения начального значения, пусто, если ее нет</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>Возможно, вам стоит удалить файл &amp;quot;%s&amp;quot; и повторить попытку.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9171"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Это кошелек с поддержкой мультиподписи, он может подписывать только с помощью sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9176"/>
        <source>This is a watch only wallet</source>
        <translation>Это кошелек только для часов.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9209"/>
        <source>Failed to sign transaction</source>
        <translation>Не удалось подписать транзакцию</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9215"/>
        <source>Failed to sign transaction: </source>
        <translation>Не удалось подписать транзакцию: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9236"/>
        <source>Transaction raw hex data exported to </source>
        <translation>Необработанные шестнадцатеричные данные транзакции экспортируются в </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9257"/>
        <source>Failed to load transaction from file</source>
        <translation>Не удалось загрузить транзакцию из файла</translation>
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
        <translation>не удалось проанализировать txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9317"/>
        <source>Tx key: </source>
        <translation>Ключ передачи: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9322"/>
        <source>no tx keys found for this txid</source>
        <translation>для этого txid не найдено ключей tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9367"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9378"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9385"/>
        <source>failed to parse tx_key</source>
        <translation>не удалось проанализировать tx_key</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9394"/>
        <source>Tx key successfully stored.</source>
        <translation>Ключ передачи успешно сохранен.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9398"/>
        <source>Failed to store tx key: </source>
        <translation>Не удалось сохранить ключ передачи: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9436"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9649"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9739"/>
        <source>signature file saved to: </source>
        <translation>Файл подписи сохранен в: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9438"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9651"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9741"/>
        <source>failed to save signature file</source>
        <translation>не удалось сохранить файл подписи</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9442"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9530"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9608"/>
        <source>error: </source>
        <translation>ошибка: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9475"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9484"/>
        <source>failed to parse tx key</source>
        <translation>не удалось проанализировать ключ tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9506"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9579"/>
        <source>received</source>
        <translation>полученный</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9506"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9579"/>
        <source>in txid</source>
        <translation>в txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9509"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9582"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>ВНИМАНИЕ: эта транзакция еще не включена в блокчейн!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9519"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9592"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>ВНИМАНИЕ: не удалось определить количество подтверждений!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9525"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9598"/>
        <source>received nothing in txid</source>
        <translation>ничего не получил в txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9565"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9680"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9775"/>
        <source>failed to load signature file</source>
        <translation>не удалось загрузить файл подписи</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9687"/>
        <source>Good signature</source>
        <translation>Хорошая подпись</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9603"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9689"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9790"/>
        <source>Bad signature</source>
        <translation>Плохая подпись</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9628"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>кошелек предназначен только для просмотра и не может генерировать доказательства</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9713"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>Резервное доказательство может быть сгенерировано только при полном кошельке.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9768"/>
        <source>Address must not be a subaddress</source>
        <translation>Адрес не должен быть подадресом</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9895"/>
        <source>bad min_height parameter:</source>
        <translation>Неправильный параметр min_height:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9907"/>
        <source>bad max_height parameter:</source>
        <translation>Неправильный параметр max_height:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9929"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>block</source>
        <translation>блокировать</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9929"/>
        <source>in</source>
        <translation>в</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10020"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[В сети зафиксирована двойная трата: эта транзакция может быть или не быть заминирована] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10308"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt;должно быть меньше, чем&lt;max_amount&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10334"/>
        <source>There is no unspent output in the specified address</source>
        <translation>По указанному адресу нет неизрасходованных выходных данных.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10340"/>
        <source>
Amount: </source>
        <translation>
Количество: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10340"/>
        <source>, number of keys: </source>
        <translation>, количество клавиш: </translation>
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
Мин. высота блока: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10351"/>
        <source>
Max block height: </source>
        <translation>
Максимальная высота блока: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10352"/>
        <source>
Min amount found: </source>
        <translation>
Минимальное найденное количество: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10353"/>
        <source>
Max amount found: </source>
        <translation>
Максимальное количество найденных: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10354"/>
        <source>
Total count: </source>
        <translation>
Общее количество: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10394"/>
        <source>
Bin size: </source>
        <translation>
Получите это для вас: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10395"/>
        <source>
Outputs per *: </source>
        <translation>
Выходы по *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10397"/>
        <source>count
  ^
</source>
        <translation>количество ^
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
        <translation>+--&amp;gt; высота блока
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
        <translation>Предупреждение: при этом будет потеряна вся информация, которую невозможно восстановить из блокчейна.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10451"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Сюда входят адреса назначения, секретные ключи передачи, заметки о передаче и т. д.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9786"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Хорошая подпись -- всего: %s, потрачено: %s, неизрасходовано: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2187"/>
        <source>First line is not an amount</source>
        <translation>Первая строка — это не сумма.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2201"/>
        <source>Invalid output: </source>
        <translation>Неверный вывод: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226"/>
        <source>Invalid output key, and file doesn&apos;t exist</source>
        <translation>Неверный ключ вывода, и файл не существует</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2249"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2276"/>
        <source>Invalid output</source>
        <translation>Неверный вывод</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2787"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>недопустимый аргумент: должен быть 0/никогда, 1/действие или 2/шифрование/расшифрование</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3565"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it&apos;s included)</source>
        <translation>Передача&lt;amount&gt; к&lt;address&gt; и заблокируйте его на&lt;lockblocks&gt; (макс. 1000000). Если параметр &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; указан, кошелек использует выходные данные, полученные по адресам этих индексов. Если этот параметр опущен, кошелек случайным образом выбирает индексы адресов для использования. В любом случае он старается не объединять выходные данные по нескольким адресам.&lt;priority&gt; приоритет транзакции. Чем выше приоритет, тем выше комиссия за транзакцию. Допустимые значения в порядке приоритета (от самого низкого к самому высокому): неважный, нормальный, повышенный, приоритетный. Если не указано, используется значение по умолчанию (см. команду &amp;quot;set priority&amp;quot;).&lt;ring_size&gt; количество входов, которые нужно включить для невозможности отслеживания. Несколько платежей можно сделать одновременно, добавив URI_2 или&lt;address_2&gt;&lt;amount_2&gt; и т. д. (перед идентификатором платежа, если он включен)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6263"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Требуется пароль (%s) — используйте команду обновления</translation>
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
        <translation>Демон запрашивает оплату в diff %llu, с %f кредитами/хэшем%s. Запустите start_mining_for_rpc, чтобы начать майнинг для оплаты доступа RPC, или используйте другой демон</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10638"/>
        <source>Error mining to daemon: </source>
        <translation>Ошибка майнинга на демоне: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10644"/>
        <source>Failed to start mining for RPC payment</source>
        <translation>Не удалось начать майнинг для оплаты RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10656"/>
        <source>wallet</source>
        <translation>кошелек</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10658"/>
        <source> (no daemon)</source>
        <translation> (без демона)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10660"/>
        <source> (out of sync)</source>
        <translation> (не синхронизировано)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10712"/>
        <source>(Untitled account)</source>
        <translation>(Безымянный счет)</translation>
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
        <translation>не удалось проанализировать индекс: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10730"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11045"/>
        <source>specify an index between 0 and </source>
        <translation>укажите индекс от 0 до </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10856"/>
        <source>, unlocked balance: </source>
        <translation>, разблокированный баланс: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10866"/>
        <source>Untagged accounts:</source>
        <translation>Неотмеченные аккаунты:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10872"/>
        <source>Tag %s is unregistered.</source>
        <translation>Тег %s не зарегистрирован.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10875"/>
        <source>Accounts with tag: </source>
        <translation>Аккаунты с тегом: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10876"/>
        <source>Tag&apos;s description: </source>
        <translation>Описание тега: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10878"/>
        <source>Account</source>
        <translation>Счет</translation>
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
        <translation>Основной адрес</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10937"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10943"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10949"/>
        <source>(used)</source>
        <translation>(использовал)</translation>
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
        <translation>(Безымянный адрес)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11072"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt;уже вне границ</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11077"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt;превышает границу</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11154"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Интегрированные адреса могут быть созданы только для учетной записи 0.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11146"/>
        <source>Matching integrated address: </source>
        <translation>Соответствующий интегрированный адрес: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173"/>
        <source>Subaddress: </source>
        <translation>Подадрес: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173"/>
        <source>Standard address: </source>
        <translation>Стандартный адрес: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11178"/>
        <source>failed to parse payment ID or address</source>
        <translation>не удалось проанализировать идентификатор платежа или адрес</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11217"/>
        <source>failed to parse index</source>
        <translation>не удалось проанализировать индекс</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11225"/>
        <source>Address book is empty.</source>
        <translation>Адресная книга пуста.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11231"/>
        <source>Index: </source>
        <translation>Индекс: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11237"/>
        <source>Address: </source>
        <translation>Адрес: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11238"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11374"/>
        <source>Description: </source>
        <translation>Описание: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11331"/>
        <source>no description found</source>
        <translation>описание не найдено</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11333"/>
        <source>description found: </source>
        <translation>описание найдено: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7019"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11373"/>
        <source>Filename: </source>
        <translation>Имя файла: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11380"/>
        <source>Watch only</source>
        <translation>Только смотреть</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11382"/>
        <source>%u/%u multisig%s</source>
        <translation>%u/%u мультиподпись%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9131"/>
        <source>%s change to %s</source>
        <translation>%s изменить на %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9515"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9588"/>
        <source>This transaction has %u confirmations</source>
        <translation>Эта транзакция имеет %u подтверждений</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61"/>
        <source>Filename to save the certificate</source>
        <translation>Имя файла для сохранения сертификата</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62"/>
        <source>Filename to save the private key</source>
        <translation>Имя файла для сохранения закрытого ключа</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63"/>
        <source>Passphrase with which to encrypt the private key</source>
        <translation>Парольная фраза, с помощью которой будет зашифрован закрытый ключ</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64"/>
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>Файл, содержащий парольную фразу, с помощью которой будет зашифрован закрытый ключ.</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65"/>
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>Запросить парольную фразу для шифрования закрытого ключа</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143"/>
        <source>Argument is needed: </source>
        <translation>Нужен аргумент: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153"/>
        <source>Failed to read passphrase</source>
        <translation>Не удалось прочитать парольную фразу</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188"/>
        <source>Failed to create certificate</source>
        <translation>Не удалось создать сертификат</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206"/>
        <source>Failed to write certificate: </source>
        <translation>Не удалось записать сертификат: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226"/>
        <source>Failed to write private key: </source>
        <translation>Не удалось записать закрытый ключ: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237"/>
        <source>Failed to save certificate file</source>
        <translation>Не удалось сохранить файл сертификата</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243"/>
        <source>Failed to save private key file</source>
        <translation>Не удалось сохранить файл закрытого ключа</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Базовое имя файла (суффиксы -1, -2 и т.д. будут добавлены по мере необходимости)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>Укажите порог и участников сразу как M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>Сколько участников будут делиться частями кошелька с мультиподписью?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>Сколько подписей требуется для подписания действительной транзакции?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>Create testnet multisig wallets</source>
        <translation>Создание тестовых кошельков с мультиподписью</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create stagenet multisig wallets</source>
        <translation>Создание кошельков Stagenet MultiSig</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create an address file for new wallets</source>
        <translation>Создайте файл адресов для новых кошельков</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Создание %u %u/%u мультиподписных кошельков</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="136"/>
        <source>Generated multisig wallets for address </source>
        <translation>Сгенерированные кошельки с мультиподписью для адреса </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="140"/>
        <source>Error creating multisig wallets: </source>
        <translation>Ошибка создания кошельков с мультиподписью: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="165"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Эта программа генерирует набор кошельков с мультиподписью — используйте эту более простую схему только в том случае, если все участники доверяют друг другу.</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="184"/>
        <source>Error: Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Ошибка: нельзя указать более одного из параметров --testnet и --stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="191"/>
        <source>Error: expected N/M, but got: </source>
        <translation>Ошибка: ожидалось N/M, но получено: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="199"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="208"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Ошибка: может быть указана либо --scheme, либо --threshold и --participants</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="215"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Ошибка: ожидалось N &amp;gt; 1 и N &amp;lt;= M, но получено N==%u и M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="224"/>
        <source>Error: --filename-base is required</source>
        <translation>Ошибка: требуется --filename-base</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72"/>
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>Использовать экземпляр PyBitmessage по URL&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73"/>
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>Указать&lt;arg&gt; как имя пользователя:пароль для API PyBitmessage</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911"/>
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>Автоконфигурация не может быть продолжена, поскольку данные автоконфигурации от других подписантов неполные</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936"/>
        <source>The signer config is not complete.</source>
        <translation>Конфигурация подписывающего устройства не завершена.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988"/>
        <source>Wallet can&apos;t go multisig because key sets from other signers are missing or not complete.</source>
        <translation>Кошелек не может использовать мультиподпись, поскольку наборы ключей от других подписантов отсутствуют или неполны.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030"/>
        <source>Wallet can&apos;t start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>Кошелек не может начать новый раунд обмена ключами, поскольку наборы ключей от других подписантов отсутствуют или неполны.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094"/>
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>Синхронизация не выполнена, поскольку данные мультиподписной синхронизации от других подписантов отсутствуют или неполны.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208"/>
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>Есть ожидающие сообщения, но ни одно из них не готово к обработке в обычных условиях.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211"/>
        <source>
Use &quot;mms next sync&quot; if you want to force processing of the waiting sync data</source>
        <translation>
Используйте «mms next sync», если вы хотите принудительно обработать данные ожидания синхронизации.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215"/>
        <source>
Use &quot;mms note&quot; to display the waiting notes</source>
        <translation>
Используйте «mms note» для отображения ожидающих заметок</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220"/>
        <source>There are no messages waiting to be processed.</source>
        <translation>Нет сообщений, ожидающих обработки.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441"/>
        <source>key set</source>
        <translation>набор ключей</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443"/>
        <source>additional key set</source>
        <translation>дополнительный набор ключей</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445"/>
        <source>multisig sync data</source>
        <translation>данные синхронизации multisig</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447"/>
        <source>partially signed tx</source>
        <translation>частично подписанный tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449"/>
        <source>fully signed tx</source>
        <translation>полностью подписанный tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451"/>
        <source>note</source>
        <translation>примечание</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453"/>
        <source>signer config</source>
        <translation>конфигурация подписчика</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455"/>
        <source>auto-config data</source>
        <translation>данные автоконфигурации</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457"/>
        <source>unknown message type</source>
        <translation>неизвестный тип сообщения</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466"/>
        <source>in</source>
        <translation>в</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468"/>
        <source>out</source>
        <translation>вне</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470"/>
        <source>unknown message direction</source>
        <translation>неизвестное направление сообщения</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479"/>
        <source>ready to send</source>
        <translation>готов к отправке</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481"/>
        <source>sent</source>
        <translation>отправил</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483"/>
        <source>waiting</source>
        <translation>ожидающий</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485"/>
        <source>processed</source>
        <translation>обработано</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487"/>
        <source>cancelled</source>
        <translation>отменено</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489"/>
        <source>unknown message state</source>
        <translation>неизвестное состояние сообщения</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Создайте новый кошелек и сохраните его в&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Создайте новый кошелек на устройстве и сохраните его&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>Сгенерировать кошелек только для входящих платежей из ключа просмотра</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195"/>
        <source>Generate full view-only wallet from view key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="196"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>Генерация детерминированного кошелька из ключа траты</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="197"/>
        <source>Generate wallet from private keys</source>
        <translation>Сгенерировать кошелек из закрытых ключей</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="198"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Сгенерируйте главный кошелек из ключей кошелька с мультиподписью</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="200"/>
        <source>Language for mnemonic</source>
        <translation>Язык для мнемоники</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="201"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Укажите фразу Electrum для восстановления/создания кошелька</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="202"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Восстановить кошелек с помощью мнемонической фразы в стиле Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="203"/>
        <source>alias for --restore-deterministic-wallet</source>
        <translation>псевдоним для --restore-deterministic-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="204"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Восстановите кошелек с мультиподписью, используя мнемоническую фразу в стиле Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="205"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Генерация недетерминированных ключей просмотра и траты</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="207"/>
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>Восстановление с расчетной высоты блокчейна на указанную дату</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="208"/>
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>Новая созданная транзакция не будет передана в сеть Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="372"/>
        <source>Enter a new password for the wallet</source>
        <translation>Введите новый пароль для кошелька</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="372"/>
        <source>Wallet password</source>
        <translation>Пароль кошелька</translation>
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
        <translation>недопустимый аргумент: должен быть 0/1, true/false, y/n, yes/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="546"/>
        <source>DNSSEC validation passed</source>
        <translation>Проверка DNSSEC пройдена</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="550"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>ВНИМАНИЕ: проверка DNSSEC не удалась, этот адрес может быть неверным!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="553"/>
        <source>For URL: </source>
        <translation>Для URL-адреса: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="555"/>
        <source> Salvium Address = </source>
        <translation> Адрес Сальвия = </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="567"/>
        <source>you have cancelled the transfer request</source>
        <translation>вы отменили запрос на перевод</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="588"/>
        <source>failed to parse index: </source>
        <translation>не удалось проанализировать индекс: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="601"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>неверный формат для просмотра подадреса вперед; должно быть&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="665"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>нет подключения к демону. Убедитесь, что демон запущен.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="674"/>
        <source>RPC error: </source>
        <translation>Ошибка RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678"/>
        <source>failed to get random outputs to mix: </source>
        <translation>не удалось смешать случайные выходы: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="685"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="693"/>
        <source>Not enough money in unlocked balance</source>
        <translation>Недостаточно денег на разблокированном балансе</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="703"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>Не удалось найти способ создания транзакций. Обычно это происходит из-за пыли, которая настолько мала, что не может окупить себя в виде комиссий, или из-за попытки отправить больше денег, чем разблокированный баланс, или из-за того, что недостаточно средств для оплаты комиссий</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="709"/>
        <source>not enough outputs for specified ring size</source>
        <translation>недостаточно выходов для указанного размера кольца</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="712"/>
        <source>output amount</source>
        <translation>выходная сумма</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="712"/>
        <source>found outputs to use</source>
        <translation>найдены выходы для использования</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714"/>
        <source>Please use sweep_unmixable.</source>
        <translation>Пожалуйста, используйте sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="718"/>
        <source>transaction was not constructed</source>
        <translation>транзакция не была построена</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726"/>
        <source>Reason: </source>
        <translation>Причина: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="745"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>не удалось найти подходящий способ разделения транзакций</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="751"/>
        <source>unknown transfer error: </source>
        <translation>неизвестная ошибка передачи: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="756"/>
        <source>Multisig error: </source>
        <translation>Ошибка мультиподписи: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="762"/>
        <source>internal error: </source>
        <translation>внутренняя ошибка: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="767"/>
        <source>unexpected error: </source>
        <translation>непредвиденная ошибка: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="771"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Произошла ошибка, которая может означать, что узел пытается заставить вас повторить попытку создания транзакции и сосредоточиться на том, какими выходами вы владеете. Или это может быть добросовестная ошибка. Может быть разумным отключиться от этого узла и не пытаться немедленно отправить транзакцию. В качестве альтернативы подключитесь к другому узлу, чтобы исходный узел не мог сопоставлять информацию.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="783"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>Файл %s, вероятно, хранит закрытые ключи кошелька! Используйте другое имя файла.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9804"/>
        <source> seconds</source>
        <translation> секунды</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9806"/>
        <source> minutes</source>
        <translation> минут</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9808"/>
        <source> hours</source>
        <translation> часы</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9810"/>
        <source> days</source>
        <translation> дней</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9812"/>
        <source> months</source>
        <translation> месяцев</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9813"/>
        <source>a long time</source>
        <translation>долгое время</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12018"/>
        <source>Unknown command: </source>
        <translation>Неизвестная команда: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="206"/>
        <source>Restore from specific blockchain height</source>
        <translation>Восстановление с определенной высоты блокчейна</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="209"/>
        <source>Create an address file for new wallets</source>
        <translation>Создайте файл адресов для новых кошельков</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="211"/>
        <source>Display English language names</source>
        <translation>Отображение названий на английском языке</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365"/>
        <source>failed to read password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="387"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>Демон занят. Попробуйте еще раз позже.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="396"/>
        <source>possibly lost connection to daemon</source>
        <translation>возможно потеряно соединение с демоном</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413"/>
        <source>Error: </source>
        <translation>Ошибка: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="557"/>
        <source>Is this OK?</source>
        <translation>Это нормально?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="723"/>
        <source>transaction %s was rejected by daemon</source>
        <translation>транзакция %s была отклонена демоном</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="735"/>
        <source>destination amount is zero</source>
        <translation>сумма назначения равна нулю</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="740"/>
        <source>transaction has no destination</source>
        <translation>транзакция не имеет назначения</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="786"/>
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>Файл %s уже существует. Вы уверены, что хотите его перезаписать?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11993"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>Это командная строка кошелька Salvium. Для корректной работы ему необходимо подключиться к демону Salvium. ВНИМАНИЕ: не используйте повторно ключи Salvium в другом форке, ЕСЛИ только в этом форке нет встроенных мер по снижению риска повторного использования ключей. Это нанесет ущерб вашей конфиденциальности.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12012"/>
        <source>Failed to initialize wallet</source>
        <translation>Не удалось инициализировать кошелек</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Использовать экземпляр демона в&lt;host&gt; :&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Использовать экземпляр демона на хосте&lt;arg&gt; вместо локального хоста</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Использовать экземпляр демона в порту&lt;arg&gt; вместо 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="267"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Для testnet. Демон также должен быть запущен с флагом --testnet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="287"/>
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>Файл, содержащий дополнительную энтропию для инициализации PRNG (любые данные, для большей полезности старайтесь использовать 256 бит энтропии, что обычно означает более 256 бит данных)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="288"/>
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>Разрешить взаимодействие с демоном, использующим другую версию</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="382"/>
        <source>can&apos;t specify daemon host or port more than once</source>
        <translation>нельзя указать хост или порт демона более одного раза</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="518"/>
        <source>can&apos;t specify more than one of --password and --password-file</source>
        <translation>нельзя указать более одного параметра --password и --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532"/>
        <source>the password file specified could not be read</source>
        <translation>указанный файл паролей не может быть прочитан</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="558"/>
        <source>Failed to load file </source>
        <translation>Не удалось загрузить файл </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Пароль кошелька (при необходимости экранируйте/заключите в кавычки)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253"/>
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt; :]&lt;port&gt; прокси-сервер socks для использования в демон-соединениях</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Включить команды, которые полагаются на доверенный демон</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Отключить команды, которые полагаются на доверенный демон</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Укажите имя пользователя[:пароль] для демона RPC-клиента</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260"/>
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>Включить SSL для демона RPC-подключений: включено|отключено|автоопределение</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="264"/>
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>Список допустимых отпечатков пальцев разрешенных RPC-серверов</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="265"/>
        <source>Allow any SSL certificate from the daemon</source>
        <translation>Разрешить любой SSL-сертификат от демона</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="266"/>
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>Разрешить пользователю (через --daemon-ssl-ca-certificates) цепочку сертификатов</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="268"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Для stagenet. Демон также должен быть запущен с флагом --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="270"/>
        <source>Set shared ring database path</source>
        <translation>Установить путь к базе данных общего кольца</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281"/>
        <source>Number of rounds for the key derivation function</source>
        <translation>Количество раундов для функции выведения ключа</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="282"/>
        <source>HW device to use</source>
        <translation>Аппаратное устройство для использования</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="283"/>
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>Путь вывода кошелька HW-устройства (например, SLIP-10)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="285"/>
        <source>Do not use DNS</source>
        <translation>Не использовать DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="286"/>
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>Не подключайтесь к демону и не используйте DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="374"/>
        <source>Invalid argument for </source>
        <translation>Неверный аргумент для </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="435"/>
        <source>Enabling --</source>
        <translation>Включение --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="435"/>
        <source> requires --</source>
        <translation> требует --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="436"/>
        <location filename="../src/wallet/wallet2.cpp" line="437"/>
        <source> or --</source>
        <translation> или --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="437"/>
        <source> or use of a .onion/.i2p domain</source>
        <translation> или использование домена .onion/.i2p</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="455"/>
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon и --untrusted-daemon видны, предполагая, что они не являются доверенными</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="465"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>Демон локальный, предполагается, что он доверенный</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="475"/>
        <source>failed to initialize the wallet</source>
        <translation>не удалось инициализировать кошелек</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="539"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>пароль не указан; используйте --prompt-for-password для запроса пароля</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="541"/>
        <source>Enter a new password for the wallet</source>
        <translation>Введите новый пароль для кошелька</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="541"/>
        <source>Wallet password</source>
        <translation>Пароль кошелька</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564"/>
        <source>Failed to parse JSON</source>
        <translation>Не удалось проанализировать JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="571"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>Версия %u слишком новая, мы можем только дойти до %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587"/>
        <source>failed to parse view key secret key</source>
        <translation>не удалось проанализировать секретный ключ ключа представления</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="592"/>
        <source>view secret key may not be all zeroes</source>
        <translation>просмотр секретного ключа может состоять не только из нулей</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="594"/>
        <location filename="../src/wallet/wallet2.cpp" line="664"/>
        <location filename="../src/wallet/wallet2.cpp" line="709"/>
        <source>failed to verify view key secret key</source>
        <translation>не удалось проверить просмотр ключа секретный ключ</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605"/>
        <source>failed to parse spend key secret key</source>
        <translation>не удалось проанализировать секретный ключ траты</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="610"/>
        <source>spend secret key may not be all zeroes</source>
        <translation>секретный ключ траты может состоять не только из нулей</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="612"/>
        <location filename="../src/wallet/wallet2.cpp" line="674"/>
        <location filename="../src/wallet/wallet2.cpp" line="735"/>
        <source>failed to verify spend key secret key</source>
        <translation>не удалось проверить секретный ключ траты</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="624"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Список слов в стиле Electrum не прошел проверку</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="644"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Необходимо указать как минимум один из следующих вариантов: список слов в стиле Electrum, закрытый ключ просмотра или закрытый ключ траты.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="648"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Указаны как список слов в стиле Electrum, так и закрытый ключ(и)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="658"/>
        <source>invalid address</source>
        <translation>недействительный адрес</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="667"/>
        <source>view key does not match standard address</source>
        <translation>ключ просмотра не соответствует стандартному адресу</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="677"/>
        <source>spend key does not match standard address</source>
        <translation>ключ траты не соответствует стандартному адресу</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="685"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>Невозможно сгенерировать устаревшие кошельки из JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="721"/>
        <source>failed to parse address: </source>
        <translation>не удалось проанализировать адрес: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="727"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>Для создания кошелька только для просмотра необходимо указать адрес.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="744"/>
        <source>failed to generate new wallet: </source>
        <translation>не удалось создать новый кошелек: </translation>
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
        <translation>reorg превышает максимально допустимую глубину, используйте «set max-reorg-depth N», чтобы разрешить это, глубина reorg: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5614"/>
        <location filename="../src/wallet/wallet2.cpp" line="6195"/>
        <location filename="../src/wallet/wallet2.cpp" line="6654"/>
        <source>Primary account</source>
        <translation>Основной счет</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9362"/>
        <source>Transaction sanity check failed</source>
        <translation>Проверка корректности транзакции не удалась</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11782"/>
        <source>Incorrect number of transfers_indices on return_payment</source>
        <translation>Неверное количество переводов_индексов при возврате_платежа</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11784"/>
        <location filename="../src/wallet/wallet2.cpp" line="11797"/>
        <source>cannot locate return_payment origin index in m_transfers</source>
        <translation>невозможно найти индекс источника return_payment в m_transfers</translation>
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
        <translation>в create_transactions_return(): неправильное количество дополнительных открытых ключей TX в исходном TX для return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11933"/>
        <source>at create_transactions_return(): failed to generate_key_derivation</source>
        <translation>в create_transactions_return(): не удалось сгенерировать_ключ_деривацию</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11960"/>
        <location filename="../src/wallet/wallet2.cpp" line="11976"/>
        <source>Attempting to return change to ourself</source>
        <translation>Попытка вернуть себе изменения</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11965"/>
        <location filename="../src/wallet/wallet2.cpp" line="11981"/>
        <source>Failed to identify change output</source>
        <translation>Не удалось идентифицировать выходные данные изменений</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12168"/>
        <source>Transaction cannot pay for itself</source>
        <translation>Транзакция не может окупить себя</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12264"/>
        <source>Created transaction(s) failed sanity check</source>
        <translation>Созданные транзакции не прошли проверку на работоспособность</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13226"/>
        <source>No funds received in this tx.</source>
        <translation>По данному переводу средства не получены.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="14118"/>
        <source>failed to read file </source>
        <translation>не удалось прочитать файл </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="210"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Установить размеры опережающего просмотра подадреса&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261"/>
        <source>Path to a PEM format private key</source>
        <translation>Путь к закрытому ключу в формате PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="262"/>
        <source>Path to a PEM format certificate</source>
        <translation>Путь к сертификату формата PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Путь к файлу, содержащему объединенные сертификаты формата PEM для замены системных центров сертификации.</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="271"/>
        <source>Failed to create directory </source>
        <translation>Не удалось создать каталог </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="273"/>
        <source>Failed to create directory %s: %s</source>
        <translation>Не удалось создать каталог %s: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="284"/>
        <source>Cannot specify --</source>
        <translation>Невозможно указать --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="284"/>
        <source> and --</source>
        <translation> и --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="303"/>
        <source>Failed to create file </source>
        <translation>Не удалось создать файл </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="303"/>
        <source>. Check permissions or remove file</source>
        <translation>. Проверьте разрешения или удалите файл</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="313"/>
        <source>Error writing to file </source>
        <translation>Ошибка записи в файл </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="316"/>
        <source>RPC username/password is stored in file </source>
        <translation>Имя пользователя/пароль RPC хранятся в файле </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="757"/>
        <source>Tag %s is unregistered.</source>
        <translation>Тег %s не зарегистрирован.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="785"/>
        <source>No matches for regex filter %s .</source>
        <translation>Нет совпадений для фильтра регулярных выражений %s.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3870"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>Транзакция невозможна. Доступно только %s, сумма транзакции %s = %s + %s (комиссия)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4959"/>
        <source>Can&apos;t specify more than one of --testnet and --stagenet</source>
        <translation>Нельзя указать более одного из параметров --testnet и --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4978"/>
        <source>Can&apos;t specify more than one of --wallet-file and --generate-from-json</source>
        <translation>Нельзя указать более одного параметра --wallet-file и --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4984"/>
        <source>--password-file is not allowed in combination with --wallet-dir</source>
        <translation>--password-file не допускается в сочетании с --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4996"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>Необходимо указать --wallet-file или --generate-from-json или --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5000"/>
        <source>Loading wallet...</source>
        <translation>Загрузка кошелька...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5048"/>
        <source>Initial refresh failed: </source>
        <translation>Первоначальное обновление не удалось: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5053"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5085"/>
        <source>Saving wallet...</source>
        <translation>Сбережение кошелька...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5055"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5087"/>
        <source>Successfully saved</source>
        <translation>Успешно сохранено</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5058"/>
        <source>Successfully loaded</source>
        <translation>Успешно загружено</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5062"/>
        <source>Wallet initialization failed: </source>
        <translation>Инициализация кошелька не удалась: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5068"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>Не удалось инициализировать RPC-сервер кошелька</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5072"/>
        <source>Starting wallet RPC server</source>
        <translation>Запуск RPC-сервера кошелька</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5079"/>
        <source>Failed to run wallet: </source>
        <translation>Не удалось запустить кошелек: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5082"/>
        <source>Stopped wallet RPC server</source>
        <translation>Остановлен сервер RPC кошелька</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5091"/>
        <source>Failed to save wallet: </source>
        <translation>Не удалось сохранить кошелек: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5169"/>
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Это кошелек RPC Salvium. Для корректной работы ему необходимо подключиться к демону Salvium.</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="151"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11958"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="5144"/>
        <source>Wallet options</source>
        <translation>Варианты кошелька</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>Сгенерировать кошелек из файла формата JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Использовать кошелек&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81"/>
        <source>Set RPC client secret key for RPC payments</source>
        <translation>Установить секретный ключ клиента RPC для платежей RPC</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85"/>
        <source>Wallet password file</source>
        <translation>Файл пароля кошелька</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>Максимальное количество потоков для параллельной работы</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114"/>
        <source>Specify log file</source>
        <translation>Укажите файл журнала</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115"/>
        <source>Config file</source>
        <translation>Файл конфигурации</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127"/>
        <source>General options</source>
        <translation>Общие параметры</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Это командная строка Salvium-кошелька. Для корректной работы ему необходимо подключиться к демону Salvium.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176"/>
        <source>Can&apos;t find config file </source>
        <translation>Не могу найти файл конфигурации </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220"/>
        <source>Logging to: </source>
        <translation>Вход в: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222"/>
        <source>Logging to %s</source>
        <translation>Вход в %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226"/>
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>ВНИМАНИЕ: Возможно, у вас недостаточно высокий лимит блокируемой памяти.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228"/>
        <source>see ulimit -l</source>
        <translation>см. ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153"/>
        <source>Usage:</source>
        <translation>Использование:</translation>
    </message>
</context>
</TS>
