import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { manipulateContact } from "../../redux/ContactInfo/Contact-Action";
import { ADD_ADDRESS } from "../../redux/ContactInfo/Contact-Constants";
import { IconTextField } from "../TextField/TextFieldWithIcon";

const AddressForm = () => {

  const SingleAddress = useSelector(state => state.ContactReducer.SingleAddress)
  const [addressForm, setAddressForm] = useState({
    FloorNo: SingleAddress.FloorNo,
    Area: SingleAddress.Area,
    NearestLandmark: SingleAddress.NearestLandmark,
    Town: SingleAddress.Town,
    City: SingleAddress.City,
    Pincode: SingleAddress.Pincode,
  });
  const dispatch = useDispatch();

  const handleSaveData = () => {

    dispatch(manipulateContact(ADD_ADDRESS, addressForm));
  };


 
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "75vh",
      }}
    >
      <Box>
        <IconTextField
          color="neutral"
          size="small"
          placeholder="Floor Number / Block no / Office name"
          fullWidth
          value={addressForm.FloorNo}
          onChange={(event) =>
            setAddressForm((prevState) => ({
              ...prevState,
              FloorNo: event.target.value,
            }))
          }
        />
        <IconTextField
          color="neutral"
          size="small"
          placeholder="Area / Locality"
          fullWidth
          value={addressForm.Area}
          onChange={(event) =>
            setAddressForm((prevState) => ({
              ...prevState,
              Area: event.target.value,
            }))
          }
        />
        <IconTextField
          color="neutral"
          size="small"
          placeholder="Nearest Landmark"
          fullWidth
          value={addressForm.NearestLandmark}
          onChange={(event) =>
            setAddressForm((prevState) => ({
              ...prevState,
              NearestLandmark: event.target.value,
            }))
          }
        />
        <IconTextField
          color="neutral"
          size="small"
          placeholder="Town"
          fullWidth
          value={addressForm.Town}
          onChange={(event) =>
            setAddressForm((prevState) => ({
              ...prevState,
              Town: event.target.value,
            }))
          }
        />
        <IconTextField
          color="neutral"
          size="small"
          placeholder="City"
          fullWidth
          value={addressForm.City}
          onChange={(event) =>
            setAddressForm((prevState) => ({
              ...prevState,
              City: event.target.value,
            }))
          }
        />
        <IconTextField
          color="neutral"
          size="small"
          placeholder="Pincode"
          fullWidth
          value={addressForm.Pincode}
          onChange={(event) =>
            setAddressForm((prevState) => ({
              ...prevState,
              Pincode: event.target.value,
            }))
          }
        />
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
  );
};

export default AddressForm;
