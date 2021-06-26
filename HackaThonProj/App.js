import React from 'react';
import {  NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './src/screens/Landing/Landing';
import LoginScreen from './src/screens/SignUp/SignUpScreen';
import SignUp from './src/screens/LogIn/LogInScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Landing} name="Landing" options={{headerShown:false}}/>
        <Stack.Screen component={LoginScreen} name='LoginScreen' options={{headerShown:false}}/>
        <Stack.Screen component={SignUp} name='SignUp' options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
