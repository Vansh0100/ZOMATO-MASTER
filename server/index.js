require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });
  require("dotenv").config();
  // Importing Modules and Packages

  import mongoose from "mongoose";
  import cors from "cors";
  import helmet from "helmet";

  // Importing MongoDB Connection
  import connection from "./database/connection.js";

  // App
  const app=express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());