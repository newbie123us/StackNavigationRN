import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CalculatorScreen from './screens/Calculator';
import TodoScreen from './screens/Todo';

export type RootStackParamList = {
  Calculator: undefined;
  Todo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={({ navigation }) => ({
            title: 'Máy tính',
            headerRight: () => (
              <Button title="Todo" onPress={() => navigation.navigate('Todo')} />
            ),
          })}
        />
        <Stack.Screen
          name="Todo"
          component={TodoScreen}
          options={({ navigation }) => ({
            title: 'Lịch trình',
            headerRight: () => (
              <Button title="Calc" onPress={() => navigation.navigate('Calculator')} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
