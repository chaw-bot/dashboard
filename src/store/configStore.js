import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CompanyReducer } from "./Companies/CompaniesReducer";
import { SalvagesReducer } from "./Salvages/salvageReducer";

const reducers = combineReducers({
  company: CompanyReducer,
  salvage: SalvagesReducer,
});

export default createStore(
  reducers,
  applyMiddleware(thunk)
);
