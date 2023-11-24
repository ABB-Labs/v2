import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import bat from "./bi_battery.png"
import {FontAwesome5 } from '@expo/vector-icons'; 
const EndurTwo = () => {
  return (
    <View style = {styles.box}>
    <Text style = {styles.seeall}>See all → </Text>
    <Text style = {styles.endure}>ENDURANT</Text>
      <View style = {styles.left}>
         <Text style = {styles.title}>HAVE</Text>
          <Text style = {styles.stat}>124</Text>
          <Text style = {styles.title} >UNLOCKED</Text>
          <Text style = {styles.stat}>5/23/2023</Text>
      </View>
      <View style = {styles.right}>
        <Image source = {bat}/>
      </View>
    </View>
 
  )
}
//    <Text style = {styles.endure}>ENDURANT</Text>

export default EndurTwo

const styles = StyleSheet.create({
    box:{
        width:"90%",
        height:"35%",
        borderRadius:30,
        borderWidth:3,
        borderColor:"rgba(255, 255, 255, 0.08)",
        backgroundColor:"rgba(196, 196, 196, 0.03)",
        justifyContent:"space-around",
        alignItems:"center",
        alignSelf:"center",
        flexDirection:"row",
    },
        title:{
        fontFamily:"Lexend-Regular",
        color: "rgba(255, 255, 255, 0.25)",
        fontSize:16,
      },
      stat:{
        fontFamily:"Lexend-Regular",
        color:" rgba(255, 255, 255, 0.75)",
        fontSize:18,
        marginBottom:'15%'
      },
      left:{
       // borderWidth:3,
       // borderColor:"red",
        marginTop:"20%",
        marginHorizontal:"5%"
      },
      right:{
        justifyContent:"center",
        alignItems:"center",
      //  borderWidth:3,
       // borderColor:"red"
      },
      endure:{
          fontFamily:"Lexend-Medium",
          color:"#FFF",
          fontSize:25,
          position:"absolute",
          top:"12%",
          left:"9%"
      },
      seeall:{
        fontSize:15,
        color:"rgba(255, 255, 255, 0.25)",
        fontFamily: "Lexend-Light",
        position:"absolute",
        top:"5%",
        left:"75%"
      }
})