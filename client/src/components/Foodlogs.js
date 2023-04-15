import { InputLabel, TextField, Typography, Box, Button } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

const labelStyles={mb:1,mt:2,fontSize:'24px',fontWeight:"bold"};
const AddBlog = () => {
  const navigate = useNavigate();
  const[inputs, setInputs] = useState({
    qty:"",Unit:"",food:"",Calories:"",date:""
});
const handleChange=(e)=>{
  setInputs((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value
  }));
}
const sendRequest = async()=>{
  const res=await axios.post("http://localhost:5000/foodlogs",
  {
    qty:inputs.qty,
    Unit: inputs.Unit,
    food: inputs.food,
    Calories:inputs.Calories,
    date:inputs.date,
    user:localStorage.getItem("userId"),
  }).then(()=>navigate("/Foodlog")).catch((err)=>console.log(err));
  const data = await res.data;
  console.log(data)
  return data;
};
const handleSubmit=(e)=>{
  e.preventDefault();
  //console.log(inputs);
  sendRequest().then(data=>console.log(data))
} 
const onClickhandler=(e)=>{
  navigate("/Foodlog");
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Box border={3} borderColor="purple " borderRadius={10} boxShadow="10px 10px 20px #ccc" padding={3} margin={"auto"} marginTop={3} display="flex" flexDirection={"column"} width={"80%"}>
        <Typography fontWeight={'bold'} padding={3} color="grey" variant="h2" textAlign={'center'}>Start logging your meals</Typography>
        <InputLabel sx={labelStyles}>Quantity</InputLabel>
        <TextField name="qty" onChange={handleChange} value={inputs.qty}margin="normal" variant='outlined'/>
        <InputLabel sx={labelStyles}>Unit</InputLabel>
        <TextField name="Unit" onChange={handleChange} value={inputs.Unit} margin="normal"variant='outlined'/>
        <InputLabel sx={labelStyles}>foodName</InputLabel>
        <TextField name="food" onChange={handleChange} value={inputs.food} margin="normal"variant='outlined' />
        <InputLabel sx={labelStyles}>Calories</InputLabel>
        <TextField name="Calories" onChange={handleChange} value={inputs.Calories} margin="normal"variant='outlined' />
        <InputLabel sx={labelStyles}>date</InputLabel>
        <TextField name="date" onChange={handleChange} value={inputs.date} margin="normal"variant='outlined' />
        <Box>
        <Button variant='contained' ml={40}  sx={{backgroundColor:'#7EC8E3',padding:'150', width:{lg:'320px',xs:"300px"},}} type="submit">Add</Button>
        <Button variant='contained' mr={40} sx={{backgroundColor:'#7EC8E3',padding:'200', width:{lg:'320px',xs:"300px"},}} onClick={onClickhandler} >Go to my foodlogs</Button>
        <Button variant='contained' ml={40}  sx={{backgroundColor:'#7EC8E3',padding:'150', width:{lg:'320px',xs:"300px"},}}  href="nutritionanalysis">Go to calories Analysis</Button><br/>
        </Box>
        
      </Box>
    </form>
    </div>
    
  );
};

export default AddBlog