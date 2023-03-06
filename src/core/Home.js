import React, { useState, useEffect } from "react";
import { GetProducts } from "./Helper/coreapicalls";
import Base from "./Base";
import Card from "./Card";
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
    <Base title="Home Page" description="Welcome to our store">
      <h2> This is home componenet</h2>
      <div className="row">
        {Products.map((product, index) => {
          return (
            <div key={index} className="col-4 mb-4">
              <Card product={product} />
            </div>
          );
        })}
      </div>
    </Base>
  );
}
