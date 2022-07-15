import React from "react";
import * as s from "./Styled.SearchList";
import { useNavigate } from "react-router-dom";

const ItemCard = ({
  id,
  image,
  name,
  // stars_for_review,
  // reviews,
  grade,
  address,
  price,
}) => {
  const navigate = useNavigate();

  return (
    <s.ItemBox
      onClick={() => {
        navigate(`/productdetail/${id}`);
      }}
    >
      <s.HotelImg src={image} />
      <s.HotelInfoBox>
        <div>
          <s.HotelTitle>{name}</s.HotelTitle>
          <s.StarsLocation>
            <span>{grade} </span>
            <span>{address}</span>
          </s.StarsLocation>
        </div>
        <s.HotelPrice>{price}원</s.HotelPrice>
      </s.HotelInfoBox>
    </s.ItemBox>
  );
};
export default ItemCard;
