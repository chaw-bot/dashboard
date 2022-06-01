import axios from "axios";

const baseURL = "https://gar-test.hobbiton.tech/insurance-companies";

const FetchCompanies = async () => {
  const response = await axios.get(baseURL);
  const responseData = response.data.data;

  responseData.map((company) => {
    const companyObj = {
      id: company.id,
      name: company.name,
      email: company.companyEmail,
      address: company.companyAddress,
      logo: company.logoUrl,
    }

    return companyObj;
  });

  return responseData;
};

export default FetchCompanies;
