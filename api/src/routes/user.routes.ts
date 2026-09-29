import { Router } from "express";
import { getMyProfile, updateMyProfile } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

router.get("/me", authenticate, getMyProfile);
router.patch("/me", authenticate, updateMyProfile);

export default router;