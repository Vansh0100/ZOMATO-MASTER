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
  import Menu from "./API/Menu/index.js";
  import Image from "./API/Image/index.js";
  import Order from "./API/Orders/index.js";
  import Reviews from "./API/Reviews/index.js";
  import User from "./API/User/index.js";
// Importing Google Config
  import GoogleAuthConfig from "./config/google.config.js";
// Importing Route Config
  import RouteConfig from "./config/route.config.js";

  GoogleAuthConfig(passport);
  RouteConfig(passport);
  // App
  const app=express();

  app.use(express.json());
  app.use(cors());
  app.use(helmet());
  
// Using Routes
  app.use("/auth",Auth);
  app.use("/restaurant",Restaurant);
  app.use("/food",Food);
  app.use("/menu",Menu);
  app.use("/image",Image);
  app.use("/order",Order);
  app.use("/review",Reviews);
  app.use("/user",User);
  app.use(passport.initialize());

  app.listen(4000,()=>{
    connection().then(()=>{console.log("Server is running!")}).catch((error)=>{console.log("Server is running but database connection failed!");
  console.log(error);
  });
  })