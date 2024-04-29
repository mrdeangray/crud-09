import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CompanyContext } from "../context/CompanyProvider";
import { Link, useNavigate, useParams } from "react-router-dom";

const Input = styled.input`
  border: 1px solid blue;
`;

const UpdateCompany = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isUpdating, setIsUpdating] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { companies, setCompanies } = useContext(CompanyContext);

  useEffect(() => {
    const company = companies.find((c) => c.id === id);
    setInputValue(company.name);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCompanies = companies.map((c) => {
      if (c.id === id) {
        c.name = inputValue;
        // setInputValue(inputValue)
      }
      return c;
    });
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      navigate(`/`);
    }, 2000);

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
      {isUpdating && <p>Updating...</p>}
    </div>
  );
};

export default UpdateCompany;
