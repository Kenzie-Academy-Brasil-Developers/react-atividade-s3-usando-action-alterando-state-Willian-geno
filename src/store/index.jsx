import {createStore, combineReducers} from "redux"
import userReducer from "./mudles/user/reducer"

const reducers = combineReducers({user: userReducer});

const store = createStore(reducers);

export default store;