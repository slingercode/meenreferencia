"use client";

import Link from "next/link";
import { SquareSlash, TextQuote } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 flex w-screen justify-between bg-background p-4">
      <Link href="/">
        <Button variant="ghost" size="icon">
          <SquareSlash className="h-4 w-4" />
        </Button>
      </Link>
      <Link href="/context">
        <Button variant="ghost" size="icon">
          <TextQuote className="h-4 w-4" />
        </Button>
      </Link>
    </nav>
  );
}
