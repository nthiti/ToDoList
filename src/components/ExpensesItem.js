import React from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { GlobalStyles } from "../constants/styles"; 
import {getFormattedDate} from "../util/date";

function ExpensesItem ({id, description, date, amount}) {
    const navigation = useNavigation();

    function expensesPressHandler() {
        navigation.navigate("ManageExpense",{expenseId: id}); 
    }
    return(
        <TouchableOpacity onPress={expensesPressHandler}>
            <View style ={styles.expensesItem}> 
                <View>
                    <Text style ={[styles.textBase, styles.description]}>
                        {description}</Text>
                    <Text style ={styles.textBase}>{getFormattedDate(date)}</Text>
            </View>
                    <View style= {styles.amountContainer}>
                <Text style ={styles.amount}>{amount.toFixed(2)}</Text> 
                </View>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    expensesItem: {
        flexDirection : "row",
        backgroundColor : GlobalStyles.colors.primary500,
        marginVertical : 5,
        padding : 12,
        justifyContent : "space-between",
        borderRadius : 6,
    },
    textBase : {
        color : GlobalStyles.colors.primary50,
    },
    description: {
        fontSize : 16,
        marginBottom : 4,
        fontWeight : "blod",
    },
    amountContainer : {
        backgroundColor : "white",
        paddingHorizontal : 12,
        paddingVertical : 4,
        justifyContent : "center",
        borderRadius : 4,
    },
    amount : {
        color : GlobalStyles.colors.primary500,
        fontWeight : '',

    }
});

export default ExpensesItem;
/*import { View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../constants/styles";

function getFormattedDate(date){
    return`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
}

function ExpensesItem({description, date, amount}) {
    return (
    <View style={styles.expensesItem}>
        <View >
            <Text style={[styles.textBase,styles.description]}>{description}</Text>
            <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
            <Text style={styles.textBase}>{amount}</Text>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    expensesItem:{
        flexDirection: "row",
        backgroundColor: GlobalStyles.colors.primary500,
        marginVertical: 5,
        padding: 12,
        justifyContent: "space-between",
        borderRadius: 6,
    },
    textBase:{
        color: GlobalStyles.colors.primary50,
    },
    description:{
        font: 16,
        marginBottom: 4,
        fontWeight: "bold",
    },
    amountContainer:{
        backgroundColor: "white",
        paddingHorizontal: 12,
        paddingVertical: 4,
        justifyContent:"cemter",
        alignItems: "center",
        borderRadius:4,
    },
    amount:{
        color:GlobalStyles.colors.primary500,
        fontWeight:"",
    }
});
export default ExpensesItem;*/
