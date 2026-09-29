import { Request, Response } from "express";
import { eq } from "drizzle-orm";
import { db } from "../db/client";
import { users } from "../db/schema/users";
import { updateProfileSchema } from "../validators/user.validator";

export const getMyProfile = async (req: Request, res: Response) => {
  const userId = req.user!.userId;

  const result = await db.select().from(users).where(eq(users.id, userId));
  const user = result[0];

  if (!user) {
    return res.status(404).json({ error: "User tidak ditemukan" });
  }

  const { passwordHash, ...safeUser } = user;
  res.json(safeUser);
};

export const updateMyProfile = async (req: Request, res: Response) => {
  const parsed = updateProfileSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.issues[0].message });
  }

  if (Object.keys(parsed.data).length === 0) {
    return res.status(400).json({
      error: "Tidak ada data yang bisa diperbarui",
    });
  }

  const userId = req.user!.userId;

  try {
    await db
      .update(users)
      .set(parsed.data)
      .where(eq(users.id, userId));
  } catch (err) {
    console.error("Update error:", err);
    return res.status(500).json({ error: "Gagal memperbarui profil" });
  }

  res.json({ message: "Profil berhasil diperbarui" });
};