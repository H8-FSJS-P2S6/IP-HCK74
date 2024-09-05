import React from "react";

const Team = () => {
  return (
    <section className="bg-gray-100 page-section" id="Team">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <p className="text-lg text-center text-gray-500 mb-16">
          THIS IS OUR TEAM
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4 h-full">
            <span className="fa-stack fa-4x mb-4">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
            </span>
            <img
              className="rounded-lg w-40 h-40 mb-4"
              src="12.jpg"
              alt="Consult"
            />
            <h3 className="text-xl font-bold mb-2">Patricia</h3>
            <p className="text-gray-500 flex-grow">CEO</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 h-full">
            <span className="fa-stack fa-4x mb-4">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-laptop fa-stack-1x fa-inverse" />
            </span>
            <img
              className="rounded-lg w-40 h-40 mb-4"
              src="11.jpg"
              alt="Survey"
            />
            <h3 className="text-xl font-bold mb-2">John</h3>
            <p className="text-gray-500 flex-grow">Manager </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 h-full">
            <span className="fa-stack fa-4x mb-4">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-lock fa-stack-1x fa-inverse" />
            </span>
            <img
              className="rounded-lg w-40 h-40 mb-4"
              src="13.jpg"
              alt="Web Security"
            />
            <h3 className="text-xl font-bold mb-2">Josh</h3>
            <p className="text-gray-500 flex-grow">Consultant</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
