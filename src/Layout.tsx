import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'

import { config } from './lib/wagmi'
import Navbar from './components/bar/Navbar';
import { holesky } from 'viem/chains';
import { Toaster } from 'sonner';
import { BackgroundBeamsWithCollision } from './components/ui/background-beams-with-collision';
const queryClient = new QueryClient();

export const CustomRainbowContext = ({ children }: { children: React.ReactNode }) => {
    return (
        <RainbowKitProvider
            theme={darkTheme({
                accentColor: '#7b3fe4',
                accentColorForeground: 'white',
                borderRadius: 'small',
                fontStack: 'system',
                overlayBlur: 'small',
            })}
            modalSize='compact'
            initialChain={holesky}
        >
            {children}
        </RainbowKitProvider>
    )
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <CustomRainbowContext>
                    <Toaster toastOptions={{ duration: 3000 }} />
                    <Navbar />
                    <BackgroundBeamsWithCollision>
                        {children}
                    </BackgroundBeamsWithCollision>
                </CustomRainbowContext>
            </QueryClientProvider>
        </WagmiProvider>
    )
}