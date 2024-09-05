import React from "react";

const Services = () => {
  return (
    <section className="page-section" id="service">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
        <p className="text-lg text-center text-gray-500 mb-16">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-4 h-full">
            <span className="fa-stack fa-4x mb-4">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
            </span>
            <img
              className="rounded-lg w-40 h-40 mb-4"
              src="../src/assets/consult.jpg"
              alt="Consult"
            />
            <h3 className="text-xl font-bold mb-2">Consult</h3>
            <p className="text-gray-500 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 h-full">
            <span className="fa-stack fa-4x mb-4">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-laptop fa-stack-1x fa-inverse" />
            </span>
            <img
              className="rounded-lg w-40 h-40 mb-4"
              src="../src/assets/surpey.jpg"
              alt="Survey"
            />
            <h3 className="text-xl font-bold mb-2">Survey</h3>
            <p className="text-gray-500 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-4 h-full">
            <span className="fa-stack fa-4x mb-4">
              <i className="fas fa-circle fa-stack-2x text-primary" />
              <i className="fas fa-lock fa-stack-1x fa-inverse" />
            </span>
            <img
              className="rounded-lg w-40 h-40 mb-4"
              src="../src/assets/surpey.jpg"
              alt="Web Security"
            />
            <h3 className="text-xl font-bold mb-2">Web Security</h3>
            <p className="text-gray-500 flex-grow">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
