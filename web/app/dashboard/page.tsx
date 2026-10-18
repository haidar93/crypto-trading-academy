import { getUserProfile } from "@/lib/api";
import { redirect } from "next/navigation";
import { Crown, User as UserIcon } from "lucide-react";
import { ProgressCard } from "@/components/dashboard/progress-card";

export default async function DashboardPage() {
    const user = await getUserProfile();

    // Double protection: middleware udah protect, tapi tetep cek di sini
    // (misal token expired atau invalid)
    if (!user) {
        redirect("/login");
    }

    return (
        <main className="container mx-auto px-4 py-8">
            {/* Greeting */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">
                    Halo, {user.name} 👋
                </h1>
                <p className="mt-1 text-muted-foreground">
                    Selamat datang kembali di dashboard lu
                </p>
            </div>

            {/* User info card */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur">
                    <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                        <UserIcon className="h-4 w-4" />
                        <span className="text-xs font-medium uppercase tracking-wider">
                            Profile
                        </span>
                    </div>
                    <p className="text-lg font-semibold">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="mt-2 text-xs text-muted-foreground">
                        Bergabung sejak{" "}
                        {new Date(user.createdAt).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                </div>

                {/* Status membership */}
                <div className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur">
                    <div className="mb-3 flex items-center gap-2 text-muted-foreground">
                        <Crown className="h-4 w-4" />
                        <span className="text-xs font-medium uppercase tracking-wider">
                            Status
                        </span>
                    </div>
                    {user.isPremium ? (
                        <>
                            <p className="text-lg font-semibold text-accent">
                                Premium Member
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Akses penuh ke semua kursus
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-lg font-semibold">Free User</p>
                            <p className="text-sm text-muted-foreground">
                                Belum upgrade ke premium
                            </p>
                        </>
                    )}
                </div>

                {/* Placeholder progress */}
                <ProgressCard />
            </div>
        </main>
    );
}