import { sql } from "@vercel/postgres";
import { Context, Row } from "./db.interfaces";

export const getData = async (): Promise<Row[]> => {
  try {
    const { rows } = await sql<Row>`SELECT * from meenreferencia ORDER BY name`;

    return rows;
  } catch (error: any) {
    return [];
  }
};

export const getContext = async (): Promise<Context[]> => {
  try {
    const { rows } =
      await sql<Context>`SELECT * from meenreferencia_context ORDER BY date ASC`;

    return rows;
  } catch (error: any) {
    return [];
  }
};
