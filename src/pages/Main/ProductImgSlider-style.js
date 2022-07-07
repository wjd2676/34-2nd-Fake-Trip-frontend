import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 캐러셀
export const CarouselBox = styled.div``;

export const StyledSlider = styled(Slider)`
  width: 1000px;
  height: 254px;
  border-radius: 5px;
  .slick-arrow {
    border: 1px solid lightgray;
    background-color: lightgray;
    border-radius: 50%;
  }
`;
