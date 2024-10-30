import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CoinItem } from "@/types";

interface CurrencyInputProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    coin?: CoinItem;
}

export const CurrencyInput = ({
    value,
    onChange,
    disabled = false,
    coin,
}: CurrencyInputProps) => {
    return (
        <div className="relative h-[70px]">
            <Input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                placeholder="0.00"
                inputMode="decimal"
                className={cn(
                    "h-full relative text-end text-2xl border-[3px] rounded-full border-slate-500",
                    "placeholder:text-gray-400",
                    "px-6 py-2"
                )}
            />
            {coin && (
                <div
                    className="w-auto h-[80%] absolute top-1/2 left-2 -translate-y-1/2 rounded-full p-3 text-white 
                    bg-secondary/80 hover:bg-gray-700 shadow-none flex flex-row items-center gap-2"
                >
                    <img
                        src={coin.image}
                        alt={coin.symbol}
                        className="w-7 h-7 rounded-full"
                    />
                    <Label>
                        {coin.symbol}
                    </Label>
                </div>
            )}
        </div>
    );
};