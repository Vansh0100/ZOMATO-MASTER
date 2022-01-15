// Importing Joi
import joi from "joi";

// Creating Validation for restaurant city
export const ValidateRestaurantCity=(data)=>{
    const Schema=joi.object({
        city:joi.string().required()
    })
    return Schema.validateAsync(data);
}

// Creating Validation for searched string
export const ValidateRestaurantSearchedString=(data)=>{
    const Schema=joi.object({
        seachString:joi.string().required()
    })
    return Schema.validateAsync(data);
}