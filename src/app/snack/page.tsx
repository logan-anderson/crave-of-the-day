import { SnackFeatureList } from "@/components/snackFeatureList";
import { snackClient } from "@/lib/snackUtils";
import Link from "next/link";
import { notFound } from "next/navigation";

const SnackListPage = async ({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const today = new Date();
  const year = Number(searchParams.year) || today.getUTCFullYear();
  const month = Number(searchParams.month) - 1 || today.getUTCMonth();

  if (typeof year === "object") {
    return notFound();
  }

  // cant get future snacks
  if (Number(year) > today.getUTCFullYear() || month > today.getUTCMonth()) {
    return notFound();
  }
  // Filter out future snacks if we are in the current month and year
  const filter =
    year === today.getUTCFullYear() && month === today.getUTCMonth();

  const snacks = await snackClient.getSnackList({
    month,
    year,
    filter,
  });

  if (!snacks) {
    return notFound();
  }
  const months = await snackClient.getValidMonths({ year, filter: true });

  return (
    <div>
      <Link href="/" className="text-sm font-semibold leading-6 text-gray-50">
        <span aria-hidden="true">←</span>Back
      </Link>
      <h1 className="leading-4 text-lg">Other months</h1>
      <div className="mt-3">
        <ul>
          {months
            .sort((a, b) => {
              return b.val - a.val;
            })
            .map((m, i) => {
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
        month={month}
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
