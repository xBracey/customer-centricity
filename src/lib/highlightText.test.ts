import { highlightText } from "./highlightText";
import { processText } from "./processText";

describe("Test Highlight Text", () => {
  test("Test highlight with both buyer and seller centricity", () => {
    const test = highlightText(
      processText("You are Thomas and I'm from Hartlepool")
    );

    expect(test).toEqual(
      '<span class="buyer">You</span> are Thomas and <span class="seller">I\'m</span> from Hartlepool'
    );
  });

  test("Test highlight with consecutive words", () => {
    const test = highlightText(
      processText("You are Thomas and I I'm from Hartlepool")
    );

    expect(test).toEqual(
      '<span class="buyer">You</span> are Thomas and <span class="seller">I</span> <span class="seller">I\'m</span> from Hartlepool'
    );
  });
});
