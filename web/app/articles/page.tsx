import Link from "next/link";
import { Clock, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ARTICLES } from "@/lib/articles-data";

export default function ArticlesPage() {
    return (
        <main className="container mx-auto max-w-5xl px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Artikel Edukasi</h1>
                <p className="mt-1 text-muted-foreground">
                    Baca materi ringan seputar crypto, trading, dan psikologi pasar.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ARTICLES.map((article) => (
                    <Link key={article.id} href={`/articles/${article.id}`}>
                        <div className="group flex h-full flex-col justify-between rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur transition-all hover:border-primary/40 hover:bg-card/80">
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <Badge variant="secondary">{article.category}</Badge>
                                    <span className="text-xs text-muted-foreground">{article.date}</span>
                                </div>
                                <h2 className="mb-2 text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                                    {article.title}
                                </h2>
                                <p className="line-clamp-3 text-sm text-muted-foreground">
                                    {article.excerpt}
                                </p>
                            </div>
                            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 pt-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <User className="h-3.5 w-3.5" /> {article.author}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3.5 w-3.5" /> {article.readTime}
                                    </div>
                                </div>
                                <ArrowRight className="h-4 w-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}