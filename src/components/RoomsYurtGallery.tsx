import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { roomsYurt } from "../data";

const RoomsYurtGallery = () => {
  return (
    <StyledYurtGallery>
      <SimpleSlider />
    </StyledYurtGallery>
  );
};

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [],
  };

  const SliderCustom: any = Slider;

  return (
    <SliderCustom {...settings}>
      {roomsYurt.map((i) => (
        <img src={i.imagePath} alt="yurt-photo" />
      ))}
    </SliderCustom>
  );
}

const StyledYurtGallery = styled.div``;

export default RoomsYurtGallery;
