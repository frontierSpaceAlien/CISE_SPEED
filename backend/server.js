const express = require("express");
const app = express();
const connectDB = require("../backend/db");
const cors = require("cors");

// cors
app.use(cors());

// Init Middleware
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/", require("./routes/articleRoute"));


if (process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));

    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));