import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as PC from "./ProductCard-style";

const ProductCard = ({ imgUrl, location, name, price, grade }) => {
  return (
    <PC.CardBox>
      <PC.CardImg alt="picture" src={imgUrl}></PC.CardImg>
      <p>호텔 {location}</p>
      <div>{name}</div>
      <div>★ {grade} 성급</div>
      <div>{price.toLocaleString("ko-KR")} 원</div>
    </PC.CardBox>
  );
};

export default ProductCard;
