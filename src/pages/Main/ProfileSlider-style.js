import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 캐러셀
export const CarouselBox = styled.div``;

export const StyledSlider = styled(Slider)`
  background-color: yellow;
  width: 520px;
  height: 140px;
  border-radius: 5px;
`;

export const SliderEach = styled.img.attrs({
  src: "https://cdn.pixabay.com/photo/2017/04/24/07/58/holland-2255716_1280.jpg",
})`
  width: 520px;
  height: 140px;
  border-radius: 5px;
`;
