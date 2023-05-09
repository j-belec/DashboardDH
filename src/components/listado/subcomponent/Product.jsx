import "./Product.css";

function Product(props) {
  return (
    <div className="product-container">
      <div>
        <p>Nombre:</p>
        <h3>{props.name}</h3>
      </div>
      <div>
        <p>ID:</p>
        <h3>{props.id}</h3>
      </div>
    </div>
  );
}

export default Product;
