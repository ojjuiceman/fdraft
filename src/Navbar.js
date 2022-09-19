import { Instagram, Twitter } from '@mui/icons-material';
import { Stack } from '@mui/material';
import './App.css';
import React, { Component, useRef } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography';
import {BrowserRouter, Route, Routes, Router, useNavigate } from 'react-router-dom';


export function Navbar() {

  
    
  
return (
    
    <Box m={2}>
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
        </Box>
        
          
      
    
    )
};

