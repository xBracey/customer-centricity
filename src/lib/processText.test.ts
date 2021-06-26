import { processText } from "./processText";

const sellerRegex = /(^|\s|\.|\!|\?|\"|\,)(I|I'm|I'll|I've|Me|My|Mine|Myself|We|Us|Our)($|\s|\.|\!|\?|\"|\,)/gi;
const buyerRegex = /(^|\s|\.|\!|\?|\"|\,)(You|Your|Yourself|Yourselves|You've|You're|You'd|You'll)($|\s|\.|\!|\?|\"|\,)/gi;

describe("Test Process Text", () => {
  test("Test with no centricity", () => {
    const test = processText("He is Thomas and he's from Hartlepool");

    expect(test).toEqual({
      text: "He is Thomas and he's from Hartlepool",
      seller: { regex: sellerRegex, count: 0 },
      buyer: { regex: buyerRegex, count: 0 },
    });
  });

  test("Test with only seller centricity", () => {
    const test = processText("I am Thomas and I'm from Hartlepool");

    expect(test).toEqual({
      text: "I am Thomas and I'm from Hartlepool",
      seller: { regex: sellerRegex, count: 2 },
      buyer: { regex: buyerRegex, count: 0 },
    });
  });

  test("Test with only buyer centricity", () => {
    const test = processText("You are Thomas and you're from Hartlepool");

    expect(test).toEqual({
      text: "You are Thomas and you're from Hartlepool",
      seller: { regex: sellerRegex, count: 0 },
      buyer: { regex: buyerRegex, count: 2 },
    });
  });

  test("Test with both seller and buyer centricity", () => {
    const test = processText("I am Thomas and you're from Hartlepool");

    expect(test).toEqual({
      text: "I am Thomas and you're from Hartlepool",
      seller: { regex: sellerRegex, count: 1 },
      buyer: { regex: buyerRegex, count: 1 },
    });
  });

  test("Test end of line", () => {
    const test = processText("Thomas and I");

    expect(test).toEqual({
      text: "Thomas and I",
      seller: { regex: sellerRegex, count: 1 },
      buyer: { regex: buyerRegex, count: 0 },
    });
  });

  test("Test punctuation", () => {
    const test = processText('And I, you? "I" you!');

    expect(test).toEqual({
      text: 'And I, you? "I" you!',
      seller: { regex: sellerRegex, count: 2 },
      buyer: { regex: buyerRegex, count: 2 },
    });
  });

  test("Test consecutive words", () => {
    const test = processText("Thomas, you you and I");

    expect(test).toEqual({
      text: "Thomas, you you and I",
      seller: { regex: sellerRegex, count: 1 },
      buyer: { regex: buyerRegex, count: 2 },
    });
  });
});
