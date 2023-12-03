import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreenPersonal from '../screens/SignUpScreenPersonal';
import SignUpScreenBusiness from '../screens/SignUpScreenBusiness';
import PurposeScreen from '../screens/PurposeScreen';

const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="SignUpP" options={{headerShown: false}} component={SignUpScreenPersonal} />
        <Stack.Screen name="SignUpB" options={{headerShown: false}} component={SignUpScreenBusiness} />
        <Stack.Screen name="Purpose" options={{headerShown: false}} component={PurposeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}