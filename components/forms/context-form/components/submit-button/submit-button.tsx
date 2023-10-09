"use client";

import { ListPlus, Loader2, LucideIcon } from "lucide-react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { Button } from "~/components/ui/button";

type ButtonVariants = "normal" | "disabled";

const buttonVariants: Record<
  ButtonVariants,
  { Icon: LucideIcon; text: string }
> = {
  normal: { Icon: ListPlus, text: "Create" },
  disabled: { Icon: Loader2, text: "Creating ..." },
};

export const SubmitButton = () => {
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
};
