    // const submitHandler = e=>{
    //     e.preventDefault();
    //     fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${Inputs.foodname}&app_id=6f7d5d7d&app_key=2106a213f50d52abc70d40a9956d371c&diet==${Inputs.diet}&health==${Inputs.health}&cuisineType==${Inputs.cuisineType}&mealType==${Inputs.mealType}&dishType==${Inputs.dishType}&calories==${Inputs.calories}&imageSize=REGULAR&random=true&field=image`).then(
    //         response=> response.json()
    //     ).then(data=>console.log(data))
       
    // }
import  react from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Button, TextField,Box } from '@mui/material';
import { Typography } from '@mui/material';
import Recipes from './Recipes';
import {Stack }from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

    const diets = [
        'balanced',
        'high-fiber',
        'high-protein',
        'low-carb',
        'low-fat',
        'low-sodium',
      ];

    const health = [
        'alcohol-cocktail',
        'alcohol-free',
        'celery-free',
        'crustacean-free',
        'dairy-free',
        'egg-free',
        'fish-free',
        'fodmap',
        'gluten-free',
        'lupine-free',
        'mollusk-free',
        'mustard-free',
        'no-oil-Added',
        'peanut-free',
        'vegan',
        'vegetarian',
        'wheat-free',
 ]

 const cuisineType =[
    'American',
    'Asian',
    'British',
    'Caribbean',
    'Central Europe',
    'Chinese',
    'Eastern Europe',
    'French',
    'Indian',
    'Italian',
    'Japanese',
    'Kosher',
    'Mediterranean',
     'Mexican',
     'Middle Eastern',
     'Nordic',
     'South American',
     'South East Asian',
 ]

 const mealType= [
    'Breakfast',
    'Dinner',
    'Lunch',
    'Snack',
    'Teatime',

 ]

 const dishType = [
    'Side dish',
    'Soup',
    'Starter',
    'Sweets',
    'Biscuits and cookies',
    'Bread',
    'Cereals',
    'Condiments and sauces',
    'Desserts',
    'Drinks',
    'Main Course',
    'Pancake',
   ' Preps',
    'Preserve',
    'Salad',
    'Sandwiches'

 ]

 function getStyles(health, healthTypes, theme) {
    return {
      fontWeight:
        healthTypes.indexOf(health) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
      const ReceipeSearch = () => {
        const[data,setData]=useState([]);
        const submitHandler = e=>{
            e.preventDefault();
            fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingrediant}&app_id=6f7d5d7d&app_key=2106a213f50d52abc70d40a9956d371c&diet=${Diets}&health=${healthTypes}&cuisineType=${cuisine}&mealType=${meal}&dishType=${dish}&calories=${calories}&imageSize=REGULAR&random=true&field=image&field=calories&field=totalNutrients&field=uri&field=label`).then(
                response=> response.json()
            ).then(data=>setData(data.hits))
        }
        console.log(data);
        
        const theme = useTheme();
        const [ingrediant,setIngrediant]=useState('');
        const[calories,setCalories]=useState('')
        const [healthTypes, sethealthTypes] = useState([]);
        const [Diets, setDiets] = useState([]);
        const [meal, setMeal] = useState([]);
        const [dish, setDish] = useState([]);
        const [cuisine, setCuisine] = useState([]);
        
         const handleChangeingr= (e)=>{
            const {target:{
                value
            },}=e;
            setIngrediant(value)
         }

         const handleChangecalories= (e)=>{
            const {target:{
                value
            },}=e;
            setCalories(value)
         }
      
        const handleChangehealth = (event) => {
          const {
            target: { value },
          } = event;
          sethealthTypes(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
        };
        const handleChangediets = (event) => {
            const {
              target: { value },
            } = event;
            setDiets(
              // On autofill we get a stringified value.
              typeof value === 'string' ? value.split(',') : value,
            );
          };
          const handleChangemeal = (event) => {
            const {
              target: { value },
            } = event;
            setMeal(
              // On autofill we get a stringified value.
              value
            );
          };
          const handleChangeDish = (event) => {
            const {
              target: { value },
            } = event;
            setDish(
              // On autofill we get a stringified value.
              value
            );
          };
          const handleCusine = (event) => {
            const {
              target: { value },
            } = event;
            setCuisine(
              // On autofill we get a stringified value.
             value
            );
          };
      
      return (
        
        <div>
       <Typography fontWeight={50} sx={{fontSize:{lg:'30px',xs:'20px'}}} mt='50px'textAlign={"center"}>Specify your diet details</Typography>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>

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
          label="Major Ingrediant"
          type="text"
          onChange={handleChangeingr}
          name="ingrediant"
          placeholder='Enter major ingrediant'
        /><br/>
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
          label="Calories"
          type="text"
          onChange={handleChangecalories}
          name="calories"
          placeholder='Required calories'
        /><br/>
        <Select
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
          multiple
          displayEmpty
          value={healthTypes}
          onChange={handleChangehealth}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Allergies/healthTypes</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Allergies/healthTypes</em>
          </MenuItem>
          {health.map((health) => (
            <MenuItem
              key={health}
              value={health}
              style={getStyles(health, healthTypes, theme)}
            >
              {health}
            </MenuItem>
          ))}
        </Select>
        <Select
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
          multiple
          displayEmpty
          value={Diets}
          onChange={handleChangediets}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>DietTypes</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>DietTypes</em>
          </MenuItem>
          {diets.map((diet) => (
            <MenuItem
              key={diet}
              value={diet}
              style={getStyles(diet, Diets, theme)}
            >
              {diet}
            </MenuItem>
          ))}
        </Select>


        <Select
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
          multiple
          displayEmpty
          value={meal}
          onChange={handleChangemeal}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>MealTypes</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>MealTypes</em>
          </MenuItem>
          {mealType.map((meal) => (
            <MenuItem
              key={meal}
              value={meal}
              style={getStyles(meal, mealType, theme)}
            >
              {meal}
            </MenuItem>
          ))}
        </Select>


        <Select
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
          multiple
          displayEmpty
          value={dish}
          onChange={handleChangeDish}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>dishType</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>dishType</em>
          </MenuItem>
          {dishType.map((dish) => (
            <MenuItem
              key={dish}
              value={dish}
              style={getStyles(dish, dishType, theme)}
            >
              {dish}
            </MenuItem>
          ))}
        </Select>

        <Select
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
          multiple
          displayEmpty
          value={cuisine}
          onChange={handleCusine}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>cuisineType</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>cuisineType</em>
          </MenuItem>
          {cuisineType.map((cuisine) => (
            <MenuItem
              key={cuisine}
              value={cuisine}
              style={getStyles(cuisine, cuisineType, theme)}
            >
              {cuisine}
            </MenuItem>
          ))}
        </Select>

      <Box textAlign={'center'} ml={60}>
      <Button variant='contained' mb={3} sx={{backgroundColor:'#7EC8E3',padding:'150',width:{lg:'400px',xs:"300px"}}}onClick={submitHandler}>GET RECEIPES</Button>
      </Box>
      </FormControl>
     { data?.length >= 1?<Typography 
    justifyContent={'center'}
    mt="10px"
    p="20px">Showing results</Typography>:''}
      {data?.length >= 1 ? <Recipes data={data}/>:null}
      
    </div>
      )
    }
    
    export default ReceipeSearch