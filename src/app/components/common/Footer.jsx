import Social from "../Social";

export default function Footer(){
    return(
        <footer className="mt-8">
            <div  className="py-8 xl:py-12 text-white">
                <div className="container flex mx-auto justify-between items-center">
                    <div>
                        <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-green-400 rounded-full flex justify-center items-center text-green-400 text-base hover:bg-green-400 hover:text-primary hover:transition-all duration-500"/>
                    </div>
                    <div>
                        <p className="text-white ">Developed by Abhishek Singh</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}