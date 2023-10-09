"use client";

import { useEffect } from "react";
// @ts-ignore
import { experimental_useFormState as useFormState } from "react-dom";

import { vote } from "~/db/db.actions";
import { Row } from "~/db/db.interfaces";

import { useToast } from "~/components/ui/use-toast";

import { VoteForm } from "../vote-form";
import { initialState } from "../utils/constants";

type VoteFormContainerProps = {
  row: Row;
};

export const VoteFormContainer = ({ row }: VoteFormContainerProps) => {
  const { toast } = useToast();
  const [state, formAction] = useFormState(vote, initialState);

  useEffect(() => {
    if (state?.success === true) {
      toast({
        title: "✅ Vote registered",
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

  return <VoteForm formAction={formAction} row={row} />;
};
