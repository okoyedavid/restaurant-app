import React from "react";
import { useState } from "react";
import "../register/login.css";
import { loginLink } from "../../assets/utils.js/buttons";
import { childVariants } from "../common/routesAnimation";
import buttons, { input, label } from "../../assets/utils.js/buttons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleClick = (e) => {
    setForm((prev) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", form)
      .then((response) => {
        navigate("/menu");
        console.log("User logged in:", response.data);
      })
      .catch((error) => {
        console.error("There was an error logging in the user!", error);
      });
  };

  return (
    <section className="login_container">
      <motion.form
        variants={childVariants}
        initial="initial"
        animate="final"
        className="login-form"
        action="submit"
        onSubmit={submitForm}
      >
        <h2 className="mt-2">Login to your account </h2>
        <div className="form-group">
          {label("Email")}
          {input(
            "email",
            "email",
            "form-control mt-2",
            handleClick,
            form.email
          )}
          {label("Password")}
          {input(
            "password",
            "password",
            "form-control mt-2",
            handleClick,
            form.password
          )}

          <div className="forgot_password">
            <a href=""> Forgot password?</a>
          </div>

          <div>{buttons("Login now", "btn btn-login btn-primary")}</div>
        </div>

        {loginLink()}
      </motion.form>
    </section>
  );
};

export default Login;
