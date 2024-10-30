import { AnimatePresence, motion } from "framer-motion"
import TableProof from "./TableProof"

export const ProofComponent = () => {
    return (
        <AnimatePresence>
            <motion.div
                className="flex flex-col w-full h-auto px-5 z-10 p-6 mt-[100px]"
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <div className="text-center space-y-2 flex flex-col justify-center">
                    <h1 className="text-2xl font-bold">Proof</h1>
                    <p className="text-muted-foreground">
                        List of generated proofs
                    </p>
                </div>
                <TableProof />
            </motion.div>
        </AnimatePresence>
    )
}