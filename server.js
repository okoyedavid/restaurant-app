const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("./db"); // Import the User model
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// async function clearUsers() {
//   try {
//     await User.destroy({
//       where: {},
//       truncate: true,
//     });
//     console.log("All users have been deleted.");
//   } catch (error) {
//     console.error("Error clearing users:", error);
//   }
// }

// clearUsers();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// GET route to fetch all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// POST route for user registration
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Send a response with the new user's info
    res.json({
      message: "User registered successfully",
      user: { username: newUser.username, email: newUser.email },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

// POST route for user login
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Step 1: Check if the email exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Step 2: Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Step 3: Generate a JWT token and send it to the client
    const token = jwt.sign(
      { id: user.id, email: user.email },
      "your_jwt_secret_key",
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful",
      token, // Send the token to the client
      user: { username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred during login" });
  }
});

// PUT route for updating user info
app.put("/api/users/:id", async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's info
    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();

    res.json({
      message: "User updated successfully",
      user: { id: user.id, username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

// DELETE route for deleting a user
app.delete("/api/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the user
    await user.destroy();

    res.json({ message: `User with ID ${id} deleted successfully` });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});
