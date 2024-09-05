import React from "react";

const Header = () => {
  return (
    <header
      className="bg-cover bg-center bg-no-repeat opacity-90"
      style={{ backgroundImage: `url('../src/assets/b3.jpeg')` }}
    >
      <div className="container mx-auto text-center py-72">
        <h2 className="leading-[1px] font-mono text-3xl font-bold text-black mb-4">
          WITH 浮世！
        </h2>
        <h1 className="letter-spacing-tight font-serif text-6xl font-bold text-black mb-8">
          DON'T CALL <br />
          IT A DREAM <br />
          CALL IT A PLAN
        </h1>
        <br />
        <br />
        <a
          className="font-sans text-2xl bg-white hover:bg-yellow-300 text-black font-bold py-5 px-10 rounded"
          href="#services"
        >
          Learn More
        </a>
      </div>
    </header>
  );
};

export default Header;
