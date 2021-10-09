import { combineReducers } from "redux";
import cartReducer from "./modules/cart/reducer";

const reducers = () => combineReducers({ cart: cartReducer });

export default reducers;
