import Head from "next/head";
import { AppProps } from "next/app";

import "../styles/global.scss";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
