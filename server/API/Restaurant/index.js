import express from "express";

// Importing Restaurant Model
import { RestaurantModel } from "../../database/allModels.js";

const Router = express.Router();

/*
 * Router  /
 * Descp   Get restaurant based on city
 * Access  Public
 *Params   None
 * Method  Get
 */
// http://localhost:4000/restaurant/?city=Gonda
Router.get("/", async (req, res) => {
  try {
    const { city } = req.query;
    const findRestaurantByCity = await RestaurantModel.find({ city });
    if (findRestaurantByCity.length == 0) {
      return res.json({ error: `No restaurants found for city ${city}` });
    }
    return res.status(200).json({ restaurants: findRestaurantByCity });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
 * Router  /
 * Descp   Get specific restaurant based on id
 * Access  Public
 *Params   _id
 * Method  Get
 */
// http://localhost:4000/restaurant/:123efgv45tf
Router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const findSpecificRestaurant = await RestaurantModel.findById(_id);
    if (findSpecificRestaurant == null) {
      return res.json({ error: `No restaurant found for id ${_id}` });
    }
    return res.status(200).json({ restaurant: findSpecificRestaurant });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
/*
 * Router  /:searchString
 * Descp   Get restaurants based on searched string
 * Access  Public
 *Params   searchString
 * Method  Get
 */
Router.get("/search/:searchString",async(req,res)=>{
    try{
        const {searchString}=req.params;
        const findRestByString=await RestaurantModel.find(
            {
                name:{$regex:searchString,$options:"i"},
            }
        )
        if(findRestByString.length==0){
            return res.json({error:`No restaurant found for searched string ${searchString}`});
        }
        return res.status(200).json(findRestByString);
    } catch (error) {
    return res.status(500).json({ error: error });
  }
})
export default Router;
