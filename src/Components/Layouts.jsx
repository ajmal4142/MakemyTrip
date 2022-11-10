
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import HotelIcon from '@mui/icons-material/Hotel';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PaymentsIcon from '@mui/icons-material/Payments';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';


export const navItems = 
    [
        { label: "Planes", path: "/plane", icon: <AirplaneTicketIcon />,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                alignItems:"center",
                color:"#4a4a4a",
                width:"75px",
                "&:active":{color:"#008cff"},
                padding:"0px",
          }},
        { label: "Hotels", path: "/hotel", icon: <HotelIcon />, style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px",
                "&:active":{color:"#008cff"}

          }},
        { label: "Home Stay", path: "/home", icon: <HomeWorkIcon />,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px",
                "&:active":{color:"#008cff"}
          }} ,
        { label: "Packages", path: "/Package", icon: <DownhillSkiingIcon />,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",alignItems:"center",
                width:"75px","&:active":{color:"#008cff"}
          }} ,
        { label: "Train", path: "/train", icon: <TrainIcon /> ,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px","&:active":{color:"#008cff"}
          }},
        { label: "Bus", path: "/bus", icon: <DirectionsBusIcon /> ,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px","&:active":{color:"#008cff"}
          }} ,
        { label: "Cabs", path: "/cab", icon: <DirectionsCarIcon />,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px","&:active":{color:"#008cff"}
          }} ,
        { label: "Forex", path: "/forex", icon: <PaymentsIcon /> ,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px","&:active":{color:"#008cff"}
          }},
        // { label: "Charter Flights", path: "/chart", icon: <ConnectingAirportsIcon /> ,style:{
        //     textDecoration: "none",
            
        //     flexDirection:"column",
        //     justifyContent:"center",
        //         color:"#4a4a4a",alignItems:"center",
        //         width:"75px","&:active":{color:"#008cff"},
        //         display:{xs: "none", sm: "none", md: "flex" }
        //   }},
        
      ]

      export const style1 = {
        color:"#4455c2" ,width:"34px",height:"55px",mt:"10px",ml:"20px","&:hover":{cursor:"pointer",background:"#dcdee6"}
      }

      export const sideItems = 
    [
        { label: "Planes", path: "/plane", icon: <AirplaneTicketIcon />,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                alignItems:"center",
                color:"#4a4a4a",
                width:"75px",
                "&:active":{color:"#008cff"},
                style1 : {
                    color:"#4455c2" ,width:"34px",height:"55px",mt:"10px",ml:"20px","&:hover":{cursor:"pointer",background:"#dcdee6"}
                  }
          }},
        { label: "Hotels", path: "/hotel", icon: <HotelIcon />, style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px",
                "&:active":{color:"#008cff"}
          }},
        { label: "Home Stay", path: "/home", icon: <HomeWorkIcon />,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px",
                "&:active":{color:"#008cff"}
          }} ,
        { label: "Packages", path: "/Package", icon: <DownhillSkiingIcon />,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",alignItems:"center",
                width:"75px","&:active":{color:"#008cff"}
          }} ,
        { label: "Train", path: "/train", icon: <TrainIcon /> ,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px","&:active":{color:"#008cff"}
          }},
        { label: "Bus", path: "/bus", icon: <DirectionsBusIcon /> ,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px","&:active":{color:"#008cff"}
          }} ,
        { label: "Cabs", path: "/cab", icon: <DirectionsCarIcon />,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px","&:active":{color:"#008cff"}
          }} ,
        { label: "Forex", path: "/forex", icon: <PaymentsIcon /> ,style:{
            textDecoration: "none",
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",
                alignItems:"center",
                width:"75px","&:active":{color:"#008cff"}
          }},
        { label: "Charter Flights", path: "/chart", icon: <ConnectingAirportsIcon /> ,style:{
            textDecoration: "none",
            
            flexDirection:"column",
            justifyContent:"center",
                color:"#4a4a4a",alignItems:"center",
                width:"75px","&:active":{color:"#008cff"},
          }},
        
      ]