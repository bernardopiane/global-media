import React from "react";
import { Container, Image } from "react-bootstrap";
import styled from "styled-components";

import Logo from "../images/logo.png";
import MyButton from "./MyButton";

const Wrapper = styled.div`
  /* display: flex; */
  padding: 2em 0;
  color: white;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  flex: 1;
  > div {
    margin-left: 0.25em;
  }
`;

const LinkArea = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  justify-content: space-around;
  flex: 2;
  align-items: center;
  color: #b3b3b2;
  > * {
    cursor: pointer;
    transition: color 125ms ease;
    :hover {
      color: #d6d6d5;
    }
    /* margin: 0 0.5em; */
  }
`;

const RightArea = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-items: center;
`;

export default function Navbar() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <LogoArea>
            <Image fluid src={Logo} />
            <div>Global Media</div>
          </LogoArea>
          <LinkArea>
            <div>Adventures</div>
            <div>Publishers</div>
            <div>Agencies</div>
            <div>Company</div>
            <div>Our partners</div>
            <div>Contact</div>
          </LinkArea>
          <RightArea>
            <div>EN</div>
            <MyButton margin>Sign up</MyButton>
          </RightArea>
        </Content>
      </Container>
    </Wrapper>
  );
}
