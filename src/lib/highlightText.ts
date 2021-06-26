import { IProcessedText } from "./processText";

export const highlightText = (processedText: IProcessedText): string => {
  let highlightedText = processedText.text;

  highlightedText = highlightedText.replace(
    processedText.seller.regex,
    '$1<span class="seller">$2</span>$3'
  );

  highlightedText = highlightedText.replace(
    processedText.buyer.regex,
    '$1<span class="buyer">$2</span>$3'
  );

  return highlightedText;
};
