import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SalvageCard } from "./Salvages/SalvageCard";
import { getCompanySalvages } from "../store/Salvages/salvageReducer";
import { AddSalvage } from "./Salvages/AddSalvage";
import { deleteSalvage } from "../store/Salvages/salvageReducer";

export const SalvagePage = () => {
  const salvageStore = useSelector((store) => store.salvage);

  const dispatch = useDispatch();

  const { id } = useParams();

  const onDelete = (salvageId) => {
    dispatch(deleteSalvage(salvageId, id));
  };

  useEffect(() => {
    dispatch(getCompanySalvages(id));
  }, [dispatch]);

  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl flex justify-between mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <h1 className="text-3xl font-bold text-gray-900">Back</h1>
          </Link>
          <AddSalvage companyId={id} />
        </div>
      </header>
      <SalvageCard
        salvageStore={salvageStore}
        deleteSalvage={onDelete}
      />
    </>
  );
};
