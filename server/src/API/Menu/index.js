import express from "express";

// Importing Models
import {MenuModel,ImageModel} from "../../database/allModels.js";

// Importing Menu Validations
import {ValidateId} from "../../validation/validateId.js";

// Importing Routers
const Router=express.Router();
/**
 * Route        /list
 * Des          GET all list of menu based on restaurant id
 * Params       _id
 * Access       Public
 * Method       GET
 */
 Router.get("/list/:_id", async (req, res) => {
    try {
      // await ValidateId(req.params);
      const { _id } = req.params;
      const menus = await MenuModel.findById(_id);
  
      if (!menus) {
        res.status(404).json({ error: "No menu present for this restaurant" });
      }
  
      return res.json({ menus });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  /**
   * Route        /image
   * Des          GET all list of menu images with restaurant id
   * Params       _id
   * Access       Public
   * Method       GET
   */
  Router.get("/list/:_id", async (req, res) => {
    try {
      // await ValidateId(req.params);
      const { _id } = req.params;
      const menuImages = await ImageModel.findOne(_id);
  
      return res.json({ menuImages });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  export default Router;