// ambil semua ID kursus yg udh di enroll
export function getEnrolledCourses(): string[] {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem("enrolled_courses");
    return data ? JSON.parse(data) : [];
}

// tambahain kursus ke daftar enroll
export function enrollCourse(courseID: string) {
    const courses = getEnrolledCourses();
    if (!courses.includes(courseID)) {
        courses.push(courseID);
        localStorage.setItem("enrolled_courses", JSON.stringify(courses));
    }
}

// cek 1 kursus udh di unroll
export function isEnrolled(courseID: string): boolean {
    return getEnrolledCourses().includes(courseID);
}