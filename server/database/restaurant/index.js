import mongoose from "mongoose";



const RestaurantSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        address:{type:String,required:true},
        city:{type:String,required:true},
        averageCost:{type:Number},
        Contact:{type:Number},
        reviews:{type:mongoose.Types.ObjectId,ref:"Reviews"},
        ratings:{type:Number},
        photos:{type:mongoose.Types.ObjectId,ref:"Images",required:true},
        cuisines:[String],
        location:[{latitude:{type:String},longitude:{type:String}}],
        menu:{type:mongoose.Types.ObjectId,ref:"Menus",required:true},
        timing:{type:String,required:true},
        menuImages:{type:mongoose.Types.ObjectId,ref:"Images"},
        photos:{type:mongoose.Types.ObjectId,ref:"Images"}

    },
    {
        timestamps:true,
    }
)

export const RestaurantModel=mongoose.model("Restaurants",RestaurantSchema);