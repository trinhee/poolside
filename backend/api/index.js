require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const serverless = require("serverless-http");

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

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
    process.exit(1);
  });

// ✅ Root Route (Test API Health)
app.get("/api", (req, res) => {
  res.send("✅ Backend is running!");
});

// ✅ Test DB Connection
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ success: true, timestamp: result.rows[0] });
  } catch (error) {
    console.error("Database test error:", error);
    res.status(500).json({ success: false, error: "Database connection failed" });
  }
});

// ✅ Get All Contacts
app.get("/api/contacts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM contacts");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// ✅ Add New Contact
app.post("/api/contacts", async (req, res) => {
  try {
    console.log("Received request:", req.body);

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

// Only for local dev (not used in Vercel serverless)
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

// ✅ Export for Vercel serverless
module.exports = app;
module.exports.handler = serverless(app);
