import './App.css';
import React, { Component, useRef } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import {BrowserRouter, Route, Routes, Router, useNavigate }from "react-router-dom";
import { Fragment } from 'react'; 
import Grid from '@material-ui/core/Grid';
import Services from './Services';
import About from './About';
import {Navbar} from './Navbar';
import { Instagram, Twitter } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Box from '@material-ui/core/Box';


export default function Contact(){

    const navigate = useNavigate();

    const navToServ = () => {
    navigate('/services')
};
const navToAbout = () => {
    navigate('/about')
};
const navToHome = () => {
    navigate('/')
  };

    return(
        <div>
        <header className="Navbar">
            <div className="Toolbar">
              <div className="Title"> Watermarke </div>
           
             
            </div>
          
          <div className="Toolbar" />
          </header>
          <br></br>

<br></br>

    <br></br>
<Box m={2} pt={4}>
    <Divider variant="inset"  />
    <Typography variant="h2" color="primary" align="center" >
      WATERMARKE
    </Typography>
    <Typography variant="h3" color="textSecondary" align="center" >
    Contact us Via Email or Phone to learn more about our services and how we can help you
    </Typography>
    <br></br>
    <Typography variant="h4" color="textSecondary" align="center" >
    Contact Email: Watermarkesolutions@icloud.com
    </Typography>
    <br></br>
    <Typography variant="h4" color="textSecondary" align="center" >
    Contact Phone Number: 949-310-4877    
    </Typography>
    
    
                <FacebookIcon align="center" onClick={event =>  window.location.href='https://facebook.com'} />
                <Instagram align="center" onClick={event =>  window.location.href='https://instagram.com'} />
                <Twitter align="center" onClick={event =>  window.location.href='https://twitter.com/home'} />
            <br></br>
            <br></br>
    <Stack align="center" direction="Row" spacing={4}>
        <button color="primary" onClick={navToServ}> Services </button>
        <button color="primary" onClick={navToAbout}> About </button>
        <button color="primary" onClick={navToHome}> Home </button>

    </Stack>
    </Box>

</div>

    )

}