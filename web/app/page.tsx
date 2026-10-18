import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { LiveMarket } from "@/components/landing/live-market";

export default function HomePage() {
    return (
        <div>
            <Hero />
            <Features />
            <LiveMarket />
        </div>
    );
}