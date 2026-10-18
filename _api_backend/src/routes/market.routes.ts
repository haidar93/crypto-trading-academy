import { Router } from "express";
import { getMarket } from "../controllers/market.controller";

const router = Router();

router.get("/", getMarket);

export default router;