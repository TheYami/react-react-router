import CreateProductForm from "../components/CreateProductForm";
import { Link } from "react-router-dom";

function CreateProductPage() {
  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />
      <Link to={'/'} className="btn">Back to Home</Link>
    </div>
  );
}

export default CreateProductPage;
