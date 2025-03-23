import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React, {FC, useState} from 'react';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import { menuData } from '@utils/db';
import MenuItem from '../atoms/MenuItem';

const MenuHeader: FC<{scrollY: any}> = ({scrollY}) => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const opacityFadingStyles = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0]);
    return {
      opacity: opacity,
    };
  });

  return (
    <Animated.View style={[styles.container,opacityFadingStyles]}>
      <SafeAreaView/>
      <View style={styles.flexRow}>
      {menuData.map((item, index) => 
      (
        <MenuItem
        key={index}
        item={item}
        isFocused={focusedIndex === index}
        onSelect={() => setFocusedIndex(index)}
        />
      )
      )}
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
   
    flexRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
    },
  
});
export default MenuHeader;
