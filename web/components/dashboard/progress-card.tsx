"use client";

import { useState, useEffect } from "react";
import { getEnrolledCourses } from "@/lib/enrollment";

export function ProgressCard() {
    const [count, setCount] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setCount(getEnrolledCourses().length);
    }, []);

    // tampilah skeleton pas loading
    if (!mounted) {
        return <div className="h-[140px] animate-pulse rounded-xl border border-border/40 bg-card/50" />;
    }

    return (
        <div className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur">
            <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                <span className="text-xs font-medium uppercase tracking-wider">
                    Progress Belajar
                </span>
            </div>
            <p className="text-2xl font-bold">{count} Kursus</p>
            <p className="text-sm text-muted-foreground">
                {count === 0
                    ? "Belum ada kursus yang dimulai"
                    : "Terus tingkatkan progres belajarmu!"}
            </p>
        </div>
    );
}