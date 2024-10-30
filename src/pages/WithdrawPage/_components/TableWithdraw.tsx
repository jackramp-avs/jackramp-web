import { columns } from "@/components/tables/withdraw/columns";
import { DataTable } from "@/components/tables/withdraw/DataTable";
import { useEffect, useState } from "react";
import { request } from 'graphql-request';
import { useQuery } from "@tanstack/react-query";
import { Withdraw } from "@/types";
import { useAccount } from "wagmi";
import { queryWithdraw } from "@/graphql/query";

type QueryData = {
    withdraws: Withdraw[];
};

export default function TableWithdraw() {
    const [hasMounted, setHasMounted] = useState(false);
    const { address } = useAccount();

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const url = 'https://api.studio.thegraph.com/query/91582/jackramp-avs/version/latest';

    const { data, isLoading, refetch } = useQuery<QueryData>({
        queryKey: ['data'],
        queryFn: async () => {
            return await request(url, queryWithdraw);
        },
        refetchInterval: 10000,
    });

    const handleRefresh = () => {
        refetch();
    };

    const filteredMints = data?.withdraws && address ? data?.withdraws.filter((mint: Withdraw) => mint.user.toLocaleLowerCase() === address.toLocaleLowerCase()) : [];

    if (!hasMounted) {
        return null;
    }

    return (
        <div className="w-full space-y-4 p-5 h-auto z-10">
            <DataTable
                data={filteredMints || []}
                columns={columns()}
                handleRefresh={handleRefresh}
                isLoading={isLoading}
            />
        </div>
    );
}
