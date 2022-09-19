
import './App.css';
import React, { Component, useRef } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter, Route, Routes, Router, useNavigate }from "react-router-dom";
import { Fragment } from 'react'; 
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AdjustOutlinedIcon from '@material-ui/icons/AdjustOutlined';
import Services from './Services';
import About from './About';
import {Navbar} from './Navbar';
import {Home} from './Home';

import Divider from "@material-ui/core/Divider";
import { Instagram, Twitter } from '@mui/icons-material';
import { Stack } from '@mui/material';






function App() {

  
    
  
   




return (
  <div>
  <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/services' element={<Services/>} />
  </Routes>
  </div>


);
}



export default App;



