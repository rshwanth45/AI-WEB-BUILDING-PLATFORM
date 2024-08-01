// PlatformFeaturesSection.js
import React from "react";
import Feature from "./Feature"; // Import the Feature component
import { Link } from "react-router-dom";

const PlatformFeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <Feature
            heading="Built-In Web Templates"
            info="Quickly edit websites using a variety of pre-designed templates. These templates are ready to use, allowing you to jumpstart your web projects with minimal effort."
          />
          <Feature
            heading="Visual Editor"
            info="Easily customize your website with a drag-and-drop interface. The visual editor makes it simple to create and modify web pages without needing coding skills."
          />
          <Feature
            heading="Code Editor"
            info="Edit your website's code directly with an interactive, browser-based code editor. This feature offers advanced coding capabilities for those who prefer hands-on development."
          />
          <Feature
            heading="NLP Template Finder"
            info="Leverage natural language processing to find the perfect web template based on user input. This smart feature suggests templates tailored to your specific needs and preferences."
          />
          <Feature
            heading="Gemini Chatbot"
            info="Get instant answers and support from the Gemini chatbot. It assists with queries and provides guidance throughout your web development process."
          />
          {/* Add more Feature components as needed */}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to={`/explore`}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformFeaturesSection;
