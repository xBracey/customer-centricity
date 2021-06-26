import styled from "styled-components";
import { colours } from "theme/colours";

export const ButtonOuterContainer = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  background-color: ${colours.blue100};
  border-radius: 5px;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colours.white};
  border: 2px solid ${colours.blue200};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${colours.white};
    color: ${colours.blue100};
  }

  &:active {
    transform: scale(0.92);
  }
`;
