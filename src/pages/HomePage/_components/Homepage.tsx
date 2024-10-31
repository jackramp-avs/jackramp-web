import { World } from "@/components/ui/globe";
import { globeConfig, sampleArcs } from "@/lib/globe/config";

export default function Homepage() {
    return (
        <div className="container mx-auto h-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4 py-8 md:px-8 lg:px-12 xl:px-16 mt-[120px] lg:mt-0">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight">
                    A decentralized USD offramp for crypto with AVS
                </h1>
                <p className="text-base md:text-lg text-gray-400 font-medium max-w-2xl mx-auto lg:mx-0">
                    With a focus on security, speed, and simplicity, our platform
                    empowers you to seamlessly convert digital assets to USD, all in a
                    fully decentralized environment. Experience true financial
                    freedom—no intermediaries, just direct access to your funds.
                </p>
            </div>
            <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/5 aspect-square">
                <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
        </div>
    );
}