import "../styles/global.css";
import React, { FunctionComponent } from "react";
import { AppProps } from "next/app";

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
