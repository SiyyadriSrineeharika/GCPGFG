import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import Login from './Login'
import Analysis from './Analysis';
import {Stack} from '@mui/material';

const NutritionAnalysis = () => {
    const [search,setSerach]=useState('');
    const [calories,setCalories]=useState('');
    const submitHandler = e=>{
        e.preventDefault();
        fetch(`https://api.edamam.com/api/nutrition-data?app_id=ad225010&app_key=7a7547d65ee66dc9fb44fb4a0d334f9e&nutrition-type=logging&ingr=${search}`).then(
            response=> response.json()
        ).then(data=>setCalories(data))
       
    }
    console.log(calories)
  return (
    
    <div>
    <Typography fontWeight={50} sx={{fontSize:{lg:'30px',xs:'20px'}}} mt='50px'textAlign={"center"}>NutritionAnalysis</Typography>
      <TextField
        sx={{
          input:{
              fontWeight:'700',
              border:'none',
              borderRadius:'4px',
              
          },
          width:{lg:'400px',xs:"350px"},
          backgroundColor:'#fff',
          borderRadius:"40px",
          mx: 'auto',
          ml:60,
          mb:5,
          mt:2,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700'
      }}
        required
        id="outlined-required"
        label="Required"
        type="text"
        onChange={(e)=>setSerach(e.target.value)}
        value={search}
        placeholder='Full Name'
      /><br/>
      
      <Box textAlign={'center'} ml={10}>
         <Button variant='contained' ml={40}  sx={{backgroundColor:'#7EC8E3',padding:'150', width:{lg:'400px',xs:"300px"},}}  onClick={submitHandler}>Analyse</Button><br/>
      </Box>
    
    {calories?<Analysis data={calories} search={search}/>:null }
    
    </div>
   
  )
}

export default NutritionAnalysis