import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <ul className="check-page">
      <Link to="/Login">Login</Link>

      <Link to="/signup">Sign up </Link>
    </ul>
  );
}

export default CallToAction;
