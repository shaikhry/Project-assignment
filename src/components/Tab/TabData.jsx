import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Tabs } from "@mui/material";
import CustomCard from "../Card/ContactCard";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import ContactCard from "../Card/ContactCard";
import AddressCard from "../Card/AddressCard";
import HoursOfOperationsCard from "../Card/HoursOfOperationsCard";
import SocialMediaLinksCard from "../Card/SocialMediaLinksCard";
import StatementCard from "../Card/StatementCard";
import CustomDrawer from "../CustomeDrawer/CustomDrawer";
import ContactCardFroSideBar from "../SideBarCards/ContactCardFroSideBar";
import AddressForm from "../SideBarCards/AddressForm";
import StatementSlid from "../SideBarCards/StatmentSlide";
import SocialMediaSlide from "../SideBarCards/SocialMediaSlide";
import { useDispatch } from "react-redux";
import { manipulateContact } from "../../redux/ContactInfo/Contact-Action";
import PrivacyAndPilicy from '../PrivacyAndPolicy/PrivacyAndPolicy'
import TermsAndCondition from "../TermsAndCondition/TermsAndCondition";

const TabData = () => {
  const [value, setValue] = React.useState("one");
  const [state, setState] = React.useState(false);
  const [stateHours, setStateHours] = React.useState(false);
  const [stateAddress, setStateAddress] = React.useState(false);
  const [stateStatement,setStateStament]=React.useState(false)
  const [socialMediaLink,setSocialMediaLink]=React.useState(false)
  const dispatch=useDispatch()

  const openDrawerForHours = () => {
    setStateHours(true);
  };
  const openDrawerForHoursClose = () => {
    setStateHours(false);
  };
  const openDrawerForContact = () => {
    setState(true);
  };
  const openDrawerForContactClose = () => {
    setState(false);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openDrawerForAddress = (item) => {
    setStateAddress(true);
    dispatch(manipulateContact('SINGLEITEM',item))
  };
  const CloseDrawerForAddress = () => {
    setStateAddress(false);
    

  };
 
  const openDrawerForStatement=()=>{
    setStateStament(true)
  }
  const openDrawerForStatementclose=()=>{
    setStateStament(false)
  }

  const openDrawerForsocialMediaLink=()=>{
    setSocialMediaLink(true)
  }
  const openDrawerForsocialMediaLinkclose=()=>{
    setSocialMediaLink(false)
  }
  return (
    <>
      <TabContext value={value}>
        <Box sx={{ width: "100%" }}>  
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="secondary tabs example" 
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            <Tab value="one" label="info" />
            <Tab value="two" label="FAQ" />
            <Tab value="three" label="Complaints and feedback" />
            <Tab value="four" label="Privacy Policy" />
            <Tab value="five" label="Terms & Conditions" />
          </Tabs>
        </Box>


        <TabPanel value="one" sx={{ px: "0px!important" }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <ContactCard
              title={"Contact"}
              toggleDrawer={openDrawerForContact}
              width={"28%"}
            />
            <AddressCard
              title={"Address"}
              toggleDrawer={openDrawerForAddress}
              
            />
            <HoursOfOperationsCard
              title={"Hours Of Operations "}
              toggleDrawer={openDrawerForHours}
            />

          <SocialMediaLinksCard title={"SocialMediaLinksCard"} 
          
          toggleDrawer={openDrawerForsocialMediaLink}
          />   
             <StatementCard title={"Statement"}
            toggleDrawer={openDrawerForStatement}
            />
            
          
           
          </Box>
        </TabPanel>
        <TabPanel value="two" sx={{ px: "0px!important" }}>
       




        </TabPanel>







        <TabPanel value="three"></TabPanel>


        <TabPanel value="four">
       
          
          
          
          <PrivacyAndPilicy/>
          
          </TabPanel>
        <TabPanel value="five">
        
        <TermsAndCondition/>
        
        
        </TabPanel>
      </TabContext>


      <CustomDrawer
        state={stateHours}
        toggleDrawer={openDrawerForHoursClose}
        childern={<HoursOfOperationsCard />}
        title={"HoursOfOperationsCard"}
        key={1}
      />

      <CustomDrawer
        state={state}
      toggleDrawer={openDrawerForContactClose}
        childern={<ContactCardFroSideBar />}
        title={"Contact"}
        subtitle={"Please provide the company's email & contacts"}
        key={2}
      />
       <CustomDrawer
        state={stateAddress}
        toggleDrawer={CloseDrawerForAddress}
        childern={<AddressForm />}
        title={"Address"}
        key={3}
      />
       <CustomDrawer
        state={stateStatement}
        toggleDrawer={openDrawerForStatementclose}
        childern={<StatementSlid />}
        title={"Statements"}
        key={4}
      />
       <CustomDrawer
        state={socialMediaLink}
        toggleDrawer={openDrawerForsocialMediaLinkclose}
        childern={<SocialMediaSlide/>}
        title={"Social Media and Links"}
        key={5}
      />

      <div>

      </div>
    </>
  );
};

export default TabData;
