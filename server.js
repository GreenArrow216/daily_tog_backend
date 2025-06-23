require("dotenv").config();
const express = require("express");
const cors = require("cors");

const imagesRoutes = require("./routes/images");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/images", imagesRoutes);

app.get("/", (req, res) => {
  res.send("Daily Tog Backend is running.");
});

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});
