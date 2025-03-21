const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const serverless = require("serverless-http");

const app = express();
app.use(cors());
app.use(express.json());

// Instantiate the Postgres pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  
});

// Redirect `/` to `/api`
app.get("/", (req, res) => {
  res.redirect("/api");
});

// Main API route
app.get("/api", (req, res) => {
  res.send("✅ Backend is running!");
});

// Database Test Route
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, timestamp: result.rows[0] });
  } catch (error) {
    console.error("Database test error:", error);
    res.status(500).json({ success: false, error: "Database connection failed" });
  }
});

// Get All Contacts
app.get("/api/contacts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Add New Contact
app.post("/api/contacts", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const result = await pool.query(
      "INSERT INTO contacts (name, email, phone, message) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, phone, message]
    );

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

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
