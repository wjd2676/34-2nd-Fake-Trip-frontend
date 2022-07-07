import React from "react";
import styled from "styled-components";
import * as NS from "./Nav-style";

const Nav = () => {
  return (
    <NS.NavStyle>
      <NS.FirstLine>
        <NS.FirstLineLeft>
          <NS.Logo src="./images/Nav/myfaketrip_logo(real).png" alt="logo" />
          <NS.SearchBoxWrap>
            <NS.SearchBox placeholder="도시나 상품을 검색해보세요" />
          </NS.SearchBoxWrap>
        </NS.FirstLineLeft>
        <NS.FirstLineRight>
          <NS.NormalBtn>파트너등록하기</NS.NormalBtn>
          <NS.NormalBtn>로그인</NS.NormalBtn>
          <NS.BorderBtn>회원가입</NS.BorderBtn>
        </NS.FirstLineRight>
      </NS.FirstLine>
      <NS.SecondLine>
        <NS.Menu>홈</NS.Menu>
        <NS.Menu>항공권</NS.Menu>
        <NS.Menu>투어, 티켓</NS.Menu>
        <NS.Menu>국내숙소</NS.Menu>
        <NS.Menu>호캉스</NS.Menu>
        <NS.Menu>렌터카</NS.Menu>
        <NS.Menu>패키지</NS.Menu>
        <NS.Menu>한인민박</NS.Menu>
        <NS.Menu>키즈</NS.Menu>
        <NS.Menu>할인혜택</NS.Menu>
      </NS.SecondLine>
    </NS.NavStyle>
  );
};

export default Nav;
