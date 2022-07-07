import styled from "styled-components";

export const MainStyle = styled.div`
  width: 100%;
  /* height: 72px; */
  max-width: 1060px;
  margin: 50px auto;
  background-color: green;
`;

export const MainTitle = styled.div`
  font-size: 36px;
  margin: 15px 0px;
  font-weight: bold;
`;

export const OnOffBtn = styled.div`
  label {
    width: 62px;
    height: 26px;
    background: #c24d4d;
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    .round-slider {
      width: 25px;
      height: 22px;
      border-radius: 50%;
      background: #fff;
      top: 2px;
      left: 2px;
      position: absolute;
    }

    #checkbox-input:checked + .round-slider-container .round-slider {
      transform: translateX(32px);
    }
  }
`;

export const AccomodationInfo = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid black;
  div {
    padding: 20px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  div {
    padding: 20px;
  }
`;

export const SearchBoxDiv = styled.div`
  border-radius: 5px;
  background-color: purple;
  z-index: 1;
  padding: 5px;
`;
