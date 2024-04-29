import React, { useContext, useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { CompanyContext } from "../context/CompanyProvider";
import { Link } from "react-router-dom";

const Input = styled.input`
  border: 1px solid blue;
`;

const CreateCompany = () => {
  const [inputValue, setInputValue] = useState("");
  const { companies, setCompanies } = useContext(CompanyContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const company = {};
    company.id = uuid();
    company.score = 0;
    company.name = inputValue;
    const newCompanies = [...companies, company];
    setCompanies(newCompanies);
    localStorage.setItem("crud-09-companies", JSON.stringify(newCompanies));
    setInputValue("");
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <form onSubmit={handleSubmit}>
        <Input onChange={handleChange} value={inputValue} autoFocus />
      </form>
      {companies?.map((comp) => {
        return <span>{comp.name}, </span>;
      })}
    </div>
  );
};

export default CreateCompany;
