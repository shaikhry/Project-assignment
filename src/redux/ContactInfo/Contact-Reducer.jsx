import { ActionTypes } from "@mui/base";
import { ADD_ADDRESS, ADD_CONTACT, EDIT_OBJECT, REMOVE_CONTACT } from "./Contact-Constants";

const initialState = {
  salesTeam: [
    {
      email: ["salestesm@gmail.com"],
      phone: ["9191912020"],
      id: "1",
      profession:'Sales Teams'
    },
    {
      email: ["marketingteam@gmail.com"],
      phone: ["9191912021"],
      id: "2",
      profession:'Marketing Team'
    },
    {
      email: ["software@gmail.com"],
      phone: ["9191912022"],
      id: "3",
      profession:'Software Teams'
    },
    {
      email: ["humanResorcem@gmail.com"],
      phone: ["9191912023"],
      id: "4",
      profession:'Human resource Teams'
    },
  ],
  
  salesTeamDetail:{
    email: ["humanResorcem@gmail.com"],
      phone: ["9191912023"],
      id: "5",
     
  },


  AddressForm: {
    FloorNo: "5",
    Area: "Peer Bburhan",
    NearestLandmark: "Life Medical",
    Town: "Nanded",
    City: "Nanded",
    Pincode: "431605",
  },
  SingleAddress:{
    FloorNo: "6",
    Area: "Peer Bburhan1",
    NearestLandmark: "Life Medical1",
    Town: "Nanded1",
    City: "Nanded1",
    Pincode: "4316051",
  }
};


const ContactReducer = (state = initialState, action) => {
  console.log(action.payload, "action.payload")
  console.log(state, "state")
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        salesTeam: [...state.salesTeam, action.payload],
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        salesTeam: state.salesTeam.filter((item) => item.id !== action.payload)
      }
    case ADD_ADDRESS:
      return {
        ...state,
        AddressForm: action.payload
      }
      case 'SHOW_CONTACT': return {
        ...state,user:[...action.payload]
      }

    case EDIT_OBJECT:


    
      const edit = state.salesTeam.map((item) =>{ 
        
        if(item.id === action.payload.id){
          console.log('condition', );
          return {
            email:action.payload.email,
            phone:action.payload.phone,
            id:action.payload.id
          
          }
          
        }
        return item
      
      })
    
    
        return {
          ...state,
          salesTeam: [...edit],    
      }

      case 'salesTeamDetail' : return {
        ...state,
        salesTeamDetail:{...action.payload}
      }
      case 'SINGLEITEM': return {
        ...state,SingleAddress:{...action.payload}
      }

    default:
      return state;
  }
};
export default ContactReducer;
