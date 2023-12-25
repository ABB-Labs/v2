import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import NavBar from '../components/nav/NavBar'
import { FontAwesome5,AntDesign,Feather } from '@expo/vector-icons'; 
import EndurOne from '../components/Achievements/EndurOne';
import EndurTwo from '../components/Achievements/EndurTwo';
import Locked from '../components/Achievements/Locked';
import { ScrollView } from 'react-native-gesture-handler';
import AchievementCard from '../components/AchievementCard';
const Achievements = () => {
  return (
    <SafeAreaView style = {styles.con}>
        <NavBar/>
        <View style = {[styles.titleCon,{marginBottom:"6%"}]}>
            <FontAwesome5 name="award" size={24} color="white" />
            <Text style = {styles.titleText}>Achievements</Text>
        </View>
        <ScrollView contentContainerStyle={{paddingBottom:"150%"}} style = {styles.scroll}>
            <View style = {styles.titleCon}>
                <AntDesign name="checkcircleo" size={24} color="white" />
                <Text style = {styles.titleText}>Progress</Text>
            </View>
            <EndurOne/>
            <View style = {styles.titleCon}>
                <Feather name="unlock" size={24} color="white" />
                <Text style = {styles.titleText}>Unlocked</Text>
            </View>
            <EndurTwo/>
            <View style = {styles.titleCon}>
                <Feather name="lock" size={24} color="white" />
                <Text style = {styles.titleText}>Locked</Text>
            </View>
            <Locked/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Achievements

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#090909',
    },
    titleCon:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"flex-start",
        marginLeft:"5%",
        marginVertical:"5%"
    },
    titleText:{
        fontFamily:"Lexend-Light",
        color:"white",
        fontSize:18,
        marginHorizontal:"3%"
    },
    scroll:{
        width:"100%",
    },  
    scrollCon:{
        width:"100%",
        height:"60%",
        justifyContent:"center",
        alignItems:"center",
        flex:1,
      },
})