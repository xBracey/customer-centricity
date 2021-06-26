import React from "react";
import "@testing-library/jest-dom";
import { ColourKey } from "./";
import { render } from "@testing-library/react";
import { colours } from "theme/colours";

const colour = colours.blue100;
const label = "Test Label";

describe("Test ColourKey Component", () => {
  const props = {
    colour,
    label,
  };

  const component = <ColourKey {...props} />;

  describe(`Test props ${JSON.stringify(props)}`, () => {
    it("Renders correctly", () => {
      const { container } = render(component);

      expect(container).toMatchSnapshot();
    });
  });
});
