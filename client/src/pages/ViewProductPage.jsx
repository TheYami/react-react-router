import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ViewProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      setIsError(false);
      setIsLoading(true);
      const results = await axios.get(`http://localhost:4001/products/${id}`);
      setProduct(results.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return (
    <div>
      <h1>View Product Page</h1>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Failed to fetch product</h1>}
      {product && (
        <div className="view-product-container">
          <h2>{product.name}</h2>
          <img
            src={product.image}
            alt={product.name}
            width="250"
            height="250"
          />
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      )}
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
