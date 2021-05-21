import React from "react";
import styled from "styled-components";
import MyButton from "./MyButton";

const Style = styled.div`
  padding: 2em;
  flex: 1;
  background-color: ${(props) => (props.isPrimary ? "#f3a032" : "white")};
  color: ${(props) => (props.isPrimary ? "white" : "black")};
  box-shadow: 0 0 1em 0em rgb(0 0 0 / 50%);
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const Body = styled.div`
  font-size: 14px;
  color: ${(props) => (props.isPrimary ? "white" : "#7d7d7d")};
`;

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;
  gap: 1em;
`;

const Link = styled.div`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`;

export default function Card({ children, primary, title }) {
  function getBtn() {
    if (primary) {
      return <MyButton>Join now</MyButton>;
    } else {
      return <MyButton color={"#f3a032"}>Join now</MyButton>;
    }
  }

  return (
    <Style isPrimary={primary}>
      <Title>{title}</Title>
      <Body isPrimary={primary}>{children}</Body>
      <ButtonArea>
        {getBtn()}
        <Link>Read more</Link>
      </ButtonArea>
    </Style>
  );
}
