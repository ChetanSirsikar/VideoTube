import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

const app = express();
dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("server running on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("mongo db connection failed", err);
  });
