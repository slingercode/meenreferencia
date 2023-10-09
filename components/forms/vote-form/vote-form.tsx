"use client";

import { ChevronsUpDown } from "lucide-react";

import { Row } from "~/db/db.interfaces";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

import { SubmitButton } from "./components";

type VoteFormProps = {
  row: Row;
  formAction: any;
};

export function VoteForm({ formAction, row: { name, count } }: VoteFormProps) {
  return (
    <form action={formAction} className="flex items-center justify-between ">
      <input type="hidden" id="name" name="name" value={name} />

      <div className="w-10/12">
        <p className="text-sm">{`Points: ${count}`}</p>

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
          <CollapsibleContent className="pt-2">
            <Input
              id="context"
              name="context"
              placeholder="Type the context ..."
            />
          </CollapsibleContent>
        </Collapsible>
      </div>

      <SubmitButton />
    </form>
  );
}
