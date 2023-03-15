import { Box } from "@mui/system";
import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import TabData from "../components/Tab/TabData";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "0px 1px 10px rgba(238, 239, 244, 1);",
        borderRadius: "10px",
        p: 3,
      }}
    >
      
      <AboutUs title={"About Us"} />
      <TabData/>
    </Box>
  );
};

export default Home;
