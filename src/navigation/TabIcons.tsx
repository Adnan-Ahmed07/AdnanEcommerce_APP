import Icon from "@components/Atoms/Icon";
import React from "react";

interface TabIconsProps {
  focused: boolean;
  size: number;
  color: string;
}
export const HomeIcons: React.FC<TabIconsProps> = ({ focused, size, color }) => {
return(
  <Icon
  name={focused ? "home" : "home-outline"}
  size={size}
  color={color}
  iconFamily="Ionicons"
  />
)
};
export const CartIcons: React.FC<TabIconsProps> = ({ focused, size, color }) => {
  return(
    <Icon
    name={focused ? "cart" : "cart-outline"}
    size={size}
    color={color}
    iconFamily="MaterialCommunityIcons"
    />
  )
  };
  export const AccountIcon: React.FC<TabIconsProps> = ({ focused, size, color }) => {
    return(
      <Icon
      name={focused ? "person" : "person-outline"}
      size={size}
      color={color}
      iconFamily="Ionicons"
      />
    )
    };
    export const CategoriesIcon: React.FC<TabIconsProps> = ({ focused, size, color }) => {
      return(
        <Icon
        name={focused ? "grid" : "grid-outline"}
        size={size}
        color={color}
        iconFamily="Ionicons"
        />
      )
      };