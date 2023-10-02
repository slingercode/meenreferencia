import Link from "next/link";
import { ClipboardList, SquareSlash } from "lucide-react";

import { Button } from "./ui/button";

export default function Nav() {
  return (
    <nav className="sticky top-0 flex w-screen justify-between p-4">
      <Link href="/">
        <Button variant="ghost" size="icon">
          <SquareSlash className="h-4 w-4" />
        </Button>
      </Link>
      <Link href="/context">
        <Button variant="ghost" size="icon">
          <ClipboardList className="h-4 w-4" />
        </Button>
      </Link>
    </nav>
  );
}
