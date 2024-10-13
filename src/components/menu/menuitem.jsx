import Button from "../../pages/Button";
import styles from "../../modules/menu.module.css";
import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../store/cartActions";

function MenuItem({ handleAddToCart, menu }) {
  const dispatch = useDispatch();

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
          label={"Add to cart"}
          className="btn btn-warning add_btn"
          handleClick={() => handleAddToCart(menu.id)}
        />
      ) : (
        <div className="quantity_container">
          <Button
            label={"-"}
            className="btn btn-warning quantity_btn"
            handleClick={() => dispatch(decreaseItemQuantity(menu.id))}
          />

          <span>{menu.quantity}</span>
          <Button
            label={"+"}
            className="btn btn-warning quantity_btn"
            handleClick={() => dispatch(increaseItemQuantity(menu.id))}
          />
        </div>
      )}
    </li>
  );
}

export default MenuItem;
