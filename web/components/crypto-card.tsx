import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { CoinMarketData } from "@/types/market";

type CryptoCardProps = {
    coin: CoinMarketData;
};

export function CryptoCard({ coin }: CryptoCardProps) {
    const priceChange = coin.price_change_percentage_24h;
    const isPositive = priceChange !== null && priceChange >= 0;

    // Format harga: kalau < $1 pakai 4 desimal, kalau >= $1 pakai 2 desimal
    const formattedPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: coin.current_price < 1 ? 4 : 2,
        maximumFractionDigits: coin.current_price < 1 ? 4 : 2,
    }).format(coin.current_price);

    // Format % change: tampilin + kalau positif, - kalau negatif
    const formattedChange =
        priceChange !== null
            ? `${isPositive ? "+" : ""}${priceChange.toFixed(2)}%`
            : "—";

    return (
        <Card className="relative overflow-hidden border-border/40 bg-card/50 backdrop-blur transition-colors hover:border-primary/40">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <div className="flex items-center gap-3">
                    {/* Logo dari CoinGecko */}
                    <Image
                        src={coin.image}
                        alt={coin.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full"
                    />
                    <div>
                        <p className="font-semibold">{coin.name}</p>
                        <p className="text-xs text-muted-foreground uppercase">
                            {coin.symbol}
                        </p>
                    </div>
                </div>

                {/* Badge % change */}
                <Badge
                    className={cn(
                        "border-transparent text-xs font-semibold",
                        isPositive
                            ? "bg-green-500/15 text-green-500 hover:bg-green-500/20"
                            : "bg-red-500/15 text-red-500 hover:bg-red-500/20"
                    )}
                >
                    {formattedChange}
                </Badge>
            </CardHeader>

            <CardContent>
                <p className="text-2xl font-bold tracking-tight">{formattedPrice}</p>
                <p className="text-xs text-muted-foreground">
                    Rank #{coin.market_cap_rank}
                </p>
            </CardContent>
        </Card>
    );
}