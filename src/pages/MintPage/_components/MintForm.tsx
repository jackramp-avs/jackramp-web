import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { m0Coin } from "@/constants/m0-coin";
import { useAccount } from "wagmi";
import { ADDRESS_MOCKERC20 } from "@/constants/config";
import { useMint } from "@/hooks/useMint";
import { toast } from "sonner";
import { useInsufficientBalance } from "@/hooks/useInsufficientBalance";
import { HexAddress } from "@/types";
import { LoadingTransaction } from "@/components/loader/LoadingTransaction";
import { ProcessingInfo } from "@/components/card/ProcessingInfo";
import { Method } from "@/components/card/Method";
import { CurrencyInput } from "@/components/card/CurrencyInput";
import { SuccessDialog } from "@/components/dialog/SuccessDialog";

interface FormData {
    confirmed: boolean;
}

export const MintForm = () => {
    const [amount, setAmount] = useState("");
    const { address } = useAccount();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const {
        insufficientBalance,
    } = useInsufficientBalance(
        address as HexAddress,
        ADDRESS_MOCKERC20,
        amount
    );

    const {
        mintHash,
        isApprovalPending,
        isMintPending,
        isApprovalConfirming,
        isMintConfirming,
        allowance,
        handleMint,
        isMintConfirmed
    } = useMint();

    const form = useForm<FormData>({
        defaultValues: {}
    });

    const handleAmountChange = useCallback((value: string) => {
        setAmount(value);
    }, []);

    useEffect(() => {
        if (isMintConfirmed && !isMintConfirming) {
            setShowSuccessDialog(true);
            form.reset();
        }
    }, [isMintConfirming, isMintConfirmed, form]);

    const handleSubmit = useCallback(async () => {
        if (insufficientBalance) {
            toast.error('Invalid amount or not enough balance!');
            return;
        }
        setShowSuccessDialog(false);
        await handleMint(amount);
    }, [amount, insufficientBalance, handleMint]);

    const isSubmitDisabled = useMemo(() =>
        isApprovalPending ||
        isMintPending ||
        isApprovalConfirming ||
        isMintConfirming ||
        insufficientBalance ||
        typeof allowance === 'undefined' ||
        typeof amount === 'undefined' ||
        amount === '',
        [
            isApprovalPending,
            isMintPending,
            isApprovalConfirming,
            isMintConfirming,
            insufficientBalance,
            allowance,
            amount
        ]
    );

    const buttonText = useMemo(() => {
        if (isMintPending || isApprovalPending || isMintConfirming || isApprovalConfirming) {
            return 'Minting...';
        }
        if (insufficientBalance) {
            return 'Insufficient balance';
        }
        return 'Mint';
    }, [isMintPending, isApprovalPending, isMintConfirming, isApprovalConfirming, insufficientBalance]);

    return (
        <>
            {(isMintPending || isApprovalPending || isMintConfirming || isApprovalConfirming) && (
                <LoadingTransaction
                    message={
                        isApprovalPending || isApprovalConfirming
                            ? "Approving Transaction..."
                            : "Minting In Progress..."
                    }
                />
            )}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex relative flex-col h-fit w-auto gap-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <CurrencyInput
                                    value={amount}
                                    onChange={handleAmountChange}
                                    coin={m0Coin}
                                />
                            </motion.div>
                        </div>
                        <div className="flex flex-row gap-5">
                            <Method
                                value={"jackramp"}
                                title={"JackRamp"}
                                duration={"Realtime"}
                                rate={"1-1"}
                                onClick={() => { }}
                            />
                            <Method
                                value={"-"}
                                title={"Available Soon"}
                                duration={"-"}
                                rate={"-"}
                                onClick={() => { }}
                            />
                        </div>
                        <ProcessingInfo
                            method={"jackramp"}
                            networkFee={"-"}
                        />
                        <Button
                            type="submit"
                            className="w-full rounded-xl"
                            disabled={isSubmitDisabled}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </form>
            </Form>
            <SuccessDialog
                isOpen={showSuccessDialog}
                onClose={() => setShowSuccessDialog(false)}
                txHash={mintHash || ''}
                amount={amount}
                processName={"Mint"}
            />
        </>
    );
};