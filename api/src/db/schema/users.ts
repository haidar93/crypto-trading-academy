import { mysqlTable, int, varchar, mysqlEnum, boolean, timestamp } from "drizzle-orm/mysql-core";
import { create } from "node:domain";

export const users = mysqlTable("users", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 100}).notNull(),
    email: varchar("email", {length: 150}).notNull().unique(),
    passwordHash: varchar("password_hash", {length: 255}).notNull(),
    role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
    isPremium: boolean("is_premium").default(false).notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});