import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Wrapper = styled.div`
  padding: 3em 0;
  text-align: center;
  font-size: 18px;
  color: #767676;
`;

const IconArea = styled.div`
  padding-top: 3em;
  display: flex;
  gap: 2em;
  justify-content: center;
  > * {
    font-size: 24px;
    cursor: pointer;
    transition: color 125ms ease;
    :hover {
      color: #5a5a5a;
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        Copyright © 2016 Globalmedia. All Rights Reserved. Designmodo is a
        popular web design blog and shop.
        <IconArea>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
        </IconArea>
      </Container>
    </Wrapper>
  );
}
