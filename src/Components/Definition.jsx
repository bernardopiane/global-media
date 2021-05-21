import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";
import Title from "./Title";
import SubText from "./SubText";
import Circle from "../images/circle.png";

const Wrapper = styled.div`
  padding: 10em 0 2em 0;
`;

const ItemArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 5em 0;
  gap: 5em;
`;

const Item = styled.div`
  flex: 1;
  > img {
    margin-bottom: 2em;
  }
`;

export default function Definition() {
  return (
    <Wrapper>
      <Container>
        <Title center>Why we?</Title>
        <SubText center>
          That can be definitely said about the contemporary travel websites.
        </SubText>
        <ItemArea>
          <Item>
            <Image src={Circle} fluid />
            <SubText>
              As the holidays approach, everything tends to get a little hectic.
              Stress levels increase, there seems to be more unfinished business
              to take care of than usual. And deadlines, which should always be
              met anyway,
            </SubText>
          </Item>
          <Item>
            <Image src={Circle} fluid />
            <SubText>
              Even with jQuery’s popularity there’s no need to rely on a JS
              library for every project. Classic JavaScript works in all major
              browsers and it’s really all you need to build dynamic interfaces.
            </SubText>
          </Item>
          <Item>
            <Image src={Circle} fluid />
            <SubText>
              On the first day of Christmas my true love gave to me … a MacBook
              Pro with Creative Suite. Well, that’s not exactly how the holiday
              jingle goes, but if you are a web designer this list of gift
              suggestions is for you.
            </SubText>
          </Item>
          <Item>
            <Image src={Circle} fluid />
            <SubText>
              When custom label printer Consolidated Labels redesigned its
              website, their end goal was to increase customer conversions. Yet
              they liked their site, and didn’t see the need to make many
              changes.
            </SubText>
          </Item>
        </ItemArea>
      </Container>
    </Wrapper>
  );
}
