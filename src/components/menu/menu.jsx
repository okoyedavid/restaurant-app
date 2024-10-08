import { useState } from "react";
import MenuItem from "./menuitem";
import PaginateButton from "../../pages/paginateButtons";
import { useLoaderData } from "react-router-dom";
import { paginate } from "../../utilities/paginate";

const Menu = () => {
  const data = useLoaderData();
  const [currentPage, setCurrentPage] = useState(4);

  // const handleAddToCart = (id) => {
  //   dispatch(addToCart({ id, description: "add" }));

  //   const item = menu.find((item) => item.id === id);
  //   const updatedItem = { ...item, added: true }; // Clone and modify

  //   updateMenu(id, updatedItem); // Call updateMenu with id and updatedItem
  // };

  // const handleCartQuantity = (id, value) => {
  //   dispatch(handleQuantityUpdate({ id, value }));
  // };

  const paginatedMenu = paginate(data, currentPage);

  return (
    <div>
      <ul className="menu_section">
        {paginatedMenu.map((item) => (
          <MenuItem
            // handleAddToCart={handleAddToCart}
            //  handleCartQuantity={handleCartQuantity}
            menu={item}
            key={item.id}
          />
        ))}
      </ul>
      <PaginateButton
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Menu;

export async function loader() {
  const res = await fetch("http://localhost:8000/menuList");
  const data = await res.json();

  return data;
}
