import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
// import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
