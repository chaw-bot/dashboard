import React from "react";

export const SalvageCard = (props) => {
  const card = props.salvageStoreProps.map((salvage) => (
    <li key={salvage.id}>
      {salvage.images.map((image) => (
        <div key={image} className="container grid grid-cols-4 gap-2 mx-auto">
          <div className="w-full rounded">
            <img src={image} alt="salvage image" />
          </div>
        </div>
      ))}
      <div className="px-6 py-4">
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="border px-4 py-2">Car Make</td>
              <td className="border px-4 py-2">{salvage.make}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Color</td>
              <td className="border px-4 py-2">{salvage.color}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Registration Number</td>
              <td className="border px-4 py-2">{salvage.regNumber}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Model</td>
              <td className="border px-4 py-2">{salvage.model}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Mileage</td>
              <td className="border px-4 py-2">{salvage.mileage}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Year of Manufacture</td>
              <td className="border px-4 py-2">{salvage.yearOfManufacture}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Chassis Number</td>
              <td className="border px-4 py-2">{salvage.chassisNumber}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Damage</td>
              <td className="border px-4 py-2">{salvage.damage}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Location</td>
              <td className="border px-4 py-2">{salvage.location}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Starting Price</td>
              <td className="border px-4 py-2">K {salvage.startingPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </li>
  ));

  return (
    <ul className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
      {card}
    </ul>
  );
};
