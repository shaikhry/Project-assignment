import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomDrawer from "../CustomeDrawer/CustomDrawer";
// import ContactInfoForm from "./ContactInfoForm";        
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EditIcon from "@mui/icons-material/Edit";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { manipulateContact } from "../../redux/ContactInfo/Contact-Action";
import {
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
     {[]?.map((item, index) => <p>hghjbm</p>)} 
      <CustomDrawer
        state={stateEditContact}
        toggleDrawer={openDrawerForHoursClose}
        // childern={
        //   <ContactInfoForm selectedItem={selectedItem} selectedindex={selectedindex} />
        // }
        // title={"Contact"}
        subtitle={"Please provide the company's email & contacts"}
        key={2}
      />
//     </>
 
  );
}

export default ContactCardFroSideBar;
