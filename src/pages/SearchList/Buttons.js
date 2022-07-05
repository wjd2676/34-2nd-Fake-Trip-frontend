import React from "react";
import styled from "styled-components";

export default function Buttons({ updateOffset, id, clicked, setClicked }) {
  const clickButton = id => {
    setClicked(id);
  };

  return (
    <Button
      onClick={e => {
        clickButton(id);
        updateOffset(id - 1);
      }}
      primary={clicked === id}
    >
      {id}
    </Button>
  );
}

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  border: none;
  background-color: ${props => (props.primary ? "#52ABF3" : "white")};
  margin: 0 5px 0 5px;
  color: ${props => (props.primary ? "white" : "#52ABF3")};
  font-size: 13px;
  &:focus {
    cursor: pointer;
  }
`;
