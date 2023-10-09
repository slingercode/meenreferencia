import { getData } from "~/db/db.getters";

import { VoteElement } from "~/components/vote-element/vote-element";

export const revalidate = 0;

export default async function Home() {
  const rows = await getData();

  return (
    <main className="mx-auto flex h-[85dvh] max-w-screen-sm flex-col items-center justify-center gap-4 p-10 md:p-24">
      {rows.map((row) => (
        <VoteElement key={row.name} row={row} />
      ))}
    </main>
  );
}
