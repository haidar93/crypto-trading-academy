import { CourseCard } from "@/components/course-card";
import { COURSES } from "@/lib/courses-data";

export default function CoursesPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Kursus & Materi</h1>
                <p className="mt-1 text-muted-foreground">
                    Mulai belajar dari level dasar sampai mahir.
                </p>
            </div>

            {/* Grid Courses */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {COURSES.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </main>
    );
}