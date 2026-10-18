import Link from "next/link";
import Image from "next/image";
import { Clock, PlayCircle, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/lib/courses-data";

export function CourseCard({ course }: { course: Course }) {
    return (
        <Link href={`/courses/${course.id}`}>
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border/40 bg-card/50 backdrop-blur transition-all hover:border-primary/40 hover:bg-card/80">
                
                {/* Gambar Course */}
                <div className="relative h-48 w-full overflow-hidden bg-muted">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Badge Premium di atas gambar */}
                    {course.isPremium && (
                        <div className="absolute right-3 top-3 rounded-full bg-accent/90 p-1.5 text-accent-foreground backdrop-blur-sm">
                            <Crown className="h-4 w-4" />
                        </div>
                    )}
                </div>

                {/* Konten Course */}
                <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                            {course.level}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{course.category}</span>
                    </div>

                    <h3 className="mb-2 text-lg font-semibold tracking-tight group-hover:text-primary transition-colors line-clamp-1">
                        {course.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground flex-1">
                        {course.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/40 pt-3">
                        <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            {course.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <PlayCircle className="h-3.5 w-3.5" />
                            {course.lessonsCount} Lessons
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}