import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes";
import authRouter from "./routes/auth.routes";
import courseRouter from "./routes/course.routes";
import marketRoute from "./routes/market.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
    cors({
        origin: ["http://localhost:3000", "https://tradewithhaidar.vercel.app"], 
        credentials: true,
    })
);
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API is running" });
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/courses", courseRouter);
app.use("/api/market", marketRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});