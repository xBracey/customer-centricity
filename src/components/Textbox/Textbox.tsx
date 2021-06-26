import React, { ChangeEvent, useState } from "react";
import { highlightText } from "lib/highlightText";
import {
  TextboxContainer,
  TextboxEditable,
  TextboxOverlay,
} from "./Textbox.styled";
import { IProcessedText } from "lib/processText";

interface ITextbox {
  text: string;
  processedText: IProcessedText;
  setText: (text: string) => void;
}

export const Textbox = ({ text, processedText, setText }: ITextbox) => {
  const [scrollX, setScrollX] = useState(0);

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const highlightedText = highlightText(processedText);

  const onScroll = (event: ChangeEvent<HTMLDivElement>) => {
    setScrollX(event.target.scrollTop);
  };

  return (
    <TextboxContainer>
      <TextboxOverlay
        dangerouslySetInnerHTML={{
          __html: highlightedText,
        }}
        scrollX={scrollX}
      />
      <TextboxEditable onChange={onChange} text={text} onScroll={onScroll} />
    </TextboxContainer>
  );
};
