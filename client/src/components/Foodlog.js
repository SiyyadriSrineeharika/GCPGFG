import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MyFoodlogs from './MyFoodlogs';
import { Stack } from '@mui/material';

const Foodlog = () => {
  const[user,setUser]=useState()
  // const id=localStorage.getItem("userId");
  
  const sendRequest=async()=>{
    const res=await axios.get(`http://localhost:5000/myfoodlogs`,{
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
        user.foodlogs &&
        user.foodlogs.map((foodlog, index) => (
          <MyFoodlogs
           id={foodlog._id}
            key={index}
            isUser={true}
            qty={foodlog.qty}
            Unit={foodlog.Unit}
            food={foodlog.food}
            Calories={foodlog.Calories}
            date={foodlog.date}
          />
        ))}
       
    </Stack>
  )
};
export default Foodlog