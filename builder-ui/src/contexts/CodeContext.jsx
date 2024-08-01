import React, { createContext, useState, useContext } from "react";

// Create the context
const CodeContext = createContext();

// Custom hook to use the code context
export const useCodeContext = () => useContext(CodeContext);

// Provider component to wrap your application and manage the state
export const CodeProvider = ({ children }) => {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");

  const values = {
    htmlCode,
    cssCode,
    jsCode,
    setHtmlCode,
    setCssCode,
    setJsCode,
  };

  return <CodeContext.Provider value={values}>{children}</CodeContext.Provider>;
};
