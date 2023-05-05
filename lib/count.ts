"use server";

import { sql } from "@vercel/postgres";

export type Names = "Noel" | "Diego";

type CountType = {
  name: Names;
  count: number;
};

export async function getCount() {
  try {
    const { rows } =
      await sql<CountType>`SELECT * from meenreferencia ORDER BY name`;

    return rows;
  } catch (error) {
    return [];
  }
}

export async function setCount(name: Names) {
  try {
    await sql`UPDATE meenreferencia SET count = count + 1 WHERE name = ${name}`;
  } catch (error) {}
}
