import React, { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./Header";
import { CompanyCard } from "./Companies/CompanyCard";

export const Dashboard = () => {
  const companyStore = useSelector((store) => store.company);

  return (
    <div className="min-h-full">
      <Header companyStoreProps={companyStore} />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <CompanyCard companyStoreProps={companyStore} />
          </div>
        </div>
      </main>
    </div>
  );
};
