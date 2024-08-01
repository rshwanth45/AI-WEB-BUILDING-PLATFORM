// components/Explore/TemplateCard.js
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./card-flip.css"; // Import the CSS file for the flip animation
import { useCodeContext } from "../../contexts/CodeContext";

const TemplateCard = ({ template }) => {
  const { setHtmlCode, setCssCode, setJsCode } = useCodeContext(); // Destructure context setters
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleOpenClick = () => {
    // Update context with template code (replace with actual code as needed)
    setHtmlCode(template.HTML);
    setCssCode(template.CSS);
    setJsCode(template.JS);

    // Redirect to the preview page
    navigate("/preview");
  };

  const imageUrl =
    process.env.PUBLIC_URL + "/images/categories/" + template.imageUrl;
  return (
    <div className="flip-card rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl">
      <div className="flip-card-inner">
        <div
          className="flip-card-front absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="relative flex flex-col justify-end p-4 bg-white bg-opacity-20 h-full">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
              onClick={handleOpenClick}
            >
              Open
            </button>
          </div>
        </div>
        <div className="flip-card-back bg-white flex flex-col justify-center items-center p-4">
          <div className="text-lg font-semibold text-gray-800">
            {template.heading}
          </div>
          <div className="text-sm text-gray-600 mt-2">{template.info}</div>
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
            onClick={handleOpenClick}
          >
            Open
          </button>
        </div>
      </div>
    </div>
  );
};

TemplateCard.propTypes = {
  template: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    html: PropTypes.string.isRequired, // Add these prop types
    css: PropTypes.string.isRequired,
    js: PropTypes.string.isRequired,
  }).isRequired,
};

export default TemplateCard;
