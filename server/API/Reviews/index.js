import express from "express";

// Importing Review Model
import {ReviewModel} from "../../database/allModels.js";

const Router=express.Router();

/**
 * Router       /:resid
 * Des          get all reviews for particular resid 
 * Params       resid
 * Access       Public
 * Method       get
 */
Router.get("/:resid",async(req,res)=>{
    try{
        const {resid}=req.params;
        const getAllReviews=await ReviewModel.find({restaurant:resid});
        if(getAllReviews.length==0){
            return res.json({error:`No reviews found for restaurant id:${resid}`});
        }
        return res.status(200).json({reviews:getAllReviews});
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})
/**
 * Route        /new
 * Des          POST: Adding new food/restaurant review and rating
 * Params       none
 * Access       Public
 * Method       POST
 */
 Router.post("/new", async (req, res) => {
    try {
      const { reviewData } = req.body;
  
      await ReviewModel.create({ ...reviewData });
  
      return res.json({ reviews: "Successfully Created Review" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  /**
   * Route        /delete/:id
   * Des          Delete a specific review
   * Params       _id
   * Access       Public
   * Method       DELETE
   */
  Router.delete("/delete/:id", async (req, res) => {
    try {
      const { _id } = req.params;
  
      await ReviewModel.findByIdAndDelete(_id);
  
      return res.json({ review: "Sucessfully deleted the review." });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  export default Router;