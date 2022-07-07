import React, { useState, useEffect } from "react";
import NavModal from "./NavModal";
import * as NS from "./Nav-style";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [locationData, setLocationData] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [navUserInput, setNavUserInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/data/locationMockDate.json")
      .then(res => res.json())
      .then(res => {
        setLocationData(res);
      });
  }, []);

  const openModal = () => {
    setIsShowModal(true);
  };

  const onCloseModal = e => {
    if (!(e.target.closest(".searchBox") === null)) {
      setIsShowModal(true);
    } else {
      setIsShowModal(false);
    }
  };

  const checkNavUserInput = e => {
    setNavUserInput(e.target.value);
  };

  const onClickLoginSignup = () => {
    navigate("/");
  };

  return (
    <NS.NavStyle onClick={onCloseModal}>
      <NS.FirstLine>
        <NS.FirstLineLeft>
          <a href="/">
            <NS.Logo src="./images/Nav/myfaketrip_logo(real).png" alt="logo" />
          </a>
          <NS.SearchBoxWrap onClick={openModal} className="searchBox">
            <NS.SearchBox
              placeholder="도시나 상품을 검색해보세요"
              onChange={checkNavUserInput}
            />
            {isShowModal ? (
              <NavModal
                locationData={locationData}
                setIsShowModal={setIsShowModal}
                navUserInput={navUserInput}
              />
            ) : null}
          </NS.SearchBoxWrap>
        </NS.FirstLineLeft>
        <NS.FirstLineRight>
          <NS.NormalBtn>파트너등록하기</NS.NormalBtn>
          <NS.NormalBtn onClick={onClickLoginSignup}>로그인</NS.NormalBtn>
          <NS.BorderBtn onClick={onClickLoginSignup}>회원가입</NS.BorderBtn>
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
