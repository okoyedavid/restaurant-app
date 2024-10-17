import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHome,
  faLocationDot,
  faRightFromBracket,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="vertical_nav">
      <ul className="navList">
        <li>
          <NavLink to="/landing">
            <FontAwesomeIcon className="navBarIcons" icon={faHome} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Menu">
            <FontAwesomeIcon className="navBarIcons" icon={faUtensils} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <FontAwesomeIcon className="navBarIcons" icon={faCartShopping} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Map">
            <FontAwesomeIcon className="navBarIcons" icon={faLocationDot} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/Logout">
            <FontAwesomeIcon
              className="navBarIcons"
              icon={faRightFromBracket}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
