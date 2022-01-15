// Importing Joi
import joi from "joi";

// Creating Signup validation
export const ValidateSignup=(userdata)=>{
    const Schema=joi.object({
        fullname:joi.string().min(5),
        email:joi.string().email(),
        password:joi.string().min(5),
        address:joi.array().items(joi.object({detail:joi.string(),for:joi.string()})),
        phoneNumber:joi.number().max(10)
    })
    return Schema.validateAsync(userdata);
}

// Creating Signin validation
export const ValidateSignin=(userdata)=>{
    const Schema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().required()
    })
    return Schema.validateAsync(userdata);
}