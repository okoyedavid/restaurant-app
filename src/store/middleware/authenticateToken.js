const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // The token is typically sent as "Bearer TOKEN"

  if (!token) {
    return res.sendStatus(401); // If no token is provided, return Unauthorized
  }

  jwt.verify(token, "your_jwt_secret_key", (err, user) => {
    if (err) {
      return res.sendStatus(403); // If token is invalid or expired, return Forbidden
    }

    req.user = user; // Save the user info in the request object for access in routes
    next(); // Continue to the next middleware or route handler
  });
}

export default authenticateToken;
