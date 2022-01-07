import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
const UserSchema=new mongoose.Schema(
    {
        fullname:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String},
        address:[{detail:{type:String},for:{type:String}}],
        phoneNumber:[{type:Number,maxlength:10}]
    }
)
UserSchema.methods.generateJwtToken=function(){
    return jwt.sign({user:this._id.toString()},"ZomatoApp");
}
UserSchema.statics.findByEmailAndPhone=async ({email,phoneNumber})=>{
    const checkEmail=await UserModel.findOne({email});
    const checkPhone=await UserModel.findOne({phoneNumber});
    if(checkEmail || checkPhone){
        throw new Error("User already exists!");
    }
    return false;
}
UserSchema.statics.checkEmailAndPassword=async ({email,password})=>{
    const checkEmail=await UserModel.findOne({email});
    if(!checkEmail)
        throw new Error("User doesn't exists!");
    
    const matchPassword=await bcryptjs.compare(password,checkEmail.password);
    if(!matchPassword)
        throw new Error("Invalid Password!")
    
    return checkEmail;
}
UserSchema.pre("save", function (next) {
    const user = this;
  
    //password is modified
    if (!user.isModified("password")) return next();
  
    //generate bcrypt salt
    bcryptjs.genSalt(8, (error, salt) => {
      if (error) return next(error);
  
      // hash the password
      bcryptjs.hash(user.password, salt, (error, hash) => {
        if (error) return next(error);
  
        //assign hashed password
        user.password = hash;
        return next();
      });
    });
  });

export const UserModel=mongoose.model("Users",UserSchema);