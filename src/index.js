import dotenv from "dotenv";
import connectDB from "./db/db.js";
import express from "express";

const app = express();

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(` Server is Running on PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Mongo DB Connection Failed`, err);
  });

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
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
