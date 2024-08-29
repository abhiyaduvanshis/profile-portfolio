import mongoose, {Schema} from "mongoose";

const EducationSchema = new mongoose.Schema({

    usersId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    degree:{
        type:String,
        required:[true, 'Dgree is required'],
    },
    collage:{
        type:String
    },
    passingYear:{
        type:String,
    },
    city:{
        type:String,
    },
    studentType:{
        type:String,
    },
    currentWork:{
        type:Boolean
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    modefiedDate:{
        type:Date
    }

})

export default mongoose.models.Education || mongoose.model('Education', EducationSchema);