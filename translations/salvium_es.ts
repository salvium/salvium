<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es">
<context>
    <name>Monero::AddressBookImpl</name>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="53" />
        <source>Invalid destination address</source>
        <translation>Dirección de destino no válida</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/address_book.cpp" line="60" />
        <source>Payment ID supplied: this is obsolete</source>
        <translation>ID de pago suministrado: está obsoleto</translation>
    </message>
</context>
<context>
    <name>Monero::PendingTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="92" />
        <source>Attempting to save transaction to file, but specified file(s) exist. Exiting to not risk overwriting. File:</source>
        <translation>Intentando guardar la transacción en un archivo, pero existen los archivos especificados. Saliendo para no correr el riesgo de sobrescribir. Archivo:</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="99" />
        <source>Failed to write transaction(s) to file</source>
        <translation>No se pudieron escribir las transacciones en el archivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="139" />
        <source>daemon is busy. Please try again later.</source>
        <translation>El demonio está ocupado. Inténtalo de nuevo más tarde.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="142" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>No hay conexión con el demonio. Asegúrese de que el demonio esté ejecutándose.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="146" />
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>La transacción %s fue rechazada por el demonio con el estado: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="151" />
        <source>. Reason: </source>
        <translation>. Razón: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="153" />
        <source>Unknown exception: </source>
        <translation>Excepción desconocida: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="156" />
        <source>Unhandled exception</source>
        <translation>Excepción no controlada</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="229" />
        <source>Couldn't multisig sign data: </source>
        <translation>No se pudieron realizar múltiples firmas de datos: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/pending_transaction.cpp" line="251" />
        <source>Couldn't sign multisig transaction: </source>
        <translation>No se pudo firmar la transacción multifirma: </translation>
    </message>
</context>
<context>
    <name>Monero::UnsignedTransactionImpl</name>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="75" />
        <source>This is a watch only wallet</source>
        <translation>Esta es una billetera solo para relojes.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="85" />
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="92" />
        <source>Failed to sign transaction</source>
        <translation>No se pudo firmar la transacción</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="168" />
        <source>Claimed change does not go to a paid address</source>
        <translation>El cambio reclamado no va a una dirección pagada</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="174" />
        <source>Claimed change is larger than payment to the change address</source>
        <translation>El cambio reclamado es mayor que el pago a la dirección de cambio</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="184" />
        <source>Change goes to more than one address</source>
        <translation>El cambio va a más de una dirección</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="197" />
        <source>sending %s to %s</source>
        <translation>enviando %s a %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="203" />
        <source>with no destinations</source>
        <translation>Sin destinos</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="209" />
        <source>%s change to %s</source>
        <translation>%s cambia a %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="212" />
        <source>no change</source>
        <translation>Sin cambios</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/unsigned_transaction.cpp" line="214" />
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu. %s</source>
        <translation>Se cargaron %lu transacciones, por %s, tarifa %s, %s, %s, con tamaño de anillo mínimo %lu. %s</translation>
    </message>
</context>
<context>
    <name>Monero::WalletImpl</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="561" />
        <source>failed to parse address</source>
        <translation>No se pudo analizar la dirección</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="572" />
        <source>failed to parse secret spend key</source>
        <translation>No se pudo analizar la clave de gasto secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="587" />
        <source>Neither view key nor spend key supplied, cancelled</source>
        <translation>Ni ver clave ni gastar clave suministrada, cancelada</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="595" />
        <source>failed to parse secret view key</source>
        <translation>No se pudo analizar la clave de vista secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="604" />
        <source>failed to verify secret spend key</source>
        <translation>No se pudo verificar la clave de gasto secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="608" />
        <source>spend key does not match address</source>
        <translation>La clave de gasto no coincide con la dirección</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="614" />
        <source>failed to verify secret view key</source>
        <translation>No se pudo verificar la clave de vista secreta</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="618" />
        <source>view key does not match address</source>
        <translation>La clave de visualización no coincide con la dirección</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="641" />
        <location filename="../src/wallet/api/wallet.cpp" line="658" />
        <source>failed to generate new wallet: </source>
        <translation>No se pudo generar una nueva billetera: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="706" />
        <source>Electrum seed is empty</source>
        <translation>La semilla de electrum está vacía</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="715" />
        <source>Electrum-style word list failed verification</source>
        <translation>Lista de palabras de estilo Electrum no superó la verificación</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1071" />
        <source>Failed to load unsigned transactions</source>
        <translation>No se pudieron cargar transacciones sin firmar</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1094" />
        <source>Failed to load transaction from file</source>
        <translation>No se pudo cargar la transacción desde el archivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1110" />
        <source>Wallet is view only</source>
        <translation>La billetera es de solo lectura</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1118" />
        <source>failed to save file </source>
        <translation>No se pudo guardar el archivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1134" />
        <source>Key images can only be imported with a trusted daemon</source>
        <translation>Las imágenes clave solo se pueden importar con un demonio confiable</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1147" />
        <source>Failed to import key images: </source>
        <translation>Error al importar imágenes clave: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1158" />
        <location filename="../src/wallet/api/wallet.cpp" line="1188" />
        <source>Not supported on HW wallets.</source>
        <translation>No compatible con billeteras HW.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1169" />
        <source>Failed to save file: </source>
        <translation>No se pudo guardar el archivo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1176" />
        <source>Error exporting outputs: </source>
        <translation>Error al exportar salidas: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1197" />
        <source>Failed to read file: </source>
        <translation>Error al leer el archivo: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1209" />
        <source>Failed to import outputs: </source>
        <translation>Error al importar las salidas: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1220" />
        <source>Failed to scan transactions: no transaction ids provided.</source>
        <translation>No se pudieron escanear las transacciones: no se proporcionaron identificadores de transacción.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1231" />
        <source>Invalid txid specified: </source>
        <translation>Txid especificado no válido: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1249" />
        <source>Failed to scan transaction: </source>
        <translation>Error al escanear la transacción: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1281" />
        <source>Failed to get subaddress label: </source>
        <translation>No se pudo obtener la etiqueta de subdirección: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1294" />
        <source>Failed to set subaddress label: </source>
        <translation>No se pudo establecer la etiqueta de subdirección: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1311" />
        <source>Failed to get multisig info: </source>
        <translation>No se pudo obtener información multifirma: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1328" />
        <source>Failed to make multisig: </source>
        <translation>No se pudo crear multifirma: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1342" />
        <source>Failed to exchange multisig keys: </source>
        <translation>Error al intercambiar claves multifirma: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1358" />
        <source>Failed to export multisig images: </source>
        <translation>Error al exportar imágenes multifirma: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1376" />
        <source>Failed to parse imported multisig images</source>
        <translation>No se pudieron analizar las imágenes multifirma importadas</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1386" />
        <source>Failed to import multisig images: </source>
        <translation>Error al importar imágenes multifirma: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1400" />
        <source>Failed to check for partial multisig key images: </source>
        <translation>No se pudo verificar si hay imágenes de claves multifirma parciales: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1428" />
        <source>Failed to restore multisig transaction: </source>
        <translation>No se pudo restaurar la transacción multifirma: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1477" />
        <source>Sending all requires one destination address</source>
        <translation>Para enviar todo se requiere una dirección de destino</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1481" />
        <source>Destinations and amounts are unequal</source>
        <translation>Los destinos y los montos son desiguales</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1489" />
        <source>payment id has invalid format, expected 64 character hex string: </source>
        <translation>El ID de pago tiene un formato no válido; se esperaba una cadena hexadecimal de 64 caracteres: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1497" />
        <source>Invalid destination address</source>
        <translation>Dirección de destino no válida</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1503" />
        <source>a single transaction cannot use more than one payment id</source>
        <translation>Una sola transacción no puede utilizar más de un ID de pago</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1531" />
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>No se pudo configurar la identificación de pago, aunque se decodificó correctamente</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1556" />
        <location filename="../src/wallet/api/wallet.cpp" line="1647" />
        <source>daemon is busy. Please try again later.</source>
        <translation>El demonio está ocupado. Inténtalo de nuevo más tarde.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1558" />
        <location filename="../src/wallet/api/wallet.cpp" line="1649" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>No hay conexión con el demonio. Asegúrese de que el demonio esté ejecutándose.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1560" />
        <location filename="../src/wallet/api/wallet.cpp" line="1651" />
        <source>RPC error: </source>
        <translation>Error de RPC: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1562" />
        <source>failed to get outputs to mix: %s</source>
        <translation>No se pudieron obtener las salidas para mezclar: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1566" />
        <location filename="../src/wallet/api/wallet.cpp" line="1658" />
        <source>not enough money to transfer, available only %s, sent amount %s</source>
        <translation>No hay suficiente dinero para transferir, solo hay %s disponible, monto enviado %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1573" />
        <location filename="../src/wallet/api/wallet.cpp" line="1666" />
        <source>not enough money to transfer, overall balance only %s, sent amount %s</source>
        <translation>No hay suficiente dinero para transferir, saldo total solo %s, monto enviado %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1580" />
        <location filename="../src/wallet/api/wallet.cpp" line="1674" />
        <source>not enough money to transfer, available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>No hay suficiente dinero para transferir, solo hay %s disponible, monto de la transacción %s = %s + %s (tarifa)</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1588" />
        <location filename="../src/wallet/api/wallet.cpp" line="1682" />
        <source>not enough outputs for specified ring size</source>
        <translation>No hay suficientes salidas para el tamaño de anillo especificado</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590" />
        <location filename="../src/wallet/api/wallet.cpp" line="1684" />
        <source>output amount</source>
        <translation>cantidad de salida</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1590" />
        <location filename="../src/wallet/api/wallet.cpp" line="1684" />
        <source>found outputs to use</source>
        <translation>Se encontraron salidas para usar</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1592" />
        <source>Please sweep unmixable outputs.</source>
        <translation>Por favor, barra las salidas que no se puedan mezclar.</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1595" />
        <location filename="../src/wallet/api/wallet.cpp" line="1688" />
        <source>transaction was not constructed</source>
        <translation>La transacción no se construyó</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1598" />
        <location filename="../src/wallet/api/wallet.cpp" line="1691" />
        <source>transaction %s was rejected by daemon with status: </source>
        <translation>La transacción %s fue rechazada por el demonio con el estado: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1603" />
        <source>destination amount is zero</source>
        <translation>El importe de destino es cero</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1605" />
        <source>transaction has no destination</source>
        <translation>La transacción no tiene destino</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1607" />
        <location filename="../src/wallet/api/wallet.cpp" line="1698" />
        <source>failed to find a suitable way to split transactions</source>
        <translation>No se pudo encontrar una forma adecuada de dividir las transacciones</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1609" />
        <location filename="../src/wallet/api/wallet.cpp" line="1700" />
        <source>unknown transfer error: </source>
        <translation>Error de transferencia desconocido: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1611" />
        <location filename="../src/wallet/api/wallet.cpp" line="1702" />
        <source>internal error: </source>
        <translation>Error interno: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1613" />
        <location filename="../src/wallet/api/wallet.cpp" line="1704" />
        <source>unexpected error: </source>
        <translation>Error inesperado: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1615" />
        <location filename="../src/wallet/api/wallet.cpp" line="1706" />
        <source>unknown error</source>
        <translation>error desconocido</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1653" />
        <source>failed to get outputs to mix</source>
        <translation>No se logró que las salidas se mezclaran</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1696" />
        <source>one of destinations is zero</source>
        <translation>Uno de los destinos es cero</translation>
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
        <translation>No se pudo analizar txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1836" />
        <source>no tx keys found for this txid</source>
        <translation>No se encontraron claves tx para este txid</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1860" />
        <location filename="../src/wallet/api/wallet.cpp" line="1869" />
        <source>Failed to parse tx key</source>
        <translation>No se pudo analizar la clave tx</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="1878" />
        <location filename="../src/wallet/api/wallet.cpp" line="1907" />
        <location filename="../src/wallet/api/wallet.cpp" line="1935" />
        <location filename="../src/wallet/api/wallet.cpp" line="2016" />
        <location filename="../src/wallet/api/wallet.cpp" line="2047" />
        <source>Failed to parse address</source>
        <translation>No se pudo analizar la dirección</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2021" />
        <source>Address must not be a subaddress</source>
        <translation>La dirección no debe ser una subdirección</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2052" />
        <source>Address doesn't belong to the wallet</source>
        <translation>La dirección no pertenece a la billetera</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2076" />
        <source>The wallet must be in multisig ready state</source>
        <translation>La billetera debe estar preparada para multifirma</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2098" />
        <source>Given string is not a key</source>
        <translation>La cadena dada no es una clave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2361" />
        <source>Rescan spent can only be used with a trusted daemon</source>
        <translation>El rescan gastado solo se puede utilizar con un demonio confiable</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2419" />
        <source>Invalid output: </source>
        <translation>Salida no válida: </translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2426" />
        <source>Failed to mark outputs as spent</source>
        <translation>No se pudieron marcar las salidas como gastadas</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2437" />
        <location filename="../src/wallet/api/wallet.cpp" line="2459" />
        <source>Failed to parse output amount</source>
        <translation>No se pudo analizar la cantidad de salida</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2442" />
        <location filename="../src/wallet/api/wallet.cpp" line="2464" />
        <source>Failed to parse output offset</source>
        <translation>No se pudo analizar el desplazamiento de salida</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2448" />
        <source>Failed to mark output as spent</source>
        <translation>No se pudo marcar la salida como gastada</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2470" />
        <source>Failed to mark output as unspent</source>
        <translation>No se pudo marcar la salida como no gastada</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2481" />
        <location filename="../src/wallet/api/wallet.cpp" line="2520" />
        <source>Failed to parse key image</source>
        <translation>No se pudo analizar la imagen clave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2487" />
        <source>Failed to get ring</source>
        <translation>No se pudo conseguir el anillo</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2505" />
        <source>Failed to get rings</source>
        <translation>No se pudieron conseguir los anillos</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="2526" />
        <source>Failed to set ring</source>
        <translation>No se pudo configurar el anillo</translation>
    </message>
</context>
<context>
    <name>Wallet</name>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="316" />
        <source>Failed to parse address</source>
        <translation>No se pudo analizar la dirección</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="323" />
        <source>Failed to parse key</source>
        <translation>No se pudo analizar la clave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="331" />
        <source>failed to verify key</source>
        <translation>No se pudo verificar la clave</translation>
    </message>
    <message>
        <location filename="../src/wallet/api/wallet.cpp" line="341" />
        <source>key does not match address</source>
        <translation>La clave no coincide con la dirección</translation>
    </message>
</context>
<context>
    <name>command_line</name>
    <message>
        <location filename="../src/common/command_line.cpp" line="54" />
        <source>yes</source>
        <translation>Sí</translation>
    </message>
    <message>
        <location filename="../src/common/command_line.cpp" line="68" />
        <source>no</source>
        <translation>No</translation>
    </message>
</context>
<context>
    <name>cryptonote::rpc_args</name>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="92" />
        <source>Specify IP to bind RPC server</source>
        <translation>Especificar IP para vincular el servidor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="93" />
        <source>Specify IPv6 address to bind RPC server</source>
        <translation>Especifique la dirección IPv6 para vincular el servidor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="94" />
        <source>Specify IP to bind restricted RPC server</source>
        <translation>Especificar IP para vincular servidor RPC restringido</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="95" />
        <source>Specify IPv6 address to bind restricted RPC server</source>
        <translation>Especifique la dirección IPv6 para vincular el servidor RPC restringido</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="96" />
        <source>Allow IPv6 for RPC</source>
        <translation>Permitir IPv6 para RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="97" />
        <source>Ignore unsuccessful IPv4 bind for RPC</source>
        <translation>Ignorar enlace IPv4 fallido para RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="98" />
        <source>Specify username[:password] required for RPC server</source>
        <translation>Especifique el nombre de usuario [: contraseña] requerido para el servidor RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="99" />
        <source>Confirm rpc-bind-ip value is NOT a loopback (local) IP</source>
        <translation>Confirme que el valor de rpc-bind-ip NO sea una IP de loopback (local)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="100" />
        <source>Specify a comma separated list of origins to allow cross origin resource sharing</source>
        <translation>Especifique una lista de orígenes separados por comas para permitir el uso compartido de recursos entre orígenes</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="101" />
        <source>Enable SSL on RPC connections: enabled|disabled|autodetect</source>
        <translation>Habilitar SSL en conexiones RPC: habilitado|deshabilitado|detección automática</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="102" />
        <source>Path to a PEM format private key</source>
        <translation>Ruta a una clave privada en formato PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="103" />
        <source>Path to a PEM format certificate</source>
        <translation>Ruta hacia un certificado en formato PEM</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="104" />
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Ruta al archivo que contiene los certificados en formato PEM concatenados para reemplazar las CA del sistema.</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="105" />
        <source>List of certificate fingerprints to allow</source>
        <translation>Lista de huellas dactilares de certificados que se permitirán</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="106" />
        <source>Allow user (via --rpc-ssl-certificates) chain certificates</source>
        <translation>Permitir certificados en cadena de usuarios (a través de --rpc-ssl-certificates)</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="107" />
        <source>Allow any peer certificate</source>
        <translation>Permitir cualquier certificado de pares</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="108" />
        <source>Do not ban hosts on RPC errors</source>
        <translation>No banear hosts en caso de errores RPC</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="155" />
        <location filename="../src/rpc/rpc_args.cpp" line="183" />
        <location filename="../src/rpc/rpc_args.cpp" line="204" />
        <location filename="../src/rpc/rpc_args.cpp" line="221" />
        <source>Invalid IP address given for --</source>
        <translation>Dirección IP no válida proporcionada para --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="163" />
        <location filename="../src/rpc/rpc_args.cpp" line="191" />
        <source> permits inbound unencrypted external connections. Consider SSH tunnel or SSL proxy instead. Override with --</source>
        <translation> Permite conexiones externas entrantes sin cifrar. Considere utilizar un túnel SSH o un proxy SSL. Anule con --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242" />
        <source>Username specified with --</source>
        <translation>Nombre de usuario especificado con --</translation>
    </message>
    <message>
        <location filename="../src/rpc/rpc_args.cpp" line="242" />
        <source> cannot be empty</source>
        <translation> no puede estar vacío</translation>
    </message>
</context>
<context>
    <name>cryptonote::simple_wallet</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4933" />
        <source>Daemon uses a different RPC major version (%u) than the wallet (%u): %s. Either update one of them, or use --allow-mismatched-daemon-version.</source>
        <translation>Daemon usa una versión principal de RPC diferente (%u) que la billetera (%u): %s. Actualice una de ellas o use --allow-mismatched-daemon-version.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7068" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7622" />
        <source>Spending from address index %d
</source>
        <translation>Gasto del índice de dirección %d
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7083" />
        <source>Your transaction needs to be split into %llu transactions.  This will result in a transaction fee being applied to each transaction, for a total fee of %s</source>
        <translation>Su transacción debe dividirse en %llu transacciones. Esto dará como resultado que se aplique una tarifa de transacción a cada transacción, por un total de %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7089" />
        <source>The transaction fee is %s</source>
        <translation>La tarifa de transacción es %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7092" />
        <source>, of which %s is dust from change</source>
        <translation>, de los cuales %s es polvo del cambio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7093" />
        <source>A total of %s from dust change will be sent to dust address</source>
        <translation>Se enviará un total de %s del cambio de polvo a la dirección de polvo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7376" />
        <source>Not enough money in unlocked balance</source>
        <translation>No hay suficiente dinero en el saldo desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7421" />
        <source>No address given</source>
        <translation>No hay dirección indicada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7487" />
        <source>missing lockedblocks parameter</source>
        <translation>parámetro de bloques bloqueados faltante</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7497" />
        <source>bad locked_blocks parameter</source>
        <translation>parámetro stuck_blocks incorrecto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7793" />
        <source>failed to parse Payment ID</source>
        <translation>No se pudo analizar el ID de pago</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2226" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2273" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7816" />
        <source>failed to parse key image</source>
        <translation>No se pudo analizar la imagen clave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7854" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8084" />
        <source>No outputs found</source>
        <translation>No se encontraron salidas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7859" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8089" />
        <source>Multiple transactions are created, which is not supposed to happen</source>
        <translation>Se crean múltiples transacciones, lo cual no debería suceder.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7864" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8094" />
        <source>The transaction uses multiple or no inputs, which is not supposed to happen</source>
        <translation>La transacción utiliza múltiples entradas o ninguna, lo que no debería suceder.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7914" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7941" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8175" />
        <source>Money successfully sent, transaction: </source>
        <translation>Dinero enviado exitosamente, transacción: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7989" />
        <source>missing threshold amount</source>
        <translation>cantidad de umbral faltante</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7995" />
        <source>invalid amount threshold</source>
        <translation>umbral de cantidad no válida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8593" />
        <source>Claimed change does not go to a paid address</source>
        <translation>El cambio reclamado no va a una dirección pagada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8598" />
        <source>Claimed change is larger than payment to the change address</source>
        <translation>El cambio reclamado es mayor que el pago a la dirección de cambio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8607" />
        <source>Change goes to more than one address</source>
        <translation>El cambio va a más de una dirección</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8629" />
        <source>sending %s to %s</source>
        <translation>enviando %s a %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8639" />
        <source> dummy output(s)</source>
        <translation> salida(s) ficticia(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8642" />
        <source>with no destinations</source>
        <translation>Sin destinos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8651" />
        <source>no change</source>
        <translation>Sin cambios</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5750" />
        <source>Daemon is local, assuming trusted</source>
        <translation>Daemon es local, asumiendo que es de confianza</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5413" />
        <source>Password for new watch-only wallet</source>
        <translation>Contraseña para la nueva billetera exclusiva para relojes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="413" />
        <source>false</source>
        <translation>FALSO</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="775" />
        <source>Commands: </source>
        <translation>Comandos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="789" />
        <source>Unknown command: </source>
        <translation>Comando desconocido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="796" />
        <source>Command usage: </source>
        <translation>Uso del comando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="799" />
        <source>Command description: </source>
        <translation>Descripción del comando: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="825" />
        <source>wallet is watch-only and has no spend key</source>
        <translation>La billetera es solo para vigilancia y no tiene clave de gasto</translation>
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
        <translation>Comando no compatible con la billetera HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="856" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="933" />
        <source>wallet is watch-only and has no seed</source>
        <translation>La billetera es solo para observación y no tiene semilla.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="865" />
        <source>wallet is multisig but not yet finalized</source>
        <translation>La billetera es multisig pero aún no está finalizada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="874" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="943" />
        <source>wallet is non-deterministic and has no seed</source>
        <translation>La billetera no es determinista y no tiene semilla</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="898" />
        <source>Failed to retrieve seed</source>
        <translation>No se pudo recuperar la semilla</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="928" />
        <source>wallet is multisig and has no seed</source>
        <translation>La billetera es multisig y no tiene semilla</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="953" />
        <source>Incorrect password</source>
        <translation>Contraseña incorrecta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="975" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1153" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1236" />
        <source>Your original password was incorrect.</source>
        <translation>Su contraseña original era incorrecta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="990" />
        <source>Error with wallet rewrite: </source>
        <translation>Error con la reescritura de la billetera: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10608" />
        <source>Random payment ID: </source>
        <translation>ID de pago aleatorio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1011" />
        <source>Current fee is %s %s per %s</source>
        <translation>La tarifa actual es %s %s por %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="603" />
        <source>Payment required, see the 'rpc_payment_info' command</source>
        <translation>Se requiere pago, consulte el comando &amp;#39;rpc_payment_info&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1027" />
        <source>Error: failed to estimate backlog array size: </source>
        <translation>Error: no se pudo estimar el tamaño de la matriz de registros atrasados: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1032" />
        <source>Error: bad estimated backlog array size</source>
        <translation>Error: tamaño de matriz de cartera de pedidos mal estimado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1044" />
        <source> (current)</source>
        <translation> (actual)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1047" />
        <source>%u block (%u minutes) backlog at priority %u%s</source>
        <translation>%u bloque (%u minutos) de retraso en la prioridad %u%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1049" />
        <source>%u to %u block (%u to %u minutes) backlog at priority %u</source>
        <translation>%u a %u bloque (%u a %u minutos) de retraso en la prioridad %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1052" />
        <source>No backlog at priority </source>
        <translation>Sin atraso en la prioridad </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1074" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1121" />
        <source>This wallet is already multisig</source>
        <translation>Esta billetera ya es multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1079" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1126" />
        <source>wallet is watch-only and cannot be made multisig</source>
        <translation>La billetera es solo para vigilancia y no se puede convertir en multifirma.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1085" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1132" />
        <source>This wallet has been used before, please use a new wallet to create a multisig wallet</source>
        <translation>Esta billetera ya se ha usado antes, utilice una nueva billetera para crear una billetera multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1093" />
        <source>Send this multisig info to all other participants, then use make_multisig &lt;threshold&gt; &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>Envíe esta información multisig a todos los demás participantes y luego use make_multisig&lt;threshold&gt;&lt;info1&gt; [&lt;info2&gt; ...] con la información multifirma de otros</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1094" />
        <source>This includes the PRIVATE view key, so needs to be disclosed only to that multisig wallet's participants </source>
        <translation>Esto incluye la clave de vista PRIVADA, por lo que debe revelarse solo a los participantes de esa billetera multifirma. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1146" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2890" />
        <source>Invalid threshold</source>
        <translation>Umbral no válido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1168" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1247" />
        <source>Another step is needed</source>
        <translation>Es necesario dar otro paso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1180" />
        <source>Error creating multisig: </source>
        <translation>Error al crear multisig: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1187" />
        <source>Error creating multisig: new wallet is not multisig</source>
        <translation>Error al crear multisig: la nueva billetera no es multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1190" />
        <source> multisig address: </source>
        <translation> dirección multifirma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1224" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1289" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1357" />
        <source>This wallet is not multisig</source>
        <translation>Esta billetera no es multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1229" />
        <source>This wallet is already finalized</source>
        <translation>Esta billetera ya está finalizada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1259" />
        <source>Multisig address: </source>
        <translation>Dirección multifirma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1294" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1362" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1458" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1576" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1658" />
        <source>This multisig wallet is not yet finalized</source>
        <translation>Esta billetera multisig aún no está finalizada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1322" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10983" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11140" />
        <source>failed to save file </source>
        <translation>No se pudo guardar el archivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1330" />
        <source>Error exporting multisig info: </source>
        <translation>Error al exportar información multifirma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1334" />
        <source>Multisig info exported to </source>
        <translation>Información multifirma exportada a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1385" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10896" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10922" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11173" />
        <source>failed to read file </source>
        <translation>No se pudo leer el archivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1406" />
        <source>Failed to import multisig info: </source>
        <translation>Error al importar información multifirma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1417" />
        <source>Failed to update spent status after importing multisig info: </source>
        <translation>No se pudo actualizar el estado gastado después de importar información multifirma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1423" />
        <source>Untrusted daemon, spent status may be incorrect. Use a trusted daemon and run "rescan_spent"</source>
        <translation>Daemon no confiable, el estado de uso puede ser incorrecto. Use un daemon confiable y ejecute &amp;quot;rescan_spent&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1453" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1571" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1653" />
        <source>This is not a multisig wallet</source>
        <translation>Esta no es una billetera multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1503" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1512" />
        <source>Failed to sign multisig transaction</source>
        <translation>No se pudo firmar la transacción multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1519" />
        <source>Multisig error: </source>
        <translation>Error multifirma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1524" />
        <source>Failed to sign multisig transaction: </source>
        <translation>No se pudo firmar la transacción multifirma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1533" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1546" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8739" />
        <source>Transaction successfully signed to file </source>
        <translation>Transacción firmada exitosamente en archivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1547" />
        <source>It may be relayed to the network with submit_multisig</source>
        <translation>Se puede retransmitir a la red con submission_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1608" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1679" />
        <source>Failed to load multisig transaction from file</source>
        <translation>No se pudo cargar la transacción multifirma desde el archivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1614" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1684" />
        <source>Multisig transaction signed by only %u signers, needs %u more signatures</source>
        <translation>Transacción multifirma firmada solo por %u firmantes, necesita %u firmas más</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1623" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11383" />
        <source>Transaction successfully submitted, transaction </source>
        <translation>Transacción enviada exitosamente, transacción </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1624" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11384" />
        <source>You can check its status by using the `show_transfers` command.</source>
        <translation>Puede comprobar su estado utilizando el comando `show_transfers`.</translation>
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
        <translation>error desconocido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1700" />
        <source>Failed to export multisig transaction to file </source>
        <translation>No se pudo exportar la transacción multifirma al archivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1704" />
        <source>Saved exported multisig transaction file(s): </source>
        <translation>Archivos de transacciones multifirma exportadas guardadas: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1709" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2050" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6114" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6451" />
        <source>unexpected error: </source>
        <translation>Error inesperado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1732" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1889" />
        <source>Invalid key image</source>
        <translation>Imagen de clave no válida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1738" />
        <source>Invalid txid</source>
        <translation>Txid no válido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1765" />
        <source>Failed to get key image ring: </source>
        <translation>No se pudo obtener el anillo de imágenes clave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1780" />
        <source>File doesn't exist</source>
        <translation>El archivo no existe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1802" />
        <source>Invalid ring specification: </source>
        <translation>Especificación de anillo no válida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1810" />
        <source>Invalid key image: </source>
        <translation>Imagen de clave no válida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1815" />
        <source>Invalid ring type, expected relative or abosolute: </source>
        <translation>Tipo de anillo no válido, se esperaba relativo o absoluto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1821" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1833" />
        <source>Error reading line: </source>
        <translation>Error al leer la línea: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1844" />
        <source>Invalid ring: </source>
        <translation>Anillo inválido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1853" />
        <source>Invalid relative ring: </source>
        <translation>Anillo relativo no válido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1865" />
        <source>Invalid absolute ring: </source>
        <translation>Anillo absoluto no válido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874" />
        <source>Failed to set ring for key image: </source>
        <translation>No se pudo configurar el anillo para la imagen de la clave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1874" />
        <source>Continuing.</source>
        <translation>Continuo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1904" />
        <source>Missing absolute or relative keyword</source>
        <translation>Falta palabra clave absoluta o relativa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1914" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1921" />
        <source>invalid index: must be a strictly positive unsigned integer</source>
        <translation>índice no válido: debe ser un entero sin signo estrictamente positivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1929" />
        <source>invalid index: indices wrap</source>
        <translation>índice no válido: los índices se ajustan</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1939" />
        <source>invalid index: indices should be in strictly ascending order</source>
        <translation>Índice no válido: los índices deben estar en orden estrictamente ascendente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1946" />
        <source>failed to set ring</source>
        <translation>No se pudo configurar el anillo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1969" />
        <source>Invalid key image or txid</source>
        <translation>Imagen de clave o txid no válidos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1978" />
        <source>failed to unset ring</source>
        <translation>No se pudo desarmar el anillo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2001" />
        <source>RPC client ID: </source>
        <translation>ID de cliente RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2002" />
        <source>RPC client secret key: </source>
        <translation>Clave secreta del cliente RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2005" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2434" />
        <source>Failed to query daemon</source>
        <translation>No se pudo consultar el demonio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2013" />
        <source>Using daemon: </source>
        <translation>Usando el demonio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2014" />
        <source>Payments required for node use, current credits: </source>
        <translation>Pagos necesarios para el uso del nodo, créditos actuales: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2015" />
        <source>Credits target: </source>
        <translation>Créditos objetivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2018" />
        <source>Credits spent this session: </source>
        <translation>Créditos gastados en esta sesión: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2020" />
        <source>Credit discrepancy this session: </source>
        <translation>Discrepancia de crédito en esta sesión: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <source>Difficulty: </source>
        <translation>Dificultad: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <source>credits per hash found, </source>
        <translation>créditos por hash encontrado, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2022" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>credits/hash</source>
        <translation>créditos/hash</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2030" />
        <source>Mining for payment at %.1f H/s</source>
        <translation>Minería por pago a %.1f H/s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2035" />
        <source>Estimated time till %u credits target mined: %s</source>
        <translation>Tiempo estimado hasta que se extraigan los créditos objetivo de %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2039" />
        <source>Mining for payment</source>
        <translation>Minería con fines de pago</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2042" />
        <source>Not mining</source>
        <translation>No minar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2045" />
        <source>No payment needed for node use</source>
        <translation>No es necesario realizar ningún pago para utilizar el nodo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118" />
        <source>Bad argument: </source>
        <translation>Mal argumento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2118" />
        <source>should be "add"</source>
        <translation>Debería ser &amp;quot;agregar&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2127" />
        <source>Failed to open file</source>
        <translation>No se pudo abrir el archivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2211" />
        <source>Failed to save known rings: </source>
        <translation>No se pudieron guardar los anillos conocidos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2220" />
        <source>usage: %s &lt;key_image&gt;|&lt;pubkey&gt;</source>
        <translation>uso: %s&lt;key_image&gt; |&lt;pubkey&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2265" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2277" />
        <source>Frozen: </source>
        <translation>Congelado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2279" />
        <source>Not frozen: </source>
        <translation>No congelado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2293" />
        <source> bytes sent</source>
        <translation> bytes enviados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2294" />
        <source> bytes received</source>
        <translation> bytes recibidos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2306" />
        <source>No known public nodes</source>
        <translation>No hay nodos públicos conocidos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>address</source>
        <translation>DIRECCIÓN</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2318" />
        <source>last_seen</source>
        <translation>última vez visto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2324" />
        <source>never</source>
        <translation>nunca</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2332" />
        <source>Error retrieving public node list: </source>
        <translation>Error al recuperar la lista de nodos públicos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2342" />
        <source>Salvium, like Bitcoin, is a cryptocurrency. That is, it is digital money.</source>
        <translation>Salvium, al igual que Bitcoin, es una criptomoneda, es decir, es dinero digital.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2346" />
        <source>Salvium protects your privacy on the blockchain, and while Salvium strives to improve all the time,</source>
        <translation>Salvium protege su privacidad en la cadena de bloques y, si bien Salvium se esfuerza por mejorar todo el tiempo,</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2347" />
        <source>no privacy technology can be 100% perfect, Salvium included.</source>
        <translation>Ninguna tecnología de privacidad puede ser 100% perfecta, Salvium incluido.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2348" />
        <source>Salvium cannot protect you from malware, and it may not be as effective as we hope against powerful adversaries.</source>
        <translation>Salvium no puede protegerle contra el malware y puede que no sea tan eficaz como esperamos contra adversarios poderosos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2349" />
        <source>Flaws in Salvium may be discovered in the future, and attacks may be developed to peek under some</source>
        <translation>Es posible que en el futuro se descubran fallas en Salvium y se desarrollen ataques para espiar debajo de algunas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2350" />
        <source>of the layers of privacy Salvium provides. Be safe and practice defense in depth.</source>
        <translation>de las capas de privacidad que ofrece Salvium. Manténgase seguro y practique la defensa en profundidad.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2439" />
        <source>Daemon does not require payment for RPC access</source>
        <translation>Daemon no requiere pago para el acceso RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2447" />
        <source>Starting mining for RPC access: diff %llu, %f credits/hash%s</source>
        <translation>Iniciando minería para acceso RPC: diff %llu, %f credits/hash%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2448" />
        <source>Run stop_mining_for_rpc to stop</source>
        <translation>Ejecute stop_mining_for_rpc para detener</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2550" />
        <source>wallet is watch-only and cannot transfer</source>
        <translation>La billetera es solo para vigilancia y no se puede transferir</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7117" />
        <source>WARNING: this is a non default ring size, which may harm your privacy. Default is recommended.</source>
        <translation>ADVERTENCIA: este tamaño de anillo no es el predeterminado, lo que puede dañar su privacidad. Se recomienda el tamaño predeterminado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2572" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2595" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2611" />
        <source>priority must be either 0, 1, 2, 3, or 4, or one of: </source>
        <translation>La prioridad debe ser 0, 1, 2, 3 o 4, o una de las siguientes: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2616" />
        <source>could not change default priority</source>
        <translation>No se pudo cambiar la prioridad predeterminada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2702" />
        <source>invalid unit</source>
        <translation>unidad inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2738" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2800" />
        <source>invalid count: must be an unsigned integer</source>
        <translation>recuento no válido: debe ser un entero sin signo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2720" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2756" />
        <source>invalid value</source>
        <translation>valor inválido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2834" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2952" />
        <source>Invalid height</source>
        <translation>Altura no válida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2907" />
        <source>Invalid target</source>
        <translation>Objetivo no válido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2983" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3002" />
        <source>Invalid amount</source>
        <translation>Cantidad no válida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3072" />
        <source>invalid argument: must be either 1/yes or 0/no</source>
        <translation>argumento no válido: debe ser 1/sí o 0/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3340" />
        <source>Start mining in the daemon (bg_mining and ignore_battery are optional booleans).</source>
        <translation>Comience a minar en el demonio (bg_mining e ignore_battery son valores booleanos opcionales).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3343" />
        <source>Stop mining in the daemon.</source>
        <translation>Detener la minería en el demonio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3350" />
        <source>Save the current blockchain data.</source>
        <translation>Guardar los datos actuales de la cadena de bloques.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3353" />
        <source>Synchronize the transactions and balance.</source>
        <translation>Sincronizar las transacciones y el saldo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3357" />
        <source>Show the wallet's balance of the currently selected account.</source>
        <translation>Mostrar el saldo de la billetera de la cuenta actualmente seleccionada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3361" />
        <source>Show the incoming transfers, all or filtered by availability and address index.

Output format:
Amount, Spent("T"|"F"), "frozen"|"locked"|"unlocked", RingCT, Global Index, Transaction Hash, Address Index, [Public Key, Key Image] </source>
        <translation>Muestra las transferencias entrantes, todas o filtradas por disponibilidad e índice de dirección. Formato de salida: Monto, Gastado(&amp;quot;T&amp;quot;|&amp;quot;F&amp;quot;), &amp;quot;congelado&amp;quot;|&amp;quot;bloqueado&amp;quot;|&amp;quot;desbloqueado&amp;quot;, RingCT, Índice global, Hash de transacción, Índice de dirección, [Clave pública, Imagen de clave] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3367" />
        <source>Show the payments for the given payment IDs.</source>
        <translation>Mostrar los pagos para los ID de pago indicados.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3370" />
        <source>Show the blockchain height.</source>
        <translation>Mostrar la altura de la cadena de bloques.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3384" />
        <source>Send all unmixable outputs to yourself with ring_size 1</source>
        <translation>Envíese todas las salidas no mezclables a usted mismo con ring_size 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3394" />
        <source>Send all unlocked outputs below the threshold to an address.</source>
        <translation>Envía todas las salidas desbloqueadas por debajo del umbral a una dirección.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3398" />
        <source>Send a single output of the given key image to an address without change.</source>
        <translation>Envía una única salida de la imagen clave dada a una dirección sin cambios.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3434" />
        <source>Sign a transaction from a file. If the parameter "export_raw" is specified, transaction raw hex data suitable for the daemon RPC /sendrawtransaction is exported.
Use the parameter &lt;filename&gt; to specify the file to read from. If not specified, the default "unsigned_salvium_tx" will be used.</source>
        <translation>Firmar una transacción desde un archivo. Si se especifica el parámetro &amp;quot;export_raw&amp;quot;, se exportan los datos hexadecimales sin procesar de la transacción adecuados para el demonio RPC /sendrawtransaction. Utilice el parámetro&lt;filename&gt; para especificar el archivo que se leerá. Si no se especifica, se utilizará el valor predeterminado &amp;quot;unsigned_salvium_tx&amp;quot;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3438" />
        <source>Submit a signed transaction from a file.</source>
        <translation>Enviar una transacción firmada desde un archivo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3442" />
        <source>Change the current log detail (level must be &lt;0-4&gt;).</source>
        <translation>Cambiar el detalle del registro actual (el nivel debe ser &amp;lt;0-4&amp;gt;).</translation>
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
        <translation>Si no se especifica ningún argumento, la billetera muestra todas las cuentas existentes junto con sus saldos. Si se especifica el argumento &amp;quot;nuevo&amp;quot;, la billetera crea una nueva cuenta con su etiqueta inicializada por el texto de etiqueta proporcionado (que puede estar vacío). Si se especifica el argumento &amp;quot;cambiar&amp;quot;, la billetera cambia a la cuenta especificada por&lt;index&gt; Si se especifica el argumento &amp;quot;etiqueta&amp;quot;, la billetera establece la etiqueta de la cuenta especificada por&lt;index&gt; al texto de la etiqueta proporcionada. Si se especifica el argumento &amp;quot;etiqueta&amp;quot;, se agrega una etiqueta&lt;tag_name&gt; se asigna a las cuentas especificadas&lt;account_index_1&gt; ,&lt;account_index_2&gt; , .... Si se especifica el argumento &amp;quot;untag&amp;quot;, las etiquetas asignadas a las cuentas especificadas&lt;account_index_1&gt; ,&lt;account_index_2&gt; ..., se eliminan. Si se especifica el argumento &amp;quot;tag_description&amp;quot;, la etiqueta&lt;tag_name&gt; se le asigna un texto arbitrario&lt;description&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3460" />
        <source>Encode a payment ID into an integrated address for the current wallet public address (no argument uses a random payment ID), or decode an integrated address to standard address and payment ID</source>
        <translation>Codifique un ID de pago en una dirección integrada para la dirección pública de la billetera actual (ningún argumento utiliza un ID de pago aleatorio) o decodifique una dirección integrada en una dirección estándar y un ID de pago</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3464" />
        <source>Print all entries in the address book, optionally adding/deleting an entry to/from it.</source>
        <translation>Imprima todas las entradas de la libreta de direcciones, agregando o eliminando opcionalmente una entrada en ella.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3467" />
        <source>Save the wallet data.</source>
        <translation>Guarde los datos de la billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3470" />
        <source>Save a watch-only keys file.</source>
        <translation>Guarde un archivo de claves de solo visualización.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3473" />
        <source>Display the private view key.</source>
        <translation>Mostrar la clave de vista privada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3476" />
        <source>Display the private spend key.</source>
        <translation>Mostrar la clave de gasto privada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3479" />
        <source>Display the Electrum-style mnemonic seed</source>
        <translation>Mostrar la semilla mnemotécnica de estilo Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3561" />
        <source>Display the encrypted Electrum-style mnemonic seed.</source>
        <translation>Muestra la semilla mnemotécnica cifrada de estilo Electrum.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3564" />
        <source>Rescan the blockchain for spent outputs.</source>
        <translation>Vuelva a escanear la cadena de bloques para buscar salidas gastadas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3568" />
        <source>Get the transaction key (r) for a given &lt;txid&gt;.</source>
        <translation>Obtener la clave de transacción (r) para un determinado&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3572" />
        <source>Set the transaction key (r) for a given &lt;txid&gt; in case the tx was made by some other device or 3rd party wallet.</source>
        <translation>Establezca la clave de transacción (r) para un determinado&lt;txid&gt; en caso de que la transacción haya sido realizada por algún otro dispositivo o billetera de terceros.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3576" />
        <source>Check the amount going to &lt;address&gt; in &lt;txid&gt;.</source>
        <translation>Verificar el importe que va a&lt;address&gt; en&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3580" />
        <source>Generate a signature proving funds sent to &lt;address&gt; in &lt;txid&gt;, optionally with a challenge string &lt;message&gt;, using either the transaction secret key (when &lt;address&gt; is not your wallet's address) or the view secret key (otherwise), which does not disclose the secret key.</source>
        <translation>Generar una firma que acredite los fondos enviados a&lt;address&gt; en&lt;txid&gt; , opcionalmente con una cadena de desafío&lt;message&gt; , utilizando la clave secreta de transacción (cuando&lt;address&gt; no es la dirección de su billetera) o la clave secreta de vista (de lo contrario), que no revela la clave secreta.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3584" />
        <source>Check the proof for funds going to &lt;address&gt; in &lt;txid&gt; with the challenge string &lt;message&gt; if any.</source>
        <translation>Verifique el comprobante de fondos que van a&lt;address&gt; en&lt;txid&gt; con la cuerda del desafío&lt;message&gt; Si hay alguna.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3588" />
        <source>Generate a signature proving that you generated &lt;txid&gt; using the spend secret key, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Generar una firma que demuestre que usted generó&lt;txid&gt; utilizando la clave secreta de gasto, opcionalmente con una cadena de desafío&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3592" />
        <source>Check a signature proving that the signer generated &lt;txid&gt;, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Verificar una firma que demuestre que el firmante la generó&lt;txid&gt; , opcionalmente con una cadena de desafío&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3596" />
        <source>Generate a signature proving that you own at least this much, optionally with a challenge string &lt;message&gt;.
If 'all' is specified, you prove the entire sum of all of your existing accounts' balances.
Otherwise, you prove the reserve of the smallest possible amount above &lt;amount&gt; available in your current account.</source>
        <translation>Generar una firma que demuestre que posee al menos esta cantidad, opcionalmente con una cadena de desafío&lt;message&gt; Si se especifica &amp;quot;todos&amp;quot;, se demuestra la suma total de los saldos de todas las cuentas existentes. De lo contrario, se demuestra la reserva del monto más pequeño posible por encima&lt;amount&gt; disponible en su cuenta corriente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3602" />
        <source>Check a signature proving that the owner of &lt;address&gt; holds at least this much, optionally with a challenge string &lt;message&gt;.</source>
        <translation>Verificar una firma que acredite que el propietario de&lt;address&gt; contiene al menos esto, opcionalmente con una cadena de desafío&lt;message&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3623" />
        <source>Show the unspent outputs of a specified address within an optional amount range.</source>
        <translation>Muestra las salidas no gastadas de una dirección específica dentro de un rango de cantidad opcional.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3631" />
        <source>Set an arbitrary string note for a &lt;txid&gt;.</source>
        <translation>Establezca una nota de cadena arbitraria para una&lt;txid&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3635" />
        <source>Get a string note for a txid.</source>
        <translation>Obtener una nota de cadena para un txid.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3639" />
        <source>Set an arbitrary description for the wallet.</source>
        <translation>Establezca una descripción arbitraria para la billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3643" />
        <source>Get the description of the wallet.</source>
        <translation>Obtenga la descripción de la billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3646" />
        <source>Show the wallet's status.</source>
        <translation>Mostrar el estado de la billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3649" />
        <source>Show the wallet's information.</source>
        <translation>Mostrar la información de la billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3657" />
        <source>Verify a signature on the contents of a file.</source>
        <translation>Verificar una firma en el contenido de un archivo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3665" />
        <source>Import a signed key images list and verify their spent status.</source>
        <translation>Importe una lista de imágenes clave firmadas y verifique su estado gastado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3673" />
        <source>Attempts to reconnect HW wallet.</source>
        <translation>Intenta volver a conectar la billetera HW.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3677" />
        <source>Export a set of outputs owned by this wallet.</source>
        <translation>Exportar un conjunto de salidas propiedad de esta billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3681" />
        <source>Import a set of outputs owned by this wallet.</source>
        <translation>Importar un conjunto de salidas propiedad de esta billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3685" />
        <source>Show information about a transfer to/from this address.</source>
        <translation>Mostrar información sobre una transferencia hacia/desde esta dirección.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3688" />
        <source>Change the wallet's password.</source>
        <translation>Cambiar la contraseña de la billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3695" />
        <source>Print the information about the current fee and transaction backlog.</source>
        <translation>Imprima la información sobre la tarifa actual y las transacciones atrasadas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3697" />
        <source>Export data needed to create a multisig wallet</source>
        <translation>Exportar datos necesarios para crear una billetera multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3700" />
        <source>Turn this wallet into a multisig wallet</source>
        <translation>Convierte esta billetera en una billetera multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3708" />
        <source>Export multisig info for other participants</source>
        <translation>Exportar información multifirma para otros participantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3712" />
        <source>Import multisig info from other participants</source>
        <translation>Importar información multifirma de otros participantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3716" />
        <source>Sign a multisig transaction from a file</source>
        <translation>Firmar una transacción multifirma desde un archivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3720" />
        <source>Submit a signed multisig transaction from a file</source>
        <translation>Enviar una transacción multifirma firmada desde un archivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3724" />
        <source>Export a signed multisig transaction to a file</source>
        <translation>Exportar una transacción multifirma firmada a un archivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3815" />
        <source>Print the ring(s) used to spend a given key image or transaction (if the ring size is &gt; 1)

Output format:
Key Image, "absolute", list of rings</source>
        <translation>Imprima el o los anillos utilizados para gastar una imagen de clave o transacción determinada (si el tamaño del anillo es &amp;gt; 1) Formato de salida: Imagen de clave, &amp;quot;absoluta&amp;quot;, lista de anillos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3821" />
        <source>Set the ring used for a given key image, so it can be reused in a fork</source>
        <translation>Establece el anillo utilizado para una imagen clave determinada, de modo que pueda reutilizarse en una bifurcación</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3825" />
        <source>Unsets the ring used for a given key image or transaction</source>
        <translation>Desactiva el anillo utilizado para una determinada imagen clave o transacción</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3829" />
        <source>Save known rings to the shared rings database</source>
        <translation>Guardar anillos conocidos en la base de datos de anillos compartidos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3845" />
        <source>Freeze a single output by key image so it will not be used</source>
        <translation>Congelar una única salida por imagen clave para que no se utilice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3849" />
        <source>Thaw a single output by key image so it may be used again</source>
        <translation>Descongelar una única salida por imagen clave para que pueda volver a utilizarse</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3853" />
        <source>Checks whether a given output is currently frozen by key image</source>
        <translation>Comprueba si una salida determinada está actualmente congelada por imagen clave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3861" />
        <source>Prints simple network stats</source>
        <translation>Imprime estadísticas de red simples</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3865" />
        <source>Lists known public nodes</source>
        <translation>Enumera los nodos públicos conocidos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3869" />
        <source>Prints basic info about Salvium for first time users</source>
        <translation>Imprime información básica sobre Salvium para usuarios primerizos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3873" />
        <source>Returns version information</source>
        <translation>Devuelve información de la versión</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3877" />
        <source>Get info about RPC payments to current node</source>
        <translation>Obtenga información sobre los pagos RPC al nodo actual</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3881" />
        <source>Start mining to pay for RPC access</source>
        <translation>Comience a minar para pagar el acceso a RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3885" />
        <source>Stop mining to pay for RPC access</source>
        <translation>Detener la minería para pagar el acceso a RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3893" />
        <source>Show the help section or the documentation about a &lt;command&gt;.</source>
        <translation>Mostrar la sección de ayuda o la documentación sobre un&lt;command&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3984" />
        <source>needs an argument</source>
        <translation>Necesita un argumento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3998" />
        <source>set seed: needs an argument. available options: language</source>
        <translation>Establecer semilla: necesita un argumento. Opciones disponibles: idioma</translation>
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
        <translation>completo (más lento, sin suposiciones); optimizar-coinbase (rápido, supone que todo el coinbase se paga a una sola dirección); no-coinbase (más rápido, supone que no recibimos ninguna transacción de coinbase), predeterminado (igual que optimizar-coinbase)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4012" />
        <source>0, 1, 2, 3, or 4, or one of </source>
        <translation>0, 1, 2, 3 o 4, o uno de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4013" />
        <source>0|1|2 (or never|action|decrypt)</source>
        <translation>0|1|2 (o nunca|acción|descifrar)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4015" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4016" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4020" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4027" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4040" />
        <source>unsigned integer</source>
        <translation>entero sin signo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4017" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4029" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4030" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>amount</source>
        <translation>cantidad</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4022" />
        <source>block height</source>
        <translation>altura del bloque</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4026" />
        <source>&lt;major&gt;:&lt;minor&gt;</source>
        <translation>&lt;major&gt;:&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4034" />
        <source>1/yes or 0/no</source>
        <translation>1/si o 0/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4039" />
        <source>floating point &gt;= 0</source>
        <translation>punto flotante &amp;gt;= 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4044" />
        <source>set: unrecognized argument(s)</source>
        <translation>conjunto: argumento(s) no reconocido(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4102" />
        <source>Wallet name not valid. Please try again or use Ctrl-C to quit.</source>
        <translation>El nombre de la billetera no es válido. Inténtalo nuevamente o usa Ctrl+C para salir.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4114" />
        <source>Attempting to generate or restore wallet, but specified file(s) exist.  Exiting to not risk overwriting.</source>
        <translation>Intentando generar o restaurar la billetera, pero existen los archivos especificados. Saliendo para no correr el riesgo de sobrescribirlos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4119" />
        <source>Wallet and key files found, loading...</source>
        <translation>Se encontraron archivos de billetera y clave, cargando...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4125" />
        <source>Key file found but not wallet file. Regenerating...</source>
        <translation>Se encontró el archivo de clave, pero no el archivo de billetera. Regenerando...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4131" />
        <source>Key file not found. Failed to open wallet: </source>
        <translation>No se encontró el archivo de clave. No se pudo abrir la billetera: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4139" />
        <source>No wallet found with that name. Confirm creation of new wallet named: </source>
        <translation>No se encontró ninguna billetera con ese nombre. Confirme la creación de una nueva billetera con el nombre: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4150" />
        <source>Generating new wallet...</source>
        <translation>Generando nueva billetera...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4231" />
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>No se puede especificar más de uno de --testnet y --stagenet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4247" />
        <source>can't specify more than one of --generate-new-wallet="wallet_name", --wallet-file="wallet_name", --generate-from-view-key="wallet_name", --generate-from-spend-key="wallet_name", --generate-from-keys="wallet_name", --generate-from-multisig-keys="wallet_name", --generate-from-json="jsonfilename" and --generate-from-device="wallet_name"</source>
        <translation>No se puede especificar más de uno de los siguientes: --generate-new-wallet=&amp;quot;nombre_de_la_cartera&amp;quot;, --wallet-file=&amp;quot;nombre_de_la_cartera&amp;quot;, --generate-from-view-key=&amp;quot;nombre_de_la_cartera&amp;quot;, --generate-from-spend-key=&amp;quot;nombre_de_la_cartera&amp;quot;, --generate-from-keys=&amp;quot;nombre_de_la_cartera&amp;quot;, --generate-from-multisig-keys=&amp;quot;nombre_de_la_cartera&amp;quot;, --generate-from-json=&amp;quot;nombre_del_archivo_json&amp;quot; y --generate-from-device=&amp;quot;nombre_de_la_cartera&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4277" />
        <source>can't specify both --restore-deterministic-wallet or --restore-multisig-wallet and --non-deterministic</source>
        <translation>No se pueden especificar --restore-deterministic-wallet o --restore-multisig-wallet y --non-deterministic</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4283" />
        <source>--restore-multisig-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-multisig-wallet utiliza --generate-new-wallet, no --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4285" />
        <source>--restore-deterministic-wallet uses --generate-new-wallet, not --wallet-file</source>
        <translation>--restore-deterministic-wallet utiliza --generate-new-wallet, no --wallet-file</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4299" />
        <source>specify a recovery parameter with the --electrum-seed="multisig seed here"</source>
        <translation>Especifique un parámetro de recuperación con --electrum-seed=&amp;quot;semilla multifirma aquí&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4314" />
        <source>specify a recovery parameter with the --electrum-seed="words list here"</source>
        <translation>Especifique un parámetro de recuperación con --electrum-seed=&amp;quot;lista de palabras aquí&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4328" />
        <source>Multisig seed failed verification</source>
        <translation>Error en la verificación de la semilla multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4337" />
        <source>Electrum-style word list failed verification</source>
        <translation>Lista de palabras de estilo Electrum no superó la verificación</translation>
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
        <translation>No se han suministrado datos, cancelado</translation>
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
        <translation>No se pudo analizar la dirección</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4368" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4445" />
        <source>This address is a subaddress which cannot be used here.</source>
        <translation>Esta dirección es una subdirección que no se puede utilizar aquí.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4383" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4475" />
        <source>failed to parse view key secret key</source>
        <translation>No se pudo analizar la clave secreta de la vista</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4392" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4492" />
        <source>failed to verify view key secret key</source>
        <translation>No se pudo verificar la clave secreta de visualización</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4396" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4496" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4578" />
        <source>view key does not match standard address</source>
        <translation>La clave de visualización no coincide con la dirección estándar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4401" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4422" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4500" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4634" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4661" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4693" />
        <source>account creation failed</source>
        <translation>La creación de la cuenta falló</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4418" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4460" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4603" />
        <source>failed to parse spend key secret key</source>
        <translation>No se pudo analizar la clave secreta de la clave de gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4484" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4623" />
        <source>failed to verify spend key secret key</source>
        <translation>No se pudo verificar la clave secreta de gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4488" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4628" />
        <source>spend key does not match standard address</source>
        <translation>La clave de gasto no coincide con la dirección estándar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4523" />
        <source>Error: expected M/N, but got: </source>
        <translation>Error: se esperaba M/N, pero se obtuvo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4528" />
        <source>Error: expected N &gt; 1 and N &lt;= M, but got: </source>
        <translation>Error: se esperaba N &amp;gt; 1 y N &amp;lt;= M, pero se obtuvo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4533" />
        <source>Error: M/N is currently unsupported. </source>
        <translation>Error: M/N no es compatible actualmente. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4536" />
        <source>Generating master wallet from %u of %u multisig wallet keys</source>
        <translation>Generación de billetera maestra a partir de %u de %u claves de billetera multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4565" />
        <source>failed to parse secret view key</source>
        <translation>No se pudo analizar la clave de vista secreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4573" />
        <source>failed to verify secret view key</source>
        <translation>No se pudo verificar la clave de vista secreta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4616" />
        <source>Error: M/N is currently unsupported</source>
        <translation>Error: M/N no es compatible actualmente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4668" />
        <source>No restore height is specified.</source>
        <translation>No se especifica ninguna altura de restauración.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4669" />
        <source>Assumed you are creating a new account, restore will be done from current estimated blockchain height.</source>
        <translation>Suponiendo que está creando una nueva cuenta, la restauración se realizará desde la altura de cadena de bloques estimada actual.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4674" />
        <source>account creation aborted</source>
        <translation>creación de cuenta cancelada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4684" />
        <source>specify a wallet path with --generate-new-wallet (not --wallet-file)</source>
        <translation>Especifique una ruta de billetera con --generate-new-wallet (no --wallet-file)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4748" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4768" />
        <source>bad m_restore_height parameter: </source>
        <translation>parámetro m_restore_height incorrecto: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4712" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4759" />
        <source>Restore height is: </source>
        <translation>La altura de restauración es: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4782" />
        <source>Restore height </source>
        <translation>Restaurar altura </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4798" />
        <source>can't specify --subaddress-lookahead and --wallet-file at the same time</source>
        <translation>No se puede especificar --subaddress-lookahead y --wallet-file al mismo tiempo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4802" />
        <source>failed to open account</source>
        <translation>No se pudo abrir la cuenta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4807" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5568" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5621" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5791" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8968" />
        <source>wallet is null</source>
        <translation>La billetera es nula</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4841" />
        <source>Failed to initialize ring database: privacy enhancing features will be inactive</source>
        <translation>Error al inicializar la base de datos del anillo: las funciones de mejora de la privacidad estarán inactivas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4920" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4924" />
        <source>wallet failed to connect to daemon: </source>
        <translation>La billetera no pudo conectarse al demonio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4925" />
        <source>Daemon either is not started or wrong port was passed. Please make sure daemon is running or change the daemon address using the 'set_daemon' command.</source>
        <translation>El demonio no se ha iniciado o se ha introducido un puerto incorrecto. Asegúrese de que el demonio se esté ejecutando o cambie la dirección del demonio con el comando &amp;#39;set_daemon&amp;#39;.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4954" />
        <source>List of available languages for your wallet's seed:</source>
        <translation>Lista de idiomas disponibles para la semilla de tu billetera:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4955" />
        <source>If your display freezes, exit blind with ^C, then run again with --use-english-language-names</source>
        <translation>Si su pantalla se congela, salga a ciegas con ^C, luego ejecute nuevamente con --use-english-language-names</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4973" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4978" />
        <source>invalid language choice entered. Please try again.
</source>
        <translation>El idioma ingresado no es válido. Inténtalo nuevamente.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4992" />
        <source>invalid password</source>
        <translation>contraseña inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5040" />
        <source>You had been using a deprecated version of the wallet. Please use the new seed that we provide.
</source>
        <translation>Estabas usando una versión obsoleta de la billetera. Usa la nueva semilla que te proporcionamos.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5056" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5131" />
        <source>Generated new wallet: </source>
        <translation>Nueva billetera generada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5059" />
        <source>View key: </source>
        <translation>Ver clave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5065" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5136" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5180" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5244" />
        <source>failed to generate new wallet: </source>
        <translation>No se pudo generar una nueva billetera: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5175" />
        <source>Generated new wallet on hw device: </source>
        <translation>Nueva billetera generada en el dispositivo hw: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5236" />
        <source>failed to generate new mutlisig wallet</source>
        <translation>No se pudo generar una nueva billetera multilingüe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5239" />
        <source>Generated new %u/%u multisig wallet: </source>
        <translation>Se generó una nueva billetera multifirma %u/%u: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5255" />
        <source>wallet file path not valid: </source>
        <translation>La ruta del archivo de billetera no es válida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5265" />
        <source>Key file not found. Failed to open wallet</source>
        <translation>No se encontró el archivo de clave. No se pudo abrir la billetera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5286" />
        <source>Opened watch-only wallet</source>
        <translation>Cartera abierta solo para el reloj</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5288" />
        <source>Opened %u/%u multisig wallet%s</source>
        <translation>Se abrió %u/%u billetera multifirma%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5290" />
        <source>Opened wallet</source>
        <translation>Billetera abierta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5308" />
        <source>You had been using a deprecated version of the wallet. Please proceed to upgrade your wallet.
</source>
        <translation>Estabas usando una versión obsoleta de la billetera. Continúa actualizando tu billetera.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5323" />
        <source>You had been using a deprecated version of the wallet. Your wallet file format is being upgraded now.
</source>
        <translation>Estabas usando una versión obsoleta de la billetera. El formato de archivo de tu billetera se está actualizando ahora.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5331" />
        <source>failed to load wallet: </source>
        <translation>Error al cargar la billetera: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5350" />
        <source>Use "help &lt;command&gt;" to see a command's documentation.
</source>
        <translation>Utilice &amp;quot;ayuda&amp;quot;&lt;command&gt; &amp;quot; para ver la documentación de un comando.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5372" />
        <source>failed to deinitialize wallet</source>
        <translation>No se pudo desinicializar la billetera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5395" />
        <source>Wallet data saved</source>
        <translation>Datos de la billetera guardados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5409" />
        <source>wallet is multisig and cannot save a watch-only version</source>
        <translation>La billetera es multifirma y no puede guardar una versión de solo lectura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5417" />
        <source>failed to read wallet password</source>
        <translation>No se pudo leer la contraseña de la billetera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5425" />
        <source>Watch only wallet saved as: </source>
        <translation>Mira solo la billetera guardada como: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5429" />
        <source>Failed to save watch only wallet: </source>
        <translation>No se pudo guardar la billetera solo para ver: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5559" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6414" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11007" />
        <source>this command requires a trusted daemon. Enable with --trusted-daemon</source>
        <translation>Este comando requiere un demonio de confianza. Habilítelo con --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5608" />
        <source>Mining started in daemon</source>
        <translation>La minería comenzó en el demonio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5610" />
        <source>mining has NOT been started: </source>
        <translation>La minería NO ha comenzado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5630" />
        <source>Mining stopped in daemon</source>
        <translation>La minería se detuvo en el demonio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5632" />
        <source>mining has NOT been stopped: </source>
        <translation>La minería NO se ha detenido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5687" />
        <source>Unexpected array length - Exited simple_wallet::set_daemon()</source>
        <translation>Longitud de matriz inesperada: se salió de simple_wallet::set_daemon()</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763" />
        <source>trusted</source>
        <translation>de confianza</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5763" />
        <source>untrusted</source>
        <translation>no confiable</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5779" />
        <source>This does not seem to be a valid daemon URL.</source>
        <translation>Esta no parece ser una URL de demonio válida.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5799" />
        <source>Blockchain saved</source>
        <translation>Blockchain salvado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5801" />
        <source>blockchain can't be saved: </source>
        <translation>La cadena de bloques no se puede salvar: </translation>
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
        <translation>Altura </translation>
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
        <translation>No me importa </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5925" />
        <source>spent </source>
        <translation>gastado </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5952" />
        <source>Enter password</source>
        <translation>Introducir contraseña</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6048" />
        <source>Starting refresh...</source>
        <translation>Iniciando actualización...</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6070" />
        <source>New transfer received since rescan was started. Key images are incomplete.</source>
        <translation>Se recibió una nueva transferencia desde que se inició el nuevo escaneo. Las imágenes clave están incompletas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6077" />
        <source>Refresh done, blocks received: </source>
        <translation>Actualización realizada, bloques recibidos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="612" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6085" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6428" />
        <source>daemon is busy. Please try again later.</source>
        <translation>El demonio está ocupado. Inténtalo de nuevo más tarde.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4816" />
        <source>RPC client secret key should be 32 byte in hex format</source>
        <translation>La clave secreta del cliente RPC debe tener 32 bytes en formato hexadecimal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5535" />
        <source>With background mining enabled, the daemon will mine when idle and not on battery.</source>
        <translation>Con la minería en segundo plano habilitada, el demonio minará cuando esté inactivo y no con batería.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5657" />
        <source>Error checking daemon RPC access prices</source>
        <translation>Error al comprobar los precios de acceso RPC del demonio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5663" />
        <source>Error checking daemon RPC access prices: </source>
        <translation>Error al verificar los precios de acceso RPC del demonio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5759" />
        <source>Failed to connect to daemon</source>
        <translation>No se pudo conectar al demonio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5771" />
        <source>Daemon RPC credits/hash is less than was claimed. Either this daemon is cheating, or it changed its setup recently.</source>
        <translation>Los créditos/hash de RPC del demonio son menores a los que se indicaban. O bien este demonio está haciendo trampa o cambió su configuración recientemente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5772" />
        <source>Claimed: </source>
        <translation>Afirmó: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5773" />
        <source>Actual: </source>
        <translation>Actual: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6089" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6432" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>No hay conexión con el demonio. Asegúrese de que el demonio esté ejecutándose.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6093" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6436" />
        <source>payment required.</source>
        <translation>Se requiere pago.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6099" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6446" />
        <source>RPC error: </source>
        <translation>Error de RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6104" />
        <source>refresh error: </source>
        <translation>Error de actualización: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6109" />
        <source>internal error: </source>
        <translation>Error interno: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124" />
        <source>refresh failed: </source>
        <translation>Error de actualización: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6124" />
        <source>Blocks received: </source>
        <translation>Bloques recibidos: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6153" />
        <source> (Some owned outputs have partial key images - import_multisig_info needed)</source>
        <translation> (Algunas salidas propias tienen imágenes de clave parciales: se necesita import_multisig_info)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156" />
        <source>Currently selected account: [</source>
        <translation>Cuenta seleccionada actualmente: [</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6156" />
        <source>] </source>
        <translation>] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158" />
        <source>(No tag assigned)</source>
        <translation>(Sin etiqueta asignada)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6158" />
        <source>Tag: </source>
        <translation>Etiqueta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6172" />
        <source>unlocked balance: </source>
        <translation>Saldo desbloqueado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6177" />
        <source>Balance per address:</source>
        <translation>Saldo por dirección:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <source>Address</source>
        <translation>DIRECCIÓN</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Balance</source>
        <translation>Balance</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Unlocked balance</source>
        <translation>Saldo desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <source>Outputs</source>
        <translation>Salidas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6178" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>Label</source>
        <translation>Etiqueta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6186" />
        <source>%8u %6s %21s %21s %7u %21s</source>
        <translation>%8u %6s %21s %21s %7u %21s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277" />
        <source>pubkey</source>
        <translation>clave pública</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6277" />
        <source>key image</source>
        <translation>imagen clave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>spent</source>
        <translation>gastado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>unlocked</source>
        <translation>desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>ringct</source>
        <translation>anillo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>global index</source>
        <translation>índice global</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <source>tx id</source>
        <translation>identificación de tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6278" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>addr index</source>
        <translation>índice de dirección</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6294" />
        <source>Used at heights: </source>
        <translation>Utilizado en alturas: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299" />
        <source>T</source>
        <translation>yo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6299" />
        <source>F</source>
        <translation>F</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <source>locked</source>
        <translation>bloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6300" />
        <source>[frozen]</source>
        <translation>[congelado]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301" />
        <source>RingCT</source>
        <translation>TC de anillo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6301" />
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6314" />
        <source>No incoming transfers</source>
        <translation>No hay transferencias entrantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6318" />
        <source>No incoming available transfers</source>
        <translation>No hay transferencias entrantes disponibles</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6322" />
        <source>No incoming unavailable transfers</source>
        <translation>No hay transferencias entrantes no disponibles</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>payment</source>
        <translation>pago</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>transaction</source>
        <translation>transacción</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>height</source>
        <translation>altura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6346" />
        <source>unlock time</source>
        <translation>tiempo de desbloqueo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6358" />
        <source>No payments with id </source>
        <translation>No se aceptan pagos con identificación </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6380" />
        <source>payment ID has invalid format, expected 16 or 64 character hex string: </source>
        <translation>El ID de pago tiene un formato no válido; se esperaba una cadena hexadecimal de 16 o 64 caracteres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6406" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6504" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6965" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7509" />
        <source>failed to get blockchain height: </source>
        <translation>No se pudo obtener la altura de la cadena de bloques: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6441" />
        <source>failed to get spent status</source>
        <translation>No se pudo obtener el estado gastado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6513" />
        <source>
Transaction %llu/%llu: txid=%s</source>
        <translation>
Transacción %llu/%llu: txid=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6529" />
        <source>failed to find construction data for tx input</source>
        <translation>No se pudieron encontrar los datos de construcción para la entrada tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6553" />
        <source>failed to get output: </source>
        <translation>No se pudo obtener la salida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6561" />
        <source>output key's originating block height shouldn't be higher than the blockchain height</source>
        <translation>La altura del bloque de origen de la clave de salida no debe ser mayor que la altura de la cadena de bloques</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6566" />
        <source>
Originating block heights: </source>
        <translation>
Alturas de bloque originales: </translation>
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
Advertencia: Algunas teclas de entrada que se están gastando son de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594" />
        <source>the same transaction</source>
        <translation>la misma transacción</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6594" />
        <source>blocks that are temporally very close</source>
        <translation>bloques que están muy cerca temporalmente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6748" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7461" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7741" />
        <source>Ring size must not be 0</source>
        <translation>El tamaño del anillo no debe ser 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6760" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7473" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7753" />
        <source>ring size %u is too small, minimum is %u</source>
        <translation>El tamaño del anillo %u es demasiado pequeño, el mínimo es %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6765" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7478" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7758" />
        <source>ring size %u is too large, maximum is %u</source>
        <translation>El tamaño del anillo %u es demasiado grande, el máximo es %u</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6772" />
        <source>wrong number of arguments</source>
        <translation>número incorrecto de argumentos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6789" />
        <source>payment id failed to encode</source>
        <translation>No se pudo codificar el ID de pago</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6808" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7502" />
        <source>Locked blocks too high, max 1000000 (˜4 yrs)</source>
        <translation>Bloqueos bloqueados demasiado altos, máximo 1000000 (˜4 años)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6856" />
        <source>failed to parse short payment ID from URI</source>
        <translation>No se pudo analizar el ID de pago corto de la URI</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6881" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6883" />
        <source>Invalid last argument: </source>
        <translation>Último argumento no válido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6901" />
        <source>a single transaction cannot use more than one payment id</source>
        <translation>Una sola transacción no puede utilizar más de un ID de pago</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6917" />
        <source>failed to parse payment id, though it was detected</source>
        <translation>No se pudo analizar la identificación del pago, aunque se detectó</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7004" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014" />
        <source>Is this okay anyway?</source>
        <translation>¿Está bien esto de todos modos?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7009" />
        <source>There is currently a %u block backlog at that fee level. Is this okay?</source>
        <translation>Actualmente hay un retraso de un %u en el bloque en ese nivel de tarifa. ¿Está bien?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7323" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7631" />
        <source>Sweeping %s in %llu transactions for a total fee of %s.  Is this okay?</source>
        <translation>Barrer %s en %llu transacciones por una comisión total de %s. ¿Está bien?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7329" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7637" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7874" />
        <source>Sweeping %s for a total fee of %s.  Is this okay?</source>
        <translation>Barrer %s por un total de %s. ¿Está bien?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7377" />
        <source>Discarding %s of unmixable outputs that cannot be spent, which can be undone by "rescan_spent".  Is this okay?</source>
        <translation>Descartar %s de salidas no mezclables que no se pueden gastar, lo que se puede deshacer con &amp;quot;rescan_spent&amp;quot;. ¿Está bien?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7522" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7767" />
        <source>Failed to parse number of outputs</source>
        <translation>No se pudo analizar el número de salidas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7527" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7772" />
        <source>Amount of outputs should be greater than 0</source>
        <translation>La cantidad de salidas debe ser mayor que 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7551" />
        <source>payment id has invalid format, expected 16 or 64 character hex string: </source>
        <translation>El ID de pago tiene un formato no válido; se esperaba una cadena hexadecimal de 16 o 64 caracteres: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6803" />
        <source>bad locked_blocks parameter:</source>
        <translation>parámetro stuck_blocks incorrecto:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7571" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7831" />
        <source>a single transaction cannot use more than one payment id: </source>
        <translation>Una sola transacción no puede utilizar más de un ID de pago: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6923" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7580" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7799" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7839" />
        <source>failed to set up payment id, though it was decoded correctly</source>
        <translation>No se pudo configurar la identificación de pago, aunque se decodificó correctamente</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1170" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="1249" />
        <source>Send this multisig info to all other participants, then use exchange_multisig_keys &lt;info1&gt; [&lt;info2&gt;...] with others' multisig info</source>
        <translation>Envíe esta información multisig a todos los demás participantes y luego use exchange_multisig_keys&lt;info1&gt; [&lt;info2&gt; ...] con la información multifirma de otros</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1258" />
        <source>Multisig wallet has been successfully created. Current wallet type: </source>
        <translation>Se ha creado correctamente la billetera multifirma. Tipo de billetera actual: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1264" />
        <source>Failed to perform multisig keys exchange: </source>
        <translation>No se pudo realizar el intercambio de claves multifirma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1599" />
        <source>Failed to load multisig transaction from MMS</source>
        <translation>No se pudo cargar la transacción multifirma desde MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2139" />
        <source>Failed to mark output spent: </source>
        <translation>No se pudo marcar la salida como gastada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2166" />
        <source>Failed to mark output unspent: </source>
        <translation>No se pudo marcar la salida como no gastada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2190" />
        <source>Spent: </source>
        <translation>Gastado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2192" />
        <source>Not spent: </source>
        <translation>No gastado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2196" />
        <source>Failed to check whether output is spent: </source>
        <translation>No se pudo comprobar si se gastó la salida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2385" />
        <source>Please confirm the transaction on the device</source>
        <translation>Por favor, confirme la transacción en el dispositivo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3091" />
        <source>Device name not specified</source>
        <translation>Nombre del dispositivo no especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3100" />
        <source>Device reconnect failed</source>
        <translation>Error en la reconexión del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3105" />
        <source>Device reconnect failed: </source>
        <translation>Error en la reconexión del dispositivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3619" />
        <source>Export to CSV the incoming/outgoing transfers within an optional height range.</source>
        <translation>Exporta a CSV las transferencias entrantes/salientes dentro de un rango de altura opcional.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3627" />
        <source>Rescan the blockchain from scratch. If "hard" is specified, you will lose any information which can not be recovered from the blockchain itself.</source>
        <translation>Vuelva a escanear la cadena de bloques desde cero. Si se especifica &amp;quot;hard&amp;quot;, se perderá toda la información que no se pueda recuperar de la propia cadena de bloques.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3661" />
        <source>Export a signed set of key images to a &lt;filename&gt;.</source>
        <translation>Exportar un conjunto firmado de imágenes clave a un&lt;filename&gt; .</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3669" />
        <source>Synchronizes key images with the hw wallet.</source>
        <translation>Sincroniza imágenes clave con la billetera hw.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3692" />
        <source>Generate a new random full size payment id (obsolete). These will be unencrypted on the blockchain, see integrated_address for encrypted short payment ids.</source>
        <translation>Generar una nueva identificación de pago aleatoria de tamaño completo (obsoleta). Estas no estarán cifradas en la cadena de bloques; consulte integrated_address para ver las identificaciones de pago cortas cifradas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3704" />
        <source>Performs extra multisig keys exchange rounds. Needed for arbitrary M/N multisig wallets</source>
        <translation>Realiza rondas de intercambio de claves multifirma adicionales. Necesario para billeteras multifirma M/N arbitrarias</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3736" />
        <source>Initialize and configure the MMS for M/N = number of required signers/number of authorized signers multisig</source>
        <translation>Inicializar y configurar el MMS para M/N = número de firmantes requeridos/número de firmantes autorizados multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3740" />
        <source>Display current MMS configuration</source>
        <translation>Mostrar la configuración actual de MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3744" />
        <source>Set or modify authorized signer info (single-word label, transport address, Salvium address), or list all signers</source>
        <translation>Establecer o modificar la información del firmante autorizado (etiqueta de una sola palabra, dirección de transporte, dirección de Salvium) o enumerar todos los firmantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3748" />
        <source>List all messages</source>
        <translation>Listar todos los mensajes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3752" />
        <source>Evaluate the next possible multisig-related action(s) according to wallet state, and execute or offer for choice
By using 'sync' processing of waiting messages with multisig sync info can be forced regardless of wallet state</source>
        <translation>Evaluar las próximas acciones posibles relacionadas con multisig según el estado de la billetera y ejecutarlas u ofrecerlas como opción. Al usar el procesamiento de &amp;quot;sincronización&amp;quot; de mensajes en espera con información de sincronización multisig, se puede forzar independientemente del estado de la billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3757" />
        <source>Force generation of multisig sync info regardless of wallet state, to recover from special situations like "stale data" errors</source>
        <translation>Fuerza la generación de información de sincronización multifirma independientemente del estado de la billetera, para recuperarse de situaciones especiales como errores de &amp;quot;datos obsoletos&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3761" />
        <source>Initiate transfer with MMS support; arguments identical to normal 'transfer' command arguments, for info see there</source>
        <translation>Iniciar transferencia con soporte MMS; argumentos idénticos a los argumentos del comando &amp;#39;transferencia&amp;#39; normal, para más información consulte allí</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3765" />
        <source>Delete a single message by giving its id, or delete all messages by using 'all'</source>
        <translation>Eliminar un solo mensaje proporcionando su id, o eliminar todos los mensajes utilizando &amp;#39;all&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3769" />
        <source>Send a single message by giving its id, or send all waiting messages</source>
        <translation>Envía un solo mensaje indicando su id, o envía todos los mensajes en espera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3773" />
        <source>Check right away for new messages to receive</source>
        <translation>Comprueba de inmediato si tienes nuevos mensajes para recibir</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3777" />
        <source>Write the content of a message to a file "mms_message_content"</source>
        <translation>Escribe el contenido de un mensaje en un archivo &amp;quot;mms_message_content&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3781" />
        <source>Send a one-line message to an authorized signer, identified by its label, or show any waiting unread notes</source>
        <translation>Envíe un mensaje de una línea a un firmante autorizado, identificado por su etiqueta, o muestre cualquier nota pendiente sin leer</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3785" />
        <source>Show detailed info about a single message</source>
        <translation>Mostrar información detallada sobre un solo mensaje</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3789" />
        <source>Available options:
 auto-send &lt;1|0&gt;
   Whether to automatically send newly generated messages right away.
 </source>
        <translation>Opciones disponibles: envío automático &amp;lt;1|0&amp;gt; Si desea enviar automáticamente los mensajes recién generados de inmediato.
 </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3795" />
        <source>Send completed signer config to all other authorized signers</source>
        <translation>Enviar la configuración de firmante completada a todos los demás firmantes autorizados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3799" />
        <source>Start auto-config at the auto-config manager's wallet by issuing auto-config tokens and optionally set others' labels</source>
        <translation>Inicie la configuración automática en la billetera del administrador de configuración automática emitiendo tokens de configuración automática y, opcionalmente, configure las etiquetas de otros</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3807" />
        <source>Delete any auto-config tokens and abort a auto-config process</source>
        <translation>Eliminar todos los tokens de configuración automática y cancelar un proceso de configuración automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3811" />
        <source>Start auto-config by using the token received from the auto-config manager</source>
        <translation>Inicie la configuración automática utilizando el token recibido del administrador de configuración automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3833" />
        <source>Mark output(s) as spent so they never get selected as fake outputs in a ring</source>
        <translation>Marcar las salidas como gastadas para que nunca se seleccionen como salidas falsas en un anillo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3837" />
        <source>Marks an output as unspent so it may get selected as a fake output in a ring</source>
        <translation>Marca una salida como no gastada para que pueda seleccionarse como una salida falsa en un anillo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3841" />
        <source>Checks whether an output is marked as spent</source>
        <translation>Comprueba si una salida está marcada como gastada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4035" />
        <source>&lt;device_name[:device_spec]&gt;</source>
        <translation>&lt;device_name[:device_spec]&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4063" />
        <source>wrong number range, use: %s</source>
        <translation>rango de números incorrecto, use: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4168" />
        <source>NOTE: the following %s can be used to recover access to your wallet. Write them down and store them somewhere safe and secure. Please do not store them in your email or on file storage services outside of your immediate control.
</source>
        <translation>NOTA: los siguientes %s se pueden utilizar para recuperar el acceso a su billetera. Escríbalos y guárdelos en un lugar seguro. No los guarde en su correo electrónico ni en servicios de almacenamiento de archivos fuera de su control inmediato.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170" />
        <source>string</source>
        <translation>cadena</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4170" />
        <source>25 words</source>
        <translation>25 palabras</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4593" />
        <source>Secret spend key (%u of %u)</source>
        <translation>Clave de gasto secreta (%u de %u)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4670" />
        <source>Use --restore-height or --restore-date if you want to restore an already setup account from a specific height.</source>
        <translation>Utilice --restore-height o --restore-date si desea restaurar una cuenta ya configurada desde una altura específica.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4672" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="4760" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7119" />
        <source>Is this okay?</source>
        <translation>¿Está bien esto?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4783" />
        <source>Still apply restore height?</source>
        <translation>¿Aún se aplica la altura de restauración?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4964" />
        <source>Enter the number corresponding to the language of your choice</source>
        <translation>Ingresa el número correspondiente al idioma de tu elección</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5967" />
        <source>Device requires attention</source>
        <translation>El dispositivo requiere atención</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5973" />
        <source>Enter device PIN</source>
        <translation>Introduzca el PIN del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5975" />
        <source>Failed to read device PIN</source>
        <translation>No se pudo leer el PIN del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5985" />
        <source>Please enter the device passphrase on the device</source>
        <translation>Por favor, introduzca la contraseña del dispositivo en el dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5992" />
        <source>Enter device passphrase</source>
        <translation>Introduzca la contraseña del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5994" />
        <source>Failed to read device passphrase</source>
        <translation>No se pudo leer la contraseña del dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6018" />
        <source>The first refresh has finished for the HW-based wallet with received money. hw_key_images_sync is needed. </source>
        <translation>Ha finalizado la primera actualización de la billetera basada en HW con el dinero recibido. Es necesario hw_key_images_sync. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5537" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="6020" />
        <source>Do you want to do it now? (Y/Yes/N/No): </source>
        <translation>¿Quieres hacerlo ahora? (S/Sí/N/No): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2366" />
        <source>Unknown command '%s', try 'help'</source>
        <translation>Comando desconocido &amp;#39;%s&amp;#39;, prueba &amp;#39;help&amp;#39;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3040" />
        <source>Inactivity lock timeout disabled on Windows</source>
        <translation>El tiempo de espera del bloqueo por inactividad está deshabilitado en Windows</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3054" />
        <source>Invalid number of seconds</source>
        <translation>Número de segundos no válido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3116" />
        <source>Export format not specified</source>
        <translation>Formato de exportación no especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3130" />
        <source>Export format not recognized.</source>
        <translation>Formato de exportación no reconocido.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3482" />
        <source>Display the restore height</source>
        <translation>Mostrar la altura de restauración</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3857" />
        <source>Lock the wallet console, requiring the wallet password to continue</source>
        <translation>Bloquear la consola de la billetera, solicitando la contraseña de la billetera para continuar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4033" />
        <source>unsigned integer (seconds, 0 to disable)</source>
        <translation>entero sin signo (segundos, 0 para deshabilitar)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4036" />
        <source>"binary" or "ascii"</source>
        <translation>&amp;quot;binario&amp;quot; o &amp;quot;ascii&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4824" />
        <source>Warning: using an untrusted daemon at %s</source>
        <translation>Advertencia: se utiliza un demonio no confiable en %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4825" />
        <source>Using a third party daemon can be detrimental to your security and privacy</source>
        <translation>El uso de un demonio de terceros puede ser perjudicial para su seguridad y privacidad.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4828" />
        <source>Using your own without SSL exposes your RPC traffic to monitoring</source>
        <translation>El uso de su propio SSL expone su tráfico RPC a la supervisión</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4829" />
        <source>You are strongly encouraged to connect to the Salvium network using your own daemon</source>
        <translation>Se recomienda encarecidamente que se conecte a la red Salvium utilizando su propio demonio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4830" />
        <source>If you or someone you trust are operating this daemon, you can use --trusted-daemon</source>
        <translation>Si usted o alguien en quien confía está operando este demonio, puede usar --trusted-daemon</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4837" />
        <source>Moreover, a daemon is also less secure when running in bootstrap mode</source>
        <translation>Además, un demonio también es menos seguro cuando se ejecuta en modo de arranque.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4850" />
        <source>If you are new to Salvium, type "welcome" for a brief overview.</source>
        <translation>Si eres nuevo en Salvium, escribe &amp;quot;bienvenido&amp;quot; para obtener una breve descripción general.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5003" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5101" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5149" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5192" />
        <source>Error creating wallet: </source>
        <translation>Error al crear la billetera: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5445" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5477" />
        <source>Failed to query mining status: </source>
        <translation>No se pudo consultar el estado de minería: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5460" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5488" />
        <source>Failed to setup background mining: </source>
        <translation>No se pudo configurar la minería en segundo plano: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5464" />
        <source>Background mining enabled. Thank you for supporting the Salvium network.</source>
        <translation>Minería en segundo plano habilitada. Gracias por apoyar la red Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5492" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="5500" />
        <source>Background mining not enabled. Run "set setup-background-mining 1" to change.</source>
        <translation>La minería en segundo plano no está habilitada. Ejecute &amp;quot;set setup-background-mining 1&amp;quot; para cambiarla.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5506" />
        <source>Using an untrusted daemon, skipping background mining check</source>
        <translation>Uso de un demonio que no es de confianza, omitiendo la comprobación de minería en segundo plano</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5534" />
        <source>The daemon is not set up to background mine.</source>
        <translation>El demonio no está configurado para minar en segundo plano.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5541" />
        <source>Background mining not enabled. Set setup-background-mining to 1 to change.</source>
        <translation>La minería en segundo plano no está habilitada. Establezca setup-background-mining en 1 para cambiar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5903" />
        <source>NOTE: This transaction is locked, see details with: show_transfer </source>
        <translation>NOTA: Esta transacción está bloqueada, ver detalles con: show_transfer </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6022" />
        <source>hw_key_images_sync skipped. Run command manually before a transfer.</source>
        <translation>Se omitió hw_key_images_sync. Ejecute el comando manualmente antes de realizar una transferencia.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6247" />
        <source>Invalid keyword: </source>
        <translation>Palabra clave no válida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6535" />
        <source>
Input %llu/%llu (%s): amount=%s</source>
        <translation>
Entrada %llu/%llu (%s): cantidad=%s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6628" />
        <source>Transaction spends more than one very old output. Privacy would be better if they were sent separately.</source>
        <translation>La transacción consume más de una salida muy antigua. La privacidad sería mejor si se enviaran por separado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6629" />
        <source>Spend them now anyway?</source>
        <translation>¿Gastarlos ahora de todas formas?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6871" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8479" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9229" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9798" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9806" />
        <source>amount is wrong: </source>
        <translation>La cantidad es incorrecta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6872" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8479" />
        <source>expected number from 0 to </source>
        <translation>número esperado de 0 a </translation>
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
        <translation>Transacción cancelada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6981" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7595" />
        <source>No outputs found, or daemon is not ready</source>
        <translation>No se encontraron salidas o el demonio no está listo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2343" />
        <source>Unlike Bitcoin, your Salvium transactions and balance stay private and are not visible to the world by default.</source>
        <translation>A diferencia de Bitcoin, sus transacciones y saldos de Salvium permanecen privados y no son visibles para el mundo de forma predeterminada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2344" />
        <source>However, you have the option of making those available to select parties if you choose to.</source>
        <translation>Sin embargo, tienes la opción de ponerlos a disposición de determinadas partes si así lo deseas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5895" />
        <source>NOTE: this transaction uses an encrypted payment ID: consider using subaddresses instead</source>
        <translation>NOTA: esta transacción utiliza un ID de pago cifrado: considere utilizar subdirecciones en su lugar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5900" />
        <source>WARNING: this transaction uses an unencrypted payment ID: these are obsolete and ignored. Use subaddresses instead.</source>
        <translation>ADVERTENCIA: esta transacción utiliza un ID de pago no cifrado: estos están obsoletos y se ignoran. En su lugar, utilice subdirecciones.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7014" />
        <source>Failed to check for backlog: </source>
        <translation>No se pudo comprobar si hay trabajo atrasado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7063" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7617" />
        <source>
Transaction </source>
        <translation>
Transacción </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7070" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7624" />
        <source>WARNING: Outputs of multiple addresses are being used together, which might potentially compromise your privacy.
</source>
        <translation>ADVERTENCIA: Las salidas de múltiples direcciones se están utilizando juntas, lo que podría comprometer potencialmente su privacidad.
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
        <translation>Transacciones no firmadas escritas con éxito en MMS</translation>
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
        <translation>No se pudieron escribir las transacciones en el archivo</translation>
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
        <translation>Transacciones sin firmar escritas exitosamente en el archivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7161" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7674" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="7909" />
        <source>Failed to cold sign transaction with HW wallet</source>
        <translation>No se pudo firmar en frío la transacción con la billetera HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7308" />
        <source>No unmixable outputs found</source>
        <translation>No se encontraron salidas que no se puedan mezclar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7321" />
        <source>Sweeping </source>
        <translation>General </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8490" />
        <source>Failed to parse donation address: </source>
        <translation>No se pudo analizar la dirección de donación: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8506" />
        <source>Donating %s %s to %s.</source>
        <translation>Donando %s %s a %s.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8654" />
        <source>Loaded %lu transactions, for %s, fee %s, %s, %s, with min ring size %lu, %s. %sIs this okay?</source>
        <translation>Se cargaron %lu transacciones, por %s, tarifa %s, %s, %s, con tamaño de anillo mínimo %lu, %s. %s¿Está bien?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>direction</source>
        <translation>dirección</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>timestamp</source>
        <translation>marca de tiempo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>running balance</source>
        <translation>equilibrio de funcionamiento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>hash</source>
        <translation>picadillo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>payment ID</source>
        <translation>Identificación de pago</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>fee</source>
        <translation>tarifa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>destination</source>
        <translation>destino</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>index</source>
        <translation>índice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>note</source>
        <translation>nota</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9770" />
        <source>CSV exported to </source>
        <translation>CSV exportado a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9955" />
        <source>Rescan anyway?</source>
        <translation>¿Volver a escanear de todos modos?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9966" />
        <source>Warning: your restore height is higher than wallet restore height: </source>
        <translation>Advertencia: la altura de restauración es mayor que la altura de restauración de la billetera: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9967" />
        <source>Rescan anyway ? (Y/Yes/N/No): </source>
        <translation>¿Desea volver a escanear de todos modos? (S/Sí/N/No): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9988" />
        <source>MMS received new message</source>
        <translation>MMS recibió un nuevo mensaje</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10157" />
        <source>locked due to inactivity</source>
        <translation>bloqueado por inactividad</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10559" />
        <source>&lt;index&gt; is out of bounds</source>
        <translation>&lt;index&gt;está fuera de límites</translation>
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
        <translation>Tipo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6680" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10837" />
        <source>Network type: </source>
        <translation>Tipo de red: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1402" />
        <source>Multisig info imported. Number of outputs updated: </source>
        <translation>Se importó información multifirma. Número de salidas actualizado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="1750" />
        <source>Key image either not spent, or spent with ring size 1</source>
        <translation>Imagen clave no gastada o gastada con talla de anillo 1</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2334" />
        <source>Most of these nodes are probably spies. You should not use them unless connecting via Tor or I2P</source>
        <translation>La mayoría de estos nodos son probablemente espías. No deberías usarlos a menos que te conectes a través de Tor o I2P.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2340" />
        <source>Welcome to Salvium, the new and improved private cryptocurrency.</source>
        <translation>Bienvenido a Salvium, la nueva y mejorada criptomoneda privada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2352" />
        <source>Welcome to Salvium and compliant financial privacy. For more information see https://salvium.io</source>
        <translation>Bienvenido a Salvium y a la política de privacidad financiera. Para obtener más información, consulte https://salvium.io</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2471" />
        <source>invalid index: must be an unsigned integer</source>
        <translation>índice no válido: debe ser un entero sin signo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2476" />
        <source>&lt;subaddress_index&gt; is out of bounds</source>
        <translation>&lt;subaddress_index&gt;está fuera de límites</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2514" />
        <source>Failed to generate QR code, input too large</source>
        <translation>No se pudo generar el código QR, la entrada es demasiado grande</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3145" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3167" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="3186" />
        <source>Value not specified</source>
        <translation>Valor no especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3157" />
        <source>Warning: deprecated formats use boost serialization, which has buffer overflows and crashers. Only load deprecated formats from sources you trust.</source>
        <translation>Advertencia: los formatos obsoletos utilizan serialización de refuerzo, que genera desbordamientos de búfer y fallas. Cargue formatos obsoletos únicamente de fuentes en las que confíe.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3206" />
        <source>Important commands:</source>
        <translation>Comandos importantes:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3208" />
        <source>"welcome" - Show welcome message.</source>
        <translation>&amp;quot;bienvenido&amp;quot; - Mostrar mensaje de bienvenida.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3209" />
        <source>"help all" - Show the list of all available commands.</source>
        <translation>&amp;quot;ayudar a todos&amp;quot; - Muestra la lista de todos los comandos disponibles.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3210" />
        <source>"help &lt;command&gt;" - Show a command's documentation.</source>
        <translation>&amp;quot;ayuda&lt;command&gt; &amp;quot; - Mostrar la documentación de un comando.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3211" />
        <source>"apropos &lt;keyword&gt;" - Show commands related to a keyword.</source>
        <translation>&amp;quot;a propósito&lt;keyword&gt; &amp;quot; - Mostrar comandos relacionados con una palabra clave.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3213" />
        <source>"wallet_info" - Show wallet main address and other info.</source>
        <translation>&amp;quot;wallet_info&amp;quot; - Muestra la dirección principal de la billetera y otra información.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3214" />
        <source>"balance" - Show balance.</source>
        <translation>&amp;quot;equilibrio&amp;quot; - Mostrar equilibrio.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3215" />
        <source>"address all" - Show all addresses.</source>
        <translation>&amp;quot;dirección a todos&amp;quot; - Mostrar todas las direcciones.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3216" />
        <source>"address new" - Create new subaddress.</source>
        <translation>&amp;quot;dirección nueva&amp;quot; - Crea una nueva subdirección.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3217" />
        <source>"transfer &lt;address&gt; &lt;amount&gt; [&lt;asset_type&gt;]" - Send SAL to an address.</source>
        <translation>&amp;quot;transferir&lt;address&gt;&lt;amount&gt; [&lt;asset_type&gt; ]&amp;quot; - Envía SAL a una dirección.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3218" />
        <source>"return_payment &lt;tx_hash&gt;" - Return a previously-received amount to sender.</source>
        <translation>&amp;quot;devolver_pago&lt;tx_hash&gt; &amp;quot; - Devolver una cantidad previamente recibida al remitente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3219" />
        <source>"burn &lt;amount&gt; &lt;asset_type&gt;" - destroy coins forever.</source>
        <translation>&amp;quot;quemar&lt;amount&gt;&lt;asset_type&gt; &amp;quot; - Destruye monedas para siempre.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3220" />
        <source>"convert &lt;amount&gt; &lt;source_asset&gt; &lt;dest_asset&gt; [&lt;slippage_limit&gt;]" - convert between coin types.</source>
        <translation>&amp;quot;convertir&lt;amount&gt;&lt;source_asset&gt;&lt;dest_asset&gt; [&lt;slippage_limit&gt; ]&amp;quot; - convertir entre tipos de monedas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3221" />
        <source>"stake &lt;amount&gt;" - stake SAL for 30 days to earn yield.</source>
        <translation>&amp;quot;apostar&lt;amount&gt; &amp;quot; - apueste SAL durante 30 días para obtener rendimiento.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3222" />
        <source>"price_info" - Display current pricing information for supported assets.</source>
        <translation>&amp;quot;price_info&amp;quot;: muestra información de precios actual de los activos admitidos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3223" />
        <source>"supply_info" - Display circulating supply information.</source>
        <translation>&amp;quot;supply_info&amp;quot; - Muestra información de suministro circulante.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3224" />
        <source>"yield_info" - Display current stats on Salvium staking / yield.</source>
        <translation>&amp;quot;yield_info&amp;quot; - Muestra las estadísticas actuales sobre el staking y el rendimiento de Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3225" />
        <source>"show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]" - Show transactions.</source>
        <translation>&amp;quot;show_transfers [in|out|pending|failed|pool|coinbase|burnt|staked|yield]&amp;quot; - Mostrar transacciones.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3226" />
        <source>"sweep_all &lt;address&gt;" - Send whole balance to another wallet.</source>
        <translation>&amp;quot;barrer_todo&lt;address&gt; &amp;quot; - Envía todo el saldo a otra billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3227" />
        <source>"seed" - Show secret 25 words that can be used to recover this wallet.</source>
        <translation>&amp;quot;semilla&amp;quot; - Muestra 25 palabras secretas que pueden usarse para recuperar esta billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3228" />
        <source>"refresh" - Synchronize wallet with the Salvium network.</source>
        <translation>&amp;quot;refresh&amp;quot; - Sincroniza la billetera con la red Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3229" />
        <source>"status" - Check current status of wallet.</source>
        <translation>&amp;quot;estado&amp;quot; - Verifica el estado actual de la billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3230" />
        <source>"version" - Check software version.</source>
        <translation>&amp;quot;versión&amp;quot; - Comprueba la versión del software.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3231" />
        <source>"exit" - Exit wallet.</source>
        <translation>&amp;quot;salir&amp;quot; - Salir de la billetera.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3233" />
        <source>"donate &lt;amount&gt;" - Donate SAL to the development team.</source>
        <translation>&amp;quot;donar&lt;amount&gt; &amp;quot; - Donar SAL al equipo de desarrollo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3263" />
        <source>No commands found mentioning keyword(s)</source>
        <translation>No se encontraron comandos que mencionen palabras clave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3293" />
        <source>Invalid txid specified: </source>
        <translation>Txid especificado no válido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3300" />
        <source>WARNING: this operation may reveal the txids to the remote node and affect your privacy</source>
        <translation>ADVERTENCIA: esta operación puede revelar los txids al nodo remoto y afectar su privacidad</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3302" />
        <source>You have canceled the operation</source>
        <translation>Has cancelado la operación</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3347" />
        <source>Set another daemon to connect to. If it's not yours, it'll probably spy on you.</source>
        <translation>Configura otro demonio al que conectarte. Si no es el tuyo, probablemente te espíe.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3373" />
        <source>Transfer &lt;amount&gt; of &lt;asset_type&gt; to &lt;address&gt;. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included). The "subtractfeefrom=" list allows you to choose which destinations to fund the tx fee from instead of the change output. The fee will be split across the chosen destinations proportionally equally. For example, to make 3 transfers where the fee is taken from the first and third destinations, one could do: "transfer &lt;addr1&gt; 3 &lt;addr2&gt; 0.5 &lt;addr3&gt; 1 subtractfeefrom=0,2". Let's say the tx fee is 0.1. The balance would drop by exactly 4.5 SAL including fees, and addr1 &amp; addr3 would receive 2.925 &amp; 0.975 SAL, respectively. Use "subtractfeefrom=all" to spread the fee across all destinations.</source>
        <translation>Transferir&lt;amount&gt; de&lt;asset_type&gt; a&lt;address&gt; . Si el parámetro &amp;quot;índice=&lt;N1&gt; [,&lt;N2&gt; Si se especifica &amp;quot;...]&amp;quot;, la billetera utiliza las salidas recibidas por las direcciones de esos índices. Si se omite, la billetera elige aleatoriamente los índices de direcciones que se utilizarán. En cualquier caso, intenta lo mejor que puede para no combinar las salidas de varias direcciones.&lt;priority&gt; es la prioridad de la transacción. Cuanto mayor sea la prioridad, mayor será la tarifa de transacción. Los valores válidos en orden de prioridad (de menor a mayor) son: no importante, normal, elevada, prioridad. Si se omite, se utiliza el valor predeterminado (consulte el comando &amp;quot;establecer prioridad&amp;quot;).&lt;ring_size&gt; es el número de entradas que se deben incluir para la no trazabilidad. Se pueden realizar varios pagos a la vez agregando URI_2 o&lt;address_2&gt;&lt;amount_2&gt; etcétera (antes del ID de pago, si está incluido). La lista &amp;quot;subtractfeefrom=&amp;quot; le permite elegir desde qué destinos financiar la tarifa de transacción en lugar de la salida de cambio. La tarifa se dividirá entre los destinos elegidos de manera proporcional e igualitaria. Por ejemplo, para realizar 3 transferencias donde la tarifa se toma del primer y tercer destino, se podría hacer: &amp;quot;transfer&lt;addr1&gt; 3&lt;addr2&gt; 0,5&lt;addr3&gt; 1 subtractfeefrom=0,2&amp;quot;. Digamos que la tarifa de transacción es 0,1. El saldo se reduciría exactamente en 4,5 SAL, incluidas las tarifas, y addr1 y addr3 recibirían 2,925 y 0,975 SAL, respectivamente. Utilice &amp;quot;subtractfeefrom=all&amp;quot; para distribuir la tarifa entre todos los destinos.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3381" />
        <source>Send all unlocked balance to an address and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. &lt;priority&gt; is the priority of the sweep. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability.</source>
        <translation>Envíe todo el saldo desbloqueado a una dirección y bloquéelo por&lt;lockblocks&gt; (máximo 1000000). Si el parámetro &amp;quot;índice=&lt;N1&gt; [,&lt;N2&gt; Si se especifica &amp;quot;index=all&amp;quot;, la billetera barre las salidas recibidas por esos o todos los índices de dirección, respectivamente. Si se omite, la billetera elige aleatoriamente un índice de dirección para usar.&lt;priority&gt; es la prioridad del barrido. Cuanto mayor sea la prioridad, mayor será la tarifa de transacción. Los valores válidos en orden de prioridad (de menor a mayor) son: no importante, normal, elevada, prioridad. Si se omite, se utiliza el valor predeterminado (consulte el comando &amp;quot;establecer prioridad&amp;quot;).&lt;ring_size&gt; es el número de entradas a incluir para la no trazabilidad.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3387" />
        <source>Send all unlocked balance to an address. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter "outputs=&lt;N&gt;" is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Envía todo el saldo desbloqueado a una dirección. Si el parámetro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; o &amp;quot;index=all&amp;quot;, la billetera barre las salidas recibidas por esos o todos los índices de dirección, respectivamente. Si se omite, la billetera elige aleatoriamente un índice de dirección para usar. Si el parámetro &amp;quot;outputs=&lt;N&gt; &amp;quot; se especifica y N &amp;gt; 0, la billetera divide la transacción en N salidas pares.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3390" />
        <source>Send all unlocked balance from a given account to an address. If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" or "index=all" is specified, the wallet sweeps outputs received by those or all address indices, respectively. If omitted, the wallet randomly chooses an address index to be used. If the parameter "outputs=&lt;N&gt;" is specified and  N &gt; 0, wallet splits the transaction into N even outputs.</source>
        <translation>Envía todo el saldo desbloqueado de una cuenta determinada a una dirección. Si el parámetro &amp;quot;index=&lt;N1&gt; [,&lt;N2&gt; ,...]&amp;quot; o &amp;quot;index=all&amp;quot;, la billetera barre las salidas recibidas por esos o todos los índices de dirección, respectivamente. Si se omite, la billetera elige aleatoriamente un índice de dirección para usar. Si el parámetro &amp;quot;outputs=&lt;N&gt; &amp;quot; se especifica y N &amp;gt; 0, la billetera divide la transacción en N salidas pares.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3402" />
        <source>Returns the payment(s) received in TX &lt;tx_hash&gt; to the original sender.</source>
        <translation>Devuelve el(los) pago(s) recibido(s) en TX&lt;tx_hash&gt; al remitente original.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3406" />
        <source>PERMANENTLY destroys (burns) &lt;amount&gt; of &lt;asset_type&gt;</source>
        <translation>Destruye (quema) PERMANENTEMENTE&lt;amount&gt; de&lt;asset_type&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3410" />
        <source>Converts &lt;amount&gt; &lt;source_asset&gt; into &lt;dest_asset&gt;, with optional &lt;slippage_limit&gt;</source>
        <translation>Conversos&lt;amount&gt;&lt;source_asset&gt; en&lt;dest_asset&gt; , con opcional&lt;slippage_limit&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3414" />
        <source>Locks &lt;amount&gt; of SAL as stake in order to earn yield</source>
        <translation>Cabellos&lt;amount&gt; de SAL como participación para obtener rendimiento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3418" />
        <source>Displays the current exchange rate information for SAL &lt;--&gt; VSD conversions</source>
        <translation>Muestra la información del tipo de cambio actual para las conversiones SAL &amp;lt;--&amp;gt; VSD</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3422" />
        <source>Displays the current circulating supply information for SAL and VSD currencies</source>
        <translation>Muestra la información actual del suministro circulante de las monedas SAL y VSD</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3426" />
        <source>Displays the statistics for yield returns over the last &lt;NN&gt; blocks</source>
        <translation>Muestra las estadísticas de rendimiento de los últimos&lt;NN&gt; bloques</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3430" />
        <source>Donate &lt;amount&gt; to the development team (donate.salvium.io).</source>
        <translation>Donar&lt;amount&gt; al equipo de desarrollo (donate.salvium.io).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3456" />
        <source>If no arguments are specified or &lt;index&gt; is specified, the wallet shows the default or specified address. If "all" is specified, the wallet shows all the existing addresses in the currently selected account. If "new " is specified, the wallet creates a new address with the provided label text (which can be empty). If "mnew" is specified, the wallet creates as many new addresses as specified by the argument; the default label is set for the new addresses. If "label" is specified, the wallet sets the label of the address specified by &lt;index&gt; to the provided label text. If "one-off" is specified, the address for the specified index is generated and displayed, and remembered by the wallet</source>
        <translation>Si no se especifican argumentos o&lt;index&gt; Si se especifica &amp;quot;all&amp;quot;, la billetera muestra la dirección predeterminada o especificada. Si se especifica &amp;quot;all&amp;quot;, la billetera muestra todas las direcciones existentes en la cuenta seleccionada actualmente. Si se especifica &amp;quot;new&amp;quot;, la billetera crea una nueva dirección con el texto de etiqueta proporcionado (que puede estar vacío). Si se especifica &amp;quot;mnew&amp;quot;, la billetera crea tantas direcciones nuevas como se especifique en el argumento; la etiqueta predeterminada se establece para las nuevas direcciones. Si se especifica &amp;quot;label&amp;quot;, la billetera establece la etiqueta de la dirección especificada por&lt;index&gt; al texto de etiqueta proporcionado. Si se especifica &amp;quot;único&amp;quot;, se genera y muestra la dirección del índice especificado, que la billetera recuerda.</translation>
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
        <translation>Opciones disponibles: seed language Establece el idioma de la semilla de la billetera. always-confirm-transfers &amp;lt;1|0&amp;gt; Si se deben confirmar las transacciones no divididas. print-ring-members &amp;lt;1|0&amp;gt; Si se debe imprimir información detallada sobre los miembros del anillo durante la confirmación. store-tx-info &amp;lt;1|0&amp;gt; Si se debe almacenar la información de las transacciones salientes (dirección de destino, ID de pago, clave secreta de la transacción) para referencia futura. auto-refresh &amp;lt;1|0&amp;gt; Si se debe sincronizar automáticamente los nuevos bloques desde el demonio. refresh-type&lt;full|optimize-coinbase|no-coinbase|default&gt; Establezca el comportamiento de actualización de la billetera. priority [0|1|2|3|4] Establezca la tarifa en predeterminada/sin importancia/normal/elevada/prioritaria. confirm-missing-payment-id &amp;lt;1|0&amp;gt; (obsoleto) ask-password &amp;lt;0|1|2 (o never|action|decrypt)&amp;gt; action: solicita la contraseña antes de muchas acciones como transferencia, etc. decrypt: igual que action, pero mantiene la clave de gasto cifrada en la memoria cuando no se necesita unit&lt;sal|millisal|microsal&gt; min-outputs-count [n] Intenta mantener al menos esa cantidad de salidas de valor al menos min-outputs-value. min-outputs-value [n] Intenta mantener al menos min-outputs-count salidas de al menos ese valor. merge-destinations &amp;lt;1|0&amp;gt; Si se deben fusionar varios pagos a la misma dirección de destino. confirm-backlog &amp;lt;1|0&amp;gt; Si se debe advertir si hay una acumulación de transacciones. confirm-backlog-threshold [n] Establece un umbral para que confirm-backlog solo advierta si la acumulación de transacciones es mayor que n bloques. confirm-export-overwrite &amp;lt;1|0&amp;gt; Si se debe advertir si el archivo que se va a exportar ya existe. refresh-from-block-height [n] Establece la altura antes de la cual se ignorarán los bloques. auto-low-priority &amp;lt;1|0&amp;gt; Si se debe usar automáticamente el nivel de tarifa de baja prioridad cuando sea seguro hacerlo. segregate-pre-fork-outputs &amp;lt;1|0&amp;gt; Establezca esto si tiene la intención de gastar salidas tanto en Salvium como en una bifurcación de reutilización de claves. key-reuse-mitigation2 &amp;lt;1|0&amp;gt; Establezca esto si no está seguro de si gastará en una bifurcación de Salvium con reutilización de claves más adelante. subaddress-lookahead&lt;major&gt; :&lt;minor&gt; Establezca los tamaños de anticipación para la tabla hash de subdirecciones. segregation-height&lt;n&gt; Establezca la altura de una bifurcación de reutilización de clave que desea utilizar, 0 para usar el valor predeterminado. ignore-fractional-outputs &amp;lt;1|0&amp;gt; Si desea ignorar las salidas fraccionarias que resultan en una pérdida neta al gastar debido a la tarifa. ignore-outputs-above&lt;amount&gt; Ignorar las salidas de importes superiores a este umbral al realizar gastos. El valor 0 se traduce al valor máximo (18 millones), lo que desactiva este filtro. ignore-outputs-below&lt;amount&gt; Ignorar las salidas de montos por debajo de este umbral al gastar. track-uses &amp;lt;1|0&amp;gt; Si se debe realizar un seguimiento de los usos de las salidas propias. setup-background-mining &amp;lt;1|0&amp;gt; Si se debe habilitar la minería en segundo plano. Establezca esto para respaldar la red y tener la oportunidad de recibir nuevo Salvium. device-name&lt;device_name[:device_spec]&gt; Nombre del dispositivo para la billetera de hardware. export-format &amp;lt;&amp;quot;binary&amp;quot;|&amp;quot;ascii&amp;quot;&amp;gt; Guarda todos los archivos exportados como binarios (no se pueden copiar y pegar) o ascii (se pueden). persistent-rpc-client-id &amp;lt;1|0&amp;gt; Si se debe seguir usando el mismo ID de cliente para el pago RPC durante los reinicios de la billetera. auto-mine-for-rpc-payment-threshold&lt;float&gt; Si desea iniciar automáticamente la minería para el pago de RPC si el demonio lo requiere. credits-target&lt;unsigned int&gt; El saldo de los créditos de pago de RPC se asigna al destino (0 por defecto). show-wallet-name-when-locked &amp;lt;1|0&amp;gt; Establezca esto si desea mostrar el nombre de la billetera cuando esté bloqueada. enable-multisig-experimental &amp;lt;1|0&amp;gt; Establezca esto para permitir comandos multisig. Actualmente, la multisig puede ser explotable si las partes no confían entre sí. inactivity-lock-timeout&lt;unsigned int&gt; Cuántos segundos esperar antes de bloquear la billetera (0 para deshabilitar). freeze-incoming-payments &amp;lt;1|0&amp;gt; Si desea que los pagos entrantes se congelen automáticamente, para que no se puedan gastar por error.</translation>
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
        <translation>Muestra las transferencias entrantes/salientes dentro de un rango de altura opcional. Formato de salida: In o Coinbase: Número de bloque, &amp;quot;block&amp;quot;|&amp;quot;in&amp;quot;, Hora, Monto, Tipo de activo, Hash de transacción, ID de pago, Índice de subdirección, &amp;quot;-&amp;quot;, Nota Out: Número de bloque, &amp;quot;out&amp;quot;, Hora, Monto*, Tipo de activo, Hash de transacción, ID de pago, Tarifa, Destinos, Direcciones de entrada**, &amp;quot;-&amp;quot;, Nota Pool: &amp;quot;pool&amp;quot;, &amp;quot;in&amp;quot;, Hora, Monto, Tipo de activo, Hash de transacción, ID de pago, Índice de subdirección, &amp;quot;-&amp;quot;, Nota, Doble gasto Nota pendiente o fallida: &amp;quot;failed&amp;quot;|&amp;quot;pending&amp;quot;, &amp;quot;out&amp;quot;, Hora, Monto*, Hash de transacción, ID de pago, Tarifa, Direcciones de entrada**, &amp;quot;-&amp;quot;, Nota Stake o Burnt: Número de bloque, &amp;quot;out&amp;quot;, Hora, Monto*, Tipo de activo, Hash de transacción, ID de pago, Tarifa, Direcciones de entrada**, &amp;quot;-&amp;quot;, Nota * Sin cambio ni tarifa. ** Conjunto de índices de dirección utilizados como entradas en esta transferencia.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3618" />
        <source>export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;filepath&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>export_transfers [entrada|salida|todas|pendientes|fallidas|pool|coinbase|quemadas|apuestas|rendimiento] [índice=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [salida=&lt;filepath&gt; ] [opción=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3653" />
        <source>Sign the contents of a file with the given subaddress (or the main address if not specified)</source>
        <translation>Firmar el contenido de un archivo con la subdirección indicada (o la dirección principal si no se especifica)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3728" />
        <source>Interface with the MMS (Multisig Messaging System)
&lt;subcommand&gt; is one of:
  init, info, signer, list, next, sync, transfer, delete, send, receive, export, note, show, set, help
  send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum
Get help about a subcommand with: help mms &lt;subcommand&gt;, or help mms &lt;subcommand&gt;</source>
        <translation>Interfaz con el MMS (Sistema de mensajería multifirma)&lt;subcommand&gt; es uno de: init, info, signer, list, next, sync, transfer, delete, send, Receive, Export, note, show, set, help send_signer_config, start_auto_config, stop_auto_config, auto_config, config_checksum Obtenga ayuda sobre un subcomando con: help mms&lt;subcommand&gt; , o ayuda mms&lt;subcommand&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3803" />
        <source>Get a checksum that allows signers to easily check for identical MMS configuration</source>
        <translation>Obtenga una suma de comprobación que permita a los firmantes verificar fácilmente la configuración idéntica de MMS</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3889" />
        <source>Show address as QR code</source>
        <translation>Mostrar dirección como código QR</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3897" />
        <source>Search all command descriptions for keyword(s)</source>
        <translation>Buscar todas las descripciones de comandos por palabra(s) clave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3901" />
        <source>Scan the transactions given by &lt;txid&gt;(s), processing them and looking for outputs</source>
        <translation>Escanear las transacciones dadas por&lt;txid&gt; (s), procesándolos y buscando resultados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4014" />
        <source>sal, millisal, microsal</source>
        <translation>sal, milisal, microsal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4032" />
        <source>1 or 0</source>
        <translation>1 o 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4257" />
        <source>Multisig is disabled.</source>
        <translation>La multifirma está deshabilitada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4258" />
        <source>Multisig is an experimental feature and may have bugs. Things that could go wrong include: funds sent to a multisig wallet can't be spent at all, can only be spent with the participation of a malicious group member, or can be stolen by a malicious group member.</source>
        <translation>La función multifirma es una función experimental y puede tener errores. Entre los problemas que pueden surgir se encuentran los siguientes: los fondos enviados a una billetera multifirma no se pueden gastar en absoluto, solo se pueden gastar con la participación de un miembro malintencionado del grupo o pueden ser robados por un miembro malintencionado del grupo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4260" />
        <source>You have canceled restoring a multisig wallet.</source>
        <translation>Has cancelado la restauración de una billetera multifirma.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4915" />
        <source>wallet failed to connect to daemon, because it is set to offline mode</source>
        <translation>La billetera no pudo conectarse al demonio porque está configurada en modo fuera de línea</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4917" />
        <source>wallet failed to connect to daemon, because it is not up to date. </source>
        <translation>La billetera no pudo conectarse al demonio porque no está actualizada. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4918" />
        <source>Please make sure you are running the latest wallet.</source>
        <translation>Asegúrese de estar ejecutando la billetera más reciente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4921" />
        <source>Daemon is not up to date. Please make sure the daemon is running the latest version or change the daemon address using the 'set_daemon' command.</source>
        <translation>El demonio no está actualizado. Asegúrese de que el demonio esté ejecutando la última versión o cambie la dirección del demonio con el comando &amp;#39;set_daemon&amp;#39;.</translation>
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
        <translation>¡Tu billetera ha sido generada! Para comenzar a sincronizar con el demonio, usa el comando &amp;quot;refresh&amp;quot;. Usa el comando &amp;quot;help&amp;quot; para ver una lista simplificada de los comandos disponibles. Usa el comando &amp;quot;help all&amp;quot; para ver la lista de todos los comandos disponibles. Usa &amp;quot;help&lt;command&gt; &amp;quot; para ver la documentación de un comando. Utilice siempre el comando &amp;quot;exit&amp;quot; al cerrar salvium-wallet-cli para guardar el estado de su sesión actual. De lo contrario, es posible que deba sincronizar su billetera nuevamente (sus claves de billetera NO corren riesgo en ningún caso).
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5348" />
        <source>Use the "help" command to see a simplified list of available commands.
</source>
        <translation>Utilice el comando &amp;quot;ayuda&amp;quot; para ver una lista simplificada de comandos disponibles.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5349" />
        <source>Use "help all" to see the list of all available commands.
</source>
        <translation>Utilice &amp;quot;ayudar a todos&amp;quot; para ver la lista de todos los comandos disponibles.
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5536" />
        <source>Enabling this supports the network you are using, and makes you eligible for receiving new SALs</source>
        <translation>Al habilitar esta opción, se respalda la red que está utilizando y podrá recibir nuevas SAL.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5703" />
        <source>Failed to parse address</source>
        <translation>No se pudo analizar la dirección</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5718" />
        <source>Expected trusted, untrusted or this-is-probably-a-spy-node got </source>
        <translation>Se esperaba que fuera confiable, no confiable o probablemente este sea un nodo espía. </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5727" />
        <source>This is not Tor/I2P address, and is not a trusted daemon.</source>
        <translation>Esta no es una dirección Tor/I2P y no es un demonio confiable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5728" />
        <source>Either use your own trusted node, connect via Tor or I2P, or pass this-is-probably-a-spy-node and be spied on.</source>
        <translation>Utilice su propio nodo de confianza, conéctese a través de Tor o I2P, o pase &amp;quot;este-probablemente-es-un-nodo-espía&amp;quot; y sea espiado.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5733" />
        <source>Warning: connecting to a non-local daemon without SSL, passive adversaries will be able to spy on you.</source>
        <translation>Advertencia: si se conecta a un demonio no local sin SSL, los adversarios pasivos podrán espiarlo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5836" />
        <source>stake returned </source>
        <translation>apuesta devuelta </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5842" />
        <source>yield earned </source>
        <translation>rendimiento obtenido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5853" />
        <source>burnt </source>
        <translation>quemado </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5858" />
        <source>converting </source>
        <translation>mudado </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5863" />
        <source>staked </source>
        <translation>apostado </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5982" />
        <source>Device asks for passphrase. Do you want to enter the passphrase on device (Y) (or on the host (N))?</source>
        <translation>El dispositivo solicita una contraseña. ¿Desea ingresar la contraseña en el dispositivo (Y) (o en el host (N))?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6005" />
        <source>The wallet's refresh-from-block-height setting is higher than the daemon's height: this may mean your wallet will skip over transactions</source>
        <translation>La configuración de actualización desde la altura del bloque de la billetera es más alta que la altura del demonio: esto puede significar que su billetera omitirá las transacciones</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6155" />
        <source> (Some owned outputs have missing key images - export_outputs, import_outputs, export_key_images, and import_key_images needed)</source>
        <translation> (Algunas salidas propias tienen imágenes clave faltantes: se necesitan export_outputs, import_outputs, export_key_images e import_key_images)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171" />
        <source>Asset: </source>
        <translation>Activo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6171" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10353" />
        <source>, balance: </source>
        <translation>, balance: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6494" />
        <source>failed to connect to daemon</source>
        <translation>No se pudo conectar al demonio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6595" />
        <source>, which can break the anonymity of ring signatures. Make sure this is intentional!
</source>
        <translation>, lo que puede romper el anonimato de las firmas de los anillos. ¡Asegúrate de que esto sea intencional!
</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6653" />
        <source>I locked your Salvium wallet to protect you while you were away
see "help set" to configure/disable</source>
        <translation>Bloqueé tu billetera Salvium para protegerte mientras estabas fuera, consulta &amp;quot;Configuración de ayuda&amp;quot; para configurar/deshabilitar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6673" />
        <source>Locked due to inactivity.</source>
        <translation>Bloqueado por inactividad.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6674" />
        <source>The wallet password is required to unlock the console.</source>
        <translation>La contraseña de la billetera es necesaria para desbloquear la consola.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6681" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10838" />
        <source>Testnet</source>
        <translation>Red de prueba</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10839" />
        <source>Stagenet</source>
        <translation>escenarionet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6682" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10839" />
        <source>Mainnet</source>
        <translation>red principal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7073" />
        <source>Burning %s %s.  </source>
        <translation>Quemando %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7075" />
        <source>Converting %s %s to %s.  </source>
        <translation>Convirtiendo %s %s a %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7077" />
        <source>Staking %s %s for yield accrual.  </source>
        <translation>Apostar %s %s para acumular rendimiento.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7079" />
        <source>Sending %s %s.  </source>
        <translation>Enviando %s %s.  </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7098" />
        <source>.
This transaction (including %s change) will unlock in %llu blocks, approximately %s days (assuming 2 minutes per block)</source>
        <translation>Esta transacción (incluido el cambio de %s) se desbloqueará en %llu bloques, aproximadamente %s días (suponiendo 2 minutos por bloque)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="7975" />
        <source>Invalid account</source>
        <translation>Cuenta inválida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8006" />
        <source>return_payments are disabled</source>
        <translation>Los pagos devueltos están deshabilitados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8042" />
        <source>incorrect TX type for txid </source>
        <translation>tipo TX incorrecto para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8048" />
        <source>invalid return_address_list for txid </source>
        <translation>lista de direcciones de retorno no válida para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8054" />
        <source>invalid return_address/return_pubkey for txid </source>
        <translation>return_address/return_pubkey no válidos para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8061" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8072" />
        <source>key image is unavailable (partial / unknown / spent / frozen) for txid </source>
        <translation>La imagen clave no está disponible (parcial/desconocida/gastada/congelada) para txid </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8104" />
        <source>Returning %s for a total fee of %s.  Is this okay?</source>
        <translation>Devolver %s por un cargo total de %s. ¿Está bien?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8134" />
        <source>cold-signing of return TXs not yet implemented</source>
        <translation>La firma en frío de las TX de retorno aún no se ha implementado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8224" />
        <source>conversions are disabled until hard fork </source>
        <translation>Las conversiones están deshabilitadas hasta la bifurcación dura </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8231" />
        <source>missing / extraneous argument(s)</source>
        <translation>argumento(s) faltante(s)/extraño(s)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8247" />
        <source>invalid slippage_limit value : expected 0.0-90.0, got </source>
        <translation>Valor slippage_limit no válido: se esperaba entre 0,0 y 90,0, pero se obtuvo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8258" />
        <source>invalid argument(s): </source>
        <translation>argumento(s) inválido(s): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8264" />
        <source>out of range for slippage limit: </source>
        <translation>fuera de rango para límite de deslizamiento: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8274" />
        <source>invalid destination asset_type</source>
        <translation>destino inválido asset_type</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8284" />
        <source>invalid source asset_type</source>
        <translation>asset_type de fuente no válida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8293" />
        <source>invalid conversion - asset_type is unchanged</source>
        <translation>conversión no válida - asset_type no cambia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8318" />
        <source>This is a multisig wallet, staking is not currently supported</source>
        <translation>Esta es una billetera multifirma, actualmente no se admite el staking</translation>
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
        <translation>INFORMACIÓN DE SUMINISTRO</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8391" />
        <source>	%6s : %21.8d</source>
        <translation>	%6s: %21,8d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8418" />
        <source>
STAKED FUNDS:</source>
        <translation>
FONDOS APUESTADOS:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8424" />
        <source>Height %d, txid %s, staked %s SAL, earned %s SAL</source>
        <translation>Altura %d, txid %s, SAL apostada %s, SAL ganada %s</translation>
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
INFORMACIÓN DE RENDIMIENTO: Monedas de suministro quemadas en los últimos %s: %d Monedas totales bloqueadas: %d Rendimiento acumulado en los últimos %s: %d Rendimiento por SAL apostado: %d</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8504" />
        <source>Donating %s %s to The Salvium Team (donate.salvium.io or %s).</source>
        <translation>Donando %s %s al equipo de Salvium (donate.salvium.io o %s).</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8855" />
        <source>Last argument is an address, but not a subaddress</source>
        <translation>El último argumento es una dirección, pero no una subdirección.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8909" />
        <source>It could be because the transfer was to a subaddress. If this is the case, pass the subaddress last</source>
        <translation>Podría ser porque la transferencia fue a una subdirección. Si este es el caso, pase la subdirección al final.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9604" />
        <source>usage: show_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]]</source>
        <translation>Uso: show_transfers [entrada|salida|todas|pendientes|fallidas|pool|coinbase|quemadas|apostadas|rendimiento] [índice=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9663" />
        <source>usage: export_transfers [in|out|all|pending|failed|pool|coinbase|burnt|staked|yield] [index=&lt;N1&gt;[,&lt;N2&gt;,...]] [&lt;min_height&gt; [&lt;max_height&gt;]] [output=&lt;path&gt;] [option=&lt;with_keys&gt;]</source>
        <translation>uso: export_transfers [entrada|salida|todas|pendientes|fallidas|pool|coinbase|quemadas|apostadas|rendimiento] [índice=&lt;N1&gt; [,&lt;N2&gt; ,...]] [&lt;min_height&gt; [&lt;max_height&gt; ]] [salida=&lt;path&gt; ] [opción=&lt;with_keys&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>tx key</source>
        <translation>clave tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10352" />
        <source>
Grand total:
  Asset: </source>
        <translation>
Gran total: Activo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Asset</source>
        <translation>Activo</translation>
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
        <translation>Se esperaba exactamente un argumento para la cantidad de nuevas direcciones</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10467" />
        <source>failed to parse the amount of new addresses: </source>
        <translation>No se pudo analizar la cantidad de nuevas direcciones: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10472" />
        <source>the amount of new addresses must be lower or equal to </source>
        <translation>La cantidad de nuevas direcciones debe ser menor o igual a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10487" />
        <source>Expected exactly two arguments for index</source>
        <translation>Se esperaban exactamente dos argumentos para el índice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10497" />
        <source>Address at %u %u: %s</source>
        <translation>Dirección en %u %u: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10630" />
        <source>Standard address: %s, payment ID: %s</source>
        <translation>Dirección estándar: %s, ID de pago: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10886" />
        <source>Invalid subaddress index format, and not a signature type: </source>
        <translation>Formato de índice de subdirección no válido y no es un tipo de firma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11511" />
        <source> (Y/Yes/N/No): </source>
        <translation> (S/Sí/N/No): </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11517" />
        <source>WARNING: Using MMS auto-config mechanisms is not trustless</source>
        <translation>ADVERTENCIA: El uso de mecanismos de configuración automática de MMS no implica confianza.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11518" />
        <source>A malicious auto-config manager could send you info about own wallets instead of other signers' info</source>
        <translation>Un administrador de configuración automática malintencionado podría enviarle información sobre sus propias billeteras en lugar de la información de otros firmantes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11519" />
        <source>If in doubt do not use auto-config or at least compare configs using the "mms config_checksum" command</source>
        <translation>En caso de duda, no utilice la configuración automática o al menos compare las configuraciones utilizando el comando &amp;quot;mms config_checksum&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11546" />
        <source>Choose processing:</source>
        <translation>Seleccione el procesamiento:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11555" />
        <source>Sign tx</source>
        <translation>Firmar tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11563" />
        <source>Send the tx for submission to </source>
        <translation>Enviar el tx para su envío a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11567" />
        <source>Send the tx for signing to </source>
        <translation>Enviar la tx para firmar a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11574" />
        <source>Submit tx</source>
        <translation>Enviar tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11577" />
        <source>unknown</source>
        <translation>desconocido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11583" />
        <source>Choice: </source>
        <translation>Elección: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11595" />
        <source>Wrong choice</source>
        <translation>Elección equivocada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>Id</source>
        <translation>Identificación</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>I/O</source>
        <translation>E/S</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11602" />
        <source>Authorized Signer</source>
        <translation>Firmante autorizado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Message Type</source>
        <translation>Tipo de mensaje</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Height</source>
        <translation>Altura</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>R</source>
        <translation>R</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Message State</source>
        <translation>Estado del mensaje</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11603" />
        <source>Since</source>
        <translation>Desde</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11620" />
        <source> ago</source>
        <translation> atrás</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>#</source>
        <translation>#</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11626" />
        <source>Transport Address</source>
        <translation>Dirección de transporte</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627" />
        <source>Auto-Config Token</source>
        <translation>Token de configuración automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11627" />
        <source>Salvium Address</source>
        <translation>Dirección de Salvium</translation>
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
        <translation>Mensaje </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11683" />
        <source>In/out: </source>
        <translation>Entrada/salida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11685" />
        <source>State: </source>
        <translation>Estado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11685" />
        <source>%s since %s, %s ago</source>
        <translation>%s desde hace %s, %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11689" />
        <source>Sent: Never</source>
        <translation>Enviado: Nunca</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11693" />
        <source>Sent: %s, %s ago</source>
        <translation>Enviado: hace %s, %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11696" />
        <source>Authorized signer: </source>
        <translation>Firmante autorizado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11697" />
        <source>Content size: </source>
        <translation>Tamaño del contenido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11697" />
        <source> bytes</source>
        <translation> bytes</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11698" />
        <source>Content: </source>
        <translation>Contenido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11698" />
        <source>(binary data)</source>
        <translation>(datos binarios)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11728" />
        <source>Send these messages now?</source>
        <translation>¿Enviar estos mensajes ahora?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11738" />
        <source>Queued for sending.</source>
        <translation>En cola para enviar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11758" />
        <source>Invalid message id</source>
        <translation>Id. de mensaje no válido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11767" />
        <source>usage: mms init &lt;required_signers&gt;/&lt;authorized_signers&gt; &lt;own_label&gt; &lt;own_transport_address&gt;</source>
        <translation>Uso: mms init&lt;required_signers&gt; /&lt;authorized_signers&gt;&lt;own_label&gt;&lt;own_transport_address&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11773" />
        <source>The MMS is already initialized. Re-initialize by deleting all signer info and messages?</source>
        <translation>El MMS ya está inicializado. ¿Quieres reinicializarlo eliminando toda la información y los mensajes del firmante?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11788" />
        <source>Error in the number of required signers and/or authorized signers</source>
        <translation>Error en el número de firmantes requeridos y/o firmantes autorizados</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11805" />
        <source>The MMS is not active.</source>
        <translation>El MMS no está activo.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11828" />
        <source>Invalid signer number </source>
        <translation>Número de firmante no válido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11833" />
        <source>mms signer [&lt;number&gt; &lt;label&gt; [&lt;transport_address&gt; [&lt;salvium_address&gt;]]]</source>
        <translation>Firmante de mms [&lt;number&gt; &lt;label&gt;[&lt;/label&gt;&lt;transport_address&gt; &lt;label&gt;[&lt;/label&gt;&lt;salvium_address&gt; &lt;label&gt;]]]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11852" />
        <source>Invalid Salvium address</source>
        <translation>Dirección de Salvium no válida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11859" />
        <source>Wallet state does not allow changing Salvium addresses anymore</source>
        <translation>El estado de la billetera ya no permite cambiar las direcciones de Salvium</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11871" />
        <source>Usage: mms list</source>
        <translation>Uso: lista mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11884" />
        <source>Usage: mms next [sync]</source>
        <translation>Uso: mms next [sincronizar]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11909" />
        <source>No next step: </source>
        <translation>No hay siguiente paso: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11919" />
        <source>prepare_multisig</source>
        <translation>preparar_multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11925" />
        <source>make_multisig</source>
        <translation>hacer_multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11940" />
        <source>exchange_multisig_keys</source>
        <translation>intercambio de claves multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11956" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="12080" />
        <source>export_multisig_info</source>
        <translation>exportar_información_multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11965" />
        <source>import_multisig_info</source>
        <translation>importar información multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11978" />
        <source>sign_multisig</source>
        <translation>signo_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11988" />
        <source>submit_multisig</source>
        <translation>enviar_multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11998" />
        <source>Send tx</source>
        <translation>Enviar tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12009" />
        <source>Process signer config</source>
        <translation>Configuración del firmante del proceso</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12021" />
        <source>Replace current signer config with the one displayed above?</source>
        <translation>¿Reemplazar la configuración del firmante actual con la que se muestra arriba?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12027" />
        <source>You can use the "mms delete" command to delete any unwanted message</source>
        <translation>Puede utilizar el comando &amp;quot;mms delete&amp;quot; para eliminar cualquier mensaje no deseado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12040" />
        <source>Process auto config data</source>
        <translation>Procesar datos de configuración automática</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12054" />
        <source>Nothing ready to process</source>
        <translation>Nada listo para procesar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12073" />
        <source>Usage: mms sync</source>
        <translation>Uso: sincronización mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12097" />
        <source>Usage: mms delete (&lt;message_id&gt; | all)</source>
        <translation>Uso: eliminar mms (&lt;message_id&gt; |todos)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12104" />
        <source>Delete all messages?</source>
        <translation>¿Borrar todos los mensajes?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12130" />
        <source>Usage: mms send [&lt;message_id&gt;]</source>
        <translation>Uso: enviar mms [&lt;message_id&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12147" />
        <source>Usage: mms receive</source>
        <translation>Uso: recibir mms</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12164" />
        <source>Usage: mms export &lt;message_id&gt;</source>
        <translation>Uso: exportación mms&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12175" />
        <source>Message content saved to: </source>
        <translation>Contenido del mensaje guardado en: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12179" />
        <source>Failed to to save message content</source>
        <translation>No se pudo guardar el contenido del mensaje</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12203" />
        <source>Usage: mms note [&lt;label&gt; &lt;text&gt;]</source>
        <translation>Uso: nota mms [&lt;text&gt; &lt;label&gt;]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12210" />
        <source>No signer found with label </source>
        <translation>No se encontró ningún firmante con etiqueta </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12232" />
        <source>Usage: mms show &lt;message_id&gt;</source>
        <translation>Uso: mostrar mms&lt;message_id&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12250" />
        <source>Usage: mms set &lt;option_name&gt; [&lt;option_value&gt;]</source>
        <translation>Uso: conjunto mms&lt;option_name&gt; [&lt;option_value&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12267" />
        <source>Wrong option value</source>
        <translation>Valor de opción incorrecto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12272" />
        <source>Auto-send is on</source>
        <translation>El envío automático está activado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12272" />
        <source>Auto-send is off</source>
        <translation>El envío automático está desactivado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12277" />
        <source>Unknown option</source>
        <translation>Opción desconocida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12285" />
        <source>Usage: help mms [&lt;subcommand&gt;]</source>
        <translation>Uso: ayuda mms [&lt;subcommand&gt; ]</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12301" />
        <source>Usage: mms send_signer_config</source>
        <translation>Uso: mms send_signer_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12307" />
        <source>Signer config not yet complete</source>
        <translation>La configuración del firmante aún no está completa</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12322" />
        <source>Usage: mms start_auto_config [&lt;label&gt; &lt;label&gt; ...]</source>
        <translation>Uso: mms start_auto_config [ &lt;label&gt;...]&lt;/label&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12327" />
        <source>There are signers without a label set. Complete labels before auto-config or specify them as parameters here.</source>
        <translation>Hay firmantes sin etiqueta definida. Complete las etiquetas antes de la configuración automática o especifíquelas como parámetros aquí.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12333" />
        <source>Auto-config is already running. Cancel and restart?</source>
        <translation>La configuración automática ya se está ejecutando. ¿Quieres cancelarla y reiniciarla?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12357" />
        <source>Usage: mms config_checksum</source>
        <translation>Uso: mms config_checksum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12369" />
        <source>Usage: mms stop_auto_config</source>
        <translation>Uso: mms stop_auto_config</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12372" />
        <source>Delete any auto-config tokens and stop auto-config?</source>
        <translation>¿Eliminar todos los tokens de configuración automática y detener la configuración automática?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12385" />
        <source>Usage: mms auto_config &lt;auto_config_token&gt;</source>
        <translation>Uso: mms auto_config&lt;auto_config_token&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12392" />
        <source>Invalid auto-config token</source>
        <translation>Token de configuración automática no válido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12402" />
        <source>Auto-config already running. Cancel and restart?</source>
        <translation>La configuración automática ya se está ejecutando. ¿Quieres cancelarla y reiniciarla?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12421" />
        <source>MMS not available in this wallet</source>
        <translation>MMS no disponible en esta billetera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12445" />
        <source>The MMS is not active. Activate using the "mms init" command</source>
        <translation>El MMS no está activo. Activarlo con el comando &amp;quot;mms init&amp;quot;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12526" />
        <source>Invalid MMS subcommand</source>
        <translation>Subcomando MMS no válido</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="12531" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="12535" />
        <source>Error in MMS command: </source>
        <translation>Error en el comando MMS: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10857" />
        <source>wallet is watch-only and cannot sign</source>
        <translation>La billetera es solo para vigilancia y no puede firmar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10862" />
        <source>This wallet is multisig and cannot sign</source>
        <translation>Esta billetera es multifirma y no puede firmar.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10936" />
        <source>Bad signature from </source>
        <translation>Mala firma de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10940" />
        <source>Good signature from </source>
        <translation>Buena firma de </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10956" />
        <source>wallet is watch-only and cannot export key images</source>
        <translation>La billetera es solo para observación y no puede exportar imágenes de claves</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10994" />
        <source>Signed key images exported to </source>
        <translation>Imágenes de claves firmadas exportadas a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11039" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11085" />
        <source>command only supported by HW wallet</source>
        <translation>Comando solo compatible con la billetera HW</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11044" />
        <source>hw wallet does not support cold KI sync</source>
        <translation>La billetera hw no admite la sincronización KI en frío</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11056" />
        <source>Please confirm the key image sync on the device</source>
        <translation>Confirme la sincronización de la imagen clave en el dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11062" />
        <source>Key images synchronized to height </source>
        <translation>Imágenes clave sincronizadas con la altura </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11065" />
        <source>Running untrusted daemon, cannot determine which transaction output is spent. Use a trusted daemon with --trusted-daemon and run rescan_spent</source>
        <translation>Al ejecutar un demonio que no es de confianza, no se puede determinar qué salida de transacción se ha gastado. Utilice un demonio de confianza con --trusted-daemon y ejecute rescan_spent</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11068" />
        <source> spent, </source>
        <translation> gastado, </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11068" />
        <source> unspent</source>
        <translation> no gastado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11072" />
        <source>Failed to import key images</source>
        <translation>No se pudieron importar las imágenes clave</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11077" />
        <source>Failed to import key images: </source>
        <translation>Error al importar imágenes clave: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11094" />
        <source>Failed to reconnect device</source>
        <translation>No se pudo reconectar el dispositivo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11099" />
        <source>Failed to reconnect device: </source>
        <translation>No se pudo reconectar el dispositivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11151" />
        <source>Outputs exported to </source>
        <translation>Salidas exportadas a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11306" />
        <source>Double spend seen on the network: this transaction may or may not end up being mined</source>
        <translation>Se observa doble gasto en la red: esta transacción puede o no terminar siendo minada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11341" />
        <source>Transaction ID not found</source>
        <translation>ID de transacción no encontrada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11376" />
        <source>Transaction successfully saved to </source>
        <translation>Transacción guardada exitosamente en </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11376" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11378" />
        <source>, txid </source>
        <translation>, txido </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11378" />
        <source>Failed to save transaction to </source>
        <translation>No se pudo guardar la transacción en </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="408" />
        <source>true</source>
        <translation>verdadero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="461" />
        <source>failed to parse refresh type</source>
        <translation>No se pudo analizar el tipo de actualización</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="881" />
        <source>Enter optional seed offset passphrase, empty to see raw seed</source>
        <translation>Ingrese una frase de contraseña de desplazamiento de semilla opcional, vacíela para ver la semilla sin procesar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="4342" />
        <source>Enter seed offset passphrase, empty if none</source>
        <translation>Ingrese la frase de contraseña de desplazamiento de semilla, vacía si no hay ninguna</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5342" />
        <source>You may want to remove the file "%s" and try again</source>
        <translation>Es posible que desees eliminar el archivo &amp;quot;%s&amp;quot; e intentarlo nuevamente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8685" />
        <source>This is a multisig wallet, it can only sign with sign_multisig</source>
        <translation>Esta es una billetera multisig, solo puede firmar con sign_multisig</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8690" />
        <source>This is a watch only wallet</source>
        <translation>Esta es una billetera solo para relojes.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8722" />
        <source>Failed to sign transaction</source>
        <translation>No se pudo firmar la transacción</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8728" />
        <source>Failed to sign transaction: </source>
        <translation>No se pudo firmar la transacción: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8749" />
        <source>Transaction raw hex data exported to </source>
        <translation>Datos hexadecimales sin procesar de la transacción exportados a </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8770" />
        <source>Failed to load transaction from file</source>
        <translation>No se pudo cargar la transacción desde el archivo</translation>
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
        <translation>No se pudo analizar txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8430" />
        <source>Height %d (matures %d), txid %s, staked %s SAL, %s SAL accrued so far</source>
        <translation>Altura %d (maduración %d), txid %s, SAL %s apostada, %s SAL acumulada hasta el momento</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8828" />
        <source>Tx key: </source>
        <translation>Clave Tx: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8833" />
        <source>no tx keys found for this txid</source>
        <translation>No se encontraron claves tx para este txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8876" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8887" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8894" />
        <source>failed to parse tx_key</source>
        <translation>No se pudo analizar tx_key</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8903" />
        <source>Tx key successfully stored.</source>
        <translation>La clave Tx se almacenó correctamente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8907" />
        <source>Failed to store tx key: </source>
        <translation>No se pudo almacenar la clave tx: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8943" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9155" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9244" />
        <source>signature file saved to: </source>
        <translation>archivo de firma guardado en: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8945" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9157" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9246" />
        <source>failed to save signature file</source>
        <translation>No se pudo guardar el archivo de firma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8949" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9037" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9115" />
        <source>error: </source>
        <translation>error: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8982" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="8991" />
        <source>failed to parse tx key</source>
        <translation>No se pudo analizar la clave tx</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9013" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9086" />
        <source>received</source>
        <translation>recibió</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9013" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9086" />
        <source>in txid</source>
        <translation>en txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9016" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9089" />
        <source>WARNING: this transaction is not yet included in the blockchain!</source>
        <translation>ADVERTENCIA: ¡esta transacción aún no está incluida en la blockchain!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9026" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9099" />
        <source>WARNING: failed to determine number of confirmations!</source>
        <translation>ADVERTENCIA: ¡Error al determinar el número de confirmaciones!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9032" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9105" />
        <source>received nothing in txid</source>
        <translation>No recibí nada en txid</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9072" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9186" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9280" />
        <source>failed to load signature file</source>
        <translation>No se pudo cargar el archivo de firma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9083" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9193" />
        <source>Good signature</source>
        <translation>Buena firma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9110" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9195" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9295" />
        <source>Bad signature</source>
        <translation>Mala firma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9134" />
        <source>wallet is watch-only and cannot generate the proof</source>
        <translation>La billetera es solo de vigilancia y no puede generar la prueba.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9218" />
        <source>The reserve proof can be generated only by a full wallet</source>
        <translation>La prueba de reserva solo se puede generar con una billetera llena</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9273" />
        <source>Address must not be a subaddress</source>
        <translation>La dirección no debe ser una subdirección</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9400" />
        <source>bad min_height parameter:</source>
        <translation>parámetro min_height incorrecto:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9412" />
        <source>bad max_height parameter:</source>
        <translation>parámetro max_height incorrecto:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9434" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9705" />
        <source>block</source>
        <translation>bloquear</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9434" />
        <source>in</source>
        <translation>en</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9525" />
        <source>[Double spend seen on the network: this transaction may or may not end up being mined] </source>
        <translation>[Se observa doble gasto en la red: esta transacción puede o no terminar siendo minada] </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9813" />
        <source>&lt;min_amount&gt; should be smaller than &lt;max_amount&gt;</source>
        <translation>&lt;min_amount&gt;Debería ser más pequeño que&lt;max_amount&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9839" />
        <source>There is no unspent output in the specified address</source>
        <translation>No hay salida no utilizada en la dirección especificada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845" />
        <source>
Amount: </source>
        <translation>
Cantidad: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9845" />
        <source>, number of keys: </source>
        <translation>, número de teclas: </translation>
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
Altura mínima del bloque: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9856" />
        <source>
Max block height: </source>
        <translation>
Altura máxima del bloque: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9857" />
        <source>
Min amount found: </source>
        <translation>
Cantidad mínima encontrada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9858" />
        <source>
Max amount found: </source>
        <translation>
Cantidad máxima encontrada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9859" />
        <source>
Total count: </source>
        <translation>
Recuento total: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9899" />
        <source>
Bin size: </source>
        <translation>
Échale un vistazo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9900" />
        <source>
Outputs per *: </source>
        <translation>
Salidas por *: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9902" />
        <source>count
  ^
</source>
        <translation>contar ^
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
        <translation>+--&amp;gt; altura del bloque
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
        <translation>Advertencia: esto perderá cualquier información que no pueda recuperarse de la cadena de bloques.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9954" />
        <source>This includes destination addresses, tx secret keys, tx notes, etc</source>
        <translation>Esto incluye direcciones de destino, claves secretas de transmisión, notas de transmisión, etc.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9291" />
        <source>Good signature -- total: %s, spent: %s, unspent: %s</source>
        <translation>Buena firma -- total: %s, gastado: %s, no gastado: %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2094" />
        <source>First line is not an amount</source>
        <translation>La primera línea no es una cantidad</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2108" />
        <source>Invalid output: </source>
        <translation>Salida no válida: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2133" />
        <source>Invalid output key, and file doesn't exist</source>
        <translation>Clave de salida no válida y el archivo no existe</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2156" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="2183" />
        <source>Invalid output</source>
        <translation>Salida no válida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="2671" />
        <source>invalid argument: must be either 0/never, 1/action, or 2/encrypt/decrypt</source>
        <translation>argumento no válido: debe ser 0/nunca, 1/acción o 2/cifrar/descifrar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="3377" />
        <source>Transfer &lt;amount&gt; to &lt;address&gt; and lock it for &lt;lockblocks&gt; (max. 1000000). If the parameter "index=&lt;N1&gt;[,&lt;N2&gt;,...]" is specified, the wallet uses outputs received by addresses of those indices. If omitted, the wallet randomly chooses address indices to be used. In any case, it tries its best not to combine outputs across multiple addresses. &lt;priority&gt; is the priority of the transaction. The higher the priority, the higher the transaction fee. Valid values in priority order (from lowest to highest) are: unimportant, normal, elevated, priority. If omitted, the default value (see the command "set priority") is used. &lt;ring_size&gt; is the number of inputs to include for untraceability. Multiple payments can be made at once by adding URI_2 or &lt;address_2&gt; &lt;amount_2&gt; etcetera (before the payment ID, if it's included)</source>
        <translation>Transferir&lt;amount&gt; a&lt;address&gt; y bloquearlo para&lt;lockblocks&gt; (máximo 1000000). Si el parámetro &amp;quot;índice=&lt;N1&gt; [,&lt;N2&gt; Si se especifica &amp;quot;...]&amp;quot;, la billetera utiliza las salidas recibidas por las direcciones de esos índices. Si se omite, la billetera elige aleatoriamente los índices de direcciones que se utilizarán. En cualquier caso, intenta lo mejor que puede para no combinar las salidas de varias direcciones.&lt;priority&gt; es la prioridad de la transacción. Cuanto mayor sea la prioridad, mayor será la tarifa de transacción. Los valores válidos en orden de prioridad (de menor a mayor) son: no importante, normal, elevada, prioridad. Si se omite, se utiliza el valor predeterminado (consulte el comando &amp;quot;establecer prioridad&amp;quot;).&lt;ring_size&gt; es el número de entradas que se deben incluir para la no trazabilidad. Se pueden realizar varios pagos a la vez agregando URI_2 o&lt;address_2&gt;&lt;amount_2&gt; etcétera (antes del ID de pago, si está incluido)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="5946" />
        <source>Password needed (%s) - use the refresh command</source>
        <translation>Se necesita contraseña (%s): use el comando de actualización</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10114" />
        <source>Daemon requests payment at diff %llu, with %f credits/hash%s. Run start_mining_for_rpc to start mining to pay for RPC access, or use another daemon</source>
        <translation>El demonio solicita el pago en la cuenta diff %llu, con %f créditos/hash%s. Ejecute start_mining_for_rpc para iniciar la minería y pagar el acceso RPC, o use otro demonio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10141" />
        <source>Error mining to daemon: </source>
        <translation>Error al minar al demonio: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10147" />
        <source>Failed to start mining for RPC payment</source>
        <translation>No se pudo iniciar la minería para el pago de RPC</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10159" />
        <source>wallet</source>
        <translation>billetera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10161" />
        <source> (no daemon)</source>
        <translation> (sin demonio)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10163" />
        <source> (out of sync)</source>
        <translation> (fuera de sincronía)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10214" />
        <source>(Untitled account)</source>
        <translation>(Cuenta sin título)</translation>
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
        <translation>No se pudo analizar el índice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10232" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10508" />
        <source>specify an index between 0 and </source>
        <translation>especifique un índice entre 0 y </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10354" />
        <source>, unlocked balance: </source>
        <translation>, saldo desbloqueado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10364" />
        <source>Untagged accounts:</source>
        <translation>Cuentas sin etiquetar:</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10370" />
        <source>Tag %s is unregistered.</source>
        <translation>La etiqueta %s no está registrada.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10373" />
        <source>Accounts with tag: </source>
        <translation>Cuentas con etiqueta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10374" />
        <source>Tag's description: </source>
        <translation>Descripción de la etiqueta: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10376" />
        <source>Account</source>
        <translation>Cuenta</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10430" />
        <source>Primary address</source>
        <translation>Dirección principal</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10430" />
        <source>(used)</source>
        <translation>(usado)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10451" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10477" />
        <source>(Untitled address)</source>
        <translation>(Dirección sin título)</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10535" />
        <source>&lt;index_min&gt; is already out of bound</source>
        <translation>&lt;index_min&gt;ya esta fuera de limite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10540" />
        <source>&lt;index_max&gt; exceeds the bound</source>
        <translation>&lt;index_max&gt;excede el límite</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10604" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10617" />
        <source>Integrated addresses can only be created for account 0</source>
        <translation>Las direcciones integradas solo se pueden crear para la cuenta 0</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10609" />
        <source>Matching integrated address: </source>
        <translation>Dirección integrada coincidente: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10636" />
        <source>Subaddress: </source>
        <translation>Subdirección: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10636" />
        <source>Standard address: </source>
        <translation>Dirección estándar: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10641" />
        <source>failed to parse payment ID or address</source>
        <translation>No se pudo analizar el ID o la dirección de pago</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10678" />
        <source>failed to parse index</source>
        <translation>No se pudo analizar el índice</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10686" />
        <source>Address book is empty.</source>
        <translation>La libreta de direcciones está vacía.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10692" />
        <source>Index: </source>
        <translation>Índice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10698" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10828" />
        <source>Address: </source>
        <translation>DIRECCIÓN: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10699" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10827" />
        <source>Description: </source>
        <translation>Descripción: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10784" />
        <source>no description found</source>
        <translation>No se encontró ninguna descripción</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10786" />
        <source>description found: </source>
        <translation>Descripción encontrada: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="6679" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="10826" />
        <source>Filename: </source>
        <translation>Nombre del archivo: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10831" />
        <source>Watch only</source>
        <translation>Solo mirar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="10833" />
        <source>%u/%u multisig%s</source>
        <translation>%u/%u multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="8648" />
        <source>%s change to %s</source>
        <translation>%s cambia a %s</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9022" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="9095" />
        <source>This transaction has %u confirmations</source>
        <translation>Esta transacción tiene %u confirmaciones</translation>
    </message>
</context>
<context>
    <name>gencert</name>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="61" />
        <source>Filename to save the certificate</source>
        <translation>Nombre de archivo para guardar el certificado</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="62" />
        <source>Filename to save the private key</source>
        <translation>Nombre del archivo para guardar la clave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="63" />
        <source>Passphrase with which to encrypt the private key</source>
        <translation>Frase de contraseña con la que se cifrará la clave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="64" />
        <source>File containing the passphrase with which to encrypt the private key</source>
        <translation>Archivo que contiene la frase de contraseña con la que se cifrará la clave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="65" />
        <source>Prompt for a passphrase with which to encrypt the private key</source>
        <translation>Solicitar una frase de contraseña con la que cifrar la clave privada</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="137" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="143" />
        <source>Argument is needed: </source>
        <translation>Se necesita argumento: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="153" />
        <source>Failed to read passphrase</source>
        <translation>No se pudo leer la frase de contraseña</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="188" />
        <source>Failed to create certificate</source>
        <translation>Error al crear el certificado</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="198" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="206" />
        <source>Failed to write certificate: </source>
        <translation>Error al escribir el certificado: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="218" />
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="226" />
        <source>Failed to write private key: </source>
        <translation>No se pudo escribir la clave privada: </translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="237" />
        <source>Failed to save certificate file</source>
        <translation>No se pudo guardar el archivo del certificado</translation>
    </message>
    <message>
        <location filename="../src/gen_ssl_cert/gen_ssl_cert.cpp" line="243" />
        <source>Failed to save private key file</source>
        <translation>No se pudo guardar el archivo de clave privada</translation>
    </message>
</context>
<context>
    <name>genms</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="69" />
        <source>Base filename (-1, -2, etc suffixes will be appended as needed)</source>
        <translation>Nombre de archivo base (se agregarán los sufijos -1, -2, etc. según sea necesario)</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="70" />
        <source>Give threshold and participants at once as M/N</source>
        <translation>Dar umbral y participantes a la vez como M/N</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="71" />
        <source>How many participants will share parts of the multisig wallet</source>
        <translation>¿Cuántos participantes compartirán partes de la billetera multifirma?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="72" />
        <source>How many signers are required to sign a valid transaction</source>
        <translation>¿Cuántos firmantes se requieren para firmar una transacción válida?</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="73" />
        <source>Create testnet multisig wallets</source>
        <translation>Crear billeteras multifirma para testnet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="74" />
        <source>Create stagenet multisig wallets</source>
        <translation>Crear carteras multifirma de Stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="75" />
        <source>Create an address file for new wallets</source>
        <translation>Crear un archivo de direcciones para nuevas billeteras</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="80" />
        <source>Generating %u %u/%u multisig wallets</source>
        <translation>Generando %u %u/%u billeteras multifirma</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="137" />
        <source>Generated multisig wallets for address </source>
        <translation>Carteras multifirma generadas para direcciones </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="141" />
        <source>Error creating multisig wallets: </source>
        <translation>Error al crear billeteras multifirma: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="166" />
        <source>This program generates a set of multisig wallets - use this simpler scheme only if all the participants trust each other</source>
        <translation>Este programa genera un conjunto de billeteras multifirma: use este esquema más simple solo si todos los participantes confían entre sí.</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="185" />
        <source>Error: Can't specify more than one of --testnet and --stagenet</source>
        <translation>Error: No se puede especificar más de uno de --testnet y --stagenet</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="192" />
        <source>Error: expected N/M, but got: </source>
        <translation>Error: se esperaba N/M, pero se obtuvo: </translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="200" />
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="209" />
        <source>Error: either --scheme or both of --threshold and --participants may be given</source>
        <translation>Error: se puede proporcionar --scheme o ambos, --threshold y --participants</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="216" />
        <source>Error: expected N &gt; 1 and N &lt;= M, but got N==%u and M==%d</source>
        <translation>Error: se esperaba N &amp;gt; 1 y N &amp;lt;= M, pero se obtuvo N==%u y M==%d</translation>
    </message>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="225" />
        <source>Error: --filename-base is required</source>
        <translation>Error: se requiere --filename-base</translation>
    </message>
</context>
<context>
    <name>mms::message_store</name>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="72" />
        <source>Use PyBitmessage instance at URL &lt;arg&gt;</source>
        <translation>Utilice la instancia de PyBitmessage en la URL&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="73" />
        <source>Specify &lt;arg&gt; as username:password for PyBitmessage API</source>
        <translation>Especificar&lt;arg&gt; como nombre de usuario:contraseña para la API de PyBitmessage</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="911" />
        <source>Auto-config cannot proceed because auto config data from other signers is not complete</source>
        <translation>La configuración automática no puede continuar porque los datos de configuración automática de otros firmantes no están completos</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="936" />
        <source>The signer config is not complete.</source>
        <translation>La configuración del firmante no está completa.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="988" />
        <source>Wallet can't go multisig because key sets from other signers are missing or not complete.</source>
        <translation>La billetera no puede convertirse en multifirma porque faltan conjuntos de claves de otros firmantes o no están completos.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1030" />
        <source>Wallet can't start another key exchange round because key sets from other signers are missing or not complete.</source>
        <translation>La billetera no puede iniciar otra ronda de intercambio de claves porque faltan conjuntos de claves de otros firmantes o no están completos.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1094" />
        <source>Syncing not done because multisig sync data from other signers are missing or not complete.</source>
        <translation>La sincronización no se realizó porque faltan datos de sincronización multifirma de otros firmantes o no están completos.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1208" />
        <source>There are waiting messages, but nothing is ready to process under normal circumstances</source>
        <translation>Hay mensajes en espera, pero nada está listo para procesarse en circunstancias normales.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1211" />
        <source>
Use "mms next sync" if you want to force processing of the waiting sync data</source>
        <translation>
Utilice &amp;quot;mms next sync&amp;quot; si desea forzar el procesamiento de los datos de sincronización en espera</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1215" />
        <source>
Use "mms note" to display the waiting notes</source>
        <translation>
Utilice &amp;quot;mms note&amp;quot; para mostrar las notas en espera</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1220" />
        <source>There are no messages waiting to be processed.</source>
        <translation>No hay mensajes en espera de ser procesados.</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1441" />
        <source>key set</source>
        <translation>conjunto de claves</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1443" />
        <source>additional key set</source>
        <translation>conjunto de claves adicionales</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1445" />
        <source>multisig sync data</source>
        <translation>datos de sincronización multifirma</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1447" />
        <source>partially signed tx</source>
        <translation>tx parcialmente firmado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1449" />
        <source>fully signed tx</source>
        <translation>tx completamente firmado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1451" />
        <source>note</source>
        <translation>nota</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1453" />
        <source>signer config</source>
        <translation>configuración del firmante</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1455" />
        <source>auto-config data</source>
        <translation>datos de configuración automática</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1457" />
        <source>unknown message type</source>
        <translation>tipo de mensaje desconocido</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1466" />
        <source>in</source>
        <translation>en</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1468" />
        <source>out</source>
        <translation>afuera</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1470" />
        <source>unknown message direction</source>
        <translation>dirección del mensaje desconocida</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1479" />
        <source>ready to send</source>
        <translation>listo para enviar</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1481" />
        <source>sent</source>
        <translation>enviado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1483" />
        <source>waiting</source>
        <translation>espera</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1485" />
        <source>processed</source>
        <translation>procesado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1487" />
        <source>cancelled</source>
        <translation>cancelado</translation>
    </message>
    <message>
        <location filename="../src/wallet/message_store.cpp" line="1489" />
        <source>unknown message state</source>
        <translation>estado del mensaje desconocido</translation>
    </message>
</context>
<context>
    <name>sw</name>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="177" />
        <source>Generate new wallet and save it to &lt;arg&gt;</source>
        <translation>Generar nueva billetera y guardarla en&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="178" />
        <source>Generate new wallet from device and save it to &lt;arg&gt;</source>
        <translation>Generar una nueva billetera desde el dispositivo y guardarla en&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="179" />
        <source>Generate incoming-only wallet from view key</source>
        <translation>Generar una billetera solo para entradas a partir de la clave de visualización</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="180" />
        <source>Generate deterministic wallet from spend key</source>
        <translation>Generar una billetera determinista a partir de la clave de gasto</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="181" />
        <source>Generate wallet from private keys</source>
        <translation>Generar billetera a partir de claves privadas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="182" />
        <source>Generate a master wallet from multisig wallet keys</source>
        <translation>Generar una billetera maestra a partir de claves de billetera multifirma</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="184" />
        <source>Language for mnemonic</source>
        <translation>Lenguaje para mnemotecnia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="185" />
        <source>Specify Electrum seed for wallet recovery/creation</source>
        <translation>Especifique la semilla de Electrum para la recuperación/creación de la billetera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="186" />
        <source>Recover wallet using Electrum-style mnemonic seed</source>
        <translation>Recuperar billetera usando semilla mnemotécnica estilo Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="187" />
        <source>alias for --restore-deterministic-wallet</source>
        <translation>alias para --restore-deterministic-wallet</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="188" />
        <source>Recover multisig wallet using Electrum-style mnemonic seed</source>
        <translation>Recuperar una billetera multifirma usando una semilla mnemotécnica de estilo Electrum</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="189" />
        <source>Generate non-deterministic view and spend keys</source>
        <translation>Generar vistas no deterministas y gastar claves</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="191" />
        <source>Restore from estimated blockchain height on specified date</source>
        <translation>Restaurar desde la altura estimada de la cadena de bloques en la fecha especificada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="192" />
        <source>The newly created transaction will not be relayed to the Salvium network</source>
        <translation>La transacción recién creada no se retransmitirá a la red de Salvium.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="348" />
        <source>failed to read wallet password</source>
        <translation>No se pudo leer la contraseña de la billetera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355" />
        <source>Enter a new password for the wallet</source>
        <translation>Introduzca una nueva contraseña para la billetera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="355" />
        <source>Wallet password</source>
        <translation>Contraseña de la billetera</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="433" />
        <source>invalid argument: must be either 0/1, true/false, y/n, yes/no</source>
        <translation>argumento no válido: debe ser 0/1, verdadero/falso, y/n, sí/no</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="489" />
        <source>DNSSEC validation passed</source>
        <translation>Validación DNSSEC aprobada</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="493" />
        <source>WARNING: DNSSEC validation was unsuccessful, this address may not be correct!</source>
        <translation>ADVERTENCIA: La validación de DNSSEC no fue exitosa, ¡esta dirección puede no ser correcta!</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="496" />
        <source>For URL: </source>
        <translation>Para URL: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="498" />
        <source> Salvium Address = </source>
        <translation> Dirección de Salvium = </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="510" />
        <source>you have cancelled the transfer request</source>
        <translation>Has cancelado la solicitud de transferencia</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="531" />
        <source>failed to parse index: </source>
        <translation>No se pudo analizar el índice: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="544" />
        <source>invalid format for subaddress lookahead; must be &lt;major&gt;:&lt;minor&gt;</source>
        <translation>formato no válido para búsqueda anticipada de subdirección; debe ser&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="608" />
        <source>no connection to daemon. Please make sure daemon is running.</source>
        <translation>No hay conexión con el demonio. Asegúrese de que el demonio esté ejecutándose.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="617" />
        <source>RPC error: </source>
        <translation>Error de RPC: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="621" />
        <source>failed to get random outputs to mix: </source>
        <translation>No se pudo obtener salidas aleatorias para mezclar: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="628" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="636" />
        <source>Not enough money in unlocked balance</source>
        <translation>No hay suficiente dinero en el saldo desbloqueado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="646" />
        <source>Failed to find a way to create transactions. This is usually due to dust which is so small it cannot pay for itself in fees, or trying to send more money than the unlocked balance, or not leaving enough for fees</source>
        <translation>No se pudo encontrar una manera de crear transacciones. Esto suele deberse a que el polvo es tan pequeño que no se puede pagar a sí mismo con las tarifas, o a que se intenta enviar más dinero que el saldo desbloqueado o a que no se deja suficiente para las tarifas.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="652" />
        <source>not enough outputs for specified ring size</source>
        <translation>No hay suficientes salidas para el tamaño de anillo especificado</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655" />
        <source>output amount</source>
        <translation>cantidad de salida</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="655" />
        <source>found outputs to use</source>
        <translation>Se encontraron salidas para utilizar</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="657" />
        <source>Please use sweep_unmixable.</source>
        <translation>Por favor, utilice sweep_unmixable.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="661" />
        <source>transaction was not constructed</source>
        <translation>La transacción no se construyó</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="669" />
        <source>Reason: </source>
        <translation>Razón: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="688" />
        <source>failed to find a suitable way to split transactions</source>
        <translation>No se pudo encontrar una forma adecuada de dividir las transacciones</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="694" />
        <source>unknown transfer error: </source>
        <translation>Error de transferencia desconocido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="699" />
        <source>Multisig error: </source>
        <translation>Error multifirma: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="705" />
        <source>internal error: </source>
        <translation>Error interno: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="710" />
        <source>unexpected error: </source>
        <translation>Error inesperado: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="714" />
        <source>There was an error, which could mean the node may be trying to get you to retry creating a transaction, and zero in on which outputs you own. Or it could be a bona fide error. It may be prudent to disconnect from this node, and not try to send a transaction immediately. Alternatively, connect to another node so the original node cannot correlate information.</source>
        <translation>Se produjo un error, lo que podría significar que el nodo puede estar intentando que vuelvas a intentar crear una transacción y que se centre en los resultados que posees. O podría ser un error genuino. Puede ser prudente desconectarse de este nodo y no intentar enviar una transacción inmediatamente. Alternativamente, conéctese a otro nodo para que el nodo original no pueda correlacionar la información.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="726" />
        <source>File %s likely stores wallet private keys! Use a different file name.</source>
        <translation>Es probable que el archivo %s almacene claves privadas de billetera. Utilice un nombre de archivo diferente.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9309" />
        <source> seconds</source>
        <translation> artículos de segunda clase</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9311" />
        <source> minutes</source>
        <translation> minutos</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9313" />
        <source> hours</source>
        <translation> horas</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9315" />
        <source> days</source>
        <translation> días</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9317" />
        <source> months</source>
        <translation> meses</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="9318" />
        <source>a long time</source>
        <translation>un largo tiempo</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11461" />
        <source>Unknown command: </source>
        <translation>Comando desconocido: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="190" />
        <source>Restore from specific blockchain height</source>
        <translation>Restaurar desde una altura de blockchain específica</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="193" />
        <source>Create an address file for new wallets</source>
        <translation>Crear un archivo de direcciones para nuevas billeteras</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="195" />
        <source>Display English language names</source>
        <translation>Mostrar nombres de idiomas en inglés</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="365" />
        <source>daemon is busy. Please try again later.</source>
        <translation>El demonio está ocupado. Inténtalo de nuevo más tarde.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="374" />
        <source>possibly lost connection to daemon</source>
        <translation>Posiblemente se perdió la conexión con el demonio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="391" />
        <source>Error: </source>
        <translation>Error: </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="500" />
        <source>Is this OK?</source>
        <translation>¿Está bien esto?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="666" />
        <source>transaction %s was rejected by daemon</source>
        <translation>La transacción %s fue rechazada por el demonio</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="678" />
        <source>destination amount is zero</source>
        <translation>El importe de destino es cero</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="683" />
        <source>transaction has no destination</source>
        <translation>La transacción no tiene destino</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="729" />
        <source>File %s already exists. Are you sure to overwrite it?</source>
        <translation>El archivo %s ya existe. ¿Estás seguro de sobrescribirlo?</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11436" />
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.
WARNING: Do not reuse your Salvium keys on another fork, UNLESS this fork has key reuse mitigations built in. Doing so will harm your privacy.</source>
        <translation>Esta es la línea de comandos de la billetera Salvium. Necesita conectarse a un demonio Salvium para funcionar correctamente. ADVERTENCIA: No reutilice sus claves Salvium en otra bifurcación, A MENOS QUE esta bifurcación tenga mitigaciones de reutilización de claves integradas. Hacerlo dañará su privacidad.</translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="11455" />
        <source>Failed to initialize wallet</source>
        <translation>No se pudo inicializar la billetera</translation>
    </message>
</context>
<context>
    <name>tools::wallet2</name>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="244" />
        <source>Use daemon instance at &lt;host&gt;:&lt;port&gt;</source>
        <translation>Utilice la instancia del demonio en&lt;host&gt; :&lt;port&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="245" />
        <source>Use daemon instance at host &lt;arg&gt; instead of localhost</source>
        <translation>Utilice la instancia del demonio en el host&lt;arg&gt; En lugar de localhost</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="251" />
        <source>Use daemon instance at port &lt;arg&gt; instead of 18081</source>
        <translation>Utilice la instancia del demonio en el puerto&lt;arg&gt; En lugar de 18081</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="260" />
        <source>For testnet. Daemon must also be launched with --testnet flag</source>
        <translation>Para la red de prueba. El demonio también debe iniciarse con el indicador --testnet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="280" />
        <source>File containing extra entropy to initialize the PRNG (any data, aim for 256 bits of entropy to be useful, which typically means more than 256 bits of data)</source>
        <translation>Archivo que contiene entropía adicional para inicializar el PRNG (cualquier dato, el objetivo es que 256 bits de entropía sean útiles, lo que generalmente significa más de 256 bits de datos)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="281" />
        <source>Allow communicating with a daemon that uses a different version</source>
        <translation>Permitir la comunicación con un demonio que usa una versión diferente</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="375" />
        <source>can't specify daemon host or port more than once</source>
        <translation>No se puede especificar el host o el puerto del demonio más de una vez</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="511" />
        <source>can't specify more than one of --password and --password-file</source>
        <translation>No se puede especificar más de uno de --password y --password-file</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="525" />
        <source>the password file specified could not be read</source>
        <translation>No se pudo leer el archivo de contraseña especificado</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="551" />
        <source>Failed to load file </source>
        <translation>No se pudo cargar el archivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="249" />
        <source>Wallet password (escape/quote as needed)</source>
        <translation>Contraseña de la billetera (escape/comillas según sea necesario)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="246" />
        <source>[&lt;ip&gt;:]&lt;port&gt; socks proxy to use for daemon connections</source>
        <translation>[&lt;ip&gt; :]&lt;port&gt; Proxy de calcetines para usar en conexiones de demonio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="247" />
        <source>Enable commands which rely on a trusted daemon</source>
        <translation>Habilitar comandos que dependen de un demonio confiable</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="248" />
        <source>Disable commands which rely on a trusted daemon</source>
        <translation>Deshabilitar comandos que dependen de un demonio confiable</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="252" />
        <source>Specify username[:password] for daemon RPC client</source>
        <translation>Especifique el nombre de usuario [: contraseña] para el cliente RPC del demonio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="253" />
        <source>Enable SSL on daemon RPC connections: enabled|disabled|autodetect</source>
        <translation>Habilitar SSL en conexiones RPC de demonio: habilitado|deshabilitado|detección automática</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="257" />
        <source>List of valid fingerprints of allowed RPC servers</source>
        <translation>Lista de huellas digitales válidas de servidores RPC permitidos</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="258" />
        <source>Allow any SSL certificate from the daemon</source>
        <translation>Permitir cualquier certificado SSL desde el demonio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="259" />
        <source>Allow user (via --daemon-ssl-ca-certificates) chain certificates</source>
        <translation>Permitir certificados en cadena de usuarios (a través de --daemon-ssl-ca-certificates)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="261" />
        <source>For stagenet. Daemon must also be launched with --stagenet flag</source>
        <translation>Para Stagenet. El demonio también debe iniciarse con el indicador --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="263" />
        <source>Set shared ring database path</source>
        <translation>Establecer la ruta de la base de datos del anillo compartido</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="274" />
        <source>Number of rounds for the key derivation function</source>
        <translation>Número de rondas para la función de derivación de clave</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="275" />
        <source>HW device to use</source>
        <translation>Dispositivo HW a utilizar</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="276" />
        <source>HW device wallet derivation path (e.g., SLIP-10)</source>
        <translation>Ruta de derivación de la billetera del dispositivo HW (por ejemplo, SLIP-10)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="278" />
        <source>Do not use DNS</source>
        <translation>No utilice DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="279" />
        <source>Do not connect to a daemon, nor use DNS</source>
        <translation>No te conectes a un demonio ni uses DNS</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="367" />
        <source>Invalid argument for </source>
        <translation>Argumento inválido para </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428" />
        <source>Enabling --</source>
        <translation>Habilitando--</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="428" />
        <source> requires --</source>
        <translation> requiere --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="429" />
        <location filename="../src/wallet/wallet2.cpp" line="430" />
        <source> or --</source>
        <translation> o --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="430" />
        <source> or use of a .onion/.i2p domain</source>
        <translation> o el uso de un dominio .onion/.i2p</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="448" />
        <source>--trusted-daemon and --untrusted-daemon are both seen, assuming untrusted</source>
        <translation>Se ven tanto --trusted-daemon como --untrusted-daemon, asumiendo que no son de confianza.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="458" />
        <source>Daemon is local, assuming trusted</source>
        <translation>Daemon es local, asumiendo que es confiable</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="468" />
        <source>failed to initialize the wallet</source>
        <translation>No se pudo inicializar la billetera</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="532" />
        <source>no password specified; use --prompt-for-password to prompt for a password</source>
        <translation>No se especificó contraseña; use --prompt-for-password para solicitar una contraseña</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534" />
        <source>Enter a new password for the wallet</source>
        <translation>Introduzca una nueva contraseña para la billetera</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="534" />
        <source>Wallet password</source>
        <translation>Contraseña de la billetera</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="557" />
        <source>Failed to parse JSON</source>
        <translation>No se pudo analizar JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="564" />
        <source>Version %u too new, we can only grok up to %u</source>
        <translation>La versión %u es demasiado nueva, solo podemos entender hasta %u</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="580" />
        <source>failed to parse view key secret key</source>
        <translation>No se pudo analizar la clave secreta de la vista</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="585" />
        <source>view secret key may not be all zeroes</source>
        <translation>La clave secreta de visualización puede no estar compuesta únicamente por ceros</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="587" />
        <location filename="../src/wallet/wallet2.cpp" line="657" />
        <location filename="../src/wallet/wallet2.cpp" line="702" />
        <source>failed to verify view key secret key</source>
        <translation>No se pudo verificar la clave secreta de visualización</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="598" />
        <source>failed to parse spend key secret key</source>
        <translation>No se pudo analizar la clave secreta de la clave de gasto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="603" />
        <source>spend secret key may not be all zeroes</source>
        <translation>La clave secreta gastada puede no ser todos ceros</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="605" />
        <location filename="../src/wallet/wallet2.cpp" line="667" />
        <location filename="../src/wallet/wallet2.cpp" line="728" />
        <source>failed to verify spend key secret key</source>
        <translation>No se pudo verificar la clave secreta de gasto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="617" />
        <source>Electrum-style word list failed verification</source>
        <translation>Lista de palabras de estilo Electrum no superó la verificación</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="637" />
        <source>At least one of either an Electrum-style word list, private view key, or private spend key must be specified</source>
        <translation>Se debe especificar al menos una de las siguientes: una lista de palabras de estilo Electrum, una clave de visualización privada o una clave de gasto privada</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="641" />
        <source>Both Electrum-style word list and private key(s) specified</source>
        <translation>Se especificaron tanto la lista de palabras de estilo Electrum como las claves privadas</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="651" />
        <source>invalid address</source>
        <translation>dirección inválida</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="660" />
        <source>view key does not match standard address</source>
        <translation>La clave de visualización no coincide con la dirección estándar</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="670" />
        <source>spend key does not match standard address</source>
        <translation>La clave de gasto no coincide con la dirección estándar</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="678" />
        <source>Cannot generate deprecated wallets from JSON</source>
        <translation>No se pueden generar billeteras obsoletas desde JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="714" />
        <source>failed to parse address: </source>
        <translation>No se pudo analizar la dirección: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="720" />
        <source>Address must be specified in order to create watch-only wallet</source>
        <translation>Se debe especificar una dirección para crear una billetera solo para ver</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="737" />
        <source>failed to generate new wallet: </source>
        <translation>No se pudo generar una nueva billetera: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2172" />
        <source>Password is needed to compute key image for incoming SALs</source>
        <translation>Se necesita contraseña para calcular la imagen clave para las SAL entrantes</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="2173" />
        <source>Invalid password: password is needed to compute key image for incoming SALs</source>
        <translation>Contraseña no válida: se necesita una contraseña para calcular la imagen de clave para las SAL entrantes</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="3712" />
        <source>reorg exceeds maximum allowed depth, use 'set max-reorg-depth N' to allow it, reorg depth: </source>
        <translation>La reorganización excede la profundidad máxima permitida, use &amp;#39;set max-reorg-depth N&amp;#39; para permitirlo, profundidad de reorganización: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="5600" />
        <location filename="../src/wallet/wallet2.cpp" line="6181" />
        <location filename="../src/wallet/wallet2.cpp" line="6670" />
        <source>Primary account</source>
        <translation>Cuenta principal</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="9041" />
        <source>Transaction sanity check failed</source>
        <translation>La comprobación de la integridad de la transacción falló</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11344" />
        <source>Incorrect number of transfers_indices on return_payment</source>
        <translation>Número incorrecto de índices de transferencias en el pago de devolución</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11346" />
        <source>cannot locate return_payment origin index in m_transfers</source>
        <translation>No se puede localizar el índice de origen de return_payment en m_transfers</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11374" />
        <source>at create_transactions_return(): incorrect number of additional TX pubkeys in origin TX for return_payment</source>
        <translation>en create_transactions_return(): número incorrecto de claves públicas TX adicionales en TX de origen para return_payment</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11382" />
        <source>at create_transactions_return(): failed to generate_key_derivation</source>
        <translation>en create_transactions_return(): no se pudo generar la derivación de clave</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11427" />
        <source>Attempting to return change to ourself</source>
        <translation>Intentando devolver el cambio a nosotros mismos</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11432" />
        <source>Failed to identify change output</source>
        <translation>No se pudo identificar la salida del cambio</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11583" />
        <source>Transaction cannot pay for itself</source>
        <translation>La transacción no se paga por sí sola</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="11679" />
        <source>Created transaction(s) failed sanity check</source>
        <translation>Las transacciones creadas no pasaron la verificación de cordura</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="12675" />
        <source>No funds received in this tx.</source>
        <translation>No se recibieron fondos en esta tx.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="13587" />
        <source>failed to read file </source>
        <translation>No se pudo leer el archivo </translation>
    </message>
    <message>
        <location filename="../src/simplewallet/simplewallet.cpp" line="194" />
        <source>Set subaddress lookahead sizes to &lt;major&gt;:&lt;minor&gt;</source>
        <translation>Establezca los tamaños de búsqueda anticipada de subdirecciones en&lt;major&gt; :&lt;minor&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="254" />
        <source>Path to a PEM format private key</source>
        <translation>Ruta a una clave privada en formato PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="255" />
        <source>Path to a PEM format certificate</source>
        <translation>Ruta hacia un certificado en formato PEM</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet2.cpp" line="256" />
        <source>Path to file containing concatenated PEM format certificate(s) to replace system CA(s).</source>
        <translation>Ruta al archivo que contiene los certificados en formato PEM concatenados para reemplazar las CA del sistema.</translation>
    </message>
</context>
<context>
    <name>tools::wallet_rpc_server</name>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="219" />
        <source>Failed to create directory </source>
        <translation>Error al crear el directorio </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="221" />
        <source>Failed to create directory %s: %s</source>
        <translation>No se pudo crear el directorio %s: %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232" />
        <source>Cannot specify --</source>
        <translation>No se puede especificar --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="232" />
        <source> and --</source>
        <translation> y --</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251" />
        <source>Failed to create file </source>
        <translation>Error al crear el archivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="251" />
        <source>. Check permissions or remove file</source>
        <translation>. Verificar permisos o eliminar archivo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="261" />
        <source>Error writing to file </source>
        <translation>Error al escribir en el archivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="264" />
        <source>RPC username/password is stored in file </source>
        <translation>El nombre de usuario y la contraseña de RPC se almacenan en un archivo </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="667" />
        <source>Tag %s is unregistered.</source>
        <translation>La etiqueta %s no está registrada.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="695" />
        <source>No matches for regex filter %s .</source>
        <translation>No hay coincidencias para el filtro de expresiones regulares %s.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="3588" />
        <source>Transaction not possible. Available only %s, transaction amount %s = %s + %s (fee)</source>
        <translation>No es posible realizar la transacción. Solo está disponible %s, importe de la transacción %s = %s + %s (comisión)</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4596" />
        <source>Can't specify more than one of --testnet and --stagenet</source>
        <translation>No se puede especificar más de uno de --testnet y --stagenet</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4615" />
        <source>Can't specify more than one of --wallet-file and --generate-from-json</source>
        <translation>No se puede especificar más de uno de --wallet-file y --generate-from-json</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4621" />
        <source>--password-file is not allowed in combination with --wallet-dir</source>
        <translation>--password-file no está permitido en combinación con --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4633" />
        <source>Must specify --wallet-file or --generate-from-json or --wallet-dir</source>
        <translation>Debe especificar --wallet-file o --generate-from-json o --wallet-dir</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4637" />
        <source>Loading wallet...</source>
        <translation>Cargando billetera...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4685" />
        <source>Initial refresh failed: </source>
        <translation>Error en la actualización inicial: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4690" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4722" />
        <source>Saving wallet...</source>
        <translation>Ahorrando billetera...</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4692" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4724" />
        <source>Successfully saved</source>
        <translation>Guardado exitosamente</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4695" />
        <source>Successfully loaded</source>
        <translation>Cargado exitosamente</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4699" />
        <source>Wallet initialization failed: </source>
        <translation>La inicialización de la billetera falló: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4705" />
        <source>Failed to initialize wallet RPC server</source>
        <translation>No se pudo inicializar el servidor RPC de la billetera</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4709" />
        <source>Starting wallet RPC server</source>
        <translation>Iniciando el servidor RPC de la billetera</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4716" />
        <source>Failed to run wallet: </source>
        <translation>No se pudo ejecutar la billetera: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4719" />
        <source>Stopped wallet RPC server</source>
        <translation>Servidor RPC de billetera detenida</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4728" />
        <source>Failed to save wallet: </source>
        <translation>No se pudo guardar la billetera: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4802" />
        <source>This is the RPC Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Esta es la billetera RPC de Salvium. Necesita conectarse a un demonio de Salvium para funcionar correctamente.</translation>
    </message>
</context>
<context>
    <name>wallet_args</name>
    <message>
        <location filename="../src/gen_multisig/gen_multisig.cpp" line="152" />
        <location filename="../src/simplewallet/simplewallet.cpp" line="11402" />
        <location filename="../src/wallet/wallet_rpc_server.cpp" line="4781" />
        <source>Wallet options</source>
        <translation>Opciones de billetera</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="73" />
        <source>Generate wallet from JSON format file</source>
        <translation>Generar billetera a partir de un archivo en formato JSON</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="77" />
        <source>Use wallet &lt;arg&gt;</source>
        <translation>Usar billetera&lt;arg&gt;</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="81" />
        <source>Set RPC client secret key for RPC payments</source>
        <translation>Establecer la clave secreta del cliente RPC para los pagos RPC</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="85" />
        <source>Wallet password file</source>
        <translation>Archivo de contraseña de billetera</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="113" />
        <source>Max number of threads to use for a parallel job</source>
        <translation>Número máximo de subprocesos a utilizar para un trabajo paralelo</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="114" />
        <source>Specify log file</source>
        <translation>Especificar archivo de registro</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="115" />
        <source>Config file</source>
        <translation>Archivo de configuración</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="127" />
        <source>General options</source>
        <translation>Opciones generales</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="152" />
        <source>This is the command line Salvium wallet. It needs to connect to a Salvium daemon to work correctly.</source>
        <translation>Esta es la línea de comandos de la billetera Salvium. Debe conectarse a un demonio Salvium para funcionar correctamente.</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="176" />
        <source>Can't find config file </source>
        <translation>No se puede encontrar el archivo de configuración </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="220" />
        <source>Logging to: </source>
        <translation>Iniciando sesión en: </translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="222" />
        <source>Logging to %s</source>
        <translation>Iniciando sesión en %s</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="226" />
        <source>WARNING: You may not have a high enough lockable memory limit</source>
        <translation>ADVERTENCIA: Es posible que no tenga un límite de memoria bloqueable lo suficientemente alto</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="228" />
        <source>see ulimit -l</source>
        <translation>ver ulimit -l</translation>
    </message>
    <message>
        <location filename="../src/wallet/wallet_args.cpp" line="153" />
        <source>Usage:</source>
        <translation>Uso:</translation>
    </message>
</context>
</TS>