import { createTheme } from "@mui/material/styles";
export const Colors = {
    primary:"#030303",
    secondary:"#fff",
    light_gray:"red",
    third:"#d32f2f"






    ///////////////
    ////Grays
    ///////////////




    /////////////////
    //Solid Colors
    /////////////////
    // NO COLORS RIGHT NOW
};

const theme = createTheme({
    // to change whole website color

    palette:{
        primary:{
            main: Colors.primary
        },
        secondary:{
            main: Colors.secondary
        },
        light: {
            main: Colors.third
          },
          neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
          btnColorLiteRed:{
            main:'#FEF3F1',
            contrastText:'#97241D'
          },

          btnColorDarkRed:{
            main:'#972421',
            contrastText:'#FEF3F1'
          }
    },

  

     breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },


    // to target components wise

    

    // components:{    
    //     MuiButton:{
    //         defaultProps:{
    //             disableRipple:true,
    //             disableElevation:true
    //         }
    //     }
    // }
});

export default theme
