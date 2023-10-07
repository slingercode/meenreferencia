import { Quote } from "lucide-react";

import { ContextForm } from "~/components/context-form";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

import { getContext } from "~/db/db.getters";

export const revalidate = 0;

export default async function Comments() {
  const data = await getContext();

  return (
    <main className="md:p-25 mx-auto grid max-w-screen-md gap-4 p-10">
      <ContextForm />

      {data.map(({ id, name, context, formatted }) => (
        <Alert key={id}>
          <Quote className="h-3 w-3" fill="currentColor" />
          <AlertTitle className="italic">{context}</AlertTitle>

          <AlertDescription>
            <p className="text-xs text-neutral-500">
              {`${name} - ${formatted}`}
            </p>
          </AlertDescription>
        </Alert>
      ))}
    </main>
  );
}
