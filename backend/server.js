import express from "express";
import cors from "cors";
import { connectToDB } from "./config/db.js"; // If we want to use ES module to import and export then we have to specify the (.js) extension with the file that we imported
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";

import "dotenv/config";

// App Configs
const app = express();
const PORT = 4000;

// Middleware
app.use(express.json()); // Request from frontend to backend parsed using this middleware

app.use(cors()); // backend is available to any frontend

// Database Connection
connectToDB();

// API Endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working fine :)");
});

/* To Run the express server */
app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});
