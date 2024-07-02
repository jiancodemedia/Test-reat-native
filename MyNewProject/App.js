import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './src/Pages/HomePage'
import ChosenTask from './src/Pages/ChosenTask'
import USER from './src/Pages/USER';

const Stack = createNativeStackNavigator();

export default function App() {

  const [toDoList, setToDoList] = useState([{ id: 1, task: 'brush your teeth' }]);
  const [task, setTask] = useState('');
  const [chosenTask, setChosenTask] = useState('');

  const GlobalState = {
    toDoList, setToDoList,
    task, setTask,
    chosenTask, setChosenTask
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="HomePage" options={{ headerShown: false }}>
          {props => <HomePage {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChosenTask" options={{ headerShown: false }}>
          {props => <ChosenTask {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="USER" options={{ headerShown: false }}>
          {props => <USER {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


