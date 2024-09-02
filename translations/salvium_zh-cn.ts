<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53"/>
        <source>Invalid destination address</source>
        <translation>目标地址无效</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60"/>
        <source>Payment ID supplied: this is obsolete</source>
        <translation>提供的付款 ID：该 ID 已过时</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92"/>
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>正在尝试将事务保存到文件，但指定的文件存在。退出以避免被覆盖的风险。文件：</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99"/>
        <source>Failed to write transaction(s) to file</source>
        <translation>无法将交易写入文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>守护进程正忙。请稍后重试。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>没有与守护进程的连接。请确保守护进程正在运行。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>事务 %s 被守护程序拒绝，状态为： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151"/>
        <source>. Reason: </source>
        <translation>。原因： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153"/>
        <source>Unknown exception: </source>
        <translation>未知异常： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156"/>
        <source>Unhandled exception</source>
        <translation>未处理的异常</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="229"/>
        <source>Couldn't multisig sign data: </source>
        <translation>无法对数据进行多重签名： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="251"/>
        <source>Couldn't sign multisig transaction: </source>
        <translation>无法签署多重签名交易： </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75"/>
        <source>This is a watch only wallet</source>
        <translation>这是一款仅限手表的钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85"/>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92"/>
        <source>Failed to sign transaction</source>
        <translation>交易签名失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>已领取的零钱并未发送至付费地址</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>索取的找零金额大于向找零地址支付的金额</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184"/>
        <source>Change goes to more than one address</source>
        <translation>更改会转到多个地址</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197"/>
        <source>sending %s to %s</source>
        <translation>将 %s 发送至 %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203"/>
        <source>with no destinations</source>
        <translation>没有目的地</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209"/>
        <source>%s change to %s</source>
        <translation>%s 更改为 %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212"/>
        <source>no change</source>
        <translation>没有变化</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>已加载 %lu 笔交易，费用为 %s，费用为 %s，%s，%s，最小环大小为 %lu。 %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="561"/>
        <source>failed to parse address</source>
        <translation>解析地址失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="572"/>
        <source>failed to parse secret spend key</source>
        <translation>无法解析秘密支出密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="587"/>
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>既不查看密钥也不使用提供的密钥，已取消</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="595"/>
        <source>failed to parse secret view key</source>
        <translation>无法解析秘密视图密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="604"/>
        <source>failed to verify secret spend key</source>
        <translation>无法验证秘密支出密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="608"/>
        <source>spend key does not match address</source>
        <translation>花费密钥与地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="614"/>
        <source>failed to verify secret view key</source>
        <translation>无法验证秘密视图密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="618"/>
        <source>view key does not match address</source>
        <translation>查看密钥与地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="641"/>
        <location filename="../src/wallet/api/wallet.cpp" line="658"/>
        <source>failed to generate new wallet: </source>
        <translation>生成新钱包失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="706"/>
        <source>Electrum seed is empty</source>
        <translation>金金矿种子为空</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="715"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Electrum 风格的单词列表验证失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1071"/>
        <source>Failed to load unsigned transactions</source>
        <translation>无法加载未签名的交易</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1094"/>
        <source>Failed to load transaction from file</source>
        <translation>无法从文件加载交易</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1110"/>
        <source>Wallet is view only</source>
        <translation>钱包仅供查看</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118"/>
        <source>failed to save file </source>
        <translation>保存文件失败 </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1134"/>
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>关键图像只能使用受信任的守护进程导入</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1147"/>
        <source>Failed to import key images: </source>
        <translation>导入关键图片失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1158"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1188"/>
        <source>Not supported on HW wallets.</source>
        <translation>硬件钱包不支持。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169"/>
        <source>Failed to save file: </source>
        <translation>保存文件失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1176"/>
        <source>Error exporting outputs: </source>
        <translation>导出输出时出错： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1197"/>
        <source>Failed to read file: </source>
        <translation>读取文件失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1209"/>
        <source>Failed to import outputs: </source>
        <translation>导入输出失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1220"/>
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>扫描交易失败：未提供交易 ID。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231"/>
        <source>Invalid txid specified: </source>
        <translation>指定的 txid 无效： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1249"/>
        <source>Failed to scan transaction: </source>
        <translation>扫描交易失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1281"/>
        <source>Failed to get subaddress label: </source>
        <translation>获取子地址标签失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1294"/>
        <source>Failed to set subaddress label: </source>
        <translation>设置子地址标签失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1311"/>
        <source>Failed to get multisig info: </source>
        <translation>无法获取多重签名信息： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1328"/>
        <source>Failed to make multisig: </source>
        <translation>多重签名失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1342"/>
        <source>Failed to exchange multisig keys: </source>
        <translation>无法交换多重签名密钥： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1358"/>
        <source>Failed to export multisig images: </source>
        <translation>导出多重签名图像失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1376"/>
        <source>Failed to parse imported multisig images</source>
        <translation>无法解析导入的多重签名图像</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1386"/>
        <source>Failed to import multisig images: </source>
        <translation>导入多重签名图像失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1400"/>
        <source>Failed to check for partial multisig key images: </source>
        <translation>无法检查部分多重签名密钥图像： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1428"/>
        <source>Failed to restore multisig transaction: </source>
        <translation>无法恢复多重签名交易： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1477"/>
        <source>Sending all requires one destination address</source>
        <translation>全部发送需要一个目标地址</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1481"/>
        <source>Destinations and amounts are unequal</source>
        <translation>目的地和金额不对等</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489"/>
        <source>payment id has invalid format, expected 64 character hex string: </source>
        <translation>付款 ID 的格式无效，应为 64 个字符的十六进制字符串： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1497"/>
        <source>Invalid destination address</source>
        <translation>目标地址无效</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1503"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>一笔交易不能使用多个付款 ID</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1531"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>尽管解码正确，但无法设置付款 ID</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1556"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1647"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>守护进程正忙。请稍后重试。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1558"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1649"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>没有与守护进程的连接。请确保守护进程正在运行。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1560"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1651"/>
        <source>RPC error: </source>
        <translation>远程过程调用错误： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1562"/>
        <source>failed to get outputs to mix: %s</source>
        <translation>未能混合输出：%s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1566"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1658"/>
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>资金不足，无法转账，仅可用 %s，发送金额 %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1573"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1666"/>
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>资金不足，无法转账，总余额只有 %s，发送金额 %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1580"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1674"/>
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>资金不足，无法转账，仅可使用 %s，交易金额 %s = %s + %s（费用）</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1588"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1682"/>
        <source>not enough outputs for specified ring size</source>
        <translation>没有足够的输出来满足指定的环尺寸</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>output amount</source>
        <translation>输出量</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1684"/>
        <source>found outputs to use</source>
        <translation>找到要使用的输出</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1592"/>
        <source>Please sweep unmixable outputs.</source>
        <translation>请扫描不可混合的输出。</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1595"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1688"/>
        <source>transaction was not constructed</source>
        <translation>交易未构建</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1598"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1691"/>
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>事务 %s 被守护程序拒绝，状态为： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1603"/>
        <source>destination amount is zero</source>
        <translation>目的地金额为零</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1605"/>
        <source>transaction has no destination</source>
        <translation>交易没有目的地</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1607"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1698"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>未能找到合适的方式来分割交易</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1609"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1700"/>
        <source>unknown transfer error: </source>
        <translation>未知的传输错误： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1611"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1702"/>
        <source>internal error: </source>
        <translation>内部错误： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1613"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1704"/>
        <source>unexpected error: </source>
        <translation>意外错误： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1615"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1706"/>
        <source>unknown error</source>
        <translation>未知错误</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653"/>
        <source>failed to get outputs to mix</source>
        <translation>无法混合输出</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1696"/>
        <source>one of destinations is zero</source>
        <translation>目的地之一为零</translation>
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
        <translation>无法解析 txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1836"/>
        <source>no tx keys found for this txid</source>
        <translation>没有找到该 txid 的 tx 密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1860"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1869"/>
        <source>Failed to parse tx key</source>
        <translation>无法解析 tx 密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1878"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1907"/>
        <location filename="../src/wallet/api/wallet.cpp" line="1935"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2016"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2047"/>
        <source>Failed to parse address</source>
        <translation>解析地址失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2021"/>
        <source>Address must not be a subaddress</source>
        <translation>地址不能是子地址</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2052"/>
        <source>Address doesn't belong to the wallet</source>
        <translation>地址不属于钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2076"/>
        <source>The wallet must be in multisig ready state</source>
        <translation>钱包必须处于多重签名就绪状态</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2098"/>
        <source>Given string is not a key</source>
        <translation>给定的字符串不是键</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2361"/>
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>重新扫描花费只能与受信任的守护进程一起使用</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2419"/>
        <source>Invalid output: </source>
        <translation>无效输出： </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2426"/>
        <source>Failed to mark outputs as spent</source>
        <translation>无法将输出标记为已用</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2437"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2459"/>
        <source>Failed to parse output amount</source>
        <translation>无法解析输出金额</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2442"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2464"/>
        <source>Failed to parse output offset</source>
        <translation>无法解析输出偏移量</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2448"/>
        <source>Failed to mark output as spent</source>
        <translation>无法将输出标记为已用</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2470"/>
        <source>Failed to mark output as unspent</source>
        <translation>无法将输出标记为未使用</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2481"/>
        <location filename="../src/wallet/api/wallet.cpp" line="2520"/>
        <source>Failed to parse key image</source>
        <translation>关键图片解析失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2487"/>
        <source>Failed to get ring</source>
        <translation>获取戒指失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2505"/>
        <source>Failed to get rings</source>
        <translation>获取戒指失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2526"/>
        <source>Failed to set ring</source>
        <translation>设置响铃失败</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316"/>
        <source>Failed to parse address</source>
        <translation>解析地址失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323"/>
        <source>Failed to parse key</source>
        <translation>无法解析密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="331"/>
        <source>failed to verify key</source>
        <translation>验证密钥失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="341"/>
        <source>key does not match address</source>
        <translation>密钥与地址不匹配</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54"/>
        <source>yes</source>
        <translation>是的</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68"/>
        <source>no</source>
        <translation>不</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92"/>
        <source>Specify IP to bind RPC server</source>
        <translation>指定IP绑定RPC服务器</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93"/>
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>指定IPv6地址绑定RPC服务器</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94"/>
        <source>Specify IP to bind restricted RPC server</source>
        <translation>指定IP绑定受限RPC服务器</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95"/>
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>指定IPv6地址绑定受限RPC服务器</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96"/>
        <source>Allow IPv6 for RPC</source>
        <translation>允许 IPv6 进行 RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97"/>
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>忽略 RPC 的不成功 IPv4 绑定</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98"/>
        <source>Specify username[:password] required for RPC server</source>
        <translation>指定 RPC 服务器所需的用户名[:密码]</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99"/>
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>确认 rpc-bind-ip 值不是环回（本地）IP</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100"/>
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>指定逗号分隔的源列表以允许跨源资源共享</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101"/>
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>在 RPC 连接上启用 SSL：启用|禁用|自动检测</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102"/>
        <source>Path to a PEM format private key</source>
        <translation>PEM 格式私钥的路径</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103"/>
        <source>Path to a PEM format certificate</source>
        <translation>PEM 格式证书的路径</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>包含用于替换系统 CA 的串联 PEM 格式证书的文件路径。</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105"/>
        <source>List of certificate fingerprints to allow</source>
        <translation>允许的证书指纹列表</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106"/>
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>允许用户（通过--rpc-ssl-certificates）链证书</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107"/>
        <source>Allow any peer certificate</source>
        <translation>允许任何对等证书</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108"/>
        <source>Do not ban hosts on RPC errors</source>
        <translation>不要因 RPC 错误而禁止主机</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155"/>
        <location filename="../src/rpc/rpc_args.cpp" line="183"/>
        <location filename="../src/rpc/rpc_args.cpp" line="204"/>
        <location filename="../src/rpc/rpc_args.cpp" line="221"/>
        <source>Invalid IP address given for --</source>
        <translation>给定的 IP 地址无效 --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163"/>
        <location filename="../src/rpc/rpc_args.cpp" line="191"/>
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation>允许入站未加密的外部连接。请考虑使用 SSH 隧道或 SSL 代理。覆盖--</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source>Username specified with --</source>
        <translation>用 -- 指定的用户名</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242"/>
        <source> cannot be empty</source>
        <translation>不能为空</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4933"/>
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>守护程序使用与钱包 (%u) 不同的 RPC 主要版本 (%u)：%s。更新其中之一，或使用 --allow-mismatched-daemon-version。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7068"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7622"/>
        <source>Spending from address index %d
</source>
        <translation>地址索引 %d 的支出
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7083"/>
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>您的交易需要拆分为 %llu 笔交易。  这将导致每笔交易都收取交易费，总费用为 %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7089"/>
        <source>The transaction fee is %s</source>
        <translation>交易费用为%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7092"/>
        <source>, of which %s is dust from change</source>
        <translation>，其中 %s 是变化产生的灰尘</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093"/>
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>总共 %s 的灰尘变化将被发送到灰尘地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7376"/>
        <source>Not enough money in unlocked balance</source>
        <translation>未锁定余额中没有足够的钱</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421"/>
        <source>No address given</source>
        <translation>没有给出地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7487"/>
        <source>missing lockedblocks parameter</source>
        <translation>缺少lockedblocks参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497"/>
        <source>bad locked_blocks parameter</source>
        <translation>错误的locked_blocks参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7793"/>
        <source>failed to parse Payment ID</source>
        <translation>无法解析付款 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2273"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7816"/>
        <source>failed to parse key image</source>
        <translation>无法解析关键图像</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7854"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8077"/>
        <source>No outputs found</source>
        <translation>未找到输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8082"/>
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>创建了多个事务，这是不应该发生的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7864"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8087"/>
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>交易使用多个输入或不使用输入，这是不应该发生的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8168"/>
        <source>Money successfully sent, transaction: </source>
        <translation>汇款成功，交易： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989"/>
        <source>missing threshold amount</source>
        <translation>缺少阈值金额</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7995"/>
        <source>invalid amount threshold</source>
        <translation>无效金额阈值</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8579"/>
        <source>Claimed change does not go to a paid address</source>
        <translation>已领取的零钱并未发送至付费地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8584"/>
        <source>Claimed change is larger than payment to the change address</source>
        <translation>索取的找零金额大于向找零地址支付的金额</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8593"/>
        <source>Change goes to more than one address</source>
        <translation>更改会转到多个地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8615"/>
        <source>sending %s to %s</source>
        <translation>将 %s 发送至 %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8625"/>
        <source> dummy output(s)</source>
        <translation>虚拟输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8628"/>
        <source>with no destinations</source>
        <translation>没有目的地</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8637"/>
        <source>no change</source>
        <translation>没有变化</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5750"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>守护进程是本地的，假设可信</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5413"/>
        <source>Password for new watch-only wallet</source>
        <translation>新手表专用钱包的密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413"/>
        <source>FALSE</source>
        <translation>错误的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="775"/>
        <source>Commands: </source>
        <translation>命令： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="789"/>
        <source>Unknown command: </source>
        <translation>未知命令： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796"/>
        <source>Command usage: </source>
        <translation>命令用法： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="799"/>
        <source>Command description: </source>
        <translation>命令说明： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="825"/>
        <source>wallet is watch-only and has no spend key</source>
        <translation>钱包仅限手表使用，没有消费密钥</translation>
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
        <translation>硬件钱包不支持命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="933"/>
        <source>wallet is watch-only and has no seed</source>
        <translation>钱包仅限手表且无种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="865"/>
        <source>wallet is multisig but not yet finalized</source>
        <translation>钱包是多重签名的，但尚未最终确定</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="874"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="943"/>
        <source>wallet is non-deterministic and has no seed</source>
        <translation>钱包是不确定的并且没有种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898"/>
        <source>Failed to retrieve seed</source>
        <translation>获取种子失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928"/>
        <source>wallet is multisig and has no seed</source>
        <translation>钱包是多重签名的并且没有种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="953"/>
        <source>Incorrect password</source>
        <translation>密码错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1153"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1236"/>
        <source>Your original password was incorrect.</source>
        <translation>您的原始密码不正确。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="990"/>
        <source>Error with wallet rewrite: </source>
        <translation>钱包重写错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10594"/>
        <source>Random payment ID: </source>
        <translation>随机支付ID： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1011"/>
        <source>Current fee is %s %s per %s</source>
        <translation>当前费用为每 %s %s %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603"/>
        <source>Payment required, see the 'rpc_payment_info' command</source>
        <translation>需要付款，请参阅“rpc_ payment_info”命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027"/>
        <source>Error: failed to estimate backlog array size: </source>
        <translation>错误：无法估计待办事项数组大小： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1032"/>
        <source>Error: bad estimated backlog array size</source>
        <translation>错误：错误估计积压数组大小</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1044"/>
        <source> (current)</source>
        <translation>（当前的）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1047"/>
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u 块（%u 分钟）积压优先级为 %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049"/>
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u 到 %u 块（%u 到 %u 分钟）优先级 %u 积压</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1052"/>
        <source>No backlog at priority </source>
        <translation>优先无积压 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1074"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1121"/>
        <source>This wallet is already multisig</source>
        <translation>这个钱包已经是多重签名的了</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1079"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1126"/>
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>钱包仅限手表使用，无法进行多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1132"/>
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>该钱包已被使用过，请使用新钱包创建多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1093"/>
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>将此多重签名信息发送给所有其他参与者，然后使用 make_multisig &lt;threshold> &lt;信息1> [&lt;info2&gt;...] 与其他人的多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1094"/>
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet's participants </source>
        <translation>这包括私人视图密钥，因此只需向该多重签名钱包的参与者披露 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1146"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890"/>
        <source>Invalid threshold</source>
        <translation>阈值无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1168"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1247"/>
        <source>Another step is needed</source>
        <translation>还需要一个步骤</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180"/>
        <source>Error creating multisig: </source>
        <translation>创建多重签名时出错： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1187"/>
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>创建多重签名时出错：新钱包不是多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190"/>
        <source> multisig address: </source>
        <translation>多重签名地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1224"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1289"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357"/>
        <source>This wallet is not multisig</source>
        <translation>该钱包不是多重签名的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229"/>
        <source>This wallet is already finalized</source>
        <translation>这个钱包已经定型了</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259"/>
        <source>Multisig address: </source>
        <translation>多重签名地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1294"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1458"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1576"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1658"/>
        <source>This multisig wallet is not yet finalized</source>
        <translation>这个多重签名钱包尚未最终确定</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10969"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11126"/>
        <source>failed to save file </source>
        <translation>保存文件失败 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330"/>
        <source>Error exporting multisig info: </source>
        <translation>导出多重签名信息时出错： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1334"/>
        <source>Multisig info exported to </source>
        <translation>多重签名信息导出至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10882"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10908"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11159"/>
        <source>failed to read file </source>
        <translation>读取文件失败 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1406"/>
        <source>Failed to import multisig info: </source>
        <translation>导入多重签名信息失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1417"/>
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>导入多重签名信息后无法更新支出状态： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423"/>
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run &quot;rescan_spent&quot;</source>
        <translation>不受信任的守护进程，花费状态可能不正确。使用受信任的守护进程并运行“rescan_spent”</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1571"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653"/>
        <source>This is not a multisig wallet</source>
        <translation>这不是多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1503"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1512"/>
        <source>Failed to sign multisig transaction</source>
        <translation>无法签署多重签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1519"/>
        <source>Multisig error: </source>
        <translation>多重签名错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524"/>
        <source>Failed to sign multisig transaction: </source>
        <translation>无法签署多重签名交易： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1533"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1546"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8725"/>
        <source>Transaction successfully signed to file </source>
        <translation>交易已成功签署至文件 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547"/>
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>它可以通过submit_multisig转发到网络</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1608"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1679"/>
        <source>Failed to load multisig transaction from file</source>
        <translation>无法从文件加载多重签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1684"/>
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>多重签名交易仅由 %u 个签名者签名，需要 %u 个签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1623"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11369"/>
        <source>Transaction successfully submitted, transaction </source>
        <translation>交易提交成功，交易 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11370"/>
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>您可以使用“show_transfers”命令检查其状态。</translation>
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
        <translation>未知错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1700"/>
        <source>Failed to export multisig transaction to file </source>
        <translation>无法将多重签名交易导出到文件 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1704"/>
        <source>Saved exported multisig transaction file(s): </source>
        <translation>保存导出的多重签名交易文件： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1709"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2050"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6114"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6451"/>
        <source>unexpected error: </source>
        <translation>意外错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1732"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1889"/>
        <source>Invalid key image</source>
        <translation>关键图片无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1738"/>
        <source>Invalid txid</source>
        <translation>无效的txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1765"/>
        <source>Failed to get key image ring: </source>
        <translation>获取关键图像环失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780"/>
        <source>File doesn't exist</source>
        <translation>文件不存在</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802"/>
        <source>Invalid ring specification: </source>
        <translation>无效的戒指规格： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1810"/>
        <source>Invalid key image: </source>
        <translation>无效的关键图像： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1815"/>
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>环类型无效，预期为相对或绝对： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1821"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1833"/>
        <source>Error reading line: </source>
        <translation>读取行时出错： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844"/>
        <source>Invalid ring: </source>
        <translation>无效环： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1853"/>
        <source>Invalid relative ring: </source>
        <translation>无效的相对环： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1865"/>
        <source>Invalid absolute ring: </source>
        <translation>无效的绝对环： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874"/>
        <source>Failed to set ring for key image: </source>
        <translation>关键图片设置铃声失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874"/>
        <source>Continuing.</source>
        <translation>继续。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1904"/>
        <source>Missing absolute or relative keyword</source>
        <translation>缺少绝对或相对关键字</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1921"/>
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>无效索引：必须是严格正的无符号整数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929"/>
        <source>invalid index: indices wrap</source>
        <translation>无效索引：索引换行</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939"/>
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>无效索引：索引应严格按升序排列</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946"/>
        <source>failed to set ring</source>
        <translation>设置铃声失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1969"/>
        <source>Invalid key image or txid</source>
        <translation>关键图像或 txid 无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1978"/>
        <source>failed to unset ring</source>
        <translation>未能取消设置环</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2001"/>
        <source>RPC client ID: </source>
        <translation>RPC 客户端 ID： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002"/>
        <source>RPC client secret key: </source>
        <translation>RPC 客户端密钥： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2005"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434"/>
        <source>Failed to query daemon</source>
        <translation>查询守护进程失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2013"/>
        <source>Using daemon: </source>
        <translation>使用守护进程： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014"/>
        <source>Payments required for node use, current credits: </source>
        <translation>节点使用所需付款，当前积分： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2015"/>
        <source>Credits target: </source>
        <translation>学分目标： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2018"/>
        <source>Credits spent this session: </source>
        <translation>本次会议花费的学分： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2020"/>
        <source>Credit discrepancy this session: </source>
        <translation>本期信用差异： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>Difficulty: </source>
        <translation>困难： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <source>credits per hash found, </source>
        <translation>每个找到的哈希值的积分， </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>credits/hash</source>
        <translation>积分/哈希</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2030"/>
        <source>Mining for payment at %.1f H/s</source>
        <translation>挖矿费用为 %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2035"/>
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>预计开采 %u 个积分目标所需时间：%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039"/>
        <source>Mining for payment</source>
        <translation>挖矿支付</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2042"/>
        <source>Not mining</source>
        <translation>不挖矿</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2045"/>
        <source>No payment needed for node use</source>
        <translation>节点使用无需付费</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118"/>
        <source>Bad argument: </source>
        <translation>不好的论点： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118"/>
        <source>should be &quot;add&quot;</source>
        <translation>应该是“添加”</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2127"/>
        <source>Failed to open file</source>
        <translation>无法打开文件</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211"/>
        <source>Failed to save known rings: </source>
        <translation>无法保存已知环： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220"/>
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>用法：%s &lt;key_image>|&lt;pubkey></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2265"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2277"/>
        <source>Frozen: </source>
        <translation>冷冻： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279"/>
        <source>Not frozen: </source>
        <translation>未冻结： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293"/>
        <source> bytes sent</source>
        <translation>发送的字节数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294"/>
        <source> bytes received</source>
        <translation>收到的字节数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2306"/>
        <source>No known public nodes</source>
        <translation>没有已知的公共节点</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318"/>
        <source>last_seen</source>
        <translation>上次看到的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2324"/>
        <source>never</source>
        <translation>绝不</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2332"/>
        <source>Error retrieving public node list: </source>
        <translation>检索公共节点列表时出错： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2342"/>
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium 与比特币一样，是一种加密货币。也就是说，它是数字货币。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2346"/>
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>Salvium 保护您在区块链上的隐私，虽然 Salvium 一直在努力改进，</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2347"/>
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>没有任何隐私技术可以是 100% 完美的，包括 Salvium。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2348"/>
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>Salvium 无法保护您免受恶意软件的侵害，而且它可能无法像我们希望的那样有效地对抗强大的对手。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2349"/>
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>Salvium 的缺陷将来可能会被发现，并且可能会开发出攻击来窥视某些东西</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2350"/>
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>Salvium 提供的隐私层。确保安全并进行纵深防御。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439"/>
        <source>Daemon does not require payment for RPC access</source>
        <translation>Daemon 无需付费即可访问 RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447"/>
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>开始挖掘 RPC 访问：diff %llu, %f 积分/哈希%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448"/>
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>运行 stop_mining_for_rpc 停止</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550"/>
        <source>wallet is watch-only and cannot transfer</source>
        <translation>钱包只能手表，不能转账</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7117"/>
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>警告：这是非默认戒指尺寸，可能会损害您的隐私。建议使用默认值。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2595"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2611"/>
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>优先级必须为 0、1、2、3 或 4，或者以下之一： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2616"/>
        <source>could not change default priority</source>
        <translation>无法更改默认优先级</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2702"/>
        <source>invalid unit</source>
        <translation>无效单位</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2738"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800"/>
        <source>invalid count: must be an unsigned integer</source>
        <translation>无效计数：必须是无符号整数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2720"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756"/>
        <source>invalid value</source>
        <translation>无效值</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2834"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2952"/>
        <source>Invalid height</source>
        <translation>身高无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2907"/>
        <source>Invalid target</source>
        <translation>目标无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2983"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3002"/>
        <source>Invalid amount</source>
        <translation>金额无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3072"/>
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>无效参数：必须为 1/是 或 0/否</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3340"/>
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>在守护进程中开始挖掘（bg_mining 和ignore_battery 是可选布尔值）。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3343"/>
        <source>Stop mining in the daemon.</source>
        <translation>停止在守护进程中挖矿。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350"/>
        <source>Save the current blockchain data.</source>
        <translation>保存当前区块链数据。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353"/>
        <source>Synchronize the transactions and balance.</source>
        <translation>同步交易和余额。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3357"/>
        <source>Show the wallet's balance of the currently selected account.</source>
        <translation>显示当前所选账户的钱包余额。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3361"/>
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent(&quot;T&quot;|&quot;F&quot;), &quot;frozen&quot;|&quot;locked&quot;|&quot;unlocked&quot;, RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation>显示全部传入转账或按可用性和地址索引过滤的传入转账。

输出格式：
金额、已花费(“T”|“F”)、“冻结”|“锁定”|“解锁”等、RingCT、全局索引、交易哈希、地址索引、[公钥、密钥图像] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3367"/>
        <source>Show the payments for the given payment IDs.</source>
        <translation>显示给定付款 ID 的付款。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3370"/>
        <source>Show the blockchain height.</source>
        <translation>显示区块链高度。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384"/>
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>使用ring_size 1 将所有不可混合的输出发送给自己</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394"/>
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>将低于阈值的所有未锁定输出发送到某个地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3398"/>
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>将给定关键图像的单个输出发送到不进行更改的地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438"/>
        <source>Submit a signed transaction from a file.</source>
        <translation>从文件提交已签名的交易。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3442"/>
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>更改当前日志详细信息（级别必须为&lt;0-4>）。</translation>
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
        <translation>如果未指定参数，钱包将显示所有现有帐户及其余额。
如果“新”帐户为指定参数后，钱包将创建一个新帐户，其标签由提供的标签文本（可以为空）初始化。
如果“switch”是指定参数后，钱包会切换到 &lt;index> 指定的帐户。
如果“label”为指定参数后，钱包设置由 &lt;index> 指定的帐户的标签。到提供的标签文本。
如果“tag”是指定参数时，标签 &lt;tag_name>已分配给指定帐户 &lt;account_index_1>、&lt;account_index_2>、...
如果“untag”为指定参数后，分配给指定帐户的标签 &lt;account_index_1>、&lt;account_index_2> ...，被删除。
如果“tag_description”是指定参数后，标签 &lt;tag_name>被分配任意文本&lt;描述>。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3460"/>
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>将支付ID编码为当前钱包公共地址的集成地址（无参数使用随机支付ID），或将集成地址解码为标准地址和支付ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3464"/>
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>打印地址簿中的所有条目，可以选择向其中添加/删除条目。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3467"/>
        <source>Save the wallet data.</source>
        <translation>保存钱包数据。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470"/>
        <source>Save a watch-only keys file.</source>
        <translation>保存仅供观看的密钥文件。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3473"/>
        <source>Display the private view key.</source>
        <translation>显示私人查看密钥。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3476"/>
        <source>Display the private spend key.</source>
        <translation>显示私人支出密钥。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479"/>
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>显示金银币风格的助记词种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561"/>
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>显示加密的 Electrum 式助记词种子。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564"/>
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>重新扫描区块链以查找已用过的输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568"/>
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>获取给定 &lt;txid> 的交易密钥 (r)。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572"/>
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>为给定的&lt;txid>设置事务密钥（r）如果交易是由其他设备或第 3 方钱包进行的。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576"/>
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>检查发送至&lt;地址>的金额在 &lt;txid> 中。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3580"/>
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet's address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>生成签名证明资金发送到&lt;地址>;在 &lt;txid> 中，可选地使用质询字符串 &lt;message>，使用交易密钥（当 &lt;address> 不是您的钱包地址时）或查看密钥（否则），这不会泄露密钥。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3584"/>
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>检查资金流向&lt;地址>的证明在 &lt;txid> 中带有挑战字符串 &lt;message>;如果有的话。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3588"/>
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>生成一个签名，证明您生成了 &lt;txid>使用支出密钥，可选地使用质询字符串&lt;message>。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3592"/>
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>检查签名，证明签名者生成了 &lt;txid>，可选地带有质询字符串 &lt;message>。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3596"/>
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If 'all' is specified, you prove the entire sum of all of your existing accounts' balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>生成一个签名，证明您至少拥有这么多余额，可以选择使用质询字符串 &lt;message>。
如果指定“all”，您将证明所有现有帐户余额的总和。
否则，您将证明保留高于&lt;金额>的最小可能金额可在您当前的帐户中使用。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602"/>
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>检查签名，证明 &lt;address> 的所有者至少保存这么多，可选地带有挑战字符串&lt;message>。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3623"/>
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>显示可选金额范围内指定地址的未花费输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3631"/>
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>为 &lt;txid> 设置任意字符串注释。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3635"/>
        <source>Get a string note for a txid.</source>
        <translation>获取 txid 的字符串注释。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3639"/>
        <source>Set an arbitrary description for the wallet.</source>
        <translation>为钱包设置任意描述。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3643"/>
        <source>Get the description of the wallet.</source>
        <translation>获取钱包的描述。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3646"/>
        <source>Show the wallet's status.</source>
        <translation>显示钱包的状态。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3649"/>
        <source>Show the wallet's information.</source>
        <translation>显示钱包的信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3657"/>
        <source>Verify a signature on the contents of a file.</source>
        <translation>验证文件内容的签名。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3665"/>
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>导入已签名的密钥映像列表并验证其使用状态。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3673"/>
        <source>Attempts to reconnect HW wallet.</source>
        <translation>尝试重新连接硬件钱包。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677"/>
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>导出该钱包拥有的一组输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3681"/>
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>导入该钱包拥有的一组输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3685"/>
        <source>Show information about a transfer to/from this address.</source>
        <translation>显示有关转入/转出该地址的信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3688"/>
        <source>Change the wallet's password.</source>
        <translation>更改钱包密码。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3695"/>
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>打印有关当前费用和交易积压的信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3697"/>
        <source>Export data needed to create a multisig wallet</source>
        <translation>导出创建多重签名钱包所需的数据</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3700"/>
        <source>Turn this wallet into a multisig wallet</source>
        <translation>将此钱包变成多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3708"/>
        <source>Export multisig info for other participants</source>
        <translation>导出其他参与者的多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3712"/>
        <source>Import multisig info from other participants</source>
        <translation>从其他参与者导入多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3716"/>
        <source>Sign a multisig transaction from a file</source>
        <translation>从文件签署多重签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3720"/>
        <source>Submit a signed multisig transaction from a file</source>
        <translation>从文件提交已签名的多重签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3724"/>
        <source>Export a signed multisig transaction to a file</source>
        <translation>将已签名的多重签名交易导出到文件</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3815"/>
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, &quot;absolute&quot;, list of rings</source>
        <translation>打印用于花费给定密钥图像或交易的环（如果环大小 > 1）

输出格式：
密钥图像、“绝对”、环列表</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3821"/>
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>设置用于给定关键图像的环，以便可以在 fork 中重复使用它</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3825"/>
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>取消设置用于给定关键图像或交易的环</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3829"/>
        <source>Save known rings to the shared rings database</source>
        <translation>将已知环保存到共享环数据库</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845"/>
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>按关键图像冻结单个输出，这样就不会使用它</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3849"/>
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>按关键图像解冻单个输出，以便可以再次使用它</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3853"/>
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>检查给定输出当前是否被关键图像冻结</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3861"/>
        <source>Prints simple network stats</source>
        <translation>打印简单的网络统计信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3865"/>
        <source>Lists known public nodes</source>
        <translation>列出已知公共节点</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3869"/>
        <source>Prints basic info about Salvium for first time users</source>
        <translation>为首次用户打印有关 Salvium 的基本信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3873"/>
        <source>Returns version information</source>
        <translation>返回版本信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3877"/>
        <source>Get info about RPC payments to current node</source>
        <translation>获取当前节点的 RPC 支付信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881"/>
        <source>Start mining to pay for RPC access</source>
        <translation>开始挖矿以支付 RPC 访问费用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3885"/>
        <source>Stop mining to pay for RPC access</source>
        <translation>停止挖矿以支付 RPC 访问费用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3893"/>
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>显示有关&lt;命令>的帮助部分或文档。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984"/>
        <source>needs an argument</source>
        <translation>需要一个论点</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998"/>
        <source>set seed: needs an argument. available options: language</source>
        <translation>设置种子：需要一个参数。可用选项：语言</translation>
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
        <translation>0 或 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4011"/>
        <source>full (slowest, no assumptions); optimize-coinbase (fast, assumes the whole coinbase is paid to a single address); no-coinbase (fastest, assumes we receive no coinbase transaction), default (same as optimize-coinbase)</source>
        <translation>满（最慢，无假设）； optimize-coinbase（快速，假设整个 coinbase 支付到一个地址）； no-coinbase（最快，假设我们没有收到 coinbase 交易），默认（与 optimization-coinbase 相同）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4012"/>
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0、1、2、3 或 4，或其中之一 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4013"/>
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2（或从不|操作|解密）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4015"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4027"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040"/>
        <source>unsigned integer</source>
        <translation>无符号整数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4017"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4029"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4030"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>amount</source>
        <translation>数量</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4022"/>
        <source>block height</source>
        <translation>区块高度</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4026"/>
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;主要>：&lt;次要></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4034"/>
        <source>1/yes or 0/no</source>
        <translation>1/是或 0/否</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4039"/>
        <source>floating point &gt;= 0</source>
        <translation>浮点数 >= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044"/>
        <source>set: unrecognized argument(s)</source>
        <translation>设置：无法识别的参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4102"/>
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>钱包名称无效。请重试或使用 Ctrl-C 退出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4114"/>
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>尝试生成或恢复钱包，但指定的文件存在。  退出以避免被覆盖的风险。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4119"/>
        <source>Wallet and key files found, loading...</source>
        <translation>已找到钱包和密钥文件，正在加载...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4125"/>
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>找到密钥文件，但找不到钱包文件。正在再生...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4131"/>
        <source>Key file not found. Failed to open wallet: </source>
        <translation>未找到密钥文件。打开钱包失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4139"/>
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>未找到具有该名称的钱包。确认创建新钱包，名称为： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150"/>
        <source>Generating new wallet...</source>
        <translation>正在生成新钱包...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231"/>
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>无法指定 --testnet 和 --stagenet 之一以上</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4247"/>
        <source>can't specify more than one of --generate-new-wallet=&quot;wallet_name&quot;, --wallet-file=&quot;wallet_name&quot;, --generate-from-view-key=&quot;wallet_name&quot;, --generate-from-spend-key=&quot;wallet_name&quot;, --generate-from-keys=&quot;wallet_name&quot;, --generate-from-multisig-keys=&quot;wallet_name&quot;, --generate-from-json=&quot;jsonfilename&quot; and --generate-from-device=&quot;wallet_name&quot;</source>
        <translation>无法指定 --generate-new-wallet=“wallet_name”、--wallet-file=“wallet_name”、--generate-from-view-key=“wallet_name”、--generate 之一以上-from-spend-key=“wallet_name”, --generate-from-keys=“wallet_name”, --generate-from-multisig-keys=“wallet_name”, --generate-from-json=” json文件名”和 --generate-from-device=“wallet_name”</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277"/>
        <source>can't specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>不能同时指定 --restore-definistic-wallet 或 --restore-multisig-wallet 和 --non-definistic</translation>
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
        <translation>使用 --electrum-seed="multisig seeds here" 指定恢复参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314"/>
        <source>specify a recovery parameter with the --electrum-seed=&quot;words list here&quot;</source>
        <translation>使用 --electrum-seed="words list here" 指定恢复参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328"/>
        <source>Multisig seed failed verification</source>
        <translation>多重签名种子验证失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Electrum 风格的单词列表验证失败</translation>
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
        <translation>未提供数据，已取消</translation>
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
        <translation>解析地址失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4368"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4445"/>
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>该地址是子地址，此处不能使用。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4383"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4475"/>
        <source>failed to parse view key secret key</source>
        <translation>无法解析查看密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4392"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4492"/>
        <source>failed to verify view key secret key</source>
        <translation>验证查看密钥秘钥失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4396"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4496"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4578"/>
        <source>view key does not match standard address</source>
        <translation>查看键与标准地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4401"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4422"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4500"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4661"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4693"/>
        <source>account creation failed</source>
        <translation>帐户创建失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4418"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4460"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4603"/>
        <source>failed to parse spend key secret key</source>
        <translation>无法解析花费密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4484"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4623"/>
        <source>failed to verify spend key secret key</source>
        <translation>未能验证花费密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4488"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628"/>
        <source>spend key does not match standard address</source>
        <translation>花费密钥与标准地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4523"/>
        <source>Error: expected M/N, but got: </source>
        <translation>错误：预期 M/N，但得到： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4528"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>错误：预期 N > 1 且 N &lt;= M，但得到： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4533"/>
        <source>Error: M/N is currently unsupported. </source>
        <translation>错误：当前不支持 M/N。 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4536"/>
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>正在从 %u 个多重签名钱包密钥（共 %u 个）生成主钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4565"/>
        <source>failed to parse secret view key</source>
        <translation>无法解析秘密视图密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4573"/>
        <source>failed to verify secret view key</source>
        <translation>无法验证秘密视图密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4616"/>
        <source>Error: M/N is currently unsupported</source>
        <translation>错误：目前不支持 M/N</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4668"/>
        <source>No restore height is specified.</source>
        <translation>未指定恢复高度。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4669"/>
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>假设您正在创建一个新帐户，将从当前估计的区块链高度进行恢复。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674"/>
        <source>account creation aborted</source>
        <translation>帐户创建已中止</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4684"/>
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>使用 --generate-new-wallet （不是 --wallet-file）指定钱包路径</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4748"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4768"/>
        <source>bad m_restore_height parameter: </source>
        <translation>错误的 m_restore_height 参数： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759"/>
        <source>Restore height is: </source>
        <translation>恢复高度为： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782"/>
        <source>Restore height </source>
        <translation>恢复高度 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798"/>
        <source>can't specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>不能同时指定 --subaddress-lookahead 和 --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802"/>
        <source>failed to open account</source>
        <translation>开户失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5568"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5791"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8954"/>
        <source>wallet is null</source>
        <translation>钱包为空</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841"/>
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>无法初始化环形数据库：隐私增强功能将处于非活动状态</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4920"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4924"/>
        <source>wallet failed to connect to daemon: </source>
        <translation>钱包无法连接到守护进程： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4925"/>
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the 'set_daemon' command.</source>
        <translation>守护进程未启动或传递了错误的端口。请确保守护程序正在运行或使用“set_daemon”命令更改守护程序地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4954"/>
        <source>List of available languages for your wallet's seed:</source>
        <translation>您钱包种子的可用语言列表：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4955"/>
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>如果您的显示冻结，请使用 ^C 盲目退出，然后使用 --use-english-language-names 再次运行</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4973"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4978"/>
        <source>invalid language choice entered. Please try again.
</source>
        <translation>输入的语言选择无效。请重试。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4992"/>
        <source>invalid password</source>
        <translation>密码无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5040"/>
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>您一直在使用已弃用的钱包版本。请使用我们提供的新种子。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5056"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5131"/>
        <source>Generated new wallet: </source>
        <translation>生成的新钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5059"/>
        <source>View key: </source>
        <translation>查看键： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5136"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5244"/>
        <source>failed to generate new wallet: </source>
        <translation>生成新钱包失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5175"/>
        <source>Generated new wallet on hw device: </source>
        <translation>在硬件设备上生成新钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5236"/>
        <source>failed to generate new mutlisig wallet</source>
        <translation>无法生成新的 mutlisig 钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5239"/>
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>生成了新的 %u/%u 多重签名钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5255"/>
        <source>wallet file path not valid: </source>
        <translation>钱包文件路径无效： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5265"/>
        <source>Key file not found. Failed to open wallet</source>
        <translation>未找到密钥文件。打开钱包失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5286"/>
        <source>Opened watch-only wallet</source>
        <translation>打开手表专用钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5288"/>
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>打开 %u/%u 多重签名钱包%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5290"/>
        <source>Opened wallet</source>
        <translation>打开钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5308"/>
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>您一直在使用已弃用的钱包版本。请继续升级您的钱包。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5323"/>
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>您一直在使用已弃用的钱包版本。您的钱包文件格式正在升级。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5331"/>
        <source>failed to load wallet: </source>
        <translation>加载钱包失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5350"/>
        <source>Use &quot;help &lt;command&gt;&quot; to see a command's documentation.
</source>
        <translation>使用“帮助 &lt;命令>”查看命令的文档。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5372"/>
        <source>failed to deinitialize wallet</source>
        <translation>钱包初始化失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5395"/>
        <source>Wallet data saved</source>
        <translation>钱包数据已保存</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409"/>
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>钱包是多重签名的，无法保存仅限手表的版本</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5417"/>
        <source>failed to read wallet password</source>
        <translation>读取钱包密码失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5425"/>
        <source>Watch only wallet saved as: </source>
        <translation>仅观看钱包另存为： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5429"/>
        <source>Failed to save watch only wallet: </source>
        <translation>无法保存仅限手表的钱包： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5559"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6414"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10993"/>
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>此命令需要受信任的守护进程。使用 --trusted-daemon 启用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5608"/>
        <source>Mining started in daemon</source>
        <translation>在守护进程中开始挖矿</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610"/>
        <source>mining has NOT been started: </source>
        <translation>挖矿尚未开始： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5630"/>
        <source>Mining stopped in daemon</source>
        <translation>挖矿在守护进程中停止</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632"/>
        <source>mining has NOT been stopped: </source>
        <translation>采矿尚未停止： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5687"/>
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>意外的数组长度 - 退出 simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763"/>
        <source>trusted</source>
        <translation>值得信赖的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763"/>
        <source>untrusted</source>
        <translation>不受信任的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5779"/>
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>这似乎不是有效的守护程序 URL。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5799"/>
        <source>Blockchain saved</source>
        <translation>区块链已保存</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5801"/>
        <source>blockchain can't be saved: </source>
        <translation>区块链无法保存： </translation>
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
        <translation>高度 </translation>
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
        <translation>花费 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952"/>
        <source>Enter password</source>
        <translation>输入密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6048"/>
        <source>Starting refresh...</source>
        <translation>开始刷新...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6070"/>
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>自重新扫描开始以来收到的新传输。关键图像不完整。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077"/>
        <source>Refresh done, blocks received: </source>
        <translation>刷新完成，收到块： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6085"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6428"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>守护进程正忙。请稍后重试。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4816"/>
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>RPC 客户端密钥应为 32 字节，十六进制格式</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5535"/>
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>启用后台挖掘后，守护进程将在空闲且不使用电池时进行挖掘。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5657"/>
        <source>Error checking daemon RPC access prices</source>
        <translation>检查守护进程 RPC 访问价格时出错</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5663"/>
        <source>Error checking daemon RPC access prices: </source>
        <translation>检查守护进程 RPC 访问价格时出错： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5759"/>
        <source>Failed to connect to daemon</source>
        <translation>无法连接到守护进程</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771"/>
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>守护进程 RPC 积分/哈希值少于声称的值。要么这个守护进程在作弊，要么它最近改变了它的设置。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772"/>
        <source>Claimed: </source>
        <translation>声称： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5773"/>
        <source>Actual: </source>
        <translation>实际的： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6089"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6432"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>没有与守护进程的连接。请确保守护进程正在运行。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6436"/>
        <source>payment required.</source>
        <translation>需要付款。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6099"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6446"/>
        <source>RPC error: </source>
        <translation>远程过程调用错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6104"/>
        <source>refresh error: </source>
        <translation>刷新错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6109"/>
        <source>internal error: </source>
        <translation>内部错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124"/>
        <source>refresh failed: </source>
        <translation>刷新失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124"/>
        <source>Blocks received: </source>
        <translation>收到的块： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6153"/>
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation>（某些拥有的输出具有部分关键图像 - 需要 import_multisig_info）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <source>Currently selected account: [</source>
        <translation>当前选择的帐户：[</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156"/>
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158"/>
        <source>(No tag assigned)</source>
        <translation>（未分配标签）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158"/>
        <source>Tag: </source>
        <translation>标签： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6172"/>
        <source>unlocked balance: </source>
        <translation>解锁余额： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177"/>
        <source>Balance per address:</source>
        <translation>每个地址的余额：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Balance</source>
        <translation>平衡</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Unlocked balance</source>
        <translation>解锁余额</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <source>Outputs</source>
        <translation>输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11612"/>
        <source>Label</source>
        <translation>标签</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6186"/>
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277"/>
        <source>pubkey</source>
        <translation>公钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277"/>
        <source>key image</source>
        <translation>关键图像</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>spent</source>
        <translation>花费</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>unlocked</source>
        <translation>解锁</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>ringct</source>
        <translation>环形</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>global index</source>
        <translation>全球指数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <source>tx id</source>
        <translation>交易 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>addr index</source>
        <translation>地址索引</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6294"/>
        <source>Used at heights: </source>
        <translation>高处使用： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <source>T</source>
        <translation>时间</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299"/>
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <source>locked</source>
        <translation>锁定</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300"/>
        <source>[frozen]</source>
        <translation>[冻结]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301"/>
        <source>RingCT</source>
        <translation>环形CT</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301"/>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6314"/>
        <source>No incoming transfers</source>
        <translation>无传入转账</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318"/>
        <source>No incoming available transfers</source>
        <translation>没有可用的传入转账</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322"/>
        <source>No incoming unavailable transfers</source>
        <translation>没有传入的不可用传输</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>payment</source>
        <translation>支付</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>transaction</source>
        <translation>交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>height</source>
        <translation>高度</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346"/>
        <source>unlock time</source>
        <translation>解锁时间</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6358"/>
        <source>No payments with id </source>
        <translation>没有id付款 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6380"/>
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>付款 ID 的格式无效，应为 16 或 64 个字符的十六进制字符串： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6504"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7509"/>
        <source>failed to get blockchain height: </source>
        <translation>无法获取区块链高度： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441"/>
        <source>failed to get spent status</source>
        <translation>未能获得已用状态</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6513"/>
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
事务 %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6529"/>
        <source>failed to find construction data for tx input</source>
        <translation>未能找到 tx 输入的构造数据</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6553"/>
        <source>failed to get output: </source>
        <translation>未能获得输出： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6561"/>
        <source>output key's originating block height shouldn't be higher than the blockchain height</source>
        <translation>输出密钥的原始块高度不应高于区块链高度</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6566"/>
        <source>
Originating block heights: </source>
        <translation>
原始块高度： </translation>
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
警告：使用的一些输入键来自 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594"/>
        <source>the same transaction</source>
        <translation>同一笔交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594"/>
        <source>blocks that are temporally very close</source>
        <translation>时间上非常接近的块</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6748"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741"/>
        <source>Ring size must not be 0</source>
        <translation>戒指尺寸不能为 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6760"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7473"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7753"/>
        <source>ring size %u is too small, minimum is %u</source>
        <translation>戒指尺寸 %u 太小，最小尺寸为 %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6765"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758"/>
        <source>ring size %u is too large, maximum is %u</source>
        <translation>戒指尺寸 %u 太大，最大为 %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772"/>
        <source>wrong number of arguments</source>
        <translation>参数数量错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6789"/>
        <source>payment id failed to encode</source>
        <translation>付款 ID 编码失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6808"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7502"/>
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>锁定区块太高，最多 1000000（约 4 年）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6856"/>
        <source>failed to parse short payment ID from URI</source>
        <translation>无法从 URI 解析短支付 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6881"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883"/>
        <source>Invalid last argument: </source>
        <translation>最后一个参数无效： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6901"/>
        <source>a single transaction cannot use more than one payment id</source>
        <translation>一笔交易不能使用多个付款 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917"/>
        <source>failed to parse payment id, though it was detected</source>
        <translation>尽管检测到，但无法解析付款 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7004"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014"/>
        <source>Is this okay anyway?</source>
        <translation>无论如何，这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7009"/>
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>目前该费用水平有 %u 块积压。这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7323"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7631"/>
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>在 %llu 笔交易中扫除 %s，总费用为 %s。  这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7329"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7637"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7874"/>
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>扫 %s，总费用为 %s。  这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7377"/>
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by &quot;rescan_spent&quot;.  Is this okay?</source>
        <translation>丢弃 %s 无法花费的不可混合输出，这可以通过“rescan_spent”撤消。  这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7522"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7767"/>
        <source>Failed to parse number of outputs</source>
        <translation>无法解析输出数量</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7527"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7772"/>
        <source>Amount of outputs should be greater than 0</source>
        <translation>输出数量应大于0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7551"/>
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>付款 ID 的格式无效，应为 16 或 64 个字符的十六进制字符串： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6803"/>
        <source>bad locked_blocks parameter:</source>
        <translation>错误的locked_blocks参数：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7571"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7831"/>
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>一笔交易不能使用多个付款 ID： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6923"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7580"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7799"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7839"/>
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>尽管解码正确，但无法设置付款 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1170"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249"/>
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>将此多重签名信息发送给所有其他参与者，然后使用 Exchange_multisig_keys &lt;info1> [&lt;info2&gt;...] 与其他人的多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1258"/>
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation>多重签名钱包已成功创建。当前钱包类型： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264"/>
        <source>Failed to perform multisig keys exchange: </source>
        <translation>无法执行多重签名密钥交换： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599"/>
        <source>Failed to load multisig transaction from MMS</source>
        <translation>无法从 MMS 加载多重签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2139"/>
        <source>Failed to mark output spent: </source>
        <translation>无法标记已用输出： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2166"/>
        <source>Failed to mark output unspent: </source>
        <translation>无法将输出标记为未使用： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2190"/>
        <source>Spent: </source>
        <translation>花费： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192"/>
        <source>Not spent: </source>
        <translation>未花费： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2196"/>
        <source>Failed to check whether output is spent: </source>
        <translation>无法检查输出是否已用： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2385"/>
        <source>Please confirm the transaction on the device</source>
        <translation>请在设备上确认交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091"/>
        <source>Device name not specified</source>
        <translation>未指定设备名称</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100"/>
        <source>Device reconnect failed</source>
        <translation>设备重新连接失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105"/>
        <source>Device reconnect failed: </source>
        <translation>设备重新连接失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3619"/>
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>将可选高度范围内的传入/传出传输导出为 CSV。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627"/>
        <source>Rescan the blockchain from scratch. If &quot;hard&quot; is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>从头开始重新扫描区块链。如果“硬”的话如果指定，您将丢失无法从区块链本身恢复的任何信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3661"/>
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>将一组签名的关键图像导出到&lt;文件名>。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3669"/>
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>与硬件钱包同步关键图像。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3692"/>
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>生成新的随机全尺寸付款 ID（已过时）。这些将在区块链上未加密，请参阅 Integrated_address 以获取加密的短支付 ID。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3704"/>
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>执行额外的多重签名密钥交换轮次。任意 M/N 多重签名钱包所需</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3736"/>
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>初始化并配置 MMS，M/N = 所需签名者数量/授权签名者数量多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740"/>
        <source>Display current MMS configuration</source>
        <translation>显示当前彩信配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3744"/>
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>设置或修改授权签名者信息（单字标签、传输地址、Salvium 地址），或列出所有签名者</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3748"/>
        <source>List all messages</source>
        <translation>列出所有消息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3752"/>
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using 'sync' processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>根据钱包状态评估下一个可能的多重签名相关操作，并执行或提供选择
通过使用“同步”处理带有多重签名同步信息的等待消息，无论钱包状态如何</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757"/>
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like &quot;stale data&quot; errors</source>
        <translation>无论钱包状态如何，都强制生成多重签名同步信息，以从“陈旧数据”等特殊情况中恢复。错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3761"/>
        <source>Initiate transfer with MMS support; arguments identical to normal 'transfer' command arguments, for info see there</source>
        <translation>通过彩信支持发起传输；参数与普通“传输”命令参数相同，有关信息，请参阅此处</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3765"/>
        <source>Delete a single message by giving its id, or delete all messages by using 'all'</source>
        <translation>通过提供 ID 来删除单条消息，或使用“all”删除所有消息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3769"/>
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>通过提供 ID 来发送单个消息，或发送所有等待消息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3773"/>
        <source>Check right away for new messages to receive</source>
        <translation>立即检查是否有新消息接收</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3777"/>
        <source>Write the content of a message to a file &quot;mms_message_content&quot;</source>
        <translation>将消息内容写入文件“mms_message_content”</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3781"/>
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>向授权签名者发送一行消息（通过其标签进行识别），或显示任何等待的未读注释</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785"/>
        <source>Show detailed info about a single message</source>
        <translation>显示有关单条消息的详细信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3789"/>
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation>可用选项:
 自动发送 &lt;1|0>
 是否立即自动发送新生成的消息。
 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795"/>
        <source>Send completed signer config to all other authorized signers</source>
        <translation>将完整的签名者配置发送给所有其他授权签名者</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3799"/>
        <source>Start auto-config at the auto-config manager's wallet by issuing auto-config tokens and optionally set others' labels</source>
        <translation>通过发布自动配置代币并可选择设置其他人的标签，在自动配置管理者的钱包上启动自动配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3807"/>
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>删除所有自动配置令牌并中止自动配置过程</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3811"/>
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>使用从自动配置管理器收到的令牌启动自动配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833"/>
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>将输出标记为已用，这样它们就不会被选为环中的假输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837"/>
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>将输出标记为未使用，因此它可能会被选为环中的假输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3841"/>
        <source>Checks whether an output is marked as spent</source>
        <translation>检查输出是否被标记为已用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4035"/>
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;设备名称[:设备规格]></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4063"/>
        <source>wrong number range, use: %s</source>
        <translation>数字范围错误，请使用：%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4168"/>
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>注意：以下 %s 可用于恢复对您钱包的访问。把它们写下来并存放在安全可靠的地方。请不要将它们存储在您直接控制之外的电子邮件或文件存储服务中。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170"/>
        <source>string</source>
        <translation>细绳</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170"/>
        <source>25 words</source>
        <translation>25个字</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4593"/>
        <source>Secret spend key (%u of %u)</source>
        <translation>秘密支出密钥（%u，共 %u）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4670"/>
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>如果您想从特定高度恢复已设置的帐户，请使用 --restore-height 或 --restore-date。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4672"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4760"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7119"/>
        <source>Is this okay?</source>
        <translation>这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4783"/>
        <source>Still apply restore height?</source>
        <translation>还用恢复高度吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4964"/>
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>输入与您选择的语言相对应的数字</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5967"/>
        <source>Device requires attention</source>
        <translation>设备需要注意</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5973"/>
        <source>Enter device PIN</source>
        <translation>输入设备 PIN 码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5975"/>
        <source>Failed to read device PIN</source>
        <translation>无法读取设备 PIN</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5985"/>
        <source>Please enter the device passphrase on the device</source>
        <translation>请在设备上输入设备密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5992"/>
        <source>Enter device passphrase</source>
        <translation>输入设备密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5994"/>
        <source>Failed to read device passphrase</source>
        <translation>无法读取设备密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6018"/>
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation>基于硬件的钱包的第一次刷新已完成并已收到资金。需要hw_key_images_sync。 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5537"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020"/>
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation>你想现在就做吗？ （是/是/否/否）： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2366"/>
        <source>Unknown command '%s', try 'help'</source>
        <translation>未知命令“%s”，请尝试“帮助”</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3040"/>
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>Windows 上禁用不活动锁定超时</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3054"/>
        <source>Invalid number of seconds</source>
        <translation>秒数无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116"/>
        <source>Export format not specified</source>
        <translation>未指定导出格式</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3130"/>
        <source>Export format not recognized.</source>
        <translation>无法识别导出格式。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3482"/>
        <source>Display the restore height</source>
        <translation>显示恢复高度</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3857"/>
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>锁定钱包控制台，需要钱包密码才能继续</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4033"/>
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>无符号整数（秒，0 表示禁用）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036"/>
        <source>&quot;binary&quot; or &quot;ascii&quot;</source>
        <translation>“二进制”或“ascii”</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4824"/>
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>警告：在 %s 使用不受信任的守护程序</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4825"/>
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>使用第三方守护程序可能会损害您的安全和隐私</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4828"/>
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>使用您自己的而不使用 SSL 会将您的 RPC 流量暴露给监控</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4829"/>
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>强烈建议您使用自己的守护进程连接到 Salvium 网络</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4830"/>
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>如果您或您信任的人正在操作此守护程序，您可以使用 --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4837"/>
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>此外，守护进程在引导模式下运行时也不太安全</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850"/>
        <source>If you are new to Salvium, type &quot;welcome&quot; for a brief overview.</source>
        <translation>如果您是 Salvium 新手，请输入“欢迎”进行简要概述。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5003"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5101"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5149"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5192"/>
        <source>Error creating wallet: </source>
        <translation>创建钱包时出错： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477"/>
        <source>Failed to query mining status: </source>
        <translation>查询挖矿状态失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5488"/>
        <source>Failed to setup background mining: </source>
        <translation>无法设置后台挖掘： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5464"/>
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>启用后台挖掘。感谢您对 Salvium 网络的支持。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5492"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5500"/>
        <source>Background mining not enabled. Run &quot;set setup-background-mining 1&quot; to change.</source>
        <translation>未启用后台挖掘。运行“set setup-background-mining 1”改变。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5506"/>
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>使用不受信任的守护进程，跳过后台挖掘检查</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5534"/>
        <source>The daemon is not set up to background mine.</source>
        <translation>该守护进程未设置为后台我的。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5541"/>
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>未启用后台挖掘。将 setup-background-mining 设置为 1 即可更改。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5903"/>
        <source>NOTE: This transaction is locked, see details with: show_transfer </source>
        <translation>注意：此交易已被锁定，请通过以下方式查看详细信息：show_transfer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6022"/>
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>hw_key_images_sync 已跳过。在传输之前手动运行命令。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6247"/>
        <source>Invalid keyword: </source>
        <translation>无效关键字： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6535"/>
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
输入 %llu/%llu (%s): 金额=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628"/>
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>交易花费了不止一个非常旧的输出。如果分开发送，隐私会更好。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6629"/>
        <source>Spend them now anyway?</source>
        <translation>现在还是把它们花掉吧？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6871"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8465"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9215"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9784"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9792"/>
        <source>amount is wrong: </source>
        <translation>金额错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6872"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8465"/>
        <source>expected number from 0 to </source>
        <translation>预期数量从 0 到 </translation>
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
        <translation>交易已取消。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6981"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7595"/>
        <source>No outputs found, or daemon is not ready</source>
        <translation>未找到输出，或守护进程未准备好</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2343"/>
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>与比特币不同，您的 Salvium 交易和余额是私密的，默认情况下不对世界可见。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2344"/>
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>但是，如果您愿意，您可以选择将这些内容提供给选定的各方。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5895"/>
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>注意：此交易使用加密的支付 ID：请考虑使用子地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5900"/>
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>警告：此交易使用未加密的付款 ID：这些已过时并被忽略。请改用子地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014"/>
        <source>Failed to check for backlog: </source>
        <translation>未能检查积压： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7063"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7617"/>
        <source>
Transaction </source>
        <translation>
交易 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7070"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7624"/>
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>警告：多个地址的输出一起使用，这可能会损害您的隐私。
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
        <translation>未签名的交易已成功写入 MMS</translation>
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
        <translation>无法将交易写入文件</translation>
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
        <translation>未签名的交易已成功写入文件： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7161"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7674"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7909"/>
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>无法使用硬件钱包冷签名交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7308"/>
        <source>No unmixable outputs found</source>
        <translation>未找到不可混合的输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321"/>
        <source>Sweeping </source>
        <translation>扫地 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8476"/>
        <source>Failed to parse donation address: </source>
        <translation>无法解析捐赠地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8492"/>
        <source>Donating %s %s to %s.</source>
        <translation>将 %s %s 捐赠给 %s。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8640"/>
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>已加载 %lu 笔交易，费用为 %s，费用为 %s，%s，%s，最小环大小为 %lu，%s。 %s这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>direction</source>
        <translation>方向</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>timestamp</source>
        <translation>时间戳</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>running balance</source>
        <translation>运行平衡</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>hash</source>
        <translation>散列</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>payment ID</source>
        <translation>付款ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>fee</source>
        <translation>费用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>destination</source>
        <translation>目的地</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>index</source>
        <translation>指数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>note</source>
        <translation>笔记</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9756"/>
        <source>CSV exported to </source>
        <translation>CSV 导出到 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9941"/>
        <source>Rescan anyway?</source>
        <translation>还是重新扫描？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9952"/>
        <source>Warning: your restore height is higher than wallet restore height: </source>
        <translation>警告：您的恢复高度高于钱包恢复高度： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9953"/>
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>还是要重新扫描吗？ （是/是/否/否）： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9974"/>
        <source>MMS received new message</source>
        <translation>彩信收到新消息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10143"/>
        <source>locked due to inactivity</source>
        <translation>由于不活动而被锁定</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10545"/>
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;索引>超出范围</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10821"/>
        <source>Normal</source>
        <translation>普通的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10822"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11670"/>
        <source>Type: </source>
        <translation>类型： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6680"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10823"/>
        <source>Network type: </source>
        <translation>网络类型： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1402"/>
        <source>Multisig info imported. Number of outputs updated: </source>
        <translation>导入多重签名信息。更新的输出数量： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1750"/>
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>关键图像要么未花费，要么与戒指尺寸 1 一起花费</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334"/>
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>这些节点中的大多数可能是间谍。除非通过 Tor 或 I2P 连接，否则不应使用它们</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340"/>
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>欢迎来到 Salvium，这是一种经过改进的新型私人加密货币。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2352"/>
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>欢迎来到 Salvium 和合规的财务隐私。欲了解更多信息，请参阅 https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2471"/>
        <source>invalid index: must be an unsigned integer</source>
        <translation>无效索引：必须是无符号整数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2476"/>
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;子地址索引>超出范围</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514"/>
        <source>Failed to generate QR code, input too large</source>
        <translation>生成二维码失败，输入太大</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3167"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3186"/>
        <source>Value not specified</source>
        <translation>未指定值</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3157"/>
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>警告：已弃用的格式使用 boost 序列化，这会导致缓冲区溢出和崩溃。仅从您信任的来源加载已弃用的格式。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3206"/>
        <source>Important commands:</source>
        <translation>重要命令：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3208"/>
        <source>&quot;welcome&quot; - Show welcome message.</source>
        <translation>“欢迎” - 显示欢迎信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3209"/>
        <source>&quot;help all&quot; - Show the list of all available commands.</source>
        <translation>“帮助所有人” - 显示所有可用命令的列表。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3210"/>
        <source>&quot;help &lt;command&gt;&quot; - Show a command's documentation.</source>
        <translation>“帮助&lt;命令>” - 显示命令的文档。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3211"/>
        <source>&quot;apropos &lt;keyword&gt;&quot; - Show commands related to a keyword.</source>
        <translation>“apropos &lt;关键字>” - 显示与关键字相关的命令。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213"/>
        <source>&quot;wallet_info&quot; - Show wallet main address and other info.</source>
        <translation>“钱包信息” - 显示钱包主地址和其他信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3214"/>
        <source>&quot;balance&quot; - Show balance.</source>
        <translation>“平衡” - 显示平衡。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3215"/>
        <source>&quot;address all&quot; - Show all addresses.</source>
        <translation>“解决所有问题” - 显示所有地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3216"/>
        <source>&quot;address new&quot; - Create new subaddress.</source>
        <translation>“新地址” - 创建新的子地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3217"/>
        <source>&quot;transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]&quot; - Send SAL to an address.</source>
        <translation>“转账&lt;地址>” &lt;金额> [&lt;asset_type>]” - 将 SAL 发送到某个地址。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218"/>
        <source>&quot;return_payment &lt;tx_hash&gt;&quot; - Return a previously-received amount to sender.</source>
        <translation>“return_ payment &lt;tx_hash>” - 将先前收到的金额退还给发件人。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3219"/>
        <source>&quot;burn &lt;amount&gt; &lt;asset_type&gt;&quot; - destroy coins forever.</source>
        <translation>“燃烧&lt;数量>” &lt;资产类型>” - 永远销毁硬币。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3220"/>
        <source>&quot;convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]&quot; - convert between coin types.</source>
        <translation>“转换&lt;金额>” &lt;源资产> &lt;目标资产> [&lt;slippage_limit&gt;]” - 硬币类型之间的转换。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221"/>
        <source>&quot;stake &lt;amount&gt;&quot; - stake SAL for 30 days to earn yield.</source>
        <translation>“赌注&lt;金额&gt;” - 质押 SAL 30 天以获得收益。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3222"/>
        <source>&quot;price_info&quot; - Display current pricing information for supported assets.</source>
        <translation>“价格信息” - 显示受支持资产的当前定价信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3223"/>
        <source>&quot;supply_info&quot; - Display circulating supply information.</source>
        <translation>“供应信息” - 显示流通供应信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3224"/>
        <source>&quot;yield_info&quot; - Display current stats on Salvium staking / yield.</source>
        <translation>“产量信息” - 显示 Salvium 质押/收益的当前统计数据。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3225"/>
        <source>&quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&quot; - Show transactions.</source>
        <translation>“show_transfers [in|out|pending|failed|pool|coinbase|burnt|stake|yield]” - 显示交易。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3226"/>
        <source>&quot;sweep_all &lt;address&gt;&quot; - Send whole balance to another wallet.</source>
        <translation>“sweep_all &lt;地址>” - 将全部余额发送到另一个钱包。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3227"/>
        <source>&quot;seed&quot; - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>“种子” - 显示可用于恢复此钱包的 25 个秘密单词。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3228"/>
        <source>&quot;refresh&quot; - Synchronize wallet with the Salvium network.</source>
        <translation>“刷新” - 将钱包与 Salvium 网络同步。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3229"/>
        <source>&quot;status&quot; - Check current status of wallet.</source>
        <translation>“状态” - 检查钱包的当前状态。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3230"/>
        <source>&quot;version&quot; - Check software version.</source>
        <translation>“版本” - 检查软件版本。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3231"/>
        <source>&quot;exit&quot; - Exit wallet.</source>
        <translation>“退出” - 退出钱包。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233"/>
        <source>&quot;donate &lt;amount&gt;&quot; - Donate SAL to the development team.</source>
        <translation>“捐赠&lt;金额>” - 向开发团队捐赠 SAL。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263"/>
        <source>No commands found mentioning keyword(s)</source>
        <translation>未找到提及关键字的命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3293"/>
        <source>Invalid txid specified: </source>
        <translation>指定的 txid 无效： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300"/>
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>警告：此操作可能会将 txids 泄露给远程节点并影响您的隐私</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3302"/>
        <source>You have canceled the operation</source>
        <translation>您已取消操作</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3347"/>
        <source>Set another daemon to connect to. If it's not yours, it'll probably spy on you.</source>
        <translation>设置要连接的另一个守护进程。如果它不是你的，它可能会监视你。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3373"/>
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included). The &quot;subtractfeefrom=&quot; list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: &quot;transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2&quot;. Let's say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use &quot;subtractfeefrom=all&quot; to spread the fee across all destinations.</source>
        <translation>转账&lt;金额> &lt;asset_type> 的到&lt;地址>。如果参数“index=&lt;N1&gt;[,&lt;N2&gt;,...]”指定后，钱包使用这些索引地址收到的输出。如果省略，钱包会随机选择要使用的地址索引。无论如何，它都会尽力不组合多个地址的输出。 &lt;优先&gt;是事务的优先级。优先级越高，交易费用越高。按优先级顺序排列的有效值（从最低到最高）为：不重要、正常、提升、优先级。如果省略，则使用默认值（参见命令“设置优先级”）。 &lt;戒指尺寸>是为了实现不可追踪性而包含的输入数量。通过添加 URI_2 或 &lt;address_2> 可以一次进行多次付款。 &lt;金额_2>等等（在付款 ID 之前，如果包含的话）。 “subtractfeefrom＝”列表允许您选择从哪些目的地支付交易费用，而不是找零输出。费用将按比例平均分配给所选目的地。例如，为了进行3次转账，其中从第一和第三目的地收取费用，可以执行：“transfer &lt;addr1>”。 3 &lt;地址2> 0.5 &lt;地址3> 1减去费用=0,2”。假设交易费用为 0.1。余额将减少 4.5 SAL（包括费用）以及 addr1 和 addr1。 addr3 将收到 2.925 &amp;分别为 0.975 SAL。使用“subtractfeefrom=all”将费用分摊到所有目的地。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381"/>
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>将所有未锁定的余额发送到一个地址并将其锁定为&lt;lockblocks> （最多 1000000）。如果参数“index=&lt;N1&gt;[,&lt;N2&gt;,...]”或“索引=全部”指定后，钱包分别扫描那些或所有地址索引接收到的输出。如果省略，钱包会随机选择要使用的地址索引。 &lt;优先&gt;是扫描的优先级。优先级越高，交易费用越高。按优先级顺序排列的有效值（从最低到最高）为：不重要、正常、提升、优先级。如果省略，则使用默认值（参见命令“设置优先级”）。 &lt;戒指尺寸>是为了实现不可追踪性而包含的输入数量。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3387"/>
        <source>Send all unlocked balance to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>将所有未锁定的余额发送到一个地址。如果参数“index=&lt;N1&gt;[,&lt;N2&gt;,...]”或“索引=全部”指定后，钱包分别扫描那些或所有地址索引接收到的输出。如果省略，钱包会随机选择要使用的地址索引。如果参数“outputs＝&lt;N&gt;”是被指定并且N> 0，钱包将交易分成 N 个偶数输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3390"/>
        <source>Send all unlocked balance from a given account to an address. If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; or &quot;index=all&quot; is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter &quot;outputs=&lt;N&gt;&quot; is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>将所有未锁定的余额从给定帐户发送到某个地址。如果参数“index=&lt;N1&gt;[,&lt;N2&gt;,...]”或“索引=全部”指定后，钱包分别扫描那些或所有地址索引接收到的输出。如果省略，钱包会随机选择要使用的地址索引。如果参数“outputs＝&lt;N&gt;”是被指定并且N> 0，钱包将交易分成 N 个偶数输出。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402"/>
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>返回 TX &lt;tx_hash> 中收到的付款至原始发件人。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406"/>
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>永久破坏（燃烧）&lt;数量> &lt;asset_type> 的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410"/>
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>将&lt;金额>转换为&lt;源资产>进入 &lt;dest_asset>，带有可选的 &lt;slippage_limit></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414"/>
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>锁定&lt;数量> SAL 作为股权以获得收益</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418"/>
        <source>Displays the current exchange rate information for SAL &lt;--&gt; VSD conversions</source>
        <translation>显示 SAL 的当前汇率信息&lt;--> VSD 转换</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3422"/>
        <source>Displays the current circulating supply information for SAL and VSD currencies</source>
        <translation>显示SAL和VSD货币的当前流通供应信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426"/>
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>显示最后一个&lt;NN>的收益率回报统计数据块</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430"/>
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>捐赠&lt;金额>致开发团队 (donate.salvium.io)。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3434"/>
        <source>Sign a transaction from a file. If the parameter &quot;export_raw&quot; is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default &quot;unsigned_monero_tx&quot; will be used.</source>
        <translation>从文件中签署交易。如果参数“export_raw”是指定后，将导出适合守护进程 RPC /sendrawtransaction 的事务原始十六进制数据。
使用参数 &lt;filename>指定要读取的文件。如果未指定，则默认“unsigned_monero_tx”将被使用。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3456"/>
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If &quot;all&quot; is specified, the wallet shows all the existing addresses in the currently selected account. If &quot;new &quot; is specified, the wallet creates a new address with the provided label text (which can be empty). If &quot;mnew&quot; is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If &quot;label&quot; is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If &quot;one-off&quot; is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>如果没有指定参数或 &lt;index>指定后，钱包显示默认或指定地址。如果“全部”是指定后，钱包会显示当前所选账户中的所有现有地址。如果“新的”指定后，钱包会使用提供的标签文本（可以为空）创建一个新地址。如果“mnew”是指定后，钱包将创建与参数指定的数量一样多的新地址；为新地址设置默认标签。如果“标签”是指定后，钱包设置&lt;index>指定的地址的标签。到提供的标签文本。如果“一次性”指定后，将生成并显示指定索引的地址，并由钱包记住</translation>
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
        <translation>可用选项:
 种子语言
 设置钱包的种子语言。
 Always-confirm-transfers &lt;1|0>
 是否确认未分割的交易。
 print-ring-members &lt;1|0>\ n 是否在确认期间打印有关环成员的详细信息。
 store-tx-info &lt;1|0>
 是否存储传出交易信息（目标地址、付款 ID、交易密钥）以供将来参考。
 auto-refresh &lt;1|0>
 是否自动从守护进程同步新块。
 refresh-type &lt;full|optimize-coinbase|no-coinbase|default>
 设置钱包的刷新行为。
优先级 [0|1|2|3|4]
 将费用设置为默认/不重要/正常/提升/优先级。
 inform-missing- payment-id &lt;1|0> （已过时）
询问密码&lt;0|1|2（或never|action|解密）>
操作：在许多操作（例如传输等）之前询问密码
解密：与操作相同，但保留不需要时在内存中加密的支出密钥
 单位 &lt;sal|millisal|microsal>
 设置默认的 Salvium（子）单位。
 最小输出计数 [n]
 尝试至少保留该值许多输出的值至少为 min-outputs-value。
 min-outputs-value [n]
 尝试保持至少 min-outputs-count 输出至少为该值。
 merge-destinations &lt;1| 0>
 是否将多笔支付合并到同一个目的地址。
 inform-b​​acklog &lt;1|0>
 是否有交易积压警告。
 inform-b​​acklog-threshold [n]
 设置确认积压的阈值，仅在事务积压大于 n 块时发出警告。
 确认导出覆盖 &lt;1|0>
 如果要导出的文件已存在，是否发出警告。
 刷新- from-block-height [n]
 设置忽略块之前的高度。
 auto-low-priority &lt;1|0>
 在安全的情况下是否自动使用低优先级费用级别。 
 segregate-pre-fork-outputs &lt;1|0>
 如果您打算将输出花费在 Salvium 和密钥重用分叉上，请设置此项。
 key-reuse-mitigation2 &lt;1|0>
 设置如果您不确定稍后是否会在重复使用 Salvium 分叉的密钥上花费此操作。
 subaddress-lookahead &lt;major>:&lt;minor>
 设置子地址哈希表的lookahead 大小。
 segregation-height &lt; ;n>
 设置为要使用的密钥重用分叉的高度，0 使用默认值。
ignore-fractional-outputs &lt;1|0>
 是否忽略导致净损失的小数输出因费用而支出。
ignore-outputs-above &lt;amount>
 支出时忽略金额高于此阈值的输出。值 0 被转换为禁用此过滤器的最大值（1800 万）。
ignore-outputs-below &lt;amount>
 支出时忽略低于此阈值的输出。
 track-uses &lt;1|0> ;
 是否跟踪拥有的输出使用。
 setup-background-mining &lt;1|0>
 是否启用后台挖掘。设置此项以支持网络并有机会接收新的 Salvium。
 设备名称 &lt;device_name[:device_spec]>
 硬件钱包的设备名称。
 导出格式 &lt;“binary”| "ascii"&gt;
 将所有导出的文件保存为二进制文件（无法复制粘贴）或 ascii 文件（可以）。
 permanent-rpc-client-id &lt;1|0>
 是否继续使用通过钱包重新启动 RPC 支付的相同客户端 ID。
auto-mine-for-rpc- payment-threshold &lt;float>
 如果守护进程需要，是否自动开始挖掘 RPC 支付。
credits-target &lt;unsigned int> ;
 RPC 付款将余额记入目标（默认为 0）。
 show-wallet-name-when-locked &lt;1|0>
 如果您想在锁定时显示钱包名称，请设置此项。\ n enable-multisig-experimental &lt;1|0>
 设置此项以允许多重签名命令。如果双方不信任对方，多重签名目前可能会被利用。
 inactivity-lock-timeout &lt;unsigned int>
 锁定钱包之前要等待多少秒（0 表示禁用）。
freeze-incoming- payments &lt;unsigned int>
 锁定钱包之前需要等待多少秒（0 表示禁用）。 1|0>
 是否自动冻结收款，以免错误支出。</translation>
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
        <translation>显示可选高度范围内的传入/传出传输。

输出格式：
在或 Coinbase 中： 块号，“块”|“in”，          时间、金额、资产类型、交易哈希、支付 ID、子地址索引、                 “-”，注意
输出：           区块号、“出”、时间、金额*、资产类型、交易哈希、支付 ID、费用、目的地、输入地址**、“-”、备注
池：“池”、“入” ,          时间、金额、资产类型、交易哈希、付款 ID、子地址索引、                 “-”、注释、双花注释
待处理或失败：“失败”|“待处理”、“退出”、时间、金额*、交易哈希、付款 ID、费用、输入地址**、“ ;-”，注释
质押或销毁：区块号、“出”、时间、金额*、资产类型、交易哈希、支付 ID、费用、输入地址**、“-”、注释
\ n* 不包括找零和费用。
** 用作本次转账输入的地址索引集。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618"/>
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1>[,&lt;N2>,...]] [&lt;min_height>; [&lt;max_height>]] [输出=&lt;文件路径>] [选项=&lt;with_keys>]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653"/>
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>使用给定的子地址（如果未指定，则为主地址）对文件的内容进行签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3728"/>
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>与 MMS（多重消息系统）的接口
&lt;子命令>是以下之一：
 init、info、signer、list、next、sync、transfer、delete、send、receive、export、note、show、set、help
 send_signer_config、start_auto_config、stop_auto_config、auto_config、config_checksum
获取有关以下内容的帮助包含以下内容的子命令：help mms &lt;子命令>，或 help mms &lt;子命令></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3803"/>
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>获取校验和，使签名者可以轻松检查相同的彩信配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889"/>
        <source>Show address as QR code</source>
        <translation>以二维码形式显示地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3897"/>
        <source>Search all command descriptions for keyword(s)</source>
        <translation>搜索关键字的所有命令描述</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3901"/>
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>扫描 &lt;txid>(s) 给出的交易，处理它们并寻找输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014"/>
        <source>sal, millisal, microsal</source>
        <translation>萨尔, 米利萨尔, 微萨尔</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032"/>
        <source>1 or 0</source>
        <translation>1或0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4257"/>
        <source>Multisig is disabled.</source>
        <translation>多重签名已禁用。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4258"/>
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can't be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>多重签名是一项实验性功能，可能存在错误。可能出现问题的情况包括：发送到多重签名钱包的资金根本无法使用，只能在恶意群组成员的参与下使用，或者可能被恶意群组成员窃取。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4260"/>
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>您已取消恢复多重签名钱包。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4915"/>
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>钱包无法连接守护进程，因为它设置为离线模式</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4917"/>
        <source>wallet failed to connect to daemon, because it is not up to date. </source>
        <translation>钱包无法连接到守护程序，因为它不是最新的。 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4918"/>
        <source>Please make sure you are running the latest wallet.</source>
        <translation>请确保您运行的是最新的钱包。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4921"/>
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the 'set_daemon' command.</source>
        <translation>守护进程不是最新的。请确保守护程序正在运行最新版本或使用“set_daemon”命令更改守护程序地址。</translation>
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
        <translation>您的钱包已生成！
要开始与守护程序同步，请使用“刷新”按钮命令。
使用“帮助”命令查看可用命令的简化列表。
使用“help all”命令查看所有可用命令的列表。
使用“help &lt;command>”查看命令的文档。
始终使用“退出”键关闭 salvium-wallet-cli 时使用命令来保存
当前会话的状态。否则，您可能需要再次同步
您的钱包（在任何情况下您的钱包密钥都不会面临风险）。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5348"/>
        <source>Use the &quot;help&quot; command to see a simplified list of available commands.
</source>
        <translation>使用“帮助”命令来查看可用命令的简化列表。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5349"/>
        <source>Use &quot;help all&quot; to see the list of all available commands.
</source>
        <translation>使用“帮助所有人”查看所有可用命令的列表。
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5536"/>
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>启用此功能可支持您正在使用的网络，并使您有资格接收新的 SAL</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703"/>
        <source>Failed to parse address</source>
        <translation>解析地址失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5718"/>
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got </source>
        <translation>预期受信任、不受信任或这可能是间谍节点 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5727"/>
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>这不是 Tor/I2P 地址，也不是受信任的守护进程。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5728"/>
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>要么使用您自己的可信节点，通过 Tor 或 I2P 连接，要么传递这个“可能是间谍”节点并被监视。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5733"/>
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>警告：在没有 SSL 的情况下连接到非本地守护程序，被动的对手将能够监视您。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5836"/>
        <source>stake returned </source>
        <translation>返还赌注 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5842"/>
        <source>yield earned </source>
        <translation>赚取的收益 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5853"/>
        <source>burnt </source>
        <translation>烧焦的 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5858"/>
        <source>converting </source>
        <translation>转换 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5863"/>
        <source>staked </source>
        <translation>押注的 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5982"/>
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>设备要求输入密码。您想在设备 (Y)（或主机 (N)）上输入密码吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005"/>
        <source>The wallet's refresh-from-block-height setting is higher than the daemon's height: this may mean your wallet will skip over transactions</source>
        <translation>钱包的刷新块高度设置高于守护进程的高度：这可能意味着您的钱包将跳过交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6155"/>
        <source> (Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation>（某些拥有的输出缺少关键图像 - 需要 export_outputs、import_outputs、export_key_images 和 import_key_images）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171"/>
        <source>Asset: </source>
        <translation>资产： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10339"/>
        <source>, balance: </source>
        <translation>， 平衡： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6494"/>
        <source>failed to connect to daemon</source>
        <translation>无法连接到守护进程</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6595"/>
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>，这可以打破环签名的匿名性。确保这是故意的！
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653"/>
        <source>I locked your Salvium wallet to protect you while you were away
see &quot;help set&quot; to configure/disable</source>
        <translation>我锁定了您的 Salvium 钱包，以在您离开时保护您
请参阅“帮助设置”配置/禁用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6673"/>
        <source>Locked due to inactivity.</source>
        <translation>由于不活动而被锁定。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6674"/>
        <source>The wallet password is required to unlock the console.</source>
        <translation>解锁控制台需要钱包密码。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6681"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10824"/>
        <source>Testnet</source>
        <translation>测试网</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10825"/>
        <source>Stagenet</source>
        <translation>舞台网</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10825"/>
        <source>Mainnet</source>
        <translation>主网</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073"/>
        <source>Burning %s %s.  </source>
        <translation>正在燃烧 %s %s。  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7075"/>
        <source>Converting %s %s to %s.  </source>
        <translation>正在将 %s %s 转换为 %s。  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7077"/>
        <source>Staking %s %s for yield accrual.  </source>
        <translation>质押 %s %s 以获取收益。  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7079"/>
        <source>Sending %s %s.  </source>
        <translation>正在发送 %s %s。  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7098"/>
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>.
此交易（包括 %s 更改）将在 %llu 块中解锁，大约 %s 天（假设每个块 2 分钟）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975"/>
        <source>Invalid account</source>
        <translation>帐户无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8006"/>
        <source>return_payments are disabled</source>
        <translation>return_ payment 被禁用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8042"/>
        <source>incorrect TX type for txid </source>
        <translation>txid 的 TX 类型不正确 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8048"/>
        <source>invalid return_address/return_pubkey for txid </source>
        <translation>txid 的 return_address/return_pubkey 无效 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8065"/>
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid </source>
        <translation>txid 的关键图像不可用（部分/未知/已用/已冻结） </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8097"/>
        <source>Returning %s for a total fee of %s.  Is this okay?</source>
        <translation>返回 %s，总费用为 %s。  这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8127"/>
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>返回 TX 的冷签名尚未实施</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8217"/>
        <source>conversions are disabled until hard fork </source>
        <translation>在硬分叉之前转换将被禁用 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8224"/>
        <source>missing / extraneous argument(s)</source>
        <translation>缺少/无关的参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8240"/>
        <source>invalid slippage_limit value : expected 0.0-90.0, got </source>
        <translation>无效的 slippage_limit 值：预期 0.0-90.0，已得到 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8251"/>
        <source>invalid argument(s): </source>
        <translation>无效参数： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8257"/>
        <source>out of range for slippage limit: </source>
        <translation>超出滑点限制范围： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8267"/>
        <source>invalid destination asset_type</source>
        <translation>目标 asset_type 无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8277"/>
        <source>invalid source asset_type</source>
        <translation>源 asset_type 无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8286"/>
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>无效转换 - asset_type 未更改</translation>
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
        <translation>供应信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8378"/>
        <source>	%6s : %21.8d</source>
        <translation>	%6s: %21.8d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8405"/>
        <source>
STAKED FUNDS:</source>
        <translation>
质押资金：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8411"/>
        <source>Height %d, txid %s, staked %s SAL, earned %s SAL</source>
        <translation>高度 %d，txid %s，质押 %s SAL，赚取 %s SAL</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8417"/>
        <source>Height %d, txid %s, staked %s SAL, %s SAL accrued so far</source>
        <translation>高度 %d，txid %s，质押 %s SAL，到目前为止累计 %s SAL</translation>
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
收益信息：
	过去 %s 燃烧的供应币：%d
	锁定的币总数：%d
	过去 %s 累积的收益：%d
	每个 SAL 质押的收益：%d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8490"/>
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>向 Salvium 团队捐赠 %s %s（donate.salvium.io 或 %s）。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8841"/>
        <source>Last argument is an address, but not a subaddress</source>
        <translation>最后一个参数是地址，但不是子地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8895"/>
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>这可能是因为转移到了子地址。如果是这种情况，请最后传递子地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9590"/>
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>用法： show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1>[,&lt;N2>,...]] [&lt;min_height>; [&lt;最大高度>]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9649"/>
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>用法：export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1>[,&lt;N2>,...]] [&lt;min_height>; [&lt;max_height>]] [输出=&lt;路径>] [选项=&lt;with_keys>]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>tx key</source>
        <translation>发送键</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10338"/>
        <source>
Grand total:
  Asset: </source>
        <translation>
总计：
 资产： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Asset</source>
        <translation>资产</translation>
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
        <translation>预计新地址数量只有一个参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10453"/>
        <source>failed to parse the amount of new addresses: </source>
        <translation>无法解析新地址数量： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10458"/>
        <source>the amount of new addresses must be lower or equal to </source>
        <translation>新地址的数量必须低于或等于 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10473"/>
        <source>Expected exactly two arguments for index</source>
        <translation>预计索引正好有两个参数</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10483"/>
        <source>Address at %u %u: %s</source>
        <translation>地址位于 %u %u：%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10616"/>
        <source>Standard address: %s, payment ID: %s</source>
        <translation>标准地址：%s，付款 ID：%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10872"/>
        <source>Invalid subaddress index format, and not a signature type: </source>
        <translation>无效的子地址索引格式，而不是签名类型： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11497"/>
        <source> (Y/Yes/N/No): </source>
        <translation>（是/是/否/否）： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11503"/>
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>警告：使用彩信自动配置机制并非不可信</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11504"/>
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers' info</source>
        <translation>恶意自动配置管理器可能会向您发送有关自己钱包的信息，而不是其他签名者的信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11505"/>
        <source>If in doubt do not use auto-config or at least compare configs using the &quot;mms config_checksum&quot; command</source>
        <translation>如果有疑问，请勿使用自动配置或至少使用“mms config_checksum”比较配置。命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11532"/>
        <source>Choose processing:</source>
        <translation>选择加工：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11541"/>
        <source>Sign tx</source>
        <translation>签署交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11549"/>
        <source>Send the tx for submission to </source>
        <translation>将提交的 tx 发送至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11553"/>
        <source>Send the tx for signing to </source>
        <translation>将用于签名的 tx 发送至 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11560"/>
        <source>Submit tx</source>
        <translation>提交交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11563"/>
        <source>unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11569"/>
        <source>Choice: </source>
        <translation>选择： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11581"/>
        <source>Wrong choice</source>
        <translation>错误的选择</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>Id</source>
        <translation>ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>I/O</source>
        <translation>输入/输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11588"/>
        <source>Authorized Signer</source>
        <translation>授权签署人</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Message Type</source>
        <translation>消息类型</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Height</source>
        <translation>高度</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>R</source>
        <translation>右</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Message State</source>
        <translation>消息状态</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11589"/>
        <source>Since</source>
        <translation>自从</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11606"/>
        <source> ago</source>
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
        <translation>运输地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11613"/>
        <source>Auto-Config Token</source>
        <translation>自动配置令牌</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11613"/>
        <source>Salvium Address</source>
        <translation>丹参地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11617"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11625"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627"/>
        <source>&lt;not set&gt;</source>
        <translation>&lt;未设置></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11668"/>
        <source>Message </source>
        <translation>信息 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11669"/>
        <source>In/out: </source>
        <translation>输入/输出： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11671"/>
        <source>State: </source>
        <translation>状态： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11671"/>
        <source>%s since %s, %s ago</source>
        <translation>%s 自 %s 起，%s 前</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11675"/>
        <source>Sent: Never</source>
        <translation>发送：从未</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11679"/>
        <source>Sent: %s, %s ago</source>
        <translation>发送时间：%s, %s 前</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11682"/>
        <source>Authorized signer: </source>
        <translation>授权签字人： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683"/>
        <source>Content size: </source>
        <translation>内容大小： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683"/>
        <source> bytes</source>
        <translation>字节</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11684"/>
        <source>Content: </source>
        <translation>内容： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11684"/>
        <source>(binary data)</source>
        <translation>（二进制数据）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11714"/>
        <source>Send these messages now?</source>
        <translation>现在发送这些消息吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11724"/>
        <source>Queued for sending.</source>
        <translation>排队等待发送。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11744"/>
        <source>Invalid message id</source>
        <translation>消息 ID 无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11753"/>
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>用法：mms init &lt;required_signers>/&lt;authorized_signers> &lt;自己的标签> &lt;自己的交通地址></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11759"/>
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>彩信已初始化。通过删除所有签名者信息和消息来重新初始化？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11774"/>
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>所需签名者和/或授权签名者数量错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11791"/>
        <source>The MMS is not active.</source>
        <translation>彩信未激活。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11814"/>
        <source>Invalid signer number </source>
        <translation>签名人号码无效 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11819"/>
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>彩信签名者 [&lt;number&gt; &lt;标签> [&lt;运输地址> [&lt;salvium_address>]]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11838"/>
        <source>Invalid Salvium address</source>
        <translation>Salvium 地址无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11845"/>
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>钱包状态不再允许更改 Salvium 地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11857"/>
        <source>Usage: mms list</source>
        <translation>用途：彩信列表</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11870"/>
        <source>Usage: mms next [sync]</source>
        <translation>用法：彩信下一个[同步]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11895"/>
        <source>No next step: </source>
        <translation>没有下一步： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11905"/>
        <source>prepare_multisig</source>
        <translation>准备多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11911"/>
        <source>make_multisig</source>
        <translation>make_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11926"/>
        <source>exchange_multisig_keys</source>
        <translation>交换多重签名密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11942"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12066"/>
        <source>export_multisig_info</source>
        <translation>导出多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11951"/>
        <source>import_multisig_info</source>
        <translation>导入多重签名信息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11964"/>
        <source>sign_multisig</source>
        <translation>签名多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11974"/>
        <source>submit_multisig</source>
        <translation>提交多重签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11984"/>
        <source>Send tx</source>
        <translation>发送交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11995"/>
        <source>Process signer config</source>
        <translation>进程签名者配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12007"/>
        <source>Replace current signer config with the one displayed above?</source>
        <translation>将当前签名者配置替换为上面显示的配置？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12013"/>
        <source>You can use the &quot;mms delete&quot; command to delete any unwanted message</source>
        <translation>您可以使用“彩信删除”命令删除任何不需要的消息</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12026"/>
        <source>Process auto config data</source>
        <translation>处理自动配置数据</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12040"/>
        <source>Nothing ready to process</source>
        <translation>没有准备好处理</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12059"/>
        <source>Usage: mms sync</source>
        <translation>用途：彩信同步</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12083"/>
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>用法：彩信删除（&lt;message_id> | 全部）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12090"/>
        <source>Delete all messages?</source>
        <translation>删除所有消息？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12116"/>
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>用法：彩信发送 [&lt;message_id>]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12133"/>
        <source>Usage: mms receive</source>
        <translation>用途：彩信接收</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12150"/>
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>用法：彩信导出&lt;message_id></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12161"/>
        <source>Message content saved to: </source>
        <translation>留言内容保存至： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12165"/>
        <source>Failed to to save message content</source>
        <translation>保存消息内容失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12189"/>
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>用法：彩信备注[&lt;标签> &lt;正文>]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12196"/>
        <source>No signer found with label </source>
        <translation>找不到带有标签的签名者 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12218"/>
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>用法：彩信显示&lt;message_id></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12236"/>
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>用法：mms set &lt;选项名称> [&lt;选项值>]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12253"/>
        <source>Wrong option value</source>
        <translation>选项值错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12258"/>
        <source>Auto-send is on</source>
        <translation>自动发送已开启</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12258"/>
        <source>Auto-send is off</source>
        <translation>自动发送已关闭</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12263"/>
        <source>Unknown option</source>
        <translation>未知选项</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12271"/>
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>用法：help mms [&lt;子命令>]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12287"/>
        <source>Usage: mms send_signer_config</source>
        <translation>用法：彩信发送_签名者_配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12293"/>
        <source>Signer config not yet complete</source>
        <translation>签名者配置尚未完成</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12308"/>
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>用法：mms start_auto_config [&lt;标签>; &lt;标签> ...]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12313"/>
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>有些签名者没有设置标签。在自动配置之前完成标签或在此处将它们指定为参数。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12319"/>
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>自动配置已在运行。取消并重新启动？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12343"/>
        <source>Usage: mms config_checksum</source>
        <translation>用法：mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12355"/>
        <source>Usage: mms stop_auto_config</source>
        <translation>用法：彩信停止_自动_配置</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12358"/>
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>删除任何自动配置令牌并停止自动配置？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12371"/>
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>用法：mms auto_config &lt;auto_config_token></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12378"/>
        <source>Invalid auto-config token</source>
        <translation>自动配置令牌无效</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12388"/>
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>自动配置已在运行。取消并重新启动？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12407"/>
        <source>MMS not available in this wallet</source>
        <translation>此钱包不支持彩信</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12431"/>
        <source>The MMS is not active. Activate using the &quot;mms init&quot; command</source>
        <translation>彩信未激活。使用“mms init”激活命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12512"/>
        <source>Invalid MMS subcommand</source>
        <translation>无效的 MMS 子命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12517"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12521"/>
        <source>Error in MMS command: </source>
        <translation>彩信命令错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10843"/>
        <source>wallet is watch-only and cannot sign</source>
        <translation>钱包仅供手表使用，无法签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10848"/>
        <source>This wallet is multisig and cannot sign</source>
        <translation>该钱包是多重签名的，无法签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10922"/>
        <source>Bad signature from </source>
        <translation>错误签名来自 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10926"/>
        <source>Good signature from </source>
        <translation>好的签名来自 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10942"/>
        <source>wallet is watch-only and cannot export key images</source>
        <translation>钱包仅供手表使用，无法导出关键图片</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10980"/>
        <source>Signed key images exported to </source>
        <translation>签名的密钥图像导出到 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11025"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11071"/>
        <source>command only supported by HW wallet</source>
        <translation>仅硬件钱包支持的命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11030"/>
        <source>hw wallet does not support cold KI sync</source>
        <translation>hw钱包不支持冷KI同步</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11042"/>
        <source>Please confirm the key image sync on the device</source>
        <translation>请确认设备上的关键图像同步</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11048"/>
        <source>Key images synchronized to height </source>
        <translation>关键图像与高度同步 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11051"/>
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>运行不受信任的守护进程，无法确定花费了哪个交易输出。使用受信任的守护进程 --trusted-daemon 并运行 rescan_spent</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11054"/>
        <source> spent, </source>
        <translation>花费， </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11054"/>
        <source> unspent</source>
        <translation>未花费的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11058"/>
        <source>Failed to import key images</source>
        <translation>关键图片导入失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11063"/>
        <source>Failed to import key images: </source>
        <translation>导入关键图片失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11080"/>
        <source>Failed to reconnect device</source>
        <translation>无法重新连接设备</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11085"/>
        <source>Failed to reconnect device: </source>
        <translation>无法重新连接设备： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11137"/>
        <source>Outputs exported to </source>
        <translation>输出导出到 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11292"/>
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>网络上出现的双花：这笔交易可能会也可能不会被开采</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11327"/>
        <source>Transaction ID not found</source>
        <translation>未找到交易 ID</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11362"/>
        <source>Transaction successfully saved to </source>
        <translation>交易已成功保存至 </translation>
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
        <translation>无法将交易保存到 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="408"/>
        <source>TRUE</source>
        <translation>真的</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="461"/>
        <source>failed to parse refresh type</source>
        <translation>无法解析刷新类型</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="881"/>
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>输入可选的种子偏移密码，留空即可查看原始种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4342"/>
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>输入种子偏移密码，如果没有则为空</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5342"/>
        <source>You may want to remove the file &quot;%s&quot; and try again</source>
        <translation>您可能想要删除文件“%s”然后再试一次</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8671"/>
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>这是一个多重签名钱包，只能使用sign_multisig进行签名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8676"/>
        <source>This is a watch only wallet</source>
        <translation>这是一款仅限手表的钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8708"/>
        <source>Failed to sign transaction</source>
        <translation>交易签名失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8714"/>
        <source>Failed to sign transaction: </source>
        <translation>交易签名失败： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8735"/>
        <source>Transaction raw hex data exported to </source>
        <translation>交易原始十六进制数据导出到 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8756"/>
        <source>Failed to load transaction from file</source>
        <translation>无法从文件加载交易</translation>
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
        <translation>无法解析 txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8814"/>
        <source>Tx key: </source>
        <translation>发送键： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8819"/>
        <source>no tx keys found for this txid</source>
        <translation>没有找到该 txid 的 tx 密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8862"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8873"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8880"/>
        <source>failed to parse tx_key</source>
        <translation>解析 tx_key 失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8889"/>
        <source>Tx key successfully stored.</source>
        <translation>Tx 密钥已成功存储。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8893"/>
        <source>Failed to store tx key: </source>
        <translation>无法存储 tx 密钥： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8929"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9141"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9230"/>
        <source>signature file saved to: </source>
        <translation>签名文件保存到： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8931"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9143"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9232"/>
        <source>failed to save signature file</source>
        <translation>保存签名文件失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8935"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9023"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9101"/>
        <source>error: </source>
        <translation>错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8968"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8977"/>
        <source>failed to parse tx key</source>
        <translation>无法解析 tx 密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8999"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072"/>
        <source>received</source>
        <translation>已收到</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8999"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072"/>
        <source>in txid</source>
        <translation>在txid中</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9002"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9075"/>
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>警告：该交易尚未包含在区块链中！</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9012"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9085"/>
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>警告：无法确定确认数量！</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9018"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9091"/>
        <source>received nothing in txid</source>
        <translation>txid 中没有收到任何内容</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9058"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9172"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9266"/>
        <source>failed to load signature file</source>
        <translation>加载签名文件失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9069"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9179"/>
        <source>Good signature</source>
        <translation>签名好</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9096"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9181"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9281"/>
        <source>Bad signature</source>
        <translation>签名错误</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9120"/>
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>钱包仅供手表使用，无法生成证明</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9204"/>
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>储备证明只能由完整钱包生成</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9259"/>
        <source>Address must not be a subaddress</source>
        <translation>地址不能是子地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9386"/>
        <source>bad min_height parameter:</source>
        <translation>错误的 min_height 参数：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9398"/>
        <source>bad max_height parameter:</source>
        <translation>错误的 max_height 参数：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9420"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9691"/>
        <source>block</source>
        <translation>堵塞</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9420"/>
        <source>in</source>
        <translation>在</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9511"/>
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[网络上出现的双花：这笔交易最终可能会也可能不会被开采] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9799"/>
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;最小金额>应小于 &lt;max_amount></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9825"/>
        <source>There is no unspent output in the specified address</source>
        <translation>指定地址没有未花费的输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9831"/>
        <source>
Amount: </source>
        <translation>
金额： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9831"/>
        <source>, number of keys: </source>
        <translation>，按键数量： </translation>
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
最小块高度： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9842"/>
        <source>
Max block height: </source>
        <translation>
最大块高度： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9843"/>
        <source>
Min amount found: </source>
        <translation>
找到的最小数量： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9844"/>
        <source>
Max amount found: </source>
        <translation>
发现的最大数量： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845"/>
        <source>
Total count: </source>
        <translation>
总计数： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9885"/>
        <source>
Bin size: </source>
        <translation>
垃圾箱大小： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9886"/>
        <source>
Outputs per *: </source>
        <translation>
每个 * 的输出： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9888"/>
        <source>count
  ^
</source>
        <translation>计数
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
        <translation>+-->块高度
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
        <translation>警告：这将丢失无法从区块链恢复的任何信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9940"/>
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>这包括目标地址、交易密钥、交易备注等</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9277"/>
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>良好的签名 -- 总计：%s，已用：%s，未用：%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094"/>
        <source>First line is not an amount</source>
        <translation>第一行不是金额</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108"/>
        <source>Invalid output: </source>
        <translation>无效输出： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2133"/>
        <source>Invalid output key, and file doesn't exist</source>
        <translation>输出密钥无效，文件不存在</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2156"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2183"/>
        <source>Invalid output</source>
        <translation>无效输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2671"/>
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>无效参数：必须为 0/从不、1/操作或 2/加密/解密</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3377"/>
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter &quot;index=&lt;N1&gt;[,&lt;N2&gt;,...]&quot; is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command &quot;set priority&quot;) is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included)</source>
        <translation>转账&lt;金额>至&lt;地址>并将其锁定为&lt;lockblocks> （最多 1000000）。如果参数“index=&lt;N1&gt;[,&lt;N2&gt;,...]”指定后，钱包使用这些索引地址收到的输出。如果省略，钱包会随机选择要使用的地址索引。无论如何，它都会尽力不组合多个地址的输出。 &lt;优先&gt;是事务的优先级。优先级越高，交易费用越高。按优先级顺序排列的有效值（从最低到最高）为：不重要、正常、提升、优先级。如果省略，则使用默认值（参见命令“设置优先级”）。 &lt;戒指尺寸>是为了实现不可追踪性而包含的输入数量。通过添加 URI_2 或 &lt;address_2> 可以一次进行多次付款。 &lt;金额_2>等等（在付款 ID 之前，如果包含的话）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5946"/>
        <source>Password needed (%s) - use the refresh command</source>
        <translation>需要密码 (%s) - 使用刷新命令</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10100"/>
        <source>Daemon requests payment at diff %llu, with %f credits/hash%s. Run start_mining_for_rpc to start mining to pay for RPC access, or use another daemon</source>
        <translation>守护程序请求以 diff %llu 付款，使用 %f 积分/哈希%s。运行 start_mining_for_rpc 开始挖矿以支付 RPC 访问费用，或使用其他守护进程</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10127"/>
        <source>Error mining to daemon: </source>
        <translation>挖掘守护进程时出错： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10133"/>
        <source>Failed to start mining for RPC payment</source>
        <translation>RPC支付挖矿启动失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10145"/>
        <source>wallet</source>
        <translation>钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10147"/>
        <source> (no daemon)</source>
        <translation>（无守护进程）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10149"/>
        <source> (out of sync)</source>
        <translation>（不同步）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10200"/>
        <source>(Untitled account)</source>
        <translation>（无标题帐户）</translation>
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
        <translation>无法解析索引： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10218"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10494"/>
        <source>specify an index between 0 and </source>
        <translation>指定 0 到之间的索引 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10340"/>
        <source>, unlocked balance: </source>
        <translation>，解锁余额： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10350"/>
        <source>Untagged accounts:</source>
        <translation>未标记的帐户：</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10356"/>
        <source>Tag %s is unregistered.</source>
        <translation>标签 %s 未注册。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10359"/>
        <source>Accounts with tag: </source>
        <translation>带有标签的帐户： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10360"/>
        <source>Tag's description: </source>
        <translation>标签的描述： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10362"/>
        <source>Account</source>
        <translation>帐户</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10416"/>
        <source>Primary address</source>
        <translation>主要地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10416"/>
        <source>(used)</source>
        <translation>（用过的）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10437"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10463"/>
        <source>(Untitled address)</source>
        <translation>（无标题地址）</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10521"/>
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min>已经出界了</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10526"/>
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max>超出界限</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10590"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10603"/>
        <source>Integrated addresses can only be created for account 0</source>
        <translation>只能为帐户 0 创建集成地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10595"/>
        <source>Matching integrated address: </source>
        <translation>匹配综合地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10622"/>
        <source>Subaddress: </source>
        <translation>子地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10622"/>
        <source>Standard address: </source>
        <translation>标准地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10627"/>
        <source>failed to parse payment ID or address</source>
        <translation>无法解析付款 ID 或地址</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10664"/>
        <source>failed to parse index</source>
        <translation>解析索引失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10672"/>
        <source>Address book is empty.</source>
        <translation>地址簿为空。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10678"/>
        <source>Index: </source>
        <translation>指数： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10684"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10814"/>
        <source>Address: </source>
        <translation>地址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10685"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10813"/>
        <source>Description: </source>
        <translation>描述： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10770"/>
        <source>no description found</source>
        <translation>没有找到描述</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10772"/>
        <source>description found: </source>
        <translation>发现描述： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6679"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10812"/>
        <source>Filename: </source>
        <translation>文件名： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10817"/>
        <source>Watch only</source>
        <translation>仅供观看</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10819"/>
        <source>%u/%u multisig%s</source>
        <translation>%u/%u 多重签名%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8634"/>
        <source>%s change to %s</source>
        <translation>%s 更改为 %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9008"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9081"/>
        <source>This transaction has %u confirmations</source>
        <translation>此交易有 %u 个确认</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61"/>
        <source>Filename to save the certificate</source>
        <translation>保存证书的文件名</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62"/>
        <source>Filename to save the private key</source>
        <translation>保存私钥的文件名</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63"/>
        <source>Passphrase with which to encrypt the private key</source>
        <translation>用于加密私钥的密码</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64"/>
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>包含用于加密私钥的密码的文件</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65"/>
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>提示输入用于加密私钥的密码</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143"/>
        <source>Argument is needed: </source>
        <translation>需要论证： </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153"/>
        <source>Failed to read passphrase</source>
        <translation>无法读取密码</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188"/>
        <source>Failed to create certificate</source>
        <translation>创建证书失败</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206"/>
        <source>Failed to write certificate: </source>
        <translation>写入证书失败： </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218"/>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226"/>
        <source>Failed to write private key: </source>
        <translation>私钥写入失败： </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237"/>
        <source>Failed to save certificate file</source>
        <translation>保存证书文件失败</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243"/>
        <source>Failed to save private key file</source>
        <translation>保存私钥文件失败</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69"/>
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>基本文件名（-1、-2等后缀将根据需要附加）</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70"/>
        <source>Give threshold and participants at once as M/N</source>
        <translation>立即给出阈值和参与者作为 M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71"/>
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>有多少参与者将共享多重签名钱包的部分内容</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72"/>
        <source>How many signers are required to sign a valid transaction</source>
        <translation>需要多少个签名者才能签署有效交易</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73"/>
        <source>Create testnet multisig wallets</source>
        <translation>创建测试网多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74"/>
        <source>Create stagenet multisig wallets</source>
        <translation>创建 stagenet 多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75"/>
        <source>Create an address file for new wallets</source>
        <translation>为新钱包创建地址文件</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80"/>
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>正在生成 %u %u/%u 个多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="137"/>
        <source>Generated multisig wallets for address </source>
        <translation>为地址生成多重签名钱包 </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="141"/>
        <source>Error creating multisig wallets: </source>
        <translation>创建多重签名钱包时出错： </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="166"/>
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>该程序生成一组多重签名钱包 - 仅当所有参与者都相互信任时才使用此更简单的方案</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="185"/>
        <source>Error: Can't specify more than one of --testnet and --stagenet</source>
        <translation>错误：无法指定 --testnet 和 --stagenet 之一以上</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="192"/>
        <source>Error: expected N/M, but got: </source>
        <translation>错误：预期 N/M，但得到： </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="200"/>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="209"/>
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>错误：可能给出 --scheme 或 --threshold 和 --participants 两者之一</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216"/>
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>错误：预期 N > 1 且 N &lt;= M，但得到 N==%u 且 M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225"/>
        <source>Error: --filename-base is required</source>
        <translation>错误：--filename-base 是必需的</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72"/>
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>在 URL &lt;arg> 处使用 PyBitmessage 实例</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73"/>
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>指定 &lt;arg>作为 PyBitmessage API 的用户名:密码</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911"/>
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>自动配置无法继续，因为来自其他签名者的自动配置数据不完整</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936"/>
        <source>The signer config is not complete.</source>
        <translation>签名者配置不完整。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988"/>
        <source>Wallet can't go multisig because key sets from other signers are missing or not complete.</source>
        <translation>钱包无法进行多重签名，因为其他签名者的密钥集丢失或不完整。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030"/>
        <source>Wallet can't start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>钱包无法启动另一轮密钥交换，因为其他签名者的密钥集丢失或不完整。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094"/>
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>同步未完成，因为来自其他签名者的多重签名同步数据丢失或不完整。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208"/>
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>有等待消息，但正常情况下没有准备好处理</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211"/>
        <source>
Use &quot;mms next sync&quot; if you want to force processing of the waiting sync data</source>
        <translation>
使用“彩信下次同步”如果你想强制处理等待的同步数据</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215"/>
        <source>
Use &quot;mms note&quot; to display the waiting notes</source>
        <translation>
使用“彩信”显示等待备注</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220"/>
        <source>There are no messages waiting to be processed.</source>
        <translation>没有等待处理的消息。</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441"/>
        <source>key set</source>
        <translation>按键设置</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443"/>
        <source>additional key set</source>
        <translation>附加按键组</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445"/>
        <source>multisig sync data</source>
        <translation>多重签名同步数据</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447"/>
        <source>partially signed tx</source>
        <translation>部分签署的交易</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449"/>
        <source>fully signed tx</source>
        <translation>完全签名的交易</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451"/>
        <source>note</source>
        <translation>笔记</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453"/>
        <source>signer config</source>
        <translation>签名者配置</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455"/>
        <source>auto-config data</source>
        <translation>自动配置数据</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457"/>
        <source>unknown message type</source>
        <translation>未知消息类型</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466"/>
        <source>in</source>
        <translation>在</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468"/>
        <source>out</source>
        <translation>出去</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470"/>
        <source>unknown message direction</source>
        <translation>未知消息方向</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479"/>
        <source>ready to send</source>
        <translation>准备发送</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481"/>
        <source>sent</source>
        <translation>发送</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483"/>
        <source>waiting</source>
        <translation>等待</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485"/>
        <source>processed</source>
        <translation>加工过的</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487"/>
        <source>cancelled</source>
        <translation>取消</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489"/>
        <source>unknown message state</source>
        <translation>未知消息状态</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="177"/>
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>生成新钱包并将其保存到 &lt;arg>;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="178"/>
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>从设备生成新钱包并将其保存到 &lt;arg>;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="179"/>
        <source>Generate incoming-only wallet from view key</source>
        <translation>从查看密钥生成仅限传入的钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="180"/>
        <source>Generate deterministic wallet from spend key</source>
        <translation>从支出密钥生成确定性钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="181"/>
        <source>Generate wallet from private keys</source>
        <translation>从私钥生成钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="182"/>
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>从多重签名钱包密钥生成主钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184"/>
        <source>Language for mnemonic</source>
        <translation>助记符语言</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="185"/>
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>指定用于钱包恢复/创建的 Electrum 种子</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="186"/>
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>使用 Electrum 式助记词种子恢复钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="187"/>
        <source>alias for --restore-deterministic-wallet</source>
        <translation>--restore-确定性钱包的别名</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="188"/>
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>使用 Electrum 风格的助记词种子恢复多重签名钱包</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="189"/>
        <source>Generate non-deterministic view and spend keys</source>
        <translation>生成非确定性视图并花费密钥</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191"/>
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>从指定日期的估计区块链高度恢复</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192"/>
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>新创建的交易不会转发到 Salvium 网络</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="348"/>
        <source>failed to read wallet password</source>
        <translation>读取钱包密码失败</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355"/>
        <source>Enter a new password for the wallet</source>
        <translation>输入钱包的新密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355"/>
        <source>Wallet password</source>
        <translation>钱包密码</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="433"/>
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>无效参数：必须是 0/1、true/false、y/n、yes/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="489"/>
        <source>DNSSEC validation passed</source>
        <translation>DNSSEC 验证已通过</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="493"/>
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>警告：DNSSEC 验证失败，该地址可能不正确！</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="496"/>
        <source>For URL: </source>
        <translation>对于网址： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="498"/>
        <source> Salvium Address = </source>
        <translation>Salvium地址= </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="510"/>
        <source>you have cancelled the transfer request</source>
        <translation>您已取消转账请求</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="531"/>
        <source>failed to parse index: </source>
        <translation>无法解析索引： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="544"/>
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>子地址前瞻格式无效；必须是&lt;主要>:&lt;次要></translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="608"/>
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>没有与守护进程的连接。请确保守护进程正在运行。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="617"/>
        <source>RPC error: </source>
        <translation>远程过程调用错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="621"/>
        <source>failed to get random outputs to mix: </source>
        <translation>未能获得随机输出来混合： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="628"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="636"/>
        <source>Not enough money in unlocked balance</source>
        <translation>未锁定余额中没有足够的钱</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="646"/>
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>未能找到创建交易的方法。这通常是由于灰尘太小而无法支付费用，或者试图发送比未锁定余额更多的钱，或者没有留下足够的费用</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="652"/>
        <source>not enough outputs for specified ring size</source>
        <translation>没有足够的输出来满足指定的环尺寸</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655"/>
        <source>output amount</source>
        <translation>输出量</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655"/>
        <source>found outputs to use</source>
        <translation>找到要使用的输出</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="657"/>
        <source>Please use sweep_unmixable.</source>
        <translation>请使用sweep_unmixable。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="661"/>
        <source>transaction was not constructed</source>
        <translation>交易未构建</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669"/>
        <source>Reason: </source>
        <translation>原因： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="688"/>
        <source>failed to find a suitable way to split transactions</source>
        <translation>未能找到合适的方式来分割交易</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694"/>
        <source>unknown transfer error: </source>
        <translation>未知的传输错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699"/>
        <source>Multisig error: </source>
        <translation>多重签名错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="705"/>
        <source>internal error: </source>
        <translation>内部错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="710"/>
        <source>unexpected error: </source>
        <translation>意外错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714"/>
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>出现错误，这可能意味着节点可能试图让您重试创建交易，并将您拥有的输出归零。或者这可能是一个善意的错误。谨慎的做法是断开与该节点的连接，并且不要尝试立即发送交易。或者，连接到另一个节点，以便原始节点无法关联信息。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726"/>
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>文件 %s 可能存储钱包私钥！使用不同的文件名。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9295"/>
        <source> seconds</source>
        <translation>秒</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9297"/>
        <source> minutes</source>
        <translation>分钟</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9299"/>
        <source> hours</source>
        <translation>小时</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9301"/>
        <source> days</source>
        <translation>天</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9303"/>
        <source> months</source>
        <translation>月</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9304"/>
        <source>a long time</source>
        <translation>很长一段时间</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11447"/>
        <source>Unknown command: </source>
        <translation>未知命令： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="190"/>
        <source>Restore from specific blockchain height</source>
        <translation>从特定区块链高度恢复</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193"/>
        <source>Create an address file for new wallets</source>
        <translation>为新钱包创建地址文件</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195"/>
        <source>Display English language names</source>
        <translation>显示英文名称</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365"/>
        <source>daemon is busy. Please try again later.</source>
        <translation>守护进程正忙。请稍后重试。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="374"/>
        <source>possibly lost connection to daemon</source>
        <translation>可能失去与守护进程的连接</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="391"/>
        <source>Error: </source>
        <translation>错误： </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="500"/>
        <source>Is this OK?</source>
        <translation>这样可以吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="666"/>
        <source>transaction %s was rejected by daemon</source>
        <translation>事务 %s 被守护程序拒绝</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678"/>
        <source>destination amount is zero</source>
        <translation>目的地金额为零</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="683"/>
        <source>transaction has no destination</source>
        <translation>交易没有目的地</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="729"/>
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>文件 %s 已存在。您确定要覆盖它吗？</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11422"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>这是命令行 Salvium 钱包。它需要连接到 Salvium 守护程序才能正常工作。
警告：请勿在另一个分叉上重复使用您的 Salvium 密钥，除非此分叉内置了密钥重用缓解措施。这样做会损害您的隐私。</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11441"/>
        <source>Failed to initialize wallet</source>
        <translation>钱包初始化失败</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="244"/>
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>在&lt;主机>:&lt;端口>处使用守护进程实例</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="245"/>
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>在主机 &lt;arg> 上使用守护进程实例而不是本地主机</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251"/>
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>在端口 &lt;arg> 使用守护进程实例而不是 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260"/>
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>对于测试网。守护进程还必须使用 --testnet 标志启动</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="280"/>
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>包含用于初始化 PRNG 的额外熵的文件（任何数据，目标是 256 位熵有用，这通常意味着超过 256 位数据）</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281"/>
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>允许与使用不同版本的守护程序通信</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375"/>
        <source>can't specify daemon host or port more than once</source>
        <translation>无法多次指定守护程序主机或端口</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511"/>
        <source>can't specify more than one of --password and --password-file</source>
        <translation>无法指定 --password 和 --password-file 之一以上</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="525"/>
        <source>the password file specified could not be read</source>
        <translation>无法读取指定的密码文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="551"/>
        <source>Failed to load file </source>
        <translation>加载文件失败 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="249"/>
        <source>Wallet password (escape/quote as needed)</source>
        <translation>钱包密码（根据需要转义/引用）</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="246"/>
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip>:]&lt;端口>用于守护进程连接的袜子代理</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="247"/>
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>启用依赖于受信任守护进程的命令</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="248"/>
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>禁用依赖于受信任守护进程的命令</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252"/>
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>为守护进程 RPC 客户端指定用户名[:密码]</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253"/>
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>在守护进程 RPC 连接上启用 SSL：启用|禁用|自动检测</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="257"/>
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>允许的 RPC 服务器的有效指纹列表</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258"/>
        <source>Allow any SSL certificate from the daemon</source>
        <translation>允许来自守护程序的任何 SSL 证书</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259"/>
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>允许用户（通过--daemon-ssl-ca-certificates）链证书</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261"/>
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>对于舞台网。守护进程还必须使用 --stagenet 标志启动</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263"/>
        <source>Set shared ring database path</source>
        <translation>设置共享环数据库路径</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="274"/>
        <source>Number of rounds for the key derivation function</source>
        <translation>密钥导出函数的轮数</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="275"/>
        <source>HW device to use</source>
        <translation>要使用的硬件设备</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="276"/>
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>硬件设备钱包派生路径（例如 SLIP-10）</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="278"/>
        <source>Do not use DNS</source>
        <translation>不使用 DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="279"/>
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>不连接到守护程序，也不使用 DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="367"/>
        <source>Invalid argument for </source>
        <translation>无效参数 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428"/>
        <source>Enabling --</source>
        <translation>启用——</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428"/>
        <source> requires --</source>
        <translation>需要——</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="429"/>
        <location filename="../src/wallet/wallet2.cpp" line="430"/>
        <source> or --</source>
        <translation>或者  - </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="430"/>
        <source> or use of a .onion/.i2p domain</source>
        <translation>或使用 .onion/.i2p 域</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="448"/>
        <source>#NAME?</source>
        <translation>＃姓名？</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="458"/>
        <source>Daemon is local, assuming trusted</source>
        <translation>守护进程是本地的，假设可信</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="468"/>
        <source>failed to initialize the wallet</source>
        <translation>钱包初始化失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532"/>
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>未指定密码；使用 --prompt-for-password 提示输入密码</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534"/>
        <source>Enter a new password for the wallet</source>
        <translation>输入钱包的新密码</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534"/>
        <source>Wallet password</source>
        <translation>钱包密码</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="557"/>
        <source>Failed to parse JSON</source>
        <translation>解析 JSON 失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564"/>
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>版本 %u 太新，我们最多只能了解 %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="580"/>
        <source>failed to parse view key secret key</source>
        <translation>无法解析查看密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="585"/>
        <source>view secret key may not be all zeroes</source>
        <translation>查看密钥可能不全为零</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587"/>
        <location filename="../src/wallet/wallet2.cpp" line="657"/>
        <location filename="../src/wallet/wallet2.cpp" line="702"/>
        <source>failed to verify view key secret key</source>
        <translation>验证查看密钥秘钥失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="598"/>
        <source>failed to parse spend key secret key</source>
        <translation>无法解析花费密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="603"/>
        <source>spend secret key may not be all zeroes</source>
        <translation>花费密钥可能不全为零</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605"/>
        <location filename="../src/wallet/wallet2.cpp" line="667"/>
        <location filename="../src/wallet/wallet2.cpp" line="728"/>
        <source>failed to verify spend key secret key</source>
        <translation>未能验证花费密钥密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="617"/>
        <source>Electrum-style word list failed verification</source>
        <translation>Electrum 风格的单词列表验证失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="637"/>
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>必须至少指定 Electrum 风格的单词列表、私有视图密钥或私有支出密钥之一</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="641"/>
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>指定了 Electrum 风格的单词列表和私钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="651"/>
        <source>invalid address</source>
        <translation>地址无效</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="660"/>
        <source>view key does not match standard address</source>
        <translation>查看键与标准地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="670"/>
        <source>spend key does not match standard address</source>
        <translation>花费密钥与标准地址不匹配</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="678"/>
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>无法从 JSON 生成已弃用的钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="714"/>
        <source>failed to parse address: </source>
        <translation>解析地址失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="720"/>
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>必须指定地址才能创建手表钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="737"/>
        <source>failed to generate new wallet: </source>
        <translation>生成新钱包失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2172"/>
        <source>Password is needed to compute key image for incoming SALs</source>
        <translation>需要密码来计算传入 SAL 的密钥映像</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2173"/>
        <source>Invalid password: password is needed to compute key image for incoming SALs</source>
        <translation>密码无效：需要密码才能计算传入 SAL 的密钥映像</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3752"/>
        <source>reorg exceeds maximum allowed depth, use 'set max-reorg-depth N' to allow it, reorg depth: </source>
        <translation>重组超过允许的最大深度，使用“set max-reorg-depth N”来允许它，重组深度： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5640"/>
        <location filename="../src/wallet/wallet2.cpp" line="6221"/>
        <location filename="../src/wallet/wallet2.cpp" line="6710"/>
        <source>Primary account</source>
        <translation>主账户</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9079"/>
        <source>Transaction sanity check failed</source>
        <translation>交易健全性检查失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12642"/>
        <source>No funds received in this tx.</source>
        <translation>本次交易中未收到任何资金。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13554"/>
        <source>failed to read file </source>
        <translation>读取文件失败 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194"/>
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>将子地址先行大小设置为 &lt;major>:&lt;minor></translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254"/>
        <source>Path to a PEM format private key</source>
        <translation>PEM 格式私钥的路径</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255"/>
        <source>Path to a PEM format certificate</source>
        <translation>PEM 格式证书的路径</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256"/>
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>包含用于替换系统 CA 的串联 PEM 格式证书的文件路径。</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="219"/>
        <source>Failed to create directory </source>
        <translation>创建目录失败 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="221"/>
        <source>Failed to create directory %s: %s</source>
        <translation>未能创建目录 %s: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232"/>
        <source>Cannot specify --</source>
        <translation>无法指定——</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232"/>
        <source> and --</source>
        <translation>和  - </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251"/>
        <source>Failed to create file </source>
        <translation>创建文件失败 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251"/>
        <source>. Check permissions or remove file</source>
        <translation>。检查权限或删除文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="261"/>
        <source>Error writing to file </source>
        <translation>写入文件时出错 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="264"/>
        <source>RPC username/password is stored in file </source>
        <translation>RPC用户名/密码存储在文件中 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="665"/>
        <source>Tag %s is unregistered.</source>
        <translation>标签 %s 未注册。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="693"/>
        <source>No matches for regex filter %s .</source>
        <translation>正则表达式过滤器 %s 没有匹配项。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3586"/>
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>无法进行交易。仅适用于 %s，交易金额 %s = %s + %s（费用）</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4594"/>
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>无法指定 --testnet 和 --stagenet 之一以上</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4613"/>
        <source>Can't specify more than one of --wallet-file and --generate-from-json</source>
        <translation>无法指定 --wallet-file 和 --generate-from-json 之一以上</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4619"/>
        <source>#NAME?</source>
        <translation>＃姓名？</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4631"/>
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>必须指定 --wallet-file 或 --generate-from-json 或 --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4635"/>
        <source>Loading wallet...</source>
        <translation>正在加载钱包...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4683"/>
        <source>Initial refresh failed: </source>
        <translation>初始刷新失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4688"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4720"/>
        <source>Saving wallet...</source>
        <translation>拯救钱包...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4690"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4722"/>
        <source>Successfully saved</source>
        <translation>保存成功</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4693"/>
        <source>Successfully loaded</source>
        <translation>加载成功</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4697"/>
        <source>Wallet initialization failed: </source>
        <translation>钱包初始化失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4703"/>
        <source>Failed to initialize wallet RPC server</source>
        <translation>初始化钱包RPC服务器失败</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4707"/>
        <source>Starting wallet RPC server</source>
        <translation>启动钱包RPC服务器</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4714"/>
        <source>Failed to run wallet: </source>
        <translation>钱包运行失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4717"/>
        <source>Stopped wallet RPC server</source>
        <translation>已停止钱包 RPC 服务器</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4726"/>
        <source>Failed to save wallet: </source>
        <translation>保存钱包失败： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4800"/>
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>这是 RPC Salvium 钱包。它需要连接到 Salvium 守护进程才能正常工作。</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="152"/>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11388"/>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4779"/>
        <source>Wallet options</source>
        <translation>钱包选项</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73"/>
        <source>Generate wallet from JSON format file</source>
        <translation>从JSON格式文件生成钱包</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77"/>
        <source>Use wallet &lt;arg&gt;</source>
        <translation>使用钱包 &lt;arg>;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81"/>
        <source>Set RPC client secret key for RPC payments</source>
        <translation>设置 RPC 支付的 RPC 客户端密钥</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85"/>
        <source>Wallet password file</source>
        <translation>钱包密码文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113"/>
        <source>Max number of threads to use for a parallel job</source>
        <translation>用于并行作业的最大线程数</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114"/>
        <source>Specify log file</source>
        <translation>指定日志文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115"/>
        <source>Config file</source>
        <translation>配置文件</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127"/>
        <source>General options</source>
        <translation>一般选项</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152"/>
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>这是命令行 Salvium 钱包。它需要连接到 Salvium 守护程序才能正常工作。</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176"/>
        <source>Can't find config file </source>
        <translation>找不到配置文件 </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220"/>
        <source>Logging to: </source>
        <translation>记录到： </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222"/>
        <source>Logging to %s</source>
        <translation>记录到 %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226"/>
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>警告：您可能没有足够高的可锁定内存限制</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228"/>
        <source>see ulimit -l</source>
        <translation>请参见 ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153"/>
        <source>Usage:</source>
        <translation>用法：</translation>
    </message>
</context>
</TS>
