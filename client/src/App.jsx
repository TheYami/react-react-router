import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import CreateProductPage from './pages/CreateProductPage.jsx'
import EditProductPage from './pages/EditProductPage.jsx'
import ViewProductPage from "./pages/ViewProductPage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path:'/createProductPage',
    element:<CreateProductPage/>
  },
  {
    path: `/product/edit/:id`,
    element: <EditProductPage/>
  },
  {
    path: '/product/view/:id',
    element: <ViewProductPage/>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
