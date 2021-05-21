import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import SubText from "./SubText";
import Title from "./Title";

const Wrapper = styled.div`
  background-color: #f6f6f6;
  padding: 6em 0;
`;

const ItemArea = styled.div`
  padding-top: 5em;
  display: flex;
  justify-content: center;
  gap: 2em;
  flex-wrap: wrap;
`;

const Item = styled.div`
  padding: 2em;
  min-width: 2em;
  max-height: 5em;
  flex: 1;
  aspect-ratio: 1/1;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.primary ? "#f3a032" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
  font-weight: bold;
  font-size: 36px;
  box-shadow: rgb(0 0 0 / 15%) 0 0 40px 0px;
`;

export default function Working() {
  return (
    <Wrapper>
      <Container>
        <Title center>How are we working?</Title>
        <SubText center>
          That can be definitely said about the contemporary travel websites.
        </SubText>
        <ItemArea>
          <Item primary>CPI</Item>
          <Item>CPA</Item>
          <Item>CPR</Item>
          <Item>CPC</Item>
          <Item>CPM</Item>
          <Item>RSM</Item>
        </ItemArea>
      </Container>
    </Wrapper>
  );
}
