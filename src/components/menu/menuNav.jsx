import React from "react";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import FontICon from "../../assets/utils.js/fontIcon";

const MenuNav = ({ cart }) => {
  const cartNo = cart.filter((item) => item.added);

  return (
    <nav className="menu_nav">
      <h2>Mexican Food</h2>

      <div>
        <Link to="/cart">{FontICon("cart", faCartShopping)}</Link>
        {cartNo.length > 0 && (
          <span className="bg-danger cart_count">{cartNo.length}</span>
        )}
      </div>
    </nav>
  );
};

export default MenuNav;
