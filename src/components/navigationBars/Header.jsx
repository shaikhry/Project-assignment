import {
  AppBar,
  Avatar,
  Box,
  Button,
  CardMedia,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";


import atLogo from "../../assets/A.T-inks-logo.png";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/Logo2.png";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import ExpandMore from "@mui/icons-material/ExpandMore";
import profile from "../../assets/profilePhoto.jpg";
import SideBarNav from "./SideBar";
import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import { IconTextField } from "../TextField/TextFieldWithIcon";
import { textAlign } from "@mui/system";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha("#EEEFF4"),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            color: "black",
            boxShadow: "0px 1px 10px rgba(238, 239, 244, 1);",
            padding: "20px 100px 20px 10  0px",
          }}
        >
          <Toolbar>
            <Box sx={{ display: "flex" }}>
              <IconButton>
                <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: "32px",color:"#712AA9" }} />
              </IconButton>
              <Typography sx={{ fontSize: "31px", fontWeight: "600" ,color:"#000"}}>
              <CardMedia
          component="img"
          sx={{
            height: 40,
            objectFit: "contain",
          }}
          alt=""
          src={atLogo}
        />
        
              </Typography>
              AT Link
              <br />
              
              .RED
              
            </Box>

<Box style={{position:'relative',bottom:'5px',marginLeft:'120px'}}>
  
  <input type="text"  placeholder='Search...' style={{width:'400px',borderRadius:'5px',
  border:'none',
    height:'30px',backgroundColor:'#F8F9F9',fontSize:'18px'}}/>

</Box>

<Box style={{marginLeft:'220px',border:'2px solid',width:'150px',height:'26px',color:'white',backgroundColor:'black'
,textAlign:'center',borderRadius:'5px',paddingTop:'5px',fontSize:'15px'
}}>
  Checkout(200)
</Box>

            <Box
              component="div"
              sx={{ flexGrow: 1, display: "flex", justifyContent: "right" }}
            ></Box>

            <Box display="flex" alignItems={"center"}>
              <Avatar
                sx={{ mr: 1 ,color:"#712AA9",backgroundColor:"#F7EDFF",width:"41px",height:"41px"}}
                sizes="30px"
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Typography
                variant="h6"
                sx={{ }}
              >
               User Admin  <select style={{border:'none'}}>

               </select>
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;

{
  /* <List
dense
sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}
>
{" "}
<ListItem secondaryAction={<ExpandMore />} disablePadding>
  <ListItemButton>
    <ListItemAvatar>
      <Avatar alt={`Avatar n°${profile + 1}`} src={profile} />
    </ListItemAvatar>
    <ListItemText primary={`User Admin `} />
  </ListItemButton>
</ListItem>
</List> */
}
