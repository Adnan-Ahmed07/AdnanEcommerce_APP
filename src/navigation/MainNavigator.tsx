import { View, Text, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react'
import { Colors } from '@utils/Constants'
import Home from '@modules/home'
import Categories from '@modules/categories'
import Account from '@modules/account'
import Cart from '@modules/cart'
const Tab=createBottomTabNavigator()

const MainNavigator:FC = () => {
  return (
   <Tab.Navigator
   screenOptions={{
     headerShown:false,
    tabBarHideOnKeyboard:true,
    tabBarActiveTintColor:Colors.active,
    tabBarInactiveTintColor:Colors.inactive,
    lazy:true,
    tabBarStyle:{
      paddingTop:Platform.OS==='android'? 0:10
    }
  }}
   >
    <Tab.Screen name="Home" component={Home}/>
    <Tab.Screen name="Categories" component={Categories}/>
    <Tab.Screen name="Account" component={Account}/>
    <Tab.Screen name="Cart" component={Cart}/>
    </Tab.Navigator>
  )
}

export default MainNavigator