import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewProductPage() {

  const {id} = useParams();

  const [product,setProduct] = useState([])

  const fetchingData = async () =>{
    try{
      const response = await axios.get(`http://localhost:4001/products/${id}`)
      setProduct(response.data.data)
    }catch(error){
      console.log('fail to fetching data',error);
    }
  }

  useEffect(()=>{
    fetchingData()
  },[id])

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{product.name}</h2>
        <h3>{product.price} THB</h3>
        <p>{product.description}</p>
      </div>
      <Link to={'/'} className="btn">Back to Home</Link>
    </div>
  );
}

export default ViewProductPage;
