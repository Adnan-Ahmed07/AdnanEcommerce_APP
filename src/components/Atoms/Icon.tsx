import { View, Text } from 'react-native'
import React, { FC } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
interface IconsProps {
  
  size: number;
  name: string;
  color?: string;
  iconFamily:"Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" 
}
const Icon:FC<IconsProps> = ({size,name,color,iconFamily}) => {
  return (
   <>
   {iconFamily === "Ionicons" && <Ionicons name={name} size={size} color={color} />}
   {iconFamily === "MaterialCommunityIcons" && <MaterialCommunityIcons name={name} size={size} color={color} />}
    {iconFamily === "MaterialIcons" && <MaterialIcons name={name} size={size} color={color} />}
   </>
  )
}

export default Icon