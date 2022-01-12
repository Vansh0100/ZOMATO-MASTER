import express from "express";
import passport from "passport";
// Importing UserModel
import {UserModel} from "../../database/allModels.js";

// Importing user validations
import {ValidateId} from "../../validation/validateId.js";

const Router=express.Router();

/**
 * Route        /
 * Des          GET authorized user data
 * Params       none
 * Access       Public
 * Method       GET
 */
 Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { email, fullName, phoneNumber, address } =
        req.session.passport.user._doc;
  
      return res.json({ user: { email, fullName, phoneNumber, address } });
    } catch {
      return res.status(500).json({ error: error.message });
    }
  });
  

/**
 * Router       /:_id
 * Des          Get user data
 * Params       _id
 * Access       Public
 * Method       Get
 */
Router.get("/:_id",async(req,res)=>{
    try{
        await ValidateId(req.params);
        const {_id}=req.params;
        const userdata=await UserModel.findById(_id);
        const {fullname}=userdata;
        if(userdata==null){
            return res.json({error:`No user data found for user id:${_id}`});
        }
        return res.status(200).json({user:{fullname}});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})

/**
 * Router       update/:_id
 * Des          Updating user data 
 * Params       _id
 * Access       Public
 * Method       Put
 */
Router.put("/update/:_id",async(req,res)=>{
    try{
        await ValidateId(req.params);
        const {_id}=req.params;
        const updateUser=await UserModel.findByIdAndUpdate({_id},req.body,{new:true});
        if(updateUser==null){
            return res.json({error:`No user is found with id:${_id}`});
        }
        return res.status(200).json({updatedUserData:updateUser});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
export default Router;