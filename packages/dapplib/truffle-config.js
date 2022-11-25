require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember hour hunt fat surround spot'; 
let testAccounts = [
"0xe7f8d588c8f09cccca9eeeae937cbf8f78208c56c9b6918557f50ff65b221438",
"0xaa220a390eb2748e8e3b47652bf9c1681c694d79424d0b63118ef3f6fd6b9489",
"0xa6aa56e01be40b1d57af7a800ab8fa56483776f5336b0ed3ef15b3a5c52f57bd",
"0xc55bf82e9dae213a1d283088f69c5f33ad7ccbf38c26762d2ec208f4b926fb0f",
"0xdafa1a1802b325bc2da7f863a5dca0c4a6cb558eb1891c695389f7c2c7cb1ec5",
"0xa7f359d3517aaea95b3b9740cae41973a2eaa5da82be01e8528994753cc4abdd",
"0x6c8bc7c07a3d13e698287d8d259885d9b9b4129555670110806ff9d9af90c564",
"0x197cf4833bbbe23bd1d95b55ba1d041c94d8fb120812a256cad61f8bed1cdec0",
"0xd6f15269e427116251b3487f46dce117a15843153c808dcb2ce8632d60553f9e",
"0x5a091d5ded4e57d6527971acc1a468d6a2c9c1b88e4309597d292f9b1bf974e1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


