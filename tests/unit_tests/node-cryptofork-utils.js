// this lib should be installed globally:
// for macos:
// CPPFLAGS="-I/opt/homebrew/include -D_LIBCPP_ENABLE_CXX17_REMOVED_FEATURES=1" LDFLAGS="-L/opt/homebrew/lib" npm install -g https://github.com/salvium/node-cryptoforknote-util#master
// it compiles with c++14
const cnUtil = require('cryptoforknote-util');

// Get blobBuffer from command line argument
const blobBufferHex = process.argv[2];
if (!blobBufferHex) {
    console.error('Usage: node node-cryptofork-utils.js <blobBuffer_hex>');
    process.exit(1);
}

let blobBuffer = Buffer.from(blobBufferHex, 'hex'); // real block blob
console.log("block to parse:", blobBuffer.toString('hex'));
let blob = cnUtil.convert_blob(blobBuffer, 15);
