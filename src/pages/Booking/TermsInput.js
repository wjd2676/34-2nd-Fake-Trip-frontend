import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Booking.style";

const TermsInput = ({
  price,
  termsData,
  setTermsData,
  checkedList,
  setCheckedList,
  roomId,
  startDate,
  endDate,
  userName,
  userEmail,
  userPhone,
  locationSearch,
}) => {
  const isAllChecked = Boolean(
    checkedList.travler &&
      checkedList.perseonal &&
      checkedList.collection &&
      checkedList.special_price
  );

  const handleChange = e => {
    const { name, checked } = e.target;
    setCheckedList({ ...checkedList, [name]: checked });
  };
  const navigate = useNavigate();

  const clickToPay = e => {
    e.preventDefault();
    fetch(`http://15.164.213.245:8000/orders/reservation`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxM30.rQrQM6TZsK744B-vV6-uRFCByomNvDMZNvIKk1UQDu8",
      },
      body: JSON.stringify({
        room_id: roomId,
        start_date: startDate,
        end_date: endDate,
        guest_information: {
          user_name: userName,
          user_email: userEmail,
          user_phone: userPhone,
        },
      }),
    }).then(navigate("/"));
  };
  useEffect(() => {
    fetch("data/BookingData/TermsData.json")
      .then(response => response.json())
      .then(data => setTermsData(data));
  }, []);

  if (termsData.length === 0) return <>loadingLoading</>;

  return (
    <>
      <S.TermsAgreeBox>
        {termsData.map(terms => {
          return (
            <S.TermsAgreeList key={terms.id}>
              <S.TermsBox
                type="checkbox"
                name={terms.name}
                onChange={handleChange}
                readOnly
              />

              <S.TermsLabel>{terms.terms_label}</S.TermsLabel>
              <img src="/images/BookingImages/arrow.png" alt="arrow" />
            </S.TermsAgreeList>
          );
        })}
      </S.TermsAgreeBox>
      <S.PaymentForm>
        <S.PaymentButton
          className="payment_btn"
          // style={{
          //   backgroundColor: !isAllChecked ? "#a7d4f9" : "#51abf3",
          //   cursor: !isAllChecked ? "not-allowed" : "pointer",
          // }}
          primary={!isAllChecked}
          disabled={!isAllChecked}
          onClick={clickToPay}
        >
          <S.PayButtonText>{price}원 결제하기</S.PayButtonText>
        </S.PaymentButton>
      </S.PaymentForm>
    </>
  );
};

export default TermsInput;
