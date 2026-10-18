const COINGECKO_BASE_URL = "https://api.coingecko.com/api/v3";
const COINS = [
    "bitcoin", 
    "ethereum", 
    "solana", 
    "ripple", 
    "dogecoin",
    "pepe",
    "hyperliquid",
    "zcash",
    "worldcoin-wld",
    "bittensor",
    "binancecoin",
    "tether",
    "usd-coin",
    "cardano",
    "avalanche-2",
    "polkadot",
    "chainlink",
    "matic-network",
    "litecoin",
    "shiba-inu"
];

// TTL dalam milliseconds. 30_000 = 30 detik
const CACHE_TTL_MS = 30_000;

// cache: nyimpen data + kapan terakhir di fetch
let cache: {
    data: any;
    timestamp: number;
} | null = null;

export async function fetchMarketPrices() {
    const now = Date.now();

    // 1. cek cache: kalau ada sama masih fresh, langsung return
    if (cache && now - cache.timestamp < CACHE_TTL_MS) {
        console.log("[market] pakai cache");
        return cache.data;
    }

    // 2. cache expired / kosong fetch ulang ke coinGecko
    console.log("[market] fetch ke CoinGecko");
    const url = `${COINGECKO_BASE_URL}/coins/markets?vs_currency=usd&ids=${COINS.join(",")}&order=market_cap_desc`;

    try {
        const res = await fetch(url, {
            headers: {
                "x-cg-demo-api-key": process.env.COINGECKO_API_KEY!,
            },
        });

        if (!res.ok) {
            throw new Error(`CoinGecko error: ${res.status}`);
        }

        const data = await res.json();

        // simpan ke cache
        cache = {
            data,
            timestamp: now,
        };

        return data;
    } catch (error) {
        // kalau fetch gagal tapi masih ada cache lama, pakai cache lama
        if (cache) {
            console.warn("[market] CoinGecko error, pakai cache lama");
            return cache.data;
        }

        // kalau gak ada cache sama sekali, baru lempar error
        throw error;
    }
}