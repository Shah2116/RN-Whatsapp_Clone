import React from 'react'
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ChatScreen from './screens/ChatScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer >
        <Stack.Navigator initialRouteName='ChatListScreen' screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen  name='HomeScreen' component={HomeScreen} />
          <Stack.Screen name='ChatScreen' component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App