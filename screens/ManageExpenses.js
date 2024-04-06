import { useLayoutEffect, useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../src/constants/styles';
import { ExpensesContext } from '../src/store/expenses-context';

import IconButton from '../src/UI/IconButton';
import Button from '../src/UI/Button';
import ExpenseForm from '../ManageExpense/ExpenseForm';

function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);
  const editedExpenseId = route.params?.expenseId;
  const isEditting = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    expense => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditting ? 'Update Expense' : 'Add Expense',
    });
  }, [navigation, isEditting]);

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expenseData) {
    if (isEditting) {
      //update
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      //add
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  }

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        editedExpenseId={isEditting ? 'Update' : 'Add'}
        selectedExpense={selectedExpense}
      />
      <View style={styles.deleteContainer}>
        <IconButton
          icon="trash"
          color={GlobalStyles.colors.error500}
          size={36}
          onPress={deleteExpenseHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
export default ManageExpense;

// import { useLayoutEffect, useContext } from "react";
// import { Text, View, StyleSheet} from "react-native";
// import { GlobalStyles } from "../src/constants/styles";
// import { ExpensesContext } from "../src/store/expenses-context";

// import Button from "../src/UI/Button";
// import IconButton from "../src/UI/IconButton";
// import ExpenseForm from "../ManageExpense/ExpenseForm";

// function ManageExpenses({route, navigation}) {
//     const expensesCtx = useContext(ExpensesContext)
//     const editedExpenseId = route.params?.expenseId;  
//     const isEditing = !!editedExpenseId;

//     const selectedExpense = expensesCtx.expenses.find(
//         (expense) => expense.id === editedExpenseId
//     );

//     useLayoutEffect (() => {
//         navigation.setOptions({
//             title: editedExpenseId ? "Update Expense":"Add Expenses",
//         })
//     },{navigation, editedExpenseId});

//     function cancelHandler() {
//         navigation.goBack();
//     }
//     function confirmHandler(expenseData) {
//         if (editedExpenseId){
//             //update
//             expensesCtx.addExpense({
//                 description: "Updated Test",
//                 amount: 30,
//                 date: new Date("2023-02-12"),
//             })
//         }
//         else {
//             expensesCtx.addExpense({
//                 description: "New Test",
//                 amount: 19.99,
//                 date: new Date("2023-02-12"),
//             })
//         }
//         navigation.goBack();
//     }
//     function deleteExpenseHandler() {
//         expensesCtx.deleteExpense(editedExpenseId)
//         navigation.goBack();
//     }
//     return (
//         <View style={styles.container}>
//             <ExpenseForm onCancel={cancelHandler}/>
//             <View style={styles.deleteContainer}>
//                 <IconButton onPress={deleteExpenseHandler}
//                     icon="trash"
//                     color={GlobalStyles.colors.error500}
//                     size={36}
//                 />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 2,
//         padding: 24,
//         backgroundColor: GlobalStyles.colors.primary800,
//     },
//     deleteContainer:{
//         marginTop: 16,
//         paddingTop: 8,
//         borderTopWidth: 2,
//         borderTopColor: GlobalStyles.colors.primary200,
//         alignItems: "center",
//     },
// })
// export default ManageExpenses;