import { useState, useEffect } from "react";
import "../totales/Totales.css";
import "./styleLastProduct.css";

function UltimoProducto() {
const [lastProduct, setLastProduct] = useState(null);
useEffect(() => {
    fetch("http://localhost:3100/api/products/all")
      .then((res) => res.json())
      .then((products) => {
        setLastProduct(products.productsArr[products.productsArr.length - 1]);
      });
  }, []);
  
  return (
    <div className="lastProduct">
      <h2>Último producto</h2>
  
      {lastProduct && (
        <div>
            <a href={lastProduct.detail}><img src={lastProduct.image} alt="" /></a>
          <h3>{lastProduct.name}</h3>
          <p>{lastProduct.category}</p>
          <p>ID: {lastProduct.id}</p>
        </div>
      )}
    </div>
  );
}

export default UltimoProducto;  