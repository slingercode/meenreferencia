import { sql } from "@vercel/postgres";
import { Row } from "./db.interfaces";

export const getData = async (): Promise<Row[]> => {
  const { rows } = await sql<Row>`SELECT * from meenreferencia ORDER BY name`;

  return rows;
};
