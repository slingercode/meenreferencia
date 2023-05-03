import { Button } from "~/components/button";
import { getCount } from "~/lib/count";

export default async function Index() {
  const bros = await getCount();

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="grid grid-row-2 sm:grid-cols-2 gap-24 p-10">
        {bros.map((bro) => (
          <div key={bro.name}>
            <p className="text-center text-lg">{bro.name}</p>
            <p className="text-center text-5xl py-4">{bro.count}</p>

            <Button name={bro.name} />
          </div>
        ))}
      </div>
    </main>
  );
}
