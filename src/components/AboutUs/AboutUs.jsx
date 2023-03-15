import {
  Avatar,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box, typography } from "@mui/system";
import React from "react";
import atLogo from "../../assets/A.T-inks-logo.png";
import VerifiedIcon from "@mui/icons-material/Verified";
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import { IconTextField } from "../TextField/TextFieldWithIcon";
import { NineKPlusOutlined } from "@mui/icons-material";
const AboutUs = ({ title }) => {

const [input,setInput]=useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, voluptas!')
const [show,setShow]=useState(false)
const [update,setUpdate]=useState()
const [change,setChange]=useState(false)

const handleClick=()=>{

  setShow(!show)
  setChange(!change)
  
  
  
  
}
const updateClick=()=>{
  setUpdate(input)
  setShow(!show)
  setChange(!change)

}


const handleChange=(e)=>{
  setInput(e.target.value)
}
  return (



    <Box>
     
      <Typography
        variant="h6"
        sx={{textAlign: "left", fontSize: "22px" }}
      >
        
        {title}
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}
      >
        <List sx={{ display: "inline-block" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{ borderRadius: 0 }} alt="Remy Sharp" src={atLogo} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  A.T. inks
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Digital inks
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <Box sx={{ display: "flex", justifyContent: "left" }}>
          <VerifiedIcon sx={{ mr: 1, color: "#BCBCBC" }} />{" "}
          <Typography
            variant="body1"
            sx={{ textDecoration: "underline", display: "inline-block",color:"#0072E5",cursor:"pointer" }}
          >
            Verift Company
          </Typography>
        </Box>
      </Box>
      <Box sx={{display:"flex",pb:4}}>
        <Typography sx={{width:"600px",textAlign:"left"}}>
        
          {!show ? input : <IconTextField 
          placeholder="Pincode"
          fullWidth
          value={input}
          onChange={(e)=>handleChange(e)}
          />}
        </Typography>
        <Box sx={{ml:2}}>
        {!change ? <EditIcon sx={{color:"#C8343A"}}
          onClick={handleClick}
          
          
          />
           : <Button onClick={updateClick} >Update</Button>}
          </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
