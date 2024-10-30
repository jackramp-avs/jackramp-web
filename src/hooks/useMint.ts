import { useState } from 'react';
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { ADDRESS_JACKUSD, ADDRESS_MOCKERC20 } from '@/constants/config';
import { mockJackUSDABI } from '@/lib/abi/mockJackUSDABI';
import { toast } from 'sonner';
import { HexAddress } from '@/types';

export const useMint = () => {
    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const { address } = useAccount();
    
    const {
        data: approvalHash,
        isPending: isApprovalPending,
        writeContract: writeApproval
    } = useWriteContract();

    const {
        data: mintHash,
        isPending: isMintPending,
        writeContract: writeMint
    } = useWriteContract();

    const {
        isLoading: isApprovalConfirming
    } = useWaitForTransactionReceipt({
        hash: approvalHash,
    });

    const {
        isLoading: isMintConfirming,
        isSuccess: isMintConfirmed
    } = useWaitForTransactionReceipt({
        hash: mintHash,
    });

    const { data: allowance } = useReadContract({
        abi: mockJackUSDABI,
        address: ADDRESS_JACKUSD,
        functionName: 'allowance',
        args: [
            address as HexAddress,
            ADDRESS_MOCKERC20
        ],
    });

    const handleMint = async (amount: string) => {
        try {
            await writeApproval({
                abi: mockJackUSDABI,
                address: ADDRESS_MOCKERC20,
                functionName: 'approve',
                args: [ADDRESS_JACKUSD, BigInt(amount)],
            });

            await writeMint({
                abi: mockJackUSDABI,
                address: ADDRESS_JACKUSD,
                functionName: 'mint',
                args: [BigInt(amount)],
            });

            while (!isMintConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('Tokens minted successfully!');
            setIsAlertOpen(true);
        } catch (error) {
            console.error('Transaction error:', error);
            toast.error(error instanceof Error ? error.message : 'Transaction failed. Please try again.');
        }
    };

    return {
        isAlertOpen,
        setIsAlertOpen,
        mintHash,
        isApprovalPending,
        isMintPending,
        isApprovalConfirming,
        isMintConfirming,
        allowance,
        handleMint,
        isMintConfirmed
    };
};