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
    };

    return companyObj;
  });

  return responseData;
};

const PostCompanies = async (details) => {
  const { id, name, email, address, logo, tpin } = details;

  const companyDetails = {
    id,
    name,
    companyEmai: email,
    companyAddress: address,
    logoUrl: logo,
    tpin,
  };

  axios({
    method: "post",
    url: baseURL,
    data: JSON.stringify(companyDetails),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    console.log(response);
  }).catch((response) => {
    console.log(response);
  });

  // try {
  //   const response = await fetch(baseURL, {
  //     method: "POST",
  //     body: JSON.stringify(companyDetails),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   console.log(await response.json());
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};

export { FetchCompanies, PostCompanies };
