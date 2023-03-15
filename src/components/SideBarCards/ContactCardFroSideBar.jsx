import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactCard from "../Card/ContactCard";
import CustomDrawer from "../CustomeDrawer/CustomDrawer";
import ContactInfoForm from "./ContactInfoForm";
import ContactInpuFields from "./InputFieldsForForms";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EditIcon from "@mui/icons-material/Edit";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { manipulateContact } from "../../redux/ContactInfo/Contact-Action";
import {
  EDIT_OBJECT,
  REMOVE_CONTACT,
} from "../../redux/ContactInfo/Contact-Constants";
function ContactCardFroSideBar() {
  const [stateEditContact, setStateEditContact] = React.useState(false);
  const [selectedItem,setSelectedItem]=useState()
  const [selectedindex,setSelectedIndex]=useState()

  const dispatch = useDispatch();

  const openDrawerForHours = (item, index) => {
    setStateEditContact(true);
   setSelectedItem(item)
   setSelectedIndex(index)
    
  };
  const openDrawerForHoursClose = () => {
    setStateEditContact(false);
  };
  const contactData = useSelector((state) => state.ContactReducer.salesTeam);
  const handleDeleteItem = (item) => {
    dispatch(manipulateContact(REMOVE_CONTACT, item.id));
    
  };

  return (
    <>
      {contactData?.map((item, index) => {
        console.log(item, "item");
        return (
          <Box
            key={index}
            sx={{
              border: "1px solid #BCBCBC",
              p: 2,
              borderRadius: "10px",
              mt: 2,
              // width: width,
            }}
          >
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              <Box
                display={"flex"}
                justifyContent={"left"}
                alignItems={"center"}
              >
                <PermContactCalendarIcon
                  sx={{ mr: 2, color: "#BCBCBC", fontSize: "28px" }}
                />
                <Typography textAlign={"left"} variant="h6" fontWeight={700}>
                  {item.profession}
                </Typography>
              </Box>
              <Box sx={{ ml: 2 }}>
                {item ? (
                  <DeleteForeverRoundedIcon
                    sx={{ color: "#C8343A", mr: 1 }}
                    onClick={() => handleDeleteItem(item, index)}
                  />
                ) : null}

                <EditIcon 
                  sx={{ color: "#C8343A" }}
                  onClick={() => openDrawerForHours(item, index)}
                />
              </Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"left"}
              alignItems={"center"}
              sx={{ mb: 0.5 }}
            >
              {item?.email ? (
                <MailRoundedIcon
                  sx={{ mr: 2, color: "#BCBCBC", fontSize: "20px" }}
                />
              ) : null}
              {item?.email.map((data, index) => {
                return (
                  <Box>
                    <Typography textAlign={"left"} variant="body1" key={index}>
                      {`${data} | `}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
            <Box display={"flex"} justifyContent={"left"} alignItems={"center"}>
              {item?.phone ? (
                <LocalPhoneRoundedIcon
                  sx={{ mr: 2, color: "#BCBCBC", fontSize: "20px" }}
                />
              ) : null}
              {item?.phone.map((data, index) => {
                return (
                  <Box>
                    <Typography textAlign={"left"} variant="body1" key={index}>
                      {`${data} | `}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
      <CustomDrawer
        state={stateEditContact}
        toggleDrawer={openDrawerForHoursClose}
        childern={
          <ContactInfoForm selectedItem={selectedItem} selectedindex={selectedindex} />
        }
        title={"Contact"}
        subtitle={"Please provide the company's email & contacts"}
        key={2}
      />
    </>
  );
}

export default ContactCardFroSideBar;
