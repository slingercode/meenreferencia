"use client";

import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export const Form = () => {
  return (
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

      <Input id="context" name="context" placeholder="Type the context ..." />
    </div>
  );
};
