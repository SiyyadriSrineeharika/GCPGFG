import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MyFoodlogs from './MyFoodlogs';
import { Stack } from '@mui/material';
import MyCalorielogs from './MyCalorielogs';

const Calorielog = () => {
  const[user,setUser]=useState()
  // const id=localStorage.getItem("userId");
  
  const sendRequest=async()=>{
    const res=await axios.get(`http://localhost:5000/mycalorielogs`,{
        headers:{
            'x-token': localStorage.getItem("usertoken")
        }
    }).catch((err)=>console.log(err))
    const data= await res.data;
    console.log(data)
    return data
  }
  useEffect(()=>{ 
    sendRequest().then((data)=>setUser(data.user))
  },[]);

 
  return (

    
    <Stack direction="row" sx={{gap:{lg:'50px',xs:'25px'}}} flexWrap="wrap" justifyContent="center">
      {" "}
      {user &&
        user.calorielogs &&
        user.calorielogs.map((calorielog, index) => (
          <MyCalorielogs
           id={calorielog._id}
            key={index}
            isUser={true}
            activity={calorielog.activity}
            duration={calorielog.duration}
            weight={calorielog.weight}
            burnedcal={calorielog.burnedcal}
            date={calorielog.date}
          />
        ))}
       
    </Stack>
  )
};
export default Calorielog