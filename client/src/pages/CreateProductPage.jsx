import axios from "axios";
import CreateProductForm from "../components/CreateProductForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateProductPage() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleCreate = async (newProduct) => {
    try {
      const response = await axios.post("http://localhost:4001/products", {
        name: newProduct.name,
        price: newProduct.price,
        image: newProduct.image,
        description: newProduct.description,
      });

      console.log("Product created", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Failed to create product.");
    }
  };

  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm onCreate={handleCreate} />
      {error && <p>{error}</p>}
      <button type="button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default CreateProductPage;
