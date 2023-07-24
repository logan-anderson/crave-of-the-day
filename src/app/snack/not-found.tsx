"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1>Oh No!</h1>
      <p>
        Looks like the snack you are looking for does not exist Please{" "}
        <Link className="hover:underline bold text-pink-300 " href={"/today"}>
          Check out the latest daily snack
        </Link>
      </p>
    </div>
  );
}
