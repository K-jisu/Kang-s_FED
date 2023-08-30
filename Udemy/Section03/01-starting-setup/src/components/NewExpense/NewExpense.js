import React from 'react';

import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
  const saveExpenesDataHandler = (enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    };
    console.log(expenseData)
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData = {saveExpenesDataHandler}/>
    </div>
  );
};

export default NewExpense;<form>
</form>