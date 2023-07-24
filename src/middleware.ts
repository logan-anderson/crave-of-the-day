import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const today = new Date();
  return NextResponse.redirect(
    new URL(
      `/snack/${today.getUTCFullYear()}-${
        today.getUTCMonth() + 1
      }-${today.getUTCDate()}`,
      request.url
    )
  );
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/today",
};
