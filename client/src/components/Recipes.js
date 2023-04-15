import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
  

const Recipes = ({data}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
     
  
  return (
   
    <Stack direction="row" sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap="wrap" justifyContent="center">
    {data.map(data=>
       <Card sx={{ maxWidth: 350}}>
       <CardHeader
         title={data.recipe.label}
         subheader={"Total Calories "+data.recipe.calories+" g"}
       />
       <CardMedia
         component="img"
         height="210"
         image={data.recipe.image}
         alt="Paella dish"
       />
       <CardActions disableSpacing>
         <ExpandMore
           expand={expanded}
           onClick={handleExpandClick}
           aria-expanded={expanded}
           aria-label="show more"
         >
           <ExpandMoreIcon />
         </ExpandMore>
       </CardActions>
       <Collapse in={expanded} timeout="auto" unmountOnExit>
         <CardContent>
         <Typography>
         Calories from carbohydrates<br/>
         {data.recipe.totalNutrients.CHOCDF.quantity} kcal<br/>
         Total Energy<br/>
         {data.recipe.totalNutrients.ENERC_KCAL.quantity} kcal<br/>
         <Typography variant='h5'>Fatty acids<br/></Typography>
         --- {data.recipe.totalNutrients.FAMS.label}<br/>
         --- {data.recipe.totalNutrients.FAMS.quantity} g<br/>
         --- {data.recipe.totalNutrients.FAPU.label} <br/>
         --- {data.recipe.totalNutrients.FAPU.quantity} g<br/>
         --- {data.recipe.totalNutrients.FASAT.label}<br/>
         --- {data.recipe.totalNutrients.FASAT.quantity} g<br/>
         <Typography variant='h5'>Cholestrol<br/></Typography>
         {data.recipe.totalNutrients.CHOLE.quantity} {data.recipe.totalNutrients.CHOLE.unit}
         <Typography variant='h5'>Fiber<br/></Typography>
         {data.recipe.totalNutrients.FIBTG.quantity} {data.recipe.totalNutrients.FIBTG.unit}
        </Typography>
         </CardContent>
       </Collapse>
     </Card>
    )}
</Stack>
    
  )
}

export default Recipes