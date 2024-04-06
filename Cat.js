import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CatScreen from "./Ester/CatScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator()

const myhome = ({navigation}) =>{
    return(
    <View style={styles.container}>
        <Button title ="Go to Run Number" 
            onPress ={() => navigation.navigate("Cat")
        }
      /> 

    </View>
    )
}

export default function App() {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={myhome}/>
            <Stack.Screen name="Cat" component={CatScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"green",
        alignItems: 'center',
        justifyContent: "center", //อยู่กลางหน้าจอ
    },
    t1 : {
        fontSize : 50,
        marginBottom : 4,
        fontWeight : "blod",
    },
});
