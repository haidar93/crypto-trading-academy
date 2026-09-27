import { mysqlTable, int, varchar, timestamp, text } from "drizzle-orm/mysql-core";
import { courses } from "./courses";

export const lessons = mysqlTable("lessons", {
  id: int("id").autoincrement().primaryKey(),
  courseId: int("course_id")
    .notNull()
    .references(() => courses.id),
  title: varchar("title", { length: 150 }).notNull(),
  content: text("content").notNull(),
  orderIndex: int("order_index").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});