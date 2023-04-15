import React from 'react'
import { useState } from 'react'
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const userid=localStorage.getItem("userId");
  const navigate = useNavigate();
  const [bodyPart,setBodyPart]=useState('all');
  const [exercises,setExercises]=useState([]);
  console.log(bodyPart)
  if(!userid){

    
    return(
    
    alert("Please login again")
   
   
    )
  }
  return (
   <Box>
    
        <HeroBanner/>
        <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}/>
        <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}/>
      
    </Box>
  )
}

export default Home;