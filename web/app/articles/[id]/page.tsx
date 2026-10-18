import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ARTICLES } from "@/lib/articles-data";

type ArticleDetailPageProps = {
    params: Promise<{ id: string }>;
};

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
    const { id } = await params;
    const article = ARTICLES.find((a) => a.id === id);

    if (!article) {
        notFound();
    }

    return (
        <main className="container mx-auto max-w-3xl px-4 py-8">
            <Link
                href="/articles"
                className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4" /> Kembali ke Artikel
            </Link>

            <article>
                {/* Header */}
                <div className="mb-8 border-b border-border/40 pb-8">
                    <Badge variant="secondary" className="mb-4">
                        {article.category}
                    </Badge>
                    <h1 className="mb-4 text-3xl font-bold tracking-tight leading-tight md:text-4xl lg:text-5xl">
                        {article.title}
                    </h1>
                    <p className="mb-6 text-lg text-muted-foreground">{article.excerpt}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <User className="h-4 w-4" /> {article.author}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" /> {article.date}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" /> {article.readTime} baca
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-p:leading-relaxed prose-p:text-muted-foreground prose-headings:text-foreground">
                    {article.content.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </article>
        </main>
    );
}