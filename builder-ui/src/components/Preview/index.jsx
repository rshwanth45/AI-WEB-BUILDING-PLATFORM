import React from "react";
import { Link } from "react-router-dom";
import { useCodeContext } from "../../contexts/CodeContext";
import { ReactComponent as CEIcon } from "../../assets/icons/CEIcon.svg";
import { ReactComponent as VEIcon } from "../../assets/icons/VEIcon.svg";

const Preview = () => {
  const { htmlCode, cssCode, jsCode, setHtmlCode, setCssCode, setJsCode } =
    useCodeContext();

  const iframeContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>${cssCode}</style>
    </head>
    <body>
      ${htmlCode}
      <script>${jsCode}</script>
    </body>
    </html>
  `;

  const handleEditorClick = (path) => {
    // Update context if necessary before navigating
    setHtmlCode(htmlCode);
    setCssCode(cssCode);
    setJsCode(jsCode);
  };

  return (
    <div className="relative h-screen">
      <iframe
        srcDoc={iframeContent}
        title="Preview"
        className="w-full h-full border-none"
      ></iframe>
      <div className="absolute top-10 right-4 flex flex-col space-y-8">
        <Link
          to="/visual-editor"
          onClick={() => handleEditorClick("/visual-editor")}
          className="relative"
        >
          <div className="group flex items-center p-2 rounded-full transition-all duration-300 bg-blue-600">
            <VEIcon className="w-12 h-12 text-white bg-blue-600 rounded-full p-3 hover:bg-blue-700 transition-colors duration-300 fill-white" />
          </div>
        </Link>

        <Link
          to="/code-editor"
          onClick={() => handleEditorClick("/code-editor")}
          className="relative"
        >
          <div className="group flex items-center p-2 rounded-full transition-all duration-300 bg-green-600">
            <CEIcon className="w-12 h-12 text-white bg-green-600 rounded-full p-3 hover:bg-green-700 transition-colors duration-300 fill-white" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Preview;
