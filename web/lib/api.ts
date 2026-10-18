import { cookies } from "next/headers";

export type UserProfile = {
    id: number;
    name: string;
    email: string;
    role: string;
    isPremium: boolean;
    createdAt: string;
};

export async function getUserProfile(): Promise<UserProfile | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if(!token) {
        return null;
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                cache: "no-store",
            }
        );

        if (!res.ok) {
            return null;
        }

        return res.json();
    } catch (error) {
        console.error("[getUserProfile] error:", error);
        return null;
    }
}