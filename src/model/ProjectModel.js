import mongoose, {Schema} from "mongoose";

const ProjectSchema = new mongoose.Schema({

    usersId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    projectTitle:{
        type:String,
        required:[true, 'Project Title is required'],
    },
    projectDescription:{
        type:String,
        required:[true, 'Project Description is required'],
    },
    projectDuration:{
        type:String,
        required:[true, 'Project Duration is required'],
    },
    teamMembers:{
        type:Number,
        required:[true, 'Team Members is required'],
    },
    useTechnology:{
        type:String,
        required:[true, 'Technology is required'],
    },
    roleResponsibility:{
        type:String,
        required:[true, 'Role and Responsibility is required'],
    },
    currentWorkingProject:{
        type:Boolean,
        default:false
    },
    projectUrl:{
        type:String
    },
    client:{
        type:String
    },
    createdDate:{
        type:Date,
        default:Date.now
    },
    modefiedDate:{
        type:Date
    }
    
})

export default mongoose.models.Project || mongoose.model('Project',ProjectSchema)

