"use client";

import { useState } from "react";
import { Mail, Calendar, Shield, Crown, User as UserIcon, Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { EditProfileForm } from "@/components/auth/edit-profile-form";
import type { UserProfile } from "@/lib/api";

export function ProfileClient({ user }: { user: UserProfile }) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
                <p className="mt-1 text-muted-foreground">
                    Kelola informasi akun lu di sini
                </p>
            </div>

            {/* Profile Card */}
            <div className="mb-6 overflow-hidden rounded-xl border border-border/40 bg-card/50 backdrop-blur">
                {/* Cover gradient */}
                <div className="h-24 bg-gradient-to-r from-primary/30 via-primary/10 to-blue-500/20" />

                {/* Avatar & name */}
                <div className="px-6 pb-6">
                    <div className="-mt-12 mb-4 flex flex-wrap items-end justify-between gap-4">
                        <div className="flex items-end gap-4">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-blue-500 text-3xl font-bold text-white">
                                {user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="pb-2">
                                <p className="text-2xl font-bold">{user.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        {/* Tombol Edit Profile */}
                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="sm">
                                    <Pencil className="mr-2 h-4 w-4" />
                                    Edit Profile
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Profile</DialogTitle>
                                    <DialogDescription>
                                        Ubah nama lu di sini. Perubahan akan langsung tersimpan.
                                    </DialogDescription>
                                </DialogHeader>
                                <EditProfileForm
                                    currentName={user.name}
                                    onSuccess={() => setIsDialogOpen(false)}
                                />
                            </DialogContent>
                        </Dialog>
                    </div>

                    {user.isPremium ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                            <Crown className="h-3 w-3" /> Premium Member
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                            Free User
                        </span>
                    )}
                </div>
            </div>

            {/* Info Akun */}
            <div className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur">
                <h2 className="mb-4 text-lg font-semibold">Informasi Akun</h2>

                <div className="space-y-4">
                    <InfoRow icon={<UserIcon className="h-4 w-4" />} label="Nama Lengkap" value={user.name} />
                    <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value={user.email} />
                    <InfoRow icon={<Shield className="h-4 w-4" />} label="Role" value={user.role.charAt(0).toUpperCase() + user.role.slice(1)} />
                    <InfoRow
                        icon={<Calendar className="h-4 w-4" />}
                        label="Bergabung Sejak"
                        value={new Date(user.createdAt).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    />
                </div>
            </div>
        </>
    );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string; }) {
    return (
        <div className="flex items-center justify-between border-b border-border/40 pb-3 last:border-0 last:pb-0">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                {icon}
                <span>{label}</span>
            </div>
            <span className="text-sm font-medium">{value}</span>
        </div>
    );
}