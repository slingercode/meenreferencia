"use server";

import { sql } from "@vercel/postgres";

export async function seed() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS meenreferencia (
        name VARCHAR(10) PRIMARY KEY NOT NULL,
        count INTEGER NOT NULL
      );
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS meenreferencia_context (
        id SERIAL PRIMARY KEY,
        name VARCHAR(10) NOT NULL,
        context TEXT NOT NULL,
        date DATE NOT NULL DEFAULT CURRENT_DATE
      );
    `;

    /** Main seed */
    await Promise.all([
      await sql`INSERT INTO meenreferencia (name, count) VALUES ('Noel', 0)`,
      await sql`INSERT INTO meenreferencia (name, count) VALUES ('Diego', 0)`,
    ]);

    /** Seed context */
    await Promise.all([
      await sql`INSERT INTO meenreferencia_context (name, context) VALUES ('Noel', 'Pero no estamos en mi planeta, o sí?')`,
      await sql`INSERT INTO meenreferencia_context (name, context) VALUES ('Diego', 'Acaso, yo no importo')`,
    ]);

    console.log("Success");
  } catch (error: any) {
    console.log(error);
  }
}
