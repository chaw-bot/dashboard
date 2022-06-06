import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePagination } from "react-use-pagination";
import { Link } from "react-router-dom";
import { FetchCompanies } from "../../store/Companies/CompaniesAPI";
import { getCompanies } from "../../store/Companies/CompaniesReducer";

export const CompanyCard = (props) => {
  const dispatch = useDispatch();

  const {
    currentPage,
    totalPages,
    setNextPage,
    setPreviousPage,
    nextEnabled,
    previousEnabled,
    startIndex,
    endIndex,
  } = usePagination();

  useEffect(() => {
    FetchCompanies().then((response) => dispatch(getCompanies(response)));
  }, [dispatch]);

  const card = props.companyStore.map((company) => (
    <li key={company.id} className="rounded overflow-hidden shadow-lg">
      <div className=" w-full lg:max-w-full lg:flex">
        <img
          src={company.logoUrl}
          alt={company.name}
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden p-3"
        />
        <div className="bg-amber-100 p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              {company.companyEmail}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {company.name}
            </div>
            <p className="text-gray-700 text-base">{company.companyAddress}</p>
          </div>
          <div className="flex items-center">
            <Link
              to={`/salvages/${company.id}`}
              className="bg-gray-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Salvages
            </Link>
          </div>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      <ul className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5">
        {card}
      </ul>
      <button onClick={setPreviousPage} disabled={!previousEnabled}>
        Previous Page
      </button>
      <span>
        Current Page: {currentPage} of {totalPages}
      </span>
      <button onClick={setNextPage} disabled={!nextEnabled}>
        Next Page
      </button>
    </>
  );
};
