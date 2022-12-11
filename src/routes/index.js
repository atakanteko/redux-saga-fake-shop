import { createBrowserRouter } from "react-router-dom";
import ProductListing from "../containers/ProductListing";
import ProductDetail from "../containers/ProductDetail";
import App from "../App";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />, 
      children: [
        {
            path: "/",
            element: <ProductListing />,
        },
        {
            path: "/product/:productId",
            element: <ProductDetail />,
        },
      ]
    },
    
  ]);