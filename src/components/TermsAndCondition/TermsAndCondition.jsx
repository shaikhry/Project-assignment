import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditIcon from "@mui/icons-material/Edit";
import Agreement from './Agreement';
import ServicePaid from './ServicePaid';
import RightAndGrant from './RightAndGrants';
import ShareInformation from './ShareInformation';
import TermsAppliction from './TermsAppliction';
import RightAndLaw from './RightAndLaws';

const TermsAndCondition = () => {

    const [value, setValue] = useState('agreement')


    return (
        <Box style={{ display: 'flex', }}>
            <Box


            >

                {value === 'agreement' ? <Agreement /> : value === 'service' ? <ServicePaid /> :
                    value === 'rightandlaws' ? <RightAndLaw /> : value === 'information' ? <ShareInformation /> :
                        value === 'application' ? <TermsAppliction /> : value === 'grant' ? <RightAndGrant /> : ''
                }

            </Box>




            <Box width='20vw'
                style={{ border: '1px solid' }}
                height='300px'
            >

                <Typography sx={{ textAlign: 'left', marginLeft: '10px' }}>
                    <h4>Table Of Contents:</h4>
                </Typography>

                <Box sx={{ textAlign: 'left',  marginLeft: '10px', lineHeight: '100px' }}>

                    <Typography style={{ cursor: 'pointer',fontWeight :`${value=='agreement'? 'bold' : ''}` }} onClick={() => setValue('agreement')} >
                        Agreement
                    </Typography> 
                    <Typography style={{ marginTop:'15px',cursor: 'pointer',fontWeight :`${value=='service'? 'bold' : ''}`}} onClick={() => setValue('service')} >Services & paid subscription</Typography>
                    <Typography style={{ cursor: 'pointer',fontWeight :`${value=='rightandlaws'? 'bold' : ''}` }} onClick={() => setValue('rightandlaws')} sx={{ marginTop: '10px' }}>Right and laws</Typography>
                    <Typography style={{ cursor: 'pointer',fontWeight :`${value=='information'? 'bold' : ''}` }} onClick={() => setValue('information')} sx={{ marginTop: '10px' }}>How we share information</Typography>
                    <Typography style={{ cursor: 'pointer',fontWeight :`${value=='application'? 'bold' : ''}` }} onClick={() => setValue('application')} sx={{ marginTop: '10px' }}>3rd party application</Typography>
                    <Typography style={{ cursor: 'pointer',fontWeight :`${value=='grant'? 'bold' : ''}` }} onClick={() => setValue('grant')} sx={{ marginTop: '10px' }}>Rights you grant us</Typography>
                </Box>
            </Box>
        </Box>

    );
};

export default TermsAndCondition;