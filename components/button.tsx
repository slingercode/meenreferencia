"use client";

import { Names, setCount } from "~/lib/count";

type ButtonProps = {
  name: Names;
};

export function Button({ name }: ButtonProps) {
  async function handleIncrement() {
    await setCount(name);
  }

  return (
    <button
      className="w-40 border rounded-md px-2 py-1"
      onClick={handleIncrement}
    >
      Point!
    </button>
  );
}
