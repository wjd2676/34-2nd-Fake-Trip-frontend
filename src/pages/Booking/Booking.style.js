import styled, { css } from "styled-components";

const TitleStyle = css`
  font-size: 30px;
  padding: 20px 10px;
  margin-bottom: 30px;
  border-bottom: 3px solid #ced4da;
`;
const HotelTitleStyle = css`
  margin-bottom: 10px;
  font-size: 20px;
`;
const FlexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
`;
export const BookingContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export const BookingContainerIn = styled.div`
  display: flex;
  width: 1060px;
`;
export const BookingMain = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
export const BookingTitle = styled.div`
  margin-bottom: 30px;
`;
export const BookingTitleHeader = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
`;
export const ProductInfo = styled.div`
  ${TitleStyle}
`;
export const HotelInfoContainer = styled.div`
  display: flex;
`;

export const HotelInfoImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 15px;
`;
export const HotelTitle = styled.div`
  margin-left: 30px;
`;
export const HotelDate = styled.p`
  ${HotelTitleStyle}
  color: gray;
`;
export const HotelPrice = styled.p`
  ${HotelTitleStyle}
  color: black;
`;
export const HotelPriceBold = styled.p`
  ${HotelTitleStyle}
  font-weight: bold;
`;
export const HotelTotalTitle = styled.div`
  ${FlexSpaceBetween}
  padding: 20px;
  margin-top: 20px;
  background-color: #f1f3f5;
  border-radius: 15px;
  font-size: 20px;
`;

export const HotelTotalAmount = styled.div`
  ${FlexSpaceBetween}
  padding: 20px;
  margin-top: 20px;
  font-size: 20px;
`;
export const BookerTitle = styled.div`
  ${TitleStyle}
`;
export const BookerInfoContainer = styled.div`
  ${FlexSpaceBetween}
  margin-bottom: 30px;
`;
export const BookerInfoBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 3px;
`;
export const BookerInfoBoxValue = styled.div`
  width: 150px;
  margin-bottom: 15px;
`;

export const BookerInfoList = styled.div`
  width: 70%;
  font-size: 20px;
`;

export const BookerInfoChange = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
`;

export const ChangeButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    background-color: #dee2e6;
  }
`;

export const AdditionalBooking = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  margin-bottom: 30px;
  border-bottom: 3px solid #ced4da;
`;

export const AddBookingTitle = styled.h2`
  font-size: 30px;
`;

export const AddBookingSub = styled.span`
  color: gray;
  font-size: 20px;
  margin: 10px 0 10px 10px;
`;

export const RepresentBookerContainer = styled.div``;

export const RepresentBooker = styled.div``;

export const RepresentBookerTitle = styled.h3`
  font-size: 30px;
  margin: 10px 0 10px 10px;
`;

export const RepresentContainer = styled.div`
  margin: 30px 0;
`;

export const RepresentValue = styled.div`
  font-size: 20px;
  color: #8a8f93;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const RepresentInput = styled.input`
  width: 250px;
  height: 40px;
  padding: 10px;
  margin-left: 10px;
  font-size: 15px;
  border: 1px solid #8a8f93;
  border-radius: 10px;
`;

export const BookerPhoneInput = styled(RepresentInput)`
  margin-left: -10px;
`;
export const HowToPaymentTitle = styled.div`
  ${TitleStyle}
`;

export const HowToPaymentContainer = styled.div``;

export const HowToPayment = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const PayImg = styled.img`
  width: 70px;
  margin-left: 10px;
`;

export const PayBox = styled.input`
  margin-right: 20px;
`;

export const PayLabel = styled.label`
  font-size: 20px;
`;

export const BookingSideBar = styled.label`
  position: fixed;
  right: 50%;
  margin-right: -700px;
  width: 360px;
  height: 930px;
  padding: 15px;
  margin-left: 40px;
  border: 1px solid #e8e8e8;
`;

export const SideBarTitle = styled.div`
  ${TitleStyle}
`;

export const SideBarAmountContainer = styled.div``;

export const SideBarAmountPrefix = styled.div`
  ${FlexSpaceBetween}
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
`;
export const SideBarAmountSuffix = styled.div`
  ${FlexSpaceBetween}
  align-items: center;
  margin: 0 -15px;
  margin-bottom: 20px;
  padding: 20px;
  height: 60px;
  background-color: #f5fbff;
  color: #2b96ed;
  font-size: 20px;
  font-weight: bold;
`;
export const TermsContainer = styled.div``;

export const TermsTitle = styled.div`
  ${TitleStyle}
`;

export const TermsAgreeBox = styled.div`
  height: 299px;
  padding: 15px;
  border: 1px solid #e8e8e8;
`;
export const TermsAgreeList = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  margin: 15px;
`;

export const TermsBox = styled.input`
  width: 25px;
  height: 25px;
  margin-right: 15px;
`;

export const TermsLabel = styled.label``;

export const NeedToFieldContainer = styled.div`
  height: 140px;
  background-color: #f8f9fa;
  margin-top: 30px;
  padding: 15px;
`;

export const FieldTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;
export const PaymentForm = styled.form`
  display: flex;
`;
export const PaymentButton = styled.button`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  /* background-color: #a7d4f9; */
  background-color: ${props => (props.primary ? "#a7d4f9" : "#51abf3")};
  margin-top: 20px;
  border: none;
  color: white;
  cursor: ${props => (props.primary ? "not-allowed" : "pointer")};
  border-radius: 10px;
`;

export const PayButtonText = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
