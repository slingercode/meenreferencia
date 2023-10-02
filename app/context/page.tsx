import { getContext } from "~/db/db.getters";

export const revalidate = 0;

export default async function Comments() {
  const data = await getContext();

  return (
    <main className="mx-auto flex h-[100dvh] max-w-screen-md flex-col items-center justify-center gap-4 p-10 md:p-24">
      {data.map((context) => (
        <div key={context.id}>
          <p>{context.name}</p>
          <p>{context.context}</p>
          <p>{JSON.stringify(context.date)}</p>
        </div>
      ))}
    </main>
  );
}
