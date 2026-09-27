import { Request, Response } from "express";
import { eq } from "drizzle-orm";
import { db } from "../db/client";
import { courses } from "../db/schema/courses";
import { lessons } from "../db/schema/lessons";
import { number } from "zod";

export const getAllCourses = async (req: Request, res: Response) => {
    const allCourses = await db.select().from(courses);
    res.json(allCourses);
};

export const getCoursesById = async (req: Request, res: Response) => {
    const courseId = Number(req.params.id);

    const courseResult = await db
    .select()
    .from(courses)
    .where(eq(courses.id, courseId));

    const course = courseResult[0];

    if(!course) {
        return res.status(400).json({ error: "Course tidak ditemukan"});
    }

    const courseLessons = await db
    .select()
    .from(lessons)
    .where(eq(lessons.courseId, courseId));

    res.json({
        ...course,
        lessons: courseLessons
    });
}; 