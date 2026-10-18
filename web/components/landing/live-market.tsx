import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LiveMarketCard } from "@/components/live-market-card";
import type { MarketResponse } from "@/types/market";

async function getMarketData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/market`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Gagal ambil data market");
    }

    const json: MarketResponse = await res.json();
    return json.data;
}

export async function LiveMarket() {
    const marketData = await getMarketData();

    return (
        <section className="container mx-auto px-4 py-16">
            {/* Header section */}
            <div className="mb-8 flex items-end justify-between">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Live Crypto Market
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Pantau pergerakan harga crypto secara real-time
                    </p>
                </div>
                <Link
                    href="/market"
                    className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline md:flex"
                >
                    Lihat Semua <ArrowRight className="h-4 w-4" />
                </Link>
            </div>

            {/* grid 5 cards */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
                {marketData.map((coin) => (
                    <LiveMarketCard key={coin.id} coin={coin} />
                ))}
            </div>

            {/* link mobile */}
            <Link
                href="/market"
                className="mt-6 flex items-center justify-center gap-1 text-sm font-medium text-primary hover:underline md:hidden"
            >
                Lihat Semua <ArrowRight className="h-4 w-4" />
            </Link>
        </section>
    );
}