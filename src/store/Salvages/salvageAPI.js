import axios from "axios";

const baseURL = "https://gar-test.hobbiton.tech/salvages/insurance-company/";

const FetchSalvages = async (companyId) => {
  const companySalvages = await axios.get(`${baseURL}${companyId}`);
  let salvages = companySalvages.data.data;

  salvages = salvages.map((salvage) => {
    const salvageObj = {
      id: salvage.id,
      chassisNumber: salvage.chassisNumber,
      color: salvage.color,
      damage: salvage.damageDescription,
      images: salvage.imageUrls,
      location: salvage.location,
      make: salvage.make,
      mileage: salvage.mileage,
      model: salvage.model,
      salvagetype: salvage.salvagetype,
      startingPrice: salvage.startingPrice,
      yearOfManufacture: salvage.yearOfManufacture,
      regNumber: salvage.regNumber,
      insuranceCompanyId: salvage.insuranceCompanyId,
    };

    return salvageObj;
  });

  return salvages;
};

const PostSalvage = async (details, companyId) => {
  const {
    id,
    make,
    model,
    chassisNumber,
    color,
    regNumber,
    yearOfManufacture,
    mileage,
    salvageType,
    startingPrice,
    minIncrease,
    location,
    damageDescription,
    startTime,
    endTime,
    imageUrls,
    
  } = details;

  const salvageDetails = {
    id,
    make,
    model,
    chassisNumber,
    color,
    regNumber,
    yearOfManufacture,
    mileage,
    salvageType,
    startingPrice,
    minIncrease,
    location,
    damageDescription,
    startTime,
    endTime,
    imageUrls,
  }

  axios({
    method: "post",
    url: `${baseURL}${companyId}/upload`,
    data: JSON.stringify(salvageDetails),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    console.log(response);
  }).catch((response) => {
    console.log(response);
  })
};

const DeleteSalvage = async (salvageId) => {
  const url = await axios.delete(`https://gar-test.hobbiton.tech/salvages/${salvageId}/delete`);
  return url;
};

// const editSalvage = async (salvageId) => {
//   const url = await axios.edit(`https://gar-test.hobbiton.tech/salvages/${salvageId}/edit`)
// }

export { FetchSalvages, PostSalvage, DeleteSalvage };
