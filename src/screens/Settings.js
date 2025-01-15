import { StyleSheet, Text, View,Image,SafeAreaView } from 'react-native'
import React from 'react'
import outline from "../assets/images/basil_settings-outline.png"
import SettingSwitch from '../components/Settings/SettingSwitch'
import NavBar from '../components/nav/NavBar'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from 'react-native-gesture-handler'
const Settings = () => {
  return (
     <SafeAreaView style = {styles.con}>
        <NavBar />
        <View style = {styles.titleCon}>
            <View style = {styles.titleLine}>
                <Image source={outline} style = {styles.outline} />
                <Text style = {styles.title}>Settings</Text>
            </View>
            <Text style = {[styles.header,{width:200}]}>Customize Your Experience</Text>
        </View>
        <ScrollView style = {{marginBottom: "15", width:"100%"}} >
          <Text style = {styles.header}>Notifications</Text>
          <SettingSwitch title = "Remind Me Daily"/>
          <Text style = {[styles.header,{marginTop:"5%"}]}>My 7 Minutes</Text>
          <View style = {styles.scrollCon}>
              <SettingSwitch title = "Jumping Jacks"/>
              <SettingSwitch title = "Wall Sits"/>
              <SettingSwitch title = "Push ups"/>
              <SettingSwitch title = "Abdominal Crunch"/>
              <SettingSwitch title = "Step Ups"/>
              <SettingSwitch title = "Squats"/>
              <SettingSwitch title = "Tricep Dips"/>
              <SettingSwitch title = "Plank"/>
              <SettingSwitch title = "Running In Place"/>
              <SettingSwitch title = "Lunges"/>
              <SettingSwitch title = "Push Ups With Rotation"/>
              <SettingSwitch title = "Side Planks"/>
           </View>
        </ScrollView>
    </SafeAreaView>
    

  )
}

export default Settings

const styles = StyleSheet.create({
    con:{
        flex:1,
        backgroundColor:'#090909',
        justifyContent:"space-between",
        alignItems:"center"
    },
    title:{
        color:"white",
        fontFamily:"Lexend-Light",
        fontSize:16,
        marginHorizontal:"1%"
    },
    titleLine:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        alignSelf:"flex-start",
        marginHorizontal:"5%",
        marginBottom:"2%"
    },
    titleCon:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"flex-start",
        marginTop:"2%",
        marginBottom:"5%"
    },
    outline:{

    },
    header:{
        color:"white",
        fontFamily:"Lexend-Medium",
        alignSelf:"flex-start",
        marginHorizontal:"5%",
        fontSize:22.5,
        marginBottom:"2%",
    },
    sec2:{
        marginHorizontal:"5%"
    },
    scrollCon:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
      },
})