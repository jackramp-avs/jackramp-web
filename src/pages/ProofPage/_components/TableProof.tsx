import { columns } from "@/components/tables/proof/columns";
import { DataTable } from "@/components/tables/proof/DataTable";
import { useEffect, useState } from "react";
import { request } from 'graphql-request';
import { useQuery } from "@tanstack/react-query";
import { Operator } from "@/types";
import { queryOperator } from "@/graphql/query";
import { useAccount } from "wagmi";

type QueryData = {
    operators: Operator[]
    tasksResponded: Operator['tasksResponded']
};

export default function TableProof() {
    const [hasMounted, setHasMounted] = useState(false);
    const { address } = useAccount();

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const url = 'https://api.studio.thegraph.com/query/91582/jackramp-avs/version/latest';

    const { data, isLoading, refetch } = useQuery<QueryData>({
        queryKey: ['data'],
        queryFn: async () => {
            return await request(url, queryOperator);
        },
        refetchInterval: 10000,
    });

    console.log("data = ", data);    

    const handleRefresh = () => {
        refetch();
    };

    if (!hasMounted) {
        return null;
    }

    return (
        <div className="w-full space-y-4 p-5 h-auto z-10">
            <DataTable
                data={
                    data?.operators && data.operators[0]?.tasksResponded && address 
                        ? data.operators[0].tasksResponded 
                        : []
                }
                columns={columns()}
                handleRefresh={handleRefresh}
                isLoading={isLoading}
            />
        </div>
    );
}