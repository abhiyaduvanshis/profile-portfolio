import mongoose, {Schema} from "mongoose";

const SkillSchema = new mongoose.Schema({

    usersId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    skillName:{
        type:String,
        required:[true, 'Skill is required'],
    }
})

export default mongoose.models.Skill || mongoose.model('Skill', SkillSchema);