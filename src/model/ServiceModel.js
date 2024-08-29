import mongoose, {Schema} from "mongoose";

const ServiceSchema = new mongoose.Schema({
    usersId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title:{
        type:String,
        required:[true, 'title is required'],
    },
    description:{
        type:String
    },
    link:{
        type:String
    }
})

export default mongoose.models.Service || mongoose.model('Service', ServiceSchema);