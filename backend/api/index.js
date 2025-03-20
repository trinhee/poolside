require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const serverless = require("serverless-http");

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json()); // ✅ Ensures Express can parse JSON request bodies

// Create PostgreSQL Pool connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

// ✅ Test Database Connection
pool.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => {
    console.error("❌ Database connection error:", err);
    process.exit(1); // Stop the server if DB connection fails
  });

// ✅ Root Route - Check if Server is Running
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// ✅ Test Database Connection Route
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, timestamp: result.rows[0] });
  } catch (error) {
    console.error("Database test error:", error);
    res.status(500).json({ success: false, error: "Database connection failed" });
  }
});

// ✅ Fetch All Contacts (Test Your Database)
app.get("/contacts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ POST Route: Insert Contact Form Data into PostgreSQL
app.post("/contacts", async (req, res) => {
  try {
    console.log("Received request:", req.body); // Log the incoming request

    const { name, email, phone, message } = req.body;

    // ✅ Validate the request data
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // ✅ Insert into PostgreSQL
    const result = await pool.query(
      "INSERT INTO contacts (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, phone, message]
    );

    console.log("Database insert result:", result.rows); // Log insert result

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("❌ Error inserting into database:", error);

    res.status(500).json({ error: "Server error, please try again later." });
  }
});

// Start Express Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

module.exports = app;
module.exports.handler = serverless(app);
