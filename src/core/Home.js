import React, { useState, useEffect } from "react";
import { GetProducts } from "./Helper/coreapicalls";

export default function Home() {
  const [Products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const Load_Products = () => {
    GetProducts().then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(error);
      } else {
        setProducts(data);
      }
    });
  };
  useEffect(() => {
    Load_Products();
  }, []);

  return (
    <div>
      <h2> This is home componenet</h2>
      <div className="row">
        {Products.map((Product, index) => {
          return <div key={index}>{Product.name}</div>;
        })}
      </div>
    </div>
  );
}
