import { NextRequest, NextResponse } from "next/server";
import { Names, setCount } from "~/lib/count";

export async function POST(req: NextRequest) {
  if (req.url.includes(process.env.SECRET!) === false) {
    return NextResponse.json(false);
  }

  const { name } = (await req.json()) as { name: Names };

  await setCount(name);

  return NextResponse.json(true);
}
