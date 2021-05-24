import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import BG from "../images/map.png";

const Wrapper = styled.div`
  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  padding: 6em 0;
`;

const Content = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: white;
  /* margin: 0 10em; */
  margin: 0 10vw;
  padding: 4em 0;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const Info = styled.div`
  color: #b0b0b0;
  font-weight: bold;
`;

const InfoArea = styled.div`
  margin: 1em 0;
`;

// b0b0b0
// 36px 18px

export default function Map() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <InfoArea>
            <Info>Phone</Info>
            <Title>+38 (098) 483 61 77</Title>
          </InfoArea>
          <InfoArea>
            <Info>Email</Info>
            <Title>xxx@xxxxxxxx.com</Title>
          </InfoArea>
          <InfoArea>
            <Info>Skype</Info>
            <Title>xxxxxxxxxxxxxxxx</Title>
          </InfoArea>
        </Content>
      </Container>
    </Wrapper>
  );
}
