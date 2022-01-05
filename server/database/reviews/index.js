import mongoose from "mongoose";


const ReviewSchema=new mongoose.Schema(
    {
        rating:{type:Number},
        food:{type:mongoose.Types.ObjectId,ref:"Foods"},
        restaurant:{type:mongoose.Types.ObjectId,ref:"Restaurants"},
        user:{type:mongoose.Types.ObjectId,ref:"Users"},
        photos:{type:mongoose.Types.ObjectId,ref:"Images"},
        review:{type:String},
        isFoodReview:{type:Boolean},
        isRestaurantReview:{type:Boolean}
    },
    {
        timestamps:true
    }
)

export const ReviewModel=mongoose.model("Reviews",ReviewSchema)