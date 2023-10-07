import { sql } from "@vercel/postgres";
import { Context, Row } from "./db.interfaces";

export const getData = async (): Promise<Row[]> => {
  try {
    const { rows } = await sql<Row>`SELECT * FROM meenreferencia ORDER BY name`;

    return rows;
  } catch (error: any) {
    return [];
  }
};

export const getContext = async (): Promise<Context[]> => {
  try {
    const { rows } =
      await sql<Context>`SELECT *, TO_CHAR(date, 'DD Month YYYY') AS formatted FROM meenreferencia_context ORDER BY date DESC`;

    return rows;
  } catch (error: any) {
    return [];
  }
};
