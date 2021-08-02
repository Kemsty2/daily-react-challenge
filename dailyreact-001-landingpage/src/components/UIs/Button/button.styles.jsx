import styled, { css } from "styled-components";

const DefaultStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  border-radius: 4px;
  height: 40px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  padding: 10px;
  white-space: nowrap;
  background: #fff;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background: transparent;
    border: 1.5px solid #fff;
    color: #fff;
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const DefaultButton = styled.button`
  ${DefaultStyles}
  ${(props) =>
    props.btntype === "secondary" &&
    css`
      background: transparent;
      color: #fff;
      border: 1.5px solid #fff;

      &:hover {
        background: #fff;
        border: none;
        color: #000;
      }
    `}
  ${(props) =>
    props.btntype === "classic-link" &&
    css`
      background: transparent;
      color: #fff;
    `}
`;
