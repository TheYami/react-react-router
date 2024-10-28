import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ViewProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/products/${params.productId}`)
      setName(response.data.data.name)
      setPrice(response.data.data.price)
      setContent(response.data.data.description)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product name:{name}</h2>
        <p>{price} THB</p>
        <p>{content}</p>
      </div>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
