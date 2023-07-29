import { Header } from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crave of the Day",
  description: "Daily AI generated snack recipes to satisfy your cravings",
  creator: "Logan Anderson",
  applicationName: "Crave of the Day",
  keywords: ["snack", "recipe", "ai", "daily", "crave"],
  twitter: {
    card: "summary_large_image",
    site: "@crave_daily",
    creator: "@crave_daily",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon-32.png" sizes="32x32" />
      <link rel="icon" href="/favicon-128.png" sizes="128x128" />
      <link rel="icon" href="/favicon-180.png" sizes="180x180" />
      <body
        className={`${inter.className} leading-normal tracking-normal text-yellow-300 m-6 bg-cover bg-fixed bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700  via-gray-900 to-gray-950`}
      >
        <div className="h-full min-h-[90vh]">
          <Header />
          {children}
        </div>
        <footer className="mt-9">
          <div className="border-t border-pink-500  mx-auto max-w-7xl pb-12 pt-6 px-6 lg:px-8">
            <div className="mt-4">
              <p className="text-center text-xs leading-5 text-pink-500">
                &copy; 2023. Made with ❤️ by{" "}
                <a
                  href="https://logan.codes"
                  target="_blank"
                  className=" hover:text-pink-400 underline font-bold"
                >
                  Logan Anderson
                </a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
