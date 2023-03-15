import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from "@mui/icons-material/Edit";
import { IconTextField } from '../TextField/TextFieldWithIcon';


const DataCollect = () => {
    const [show,setShow]=useState(true)
    const [update,setUpdate]=useState(false)
    const [intro,setIntro]=useState()
    const [inputUpdate,setInputUpdate]=useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ipsums Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ipsum?"')


    const handleShow=()=>{
        setShow(!show)
        setUpdate(!update)
    }
    const updateClick=()=>{
       setUpdate(!update)
       setShow(!show)
       setInputUpdate(intro)
        
    }
    const handleInput=(e)=>{
        setIntro(e.target.value)
    }



    return (
        <Box style={{display:'flex',}}>
        <Box
        width='60vw' 
        
        >

{ !show ?
        <IconTextField
        name='stat'       
             color="neutral"
             size="small"
             placeholder="Introduction"
             fullWidth
             value={intro}
             onChange={(e)=>handleInput(e)}
            /> : '' 
            }   


            <Typography
            style={{textAlign:'left'}}
            >
                <h4 style={{display:'inline'}} >Your Privacy Matter</h4>
              { !update  ? <EditIcon
                onClick={handleShow}
                 sx={{ color: "#C8343A" }}
                 style={{marginLeft:'15px',position:'relative',}}
                />
:
<Button  sx={{ color: "#C8343A", backGround: "#C8343A" }} onClick={updateClick} >Update</Button>
}
            </Typography>
            
            <Box style={{textAlign:'left',marginTop:'15px'}}>
            <h4 style={{display:'inline'}}>2.Agreement</h4>
                
            </Box>
            <Box style={{textAlign:'left',marginTop:'15px',lineHeight:'35px',textColor:"primary",indicatorColor:"primary"}}>
            {inputUpdate}
               </Box>

        

        </Box>
       </Box>

    );
};

export default DataCollect;