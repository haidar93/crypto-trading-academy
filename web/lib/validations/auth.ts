import { z } from "zod";

// Schema LOGIN — cuma verifikasi, jangan validate password strength
export const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email wajib diisi")
        .email("Format email tidak valid"),
    password: z
        .string()
        .min(1, "Password wajib diisi"),   // ← cuma min 1, sesuai backend
});

export type LoginInput = z.infer<typeof loginSchema>;

// schema register
export const registerSchema = z.object({
    name: z
        .string()
        .min(2, "Nama minimal 2 karakter"),
    email: z
        .string()
        .min(1, "Email wajib diisi")
        .email("Format email tidak valid"),
    password: z
        .string()
        .min(6, "Password minimal 6 karakter"),
});

export type RegisterInput = z.infer<typeof registerSchema>;

// Schema edit profile
export const updateProfileSchema = z.object({
    name: z
        .string()
        .min(2, "Nama minimal 2 karakter")
        .max(100, "Nama maksimal 100 karakter"),
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;