// components/CornerButton/CustomButton.js
import React from "react";
// Importing the icon
import { ReactComponent as VEIcon } from "../../assets/icons/VEIcon.svg"; // Adjust the path as needed
import { ReactComponent as CEIcon } from "../../assets/icons/CEIcon.svg"; // Adjust the path as needed

import { Link } from "react-router-dom";

const CustomButton = ({ icon, link }) => {
  return (
    <Link to={link} className="fixed bottom-4 right-4 z-50">
      {icon === "VEIcon" ? (
        <VEIcon className="w-12 h-12 text-white bg-blue-600 rounded-full p-3 hover:bg-blue-700 transition-colors duration-300 fill-white" />
      ) : (
        <CEIcon className="w-12 h-12 text-white bg-blue-600 rounded-full p-3 hover:bg-blue-700 transition-colors duration-300 fill-white" />
      )}
    </Link>
  );
};

export default CustomButton;
