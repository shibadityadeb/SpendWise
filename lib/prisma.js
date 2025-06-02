import { PrismaClient } from "./generated/prisma";

export const db = globalThis.prisma || new PrismaClient(); // <-- add ()

if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}