import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import Login from './Login'

const Register = () =>  {
  const [data,setData]=React.useState({
    name:'',
    email:'',
    password:''
  })
  const changehandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    axios.post('http://localhost:5000/register',data).then(
      res => alert("registered")
    )
  }
  return (
    <Box>
      <div>
      <Typography fontWeight={50} sx={{fontSize:{lg:'30px',xs:'20px'}}} mt='50px'textAlign={"center"}>RegisterNow</Typography>
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
          label="Name"
          type="text"
          onChange={changehandler}
          name="name"
          placeholder='Full Name'
        /><br/>
        <TextField
        sx={{
          input:{
              fontWeight:'700',
              border:'none',
              borderRadius:'4px'
          },
          width:{lg:'400px',xs:"350px"},
          backgroundColor:'#fff',
          borderRadius:"40px",
          mx: 'auto',
          ml:60,
          mb:5,
          mt:1,
        textAlign: 'center',
        fontSize: '0.875rem',
        fontWeight: '700'
      }}
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          onChange={changehandler}
          placeholder='Email'
        /><br/>
        <TextField
        sx={{
          input:{
              fontWeight:'700',
              border:'none',
              borderRadius:'4px'
          },
          width:{lg:'400px',xs:"350px"},
          backgroundColor:'#fff',
          borderRadius:"40px",
          mx: 'auto',
            ml:60,
            mb:5,
            mt:1,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700'
      }}
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          onChange={changehandler}
          autoComplete="current-password"
        /><br/>
        <Box textAlign={'center'} ml={10}>
           <Button variant='contained' ml={40}  sx={{backgroundColor:'#7EC8E3',padding:'150', width:{lg:'400px',xs:"300px"},}} onClick={submitHandler}>Register now</Button><br/>
           <Button variant='contained' mb={3} sx={{backgroundColor:'#7EC8E3',padding:'150',width:{lg:'400px',xs:"300px"},}} href="Login" >Already Registered</Button>
        </Box>
      </div>
    </Box>
  );
}


export default Register