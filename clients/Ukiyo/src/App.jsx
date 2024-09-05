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

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* ... other routes */}
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<Service />} />
          <Route path="/a" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
