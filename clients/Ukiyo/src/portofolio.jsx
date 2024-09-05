import React from "react";

const Portfolio = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="text-center grid grid-cols-3 md:grid-cols-3 gap-10">
          <div className="col mb-5">
            <div className="card h-100">
              {/* Product image*/}
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />
              {/* Product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name*/}
                  <h5 className="fw-bolder">Special Item</h5>
                  {/* Product reviews*/}
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                  </div>
                  {/* Product price*/}
                  <span className="text-muted text-decoration-line-through">
                    $20.00
                  </span>
                  $18.00
                </div>
              </div>
              {/* Product actions*/}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              {/* Sale badge*/}
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                Sale
              </div>

              {/* Product image*/}
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />
              {/* Product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name*/}
                  <h5 className="fw-bolder">Special Item</h5>
                  {/* Product reviews*/}
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                  </div>
                  {/* Product price*/}
                  <span className="text-muted text-decoration-line-through">
                    $20.00
                  </span>
                  $18.00
                </div>
              </div>
              {/* Product actions*/}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              {/* Sale badge*/}
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                Sale
              </div>

              {/* Product image*/}
              <img
                className="card-img-top"
                src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                alt="..."
              />
              {/* Product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name*/}
                  <h5 className="fw-bolder">Special Item</h5>
                  {/* Product reviews*/}
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                    <div className="bi-star-fill" />
                  </div>
                  {/* Product price*/}
                  <span className="text-muted text-decoration-line-through">
                    $20.00
                  </span>
                  $18.00
                </div>
              </div>
              {/* Product actions*/}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#">
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card h-100">
              {/* Sale badge*/}
              <div
                className="badge bg-dark text-white position-absolute"
                style={{ top: "0.5rem", right: "0.5rem" }}
              >
                Sale
              </div>

              {/* Porto 2
          <div className="portfolio-item max-w-2xl mx-auto">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <img
                className="w-full h-30 rounded-lg"
                src="/b3.jpeg"
                alt="..."
              />
              <div className="portfolio-hover flex justify-center items-center h-auto bg-black bg-opacity-75">
                <i className="fas fa-plus fa-3x text-white"></i>
              </div>
            </a>
            <h3 className="text-xl font-bold mt-4">Threads</h3>
            <p className="text-gray-500">Illustration</p>
          </div> */}

              {/*Porto 3*/}
              {/* <div className="portfolio-item max-w-2xl mx-auto">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <img
                className="w-full h-30 rounded-lg"
                src="/b3.jpeg"
                alt="..."
              />
              <div className="portfolio-hover flex justify-center items-center h-auto bg-yellow bg-opacity-75">
                <i className="fas fa-plus fa-3x text-white"></i>
              </div>
            </a>
            <h3 className="text-xl font-bold mt-4">Threads</h3>
            <p className="text-gray-500">Illustration</p>
          </div> */}

              {/* Repeat for other portfolio items */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
