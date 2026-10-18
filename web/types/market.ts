// coin data dari coingekko 
export type CoinMarketData = {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    total_volume: number;
    price_change_percentage_24h: number | null;
};

// respone dari backend
export type MarketResponse = {
  success: true;
  data: CoinMarketData[];
};

// metdata coin buat display nama, simbol, warna
export type CoinMeta = {
  id: string;
  nama: string;
  symbol: string;
  color: string;
};