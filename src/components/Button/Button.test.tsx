import React from "react";
import "@testing-library/jest-dom";
import { Button } from "./";
import { fireEvent, render, screen } from "@testing-library/react";

const text = "Button";

describe("Test Button Component", () => {
  const onClick = jest.fn();

  const props = {
    text,
    onClick,
  };

  const component = <Button {...props} />;

  describe(`Test props ${JSON.stringify(props)}`, () => {
    it("Renders correctly", () => {
      const { container } = render(component);

      expect(container).toMatchSnapshot();
    });

    it("Onclick is fired", () => {
      render(component);

      fireEvent.click(screen.queryByRole("button"));

      expect(onClick).toBeCalled();
    });
  });
});
