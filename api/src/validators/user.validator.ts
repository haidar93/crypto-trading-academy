import { z } from "zod";

export const updateProfileSchema = z.object({
    name: z.string().min(2, "Nama minimal 2 karakter").optional(),
});

export type updateProfileSchema = z.infer<typeof updateProfileSchema>;