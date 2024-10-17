import styles from "../../modules/menu.module.css";
import { useState } from "react";
import MenuItem from "./menuitem";
import PaginateButton from "../../ui/paginateButtons";
import { paginate } from "../../services/helper";
import { useDispatch } from "react-redux";
import { updateMenu } from "../../store/cartActions";
import { Link } from "react-router-dom";
import useMenu from "../hooks/useMenu";
import Spinner from "../../ui/Spinner";

const Menu = () => {
  const { loadingMenu, data, mutate } = useMenu();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.round(data?.length / 20);

  const handleAddToCart = (id) => {
    dispatch(updateMenu(id));

    const item = { id, value: true };
    const column = "addedToCart";
    mutate({ item, column });
  };

  const paginatedMenu = paginate(data, currentPage);

  if (loadingMenu) return <Spinner />;

  return (
    <div className={styles.menu}>
      <Link to="/cart">CART</Link>
      <br />
      <Link to="/order">ORDER</Link>
      <ul className={styles.menu_section}>
        {paginatedMenu.map((item) => (
          <MenuItem
            handleAddToCart={handleAddToCart}
            menu={item}
            key={item.id}
          />
        ))}
      </ul>
      <PaginateButton
        numberofPages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Menu;
