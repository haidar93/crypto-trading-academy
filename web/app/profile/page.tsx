import { getUserProfile } from "@/lib/api";
import { redirect } from "next/navigation";
import { ProfileClient } from "@/components/profile/profile-client";

export default async function ProfilePage() {
    const user = await getUserProfile();

    if (!user) {
        redirect("/login");
    }

    return (
        <main className="container mx-auto max-w-3xl px-4 py-8">
            <ProfileClient user={user} />
        </main>
    );
}