import React, { useState, useEffect } from "react";
import * as P2S from "./ProductImgSlider-style";
import ProductCard from "./ProductCard";

export const ProductSliderRandom = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: true,
    centerMod: true,
  };
  const [productRandomData, setProductRandomData] = useState([]);

  useEffect(() => {
    fetch("http://10.58.7.191:8000/products?sort=random")
      .then(res => res.json())
      .then(res => {
        setProductRandomData(res.results);
      });
  }, []);

  return (
    <P2S.CarouselBox>
      <P2S.StyledSlider {...settings}>
        {productRandomData.map(ele => (
          <ProductCard
            key={ele.id}
            name={ele.name}
            imgUrl={ele.main_image}
            location={ele.region}
            price={ele.price.default}
            grade={ele.grade}
          ></ProductCard>
        ))}
      </P2S.StyledSlider>
    </P2S.CarouselBox>
  );
};

export const ProductSliderJeju = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: true,
    centerMod: true,
  };
  const [productJejuData, setProductJejuData] = useState([]);

  useEffect(() => {
    fetch("http://10.58.7.191:8000/products?sort=random&region=제주도")
      .then(res => res.json())
      .then(res => {
        setProductJejuData(res.results);
      });
  }, []);
  return (
    <P2S.CarouselBox>
      <P2S.StyledSlider {...settings}>
        {productJejuData.map(ele => (
          <ProductCard
            key={ele.id}
            name={ele.name}
            imgUrl={ele.main_image}
            location={ele.region}
            price={ele.price.default}
            grade={ele.grade}
          ></ProductCard>
        ))}
      </P2S.StyledSlider>
    </P2S.CarouselBox>
  );
};

export const ProductSliderPool = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: true,
    centerMod: true,
  };
  const [productPoolData, setProductPoolData] = useState([]);

  useEffect(() => {
    fetch("http://10.58.7.191:8000/products?sort=random&amenity=워터파크")
      .then(res => res.json())
      .then(res => {
        setProductPoolData(res.results);
      });
  }, []);

  return (
    <P2S.CarouselBox>
      <P2S.StyledSlider {...settings}>
        {productPoolData.map(ele => (
          <ProductCard
            key={ele.id}
            name={ele.name}
            imgUrl={ele.main_image}
            location={ele.region}
            price={ele.price.default}
            grade={ele.grade}
          ></ProductCard>
        ))}
      </P2S.StyledSlider>
    </P2S.CarouselBox>
  );
};
