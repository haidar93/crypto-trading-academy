"use client"; // Wajib pakai ini karena pakai Dialog (ada state interaktif)

import { useState } from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

const PROFIT_IMAGES = [
    "/profit-1.jpeg",
    "/profit-2.jpeg",
    "/profit-3.jpeg",
    "/profit-4.jpeg",
    "/profit-5.jpeg",
    "/profit-6.jpeg",
    "/profit-7.jpeg",
    "/profit-8.jpeg",
    "/profit-9.jpeg",
    "/profit-10.jpeg",
];

export function ProfitGallery() {
    // State buat nyimpen gambar mana yang lagi dibuka
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const duplicatedImages = [...PROFIT_IMAGES, ...PROFIT_IMAGES];

    return (
        <section className="w-full py-12 overflow-hidden">
            <div className="container mx-auto px-4 mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Bukti Profit Member</h2>
                <p className="text-sm text-muted-foreground">
                    Bergabunglah dengan trader lain yang telah meraih profit.
                </p>
            </div>

            <div className="relative flex overflow-hidden w-full group">
                <div className="flex gap-4 animate-marquee w-max">
                    {duplicatedImages.map((src, index) => (
                        // Kita pakai Dialog di sini
                        <Dialog 
                            key={index} 
                            onOpenChange={(open) => {
                                if (!open) setSelectedImage(null); // Reset pas ditutup
                            }}
                        >
                            <DialogTrigger asChild>
                                {/* Div ini jadi tombol pemicu */}
                                <div 
                                    onClick={() => setSelectedImage(src)}
                                    className="relative block w-[280px] h-[350px] md:w-[320px] md:h-[400px] shrink-0 rounded-xl overflow-hidden border border-border/40 bg-card/50 cursor-pointer"
                                >
                                    <Image
                                        src={src}
                                        alt={`Bukti Profit ${index + 1}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </DialogTrigger>
                            
                            {/* Konten yang muncul di pop-up */}
                            <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
                                {selectedImage && (
                                    <div className="relative w-full h-[80vh] rounded-xl overflow-hidden">
                                        <Image
                                            src={selectedImage}
                                            alt="Bukti Profit"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                )}
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    );
}