import express from "express";

// Importing Food Model
import {FoodModel} from "../../database/allModels.js";

// Importing Food Validation 
import {ValidateId} from "../../validation/validateId.js";
import {ValidateFoodSearchedString,ValidateFoodCategory} from "../../validation/food.js";

const Router=express.Router();

/**
 * Route        /:_id
 * Des          GET food based on id
 * Params       _id
 * Access       Public
 * Method       GET
 */
 Router.get("/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const foods = await FoodModel.findById(_id);
      return res.json({ foods });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  

/*
* Route  /f/:foodname
* Descp  Getting foods based on the searched name
* Access Public
* Params foodname
* Method Get
*/
// http://localhost:4000/foods/f/pizza
Router.get("/f/:foodname",async(req,res)=>{
    try{
        await ValidateFoodSearchedString(req.params);
        const {foodname}=req.params;
        const findFoodByName=await FoodModel.find({
            name:{$regex:foodname,$options:"i"}
        });
        if(findFoodByName.length==0){
            return res.json({error:`No Food matches with name ${foodname}`});
        }
        return res.status(200).json(findFoodByName);
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
/*
* Route  /c/:category
* Descp  Getting foods based on the category
* Access Public
* Params category
* Method Get
*/
// http://localhost:4000/foods/c/cuisines
Router.get("/c/:category",async(req,res)=>{
    try{
        await ValidateFoodCategory(req.params);
        const {category}=req.params;
        const findFoodByCategory=await FoodModel.find({
            category:{$regex:category,$options:"i"}
        });
        if(findFoodByCategory.length==0){
            return res.json({error:`No Food matches with category ${category}`});
        }
        return res.status(200).json(findFoodByCategory);
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
/*
* Route  /r/:_id
* Descp  Getting foods based on the particular restaurant id
* Access Public
* Params _id
* Method Get
*/
Router.get("/r/:_id",async(req,res)=>{
    try{
        await ValidateId(req.params);
        const {_id}=req.params;
        const findFoodByResId=await FoodModel.find({restaurant:_id});
        if(findFoodByResId==0){
            return res.json({error:`No foods found for restauatnt id:${_id}`});
        }
        return res.status(200).json(findFoodByResId);
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})

export default Router;