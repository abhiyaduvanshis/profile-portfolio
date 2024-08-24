import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

export default function Header(){
    return(
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Add logo here */}
                <Link href="/">
                    <h1 className="text-4xl">Link <span className="text-green-400">.</span></h1>
                </Link>

                {/*Nav for desktop screen */}
                <div className="hidden md:flex items-center gap-8">
                    <Nav/>
                    <Link href="/">
                        <button  className="bg-green-400 rounded-full p-2 text-xs text-black" color="blue">Hire me</button>
                    </Link>
                </div>

                {/* Nav for mobile screen */}
                {/* <div className="xl:hidden">
                    <MobileNav/>
                </div> */}
                
            </div>
        </header>
    )
}