import { View, Text, SafeAreaView, StyleSheet, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@utils/Constants'
import Icon from '@components/Atoms/Icon'
import RollingContent from 'react-native-rolling-bar'
import { searchItems } from '@utils/db'

const SearchBar = () => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => { 
    setIsOn(!isOn)
  }
  return (
    <>
   <SafeAreaView/>
   <View style={styles.container}>
<Pressable onPress={toggleSwitch} style={styles.toggoleContainer}>
<Text style={styles.brandText}>Brand Mall</Text>
<Image source={isOn ? require('@assets/icons/switch_on.png'):require('@assets/icons/switch_off.png')} style={styles.switchIcon}/>
</Pressable>
<Pressable style={styles.searchContainer}>
<Icon name='search' iconFamily='Ionicons' size={20} color='black' />
<RollingContent interval={3000} defaultStyle={false} customStyle={styles.textContainer}>
{ 
  searchItems.map((item, index) => { 
    return <Text key={index} style={styles.contenText}>{item}</Text>
  })
}
</RollingContent>
</Pressable>
   </View>
   </>
  )
}
const styles = StyleSheet.create({
  container:{  
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  toggoleContainer:{
   width: '16%',
   justifyContent: 'center',
    alignItems: 'center',
  },
  brandText:{  
    fontWeight:'700',
    fontSize:RFValue(8),
    color: Colors.text
  },
  switchIcon:{  
    width:'100%',
    height:30,
    marginTop:4,
    resizeMode:'contain'
  },
  textContainer:{  
    flex:1,
    height:40,
    color:'black',
    marginLeft:5,

  },
  searchContainer:{  
    flexDirection: 'row',
    alignItems: 'center',
   width:'80%',
    backgroundColor: '#fafafa',
   borderWidth: 2,
   borderColor:'#ccc',
   paddingHorizontal: 10
  },
  contenText:{
    fontSize:RFValue(10),color:Colors.text
  }

})
export default SearchBar