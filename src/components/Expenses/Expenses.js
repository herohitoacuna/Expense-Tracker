import React, { useState } from "react";

import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");

    const selectedYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(
        (item) => item.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={filteredYear}
                onSelectedYear={selectedYearHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />

            {/* Alternative way to render a list item */}

            {/* {filteredExpenses.length === 0 && <p>There's no expense found.</p>} */}
            {/* {filteredExpenses.length > 0 &&
                filteredExpenses.map((item) => {
                    const { id, date, title, amount } = item;
                    return (
                        <ExpenseItem
                            key={id}
                            date={date}
                            title={title}
                            amount={amount}
                        />
                    );
                })} */}
        </Card>
    );
};

export default Expenses;
