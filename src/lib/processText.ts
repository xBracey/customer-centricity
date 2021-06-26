import { buyerPronouns, sellerPronouns } from "./pronounts";

export interface IHighlighted {
  regex: RegExp;
  count: number;
}

export interface IProcessedText {
  text: string;
  seller: IHighlighted;
  buyer: IHighlighted;
}

// prettier-ignore
const punctuationRegex = `\\s|\\.|\\!|\\?|\\"|\\,`

export const processText = (text: string): IProcessedText => {
  // prettier-ignore
  const baseRegex = `(^|${punctuationRegex}){{replace}}($|${punctuationRegex})`;

  const sellerRegex = new RegExp(
    baseRegex.replace("{{replace}}", `(${sellerPronouns.join("|")})`),
    "gi"
  );

  const buyerRegex = new RegExp(
    baseRegex.replace("{{replace}}", `(${buyerPronouns.join("|")})`),
    "gi"
  );

  const sellerArray = [];
  const buyerArray = [];
  let regexExec;

  while ((regexExec = sellerRegex.exec(text)) !== null) {
    sellerArray.push(regexExec);
  }

  while ((regexExec = buyerRegex.exec(text)) !== null) {
    buyerArray.push(regexExec);
  }

  return {
    text,
    seller: {
      regex: sellerRegex,
      count: sellerArray.length,
    },
    buyer: {
      regex: buyerRegex,
      count: buyerArray.length,
    },
  };
};
