import React from "react";

const TemplateCategoryCard = ({ category }) => {
  const imageUrl =
    process.env.PUBLIC_URL + "/images/categories/" + category.image;
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer">
      <img
        src={imageUrl}
        alt={category.name}
        className="w-full h-72 object-cover" // Increased height to h-64 (adjust as needed)
      />
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-bold">{category.name}</h3>
      </div>
    </div>
  );
};

export default TemplateCategoryCard;
