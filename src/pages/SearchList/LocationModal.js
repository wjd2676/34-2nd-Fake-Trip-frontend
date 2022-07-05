import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel } from "@fortawesome/free-solid-svg-icons";

const LocationModal = ({ locationInput, setLocationInput }) => {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    fetch(
      "http://10.58.7.102:8000/products?start_date=2022-05-01&end_date=2022-05-05"
    )
      .then(res => res.json())
      .then(res => setSearchList(res.results));
  }, []);

  const sortedList = searchList.filter(hotels => {
    return (
      hotels.address.includes(locationInput) ||
      hotels.name.includes(locationInput)
    );
  });

  return (
    <LocationBox>
      <LocationListContainer>
        {sortedList.map(list => {
          return (
            <LocationListBox key={list.id}>
              <HotelIcon icon={faHotel} size="2x" />
              <div
                onClick={() => {
                  setLocationInput(list.name);
                }}
              >
                <HotelName>{list.name}</HotelName>
                <HotelLocation>{list.address}</HotelLocation>
              </div>
            </LocationListBox>
          );
        })}
      </LocationListContainer>
    </LocationBox>
  );
};

const LocationBox = styled.div`
  position: absolute;
  margin-top: 8px;
  width: 300px;
  height: 500px;
  border: 1px solid #dee2e6;
  background-color: white;
  overflow-y: hidden;
`;

const LocationListContainer = styled.div`
  margin: 20px 0 0 20px;
`;

const LocationListBox = styled.div`
  display: flex;
  margin-top: 10px;
  height: 50px;
  &:hover {
    background-color: #f1f3f5;
    cursor: pointer;
  }
`;
const HotelIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.mainColor};
  margin-right: 10px;
`;

const HotelName = styled.div`
  font-size: 15px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;
const HotelLocation = styled.div`
  font-size: 10px;
  color: #7c8085;
`;

export default LocationModal;
