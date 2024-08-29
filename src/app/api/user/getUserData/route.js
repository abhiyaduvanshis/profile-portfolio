import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import UserModel from "@/model/UserModel";
import ExperienceModel from "@/model/ExperienceModel";
import ProjectModel from "@/model/ProjectModel";
import SkillModel from "@/model/SkillModel";
import EducationModel from "@/model/EducationModel";
import ServiceModel from "@/model/ServiceModel";

export async function GET(req) {

    const text = await dbConnect()
    

    try {

        const userId= '66a8c03ebc0a310d6601353a'
        const getUserData = await UserModel.findOne({_id:userId}).select("-password")
        const userExperienceInfo = await ExperienceModel.find({ usersId: userId}).sort({_id:-1})
        const userProjectInfo = await ProjectModel.find({ usersId: userId}).sort({_id:-1})
        const userSkillInfo = await SkillModel.find({ usersId: userId}).sort({_id:-1})
        const userEduInfo = await EducationModel.find({ usersId: userId}).sort({_id:-1})
        const userService = await ServiceModel.find({ usersId: userId}).sort({_id:-1})

        if(!getUserData){

            return NextResponse.json(
                {
                    success:false,
                    message:text
                },
                {
                    status:404
                }
            )
        }


        return NextResponse.json(
            {
                success:true,
                message:"Data found",
                result:getUserData,
                experienceInfo:userExperienceInfo,
                projectInfo:userProjectInfo,
                skillInfo:userSkillInfo,
                educationInfo:userEduInfo,
                serviceInfo:userService
            },
            {
                status:200
            }
        )

    } catch (error) {

        return NextResponse.json(
            {
                success:false,
                message:error
            },
            {
                status:401
            }
        )
    }
 
}