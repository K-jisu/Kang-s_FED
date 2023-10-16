import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterdYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterdYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </li>
  );
  //
};

export default Expenses;
