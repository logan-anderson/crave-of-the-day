import { Metadata, ResolvingMetadata } from "next";

import { SnackHeader } from "@/components/snackHeader";
import fs from "fs/promises";
import { notFound } from "next/navigation";

import path from "path";
import { snackClient } from "@/lib/snackUtils";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const params = [];
  const years = await fs.readdir(path.join(process.cwd(), "content", "snacks"));
  for (const year of years) {
    const months = await fs.readdir(
      path.join(process.cwd(), "content", "snacks", year)
    );
    for (const month of months) {
      const buff = await fs.readFile(
        path.join(process.cwd(), "content", "snacks", year, month)
      );
      const text = buff.toString();
      const days = JSON.parse(text)?.snacks?.map(
        (_: unknown, i: number) => i + 1
      );
      for (const day of days) {
        params.push({ params: { slug: `${year}-${month}-${day}` } });
      }
    }
  }

  return params;
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const date = new Date(params.slug);
  const snack = await snackClient.getSnack(date);
  if (!snack) {
    return notFound();
  }

  return {
    title: snack.name,
    description: snack.description,
    openGraph: {
      url: snack.image,
    },
  };
}

export default async function SnackPage({
  params,
}: {
  params: { slug: string };
}) {
  // params to slug is in format YYYY-MM-DD
  const date = new Date(params.slug);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }
  const today = new Date();
  // cant get future snacks
  if (date > today) {
    return notFound();
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

  const data: {
    snacks: {
      name: string;
      description: string;
      image: string;
      recipe: string;
    }[];
  } = JSON.parse(await fs.readFile(filePath, "utf8"));
  const snack = data.snacks[date.getUTCDate() - 1];

  if (!snack) {
    return notFound();
  }

  return <SnackHeader snack={snack} date={params.slug} />;
}
