import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TopTabsNavigator from '../navigation/TopTabsNavigator'
import { Colors } from '../theme/Colors'

const Home = () => {
  return (
    <>
    <StatusBar backgroundColor={Colors.primaryColor}/>
      <Header />
      <TopTabsNavigator />
    </>
  )
}

export default Home

const styles = StyleSheet.create({})