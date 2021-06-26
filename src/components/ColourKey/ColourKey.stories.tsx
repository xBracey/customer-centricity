import React from "react";
import { ColourKey } from "./ColourKey";
import { storiesOf } from "@storybook/react";
import { colours } from "theme/colours";

const story = storiesOf("Components/ColourKey", module);

story.add("ColourKey Component", () => (
  <div style={{ backgroundColor: colours.blue200 }}>
    <ColourKey colour={colours.blue100} label="Blue" />
  </div>
));
