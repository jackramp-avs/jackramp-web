import { Suspense } from "react"
import { MintComponent } from "./_components/MintComponent"

export const MintPage = () => {
    return (
        <div className="flex flex-col w-screen h-screen z-10 overflow-x-hidden">
            <Suspense fallback={<div>Loading...</div>}>
                <MintComponent />
            </Suspense>
        </div>
    )
}