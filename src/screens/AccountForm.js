import { Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import Register from './Register'
import { ActivityIndicator } from 'react-native'
import {auth} from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
const AccountForm = ({navigation}) => {

    const nav = useNavigation

    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
    const [message,setMessage] = useState('')
    const [vis, setVis] = useState(false)
    const [logged,setLogged] = useState(false)

    function LogIn()
    {
     signInWithEmailAndPassword(auth,email,pass) 
     .then((userCreds) =>{
        const user = userCreds.user;
        console.log(user.email + "Signed In")
        setLogged(true)
        setTimeout(() =>{
            navigation.openDrawer()
            setLogged(false)
            setEmail('')
            setPass('')
            setMessage('')
        },1000)
    })
    .catch((error) => {
        console.log(error)
        setMessage("Invalid Email or Password!")
      });
    }

  return (
    <>
    <SafeAreaView  backgroundColor = '#090909'/>
    <View style = {styles.con}>
        <Text style = {styles.title}>Log In</Text>
        <TextInput
        placeholder='Email'
        placeholderTextColor={'gray'}
        value={email}
        style = {[styles.input,{marginTop:"5%"}]}
        onChangeText={text => setEmail(text)}
        />
        <TextInput
        placeholder='Password'
        placeholderTextColor={'gray'}
        value={pass}
        style = {styles.input}
        onChangeText={text => setPass(text)}
        />
        <Text style = {styles.mess}>{message}</Text>
        {logged ?
        <ActivityIndicator size={'large'} color={"lightgray"} />
        :
        <Pressable onPress={LogIn} style={({ pressed }) => [styles.button,{ opacity: pressed ? 0.85 : 1 }, ]}>
            <Text style = {styles.text}>Log in</Text>
        </Pressable>
        }
        <Text style = {styles.link}>
            New to Simply?
            <Text onPress={ () => setVis(true)} style = {{textDecorationLine:"underline"}}> Create An Account</Text>
        </Text>
            <Modal visible = {vis} animationType='slide'>
                <View style={styles.modalContainer}>
                    <Register onCreate = {() => {
                        setVis(false)
                        setMessage('')
                    }} 
                    onPress = {() => setVis(false)}
                    />
                </View>
            </Modal>
    </View>
    </>
  )
} 

export default AccountForm

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#090909',
        width: '100%',
    },
    input:{
        borderWidth:1,
        borderColor:"gray",
        height:'8%',
        width:"70%",
        padding:"3%",
        marginVertical:"3%",
        borderRadius:5,
        color:"lightgray"
    },
    button:{
        height:"7%",
        backgroundColor:"darkgray",
        borderRadius:5,
        marginTop:"3%",
        justifyContent:"center",
        alignItems:"center",
        width:"55%"
    },
    text:{
        fontFamily:"Lexend-Regular",
        color:"black",
    },
    title:{
        color:"white",
        fontSize:30,
        fontFamily:"Lexend-Medium",
    },
    link:{
        color:"gray",
        marginTop:"10%",
        fontSize:12
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#090909',
      },
      mess:{
        color:"red",
        fontFamily:"Lexend-Light",
        fontSize:10
      }
})