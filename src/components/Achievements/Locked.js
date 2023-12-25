import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import lock from "./lock.png"
const Locked = () => {
  return (
    <View style = {styles.box}>
      <Image style = {styles.img} source = {lock}/>
    </View>
  )
}

export default Locked

const styles = StyleSheet.create({
    box:{
        width:"90%",
        height:"70%",
        borderRadius:30,
        borderWidth:3,
        borderColor:"rgba(255, 255, 255, 0.08)",
        backgroundColor:"rgba(196, 196, 196, 0.03)",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
      },
    img:{
        alignSelf:"center",
    }
})