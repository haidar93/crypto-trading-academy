"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Search, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Article } from "@/lib/articles-data";

export function ArticleList({ articles }: { articles: Article[] }) {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    // Logic Filter
    const filteredArticles = articles.filter((article) => {
        const matchSearch = article.title.toLowerCase().includes(search.toLowerCase()) || 
                            article.excerpt.toLowerCase().includes(search.toLowerCase());
        const matchCategory = category === "all" || article.category === category;
        return matchSearch && matchCategory;
    });

    return (
        <div className="space-y-8">
            {/* Header: Search & Tabs */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        placeholder="Cari artikel..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-9 bg-card/50"
                    />
                </div>

                <Tabs value={category} onValueChange={setCategory} className="w-full md:w-auto">
                    <TabsList className="grid w-full grid-cols-4 md:w-auto">
                        <TabsTrigger value="all">Semua</TabsTrigger>
                        <TabsTrigger value="Fundamental">Fundamental</TabsTrigger>
                        <TabsTrigger value="Trading">Trading</TabsTrigger>
                        <TabsTrigger value="Psychology">Psychology</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>

            {/* Grid Artikel */}
            {filteredArticles.length === 0 ? (
                <div className="rounded-xl border border-border/40 bg-card/50 p-12 text-center text-muted-foreground">
                    Artikel tidak ditemukan.
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredArticles.map((article) => (
                        <Link key={article.id} href={`/articles/${article.id}`}>
                            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/40 bg-card/50 backdrop-blur transition-all hover:border-primary/40 hover:bg-card/80">
                                {/* Cover Image */}
                                <div className="relative h-48 w-full overflow-hidden bg-muted">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute right-3 top-3">
                                        <Badge variant="secondary" className="bg-background/80 backdrop-blur">
                                            {article.category}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-1 flex-col p-5">
                                    <h2 className="mb-2 text-lg font-bold tracking-tight group-hover:text-primary transition-colors line-clamp-2">
                                        {article.title}
                                    </h2>
                                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground flex-1">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between border-t border-border/40 pt-3 text-xs text-muted-foreground">
                                        <div className="flex items-center gap-1.5">
                                            <User className="h-3.5 w-3.5" /> {article.author}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="h-3.5 w-3.5" /> {article.readTime}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}