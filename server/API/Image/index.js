import express from "express";
// Importing and configuring dotenv
import dotenv from 'dotenv'
dotenv.config();
// Importing Image Model
import {ImageModel} from "../../database/allModels.js";

// Importing AWS
import AWS from "aws-sdk";

// Importing Multer
import multer from "multer";

// Initialising Router
const Router=express.Router();

// Multer configurations
const storage=multer.memoryStorage();
const upload=multer({storage});

// AWS Configurations
const s3Bucket=new AWS.S3(
    {
        accessKeyId:process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey:process.env.AWS_SECRET_ACCESS_KEY,
        region:"ap-south-1"
    }
)
// Making Routes
Router.post("/",upload.single('file'),async (req,res)=>{
    try{
        const file=req.file;
        const bucketOptions={
            Bucket:"zomato-clone-vansh",
            Key:file.originalname,
            Body:file.buffer,
            ContentType:file.mimetype,
            ACL:"public-read"
        }

        const s3Upload=(options)=>{
            return new Promise((resolve,reject)=>
            s3Bucket.upload(options,(error,data)=>{
                if(error)
                return reject(error);
                return resolve(data);
            })
            )
        }
        const uploadImage=await s3Upload(bucketOptions);
        return res.status(200).json({uploadImage});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
export default Router;