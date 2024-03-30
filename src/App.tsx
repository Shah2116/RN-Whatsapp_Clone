import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import { Colors } from './theme/Colors'
import { NavigationContainer } from '@react-navigation/native'
import TopTabsNavigator from './navigation/TopTabsNavigator'
import Header from './components/Header'

const App = () => {
  return (
      <NavigationContainer>
        <Home />
      </NavigationContainer>
  )
}

export default App