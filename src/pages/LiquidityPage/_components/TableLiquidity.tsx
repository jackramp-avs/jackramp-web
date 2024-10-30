import { columns } from "@/components/tables/liquidity/columns";
import { DataTable } from "@/components/tables/liquidity/DataTable";
import { LiquidityContract } from "@/types";
import { useEffect, useState } from "react";
import dataLiquidity from "@/data/mockLiquidity.json"
import debounce from "lodash.debounce";
import { useAccount } from "wagmi";
import { toast } from "sonner";

export default function TableLiquidity() {
    const [hasMounted, setHasMounted] = useState(false);
    const { address } = useAccount();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);
    
    const handleRefresh = debounce(() => {
        if (!address) {
            toast.error('Please connect your wallet first');
            return;
        }
        setIsLoading(true);
    }, 300);

    const data: LiquidityContract[] = dataLiquidity

    if (!hasMounted) {
        return null;
    }

    return (
        <div className="w-full space-y-4 p-5 h-auto z-10">
            <DataTable
                data={data}
                columns={columns()}
                handleRefresh={handleRefresh}
                isLoading={isLoading}
            />
        </div>
    );
}