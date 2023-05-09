import React, { useState, useEffect } from "react";
import "./Totales.css";

function AmountsByCategory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/products/all")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [products]);

  return (
    <div className="total">
      <h2>Count by Category</h2>
      <ul>
        {products.countByCategory?.map((category) => (
          <li key={category.category_name}>
            {category.category_name}: {category.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AmountsByCategory;
