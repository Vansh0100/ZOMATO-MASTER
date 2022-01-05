import mongoose from "mongoose";

const FoodSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        category:{type:String,required:true},
        price:{type:Number,required:true},
        image:{type:mongoose.Types.ObjectId,ref:"Images"},
        description:{type:String,required:true},
        isVeg:{type:Boolean,required:true},
        isContainEgg:{type:Boolean,required:true},
        restaurants:{type:mongoose.Types.ObjectId,ref:"Restaurants",required:true},
    }
);

export const FoodModel=mongoose.model("Foods",FoodSchema);