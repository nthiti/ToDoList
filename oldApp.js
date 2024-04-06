import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpensesContextProvider from './src/store/expenses-context';

import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import IconButton from './src/UI/IconButton';

import { GlobalStyles } from './src/constants/styles';
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function BottomTabsOverview() {
  return(
    <BottomTabs.Navigator
      screenOptions = {({navigation}) => ({
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: "white",
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({tintColor}) => (
          <IconButton 
            icon ="add" 
            size ={28} 
            color ={tintColor}
            onPress ={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
      >
      <BottomTabs.Screen 
        name="RecentExpense" component={RecentExpenses}
        options={{
          title:"Recent Expenses",
          tabBarLabel:"Recent",
          tabBarIcon:({color,size}) => (
            <FontAwesome name="hourglass-2" size={size} color={color}/>
          ),
        }}
      />
      <Stack.Screen 
        name="All Expenses" component={AllExpenses} 
        options={{
          tabBarIcon:({color,size}) => (
            <AntDesign name="calendar" size={size} color={color} />          
          ),
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <ExpensesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions = {{
              headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
              headerTintColor: "white",
          }}> 
            <Stack.Screen
              name="BottomTabsOverview"
              component={BottomTabsOverview}
              options={{headerShown:false}}
            />
            <Stack.Screen name="ManageExpense" component={ManageExpenses}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    backgroundColor : GlobalStyles.colors.primary50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});