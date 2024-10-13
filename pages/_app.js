import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { CarContextProvider } from "@/components/CartContext";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;
    background-color: #eee;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <CarContextProvider>
        <Component {...pageProps} />
      </CarContextProvider>
    </>
  );
}
