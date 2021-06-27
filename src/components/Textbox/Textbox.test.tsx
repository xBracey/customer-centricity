import React from "react";
import "@testing-library/jest-dom";
import { Textbox } from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import { processText } from "lib/processText";

const text = "I test you";
const processedText = processText("I test you");

describe("Test Textbox Component", () => {
  const setText = jest.fn();

  const props = {
    text,
    processedText,
    setText,
  };

  const component = <Textbox {...props} />;

  describe(`Test props ${JSON.stringify(props)}`, () => {
    it("Renders correctly", () => {
      const { container } = render(component);

      expect(container).toMatchSnapshot();
    });

    it("setText event is fired when text changes", () => {
      render(component);

      fireEvent.change(screen.queryByTestId("textbox"), {
        target: { value: "I am you" },
      });

      expect(setText).toHaveBeenCalledWith("I am you");

      setText.mockReset();
    });
  });
});
