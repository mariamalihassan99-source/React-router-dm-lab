
import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductsList() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/products`
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <h1>Products List</h1>

      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price} BD</p>
          <p>Quantity: {product.quantity}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
