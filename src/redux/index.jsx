import { combineReducers } from "redux";
import ContactReducer from "./ContactInfo/Contact-Reducer";
import { StatementReducer } from "./ContactInfo/StatmentReducer";
const RootReducer = combineReducers({
  ContactReducer,
  StatementReducer
});
export default RootReducer;
