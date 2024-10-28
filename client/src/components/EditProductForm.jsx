import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProductForm({ id }) {

  console.log('id in form is',id);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      name,
      image: imageUrl,
      price,
      description,
    };

    try {
      await axios.put(`http://localhost:4001/products/${id}`, updatedProduct);
      navigate('/');
    } catch (error) {
      console.error("Failed to update product", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/products/${id}`);
      console.log(response);
      setName(response.data.data.name || '');
      console.log("check name" ,name);
      setImageUrl(response.data.data.image || '');
      setPrice(response.data.data.price || '');
      setDescription(response.data.data.description || '');
    } catch (error) {
      console.log("Failed to fetch data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
