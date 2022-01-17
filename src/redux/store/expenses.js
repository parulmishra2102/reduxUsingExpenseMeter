import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducer/expenses";
const reducer = combineReducers({});
const initialState = {
  expenses: expenseReducer,
};

const store = createStore(reducer, initialState); //if middleware is using third argument is middleware
export default store;
