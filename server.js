// server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./modules/user/user.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import cors from "cors";
import orderRoute from "./modules/order/order.routes.js";

dotenv.config();
connectDB();

const app = express();

// CORS config
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://ebay-platform.netlify.app", // deployed frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true, // ✅ allow cookies & auth headers
  })
);

app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoute);

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
