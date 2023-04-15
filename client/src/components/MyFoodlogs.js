import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


const MyFoodlogs = ({qty,Unit,food,Calories,date,isUser,id}) => {

  function refreshPage() {
    window.location.reload(false);
  }
    
  const navigate = useNavigate();
  const deleteRequest= async ()=>{
    const res = await axios.delete(`http://localhost:5000/deletefoodlog/${id}`).catch(err=>console.log(err));
    const data = await res.data;
    return data
  }
  const handleDelete = ()=>{
    deleteRequest().then(()=>navigate("/")).then(()=>navigate("/Foodlog"));
  }
  
  return (
    
    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 500,
      mb: 10,
      ml: 10,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
  >
   
    <Grid container spacing={2}>
      <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img alt="complex" src="https://img.taste.com.au/1jyDeGmD/w720-h480-cfill-q80/taste/2018/12/broccoli-steaks-with-roasted-chickpeas-tomatoes-and-cashew-dressing-144935-2.jpg" />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {food}
            </Typography>
            <Typography variant="body2" gutterBottom>
             {qty}{Unit} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {Calories} Calories<br/>
             {date}
            </Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' ml={40}  sx={{backgroundColor:'#7EC8E3',padding:'150', width:{lg:'200px',xs:"100px"},}} onClick={handleDelete}>Remove</Button><br/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Paper>



    
  )
}

export default MyFoodlogs;