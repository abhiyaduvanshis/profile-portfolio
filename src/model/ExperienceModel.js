import mongoose, {Schema} from "mongoose";

const ExperienceSchema = new mongoose.Schema({

    usersId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title:{
        type:String,
        required:[true, 'Title is required'],
    },
    employmentType:{
        type:String,
        required:[true, 'Employment Type is required'],
    },
    companyName:{
        type:String,
        required:[true, 'Company Name is required'],
    },
    location:{
        type:String,
        required:[true, 'Location is required'],
    },
    locationType:{
        type:String
    },
    startDate:{
        type:Date,
        required:[true, 'Start Date is required'],
    },
    endDate:{
        type:Date,
    },
    skills:{
        type:String,
        required:[true, 'Skills is required'],
    },
    description:{
        type:String,
        required:[true, 'Description is required'],
    },
    profileHeadline:{
        type:String
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

export default mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);