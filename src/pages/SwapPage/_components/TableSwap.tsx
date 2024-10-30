import { columns } from "@/components/tables/swap/columns";
import { DataTable } from "@/components/tables/swap/DataTable";
import { useEffect, useState } from "react";
import { request } from 'graphql-request';
import { useQuery } from "@tanstack/react-query";
import { Swap } from "@/types";
import { useAccount } from "wagmi";
import { querySwap } from "@/graphql/query";

type QueryData = {
    offRamps: Swap[];
};

export default function TableSwap() {
    const [hasMounted, setHasMounted] = useState(false);
    const { address } = useAccount();

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const url = 'https://api.studio.thegraph.com/query/91582/jackramp-avs/version/latest';

    const { data, isLoading, refetch } = useQuery<QueryData>({
        queryKey: ['data'],
        queryFn: async () => {
            return await request(url, querySwap);
        },
        refetchInterval: 10000,
    });

    const handleRefresh = () => {
        refetch();
    };

    const filteredSwaps = address && data?.offRamps ? data?.offRamps.filter((swap: Swap) => swap.user.toLocaleLowerCase() === address.toLocaleLowerCase()) : [];

    if (!hasMounted) {
        return null;
    }

    return (
        <div className="w-full space-y-4 p-5 h-auto z-10">
            <DataTable
                data={filteredSwaps || []}
                columns={columns()}
                handleRefresh={handleRefresh}
                isLoading={isLoading}
            />
        </div>
    );
}