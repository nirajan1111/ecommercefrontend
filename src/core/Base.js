import React from "react";

const Base = ({
  title = "My title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h3 className="display-4">{title}</h3>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <div className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success text-white text-center py-3">
          <h5>
            If any queries is there , reach out to me at
            nirajansah0001@gmail.com
          </h5>
          <button className="btn btn-warning btn-lg">Contact Us</button>
          <div className="container">
            <span className="text-white">
              An amazing Django React fullstack coure
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Base;
