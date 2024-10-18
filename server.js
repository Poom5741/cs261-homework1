require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 80;

// Serve static files from the "public" directory
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
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
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
    // Serve user dashboard page
    app.get("/dashboard", (req, res) => {
      res.sendFile(path.join(__dirname, "frontend", "dashboard.html"));
    });

    // Log the response from the API

    const data = response.data;

    if (data.status) {
      if (data.type === role) {
        return res
          .status(200)
          .json({ message: "Login successful", user: data });
      } else {
        return res.status(401).json({ message: "Role mismatch" });
      }
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log("Error contacting the authentication server:", error.message);
    return res.status(500).json({
      message: "Error contacting the authentication server",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
