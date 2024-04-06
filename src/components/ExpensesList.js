import { FlatList, Text } from "react-native";

import ExpensesItem from "./ExpensesItem";

function renderExpensesItem(ItemData){
    return <ExpensesItem{...ItemData.item}/>
}

function ExpensesList({ expenses }){ 
    return (
        <FlatList 
            data={expenses} 
            keyExtractor={(item) => item.id} 
            renderItem={renderExpensesItem}
        />
    );
}
export default ExpensesList;
/*import { FlatList, Text } from "react-native";

import ExpensesItem from "./ExpensesItem";

function renderExpensesItem(ItemData){
    return <ExpensesItem {...ItemData.item}/>
    //return ItemData.id
}

function ExpensesList({ expenses }){
    return (
        <FlatList 
            data={expenses} 
            keyExtractor={(item) => item.id} 
            renderItem={renderExpensesItem}
        />
    );
}
export default ExpensesList;*/