"use client";

import Link from "next/link";

const Error = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1>Oh No!</h1>
      <p>
        An unexpected error has occurred.
        <div>
          Please{" "}
          <Link className="hover:underline bold text-pink-300" href={"/"}>
            Home Page
          </Link>
        </div>
      </p>
    </div>
  );
};
export default Error;
