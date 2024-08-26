"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Links=[
    {
        name:'home',
        path:'/'
    },
    {
        name:'about',
        path:'/about'
    },
    {
        name:'services',
        path:'/services'
    },
    {
        name:'contact',
        path:'/contact'
    }
]

export default function MobileNav(){

    const pathname = usePathname()

    return(
        <nav className="flex gap-8">
            {Links.map((link,index)=>{
                return <Link 
                href={link.path} 
                key={index} 
                className={`${link.path===pathname && "text-green-400 border-b-2 border-green-400"} 
                capitalize font-medium
                 hover:text-green-400 
                 transition-all`}>{link.name}</Link>
            })}
        </nav>
    )
}