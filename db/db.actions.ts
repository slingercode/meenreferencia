"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

/** The first param is the prevState */
export async function vote(_: any, formData: FormData) {
  try {
    const name = (formData.get("name") ?? "").toString();

    if (name === "") {
      throw new Error("Invalid formData");
    }

    await sql`UPDATE meenreferencia SET count = count + 1 WHERE name = ${name}`;

    const context = (formData.get("context") ?? "").toString();

    if (context !== "") {
      await sql`INSERT INTO meenreferencia_context (name, context) VALUES (${name}, ${context})`;
      revalidatePath("/context");
    }

    return revalidatePath("/");
  } catch (error: any) {
    const { message = "There was a error" } = error || {};

    return { error: message };
  }
}
