
"use client"
import useUserData from "./customHooks/useUserData"
import {BsArrowDownRight} from "react-icons/bs"
import { motion } from "framer-motion"
import Link from "next/link"


export default function Servies(){

    const {
        userData,
        userExpData,
        userSkillData,
        userEduData,
        userServiceData,
        userProjectData,
        loading, 
        error } =  useUserData('/api/user/getUserData','66a8c03ebc0a310d6601353a')

    return(
        <>
            <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-28">
                <div className="container mx-auto">
                    <motion.div 
                    initial={{opacity:0}} 
                    animate={{opacity:1,transition:{delay:0.1,duration:0.2,ease:"easeIn"}}}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    >
                        {
                            userServiceData.map((item,index)=>{
                                return (
                                    <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                                        <div className="w-full flex justify-between items-center">
                                            <div className="
                                            text-5xl 
                                            font-extrabold 
                                            text-outline 
                                            text-transparent 
                                            text-green-400 
                                            group-hover:text-outline-hover
                                            transition-all
                                            duration-500
                                            ">0{index+1}</div>
                                            <Link href={item.link} 
                                            className="
                                            w-[70px] 
                                            h-[70px] 
                                            rounded-full
                                            bg-white
                                            group-hover:bg-green-400 
                                            transition-all 
                                            duration-500 
                                            flex 
                                            justify-center 
                                            items-center 
                                            hover:-rotate-45"><BsArrowDownRight className="text-primary text-3xl"/></Link>
                                        </div>
                                        <h2 className="
                                            text-[42px] font-bold leading-none text-white group-hover:text-green-400 transition-all duration-500
                                        ">{item.title}</h2>
                                        <p className="text-white/60">{item.description}</p>
                                        <div className="border-b border-white/20 w-full"></div>
                                    </div>
                                )
                            })
                        }
                    </motion.div>
                </div>
            </section>
        </>
    )
}
