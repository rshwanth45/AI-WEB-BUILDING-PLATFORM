// PromptComponent.jsx
import React, { useState } from "react";
import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// const baseURL = process.env.BASE_URL;

function PromptComponent() {
  const [prompt, setPrompt] = useState("");
  const [website, setWebsite] = useState(null);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/generate-website`,
        {
          prompt,
        }
      );
      setWebsite(response.data);
    } catch (error) {
      console.error("Error generating website:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
      />
      <button onClick={handleSubmit}>Generate Website</button>
      {website && <iframe srcDoc={website} title="Generated Website" />}
    </div>
  );
}

export default PromptComponent;
