/* eslint-disable jsx-a11y/alt-text */
import { AppBar, Typography ,CssBaseline,Grid, IconButton,Link,ListItemButton,ListItemIcon,} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import { navItems } from './Layouts';
import { SideBar } from './SideBar';
import { style1 } from './Layouts';
import { useState } from 'react';

import mmt2 from '../Components/Photos/mmt1.webp'
import DehazeIcon from '@mui/icons-material/Dehaze';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(open ? false : true);
      console.log(open);
    };
  return (
    <>
        <Box m={0}  >
            <CssBaseline/>
            
        <AppBar sx={{  background:"white" ,height:70,display:"flex",flexDirection:"row" ,position:"relative" }}   >
          <Box sx={{width:"50px",height:"64px"}} display={{ xs: "flex", sm: "flex", md: "none" }}>
          <DehazeIcon  sx={style1} onClick={handleDrawerOpen}/>
          </Box>
        <Grid sx={{ width: "5vmax" }} />
        <section>
        <img src={mmt2} style={{marginTop:4,ml:"2px",width:"120px",height:"60px"}}></img>

        </section>
            <Box ml={6} sx={{height:70,display:"flex",justifyContent:"center","&:active":{color:"#008cff"}}}>
            {navItems.map((text, index) => (
                <Box  key={text} pt={1.5} disablePadding sx={{height:70,pb:0,"&:active":{color:"#008cff",boxShadow:"0px 5px 0px #008cff "}}}
                display={{ xs: "none", sm: "none", md: "flex" }}
                >
                  <ListItemButton edge="start" sx={{p:"0px"}}>
                    <Link
                      to={text.path}
                      sx={text.style}
                      disablePadding
                    >
                      <ListItemIcon sx={{display:"flex",justifyContent:"center","&:active":{color:"#008cff"},width:"75px"}} >{text.icon}</ListItemIcon>
                      <Typography disablePadding sx={{fontSize:"10px",pt:1,"&:active":{color:"#008cff"}}}  >{text.label}</Typography>
                    </Link>
                  </ListItemButton>
                </Box>
              ))}              
              </Box>
            <Grid sx={{ width: "25%" }} />
            <Box  sx={{display:"flex",position:"absolute",right:0,top:0,mt:"4px"}}>
            <IconButton><LoginIcon/></IconButton>
            <Link varient="h6" sx={{fontSize:"12px",color:"black",width:100, mt:"10px",fontWeight:800}}>Login or <br></br>Create account</Link>
            </Box>             
        </AppBar>
        </Box>
        <SideBar open={open} setOpen={setOpen}/>       
    </>
  )
}

