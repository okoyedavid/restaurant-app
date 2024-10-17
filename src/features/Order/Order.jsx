import { useSelector } from "react-redux";
import Button from "../../ui/Button";

function Order() {
  const cart = useSelector((state) => state.restaurant.cart);
  const TotalPrice = cart.reduce(
    (total, item) => total + Number(item.totalPrice),
    0
  );

  const handlePurchase = (e) => {
    e.preventDefault();
  };
  return (
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

              <Button label={"submit"} className={"btn btn-dark mt-3"} />
            </div>
          </form>
          <Button
            label={"purchase now"}
            className={"btn purchase_button btn-primary"}
          />
        </div>
      </div>
    </section>
  );
}

export default Order;
