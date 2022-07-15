import * as S from "./Booking.style";
import { IP } from "../../config";

const BookerReservation = ({
  userName,
  userEmail,
  userInput,
  setUserInput,
  InfoConvert,
  setInfoConvert,
}) => {
  const inputChange = e => {
    const { value } = e.target;
    setUserInput(value);
  };

  const infoChange = () => {
    const regex = /\d{3}-\d{3,4}-\d{4}/;

    if (!regex.test(userInput)) {
      alert("010-xxxx-xxxx 형식으로 입력해주세요!");
      setInfoConvert(InfoConvert);
    } else {
      setInfoConvert(!InfoConvert);
    }

    fetch(`${IP}/users`, {
      method: "PATCH",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxM30.rQrQM6TZsK744B-vV6-uRFCByomNvDMZNvIKk1UQDu8",
      },
      body: JSON.stringify({
        phone_number: userInput,
      }),
    });
  };

  const infoSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <S.BookerTitle>예약자 정보</S.BookerTitle>
      <S.BookerInfoContainer>
        <S.BookerInfoList>
          <S.BookerInfoBox>
            <S.BookerInfoBoxValue>예약자 이름</S.BookerInfoBoxValue>
            <S.BookerInfoBoxValue>{userName}</S.BookerInfoBoxValue>
          </S.BookerInfoBox>
          <S.BookerInfoBox>
            <S.BookerInfoBoxValue>이메일 주소</S.BookerInfoBoxValue>
            <S.BookerInfoBoxValue>{userEmail}</S.BookerInfoBoxValue>
          </S.BookerInfoBox>
          <S.BookerInfoBox>
            <S.BookerInfoBoxValue>휴대전화 </S.BookerInfoBoxValue>
            {!InfoConvert ? (
              <S.BookerPhoneInput type="text" onChange={inputChange} />
            ) : (
              <S.BookerInfoBoxValue>{userInput}</S.BookerInfoBoxValue>
            )}
          </S.BookerInfoBox>
        </S.BookerInfoList>
        <S.BookerInfoChange onSubmit={infoSubmit}>
          <S.ChangeButton onClick={infoChange}>정보변경</S.ChangeButton>
        </S.BookerInfoChange>
      </S.BookerInfoContainer>
      <S.AdditionalBooking>
        <S.AddBookingTitle>추가 예약 정보</S.AddBookingTitle>
        <S.AddBookingSub>(필수)</S.AddBookingSub>
      </S.AdditionalBooking>
      <S.RepresentBookerContainer>
        <S.RepresentBooker>
          <S.RepresentBookerTitle>대표 투숙자</S.RepresentBookerTitle>
          <S.AddBookingSub>
            원활한 예약 확인을 위해 정확하게 입력해주세요.
          </S.AddBookingSub>
        </S.RepresentBooker>
        <S.RepresentContainer>
          <S.RepresentValue>한글이름</S.RepresentValue>
          <S.RepresentInput
            type="text"
            name="name"
            defaultValue={userName}
            placeholder="한글 이름"
          />
        </S.RepresentContainer>
        <S.RepresentContainer>
          <S.RepresentValue>이메일 주소</S.RepresentValue>
          <S.RepresentInput
            type="text"
            name="email"
            defaultValue={userEmail}
            placeholder="이메일 주소"
          />
        </S.RepresentContainer>
        <S.RepresentContainer>
          <S.RepresentValue>휴대전화</S.RepresentValue>
          <S.RepresentInput
            type="text"
            name="phone"
            defaultValue={userInput}
            placeholder="phone"
          />
        </S.RepresentContainer>
        <S.HowToPaymentTitle>결제 방법</S.HowToPaymentTitle>
      </S.RepresentBookerContainer>
    </>
  );
};

export default BookerReservation;
