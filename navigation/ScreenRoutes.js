import React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import DetailScreen from '../screens/DetailScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createSharedElementStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen
        name='DetailScreen'
        component={DetailScreen}
        sharedElements={(route, otherRoute, showing) => {
          // Your code
        }}
      />
    </Stack.Navigator>
  )
}
