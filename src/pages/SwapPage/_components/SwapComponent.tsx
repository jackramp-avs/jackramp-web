import { Card, CardContent } from "@/components/ui/card";
import { SwapForm } from "./SwapForm";
import { Label } from "@/components/ui/label";
import TableSwap from "./TableSwap";

export const SwapComponent = () => {
    return (
        <div className="z-10 px-10 mt-[40px]">
            <div className="w-full flex flex-col gap-10">
                <div className="flex flex-col w-full gap-5 h-auto">
                    <div className="flex w-full min-h-screen justify-center items-center">
                        <Card className="max-w-[400px] max-h-[800px] border-none flex outline-none">
                            <CardContent className="p-10">
                                <SwapForm />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-col gap-2 w-full justify-center items-center">
                        <Label className="flex text-3xl">Your Transaction</Label>
                        <TableSwap />
                    </div>
                </div>
            </div>
        </div>
    );
};
