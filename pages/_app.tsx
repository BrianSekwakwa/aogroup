import "../styles/globals.css";
import type { AppProps } from "next/app";

// Global State using CONTEXT API
import ExampleState from "../context/ExampleStateFolder/ExampleState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ExampleState>
        <Component {...pageProps} />
      </ExampleState>
    </>
  );
}

export default MyApp;
