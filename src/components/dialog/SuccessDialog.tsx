import React from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const SuccessDialog = ({
    isOpen,
    onClose,
    txHash,
    amount,
    processName
}:{
    isOpen: boolean,
    onClose: () => void,
    txHash: string,
    amount: string,
    processName: string
}) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(txHash);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const explorerUrl = `https://holesky.etherscan.io/tx/${txHash}`;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <span>Transaction Successful!</span>
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <div className="text-2xl font-bold text-green-600">
                            {processName} {amount} Tokens
                        </div>
                        <p className="text-sm text-gray-500">
                            have been successfully
                        </p>
                    </div>

                    <div className="rounded-lg p-4 space-y-2">
                        <div className="text-sm text-gray-500">Transaction Hash</div>
                        <div className="flex items-center gap-2 max-w-sm">
                            <code className="flex-1 font-mono text-xs p-2 rounded border overflow-x-auto">
                                {txHash}
                            </code>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleCopy}
                                className="shrink-0"
                            >
                                <Copy className={`h-4 w-4 ${copied ? 'text-green-600' : 'text-gray-500'}`} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => window.open(explorerUrl, '_blank')}
                                className="shrink-0"
                            >
                                <ExternalLink className="h-4 w-4 text-gray-500" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Button
                            className="w-32"
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};