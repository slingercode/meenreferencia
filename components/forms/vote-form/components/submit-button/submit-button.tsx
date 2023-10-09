"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { Loader2, LucideIcon, Send } from "lucide-react";

import { Button } from "~/components/ui/button";

type ButtonVariants = "normal" | "disabled";

const buttonVariants: Record<ButtonVariants, LucideIcon> = {
  normal: Send,
  disabled: Loader2,
};

export const SubmitButton = () => {
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
};
