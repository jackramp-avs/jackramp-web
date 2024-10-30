import { BackgroundGradient } from "../ui/background-gradient";
import { Button } from "../ui/button";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useBalance } from "@/hooks/useBalance";
import { useAccount } from "wagmi";
import { ADDRESS_JACKUSD } from "@/constants/config";
import { HexAddress } from "@/types";
import { jackrampCoin } from "@/constants/jackramp-coin";

const buttonBaseStyles = "rounded-full hover:rounded-full";

const ChainIcon = ({ iconUrl, name, background, size = 20 }: {
    iconUrl?: string;
    name?: string;
    background?: string;
    size?: number;
}) => (
    <div
        style={{
            background,
            width: size,
            height: size,
            borderRadius: 999,
            overflow: 'hidden',
            marginRight: 4,
        }}
    >
        {iconUrl && (
            <img
                alt={`${name ?? 'Chain'} icon`}
                src={iconUrl}
                style={{ width: size, height: size }}
            />
        )}
    </div>
);

const GradientButton = ({ children, onClick, variant = 'outline' }: {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'outline' | 'ghost';
}) => (
    <div className="w-fit flex">
        <BackgroundGradient className="rounded-full w-fit bg-background">
            <Button
                onClick={onClick}
                variant={variant}
                className={`${buttonBaseStyles} flex items-center`}
            >
                {children}
            </Button>
        </BackgroundGradient>
    </div>
);

export function ButtonConnectWallet() {
    return <ConnectButtonWalletComponents />;
}

export const ConnectButtonWalletComponents = () => {
    const { address } = useAccount();
    const { balance, error } = useBalance(address as HexAddress, ADDRESS_JACKUSD);

    return (
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                if (!mounted) {
                    return (
                        <div
                            aria-hidden="true"
                            style={{
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                        />
                    );
                }

                const connected = account && chain;

                if (!connected) {
                    return (
                        <GradientButton onClick={openConnectModal} variant="ghost">
                            Connect Wallet
                        </GradientButton>
                    );
                }

                if (chain?.unsupported) {
                    return (
                        <GradientButton onClick={openChainModal}>
                            Wrong network
                        </GradientButton>
                    );
                }

                return (
                    <div className="w-fit flex-wrap flex gap-3 z-50">
                        <GradientButton>
                            {jackrampCoin && (
                                <ChainIcon
                                    iconUrl={jackrampCoin.image}
                                    name={jackrampCoin.name}
                                    background={chain.iconBackground}
                                />
                            )}
                            {error ? (
                                'Error loading balance'
                            ) : (
                                balance ? (balance.toString()) : '0'
                            )}
                        </GradientButton>

                        <GradientButton onClick={openChainModal}>
                            {chain.hasIcon && (
                                <ChainIcon
                                    iconUrl={chain.iconUrl}
                                    name={chain.name}
                                    background={chain.iconBackground}
                                />
                            )}
                            {chain.name}
                        </GradientButton>

                        <GradientButton onClick={openAccountModal}>
                            {account.displayName}
                            {account.displayBalance && ` (${account.displayBalance})`}
                        </GradientButton>
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};