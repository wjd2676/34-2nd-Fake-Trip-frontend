import styled from "styled-components";

export const CardBox = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  white-space: nowrap;
  overflow-x: clip;
  text-overflow: ellipsis;
  width: 138px;
  height: 240px;
  background-color: none;
  color: black;
  margin: 20px 10px;

  p {
    font-size: 12px;
    margin: 8px;
    color: gray;
  }

  div {
    font-size: 14px;
    margin: 5px;
    text-overflow: ellipsis;
  }
`;

export const CardImg = styled.img`
  width: 138px;
  height: 138px;
  border-radius: 5px;
`;
