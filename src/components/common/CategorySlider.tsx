import { cuisinesData } from "@/data";
import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";

const CategorySlider = () => {
  const settings: Settings = {
    className: "categories-sliders",
    dots: true,
    arrows: true,
    infinite: true,
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
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {cuisinesData?.map((cuisine) => (
        <Link
          to={`recipes/cuisine/${cuisine?.type}`}
          key={cuisine.type}
          className="cuisine-item"
        >
          <img src={cuisine?.image} alt={cuisine?.type} />
          <p className="cuisine-item-name">{cuisine?.type}</p>
        </Link>
      ))}
    </Slider>
  );
};

export default CategorySlider;
