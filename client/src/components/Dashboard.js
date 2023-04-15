import React, { useState } from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import {Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import sideimage from '../assets/bg.jpg'
import Myprofile from './Myprofile';
import{ Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';




const Dashboard = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId")
  const onClickHandler = (e) => {

    localStorage.removeItem("userId")
    localStorage.removeItem("uesrtoken")
    alert("Logged out succesfully")
    navigate("/")

  }
 const[ispro,setIspro]=useState(false);
  const onClickhandlerpro = (e)=>{
     //navigate("/myprofile")
    setIspro(true)
  }
  const handleDelete = e =>{
    setIspro(false)
  }
  if(!userId){
    navigate("/")
    alert("Login Again")
   
  }
  return (
   
      <div>
        
        <Stack direction="row"
          gap="40px"  
          fontSize={"24px"}
          alignItems="flex-end"
          justifyContent={'none'}
        >
             {userId &&<Link to='/foodlogs' style={{textDecoration:'none',color:"#3A1212",borderBottom:'3px solid Darkblue'}}>MyFoodlogs</Link>}
             {userId &&<Link to='/calorieslogs' style={{textDecoration:'none',color:"#3A1212",borderBottom:'3px solid Darkblue'}}>Mycalorielogs</Link>}
             {userId &&<Link to='/nutritionanalysis' style={{textDecoration:'none',color:"#3A1212",borderBottom:'3px solid Darkblue'}}>NutritionAnalysis</Link>}
             {userId &&<Link to='/searchreceipe' style={{textDecoration:'none',color:"#3A1212",borderBottom:'3px solid Darkblue'}}>Diet Receipes </Link>}
            
             {userId &&<a href="#exercises" style={{textDecoration:'none',color:"#3A1212"}}>Exercises</a>}
             {userId && <Button variant='contained' mt={10} ml={30} sx={{backgroundColor:'#7EC8E3',padding:'150',width:{lg:'175px',xs:"75px"},}} onClick={onClickhandlerpro}  >MyProfile</Button>}
            {userId && <Button variant='contained' mt={10} ml={30} sx={{backgroundColor:'#7EC8E3',padding:'150',width:{lg:'175px',xs:"75px"},}} onClick={onClickHandler}  >Logout</Button>}
            
           
        </Stack>
       
        {userId && !ispro && <img src="https://media.istockphoto.com/id/1186915680/vector/meditation-concept-illustration.jpg?s=170667a&w=0&k=20&c=A13EIKzn403zN0BxpkeMl9CmVgmpChSCJlO9ZHGfXjQ=" alt="banner" className="hero-banner1-img"/>}
           
       
       
           {userId&& ispro && <Myprofile/>}
       
          <Box justifyContent={'center'} ml={75}>
           {ispro && <Button variant='contained'onClick={handleDelete}><CloseIcon/></Button>}
          </Box>
        </div>
        
        
      
  )

          
    
}

export default Dashboard