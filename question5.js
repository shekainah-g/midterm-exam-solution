const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

// Initialize Express app
const app = express();
const PORT = 3000;

// Initialize Sequelize
const sequelize = new Sequelize("QUESTION5", "username", "password", {
    host: "localhost",
    dialect: "mysql"
});

// Define User model
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
    },
    name: {
        type: DataTypes.STRING, allowNull: false
    },
    email: {
        type: DataTypes.STRING, allowNull: false, unique: true
    },
    status: {
        type: DataTypes.STRING, allowNull: false,defaultValue: "active"
    }
}, {
    timestamps: false
});

// Sync database
sequelize.sync()
    .then(() => console.log("Database & tables created!"))
    .catch(err => console.error("Error syncing database:", err));

// Define route to fetch users
app.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
