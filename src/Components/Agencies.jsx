import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import styled from "styled-components";
import SubText from "./SubText";
import Title from "./Title";

import Tick from "../images/tick.png";

const Wrapper = styled.div`
  background-color: #f6f6f6;
  padding: 6em 0;
`;

const Content = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

const ItemArea = styled.div`
  padding: 3em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2em;
`;

export default function Agencies() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>Agencies</Title>
          <Row>
            <Col lg={7}>
              <SubText>
                Typography is an art combining perspective, technique and
                ingenuity. A great design comes with great typography.
              </SubText>
            </Col>
          </Row>
          <ItemArea>
            <Item>
              <Image src={Tick} fluid />
              <SubText>
                I won’t surprise if we tell you that European e-commerce market
                is hot and that a mobile-friendly website is a key to success in
                that field. Last year, approximately 296 million online shoppers
                spent over 455 billion euros.
              </SubText>
            </Item>
            <Item>
              <Image src={Tick} fluid />
              <SubText>
                You can be the most creative and productive designer in the
                world, but it doesn’t mean anything without paid work. Designers
                can rely on repeat clients but it’s important to keep meeting
                new potential
              </SubText>
            </Item>
            <Item>
              <Image src={Tick} fluid />
              <SubText>
                Do we still need jQuery? After nearly a decade of existence,
                jQuery is the most popular JavaScript library in use. Ten years
                ago, the browser ecosystem was populated with antagonist
                browsers built to minimize
              </SubText>
            </Item>
            <Item>
              <Image src={Tick} fluid />
              <SubText>
                Today is your last day to shop the Cyber Monday sale and get 60%
                off! You can get the most popular tools for website creation at
                discounted prices. We have dropped the price of all our popular
                products
              </SubText>
            </Item>
            <Item>
              <Image src={Tick} fluid />
              <SubText>
                As the holidays approach, everything tends to get a little
                hectic. Stress levels increase, there seems to be more
                unfinished business to take care of than usual. And deadlines,
                which should always be met anyway,
              </SubText>
            </Item>
            <Item>
              <Image src={Tick} fluid />
              <SubText>
                WordPress blogs contain WordPress news, trends, insightful how
                to articles, and tips to help you use WordPress smarter –
                whether you’re a WordPress developer, blogger, or just happen to
                love WordPress.
              </SubText>
            </Item>
          </ItemArea>
        </Content>
      </Container>
    </Wrapper>
  );
}
