import React, { useState } from "react";
import { Textbox } from "./Textbox";
import { storiesOf } from "@storybook/react";
import { processText } from "lib/processText";

const story = storiesOf("Components/Textbox", module);

story.add("Textbox Component", () => {
  const [text, setText] = useState("");

  const processedText = processText(text);

  return (
    <Textbox text={text} processedText={processedText} setText={setText} />
  );
});
