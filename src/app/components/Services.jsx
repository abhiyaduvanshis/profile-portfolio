
"use client"
import {BsArrowDownRight} from "react-icons/bs"
import { motion } from "framer-motion"
import Link from "next/link"

const serviesList = [
    {
        title:'Web Development',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        href:''
    },
    {
        title:'Mobile Development',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        href:''
    },
    {
        title:'UI Development',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        href:''
    },
    {
        title:'SEO',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        href:''
    },
    {
        title:'Graphics Development',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        href:''
    },
    {
        title:'Content Writing',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        href:''
    }
]
export default function Servies(){
    return(
        <>
            <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-28">
                <div className="container mx-auto">
                    <motion.div 
                    initial={{opacity:0}} 
                    animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    >
                        {
                            serviesList.map((item,index)=>{
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
                                            <Link href={item.href} 
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
