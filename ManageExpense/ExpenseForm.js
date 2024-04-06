import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';
import Button from '../src/UI/Button';
import { getFormattedDate } from '../src/util/date';

const ExpenseForm = ({
  onCancel,
  onSubmit,
  buttonLabel,
  editedExpenseId,
  selectedExpense,
}) => {
  const [inputValues, setInputValues] = useState({
    amount: selectedExpense ? selectedExpense.amount.toString() : '',
    date: selectedExpense ? getFormattedDate(selectedExpense.date) : '',
    description: selectedExpense ? selectedExpense.description : '',
  });

  function inputChangeHandler(inputIndentifier, enteredValue) {
    setInputValues(curInputValues => {
      return {
        ...curInputValues,
        [inputIndentifier]: enteredValue,
      };
    });
    // console.log(inputValues);
  }
  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };
    console.log(expenseData);
    onSubmit(expenseData);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          Label="Amount"
          textInputConfig={{
            keyboardType: 'number-pad',

            value: inputValues.amount,
            onChangeText: inputChangeHandler.bind(this, 'amount'),
          }}
        />
        <Input
          style={styles.rowInput}
          Label="Date"
          textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            value: inputValues.date,
            onChangeText: inputChangeHandler.bind(this, 'date'),
          }}
        />
      </View>
      <Input
        Label="Description"
        textInputConfig={{
          multiline: true,
          value: inputValues.description,
          onChangeText: inputChangeHandler.bind(this, 'description'),
        }}
      />
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={onCancel}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={submitHandler}>
          {editedExpenseId}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 24,
    textAlign: 'center',
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    minWidth: 125,
    marginHorizontal: 8,
  },
});

export default ExpenseForm;



// import React, {useState} from "react";
// import { View, Text, StyleSheet, TextInput } from "react-native";
// import Input from "./Input";
// import Button from "../src/UI/Button";

// import { getFormattedDate } from "../src/util/date";

// const ExpenseForm = ({buttonLabel, onCancel, onSubmit, seletedExpense}) => {
//     const [inputValues, setInputValues] = useState({
//         amount: seletedExpense ? selectedExpense.amount.toString(): "",
//         date: selectedExpense ? getFormattedDate(selectedExpense.date) : '',
//         description: selectedExpense ? selectedExpense.description : '',
//     });

//     function inputChangeHandler(inputIdentifier, enteredValue) {
//         setInputValues((curInputValues) => {
//             return {
//                 ...curInputValues,
//                 [inputIdentifier]: enteredValue,
//             };
//         });
//         console.log(inputValues);
//     }

//     function submitHandler() {
//         const expenseData = {
//             amount: +inputValues.amount,
//             date: new Date(inputValues.date),
//             description: inputValues.description,
//         };

//         console.log(expenseData); 
//         onSubmit(expenseData);
//     }

//     return (
//         <View style={styles.form}>
//             <Text style={styles.title}>Your Expense</Text>
//             <View style={styles.inputsRow}>
//                 <Input 
//                     style={styles.rowInput}
//                     Label="Amount" 
//                     textInputConfig={{ 
//                         KeyboardType: "number-pad",
//                         value: inputValues.amount, 
//                         onChangeText: inputChangeHandler.bind(this, "amount"),
//                     }} 
//                 />
//                 <Input 
//                     style={styles.rowInput}
//                     Label="Date" 
//                     textInputConfig={{ 
//                         placeholder: "YYYY-MM-DD", 
//                         maxLength: 10,
//                         values: inputValues.date, 
//                         onChangeText: inputChangeHandler.bind(this, "date"),
//                     }} 
//                 />
//                 <Input Label="Description" textInputConfig={{
//                     multiline: true,
//                     value: inputValues.description,
//                     onChangeText: inputChangeHandler.bind(this,"description"),
//                 }}/>
//             <View style={styles.buttons}>
//                 <Button style={styles.button} mode="flat" onPress={onCancel}>
//                     Cancel
//                 </Button>
//                 <Button style={styles.button} onPress={onSubmit}>
//                     {isEditing ? "Update" : "Add"}
//                 </Button>
//             </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     form : {
//        marginTop: 40, 
//     },  
//     title : {
//         color: "#fff",
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginVertical: 24,
//         textAlign: 'center',
//     },
//     inputsRow:{
//         flexDirection: 'row',
//         justifyContent: "space-between",
//     },
//     rowInput: {
//         flex: 1,
//     },
//     buttons: {
//         flexDirection: "row",
//         justifyContent: "center",
//         alignContent: "center",
//     },
//     button: {
//         minWidth: 125, //ความกว้างที่น้อยที่สุด
//         marginHorizontal: 8,
//     },
//     deleteContainer: {

//     },
// });

// export default ExpenseForm;
