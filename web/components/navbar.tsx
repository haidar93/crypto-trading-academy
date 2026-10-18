"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { LogOut, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { deleteCookie, getCookie } from "@/lib/cookie";

const MENU_ITEMS = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/market", label: "Market" },
    { href: "/articles", label: "Articles" },
];

export function Navbar() {
    const pathname = usePathname() as string;
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // State buat buka/tutup menu HP

    useEffect(() => {
        const token = getCookie("token");
        setIsLoggedIn(!!token);
    }, []);

    function handleLogout() {
        deleteCookie("token");
        setIsLoggedIn(false);
        setIsOpen(false); // Tutup menu kalau logout
        router.push("/");
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo & brand */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo_twh.jpeg"
                        alt="TradeWithHaidar Logo"
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                    />
                    <span className="font-bold text-lg tracking-tight">
                        TradeWith<span className="text-accent">Haidar</span>
                    </span>
                </Link>

                {/* ===== MENU DESKTOP (Sembunyi di HP) ===== */}
                <nav className="hidden md:flex items-center gap-1">
                    {MENU_ITEMS.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "text-accent"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Tombol Kanan Desktop (Sembunyi di HP) */}
                <div className="hidden md:flex items-center gap-2">
                    {isLoggedIn ? (
                        <>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/dashboard">Dashboard</Link>
                            </Button>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/profile">Profile</Link>
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleLogout}
                                className="text-muted-foreground hover:text-destructive"
                            >
                                <LogOut className="h-4 w-4" />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="ghost" size="sm" asChild>
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button
                                size="sm"
                                className="bg-accent text-accent-foreground hover:bg-accent/90"
                                asChild
                            >
                                <Link href="/register">Register</Link>
                            </Button>
                        </>
                    )}
                </div>

                {/* ===== MENU MOBILE (Hamburger) ===== */}
                <div className="md:hidden">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                            <SheetHeader>
                                <SheetTitle className="text-left flex items-center gap-2">
                                    <Image
                                        src="/logo_twh.jpeg"
                                        alt="Logo"
                                        width={24}
                                        height={24}
                                        className="h-6 w-6 object-contain"
                                    />
                                    Menu
                                </SheetTitle>
                            </SheetHeader>
                            
                            <div className="flex flex-col gap-4 mt-8">
                                {/* Link Navigasi Mobile */}
                                <nav className="flex flex-col space-y-2">
                                    {MENU_ITEMS.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)} // Tutup menu pas diklik
                                                className={cn(
                                                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                                    isActive
                                                        ? "bg-accent/10 text-accent"
                                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        );
                                    })}
                                </nav>

                                <div className="h-px w-full bg-border/40 my-2" />

                                {/* Tombol Auth Mobile */}
                                <div className="flex flex-col gap-2">
                                    {isLoggedIn ? (
                                        <>
                                            <Button variant="ghost" className="justify-start" asChild onClick={() => setIsOpen(false)}>
                                                <Link href="/dashboard">Dashboard</Link>
                                            </Button>
                                            <Button variant="ghost" className="justify-start" asChild onClick={() => setIsOpen(false)}>
                                                <Link href="/profile">Profile</Link>
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                className="justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                                                onClick={handleLogout}
                                            >
                                                <LogOut className="mr-2 h-4 w-4" /> Logout
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <Button variant="ghost" className="justify-start" asChild onClick={() => setIsOpen(false)}>
                                                <Link href="/login">Login</Link>
                                            </Button>
                                            <Button
                                                className="bg-accent text-accent-foreground hover:bg-accent/90"
                                                asChild
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <Link href="/register">Register</Link>
                                            </Button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}