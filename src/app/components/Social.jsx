import Link from "next/link";
import {FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa"

const socials= [
    {icon:<FaGithub/>,path:'https://github.com/abhiyaduvanshis'},
    {icon:<FaLinkedin/>,path:'https://www.linkedin.com/in/abhishek-kumar-singh-42967b95/'},
    {icon:<FaInstagram/>,path:'https://www.instagram.com/abhishekkumar8464/'}
]
export default function Social({containerStyles,iconStyles}){
    return(
        <div className={containerStyles}>
        {socials.map((item,index)=>{
            return <Link key={item.index} className={iconStyles} href={item.path}>{item.icon}</Link>
        })}
        </div>
    )
}