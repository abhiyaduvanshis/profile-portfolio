import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    name:{
        type:String,
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,
        match:[/.+\@.+\..+/,'Please enter vaild email Id']
    },
    password:{
        type:String,
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    phone:{
        type:String,
    },
    gender:{
        type:String,
    },
    country:{
        type:String,
    },
    city:{
        type:String,
    },
    aboutme:{
        type:String,
    },
    image:{
        type:String,
    },
    coverImage:{
        type:String,
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    modifiedDate:{
        type:Date,
        default:Date.now
    },
    updatedBy:{
        type:String,
    }
    
})

export default mongoose.models.User || mongoose.model('User',UserSchema)

