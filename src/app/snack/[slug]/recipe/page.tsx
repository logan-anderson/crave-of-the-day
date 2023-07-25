import fs from "fs/promises";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import path from "path";

export default async function RecipePage({
  params,
}: {
  params: { slug: string };
}) {
  // params to slug is in format YYYY-MM-DD
  const date = new Date(params.slug);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }
  const snackFilePath = path.join(
    process.cwd(),
    "content",
    "snacks",
    date.getUTCFullYear().toString(),
    `${date.getUTCMonth()}.json`
  );
  if ((await fs.stat(snackFilePath).catch(() => null)) === null) {
    return notFound();
  }
  const data: {
    snacks: {
      name: string;
      description: string;
      image: string;
      recipe: string;
    }[];
  } = JSON.parse(await fs.readFile(snackFilePath, "utf8"));
  const snack = data.snacks[date.getUTCDate() - 1];

  if (!snack) {
    return notFound();
  }

  const recipeFilePath = path.join(
    process.cwd(),
    "content",
    "recipes",
    snack.recipe
  );
  if ((await fs.stat(recipeFilePath).catch(() => null)) === null) {
    return notFound();
  }

  const recipeText = await fs.readFile(recipeFilePath, "utf8");

  return (
    <div className="mx-auto max-w-lg  lg:max-w-5xl w-full h-full flex justify-center flex-col mt-5">
      <div className="mx-auto flex flex-col lg:flex-row">
        <div className="lg:mx-5">
          <span className="font-sans text-3xl lg:text-5xl mx-auto text-center font-bold">
            {snack.name}
          </span>
          <div className="text-lg">{snack.description}</div>
        </div>
        <div className="mt-3">
          <Image
            loading="eager"
            className="rounded-3xl max-w-xs"
            src={snack.image}
            alt={snack.description}
            width={1024}
            height={1024}
          />
        </div>
      </div>
      <div className="mt-5 text-gray-50">
        <ReactMarkdown
          disallowedElements={["img", "image", "iframe"]}
          components={{
            h1: ({ node, ...props }) => (
              <h2 className="text-3xl font-bold text-yellow-300" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h3 className="text-2xl font-bold text-yellow-300" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h4 className="text-xl font-bold text-yellow-300" {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h5 className="text-lg font-bold text-yellow-300" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside" {...props} />
            ),
            p: ({ node, ...props }) => <p className="mt-2" {...props} />,
            strong: ({ node, ...props }) => (
              <strong className="font-bold text-yellow-300" {...props} />
            ),
          }}
        >
          {recipeText}
        </ReactMarkdown>
      </div>
    </div>
  );
}
