import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane, FaCommentDots } from "react-icons/fa";

const ChatPop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (userInput.trim() === "") return;

    // Add user message to the message list
    const newMessages = [...messages, { type: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");

    try {
      // Call the Gemini API
      const response = await axios.post("http://localhost:5000/api/gemini", {
        prompt: userInput,
      });

      // Add response message to the message list
      const newMessagesWithResponse = [
        ...newMessages,
        { type: "response", text: response.data.message },
      ];
      setMessages(newMessagesWithResponse);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = [
        ...newMessages,
        { type: "response", text: "Sorry, something went wrong." },
      ];
      setMessages(errorMessage);
    }
  };

  return (
    <>
      <div
        className={`fixed bottom-16 right-20 w-72 max-h-96 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ${
          isOpen ? "translate-y-0 bottom-5" : "translate-y-full bottom-16"
        }`}
      >
        <div
          className="flex items-center p-3 bg-blue-600 text-white cursor-pointer"
          onClick={handleToggle}
        >
          <FaCommentDots className="mr-2" />
          <span>Chat with Gemini</span>
        </div>
        {isOpen && (
          <div className="relative">
            <div className="p-3 overflow-hidden">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 p-2 rounded ${
                    message.type === "user"
                      ? "bg-blue-100 self-end"
                      : "bg-gray-100 self-start"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="flex p-3 border-t border-gray-300 bg-white w-100">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg outline-none"
              />
              <button
                onClick={handleSend}
                className="ml-2 p-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        )}
      </div>
      {!isOpen && (
        <button
          className="fixed bottom-5 right-5 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={handleToggle}
        >
          <FaCommentDots />
        </button>
      )}
    </>
  );
};

export default ChatPop;
