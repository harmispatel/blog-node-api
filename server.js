const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const blogRoutes = require("./routes/blogRoutes");
const errorMiddleware = require("./middlewares/errorMiddleware");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use("/api", blogRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
