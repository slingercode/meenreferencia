import { Bro } from "~/components/bro";
import { getCount } from "~/lib/count";

export default async function Index() {
  const bros = await getCount();

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="grid grid-cols-2 gap-24 p-10">
        {bros.map((bro) => (
          <Bro key={bro.name} bro={bro} />
        ))}
      </div>
    </main>
  );
}
