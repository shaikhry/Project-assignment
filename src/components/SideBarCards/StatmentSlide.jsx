import { Button, Icon, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { manipulateContact } from "../../redux/ContactInfo/Contact-Action";
import { ADD_ADDRESS, DELETESTATMENT, EDIT_OBJECT } from "../../redux/ContactInfo/Contact-Constants";
import EditIcon from "@mui/icons-material/Edit";
import { IconTextField } from "../TextField/TextFieldWithIcon";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { manipulateStatments } from "../../redux/ContactInfo/StatmentsAction";
import CustomDrawer from "../CustomeDrawer/CustomDrawer";
import StatmentSlidInput from "./StatmentSlidInput";
const StatementSlid = ({ title }) => {
    const [stateEditStatment,setStateEditStatment]=useState(false)
    const [selected,setSelected]=useState()
    const [newIndex,setNewIndex]=useState()


    const data = useSelector((state) => state.StatementReducer.statments)
    
    const dispatch=useDispatch()
    const handleAdd=()=>{
        setStateEditStatment(true)
    // dispatch(manipulateStatments())
    }
    const handleDelete=(item)=>{
    dispatch(manipulateStatments(DELETESTATMENT,item))
    
    }

console.log('sad',newIndex);
    const handleEdit=(item,index)=>{
        setStateEditStatment(true)
        setSelected(item)
        setNewIndex(index)
        // setSelected('hAJHSJKasj')
       
        
    }
    const openDrawerForHoursClose=(item)=>{
        setStateEditStatment(false)
    }


    
    return (
        <Box

            sx={{
               
                p: 2,
                borderRadius: "10px",
                mt: 2,
                
            }}
        >
            
            <Box  display={'flex'} justifyContent={'right'}>
                <AddCircleOutlineIcon sx={{
                    color: "#C8343A"
                   
                }}  
                onClick={()=>handleAdd()}
                 />
                <Typography sx={{ color: "#C8343A" }} variant="span">Add</Typography>
            </Box>
            <Box
                sx={{ display: "flex", 
                justifyContent: "space-between",
                 mb: 4, flexDirection: 'row' }}
            >
 
                <Box

                >
                    {
                        data.map((item,index) => {
                            return <Box sx={{
                                ml: 2,
                                border: "1px solid #BCBCBC",
                                p: 2,
                                borderRadius: "10px",
                                mt: 2
                            }}


                                display={"flex"}
                                justifyContent={"space-between"}
                            > <Typography variant='p'>
                                    {item.name}
                                    <DeleteForeverRoundedIcon
                                    onClick={()=>handleDelete(item)}
                                    sx={{ color: "#C8343A", mr: 1 }} />
                                    <EditIcon
                                        sx={{ color: "#C8343A" ,mr:1}}
                                        onClick={()=>handleEdit(item,index)}

                                    />


                                </Typography>


     <CustomDrawer
      state={stateEditStatment}
      toggleDrawer={openDrawerForHoursClose}
            childern={
                
          <StatmentSlidInput 
          
           title={"Statments"}
            selected={selected}
            newIndex={newIndex}
          />
                }
           
           
            key={3}
      />    
                            </Box>

                        })
                    }



                </Box>


            </Box>
<br /> 
        </Box>

    );
};


export default StatementSlid;
