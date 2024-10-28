import axios from "axios";
import EditProductForm from "../components/EditProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function EditProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Failed to fetch product.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleEdit = async (updatedProduct) => {
    try {
      const response = await axios.put(`http://localhost:4001/products/${id}`, {
        name: updatedProduct.name,
        price: updatedProduct.price,
        image: updatedProduct.image,
        description: updatedProduct.description,
      });

      console.log("Product updated", response.data);
      navigate("/");
    } catch (error) {
      console.error("Error updating product:", error);
      setError("Failed to update product.");
    }
  };

  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm onEdit={handleEdit} initialProduct={product} />
      {error && <p>{error}</p>}
      <button type="button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default EditProductPage;
