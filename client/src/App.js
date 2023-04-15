import React from 'react'
import { createContext,useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Foodlogs from './components/Foodlogs';
import MyFoodlogs from './components/MyFoodlogs';
import Foodlog from './components/Foodlog';
import NutritionAnalysis from './components/NutritionAnalysis';
import Analysis from './components/Analysis';
import Myprofile from './components/Myprofile';
import Calorielog from './components/Calorielog';
import ReceipeSearch from './components/ReceipeSearch';
import Calorielogs from './components/Calorielogs';

export const store = createContext();
const App = () => {
  const [token,setToken]=useState(null);
  return (
    <Box width="400px" sx={{ width:{x1:'1488px'}}} m="auto">
      <store.Provider value={[token,setToken]}>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Foodlogs" element={<Foodlogs/>}/>//Addfoodlog
        <Route path="/Foodlog" element={<Foodlog/>}/>//view foodlogs
        <Route path="/Dashboard" element={<Dashboard/>}/>
        {/* <Route path="/MyFoodlogs" element={<MyFoodlogs/>}/> */}
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        <Route path="/calorieslogs" element={<Calorielogs/>}/>
        <Route path="/calorieslog" element={<Calorielog/>}/>
        <Route path="/nutritionanalysis" element={<NutritionAnalysis/>}/>
        <Route path="/myprofile" element={<Myprofile/>}/>
        <Route path="/analysis" element={<Analysis/>}/>
        <Route path="/searchreceipe" element={<ReceipeSearch/>}/>
      </Routes>
      </store.Provider>
    </Box>
  )
}

export default App