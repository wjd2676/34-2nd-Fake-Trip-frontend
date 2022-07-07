import React from "react";
import styled from "styled-components";
import * as FS from "./Footer-style";

const Footer = () => {
  return (
    <FS.FooterStyle>
      <FS.FooterContentDiv>
        <FS.FirstLine>
          <FS.FirstLineFirstBlock>
            <FS.SmallTitle>고객 지원실 운영안내</FS.SmallTitle>
            <p>연중무휴 09:00 - 18:00 (점심시간 12:00-13:00)</p>
            <p>주말/공휴일 포함, 한국시간 기준</p>
            <p>※ 항공권 환불/변경은 평일 09:00-17:00 접수 가능</p>
            <p>유선상담 1670-8208</p>
            <button>1:1 채팅상담</button>
          </FS.FirstLineFirstBlock>
          <FS.FirstLineOtherBlock>
            <FS.SmallTitle>소개</FS.SmallTitle>
            <div>회사소개</div>
            <div>채용</div>
            <div>공고</div>
          </FS.FirstLineOtherBlock>
          <FS.FirstLineOtherBlock>
            <FS.SmallTitle>파트너</FS.SmallTitle>
            <div>파트너등록하기</div>
            <div>Affiliate 프로그램</div>
            <div>리얼 파트너</div>
            <div>파트너 블로그</div>
          </FS.FirstLineOtherBlock>
          <FS.FirstLineOtherBlock>
            <FS.SmallTitle>지원</FS.SmallTitle>
            <div>자주 묻는 질문</div>
            <div>최저가 보장제</div>
          </FS.FirstLineOtherBlock>
        </FS.FirstLine>
        <div>
          <FS.SecondLine>
            <FS.SecondLineLeftText>
              <div>이용 약관</div>
              <div>개인정보처리방침</div>
              <div>취소 및 환불 정책</div>
            </FS.SecondLineLeftText>
            <FS.SecondLineRightIcon>
              <div>아이콘들</div>
              <div>ii</div>
            </FS.SecondLineRightIcon>
          </FS.SecondLine>
          <FS.BottomLine>
            <p>
              상호명 (주)마이리얼트립 | 대표 이동건 | 개인정보보호책임자 정재훈
              | 사업자등록번호 209-81-55339 <strong>사업자정보확인</strong> |
              통신판매업신고번호 2019-서울서초-0260
            </p>
            <p>
              주소 서울특별시 서초구 강남대로 311, 드림플러스 강남 18~19층
              (서초동,한화생명보험빌딩)| 이메일 help@myrealtrip.com |
              마케팅/제휴 문의 marketin@myrealtrip.com
            </p>
            <p>
              자사는 서울특별시관광협회 공제영업보증보험에 가입되어 있습니다.
              마이리얼트립은 통신판매중개자이며 통신판매의 당사자가
              아닙니다.따라서 상품, 거래정보 및 거래에 대하여 책임을 지지
              않습니다.
            </p>
          </FS.BottomLine>
        </div>
      </FS.FooterContentDiv>
    </FS.FooterStyle>
  );
};

export default Footer;
