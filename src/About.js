import logo from './logo.svg';
import './App.css';
import React, { Component, useRef } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined'
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Instagram, Twitter } from '@mui/icons-material';
import { Stack } from '@mui/material';
import Box from '@material-ui/core/Box';
import { useNavigate } from 'react-router-dom';






function About() {

  const navigate = useNavigate();

  const navToServ = () => {
  navigate('/services')
};
const navToHome = () => {
  navigate('/')
};
return (
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

    
  
      
    <Box m={2} pt={10} >
    <Typography  variant="h3" color="primary" align="center" >
    ABOUT
    <br></br>
    </Typography>
    <Divider variant="inset" />
    <br></br>
    <Typography variant="h4" color="primary" align="center" >
    We Are A Data Analytics and Business Planning Strategies Company
    </Typography>

    <br></br>
    <Typography variant="body1" color="textSecondary" align="center" >
    Watermarke has provided solutions for small, medium, and even Fortune 500 corporations in managing critical business tools and systems for over 30 years. We can help you out, please contact us for a free consultation.
    </Typography>
    <br></br>
    <Typography variant="h4" color="primary" align="center" >
    These Are Our Core Values
    </Typography>
    <br></br>
    <Typography variant="body1" color="textSecondary" align="center" >
    Our company core values are: innovation, diversity and inclusion. We uphold social responsibility, creativity, and trustworthiness. We place a huge emphasis on the relationships we harness and maintain with our clients. We are here to work for you!
    </Typography>

    <Divider variant="inset" />
    <br></br>

    <Typography variant="h4" color="primary" align="center" >
    What We Do
    </Typography>

    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
>
  
<Grid item xs={3}>
    <List   >
      <ListItem alignItems='center'  >
        <ListItemIcon> <AdjustOutlinedIcon /> </ListItemIcon>
        <ListItemText primary="Sales & Marketing Strategies" />
      </ListItem>
      <ListItem alignItems='center' >
        <ListItemIcon> <AdjustOutlinedIcon /> </ListItemIcon>
        <ListItemText primary="Product & Brand Analysis" />
      </ListItem>
      <ListItem alignItems='center' >
        <ListItemIcon> <AdjustOutlinedIcon /> </ListItemIcon>
        <ListItemText primary="Competitive Intelligent data" />
      </ListItem>
      <ListItem alignItems='center' >
        <ListItemIcon> <AdjustOutlinedIcon /> </ListItemIcon>
        <ListItemText primary="Operations Review & Monitor" />
      </ListItem>
      <ListItem alignItems='center' >
        <ListItemIcon> <AdjustOutlinedIcon /> </ListItemIcon>
        <ListItemText primary="Data Help & Support" />
      </ListItem>
    </List>
    </Grid>
  </Grid> 
  <Stack direction="Row" spacing={4}>
        <button color="primary" onClick={navToServ}> Services </button>
        <button color="primary" onClick={navToHome}> Home </button>
    </Stack>
  </Box>
                

  

    




  </div>


 

);
}


export default About;