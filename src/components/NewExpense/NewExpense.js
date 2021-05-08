import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const onSubmitExpenseForm = (expenseData) => {
        props.onAddExpense(expenseData)
    };
    return <div className="new-expense">
        <ExpenseForm onSubmit={onSubmitExpenseForm} />
    </div>
};

export default NewExpense;