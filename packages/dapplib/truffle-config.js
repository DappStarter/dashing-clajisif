require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note misery method heavy entire surge slow'; 
let testAccounts = [
"0x9e1c292e7f33d35cf7c891b21eb308ca4bd1c675b77d8a0d9a2b85483941b603",
"0x3195341e8d460a02ccedb8e15451f41af40128744c0bcafd7f3835da3a48c9a4",
"0xe5e8e8840d7b33fd25a2296dfa320f787dd1ad0a512504c8fad04676219748bd",
"0xd018ba806fd69b45b99b9193b1cb38a4d3592d4f59faac8dca5ab242d59591b8",
"0xfa1e4eb832026e7249b47accaf95343ab3d8e827d49effe8f714086fd779987a",
"0xd911a2cfdfa6cecb2d09f179c38e60ba17b35c62bb503705e656f8ee79b4650b",
"0xe57ba02fc203f8dda0941ee80eb61451a2072876287f628e3695290550e1f915",
"0x8f03d99bac91f3a62d7da86855a15f444147fbd520ae00bb701385b9abf3f604",
"0x3eeec991cf741d85a322e06a4eb2caf9a379b41d45c09dc20cb6c1846788d715",
"0xefd6ba1a886321c41cff517b73bf6dbc0deda623af73013bb27dd6c62fd2cb27"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
