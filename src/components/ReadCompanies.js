import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CompanyContext } from "../context/CompanyProvider";
import Company from "./Company";

const ReadCompanies = () => {
  const { companies} = useContext(CompanyContext);
  return (
    <div>
      <Link to={`/create`}>
        <h6>Companies</h6>
        {companies.map((company) => {
          return <Company key={company.id} company={company} />;
        })}
        <button>Create Company</button>
      </Link>
    </div>
  );
};

export default ReadCompanies;
