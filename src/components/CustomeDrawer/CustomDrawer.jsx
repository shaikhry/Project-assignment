import React from "react";
import { Drawer, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function CustomDrawer({
  state,
  toggleDrawer,
  title,
  handleClose,
  childern,
  handleOpenDrawer,
  subtitle
}) {
  return (
    <>
      {/* <Drawer open={isOpen} onClose={handleClose} > 
        <List>
          {childern}
        </List>
      </Drawer> */}
      <div>
        {/* {["right"].map((anchor) => ( */}
        {/* <React.Fragment > */}
        <Drawer
          anchor={"right"}
          open={state}
          //  onClose={handleClose(false)}
        >
          <Box
            sx={{ width: 400 }}
            role="presentation"
            // onClick={()=>handleClose( false)}
            // onKeyDown={()=>handleClose( false)}
          >
            <Box sx={{ p: 4,pb:0 }} display="flex" justifyContent={"left"}alignItems={"center"}>
              <KeyboardBackspaceIcon
                onClick={() => toggleDrawer()}
                sx={{ mr: 2, fontSize: "28px" }}
              />
              <Typography variant="h6">{title}</Typography>
            </Box>
            {subtitle? 
            <Box sx={{px:4,pt:2}}>
              <Typography variant="body1" display={"block"}>{subtitle}</Typography>
            </Box>
            :null}
            <Box sx={{p:4}}>

            {childern}
            </Box>
          </Box>
        </Drawer>
        {/* </React.Fragment> */}
        {/* ))} */}
       
      </div>
    </>
  );
}

export default CustomDrawer;
