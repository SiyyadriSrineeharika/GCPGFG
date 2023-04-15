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


const MyFoodlogs = ({activity,duration,weight,burnedcal,date,isUser,id}) => {

  function refreshPage() {
    window.location.reload(false);
  }
    
  const navigate = useNavigate();
  const deleteRequest= async ()=>{
    const res = await axios.delete(`http://localhost:5000/deletecalorielog/${id}`).catch(err=>console.log(err));
    const data = await res.data;
    return data
  }
  const handleDelete = ()=>{
    deleteRequest().then(()=>navigate("/")).then(()=>navigate("/calorieslog"));
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
          <Img alt="complex" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq7-PiOk-lsFvH34bYmrKj2xCdBRQB1V5SnZ6j8Ij7KA&usqp=CAU&ec=48665701" />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
              {activity} {weight}
            </Typography>
            <Typography variant="body2" gutterBottom>
             {duration}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {burnedcal}Calories<br/>
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