import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Menu from "../menu";
import Landing from "../Landing";
import Cart from "../cart/Cart";
import Login from "../register/Login";
import SignUp from "../register/signUp";

function RoutesWithAnimation() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Landing />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default RoutesWithAnimation;
