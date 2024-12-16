const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import Routes
const studentRoutes = require("src\routes\StudentRoutes.js");
const companyRoutes = require("./src/routes/companyRoutes");
const adminRoutes = require("./src/routes/adminRoutes");

// API Routes
app.use("/api/students", studentRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/admins", adminRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("unable to connect...",err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("disconnect", () => console.log("User disconnected"));
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
