import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import EditIcon from "@mui/icons-material/Edit";
import { IconTextField } from '../TextField/TextFieldWithIcon';
import Introduction from '../TermsAndCondition/Introduction';
import { BrandingWatermark } from '@mui/icons-material';
import DataCollect from './DataCollect';
import UseData from './UseData';
import ShareData from './ShareData';
import ChoiceObligation from './ChoiceObligation';
import Information from './Information';

const PrivacyAndPolicy = () => {
    const [value,setValue]=useState('introduction')




    return (
       <Box style={{display:'flex',}}>
       <Box  width='50vw' >
       {/* <Introduction/> */}
       {
        value==='introduction' ? <Introduction/> : value==='collect' ? <DataCollect/>  :value==='usedata' ? 
         <UseData/> : value==='sharedata' ?  <ShareData/> : value==='obligation' ?
          <ChoiceObligation/>  : value==='information' ? <Information/> : ''
       }
       </Box>


        <Box width='20vw'
        style={{border:'1px solid'}}
        height='300px'  
        >

        <Typography sx={{textAlign:'left',marginLeft:'10px'}}>
            <h4>Table Of Contents:</h4>
        </Typography>

<Box sx={{textAlign:'left',marginLeft:'10px', lineHeight:'100px'}}>
        
         <Typography style={{cursor:'pointer',fontWeight :`${value=='introduction'? 'bold' : ''}`}} onClick={()=>setValue('introduction')} >Introduction</Typography>
         <Typography style={{marginTop:'15px',cursor:'pointer',fontWeight :`${value=='collect'? 'bold' : ''}`}} onClick={()=>setValue('collect')} >Data we collect</Typography>
        <Typography   style={{cursor:'pointer',fontWeight :`${value=='usedata'? 'bold' : ''}`}} onClick={()=>setValue('usedata')} sx={{marginTop:'10px'}}>How we use your data</Typography>
        <Typography style={{cursor:'pointer',fontWeight :`${value=='sharedata'? 'bold' : ''}`}} onClick={()=>setValue('sharedata')} sx={{marginTop:'10px'}}>How we share information</Typography>
        <Typography  style={{cursor:'pointer',fontWeight :`${value=='obligation'? 'bold' : ''}`}} onClick={()=>setValue('obligation')} sx={{marginTop:'10px'}}>Your Choice and obligations</Typography>
        <Typography   style={{cursor:'pointer',fontWeight :`${value=='information'? 'bold' : ''}`}} onClick={()=>setValue('information')} sx={{marginTop:'10px'}}>Other information</Typography>
       </Box>
        </Box>
       </Box>
    );
};

export default PrivacyAndPolicy;