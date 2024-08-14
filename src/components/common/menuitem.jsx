import React from "react";
import { paginate } from "../../assets/utils.js/paginate";
import buttons from "../../assets/utils.js/buttons";

const MenuItem = ({
  handleAddToCart,
  handleCartQuantity,
  currentPage,
  menu,
}) => {
  const paginatedMenu = paginate(menu, currentPage);

  return (
    <section className="menu_section">
      {paginatedMenu.map((menuItem) => (
        <div className="menu_item" key={menuItem.id}>
          <img className="menu_img" src={menuItem.image} alt={menuItem.title} />
          <h5>{menuItem.title}</h5>
          <span>{menuItem.description}</span>
          {!menuItem.added ? (
            <button
              onClick={() => handleAddToCart(menuItem.id)}
              className="btn btn-warning add_btn"
            >
              Add to cart
            </button>
          ) : (
            <div className="quantity_container">
              <button
                onClick={() => handleCartQuantity(menuItem.id, -1)}
                className="btn btn-warning quantity_btn"
              >
                -
              </button>
              <span>{menuItem.quantity}</span>
              <button
                onClick={() => handleCartQuantity(menuItem.id, 1)}
                className="btn btn-warning quantity_btn"
              >
                +
              </button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default MenuItem;
