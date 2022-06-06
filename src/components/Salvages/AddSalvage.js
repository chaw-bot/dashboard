import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSalvage } from "../../store/Salvages/salvageReducer";

const initialState = {
  make: { name: "Make", value: "" },
  model: { name: "Model", value: "" },
  chassisNumber: { name: "Chassis Number", value: "" },
  color: { name: "Color", value: "" },
  regNumber: { name: "Registration number", value: "" },
  yearOfManufacture: { name: "Year Of Manufacturer", value: 0 },
  mileage: { name: "Mileage", value: 0 },
  salvageType: { name: "Salvage Type", value: "Offer" },
  startingPrice: { name: "Starting Price", value: 0 },
  minIncrease: { name: "Min Increase", value: 0 },
  location: { name: "Location", value: "" },
  damageDescription: { name: "Damage description", value: "" },
  startTime: { name: "Start Time", value: "" },
  endTime: { name: "End Time", value: "" },
  imageUrls: {
    name: "Images",
    value: ["string", "string", "string", "string", "string", "string"],
  },
};

export const AddSalvage = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState(initialState);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const obj = inputs[e.target.name];
    setInputs({
      ...inputs,
      [e.target.name]: { name: obj.name, value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const salvageData = {};
    Object.entries(inputs).forEach(([key, obj]) => {
      salvageData[key] = obj.value;
    });

    dispatch(addSalvage(salvageData, props.companyId));
    setInputs(initialState);
    setShowModal(false);
  };

  return (
    <>
      <button
        className="bg-green-900 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add Salvage
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gradient-to-r from-green-300 to-cyan-500 shadow">
                <h1 className="w-full max-w-lg pt-3 text-center text-xl font-bold text-green-900">
                  Fill in the form
                </h1>
                <form onSubmit={handleSubmit} className="w-full max-w-lg p-6">
                  <div className="flex flex-wrap -mx-3 mb-3">
                    {Object.entries(inputs).map(([key, { name, value }]) => {
                      return (
                        <div key={key} className="w-full md:w-1/2 px-3 mb-6">
                          <label
                            className="block text-green-900 text-sm font-bold"
                          >
                            {name}:
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder={name}
                            type="text"
                            value={value}
                            name={key}
                            onChange={onChange}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-green-900 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Add Salvage
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
