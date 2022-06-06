import React, { useState, useEffect } from "react";

export const SalvageCard = (props) => {
  const handleEditing = () => {
    console.log("Edit");
  };

  const card = props.salvageStore.map((salvage) => (
    <li key={salvage.id} className="border-solid border-2 border-sky-500">
      <ul className="container grid grid-cols-4 gap-2 mx-auto px-6 py-4">
        {salvage.images.map((image, index) => (
          <li key={index} className="hover:w-full">
            <img src={image} alt="salvage image" className="w-full rounded" />
          </li>
        ))}
      </ul>
      <div className="px-6 py-4">
        <table className="table-auto w-full">
          <tbody>
            <tr>
              <td className="border px-4 py-2 font-medium">Car Make</td>
              <td className="border px-4 py-2">{salvage.make}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">Color</td>
              <td className="border px-4 py-2">{salvage.color}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">Registration Number</td>
              <td className="border px-4 py-2">{salvage.regNumber}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">Model</td>
              <td className="border px-4 py-2">{salvage.model}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">Mileage</td>
              <td className="border px-4 py-2">{salvage.mileage}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">Year of Manufacture</td>
              <td className="border px-4 py-2">{salvage.yearOfManufacture}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">Chassis Number</td>
              <td className="border px-4 py-2">{salvage.chassisNumber}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">Damage</td>
              <td className="border px-4 py-2">{salvage.damage}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">Location</td>
              <td className="border px-4 py-2">{salvage.location}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-medium">Starting Price</td>
              <td className="border px-4 py-2">K {salvage.startingPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="max-w-7xl flex justify-between mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <button
          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          onClick={handleEditing}
        >
          Edit Salvage
        </button>

        <button
          className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={() => props.deleteSalvage(salvage.id)}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return (
    <ul className="bg-gradient-to-r from-green-100 to-green-50 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
      {card}
    </ul>
  );
};
