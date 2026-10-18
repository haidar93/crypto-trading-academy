// ambil nilai cookie berdasarkan nama
export function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;

    const match = document.cookie.match(
        new RegExp("(^|;\\s*)" + name + "=([^;]*)")
    );
    return match ? decodeURIComponent(match[2]) : null;
}

// hapus cookie berdasarkan nama
export function deleteCookie(name: string) {
    document.cookie = `${name}=; path=/; max-age=0`;
}