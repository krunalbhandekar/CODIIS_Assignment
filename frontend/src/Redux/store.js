import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import {reducer as UserReducer} from "./User/reducer" 

const rootReducer = combineReducers({
   UserReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));