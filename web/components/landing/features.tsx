import { BookOpen, TrendingUp, Award, Crown } from "lucide-react";

const FEATURES = [
    {
        icon: BookOpen,
        title: "Materi Lengkap",
        description: "Dari dasar crypto hingga strategi trading level lanjut.",
    },
    {
        icon: TrendingUp,
        title: "Market Real-time",
        description: "Data harga langsung dari CoinGecko, update setiap saat.",
    },
    {
        icon: Award,
        title: "Sertifikat",
        description: "Selesaikan kursus dan dapatkan sertifikat resmi.",
    },
    {
        icon: Crown,
        title: "Akses Premium",
        description: "Kursus eksklusif & fitur komunitas untuk member premium.",
    },
];

export function Features() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {FEATURES.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={feature.title}
                            className="rounded-xl border border-border/40 bg-card/50 p-6 transition-colors hover:border-primary/40"
                        >
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="mb-1 font-semibold">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}