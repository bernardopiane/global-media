import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const Styled = styled(Button)`
  color: ${(props) =>
    props.myColor ? "white" : props.isPrimary ? "white" : "black"};
  border-color: transparent;
  background: ${(props) =>
    props.myColor
      ? props.myColor
      : props.isPrimary
      ? "linear-gradient(90deg, rgba(221,64,38,1) 0%, rgba(244,162,50,1) 100%)"
      : "white"};
  padding: 0.75em 3em;
  font-size: 14px;
  border-radius: 50px;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: ${(props) => (props.myMargin ? "1em" : "none")};
  :hover,
  :active,
  :focus {
    border-color: transparent;
    background: ${(props) =>
      props.isPrimary
        ? "linear-gradient(90deg, #f52d0a 0%, #ee921b 100%)"
        : "#cccccc"};
    color: ${(props) => (props.isPrimary ? "white" : "black")};
  }
  :focus,
  :active,
  :focus:active {
    box-shadow: ${(props) =>
      props.isPrimary
        ? "0 0 0 0.25rem #b4581a"
        : "0 0 0 0.25rem rgb(255 255 255 / 50%)"};
  }
`;

export default function MyButton({ children, primary, margin, color }) {
  return (
    <Styled myMargin={margin} isPrimary={primary} myColor={color}>
      {children}
    </Styled>
  );
}
