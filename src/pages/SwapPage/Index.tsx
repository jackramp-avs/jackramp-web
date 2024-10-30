import { Suspense } from "react"
import { SwapComponent } from "./_components/SwapComponent"

export const SwapPage = () => {
    return (
        <div className="flex flex-col w-screen h-screen z-10 overflow-y-auto overflow-x-hidden">
            <Suspense fallback={<div>Loading...</div>}>
                <SwapComponent />
            </Suspense>
        </div>
    )
}