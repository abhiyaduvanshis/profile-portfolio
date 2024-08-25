import ProfilePhoto from "./components/ProfilePhoto";
import Social from "./components/Social";
import Stats from "./components/stats";

export default function Home() {
  return (
  
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6"> Hello I'm <br/> <span className="text-green-400">Abhishek Singh</span></h1>
            <span className="max-w-[500px] mb-9 text-white/80">Portfolio Website Built With Next JS, Tailwind CSS & Framer Motion,Portfolio Website Built With Next JS, Tailwind CSS & Framer Motion</span>
            <div>
             
              <div className="flex flex-col xl:flex-row items-center gap-8 mt-4 xl:mt-4">
              <button  className="bg-transparent hover:bg-green-400 text-green-400  hover:text-white py-1 px-4 border border-green-400 hover:border-transparent rounded-full  inline-flex items-center gap-2" color="blue">
                Download CV <svg className="fill-current w-4 h-4 ml-2 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                </button>

                <div className="mb-8 xl:mb-0 ">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-green-400 rounded-full flex justify-center items-center text-green-400 text-base hover:bg-green-400 hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 text-center xl:text-right">
            <ProfilePhoto/>
          </div>
        </div>
        <Stats/>
      </div>
    </section>
  );
}
