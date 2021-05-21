import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import BG from "../images/bg.png";
import Card from "./Card";
import MyButton from "./MyButton";
import Navbar from "./Navbar";

const Wrapper = styled.div`
  background-image: url(${BG});
  background-size: cover;
  background-position: center;
`;

const Heading = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: white;
  max-width: 600px;
  margin-bottom: 0.5em;
`;

const MyContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10em 0;
`;

const CardArea = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  gap: 2em;
  position: relative;
  top: 50px;
`;

export default function Hero() {
  return (
    <Wrapper>
      <Navbar />
      <MyContainer>
        <Heading>Global agency online marketing</Heading>
        <div>
          <MyButton primary>Sign up right now</MyButton>
        </div>
      </MyContainer>
      <Container>
        <CardArea>
          <Card primary title={"Advertisers"}>
            That can be definitely said about the contemporary travel websites.
          </Card>
          <Card title={"Publishers"}>
            That can be definitely said about the contemporary travel websites.
          </Card>
          <Card title={"Agencies"}>
            That can be definitely said about the contemporary travel websites.
          </Card>
        </CardArea>
      </Container>
    </Wrapper>
  );
}
