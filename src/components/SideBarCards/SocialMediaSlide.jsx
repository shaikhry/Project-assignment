import { Box, TextField } from '@mui/material';
import React from 'react';
import { IconTextField } from '../TextField/TextFieldWithIcon';

const SocialMediaSlide = () => {
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
       <Box>

       <h3>Instagram</h3>
        <IconTextField
          color="neutral"
          size="small"
          placeholder="eg. www.instagram.com/companyname"
          fullWidth
          sx={{
            input: {
              color:'black',
              background: "#F2F4F4"
            }
          }}
          
        />
</Box>
       <Box>

       <h3>Facebook</h3>
        <IconTextField
          color="neutral"
          size="small"
          placeholder="eg. www.facebook.com/companyname"
          fullWidth
          sx={{
            input: {
              color:'black',
              background: "#F2F4F4"
            }
          }}
          
        />
</Box>


       
       <Box> <h3>Twitter</h3>
        <IconTextField
          color="neutral"
          size="small"
          placeholder="eg. www.twitter.com/companyname"
          fullWidth
          sx={{
            input: {
              color:'black',
              background: "#F2F4F4"
            }
          }}
          
        /></Box>
       <Box> <h3>Websites</h3>
        <IconTextField
          color="neutral"
          size="small"
          placeholder="eg. www.companyname.com"
          fullWidth

          sx={{
            input: {
              color:'black',
              background: "#F2F4F4"
            }
          }}
          
        /></Box>


       
      </Box>
      
     
    </Box>
    );
};

export default SocialMediaSlide;