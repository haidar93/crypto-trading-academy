import Image from "next/image";
import { cn } from "@/lib/utils";
import type { CoinMarketData } from "@/types/market";

type LiveMarketCardProps = {
    coin: CoinMarketData;
};

export function LiveMarketCard({ coin }: LiveMarketCardProps) {
    const priceChange = coin.price_change_percentage_24h;
    const isPositive = priceChange !== null && priceChange >= 0;

    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: coin.current_price < 1 ? 4 : 2,
        maximumFractionDigits: coin.current_price < 1 ? 4 : 2,
    }).format(coin.current_price);

    const formattedChange =
        priceChange !== null
            ? `${isPositive ? "+" : ""}${priceChange.toFixed(2)}%`
            : "—";

    return (
        <div className="flex flex-col gap-3 rounded-xl border border-border/40 bg-card/50 p-4 transition-colors hover:border-primary/40">
            {/* header: logo + nama */}
            <div className="flex items-center gap-2">
                <Image
                    src={coin.image}
                    alt={coin.name}
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full"
                />
                <div className="flex flex-col">
                    <span className="text-sm font-semibold leading-tight">
                        {coin.symbol.toUpperCase()}
                    </span>
                    <span className="text-xs text-muted-foreground leading-tight">
                        {coin.name}
                    </span>
                </div>
            </div>

            {/* harga */}
            <div>
                <p className="text-lg font-bold tracking-tight">
                    {formattedPrice}
                </p>
                <p
                    className={cn(
                        "text-xs font-semibold",
                        isPositive ? "text-green-500" : "text-red-500"
                    )}
                >
                    {formattedChange} (24h)
                </p>
            </div>
        </div>
    );
}