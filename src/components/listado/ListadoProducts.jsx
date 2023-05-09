import { useState, useEffect } from "react";
import Product from "./subcomponent/Product";
import "./ListadoProducts.css";

function ListadoProductos() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3100/api/products/all")
      .then((res) => res.json())
      .then((products) => setProducts(products.productsArr));
  }, []);

  return (
    <div className="products-container">
      <h2>Listado de Productos</h2>

      {products.map((product) => {
        return <Product name={product.name} id={product.id} />;
      })}
    </div>
  );
}

export default ListadoProductos;
