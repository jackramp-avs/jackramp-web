import { useState } from 'react';
import { useAccount, useReadContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { ADDRESS_ENAUSD, ADDRESS_USDE } from '@/constants/config';
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
        address: ADDRESS_ENAUSD,
        functionName: 'allowance',
        args: [
            address as HexAddress,
            ADDRESS_USDE
        ],
    });

    const handleMint = async (amount: string) => {
        try {
            await writeApproval({
                abi: mockJackUSDABI,
                address: ADDRESS_USDE,
                functionName: 'approve',
                args: [ADDRESS_ENAUSD, BigInt(amount)],
            });

            await writeMint({
                abi: mockJackUSDABI,
                address: ADDRESS_ENAUSD,
                functionName: 'mint',
                args: [BigInt(amount)],
            });

            while (!isMintConfirmed) {
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            toast.success('Tokens sawped successfully!');
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