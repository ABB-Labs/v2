import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import React ,{useContext,useEffect, useState} from 'react';
import background from "../assets/images/WorkoutSummary/background.png";
import Correctness from '../components/Summary/Correctness';
import Streak from '../components/Summary/Streak';
import Earned from '../components/Summary/Earned';
import { UserContext } from '../UserContext';
import { firestore,auth } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
const WorkoutSummary = () => {

  const {userId,setUserId} = useContext(UserContext)
  useEffect(() =>{
    if(userId)
    {
      logUserActivity(userId)
    }
  },[userId])

  async function logUserActivity(userId) 
  {
    try {
      //Get this user's document, aand extract the userData
      const ref = doc(firestore, 'accounts', userId);
      const userData = await getDoc(ref);

      //Get the current date, along with the user's last daay of activity
      const currentDate = new Date().toISOString().split('T')[0];
      const lastActivityDate = userData.data().lastActivity;
  
      // Check if a day has been missed
      if (lastActivityDate !== currentDate) {
        // If a day has been missed, reset the streak to 0
        const newData = {
          streak: 0,
          lastActivity: currentDate,
        };
        await updateDoc(ref, newData);
        console.log('Streak has been reset to 0');
      } else {
        // If no day has been missed, increment the streak
        const currentStreak = userData.data().streak;
        const newData = {
          streak: currentStreak + 1,
          lastActivity: currentDate,
        };
        await updateDoc(ref, newData);
      }
      console.log('Data has been written');
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
    <ImageBackground source={background} style = {styles.container}>
      <View style = {styles.sum}>
        <View style = {styles.date}>
          <Feather style={styles.sun} name="sun" size={26} color="white" />
          <Text style = {styles.sumTxt1}>Monday, Sept 16</Text>
        </View>
        <Text style = {styles.sumTxt2}>Workout Summary</Text>
      </View>
      <View style = {styles.scrollCon}></View>
        <ScrollView contentContainerStyle={{paddingBottom:"70%"}}  style = {styles.scroll} >
          <Earned/>
          <Streak/>
          <Correctness/>
        </ScrollView>
       <View/>
        <TouchableOpacity activeOpacity={0.75} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </>
  )
}

export default WorkoutSummary

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
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
    sum:{
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"flex-start",
      width:"63%",
      height:"10%",
      marginBottom:"5%",
      marginTop:'9%',

    },
    sumTxt1:{
      color:"white",
      fontFamily:"Lexend-Light",
      fontSize:16,
      marginLeft:"-35%"
    },
    sumTxt2:{
      color:"white",
      fontFamily:"Lexend-Medium",
      fontSize:24
    },
    sun:{
      marginRight:"40%"
    },
    date:{
      alignItems:"center",
      flexDirection:"row",
      marginBottom:"3%",
      width:"85%",
    },
    button:{
        width:330,
        height:69,
        backgroundColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,

        marginVertical:'5%'
    },
    buttonText:{
        fontSize:15,
        fontFamily:"Lexend-Regular"
    },
})