import styled, { css } from "styled-components";
import { colours } from "theme/colours";

interface ITextboxOverlay {
  scrollX: number;
}

export const TextboxContainer = styled.div`
  min-height: 200px;
  width: 100%;
  max-width: 600px;
  position: relative;
  overflow: hidden;
  background-color: ${colours.white};
  margin: 32px 0;
`;

const TextboxShared = css`
  position: absolute;
  height: calc(100% - 14px);
  width: calc(100% - 14px);
  padding: 5px;
  margin: 0;
  font-size: 14px;
  letter-spacing: normal;
  font-family: "Roboto";
`;

export const TextboxEditable = styled.textarea`
  ${TextboxShared}
  z-index: 2;
  color: ${colours.black};
  border: 2px solid ${colours.black};
  background-color: transparent;
  resize: none;
  outline: none;
`;

export const TextboxOverlay = styled.pre<ITextboxOverlay>`
  ${TextboxShared}
  z-index: 1;
  border: 2px solid transparent;
  color: transparent;
  margin-top: -${(props) => props.scrollX}px;
  white-space: pre-wrap;

  span.seller {
    background-color: ${colours.green100Highlighted};
  }

  span.buyer {
    background-color: ${colours.blue100Highlighted};
  }
`;
