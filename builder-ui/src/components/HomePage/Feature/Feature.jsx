// Feature.js
import React from "react";

const Feature = ({ image, heading, info }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="border-t-4 border-blue-600 mb-4"></div>
      <div className="flex flex-col md:flex-col items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-justify">
          <h2 className="text-2xl font-bold mb-2">{heading}</h2>
          <p className="text-lg">{info}</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
