import styles from "../../modules/menu.module.css";
import { useEffect, useState } from "react";
import MenuItem from "./menuitem";
import PaginateButton from "../../pages/paginateButtons";
import { paginate } from "../../utilities/paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu, updateMenu } from "../../store/cartActions";
import { Link } from "react-router-dom";

const Menu = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const data = useSelector((state) => state.restaurant.menu);
  const pages = Math.round(data.length / 20);

  useEffect(() => {
    if (data.length === 0) {
      dispatch(fetchMenu());
    }
  }, [data.length, dispatch]);

  const handleAddToCart = (id) => {
    dispatch(updateMenu(id));
  };

  const paginatedMenu = paginate(data, currentPage);

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
