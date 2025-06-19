import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'
import UniversalAdd from '@modules/products/atoms/UniversalAdd'

const OrderItem:FC<{item:any}> = ({item}) => {
  return (
    <View style={styles.flexRow}>
    <View style={styles.imageContainer}>
      <Image source={{uri: item?.image_uri}} style={styles.img} />
      <UniversalAdd item={item} />
    </View>
    </View>
  )
}
const styles=StyleSheet.create({ 
  flexRow:{ 
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:"flex-start",
    marginBottom:15,
    borderBottomWidth:5,
    paddingVertical:10,
    borderColor:'#F0F2F5',
    padding:10
  },
  imageContainer:{ 
    width:"25%",
    justifyContent:'center',
    alignItems:'center',
  },
  img:{ 
    resizeMode:'contain',
    borderWidth:1,
    height:90,
    borderColor:"#ccc",
    width:"100%",
    marginBottom:10
  }
})
export default OrderItem