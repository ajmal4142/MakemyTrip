import {  ListItemButton, ListItemIcon,Link, Typography } from '@mui/material';
import { Box,  } from '@mui/system';
import React from 'react'
import { sideItems } from './Layouts';

export const SideBar = (props) => {
     const{open,setOpen} = props;
    
    
return (
<>
{
    sideItems.map((obj,index)=>{
        console.log(open,setOpen);
        if(open){
            return(
                <div style={{"&:active":{color:"#008cff",boxShadow:"0px 5px 0px #008cff "},opacity:"0.7"}}>
                <Box  key={obj} pt={1.5} display={{ xs: "flex", sm: "flex", md: "none" }}  sx={{background:"#eeeeee",width:"200px",height:"75px",pb:0,"&:active":{color:"#008cff",},position:"relative",}}
                >
                  <ListItemButton edge="start" sx={{p:"0px",display:"flex",justifyContent:"center",borderRadius:"20px",width:"175px"}}>
                    <Link
                      to={obj.path}
                      
                      sx={obj.style}
                      disablePadding
                    >
                      <ListItemIcon sx={{display:"flex",justifyContent:"center","&:active":{color:"#008cff"},width:"75px"}} >{obj.icon}</ListItemIcon>
                      <Typography disablePadding sx={{fontSize:"10px",pt:1,"&:active":{color:"#008cff"}}}  >{obj.label}</Typography>
                    </Link>
                  </ListItemButton>
                </Box>
                
                </div>
            )
        }
        return null;
    })
}  
</>
  )
}
