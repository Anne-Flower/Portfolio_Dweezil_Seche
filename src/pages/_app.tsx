import "@/app/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  console.log(
    "%c ❀ Coded by Anne-Flore Bernard with love ❀ ",
    "color: #16125c; font-weight: bold; background: #f280df; padding: 10px;"
  );
  return <Component {...pageProps} />;
}
