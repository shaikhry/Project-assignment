import React from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EditIcon from "@mui/icons-material/Edit";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
function SocialMediaLinksCard({ title ,toggleDrawer}) {
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
          <InsertLinkIcon sx={{ mr: 2, color: "#BCBCBC", fontSize: "28px" }} />
          <Typography textAlign={"left"} variant="h6" fontWeight={700}>
            {'Social Media & Links'}
          </Typography>
        </Box>
        <Box sx={{ ml: 2 }}>
          <EditIcon sx={{ color: "#C8343A" }} 
          onClick={()=>toggleDrawer()}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", gap: 4, justifyContent: "center" }}>
        <Box sx={{ mb: 0.5 }}>
          <Box>
            <LanguageIcon sx={{ color: "#BCBCBC", fontSize: "40px" }} />
          </Box>
          <Typography textAlign={"center"} variant="caption">
            {"Website"}
          </Typography>
        </Box>
        <Box sx={{ mb: 0.5 }}>
          <Box>
            <InstagramIcon sx={{ color: "#BCBCBC", fontSize: "40px" }} />
          </Box>
          <Typography textAlign={"center"} variant="caption">
            {"Instagram"}
          </Typography>
        </Box>
        <Box sx={{ mb: 0.5 }}>
          <Box>
            <FacebookIcon sx={{ color: "#BCBCBC", fontSize: "40px" }} />
          </Box>
          <Typography textAlign={"center"} variant="caption">
            {"Facebook"}
          </Typography>
        </Box>
        <Box sx={{ mb: 0.5 }}>
          <Box>
            <TwitterIcon sx={{ color: "#BCBCBC", fontSize: "40px" }} />
          </Box>
          <Typography textAlign={"center"} variant="caption">
            {"Twitter"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SocialMediaLinksCard;
