import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

// const router =createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
  
  //we can also easily add another layout
  // {
  //   path: '/admin',
  //   children: [

  //   ]
  // }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
