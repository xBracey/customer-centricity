import { ColourKey } from "components/ColourKey";
import { Textbox } from "components/Textbox";
import { processText } from "lib/processText";
import React, { useState } from "react";
import { colours } from "theme/colours";
import {
  PageDescription,
  PageHeader,
  PageLabels,
  Score,
  ScoreOverall,
  TestPageContainer,
} from "./index.styled";

const Home = () => {
  const [text, setText] = useState("");

  const processedText = processText(text);

  return (
    <TestPageContainer>
      <PageHeader>Mesg.ai Test - Thomas Brace</PageHeader>
      <PageDescription>
        Enter a paragraph into the input below and see how “customer centric”
        the paragraph is.
      </PageDescription>
      <Textbox text={text} processedText={processedText} setText={setText} />
      <PageLabels>
        <ColourKey
          colour={colours.green100Highlighted}
          label="Seller centric"
        />
        <ColourKey colour={colours.blue100Highlighted} label="Buyer centric" />
      </PageLabels>

      <Score>{`Seller Score: ${processedText.seller.count}`}</Score>
      <Score>{`Buyer Score: ${processedText.buyer.count}`}</Score>
      <ScoreOverall>{`Overall Score: ${
        processedText.seller.count - processedText.buyer.count
      }`}</ScoreOverall>
    </TestPageContainer>
  );
};

export default Home;
