import "typeface-roboto";
import React from "react";
import { GlobalStyles } from "../src/theme/global";

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
