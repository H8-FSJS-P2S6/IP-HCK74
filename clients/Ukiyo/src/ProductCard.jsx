import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 px-2">
      <div className="card h-100">
        {/* Product image*/}
        <img className="card-img-top" src={product.image} alt={product.name} />
        {/* Product details*/}
        <div className="card-body p-2">
          <div className="d-grid gap-2">
            {/* Product name*/}
            <h5 className="fw-bolder">{product.name}</h5>
            {/* Product price*/}
            <p>{product.price}</p>
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-2 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <Link
              to={`/product/${product.id}`}
              className="btn btn-outline-dark mt-auto"
            >
              View
            </Link>
          </div>
        </div>
        {/* Sale badge*/}
        {product.sale && (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        )}
      </div>
    </div>
  );
};

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$40.00 - $80.00",
      sale: false,
    },
    {
      id: 2,
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$20.00 - $40.00",
      sale: true,
    },
    {
      id: 3,
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$20.00 - $40.00",
      sale: true,
    },
  ];

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-md-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
