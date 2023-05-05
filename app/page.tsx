import { Button } from "~/components/button";
import { getCount } from "~/lib/count";

export default async function Index() {
  const counts = await getCount();

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="grid grid-row-2 sm:grid-cols-2 gap-24 p-10">
        {counts.map(({ name, count }) => (
          <div key={name}>
            <p className="text-center text-lg">{name}</p>
            <p className="text-center text-5xl py-4">{count}</p>

            <Button name={name} />
          </div>
        ))}
      </div>
    </main>
  );
}
