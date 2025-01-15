import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Asset } from 'expo-asset';

const screens = [
  {
    image: require('../assets/images/onboarding-screen-1.png'),
    title: 'Project Simply',
    description: `By Xatalyst Labs`,
  },
  {
    image: require('../assets/images/onboarding-screen-2.png'),
    title: 'Real-time Feedback',
    description: `Our algorithms will catch the smallest mistakes your coach misses and correct them before they become habits.`,
  },
  {
    image: require('../assets/images/onboarding-screen-3.png'),
    title: 'Powered By AI',
    description: `Using the same formulas which guide spaceships, our algorithms will catch the smallest mistakes your coach misses and correct them before they become habits.`,
  },
  {
    image: require('../assets/images/onboarding-screen-4.png'),
    title: 'Have Fun',
    description: `Invite your friends, compete together, earn achievements, and have fun while staying healthy.`,
  },
];

export default function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [imageAssets, setImageAssets] = useState([]);

  const isFirstScreen = currentScreen === 0; // Check if it's the first screen
  const isLastScreen = currentScreen === screens.length - 1;
  
  useEffect(() => {
    const loadImages = async () => {
      const assets = screens.map((screen) => {
        return Asset.fromModule(screen.image).downloadAsync();
      });
      await Promise.all(assets);
      setImageAssets(assets);
    };
    loadImages();
  }, []);

  const handleTap = () => {
    if (isLastScreen) {
      // Reset the current screen if it's the last screen
      setCurrentScreen(0);
    } else {
      // Increment the current screen
      setCurrentScreen(currentScreen + 1);
    }
  };

  return (
    <>
      <Image source={screens[currentScreen].image} style={styles.image} />
      <TouchableWithoutFeedback onPress={handleTap}>
        <View style={styles.container}>
          <StatusBar hidden />
          <View
            style={{ flex: 1, alignItems: 'center' }}
          >
            <View style={{ width: '70%', position: 'absolute', top: (Dimensions.get('screen').height-75)*0.7 }}>
              <Text
                style={[
                  styles.text,
                  styles.titleText,
                  isFirstScreen ? { fontSize: 40 } : { fontSize: 24 },
                ]}
              >
                {screens[currentScreen].title}
              </Text>
              <Text style={[styles.text, styles.bodyText]}>
                {screens[currentScreen].description}
              </Text>
            </View>
            <Text
              style={[
                styles.text,
                styles.ctaText,
                isLastScreen ? { opacity: 1 } : { opacity: 0.25 },
              ]}
            >
              {isLastScreen
                  ? 'Tap Anywhere To Get Started'
                  : 'Tap Anywhere To Continue'}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'absolute',
    backgroundColor: "#000"
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  titleText: {
    fontWeight: '600'
  },
  bodyText: {
    fontSize: 16,
    fontWeight: '300',
    marginHorizontal: 32,
    opacity: 0.75,
    marginTop: 15
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '700',
    position: 'absolute',
    bottom: 63
  },
});