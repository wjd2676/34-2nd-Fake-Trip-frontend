import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import * as s from "./Styled.SearchList";
import { Rate } from "antd";
import { Slider } from "antd";
import { DatePicker } from "antd";
import ItemCard from "./ItemCard";
import HotelCategoryCard from "./HotelCategoryCard";
import LocationModal from "./LocationModal";
import HeadcountModal from "./HeadcountModal";
import Facilities from "./Facilities";
import Buttons from "./Buttons";
// import "./Calendar.css";
import "antd/dist/antd.css";
import { IP } from "../../config";
import "./Calendar.scss";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

const LIMIT = 40;

const Searchlist = () => {
  const [isLocation, setIsLocation] = useState(false);
  const [isHeadcount, setIsHeadcount] = useState(false);
  const [countAdult, setCountAdult] = useState(1);
  const [countChild, setCountChild] = useState(0);
  const [locationInput, setLocationInput] = useState("");
  const [price, setPrice] = useState([0, 1000000]);
  const [rates, setRates] = useState(0);
  const [searchList, setSearchList] = useState([]);
  const [date, setDate] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [ischecked, setIsChecked] = useState([]);
  const [clicked, setClicked] = useState(1);

  const openLocation = () => {
    setIsLocation(true);
  };

  const closeLocation = () => {
    setIsLocation(false);
  };
  const openHeadcount = () => {
    setIsHeadcount(true);
  };
  const closeHeadcount = () => {
    setIsHeadcount(false);
  };

  const getRates = value => {
    setRates(value);
  };

  const getDateValue = (date, dateString) => {
    setDate(dateString);
  };
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch(
      `${IP}/products?${
        location.search.split("?")[1] || `limit=${LIMIT}&offset=0`
      }`
    )
      .then(response => response.json())
      .then(result => {
        setSearchList(result.results);
      });
  }, [location.search]);
  // if (!searchList[0]) return;

  const updateOffset = buttonIndex => {
    const offset = LIMIT * buttonIndex;
    const queryString = `?limit=${LIMIT}&offset=${offset}`;

    navigate(queryString);
  };

  let amenities = ischecked.map(el => {
    return `&amenity=${el}`;
  });

  amenities = amenities.join("");

  const filter = () => {
    navigate(
      `?search=${locationInput}&start_date=${date[0]}&end_date=${
        date[1]
      }&guest=${countAdult + countChild}${
        selectedCategory && selectedCategory !== `전체`
          ? `&category=${selectedCategory}`
          : ``
      }&min_price=${price[0]}&max_price=${price[1]}${
        rates ? `&grade=${rates}` : ``
      }${ischecked.length !== 0 ? amenities : ``}`
    );
  };

  const reset = () => {
    navigate(
      `?search=${locationInput}&start_date=${date[0]}&end_date=${
        date[1]
      }&guest=${countAdult + countChild}`
    );
    setSelectedCategory();
  };

  // const sortedItemCard = searchList.filter(hotels => {
  //   return (
  //     hotels.address.includes(locationInput) ||
  //     hotels.name.includes(locationInput)
  //   );
  // });

  // if (searchList[0].length === 0) return <>loading...</>;

  return (
    <div>
      <s.Nav className="topDiv">
        <a href="https://ifh.cc/v-R4jq6G" target="_blank" rel="noreferrer">
          <video
            src="https://ifh.cc/v/R4jq6G.mp4"
            muted
            autoPlay
            loop
            playsInline
            className="topVideo"
          />
        </a>
        <div className="topBox" />
      </s.Nav>

      <s.SearchContainer className="searchContainer">
        <s.SearchInnerContainer>
          <s.SearchLocationContainer>
            <s.LocationInputBox>
              <s.StyledFontAwesomeIcon icon={faLocationDot} size="2x" />
              <form>
                <s.LocationInput
                  onChange={e => {
                    e.preventDefault();
                    setLocationInput(e.target.value);
                  }}
                  onFocus={openLocation}
                  onBlur={closeLocation}
                />
              </form>
            </s.LocationInputBox>
            {isLocation && (
              <LocationModal
                locationInput={locationInput}
                setLocationInput={setLocationInput}
              />
            )}
          </s.SearchLocationContainer>
          <s.SelectContainer>
            <s.StyledFontAwesomeIcon icon={faCalendar} size="2x" />
            <s.SearchBox>
              <StyledDatePicker picker="date" onChange={getDateValue} />
            </s.SearchBox>
          </s.SelectContainer>
          <s.SelectContainer>
            <s.StyledFontAwesomeIcon icon={faUserLarge} size="2x" />
            <s.SearchBox onClick={openHeadcount} onBlur={closeHeadcount}>
              <s.Number>{countAdult + countChild}명</s.Number>
            </s.SearchBox>
            {isHeadcount && (
              <HeadcountModal
                setIsHeadcount={setIsHeadcount}
                countAdult={countAdult}
                setCountAdult={setCountAdult}
                countChild={countChild}
                setCountChild={setCountChild}
              />
            )}
          </s.SelectContainer>
          <s.SearchButton onClick={e => filter()}>검색</s.SearchButton>
        </s.SearchInnerContainer>
      </s.SearchContainer>

      <s.Container>
        <s.FilterContainer>
          <s.FiltersBox>
            <s.Map
              src="/images/SearchList/map.png"
              onClick={() => {
                navigate("/map");
              }}
            />
          </s.FiltersBox>
          <s.FiltersBox>
            <s.FilterTitle>종류</s.FilterTitle>
            {HOTEL_CATEGORIES_DATA.map(el => {
              return (
                <HotelCategoryCard
                  key={el.id}
                  name={el.name}
                  filter={filter}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              );
            })}
          </s.FiltersBox>
          <s.FiltersBox>
            <s.Filter>
              <s.FilterTitle>필터</s.FilterTitle>
              <s.ResetBuuton onClick={reset}>전체 초기화</s.ResetBuuton>
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
              onAfterChange={price => {
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
            {FACILITIES.map(el => {
              return (
                <Facilities
                  key={el.id}
                  name={el.facility}
                  // checked={el.name}
                  ischecked={ischecked}
                  setIsChecked={setIsChecked}
                />
              );
            })}
          </s.FiltersBox>
        </s.FilterContainer>
        <s.ListContainer>
          <s.TopDiv>
            <s.NumberOfHotels>
              검색된 숙소 {searchList.length}개
            </s.NumberOfHotels>
            <s.TopFilterBox>
              <span>·추천순 </span>
              <span>·많은 후기순 </span>
              <span>·높은 평점순 </span>
              <span>·낮은 가격순 </span>
              <span>·높은 가격순</span>
            </s.TopFilterBox>
          </s.TopDiv>
          <div>
            {searchList.map(el => {
              return (
                <ItemCard
                  key={el.id}
                  id={el.id}
                  image={el.main_image}
                  name={el.name}
                  category={el.category}
                  // stars_for_review={el.stars_for_review}
                  grade={el.grade}
                  address={el.address}
                  price={parseInt(el.price.min_price)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                />
              );
            })}
          </div>

          <ButtonContainer>
            {BUTTON.map(el => {
              return (
                <Buttons
                  key={el.id}
                  id={el.id}
                  clicked={clicked}
                  setClicked={setClicked}
                  updateOffset={updateOffset}
                />
              );
            })}
          </ButtonContainer>
        </s.ListContainer>
      </s.Container>
    </div>
  );
};
const HOTEL_CATEGORIES_DATA = [
  { id: 1, name: "전체" },
  { id: 2, name: "호텔" },
  { id: 3, name: "펜션" },
  { id: 4, name: "풀빌라" },
  { id: 5, name: "캠핑" },
  { id: 6, name: "게하" },
];

const FACILITIES = [
  { id: 1, facility: "수영장" },
  { id: 2, facility: "루프탑" },
  { id: 3, facility: "노래방" },
  { id: 4, facility: "레스토랑" },
  { id: 5, facility: "골프장" },
  { id: 6, facility: "스파" },
  { id: 7, facility: "사우나" },
  { id: 8, facility: "세미나실" },
  { id: 9, facility: "카페" },
  { id: 10, facility: "키즈플레이룸" },
  { id: 11, facility: "탁구장" },
  { id: 12, facility: "축구장" },
  { id: 13, facility: "워터파크" },
  { id: 14, facility: "유아시설" },
];

const BUTTON = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const StyledDatePicker = styled(DatePicker.RangePicker)`
  position: absolute;
  left: 50px;
  top: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  margin-left: 270px;
`;

export default Searchlist;
