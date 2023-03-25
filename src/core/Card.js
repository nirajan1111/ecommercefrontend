import React, { useState } from "react";
import { addItemToCart } from "./Helper/carthelper";
import { redirect } from "react-router-dom";

import ImageHelper from "./Helper/ImageHelper";
var isAuthenticated = true;
const Card = ({ product, addtoCart = true, removeFromCart = false }) => {
  const CardTitle = product ? product.name : "A phot from pixels";
  const CardDescription = product
    ? product.description
    : " an description for the product ";
  const CardPrice = product ? product.price : " Default ";

  const addToCart = () => {
    if (isAuthenticated) {
      addItemToCart(product, () => {});
      console.log("shfbjhf");
    } else {
      console.log("fshfj");
    }
  };
  const getAredirect = (redirect) => {
    if (redirect) {
      return <redirect to="/cart" />;
    }
  };
  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addtoCart}
          className="btn btn-block btn-outline-success mt-2 mb-2"
        >
          Add to Cart
        </button>
      )
    );
  };
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            console.log("Product removed from cart");
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div className="card text-white bg-dark border border-info">
      <div className="card-header lead">{CardTitle}</div>
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          {CardDescription}
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ {CardPrice}</p>
        <div className="row">
          <div className="col-12">{showAddToCart(addToCart)}</div>
          <div className="col-12">{showRemoveFromCart(addToCart)}</div>
        </div>
      </div>
    </div>
  );
};
export default Card;
