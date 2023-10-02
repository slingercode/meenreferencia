import { Quote } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { getContext } from "~/db/db.getters";

export const revalidate = 0;

export default async function Comments() {
  const data = await getContext();

  return (
    <main className="md:p-25 mx-auto grid max-w-screen-md gap-4 p-10">
      {data.map((context) => (
        <Alert key={context.id}>
          <Quote className="h-3 w-3" fill="currentColor" />
          <AlertTitle>{context.name}</AlertTitle>

          <AlertDescription>
            <p className="pb-2 italic">{`"${context.context}"`}</p>
            <p className="text-right text-xs text-neutral-500">
              {context.formated}
            </p>
          </AlertDescription>
        </Alert>
      ))}
    </main>
  );
}
