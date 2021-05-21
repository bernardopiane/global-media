import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

import BG from "../images/publisherBG.png";
import SubText from "./SubText";

const Wrapper = styled.div`
  padding: 6em 0;
  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 48px;
  color: white;
  font-weight: bold;
`;

const MyRow = styled(Row)`
  display: flex;
  justify-content: center;
`;

const MediaPlayer = styled.div`
  padding: 3em 0;
`;

export default function Publishers() {
  return (
    <Wrapper>
      <Container>
        <Title>Publishers</Title>
        <MyRow>
          <Col lg={8}>
            <SubText center>
              hat can be definitely said about the contemporary travel websites.
              Whether it is an page for a local hotel or a feature-heavy portal
              that belongs to big holiday company, it fantastic interfaces are
              user magnets.
            </SubText>
          </Col>
        </MyRow>
        <MediaPlayer>MediaPlayer</MediaPlayer>
      </Container>
    </Wrapper>
  );
}
