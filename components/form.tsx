"use client";

// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { ChevronsUpDown, Loader2, LucideIcon, Send } from "lucide-react";
import { useEffect } from "react";

import { Row } from "~/db/db.interfaces";
import { vote } from "~/db/db.actions";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const initialState = {
  name: null,
  context: null,
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

export function Form({ name, count }: { name: Row["name"]; count: number }) {
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

      <div className="flex flex-row items-center justify-between">
        <p className="text-sm [&_p]:leading-relaxed">{`Points: ${count}`}</p>
        <VoteButton />
      </div>

      <Collapsible>
        <div className="flex items-center space-x-4">
          <h4 className="text-sm font-semibold">Write the context?</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="pt-5">
          <Input
            id="context"
            name="context"
            placeholder="Type the context..."
          />
        </CollapsibleContent>
      </Collapsible>
    </form>
  );
}
