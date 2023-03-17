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
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
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
            // border: "1px solid #BCBCBC",
           width:'100%',
            borderRadius: "10px",
            mt: 2,
                
            }}
        >
            
            {/* <Box  sx={{ display: "flex", justifyContent: "right", mb: 3 }}>
                <AddCircleOutlineIcon sx={{
                    color: "#C8343A"
                   
                }}  
                onClick={()=>handleAdd()}
                 />
                <Typography sx={{ color: "#C8343A" }} variant="span">Add</Typography>
            </Box> */}
           
 
                <Box
                    style={{display:'flex',flexDirection:'column'}}
                >
                    {
                        data.map((item,index) => {
                            return <Box sx={{
                                display:'flex',
                                alignItem:'center',
                                // mr: 2,
                                border: "1px solid #BCBCBC",
                                pl:2,
                                pr:2,
                                borderRadius: "10px",
                                mt: 4,  
                                height:'150px',
                                // width:'300px'
                                }}  >
                                    
                    

                                    
                                    
                                   <Box style={{marginTop:'25px',with:'75%',display:'flex'}}>
                                      {/* <Typography variant='p'> */}
                                      {/* </Typography> */}
                                      <FormatQuoteIcon sx={{ mr: 2, color: "#BCBCBC", fontSize: "28px" }} />
                                        <Typography>
                                        {item.name}
                                        </Typography>

                                   </Box>

                                  


                              


                                <Box style={{display:'flex',marginTop:'25px'}}>
                              <DeleteForeverRoundedIcon
                                    onClick={()=>handleDelete(item)}
                                    sx={{ color: "#C8343A", mr: 1 }} />
                                    <EditIcon
                                        sx={{ color: "#C8343A" ,mr:1}}
                                        onClick={()=>handleEdit(item,index)} 

                                    />

                                </Box>

     
                            </Box>

                        })
                    }



                


            </Box>
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

<br /> 
        </Box>

    );
};


export default StatementSlid;
