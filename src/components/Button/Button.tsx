import React, { MouseEvent } from "react";
import { ButtonContainer, ButtonOuterContainer } from "./Button.styled";

interface IButton {
  text: string;
  onClick: (event: MouseEvent) => void;
}

export const Button = ({ text, onClick }: IButton) => (
  <ButtonOuterContainer>
    <ButtonContainer onClick={onClick} role="button">
      {text}
    </ButtonContainer>
  </ButtonOuterContainer>
);
