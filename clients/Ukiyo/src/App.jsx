import { Link } from "react-router-dom";
import "../index.css";
import React from "react";
import Service from "./service.jsx";
import About from "./about.jsx";
import Team from "./team.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import Services from "./service.jsx";
import Register from "./Register.jsx";
import MainPage from "./mainpage.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Outlet } from "react-router-dom";
import Admin from "./admin/admin.jsx";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="1061303935747-28c56k1bnv4u9tokda2vp8a1oh2r8p15.apps.googleusercontent.com">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/services" element={<Service />} />
            <Route path="/a" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
