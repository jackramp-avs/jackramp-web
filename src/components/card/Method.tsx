import { Button } from "@/components/ui/button";

interface MethodProps {
    value: string;
    title: string;
    duration: string;
    rate: string;
    onClick: (value: string) => void;
}

export const Method = ({
    value,
    title,
    duration,
    rate,
    onClick
}: MethodProps) => (
    <Button
        type="button"
        variant={value === "jackramp" ? "active" : "secondary"}
        className={"w-full h-auto p-4 justify-start space-x-4 rounded-[20px] border " + (value === "jackramp" ? "" : " border-slate-600")}
        onClick={() => onClick(value)}
    >
        <div className="text-left">
            <p className="font-semibold">{title}</p>
            <p className="text-xs text-muted-foreground">{duration}</p>
            <p className="text-xs text-muted-foreground">Rate {rate}</p>
        </div>
    </Button>
);