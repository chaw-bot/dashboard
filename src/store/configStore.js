import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CompanyReducer } from "./Companies/CompaniesReducer";

const reducers = combineReducers({
  company: CompanyReducer,
});

export default createStore(
  reducers,
  applyMiddleware(thunk)
);
