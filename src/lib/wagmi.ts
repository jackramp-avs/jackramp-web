import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const ethenaTestnet = {
    id: 52085143,
    name: 'Ethena Testnet',
    nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://testnet.rpc.ethena.fi'],
        },
    },
    blockExplorers: {
        default: {
            name: 'Ethena Explorer',
            url: 'https://testnet.explorer.ethena.fi',
        },
    },
    testnet: true,
    iconUrl: 'https://network.ethena.fi/shared/ethena.svg',
} as const;

export const config = getDefaultConfig({
    appName: 'RainbowKit demo',
    projectId: '04251f8180896efb96c57a0984864657',
    chains: [
        ethenaTestnet
    ],
});