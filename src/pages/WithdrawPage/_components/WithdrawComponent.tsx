import { Card, CardContent } from "@/components/ui/card";
import { WithdrawForm } from "./WithdrawForm";
import TableWithdraw from "./TableWithdraw";
import { Label } from "@/components/ui/label";

export const WithdrawComponent = () => {
    return (
        <div className="z-10 px-10">
            <div className="w-full flex flex-col gap-10">
                <div className="flex flex-col w-full gap-5 h-auto">
                    <div className="flex w-full h-screen justify-center items-center">
                        <Card className="max-w-[400px] max-h-[500px] border-none outline-none">
                            <CardContent className="p-10">
                                <WithdrawForm />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex flex-col gap-2 w-full justify-center items-center">
                        <Label className="flex text-3xl">Your Transaction</Label>
                        <TableWithdraw />
                    </div>
                </div>
            </div>
        </div>
    );
};
