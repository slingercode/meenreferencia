import { BroType } from "~/lib/count";
import { Button } from "./button";

type BroProps = {
  bro: BroType;
};

export function Bro({ bro }: BroProps) {
  const { name, count } = bro;

  return (
    <div>
      <p className="text-center text-lg">{name}</p>
      <p className="text-center text-5xl py-4">{count}</p>

      <Button name={name} />
    </div>
  );
}
