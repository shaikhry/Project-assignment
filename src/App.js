import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/system";
import "./App.css";
import CustomDrawer from "./components/CustomeDrawer/CustomDrawer";
import Header from "./components/navigationBars/Header";
import SideBarNav from "./components/navigationBars/SideBar";
import Home from "./pages/Home";
import theme from "./theme";
const drawerWidth = 288;

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <CustomDrawer/> */}

        <Header />
        <SideBarNav/>
        <Box
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px 24px)` },
            ml: { sm: `${drawerWidth}px` },
            mt: 3,
            mr: 3,
          }}
        >

          <Home />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
