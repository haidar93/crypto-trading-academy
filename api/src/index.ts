import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes";
import authRouter from "./routes/auth.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.json());

app.get("/" , (req, res) => {
    res.json({ message: "API is running" });
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});