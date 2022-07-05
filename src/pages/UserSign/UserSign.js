import React from "react";
import styled from "styled-components";

const Usersign = () => {
  const clickToKakao = () => {
    window.location.replace(`${KAKAO_AUTH_URL}`);
  };
  return (
    <LoginContainer>
      <LoginMain>
        <Title>👋</Title>
        <Welcome>Welcome!</Welcome>
        <SubTitle>여행의 모든 것, 마이페이크트립</SubTitle>
        <KakaoLogin
          src="/images/UserSign/kakao_login_medium_wide.png"
          onClick={clickToKakao}
        />

        <AnotherLogin>
          <AnotherLoginButton>페이스북</AnotherLoginButton>
          <AnotherLoginButton>네이버</AnotherLoginButton>
          <AnotherLoginButton>이메일</AnotherLoginButton>
        </AnotherLogin>
        <NotYetUser>
          아직 회원이 아니신가요? <SignUpLink>회원가입</SignUpLink>
        </NotYetUser>
      </LoginMain>
    </LoginContainer>
  );
};
const REST_API_KEY = "c16aa4a6b6347d4a17c0cde7a95afba6";
const REDIRECT_URI = "http://localhost:3000/usersign";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const LoginMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 500px;
  border: 1px solid #f1f3f5;
`;

const Title = styled.div`
  font-size: 60px;
  margin: 75px;
`;

const SubTitle = styled.div`
  font-size: 25px;
  color: #b2b5b9;
  margin-top: 15px;
`;
const Welcome = styled.div`
  font-size: 35px;
`;
const AnotherLogin = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  font-size: 20px;
`;

const KakaoLogin = styled.img`
  margin: 20px;
  cursor: pointer;
`;
const AnotherLoginButton = styled.div`
  margin-bottom: 30px;
`;

const NotYetUser = styled.div``;

const SignUpLink = styled.a`
  text-decoration: underline;
`;
export default Usersign;
