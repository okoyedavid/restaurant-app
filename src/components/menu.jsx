import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  handleQuantityUpdate,
  updateCart,
} from "../store/cartActions";
import MenuItem from "./common/menuitem";
import PaginateButton from "../assets/utils.js/paginateButtons";
import MenuNav from "./common/menuNav";
import axios from "axios";

const Menu = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.restaurant);

  // Filter cart items
  const cart = menu.filter((item) => item.added);

  useEffect(() => {
    dispatch(updateCart({ description: "Fill_menu" }));
  }, [dispatch]);

  const [currentPage, setCurrentPage] = useState(4);
  const pageNo = Math.ceil(menu.length / 20);

  const updateMenu = async (id, updatedItem) => {
    try {
      const response = await axios.post(
        `http://localhost:3500/api/menu/${id}`, // Correct the URL format
        updatedItem
      );
      console.log("Update successful:", response.data);
    } catch (error) {
      console.log("Error: failed to update state", error);
    }
  };

  const handleAddToCart = (id) => {
    dispatch(addToCart({ id, description: "add" }));

    const item = menu.find((item) => item.id === id);
    const updatedItem = { ...item, added: true }; // Clone and modify

    updateMenu(id, updatedItem); // Call updateMenu with id and updatedItem
  };

  const handleCartQuantity = (id, value) => {
    dispatch(handleQuantityUpdate({ id, value }));
  };

  return (
    <div>
      <MenuNav cart={cart} /> {/* Pass the correct cart variable */}
      <MenuItem
        handleAddToCart={handleAddToCart}
        handleCartQuantity={handleCartQuantity}
        currentPage={currentPage}
        menu={menu}
      />
      <PaginateButton
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Menu;
