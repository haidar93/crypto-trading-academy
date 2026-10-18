export type Course = {
    id: string;
    title: string;
    description: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    lessonsCount: number;
    isPremium: boolean;
    category: string;
    image: string;
};

export type Lesson = {
    id: string;
    title: string;
    duration: string;
    isFree: boolean;
};

export const COURSES: Course[] = [
    {
        id: "crypto-basics",
        title: "Crypto Basics",
        description: "Pahami dasar-dasar cryptocurrency, blockchain, dan cara kerja dompet digital.",
        level: "Beginner",
        duration: "3 jam",
        lessonsCount: 12,
        isPremium: false,
        category: "Fundamental",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "technical-analysis",
        title: "Technical Analysis",
        description: "Pelajari cara membaca chart, support & resistance, dan indikator teknikal.",
        level: "Intermediate",
        duration: "5 jam",
        lessonsCount: 20,
        isPremium: true,
        category: "Trading",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "risk-management",
        title: "Risk Management",
        description: "Strategi mengelola risiko dan modal agar trading lebih aman dan konsisten.",
        level: "Intermediate",
        duration: "2 jam",
        lessonsCount: 8,
        isPremium: true,
        category: "Trading",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "trading-strategy",
        title: "Trading Strategy",
        description: "Bangun strategi trading yang cocok dengan gaya lu sendiri.",
        level: "Advanced",
        duration: "4 jam",
        lessonsCount: 15,
        isPremium: true,
        category: "Trading",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "psychology",
        title: "Trading Psychology",
        description: "Kendalikan emosi dan bangun mental trader yang kuat.",
        level: "Intermediate",
        duration: "2 jam",
        lessonsCount: 10,
        isPremium: false,
        category: "Mindset",
        image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "advanced-strategy",
        title: "Advanced Strategy",
        description: "Strategi trading lanjutan yang efektif untuk level profesional.",
        level: "Advanced",
        duration: "6 jam",
        lessonsCount: 25,
        isPremium: true,
        category: "Trading",
        image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?q=80&w=800&auto=format&fit=crop",
    },
];

export const LESSONS_BY_COURSE: Record<string, Lesson[]> = {
    "crypto-basics": [
        { id: "1", title: "Apa itu Cryptocurrency?", duration: "10 menit", isFree: true },
        { id: "2", title: "Cara Kerja Blockchain", duration: "15 menit", isFree: true },
        { id: "3", title: "Mengenal Dompet Digital (Wallet)", duration: "12 menit", isFree: false },
        { id: "4", title: "Membeli Crypto Pertama Kali", duration: "20 menit", isFree: false },
        { id: "5", title: "Menyimpan Crypto dengan Aman", duration: "18 menit", isFree: false },
    ],
    "technical-analysis": [
        { id: "1", title: "Pengenalan Candlestick", duration: "15 menit", isFree: true },
        { id: "2", title: "Support & Resistance", duration: "20 menit", isFree: true },
        { id: "3", title: "Trendline & Channel", duration: "18 menit", isFree: false },
        { id: "4", title: "Indikator RSI & MACD", duration: "25 menit", isFree: false },
        { id: "5", title: "Pola Chart (Chart Patterns)", duration: "22 menit", isFree: false },
    ],
    "risk-management": [
        { id: "1", title: "Kenapa Risk Management Penting?", duration: "12 menit", isFree: true },
        { id: "2", title: "Menghitung Position Size", duration: "18 menit", isFree: false },
        { id: "3", title: "Stop Loss & Take Profit", duration: "20 menit", isFree: false },
        { id: "4", title: "Risk/Reward Ratio", duration: "15 menit", isFree: false },
    ],
    "trading-strategy": [
        { id: "1", title: "Memilih Gaya Trading", duration: "15 menit", isFree: true },
        { id: "2", title: "Scalping vs Swing Trading", duration: "20 menit", isFree: false },
        { id: "3", title: "Bikin Trading Plan", duration: "25 menit", isFree: false },
        { id: "4", title: "Backtesting Strategy", duration: "22 menit", isFree: false },
    ],
    "psychology": [
        { id: "1", title: "Kenapa Psikologi Penting di Trading?", duration: "12 menit", isFree: true },
        { id: "2", title: "Mengelola FOMO & Greed", duration: "18 menit", isFree: true },
        { id: "3", title: "Mengatasi Fear & Loss Aversion", duration: "15 menit", isFree: false },
        { id: "4", title: "Disiplin Trading", duration: "20 menit", isFree: false },
    ],
    "advanced-strategy": [
        { id: "1", title: "Multi-timeframe Analysis", duration: "20 menit", isFree: true },
        { id: "2", title: "Fibonacci & Elliott Wave", duration: "30 menit", isFree: false },
        { id: "3", title: "Volume Profile Analysis", duration: "25 menit", isFree: false },
        { id: "4", title: "Order Flow & Market Structure", duration: "28 menit", isFree: false },
        { id: "5", title: "Building Robust Trading System", duration: "35 menit", isFree: false },
    ],
};