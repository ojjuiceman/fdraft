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


export function Home(){

    const navigate = useNavigate();

    const navToServ = () => {
    navigate('/services')
};
const navToAbout = () => {
    navigate('/about')
};


    return(
        <div>
        <header className="Navbar">
            <div className="Toolbar">
              <div className="Title"> Watermarke </div>
             <div>
                <Stack direction="row" spacing={3}>
                <FacebookIcon  />
                <Instagram />
                <Twitter />
                </Stack>
              </div>
             
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
    <Typography variant="body1" color="textSecondary" align="center" >
    At Watermarke, we specialize in business planning and data analysis. For years, we have accumulated professional experience in different industries. We’ve worked with financial services and institutions, bank retailers and medical suppliers. All had the same goal: Revenue growth and continuous improvement.
    </Typography>
    <br></br>
    <Typography variant="body1" color="textSecondary" align="center" >
    We help you with performance management, marketing planning and strategic planning for business. We can also give you support for business meetings, project assessments and evaluations, project management and marketing funnel automation to cut the costs in your company.
    </Typography>
    <br></br>
    <Typography variant="body1" color="textSecondary" align="center" >
    Our definition of success is bringing people, resources and teams together, to work cooperatively on resolving issues, assessing customer needs and meeting the revenue growth requirements and business requirements on a global scale. We use data analytics to create a digital marketing strategy that works.
    </Typography>
    <Stack direction="Row" spacing={4}>
        <button color="primary" onClick={navToServ}> Services </button>
        <button color="primary" onClick={navToAbout}> About </button>
    </Stack>
    </Box>

</div>

    )

}

