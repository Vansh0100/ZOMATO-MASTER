import express from "express";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
// Importing Models
import {UserModel} from "../../database/allModels.js";


const Router=express.Router();

// Requests

/**
 * Router       /signup
 * Des          Register new user
 * Params       none
 * Access       Public
 * Method       POST
 */

Router.post("/signup",async(req,res)=>{
    const {email,phoneNumber,password,fullname}=req.body;

    const checkEmail=await UserModel.findOne({email});
    const checkPhoneNumber=await UserModel.findOne({phoneNumber});

    if(checkEmail || checkPhoneNumber){
        return res.json({Error:"User already exists"});
    }
    const salting=await bcryptjs.genSalt(8);
    const hashedPassword=await bcryptjs.hash(password,salting);

    await UserModel.create({...req.body,password:hashedPassword});

    const token=await jwt.sign({user:{fullname,email}},"ZomatoApp");

    return res.status(200).json({token,status:"SignedUp Successfully"});
})
/*
* Router   /signin
* Des      Signing In the existing user
* Params   none
* Access   Public
* Method   Post
*/
Router.post("/signin",async(req,res)=>{
    const {email,password}=req.body;
    const findByEmail=await UserModel.findOne({email});
    if(!findByEmail){
        return res.json({error:"User doesn't exist"});
    }
    const checkPassword=await bcryptjs.compare(password,findByEmail.password);
    if(!checkPassword){
        return res.json({error:"Incorrect Password"});
    }
    const token=await jwt.sign({user:{email}},"ZomatoApp");
    return res.status(200).json({token,status:"SignedIn Successfully"});
})
export default Router;