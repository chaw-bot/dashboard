import React from "react";
import { Link } from "react-router-dom";
import { AddCompany } from "./Companies/AddCompany";

export const Header = (props) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl flex justify-between mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Link to="/">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </Link>
        <AddCompany
          companyStoreProps={props.companyStoreProps}
          newCompanyProps={props.newCompanyProps}
        />
      </div>
    </header>
  );
};
