"use client";

// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { ListPlus, Loader2, LucideIcon, PlusSquare } from "lucide-react";
import { useEffect } from "react";

import { addContext } from "~/db/db.actions";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const initialState = {
  name: null,
  context: null,
};

type ButtonVariants = "normal" | "disabled";

const buttonVariants: Record<
  ButtonVariants,
  { Icon: LucideIcon; text: string }
> = {
  normal: { Icon: ListPlus, text: "Create" },
  disabled: { Icon: Loader2, text: "Creating ..." },
};

/**
 * This component is required bc the `useFormStatus` doesn't seems to work
 *  on the same lvl that `useFormState`
 */
function CreateButton() {
  const { pending } = useFormStatus();

  const buttonState: ButtonVariants = !pending ? "normal" : "disabled";

  const { Icon, text } = buttonVariants[buttonState];

  return (
    <Button type="submit" disabled={pending}>
      <Icon
        className={`mr-2 h-4 w-4 ${
          buttonState !== "disabled" ? "" : "animate-spin"
        }`}
      />
      {text}
    </Button>
  );
}
export const ContextForm = () => {
  const { toast } = useToast();
  const [state, formAction] = useFormState(addContext, initialState);

  useEffect(() => {
    if (state?.success === true) {
      toast({
        title: "✅ Element created",
      });
    }

    if (state?.error !== undefined) {
      toast({
        variant: "destructive",
        title: "🤖 Failed to create",
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="fixed bottom-0 right-0 z-10 mb-5 mr-5 bg-accent md:bg-transparent"
      >
        <Button variant="ghost" size="icon">
          <PlusSquare className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} aria-describedby={undefined}>
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle>Add context 👀</DialogTitle>
          </DialogHeader>
          <div className="grid gap-5 pb-5 pt-8">
            <Select name="name">
              <SelectTrigger>
                <SelectValue placeholder="Pick a person ..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Diego">Diego</SelectItem>
                  <SelectItem value="Noel">Noel</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Input
              id="context"
              name="context"
              placeholder="Type the context ..."
            />
          </div>
          <DialogFooter className="gap-3">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <CreateButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
