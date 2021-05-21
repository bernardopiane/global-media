import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";

import Phone from "../images/iphone 6s.png";
import AppStore from "../images/appstore.png";
import PlayStore from "../images/playstore.png";
import SubText from "./SubText";
import Title from "./Title";

const Wrapper = styled.div`
  padding: 6em 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleArea = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1em;
`;

const MyImage = styled(Image)`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const MyLink = styled.div`
  text-transform: uppercase;
  font-size: 14px;
  color: #f3a032;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`;

const Footer = styled.div`
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
`;

export default function Advertisers() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <TitleArea>
            <Title>Advertisers</Title>
            <Row>
              <Col xs={12} lg={8}>
                <SubText>
                  hat can be definitely said about the contemporary travel
                  websites. Whether it is an page for a local hotel or a
                  feature-heavy portal that belongs to big holiday company, it
                  fantastic interfaces are user magnets.
                </SubText>
              </Col>
            </Row>
            <MyLink>Read more</MyLink>
            <Footer>
              <Image src={AppStore} fluid />
              <Image src={PlayStore} fluid />
            </Footer>
          </TitleArea>
          <MyImage src={Phone} fluid />
        </Content>
      </Container>
    </Wrapper>
  );
}
