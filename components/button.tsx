"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Names } from "~/lib/count";

type ButtonProps = {
  name: Names;
};

export function Button({ name }: ButtonProps) {
  const router = useRouter();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const secret = params.get("secret");

  async function handleClick() {
    startTransition(() => router.refresh());
    const body = JSON.stringify({ name });

    await fetch(`/api/count?secret=${secret}`, {
      method: "POST",
      body,
    });
  }

  return (
    <button className="w-40 border rounded-md px-2 py-1" onClick={handleClick}>
      {isPending ? "Pointing!" : "Point!"}
    </button>
  );
}
