import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProductForm() {

  const navigate = useNavigate();

  const [name,setName] = useState('');
  const [imageUrl,setImageUrl] = useState('');
  const [price,setPrice] = useState('');
  const [description,setDescription] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      "name": name,
      "price": price,
      "image": imageUrl,
      "description":description
    }

    try{
      await axios.post("http://localhost:4001/products",newProduct);
      setName('');
      setImageUrl('');
      setPrice('');
      setDescription('')
      navigate('/')

    }catch(error){
      console.log("Fail to create Product" + error);
    }
  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
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
            onChange={(e) => {setImageUrl(e.target.value)}}
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
            onChange={(e) => {setPrice(e.target.value)}}
          />
        </label>
      </div>

      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={description}
            onChange={(e) => {setDescription(e.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>

      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
