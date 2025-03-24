const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const serverless = require("serverless-http");

// Only required for local development to load .env file
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Ensure DATABASE_URL is defined
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("Error: DATABASE_URL environment variable is not set.");
  process.exit(1);
}

// Instantiate the PostgreSQL pool
const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

// Test database connection at startup
pool
  .query("SELECT NOW()")
  .then((result) =>
    console.log("Database connected. Time:", result.rows[0].now)
  )
  .catch((error) => console.error("Error connecting to the database:", error));

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
    res
      .status(500)
      .json({ success: false, error: "Database connection failed" });
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

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

    // -------------------------------------------------------------------------
    // Send email via SendGrid
    const adminMsg = {
      to: process.env.FROM_EMAIL,
      from: process.env.FROM_EMAIL,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
          `,
      html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
    };

    // Email to Sender
    const senderMsg = {
      to: email,
      from: process.env.FROM_EMAIL,
      subject: `Thanks for reaching out!`,
      text: `Hi ${name},\n\nThank you for your message. We'll get back to you soon!\n\nYour message:\n${message}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out! We'll get back to you as soon as possible.</p>
        <hr/>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      console.log("📤 Sending email to admin...");
      await sgMail.send(adminMsg);
      console.log("✅ Admin email sent");
    
      console.log("📤 Sending confirmation to sender...");
      await sgMail.send(senderMsg);
      console.log("✅ Confirmation email sent");
    } catch (error) {
      console.error("❌ SendGrid email error:", error.response?.body || error.message);
    }
    

    // ------------------------------------------------------------------------------

    res.status(201).json({
      success: true,
      message: "Message sent successfully and email delivered!",
      data: result.rows[0],
    });
  } catch (error) {
    const errorDetails = error?.response?.body || error.message || error;
    console.error("❌ Backend error during /api/contacts:", errorDetails);
    res.status(500).json({ error: "Server error, please try again later!." });
  }
});

// Export for Vercel deployment
module.exports = app;
module.exports.handler = serverless(app);

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server is running locally on port ${port}`);
  });
}
