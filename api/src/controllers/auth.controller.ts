import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { db } from "../db/client";
import { users } from "../db/schema/users";
import { registerSchema, loginSchema } from "../validators/auth.validator";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
    const parsed = registerSchema.safeParse(req.body);

    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.issues[0].message });
    }

    const { name, email, password } = parsed.data;

    const exitingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email));

    if (exitingUser.length > 0) {
        return res.status(409).json({ error: "Email sudah terdaftar"});
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await db.insert(users).values({
        name,
        email,
        passwordHash,
    });

    res.status(201).json({ message: "Registrasi berhasil"});
};

export const login = async(req: Request, res: Response) => {
    const parsed = loginSchema.safeParse(req.body);

    if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.issues[0].message });
   }

   const { email, password } = parsed.data;

   const result = await db.select().from(users).where(eq(users.email, email));
   const user = result[0]

   if (!user) {
    return res.status(401).json({ error: "Email atau password salah" });
   }

   const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

   if (!isPasswordValid) {
    return res.status(401).json({ error: "Email atau password salah" });
   }

   const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "7d" }
  );

  res.json({ token });
};