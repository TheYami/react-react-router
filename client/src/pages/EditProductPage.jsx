import EditProductForm from "../components/EditProductForm";
import { Link, useParams } from "react-router-dom";

function EditProductPage() {

  const {id} = useParams();

  console.log("id is" ,id)

  return (
    <div>
      <h1>Edit Product Page</h1>
      <EditProductForm  id={id}/>
      <Link to={'/'} className="btn">Back to Home</Link>
    </div>
  );
}

export default EditProductPage;
