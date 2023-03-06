import React, { useState } from "react";
import image from "./logo.png";

import ImageHelper from "./Helper/ImageHelper";
const Card = ({ product, addtoCart = true, removeCart = false }) => {
  const CardTitle = product ? product.name : "A phot from pixels";
  const CardDescription = product
    ? product.description
    : " an description for the product ";
  const CardPrice = product ? product.price : " Default ";
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{CardTitle}</div>
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {CardDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {CardPrice}</p>
        <div className="row">
          <div className="col-12">
            <button
              onClick={() => {}}
              className="btn btn-block btn-outline-success mt-2 mb-2"
            >
              Add to Cart
            </button>
          </div>
          <div className="col-12">
            <button
              onClick={() => {}}
              className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
