import styled from "styled-components";

export const NavStyle = styled.div`
  margin: auto;
  padding: 0px 175px;
  background-color: transparent;
  z-index: 11 !important;
  height: 123px;
  width: 100%;
  border-bottom: 1px solid white;
  font-size: 15px;
`;

export const FirstLine = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 72px;
  max-width: 1060px;
  margin: 0px auto;
`;

export const Logo = styled.img`
  width: 150px;
  height: 35px;
  margin: auto;
`;

export const SearchBoxWrap = styled.div`
  background-color: transparent;
  border-radius: 5px;

  width: 326px;
  height: 40px;
`;

export const SearchBox = styled.input`
  border-style: none;
  border-radius: 5px;
  background-color: transparent;
  font-size: 17px;
  width: 326px;
  height: 48px;
  padding-left: 48px;
  padding-right: 16px;
  color: black;
  transition: 0.3s all;
  &::placeholder {
    color: white;
    font-size: 15px;
  }
  &:focus {
    outline: none;
    placeholder: none;
    background-color: white;
  }
`;

export const FirstLineLeft = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  a {
    display: flex;
    align-items: center;
  }
`;

export const FirstLineRight = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NormalBtn = styled.button`
  border-style: none;
  background-color: transparent;
  color: white;
  font-size: 15px;
  padding: 0px 10px;
  height: 40px;
  margin: auto;
  transition: 1s all;

  &:hover {
    height: 40px;
    border-radius: 5px;
    background-color: white;
    color: black;
    opacity: 0.6;
  }
`;

export const BorderBtn = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  font-size: 15px;
  margin: 10px;
  padding: 10px 25px;
  transition: 1s all;

  &:hover {
    height: 40px;
    border-radius: 5px;
    background-color: white;
    color: black;
    opacity: 0.6;
  }
`;

export const SecondLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* height: 50px; */
  width: 100%;
  height: 50px;
  max-width: 1060px;
  margin: 0px auto;
`;

export const Menu = styled.div`
  background-color: transparent;
  color: white;
  margin: 0px 10px;
  transition: 1.5s all;

  &:hover {
    padding: 15px;
    border-bottom: 2px solid white;
  }
`;

export const styledComponents = {
  NavStyle,
  FirstLine,
  Logo,
  SearchBox,
  SearchBoxWrap,
  FirstLineLeft,
  FirstLineRight,
  NormalBtn,
  BorderBtn,
  SecondLine,
  Menu,
};
