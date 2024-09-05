import "../index.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import Register from "./Register.jsx";
import MainPage from "./mainpage.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="1061303935747-28c56k1bnv4u9tokda2vp8a1oh2r8p15.apps.googleusercontent.com">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/a" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
