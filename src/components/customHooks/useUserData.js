

import { useState, useEffect } from 'react';
import axios from 'axios';

function useUserData(url,userId){

    const [userData, setUserData] = useState(null);
    const [userExpData, setuserExpData] = useState([]);
    const [userSkillData, setuserSkillData] = useState([]);
    const [userEduData, setuserEduData] = useState([]);
    const [userServiceData, setuserServiceData] = useState([]);
    const [userProjectData, setuserProjectData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(!userId) return
        const fatchUserData = async () =>{
            try {
                const response = await axios.get(url,{
                    headers:{
                        'Content-Type': 'application/json',
                    }
                })
                if(response?.data?.success===true){
                    setUserData(response?.data?.result)
                    setuserExpData(response?.data?.experienceInfo)
                    setuserSkillData(response?.data?.skillInfo)
                    setuserEduData(response?.data?.educationInfo)
                    setuserServiceData(response?.data?.serviceInfo)
                    setuserProjectData(response?.data?.projectInfo)
                }
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false)
            }
        }
        fatchUserData();
    },[url,userId])

    
    return { userData,userExpData,userSkillData,userEduData,userServiceData,userProjectData,loading, error };
}

export default useUserData