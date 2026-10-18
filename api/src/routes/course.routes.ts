import { Router } from "express";
import { getAllCourses, getCoursesById } from "../controllers/course.controller";

const router = Router();

router.get("/", getAllCourses);
router.get("/:id", getCoursesById);

export default router;
