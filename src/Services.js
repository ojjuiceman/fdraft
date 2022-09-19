import logo from './logo.svg';
import './App.css';
import React, { Component, useRef } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@material-ui/core/Typography';
import { useNavigate } from 'react-router-dom';
import Box from '@material-ui/core/Box'

import Divider from "@material-ui/core/Divider";
import { Instagram, Twitter } from '@mui/icons-material';
import { Stack } from '@mui/material';






function Services() {

  const navigate = useNavigate();

  const navToHome = () => {
  navigate('/')
};
const navToAbout = () => {
  navigate('/about')
};
 

return (
  <div>
    <br/>

    
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
      </header>
      <div className="Toolbar" />
      
   
<Box m={2} pt={2} >
    <Typography variant="h3" color="primary" align="center" >
    Services
    </Typography>

    <Divider variant="inset" />
    <br></br>

    <Typography variant="h4" color="primary" align="center" >
    We Analyze and Diagnostic Data Quality
    </Typography>
    <br></br>

    <Typography variant="body1" color="textSecondary" align="center" >
    We have developed an application to prevent corrupt or incorrect data from being imported to the reporting system. The application ensures data conformance to the highest industry standards and policies. The app analyses the data to uncover anomalies, inconsistencies, and redundancies by analyzing the content, structure, and relationships within the data.
    </Typography>
    <br></br>
    <Typography variant="h4" color="primary" align="center" >
    We Organize Your Data To Optimize And Speed Up The Process
    </Typography>
    <br></br>
    <Typography variant="body1" color="textSecondary" align="center" >
    Once we perform the analysis, we continue the ongoing corporate data governance efforts by working with business users throughout the entire process. From project initiation to project completion, you can count on us to aid you with data systems. Don’t let your data overwhelm you, govern your data!
    </Typography>
    <br></br>
    <Typography variant="h4" color="primary" align="center" >
    We Handle The Metadata For You
    </Typography>
    <br></br>
    <Typography variant="body1" color="textSecondary" align="center" >
    On a project level, we manage and handle the reporting of metadata to adhere to corporate standards and performance standards.
    </Typography>
    <br></br>
    <Typography variant="h4" color="primary" align="center" >
    We Profile Your Data
    </Typography>
    <br></br>
    <Typography variant="body1" color="textSecondary" align="center" >
    We analyze diverse database systems to identify their structure, content, relationships, and various uses of the data.
    </Typography>
    <Stack direction="Row" spacing={4}>
        <button color="primary" onClick={navToHome}> Home </button>
        <button color="primary" onClick={navToAbout}> About </button>
    </Stack>
    </Box>




  </div>


 

);
}


export default Services;