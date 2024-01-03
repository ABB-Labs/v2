import React, { useContext, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import NavBar from '../components/nav/NavBar';
import { UserContext } from '../UserContext';
import { firestore,auth } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
const images = {
  exercise3D: require('../assets/images/exercise-3d.png'),
  exerciseML: require('../assets/images/exercise-ml.png'),
  controlBackward: require('../assets/images/control-backward.png'),
  controlPause: require('../assets/images/control-pause.png'),
  controlForward: require('../assets/images/control-forward.png'),
};

export default function WorkoutScreen() {
  const [isMLMode, setMLMode] = useState(false);
  const toggleSwitch = () => setMLMode((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%' }}></View>
      <StatusBar style="light" />
      <NavBar styles={undefined} />
      <View style={styles.wrapper}>
        <Text style={styles.text}>Exercise 1 of 14</Text>
        <Text style={[styles.text, styles.textHero]}>Stretches</Text>
      </View>
      {/* 3D Coach/ML Coach */}
      {isMLMode ? (
        <View style={[styles.imageWrapper, { flexGrow: 28 }]}>
          <Image source={images.exerciseML} style={styles.image} />
        </View>
      ) : (
        <View style={styles.imageWrapper}>
          <Image
            source={images.exercise3D}
            style={[
              styles.image,
              { width: '150%', left: '-50%', transform: [{ translateX: 100 }] },
            ]}
          />
        </View>
      )}
      <View style={styles.controlsWrapper}>
        {/* ToggleButton */}
        <View style={styles.toggleButtonContainer}>
          <Text style={styles.text}>3D Coach</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#767577' }}
            thumbColor={isMLMode ? '#fff' : '#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isMLMode}
          />
          <Text style={styles.text}>ML Coach</Text>
        </View>
        {/* ActionButtons */}
        {!isMLMode && (
          <View style={styles.actionButtonContainer}>
            <Image
              style={styles.controlActionButton}
              source={images.controlBackward}
            />
            <Image
              style={styles.controlActionButton}
              source={images.controlPause}
            />
            <Image
              style={styles.controlActionButton}
              source={images.controlForward}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090909',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: {
    paddingHorizontal: 24,
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  textHero: {
    fontSize: 50,
    fontWeight: '700',
  },
  imageWrapper: {
    flexGrow: 4,
    position: 'relative',
    width: '100%',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  controlsWrapper: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    padding: 36,
    // backgroundColor: 'blue',
  },
  toggleButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  actionButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 48,
    // backgroundColor: 'yellow',
  },
  controlActionButton: {
    width: 36,
    aspectRatio: 1,
  },
});
