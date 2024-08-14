import { Link } from "react-router-dom";

export default function buttons(label, classes, handlefunction) {
  return (
    <div>
      <button onClick={handlefunction} className={classes}>
        {label}
      </button>
    </div>
  );
}

export function input(label, name, classes, onchange, value) {
  return (
    <input
      className={classes}
      name={name}
      value={value}
      onChange={onchange}
      type={label}
    />
  );
}

export function label(forLabel, classes = "") {
  return (
    <label className={classes} htmlFor={forLabel}>
      {forLabel}
    </label>
  );
}

export function loginLink() {
  return (
    <ul className="check-page">
      <li>
        <Link to="/Login">Login</Link>
      </li>

      <li>
        <Link to="/signup">Sign up </Link>
      </li>
    </ul>
  );
}
