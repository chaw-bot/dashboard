import React from "react";
import { Link } from "react-router-dom";
import { SalvageCard } from "./Salvages/SalvageCard"

export const SalvagePage = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="max-w-7xl flex justify-between mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Link to="/">
            <h1 className="text-3xl font-bold text-gray-900">Back</h1>
          </Link>
        </div>
      </header>
      <SalvageCard />
    </>
  );
};
