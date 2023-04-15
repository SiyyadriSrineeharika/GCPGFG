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

const Analysis = ({data,search}) => {

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    


  return (
    <Box textAlign={'center'} ml={60} mt={10}>
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://image.slidesharecdn.com/foodanalysiscarbohydrates-210625052407/85/carbohydrates-food-analysis-pharmaceutical-analysis-department-mpharmacy-1-320.jpg?cb=1666137942"
        alt="Paella dish"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {search}
        </Typography>
      </CardContent>
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
         Total Calories<br/>
         {data.calories} kcal<br/>
         Calories from carbohydrates<br/>
         {data.totalNutrientsKCal.CHOCDF_KCAL.quantity} kcal<br/>
         Total Energy<br/>
         {data.totalNutrientsKCal.ENERC_KCAL.quantity} kcal<br/>
         Calories from fat<br/>
         {data.totalNutrientsKCal.FAT_KCAL.quantity} kcal<br/>
         Calories from protein<br/>
         {data.totalNutrientsKCal.PROCNT_KCAL.quantity} kcal<br/>
         <Typography variant='h5'>Fatty acids<br/></Typography>
         --- {data.totalNutrients.FAMS.label}<br/>
         --- {data.totalNutrients.FAMS.quantity} g<br/>
         --- {data.totalNutrients.FAPU.label} <br/>
         --- {data.totalNutrients.FAPU.quantity} g<br/>
         --- {data.totalNutrients.FASAT.label}<br/>
         --- {data.totalNutrients.FASAT.quantity} g<br/>
         <Typography variant='h5'>Cholestrol<br/></Typography>
         {data.totalNutrients.CHOLE.quantity} {data.totalNutrients.CHOLE.unit}
         <Typography variant='h5'>Fiber<br/></Typography>
         {data.totalNutrients.FIBTG.quantity} {data.totalNutrients.FIBTG.unit}
        </Typography>
        </CardContent>
      </Collapse>
    </Card>
   </Box>
  )
}

export default Analysis