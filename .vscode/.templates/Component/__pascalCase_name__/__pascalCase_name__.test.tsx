import React from "react";
import "@testing-library/jest-dom";
import { {{ pascalCase name }} } from "./";
import { render } from "@testing-library/react";

describe("Test {{ pascalCase name }} Component", () => {
  const props = {};

  const component = <{{ pascalCase name }} {...props} />;

  describe(`Test props ${JSON.stringify(props)}`, () => {
    it("Renders correctly", () => {
      const { container } = render(component);
  
      expect(container).toMatchSnapshot();
    });
  })
});
