import express from "express";
import passport from "passport";
// Importing Models
import {UserModel} from "../../database/allModels.js";

// Importing Validations
import {ValidateSignup,ValidateSignin} from "../../validation/auth.js";

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
    // const {email,phoneNumber,password,fullname}=req.body.credentials;

    // const checkEmail=await UserModel.findOne({email});
    // const checkPhoneNumber=await UserModel.findOne({phoneNumber});

    // if(checkEmail || checkPhoneNumber){
    //     return res.json({Error:"User already exists"});
    // }
    // const salting=await bcryptjs.genSalt(8);
    // const hashedPassword=await bcryptjs.hash(password,salting);

    // await UserModel.create({...req.body.credentials,password:hashedPassword});

    // const token=await jwt.sign({user:{fullname,email}},"ZomatoApp");

    try{
        await ValidateSignup(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials);
    const newUser=await UserModel.create(req.body.credentials);

    const token=newUser.generateJwtToken();
    return res.status(200).json({token,status:"SignedUp Successfully"});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
/*
* Router   /signin
* Des      Signing In the existing user
* Params   none
* Access   Public
* Method   Post
*/
Router.post("/signin",async(req,res)=>{
    // const {email,password}=req.body.credentials;
    // const findByEmail=await UserModel.findOne({email});
    // if(!findByEmail){
    //     return res.json({error:"User doesn't exist"});
    // }
    // const checkPassword=await bcryptjs.compare(password,findByEmail.password);
    // if(!checkPassword){
    //     return res.json({error:"Incorrect Password"});
    // }
    // const token=await jwt.sign({user:{email}},"ZomatoApp");
    try{
        // await ValidateSignin(req.body.credentials);
        const user=await UserModel.checkEmailAndPassword(req.body.credentials);
        const token=user.generateJwtToken();
        return res.status(200).json({token,status:"SignedIn Successfully"});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
/*
* Router   /google
* Des      Authenticating using google(Sign In)
* Params   none
* Access   Public
* Method   Get
*/
Router.get("/google",passport.authenticate("google",
    {
        scope:[
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ]
    }
))
/*
* Router   /google/callback
* Des      Authenticating using google(SIgn In callback)
* Params   none
* Access   Public
* Method   Get
*/
Router.get("/google/callback",passport.authenticate("google",
    {
        failureRedirect:"/"
    }
),
    (req,res)=>{
        return res.redirect(
            `http://localhost:3000/google/${req.session.passport.user.token}`
          );
    }
)
export default Router;