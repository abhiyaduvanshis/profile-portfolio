import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";


const about={
  title:'About Me',
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
  title:'My experience',
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

export default function Resume() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center py-12 xl:py-0 mt-28">
      <div className="container mx-auto">
        <Tabs>
          <TabsList>
            <TabsTrigger value="abot">Abot</TabsTrigger>
            <TabsTrigger>Text</TabsTrigger>
          </TabsList>
          <TabsContent value="abot">
              advadv
          </TabsContent >
        </Tabs>
      </div>
    </section>
  );
}
