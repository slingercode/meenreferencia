"use client";

import { Merge } from "lucide-react";

import { Row } from "~/db/db.interfaces";

import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

import { VoteFormContainer } from "../forms";

type VoteElementProps = {
  row: Row;
};

export const VoteElement = ({ row }: VoteElementProps) => {
  const { name } = row;

  return (
    <Alert key={name}>
      <Merge className="h-4 w-4" />
      <AlertTitle>{name}</AlertTitle>

      <AlertDescription>
        <VoteFormContainer row={row} />
      </AlertDescription>
    </Alert>
  );
};
