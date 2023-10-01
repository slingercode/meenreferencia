"use client";

// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Loader2, LucideIcon, Send } from "lucide-react";

import { Row } from "~/db/db.interfaces";
import { vote } from "~/db/db.actions";

import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useEffect } from "react";

const initialState = {
  name: null,
};

type ButtonVariants = "normal" | "disabled";

const buttonVariants: Record<ButtonVariants, LucideIcon> = {
  normal: Send,
  disabled: Loader2,
};

/**
 * This component is required bc the `useFormStatus` doesn't seems to work
 *  on the same lvl that `useFormState`
 */
function VoteButton() {
  const { pending } = useFormStatus();

  const buttonState: ButtonVariants = !pending ? "normal" : "disabled";

  const Icon = buttonVariants[buttonState];

  return (
    <Button type="submit" disabled={pending} variant="ghost" size="icon">
      <Icon
        className={`h-4 w-4 ${
          buttonState !== "disabled" ? "" : "animate-spin"
        }`}
      />
    </Button>
  );
}

export function Form({ name }: { name: Row["name"] }) {
  const { toast } = useToast();
  const [state, formAction] = useFormState(vote, initialState);

  useEffect(() => {
    if (state?.error !== undefined) {
      toast({
        variant: "destructive",
        title: "🤖 Failed to create",
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <form action={formAction}>
      <input type="hidden" id="name" name="name" value={name} />
      <VoteButton />
    </form>
  );
}
