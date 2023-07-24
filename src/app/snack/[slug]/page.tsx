import fs from "fs/promises";
import { notFound } from "next/navigation";

import path from "path";

export default async function Home({ params }: { params: { slug: string } }) {
  // params to slug is in format YYYY-MM-DD
  const date = new Date(params.slug);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }
  const filePath = path.join(
    process.cwd(),
    "content",
    "snacks",
    date.getUTCFullYear().toString(),
    `${date.getUTCMonth()}.json`
  );
  if ((await fs.stat(filePath).catch(() => null)) === null) {
    return notFound();
  }

  const data: { snacks: { name: string; description: string }[] } = JSON.parse(
    await fs.readFile(filePath, "utf8")
  );
  const snack = data.snacks[date.getUTCDate() - 1];

  return (
    <div className="mx-auto max-w-5xl w-full h-full flex justify-center flex-col mt-5 md:mt-[20vh]">
      <div className="mx-auto">
        <div>
          <span className="font-sans  text-5xl lg:text-7xl mx-auto text-center font-bold">
            {snack.name}
          </span>
          <div className="text-lg">{snack.description}</div>
        </div>
      </div>
    </div>
  );
}
