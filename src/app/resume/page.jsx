"use client"
import { useState } from "react";
import {FaReact,FaHtml5,FaCss3,FaPhp,FaDatabase,FaGithub,FaJava,FaJs,FaNodeJs,FaNextJs}  from "react-icons/fa"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import useUserData from "@/components/customHooks/useUserData";



const tabField = [
  {
    tabName:'Experience Me',
    tabValue:'experience'
  },
  {
    tabName:'Skills',
    tabValue:'skill'
  },
  {
    tabName:'Education',
    tabValue:'education'
  },
  {
    tabName:'About Me',
    tabValue:'about'
  },
  
]

export default function Resume() {


  const {userData,userExpData,userSkillData,userEduData, loading, error } =  useUserData('/api/user/getUserData','66a8c03ebc0a310d6601353a')

  return (
    
    <section className="min-h-[60vh] flex  justify-center py-12 xl:py-0 mt-28">
      
      <div className="container mx-auto">
        <Tabs className="flex flex-col xl:flex-row " defaultValue='experience'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-3" >
            {tabField.map((item,index)=>{
              return <TabsTrigger value={item.tabValue} className="bg-[#232329] hover:bg-green-400 data-[state=active]:bg-green-400 p-2  font-semibold" key={index}>{item.tabName}</TabsTrigger>
            })}
          </TabsList>

          <div className="w-full xl:ml-8">
            <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">Experience</h3>
                  {/* <p className="max-w-[] text-white/60 mx-auto xl:mx-0">
                    Lorem ipsum is placeholder text 
                    commonly used in the graphic, 
                    print, and publishing industries
                    for previewing layouts 
                    and visual mockups.
                  </p> */}
                  <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[30px]">

                    {userExpData.map((expItem,index)=>{
                      return(
                        
                        <li className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                            <span className="text-green-400">{new Date(expItem.startDate).toLocaleDateString('en-CA')} To {expItem?.currentWork === false && new Date(expItem.endDate).toLocaleDateString('en-CA')}   {expItem?.currentWork === true && 'Present'}</span>
                            <h3 className="text-xl">{expItem.title}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-green-400 "></span>
                              <p className="text-white/60s">EmploymentType - {expItem.employmentType}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-green-400 "></span>
                              <p className="text-white/60s">{expItem.companyName}</p>
                            </div>
                            
                        </li>
                      )
                    })}

                  </ul>
                </div>
            </TabsContent >

            <TabsContent value="skill">
              <div className="flex flex-col gap-[30px]">

                <h3 className="text-4xl font-bold">Skills</h3>
                {/* <p className="max-w-[] text-white/60 mx-auto xl:mx-0">
                  Lorem ipsum is placeholder text 
                  commonly used in the graphic, 
                  print, and publishing industries
                  for previewing layouts 
                  and visual mockups.
                </p> */}

                <ul className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-[30px] text-center xl:text-center  lg:text-center ">

                      {userSkillData.map((skillItem,index)=>{
                      return(
                        
                        <li className="bg-[#232329] flex flex-col text-center items-center  xl:text-center  lg:text-center py-6 px-10 rounded-xl justify-center lg:items-start gap-1 hover:bg-green-400 group" key={index}>
                            {/* <FaHtml5 className="text-green-400 text-lg== group-hover:text-[#000000] text-6xl w-full"/>
                            <span >{skillItem.icons}</span> */}
                            <span className="text-green-400 font-bold group-hover:text-[#000000]  w-full">{skillItem.skillName}</span>
                        </li>
                      )
                    })}
                 
                </ul>
                </div>
            </TabsContent >

            <TabsContent value="education">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">Education</h3>
                  {/* <p className="max-w-[] text-white/60 mx-auto xl:mx-0">
                    Lorem ipsum is placeholder text 
                    commonly used in the graphic, 
                    print, and publishing industries
                    for previewing layouts 
                    and visual mockups.
                  </p> */}
                  <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[30px]">

                    {userEduData.map((eduItem,index)=>{
                      return(
                        
                        <li className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" key={index}>
                            <span className="text-green-400">{eduItem?.currentStudy === false && 'Passing Year : '} {eduItem.passingYear}  {eduItem?.currentStudy === true && 'Present'}</span>
                            <h3 className="text-xl">Degree : {eduItem.degree}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-green-400 "></span>
                              <p className="text-white/60s">Collage - {eduItem.collage} </p>
     
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-green-400 "></span>
                              <p className="text-white/60s">Course Type - {eduItem.studentType} </p>
                            </div>
                        </li>
                      )
                    })}

                  </ul>
                </div>
            </TabsContent >

            <TabsContent value="about">

                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">About Me</h3>
                  <p className="max-w-[] text-white/60 mx-auto xl:mx-0">{userData?.aboutme}</p>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-[10px]">
                    <li className="bg-[#232329] py-4 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <p><span className="text-green-400 font-bold">Name :</span> {userData?.name} </p>
                    </li>
                    <li className="bg-[#232329]  py-4 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <p><span className="text-green-400 font-bold">Email :</span> {userData?.email} </p>
                    </li>
                    <li className="bg-[#232329]  py-4 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <p><span className="text-green-400 font-bold">Phone :</span> {userData?.phone} </p>
                    </li>
                    <li className="bg-[#232329]  py-4 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <p><span className="text-green-400 font-bold">Current City :</span> {userData?.city} </p>
                    </li>
                  </ul>
                </div>
            </TabsContent >
          </div>

        </Tabs>
      </div>
    </section>
  );
}
