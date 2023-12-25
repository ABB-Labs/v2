import { StyleSheet, Text, View ,Image} from 'react-native'
import {FontAwesome5 } from '@expo/vector-icons'; 
import React from 'react'
import bat from "./bi_battery.png"
const Correctness = () => {
  return (
    <View style = {styles.support}>
    <View style = {styles.headerCon}>
      <FontAwesome5 style = {styles.icon} name="award" size={24} color="white" />
      <Text style = {styles.header}>Achievements Earned</Text>
    </View>
    <View style = {styles.box}>
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
  </View>
  )
}

export default Correctness

const styles = StyleSheet.create({
  support:{
      justifyContent:"center",
      alignItems:"center",
      alignSelf:'center',
      width:"90%",
      height:"40%",
      marginVertical:"5%"
    },
    headerCon:{
      flexDirection:"row",
      marginBottom:"6%",
      alignSelf:"flex-start",
      marginLeft:'2%'
    },
    icon:{
      marginRight:"2%"
    },
    header:{
      fontFamily:"Lexend-Light",
      fontSize:16,
      color:"white"
    },
    box:{
      width:"100%",
      height:"90%",
      borderRadius:30,
      borderWidth:3,
      borderColor:"rgba(255, 255, 255, 0.08)",
      backgroundColor:"rgba(196, 196, 196, 0.03)",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
    },
    title:{
      fontFamily:"Lexend-Regular",
      color: "rgba(255, 255, 255, 0.25)",
      fontSize:16,
      fontWeight:300,
    },
    stat:{
      fontFamily:"Lexend-Bold",
      color:" rgba(255, 255, 255, 0.75)",
      fontSize:18,
      fontWeight:400,
      marginBottom:'15%'
    },
    left:{
      marginHorizontal:"9%",
      alignSelf:"flex-end",
      marginBottom:"15%"
    },
    right:{
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center",
    },
    endure:{
        fontFamily:"Lexend-Medium",
        color:"#FFF",
        fontSize:25,
        position:"absolute",
        top:"10%",
        left:"10%"
  
    }
})