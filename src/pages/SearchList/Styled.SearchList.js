import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  video {
    width: 100vw;
  }
  height: 123px;
  z-index: -1;
  overflow: hidden;
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${props => props.theme.mainColor};
`;

export const SearchInnerContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-direction: row;
  height: 70px;
  width: 1000px;
`;

export const LocationInput = styled.input`
  width: 250px;
  height: 50px;
  margin-left: 30px;
  border: none;
  background-color: white;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const SearchLocationContainer = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  background-color: white;
  margin: 0 7px 0 0;
  border-radius: 3px;
`;

export const LocationInputBox = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  z-index: 1;
  margin-top: 8px;
  left: 10px;
  color: ${props => props.theme.mainColor};
`;

export const SearchBox = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  background-color: white;
  margin: 0 7px 0 0;
  border-radius: 3px;
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  margin: 0 7px 0 0;

  &:hover {
    cursor: pointer;
  }
`;
export const SearchButton = styled.button`
  width: 80px;
  height: 50px;
  background-color: #e6f4fd;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 500;
  color: #2b96ed;
`;

export const Number = styled.span`
  position: absolute;
  left: 50px;
  top: 15px;
  font-size: 18px;
  font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // border: 0.5px solid black;
  width: 30%;
`;

export const FilterTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const FilterText = styled.div`
  font-size: 13px;
  color: #92999f;
`;

export const ResetBuuton = styled.button`
  font-size: 13px;
  background-color: white;
  border: none;
  color: #d4d9df;

  &:hover {
    cursor: pointer;
  }
`;

export const FiltersBox = styled.div`
  margin: 10px 30px 10px 0;
  padding-bottom: 30px;
  border-bottom: 1px solid #dee2e6;
`;

export const Map = styled.img`
  width: 250px;
  height: 62px;
  border: 1px solid #dee2e6;
  border-radius: 3px;

  &:hover {
    box-shadow: 3px 3px 3px #dee2e6;
    cursor: pointer;
    transition: 0.5s;
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  padding-top: 10px;
`;

export const PriceBar = styled.div`
  width: 250px;
  margin-top: 20px;
`;

export const PriceRangeBar = styled.input`
  margin-top: 10px;
  width: 240px;
  /* -webkit-appearance: none;
  background: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &:focus {
    outline: none;
  }
  &::-ms-track {
    width: 100%;
    cursor: pointer;
    /* IE에서 기본슬라이드 숨기기  */
  /* background: transparent;
    border-color: transparent;
    color: transparent;
  }  */
`;

export const StarsFilter = styled.div`
  width: 250px;
  margin-top: 20px;
`;

export const FacilityCheckBox = styled.div`
  display: flex;
  width: 250px;
  height: 26px;
  margin: 5px 0 5px 0;
`;

export const FacilityCheckBoxLabel = styled.label`
  margin-left: 5px;
  margin-top: px;
  font-size: 15px;
`;

export const ListContainer = styled.div`
  // border: 0.5px solid black;
  width: 70%;
  margin-left: 10px;
`;
export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 770px;
  margin-bottom: 20px;
`;

export const NumberOfHotels = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

export const TopFilterBox = styled.div`
  span {
    font-size: 12px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ItemBox = styled.div`
  display: flex;
  width: 770px;
  height: 200px;
  border: 1px solid #dee2e6;
  margin: 10px 0 10px 0;

  &:hover {
    box-shadow: 3px 3px 3px #dee2e6;
    cursor: pointer;
  }
`;

export const HotelImg = styled.img`
  width: 256px;
  height: 198px;
  background-color: yellow;
`;

export const HotelInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 514px;
  height: 198px;
  padding: 22px 24px;
`;

export const HotelTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const StarsLocation = styled.div`
  color: grey;
  opacity: 0.8;
  font-size: 14px;
  margin: 10px 0 0 0;
`;

export const HotelPrice = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
