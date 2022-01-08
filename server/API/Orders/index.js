import express from "express";

// Importing OrderModel
import {OrderModel} from "../../database/allModels.js";

// Importing Validation Id
import {ValidateId} from "../../validation/validateId.js";

const Router=express.Router();

/**
 * Router       /:_id
 * Des          Get all orders based on id
 * Params       -id
 * Access       Public
 * Method       Get
 */
Router.get("/:_id",async(req,res)=>{
    try{
        await ValidateId(req.params);
        const {_id}=req.params;
        const getOrders=await OrderModel.findOne({user:_id});
        if(getOrders==null){
            return res.json({error:`No orders found for id:${_id}`});
        }
        return res.status(200).json({orderDetails:getOrders});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
/**
 * Router       /new/:id
 * Des          Add new order
 * Params       :_id
 * Access       Public
 * Method       POST
 */
 Router.post("/new/:_id",async(req,res)=>{
    try{
        await ValidateId(req.params);
        const {_id}=req.params;
        const addOrders=await OrderModel.findOneAndUpdate({user:_id},req.body,{new:true});
        if(addOrders==null){
            return res.json({error:`Id:${_id} not found!`});
        }
        return res.status(200).json({orderAdded:addOrders});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
export default Router;