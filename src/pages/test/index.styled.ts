import styled from "styled-components";
import { colours } from "theme/colours";

export const TestPageContainer = styled.div`
  background: ${colours.orangeBackground};
  min-height: calc(100vh - 128px);
  width: calc(100vw - 64px);
  display: flex;
  padding: 64px 32px;
  flex-direction: column;
  align-items: center;
`;

export const PageHeader = styled.h1`
  font-weight: 500;
  margin: 32px 0;
  text-align: center;
  color: ${colours.white};
`;

export const PageDescription = styled.p`
  margin: 16px 0;
  text-align: center;
  width: 400px;
  color: ${colours.white};
`;

export const PageLabels = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const Score = styled.p`
  margin: 8px 0;
  text-align: center;
  color: ${colours.white};
  font-weight: 500;
  font-size: 18px;
`;

export const ScoreOverall = styled.p`
  margin: 12px 0;
  text-align: center;
  color: ${colours.white};
  font-weight: 600;
  font-size: 20px;
`;
