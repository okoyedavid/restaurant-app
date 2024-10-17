import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <div className="Landing-page">
      <div className="info_container">
        <h1>
          Welcome to <span>Sushi</span> Restaurant
        </h1>
        <p>
          People eat with their eyes and sushi creates an easy way for customers
          to order when they see beautiful photos of your food.
        </p>

        <div className="landing_btn_container">
          <button className="landing-btn">About</button>
          <button onClick={handleClick} className="landing-btn">
            Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
