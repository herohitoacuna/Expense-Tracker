import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const [openExpenseForm, setOpenExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(expenseData);
        setOpenExpenseForm((prevState) => !prevState);
    };

    const openExpenseHandler = () => {
        setOpenExpenseForm((prevState) => !prevState);
    };

    return (
        <div className="new-expense">
            {openExpenseForm ? (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onOpenExpenseForm={openExpenseHandler}
                />
            ) : (
                <button onClick={openExpenseHandler}>Add New Expense</button>
            )}
        </div>
    );
};

export default NewExpense;
