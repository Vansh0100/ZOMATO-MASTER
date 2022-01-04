require("@babel/core").transform("code", {
    presets: ["@babel/preset-env"],
  });
  require("dotenv").config();
  // Importing Modules and Packages
  import express from "express";
  import mongoose from "mongoose";
  import cors from "cors";
  import helmet from "helmet";

  // Importing MongoDB Connection
  import connection from "./database/connection";

  // App
  const app=express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());


  app.listen(4000,()=>{
    connection().then(()=>{console.log("Server is running!")}).catch((error)=>{console.log("Server is running but database connection failed!");
  console.log(error);
  });
  })