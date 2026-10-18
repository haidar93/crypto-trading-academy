export type Course = {
    id: string;
    title: string;
    description: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    duration: string;
    lessonsCount: number;
    isPremium: boolean;
    category: string;
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