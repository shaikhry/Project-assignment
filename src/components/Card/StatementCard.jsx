import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EditIcon from "@mui/icons-material/Edit";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import WorkIcon from "@mui/icons-material/Work";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { useSelector } from "react-redux";

function StatementCard({ title, toggleDrawer }) {
  const data=useSelector(state=>state.StatementReducer.statementDash)
  const statements = useSelector((state) => state.StatementReducer.statments)
 
  return (
    <Box
      sx={{
        border: "1px solid #BCBCBC",
        p: 2,
        borderRadius: "10px",
        width: "30%",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
          <FormatQuoteIcon sx={{ mr: 2, color: "#BCBCBC", fontSize: "28px" }} />
          <Typography textAlign={"left"} variant="h6" fontWeight={700}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ ml: 2 }}>
          <EditIcon sx={{ color: "#C8343A" }} onClick={()=>toggleDrawer()}/>
         
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"left"}
        alignItems={"center"}
        sx={{ mb: 0.5 }}
      >
    
      </Box>

      <Box>
        <Typography>
      {
        data.name
      }
      
        </Typography>
        <Box style={{backgroundColor:'#F8DEDB', color:'#C8343A',display:'inline',position:'relative',bottom:'20px',left:'140px',borderRadius:'100%',padding:'3px'}} sx={{ ml: 2 }}>
          +{statements.length}
        
        </Box>

        

      </Box> 

     
        

    </Box>
  );
}

export default StatementCard;
