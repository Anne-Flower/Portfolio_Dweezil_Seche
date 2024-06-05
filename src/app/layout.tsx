import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Molecules/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className=" general  h-screen w-screen bg-lime-950 "
          // style={{
          //   background:
          //     "linear-gradient(90deg, rgba(43,49,42,1) 56%, rgba(62,85,58,1) 100%)",
          // }}
        >
          {/* <Blur /> */}

          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
