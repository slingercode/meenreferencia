"use client";

import { PlusSquare } from "lucide-react";
import { DialogProps } from "@radix-ui/react-dialog";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

import { Form, SubmitButton } from "./components";

type ContextFormProps = {
  formAction: any;
  isOpen: boolean;
  onClose: DialogProps["onOpenChange"];
};

export const ContextForm = ({
  formAction,
  isOpen,
  onClose,
}: ContextFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
          <Form />
          <DialogFooter className="gap-3">
            <DialogClose asChild>
              <Button type="button" variant="ghost">
                Cancel
              </Button>
            </DialogClose>
            <SubmitButton />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
