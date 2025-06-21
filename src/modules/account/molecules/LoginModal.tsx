import { View, Text, Alert, Modal, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@store/reduxHook'
import { setData } from '../api/slice'
import { loginorSignup } from '../api/api'
import { navigate } from '@navigation/NavigationUtil'
import { clearCart } from '@modules/cart/api/slice'
import { modalStyles } from '@styles/modalStyles'
import Icon from '@components/Atoms/Icon'
import { Colors } from '@utils/Constants'

const LoginModal:FC<{visible:boolean,onClose:()=>void}> = ({visible,onClose}) => {
  const dispatch=useAppDispatch()
  const user=useAppSelector(state=> state.account.user )as any;
  const [number,setNumber]=useState("")
  const [address,setAddress]=useState("")
  const handleLogin=async()=>{
    const data=await loginorSignup(number,address)
    if(data){ 
      dispatch(setData(data))
      onClose()
    }else{ 
      Alert.alert("Error", "Login failed. Please try again.")
    }
  }
  useEffect(() => {
    if(user?.phone){ 
      setNumber(user?.phone)
      setAddress(user?.address)
    }
  },[user])
  const handleLogout=async ()=>{ 
    onClose()
    navigate("Home")
    setAddress('')
    setNumber('')
    await dispatch(clearCart())
    await dispatch(setData(null))
  }
  return (
  <Modal visible={visible}
  animationType='slide'
  transparent={true}
  onRequestClose={onClose}>
   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <View style={modalStyles.modalContainer}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={modalStyles.keyboardAvoidingView}>
           <ScrollView contentContainerStyle={modalStyles.scrollViewContent}>
            <View style={modalStyles.modalContent}>
           <TouchableOpacity style={modalStyles.closeIcon} onPress={onClose}>
              <Icon size={20} color='#fff' name='close' iconFamily='Ionicons'/>
           </TouchableOpacity>
           <Text style={modalStyles.title}>Login in for the best experience</Text>
            <Text style={modalStyles.subTitle}>Enter your phone number</Text>
            <TextInput 
            style={modalStyles.input}
            placeholder='Phone Number'
            value={number}
            maxLength={11}
            onChangeText={setNumber}
            keyboardType='number-pad'
            placeholderTextColor={'#ccc'}
            />
            <TextInput 
            style={modalStyles.textareainput}
            placeholder='Enter your address'
            value={address}
            multiline
            textAlignVertical='top'
            onChangeText={setAddress}
            keyboardType='number-pad'
            placeholderTextColor={'#ccc'}
            />
             <View style={modalStyles.buttonContainer}>
            <TouchableOpacity style={modalStyles.button} onPress={handleLogin}>
              <Text>{!user ? "Login":"Save"}</Text>
              </TouchableOpacity>
             { 
              user && 
              <TouchableOpacity style={[modalStyles.button,{backgroundColor:"transparent",borderColor:Colors.active,borderWidth:1}]} onPress={handleLogout}>
              <Text style={[modalStyles.buttonText,{color:Colors.active}]}>Logout</Text>
              </TouchableOpacity>
             }

             </View>

            </View>
           </ScrollView>
        </KeyboardAvoidingView>
       </View>
   </TouchableWithoutFeedback>
  </Modal>
  )
}

export default LoginModal