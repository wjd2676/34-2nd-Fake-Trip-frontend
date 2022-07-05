import { useState, React, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const SideBar = ({ price }) => {
  const [scrollSideBarPosition, setScrollSideBarPosition] = useState(0);

  const scrollYMoved = () => {
    setScrollSideBarPosition(
      window.scrollY || document.documentElement.scrollTop
    );
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollYMoved);

    return () => window.removeEventListener("scroll", scrollYMoved);
  });

  const whenScrollOverNav = 80;

  const isScrollMoved = scrollSideBarPosition > whenScrollOverNav;

  return (
    <SideBarContainer isScrollMoved={isScrollMoved}>
      <SideBarContent>
        <TextContent>
          <Text>
            <Prefix>1박</Prefix>
            <DefaultPrice>{price.toLocaleString()}</DefaultPrice>
            <Suffix>원~</Suffix>
          </Text>
          <Icon icon={faShareNodes} />
        </TextContent>
        <Link to="choseOption" smooth={true}>
          <StyledButton>객실 선택하기</StyledButton>
        </Link>
      </SideBarContent>
    </SideBarContainer>
  );
};
const SideBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  height: 150px;
  margin-left: 40px;
  position: ${props => (props.isScrollMoved ? "fixed" : "static")};
  top: ${props => (props.isScrollMoved ? "105px" : "none")};
  right: ${props => (props.isScrollMoved ? "50%" : "none")};
  margin-right: ${props => (props.isScrollMoved ? "-530px" : "none")};
`;

const SideBarContent = styled.div`
  width: 320px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e4e5e5;
`;

const TextContent = styled.div`
  width: 270px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const Prefix = styled.div`
  font-size: 13px;
  font-weight: 600;
  margin-right: 5px;
`;

const DefaultPrice = styled.span`
  font-size: 30px;
  font-weight: 700;
`;

const Suffix = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const StyledButton = styled.button`
  width: 270px;
  height: 50px;
  background-color: ${props => props.theme.mainColor};
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export default SideBar;
