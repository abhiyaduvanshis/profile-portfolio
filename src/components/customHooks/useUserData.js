

import { useState, useEffect } from 'react';
import axios from 'axios';

function useUserData(url,userId){

    const [userData, setUserData] = useState(null);
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
                }
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false)
            }
        }
        fatchUserData();
    },[])
    return { userData, loading, error };
}

export default useUserData