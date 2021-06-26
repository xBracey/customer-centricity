import React from "react";
import { Button } from "./Button";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const story = storiesOf("Components/Button", module);

story.add("Button Component", () => (
  <Button text={text("Text", "Hello World")} onClick={action("Click")} />
));
