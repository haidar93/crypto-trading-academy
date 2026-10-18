import { mysqlTable, int, varchar, mysqlEnum, timestamp, text } from "drizzle-orm/mysql-core";

export const courses = mysqlTable("courses", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 100 }).notNull(),
  description: text("description").notNull(),
  type: mysqlEnum("type", ["free", "premium"]).notNull(),
  thumbnailUrl: varchar("thumbnail_url", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});