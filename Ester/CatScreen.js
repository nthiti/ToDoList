// import React, {Component} from "react";
// import { Text } from "react-native";

// function CatScreen(){
//     return <Text>Manage Expenses</Text>
// }
// export default CatScreen;

import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

const CatScreen = () => {
    const [count, setCount] = useState(0); //setCount(...) => count+1
    console 
    return (
        <View style={styles.container}>
            <Text style={styles.countLabel}>{count}</Text>
            <View style={styles.btn}>
                <Button 
                    title="INCREMENT"
                    color="#1d7874"
                    onPress={() => setCount(count + 1)}
                />
                <Button 
                    title="DECREMENT"
                    color="#679289"
                    onPress={() => (count === 0 ? null : setCount(count - 1))}
                />
            </View>
        <TouchableOpacity onPress ={() => setCount(0)}>
            <Text style={styles.textButton}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount(Math.floor(Math.random() * 100))}>
            <Text style={[styles.textButton, { color: "blue" }]}>Random</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fcebb6",
    },
    countLabel: {
        fontSize: 150,
        fontWeight: "bold",
    },
    btn: {
        fontSize: 28,
        flexDirection: "row",
    },
    textButton:{
        fontSize: 20,
        color: "red",
    },
});
export default CatScreen;

