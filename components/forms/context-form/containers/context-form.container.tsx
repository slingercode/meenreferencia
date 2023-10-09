"use client";

import { useEffect, useState } from "react";
// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";
import { DialogProps } from "@radix-ui/react-dialog";

import { addContext } from "~/db/db.actions";

import { useToast } from "~/components/ui/use-toast";

import { ContextForm } from "../context-form";
import { initialState } from "../utils/constants";

export const ContextFormContainer = () => {
  const { toast } = useToast();
  const [state, formAction] = useFormState(addContext, initialState);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (state?.success === true) {
      toast({
        title: "✅ Element created",
      });

      setIsOpen(false);
    }

    if (state?.error !== undefined) {
      toast({
        variant: "destructive",
        title: "🤖 Failed to create",
        description: state.error,
      });
    }
  }, [state, toast]);

  const onClose: DialogProps["onOpenChange"] = (value) => {
    setIsOpen(value);
  };

  return (
    <ContextForm formAction={formAction} isOpen={isOpen} onClose={onClose} />
  );
};
