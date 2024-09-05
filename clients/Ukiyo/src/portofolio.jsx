import React from "react";

const Portfolio = () => {
  return (
    <section className="flex bg-gray-100 page-section " id={"portfolio"}>
      <div className=" container mx-auto justify-center">
        <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
        <p className="text-lg text-center text-gray-500 mb-16">
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="text-center grid grid-cols-3 md:grid-cols-3 gap-8">
          {/*Porto 1*/}
          <div className="portfolio-item max-w-2xl mx-auto">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <img
                className="w-full rounded-lg"
                src="../src/assets/p1.jpeg"
                alt="..."
              />
              <div className="portfolio-hover flex justify-center items-center h-auto bg-black bg-opacity-75">
                <i className="fas fa-plus fa-3x text-white"></i>
              </div>
            </a>
            <h3 className="text-xl font-bold mt-4">Threads</h3>
            <p className="text-gray-500">Illustration</p>
          </div>

          {/*Porto 2*/}
          <div className="portfolio-item max-w-2xl mx-auto">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <img
                className="w-full h-30 rounded-lg"
                src="../src/assets/b3.jpeg"
                alt="..."
              />
              <div className="portfolio-hover flex justify-center items-center h-auto bg-black bg-opacity-75">
                <i className="fas fa-plus fa-3x text-white"></i>
              </div>
            </a>
            <h3 className="text-xl font-bold mt-4">Threads</h3>
            <p className="text-gray-500">Illustration</p>
          </div>

          {/*Porto 3*/}
          <div className="portfolio-item max-w-2xl mx-auto">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <img
                className="w-full h-30 rounded-lg"
                src="../src/assets/b3.jpeg"
                alt="..."
              />
              <div className="portfolio-hover flex justify-center items-center h-auto bg-yellow bg-opacity-75">
                <i className="fas fa-plus fa-3x text-white"></i>
              </div>
            </a>
            <h3 className="text-xl font-bold mt-4">Threads</h3>
            <p className="text-gray-500">Illustration</p>
          </div>

          {/* Repeat for other portfolio items */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
