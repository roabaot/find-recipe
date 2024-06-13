import { mealTypeData } from "@/data";
import React from "react";
import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";

const MealSlider = () => {
  const settings: Settings = {
    className: "meals-slider",
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPaddind: "60px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {mealTypeData?.map((meal) => (
        <div key={meal?.type} className="meal-item-wrapper">
          <Link to={`recipes/meal/${meal?.type}`} className="meal-item">
            <img src={meal?.image} alt={meal?.type} />
            <span className="meal-item-name">{meal?.type}</span>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export default MealSlider;
