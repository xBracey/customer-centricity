import "typeface-roboto";
import React from "react";
import { GlobalStyles } from "theme/global";

/* eslint-disable-next-line */
const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
