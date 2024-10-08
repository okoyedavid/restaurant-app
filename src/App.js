import { RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import SignUp from "./components/SignUp";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Menu, { loader as menuLoader } from "./components/menu/menu";
import Cart from "./components/cart/Cart";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/signup",
          element: <SignUp />,
        },
        { path: "/login", element: <Login /> },
        { path: "/menu", element: <Menu />, loader: menuLoader },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
