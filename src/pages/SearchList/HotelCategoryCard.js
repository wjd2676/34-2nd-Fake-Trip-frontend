import React, { useState } from "react";
import styled from "styled-components";

const HotelCategoryCard = ({
  name,
  filter,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <HotelCategory
      onClick={() => {
        setSelectedCategory(name);
        filter();
      }}
      primary={selectedCategory === name}
    >
      <HotelCategoryInnereBox primary={selectedCategory === name}>
        # {name}
      </HotelCategoryInnereBox>
    </HotelCategory>
  );
};

const HotelCategory = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 38px;
  border: 1px solid ${props => (props.primary ? "#52ABF3" : "#dee2e6")};
  border-radius: 20px;
  margin: 5px 0 5px 0;
  background-color: ${props => (props.primary ? "#E7F4FD" : "white")};

  &:hover {
    cursor: pointer;
    /* transition: 0.5s;
    background-color: #e3e3e4; */
  }
`;

const HotelCategoryInnereBox = styled.div`
  display: flex;
  justify-content: left;
  width: 190px;
  color: ${props => (props.primary ? "#52ABF3" : "#666d75")};
  font-size: 15px;
`;

export default HotelCategoryCard;
