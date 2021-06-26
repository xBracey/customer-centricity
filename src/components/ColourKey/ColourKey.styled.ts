import styled from "styled-components";
import { colours } from "theme/colours";

interface IColourCircle {
  circleColour: string;
}

export const ColourKeyContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
`;

export const ColourCircle = styled.div<IColourCircle>`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.circleColour};
`;

export const ColourLabel = styled.p`
  margin: 0 0 0 12px;
  color: ${colours.white};
  font-size: 16px;
`;
