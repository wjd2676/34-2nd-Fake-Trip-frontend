import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";

const whenScrollOverHeader = 800;

const ProductNav = () => {
  const [scrollNavPosition, setScrollNavPosition] = useState(0);

  const scrollYMoved = () => {
    setScrollNavPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollYMoved);

    return () => window.removeEventListener("scroll", scrollYMoved);
  });

  const isScrollMoved = scrollNavPosition > whenScrollOverHeader;

  return (
    isScrollMoved && (
      <Nav>
        <NavContents>
          <Link to="choseOption" smooth={true}>
            <Content>객실비교</Content>
          </Link>
          <Link to="productInfo" smooth={true}>
            <Content>숙소 소개</Content>
          </Link>
          <Link to="useInfo" smooth={true}>
            <Content>이용 안내</Content>
          </Link>
          <Link to="refundInfo" smooth={true}>
            <Content>환불 규정</Content>
          </Link>
        </NavContents>
      </Nav>
    )
  );
};

export default ProductNav;

const FadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

const Nav = styled.div`
  width: 100%;
  height: 40px;
  background-color: white;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  z-index: 10;
  border-bottom: gray 1px solid;
  position: fixed;

  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-name: ${FadeIn};
  animation-fill-mode: forwards;
`;

const NavContents = styled.div`
  display: flex;
  margin-left: 200px;
  font-size: 22px;
`;

const Content = styled.button`
  margin: 0 30px;
  border: none;
  background-color: white;
  &: hover {
    border-bottom: 1px solid black;
    cursor: pointer;
  }
`;
