const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite", // This is the file where the SQLite database will be stored
});

// Define a User model
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const MenuRecipe = sequelize.define("MenuRecipe", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  addedToCart: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the database (this creates the tables if they don't exist)
sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Unable to sync the database:", err));

module.exports = {
  sequelize,
  User,
  MenuRecipe,
};
