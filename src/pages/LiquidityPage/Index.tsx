import { Suspense } from "react"
import { LiquidityComponent } from "./_components/LiquidityComponent"

export const LiquidityPage = () => {
    return (
        <div className="flex flex-col w-screen h-screen z-10 overflow-y-auto overflow-x-hidden">
            <Suspense fallback={<div>Loading...</div>}>
                <LiquidityComponent />
            </Suspense>
        </div>
    )
}