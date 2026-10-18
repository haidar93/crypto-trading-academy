import Link from "next/link";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
    return (
        <main className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight">
                        Buat Akun Baru
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Mulai perjalanan belajar trading lu di sini
                    </p>
                </div>

                {/* Form */}
                <RegisterForm />

                {/* Link ke login */}
                <p className="mt-6 text-center text-sm text-muted-foreground">
                    Sudah punya akun?{" "}
                    <Link href="/login" className="font-medium text-accent hover:underline">
                        Login di sini
                    </Link>
                </p>
            </div>
        </main>
    );
}