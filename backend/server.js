const express = require("express");
const app = express();
const connectDB = require("../backend/db");
const cors = require("cors");

// connect database
connectDB();

app.use(express.json({ extended: false }));

// routes
app.use("/", require("./routes/articleRoute"));

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));