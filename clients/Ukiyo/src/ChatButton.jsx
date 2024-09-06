import React, { useState, useEffect, useRef } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const ChatButton = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [chat, setChat] = useState(null);
  const [error, setError] = useState(null);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  const API_KEY = "AIzaSyBvSRscNFc0vuO3jd25B5RugwQ5H9PtmWs"; // Your API key
  const MODEL_NAME = "gemini-1.0-pro-001"; // Model name

  const genAI = new GoogleGenerativeAI(API_KEY);

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  // Initialize the chat
  useEffect(() => {
    const initChat = async () => {
      try {
        if (!chat) {
          const newChat = await genAI
            .getGenerativeModel({ model: MODEL_NAME })
            .startChat({
              generationConfig,
              safetySettings,
              history: messages.map((msg) => ({
                text: msg.text,
                role: msg.role,
              })),
            });
          setChat(newChat);
        }
      } catch (error) {
        console.error("Chat initialization failed:", error);
        setError("Failed to initialize chat.");
      }
    };
    initChat();
  }, [chat, messages]);

  // Function to handle sending messages
  const handleSendMessage = async () => {
    if (!userInput.trim() || loading) return; // Prevent sending empty messages or multiple clicks
    setLoading(true);
    setError(null);

    // Add the user message to the chat history
    const newMessage = { text: userInput, role: "user", timestamp: new Date() };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setUserInput("");

    try {
      if (chat) {
        const result = await chat.sendMessage(userInput);
        const botMessage = {
          text: result.response.text(),
          role: "bot",
          timestamp: new Date(),
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (err) {
      console.error("Message sending failed:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Toggle chat visibility
  const toggleChatVisibility = () => {
    setIsChatVisible((prev) => !prev);
  };

  // Handle Enter key press for sending a message
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
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
        <div
          className="chatbox absolute bottom-10 right-10 bg-white rounded-lg shadow-md p-4 max-h-[400px] max-w-[300px] overflow-y-auto overflow-x-hidden"
          ref={chatBoxRef}
        >
          <ul className="chat-list">
            {messages.map((msg, index) => (
              <li
                key={index}
                className={`chat-message ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <p className="chat-message-content">{msg.text}</p>
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
              onKeyPress={handleKeyPress}
              disabled={loading}
            />
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg ml-2"
              onClick={handleSendMessage}
              disabled={!userInput.trim() || loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default ChatButton;
