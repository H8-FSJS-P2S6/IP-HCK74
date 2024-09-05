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
import Shop from "./ProductCard.jsx";

const MainPage = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <Navbar />
      <Header />
      <Service />
      <Portfolio />
      <About />
      <Team />
      <Contact />
      <Footer />
      <ChatButton />
    </>
  );
};

export default MainPage;
