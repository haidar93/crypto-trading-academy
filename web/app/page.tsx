import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { LiveMarket } from "@/components/landing/live-market";
import { ProfitGallery } from "@/components/profit-gallery";

export default function HomePage() {
    return (
        <div>
            <Hero />
            <Features />
            <LiveMarket />
            
            <div className="mt-12 pb-12">
                <ProfitGallery />
            </div>
        </div>
    );
}