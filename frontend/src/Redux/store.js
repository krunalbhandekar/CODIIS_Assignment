import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as UserReducer} from "./User/reducer" 
import {reducer as AdminReducer} from "./Admin/reducer"
const rootReducer = combineReducers({
   UserReducer,AdminReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));