"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import type { CoinMarketData } from "@/types/market";
import { cn } from "@/lib/utils";
import { formatCompact, formatCurrency, formatPercent } from "@/lib/format";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export function MarketTable({ data }: { data: CoinMarketData[] }) {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    // 1. Logika Filter & Search
    let filteredData = data.filter(
        (coin) =>
            coin.name.toLowerCase().includes(search.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    // 2. Logika Tab (Top 5, 10, 20)
    if (filter === "top5") filteredData = filteredData.slice(0, 5);
    if (filter === "top10") filteredData = filteredData.slice(0, 10);
    if (filter === "top20") filteredData = filteredData.slice(0, 20);

    return (
        <div className="space-y-4">
            {/* Baris Atas: Search & Tabs */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Cari coin..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-9 bg-card/50"
                    />
                </div>

                <Tabs value={filter} onValueChange={setFilter} className="w-full md:w-auto">
                    <TabsList className="grid w-full grid-cols-4 md:w-auto">
                        <TabsTrigger value="all">Semua</TabsTrigger>
                        <TabsTrigger value="top5">Top 5</TabsTrigger>
                        <TabsTrigger value="top10">Top 10</TabsTrigger>
                        <TabsTrigger value="top20">Top 20</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* Tabel */}
            <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow className="border-border/40 hover:bg-transparent">
                            <TableHead className="w-[50px] text-center">#</TableHead>
                            <TableHead>Nama</TableHead>
                            <TableHead className="text-right">Harga</TableHead>
                            <TableHead className="text-right">24h %</TableHead>
                            <TableHead className="text-right hidden md:table-cell">Market Cap</TableHead>
                            <TableHead className="text-right hidden md:table-cell">Volume (24h)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredData.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                                    Coin tidak ditemukan.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredData.map((coin, index) => {
                                const isPositive = (coin.price_change_percentage_24h ?? 0) >= 0;
                                return (
                                    <TableRow key={coin.id} className="border-border/40 hover:bg-muted/30">
                                        <TableCell className="text-center font-mono text-xs text-muted-foreground">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={coin.image}
                                                    alt={coin.name}
                                                    width={28}
                                                    height={28}
                                                    className="rounded-full"
                                                />
                                                <div>
                                                    <p className="font-semibold">{coin.name}</p>
                                                    <p className="text-xs text-muted-foreground uppercase">{coin.symbol}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right font-medium">
                                            {formatCurrency(coin.current_price)}
                                        </TableCell>
                                        <TableCell className={cn(
                                            "text-right font-semibold text-xs",
                                            isPositive ? "text-green-500" : "text-red-500"
                                        )}>
                                            {formatPercent(coin.price_change_percentage_24h)}
                                        </TableCell>
                                        <TableCell className="text-right text-muted-foreground hidden md:table-cell">
                                            {formatCompact(coin.market_cap)}
                                        </TableCell>
                                        <TableCell className="text-right text-muted-foreground hidden md:table-cell">
                                            {formatCompact(coin.total_volume)}
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}