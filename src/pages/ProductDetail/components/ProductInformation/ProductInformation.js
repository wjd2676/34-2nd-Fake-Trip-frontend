import React from "react";
import styled from "styled-components";

const ProductInformation = () => {
  return (
    <ProductInfo id="productInfo">
      {INFORMATION_DATA.map(data => {
        return (
          <Information key={data.id} id={data.name}>
            <Title>{data.title}</Title>
            <Content>{data.content}</Content>
          </Information>
        );
      })}
    </ProductInfo>
  );
};

const ProductInfo = styled.div`
  width: 700px;
  margin-top: 30px;
`;

const Information = styled.div`
  display: flex;
  border-top: 1px solid #e4e5e5;
  border-bottom: 1px solid #e4e5e5;
  padding: 60px 0;
`;

const Title = styled.div`
  width: 180px;
`;

const Content = styled.div`
  width: 520px;
  white-space: pre-wrap;
  font-size: 13px;
`;

const INFORMATION_DATA = [
  {
    id: 1,
    title: "소개",
    content: `[숙소소개] \n“미항도시 여수와 함께 하는 드래곤수 더 여수” \n1. 보다 넓은 공간과 투숙객들의 편리함을 위한 수납공간도 여유롭게 준비되어 있습니다. \n2. 테라스에서 보이는 여수밤바다를 비롯하여, 일출 및 일몰을 느끼실 수 있습니다. \n3. 공항 및 KTX역에서 숙소까지 셔틀운행을 하고 있습니다. (사전 예약) \n4. 아쿠아플라넷, 케이블카, 여수 크루즈 등 주요관광지가 10분내에 위치해 있습니다.`,
    name: "productInfo",
  },
  {
    id: 2,
    title: "체크인/체크아웃",
    content: "체크인 - 15:00 / 체크아웃 - 11:00",
    name: "checkTimeInfo",
  },
  {
    id: 3,
    title: "서비스",
    content: "짐보관, wifi, 주차가능",
    name: "serviceInfo",
  },
  {
    id: 4,
    title: "이용안내",
    content: `[숙소안내] \n입실시간 : 15:00 / 퇴실시간 : 11:00 \n15:00 이후 체크인, 11:00 이전 체크아웃 \n체크인 가능시간 : 15:00~20:00 (*20시 이후 입실 시 사전에 호텔측에 요청 부탁드립니다)`,
    name: "useInfo",
  },
  {
    id: 5,
    title: "취소 및 환불 규정",
    content: `- 체크인 15일 전 : 무료 취소 \n- 체크인 14일 전 ~ 8일 전 : 취소 수수료 50% \n- 체크인 7일 전 ~ 6일 전 : 취소 수수료 70% \n- 체크인 5일 전 ~ 4일 전 : 취소 수수료 90% \n- 체크인 3일 전 ~ 당일 : 취소 환불 불가 \n- 취소요청 이후에는 취소의 철회가 불가능합니다. \n- 구매당일 취소시에도 환불 규정에 따라 취소 수수료가 부과됩니다.`,
    name: "refundInfo",
  },
];

export default ProductInformation;
