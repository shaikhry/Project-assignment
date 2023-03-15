import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EditIcon from "@mui/icons-material/Edit";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import CustomDrawer from "../CustomeDrawer/CustomDrawer";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { useSelector } from "react-redux";

const ContactCard = ({
  phone,
  email,
  title,
  toggleDrawer,
  width,
  deleteIcon,
  deleteItem,
}) => {
  const ContactDetails = useSelector((state) => state.ContactReducer.salesTeam);
  const salesTeamDetail = useSelector((state) => state.ContactReducer.salesTeamDetail);


  return (
    <>

      <Box
        sx={{
          border: "1px solid #BCBCBC",
          p: 2,
          borderRadius: "10px",
          width: width,
        }}
      >

       
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
         
          <Box display={"flex"} justifyContent={"left"} >
            
            <PermContactCalendarIcon
              sx={{ mr: 2, color: "#BCBCBC", fontSize: "28px" }}
            />
            <Typography textAlign={"left"} variant="h6" fontWeight={700}>
              {title}
            </Typography>
          </Box>

          <Box sx={{ ml: 2 }}>
            <EditIcon
              sx={{ color: "#C8343A" }}
              onClick={() => toggleDrawer()}
            />
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"left"}
          alignItems={"center"}
          sx={{ mb: 0.5 }}
        >

          <MailRoundedIcon
            sx={{ mr: 2, color: "#BCBCBC", fontSize: "20px" }}
          />
    
          <Typography textAlign={"left"} variant="body1">
            {salesTeamDetail.email.map((item) => {
              return <p>{item}</p>
            })}
          </Typography>
          <Box style={{position:'relative', left:'18px',backgroundColor:'#F8DEDB',borderRadius:'100%',
          padding:'5px',fontSize:'13px'}}
          sx={{ color: "#C8343A" }}
          >+{ContactDetails.length}</Box>
        </Box>
        <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>

          <LocalPhoneRoundedIcon
            sx={{ mr: 2, color: "#BCBCBC", fontSize: "20px" }}
          />
          {salesTeamDetail.phone.map((item) => {
            return <span>{item} </span>
          })}

          <Typography textAlign={"left"} variant="body1">
            {phone}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ContactCard;
