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
app.use(express.json());
app.use(cors({ origin: "https://ebay-platform.netlify.app", credentials: true }));
// Routes
app.use("/api/users", userRoutes);
app.use('/api/orders', orderRoute);

app.use(errorHandler);

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}!`));
