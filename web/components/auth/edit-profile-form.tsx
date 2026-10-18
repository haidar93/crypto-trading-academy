"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getCookie } from "@/lib/cookie";
import { updateProfileSchema, type UpdateProfileInput } from "@/lib/validations/auth";

type EditProfileFormProps = {
    currentName: string;
    onSuccess?: () => void;
};

export function EditProfileForm({ currentName, onSuccess }: EditProfileFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const form = useForm<UpdateProfileInput>({
        resolver: zodResolver(updateProfileSchema),
        mode: "onBlur",
        defaultValues: {
            name: currentName,
        },
    });

    async function onSubmit(values: UpdateProfileInput) {
        setIsLoading(true);
        try {
            const token = getCookie("token");

            if (!token) {
                throw new Error("Sesi habis, silakan login ulang");
            }

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(values),
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || data.message || "Gagal update profile");
            }

            // Refresh data di server tanpa full page reload
            router.refresh();

            // Tutup dialog
            onSuccess?.();
        } catch (err) {
            const message = err instanceof Error ? err.message : "Terjadi kesalahan";
            form.setError("root", { message });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    placeholder="Nama lu"
                                    autoComplete="name"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {form.formState.errors.root && (
                    <div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
                        {form.formState.errors.root.message}
                    </div>
                )}

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Menyimpan...
                        </>
                    ) : (
                        "Simpan Perubahan"
                    )}
                </Button>
            </form>
        </Form>
    );
}