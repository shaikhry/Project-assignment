import {
  Button,
  CardMedia,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import logo from "../../assets/Logo2.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import ViewInArRoundedIcon from "@mui/icons-material/ViewInArRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const drawerWidth = 240;
const SideBarNav = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(7);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Box sx={{ p: 2, py: 3, borderRadius: "10px" }}>
        <CardMedia
          component="img"
          sx={{
            height: 40,
            objectFit: "contain",
          }}
          alt=""
          src={logo}
        />
      </Box>

      {/* <Divider /> */}
      <List component="nav">
        <ListItem key={1} disablePadding sx={{ color: "#BCBCBC" }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: "28px", mr: 2 }}>
              <DashboardIcon sx={{ fontSize: "28px", color: "#BCBCBC" }} />
            </ListItemIcon>
            <ListItemText primary={"Dashboard "} sx={{ fontSize: "14px" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={2} disablePadding sx={{ color: "#BCBCBC" }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: "28px", mr: 2 }}>
              <InventoryRoundedIcon
                sx={{ fontSize: "28px", color: "#BCBCBC" }}
              />
            </ListItemIcon>
            <ListItemText primary={"orders "} sx={{ fontSize: "14px" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={3} disablePadding sx={{ color: "#BCBCBC" }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: "28px", mr: 2 }}>
              <PeopleAltRoundedIcon
                sx={{ fontSize: "28px", color: "#BCBCBC" }}
              />
            </ListItemIcon>
            <ListItemText primary={"Team Members "} sx={{ fontSize: "14px" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={4} disablePadding sx={{ color: "#BCBCBC" }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: "28px", mr: 2 }}>
              <HandshakeRoundedIcon
                sx={{ fontSize: "28px", color: "#BCBCBC" }}
              />
            </ListItemIcon>
            <ListItemText primary={"Partners "} sx={{ fontSize: "14px" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={5} disablePadding sx={{ color: "#BCBCBC" }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: "28px", mr: 2 }}>
              <ViewInArRoundedIcon
                sx={{ fontSize: "28px", color: "#BCBCBC" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={"Product Listing"}
              sx={{ fontSize: "14px" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem key={6} disablePadding sx={{ color: "#BCBCBC" }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: "28px", mr: 2 }}>
              <EmojiEventsRoundedIcon
                sx={{ fontSize: "28px", color: "#BCBCBC" }}
              />
            </ListItemIcon>
            <ListItemText
              primary={"Awards & Honours "}
              sx={{ fontSize: "14px" }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={7}
          disablePadding
          sx={{
            color: "#C8343A",
            "&& .Mui-selected": { backgroundColor: "#C8343A10" },
          }}
        >
          <ListItemButton
            selected={selectedIndex === 7}
            onClick={(event) => handleListItemClick(event, 17)}
          >
            <ListItemIcon sx={{ minWidth: "28px", mr: 2 }}>
              <InfoRoundedIcon sx={{ fontSize: "28px", color: "#C8343A" }} />
            </ListItemIcon>
            <ListItemText primary={"About Us "} sx={{ fontSize: "14px" }} />
          </ListItemButton>
        </ListItem>
        <ListItem key={8} disablePadding sx={{ color: "#BCBCBC" }}>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: "28px", mr: 2 }}>
              <PaymentsRoundedIcon
                sx={{ fontSize: "28px", color: "#BCBCBC" }}
              />
              
            </ListItemIcon>
            <ListItemText primary={"Payment info "} sx={{ fontSize: "14px" }} />
          </ListItemButton>
        </ListItem>
      </List>
      <Box
        sx={{
          border: "1px solid #B2B2B2",
          borderRadius: "5px",
          my: 4,
          mx: 2,
          p: 2,
        }}
      >
        <Box>
          <ContactSupportIcon sx={{ fontSize: "32px", color: "#BCBCBC" }} />
        </Box>
        <Typography variant="subtitle1" sx={{ fontWeight: "700" }}>
          Need Help?
        </Typography>
        <Typography variant="body2">
          Our support team is at your disposal.
        </Typography>
        <Button variant="contained" sx={{ mt: 2, px: 2 }}>
          Get Help
        </Button>
      </Box>
    </div>
  );

  return (
    // <div>SideBarNav</div>
    <Box>
      <Drawer
        variant="permanent"
        sx={{
          height: "max-content",
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            height: "750px",
            position:"absolute",
            top:"88px",
            ml: 3,
            boxShadow: "0px 1px 10px rgba(238, 239, 244, 1);",
            border: "none!important",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideBarNav;
