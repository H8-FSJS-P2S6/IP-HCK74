import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

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
        const response = await axios.post("http://localhost:3000/api", {
          messages: messages,
        });

        setMessages([
          ...messages,
          { role: "system", content: response.data.response },
        ]);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    // Scroll to bottom after adding a new message
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  };

  const chatBoxRef = useRef(null);

  return (
    <div className="fixed bottom-5 right-5">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full"
        onClick={toggleChatVisibility}
      >
        Chat
      </button>
      {isChatVisible && (
        <div
          className="chatbox absolute bottom-10 right-10 bg-white rounded-lg shadow-md p-4 max-h-[400px] max-w-[300px] overflow-y-auto overflow-x-hidden"
          ref={chatBoxRef}
        >
          <ul className="chat-list">
            {messages.map((msg, index) => (
              <li
                key={index}
                className={`chat-message ${
                  msg.role === "user" ? "chat-message-right" : ""
                }`}
              >
                <p className="chat-message-content">{msg.content}</p>
              </li>
            ))}
          </ul>
          <div className="flex mt-4 w-max h-max">
            <input
              type="text"
              id="userInput"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Enter your message"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg ml-2"
              onClick={sendMessage}
              disabled={!userInput.trim()}
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
