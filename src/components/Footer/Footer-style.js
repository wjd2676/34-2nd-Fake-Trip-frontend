import styled from "styled-components";

export const FooterStyle = styled.div`
  margin: auto;
  padding: 0px 175px;
  border-top: 1px solid lightgray;
  width: 100%;
  height: 438px;
  position: fixed;
  bottom: 0;
  position: relative;
`;

export const FooterContentDiv = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0px auto;
`;
export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
  padding: 35px 0px;
`;

export const FirstLineFirstBlock = styled.div`
  width: 50%;
  .smallTitle {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    margin: 5px;
  }

  button {
    margin: 20px 0px;
    font-weight: bold;
    background-color: white;
    border: 0.5px solid gray;
    border-radius: 4px;
    width: 112px;
    height: 40px;
  }
`;

export const SmallTitle = styled.div`
  font-size: 18px;
  padding: 10px 0px;
`;
export const FirstLineOtherBlock = styled.div`
  width: calc(13.3%);
  font-size: 14px;
  div {
    margin: 15px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SecondLineLeftText = styled.div`
  display: flex;
  flex-direction: row;
  div {
    margin: 20px;
  }
`;

export const SecondLineRightIcon = styled.div`
  display: flex;
  flex-direction: row;
  div {
    margin: 20px;
  }
`;

export const BottomLine = styled.div`
  p {
    font-size: 12px;
    margin: 3px 0px;
  }

  p:last-child {
    margin: 20px 0px;
  }
`;
