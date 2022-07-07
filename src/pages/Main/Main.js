import React, { useState } from "react";
import styled from "styled-components";
import * as MS from "./Main-style";

import { DateRangePicker } from "react-date-range";
import DateRange from "react-calendar";
import { ko } from "date-fns/esm/locale";

import "react-datepicker/dist/react-datepicker.css";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { addDays } from "date-fns";

const Main = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCheckbox = () => {
    setIsClicked({ isClicked: !isClicked });
  };
  //
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  //
  return (
    <MS.MainStyle>
      <MS.MainTitle>어떤 숙소를 찾으세요?</MS.MainTitle>
      <MS.OnOffBtn>
        <input
          type="checkbox"
          id="checkbox-input"
          onClick={handleCheckbox}
        ></input>
        <label htmlFor="checkbox-input" className="round-slider-container">
          <div>On</div>
          <div>Off</div>
          <div className="round-slider"></div>
        </label>
      </MS.OnOffBtn>
      <MS.SearchBoxDiv>
        <MS.AccomodationInfo>
          <div>호텔 리조트</div>
          <div>펜션, 풀빌라</div>
          <div>제주감성숙소</div>
        </MS.AccomodationInfo>
        <MS.SearchBox>
          <div>
            <img />
            <input placeholder="지역, 숙소 이름을 찾아보세요" />
          </div>
          <div>
            <img />
            <DateRange
              editableDateInputs={true}
              onChange={item => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
            />
            ;
          </div>
          <div>
            <img />
          </div>
        </MS.SearchBox>
      </MS.SearchBoxDiv>
      <div>할인혜택(모양만)</div>
      <div>캐러셀</div>
    </MS.MainStyle>
  );
};

export default Main;
