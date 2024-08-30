"use client"
import Image from "next/image"
import useUserData from "@/components/customHooks/useUserData";
import { Table } from "lucide-react";
export default function page() {

  const {
    userData,
    userExpData,
    userSkillData,
    userEduData,
    userServiceData,
    userProjectData,
    loading, 
    error } =  useUserData('/api/user/getUserData','66a8c03ebc0a310d6601353a')

  return (
    <>
      <section className="flex flex-col justify-center py-12 xl:py-0 mt-28">
        <div className="container mx-auto">
          {userProjectData.map((proItem,index)=>{
          return(
            <>
            <div className="flex-1 flex justify-center gap-6 group" key={index}>
              <div className="w-full justify-between items-center">

              <div className="
              text-4xl 
              font-extrabold 
              text-outline 
              text-transparent 
              text-green-400 
              group-hover:text-outline-hover
              transition-all
              duration-500
              mb-4">0{index+1} - {proItem.projectTitle}</div>
      
                <p className="text-white/60"><span className="text-white/60 font-semibold">Project Duration : </span> {proItem.projectDuration}</p>
                <p className="text-white/60"><span className="text-white/60 font-semibold">Used Technology : </span> {proItem.useTechnology}</p>
                <p className="text-white/60"><span className="text-white/60 font-semibold">Roles & Responsbility : </span>{proItem.roleResponsibility}</p>
              </div>
              <div className="">
                <img src='/portfolio-details-2.jpg' />
              </div>
            </div>
            <div className="border-b border-white/20 w-full mb-4 mt-4"></div>
            </>
          )
          })}
        </div>
      </section>
    </>
  );
}
