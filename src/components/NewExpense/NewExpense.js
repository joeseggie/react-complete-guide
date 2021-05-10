import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const getRandomId = () => {
        return Math.floor(Math.random() * (99 - 9 + 1) + 9);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: getRandomId()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSubmit={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
};

export default NewExpense;