import React, { useCallback, useRef, useEffect, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import styled from "styled-components";
import * as s from "./Styled.SearchList";
import { Slider } from "antd";
import { Rate } from "antd";
import HotelCategoryCard from "./HotelCategoryCard";
import "./Calendar.scss";
import "antd/dist/antd.css";

function GoogleMap() {
  const [price, setPrice] = useState([0, 1000000]);
  const [rates, setRates] = useState(0);
  const mapRef = useRef(null);

  const initMap = useCallback(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.53, lng: 127.024 },
      zoom: 13,
    });
  }, [mapRef]);

  const getRates = value => {
    setRates(value);
  };

  useEffect(() => {
    initMap();
  }, [initMap]);

  return (
    <Container>
      <Div>
        <s.FiltersBox>
          <s.FilterTitle>종류</s.FilterTitle>
          {HOTEL_CATEGORIES_DATA.map(el => {
            return <HotelCategoryCard key={el.id} name={el.name} />;
          })}
        </s.FiltersBox>
        <s.FiltersBox>
          <s.Filter>
            <s.FilterTitle>필터</s.FilterTitle>
            <s.ResetBuuton>전체 초기화</s.ResetBuuton>
          </s.Filter>
        </s.FiltersBox>
        <s.FiltersBox>
          <s.FilterTitle>총 숙박 요금</s.FilterTitle>
          <s.FilterText>
            {price[0]
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            원 ~
            {price[1]
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            {price[1] === 1000000 ? "원 이상" : "원"}
          </s.FilterText>
          <Slider
            range={true}
            values={price}
            max={1000000}
            step={10000}
            onChange={price => {
              setPrice(price);
            }}
          />
          <s.PriceBar />
        </s.FiltersBox>
        <s.FiltersBox>
          <s.FilterTitle>호텔 등급</s.FilterTitle>
          <s.FilterText>전체 등급</s.FilterText>
          <Rate onChange={getRates} />
          <s.StarsFilter />
        </s.FiltersBox>
        <s.FiltersBox>
          <s.FilterTitle>시설</s.FilterTitle>
          <Facilities name="수영장" />
          <Facilities name="레스토랑" />
          <Facilities name="피트니스" />
        </s.FiltersBox>
      </Div>
      <StyledMap className="map" ref={mapRef} />
    </Container>
  );
}

const Facilities = ({ name }) => {
  return (
    <s.FacilityCheckBox>
      <input type="checkbox" />
      <s.FacilityCheckBoxLabel>{name}</s.FacilityCheckBoxLabel>
    </s.FacilityCheckBox>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const Div = styled.div`
  width: 22%;
  height: 100vh;
  margin-top: 30px;
  margin-left: 30px;
`;

const StyledMap = styled.div`
  width: 78%;
  height: 100vh;
`;

const HOTEL_CATEGORIES_DATA = [
  { id: 1, name: "전체" },
  { id: 2, name: "호텔" },
  { id: 3, name: "펜션" },
  { id: 4, name: "풀빌라" },
  { id: 5, name: "캠핑" },
  { id: 6, name: "게하" },
];

export default GoogleMap;
