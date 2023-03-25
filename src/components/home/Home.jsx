import React, { useState } from "react";
import styled from "styled-components";
import Overview from "./Overview";
import Transaction from "./transaction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: "Montserrat", sans-serif;
  width: 360px;
`;

const Home = () => {
  const [transacrions, updateTransacrion] = useState([]);
  const addTransaction = (payload) => {
    const transactionArray = [...transacrions];
    transactionArray.push(payload);
    updateTransacrion(transactionArray);
  };
  return (
    <Container>
      <Overview addTransaction={addTransaction} />
      <Transaction transacrions={transacrions} />
    </Container>
  );
};

export default Home;
