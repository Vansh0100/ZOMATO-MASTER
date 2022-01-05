import dotenv from 'dotenv'
dotenv.config()

  // Importing Modules and Packages
  import express from "express";
  import cors from "cors";
  import helmet from "helmet";

  // Importing MongoDB Connection
  import connection from "./database/connection.js";

//  Importing Routes
  import Auth from "./API/Auth/index.js";
  // Importing Models
  import {FoodModel,OrderModel} from "./database/allModels.js";

  // App
  const app=express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());

// Using Routes
  app.use("/Auth",Auth);

  app.listen(4000,()=>{
    connection().then(()=>{console.log("Server is running!")}).catch((error)=>{console.log("Server is running but database connection failed!");
  console.log(error);
  });
  })