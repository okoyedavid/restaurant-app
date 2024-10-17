import Button from "../../ui/Button";
import styles from "../../modules/menu.module.css";
import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../store/cartActions";
import useMenu from "../hooks/useMenu";

function MenuItem({ handleAddToCart, menu }) {
  const dispatch = useDispatch();
  const { mutate, updating } = useMenu();
  function handleDec() {
    // dispatch(decreaseItemQuantity(menu.id));

    if (menu.quantity === 1) {
      const column = "addedToCart";
      const item = { id: menu.id, value: false };
      mutate({ item, column });
    } else {
      const column = "quantity";
      const item = { id: menu.id, value: menu.quantity - 1 };
      mutate({ item, column });
    }
  }

  function handleInc() {
    // dispatch(increaseItemQuantity(menu.id));
    const column = "quantity";
    const item = { id: menu.id, value: menu.quantity + 1 };
    mutate({ item, column });
  }

  return (
    <li className={styles.menu_item}>
      <img
        className={styles.menu_img}
        src={menu.image}
        alt={menu.description}
      />
      <h5 className={styles.title}>{menu.title}</h5>
      <span>{menu.description}</span>

      {!menu.addedToCart ? (
        <Button
          label={updating ? "Adding to cart" : "Add to cart"}
          className="btn btn-warning add_btn"
          handleClick={() => handleAddToCart(menu.id)}
        />
      ) : (
        <div className="quantity_container">
          <Button
            label={"-"}
            className="btn btn-warning quantity_btn"
            handleClick={handleDec}
          />

          <span>{menu.quantity}</span>
          <Button
            label={"+"}
            className="btn btn-warning quantity_btn"
            handleClick={handleInc}
          />
        </div>
      )}
    </li>
  );
}

export default MenuItem;
