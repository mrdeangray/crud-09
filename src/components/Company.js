import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DIV = styled.div`
  margin: 0 auto;
  width: 80%;
  border: 1px solid blue;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const Company = ({ company }) => {
  const [score, setScore] = useState(0);

  const getScore = async () => {
    try {
      const { data } = await axios(
        `https://api.github.com/users/${company.name}`
      );
      setScore(data.public_repos);
    } catch (error) {}
  };

  useEffect(() => {
    getScore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <DIV>
      <span>{company.name}</span>
      <span>Score: {score}</span>
      <Link to={`/update/${company.id}`}>
        <span>update</span>
      </Link>
      <Link to={`/delete/${company.id}`}>
        <span>delete</span>
      </Link>
    </DIV>
  );
};

export default Company;
