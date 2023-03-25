import React from "react";
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
  return (
    <Container>
      <h3>It is Home</h3>
      <Overview />
      <Transaction />
    </Container>
  );
};

export default Home;
