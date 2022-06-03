import axios from "axios";

const baseURL = "https://gar-test.hobbiton.tech/salvages/insurance-company/"

const FetchCompanySalvages = async (companyId) => {
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
      insuranceCompanyId: salvage.insuranceCompanyId
    };

    return salvageObj;
  });

  return salvages
}

export default FetchCompanySalvages;
