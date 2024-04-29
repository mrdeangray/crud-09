import React, { createContext, useEffect, useState } from "react";

export const CompanyContext = createContext(null);

const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const saveCompanies = JSON.parse(
      localStorage.getItem("crud-09-companies") 
    );
    setCompanies(saveCompanies || []);
  }, []);

  return (
    <CompanyContext.Provider value={{ companies, setCompanies }}>
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyProvider;
