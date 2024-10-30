import { Suspense } from "react"
import { WithdrawComponent } from "./_components/WithdrawComponent"

export const WithdrawPage = () => {
    return (
        <div className="flex flex-col w-screen h-screen z-10 overflow-y-auto overflow-x-hidden">
            <Suspense fallback={<div>Loading...</div>}>
                <WithdrawComponent />
            </Suspense>
        </div>
    )
}