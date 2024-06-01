const express = require("express");
const connectDB = require("./config/db");
const { PORT } = require("./config/env");
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoutes);

// Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
