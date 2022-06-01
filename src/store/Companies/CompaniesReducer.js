const GET_COMPANIES = 'GET_COMPANIES';

const initialState = [];

const getCompanies = (payload) => ({
  type: GET_COMPANIES,
  payload, 
});

const CompanyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMPANIES:
      return payload;
    default:
      return state;
  }
};

export { getCompanies, CompanyReducer };
