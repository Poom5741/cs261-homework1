require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 80;

// Serve static files from the "frontend" directory
app.use(express.static(path.join(__dirname, "frontend")));

app.use(bodyParser.json());
app.use(cors());

// Use Application-Key from .env
const APPLICATION_KEY = process.env.APPLICATION_KEY;

// Route to serve the HTML login page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// API to handle login authentication
app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Both username and password are required" });
  }

  try {
    const response = await axios.post(
      "https://restapi.tu.ac.th/api/v1/auth/Ad/verify",
      {
        UserName: username,
        PassWord: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Application-Key": APPLICATION_KEY,
        },
      }
    );

    const data = response.data;

    // If login is successful, return success and user data
    return res.status(200).json({ message: "Login successful", user: data });
  } catch (error) {
    if (error.response && error.response.status === 400) {
      // If the authentication API returns a 400 error, it means invalid credentials
      return res
        .status(401)
        .json({ message: "Invalid credentials, please try again." });
    } else {
      console.log("Error contacting the authentication server:", error.message);
      return res.status(500).json({
        message: "Error contacting the authentication server",
        error: error.message,
      });
    }
  }
});

// Serve user dashboard page after login
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dashboard.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
