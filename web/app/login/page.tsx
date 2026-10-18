import Link from "next/link";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
    return (
        <main className="container mx-auto flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Masuk ke akun lu untuk lanjut belajar
                    </p>
                </div>

                {/* Form */}
                <LoginForm />

                {/* Link ke register */}
                <p className="mt-6 text-center text-sm text-muted-foreground">
                    Belum punya akun?{" "}
                    <Link href="/register" className="font-medium text-accent hover:underline">
                        Daftar di sini
                    </Link>
                </p>
            </div>
        </main>
    );
}