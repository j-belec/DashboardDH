import { useState, useEffect } from "react";
import "./Totales.css";

function TotalProducts() {
  const [products, setProducts] = useState("");

  useEffect(() => {
    fetch("http://localhost:3100/api/products/all")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products.count);
      });
  }, []);

  return (
    <div className="total">
      <h2>Total de productos</h2>
      <h3>{products}</h3>
    </div>
  );
}

export default TotalProducts;
