import React from "react";
import Navbar from "./nav.jsx";
import Header from "./header.jsx";
import Portfolio from "./portofolio.jsx";
import Service from "./service.jsx";
import About from "./about.jsx";
import Team from "./team.jsx";
import Clients from "./Clients.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import ChatButton from "./ChatButton.jsx";

const MainPage = () => {
  return (
    <>
      <base href="App.jsx" />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>UKIYO INTERIOR DESIGN</title>
      {/* Favicon*/}
      <link rel="icon" type="image/x-icon" href="../assets/favicon.ico" />
      <link href="../index.css" rel="stylesheet" />
      <Navbar />
      <Header />
      <Service />
      <Portfolio />
      <About />
      <Team />
      <Clients />
      <Contact />
      <Footer />
      <ChatButton />
    </>
  );
};

export default MainPage;
