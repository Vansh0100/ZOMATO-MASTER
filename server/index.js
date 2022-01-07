import dotenv from 'dotenv'
dotenv.config()

  // Importing Modules and Packages
  import express from "express";
  import cors from "cors";
  import helmet from "helmet";
  import passport from 'passport';

  // Importing MongoDB Connection
  import connection from "./database/connection.js";

//  Importing Routes
  import Auth from "./API/Auth/index.js";
  import Restaurant from "./API/Restaurant/index.js";
  import Food from "./API/Food/index.js";
  
// Importing Google Config
  import GoogleAuthConfig from "./config/google.config.js";
  GoogleAuthConfig(passport);
  // App
  const app=express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  
// Using Routes
  app.use("/auth",Auth);
  app.use("/restaurant",Restaurant);
  app.use("/foods",Food);
  app.use(passport.initialize());

  app.listen(4000,()=>{
    connection().then(()=>{console.log("Server is running!")}).catch((error)=>{console.log("Server is running but database connection failed!");
  console.log(error);
  });
  })