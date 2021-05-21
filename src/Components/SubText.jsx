import React from "react";
import styled from "styled-components";
const Style = styled.div`
  font-size: 18px;
  color: #767676;
  text-align: ${(props) => (props.center ? "center" : "start")};
`;
export default function SubText({ children, center }) {
  return <Style center={center}>{children}</Style>;
}
