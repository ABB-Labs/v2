import React from 'react';
import { StyleSheet } from 'react-native';
import SectionB from '../components/sections/SectionB';
import SectionC from '../components/sections/SectionC';
import NavBar from '../components/nav/NavBar';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native";

export default function HomeScreen() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#090909',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <NavBar styles={{paddingHorizontal: "7.5%"}} />
      <SectionB />
      <SectionC />
    </SafeAreaView>
    );
};