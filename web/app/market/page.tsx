import { MarketTable } from "@/components/market-table";
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

export default async function MarketPage() {
    const marketData = await getMarketData();

    return (
        <main className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Live Market</h1>
                <p className="text-muted-foreground">
                    Data harga cryptocurrency real-time dari CoinGecko
                </p>
            </div>

            {/* Panggil komponen Client, kirim data lewat props */}
            <MarketTable data={marketData} />
        </main>
    );
}