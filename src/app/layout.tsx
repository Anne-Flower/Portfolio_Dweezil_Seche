"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Molecules/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Portfolio",
//   description: "Portfolio ",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(
    "%c ❀ Coded by Anne-Flore Bernard with love ❀ ",
    "color: #16125c; font-weight: bold; background: #f280df; padding: 10px;"
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" general h-screen w-screen  ">
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
