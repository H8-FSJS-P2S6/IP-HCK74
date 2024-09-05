import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you're using Axios for API calls

const ChatButton = () => {
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [messages, setMessages] = useState([
    { role: "system", content: "Hi there! How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
  };

  const sendMessage = async () => {
    if (userInput.trim() !== "") {
      setMessages([...messages, { role: "user", content: userInput }]);
      setUserInput("");

      try {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: messages,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
          }
        );

        setMessages([
          ...messages,
          {
            role: "assistant",
            content: response.data.choices[0].message.content,
          },
        ]);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
        onClick={toggleChatVisibility}
      >
        Chat
      </button>
      {isChatVisible && (
        <div className="absolute bottom-10 right-10 bg-white rounded-lg shadow-md p-4 max-h-screen overflow-y-auto">
          <ul>
            {messages.map((msg, index) => (
              <li key={index}>
                <p
                  className={
                    msg.role === "system" ? "text-gray-700" : "text-blue-500"
                  }
                >
                  {msg.content}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex mt-4">
            <input
              type="text"
              id="userInput"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter your message"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg ml-2"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatButton;
