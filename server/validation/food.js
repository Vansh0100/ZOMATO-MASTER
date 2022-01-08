// Importing Joi
import joi from "joi";

// Creating Validation for food category
export const ValidateFoodCategory=(data)=>{
    const Schema=joi.object({
        category:joi.string().required()
    })
    return Schema.validateAsync(data);
}

// Creating Validation for searched string
export const ValidateFoodSearchedString=(data)=>{
    const Schema=joi.object({
        searchFood:joi.string().required()
    })
    return Schema.validateAsync(data);
}