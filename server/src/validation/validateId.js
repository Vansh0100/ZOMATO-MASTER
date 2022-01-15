// Importing Joi
import joi from "joi";

// Creating Validation for particular Id
export const ValidateId=(data)=>{
    const Schema=joi.object({
        _id:joi.string().required()
    })
    return Schema.validateAsync(data);
}