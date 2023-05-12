import { Carousel } from 'react-bootstrap';
import { useState, useEffect } from "react";
import './carrousel.css';

function UncontrolledExample() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3100/api/products/all")
            .then((res) => res.json())
            .then((products) => setProducts(products.productsArr.slice(-3)));
    }, []);
    return (
        <div className='carrousel-container' >
            <div className='titulo'>
                <h2>Ultimos productos</h2>
            </div>
            <Carousel variant="dark">
                {products.map((product) =>
                    <Carousel.Item>
                        <a href={product.detail}>
                            <img
                                className="d-block w-100"
                                src={product.image}
                                alt="First slide"
                            />
                        </a>




                        <Carousel.Caption>
                            <h3>{product.name}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    );
}

export default UncontrolledExample;