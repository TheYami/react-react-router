import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/edit/:id" element={<EditProductPage />} />
          <Route path="/products/create" element={<CreateProductPage />} />
          <Route path="/products/:id" element={<ViewProductPage />} />
        </Routes>
      </Router>
  );
}

export default App;
