"use client";

import { Quote } from "lucide-react";

import { Context } from "~/db/db.interfaces";

import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

type ContextElementProps = {
  context: Pick<Context, "context" | "name" | "formatted">;
};

export const ContextElement = ({
  context: { context, name, formatted },
}: ContextElementProps) => {
  return (
    <Alert>
      <Quote className="h-3 w-3" fill="currentColor" />
      <AlertTitle className="italic">{context}</AlertTitle>

      <AlertDescription>
        <p className="text-xs text-neutral-500">{`${name} - ${formatted}`}</p>
      </AlertDescription>
    </Alert>
  );
};
