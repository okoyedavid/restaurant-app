import "./cart.css";
import Button from "../../pages/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../store/cartActions";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.restaurant.cart);
  const dispatch = useDispatch();

  const handleReturnToMenu = () => {
    navigate("/menu");
  };

  if (cart.length < 1)
    return (
      <div className="cart_empty">
        <h2>There are no items in Cart</h2>
        <Button
          label={"Go Back to menu"}
          className={"btn btn-primary purchase_button"}
          handleClick={handleReturnToMenu}
        />
      </div>
    );

  if (cart.length >= 1)
    return (
      <div className="cart__container">
        <section className="cart__section">
          {cart.map((item) => (
            <div className="cart_item" key={item.id}>
              <img src={item.image} alt="" />
              <h5>{item.title}</h5>

              <div className="button__container">
                <Button
                  label={"Remove item"}
                  className={"btn remove-btn btn-warning mt-3"}
                  handleClick={() => dispatch(deleteItem(item.id))}
                />

                <div className="quantity_button_container">
                  <button
                    onClick={() => dispatch(decreaseItemQuantity(item.id))}
                    className="btn btn-warning"
                  >
                    -
                  </button>{" "}
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseItemQuantity(item.id))}
                    className="btn btn-warning"
                  >
                    +
                  </button>
                  <span className="price">{"₦" + item.totalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
};

export default Cart;
