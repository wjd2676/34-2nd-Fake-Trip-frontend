import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookerReservation from "./BookerReservation";
import * as S from "./Booking.style";
import TermsInput from "./TermsInput";

const Booking = () => {
  const [bookingData, setBookingData] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [infoConvert, setInfoConvert] = useState(false);
  const [termsData, setTermsData] = useState([]);
  const [checkedList, setCheckedList] = useState({
    travler: "",
    perseonal: "",
    collection: "",
    special_price: "",
  });

  const location = useLocation();

  useEffect(() => {
    fetch(`http://15.164.213.245:8000/orders/reservation${location.search}`, {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxM30.rQrQM6TZsK744B-vV6-uRFCByomNvDMZNvIKk1UQDu8",
      },
    })
      .then(res => res.json())
      .then(data => {
        setBookingData(data);
      });
  }, [location.search]);

  if (bookingData.length === 0) return <>loadingLoading</>;

  const START_DATE = new Date(bookingData.start_date);
  const END_DATE = new Date(bookingData.end_date);
  const LODGMENT_DATE = (END_DATE - START_DATE) / (1000 * 60 * 60 * 24);

  return (
    <S.BookingContainer>
      <S.BookingContainerIn>
        <S.BookingMain>
          <S.BookingTitle>
            <S.BookingTitleHeader>예약하기</S.BookingTitleHeader>
          </S.BookingTitle>
          <S.ProductInfo>상품정보</S.ProductInfo>
          <S.HotelInfoContainer>
            <S.HotelInfoImage
              src={bookingData.room.image}
              alt={bookingData.room.name}
            />
            <S.HotelTitle>
              <S.BookingTitleHeader>
                {bookingData.product.name}
              </S.BookingTitleHeader>
              <S.HotelDate> {bookingData.start_date} ~</S.HotelDate>
              <S.HotelDate>
                {bookingData.end_date} {LODGMENT_DATE}박
              </S.HotelDate>
            </S.HotelTitle>
          </S.HotelInfoContainer>
          <S.HotelTotalTitle>
            <S.HotelDate style={{ color: "black" }}>
              {bookingData.room.name}
            </S.HotelDate>
            <S.HotelDate>
              {bookingData.room.price.toLocaleString("ko-KR")}원
            </S.HotelDate>
          </S.HotelTotalTitle>
          <S.HotelTotalAmount>
            <S.HotelPrice>총 상품 금액</S.HotelPrice>
            <S.HotelPriceBold>
              {bookingData.room.price.toLocaleString("ko-KR")}원
            </S.HotelPriceBold>
          </S.HotelTotalAmount>
          <BookerReservation
            userInput={userInput}
            setUserInput={setUserInput}
            InfoConvert={infoConvert}
            setInfoConvert={setInfoConvert}
            userName={bookingData.user.name}
            userEmail={bookingData.user.email}
            userPhone={bookingData.user.phone_number}
          />
          <S.HowToPayment>
            <S.PayBox type="checkbox" />
            <S.PayLabel>신용/체크카드</S.PayLabel>
          </S.HowToPayment>
          <S.HowToPayment>
            <S.PayBox type="checkbox" />
            <S.PayLabel>카카오페이</S.PayLabel>
            <S.PayImg
              src="/images/BookingImages/kakao_logo.png"
              alt="kakao_logo"
            />
          </S.HowToPayment>
          <S.HowToPayment>
            <S.PayBox type="checkbox" />
            <S.PayLabel>토스</S.PayLabel>
            <S.PayImg
              src="/images/BookingImages/toss_logo.png"
              alt="kakao_logo"
            />
          </S.HowToPayment>
          <S.HowToPayment>
            <S.PayBox type="checkbox" />
            <S.PayLabel>페이코</S.PayLabel>
            <S.PayImg
              src="/images/BookingImages/payco_logo.png"
              alt="kakao_logo"
            />
          </S.HowToPayment>
          <S.HowToPaymentContainer />
        </S.BookingMain>
        <S.BookingSideBar>
          <S.SideBarTitle>결제 정보</S.SideBarTitle>
          <S.SideBarAmountContainer>
            <S.SideBarAmountPrefix>
              <span>주문금액</span>
              <span>{bookingData.room.price.toLocaleString("ko-KR")}원</span>
            </S.SideBarAmountPrefix>
            <S.SideBarAmountSuffix>
              <span>총 결제금액</span>
              <span>{bookingData.room.price.toLocaleString("ko-KR")}원</span>
            </S.SideBarAmountSuffix>
          </S.SideBarAmountContainer>
          <S.TermsContainer>
            <S.TermsTitle>약관 안내</S.TermsTitle>
            <TermsInput
              roomId={bookingData.room.id}
              startDate={bookingData.start_date}
              endDate={bookingData.end_date}
              userName={bookingData.user.name}
              userEmail={bookingData.user.email}
              userPhone={bookingData.user.phone_number}
              termsData={termsData}
              setTermsData={setTermsData}
              checkedList={checkedList}
              setCheckedList={setCheckedList}
              price={bookingData.room.price.toLocaleString("ko-KR")}
            />
          </S.TermsContainer>
          <S.NeedToFieldContainer>
            <S.FieldTitle>
              ❗이런 경우 현장 결제가 필요할 수 있어요.
            </S.FieldTitle>
            <div>
              기준 인원 초과, 바베큐 시설 이용 등은 현장에서 추가 비용이 청구될
              수 있습니다.
            </div>
          </S.NeedToFieldContainer>
        </S.BookingSideBar>
      </S.BookingContainerIn>
    </S.BookingContainer>
  );
};

export default Booking;
