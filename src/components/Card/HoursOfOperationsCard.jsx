import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EditIcon from "@mui/icons-material/Edit";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import WorkIcon from "@mui/icons-material/Work";
function HoursOfOperationsCard({ title ,toggleDrawer}) {
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
          <WorkIcon sx={{ mr: 2, color: "#BCBCBC", fontSize: "28px" }} />
          <Typography textAlign={"left"} variant="h6" fontWeight={700}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ ml: 2 }}>
          <EditIcon  onClick={(e)=>toggleDrawer(e)} sx={{ color: "#C8343A" }} />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"left"}
        alignItems={"center"}
        sx={{ mb: 0.5 }}
      >
        {/* <MailRoundedIcon sx={{ mr: 2, color: "#BCBCBC", fontSize: "20px" }} /> */}
        {/* <Typography textAlign={"left"} variant="body1">
          {title}
        </Typography> */}
      </Box>
      <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
        {/* <LocalPhoneRoundedIcon
          sx={{ mr: 2, color: "#BCBCBC", fontSize: "20px" }}
        /> */}
        <Typography textAlign={"left"} variant="body1">
         Monday To Friday - 09:00 Am To 06:00 Pm
        </Typography>
      </Box>
    </Box>
  );
}

export default HoursOfOperationsCard;
