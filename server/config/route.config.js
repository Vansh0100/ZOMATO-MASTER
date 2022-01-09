// Importing Jwt Passport
import JwtPassport from "passport-jwt";

// Importing and configuring dotenv
import dotenv from "dotenv";
dotenv.config()
 
// Importing UserModel
import {UserModel} from "../database/allModels.js";

// Configuring Jwt Passport
const JwtStrategy=JwtPassport.Strategy;
const ExtractJwt=JwtPassport.ExtractJwt;

const options={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"ZomatoApp"
}

export default (passport)=>{
    passport.use(
        new JwtStrategy(options,
            async (Jwt__payload,done)=>{
                try{
                    const isValidUser=await UserModel.findById(Jwt__payload.user);
                    if(!isValidUser){
                        return done(null,false);
                    }
                    return done(null,isValidUser);
                }
                catch(error){
                    return done(error);
                }
            }
            )
    )
}