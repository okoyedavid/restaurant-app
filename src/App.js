import { RouterProvider } from "react-router-dom";
import Login from "./features/auth/Login";

import SignUp from "./features/auth/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Menu from "./features/menu/menu";
import Cart from "./features/cart/Cart";
import Landing from "./pages/Landing";
import Order from "./features/Order/Order";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    { path: "/signup", element: <SignUp /> },
    { path: "/login", element: <Login /> },
    { path: "/menu", element: <Menu /> },
    { path: "/cart", element: <Cart /> },
    { path: "/", element: <Landing /> },
    { path: "/order", element: <Order /> },
  ]);

  const queryclient = new QueryClient({
    defaultOptions: {
      staleTime: 0,
    },
  });
  return (
    <QueryClientProvider client={queryclient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
      <Toaster
        position="top-left"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
