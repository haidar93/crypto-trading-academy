import Link from "next/link";
import { Clock, PlayCircle, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/lib/courses-data";

export function CourseCard({ course }: { course: Course }) {
    return (
        <Link href={`/courses/${course.id}`}>
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/40 bg-card/50 backdrop-blur transition-all hover:border-primary/40 hover:bg-card/80">
                {/* Placeholder Gambar */}
                <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-primary/20 to-blue-500/10">
                    <span className="text-4xl font-bold text-primary/50 group-hover:text-primary/70 transition-colors">
                        {course.title.charAt(0)}
                    </span>
                    {course.isPremium && (
                        <div className="absolute right-3 top-3 rounded-full bg-accent/90 p-1.5 text-accent-foreground">
                            <Crown className="h-4 w-4" />
                        </div>
                    )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                            {course.level}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{course.category}</span>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                        {course.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground flex-1">
                        {course.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                            <PlayCircle className="h-3.5 w-3.5" />
                            {course.lessonsCount} Lessons
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}