import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Overview from "./Overview";
import Transaction from "./Transaction";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: "Montserrat", sans-serif;
  width: 360px;
`;

const Home = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) =>
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount)
    );
    updateExpense(exp);
    updateIncome(inc);
  };
  useEffect(() => calculateBalance(), [transactions]);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };
  return (
    <Container>
      <Overview
        expense={expense}
        income={income}
        addTransaction={addTransaction}
      />
      {transactions?.length ? <Transaction transactions={transactions} /> : ""}
    </Container>
  );
};
export default Home;
