import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpensesContextProvider from './src/store/expenses-context';

import ManageExpenses from './src/screens/ManageExpenses';
import AllExpenses from './src/screens/AllExpenses';
import RecentExpenses from './src/screens/RecentExpenses';

import { GlobalStyles } from './src/constants/styles';
import { AntDesign } from '@expo/vector-icons';
import IconButton from './src/UI/IconButton';


const Stack = createNativeStackNavigator();
const Bottomtabs = createBottomTabNavigator();

function BottomtabsOverview() {
  return (
    <Bottomtabs.Navigator
    screenOptions={({navigation}) => ({
      headerStyle : {backgroundColor : GlobalStyles.colors.primary500},
      headerTintColor : "white",
      tabBarStyle : { backgroundColor : GlobalStyles.colors.primary500},
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight : ({tintColor}) => (
      <IconButton 
      icon = "add"
      size = {28} 
      color = {tintColor}
      onPress = {() => {
        navigation.navigate("ManageExpenses") ;
        }} 
      />
      ),
    })}
    >
        <Bottomtabs.Screen name = "RecentExpenses" component = {RecentExpenses} 
        options = {{
          title : "Recent Expenses",
          tabBarLabel : " Recent",
          tabBarIcon : ({color, size}) => (
            <AntDesign name="hourglass" size={size} color={color} />
          ),
        }}/>
        <Bottomtabs.Screen name = "AllExpenses" 
        component = {AllExpenses} 
         options = {{
          title : "All Expenses",
          tabBarLabel : "All",
          tabBarIcon : ({color, size}) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
         }} />
    </Bottomtabs.Navigator>
  )
}

export default function App() {
  return (
    <>
    <StatusBar style = "auto" />
    <ExpensesContextProvider>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
      headerStyle : {backgroundColor : GlobalStyles.colors.primary500},
      headerTintColor : "white",
      }}
      >
        <Stack.Screen name = "BottomtabsOverview" 
        component = {BottomtabsOverview} 
        options = {{headerShown: false}}/>
        <Stack.Screen name = "ManageExpenses" 
        component = {ManageExpenses} />
      </Stack.Navigator>
    </NavigationContainer>
    </ExpensesContextProvider>
    </>
    
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: '#fff',
    backgroundColor : GlobalStyles.colors.primary50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
