export type Article = {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    readTime: string;
    date: string;
    author: string;
};

export const ARTICLES: Article[] = [
    {
        id: "cara-membaca-chart",
        title: "Cara Membaca Chart Crypto untuk Pemula",
        excerpt: "Bingung liat grafik naik turun? Ini panduan dasar membaca candlestick dan trendline.",
        content: "Membaca chart itu seperti membaca peta. Jika kamu tidak tahu arah utara, kamu akan tersesat. Di crypto, arah itu disebut TREND. \n\nPertama, kenali Candlestick. Warna hijau berarti harga naik (bullish), warna merah berarti harga turun (bearish). Panjang ekor (shadow) menunjukkan seberapa jauh harga bergerak dalam periode tersebut.\n\nKedua, tarik garis Trendline. Jika harga terus membuat Higher High (HH) dan Higher Low (HL), berarti tren sedang naik. Jangan melawan tren!",
        category: "Trading 101",
        readTime: "5 menit",
        date: "12 Okt 2026",
        author: "Haidar",
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
    }
];