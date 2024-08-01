import React from "react";
import { Link } from "react-router-dom";
import TemplateCategoryCard from "./TemplateCategoryCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categories from "../../../data/categories.json"; // Import categories JSON

// Import React Icons for arrows
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ExploreTemplatesSection = () => {
  // Custom arrow components
  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="slick-arrow slick-prev fill-white"
      aria-label="Previous"
      style={{ left: "-30px" }}
    >
      <IoIosArrowBack />
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="slick-arrow slick-next fill-white"
      aria-label="Next"
      style={{ right: "-30px" }}
    >
      <IoIosArrowForward />
    </button>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="bg-gray-900 py-12">
      {" "}
      {/* Changed background color to light black */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          {" "}
          {/* Changed text color to white */}
          Explore Templates
        </h2>
        <p className="text-center text-lg mb-8 text-white">
          {" "}
          {/* Changed text color to white */}
          Discover our trendy collection of website templates across various
          categories.
        </p>
        <div className="mb-8">
          <Slider {...sliderSettings}>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/explore/${category.name}`}
                className="px-4"
              >
                <TemplateCategoryCard category={category} />
              </Link>
            ))}
          </Slider>
        </div>
        <div className="flex justify-center">
          <Link
            to={`/explore`}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreTemplatesSection;
