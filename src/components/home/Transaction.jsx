import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: "Montserrat", sans-serif;
`;

const Transaction = () => {
  return (
    <Container>
      <h3>It is Transaction</h3>
    </Container>
  );
};

export default Transaction;
