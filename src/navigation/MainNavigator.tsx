import { View, Text, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { FC } from 'react'
import { Colors } from '@utils/Constants'
import Home from '@modules/home'
import Categories from '@modules/categories'
import Account from '@modules/account'
import Cart from '@modules/cart'
import { AccountIcon, CartIcons, CategoriesIcon, HomeIcons } from './TabIcons';
const Tab=createBottomTabNavigator()

const MainNavigator:FC = () => {
  const count =2
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
    <Tab.Screen name="Home" component={Home}
    options={{
      tabBarIcon:({focused,size,color})=>(
      <HomeIcons focused={focused} color={color} size={size}/>
          )
    }}
    
    
    />
    <Tab.Screen name="Categories" component={Categories}
      options={{
        tabBarIcon:({focused,size,color})=>(
        <CategoriesIcon focused={focused} color={color} size={size}/>
            )
      }}
    
    />
    <Tab.Screen name="Account" component={Account}
      options={{
        tabBarIcon:({focused,size,color})=>(
        <AccountIcon focused={focused} color={color} size={size}/>
            )
      }}
    />
    <Tab.Screen name="Cart" component={Cart}
      options={{
        tabBarIcon:({focused,size,color})=>(
        <CartIcons focused={focused} color={color} size={size}/>
            ),
            tabBarBadge:count>0?count:undefined,
            tabBarBadgeStyle:{backgroundColor:Colors.primary}
      }}
    />
    </Tab.Navigator>
  )
}

export default MainNavigator