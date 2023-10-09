import { getContext } from "~/db/db.getters";

import { ContextElement } from "~/components/context-element";
import { ContextFormContainer } from "~/components/forms";

export const revalidate = 0;

export default async function Comments() {
  const data = await getContext();

  return (
    <main className="md:p-25 mx-auto grid max-w-screen-md gap-4 p-10">
      <ContextFormContainer />

      {data.map(({ id, ...context }) => (
        <ContextElement key={id} context={context} />
      ))}
    </main>
  );
}
