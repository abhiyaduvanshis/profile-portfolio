import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";


const about={
  title:'About Me',
  tabValue:'about',
  description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  info:[
    {
      fieldName:'Name',
      fieldValue:'Abhishek Kumar Singh'
    },
    {
      fieldName:'Email',
      fieldValue:'abhi.jkit@gmail.com'
    },
    {
      fieldName:'Phone',
      fieldValue:'(+91) 7905308553'
    },
    {
      fieldName:'Experience',
      fieldValue:'8+ Years'
    },
    {
      fieldName:'Nationality',
      fieldValue:'Indian'
    },
    {
      fieldName:'Language',
      fieldValue:'English,Hindi'
    },
  ]
}

const experience ={
  icon:'',
  title:'My experience',
  tabValue:'experience',
  description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  items:[
    {
      company:'360 Realtors LLP',
      position:'Full Stack Developer',
      duration:'2019-present'
    },
    {
      company:'Fourbrick OPC Pvt.Ltd.',
      position:'Software Developer',
      duration:'2016-2018'
    },
    {
      company:'Xpectio It Solution Pvt. Ltd.',
      position:'Web Developer',
      duration:'2015-2016'
    }
  ]
}

const education ={
  icon:'',
  title:'My Education',
  tabValue:'education',
  description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  items:[
    {
      institution:'SIET UPTU',
      degree:'Information Technology',
      duration:'2009-2013'
    },
    {
      institution:'GIC Allahabad',
      degree:'12th',
      duration:'2007'
    },
    {
      institution:'GIC Allahabad',
      degree:'10th',
      duration:'2005'
    }
  ]
}

const skills ={
  title:'My skills',
  tabValue:'skills',
  description:'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
  skillList:[
    {
      icon:'',
      name:'ReactJs'
    },
    {
      icon:'',
      name:'EpressJs'
    },
    {
      icon:'',
      name:'HTML'
    },
    {
      icon:'',
      name:'CSS'
    },
    {
      icon:'',
      name:'PHP'
    },
    {
      icon:'',
      name:'MYSQL'
    },
    {
      icon:'',
      name:'MONGODB'
    },
  ]
}

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
  return (
    <section className="min-h-[60vh] flex  justify-center py-12 xl:py-0 mt-28">
      <div className="container mx-auto">
        <Tabs className="flex flex-col xl:flex-row " defaultValue='experience'>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-3" >
            {tabField.map((item,index)=>{
              return <TabsTrigger value={item.tabValue} className="bg-black hover:bg-green-400 data-[state=active]:bg-green-400 p-2  font-semibold" key={index}>{item.tabName}</TabsTrigger>
            })}
          </TabsList>

          <div className="w-full xl:ml-4">
            <TabsContent value="experience">
                Experience
            </TabsContent >

            <TabsContent value="skill">
                Skill
            </TabsContent >

            <TabsContent value="education">
                Education
            </TabsContent >

            <TabsContent value="about">
                About
            </TabsContent >
          </div>

        </Tabs>
      </div>
    </section>
  );
}
