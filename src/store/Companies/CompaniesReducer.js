const GET_COMPANIES = 'GET_COMPANIES';
const POST_COMPANIES = 'POST_COMPANIES';

const initialState = [];

const getCompanies = (payload) => ({
  type: GET_COMPANIES,
  payload, 
});

const postCompanies = (payload) => ({
  type: POST_COMPANIES,
  payload,
})

const CompanyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COMPANIES:
      return payload;
    case POST_COMPANIES:
      return {
        ...payload,
      }
    default:
      return state;
  }
};

export { getCompanies, CompanyReducer, postCompanies };
