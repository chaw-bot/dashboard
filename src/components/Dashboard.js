import React from "react";
import { Header } from "./Header";
import { InsuranceCard } from "./InsuranceCard";


export const Dashboard = () => {
  return (
    <div className="min-h-full">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <InsuranceCard />
          </div>
        </div>
      </main>
    </div>
  );
};
