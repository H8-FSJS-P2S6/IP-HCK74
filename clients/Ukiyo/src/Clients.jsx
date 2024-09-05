import React from "react";
const Clients = () => {
  return (
    <div className="page-section" id="Clients">
      <div className="justify-center container">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-20">
          {/*<div className="row align-items-center">*/}
          <a href="#!">
            <img
              className="w-40 h-40 mb-4 img-fluid img-brand d-block mx-auto"
              src="../src/assets/img/logos/microsoft.svg"
              alt="..."
              aria-label="Microsoft Logo"
            />
          </a>
          {/*</div>*/}
          {/*<div className="col-md-3 col-sm-6 my-3">*/}
          <a href="#!">
            <img
              className="w-40 h-40 mb-4 img-fluid img-brand d-block mx-auto"
              src="../src/assets/img/logos/google.svg"
              alt="..."
              aria-label="Google Logo"
            />
          </a>
          {/*</div>*/}
          {/*<div className="col-md-3 col-sm-6 my-3">*/}
          <a href="#!">
            <img
              className="w-40 h-40 mb-4 img-fluid img-brand d-block mx-auto"
              src="../src/assets/img/logos/facebook.svg"
              alt="..."
              aria-label="Facebook Logo"
            />
          </a>
          {/*</div>*/}
          {/*<div className="col-md-3 col-sm-6 my-3">*/}
          <a href="#!">
            <img
              className="w-40 h-40 mb-4 img-fluid img-brand d-block mx-auto"
              src="../src/assets/img/logos/ibm.svg"
              alt="..."
              aria-label="IBM Logo"
            />
          </a>
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default Clients;
