import { Request, Response } from "express";
import { fetchMarketPrices } from "../services/market.service";
import { success } from "zod";
import { fa, tr } from "zod/locales";

export const getMarket = async (req: Request, res: Response) => {
    try {
        const data = await fetchMarketPrices();

        return res.json({
            success: true,
            data,
        });
    } catch (error) {
        console.error("[market] error", error);

        return res.status(502).json({
            success: false,
            message: "Gagal ambil data market dari CoinGekko",
        });
    }
};