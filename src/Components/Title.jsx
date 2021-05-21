import React from "react";
import styled from "styled-components";

const Style = styled.div`
  font-size: 48px;
  font-weight: bold;
  text-align: ${(props) => (props.center ? "center" : "start")};
`;

export default function Title({ children, center }) {
  return <Style center={center}>{children}</Style>;
}