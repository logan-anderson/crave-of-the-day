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
      <form className="flex flex-row my-3 gap-5">
        <div>
          <label htmlFor="year" className="block text-sm font-medium leading-6">
            Year
          </label>
          <select
            id="year"
            name="year"
            className="mt-2 block bg-transparent w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-pink-500 focus:ring-2 focus:ring-pink-300 sm:text-sm sm:leading-6"
          >
            {years.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label
            htmlFor="month"
            className="block text-sm font-medium leading-6"
          >
            Month
          </label>
          <select
            id="month"
            name="month"
            className="mt-2 block bg-transparent  w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset ring-pink-500 focus:ring-2 focus:ring-pink-300 sm:text-sm sm:leading-6"
            defaultValue="Canada"
          >
            {months.map((m) => {
              return (
                <option
                  selected={m.val + 1 === month}
                  key={m.val}
                  value={m.val}
                >
                  {m.label}
                </option>
              );
            })}
          </select>
        </div>
      </form>

      <SnackFeatureList snacks={snacks?.snacks || []} />
    </div>
  );
};

export default SnackListPage;
