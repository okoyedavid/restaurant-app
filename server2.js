const express = require("express");
const cors = require("cors");
const { MenuRecipe } = require("./db"); // Import the User model
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, there World!");
});

const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//GET route to fetch all menu
app.get("/api/menu", async (req, res) => {
  try {
    const menu = await MenuRecipe.findAll();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

// Post route to update menu
app.put("/api/menu/:id", async (req, res) => {
  const { id } = req.params;
  const { title, price, quantity, addedToCart } = req.body;

  try {
    const menu = await MenuRecipe.findByPk(id);
    if (!menu) {
      return res.status(404).json({ error: "User not found" });
    }
    await menu.update({
      title,
      price,
      quantity,
      addedToCart,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

// app.put("/api/users/:id", async (req, res) => {
//   const { id } = req.params;
//   const { username, email } = req.body;

//   try {
//     const user = await User.findByPk(id);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Update the user's info
//     user.username = username || user.username;
//     user.email = email || user.email;
//     await user.save();

//     res.json({
//       message: "User updated successfully",
//       user: { id: user.id, username: user.username, email: user.email },
//     });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update user" });
//   }
// });
