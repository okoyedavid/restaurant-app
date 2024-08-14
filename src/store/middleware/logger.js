import axios from "axios";
import cartStore from "../cartStore";
import { updateCart } from "../cartActions";

const apiCall = async () => {
  try {
    const response = await axios.get("http://localhost:3500/api/menu");
    cartStore.dispatch(updateCart({ items: response.data }));
  } catch (error) {
    console.error(error);
  }
};

const logger = (store) => (next) => (action) => {
  action.payload.description === "Fill_menu" ? apiCall() : next(action);
};

export default logger;
