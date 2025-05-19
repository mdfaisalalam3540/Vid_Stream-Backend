import dotenv from "dotenv";
import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/db.js";

import express from "express";

dotenv.config({
  path: "./env",
});

connectDB();

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("ERRR: ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`Server is Running on http://localhost${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("MongoDB not Connect !! ", error);
//     throw error;
//   }
// })();
