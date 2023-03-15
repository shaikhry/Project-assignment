import { ADDSTATMENT,DASHBOARD,DELETESTATMENT, EDIT_OBJECT} from "./Contact-Constants";

const initialState={
    statments:[
        {id:1,name:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, tempore!'},
        {id:2,name:'amet consectetur adipisicing elit. Aliquam, tempore!'},
        {id:3,name:' Lorem ipsum dolor sit amet consectetur a'},
        
       ],
       statementDash:{id:4,name:'dolor sit amet consectetur adipisicing'}
}


export const  StatementReducer=(state=initialState,action)=>{

    switch(action.type){
        case ADDSTATMENT: return {
            ...state,statments:[...state.statments,action.payload]
        };
        case DELETESTATMENT: return {
            ...state,
            statments : state.statments.filter((item) => item.id !== action.payload.id)
          };
          case EDIT_OBJECT:

      const edit = state.statments.map((item) =>{ 
        
        if(item.id === action.payload.id){         
          return {
            name:action.payload.name,            
            id:action.payload.id
          
          }
          
        }
        return item
      
      })
    
    
        return {
          ...state,
          statments: [...edit],
          
        
      }
      case DASHBOARD : return {
        ...state,
        statementDash:{...action.payload}
      }
          default : return state
    }
    
    

return state
}
