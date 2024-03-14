import "dotenv/config";
import express from "express";
import path from "path";
import cors from "cors";
import router from "./routes/urlRoutes.js";
import "./db/db.js";
import { connectDB } from "./db/db.js";
const port = process.env.PORT || 4000;
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
  })
);
app.use(express.json());
app.use("/api", router);
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
connectDB();
