import { useMemo } from 'react';
import { HexAddress } from "@/types";
import { useBalance } from "@/hooks/useBalance";
import { convertBigIntToNumber, toUSDCAmount } from "@/lib/utils";

interface UseInsufficientBalanceOptions {
    debounceTime?: number;
    enabled?: boolean;
}

interface UseInsufficientBalanceResult {
    insufficientBalance: boolean;
    balance: bigint | undefined;
    loading: boolean;
    error: Error | null;
    refreshBalance: () => Promise<void>;
    isStale: boolean;
    formattedBalance: string;
    maxAmount: string;
}

export const useInsufficientBalance = (
    address: HexAddress,
    token: HexAddress,
    amount: string,
    options: UseInsufficientBalanceOptions = {}
): UseInsufficientBalanceResult => {
    const {
        balance,
        loading,
        error,
        refreshBalance,
        isStale
    } = useBalance(address, token, options);

    const insufficientBalance = useMemo(() => {
        if (balance === undefined || amount === '') return false;
        const amountInUSDC = toUSDCAmount(amount);
        return convertBigIntToNumber(balance) < convertBigIntToNumber(amountInUSDC);
    }, [balance, amount]);

    const formattedBalance = useMemo(() => {
        if (balance === undefined) return '0';
        return (convertBigIntToNumber(balance) / (10 ** 6)).toFixed(6);
    }, [balance]);

    const maxAmount = useMemo(() => {
        if (balance === undefined) return '0';
        return (convertBigIntToNumber(balance) / (10 ** 6)).toString();
    }, [balance]);

    return {
        insufficientBalance,
        balance,
        loading,
        error,
        refreshBalance,
        isStale,
        formattedBalance,
        maxAmount
    };
};