import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GlobalStyles } from './src/constants/styles';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';

import AllExpenses from './src/screens/AllExpenses';
import ManageExpense from './src/screens/ManageExpense';
import RecentExpenses from './src/screens/RecentExpenses';
import IconButton from './src/UI/IconButton';
import ExpensesContextProvider from './src/store/expenses-context';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function BottomTabsOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: '#540873' },
        headerTintColor: '#ffff',
        tabBarStyle: { backgroundColor: '#540873' },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={28}
            color={tintColor}
            onPress={() => {
              navigation.navigate('Manage');
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="Recent"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="All"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#540873' },
              headerTintColor: '#ffff',
            }}
          >
            <Stack.Screen
              name="BottomTabsOverview"
              component={BottomTabsOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Manage" component={ManageExpense} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
