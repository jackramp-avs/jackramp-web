import { Suspense } from 'react'
import Homepage from './_components/Homepage'

export const HomePage = () => {
    return (
        <div className="flex w-screen h-screen z-10 overflow-auto">
            <Suspense fallback={<div>Loading...</div>}>
                <Homepage />
            </Suspense>
        </div>
    )
}