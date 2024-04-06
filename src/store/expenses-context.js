import { useReducer, createContext } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Lunch',
    amount: 149,
    date: new Date('2023-01-01'),
  },
  {
    id: 'e2',
    description: 'Movie',
    amount: 160,
    date: new Date('2023-01-03'),
  },
  {
    id: 'e3',
    description: 'A computer book',
    amount: 259,
    date: new Date('2023-01-05'),
  },
  {
    id: 'e4',
    description: 'Coffee',
    amount: 120,
    date: new Date('2023-02-10'),
  },
  {
    id: 'e5',
    description: 'A pair of shoes',
    amount: 399,
    date: new Date('2023-01-14'),
  },
];
//เข้าถึงข้อมูลผ่านcontext ทำให้สามรถเข้าข้อมูลได้เลย อยู่ลึกขนาดไหนก้สามารถเข้าถึงข้อมูลแม่ได้เลย //ลูกสามารถปรกาศใช้ได้
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {}, //function
  deleteExpense: id => {},
  updateExpense: (id, { description, amount, date }) => {},
});
//เหมือน api ให้ทำอะไรได้บ้างเรียกข้อมูลอะไรหรือเพิ่มข้อมูลอะไร
function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        expense => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[updatableExpenseIndex] = updatedItem;
      return updatedExpense;
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: 'DELETE', payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
} //เรียกใช้ในapp

export default ExpensesContextProvider;

// import { useReducer, createContext } from "react";
// const DUMMY_EXPENSES = [
//     {
//         id: 'e1',
//         description: 'Luch',
//         amount: 149,
//         date: new Date('2023-01-01')
//     },
//     {
//         id: 'e2',
//         description: 'Movie',
//         amount: 160,
//         date: new Date('2023-01-03')
//     },
//     {
//         id: 'e3',
//         description: 'A computer book',
//         amount: 259,
//         date: new Date('2023-01-05')
//     },
//     {
//         id: 'e4',
//         description: 'Coffee',
//         amount: 120,
//         date: new Date('2023-01-10')
//     },
//     {
//         id: 'e5',
//         description: 'A pair of shoes',
//         amount: 399,
//         date: new Date('2023-01-14')
//     },
// ];

// export const ExpensesContext = createContext({
//     expenses: [],
//     addExpense: ({description, amount, date})=>{},
//     deleteExpense: (id)=>{},
//     updateExpense: (id, {description, amount, date})=>{},
// });

// function expensesReducer(state, action) { 
//     switch (action.type) {
//         case 'ADD':
//             const id = new Date().toString() + Math.random().toString();
//             return[{...action.payload,id: id}, ...state];
//         case 'UPDATE':
//             const updatableExpenseIndex = state.findIndex(
//                 (expense) => expense.id === action.payload.id
//             );
//             const updatableExpense = state[updatableExpenseIndex];
//             const updatedItem = {...updatableExpense, ...action.payload.data};
//             const updatedExpense = [...state];
//             updatedExpense[updatableExpenseIndex] = updatedItem;
//             return updatedExpense; 
//         case 'DATELE':
//             return state.filter((expense) => expense.id !== action.payload);
//         default:
//             return state;
//     }
// }

// function ExpensesContextProvider({children}) {
//     const [expenseState, dispatch] = useReducer(expensesReducer,DUMMY_EXPENSES)
//     function addExpense(expenseData) {
//         dispatch({type: "ADD", payload: expenseData});
//     }
//     function deleteExpense(id) {
//         dispatch({type: "DELETE", payload: id})
//     }
//     function updateExpense(id, expenseData) {
//         dispatch({type: "UPDATE", payload: {id: id, data: expenseData}});
//     }
//     const value = {
//         expenses: expenseState,
//         addExpense: addExpense,
//         deleteExpense: deleteExpense,
//         updateExpense: updateExpense,
//     };
//     return(
//         <ExpensesContext.Provider value={value}>
//             {children}
//         </ExpensesContext.Provider>
//     )
// }

// export default ExpensesContextProvider