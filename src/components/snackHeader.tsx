import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

export const SnackHeader = ({
  snack,
  date,
}: {
  snack: { name: string; description: string; recipe: string; image: string };
  date: string;
}) => {
  return (
    <div className="mx-auto flex flex-col lg:flex-row">
      <div className="lg:mx-5">
        <span className="font-sans  text-5xl lg:text-7xl mx-auto text-center font-bold">
          {snack.name}
        </span>
        <div className="text-lg">{snack.description}</div>
        <div className="mt-3">
          <Link href={`/snack/${date}/recipe`}>
            <button
              type="button"
              className="inline-flex items-center gap-x-2 rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              See Recipe
              <ArrowRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-3">
        <Image
          loading="eager"
          className="rounded-3xl"
          src={snack.image}
          alt={snack.description}
          width={1024}
          height={1024}
        />
      </div>
    </div>
  );
};
