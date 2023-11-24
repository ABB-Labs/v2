import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import bat from "./bi_battery.png"
import PagerView from 'react-native-pager-view';
const EndurOne = () => {
  return (
    <View style = {styles.box}>
      <View style = {styles.scroll}>
        <Text style = {styles.title}>ENDURANT</Text>
        <Text style = {styles.seeall}>See all → </Text>
        <View style = {styles.con1}>
          <Image style ={{transform:[{scale:.4}],marginHorizontal:"-18%"}} source = {bat} />
          <Text style = {styles.percent}>80%</Text>
        </View>
        <View style = {styles.barCon}>
          <View style = {styles.barFill}/>
        </View>
      </View>
    </View>
  )
}

export default EndurOne

const styles = StyleSheet.create({
    box:{
        width:"90%",
        height:"35%",
        borderRadius:30,
        borderWidth:3,
        borderColor:"rgba(255, 255, 255, 0.08)",
        backgroundColor:"rgba(196, 196, 196, 0.03)",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
      },
      title:{
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
        left:"75%",
      },
      con1:{
        alignItems:"center",
        flexDirection:"row",
        alignSelf:"flex-start",
        marginLeft:"7%",
        height:"20%",
        marginTop:"5%"
      },
      percent:{
        fontFamily: "Lexend-Bold",
        color:"rgba(255, 255, 255, 0.25)",
        fontSize:35
      },
      barCon:{
        borderWidth:3,
        borderRadius:30,
        borderColor:"rgba(255, 255, 255, 0.25)",
        width:"85%",
        height:"10%",
        marginTop:"5%",
        justifyContent:"center",
        alignItems:"center",
      },
      barFill:{
        backgroundColor:"rgba(255, 255, 255, 0.25)",
        width:"85%",
        height:"60%",
        alignSelf:"flex-start",
        marginLeft:"2%",
        borderRadius:30,
      },
      scroll:{
        borderWidth:1,
        width:"100%",
        height:"100%",
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",
      },
})