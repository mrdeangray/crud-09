import React, { useContext, useState } from "react";
import { CompanyContext } from "../context/CompanyProvider";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const P = styled.p`
  color: blue;
  font-size: 30px;
`;

const DeleteCompany = () => {
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);
  const { id } = useParams();
  const { companies, setCompanies } = useContext(CompanyContext);

  const handleDelete = () => {
    const newCompanies = companies.filter((company) => company.id !== id);
    setCompanies(newCompanies);
    localStorage.setItem("crud-09-companies", JSON.stringify(newCompanies));
    setIsDeleting(true);
    setTimeout(() => {
      setIsDeleting(false);
      navigate(`/`);
    }, 2000);
  };

  return (
    <div>
      <Link to={`/`}>Back</Link>
      <h6>DeleteCompany</h6>
      <button onClick={handleDelete}>Delete</button>
      <div>
        {isDeleting && <P>Deleting....</P>}
        {companies.map((company) => {
          return <span>{company.name}, </span>;
        })}
      </div>
    </div>
  );
};

export default DeleteCompany;
