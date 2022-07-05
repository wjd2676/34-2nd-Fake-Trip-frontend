import React from "react";
import styled from "styled-components";

const HeadcountModal = ({
  setIsHeadcount,
  countAdult,
  setCountAdult,
  countChild,
  setCountChild,
}) => {
  const plusAdult = () => {
    setCountAdult(countAdult + 1);
  };
  const minusAdult = () => {
    if (countAdult > 1) {
      setCountAdult(countAdult - 1);
    }
  };
  const plusChild = () => {
    setCountChild(countChild + 1);
  };
  const minusChild = () => {
    if (countChild > 0) {
      setCountChild(countChild - 1);
    }
  };
  return (
    <HeadcountBox>
      <LineBox>
        <Head>인원</Head>
        <Head
          onClick={() => {
            setIsHeadcount(false);
          }}
        >
          X
        </Head>
      </LineBox>
      <LineBox>
        <Head>성인</Head>
        <Head>
          <PlusMinusButton onClick={minusAdult}>-</PlusMinusButton>
          <span> {countAdult} </span>
          <PlusMinusButton onClick={plusAdult}>+</PlusMinusButton>
        </Head>
      </LineBox>
      <LineBox>
        <Head>어린이</Head>
        <Head>
          <PlusMinusButton onClick={minusChild}>-</PlusMinusButton>
          <span> {countChild} </span>
          <PlusMinusButton onClick={plusChild}>+</PlusMinusButton>
        </Head>
      </LineBox>
    </HeadcountBox>
  );
};

const HeadcountBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  margin-top: 8px;
  width: 300px;
  height: 170px;
  border: 1px solid #dee2e6;
  background-color: white;
  z-index: 1;
`;

const LineBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 50px;
  /* border: 1px solid black; */
`;

const Head = styled.span`
  font-weight: bold;
  padding: 15px;
  font-size: 15px;
`;

const PlusMinusButton = styled.button`
  width: 35px;
  height: 35px;
  margin: 0 5px 0 5px;
  border-radius: 70%;
  border: 1px solid ${props => props.theme.mainColor};
  background-color: white;
  color: ${props => props.theme.mainColor};
  font-size: 20px;
`;

export default HeadcountModal;
