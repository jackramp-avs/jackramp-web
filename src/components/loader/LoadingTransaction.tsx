import { Loader2 } from 'lucide-react';

export const LoadingTransaction = ({ message = "Processing Transaction..." }) => {
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col items-center gap-4 animate-in fade-in duration-300">
                <div className="relative">
                    <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-primary/30 border-b-primary/10 border-l-primary/30 animate-spin" />
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>

                <div className="text-center space-y-2">
                    <p className="text-lg font-medium text-white">{message}</p>
                    <p className="text-sm text-white/70 flex items-center gap-1">
                        Please wait
                        <span className="inline-flex animate-bounce">.</span>
                        <span className="inline-flex animate-bounce delay-150">.</span>
                        <span className="inline-flex animate-bounce delay-300">.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};