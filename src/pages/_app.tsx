import "@/app/globals.css";

import type { AppProps } from "next/app";
import { CustomCursorProvider } from "@/app/context/customCursorContext";
import CursorStyle from "@/components/Atomes/Cursor/CursorStyle/cursorStyle";

export default function App({ Component, pageProps }: AppProps) {
  console.log(
    "%c ❀ Coded by Anne-Flore Bernard with love ❀ ",
    "color: #16125c; font-weight: bold; background: #f280df; padding: 10px;"
  );
  return (
    <CustomCursorProvider>
      <CursorStyle />
      <Component {...pageProps} />
    </CustomCursorProvider>
  );
}
