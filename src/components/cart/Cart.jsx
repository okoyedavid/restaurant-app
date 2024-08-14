import React from "react";
import "./cart.css";
import { handleQuantityUpdate, removeItem } from "../../store/cartActions";
import { useSelector, useDispatch } from "react-redux";
import buttons from "../../assets/utils.js/buttons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.restaurant);
  const cart = cartItems.filter((item) => item.added);
  const navigate = useNavigate();

  const TotalPrice = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  const dispatch = useDispatch();

  const handleCartQuantity = (id, value) => {
    dispatch(handleQuantityUpdate({ id, value }));
  };

  const handlePurchase = (e) => {
    e.preventDefault();
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleReturnToMenu = () => {
    navigate("/menu");
  };

  return (
    <React.Fragment>
      {cart.length <= 0 ? (
        <div className="cart_empty">
          <h2>There are no items in Cart</h2>

          {buttons(
            "Go Back to menu",
            "btn btn-primary purchase_button",
            handleReturnToMenu
          )}
        </div>
      ) : (
        <div className="cart__container">
          <section className="cart__section">
            {cart.map((item) => (
              <div className="cart_item" key={item.id}>
                <img src={item.image} alt="" />
                <h5>{item.title}</h5>

                <div className="button__container">
                  {buttons(
                    "Remove item",
                    "btn remove-btn btn-warning mt-3",
                    () => handleRemoveItem(item.id)
                  )}

                  <div className="quantity_button_container">
                    <button
                      onClick={() => handleCartQuantity(item.id, -1)}
                      className="btn btn-warning"
                    >
                      -
                    </button>{" "}
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleCartQuantity(item.id, 1)}
                      className="btn btn-warning"
                    >
                      +
                    </button>
                    <span className="price">
                      {"₦" + item.quantity * item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </section>
          {cart.length > 0 && (
            <section>
              <div className="check__out">
                <h2>Check out items</h2>
                <div className="payment_container">
                  <h2>
                    Total <span>{"₦" + Math.round(TotalPrice)} </span>{" "}
                  </h2>

                  <ul className="cart__list">
                    <li>Less than 24hr Delivery </li>
                    <li>Full refund for late deliveries</li>
                    <li> No refunds </li>
                    <li>80% off for above 10 items</li>
                  </ul>

                  <form onSubmit={handlePurchase} action="submit">
                    <div className="form-group">
                      <label htmlFor="Delivery adress"> Delivery Address</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter Delivery Address"
                      />

                      {buttons("submit", "btn btn-dark mt-3")}
                    </div>
                  </form>
                  {buttons("purchase now", "btn purchase_button btn-primary")}
                </div>
              </div>
            </section>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default Cart;
