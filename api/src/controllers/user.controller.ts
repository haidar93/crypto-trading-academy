import { Request, Response } from "express";
import { db } from "../db/client";
import { users } from "../db/schema/users";

export const getAllUsers = async (req: Request, res: Response) => {
  const allUsers = await db.select().from(users);
  res.json(allUsers);
};