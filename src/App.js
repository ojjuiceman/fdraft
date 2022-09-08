import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
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






function App() {

return (
  <div className="App">
    <br/>

    
    <header className="Navbar">
        <div className="Toolbar">
          <div className="Logo">
            {" "}
            <span role="img" aria-label="logo">
              😏
            </span>{" "}
          </div>
          <div className="Title"> Watermarke </div>
          <div>
            <button> Contact </button>
          </div>
        </div>
      </header>
      <div className="Toolbar" />
      
    <Typography variant="h2" color="primary" align="center" >
      WATERMARKE
    </Typography>
    <br></br>
    <Divider variant="inset"  />
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
    
    <br></br>
    <Typography variant="h3" color="primary" align="center" >
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




  </div>


 

);
}


export default App;



