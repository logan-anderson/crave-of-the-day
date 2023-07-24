"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Oh No!</h1>
      <p>
        Looks like the snack you are looking for does not exist Please{" "}
        <Link className="hover:underline bold text-pink-300" href={"/today"}>
          Check out the latest daily snack
        </Link>
      </p>
    </div>
  );
}
