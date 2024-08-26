"use client"

import CountUp from "react-countup"

const stats =[
    {
        num:8,
        text:"Year of experience"
    },
    {
        num:25,
        text:"Project Completed"
    },
    {
        num:4,
        text:"Technology Masterd"
    },
    {
        num:500,
        text:"Code Commited"
    }
]

export default function Stats(){

    return(
       <section>
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-2 max-w-[80vws] mx-auto xl:max-w-none">
                    {stats.map((item,index)=>{
                        return <div  className="flex flex-1 gap-4 items-center justify-center xl:justify-start" key={index}>
                            <CountUp
                             end={item.num} 
                             duration={5} 
                             delay={2} 
                             className="text-4xl xl:text-6xl font-extrabold"
                            />
                             <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                        </div>
                    })}
                   
                </div>
            </div>
       </section>
    )
}