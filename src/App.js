import { RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import SignUp from "./components/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Menu from "./components/menu/menu";
import Cart from "./components/cart/Cart";
import Landing from "./components/Landing";
import Order from "./components/Order/Order";

function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <Login /> },
    { path: "/menu", element: <Menu /> },
    { path: "/cart", element: <Cart /> },
    { path: "/", element: <Landing /> },
    { path: "/order", element: <Order /> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
