import { FetchSalvages, DeleteSalvage, PostSalvage } from "./salvageAPI";

const GET_SALVAGES = 'GET_SALVAGES';
const POST_SALVAGES = 'POST_SALVAGES';

const initialState = [];

const getSalvages = (payload) => ({
  type: GET_SALVAGES,
  payload,
});

const getCompanySalvages = (companyId) => async (dispatch) => {
  const salvageData = await FetchSalvages(companyId);
  dispatch(getSalvages(salvageData));
};

const addSalvage = (salvageInfo, companyId) => async (dispatch) => {
  const salvageData = await PostSalvage(salvageInfo, companyId);
  dispatch(getCompanySalvages(companyId));
};

const deleteSalvage = (salvageId, companyId) => async (dispatch) => {
  const salvageData = await DeleteSalvage(salvageId);
  dispatch(getCompanySalvages(companyId))
};

const SalvagesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_SALVAGES:
      return payload;
    case POST_SALVAGES:
      return {
        ...payload
      }
    default:
      return state;
  }
};

export {getSalvages, SalvagesReducer, getCompanySalvages, deleteSalvage, addSalvage};
