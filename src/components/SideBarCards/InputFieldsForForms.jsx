import { Button, InputBase } from "@mui/material";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Box } from "@mui/system";
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "35ch",
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha("#EEEFF4"),
  },
  marginTop: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
function InpuFieldsForForms({placeHolderName,onchangeInput,onChangeInputValue,labelForInput,btnText,contactBtnText,functionCallForBtnText,FunCallForContactBtn}) {
  return (
    <>
    <Box sx={{mt:2}}>
      <label style={{fontWeight:700,display:"block",marginBottom:"16px"}}>{labelForInput}</label>
      <Search sx={{ backgroundColor: "#EEEFF4" }}>
        <StyledInputBase
          placeholder={placeHolderName}
          inputProps={{ "aria-label": "search" }}
          onChange={onchangeInput}
          value={onChangeInputValue}
        />
      </Search>
     {btnText ?  <Button startIcon={<AddCircleOutlineRoundedIcon />} fullWidth sx={{mt:2}} onClick={()=>functionCallForBtnText()}>{btnText}</Button>:null}
     {contactBtnText ? <Button  startIcon={<AddCircleOutlineRoundedIcon />} fullWidth sx={{mt:2}} onClick={()=>FunCallForContactBtn()}>{contactBtnText}</Button>:null} 
      </Box>
    </>
  );
}

export default InpuFieldsForForms;

