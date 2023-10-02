import { Terminal } from "lucide-react";

import { Form } from "~/components/form";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

import { getData } from "~/db/db.getters";

export const revalidate = 0;

export default async function Home() {
  const rows = await getData();

  return (
    <main className="mx-auto flex h-[85dvh] max-w-screen-sm flex-col items-center justify-center gap-4 p-10 md:p-24">
      {rows.map((row) => (
        <Alert key={row.name}>
          <Terminal className="h-4 w-4" />
          <AlertTitle>{row.name}</AlertTitle>

          <AlertDescription className="">
            <Form name={row.name} count={row.count} />
          </AlertDescription>
        </Alert>
      ))}
    </main>
  );
}
