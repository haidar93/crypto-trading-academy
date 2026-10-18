import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background gradient glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/10" />

            <div className="container relative mx-auto grid gap-12 px-4 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
                {/* Kolom kiri: teks */}
                <div className="flex flex-col gap-6">
                    {/* Badge kecil */}
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                        <span className="text-accent">●</span>
                        Learn · Trade · Grow
                    </div>

                    {/* Judul besar */}
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight leading-tight md:text-5xl lg:text-6xl">
                        Jadi Trader yang{" "}
                        <span className="text-accent">Lebih Siap</span>{" "}
                        Bersama{" "}
                        <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                            TradeWithHaidar
                        </span>
                    </h1>

                    {/* Deskripsi */}
                    <p className="max-w-lg text-base text-muted-foreground md:text-lg">
                        Platform pembelajaran crypto dan trading dengan materi terstruktur,
                        harga market real-time, dan komunitas yang mendukung perjalananmu
                        menjadi trader yang lebih baik.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                        <Button
                            size="lg"
                            className="bg-accent text-accent-foreground hover:bg-accent/90"
                            asChild
                        >
                            <Link href="/courses">Mulai Belajar Gratis</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/market">Lihat Market</Link>
                        </Button>
                    </div>
                </div>

                {/* Kolom kanan: ilustrasi */}
                <div className="relative flex items-center justify-center">
                    {/* Glow layer 1: ambient, paling gede, paling blur */}
                    <div className="absolute h-[30rem] w-[30rem] rounded-full bg-primary/30 blur-[100px] md:h-[40rem] md:w-[40rem]" />

                    {/* Glow layer 2: aksen, medium */}
                    <div className="absolute h-[20rem] w-[20rem] rounded-full bg-blue-500/40 blur-[80px] md:h-[28rem] md:w-[28rem]" />

                    {/* Glow layer 3: core, paling fokus */}
                    <div className="absolute h-[14rem] w-[14rem] rounded-full bg-primary/50 blur-[60px] md:h-[20rem] md:w-[20rem]" />

                    {/* Glow bawah: kayak cahaya dari tanah */}
                    <div className="absolute bottom-0 h-32 w-[24rem] rounded-full bg-blue-500/30 blur-[60px] md:h-40 md:w-[32rem]" />

                    {/* Gambar Bitcoin */}
                    <Image
                        src="/bitcoin-hero.png"
                        alt="Bitcoin 3D"
                        width={800}
                        height={800}
                        priority
                        className="relative z-10 h-auto w-80 drop-shadow-2xl md:w-[28rem] lg:w-[36rem]"
                    />
                </div>
            </div>
        </section>
    );
}