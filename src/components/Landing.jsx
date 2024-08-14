import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginLink } from "../assets/utils.js/buttons";
import { childVariants, signup_variant } from "./common/routesAnimation";
import { motion } from "framer-motion";
import { updateCart } from "../store/cartActions";

const Landing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(updateCart({ description: "Fill_menu" }));
    navigate("/menu");
  };

  return (
    <div className="Landing-page">
      <motion.div
        variants={signup_variant}
        initial="initial"
        animate="final"
        className="loginLink"
      >
        {loginLink()}
      </motion.div>

      <motion.div
        variants={childVariants}
        initial="initial"
        animate="final"
        className="info_container"
      >
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
      </motion.div>
    </div>
  );
};

export default Landing;
