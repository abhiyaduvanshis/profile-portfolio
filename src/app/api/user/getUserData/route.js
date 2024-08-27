import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import UserModel from "@/model/UserModel";

export async function GET(req) {

    await dbConnect()
    

    try {

        const userId= '66a8c03ebc0a310d6601353a'
        const getUserData = await UserModel.findOne({_id:userId}).select("-password")

        if(!getUserData){

            return NextResponse.json(
                {
                    success:false,
                    message:"User data not found!"
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
                result:getUserData
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