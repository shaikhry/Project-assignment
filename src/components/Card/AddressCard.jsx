import { Box } from "@mui/system";
import React from "react";
import { Typography } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EditIcon from "@mui/icons-material/Edit";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch, useSelector } from "react-redux";
const AddressCard = ({ title, toggleDrawer }) => {
  const AddressForm = useSelector((state) => state.ContactReducer.AddressForm);
  // const singleAddress = useSelector((state) => state.ContactReducer.SingleAddress);
  const dispatch=useDispatch()
  
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
          <LocationOnIcon sx={{ mr: 2, color: "#BCBCBC", fontSize: "28px" }} />
          <Typography textAlign={"left"} variant="h6" fontWeight={700}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ ml: 2 }}>
          <EditIcon sx={{ color: "#C8343A" }} onClick={() => toggleDrawer(AddressForm)} 
          
          
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"left"}
        alignItems={"center"}
        sx={{ mb: 0.5 }}
      >
        <Typography textAlign={"left"} variant="body1">
          {AddressForm.FloorNo +
            " / " +
            AddressForm.Area +
            " - " +
            AddressForm.NearestLandmark +
            ", " +
            AddressForm.City +
            " - " +
            AddressForm.Pincode +
            " / " +
            AddressForm.Town }
          
        </Typography>
        

      </Box>
      
    </Box>
  );
};

export default AddressCard;
