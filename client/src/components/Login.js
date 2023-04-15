import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import { store } from '../App';
import { redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Home from '../pages/Home'



const Login = () => {
    const navigate = useNavigate();
    const[token,setToken]=useContext(store)
    const [data,setData]=React.useState({
        email:'',
        password:''
      })
      const changehandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
      }
      const  submitHandler =e=>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
          res=>(localStorage.setItem("userId",res.data.user._id),localStorage.setItem("usertoken",res.data.token),setToken(res.data.token))
        )
        if(token){
        
            return navigate('/Home')
         }
      }
     
      return (
        <Box>
          <div>
          <Typography fontWeight={50} sx={{fontSize:{lg:'30px',xs:'20px'}}} mt='50px'textAlign={"center"}>Login</Typography>
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
              label="Required"
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
               <Button variant='contained' ml={40}  sx={{backgroundColor:'#7EC8E3',padding:'150', width:{lg:'400px',xs:"300px"},}} onClick={submitHandler}>Login</Button><br/>
            </Box>
          </div>
        </Box>
      );
  
}

export default Login