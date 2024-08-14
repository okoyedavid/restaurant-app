import React from "react";
import { useState } from "react";
import buttons, {
  input,
  label,
  loginLink,
} from "../../assets/utils.js/buttons";
import { childVariants } from "../common/routesAnimation";
import { motion } from "framer-motion";
import axios from "axios";

const SignUp = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleClick = (e) => {
    setForm((prev) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/register", form)
      .then((Response) => {
        console.log("user registered", Response.data);
      })
      .catch((error) => {
        console.error("there was an error registering the user", error);
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
        <h2 className="mt-2">Create a new account </h2>
        <div className="form-group">
          {label("Username")}
          {input(
            "Username",
            "username",
            "form-control mt-2",
            handleClick,
            form.username
          )}

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

          <div>{buttons("Login now", "btn btn-login btn-primary")}</div>
        </div>

        {loginLink()}
      </motion.form>
    </section>
  );
};

export default SignUp;
