import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Community from '../screens/Community';
import VectorIcon from '../utils/VectorIcons';
import { Colors } from '../theme/Colors';
import { TabBarData } from '../data/TabBarData';

const TopTab = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {
  return (
    <TopTab.Navigator  screenOptions={{
     tabBarStyle:{backgroundColor:Colors.primaryColor},
     tabBarActiveTintColor: Colors.tertiary,
     tabBarInactiveTintColor: Colors.secondaryColor,
     tabBarIndicatorStyle: {backgroundColor:Colors.tertiary,height:3}

    }}>
        <TopTab.Screen name='Community' component={Community} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({color}) => (
            <VectorIcon type='FontAwesome' name='users' size={20} color={color} />
          ),
          }}
        />
       {TabBarData.map((tab) => (
        <TopTab.Screen key={tab.id} name={tab.name} component={tab.route} />
       ))}
    </TopTab.Navigator>    
  )
}

export default TopTabsNavigator

const styles = StyleSheet.create({})