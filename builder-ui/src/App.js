import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { CodeProvider } from "./contexts/CodeContext";

function App() {
  return (
    <CodeProvider>
      <Header />
      <Outlet />
    </CodeProvider>
  );
}

export default App;
