import styled from "styled-components";

export const NavModalDiv = styled.div`
  width: 326px;
  background-color: white;
  position: absolute;
  top: 50px;
  left: 150px;
  z-index: 100;
  border-radius: 5px;
  padding: 10px;
  div {
    .navSearchTitle {
      font-size: 17px;
      padding: 7px;
      margin-bottom: 10px;
      border-bottom: 2px solid black;
      color: black;
    }
    .navSearchResultBox {
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      .navSearchResultLine {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 17px;
        padding: 12px;
        transition: 0.5s all;
        div {
          margin-left: 5px;
        }
      }
    }
  }
`;
