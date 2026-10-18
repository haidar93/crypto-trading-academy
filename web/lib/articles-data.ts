export type Article = {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: "Fundamental" | "Trading" | "Psychology";
    readTime: string;
    date: string;
    author: string;
    image: string;
};

export const ARTICLES: Article[] = [
    {
        id: "cara-membaca-chart",
        title: "Cara Membaca Chart Crypto untuk Pemula",
        excerpt: "Bingung liat grafik naik turun? Ini panduan dasar membaca candlestick dan trendline.",
        content: "Membaca chart itu seperti membaca peta. Jika kamu tidak tahu arah utara, kamu akan tersesat. Di crypto, arah itu disebut TREND. \n\nPertama, kenali Candlestick. Warna hijau berarti harga naik (bullish), warna merah berarti harga turun (bearish). Panjang ekor (shadow) menunjukkan seberapa jauh harga bergerak dalam periode tersebut.\n\nKedua, tarik garis Trendline. Jika harga terus membuat Higher High (HH) dan Higher Low (HL), berarti tren sedang naik. Jangan melawan tren!",
        category: "Trading",
        readTime: "5 menit",
        date: "12 Okt 2026",
        author: "Haidar",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "5-kesalahan-trader-pemula",
        title: "5 Kesalahan Fatal Trader Pemula",
        excerpt: "Jangan sampai modal habis di bulan pertama. Hindari 5 jebakan psikologis ini.",
        content: "1. FOMO (Fear of Missing Out): Beli karena takut ketinggalan, padahal harganya udah pucuk.\n\n2. Tidak Pakai Stop Loss: Berharap harga naik lagi padahal udah turun 50%.\n\n3. All-In: Pasang semua modal di satu koin (kayak judi).\n\n4. Ganti-ganti Strategi: Belum juga profit, ganti strategi lagi.\n\n5. Trading Pakai Uang Panas: Pakai uang bayar kos atau uang dapur. Ini bikin mental hancur.",
        category: "Psychology",
        readTime: "7 menit",
        date: "10 Okt 2026",
        author: "Haidar",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "apa-itu-blockchain",
        title: "Apa Itu Blockchain? Penjelasan Santai",
        excerpt: "Teknologi di balik Bitcoin ini sering dianggap rumit. Padahal konsepnya cukup simpel.",
        content: "Bayangkan sebuah buku catatan yang dipegang oleh ribuan orang di seluruh dunia. Setiap kali ada transaksi, semua orang mencatatnya di buku mereka masing-masing.\n\nKalau ada satu orang jahat yang mau ngubah catatan (misal: nambahin saldo palsu), dia harus ngubah catatan di lebih dari 50% buku yang ada di seluruh dunia (51% attack). Itulah kenapa blockchain disebut aman dan terdesentralisasi.\n\nBitcoin adalah aplikasi pertama dari teknologi ini.",
        category: "Fundamental",
        readTime: "4 menit",
        date: "8 Okt 2026",
        author: "Haidar",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "strategi-dollar-cost-averaging",
        title: "Strategi Dollar Cost Averaging (DCA)",
        excerpt: "Cara investasi crypto paling aman untuk pemula yang anti ribet mantau chart tiap hari.",
        content: "DCA adalah strategi membeli aset secara berkala dengan nominal yang sama, tanpa peduli harganya sedang naik atau turun.\n\nContoh: Kamu beli Bitcoin Rp 100.000 setiap hari Senin. Saat harga turun, kamu dapat lebih banyak koin. Saat harga naik, kamu dapat lebih sedikit koin.\n\nDalam jangka panjang, strategi ini meminimalisir risiko terbawa emosi saat pasar sedang panik.",
        category: "Fundamental",
        readTime: "6 menit",
        date: "5 Okt 2026",
        author: "Haidar",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop",
    },
    {
        id: "mengenal-support-resistance",
        title: "Mengenal Support dan Resistance",
        excerpt: "Dua garis ajaib yang bisa bantu kamu nentuin kapan harus beli dan kapan harus jual.",
        content: "Support adalah area harga di mana aset cenderung berhenti turun dan memantul ke atas. Anggap saja ini lantai.\n\nResistance adalah area harga di mana aset cenderung berhenti naik dan berbalik turun. Anggap saja ini atap.\n\nSemakin sering harga menyentuh area tersebut tanpa tembus, semakin kuat area tersebut. Strategi paling dasar adalah beli di Support dan jual di Resistance.",
        category: "Trading",
        readTime: "8 menit",
        date: "1 Okt 2026",
        author: "Haidar",
        image: "https://sharemarketshiksha.weebly.com/uploads/1/2/0/8/120894518/understanding-support-and-resistance-in-forex_orig.jpg",
    },
    {
        id: "mengelola-emosi-trading",
        title: "Cara Mengelola Emosi Saat Trading",
        excerpt: "Trading itu 20% teknikal, 80% psikologi. Ini cara agar kamu gak gampang panik.",
        content: "Pasar crypto buka 24 jam. Kalau kamu terus-terusan mantau chart, mental kamu bakal capek.\n\nBuatlah Trading Plan sebelum masuk pasar. Tentukan kapan beli, kapan jual (Take Profit), dan kapan menyerah (Stop Loss).\n\nSetelah plan dibuat, patuhi! Jangan biarkan emosi mengubah plan yang udah kamu susun dengan kepala dingin. Kalau lagi emosi (habis loss atau habis profit besar), matikan laptop dan istirahat.",
        category: "Psychology",
        readTime: "5 menit",
        date: "28 Sep 2026",
        author: "Haidar",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop",
    },
];