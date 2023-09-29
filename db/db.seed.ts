import { sql } from "@vercel/postgres";

export async function seed() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS meenreferencia (
        name VARCHAR(10) PRIMARY KEY NOT NULL,
        count INTEGER NOT NULL
      );
    `;

    await Promise.all([
      await sql`INSERT INTO meenreferencia (name, count) VALUES ('Noel', 0)`,
      await sql`INSERT INTO meenreferencia (name, count) VALUES ('Diego', 0)`,
    ]);
  } catch (error) {}
}
