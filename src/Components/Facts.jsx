import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import SubText from "./SubText";
import Title from "./Title";

import IMG1 from "../images/1.png";
import IMG2 from "../images/2.png";
import IMG3 from "../images/3.png";
import IMG4 from "../images/4.png";
import IMG5 from "../images/5.png";
import IMG6 from "../images/6.png";

const Wrapper = styled.div`
  padding: 6em 0;
`;

const MyRow = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 0;
`;

const ItemArea = styled.div`
  padding-top: 6em;
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
`;

const Item = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  display: flex;
  min-width: 8em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  /* background-color: red; */
  border-bottom: 3px solid transparent;
  transition: border 125ms ease;
  > div {
    margin: 1.5em 0;
    font-size: 18px;
  }
  :hover {
    border-bottom: 3px solid #f3a032;
  }
`;

export default function Facts() {
  return (
    <Wrapper>
      <Container>
        <Title center>Fact about us</Title>
        <MyRow>
          <Col lg={8}>
            <SubText>
              Whether you are creating for web or print, designing brochures or
              user interfaces, developing a brand identity or creating a logo,
              one of the key elements of a successful project is the typeface
              you are using.
            </SubText>
          </Col>
        </MyRow>
        <ItemArea>
          <Item>
            <Image src={IMG1} fluid />
            <div>Tips for Creating a Great Personal</div>
          </Item>
          <Item>
            <Image src={IMG2} fluid />
            <div>How to Create Checkout Form Using HTML</div>
          </Item>
          <Item>
            <Image src={IMG3} fluid />
            <div>WebAssembly Now in Browser Preview Mode</div>
          </Item>
          <Item>
            <Image src={IMG4} fluid />
            <div>A Design Workflow Comparison</div>
          </Item>
          <Item>
            <Image src={IMG5} fluid />
            <div>A Design Workflow Comparison</div>
          </Item>
          <Item>
            <Image src={IMG6} fluid />
            <div>Adobe Introduces Project Felix, Sensei</div>
          </Item>
        </ItemArea>
      </Container>
    </Wrapper>
  );
}
