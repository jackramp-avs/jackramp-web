import { Suspense } from "react"
import { ProofComponent } from "./_components/ProofComponent"

export const ProofPage = () => {
    return (
        <div className="flex flex-col w-screen h-screen z-10 overflow-y-auto">
            <Suspense fallback={<div>Loading...</div>}>
                <ProofComponent/>
            </Suspense>
        </div>
    )
}