import styled from "styled-components";

export const MainStyle = styled.div`
  width: 100%;
  .section {
    max-width: 1060px;
    margin: 50px auto;
    z-index: 1;
  }
  .bottomDiv {
    max-width: 1060px;
    margin: 50px auto;

    .carouselDiv {
      margin: 20px;
    }
  }
  .topDiv {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: rgba(100, 0, 0, 0.4);
    height: 446px;
    z-index: -1;
    overflow: hidden;
    .topBox {
      max-width: 1060px;
      margin: 50px auto;
    }
    video {
      width: 100%;
    }
  }
`;

export const MainTitle = styled.div`
  font-size: 36px;
  margin: 15px 0px;
  padding: 20px 0px;
  font-weight: bold;
  color: white;
`;

export const OnOffBtn = styled.div`
  margin: 30px;
  .ant-switch {
    width: 150px;
    height: 50px;
    .ant-switch-handle {
      width: 100px;
      height: 50px;
      &:before {
        background-image: url("https://cdn.pixabay.com/photo/2014/04/02/16/18/airliner-306889_1280.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;

export const AccomodationInfo = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid lightgray;
  div {
    padding: 20px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  div {
  }
`;

export const SearchBoxDiv = styled.div`
  border-radius: 5px;
  background-color: white;
  color: black;
  box-shadow: 1px 0px 2px;
  z-index: 1;
  padding: 5px 20px;
  font-size: 16px;
  font-weight: bold;
`;

export const LocationSearchDiv = styled.div`
  padding: 0;
  position: relative;
  .searchModal {
    position: absolute;
  }
  input {
    width: 276px;
    height: 48px;
    padding: 14px;
    padding-left: 42px;
    border-style: none;
  }
  margin: 10px;
`;

export const DateSelectDiv = styled.div`
  width: 346px;
  height: 48px;
  background-color: white;
  border-radius: 5px;
  margin: 10px;
`;

export const HeadCountDiv = styled.div`
  width: 246px;
  height: 48px;
  background-color: white;
  border-radius: 5px;
  margin: 10px;
  .ant-dropdown-trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 246px;
    height: 48px;
  }
`;

export const SearchBtn = styled.button`
  width: 91px;
  height: 48px;
  margin: 10px;
  border-radius: 5px;
  border-style: none;
  background-color: skyblue;
  font-weight: bold;
  color: white;
  opacity: 0.6;
  transition: 0.5s all;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const AdvertiseBox = styled.div`
  display: flex;
`;

export const AdvertiseDiv = styled.div`
  width: 526px;
  height: 140px;
  border-radius: 5px;
  background-color: blue;
  margin: 5px;
`;

export const CarouselBox = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  SimpleSlider {
    width: 520px;
    height: 140px;
  }
`;

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeadCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RoundShape = styled.button`
  border: 1px solid skyblue;
  background-color: white;
  color: skyblue;
  border-radius: 50px;
  width: 30px;
  height: 30px;
  margin: 10px;
  transition: 0.5s all;
  &:hover {
    background-color: skyblue;
    color: white;
    opacity: 0.6;
  }
`;

export const Menu = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 3px;
  padding: 15px;
  align-items: center;
  p {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  }
  .setBtn {
    margin-left: 230px;
    margin-top: 15px;
    button {
      background-color: skyblue;
      color: white;
      border-style: none;
      padding: 8px;
      border-radius: 5px;
      font-size: 13px;
      opacity: 0.6;
      transition: 0.5s all;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }
`;
