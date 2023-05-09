import { useState, useEffect } from "react";
import "./Totales.css";

function TotalCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/products/all")
      .then((res) => res.json())
      .then((products) => {
        setCategories(Object.keys(products.countByCategory).length);
      });
  }, [categories]);

  return (
    <div className="total">
      <h2>Total de Categorias</h2>
      <h3>{categories}</h3>
    </div>
  );
}

export default TotalCategories;
