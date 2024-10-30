import { columns } from "@/components/tables/mint/columns";
import { DataTable } from "@/components/tables/mint/DataTable";
import { useEffect, useState } from "react";
import { request } from 'graphql-request';
import { useQuery } from "@tanstack/react-query";
import { Mint } from "@/types";
import { useAccount } from "wagmi";
import { queryMint } from "@/graphql/query";

type QueryData = {
    mints: Mint[];
};

export default function TableMint() {
    const [hasMounted, setHasMounted] = useState(false);
    const { address } = useAccount();

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const url = 'https://api.studio.thegraph.com/query/91582/jackramp-avs/version/latest';

    const { data, isLoading, refetch } = useQuery<QueryData>({
        queryKey: ['data'],
        queryFn: async () => {
            return await request(url, queryMint);
        },
        refetchInterval: 10000,
    });

    const handleRefresh = () => {
        refetch();
    };

    const filteredMints = address && data?.mints ? data?.mints.filter((mint: Mint) => mint.user.toLocaleLowerCase() === address.toLocaleLowerCase()) : [];

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
