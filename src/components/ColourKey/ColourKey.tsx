import React from "react";
import {
  ColourKeyContainer,
  ColourCircle,
  ColourLabel,
} from "./ColourKey.styled";

interface IColourKey {
  colour: string;
  label: string;
}

export const ColourKey = ({ colour, label }: IColourKey) => {
  return (
    <ColourKeyContainer>
      <ColourCircle circleColour={colour} />
      <ColourLabel>{label}</ColourLabel>
    </ColourKeyContainer>
  );
};
