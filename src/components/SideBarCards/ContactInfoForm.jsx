import { Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/system";
import React, { useState } from "react";
import { IconTextField } from "../TextField/TextFieldWithIcon";
import InpuFieldsForForms from "./InputFieldsForForms";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useDispatch, useSelector } from "react-redux";
import { manipulateContact } from "../../redux/ContactInfo/Contact-Action";
import { ADD_CONTACT, EDIT_OBJECT } from "../../redux/ContactInfo/Contact-Constants";
// 

function ContactInfoForm({itemForEdit,editIndex,isEdit,selectedItem}) {
  const [email, setEmail] = useState([...selectedItem.email]);
  const [phone, setPhone] = useState([...selectedItem.phone]);
  // const [updateTodo,setUpdateTodo]=useState() 
  const dispatch = useDispatch();
  const contactData = useSelector((state) => state.ContactReducer.salesTeam);
  const contacuser = useSelector((state) => state.ContactReducer.user);
  
// console.log('llll',selectedItem, 'index',selectedindex);
  const handleAddEmail = () => {
    setEmail([...email, ""]);
  };
  const handleAddPhone = () => {
    setPhone([...phone, ""]);
  };

  
  const handleChangeInput = (event, index) => {
    const e = [...email];
    e[index] = event.target.value;
    setEmail(e);
  };
  const handleChangeInputPhone = (event, index) => {
    const e = [...phone];
    e[index] = event.target.value;
    setPhone(e);
  };
  console.log(email, "email");
  console.log(phone, "phone");

  const data = {
    email: email,
    phone: phone,
    id:selectedItem.id,
  };
  const handleSaveData = () => {
    dispatch(manipulateContact(EDIT_OBJECT, data));
    dispatch(manipulateContact('salesTeamDetail', data));
    dispatch(manipulateContact('SHOW_CONTACT', {
      id:selectedItem.id,email:email,phone:phone
    }));
  };
  console.log(contacuser, "user");


  // console.log(contactData, "contactData from redux");
  // console.log(itemForEdit, "itemForEdit from sidebarCard");
  // console.log(editIndex, "editIndex from sidebarCard");
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "75vh",
        }}
      >
        <Box>
          <Box>
            {email?.map((item, index) => {
              console.log(item,"item")
              return (
                <IconTextField
                  color="neutral"
                  size="small"
                  placeholder="Email"
                  labelForInput={"Email "}
                  fullWidth
                  value={item}
                  onChange={(event) => {
                    handleChangeInput(event, index);
                  }}
                />
              );
            })}
            <Button
              color="btnColorLiteRed"
              variant="contained"
              sx={{ boxShadow: "none", mt: 2 }}
              startIcon={<AddCircleOutlineRoundedIcon />}
              fullWidth
              onClick={handleAddEmail}
            >
              {"Add More"}
            </Button>
          </Box>
          <Box>
            {phone?.map((item, index) => {
              return (
                <IconTextField
                  color="neutral"
                  size="small"
                  type="number"
                  placeholder="Phone"
                  labelForInput={"Phone "}
                  fullWidth
                  value={item}
                  onChange={(event) => {
                    handleChangeInputPhone(event, index);
                  }}
                />
              );
            })}
            <Button
              color="btnColorLiteRed"
              variant="contained"
              sx={{ boxShadow: "none", mt: 2 }}
              startIcon={<AddCircleOutlineRoundedIcon />}
              fullWidth
              onClick={handleAddPhone}
            >
              {"Add More"}
            </Button>
          </Box>
        </Box>
        <Box>
          <Button
            color="btnColorDarkRed"
            variant="contained"
            fullWidth
            onClick={handleSaveData}
          >
            Save
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ContactInfoForm;
