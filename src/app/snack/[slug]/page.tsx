import fs from "fs/promises";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { notFound } from "next/navigation";

import path from "path";
import Link from "next/link";
import Image from "next/image";

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
    <div className="mx-auto max-w-lg  lg:max-w-5xl w-full h-full flex justify-center flex-col mt-5 lg:mt-[10vh]">
      <div className="mx-auto flex flex-col lg:flex-row">
        <div className="lg:mx-5">
          <span className="font-sans  text-5xl lg:text-7xl mx-auto text-center font-bold">
            {snack.name}
          </span>
          <div className="text-lg">{snack.description}</div>
          <div className="mt-3">
            <Link href={"#"}>
              <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                See Recipe
                <ArrowRightIcon
                  className="-mr-0.5 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-3">
          <Image
            loading="eager"
            className="rounded-3xl"
            src="/img/mango-chili fruit roll-ups.png"
            alt={snack.description}
            width={1024}
            height={1024}
          />
        </div>
      </div>
    </div>
  );
}
