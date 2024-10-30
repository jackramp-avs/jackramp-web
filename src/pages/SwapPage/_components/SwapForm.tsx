import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useAccount } from "wagmi";
import { ADDRESS_MOCKERC20 } from "@/constants/config";
import { useSwap } from "@/hooks/useSwap";
import { toast } from "sonner";
import { useInsufficientBalance } from "@/hooks/useInsufficientBalance";
import { HexAddress } from "@/types";
import { LoadingTransaction } from "@/components/loader/LoadingTransaction";
import { jackrampCoin } from "@/constants/jackramp-coin";
import { CurrencyInput } from "@/components/card/CurrencyInput";
import { Method } from "@/components/card/Method";
import { ProcessingInfo } from "@/components/card/ProcessingInfo";
import { SuccessDialog } from "@/components/dialog/SuccessDialog";
import { rpCurrency } from "@/constants/rpCurrency";
import { ArrowDownUp } from "lucide-react";
import { bank } from "@/constants/bank";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface FormData {
    confirmed: boolean;
}

export const SwapForm = () => {
    const [amount, setAmount] = useState("");
    const { address } = useAccount();
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [selectedBank, setSelectedBank] = useState(bank[0]);
    const [channelAccount, setChannelAccount] = useState("");

    const { insufficientBalance } = useInsufficientBalance(
        address as HexAddress,
        ADDRESS_MOCKERC20,
        amount
    );

    const { swapHash, isSwapPending, isSwapConfirming, isSwapConfirmed, handleSwap } =
        useSwap();

    const form = useForm<FormData>({
        defaultValues: {},
    });

    const handleAmountChange = useCallback((value: string) => {
        setAmount(value);
    }, []);

    const handleChannelAccountChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setChannelAccount(e.target.value);
    }, []);

    useEffect(() => {
        if (isSwapConfirmed && !isSwapConfirming) {
            setShowSuccessDialog(true);
            form.reset();
            setChannelAccount(""); // Reset channel account on success
        }
    }, [isSwapConfirming, isSwapConfirmed, form]);

    const handleBankSelect = (value: string) => {
        const selected = bank.find((b) => b.name === value);
        if (selected) {
            setSelectedBank(selected);
        }
    };

    const handleSubmit = useCallback(async () => {
        if (insufficientBalance) {
            toast.error("Invalid amount or not enough balance!");
            return;
        }
        if (!selectedBank) {
            toast.error("Please select a bank!");
            return;
        }
        if (!channelAccount.trim()) {
            toast.error("Please enter a bank number!");
            return;
        }
        setShowSuccessDialog(false);
        await handleSwap(amount, selectedBank.name, channelAccount);
    }, [amount, insufficientBalance, handleSwap, selectedBank, channelAccount]);

    const isSubmitDisabled = useMemo(
        () =>
            isSwapPending ||
            isSwapConfirming ||
            insufficientBalance ||
            typeof amount === "undefined" ||
            amount === "" ||
            !selectedBank ||
            !channelAccount.trim(),
        [isSwapPending, isSwapConfirming, insufficientBalance, amount, selectedBank, channelAccount]
    );

    const buttonText = useMemo(() => {
        if (isSwapPending || isSwapConfirming) {
            return "Swapping...";
        }
        if (insufficientBalance) {
            return "Insufficient balance";
        }
        if (!selectedBank) {
            return "Select a bank";
        }
        if (!channelAccount.trim()) {
            return "Enter bank number";
        }
        return "Swap";
    }, [isSwapPending, isSwapConfirming, insufficientBalance, selectedBank, channelAccount]);

    return (
        <>
            {(isSwapPending || isSwapConfirming) && (
                <LoadingTransaction
                    message={isSwapPending ? "Swapping..." : "Confirming swapping..."}
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
                                    coin={jackrampCoin}
                                />
                            </motion.div>
                            <motion.div className="flex items-center justify-center">
                                <ArrowDownUp />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <CurrencyInput
                                    value={amount}
                                    onChange={handleAmountChange}
                                    coin={rpCurrency}
                                    disabled
                                />
                            </motion.div>
                        </div>
                        <div className="flex flex-row gap-5">
                            <Method
                                value="jackramp"
                                title="JackRamp"
                                duration="Realtime"
                                rate="1-1"
                                onClick={() => { }}
                            />
                            <Method
                                value="-"
                                title="Available Soon"
                                duration="-"
                                rate="-"
                                onClick={() => { }}
                            />
                        </div>
                        <div className="w-full">
                            <Select onValueChange={handleBankSelect} defaultValue={selectedBank.name}>
                                <SelectTrigger className="w-full h-14 px-4 bg-transparent border-gray-500 border-[3px] rounded-xl">
                                    <div className="flex items-center gap-2">
                                        <SelectValue placeholder="Select a bank" />
                                    </div>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {bank.map((bankOption) => (
                                            <SelectItem
                                                key={bankOption.name}
                                                value={bankOption.name}
                                                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src={bankOption.image}
                                                        alt={bankOption.name}
                                                        className="w-12 h-8 px-2 object-contain bg-white rounded-lg"
                                                    />
                                                    <span>{bankOption.name}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <Input 
                            type="text"
                            className="bg-transparent border-gray-500 border-[3px] px-5 py-6 rounded-xl"
                            value={channelAccount}
                            onChange={handleChannelAccountChange}
                            placeholder="Bank Number"
                        />
                        <ProcessingInfo method="jackramp" networkFee="-" />
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
                txHash={swapHash || ""}
                amount={amount}
                processName="Swap"
            />
        </>
    );
};