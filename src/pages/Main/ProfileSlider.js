import React from "react";
import * as PS from "./ProfileSlider-style";

const ProfileSlider = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMod: true,
  };
  return (
    <PS.CarouselBox>
      <PS.StyledSlider {...settings}>
        <PS.SliderEach />
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </PS.StyledSlider>
    </PS.CarouselBox>
  );
};

export default ProfileSlider;
