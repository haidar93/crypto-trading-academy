"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { getEnrolledCourses, enrollCourse } from "@/lib/enrollment";
import { CheckCircle2 } from "lucide-react";

export function EnrollButton({ courseId }: { courseId: string }) {
    const [enrolled, setEnrolled] = useState(false);
    const [mounted, setMounted] = useState(false);

    // cek localstorage setelah komponen mount
    useEffect(() => {
        setMounted(true);
        setEnrolled(getEnrolledCourses().includes(courseId));
    }, [courseId]);

    function handleEnroll() {
        enrollCourse(courseId);
        setEnrolled(true);
    }

    // biar gk ada hydration error pas render awal di server
    if (!mounted) {
        return <Button disabled className="w-full md:w-auto">Loading...</Button>;
    }

    return (
        <Button
            onClick={handleEnroll}
            className={
                enrolled
                    ? "w-full bg-green-600 hover:bg-green-700 text-white md:w-auto"
                    : "w-full bg-accent text-accent-foreground hover:bg-accent/90 md:w-auto"
            }
        >
            {enrolled ? (
                <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Lanjutkan Belajar
                </>
            ) : (
                "Mulai Belajar"
            )}
        </Button>
    );
}