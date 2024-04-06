import { Text, View, StyleSheet } from "react-native";

import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

import { GlobalStyles } from "../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'Luch',
        amount: 149,
        date: new Date('2023-01-01')
    },
    {
        id: 'e2',
        description: 'Movie',
        amount: 160,
        date: new Date('2023-01-03')
    },
    {
        id: 'e3',
        description: 'A computer book',
        amount: 259,
        date: new Date('2023-01-05')
    },
    {
        id: 'e4',
        description: 'Coffee',
        amount: 120,
        date: new Date('2023-01-10')
    },
    {
        id: 'e5',
        description: 'A pair of shoes',
        amount: 399,
        date: new Date('2023-01-14')
    },
];
function ExpensesOutput({expenses, expensesPeriod, fallbackText}) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>;
    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses}/>
    }
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} periodName={expensesPeriod}/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroudColor: GlobalStyles.colors.primary700,
    },
    infoText: {
        color: "back",
        textAlign: "center",
        fontSize: 16,
        marginTop: 32,
    },
});
export default ExpensesOutput;