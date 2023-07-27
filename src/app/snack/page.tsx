import { SnackFeatureList } from "@/components/snackFeatureList";
import { SnackHeader } from "@/components/snackHeader";
import { promises as fs } from "fs";
import Link from "next/link";
import { notFound } from "next/navigation";
import path from "path";

const years = [2023];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const SnackListPage = async ({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const year = searchParams.year || new Date().getUTCFullYear();
  const month = Number(searchParams.month) - 1 || new Date().getUTCMonth();
  let snacks:
    | {
        snacks: {
          name: string;
          description: string;
          image: string;
          recipe: string;
        }[];
      }
    | undefined;
  try {
    snacks = JSON.parse(
      await fs.readFile(
        path.join(
          process.cwd(),
          "content",
          "snacks",
          year.toString(),
          `${month}.json`
        ),
        "utf8"
      )
    );
  } catch (error) {
    return notFound();
  }
  const months = (
    await fs.readdir(
      path.join(process.cwd(), "content", "snacks", year.toString())
    )
  )
    .map((x) => {
      return Number(x.replace(".json", ""));
    })
    .map((x) => ({ val: x, label: MONTHS[x] }));

  return (
    <div>
      <Link href="/" className="text-sm font-semibold leading-6 text-gray-50">
        <span aria-hidden="true">←</span>Back
      </Link>
      <h1 className="leading-4 text-lg">Other months</h1>
      <div className="mt-3">
        <ul>
          {months.map((m) => {
            return (
              <li
                key={m.label}
                className={`hover:underline hover:font-bold ${
                  month === m.val ? "underline" : ""
                }`}
              >
                <Link href={`/snack?year=${year}&month=${m.val + 1}`}>
                  {m.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <SnackFeatureList
        snacks={
          snacks?.snacks.map((x, i) => ({
            ...x,
            date: `${year}-${month + 1}-${i + 1}`,
          })) || []
        }
      />
    </div>
  );
};

export default SnackListPage;
