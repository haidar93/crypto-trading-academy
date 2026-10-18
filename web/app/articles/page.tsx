import { ArticleList } from "@/components/article-list";
import { ARTICLES } from "@/lib/articles-data";

export default function ArticlesPage() {
    return (
        <main className="container mx-auto max-w-6xl px-4 py-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Artikel & Edukasi</h1>
                <p className="mt-1 text-muted-foreground">
                    Baca materi ringan seputar crypto, trading, dan psikologi pasar.
                </p>
            </div>

            {/* Kirim data dari Server ke Client Component */}
            <ArticleList articles={ARTICLES} />
        </main>
    );
}