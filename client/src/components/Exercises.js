import React,{useEffect, useState} from 'react'
import { Pagination, Typography, Box, Stack } from '@mui/material'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions,fetchData } from '../utils/fetchdata';
const Exercises = ({exercises,setExercises,bodyPart}) => {
  const[currentPage,setCurrentPage]=useState(1)
  const exercisePerpage=9;
  const indexOfLastExercise=currentPage*exercisePerpage
  const indexOfFirstExercise = indexOfLastExercise-exercisePerpage;
  const  currentExercises = exercises.slice
  (indexOfFirstExercise,indexOfLastExercise)
  const paginate = (e,val)=>{
    setCurrentPage(val);
    window.scrollTo({top:1800,behavior:'smooth'})
  }

  useEffect(()=>{
    const fetchExerciseData = async () =>{
      let exercisesData=[];
      if(bodyPart==='all'){
        exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      }else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exercisesData)
    }
    fetchExerciseData()
  },[bodyPart])
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography>
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
          {currentExercises.map((exercise,index)=>(
            <ExerciseCard key={index} exercise={exercise}/>
          ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
            {
              exercises.length>9 && (
                <Pagination
                  color="standard"
                  shape="rounded"
                  defaultPage={1}
                  count={Math.ceil(exercises.length/9)}
                  page={currentPage}
                  onChange={paginate}
                  size="large"

                />
              )
            }
      </Stack>
    </Box>
  )
}

export default Exercises