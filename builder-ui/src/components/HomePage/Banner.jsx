// Banner.js
import React from "react";
import bannerImage1 from "../../assets/banners/banner1.jpg"; // Replace with your banner image path
import bannerImage2 from "../../assets/banners/banner2.jpg"; // Replace with your banner image path
import { Link } from "react-router-dom";

const Banner = () => {
  // Generate a motivational quote
  const motivationalQuote = "Build Your Dream Website Today";

  // Generate a friendly paragraph
  const friendlyPara =
    "Create single page websites effortlessly. No coding required.";

  return (
    <div className="relative flex items-center justify-center overflow-hidden flex-col pb-10">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-white text-center px-6 w-3/6 mt-32">
        <h1 className="text-7xl md:text-7xl font-medium leading-tight mb-6 leading-5">
          {motivationalQuote}
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-3">{friendlyPara}</p>
        <Link
          to={`/explore`}
          className="text-xl bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
      <div className="inset-0 flex items-center justify-center mt-10">
        <img
          src={bannerImage1}
          alt="Banner"
          className="w-2/5 mx-2 object-center" // New class for 30% width
        />
        <img
          src={bannerImage2}
          alt="Banner"
          className="w-2/5 mx-2 object-center" // New class for 30% width
        />
      </div>
    </div>
  );
};

export default Banner;
