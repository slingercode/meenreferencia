import { NextRequest, NextResponse } from "next/server";
import { Names, setCount } from "~/lib/count";

export async function POST(req: NextRequest) {
  const { name } = (await req.json()) as { name: Names };

  await setCount(name);

  return NextResponse.json(true);
}
