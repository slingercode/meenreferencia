"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

/** The first param is the prevState */
export async function vote(_: any, formData: FormData) {
  try {
    const name = (formData.get("name") ?? "").toString();

    await sql`UPDATE meenreferencia SET count = count + 1 WHERE name = ${name}`;

    return revalidatePath("/");
  } catch (error) {
    return { message: "Failed to create" };
  }
}
