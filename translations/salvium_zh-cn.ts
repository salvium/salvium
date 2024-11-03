<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh-cn">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53" />
        <source>Invalid destination address</source>
        <translation>目标地址无效</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60" />
        <source>Payment ID supplied: this is obsolete</source>
        <translation>提供的付款 ID：此信息已过时</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92" />
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>尝试将交易保存到文件，但指定的文件存在。退出以避免覆盖风险。文件：</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99" />
        <source>Failed to write transaction(s) to file</source>
        <translation>无法将交易写入文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139" />
        <source>daemon is busy. Please try again later.</source>
        <translation>守护进程正忙。请稍后重试。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>没有连接到守护进程。请确保守护进程正在运行。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146" />
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>事务 %s 被守护进程拒绝，状态为： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151" />
        <source>. Reason: </source>
        <translation>。 原因： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153" />
        <source>Unknown exception: </source>
        <translation>未知异常： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156" />
        <source>Unhandled exception</source>
        <translation>未处理的异常</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="229" />
        <source>Couldn't multisig sign data: </source>
        <translation>无法对数据进行多重签名： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="251" />
        <source>Couldn't sign multisig transaction: </source>
        <translation>无法签署多重签名交易： </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75" />
        <source>This is a watch only wallet</source>
        <translation>这是一个仅供手表使用的钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85" />
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92" />
        <source>Failed to sign transaction</source>
        <translation>交易签署失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168" />
        <source>Claimed change does not go to a paid address</source>
        <translation>领取的零钱没有发往已付款的地址</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174" />
        <source>Claimed change is larger than payment to the change address</source>
        <translation>索要的零钱大于支付给零钱地址的金额</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184" />
        <source>Change goes to more than one address</source>
        <translation>零钱可发往多个地址</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197" />
        <source>sending %s to %s</source>
        <translation>将 %s 发送给 %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203" />
        <source>with no destinations</source>
        <translation>没有目的地</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209" />
        <source>%s change to %s</source>
        <translation>%s 更改为 %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212" />
        <source>no change</source>
        <translation>没有变化</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214" />
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>已加载 %lu 笔交易，涉及 %s，费用 %s，%s，%s，最小环大小为 %lu。%s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="561" />
        <source>failed to parse address</source>
        <translation>解析地址失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="572" />
        <source>failed to parse secret spend key</source>
        <translation>无法解析秘密支出密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="587" />
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>未提供查看密钥和消费密钥，已取消</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="595" />
        <source>failed to parse secret view key</source>
        <translation>无法解析秘密查看密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="604" />
        <source>failed to verify secret spend key</source>
        <translation>未能验证秘密支出密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="608" />
        <source>spend key does not match address</source>
        <translation>支出密钥与地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="614" />
        <source>failed to verify secret view key</source>
        <translation>无法验证秘密查看密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="618" />
        <source>view key does not match address</source>
        <translation>查看密钥与地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="641" />
        <location filename="../src/wallet/api/wallet.cpp" line="658" />
        <source>failed to generate new wallet: </source>
        <translation>无法生成新钱包： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="706" />
        <source>Electrum seed is empty</source>
        <translation>琥珀金种子是空的</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="715" />
        <source>Electrum-style word list failed verification</source>
        <translation>Electrum 风格的单词列表验证失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1071" />
        <source>Failed to load unsigned transactions</source>
        <translation>无法加载未签名的交易</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1094" />
        <source>Failed to load transaction from file</source>
        <translation>无法从文件加载交易</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1110" />
        <source>Wallet is view only</source>
        <translation>钱包仅供查看</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118" />
        <source>failed to save file </source>
        <translation>保存文件失败 </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1134" />
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>密钥镜像只能通过受信任的守护进程导入</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1147" />
        <source>Failed to import key images: </source>
        <translation>无法导入关键图片： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1158" />
        <location filename="../src/wallet/api/wallet.cpp" line="1188" />
        <source>Not supported on HW wallets.</source>
        <translation>不支持 HW 钱包。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169" />
        <source>Failed to save file: </source>
        <translation>无法保存文件： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1176" />
        <source>Error exporting outputs: </source>
        <translation>导出输出时出错： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1197" />
        <source>Failed to read file: </source>
        <translation>无法读取文件： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1209" />
        <source>Failed to import outputs: </source>
        <translation>无法导入输出： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1220" />
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>无法扫描交易：未提供交易 ID。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231" />
        <source>Invalid txid specified: </source>
        <translation>指定了无效的 txid： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1249" />
        <source>Failed to scan transaction: </source>
        <translation>扫描交易失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1281" />
        <source>Failed to get subaddress label: </source>
        <translation>无法获取子地址标签： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1294" />
        <source>Failed to set subaddress label: </source>
        <translation>无法设置子地址标签： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1311" />
        <source>Failed to get multisig info: </source>
        <translation>无法获取多重签名信息： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1328" />
        <source>Failed to make multisig: </source>
        <translation>无法进行多重签名： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1342" />
        <source>Failed to exchange multisig keys: </source>
        <translation>无法交换多重签名密钥： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1358" />
        <source>Failed to export multisig images: </source>
        <translation>无法导出多重签名图像： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1376" />
        <source>Failed to parse imported multisig images</source>
        <translation>无法解析导入的多重签名图像</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1386" />
        <source>Failed to import multisig images: </source>
        <translation>无法导入多重签名图像： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1400" />
        <source>Failed to check for partial multisig key images: </source>
        <translation>无法检查部分多重签名密钥图像： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1428" />
        <source>Failed to restore multisig transaction: </source>
        <translation>无法恢复多重签名交易： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1477" />
        <source>Sending all requires one destination address</source>
        <translation>发送所有需要一个目标地址</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1481" />
        <source>Destinations and amounts are unequal</source>
        <translation>目的地和金额不平等</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489" />
        <source>payment id has invalid format, expected 64 character hex string: </source>
        <translation>付款 ID 格式无效，预期为 64 个字符的十六进制字符串： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1497" />
        <source>Invalid destination address</source>
        <translation>目标地址无效</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1503" />
        <source>a single transaction cannot use more than one payment id</source>
        <translation>单笔交易不能使用多个付款 ID</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1531" />
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>无法设置付款 ID，尽管已正确解码</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1556" />
        <location filename="../src/wallet/api/wallet.cpp" line="1647" />
        <source>daemon is busy. Please try again later.</source>
        <translation>守护进程正忙。请稍后重试。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1558" />
        <location filename="../src/wallet/api/wallet.cpp" line="1649" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>没有连接到守护进程。请确保守护进程正在运行。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1560" />
        <location filename="../src/wallet/api/wallet.cpp" line="1651" />
        <source>RPC error: </source>
        <translation>RPC 错误： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1562" />
        <source>failed to get outputs to mix: %s</source>
        <translation>无法混合输出：%s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1566" />
        <location filename="../src/wallet/api/wallet.cpp" line="1658" />
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>转账金额不足，仅可用 %s，已发送金额 %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1573" />
        <location filename="../src/wallet/api/wallet.cpp" line="1666" />
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>转账金额不足，总余额只有 %s，已发送金额 %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1580" />
        <location filename="../src/wallet/api/wallet.cpp" line="1674" />
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>转账金额不足，仅可用 %s，交易金额 %s = %s + %s（手续费）</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1588" />
        <location filename="../src/wallet/api/wallet.cpp" line="1682" />
        <source>not enough outputs for specified ring size</source>
        <translation>对于指定的环尺寸，输出不足</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590" />
        <location filename="../src/wallet/api/wallet.cpp" line="1684" />
        <source>output amount</source>
        <translation>输出量</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590" />
        <location filename="../src/wallet/api/wallet.cpp" line="1684" />
        <source>found outputs to use</source>
        <translation>找到要使用的输出</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1592" />
        <source>Please sweep unmixable outputs.</source>
        <translation>请扫描不可混合的输出。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1595" />
        <location filename="../src/wallet/api/wallet.cpp" line="1688" />
        <source>transaction was not constructed</source>
        <translation>交易未构建</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1598" />
        <location filename="../src/wallet/api/wallet.cpp" line="1691" />
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>事务 %s 被守护进程拒绝，状态为： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1603" />
        <source>destination amount is zero</source>
        <translation>目的地金额为零</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1605" />
        <source>transaction has no destination</source>
        <translation>交易没有目的地</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1607" />
        <location filename="../src/wallet/api/wallet.cpp" line="1698" />
        <source>failed to find a suitable way to split transactions</source>
        <translation>未能找到合适的方法来拆分交易</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1609" />
        <location filename="../src/wallet/api/wallet.cpp" line="1700" />
        <source>unknown transfer error: </source>
        <translation>未知的传输错误： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1611" />
        <location filename="../src/wallet/api/wallet.cpp" line="1702" />
        <source>internal error: </source>
        <translation>内部错误： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1613" />
        <location filename="../src/wallet/api/wallet.cpp" line="1704" />
        <source>unexpected error: </source>
        <translation>意外错误： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1615" />
        <location filename="../src/wallet/api/wallet.cpp" line="1706" />
        <source>unknown error</source>
        <translation>未知错误</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653" />
        <source>failed to get outputs to mix</source>
        <translation>无法混合输出</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1696" />
        <source>one of destinations is zero</source>
        <translation>其中一个目的地为零</translation>
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
        <translation>无法解析 txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1836" />
        <source>no tx keys found for this txid</source>
        <translation>未找到此 txid 的 tx 密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1860" />
        <location filename="../src/wallet/api/wallet.cpp" line="1869" />
        <source>Failed to parse tx key</source>
        <translation>无法解析 tx 密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1878" />
        <location filename="../src/wallet/api/wallet.cpp" line="1907" />
        <location filename="../src/wallet/api/wallet.cpp" line="1935" />
        <location filename="../src/wallet/api/wallet.cpp" line="2016" />
        <location filename="../src/wallet/api/wallet.cpp" line="2047" />
        <source>Failed to parse address</source>
        <translation>解析地址失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2021" />
        <source>Address must not be a subaddress</source>
        <translation>地址不能是子地址</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2052" />
        <source>Address doesn't belong to the wallet</source>
        <translation>地址不属于该钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2076" />
        <source>The wallet must be in multisig ready state</source>
        <translation>钱包必须处于多重签名就绪状态</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2098" />
        <source>Given string is not a key</source>
        <translation>给定的字符串不是键</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2361" />
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>重新扫描已用只能与受信任的守护进程一起使用</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2419" />
        <source>Invalid output: </source>
        <translation>无效输出： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2426" />
        <source>Failed to mark outputs as spent</source>
        <translation>未能将输出标记为已用</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2437" />
        <location filename="../src/wallet/api/wallet.cpp" line="2459" />
        <source>Failed to parse output amount</source>
        <translation>解析输出金额失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2442" />
        <location filename="../src/wallet/api/wallet.cpp" line="2464" />
        <source>Failed to parse output offset</source>
        <translation>解析输出偏移失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2448" />
        <source>Failed to mark output as spent</source>
        <translation>无法将输出标记为已用</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2470" />
        <source>Failed to mark output as unspent</source>
        <translation>未能将输出标记为未使用</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2481" />
        <location filename="../src/wallet/api/wallet.cpp" line="2520" />
        <source>Failed to parse key image</source>
        <translation>无法解析关键图像</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2487" />
        <source>Failed to get ring</source>
        <translation>获取铃声失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2505" />
        <source>Failed to get rings</source>
        <translation>未能获得戒指</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2526" />
        <source>Failed to set ring</source>
        <translation>无法设置铃声</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316" />
        <source>Failed to parse address</source>
        <translation>解析地址失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323" />
        <source>Failed to parse key</source>
        <translation>解析密钥失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="331" />
        <source>failed to verify key</source>
        <translation>密钥验证失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="341" />
        <source>key does not match address</source>
        <translation>密钥与地址不匹配</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54" />
        <source>yes</source>
        <translation>是的</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68" />
        <source>no</source>
        <translation>不</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92" />
        <source>Specify IP to bind RPC server</source>
        <translation>指定IP绑定RPC服务器</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93" />
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>指定绑定 RPC 服务器的 IPv6 地址</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94" />
        <source>Specify IP to bind restricted RPC server</source>
        <translation>指定IP绑定受限RPC服务器</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95" />
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>指定 IPv6 地址来绑定受限 RPC 服务器</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96" />
        <source>Allow IPv6 for RPC</source>
        <translation>允许 RPC 使用 IPv6</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97" />
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>忽略 RPC 的不成功 IPv4 绑定</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98" />
        <source>Specify username[:password] required for RPC server</source>
        <translation>指定 RPC 服务器所需的用户名[:密码]</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99" />
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>确认 rpc-bind-ip 值不是环回（本地）IP</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100" />
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>指定以逗号分隔的来源列表以允许跨来源资源共享</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101" />
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>在 RPC 连接上启用 SSL：enabled|disabled|autodetect</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102" />
        <source>Path to a PEM format private key</source>
        <translation>PEM 格式私钥的路径</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103" />
        <source>Path to a PEM format certificate</source>
        <translation>PEM 格式证书的路径</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104" />
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>包含用于替换系统 CA 的连接 PEM 格式证书的文件路径。</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105" />
        <source>List of certificate fingerprints to allow</source>
        <translation>允许的证书指纹列表</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106" />
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>允许用户（通过 --rpc-ssl-certificates）链证书</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107" />
        <source>Allow any peer certificate</source>
        <translation>允许任何对等证书</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108" />
        <source>Do not ban hosts on RPC errors</source>
        <translation>不要因 RPC 错误而禁止主机</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155" />
        <location filename="../src/rpc/rpc_args.cpp" line="183" />
        <location filename="../src/rpc/rpc_args.cpp" line="204" />
        <location filename="../src/rpc/rpc_args.cpp" line="221" />
        <source>Invalid IP address given for --</source>
        <translation>提供的 IP 地址无效 --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163" />
        <location filename="../src/rpc/rpc_args.cpp" line="191" />
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> 允许入站未加密的外部连接。请考虑使用 SSH 隧道或 SSL 代理。使用 -- 覆盖</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242" />
        <source>Username specified with --</source>
        <translation>用户名指定为 --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242" />
        <source> cannot be empty</source>
        <translation> 不能为空</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4933" />
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>守护进程使用的 RPC 主版本 (%u) 与钱包 (%u) 不同：%s。请更新其中一个，或使用 --allow-mismatched-daemon-version。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7068" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7622" />
        <source>Spending from address index %d
</source>
        <translation>从地址索引 %d 支出
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7083" />
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>您的交易需要拆分为 %llu 笔交易。这将导致每笔交易都收取交易费，总费用为 %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7089" />
        <source>The transaction fee is %s</source>
        <translation>交易费用为 %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7092" />
        <source>, of which %s is dust from change</source>
        <translation>其中 %s 是变化产生的尘埃</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093" />
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>总计 %s 的 dust 零钱将被发送到 dust 地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7376" />
        <source>Not enough money in unlocked balance</source>
        <translation>解锁余额不足</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421" />
        <source>No address given</source>
        <translation>没有提供地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7487" />
        <source>missing lockedblocks parameter</source>
        <translation>缺少 closedblocks 参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497" />
        <source>bad locked_blocks parameter</source>
        <translation>错误的 closed_blocks 参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7793" />
        <source>failed to parse Payment ID</source>
        <translation>无法解析付款 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2273" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7816" />
        <source>failed to parse key image</source>
        <translation>无法解析关键图像</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7854" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8084" />
        <source>No outputs found</source>
        <translation>未找到输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8089" />
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>创建了多个交易，这是不应该发生的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7864" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8094" />
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>交易使用多个输入或没有输入，这是不应该发生的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8175" />
        <source>Money successfully sent, transaction: </source>
        <translation>资金已成功发送，交易： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989" />
        <source>missing threshold amount</source>
        <translation>缺少门槛金额</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7995" />
        <source>invalid amount threshold</source>
        <translation>无效金额阈值</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8593" />
        <source>Claimed change does not go to a paid address</source>
        <translation>领取的零钱没有发往已付款的地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8598" />
        <source>Claimed change is larger than payment to the change address</source>
        <translation>索要的零钱大于支付给零钱地址的金额</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8607" />
        <source>Change goes to more than one address</source>
        <translation>零钱可发往多个地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8629" />
        <source>sending %s to %s</source>
        <translation>将 %s 发送给 %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8639" />
        <source> dummy output(s)</source>
        <translation> 虚拟输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8642" />
        <source>with no destinations</source>
        <translation>没有目的地</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8651" />
        <source>no change</source>
        <translation>没有变化</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5750" />
        <source>Daemon is local, assuming trusted</source>
        <translation>守护进程是本地的，假设受信任</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5413" />
        <source>Password for new watch-only wallet</source>
        <translation>新的只读钱包的密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413" />
        <source>false</source>
        <translation>错误的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="775" />
        <source>Commands: </source>
        <translation>命令： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="789" />
        <source>Unknown command: </source>
        <translation>未知命令： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796" />
        <source>Command usage: </source>
        <translation>命令用法： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="799" />
        <source>Command description: </source>
        <translation>命令说明： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="825" />
        <source>wallet is watch-only and has no spend key</source>
        <translation>钱包是只读的，没有消费密钥</translation>
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
        <translation>HW 钱包不支持该命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="933" />
        <source>wallet is watch-only and has no seed</source>
        <translation>钱包仅供查看，没有种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="865" />
        <source>wallet is multisig but not yet finalized</source>
        <translation>钱包已多重签名但尚未完成</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="874" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="943" />
        <source>wallet is non-deterministic and has no seed</source>
        <translation>钱包是不确定的，没有种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898" />
        <source>Failed to retrieve seed</source>
        <translation>无法检索种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928" />
        <source>wallet is multisig and has no seed</source>
        <translation>钱包是多重签名的，没有种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="953" />
        <source>Incorrect password</source>
        <translation>密码错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1153" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1236" />
        <source>Your original password was incorrect.</source>
        <translation>您的原始密码不正确。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="990" />
        <source>Error with wallet rewrite: </source>
        <translation>钱包重写错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10608" />
        <source>Random payment ID: </source>
        <translation>随机付款ID： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1011" />
        <source>Current fee is %s %s per %s</source>
        <translation>当前费用为 %s %s 每 %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603" />
        <source>Payment required, see the 'rpc_payment_info' command</source>
        <translation>需要付款，请参阅“rpc_payment_info”命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027" />
        <source>Error: failed to estimate backlog array size: </source>
        <translation>错误：无法估计积压数组大小： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1032" />
        <source>Error: bad estimated backlog array size</source>
        <translation>错误：估计积压数组大小错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1044" />
        <source> (current)</source>
        <translation> （当前的）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1047" />
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u 块（%u 分钟）积压，优先级为 %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049" />
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u 到 %u 块（%u 到 %u 分钟）积压，优先级为 %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1052" />
        <source>No backlog at priority </source>
        <translation>优先考虑无积压 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1074" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1121" />
        <source>This wallet is already multisig</source>
        <translation>此钱包已启用多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1079" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1126" />
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>钱包是只读的，无法进行多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1132" />
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>此钱包之前已被使用过，请使用新钱包创建多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1093" />
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>将此多重签名信息发送给所有其他参与者，然后使用 make_multisig&lt;threshold&gt;&lt;info1&gt; [&lt;info2&gt; ...] 与其他人的多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1094" />
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet's participants </source>
        <translation>这包括私人查看密钥，因此仅需向该多重签名钱包的参与者披露 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1146" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890" />
        <source>Invalid threshold</source>
        <translation>阈值无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1168" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1247" />
        <source>Another step is needed</source>
        <translation>还需要采取进一步措施</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180" />
        <source>Error creating multisig: </source>
        <translation>创建多重签名时出错： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1187" />
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>创建多重签名错误：新钱包不是多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190" />
        <source> multisig address: </source>
        <translation> 多重签名地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1224" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1289" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357" />
        <source>This wallet is not multisig</source>
        <translation>此钱包不支持多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229" />
        <source>This wallet is already finalized</source>
        <translation>此钱包已完成</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259" />
        <source>Multisig address: </source>
        <translation>多重签名地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1294" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1362" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1458" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1576" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1658" />
        <source>This multisig wallet is not yet finalized</source>
        <translation>这款多重签名钱包尚未最终完成</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10983" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11140" />
        <source>failed to save file </source>
        <translation>保存文件失败 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330" />
        <source>Error exporting multisig info: </source>
        <translation>导出多重签名信息错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1334" />
        <source>Multisig info exported to </source>
        <translation>多重签名信息导出至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10896" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10922" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173" />
        <source>failed to read file </source>
        <translation>读取文件失败 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1406" />
        <source>Failed to import multisig info: </source>
        <translation>无法导入多重签名信息： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1417" />
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>导入多重签名信息后无法更新使用状态： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423" />
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run "rescan_spent"</source>
        <translation>不受信任的守护进程，已用状态可能不正确。请使用受信任的守护进程并运行“rescan_spent”</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1571" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653" />
        <source>This is not a multisig wallet</source>
        <translation>这不是一个多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1503" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1512" />
        <source>Failed to sign multisig transaction</source>
        <translation>无法签署多重签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1519" />
        <source>Multisig error: </source>
        <translation>多重签名错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524" />
        <source>Failed to sign multisig transaction: </source>
        <translation>无法签署多重签名交易： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1533" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1546" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8739" />
        <source>Transaction successfully signed to file </source>
        <translation>交易已成功签署至文件 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547" />
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>可以通过 submit_multisig 转发到网络</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1608" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1679" />
        <source>Failed to load multisig transaction from file</source>
        <translation>无法从文件加载多重签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1684" />
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>多重签名交易仅由 %u 位签名者签名，还需要 %u 位签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1623" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11383" />
        <source>Transaction successfully submitted, transaction </source>
        <translation>交易提交成功，交易 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11384" />
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>您可以使用“show_transfers”命令检查其状态。</translation>
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
        <translation>未知错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1700" />
        <source>Failed to export multisig transaction to file </source>
        <translation>无法将多重签名交易导出至文件 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1704" />
        <source>Saved exported multisig transaction file(s): </source>
        <translation>已保存导出的多重签名交易文件： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1709" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2050" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6114" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6451" />
        <source>unexpected error: </source>
        <translation>意外错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1732" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1889" />
        <source>Invalid key image</source>
        <translation>关键图像无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1738" />
        <source>Invalid txid</source>
        <translation>无效的 txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1765" />
        <source>Failed to get key image ring: </source>
        <translation>无法获取密钥图像环： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780" />
        <source>File doesn't exist</source>
        <translation>文件不存在</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802" />
        <source>Invalid ring specification: </source>
        <translation>环规格无效： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1810" />
        <source>Invalid key image: </source>
        <translation>密钥图像无效： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1815" />
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>环类型无效，应为相对或绝对： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1821" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1833" />
        <source>Error reading line: </source>
        <translation>错误读取行： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844" />
        <source>Invalid ring: </source>
        <translation>无效环： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1853" />
        <source>Invalid relative ring: </source>
        <translation>无效的相对环： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1865" />
        <source>Invalid absolute ring: </source>
        <translation>无效的绝对环： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874" />
        <source>Failed to set ring for key image: </source>
        <translation>无法为关键图像设置铃声： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874" />
        <source>Continuing.</source>
        <translation>继续。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1904" />
        <source>Missing absolute or relative keyword</source>
        <translation>缺少绝对或相对关键字</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1921" />
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>无效索引：必须是严格正的无符号整数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929" />
        <source>invalid index: indices wrap</source>
        <translation>无效索引：索引换行</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939" />
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>无效索引：索引应严格按升序排列</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946" />
        <source>failed to set ring</source>
        <translation>铃声设置失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1969" />
        <source>Invalid key image or txid</source>
        <translation>无效的密钥图像或 txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1978" />
        <source>failed to unset ring</source>
        <translation>无法取消设置戒指</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2001" />
        <source>RPC client ID: </source>
        <translation>RPC 客户端 ID： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002" />
        <source>RPC client secret key: </source>
        <translation>RPC客户端密钥： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2005" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434" />
        <source>Failed to query daemon</source>
        <translation>查询守护进程失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2013" />
        <source>Using daemon: </source>
        <translation>使用守护进程： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014" />
        <source>Payments required for node use, current credits: </source>
        <translation>节点使用所需付款，当前信用额度： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2015" />
        <source>Credits target: </source>
        <translation>学分目标： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2018" />
        <source>Credits spent this session: </source>
        <translation>本次会话所用积分： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2020" />
        <source>Credit discrepancy this session: </source>
        <translation>本会话信用差异： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <source>Difficulty: </source>
        <translation>困难： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <source>credits per hash found, </source>
        <translation>每个哈希值的信用值， </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>credits/hash</source>
        <translation>信用/哈希</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2030" />
        <source>Mining for payment at %.1f H/s</source>
        <translation>挖矿支付 %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2035" />
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>预计开采 %u 个信用目标所需的时间：%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039" />
        <source>Mining for payment</source>
        <translation>挖矿支付</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2042" />
        <source>Not mining</source>
        <translation>不挖矿</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2045" />
        <source>No payment needed for node use</source>
        <translation>节点使用无需付费</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118" />
        <source>Bad argument: </source>
        <translation>错误的论点： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118" />
        <source>should be "add"</source>
        <translation>应为“添加”</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2127" />
        <source>Failed to open file</source>
        <translation>无法打开文件</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211" />
        <source>Failed to save known rings: </source>
        <translation>无法保存已知环： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220" />
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>用法：％s&lt;key_image&gt; |&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2265" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2277" />
        <source>Frozen: </source>
        <translation>冰冻： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279" />
        <source>Not frozen: </source>
        <translation>未冻结： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293" />
        <source> bytes sent</source>
        <translation> 已发送字节数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294" />
        <source> bytes received</source>
        <translation> 已接收字节数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2306" />
        <source>No known public nodes</source>
        <translation>没有已知的公共节点</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>last_seen</source>
        <translation>上次查看</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2324" />
        <source>never</source>
        <translation>绝不</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2332" />
        <source>Error retrieving public node list: </source>
        <translation>检索公共节点列表时出错： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2342" />
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium 与比特币一样，是一种加密货币。也就是说，它是一种数字货币。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2346" />
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>Salvium 保护您在区块链上的隐私，尽管 Salvium 一直在努力改进，</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2347" />
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>没有任何隐私技术可以 100% 完美，包括 Salvium。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2348" />
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>Salvium 无法保护您免受恶意软件的侵害，并且在对抗强大的对手时它可能不如我们所希望的那样有效。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2349" />
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>Salvium 的缺陷可能会在未来被发现，并且可能会开发攻击来窥探某些</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2350" />
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>Salvium 提供多层隐私保护。确保安全并实施纵深防御。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439" />
        <source>Daemon does not require payment for RPC access</source>
        <translation>Daemon 不需要为 RPC 访问付费</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447" />
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>开始挖掘 RPC 访问：diff %llu，%f credits/hash%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448" />
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>运行stop_mining_for_rpc来停止</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550" />
        <source>wallet is watch-only and cannot transfer</source>
        <translation>钱包仅供查看，无法转账</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7117" />
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>警告：这不是默认的戒指尺寸，可能会损害您的隐私。建议使用默认尺寸。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2595" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2611" />
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>priority 必须是 0、1、2、3 或 4，或者下列值之一： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2616" />
        <source>could not change default priority</source>
        <translation>无法更改默认优先级</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2702" />
        <source>invalid unit</source>
        <translation>无效单位</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2738" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800" />
        <source>invalid count: must be an unsigned integer</source>
        <translation>无效计数：必须是无符号整数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2720" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756" />
        <source>invalid value</source>
        <translation>无效值</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2834" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2952" />
        <source>Invalid height</source>
        <translation>高度无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2907" />
        <source>Invalid target</source>
        <translation>目标无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2983" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3002" />
        <source>Invalid amount</source>
        <translation>金额无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3072" />
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>无效参数：必须是 1/是或 0/否</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3340" />
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>在守护进程中开始挖掘（bg_mining 和 ignore_battery 是可选布尔值）。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3343" />
        <source>Stop mining in the daemon.</source>
        <translation>停止在守护进程中进行挖掘。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350" />
        <source>Save the current blockchain data.</source>
        <translation>保存当前区块链数据。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353" />
        <source>Synchronize the transactions and balance.</source>
        <translation>同步交易和余额。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3357" />
        <source>Show the wallet's balance of the currently selected account.</source>
        <translation>显示当前选定账户的钱包余额。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3361" />
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent("T"|"F"), "frozen"|"locked"|"unlocked", RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation>显示全部或按可用性和地址索引筛选的传入转账。输出格式：金额、已用（“T”|“F”）、“冻结”|“锁定”|“解锁”、RingCT、全局索引、交易哈希、地址索引、[公钥、密钥图像] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3367" />
        <source>Show the payments for the given payment IDs.</source>
        <translation>显示给定付款 ID 的付款。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3370" />
        <source>Show the blockchain height.</source>
        <translation>显示区块链高度。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384" />
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>将所有不可混合的输出以 ring_size 1 发送给自己</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394" />
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>将所有低于阈值的解锁输出发送到一个地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3398" />
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>将给定关键图像的单个输出不做任何改变地发送到某个地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3434" />
        <source>Sign a transaction from a file. If the parameter "export_raw" is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default "unsigned_salvium_tx" will be used.</source>
        <translation>从文件签署交易。如果指定了参数“export_raw”，则将导出适合守护进程 RPC /sendrawtransaction 的交易原始十六进制数据。使用参数&lt;filename&gt;指定要读取的文件。如果未指定，则将使用默认的“unsigned_salvium_tx”。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438" />
        <source>Submit a signed transaction from a file.</source>
        <translation>从文件提交签名的交易。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3442" />
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>更改当前日志详细信息（级别必须为&amp;lt;0-4&amp;gt;）。</translation>
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
        <translation>如果未指定任何参数，钱包将显示所有现有帐户及其余额。如果指定了“new”参数，钱包将创建一个新帐户，其标签由提供的标签文本初始化（可以为空）。如果指定了“switch”参数，钱包将切换到由以下参数指定的帐户：&lt;index&gt;如果指定了“label”参数，钱包会设置由&lt;index&gt;到提供的标签文本。如果指定了“tag”参数，则标签&lt;tag_name&gt;已分配给指定帐户&lt;account_index_1&gt;，&lt;account_index_2&gt; , .... 如果指定了“untag”参数，则分配给指定帐户的标签&lt;account_index_1&gt;，&lt;account_index_2&gt; ...，将被删除。如果指定了“tag_description”参数，则标签&lt;tag_name&gt;被分配任意文本&lt;description&gt;。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3460" />
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>将付款 ID 编码到当前钱包公网地址的集成地址中（无参数则使用随机付款 ID），或将集成地址解码为标准地址和付款 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3464" />
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>打印地址簿中的所有条目，可选择添加/删除条目。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3467" />
        <source>Save the wallet data.</source>
        <translation>保存钱包数据。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470" />
        <source>Save a watch-only keys file.</source>
        <translation>保存仅供观看的密钥文件。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3473" />
        <source>Display the private view key.</source>
        <translation>显示私人查看密钥。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3476" />
        <source>Display the private spend key.</source>
        <translation>显示私人消费密钥。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479" />
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>显示 Electrum 风格的助记符种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561" />
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>显示加密的 Electrum 风格助记词种子。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564" />
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>重新扫描区块链以查找已使用的输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568" />
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>获取给定的交易密钥（r）&lt;txid&gt; 。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572" />
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>设置给定的交易密钥（r）&lt;txid&gt;如果交易是由其他设备或第三方钱包进行的。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576" />
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>查看将要支付的金额&lt;address&gt;在&lt;txid&gt;。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3580" />
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet's address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>生成签名证明资金已发送至&lt;address&gt;在&lt;txid&gt;，可选择添加质询字符串&lt;message&gt;，使用交易密钥（当&lt;address&gt;不是你的钱包地址）或查看密钥（否则），这样就不会泄露密钥。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3584" />
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>检查资金去向证明&lt;address&gt;在&lt;txid&gt;使用挑战字符串&lt;message&gt;如果有的话。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3588" />
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>生成签名，证明你已生成&lt;txid&gt;使用消费密钥，也可以使用质询字符串&lt;message&gt;。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3592" />
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>检查签名，证明签名者生成&lt;txid&gt;，可选择使用质询字符串&lt;message&gt;。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3596" />
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If 'all' is specified, you prove the entire sum of all of your existing accounts' balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>生成一个签名，证明你至少拥有这么多，也可以使用质询字符串&lt;message&gt;。如果指定“全部”，则证明所有现有账户余额的总和。否则，证明上述最小可能金额的储备金&lt;amount&gt;可在您当前帐户中使用。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602" />
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>检查签名以证明所有者&lt;address&gt;至少保存这么多，可选地使用挑战字符串&lt;message&gt;。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3623" />
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>显示可选金额范围内指定地址的未使用输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3631" />
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>为&lt;txid&gt;。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3635" />
        <source>Get a string note for a txid.</source>
        <translation>获取 txid 的字符串注释。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3639" />
        <source>Set an arbitrary description for the wallet.</source>
        <translation>为钱包设置任意描述。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3643" />
        <source>Get the description of the wallet.</source>
        <translation>获取钱包的描述。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3646" />
        <source>Show the wallet's status.</source>
        <translation>显示钱包的状态。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3649" />
        <source>Show the wallet's information.</source>
        <translation>显示钱包的信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3657" />
        <source>Verify a signature on the contents of a file.</source>
        <translation>验证文件内容的签名。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3665" />
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>导入已签名的密钥图像列表并验证其使用状态。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3673" />
        <source>Attempts to reconnect HW wallet.</source>
        <translation>尝试重新连接 HW 钱包。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677" />
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>导出该钱包拥有的一组输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3681" />
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>导入该钱包拥有的一组输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3685" />
        <source>Show information about a transfer to/from this address.</source>
        <translation>显示有关往返于此地址的转账信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3688" />
        <source>Change the wallet's password.</source>
        <translation>更改钱包的密码。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3695" />
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>打印有关当前费用和交易积压的信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3697" />
        <source>Export data needed to create a multisig wallet</source>
        <translation>导出创建多重签名钱包所需的数据</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3700" />
        <source>Turn this wallet into a multisig wallet</source>
        <translation>将此钱包变成多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3708" />
        <source>Export multisig info for other participants</source>
        <translation>为其他参与者导出多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3712" />
        <source>Import multisig info from other participants</source>
        <translation>从其他参与者导入多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3716" />
        <source>Sign a multisig transaction from a file</source>
        <translation>从文件签署多重签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3720" />
        <source>Submit a signed multisig transaction from a file</source>
        <translation>从文件提交已签名的多重签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3724" />
        <source>Export a signed multisig transaction to a file</source>
        <translation>将已签名的多重签名交易导出到文件</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3815" />
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, "absolute", list of rings</source>
        <translation>打印用于花费给定密钥图像或交易的环（如果环大小&amp;gt; 1）输出格式：密钥图像，“绝对”，环列表</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3821" />
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>设置用于给定密钥映像的环，以便可以在分叉中重复使用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3825" />
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>取消设置用于给定密钥图像或交易的环</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3829" />
        <source>Save known rings to the shared rings database</source>
        <translation>将已知环保存到共享环数据库</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845" />
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>通过关键图像冻结单个输出，使其不会被使用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3849" />
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>通过关键图像解冻单个输出，以便可以再次使用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3853" />
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>检查给定的输出当前是否被关键图像冻结</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3861" />
        <source>Prints simple network stats</source>
        <translation>打印简单的网络统计数据</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3865" />
        <source>Lists known public nodes</source>
        <translation>列出已知的公共节点</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3869" />
        <source>Prints basic info about Salvium for first time users</source>
        <translation>为首次使用者打印有关 Salvium 的基本信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3873" />
        <source>Returns version information</source>
        <translation>返回版本信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3877" />
        <source>Get info about RPC payments to current node</source>
        <translation>获取有关向当前节点进行 RPC 支付的信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881" />
        <source>Start mining to pay for RPC access</source>
        <translation>开始挖矿以支付 RPC 访问费用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3885" />
        <source>Stop mining to pay for RPC access</source>
        <translation>停止挖矿以支付 RPC 访问费用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3893" />
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>显示帮助部分或有关&lt;command&gt;。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984" />
        <source>needs an argument</source>
        <translation>需要一个论点</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998" />
        <source>set seed: needs an argument. available options: language</source>
        <translation>设置种子：需要一个参数。可用选项：语言</translation>
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
        <translation>0 或 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4011" />
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>full（最慢，无假设）；optimize-coinbase（快速，假设整个 coinbase 支付到一个地址）；no-coinbase（最快，假设我们没有收到 coinbase 交易）、default（与 optimize-coinbase 相同）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4012" />
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0、1、2、3 或 4，或下列之一 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4013" />
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 （或从不|操作|解密）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4015" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4027" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040" />
        <source>unsigned integer</source>
        <translation>无符号整数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4017" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4029" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4030" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>amount</source>
        <translation>数量</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4022" />
        <source>block height</source>
        <translation>区块高度</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4026" />
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;major&gt;：&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4034" />
        <source>1/yes or 0/no</source>
        <translation>1/是 或 0/否</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4039" />
        <source>floating point &gt;= 0</source>
        <translation>浮点数 &amp;gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044" />
        <source>set: unrecognized argument(s)</source>
        <translation>设置：无法识别的参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4102" />
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>钱包名称无效。请重试或使用 Ctrl-C 退出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4114" />
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>尝试生成或恢复钱包，但指定文件存在。退出以避免覆盖风险。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4119" />
        <source>Wallet and key files found, loading...</source>
        <translation>已找到钱包和密钥文件，正在加载……</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4125" />
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>找到密钥文件但未找到钱包文件。正在重新生成...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4131" />
        <source>Key file not found. Failed to open wallet: </source>
        <translation>未找到密钥文件。无法打开钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4139" />
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>未找到同名钱包。确认创建名为的新钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150" />
        <source>Generating new wallet...</source>
        <translation>正在生成新钱包...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231" />
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>无法指定多个 --testnet 和 --stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4247" />
        <source>can't specify more than one of --generate-new-wallet="wallet_name", --wallet-file="wallet_name", --generate-from-view-key="wallet_name", --generate-from-spend-key="wallet_name", --generate-from-keys="wallet_name", --generate-from-multisig-keys="wallet_name", --generate-from-json="jsonfilename" and --generate-from-device="wallet_name"</source>
        <translation>不能指定 --generate-new-wallet=&amp;quot;wallet_name&amp;quot;、--generate-file=&amp;quot;wallet_name&amp;quot;、--generate-from-view-key=&amp;quot;wallet_name&amp;quot;、--generate-from-spend-key=&amp;quot;wallet_name&amp;quot;、--generate-from-keys=&amp;quot;wallet_name&amp;quot;、--generate-from-multisig-keys=&amp;quot;wallet_name&amp;quot;、--generate-from-json=&amp;quot;jsonfilename&amp;quot; 和 --generate-from-device=&amp;quot;wallet_name&amp;quot; 中的多个</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277" />
        <source>can't specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>不能同时指定 --restore-deterministic-wallet 或 --restore-multisig-wallet 和 --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4283" />
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet 使用 --generate-new-wallet，而不是 --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4285" />
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet 使用 --generate-new-wallet，而不是 --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4299" />
        <source>specify a recovery parameter with the --electrum-seed="multisig seed here"</source>
        <translation>使用 --electrum-seed=&amp;quot;multisig seed here&amp;quot; 指定恢复参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314" />
        <source>specify a recovery parameter with the --electrum-seed="words list here"</source>
        <translation>使用 --electrum-seed=&amp;quot;words list here&amp;quot; 指定恢复参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328" />
        <source>Multisig seed failed verification</source>
        <translation>多重签名种子验证失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337" />
        <source>Electrum-style word list failed verification</source>
        <translation>Electrum 风格的单词列表验证失败</translation>
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
        <translation>未提供数据，已取消</translation>
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
        <translation>解析地址失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4368" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4445" />
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>此地址是子地址，不能在这里使用。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4383" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4475" />
        <source>failed to parse view key secret key</source>
        <translation>无法解析查看密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4392" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4492" />
        <source>failed to verify view key secret key</source>
        <translation>验证查看密钥密钥失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4396" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4496" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4578" />
        <source>view key does not match standard address</source>
        <translation>查看密钥与标准地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4401" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4422" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4500" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4661" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4693" />
        <source>account creation failed</source>
        <translation>帐户创建失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4418" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4460" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4603" />
        <source>failed to parse spend key secret key</source>
        <translation>无法解析支出密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4484" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4623" />
        <source>failed to verify spend key secret key</source>
        <translation>未能验证消费密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4488" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628" />
        <source>spend key does not match standard address</source>
        <translation>支出密钥与标准地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4523" />
        <source>Error: expected M/N, but got: </source>
        <translation>错误：预期 M/N，但得到： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4528" />
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>错误：预期 N &amp;gt; 1 且 N &amp;lt;= M，但得到： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4533" />
        <source>Error: M/N is currently unsupported. </source>
        <translation>错误：M/N 目前不受支持。 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4536" />
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>从 %u 个多重签名钱包密钥（共 %u 个）生成主钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4565" />
        <source>failed to parse secret view key</source>
        <translation>无法解析秘密查看密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4573" />
        <source>failed to verify secret view key</source>
        <translation>无法验证秘密查看密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4616" />
        <source>Error: M/N is currently unsupported</source>
        <translation>错误：M/N 目前不受支持</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4668" />
        <source>No restore height is specified.</source>
        <translation>未指定恢复高度。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4669" />
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>假设您正在创建一个新帐户，恢复将从当前估计的区块链高度完成。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674" />
        <source>account creation aborted</source>
        <translation>帐户创建已中止</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4684" />
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>使用 --generate-new-wallet （而不是 --wallet-file）指定钱包路径</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4748" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4768" />
        <source>bad m_restore_height parameter: </source>
        <translation>错误的 m_restore_height 参数： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759" />
        <source>Restore height is: </source>
        <translation>恢复高度为： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782" />
        <source>Restore height </source>
        <translation>恢复高度 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798" />
        <source>can't specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>不能同时指定 --subaddress-lookahead 和 --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802" />
        <source>failed to open account</source>
        <translation>开户失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5568" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5791" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8968" />
        <source>wallet is null</source>
        <translation>钱包为空</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841" />
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>无法初始化环数据库：隐私增强功能将处于非活动状态</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4920" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4924" />
        <source>wallet failed to connect to daemon: </source>
        <translation>钱包无法连接到守护进程： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4925" />
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the 'set_daemon' command.</source>
        <translation>守护进程未启动或传递了错误端口。请确保守护进程正在运行或使用“set_daemon”命令更改守护进程地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4954" />
        <source>List of available languages for your wallet's seed:</source>
        <translation>您的钱包种子可用的语言列表：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4955" />
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>如果显示屏冻结，请使用 ^C 盲退出，然后使用 --use-english-language-names 再次运行</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4973" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4978" />
        <source>invalid language choice entered. Please try again.
</source>
        <translation>输入的语言选择无效。请重试。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4992" />
        <source>invalid password</source>
        <translation>密码无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5040" />
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>您之前使用的是旧版本的钱包。请使用我们提供的新种子。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5056" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5131" />
        <source>Generated new wallet: </source>
        <translation>生成的新钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5059" />
        <source>View key: </source>
        <translation>查看密钥： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5136" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5244" />
        <source>failed to generate new wallet: </source>
        <translation>无法生成新钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5175" />
        <source>Generated new wallet on hw device: </source>
        <translation>在硬件设备上生成新钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5236" />
        <source>failed to generate new mutlisig wallet</source>
        <translation>无法生成新的多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5239" />
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>生成新的 %u/%u 多重签名钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5255" />
        <source>wallet file path not valid: </source>
        <translation>钱包文件路径无效： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5265" />
        <source>Key file not found. Failed to open wallet</source>
        <translation>未找到密钥文件。无法打开钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5286" />
        <source>Opened watch-only wallet</source>
        <translation>打开手表专用钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5288" />
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>已打开 %u/%u 多重签名钱包 %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5290" />
        <source>Opened wallet</source>
        <translation>打开的钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5308" />
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>您之前使用的钱包版本已过时。请继续升级您的钱包。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5323" />
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>您之前使用的钱包版本已过时。您的钱包文件格式正在升级。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5331" />
        <source>failed to load wallet: </source>
        <translation>加载钱包失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5350" />
        <source>Use "help &lt;command&gt;" to see a command's documentation.
</source>
        <translation>使用“帮助&lt;command&gt;“查看命令的文档。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5372" />
        <source>failed to deinitialize wallet</source>
        <translation>无法取消钱包初始化</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5395" />
        <source>Wallet data saved</source>
        <translation>钱包数据已保存</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409" />
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>钱包是多重签名的，无法保存只读版本</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5417" />
        <source>failed to read wallet password</source>
        <translation>读取钱包密码失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5425" />
        <source>Watch only wallet saved as: </source>
        <translation>仅查看钱包保存为： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5429" />
        <source>Failed to save watch only wallet: </source>
        <translation>无法保存仅监视钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5559" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6414" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11007" />
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>此命令需要受信任的守护进程。使用 --trusted-daemon 启用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5608" />
        <source>Mining started in daemon</source>
        <translation>守护进程中开始挖矿</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610" />
        <source>mining has NOT been started: </source>
        <translation>挖矿尚未开始： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5630" />
        <source>Mining stopped in daemon</source>
        <translation>守护进程中挖矿停止</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632" />
        <source>mining has NOT been stopped: </source>
        <translation>采矿尚未停止： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5687" />
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>数组长度异常——已退出 simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763" />
        <source>trusted</source>
        <translation>值得信赖</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763" />
        <source>untrusted</source>
        <translation>不受信任</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5779" />
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>这似乎不是一个有效的守护进程 URL。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5799" />
        <source>Blockchain saved</source>
        <translation>区块链已保存</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5801" />
        <source>blockchain can't be saved: </source>
        <translation>区块链无法保存： </translation>
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
        <translation>高度 </translation>
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
        <translation>编号 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5925" />
        <source>spent </source>
        <translation>花费 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952" />
        <source>Enter password</source>
        <translation>输入密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6048" />
        <source>Starting refresh...</source>
        <translation>开始刷新...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6070" />
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>自重新扫描开始后收到新传输。关键图像不完整。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077" />
        <source>Refresh done, blocks received: </source>
        <translation>刷新完成，已收到块： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6085" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6428" />
        <source>daemon is busy. Please try again later.</source>
        <translation>守护进程正忙。请稍后重试。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4816" />
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>RPC 客户端密钥应为 32 字节十六进制格式</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5535" />
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>启用后台挖矿后，守护进程将在空闲时（而不是使用电池时）进行挖矿。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5657" />
        <source>Error checking daemon RPC access prices</source>
        <translation>检查守护进程 RPC 访问价格时出错</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5663" />
        <source>Error checking daemon RPC access prices: </source>
        <translation>检查守护进程 RPC 访问价格时出错： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5759" />
        <source>Failed to connect to daemon</source>
        <translation>无法连接到守护进程</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771" />
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>守护进程 RPC 信用/哈希值低于所声称的数额。该守护进程要么在作弊，要么最近更改了其设置。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772" />
        <source>Claimed: </source>
        <translation>声称： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5773" />
        <source>Actual: </source>
        <translation>实际的： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6089" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6432" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>没有连接到守护进程。请确保守护进程正在运行。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6436" />
        <source>payment required.</source>
        <translation>需要付款。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6099" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6446" />
        <source>RPC error: </source>
        <translation>RPC 错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6104" />
        <source>refresh error: </source>
        <translation>刷新错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6109" />
        <source>internal error: </source>
        <translation>内部错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124" />
        <source>refresh failed: </source>
        <translation>刷新失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124" />
        <source>Blocks received: </source>
        <translation>收到的区块： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6153" />
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> （一些自有输出具有部分密钥图像 - 需要 import_multisig_info）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156" />
        <source>Currently selected account: [</source>
        <translation>当前选定的帐户：[</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156" />
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158" />
        <source>(No tag assigned)</source>
        <translation>（未指定标签）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158" />
        <source>Tag: </source>
        <translation>标签： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6172" />
        <source>unlocked balance: </source>
        <translation>解锁余额： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177" />
        <source>Balance per address:</source>
        <translation>每个地址的余额：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Balance</source>
        <translation>平衡</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Unlocked balance</source>
        <translation>解锁余额</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <source>Outputs</source>
        <translation>输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>Label</source>
        <translation>标签</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6186" />
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277" />
        <source>pubkey</source>
        <translation>公钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277" />
        <source>key image</source>
        <translation>关键图像</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>spent</source>
        <translation>花费</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>unlocked</source>
        <translation>解锁</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>ringct</source>
        <translation>环</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>global index</source>
        <translation>全局索引</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>tx id</source>
        <translation>交易编号</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>addr index</source>
        <translation>地址索引</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6294" />
        <source>Used at heights: </source>
        <translation>用于高空： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299" />
        <source>T</source>
        <translation>电视</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299" />
        <source>F</source>
        <translation>弗</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <source>locked</source>
        <translation>锁定</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <source>[frozen]</source>
        <translation>[冻结]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301" />
        <source>RingCT</source>
        <translation>环CT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301" />
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6314" />
        <source>No incoming transfers</source>
        <translation>无转账入账</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318" />
        <source>No incoming available transfers</source>
        <translation>没有可用的传入传输</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322" />
        <source>No incoming unavailable transfers</source>
        <translation>没有不可用的转接</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>payment</source>
        <translation>支付</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>transaction</source>
        <translation>交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>height</source>
        <translation>高度</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>unlock time</source>
        <translation>解锁时间</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6358" />
        <source>No payments with id </source>
        <translation>无法通过 ID 付款 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6380" />
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>付款 ID 格式无效，应为 16 或 64 个字符的十六进制字符串： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6504" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7509" />
        <source>failed to get blockchain height: </source>
        <translation>无法获取区块链高度： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441" />
        <source>failed to get spent status</source>
        <translation>无法获取已消费状态</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6513" />
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
事务 %llu/%llu：txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6529" />
        <source>failed to find construction data for tx input</source>
        <translation>无法找到 tx 输入的构造数据</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6553" />
        <source>failed to get output: </source>
        <translation>无法获取输出： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6561" />
        <source>output key's originating block height shouldn't be higher than the blockchain height</source>
        <translation>输出密钥的原始区块高度不应高于区块链高度</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6566" />
        <source>
Originating block heights: </source>
        <translation>
原始区块高度： </translation>
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
警告：一些输入的键来自 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594" />
        <source>the same transaction</source>
        <translation>同一交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594" />
        <source>blocks that are temporally very close</source>
        <translation>时间上非常接近的区块</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6748" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741" />
        <source>Ring size must not be 0</source>
        <translation>戒指尺寸不能为 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6760" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7473" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7753" />
        <source>ring size %u is too small, minimum is %u</source>
        <translation>环尺寸 %u 太小，最小为 %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6765" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758" />
        <source>ring size %u is too large, maximum is %u</source>
        <translation>环尺寸 %u 太大，最大值为 %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772" />
        <source>wrong number of arguments</source>
        <translation>参数数量错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6789" />
        <source>payment id failed to encode</source>
        <translation>付款 ID 编码失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6808" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7502" />
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>锁定区块过多，最多 1000000 (˜4 年)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6856" />
        <source>failed to parse short payment ID from URI</source>
        <translation>无法从 URI 解析短付款 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6881" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883" />
        <source>Invalid last argument: </source>
        <translation>最后一个参数无效： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6901" />
        <source>a single transaction cannot use more than one payment id</source>
        <translation>单笔交易不能使用多个付款 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917" />
        <source>failed to parse payment id, though it was detected</source>
        <translation>尽管检测到了付款 ID，但解析失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7004" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014" />
        <source>Is this okay anyway?</source>
        <translation>这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7009" />
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>目前该费用水平下有 %u 个区块积压。这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7323" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7631" />
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>在 %llu 笔交易中清算 %s，总费用为 %s。这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7329" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7637" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7874" />
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>扫荡 %s，总费用为 %s。这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7377" />
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by "rescan_spent".  Is this okay?</source>
        <translation>丢弃 %s 个无法混合且无法使用的输出，这些输出可以通过“rescan_spent”撤消。这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7522" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7767" />
        <source>Failed to parse number of outputs</source>
        <translation>无法解析输出数量</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7527" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7772" />
        <source>Amount of outputs should be greater than 0</source>
        <translation>输出数量应大于 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7551" />
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>付款 ID 格式无效，预期为 16 或 64 个字符的十六进制字符串： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6803" />
        <source>bad locked_blocks parameter:</source>
        <translation>错误的locked_blocks参数：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7571" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7831" />
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>单笔交易不能使用多个付款编号： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6923" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7580" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7799" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7839" />
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>无法设置付款 ID，尽管已正确解码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1170" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249" />
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>将此多重签名信息发送给所有其他参与者，然后使用 exchange_multisig_keys&lt;info1&gt; [&lt;info2&gt; ...] 与其他人的多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1258" />
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation>多重签名钱包已成功创建。当前钱包类型： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264" />
        <source>Failed to perform multisig keys exchange: </source>
        <translation>无法执行多重签名密钥交换： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599" />
        <source>Failed to load multisig transaction from MMS</source>
        <translation>无法从 MMS 加载多重签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2139" />
        <source>Failed to mark output spent: </source>
        <translation>无法标记输出已花费： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2166" />
        <source>Failed to mark output unspent: </source>
        <translation>无法标记输出未使用： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2190" />
        <source>Spent: </source>
        <translation>花费： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192" />
        <source>Not spent: </source>
        <translation>未花费： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2196" />
        <source>Failed to check whether output is spent: </source>
        <translation>无法检查输出是否已用完： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2385" />
        <source>Please confirm the transaction on the device</source>
        <translation>请在设备上确认交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091" />
        <source>Device name not specified</source>
        <translation>未指定设备名称</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100" />
        <source>Device reconnect failed</source>
        <translation>设备重新连接失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105" />
        <source>Device reconnect failed: </source>
        <translation>设备重新连接失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3619" />
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>将可选高度范围内的传入/传出传输导出到 CSV。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627" />
        <source>Rescan the blockchain from scratch. If "hard" is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>从头开始重新扫描区块链。如果指定“hard”，您将丢失任何无法从区块链本身恢复的信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3661" />
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>将一组签名的密钥图像导出到&lt;filename&gt;。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3669" />
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>将密钥图像与硬件钱包同步。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3692" />
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>生成一个新的随机全尺寸付款 ID（已过时）。这些将在区块链上解密，请参阅 Integrated_address 以获取加密的短付款 ID。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3704" />
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>执行额外的多重签名密钥交换轮次。任意 M/N 多重签名钱包均需要此密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3736" />
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>初始化并配置 MMS，M/N = 所需签名者数量/授权签名者数量</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740" />
        <source>Display current MMS configuration</source>
        <translation>显示当前 MMS 配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3744" />
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>设置或修改授权签名者信息（单词标签、运输地址、Salvium 地址），或列出所有签名者</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3748" />
        <source>List all messages</source>
        <translation>列出所有消息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3752" />
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using 'sync' processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>根据钱包状态评估下一个可能的多重签名相关操作，并执行或提供选择通过使用“同步”处理具有多重签名的等待消息，无论钱包状态如何都可以强制同步信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757" />
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like "stale data" errors</source>
        <translation>无论钱包状态如何，强制生成多重签名同步信息，以便从“陈旧数据”错误等特殊情况中恢复</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3761" />
        <source>Initiate transfer with MMS support; arguments identical to normal 'transfer' command arguments, for info see there</source>
        <translation>通过 MMS 支持启动传输；参数与普通“传输”命令参数相同，有关信息请参阅此处</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3765" />
        <source>Delete a single message by giving its id, or delete all messages by using 'all'</source>
        <translation>通过指定 ID 来删除单条消息，或使用“all”删除所有消息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3769" />
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>通过提供其 ID 来发送一条消息，或者发送所有等待的消息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3773" />
        <source>Check right away for new messages to receive</source>
        <translation>立即检查是否有新消息接收</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3777" />
        <source>Write the content of a message to a file "mms_message_content"</source>
        <translation>将消息内容写入文件“mms_message_content”</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3781" />
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>向授权签名者发送一行消息（通过其标签进行标识），或显示任何等待的未读注释</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785" />
        <source>Show detailed info about a single message</source>
        <translation>显示有关单条消息的详细信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3789" />
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation>可用选项：自动发送&amp;lt;1|0&amp;gt;是否立即自动发送新生成的消息。
 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795" />
        <source>Send completed signer config to all other authorized signers</source>
        <translation>将完成的签名者配置发送给所有其他授权签名者</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3799" />
        <source>Start auto-config at the auto-config manager's wallet by issuing auto-config tokens and optionally set others' labels</source>
        <translation>通过发行自动配置代币在自动配置管理器的钱包中启动自动配置，并可选择设置其他人的标签</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3807" />
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>删除所有自动配置令牌并中止自动配置过程</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3811" />
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>使用从自动配置管理器收到的令牌启动自动配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833" />
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>将输出标记为已用，这样它们就不会被选为环中的假输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837" />
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>将输出标记为未使用，因此它可能被选为环中的假输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3841" />
        <source>Checks whether an output is marked as spent</source>
        <translation>检查输出是否被标记为已用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4035" />
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;device_name[:device_spec]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4063" />
        <source>wrong number range, use: %s</source>
        <translation>错误号码范围，使用：%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4168" />
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>注意：以下 %s 可用于恢复您钱包的访问权限。请记下它们并将它们存储在安全的地方。请不要将它们存储在您的电子邮件中或您无法直接控制的文件存储服务中。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170" />
        <source>string</source>
        <translation>细绳</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170" />
        <source>25 words</source>
        <translation>25 个字</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4593" />
        <source>Secret spend key (%u of %u)</source>
        <translation>秘密支出密钥 (%u / %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4670" />
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>如果您想从特定高度恢复已设置的帐户，请使用--restore-height 或--restore-date。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4672" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4760" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7119" />
        <source>Is this okay?</source>
        <translation>这样可以嗎？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4783" />
        <source>Still apply restore height?</source>
        <translation>仍适用恢复高度吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4964" />
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>输入您选择的语言对应的数字</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5967" />
        <source>Device requires attention</source>
        <translation>设备需要注意</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5973" />
        <source>Enter device PIN</source>
        <translation>输入设备 PIN 码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5975" />
        <source>Failed to read device PIN</source>
        <translation>无法读取设备 PIN</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5985" />
        <source>Please enter the device passphrase on the device</source>
        <translation>请在设备上输入设备密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5992" />
        <source>Enter device passphrase</source>
        <translation>输入设备密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5994" />
        <source>Failed to read device passphrase</source>
        <translation>无法读取设备密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6018" />
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation>基于硬件的钱包已经完成第一次刷新，并收到了钱。需要 hw_key_images_sync。 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5537" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020" />
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation>您想现在就做吗？ (Y/是/N/否)： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2366" />
        <source>Unknown command '%s', try 'help'</source>
        <translation>未知命令‘%s’，请尝试‘help’</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3040" />
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Windows 上已禁用不活动锁定超时</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3054" />
        <source>Invalid number of seconds</source>
        <translation>秒数无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116" />
        <source>Export format not specified</source>
        <translation>未指定导出格式</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3130" />
        <source>Export format not recognized.</source>
        <translation>导出格式无法识别。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3482" />
        <source>Display the restore height</source>
        <translation>显示恢复高度</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3857" />
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>锁定钱包控制台，需要输入钱包密码才能继续</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4033" />
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>无符号整数（秒，0 为禁用）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036" />
        <source>"binary" or "ascii"</source>
        <translation>“二进制”或“ascii”</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4824" />
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>警告：在 %s 处使用不受信任的守护进程</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4825" />
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>使用第三方守护程序可能会损害您的安全和隐私</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4828" />
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>使用您自己的、没有 SSL 的 RPC 流量会受到监控</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4829" />
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>强烈建议您使用自己的守护进程连接到 Salvium 网络</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4830" />
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>如果你或你信任的人正在操作此守护进程，则可以使用--trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4837" />
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>此外，守护进程在引导模式下运行时也不太安全</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850" />
        <source>If you are new to Salvium, type "welcome" for a brief overview.</source>
        <translation>如果您是 Salvium 的新用户，请输入“欢迎”以获取简单介绍。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5003" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5101" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5149" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5192" />
        <source>Error creating wallet: </source>
        <translation>创建钱包错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477" />
        <source>Failed to query mining status: </source>
        <translation>查询挖矿状态失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5488" />
        <source>Failed to setup background mining: </source>
        <translation>无法设置后台挖掘： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5464" />
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>后台挖掘已启用。感谢您支持 Salvium 网络。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5492" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5500" />
        <source>Background mining not enabled. Run "set setup-background-mining 1" to change.</source>
        <translation>未启用后台挖掘。运行“set setup-background-mining 1”进行更改。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5506" />
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>使用不受信任的守护进程，跳过后台挖掘检查</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5534" />
        <source>The daemon is not set up to background mine.</source>
        <translation>守护进程未设置为后台挖掘。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5541" />
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>未启用后台挖掘。将 setup-background-mining 设置为 1 即可进行更改。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5903" />
        <source>NOTE: This transaction is locked, see details with: show_transfer </source>
        <translation>注意：此交易已被锁定，查看详细信息：show_transfer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6022" />
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>已跳过 hw_key_images_sync。传输前请手动运行命令。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6247" />
        <source>Invalid keyword: </source>
        <translation>关键字无效： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6535" />
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
输入 %llu/%llu (%s):amount=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628" />
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>交易花费了不止一个非常旧的输出。如果将它们分开发送，隐私性会更好。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6629" />
        <source>Spend them now anyway?</source>
        <translation>现在就花掉它们吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6871" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8479" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9229" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9798" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9806" />
        <source>amount is wrong: </source>
        <translation>金额错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6872" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8479" />
        <source>expected number from 0 to </source>
        <translation>预期数字从 0 到 </translation>
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
        <translation>交易已取消。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6981" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7595" />
        <source>No outputs found, or daemon is not ready</source>
        <translation>未找到输出，或守护进程尚未准备好</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2343" />
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>与比特币不同，您的 Salvium 交易和余额保持私密，默认情况下不向外界公开。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2344" />
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>然而，如果您愿意的话，您可以选择将这些功能提供给选定的各方。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5895" />
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>注意：此交易使用加密的付款ID：请考虑使用子地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5900" />
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>警告：此交易使用未加密的付款 ID：这些 ID 已过时并被忽略。请改用子地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014" />
        <source>Failed to check for backlog: </source>
        <translation>无法检查积压： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7063" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7617" />
        <source>
Transaction </source>
        <translation>
交易 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7070" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7624" />
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>警告：多个地址的输出正在一起使用，这可能会危及您的隐私。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093" />
        <source>.</source>
        <translation>。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7139" />
        <source>Unsigned transaction(s) successfully written to MMS</source>
        <translation>未签名的交易已成功写入 MMS</translation>
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
        <translation>无法将交易写入文件</translation>
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
        <translation>未签名的交易已成功写入文件： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7161" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7674" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7909" />
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>与 HW 钱包冷签名交易失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7308" />
        <source>No unmixable outputs found</source>
        <translation>未找到不可混合的输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321" />
        <source>Sweeping </source>
        <translation>扫荡 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8490" />
        <source>Failed to parse donation address: </source>
        <translation>无法解析捐赠地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8506" />
        <source>Donating %s %s to %s.</source>
        <translation>捐赠 %s %s 给 %s。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8654" />
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>已加载 %lu 笔交易，涉及 %s，费用 %s、%s、%s，最小环大小为 %lu、%s。%s这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>direction</source>
        <translation>方向</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>timestamp</source>
        <translation>时间戳</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>running balance</source>
        <translation>流动余额</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>hash</source>
        <translation>哈希</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>payment ID</source>
        <translation>付款编号</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>fee</source>
        <translation>费用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>destination</source>
        <translation>目的地</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>index</source>
        <translation>指数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>note</source>
        <translation>笔记</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9770" />
        <source>CSV exported to </source>
        <translation>CSV 导出至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9955" />
        <source>Rescan anyway?</source>
        <translation>还要重新扫描吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9966" />
        <source>Warning: your restore height is higher than wallet restore height: </source>
        <translation>警告：您的恢复高度高于钱包恢复高度： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9967" />
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>是否仍然重新扫描？（Y/是/N/否）： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9988" />
        <source>MMS received new message</source>
        <translation>MMS 收到新信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10157" />
        <source>locked due to inactivity</source>
        <translation>由于不活动而被锁定</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10559" />
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;index&gt;超出范围</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10835" />
        <source>Normal</source>
        <translation>普通的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10836" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11684" />
        <source>Type: </source>
        <translation>类型： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6680" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10837" />
        <source>Network type: </source>
        <translation>网络类型： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1402" />
        <source>Multisig info imported. Number of outputs updated: </source>
        <translation>已导入多重签名信息。已更新输出数量： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1750" />
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>关键图像未使用，或已使用，戒指尺寸为 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334" />
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>这些节点中的大多数可能是间谍。除非通过 Tor 或 I2P 连接，否则不应使用它们</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340" />
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>欢迎来到 Salvium，全新改进的私人加密货币。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2352" />
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>欢迎来到 Salvium 和合规财务隐私。有关更多信息，请参阅 https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2471" />
        <source>invalid index: must be an unsigned integer</source>
        <translation>无效索引：必须是无符号整数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2476" />
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt;超出范围</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514" />
        <source>Failed to generate QR code, input too large</source>
        <translation>生成二维码失败，输入过大</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3167" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3186" />
        <source>Value not specified</source>
        <translation>未指定值</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3157" />
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>警告：弃用格式使用 boost 序列化，这会导致缓冲区溢出和崩溃。请仅从您信任的来源加载弃用格式。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3206" />
        <source>Important commands:</source>
        <translation>重要命令：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3208" />
        <source>"welcome" - Show welcome message.</source>
        <translation>“欢迎”——显示欢迎信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3209" />
        <source>"help all" - Show the list of all available commands.</source>
        <translation>“help all”——显示所有可用命令的列表。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3210" />
        <source>"help &lt;command&gt;" - Show a command's documentation.</source>
        <translation>“帮助&lt;command&gt;“——显示命令的文档。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3211" />
        <source>"apropos &lt;keyword&gt;" - Show commands related to a keyword.</source>
        <translation>“顺便说一下&lt;keyword&gt;“——显示与关键字相关的命令。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213" />
        <source>"wallet_info" - Show wallet main address and other info.</source>
        <translation>“wallet_info”——显示钱包主地址和其他信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3214" />
        <source>"balance" - Show balance.</source>
        <translation>“余额”——显示余额。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3215" />
        <source>"address all" - Show all addresses.</source>
        <translation>“全部地址”——显示所有地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3216" />
        <source>"address new" - Create new subaddress.</source>
        <translation>“新地址”——创建新的子地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3217" />
        <source>"transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]" - Send SAL to an address.</source>
        <translation>“转移&lt;address&gt;&lt;amount&gt;[&lt;asset_type&gt; ]”—将 SAL 发送到某个地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218" />
        <source>"return_payment &lt;tx_hash&gt;" - Return a previously-received amount to sender.</source>
        <translation>“退货付款&lt;tx_hash&gt;“——将先前收到的金额退还给发送者。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3219" />
        <source>"burn &lt;amount&gt; &lt;asset_type&gt;" - destroy coins forever.</source>
        <translation>“烧伤&lt;amount&gt;&lt;asset_type&gt;“——永远销毁硬币。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3220" />
        <source>"convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]" - convert between coin types.</source>
        <translation>“转变&lt;amount&gt;&lt;source_asset&gt;&lt;dest_asset&gt;[&lt;slippage_limit&gt; ]”——在硬币类型之间进行转换。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221" />
        <source>"stake &lt;amount&gt;" - stake SAL for 30 days to earn yield.</source>
        <translation>“赌注&lt;amount&gt;“——质押 SAL 30 天以获得收益。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3222" />
        <source>"price_info" - Display current pricing information for supported assets.</source>
        <translation>“price_info”——显示支持资产的当前定价信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3223" />
        <source>"supply_info" - Display circulating supply information.</source>
        <translation>“supply_info”——显示流通供应信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3224" />
        <source>"yield_info" - Display current stats on Salvium staking / yield.</source>
        <translation>“yield_info”——显示 Salvium 权益/收益的当前统计数据。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3225" />
        <source>"show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]" - Show transactions.</source>
        <translation>“show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]” - 显示交易。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3226" />
        <source>"sweep_all &lt;address&gt;" - Send whole balance to another wallet.</source>
        <translation>“sweep_all&lt;address&gt; “——将全部余额发送到另一个钱包。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3227" />
        <source>"seed" - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>“种子”——显示可用于恢复此钱包的 25 个秘密单词。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3228" />
        <source>"refresh" - Synchronize wallet with the Salvium network.</source>
        <translation>“刷新”——将钱包与 Salvium 网络同步。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3229" />
        <source>"status" - Check current status of wallet.</source>
        <translation>“状态”——检查钱包的当前状态。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3230" />
        <source>"version" - Check software version.</source>
        <translation>“版本”——检查软件版本。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3231" />
        <source>"exit" - Exit wallet.</source>
        <translation>“退出” – 退出钱包。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233" />
        <source>"donate &lt;amount&gt;" - Donate SAL to the development team.</source>
        <translation>“捐&lt;amount&gt;“——向开发团队捐赠 SAL。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263" />
        <source>No commands found mentioning keyword(s)</source>
        <translation>未找到提及关键字的命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3293" />
        <source>Invalid txid specified: </source>
        <translation>指定了无效的 txid： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300" />
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>警告：此操作可能会将 txid 泄露给远程节点并影响您的隐私</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3302" />
        <source>You have canceled the operation</source>
        <translation>您已取消该操作</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3347" />
        <source>Set another daemon to connect to. If it's not yours, it'll probably spy on you.</source>
        <translation>设置另一个守护进程进行连接。如果不是你的守护进程，它可能会监视你。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3373" />
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included). The "subtractfeefrom=" list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: "transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2". Let's say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use "subtractfeefrom=all" to spread the fee across all destinations.</source>
        <translation>转移&lt;amount&gt;的&lt;asset_type&gt;到&lt;address&gt;. 如果参数“index=&lt;N1&gt; [，&lt;N2&gt; ,...]” 指定后，钱包将使用这些索引的地址收到的输出。如果省略，钱包将随机选择要使用的地址索引。无论如何，它会尽力不组合多个地址的输出。&lt;priority&gt;是交易的优先级。优先级越高，交易费越高。按优先级顺序（从低到高）的有效值为：不重要、正常、提升、优先级。如果省略，则使用默认值（参见命令“设置优先级”）。&lt;ring_size&gt;是为实现不可追溯性而需要包含的输入数量。可以通过添加 URI_2 或&lt;address_2&gt;&lt;amount_2&gt;等等（如果包含付款 ID，则在付款 ID 之前）。“subtractfeefrom=”列表允许您选择从哪些目的地而不是更改输出中支付交易费用。费用将按比例平均分配给所选目的地。例如，要进行 3 次转账，费用从第一个和第三个目的地收取，可以执行以下操作：“transfer&lt;addr1&gt; 3&lt;addr2&gt; 0.5&lt;addr3&gt; 1 subtractfeefrom=0,2&amp;quot;。假设交易费为 0.1。余额将减少 4.5 SAL（包括费用），addr1 和 addr3 将分别收到 2.925 和 0.975 SAL。使用“subtractfeefrom=all”将费用分摊到所有目的地。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381" />
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>将所有解锁的余额发送到一个地址，并锁定&lt;lockblocks&gt;（最大 1000000）。如果参数“index=&lt;N1&gt; [，&lt;N2&gt; ,...]”或“index=all”被指定时，钱包分别扫描由这些或所有地址索引接收的输出。如果省略，钱包会随机选择要使用的地址索引。&lt;priority&gt;是清扫的优先级。优先级越高，交易费越高。按优先级顺序（从低到高）的有效值为：不重要、正常、提升、优先级。如果省略，则使用默认值（参见命令“设置优先级”）。&lt;ring_size&gt;是为了实现不可追踪而需要包含的输入数量。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3387" />
        <source>Send all unlocked balance to an address. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter "outputs=&lt;N&gt;" is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>将所有解锁的余额发送到一个地址。如果参数“index=&lt;N1&gt; [，&lt;N2&gt; ,...]”或“index=all”指定时，钱包将分别扫描这些或所有地址索引收到的输出。如果省略，钱包将随机选择要使用的地址索引。如果参数“outputs=&lt;N&gt; &amp;quot; 被指定并且 N &amp;gt; 0，钱包会将交易拆分为 N 个偶数输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3390" />
        <source>Send all unlocked balance from a given account to an address. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter "outputs=&lt;N&gt;" is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>将给定帐户的所有解锁余额发送到某个地址。如果参数“index=&lt;N1&gt; [，&lt;N2&gt; ,...]”或“index=all”指定时，钱包将分别扫描这些或所有地址索引收到的输出。如果省略，钱包将随机选择要使用的地址索引。如果参数“outputs=&lt;N&gt; &amp;quot; 被指定并且 N &amp;gt; 0，钱包会将交易拆分为 N 个偶数输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402" />
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>返回在 TX 收到的付款&lt;tx_hash&gt;发送给原始发件人。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406" />
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>永久毁坏（烧毁）&lt;amount&gt;的&lt;asset_type&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410" />
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>皈依者&lt;amount&gt;&lt;source_asset&gt;进入&lt;dest_asset&gt;，可选&lt;slippage_limit&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414" />
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>锁&lt;amount&gt;以 SAL 作为股权，以获得收益</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418" />
        <source>Displays the current exchange rate information for SAL &lt;--&gt; VSD conversions</source>
        <translation>显示 SAL &amp;lt;--&amp;gt; VSD 转换的当前汇率信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3422" />
        <source>Displays the current circulating supply information for SAL and VSD currencies</source>
        <translation>显示 SAL 和 VSD 货币的当前流通供应信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426" />
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>显示过去收益率的统计数据&lt;NN&gt;块</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430" />
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>捐&lt;amount&gt;给开发团队（donate.salvium.io）。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3456" />
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If "all" is specified, the wallet shows all the existing addresses in the currently selected account. If "new " is specified, the wallet creates a new address with the provided label text (which can be empty). If "mnew" is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If "label" is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If "one-off" is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>如果没有指定参数或&lt;index&gt;指定后，钱包将显示默认或指定的地址。如果指定了“all”，钱包将显示当前选定帐户中的所有现有地址。如果指定了“new”，钱包将使用提供的标签文本（可以为空）创建一个新地址。如果指定了“mnew”，钱包将创建与参数指定数量相同的新地址；新地址将设置默认标签。如果指定了“label”，钱包将设置由&lt;index&gt;到提供的标签文本。如果指定了“one-off”，则会生成并显示指定索引的地址，并由钱包记住</translation>
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
        <translation>可用选项：种子语言设置钱包的种子语言。always-confirm-transfers &amp;lt;1|0&amp;gt; 是否确认未拆分的交易。print-ring-members &amp;lt;1|0&amp;gt; 是否在确认期间打印有关环成员的详细信息。store-tx-info &amp;lt;1|0&amp;gt; 是否存储传出交易信息（目标地址、付款 ID、交易密钥）以供将来参考。auto-refresh &amp;lt;1|0&amp;gt; 是否自动从守护进程同步新块。refresh-type&lt;full|optimize-coinbase|no-coinbase|default&gt;设置钱包的刷新行为。优先级[0|1|2|3|4]将费用设置为默认/不重要/正常/提升/优先级。确认缺少付款 ID &amp;lt;1|0&amp;gt;（已过时）询问密码&amp;lt;0|1|2（或从不|操作|解密）&amp;gt;操作：在转账等许多操作之前询问密码解密：与操作相同，但在不需要时将支出密钥加密保存在内存中单元&lt;sal|millisal|microsal&gt;设置默认的 salvium（子）单位。min-outputs-count [n] 尝试至少保留那么多值至少为 min-outputs-value 的输出。min-outputs-value [n] 尝试至少保留至少该值的 min-outputs-count 个输出。merge-destinations &amp;lt;1|0&amp;gt; 是否将多笔付款合并到同一个目标地址。confirm-backlog &amp;lt;1|0&amp;gt; 是否存在交易积压，是否发出警告。confirm-backlog-threshold [n] 设置确认积压的阈值，仅当交易积压大于 n 个块时才发出警告。confirm-export-overwrite &amp;lt;1|0&amp;gt; 是否在要导出的文件已存在时发出警告。refresh-from-block-height [n] 设置忽略块的高度。auto-low-priority &amp;lt;1|0&amp;gt; 在安全的情况下是否自动使用低优先级费用级别。 segregate-pre-fork-outputs &amp;lt;1|0&amp;gt; 如果您打算在 Salvium 和密钥重用分叉上花费输出，请设置此项。key-reuse-mitigation2 &amp;lt;1|0&amp;gt; 如果您不确定稍后是否会在密钥重用 Salvium 分叉上花费，请设置此项。subaddress-lookahead&lt;major&gt; ：&lt;minor&gt;设置子地址哈希表的前瞻大小。&lt;n&gt;设置为要使用的密钥重用分叉的高度，0 表示使用默认值。ignore-fractional-outputs &amp;lt;1|0&amp;gt; 是否忽略因费用而导致支出时净亏损的小数输出。ignore-outputs-above&lt;amount&gt;消费时忽略高于此阈值的金额输出。值 0 转换为最大值（1800 万），从而禁用此过滤器。ignore-outputs-below&lt;amount&gt;消费时忽略低于此阈值的金额输出。track-uses &amp;lt;1|0&amp;gt; 是否跟踪拥有的输出用途。setup-background-mining &amp;lt;1|0&amp;gt; 是否启用后台挖掘。设置此项以支持网络并获得接收新 Salvium 的机会。device-name&lt;device_name[:device_spec]&gt;硬件钱包的设备名称。export-format &amp;lt;&amp;quot;binary&amp;quot;|&amp;quot;ascii&amp;quot;&amp;gt; 将所有导出的文件保存为二进制（不能复制和粘贴）或 ascii（可以）。persistent-rpc-client-id &amp;lt;1|0&amp;gt; 钱包重启时是否继续使用相同的客户端 ID 进行 RPC 支付。auto-mine-for-rpc-payment-threshold&lt;float&gt;如果守护进程需要，是否自动开始挖掘 RPC 付款。&lt;unsigned int&gt; RPC 付款将余额存入目标（默认值为 0）。 show-wallet-name-when-locked &amp;lt;1|0&amp;gt; 如果您希望在锁定时显示钱包名称，请设置此项。 enable-multisig-experimental &amp;lt;1|0&amp;gt; 设置此项以允许多重签名命令。如果各方不信任彼此，多重签名目前可能被利用。 inactivity-lock-timeout&lt;unsigned int&gt;锁定钱包之前等待多少秒（0 为禁用）。freeze-incoming-payments &amp;lt;1|0&amp;gt; 是否自动冻结传入付款，以免被错误地使用。</translation>
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
        <translation>显示可选高度范围内的传入/传出转账。输出格式：In 或 Coinbase：区块编号、“block”|“in”、时间、金额、资产类型、交易哈希、付款 ID、子地址索引、“-”、注释 Out：区块编号、“out”、时间、金额*、资产类型、交易哈希、付款 ID、费用、目的地、输入地址**、“-”、注释池：&amp;quot;pool&amp;quot;、&amp;quot;in&amp;quot;、时间、金额、资产类型、交易哈希、付款 ID、子地址索引、“-”、注释、双重支付注释待处理或失败：&amp;quot;failed&amp;quot;|“pending”、&amp;quot;out&amp;quot;、时间、金额*、交易哈希、付款 ID、费用、输入地址**、“-”、注释质押或烧毁：区块编号、“out”、时间、金额*、资产类型、交易哈希、付款 ID、费用、输入地址**、“-”、注释* 不包括找零和费用。** 在此转账中用作输入的地址索引集。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618" />
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [输入|输出|全部|待处理|失败|池|coinbase|烧毁|质押|收益] [索引=&lt;N1&gt; [，&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [输出=&lt;filepath&gt; ] [选项=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653" />
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>使用给定的子地址（如果未指定，则使用主地址）对文件内容进行签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3728" />
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>与 MMS（多重签名消息系统）接口&lt;subcommand&gt;是下列之一：init、info、signer、list、next、sync、transfer、delete、send、receive、export、note、show、set、help send_signer_config、start_auto_config、stop_auto_config、auto_config、config_checksum 使用以下命令获取有关子命令的帮助：help mms&lt;subcommand&gt;或帮助彩信&lt;subcommand&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3803" />
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>获取校验和，使签名者能够轻松检查是否具有相同的 MMS 配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889" />
        <source>Show address as QR code</source>
        <translation>以二维码形式显示地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3897" />
        <source>Search all command descriptions for keyword(s)</source>
        <translation>在所有命令描述中搜索关键字</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3901" />
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>扫描给出的交易&lt;txid&gt;（s），处理它们并寻找输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014" />
        <source>sal, millisal, microsal</source>
        <translation>盐，毫盐，微盐</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032" />
        <source>1 or 0</source>
        <translation>1 或 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4257" />
        <source>Multisig is disabled.</source>
        <translation>多重签名已被禁用。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4258" />
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can't be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>多重签名是一项实验性功能，可能存在错误。可能出现的问题包括：发送到多重签名钱包的资金根本无法使用，只能在恶意群组成员的参与下使用，或者可能被恶意群组成员窃取。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4260" />
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>您已取消恢复多重签名钱包。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4915" />
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>钱包无法连接到守护进程，因为它设置为离线模式</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4917" />
        <source>wallet failed to connect to daemon, because it is not up to date. </source>
        <translation>钱包无法连接到守护进程，因为它不是最新的。 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4918" />
        <source>Please make sure you are running the latest wallet.</source>
        <translation>请确保您正在运行最新的钱包。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4921" />
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the 'set_daemon' command.</source>
        <translation>守护进程未更新。请确保守护进程运行的是最新版本，或者使用“set_daemon”命令更改守护进程地址。</translation>
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
        <translation>您的钱包已生成！要开始与守护进程同步，请使用“refresh”命令。使用“help”命令查看可用命令的简化列表。使用“help all”命令查看所有可用命令的列表。使用“help&lt;command&gt; “查看命令的文档。关闭 salvium-wallet-cli 时，请务必使用“exit”命令来保存当前会话的状态。否则，您可能需要再次同步您的钱包（您的钱包密钥在任何情况下都不会受到威胁）。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5348" />
        <source>Use the "help" command to see a simplified list of available commands.
</source>
        <translation>使用“help”命令查看可用命令的简化列表。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5349" />
        <source>Use "help all" to see the list of all available commands.
</source>
        <translation>使用“help all”查看所有可用命令的列表。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5536" />
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>启用此功能可支持您正在使用的网络，并使您有资格接收新的 SAL</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703" />
        <source>Failed to parse address</source>
        <translation>解析地址失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5718" />
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got </source>
        <translation>预期可信、不可信或这可能是间谍节点 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5727" />
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>这不是 Tor/I2P 地址，也不是受信任的守护进程。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5728" />
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>要么使用您自己的可信节点，通过 Tor 或 I2P 连接，要么传递这可能是间谍节点并进行监视。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5733" />
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>警告：如果没有 SSL 就连接到非本地守护进程，被动对手将能够监视您。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5836" />
        <source>stake returned </source>
        <translation>返还股份 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5842" />
        <source>yield earned </source>
        <translation>已获收益率 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5853" />
        <source>burnt </source>
        <translation>烧焦 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5858" />
        <source>converting </source>
        <translation>转换 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5863" />
        <source>staked </source>
        <translation>已质押 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5982" />
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>设备要求输入密码。您是否要在设备 (Y)（或主机 (N)）上输入密码？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005" />
        <source>The wallet's refresh-from-block-height setting is higher than the daemon's height: this may mean your wallet will skip over transactions</source>
        <translation>钱包的区块刷新高度设置高于守护进程的高度：这可能意味着你的钱包将跳过交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6155" />
        <source> (Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation> （部分自有输出缺少关键图像 - 需要 export_outputs、import_outputs、export_key_images 和 import_key_images）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171" />
        <source>Asset: </source>
        <translation>资产： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10353" />
        <source>, balance: </source>
        <translation>， 平衡： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6494" />
        <source>failed to connect to daemon</source>
        <translation>无法连接到守护进程</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6595" />
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>，这会破坏环签名的匿名性。确保这是有意为之！
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653" />
        <source>I locked your Salvium wallet to protect you while you were away
see "help set" to configure/disable</source>
        <translation>我锁定了您的 Salvium 钱包，以便在您外出时保护您，请参阅“帮助设置”以配置/禁用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6673" />
        <source>Locked due to inactivity.</source>
        <translation>由于不活动而被锁定。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6674" />
        <source>The wallet password is required to unlock the console.</source>
        <translation>需要钱包密码才能解锁控制台。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6681" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10838" />
        <source>Testnet</source>
        <translation>测试网</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10839" />
        <source>Stagenet</source>
        <translation>舞台网</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10839" />
        <source>Mainnet</source>
        <translation>主网</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073" />
        <source>Burning %s %s.  </source>
        <translation>正在燃烧 %s %s。  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7075" />
        <source>Converting %s %s to %s.  </source>
        <translation>将 %s %s 转换为 %s。  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7077" />
        <source>Staking %s %s for yield accrual.  </source>
        <translation>质押 %s %s 以获得收益。  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7079" />
        <source>Sending %s %s.  </source>
        <translation>正在发送 %s %s。  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7098" />
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>。此交易（包括 %s 更改）将在 %llu 个区块内解锁，大约需要 %s 天（假设每个区块 2 分钟）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975" />
        <source>Invalid account</source>
        <translation>帐户无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8006" />
        <source>return_payments are disabled</source>
        <translation>return_payments 已禁用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8042" />
        <source>incorrect TX type for txid </source>
        <translation>txid 的 TX 类型不正确 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8048" />
        <source>invalid return_address_list for txid </source>
        <translation>txid 的 return_address_list 无效 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054" />
        <source>invalid return_address/return_pubkey for txid </source>
        <translation>txid 的 return_address/return_pubkey 无效 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8061" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8072" />
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid </source>
        <translation>txid 的关键图像不可用（部分 / 未知 / 已用 / 冻结） </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8104" />
        <source>Returning %s for a total fee of %s.  Is this okay?</source>
        <translation>退还 %s，总费用为 %s。这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8134" />
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>尚未实施对退货交易的冷签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8224" />
        <source>conversions are disabled until hard fork </source>
        <translation>转换将被禁用，直至硬分叉 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8231" />
        <source>missing / extraneous argument(s)</source>
        <translation>缺失/多余的参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8247" />
        <source>invalid slippage_limit value : expected 0.0-90.0, got </source>
        <translation>slippage_limit 值无效：预期为 0.0-90.0，结果为 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8258" />
        <source>invalid argument(s): </source>
        <translation>无效参数： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8264" />
        <source>out of range for slippage limit: </source>
        <translation>超出滑点限制范围： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8274" />
        <source>invalid destination asset_type</source>
        <translation>目标 asset_type 无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8284" />
        <source>invalid source asset_type</source>
        <translation>源 asset_type 无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8293" />
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>无效转换 - asset_type 未改变</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8318" />
        <source>This is a multisig wallet, staking is not currently supported</source>
        <translation>这是一个多重签名钱包，目前不支持质押</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8356" />
        <source>%s
	SPOT:	%d
	MA:	%d</source>
        <translation>%s 现货: %d 移动平均: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8380" />
        <source>SUPPLY INFO</source>
        <translation>供应信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8391" />
        <source>	%6s : %21.8d</source>
        <translation>	%6s：%21.8d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8418" />
        <source>
STAKED FUNDS:</source>
        <translation>
质押资金：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8424" />
        <source>Height %d, txid %s, staked %s SAL, earned %s SAL</source>
        <translation>高度 %d，交易 ID %s，质押 %s SAL，赚取 %s SAL</translation>
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
收益信息：过去 %s 内销毁的供应币：%d 锁定的币总量：%d 过去 %s 内累计的收益：%d 每 SAL 质押的收益：%d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8504" />
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>向 Salvium 团队捐赠 %s %s（donate.salvium.io 或 %s）。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8855" />
        <source>Last argument is an address, but not a subaddress</source>
        <translation>最后一个参数是地址，但不是子地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8909" />
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>这可能是因为转账到的是子地址。如果是这种情况，请最后传递子地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9604" />
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>用法：show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt; [，&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9663" />
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>用法：export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt; [，&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [输出=&lt;path&gt; ] [选项=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>tx key</source>
        <translation>发送键</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10352" />
        <source>
Grand total:
  Asset: </source>
        <translation>
总计： 资产： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Asset</source>
        <translation>资产</translation>
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
        <translation>%15秒 %21秒 %21秒 %15秒</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10461" />
        <source>Expected exactly one argument for the amount of new addresses</source>
        <translation>新地址数量仅需一个参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10467" />
        <source>failed to parse the amount of new addresses: </source>
        <translation>无法解析新地址的数量： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10472" />
        <source>the amount of new addresses must be lower or equal to </source>
        <translation>新地址的数量必须小于或等于 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10487" />
        <source>Expected exactly two arguments for index</source>
        <translation>索引需要恰好两个参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10497" />
        <source>Address at %u %u: %s</source>
        <translation>地址位于 %u %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10630" />
        <source>Standard address: %s, payment ID: %s</source>
        <translation>标准地址：%s，付款ID：%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10886" />
        <source>Invalid subaddress index format, and not a signature type: </source>
        <translation>子地址索引格式无效，并且不是签名类型： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11511" />
        <source> (Y/Yes/N/No): </source>
        <translation> （是/是/否/否）： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11517" />
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>警告：使用 MMS 自动配置机制并非无需信任</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11518" />
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers' info</source>
        <translation>恶意的自动配置管理器可能会向您发送有关自己钱包的信息，而不是其他签名者的信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11519" />
        <source>If in doubt do not use auto-config or at least compare configs using the "mms config_checksum" command</source>
        <translation>如果有疑问，请不要使用自动配置，或者至少使用“mms config_checksum”命令比较配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11546" />
        <source>Choose processing:</source>
        <translation>选择处理方式：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11555" />
        <source>Sign tx</source>
        <translation>签名 tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11563" />
        <source>Send the tx for submission to </source>
        <translation>将 tx 提交至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11567" />
        <source>Send the tx for signing to </source>
        <translation>将签名交易发送至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11574" />
        <source>Submit tx</source>
        <translation>提交交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11577" />
        <source>unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11583" />
        <source>Choice: </source>
        <translation>选择： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11595" />
        <source>Wrong choice</source>
        <translation>错误的选择</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>Id</source>
        <translation>ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>I/O</source>
        <translation>输入/输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>Authorized Signer</source>
        <translation>授權簽署人</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Message Type</source>
        <translation>消息类型</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Height</source>
        <translation>高度</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Message State</source>
        <translation>消息状态</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Since</source>
        <translation>自从</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11620" />
        <source> ago</source>
        <translation> 前</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>Transport Address</source>
        <translation>运输地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627" />
        <source>Auto-Config Token</source>
        <translation>自动配置令牌</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627" />
        <source>Salvium Address</source>
        <translation>丹参地址</translation>
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
        <translation>信息 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683" />
        <source>In/out: </source>
        <translation>输入/输出： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11685" />
        <source>State: </source>
        <translation>状态： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11685" />
        <source>%s since %s, %s ago</source>
        <translation>%s 自 %s 以来，%s 前</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11689" />
        <source>Sent: Never</source>
        <translation>已发送：从未</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11693" />
        <source>Sent: %s, %s ago</source>
        <translation>发送时间：%s，%s 前</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11696" />
        <source>Authorized signer: </source>
        <translation>授权签名人： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11697" />
        <source>Content size: </source>
        <translation>内容大小： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11697" />
        <source> bytes</source>
        <translation> 字节</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11698" />
        <source>Content: </source>
        <translation>内容： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11698" />
        <source>(binary data)</source>
        <translation>（二进制数据）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11728" />
        <source>Send these messages now?</source>
        <translation>现在发送这些消息吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11738" />
        <source>Queued for sending.</source>
        <translation>排队等待发送。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11758" />
        <source>Invalid message id</source>
        <translation>消息 ID 无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11767" />
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>用法：mms init&lt;required_signers&gt; /&lt;authorized_signers&gt;&lt;own_label&gt;&lt;own_transport_address&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11773" />
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>MMS 已初始化。是否通过删除所有签名者信息和消息来重新初始化？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11788" />
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>所需签名者和/或授权签名者的数量有误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11805" />
        <source>The MMS is not active.</source>
        <translation>MMS 未处于活动状态。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11828" />
        <source>Invalid signer number </source>
        <translation>签名者编号无效 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11833" />
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>MMS 签名者 [&lt;number&gt; &lt;label&gt;[&lt;/label&gt;&lt;transport_address&gt; &lt;label&gt;[&lt;/label&gt;&lt;salvium_address&gt; &lt;label&gt;]]]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11852" />
        <source>Invalid Salvium address</source>
        <translation>Salvium 地址无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11859" />
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>钱包状态不再允许更改 Salvium 地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11871" />
        <source>Usage: mms list</source>
        <translation>用法：彩信列表</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11884" />
        <source>Usage: mms next [sync]</source>
        <translation>用法：mms next [同步]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11909" />
        <source>No next step: </source>
        <translation>没有下一步： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11919" />
        <source>prepare_multisig</source>
        <translation>准备多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11925" />
        <source>make_multisig</source>
        <translation>make_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11940" />
        <source>exchange_multisig_keys</source>
        <translation>exchange_multisig_keys</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11956" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="12080" />
        <source>export_multisig_info</source>
        <translation>导出多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11965" />
        <source>import_multisig_info</source>
        <translation>导入多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11978" />
        <source>sign_multisig</source>
        <translation>sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11988" />
        <source>submit_multisig</source>
        <translation>提交多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11998" />
        <source>Send tx</source>
        <translation>发送交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12009" />
        <source>Process signer config</source>
        <translation>处理签名者配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12021" />
        <source>Replace current signer config with the one displayed above?</source>
        <translation>使用上面显示的配置替换当前签名者配置吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12027" />
        <source>You can use the "mms delete" command to delete any unwanted message</source>
        <translation>您可以使用“MMS 删除”命令删除任何不需要的消息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12040" />
        <source>Process auto config data</source>
        <translation>处理自动配置数据</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12054" />
        <source>Nothing ready to process</source>
        <translation>尚无任何准备处理的内容</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12073" />
        <source>Usage: mms sync</source>
        <translation>用途：MMS 同步</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12097" />
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>用法：mms 删除 (&lt;message_id&gt; | 全部)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12104" />
        <source>Delete all messages?</source>
        <translation>删除所有信息？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12130" />
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>用法：彩信发送[&lt;message_id&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12147" />
        <source>Usage: mms receive</source>
        <translation>用途：彩信接收</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12164" />
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>用途：MMS 导出&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12175" />
        <source>Message content saved to: </source>
        <translation>消息内容保存至： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12179" />
        <source>Failed to to save message content</source>
        <translation>无法保存消息内容</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12203" />
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>用法：彩信备注 [&lt;text&gt; &lt;label&gt;]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12210" />
        <source>No signer found with label </source>
        <translation>未找到带标签的签名者 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12232" />
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>用法：彩信秀&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12250" />
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>用法：MMS 设置&lt;option_name&gt;[&lt;option_value&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12267" />
        <source>Wrong option value</source>
        <translation>错误的选项值</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12272" />
        <source>Auto-send is on</source>
        <translation>自动发送已开启</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12272" />
        <source>Auto-send is off</source>
        <translation>自动发送已关闭</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12277" />
        <source>Unknown option</source>
        <translation>未知选项</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12285" />
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>用法：帮助 MMS [&lt;subcommand&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12301" />
        <source>Usage: mms send_signer_config</source>
        <translation>用法：mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12307" />
        <source>Signer config not yet complete</source>
        <translation>签名者配置尚未完成</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12322" />
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>用法： mms start_auto_config [ &lt;label&gt;...]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12327" />
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>有签名者未设置标签。请在自动配置前填写标签或在此处将其指定为参数。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12333" />
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>自动配置已在运行。取消并重新启动吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12357" />
        <source>Usage: mms config_checksum</source>
        <translation>用法：mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12369" />
        <source>Usage: mms stop_auto_config</source>
        <translation>用法：mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12372" />
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>删除所有自动配置令牌并停止自动配置？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12385" />
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>用法：mms auto_config&lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12392" />
        <source>Invalid auto-config token</source>
        <translation>自动配置令牌无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12402" />
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>自动配置已运行。取消并重新启动？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12421" />
        <source>MMS not available in this wallet</source>
        <translation>此钱包中不提供 MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12445" />
        <source>The MMS is not active. Activate using the "mms init" command</source>
        <translation>MMS 未激活。使用“mms init”命令激活</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12526" />
        <source>Invalid MMS subcommand</source>
        <translation>无效的 MMS 子命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12531" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="12535" />
        <source>Error in MMS command: </source>
        <translation>MMS 命令错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10857" />
        <source>wallet is watch-only and cannot sign</source>
        <translation>钱包只可查看，无法签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10862" />
        <source>This wallet is multisig and cannot sign</source>
        <translation>此钱包是多重签名的，无法签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10936" />
        <source>Bad signature from </source>
        <translation>签名错误来自 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10940" />
        <source>Good signature from </source>
        <translation>好的签名来自 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10956" />
        <source>wallet is watch-only and cannot export key images</source>
        <translation>钱包是只读的，无法导出密钥图像</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10994" />
        <source>Signed key images exported to </source>
        <translation>已签名的密钥图像导出至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11039" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11085" />
        <source>command only supported by HW wallet</source>
        <translation>该命令仅由 HW 钱包支持</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11044" />
        <source>hw wallet does not support cold KI sync</source>
        <translation>hw 钱包不支持冷 KI 同步</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11056" />
        <source>Please confirm the key image sync on the device</source>
        <translation>请确认设备上的关键图像同步</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11062" />
        <source>Key images synchronized to height </source>
        <translation>与高度同步的关键图像 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11065" />
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>运行不受信任的守护进程，无法确定哪些交易输出已被使用。使用带有 --trusted-daemon 的受信任守护进程并运行 rescan_spent</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11068" />
        <source> spent, </source>
        <translation> 花费， </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11068" />
        <source> unspent</source>
        <translation> 未用完</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11072" />
        <source>Failed to import key images</source>
        <translation>无法导入关键图片</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11077" />
        <source>Failed to import key images: </source>
        <translation>无法导入关键图片： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11094" />
        <source>Failed to reconnect device</source>
        <translation>无法重新连接设备</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11099" />
        <source>Failed to reconnect device: </source>
        <translation>无法重新连接设备： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11151" />
        <source>Outputs exported to </source>
        <translation>输出导出至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11306" />
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>网络上出现双重支付：这笔交易可能会被挖走，也可能不会被挖走</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11341" />
        <source>Transaction ID not found</source>
        <translation>未找到交易 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11376" />
        <source>Transaction successfully saved to </source>
        <translation>交易已成功保存至 </translation>
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
        <translation>无法保存交易至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="408" />
        <source>true</source>
        <translation>真的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="461" />
        <source>failed to parse refresh type</source>
        <translation>无法解析刷新类型</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="881" />
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>输入可选的种子偏移密码，为空则查看原始种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4342" />
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>输入种子偏移密码，若无则为空</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5342" />
        <source>You may want to remove the file "%s" and try again</source>
        <translation>您可能需要删除文件“%s”并重试</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8685" />
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>这是一个多重签名钱包，只能使用 sign_multisig 进行签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8690" />
        <source>This is a watch only wallet</source>
        <translation>这是一个仅供手表使用的钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8722" />
        <source>Failed to sign transaction</source>
        <translation>交易签署失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8728" />
        <source>Failed to sign transaction: </source>
        <translation>交易签署失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8749" />
        <source>Transaction raw hex data exported to </source>
        <translation>交易原始十六进制数据导出至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8770" />
        <source>Failed to load transaction from file</source>
        <translation>无法从文件加载交易</translation>
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
        <translation>无法解析 txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8430" />
        <source>Height %d (matures %d), txid %s, staked %s SAL, %s SAL accrued so far</source>
        <translation>高度 %d（成熟 %d），txid %s，质押 %s SAL，迄今累计 %s SAL</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8828" />
        <source>Tx key: </source>
        <translation>发送键： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8833" />
        <source>no tx keys found for this txid</source>
        <translation>未找到此 txid 的 tx 密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8876" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8887" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8894" />
        <source>failed to parse tx_key</source>
        <translation>无法解析 tx_key</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8903" />
        <source>Tx key successfully stored.</source>
        <translation>Tx 密钥已成功存储。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8907" />
        <source>Failed to store tx key: </source>
        <translation>无法存储 tx 密钥： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8943" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9155" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9244" />
        <source>signature file saved to: </source>
        <translation>签名文件保存至： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8945" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9157" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9246" />
        <source>failed to save signature file</source>
        <translation>保存签名文件失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8949" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9037" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9115" />
        <source>error: </source>
        <translation>错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8982" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8991" />
        <source>failed to parse tx key</source>
        <translation>无法解析 tx 密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9013" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9086" />
        <source>received</source>
        <translation>已收到</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9013" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9086" />
        <source>in txid</source>
        <translation>在 txid 中</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9016" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9089" />
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>警告：此交易尚未包含在区块链中！</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9026" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9099" />
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>警告：无法确定确认次数！</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9032" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9105" />
        <source>received nothing in txid</source>
        <translation>txid 中没有收到任何内容</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9186" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9280" />
        <source>failed to load signature file</source>
        <translation>加载签名文件失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9083" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9193" />
        <source>Good signature</source>
        <translation>好签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9110" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9195" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9295" />
        <source>Bad signature</source>
        <translation>错误签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9134" />
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>钱包是只读的，无法生成证明</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9218" />
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>只有完整钱包才能生成储备证明</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9273" />
        <source>Address must not be a subaddress</source>
        <translation>地址不能是子地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9400" />
        <source>bad min_height parameter:</source>
        <translation>min_height 参数错误：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9412" />
        <source>bad max_height parameter:</source>
        <translation>错误的 max_height 参数：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9434" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>block</source>
        <translation>堵塞</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9434" />
        <source>in</source>
        <translation>在</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9525" />
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[网络上出现双重支付：这笔交易可能会被挖走，也可能不会] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9813" />
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt;应该小于&lt;max_amount&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9839" />
        <source>There is no unspent output in the specified address</source>
        <translation>指定地址中没有未使用的输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845" />
        <source>
Amount: </source>
        <translation>
数量： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845" />
        <source>, number of keys: </source>
        <translation>，按键数量： </translation>
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
最小区块高度： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9856" />
        <source>
Max block height: </source>
        <translation>
最大区块高度： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9857" />
        <source>
Min amount found: </source>
        <translation>
找到的最小数量： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9858" />
        <source>
Max amount found: </source>
        <translation>
找到的最大数量： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9859" />
        <source>
Total count: </source>
        <translation>
总數量： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9899" />
        <source>
Bin size: </source>
        <translation>
为您获取： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9900" />
        <source>
Outputs per *: </source>
        <translation>
每*输出: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9902" />
        <source>count
  ^
</source>
        <translation>计数 ^
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
        <translation>+--&amp;gt; 区块高度
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
        <translation>警告：这将丢失任何无法从区块链中恢复的信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9954" />
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>这包括目标地址、tx 密钥、tx 注释等</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9291" />
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>良好签名 -- 总计：%s，已花费：%s，未花费：%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094" />
        <source>First line is not an amount</source>
        <translation>第一行不是金额</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108" />
        <source>Invalid output: </source>
        <translation>无效输出： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2133" />
        <source>Invalid output key, and file doesn't exist</source>
        <translation>输出键无效，且文件不存在</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2156" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2183" />
        <source>Invalid output</source>
        <translation>无效输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2671" />
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>无效参数：必须是 0/never、1/action 或 2/encrypt/decrypt</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3377" />
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included)</source>
        <translation>转移&lt;amount&gt;到&lt;address&gt;并将其锁定&lt;lockblocks&gt;（最大 1000000）。如果参数“index=&lt;N1&gt; [，&lt;N2&gt;如果指定了“,...]”，钱包将使用这些索引的地址收到的输出。如果省略，钱包将随机选择要使用的地址索引。无论如何，它会尽力不组合多个地址的输出。&lt;priority&gt;是交易的优先级。优先级越高，交易费越高。按优先级顺序（从低到高）的有效值为：不重要、正常、提升、优先级。如果省略，则使用默认值（参见命令“设置优先级”）。&lt;ring_size&gt;是为实现不可追溯性而需要包含的输入数量。可以通过添加 URI_2 或&lt;address_2&gt;&lt;amount_2&gt;等等（如果包含，则在付款 ID 之前）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5946" />
        <source>Password needed (%s) - use the refresh command</source>
        <translation>需要密码（％s）-使用刷新命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10114" />
        <source>Daemon requests payment at diff %llu, with %f credits/hash%s. Run start_mining_for_rpc to start mining to pay for RPC access, or use another daemon</source>
        <translation>守护进程在 diff %llu 处请求付款，金额为 %f credits/hash%s。运行 start_mining_for_rpc 开始挖矿以支付 RPC 访问费用，或使用其他守护进程</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10141" />
        <source>Error mining to daemon: </source>
        <translation>错误挖掘到守护进程： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10147" />
        <source>Failed to start mining for RPC payment</source>
        <translation>无法启动 RPC 支付挖矿</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10159" />
        <source>wallet</source>
        <translation>钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10161" />
        <source> (no daemon)</source>
        <translation> （无守护进程）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10163" />
        <source> (out of sync)</source>
        <translation> （不同步）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10214" />
        <source>(Untitled account)</source>
        <translation>（无标题帐户）</translation>
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
        <translation>解析索引失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10232" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10508" />
        <source>specify an index between 0 and </source>
        <translation>指定 0 到 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10354" />
        <source>, unlocked balance: </source>
        <translation>，解锁余额： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10364" />
        <source>Untagged accounts:</source>
        <translation>未标记的帐户：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10370" />
        <source>Tag %s is unregistered.</source>
        <translation>标签 %s 未注册。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10373" />
        <source>Accounts with tag: </source>
        <translation>带有标签的帐户： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10374" />
        <source>Tag's description: </source>
        <translation>标签的描述： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Account</source>
        <translation>帐户</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10430" />
        <source>Primary address</source>
        <translation>主要地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10430" />
        <source>(used)</source>
        <translation>（用过的）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10451" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10477" />
        <source>(Untitled address)</source>
        <translation>（未命名地址）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10535" />
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt;已经超出范围</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10540" />
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt;超出界限</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10604" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10617" />
        <source>Integrated addresses can only be created for account 0</source>
        <translation>仅可为账户 0 创建集成地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10609" />
        <source>Matching integrated address: </source>
        <translation>配套集成地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10636" />
        <source>Subaddress: </source>
        <translation>子地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10636" />
        <source>Standard address: </source>
        <translation>标准地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10641" />
        <source>failed to parse payment ID or address</source>
        <translation>无法解析付款 ID 或地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10678" />
        <source>failed to parse index</source>
        <translation>解析索引失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10686" />
        <source>Address book is empty.</source>
        <translation>地址簿是空的。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10692" />
        <source>Index: </source>
        <translation>指数： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10698" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10828" />
        <source>Address: </source>
        <translation>地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10699" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10827" />
        <source>Description: </source>
        <translation>描述： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10784" />
        <source>no description found</source>
        <translation>未找到描述</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10786" />
        <source>description found: </source>
        <translation>找到描述： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6679" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10826" />
        <source>Filename: </source>
        <translation>文件名： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10831" />
        <source>Watch only</source>
        <translation>仅限观看</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10833" />
        <source>%u/%u multisig%s</source>
        <translation>%u/%u 多重签名%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8648" />
        <source>%s change to %s</source>
        <translation>%s 更改为 %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9022" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9095" />
        <source>This transaction has %u confirmations</source>
        <translation>此交易有 %u 个确认</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61" />
        <source>Filename to save the certificate</source>
        <translation>保存证书的文件名</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62" />
        <source>Filename to save the private key</source>
        <translation>保存私钥的文件名</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63" />
        <source>Passphrase with which to encrypt the private key</source>
        <translation>用于加密私钥的密码</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64" />
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>包含用于加密私钥的密码的文件</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65" />
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>提示输入用于加密私钥的密码</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143" />
        <source>Argument is needed: </source>
        <translation>需要参数： </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153" />
        <source>Failed to read passphrase</source>
        <translation>无法读取密码</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188" />
        <source>Failed to create certificate</source>
        <translation>无法创建证书</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206" />
        <source>Failed to write certificate: </source>
        <translation>写入证书失败： </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226" />
        <source>Failed to write private key: </source>
        <translation>写入私钥失败： </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237" />
        <source>Failed to save certificate file</source>
        <translation>无法保存证书文件</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243" />
        <source>Failed to save private key file</source>
        <translation>无法保存私钥文件</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69" />
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>基本文件名（根据需要添加 -1、-2 等后缀）</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70" />
        <source>Give threshold and participants at once as M/N</source>
        <translation>立即给出阈值和参与者作为 M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71" />
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>有多少参与者将共享多重签名钱包的部分</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72" />
        <source>How many signers are required to sign a valid transaction</source>
        <translation>签署有效交易需要多少个签名者</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73" />
        <source>Create testnet multisig wallets</source>
        <translation>创建测试网多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74" />
        <source>Create stagenet multisig wallets</source>
        <translation>创建 stagenet 多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75" />
        <source>Create an address file for new wallets</source>
        <translation>为新钱包创建地址文件</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80" />
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>生成 %u %u/%u 多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="137" />
        <source>Generated multisig wallets for address </source>
        <translation>为地址生成多重签名钱包 </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="141" />
        <source>Error creating multisig wallets: </source>
        <translation>创建多重签名钱包时出错： </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="166" />
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>该程序生成一组多重签名钱包 - 仅当所有参与者相互信任时才使用此更简单的方案</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="185" />
        <source>Error: Can't specify more than one of --testnet and --stagenet</source>
        <translation>错误：无法指定 --testnet 和 --stagenet 中的多个</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="192" />
        <source>Error: expected N/M, but got: </source>
        <translation>错误：预期 N/M，但得到： </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="200" />
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="209" />
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>错误：可能给出 --scheme，或者 --threshold 和 --participants 两者</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216" />
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>错误：预期 N &amp;gt; 1 且 N &amp;lt;= M，但得到的是 N==%u 且 M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225" />
        <source>Error: --filename-base is required</source>
        <translation>错误：需要 --filename-base</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72" />
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>在 URL 上使用 PyBitmessage 实例&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73" />
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>指定&lt;arg&gt;作为 PyBitmessage API 的用户名：密码</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911" />
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>自动配置无法继续，因为其他签名者的自动配置数据不完整</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936" />
        <source>The signer config is not complete.</source>
        <translation>签名者配置不完整。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988" />
        <source>Wallet can't go multisig because key sets from other signers are missing or not complete.</source>
        <translation>钱包无法进行多重签名，因为其他签名者的密钥集丢失或不完整。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030" />
        <source>Wallet can't start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>钱包无法启动另一轮密钥交换，因为其他签名者的密钥集丢失或不完整。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094" />
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>同步未完成，因为来自其他签名者的多重签名同步数据丢失或不完整。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208" />
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>有等待消息，但正常情况下没有准备好处理任何消息</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211" />
        <source>
Use "mms next sync" if you want to force processing of the waiting sync data</source>
        <translation>
如果要强制处理等待同步数据，请使用“mms next sync”</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215" />
        <source>
Use "mms note" to display the waiting notes</source>
        <translation>
使用“MMS 备注”显示等待备注</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220" />
        <source>There are no messages waiting to be processed.</source>
        <translation>没有等待处理的消息。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441" />
        <source>key set</source>
        <translation>键集</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443" />
        <source>additional key set</source>
        <translation>附加键集</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445" />
        <source>multisig sync data</source>
        <translation>多重签名同步数据</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447" />
        <source>partially signed tx</source>
        <translation>部分签名的交易</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449" />
        <source>fully signed tx</source>
        <translation>完全签名的交易</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451" />
        <source>note</source>
        <translation>笔记</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453" />
        <source>signer config</source>
        <translation>签名者配置</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455" />
        <source>auto-config data</source>
        <translation>自动配置数据</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457" />
        <source>unknown message type</source>
        <translation>未知消息类型</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466" />
        <source>in</source>
        <translation>在</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468" />
        <source>out</source>
        <translation>出去</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470" />
        <source>unknown message direction</source>
        <translation>未知消息方向</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479" />
        <source>ready to send</source>
        <translation>准备发送</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481" />
        <source>sent</source>
        <translation>发送</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483" />
        <source>waiting</source>
        <translation>等待</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485" />
        <source>processed</source>
        <translation>已处理</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487" />
        <source>cancelled</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489" />
        <source>unknown message state</source>
        <translation>未知消息状态</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="177" />
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>生成新钱包并保存到&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="178" />
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>从设备生成新钱包并保存到&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="179" />
        <source>Generate incoming-only wallet from view key</source>
        <translation>从查看密钥生成仅接收钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="180" />
        <source>Generate deterministic wallet from spend key</source>
        <translation>根据支出密钥生成确定性钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="181" />
        <source>Generate wallet from private keys</source>
        <translation>从私钥生成钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="182" />
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>从多重签名钱包密钥生成主钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184" />
        <source>Language for mnemonic</source>
        <translation>助记符语言</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="185" />
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>指定用于钱包恢复/创建的 Electrum 种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="186" />
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>使用 Electrum 风格的助记词种子恢复钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="187" />
        <source>alias for --restore-deterministic-wallet</source>
        <translation>--restore-deterministic-wallet 的别名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="188" />
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>使用 Electrum 风格的助记词种子恢复多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="189" />
        <source>Generate non-deterministic view and spend keys</source>
        <translation>生成非确定性视图和支出密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191" />
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>根据指定日期的预计区块链高度恢复</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192" />
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>新创建的交易将不会转发到 Salvium 网络</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="348" />
        <source>failed to read wallet password</source>
        <translation>读取钱包密码失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355" />
        <source>Enter a new password for the wallet</source>
        <translation>输入钱包的新密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355" />
        <source>Wallet password</source>
        <translation>钱包密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="433" />
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>无效参数：必须是 0/1、true/false、y/n、yes/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="489" />
        <source>DNSSEC validation passed</source>
        <translation>DNSSEC 验证已通过</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="493" />
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>警告：DNSSEC验证不成功，该地址可能不正确！</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="496" />
        <source>For URL: </source>
        <translation>对于 URL： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="498" />
        <source> Salvium Address = </source>
        <translation> Salvium地址= </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="510" />
        <source>you have cancelled the transfer request</source>
        <translation>您已取消转账请求</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="531" />
        <source>failed to parse index: </source>
        <translation>解析索引失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="544" />
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>子地址前瞻格式无效；必须是&lt;major&gt;：&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="608" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>没有连接到守护进程。请确保守护进程正在运行。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="617" />
        <source>RPC error: </source>
        <translation>RPC 错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="621" />
        <source>failed to get random outputs to mix: </source>
        <translation>无法获取要混合的随机输出： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="628" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="636" />
        <source>Not enough money in unlocked balance</source>
        <translation>解锁余额不足</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="646" />
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>无法找到创建交易的方法。这通常是由于灰尘太小，无法支付费用，或者试图发送比解锁余额更多的钱，或者没有留下足够的费用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="652" />
        <source>not enough outputs for specified ring size</source>
        <translation>对于指定的环尺寸，输出不足</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655" />
        <source>output amount</source>
        <translation>输出量</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655" />
        <source>found outputs to use</source>
        <translation>找到要使用的输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="657" />
        <source>Please use sweep_unmixable.</source>
        <translation>请使用sweep_unmixable。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="661" />
        <source>transaction was not constructed</source>
        <translation>交易未构建</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669" />
        <source>Reason: </source>
        <translation>原因： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="688" />
        <source>failed to find a suitable way to split transactions</source>
        <translation>未能找到合适的方法来拆分交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694" />
        <source>unknown transfer error: </source>
        <translation>未知的传输错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699" />
        <source>Multisig error: </source>
        <translation>多重签名错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="705" />
        <source>internal error: </source>
        <translation>内部错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="710" />
        <source>unexpected error: </source>
        <translation>意外错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714" />
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>出现错误，这可能意味着节点可能试图让您重试创建交易，并集中精力于您拥有的输出。或者这可能是一个真正的错误。断开与此节点的连接可能是明智的做法，而不是立即尝试发送交易。或者，连接到另一个节点，这样原始节点就无法关联信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726" />
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>文件 %s 可能存储了钱包私钥！请使用其他文件名。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9309" />
        <source> seconds</source>
        <translation> 秒</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9311" />
        <source> minutes</source>
        <translation> 分钟</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9313" />
        <source> hours</source>
        <translation> 小时</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9315" />
        <source> days</source>
        <translation> 天</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9317" />
        <source> months</source>
        <translation> 个月</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9318" />
        <source>a long time</source>
        <translation>很长一段时间</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11461" />
        <source>Unknown command: </source>
        <translation>未知命令： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="190" />
        <source>Restore from specific blockchain height</source>
        <translation>从特定区块链高度恢复</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193" />
        <source>Create an address file for new wallets</source>
        <translation>为新钱包创建地址文件</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195" />
        <source>Display English language names</source>
        <translation>显示英文名称</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365" />
        <source>daemon is busy. Please try again later.</source>
        <translation>守护进程正忙。请稍后重试。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="374" />
        <source>possibly lost connection to daemon</source>
        <translation>可能与守护进程失去连接</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="391" />
        <source>Error: </source>
        <translation>错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="500" />
        <source>Is this OK?</source>
        <translation>这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="666" />
        <source>transaction %s was rejected by daemon</source>
        <translation>事务 %s 被守护进程拒绝</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678" />
        <source>destination amount is zero</source>
        <translation>目的地金额为零</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="683" />
        <source>transaction has no destination</source>
        <translation>交易没有目的地</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="729" />
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>文件 %s 已存在。确定要覆盖它吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11436" />
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>这是命令行 Salvium 钱包。它需要连接到 Salvium 守护程序才能正常工作。警告：不要在另一个分叉上重复使用您的 Salvium 密钥，除非此分叉内置了密钥重用缓解措施。这样做会损害您的隐私。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11455" />
        <source>Failed to initialize wallet</source>
        <translation>初始化钱包失败</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="244" />
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>使用守护进程实例&lt;host&gt;：&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="245" />
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>在主机上使用守护进程实例&lt;arg&gt;而不是本地主机</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251" />
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>在端口上使用守护进程实例&lt;arg&gt;而不是 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260" />
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>用于测试网。守护进程还必须使用 --testnet 标志启动</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="280" />
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>包含额外熵的文件以初始化 PRNG（任何数据，目标是 256 位熵才有用，这通常意味着超过 256 位数据）</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281" />
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>允许与使用不同版本的守护进程进行通信</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375" />
        <source>can't specify daemon host or port more than once</source>
        <translation>无法多次指定守护进程主机或端口</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511" />
        <source>can't specify more than one of --password and --password-file</source>
        <translation>不能指定多个 --password 和 --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="525" />
        <source>the password file specified could not be read</source>
        <translation>无法读取指定的密码文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="551" />
        <source>Failed to load file </source>
        <translation>加载文件失败 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="249" />
        <source>Wallet password (escape/quote as needed)</source>
        <translation>钱包密码（根据需要转义/引用）</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="246" />
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt; ：]&lt;port&gt;用于守护进程连接的 socks 代理</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="247" />
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>启用依赖于受信任守护进程的命令</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="248" />
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>禁用依赖于受信任守护进程的命令</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252" />
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>为守护进程 RPC 客户端指定用户名[:密码]</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253" />
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>在守护进程 RPC 连接上启用 SSL：已启用|已禁用|自动检测</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="257" />
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>允许的 RPC 服务器的有效指纹列表</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258" />
        <source>Allow any SSL certificate from the daemon</source>
        <translation>允许来自守护进程的任何 SSL 证书</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259" />
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>允许用户（通过 --daemon-ssl-ca-certificates）链证书</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261" />
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>对于 stagenet。守护进程还必须使用 --stagenet 标志启动</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263" />
        <source>Set shared ring database path</source>
        <translation>设置共享环数据库路径</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="274" />
        <source>Number of rounds for the key derivation function</source>
        <translation>密钥派生函数的轮数</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="275" />
        <source>HW device to use</source>
        <translation>要使用的硬件设备</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="276" />
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>硬件设备钱包派生路径（例如 SLIP-10）</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="278" />
        <source>Do not use DNS</source>
        <translation>不使用 DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="279" />
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>不要连接到守护进程，也不要使用 DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="367" />
        <source>Invalid argument for </source>
        <translation>无效参数 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428" />
        <source>Enabling --</source>
        <translation>启用——</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428" />
        <source> requires --</source>
        <translation> 需要 --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="429" />
        <location filename="../src/wallet/wallet2.cpp" line="430" />
        <source> or --</source>
        <translation> 或者  - </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="430" />
        <source> or use of a .onion/.i2p domain</source>
        <translation> 或使用 .onion/.i2p 域名</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="448" />
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>--trusted-daemon 和 --untrusted-daemon 均可见，假设不受信任</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="458" />
        <source>Daemon is local, assuming trusted</source>
        <translation>守护进程是本地的，假设受信任</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="468" />
        <source>failed to initialize the wallet</source>
        <translation>无法初始化钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532" />
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>未指定密码；使用--prompt-for-password提示输入密码</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534" />
        <source>Enter a new password for the wallet</source>
        <translation>输入钱包的新密码</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534" />
        <source>Wallet password</source>
        <translation>钱包密码</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="557" />
        <source>Failed to parse JSON</source>
        <translation>无法解析 JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564" />
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>版本 %u 太新，我们只能理解到 %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="580" />
        <source>failed to parse view key secret key</source>
        <translation>无法解析查看密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="585" />
        <source>view secret key may not be all zeroes</source>
        <translation>查看密钥可能不全为零</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587" />
        <location filename="../src/wallet/wallet2.cpp" line="657" />
        <location filename="../src/wallet/wallet2.cpp" line="702" />
        <source>failed to verify view key secret key</source>
        <translation>验证查看密钥密钥失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="598" />
        <source>failed to parse spend key secret key</source>
        <translation>无法解析支出密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="603" />
        <source>spend secret key may not be all zeroes</source>
        <translation>花费密钥可能不全为零</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605" />
        <location filename="../src/wallet/wallet2.cpp" line="667" />
        <location filename="../src/wallet/wallet2.cpp" line="728" />
        <source>failed to verify spend key secret key</source>
        <translation>未能验证消费密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="617" />
        <source>Electrum-style word list failed verification</source>
        <translation>Electrum 风格的单词列表验证失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="637" />
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>必须指定 Electrum 样式的单词列表、私人查看密钥或私人支出密钥中的至少一个</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="641" />
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>指定 Electrum 风格的单词列表和私钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="651" />
        <source>invalid address</source>
        <translation>无效地址</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="660" />
        <source>view key does not match standard address</source>
        <translation>查看密钥与标准地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="670" />
        <source>spend key does not match standard address</source>
        <translation>支出密钥与标准地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="678" />
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>无法从 JSON 生成弃用的钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="714" />
        <source>failed to parse address: </source>
        <translation>解析地址失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="720" />
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>必须指定地址才能创建只读钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="737" />
        <source>failed to generate new wallet: </source>
        <translation>无法生成新钱包： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2172" />
        <source>Password is needed to compute key image for incoming SALs</source>
        <translation>需要密码来计算传入 SAL 的密钥图像</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2173" />
        <source>Invalid password: password is needed to compute key image for incoming SALs</source>
        <translation>密码无效：需要密码来计算传入 SAL 的密钥图像</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3712" />
        <source>reorg exceeds maximum allowed depth, use 'set max-reorg-depth N' to allow it, reorg depth: </source>
        <translation>重组超出允许的最大深度，使用“set max-reorg-depth N”来允许，重组深度： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5600" />
        <location filename="../src/wallet/wallet2.cpp" line="6181" />
        <location filename="../src/wallet/wallet2.cpp" line="6670" />
        <source>Primary account</source>
        <translation>主帐户</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9041" />
        <source>Transaction sanity check failed</source>
        <translation>交易健全性检查失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11344" />
        <source>Incorrect number of transfers_indices on return_payment</source>
        <translation>return_payment 上的 transfers_indices 数量不正确</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11346" />
        <source>cannot locate return_payment origin index in m_transfers</source>
        <translation>无法在 m_transfers 中找到 return_payment 来源索引</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11374" />
        <source>at create_transactions_return(): incorrect number of additional TX pubkeys in origin TX for return_payment</source>
        <translation>在 create_transactions_return() 中：返回付款的原始 TX 中附加 TX 公钥数量不正确</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11382" />
        <source>at create_transactions_return(): failed to generate_key_derivation</source>
        <translation>在 create_transactions_return() 处：无法 generate_key_derivation</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11427" />
        <source>Attempting to return change to ourself</source>
        <translation>试图将改变归还给我们自己</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11432" />
        <source>Failed to identify change output</source>
        <translation>无法识别变更输出</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11583" />
        <source>Transaction cannot pay for itself</source>
        <translation>交易无法自给自足</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11679" />
        <source>Created transaction(s) failed sanity check</source>
        <translation>创建的交易未通过健全性检查</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12675" />
        <source>No funds received in this tx.</source>
        <translation>此交易未收到资金。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13587" />
        <source>failed to read file </source>
        <translation>读取文件失败 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194" />
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>将子地址前瞻大小设置为&lt;major&gt;：&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254" />
        <source>Path to a PEM format private key</source>
        <translation>PEM 格式私钥的路径</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255" />
        <source>Path to a PEM format certificate</source>
        <translation>PEM 格式证书的路径</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256" />
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>包含用于替换系统 CA 的连接 PEM 格式证书的文件路径。</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="219" />
        <source>Failed to create directory </source>
        <translation>无法创建目录 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="221" />
        <source>Failed to create directory %s: %s</source>
        <translation>无法创建目录 %s：%s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232" />
        <source>Cannot specify --</source>
        <translation>无法指定——</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232" />
        <source> and --</source>
        <translation> 和  - </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251" />
        <source>Failed to create file </source>
        <translation>无法创建文件 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251" />
        <source>. Check permissions or remove file</source>
        <translation>. 检查权限或删除文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="261" />
        <source>Error writing to file </source>
        <translation>写入文件时出错 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="264" />
        <source>RPC username/password is stored in file </source>
        <translation>RPC 用户名/密码存储在文件中 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="667" />
        <source>Tag %s is unregistered.</source>
        <translation>标签 %s 未注册。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="695" />
        <source>No matches for regex filter %s .</source>
        <translation>正则表达式过滤器 %s 没有匹配项。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3588" />
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>无法交易。仅可用 %s，交易金额 %s = %s + %s（费用）</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4596" />
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>无法指定多个 --testnet 和 --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4615" />
        <source>Can't specify more than one of --wallet-file and --generate-from-json</source>
        <translation>无法指定多个 --wallet-file 和 --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4621" />
        <source>--password-file is not allowed in combination with --wallet-dir</source>
        <translation>--password-file 不允许与 --wallet-dir 结合使用</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4633" />
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>必须指定 --wallet-file 或 --generate-from-json 或 --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4637" />
        <source>Loading wallet...</source>
        <translation>正在加载钱包...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4685" />
        <source>Initial refresh failed: </source>
        <translation>初始刷新失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4690" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4722" />
        <source>Saving wallet...</source>
        <translation>拯救钱包...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4692" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4724" />
        <source>Successfully saved</source>
        <translation>已成功保存</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4695" />
        <source>Successfully loaded</source>
        <translation>成功加载</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4699" />
        <source>Wallet initialization failed: </source>
        <translation>钱包初始化失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4705" />
        <source>Failed to initialize wallet RPC server</source>
        <translation>无法初始化钱包 RPC 服务器</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4709" />
        <source>Starting wallet RPC server</source>
        <translation>启动钱包 RPC 服务器</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4716" />
        <source>Failed to run wallet: </source>
        <translation>无法运行钱包： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4719" />
        <source>Stopped wallet RPC server</source>
        <translation>停止钱包 RPC 服务器</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4728" />
        <source>Failed to save wallet: </source>
        <translation>保存钱包失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4802" />
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>这是 RPC Salvium 钱包。它需要连接到 Salvium 守护程序才能正常工作。</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="152" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11402" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4781" />
        <source>Wallet options</source>
        <translation>钱包选项</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73" />
        <source>Generate wallet from JSON format file</source>
        <translation>从 JSON 格式文件生成钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77" />
        <source>Use wallet &lt;arg&gt;</source>
        <translation>使用钱包&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81" />
        <source>Set RPC client secret key for RPC payments</source>
        <translation>设置 RPC 支付的 RPC 客户端密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85" />
        <source>Wallet password file</source>
        <translation>钱包密码文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113" />
        <source>Max number of threads to use for a parallel job</source>
        <translation>并行作业使用的最大线程数</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114" />
        <source>Specify log file</source>
        <translation>指定日志文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115" />
        <source>Config file</source>
        <translation>配置文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127" />
        <source>General options</source>
        <translation>常规选项</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152" />
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>这是命令行 Salvium 钱包。它需要连接到 Salvium 守护程序才能正常工作。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176" />
        <source>Can't find config file </source>
        <translation>找不到配置文件 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220" />
        <source>Logging to: </source>
        <translation>记录到： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222" />
        <source>Logging to %s</source>
        <translation>记录到 %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226" />
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>警告：您的可锁定内存限制可能不够高</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228" />
        <source>see ulimit -l</source>
        <translation>参见 ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153" />
        <source>Usage:</source>
        <translation>用法：</translation>
    </message>
</context>
</TS>