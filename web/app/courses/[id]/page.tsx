import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, PlayCircle, Crown, Lock, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { COURSES, LESSONS_BY_COURSE } from "@/lib/courses-data";
import { EnrollButton } from "@/components/course/enroll-button";

type CourseDetailPageProps = {                                                                          
    params: Promise<{ id: string }>;
};

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
    const { id } = await params;
    const course = COURSES.find((c) => c.id === id);

    // Kalau course gak ketemu, tampilin 404
    if (!course) {
        notFound();
    }

    const lessons = LESSONS_BY_COURSE[course.id] || [];

    return (
        <main className="container mx-auto max-w-4xl px-4 py-8">
            {/* Back link */}
            <Link
                href="/courses"
                className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4" /> Kembali ke Kursus
            </Link>

            {/* Hero Course */}
            <div className="mb-8 rounded-xl border border-border/40 bg-gradient-to-br from-primary/15 to-blue-500/10 p-8">
                <div className="mb-3 flex items-center gap-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <span className="text-xs text-muted-foreground">{course.category}</span>
                    {course.isPremium && (
                        <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Crown className="mr-1 h-3 w-3" /> Premium
                        </Badge>
                    )}
                </div>
                <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
                    {course.title}
                </h1>
                <p className="mb-6 max-w-2xl text-muted-foreground">{course.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                        <PlayCircle className="h-4 w-4" /> {course.lessonsCount} Lessons
                    </div>
                </div>
            </div>

            {/* List Lessons */}
            <div className="rounded-xl border border-border/40 bg-card/50 p-6 backdrop-blur">
                <h2 className="mb-4 text-lg font-semibold">Kurikulum</h2>

                {lessons.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                        Lesson belum tersedia. Segera hadir!
                    </p>
                ) : (
                    <div className="space-y-2">
                        {lessons.map((lesson, index) => (
                            <div
                                key={lesson.id}
                                className="flex items-center justify-between rounded-lg border border-border/40 p-4 transition-colors hover:bg-muted/30"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-xs font-mono text-muted-foreground">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        {lesson.isFree ? (
                                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <Lock className="h-4 w-4 text-muted-foreground" />
                                        )}
                                        <span className="font-medium">{lesson.title}</span>
                                    </div>
                                </div>
                                <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                            </div>
                        ))}
                    </div>
                )}                                              

                {/* CTA */}
                <div className="mt-6 border-t border-border/40 pt-6">
                    <EnrollButton courseId={course.id} />
                </div>
            </div>
        </main>
    );
}