// pages/App.js
import React from "react";
import Editor from "../../components/VisualEditor/editor";
import CustomButton from "../../components/CornerButton/customButton";
import Chat from "../../components/Chat";

function App() {
  return (
    <>
      <Editor />
      <CustomButton icon="CEIcon" link="/code-editor" />
      <div className="fixed bottom-5 right-5 z-10">
        <Chat />
      </div>
    </>
  );
}

export default App;
