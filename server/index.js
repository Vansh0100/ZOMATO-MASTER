import dotenv from 'dotenv'
dotenv.config()

  // Importing Modules and Packages
  import express from "express";
  import cors from "cors";
  import helmet from "helmet";

  // Importing MongoDB Connection
  import connection from "./database/connection.js";

<<<<<<< HEAD
//  Importing Routes
  import Auth from "./API/Auth/index.js";
=======
  // Importing Models
  import {FoodModel,OrderModel} from "./database/allModels.js";
>>>>>>> 3652961c660ab78cba46e90049a69c726851d961

  // App
  const app=express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());

<<<<<<< HEAD
// Using Routes
  app.use("/Auth",Auth);

=======
>>>>>>> 3652961c660ab78cba46e90049a69c726851d961

  app.listen(4000,()=>{
    connection().then(()=>{console.log("Server is running!")}).catch((error)=>{console.log("Server is running but database connection failed!");
  console.log(error);
  });
  })