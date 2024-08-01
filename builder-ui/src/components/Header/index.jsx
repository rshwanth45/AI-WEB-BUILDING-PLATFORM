import React, { useState } from "react";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCodeContext } from "../../contexts/CodeContext";

const Header = () => {
  const { htmlCode, cssCode, jsCode, setHtmlCode, setCssCode, setJsCode } =
    useCodeContext();
  const location = useLocation();
  const navigate = useNavigate();

  // Determine if the Save and Preview buttons should be visible based on current route
  const isVisualEditorOrCodeEditor =
    location.pathname.includes("/visual-editor") ||
    location.pathname.includes("/code-editor");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const save = () => {
    // Implement your save logic here
    console.log("Save function called");
  };

  const handleSaveClick = () => {
    // Simulate saving the code (you might have an API call or other logic here)
    setHtmlCode(htmlCode);
    setCssCode(cssCode);
    setJsCode(jsCode);
    alert("Code saved successfully!");
  };

  const handlePreviewClick = () => {
    save();
    navigate("/preview");
  };

  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Web Builder</div>
        <div className="hidden md:flex items-center space-x-8">
          <nav className="space-x-4">
            <Link to="/" className="hover:text-gray-200 px-2">
              Home
            </Link>
            <Link to="/explore" className="hover:text-gray-200 px-2">
              Explore Templates
            </Link>
            <Link
              to="http://127.0.0.1:5000/"
              className="hover:text-gray-200 px-2"
            >
              VisualEditor
            </Link>
            <Link to="/code-editor" className="hover:text-gray-200 px-2">
              CodeEditor
            </Link>
          </nav>

          {isVisualEditorOrCodeEditor && (
            <div className="flex space-x-4">
              <button
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
                onClick={handleSaveClick}
              >
                Save
              </button>
              <button
                onClick={handlePreviewClick}
                className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
              >
                Preview
              </button>
            </div>
          )}

          <div className="flex items-center space-x-4 px-2">
            <Link
              to="/explore"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-300"
            >
              Get Started
            </Link>
            <div className="relative flex items-center space-x-4">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <FaUserCircle className="text-3xl" />
                <span className="hidden md:block">Profile</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 top-12 w-48 bg-white text-black rounded-md shadow-lg py-2 z-50">
                  <Link
                    to="/your-websites"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Your Websites
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            {isSidebarOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-blue-700 text-white z-50 flex flex-col">
            <button
              onClick={toggleSidebar}
              className="self-end p-4 focus:outline-none"
            >
              <FaTimes className="text-2xl" />
            </button>
            <nav className="flex flex-col p-4 space-y-4">
              <Link to="/" className="hover:bg-blue-600 py-2 px-4 rounded">
                Home
              </Link>
              <Link
                to="/explore"
                className="hover:bg-blue-600 py-2 px-4 rounded"
              >
                Explore
              </Link>
              <Link
                to="/visual-editor"
                className="hover:bg-blue-600 py-2 px-4 rounded"
              >
                VisualEditor
              </Link>
              <Link
                to="/code-editor"
                className="hover:bg-blue-600 py-2 px-4 rounded"
              >
                CodeEditor
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
