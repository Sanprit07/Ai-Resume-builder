
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const resumeRoutes = require("./routes/resumeRoutes");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());
app.use("/api/resumes", resumeRoutes);

app.get("/", (req, res) => {
  res.send("Resume Builder Backend is Running!");
});

// Connect database first, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
