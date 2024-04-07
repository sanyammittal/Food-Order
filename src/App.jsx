import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DishesDetail from "./pages/DishesDetail";
import Home from "./pages/Home";
import Dishes from "./pages/Dishes";
import OrderDetail from "./pages/OrderDetail";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "dishes", element: <Dishes /> },
  { path: "dishes/:dishesId", element: <DishesDetail /> },
  { path: "/order-detail", element: <OrderDetail /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
