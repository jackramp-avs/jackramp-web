import { AnimatePresence, motion } from "framer-motion"
import TableLiquidity from "./TableLiquidity"

export const LiquidityComponent = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="flex flex-col w-full h-auto px-5 z-10 p-6 mt-[100px]"
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className="text-center space-y-2 flex flex-col justify-center">
                    <h1 className="text-2xl font-bold">Liquidity</h1>
                    <p className="text-muted-foreground">
                        Check all liquidity transaction
                    </p>
                </div>
                <TableLiquidity />
            </motion.div>
        </AnimatePresence>
    )
}