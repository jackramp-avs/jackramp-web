import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    arbitrum,
    base,
    mainnet,
    optimism,
    polygon,
    sepolia,
    holesky
} from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'RainbowKit demo',
    projectId: '04251f8180896efb96c57a0984864657',
    chains: [
        mainnet,
        polygon,
        optimism,
        arbitrum,
        holesky,
        base,
        ...(import.meta.env.VITE_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    ],
});