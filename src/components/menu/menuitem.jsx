import Button from "../../pages/Button";

function MenuItem({ handleAddToCart, handleCartQuantity, menu }) {
  return (
    <li className="menu_item">
      <img className="menu_img" src={menu.image} alt={menu.description} />
      <h5>{menu.title}</h5>
      <span>{menu.description}</span>

      {!menu.added ? (
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
            handleClick={() => handleCartQuantity(menu.id, -1)}
          />

          <span>{menu.quantity}</span>
          <Button
            label={"+"}
            className="btn btn-warning quantity_btn"
            handleClick={() => handleCartQuantity(menu.id, 1)}
          />
        </div>
      )}
    </li>
  );
}

export default MenuItem;
