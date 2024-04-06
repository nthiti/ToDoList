import { useContext } from 'react';
import { ExpensesContext } from '../src/store/expenses-context';
import { getDateMinusDays } from '../src/util/date';

import ExpensesOutput from "../src/components/ExpensesOutput";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DayeAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DayeAgo; 
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses} 
      expensesPeriod="Total"
      fallbackText="No Expeses registered for the last 7 days!!!"
    />
  );
}

export default RecentExpenses;


// import { useCallback, useContext } from "react";
// import { Text } from "react-native";
// import ExpensesOutput from "../src/components/ExpensesOutput";

// import { ExpensesContext } from "../src/store/expenses-context";
// import { getDateMinusDays } from "../src/util/date";

// function RecentExpenses(){
//     const expensesCtx = useContext(ExpensesContext);
//     const recentExpenses = expensesCtx.expenses.filter((expense) => {
//         const today = new Date();
//         const date7DaysAgo = getDateMinusDays(today, 7);
//         console.log(date7DaysAgo);
//         return expense.date >= date7DaysAgo;  
//     });
//     return (
//         <ExpensesOutput expenses={recentExpenses} expensesPeriod ='Last 7 Day'/>
//     );
// }
// export default RecentExpenses;
/*import { useCallback, useContext } from "react";
import { Text } from "react-native";
import ExpensesOutput from "../src/components/ExpensesOutput";

import { ExpensesContext } from "../src/store/expenses-context";
import { getDateMinusDays } from "../src/util/date";

function RecentExpenses(){
    const expensesCtx = useContext(ExpensesContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        console.log(date7DaysAgo);
        return expense.date >= date7DaysAgo;  
    });
    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod ='Last 7 Day'/>
    );
}
export default RecentExpenses;*/