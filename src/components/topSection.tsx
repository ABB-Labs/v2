import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import BurgerMenu from './BurgerMenu';

const TopSection = () => {
  // Get the current date
  const currentDate = new Date();
  const options = {
    weekday: 'long',
    month: 'short',
  };
  const formattedDate = formatDate(currentDate, options);

  // Function to format the day with a suffix
  function formatDate(date, options) {
    const day = date.getDate();
    const suffix = getDaySuffix(day);
    return `${date.toLocaleDateString(undefined, options)} ${day}${suffix}`;
  }

  // Function to get the day suffix
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }

  return (
    <View>
      <View style={styles.container}>

        <View style={styles.burgerMenu}>
          <BurgerMenu />
        </View>

        <View style={styles.userProfile}>
          <View style={styles.profileRing}>
            {/* User profile image */}
            <Image
              source={require('../assets/images/icon.png')}
              style={styles.profileImage}
            />
          </View>
        </View>

      </View>
      <View style={styles.welcomeBack}>
        <Text style={styles.dateText}>{formattedDate}</Text>
        <Text style={styles.welcomeText}>Welcome back!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 16, // Adjust horizontal padding
    paddingVertical: 16, // Adjust vertical padding
    paddingTop: 40,
  },
  burgerMenu: {
    // Add styles for the burger menu icon
  },
  userProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileRing: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 25,
    padding: 3,
  },
  profileImage: {
    backgroundColor: 'grey',
    width: 40, // Adjust the size of the profile picture
    height: 40, // Adjust the size of the profile picture
    borderRadius: 20, // Make sure it's half of the width/height to make it circular
  },
  welcomeBack: {
    alignItems: 'flex-start',
    backgroundColor: 'black',
    paddingLeft: 30,
    paddingTop: 20
  },
  welcomeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dateText: {
    color: 'white',
    fontSize: 14,
  },
});

export default TopSection;
