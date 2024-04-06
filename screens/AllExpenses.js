import { useContext } from 'react';
import ExpensesOutput from '../src/components/ExpensesOutput';
import { ExpensesContext } from '../src/store/expenses-context';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expense found!!!"
    />
  );
}

export default AllExpenses;

// import { useContext } from "react";
// import { Text } from "react-native";
// import ExpensesOutput from "../src/components/ExpensesOutput";

// import { ExpensesContext } from "../src/store/expenses-context";

// function AllExpenses(){
//     const expensesCtx = useContext(ExpensesContext);
//     return (
//         <ExpensesOutput 
//             expensesCtx = {expensesCtx.expenses} 
//             expensesPeriod ='Total' 
//             fallbackText = "No expenses registeres for the last 7 day!"
//         />
//     );
// }
// export default AllExpenses;