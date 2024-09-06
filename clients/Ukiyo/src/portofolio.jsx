import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [category, setCategory] = useState([]);
  const fetchCategory = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:3000/category",
      });
      setCategory(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="text-center grid grid-cols-3 md:grid-cols-3 gap-10">
          {category.map((item) => {
            return (
              <div key={item.id} className="col mb-5">
                <div className="card h-100">
                  {/* Sale badge*/}
                  <div
                    className="badge bg-dark text-white position-absolute"
                    style={{ top: "0.5rem", right: "0.5rem" }}
                  >
                    Sale
                  </div>

                  {/* Product image*/}
                  <img className="card-img-top" src={item.imgUrl} alt="..." />
                  {/* Product details*/}
                  <div className="card-body p-4">
                    <div className="text-center">
                      {/* Product name*/}
                      <h5 className="fw-bolder">{item.title}</h5>
                      {/* Product reviews*/}
                      <div className="  d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                        <div className="bi-star-fill" />
                      </div>
                    </div>
                  </div>
                  {/* Product actions*/}
                  <div className=" card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        {item.description}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
