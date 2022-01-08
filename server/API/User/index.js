import express from "express";

// Importing UserModel
import {UserModel} from "../../database/allModels.js";

const Router=express.Router();

/**
 * Router       /:_id
 * Des          Get user data
 * Params       _id
 * Access       Public
 * Method       Get
 */
Router.get("/:_id",async(req,res)=>{
    try{
        const {_id}=req.params;
        const userdata=await UserModel.findById(_id);
        if(userdata==null){
            return res.json({error:`No user data found for user id:${_id}`});
        }
        return res.status(200).json({userData:userdata});
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
