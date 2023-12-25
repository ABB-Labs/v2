import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
const CustomDrawer = (props) => {
  return (
    <>
    <SafeAreaView backgroundColor = "black"/>
    <View style = {styles.container}>
        <Text style = {styles.head}>Developer Navigation :) </Text>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
    </View>
    </>
  
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container:{
       flex:1,
       backgroundColor:'black',
    },
    head:{
        fontSize:20,
        fontWeight:"bold",
        alignSelf:"center",
        color:"lightgray",
        marginTop:'5%'
    }
})